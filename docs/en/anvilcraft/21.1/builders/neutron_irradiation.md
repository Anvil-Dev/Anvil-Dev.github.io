# Neutron Irradiation Recipe Builder

Defines item conversions for neutron irradiation and constrains the reaction environment via cauldron predicates.

The current Builder's validate method body is empty. Whether it triggers in-world depends on actual ingredients, results, and machine conditions. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L154)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:neutron_irradiation/guide` to `data/example/recipe/neutron_irradiation/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItemTags;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.NeutronIrradiationRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class NeutronIrradiationRecipes {
    public static void generate(RecipeOutput destination) {
        NeutronIrradiationRecipe.builder()
            .requires(ModItemTags.URANIUM_INGOTS)
            .result(ModItems.PLUTONIUM_NUGGET, 6)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "neutron_irradiation/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `NeutronIrradiationRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L18)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `EMPTY_PREDICATE` | Cauldron fluid matching condition |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step |
| `chance` | Number | Optional, default `1.0f` | Trigger probability |
| `ignited` | Boolean | Optional, default `false` | Match ignited state |

[View Neutron Irradiation fields, defaults & recipe example](../packs/machine/neutron_irradiation)
