# 用已知输入和成品绘制配方卡

自定义机器可以把服务端同步过来的预览快照直接传给 `MDRecipeComponent`。如果想做纯资源包就能用的静态示例，也可以从块扩展的属性里读取物品 ID。下面这个例子把 `<example:press_card input="minecraft:sand" output="minecraft:sandstone"/>` 注册成一张可见的示意卡。注意它只展示作者填好的两种物品，如果整合包改了配方，作者也得跟着更新这张卡。

在客户端初始化时调用一次 `PressRecipeView.register(modEventBus)`。如果你的同步层已经拿到了输入和成品，直接用两个 `ItemStack` 构造同一个视图就行；构造方法里通过 `copy()` 复制了物品栈，以免后续库存变化把预览改掉。

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDExtensionComponentFactory;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDRenderContext;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.MDRecipeComponent;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.recipe.MDStonecutterRecipeComponent;
import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.Identifier;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;

public final class PressRecipeView extends MDRecipeComponent {
    private final ItemStack input;
    private final ItemStack output;

    public PressRecipeView(ItemStack input, ItemStack output, boolean center) {
        super(MDStonecutterRecipeComponent.STONECUTTER_COMPONENT_TEXTURE, 128, 32, center);
        this.input = input.copy();
        this.output = output.copy();
    }

    public static void register(IEventBus bus) {
        DeferredRegister<MDExtensionComponentFactory> boxes =
            DeferredRegister.create(AgeratumRegistries.EXTENSION_COMPONENT_FACTORY_REGISTRY_KEY, "example");
        boxes.register("press_card", () -> ctx -> new PressRecipeView(
            item(ctx.params().getOrDefault("input", "")),
            item(ctx.params().getOrDefault("output", "")), true));
        boxes.register(bus);
    }

    private static ItemStack item(String text) {
        Identifier id = Identifier.tryParse(text);
        if (id == null) return ItemStack.EMPTY;
        return BuiltInRegistries.ITEM.get(id).map(holder -> new ItemStack(holder.value())).orElse(ItemStack.EMPTY);
    }

    @Override
    protected String layoutTextureKey() { return "example:press_card"; }

    @Override
    protected void extractRecipeRenderState(MDRenderContext context, float mouseX, float mouseY) {
        draw(context, input, 29, mouseX, mouseY);
        draw(context, output, 83, mouseX, mouseY);
    }

    private void draw(MDRenderContext context, ItemStack stack, int x, float mouseX, float mouseY) {
        if (stack.isEmpty()) return;
        context.graphics().item(stack, x, 8);
        context.graphics().itemDecorations(context.minecraft().font, stack, x, 8);
        extractTooltipRenderState(context, stack, x, 8, mouseX, mouseY);
    }
}
```

| 签名 | 用途与边界 |
| --- | --- |
| `MDRecipeComponent(Identifier texture, int width, int height, boolean center)` | 传默认底图、原图像素尺寸和对齐方式。该例沿用切石底图的 128×32 槽位布局。 |
| `layoutTextureKey(): String` | 返回主题中查找底图的组件键。附属使用自己的命名空间；换皮肤时沿用相同逻辑坐标。 |
| `extractRecipeRenderState(MDRenderContext, float mouseX, float mouseY)` | 底图已经提交，接着向 GuiGraphicsExtractor 提交物品、数量与提示。未注册或无效的物品 ID 在示例中产生空槽。 |
| `RecipeComponentFactory.create(type, function)`、`create(function, types...)` | 若调用方能提供实际配方，使用单类型或多类型工厂把它转换成视图。函数收到具体配方与居中标志，返回 MDRecipeComponent；可在自己的同步层直接调用工厂。 |
| `layoutTextures()`、`layoutColors()` | 工厂可以声明键、默认贴图及语义色。默认实现返回空映射，布局文件可为指定的组件键提供覆盖。 |
