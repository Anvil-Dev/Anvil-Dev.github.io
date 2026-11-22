# Item Compression Recipe Builder

Compresses dropped items into new items. When multiple recipes share materials, check priority and ingredient counts.

Checks the ingredient and result lists before submission. Both require at least one entry; an empty list triggers IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L456)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:item_compress/guide` to `data/example/recipe/item_compress/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.ItemCompressRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class ItemCompressRecipes {
    public static void generate(RecipeOutput destination) {
        ItemCompressRecipe.builder()
            .requires(Items.BAMBOO, 9)
            .result(Items.BAMBOO_BLOCK)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "item_compress/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `ItemCompressRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L70)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output |
| `priority` | Integer | Optional | Priority among multiple candidates |

[View Item Compression fields, defaults & recipe example](../packs/impact/item_compress)
