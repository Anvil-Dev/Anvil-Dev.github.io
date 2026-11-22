# 中子辐照的配方构建器

为中子辐照工序定义物品转换，并通过炼药锅谓词限制反应环境。

当前 Builder 的 validate 方法体为空。是否能在世界中触发还取决于实际原料、产物和设备条件。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L154)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:neutron_irradiation/guide`，文件位于 `data/example/recipe/neutron_irradiation/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItemTags;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.NeutronIrradiationRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class NeutronIrradiationRecipes {
    public static void generate(RecipeOutput destination) {
        NeutronIrradiationRecipe.builder()
            .requires(ModItemTags.URANIUM_INGOTS)
            .result(ModItems.PLUTONIUM_NUGGET, 6)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "neutron_irradiation/guide"));
    }
}
```

实现采用上游 `NeutronIrradiationRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L18)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 |
| `fluid` | `FluidStackPredicate.CODEC` | 可省略，默认 `EMPTY_PREDICATE` | 炼药锅的流体匹配条件 |
| `consume` | 整数 | 可省略，默认 `0` | 本次工序的消耗设置 |
| `transform` | `TRANSFORMS_CODEC` | 可省略，默认 `[]` | 工序结束时的流体变化 |
| `chance` | 数值 | 可省略，默认 `1.0f` | 触发概率 |
| `ignited` | 布尔值 | 可省略，默认 `false` | 匹配点燃状态 |

[查看 中子辐照字段、默认值与配方示例](../packs/machine/neutron_irradiation)
