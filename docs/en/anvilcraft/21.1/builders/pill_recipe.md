# Pill Crafting Recipe Builder

Enables dynamic crafting for pills. Input slots and outputs are determined at crafting time by the special recipe.

SpecialRecipeBuilder passes the special recipe factory to data generation output. Input checks and outputs are computed by the in-game recipe implementation; simply select the right factory during generation.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:pill_recipe/guide` to `data/example/recipe/pill_recipe/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.PillRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.SpecialRecipeBuilder;
import net.minecraft.resources.ResourceLocation;

public final class PillRecipeRecipes {
    public static void generate(RecipeOutput destination) {
        SpecialRecipeBuilder.special(PillRecipe::new)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "pill_recipe/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `SpecialCraftingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L17)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

[Pill Crafting fields, defaults, and recipe example](../packs/crafting/pill_recipe)
