# 配方标签与当前查找边界

`<ageratum:recipe id="minecraft:iron_ingot_from_smelting_iron_ore"/>` 可以被解析。打开手册时，代理先查是否已有组件；首次提取状态时组件为空，而从世界取得配方、选择工厂的调用尚未实现。因此即使 ID 正确、工厂已注册，当前版本也可能只保留空占位。要交付可见的预览，可用[自定义配方卡](factory)直接传入客户端已知的展示数据。

若附属已有一种已同步到客户端的配方类型，下面的诊断函数检查的是**是否注册了支持该类型的视图工厂**。它不需要从世界查找配方。在客户端注册完成后传入已有的 `RecipeType` 即可。

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.minecraft.world.item.crafting.RecipeType;

public final class RecipeViewProbe {
    public static boolean hasView(RecipeType<?> type) {
        for (var factory : AgeratumRegistries.RECIPE_COMPONENT_FACTORY_REGISTRY) {
            if (factory.type().contains(type)) return true;
        }
        return false;
    }
}
```

| 属性或入口 | 类型、时机与边界 |
| --- | --- |
| `id` | 必填字符串，按 `Identifier.parse` 解析。建议写完整注册名，遗漏、非法字符均可能导致解析异常。 |
| `center` | 可选字符串，缺省为 true。只有值与小写 `"true"` 相同才启用居中。 |
| `MDRecipeComponent.parse(MDExtensionContext): MDComponent` | 创建只持有配方 ID 和对齐方式的代理。 |
| `RecipeComponentFactory.type()`、`create(recipe, center)` | 声明支持的配方类型，从调用方提供的配方对象创建视图。内置工厂列出工作台、锻造、切石及四种烹饪类型，个别内置构造函数也仍保留空材料或结果。 |
| `getPreferredWidth / getHeight` | 代理尚无真实组件时使用空文本占位尺寸。修改背景贴图不能补齐客户端所缺的配方对象。 |

[当前分支的配方代理实现](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java)
