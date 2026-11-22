# Food Canning Recipe Builder

Enables the special crafting table recipe for canned food. Food recognition and result components are computed by the recipe class.

SpecialRecipeBuilder passes the special recipe factory to data generation output. Input checks and outputs are computed by the in-game recipe implementation; simply select the right factory during generation.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:canning_food/guide` to `data/example/recipe/canning_food/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.CanningFoodRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.SpecialRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class CanningFoodRecipes {
    public static void generate(RecipeOutput destination) {
        SpecialRecipeBuilder.special(CanningFoodRecipe::new)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "canning_food/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `SpecialCraftingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L15)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

[Food Canning fields, defaults, and recipe example](../packs/crafting/canning_food)
