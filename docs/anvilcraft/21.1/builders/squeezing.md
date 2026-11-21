# 方块榨取的配方构建器

用方块状态筛选受压材料，并在同一份配方描述炼药锅内的流体变化。

当前 Builder 的 validate 方法体为空。为配方配置能匹配的原料和输出，并通过字段页核对流体和大锅条件。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L384)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:squeezing/guide`，文件位于 `data/example/recipe/squeezing/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.SqueezingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Blocks;

public final class SqueezingRecipes {
    public static void generate(RecipeOutput destination) {
        SqueezingRecipe.builder()
            .requires(Blocks.SCULK)
            .result(Blocks.AIR)
            .transform(ModBlocks.EXP_FLUID_CAULDRON.get(), 250)
            .chance(0.4f)
            .frostAnvil()
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "squeezing/guide"));
    }
}
```

实现采用上游 `SqueezingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L27)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredient` | 方块状态谓词 | 必填 | 单个待匹配的原料 |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 |
| `anvil` | `HasAnvil.CODEC` | 可省略，默认 `HasAnvil.DEFAULT` | 参与碰撞或压制的铁砧条件 |
| `fluid` | `FluidStackPredicate.CODEC` | 可省略，默认 `EMPTY_PREDICATE` | 炼药锅的流体匹配条件 |
| `consume` | 整数 | 可省略，默认 `0` | 本次工序的消耗设置 |
| `transform` | `TRANSFORMS_CODEC` | 可省略，默认 `[]` | 工序结束时的流体变化 |
| `chance` | 数值 | 可省略，默认 `1.0f` | 触发概率 |
| `ignited` | 布尔值 | 可省略，默认 `false` | 匹配点燃状态 |

[查看 方块榨取字段、默认值与配方示例](../packs/impact/squeezing) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-wrap-3#squeezingrecipe-builder)
