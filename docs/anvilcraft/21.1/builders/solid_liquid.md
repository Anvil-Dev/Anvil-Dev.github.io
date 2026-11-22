# 固液加工的配方构建器

同一批次同时匹配固体和锅内流体。用 max_efficiency 限制单次并行加工倍率。

需要有效的大锅流体条件，还必须提供物品产物或流体变换。缺失时 save 的 validate 会抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L195)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:solid_liquid/guide`，文件位于 `data/example/recipe/solid_liquid/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModFluids;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.SolidLiquidRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class SolidLiquidRecipes {
    public static void generate(RecipeOutput destination) {
        SolidLiquidRecipe.builder()
            .cauldron(ModFluids.HONEY.get())
            .consume(1000)
            .result(Items.HONEY_BLOCK)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "solid_liquid/guide"));
    }
}
```

实现采用上游 `SolidLiquidRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SolidLiquidRecipeLoader.java#L104)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 必填 | 参与匹配的原料列表 |
| `results` | 带概率的物品栈数组 | 必填 | 各次输出使用的结果列表 |
| `max_efficiency` | 整数 | 可省略，默认 `2147483647` | 允许的最大加工倍率 |
| `fluid` | `FluidStackPredicate.CODEC` | 可省略，默认 `EMPTY_PREDICATE` | 炼药锅的流体匹配条件 |
| `consume` | 整数 | 可省略，默认 `0` | 本次工序的消耗设置 |
| `transform` | `TRANSFORMS_CODEC` | 可省略，默认 `[]` | 工序结束时的流体变化 |
| `chance` | 数值 | 可省略，默认 `1.0f` | 触发概率 |
| `ignited` | 布尔值 | 可省略，默认 `false` | 匹配点燃状态 |

[查看 固液加工字段、默认值与配方示例](../packs/machine/solid_liquid)
