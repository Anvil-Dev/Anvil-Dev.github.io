# Fast Cooking Recipe Builder

Processes food ingredients and cauldron fluid separately. Write the fluid predicate and consumption amount on the root object.

Checks the ingredient and result lists before submission. Both require at least one entry; an empty list triggers IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L397)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:fast_cooking/guide` to `data/example/recipe/fast_cooking/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.FastCookingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;

public final class FastCookingRecipes {
    public static void generate(RecipeOutput destination) {
        FastCookingRecipe.builder()
            .requires(Items.MUD)
            .result(Items.CLAY)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "fast_cooking/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `FastCookingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L44)

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

[View Fast Cooking fields, defaults & recipe example](../packs/machine/fast_cooking)
