# Block Squeezing Recipe Builder

Filters the pressed material by block state and describes the fluid transformation inside the cauldron in the same recipe.

The current Builder's validate method body is empty. Configure matchable ingredients and outputs, and check fluid and cauldron conditions via the field reference page. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SqueezingRecipe.java#L384)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:squeezing/guide` to `data/example/recipe/squeezing/guide.json`.

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

Implementation uses an actual recipe chain from upstream `SqueezingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SqueezingRecipeLoader.java#L27)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Block state predicate | Required | Single ingredient to match |
| `result` | Block state with a probability | Required | Result used after recipe completion |
| `anvil` | `HasAnvil.CODEC` | Optional, default `HasAnvil.DEFAULT` | Anvil condition participating in collision or pressing |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `EMPTY_PREDICATE` | Cauldron fluid matching condition |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step |
| `chance` | Number | Optional, default `1.0f` | Trigger probability |
| `ignited` | Boolean | Optional, default `false` | Match ignited state |

[View Block Squeezing fields, defaults & recipe example](../packs/impact/squeezing)
