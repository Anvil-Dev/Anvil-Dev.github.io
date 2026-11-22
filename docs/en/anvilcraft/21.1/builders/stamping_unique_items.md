# Unique Item Stamping Recipe Builder

Provides candidate outputs for unique-item stamping behavior. Outputs use the weighted item stack format.

Requires 1 to 9 distinct-item ingredient entries and a non-empty result list. Out-of-range entry counts or empty results are rejected. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L208)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:stamping_unique_items/guide` to `data/example/recipe/stamping_unique_items/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItemTags;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.StampingUniqueItemsRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class StampingUniqueItemsRecipes {
    public static void generate(RecipeOutput destination) {
        StampingUniqueItemsRecipe.builderUnique()
            .requires(ModItemTags.TEMPLATES, 2)
            .result(ModItems.TWO_TO_ONE_SMITHING_TEMPLATE)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "stamping_unique_items/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `StampingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L72)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `results` | Array of item stacks with individual probabilities | Required | Result list used for each output |
| `ingredients` | `Ingredient.CODEC` array | Required | List of ingredients participating in matching |

[View Unique Item Stamping fields, defaults & recipe example](../packs/impact/stamping_unique_items)
