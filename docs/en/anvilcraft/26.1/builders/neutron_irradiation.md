# Neutron Irradiation Recipe Builder

Defines item conversions for neutron irradiation and constrains the reaction environment via cauldron predicates.

The current Builder's validate method body is empty. Whether it triggers in-world depends on actual ingredients, results, and machine conditions. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L163)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:neutron_irradiation/guide` to `data/example/recipe/neutron_irradiation/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItemTags;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.NeutronIrradiationRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;

public final class NeutronIrradiationRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> items) {
        NeutronIrradiationRecipe.builder()
            .requires(items, ModItemTags.URANIUM_INGOTS)
            .result(ModItems.PLUTONIUM_NUGGET, 6)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "neutron_irradiation/guide")));
    }
}
```

The example follows a recipe from `NeutronIrradiationRecipeLoader.init`. The caller supplies `HolderGetter<Item> items` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L21)

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
