# Time Warp Recipe Builder

Beyond inputs and outputs, `catalysts` can restrict catalytic materials.

Set at least one of the ingredient list or cauldron fluid condition. Omitting both throws IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/TimeWarpRecipe.java#L435)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:time_warp/guide` to `data/example/recipe/time_warp/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.TimeWarpRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class TimeWarpRecipes {
    public static void generate(RecipeOutput destination) {
        TimeWarpRecipe.builder()
            .fluid(ModBlocks.MELT_GEM_CAULDRON.get())
            .consume(1000)
            .result(ModBlocks.CHROMATIC_STONE)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "time_warp/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `TimeWarpRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L84)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output |
| `catalysts` | Array of item ingredient predicates | Optional, default `[]` | Catalysts required by the step |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `EMPTY_PREDICATE` | Cauldron fluid matching condition |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step |
| `chance` | Number | Optional, default `1.0f` | Trigger probability |
| `ignited` | Boolean | Optional, default `false` | Match ignited state |
| `heat` | `HeatData.CODEC` array | Optional, default `[]` | Heat effect |
| `distance` | `Distance.CODEC` | Optional, default `Distance.DEFAULT` | Heat action range |

[View Time Warp fields, defaults & recipe example](../packs/machine/time_warp)
