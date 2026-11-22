# Fluid Mixing Recipe Builder

Defines fluid ingredients with amounts, plus item or fluid results, for the mixer.

Empty stacks are not allowed in item or fluid result lists. When consumeMaximum is enabled, only fluid outputs are allowed and at least one fluid result is required. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L310)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:fluid_mixing/guide` to `data/example/recipe/fluid_mixing/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.FluidMixingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.material.Fluids;

public final class FluidMixingRecipes {
    public static void generate(RecipeOutput destination) {
        FluidMixingRecipe.builder()
            .requires(Fluids.WATER, 1000)
            .requires(Fluids.LAVA, 1000)
            .result(Items.OBSIDIAN, 1)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "fluid_mixing/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `FluidMixingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L10)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Item ingredient predicate array | Required | List of ingredients participating in matching |
| `results` | `TransformResult.CODEC` array | Optional, default `List.<ItemStack>of()` | Result list used for each output |
| `fluid_results` | Fluid stack array | Optional, default `List.<FluidStack>of()` | Fluid outputs |
| `consume_maximum` | Boolean | Optional, default `false` | Consume as much available ingredient as possible |

[View Fluid Mixing fields, defaults & recipe example](../packs/machine/fluid_mixing)
