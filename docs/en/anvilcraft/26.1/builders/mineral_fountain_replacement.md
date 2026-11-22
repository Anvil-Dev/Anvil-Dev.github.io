# Mineral Fountain Replacement Recipe Builder

Specify a replacement target and trigger chance on top of existing fountain recipes, suitable for redirecting outputs by dimension.

The target block toBlock must be set. Dimension uses the corresponding registry key location, and the chance parameter comes from the upstream replacement caller. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L198)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:mineral_fountain_replacement/guide` to `data/example/recipe/mineral_fountain_replacement/guide.json`.

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

The example follows a recipe from `MineralFountainRecipeLoader.replacement`. The caller supplies `ResourceKey<Level> dimension`, `double chance`, and `Block block` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L104)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `dimension` | Resource ID | Optional | Dimension resource ID |
| `height` | `HeightRange.CODEC` | Optional, default `min = 0, max = 8` | Fountain height condition |
| `replace` | Resource ID array | Optional, default `[]` | Fountain recipe IDs allowed to be replaced |
| `priority` | Integer | Optional, default `0` | Priority among multiple candidates |
| `chance` | Number | Optional, default `0.0` | Trigger probability |
| `from_block` | Block state predicate | Optional, default `air` | Condition for blocks convertible in place |
| `to_block` | Block state with a probability | Required | Generated block |
| `heat` | `MineralFountainHeat.CODEC` | Optional | Heat effect |
| `to_fluid` | Fluid stack template object | Optional | Fluid stack produced alongside the recipe |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | Required | Heat tier |
| `duration` | Integer | Optional, default `20` | Duration |
| `count` | Integer | Optional, default `1` | Count |
| `min` | Integer | Optional, default `0` | Lower bound |
| `max` | Integer | Optional, default `8` | Upper bound |

[View Mineral Fountain Replacement fields, defaults & recipe example](../packs/fountain/mineral_fountain_replacement)
