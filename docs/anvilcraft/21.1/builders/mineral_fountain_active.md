# 主动矿物涌泉的配方构建器

除了维度、高度和输出，主动配方可用 around 要求周边存在指定数量的方块。

toBlock 必填。构建时缺少它会抛 IllegalStateException，走 save 的前置 validate 则抛 IllegalArgumentException。周边方块数量通过 AroundRequirement 提供。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L225)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:mineral_fountain_active/guide`，文件位于 `data/example/recipe/mineral_fountain_active/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.BlockStatePredicate;
import dev.anvilcraft.lib.v2.util.predicate.ChanceBlockState;
import dev.dubhe.anvilcraft.api.heat.HeatTier;
import dev.dubhe.anvilcraft.recipe.mineral.AroundRequirement;
import dev.dubhe.anvilcraft.recipe.mineral.MineralFountainActiveRecipe;
import dev.dubhe.anvilcraft.recipe.mineral.MineralFountainHeat;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.material.Fluids;
import net.neoforged.neoforge.fluids.FluidStack;
import net.neoforged.neoforge.fluids.FluidType;

public final class MineralFountainActiveRecipes {
    public static void generate(RecipeOutput destination) {
        MineralFountainActiveRecipe.builder()
            .fromBlock(from(Blocks.AIR))
            .require(new AroundRequirement(liquidSource(Blocks.LAVA), 4))
            .toBlock(result(Blocks.LAVA))
            .toFluid(new FluidStack(Fluids.LAVA, FluidType.BUCKET_VOLUME))
            .heat(new MineralFountainHeat(HeatTier.REDHOT, 20, 1))
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "mineral_fountain_active/guide"));
    }

    private static BlockStatePredicate from(Block block) {
        return BlockStatePredicate.builder().of(block).build();
    }

    private static BlockStatePredicate liquidSource(Block block) {
        return BlockStatePredicate.builder()
            .of(block)
            .with(BlockStateProperties.LEVEL, 0)
            .build();
    }

    private static ChanceBlockState result(Block block) {
        return new ChanceBlockState(block.defaultBlockState(), 1.0f);
    }
}
```

实现采用上游 `MineralFountainRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L41)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `dimension` | 资源 ID | 可省略 | 维度资源 ID |
| `height` | `HeightRange.CODEC` | 可省略，默认 `min = 0，max = 8` | 涌泉高度条件 |
| `priority` | 整数 | 可省略，默认 `0` | 多个候选之间的优先级 |
| `weight` | 整数 | 可省略，默认 `1` | 在候选集中抽取的相对权重 |
| `around` | `AroundRequirement.CODEC`数组 | 可省略，默认 `[]` | 附近方块及数量的要求 |
| `from_block` | 方块状态谓词 | 可省略，默认 `空气方块` | 可原地转换的方块条件 |
| `to_block` | 带概率的方块状态 | 必填 | 生成的方块 |
| `heat` | `MineralFountainHeat.CODEC` | 可省略 | 热量效果 |
| `to_fluid` | 流体栈对象 | 可省略 | 伴随配方产生的流体栈 |
| `block` | 方块状态谓词 | 必填 | 目标方块的匹配条件 |
| `count` | 整数 | 可省略，默认 `1` | 数量 |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | 必填 | 热量等级 |
| `duration` | 整数 | 可省略，默认 `20` | 持续时间 |
| `count` | 整数 | 可省略，默认 `1` | 数量 |
| `min` | 整数 | 可省略，默认 `0` | 下限 |
| `max` | 整数 | 可省略，默认 `8` | 上限 |

[查看 主动矿物涌泉字段、默认值与配方示例](../packs/fountain/mineral_fountain_active)
