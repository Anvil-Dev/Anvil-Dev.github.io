# 从标签定位配方

想让玩家在手册里看到当前世界已加载的配方，把 `<ageratum:recipe>` 标签单独放一行，`id` 填配方注册名即可。下面这行会画出原版熔炉用铁矿石烧制铁锭的配方。

```markdown
<ageratum:recipe id="minecraft:iron_ingot_from_smelting_iron_ore" center="true"/>
```

调试缺失的图片时，先在客户端世界中检查配方是否同步，再检查是否有匹配的绘制工厂。此检查适合客户端命令或界面诊断，不修改配方。

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.minecraft.client.Minecraft;
import net.minecraft.resources.ResourceLocation;

public final class RecipeViewProbe {
    public static String describe(ResourceLocation id) {
        var level = Minecraft.getInstance().level;
        if (level == null) return "尚未进入世界";
        var holder = level.getRecipeManager().byKey(id);
        if (holder.isEmpty()) return "客户端没有配方 " + id;
        var type = holder.get().value().getType();
        for (var factory : AgeratumRegistries.RECIPE_COMPONENT_FACTORY_REGISTRY) {
            if (factory.type().contains(type)) return "找到绘制工厂";
        }
        return "已取得配方，但该类型没有绘制工厂";
    }
}
```

| 属性或入口 | 类型、时机与边界 |
| --- | --- |
| `id` | 必填字符串，完整资源名。内部直接调用 `ResourceLocation.parse`，漏填或非法字符可能在解析阶段抛错。 |
| `center` | 可选字符串，缺省 `true`。实现只把小写 `"true"` 作为居中，其他值关闭。 |
| `MDRecipeComponent.parse(MDExtensionContext): MDComponent` | 文档预解析时产生一个代理，只存 ID 与对齐选项。实际打开世界后才从客户端 RecipeManager 取配方。 |
| `RecipeComponentFactory.type()` | 工厂可支持多种类型，匹配时取注册表迭代中的首个命中项。内置处理工作台、锻造、切石、熔炼、烟熏、高炉和营火。 |
| `getPreferredWidth / getHeight` | 代理取得实际组件前，尺寸来自空文本占位；找到工厂的首次绘制只创建组件，后续帧才委托给它。 |
