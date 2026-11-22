# Multiblock Conversion Recipe Builder

Describes the input and output structures separately. Spawner data migration also requires source and target relative coordinates.

On save, compares the serialized grid.length of input and output structures. Different lengths throw IllegalArgumentException in validate. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L467)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:multiblock_conversion/guide` to `data/example/recipe/multiblock_conversion/guide.json`.

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

Implementation uses an actual recipe chain from upstream `MultiBlockConversionRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L553)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputPattern` | `MultiblockUtil.DEFINITION_CODEC` | Required | Input structure |
| `outputPattern` | `MultiblockUtil.DEFINITION_CODEC` | Required | Output structure |
| `modifySpawnerAction` | `ModifySpawnerAction.CODEC` | Optional | Relative positions for migrating spawners |
| `fromPos` | 3-integer coordinates | Required | Source spawner relative coordinates |
| `toPos` | 3-integer coordinates | Required | Target spawner relative coordinates |

[View Multiblock Conversion fields, defaults & recipe example](../packs/structures/multiblock_conversion)
