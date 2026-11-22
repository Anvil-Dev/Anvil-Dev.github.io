# Jewel Crafting Recipe Builder

Lists materials and results for jewel crafting table recipes, optionally disabling the default Curse of Vanishing on the output.

The material list allows 1 to 256 entries, and an empty item stack cannot be the result. An empty list also triggers IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L225)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:jewel_crafting/guide` to `data/example/recipe/jewel_crafting/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.JewelCraftingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;

public final class JewelCraftingRecipes {
    public static void generate(RecipeOutput destination) {
        JewelCraftingRecipe.builder()
            .requires(Items.POLISHED_TUFF)
            .requires(Items.COPPER_INGOT)
            .result(new ItemStack(Items.TRIAL_KEY))
            .hasVanishingCurse(false)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "jewel_crafting/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `JewelCraftingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L29)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `neoforge:conditions` | Load condition array | Optional, default `[]` | Condition list evaluated by NeoForge on load |
| `result` | Item stack object | Required | Result used after recipe completion |
| `has_vanishing_curse` | Boolean | Optional, default `true` | Whether the output carries Curse of Vanishing |
| `ingredients` | `Ingredient.CODEC` array | Required | List of ingredients participating in matching |

[Jewel Crafting fields, defaults, and recipe example](../packs/crafting/jewel_crafting)
