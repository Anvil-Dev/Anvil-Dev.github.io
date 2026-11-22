# 多方块转换的配方构建器

分别描述输入与输出结构。刷怪笼数据迁移还需给出源、目标相对坐标。

保存时会比较输入和输出结构序列化后的 grid.length。长度不同会在 validate 中抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L446)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:multiblock_conversion/guide`，文件位于 `data/example/recipe/multiblock_conversion/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.BlockStatePredicate;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.multiblock.ModifySpawnerAction;
import dev.dubhe.anvilcraft.recipe.multiblock.MultiblockConversionRecipe;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;

public final class MultiblockConversionRecipes {
    public static void generate(RecipeOutput destination) {
        MultiblockConversionRecipe.builder()
            .inputLayer("ABA", "CDC", "ABA")
            .inputLayer("E E", " F ", "E E")
            .inputLayer("ABA", "C C", "ABA")
            .outputLayer("ABA", "C C", "ABA")
            .outputLayer("E E", " F ", "E E")
            .outputLayer("ABA", "C C", "ABA")
            .inputSymbol('A', ModBlocks.CURSED_GOLD_BLOCK)
            .outputSymbol('A', Blocks.SCULK)
            .inputSymbol('B', BlockStatePredicate.builder().of(Blocks.CHAIN)
                .with(BlockStateProperties.AXIS, Direction.Axis.X)
            )
            .outputSymbol('B', Blocks.COBWEB)
            .inputSymbol('C', BlockStatePredicate.builder().of(Blocks.CHAIN)
                .with(BlockStateProperties.AXIS, Direction.Axis.Z)
            )
            .outputSymbol('C', Blocks.COBWEB)
            .inputSymbol('D', Blocks.SOUL_FIRE)
            .inputSymbol('E', BlockStatePredicate.builder().of(Blocks.CHAIN)
                .with(BlockStateProperties.AXIS, Direction.Axis.Y)
            )
            .outputSymbol('E', Blocks.COBWEB)
            .inputSymbol('F', ModBlocks.RESENTFUL_AMBER_BLOCK)
            .outputSymbol('F', Blocks.SPAWNER)
            .modifySpawnerAction(new ModifySpawnerAction(
                new BlockPos(1, 1, 1),
                new BlockPos(1, 1, 1)))
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "multiblock_conversion/guide"));
    }
}
```

实现采用上游 `MultiBlockConversionRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L36)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputPattern` | `MultiblockDefinition.CODEC` | 必填 | 输入结构 |
| `outputPattern` | `MultiblockDefinition.CODEC` | 必填 | 输出结构 |
| `modifySpawnerAction` | `ModifySpawnerAction.CODEC` | 可省略 | 迁移刷怪笼的相对位置 |
| `fromPos` | 三整数坐标 | 必填 | 源刷怪笼相对坐标 |
| `toPos` | 三整数坐标 | 必填 | 目标刷怪笼相对坐标 |

[查看 多方块转换字段、默认值与配方示例](../packs/structures/multiblock_conversion)
