# 配方标签与当前查找边界

`<ageratum:recipe id="minecraft:iron_ingot_from_smelting_iron_ore"/>` 这类标签可以正常解析，但打开手册时，代理组件在首次提取状态时是空的，而“从世界里查配方、再挑对应工厂”的逻辑目前还没接上。所以就算 ID 没写错、工厂也注册好了，当前版本下它仍可能只留一个空占位。要想展示出真实的配方预览，请改用[自定义配方卡](factory)，由客户端直接传入要展示的数据。

如果你的附属模组已经有同步到客户端的配方类型，下面这个诊断函数可以用来检查**是否注册了支持该类型的视图工厂**。它不需要去世界里查配方，在客户端注册完成后直接传入 `RecipeType` 就行。

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
