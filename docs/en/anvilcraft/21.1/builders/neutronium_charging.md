# Neutronium Charging Recipe Output

Arranges neutronium ingots and supercapacitors using a shaped crafting key and pattern, while the dedicated recipe class handles extra crafting logic.

This example takes an already-built shaped recipe; callers should pass a ShapedRecipe instance. Passing another Recipe implementation throws ClassCastException at the cast.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:neutronium_charging/guide` to `data/example/recipe/neutronium_charging/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.NeutroniumChargingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.ShapedRecipe;

public final class NeutroniumChargingRecipes {
    public static void generate(RecipeOutput destination, Recipe<?> recipe) {
        var generatedRecipe = new NeutroniumChargingRecipe((ShapedRecipe) recipe);
        destination.accept(ResourceLocation.fromNamespaceAndPath("example", "neutronium_charging/guide"), generatedRecipe, null);
    }
}
```

The example follows a recipe from `ShapedRecipeLoader.accept`. The caller supplies `Recipe<?> recipe` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L75)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `RecipeOutput.accept` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

[Neutronium Ingot Charging fields, defaults, and recipe example](../packs/crafting/neutronium_charging)
