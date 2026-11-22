# Stamping Distinct Items Recipe Builder

Ingredient predicates match distinct dropped items. If the stamping platform has a higher-priority behavior, the recipe defers to it.

The ingredient and result lists each require at least one entry. An empty list throws `IllegalArgumentException`. The recipe matches distinct ingredients and is skipped when the stamping platform sets `DEFER_TO_PLATFORM_BEHAVIOR`. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L397)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:stamping_diff/guide` to `data/example/recipe/stamping_diff/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItemTags;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.StampingDiffRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;

public final class StampingDiffRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> items) {
        StampingDiffRecipe.builder()
            .requires(items, ModItemTags.TEMPLATES, 2)
            .result(ModItems.TWO_TO_ONE_SMITHING_TEMPLATE)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "stamping_diff/guide")));
    }
}
```

The example follows a recipe from `StampingRecipeLoader.init`. The caller supplies `HolderGetter<Item> items` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L80)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output |

[Stamping Distinct Items fields, defaults, and recipe example](../packs/impact/stamping_diff)
