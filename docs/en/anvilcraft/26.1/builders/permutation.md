# Frost Metal Permutation Recipe Builder

Routes the same base item to different smithing outputs using multiple material-and-result options.

Base input must contain items, and at least one material-and-result combination must be added via options. Missing input or empty options are rejected by validate. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L184)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:permutation/guide` to `data/example/recipe/permutation/guide.json`.

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.ItemIngredientPredicate;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.frost.CustomFrostMaterialPredicate;
import dev.dubhe.anvilcraft.recipe.frost.PermutationRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;

public final class PermutationRecipes {
    public static void generate(RecipeOutput destination) {
        PermutationRecipe.builder()
            .input(ModItems.SILENCE_AMULET, ModItems.ARMADILLO_AMULET, ModItems.CAT_AMULET, ModItems.DOG_AMULET)
            .options(
                CustomFrostMaterialPredicate.of(ItemIngredientPredicate.of(Items.CAKE).withCount(1).build()),
                ModItems.SILENCE_AMULET,
                ModItems.ARMADILLO_AMULET,
                ModItems.CAT_AMULET,
                ModItems.DOG_AMULET
            )
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "permutation/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `PermutationRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L78)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `template` | Item ingredient predicate | Optional, default `PermutationRecipe.DEFAULT_TEMPLATE` | Smithing template predicate |
| `input` | Item ingredient predicate | Required | Input entity to match |
| `options` | `FrostSmithingOption.CODEC` array | Required | Material-to-result options |
| `material` | `IFrostMaterialPredicate.CODEC` | Required | Smithing material predicate |
| `result` | `RecipeResult.CODEC` | Required | Result used after recipe completion |

[Frost Metal Permutation fields, defaults, and recipe example](../packs/crafting/permutation)
