# Multiblock Conversion Recipe Builder

Describes the input and output structures separately. Spawner data migration also requires source and target relative coordinates.

On save, compares the serialized grid.length of input and output structures. Different lengths throw IllegalArgumentException in validate. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockConversionRecipe.java#L446)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:multiblock_conversion/guide` to `data/example/recipe/multiblock_conversion/guide.json`.

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

Implementation uses an actual recipe chain from upstream `MultiBlockConversionRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockConversionRecipeLoader.java#L36)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputPattern` | `MultiblockDefinition.CODEC` | Required | Input structure |
| `outputPattern` | `MultiblockDefinition.CODEC` | Required | Output structure |
| `modifySpawnerAction` | `ModifySpawnerAction.CODEC` | Optional | Relative positions for migrating spawners |
| `fromPos` | 3-integer coordinates | Required | Source spawner relative coordinates |
| `toPos` | 3-integer coordinates | Required | Target spawner relative coordinates |

[View Multiblock Conversion fields, defaults & recipe example](../packs/structures/multiblock_conversion)
