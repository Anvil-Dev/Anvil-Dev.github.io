# Passive Mineral Fountain Recipe Builder

Configure candidate outputs for mineral fountains. Use priority and weight to handle multiple matches.

Set toBlock for the fallback output. Calling build without it throws IllegalStateException, and save's pre-check throws IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L180)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:mineral_fountain_passive/guide` to `data/example/recipe/mineral_fountain_passive/guide.json`.

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.ChanceBlockState;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.mineral.MineralFountainPassiveRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;

public final class MineralFountainPassiveRecipes {
    public static void generate(RecipeOutput destination) {
        MineralFountainPassiveRecipe.builder()
            .priority(-1)
            .toBlock(result(ModBlocks.CINERITE.get()))
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "mineral_fountain_passive/guide"));
    }

    private static ChanceBlockState result(Block block) {
        return new ChanceBlockState(block.defaultBlockState(), 1.0f);
    }
}
```

Implementation uses an actual recipe chain from upstream `MineralFountainRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L60)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `dimension` | Resource ID | Optional | Dimension resource ID |
| `height` | `HeightRange.CODEC` | Optional, default `min = 0, max = 8` | Fountain height condition |
| `priority` | Integer | Optional, default `0` | Priority among multiple candidates |
| `weight` | Integer | Optional, default `1` | Relative weight when sampling from candidates |
| `from_block` | Block state predicate | Optional, default `air` | Condition for blocks convertible in place |
| `to_block` | Block state with a probability | Required | Generated block |
| `heat` | `MineralFountainHeat.CODEC` | Optional | Heat effect |
| `to_fluid` | Fluid stack object | Optional | Fluid stack produced alongside the recipe |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | Required | Heat tier |
| `duration` | Integer | Optional, default `20` | Duration |
| `count` | Integer | Optional, default `1` | Count |
| `min` | Integer | Optional, default `0` | Lower bound |
| `max` | Integer | Optional, default `8` | Upper bound |

[View Passive Mineral Fountain fields, defaults & recipe example](../packs/fountain/mineral_fountain_passive)
