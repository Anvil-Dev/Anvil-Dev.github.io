# Fluid Mixing Recipe Builder

Defines fluid ingredients with amounts, plus item or fluid results, for the mixer.

Supply 2 to 4 inputs, with at most three item inputs and three fluid inputs, and 1 to 6 outputs. Validation rejects air, nonpositive item counts, and empty fluids. Enabling `consumeMaximum` allows only fluid outputs. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L340)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:fluid_mixing/guide` to `data/example/recipe/fluid_mixing/guide.json`.

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.registrum.providers.generators.RegistrumRecipeProvider;
import dev.dubhe.anvilcraft.recipe.FluidMixingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.material.Fluids;

public final class FluidMixingRecipes {
    public static void generate(RecipeOutput destination, RegistrumRecipeProvider provider) {
        FluidMixingRecipe.builder(provider.getRegistries().lookupOrThrow(Registries.FLUID))
            .requires(Fluids.WATER, 1000)
            .requires(Fluids.LAVA, 1000)
            .result(Items.OBSIDIAN, 1)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "fluid_mixing/guide")));
    }
}
```

The example follows a recipe from `FluidMixingRecipeLoader.init`. The caller supplies `RegistrumRecipeProvider provider` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L11)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Fluid ingredient with amount array | Required | List of ingredients participating in matching |
| `results` | Item stack array | Optional, default `[]` | Result list used for each output |
| `fluid_results` | Fluid stack array | Optional, default `[]` | Fluid outputs |
| `consume_maximum` | Boolean | Optional, default `false` | Consume as much available ingredient as possible |

[View Fluid Mixing fields, defaults & recipe example](../packs/machine/fluid_mixing)
