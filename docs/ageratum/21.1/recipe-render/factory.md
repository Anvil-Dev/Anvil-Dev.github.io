# 为自定义机器注册绘制工厂

已有一种“单输入、固定输出”的压制配方，现在需要在手册中绘制材料和成品。将已有 `RecipeType` 的注册持有者作为 supplier 传入下面的 `register`。工厂在注册阶段解析类型，真正的配方数据从当前世界传给视图。这里复用内置切石视图的底图，无需附带新纹理。

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDRenderContext;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.MDRecipeComponent;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.recipe.MDStonecutterRecipeComponent;
import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import dev.anvilcraft.resource.ageratum.util.RecipeUtil;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.RecipeType;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;
import java.util.function.Supplier;

public final class PressRecipeView extends MDRecipeComponent {
    private final Recipe<?> recipe;

    public PressRecipeView(Recipe<?> recipe, boolean center) {
        super(MDStonecutterRecipeComponent.STONECUTTER_COMPONENT_TEXTURE, 128, 32, center);
        this.recipe = recipe;
    }

    public static <R extends Recipe<?>> void register(IEventBus bus, Supplier<RecipeType<R>> type) {
        DeferredRegister<RecipeComponentFactory<?>> factories =
            DeferredRegister.create(AgeratumRegistries.RECIPE_COMPONENT_FACTORY_REGISTRY_KEY, "example");
        factories.register("press", () -> RecipeComponentFactory.create(type.get(), PressRecipeView::new));
        factories.register(bus);
    }

    @Override
    protected void renderRecipe(MDRenderContext context, float mouseX, float mouseY) {
        var level = context.minecraft().level;
        if (level == null || recipe.getIngredients().isEmpty()) return;
        ItemStack input = RecipeUtil.getDisplayItem(recipe.getIngredients().getFirst());
        draw(context, input, 29, mouseX, mouseY);
        draw(context, recipe.getResultItem(level.registryAccess()), 83, mouseX, mouseY);
    }

    private void draw(MDRenderContext context, ItemStack stack, int x, float mouseX, float mouseY) {
        if (stack.isEmpty()) return;
        context.graphics().renderItem(stack, x, 8);
        context.graphics().renderItemDecorations(context.minecraft().font, stack, x, 8);
        renderRecipeItem(context, stack, x, 8, mouseX, mouseY);
    }
}
```

| 签名 | 参数与返回约定 |
| --- | --- |
| `RecipeComponentFactory.create(type, function)` | 单一 `RecipeType<R>` 与二参数构造函数；后者接收真实的 R 实例和居中标志，返回配置好的视图。 |
| `RecipeComponentFactory.create(function, types...)` | 多个类型共用布局时使用。所有类型都要能交给同一构造函数；例如几个继承共同烹饪配方基类的处理流程。 |
| `MDRecipeComponent(imageLocation, width, height, center)` | 客户端底图路径、源图像素尺寸及对齐。基类负责背景与缩放，内容绘制使用局部坐标。 |
| `renderRecipe(context, mouseX, mouseY)` | 每帧绘制实际物品。材料有多个候选时 `RecipeUtil.getDisplayItem` 给出当前展示项。动态合成结果需自行定义预览逻辑。 |
| `renderRecipeItem(context, stack, x, y, mouseX, mouseY)` | 处理物品悬停提示并记录绑定的手册位置。此方法本身不会画出物品；显式调用图形上下文绘制图标和数量。 |
