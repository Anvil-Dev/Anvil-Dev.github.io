# Celestial Anvil Crafting Recipe Builder

Registers the special crafting table recipe for the Celestial Forging Anvil, where black hole or white hole materials determine the generated celestial body preset.

SpecialRecipeBuilder passes the special recipe factory to data generation output. Input checks and outputs are computed by the in-game recipe implementation; simply select the right factory during generation.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:celestial_anvil/guide` to `data/example/recipe/celestial_anvil/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.CelestialAnvilRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.SpecialRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class CelestialAnvilRecipes {
    public static void generate(RecipeOutput destination) {
        SpecialRecipeBuilder.special(CelestialAnvilRecipe::new)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "celestial_anvil/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `SpecialCraftingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L13)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

[View Celestial Anvil Crafting fields, defaults & recipe example](../packs/celestial/celestial_anvil)
