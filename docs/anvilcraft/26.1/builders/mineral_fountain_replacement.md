# 矿物涌泉替换的配方构建器

在既有涌泉配方上指定替换对象和触发概率，适合按维度重定向产物。

必须设置要替换的目标方块 toBlock。维度使用对应注册键的位置，概率参数来自上游 replacement 的调用者。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L198)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:mineral_fountain_replacement/guide`，文件位于 `data/example/recipe/mineral_fountain_replacement/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.BlockStatePredicate;
import dev.anvilcraft.lib.v2.util.predicate.ChanceBlockState;
import dev.dubhe.anvilcraft.recipe.mineral.MineralFountainReplacementRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;

public final class MineralFountainReplacementRecipes {
    public static void generate(RecipeOutput destination, ResourceKey<Level> dimension, double chance, Block block) {
        MineralFountainReplacementRecipe.builder()
            .dimension(dimension.identifier())
            .fromBlock(from(Blocks.DEEPSLATE))
            .chance(chance)
            .toBlock(result(block))
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "mineral_fountain_replacement/guide")));
    }

    private static BlockStatePredicate from(Block block) {
        return BlockStatePredicate.builder().of(block).build();
    }

    private static ChanceBlockState result(Block block) {
        return new ChanceBlockState(block.defaultBlockState(), 1.0f);
    }
}
```

实现采用上游 `MineralFountainRecipeLoader.replacement` 中的一条实际配方链。其中 `ResourceKey<Level> dimension`、`double chance`、`Block block` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L104)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `dimension` | 资源 ID | 可省略 | 维度资源 ID |
| `height` | `HeightRange.CODEC` | 可省略，默认 `min = 0，max = 8` | 涌泉高度条件 |
| `replace` | 资源 ID数组 | 可省略，默认 `[]` | 允许替换的涌泉配方 ID |
| `priority` | 整数 | 可省略，默认 `0` | 多个候选之间的优先级 |
| `chance` | 数值 | 可省略，默认 `0.0` | 触发概率 |
| `from_block` | 方块状态谓词 | 可省略，默认 `空气方块` | 可原地转换的方块条件 |
| `to_block` | 带概率的方块状态 | 必填 | 生成的方块 |
| `heat` | `MineralFountainHeat.CODEC` | 可省略 | 热量效果 |
| `to_fluid` | 流体栈模板对象 | 可省略 | 伴随配方产生的流体栈 |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | 必填 | 热量等级 |
| `duration` | 整数 | 可省略，默认 `20` | 持续时间 |
| `count` | 整数 | 可省略，默认 `1` | 数量 |
| `min` | 整数 | 可省略，默认 `0` | 下限 |
| `max` | 整数 | 可省略，默认 `8` | 上限 |

[查看 矿物涌泉替换字段、默认值与配方示例](../packs/fountain/mineral_fountain_replacement)
