# 多方块转换的配方构建器

分别描述输入与输出结构。刷怪笼数据迁移还需给出源、目标相对坐标。

保存时会比较输入和输出结构序列化后的 grid.length。长度不同会在 validate 中抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L467)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:multiblock_conversion/guide`，文件位于 `data/example/recipe/multiblock_conversion/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.block.LargeCauldronBlock;
import dev.dubhe.anvilcraft.block.state.Cube3x3PartHalf;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.multiblock.BlockPredicateWithState;
import dev.dubhe.anvilcraft.recipe.multiblock.MultiblockConversionRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class MultiblockConversionRecipes {
    public static void generate(RecipeOutput destination) {
        MultiblockConversionRecipe.builder()
            .inputLayer("AAA", "AAA", "AAA")
            .inputLayer("ABA", "B B", "ABA")
            .inputLayer("ABA", "B B", "ABA")
            .inputSymbol('A', ModBlocks.CUT_HEAVY_IRON_BLOCK)
            .inputSymbol('B', ModBlocks.TEMPERING_GLASS)
            .outputLayer("ABC", "DEF", "GHI")
            .outputLayer("JKL", "MNO", "PQR")
            .outputLayer("STU", "VWX", "YZ[")
            .outputSymbol('A', largeCauldronPart(Cube3x3PartHalf.BOTTOM_WN))
            .outputSymbol('B', largeCauldronPart(Cube3x3PartHalf.BOTTOM_N))
            .outputSymbol('C', largeCauldronPart(Cube3x3PartHalf.BOTTOM_EN))
            .outputSymbol('D', largeCauldronPart(Cube3x3PartHalf.BOTTOM_W))
            .outputSymbol('E', largeCauldronPart(Cube3x3PartHalf.BOTTOM_CENTER))
            .outputSymbol('F', largeCauldronPart(Cube3x3PartHalf.BOTTOM_E))
            .outputSymbol('G', largeCauldronPart(Cube3x3PartHalf.BOTTOM_WS))
            .outputSymbol('H', largeCauldronPart(Cube3x3PartHalf.BOTTOM_S))
            .outputSymbol('I', largeCauldronPart(Cube3x3PartHalf.BOTTOM_ES))
            .outputSymbol('J', largeCauldronPart(Cube3x3PartHalf.MID_WN))
            .outputSymbol('K', largeCauldronPart(Cube3x3PartHalf.MID_N))
            .outputSymbol('L', largeCauldronPart(Cube3x3PartHalf.MID_EN))
            .outputSymbol('M', largeCauldronPart(Cube3x3PartHalf.MID_W))
            .outputSymbol('N', largeCauldronPart(Cube3x3PartHalf.MID_CENTER))
            .outputSymbol('O', largeCauldronPart(Cube3x3PartHalf.MID_E))
            .outputSymbol('P', largeCauldronPart(Cube3x3PartHalf.MID_WS))
            .outputSymbol('Q', largeCauldronPart(Cube3x3PartHalf.MID_S))
            .outputSymbol('R', largeCauldronPart(Cube3x3PartHalf.MID_ES))
            .outputSymbol('S', largeCauldronPart(Cube3x3PartHalf.TOP_WN))
            .outputSymbol('T', largeCauldronPart(Cube3x3PartHalf.TOP_N))
            .outputSymbol('U', largeCauldronPart(Cube3x3PartHalf.TOP_EN))
            .outputSymbol('V', largeCauldronPart(Cube3x3PartHalf.TOP_W))
            .outputSymbol('W', largeCauldronPart(Cube3x3PartHalf.TOP_CENTER))
            .outputSymbol('X', largeCauldronPart(Cube3x3PartHalf.TOP_E))
            .outputSymbol('Y', largeCauldronPart(Cube3x3PartHalf.TOP_WS))
            .outputSymbol('Z', largeCauldronPart(Cube3x3PartHalf.TOP_S))
            .outputSymbol('[', largeCauldronPart(Cube3x3PartHalf.TOP_ES))
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "multiblock_conversion/guide")));
    }

    private static BlockPredicateWithState largeCauldronPart(Cube3x3PartHalf part) {
        return BlockPredicateWithState.of(ModBlocks.LARGE_CAULDRON)
            .hasState(LargeCauldronBlock.HALF, part);
    }
}
```

实现采用上游 `MultiBlockConversionRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L553)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputPattern` | `MultiblockUtil.DEFINITION_CODEC` | 必填 | 输入结构 |
| `outputPattern` | `MultiblockUtil.DEFINITION_CODEC` | 必填 | 输出结构 |
| `modifySpawnerAction` | `ModifySpawnerAction.CODEC` | 可省略 | 迁移刷怪笼的相对位置 |
| `fromPos` | 三整数坐标 | 必填 | 源刷怪笼相对坐标 |
| `toPos` | 三整数坐标 | 必填 | 目标刷怪笼相对坐标 |

[查看 多方块转换字段、默认值与配方示例](../packs/structures/multiblock_conversion) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-multiblock-2#multiblockconversionrecipe-builder)
