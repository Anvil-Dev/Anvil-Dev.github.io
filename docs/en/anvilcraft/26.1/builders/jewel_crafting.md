# Jewel Crafting Recipe Builder

Lists materials and results for jewel crafting table recipes, optionally disabling the default Curse of Vanishing on the output.

Supply 1 to 256 ingredients, with at most four groups after combining identical ingredients. Exceeding either limit throws `IllegalArgumentException` in the constructor. Calling `getResult` without setting a result throws `IllegalStateException`. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L192)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:jewel_crafting/guide` to `data/example/recipe/jewel_crafting/guide.json`.

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.registrum.providers.generators.RegistrumRecipeProvider;
import dev.dubhe.anvilcraft.recipe.JewelCraftingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;

public final class JewelCraftingRecipes {
    public static void generate(RecipeOutput destination, RegistrumRecipeProvider provider) {
        JewelCraftingRecipe.builder(provider.getItems())
            .requires(Items.POLISHED_TUFF)
            .requires(Items.COPPER_INGOT)
            .result(Items.TRIAL_KEY)
            .hasVanishingCurse(false)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "jewel_crafting/guide")));
    }
}
```

The example follows a recipe from `JewelCraftingRecipeLoader.init`. The caller supplies `RegistrumRecipeProvider provider` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L28)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `neoforge:conditions` | Load condition array | Optional, default `[]` | Condition list evaluated by NeoForge on load |
| `ingredients` | Array of ingredient IDs, tags, or valid ingredient expressions | Required | List of ingredients participating in matching |
| `result` | Item stack template object | Required | Result used after recipe completion |
| `has_vanishing_curse` | Boolean | Optional, default `true` | Whether the output carries Curse of Vanishing |

[Jewel Crafting fields, defaults, and recipe example](../packs/crafting/jewel_crafting)
