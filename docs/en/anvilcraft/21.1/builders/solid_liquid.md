# Solid-Liquid Processing Recipe Builder

Matches both solids and cauldron fluid in the same batch. Use max_efficiency to cap the single-batch parallel multiplier.

Requires a valid cauldron fluid condition and either an item result or fluid transform. Missing them throws IllegalArgumentException in save's validate. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SolidLiquidRecipe.java#L195)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:solid_liquid/guide` to `data/example/recipe/solid_liquid/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModFluids;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.SolidLiquidRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class SolidLiquidRecipes {
    public static void generate(RecipeOutput destination) {
        SolidLiquidRecipe.builder()
            .cauldron(ModFluids.HONEY.get())
            .consume(1000)
            .result(Items.HONEY_BLOCK)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "solid_liquid/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `SolidLiquidRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SolidLiquidRecipeLoader.java#L104)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Required | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Required | Result list used for each output |
| `max_efficiency` | Integer | Optional, default `2147483647` | Maximum allowed processing multiplier |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `EMPTY_PREDICATE` | Cauldron fluid matching condition |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step |
| `chance` | Number | Optional, default `1.0f` | Trigger probability |
| `ignited` | Boolean | Optional, default `false` | Match ignited state |

[View Solid-Liquid Processing fields, defaults & recipe example](../packs/machine/solid_liquid)
