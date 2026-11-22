# Terminal Unbinding Recipe Builder

Place the terminal in a crafting table as a shapeless recipe. The output retains its crafting inventory, balancing mode, and name. The result stack specified by the recipe determines its binding.

Use the shapeless crafting builder and call `TerminalUpgradeRecipe.output`. The wrapper constructs a `TerminalUnbindRecipe` from the supplied `ShapelessRecipe`, preserving the terminal's crafting inventory, balancing mode, and custom name.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:terminal_unbind/guide` to `data/example/recipe/terminal_unbind/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.data.AnvilCraftDatagen;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.TerminalUpgradeRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeCategory;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.ShapelessRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;

public final class TerminalUnbindRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> lookup) {
        ShapelessRecipeBuilder.shapeless(lookup, RecipeCategory.MISC, ModItems.HYPERDIMENSION_TERMINAL)
            .requires(ModItems.HYPERDIMENSION_TERMINAL)
            .group("example:terminal_unbind")
            .unlockedBy(AnvilCraftDatagen.hasItem(ModItems.HYPERDIMENSION_TERMINAL),
                AnvilCraftDatagen.has(lookup, ModItems.HYPERDIMENSION_TERMINAL))
            .save(TerminalUpgradeRecipe.output(destination), ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "terminal_unbind/guide")));
    }
}
```

The example follows a recipe from `RegistrumItemRecipeLoader.hyperdimensionTerminalUnbind`. The caller supplies `HolderGetter<Item> lookup` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RegistrumItemRecipeLoader.java#L851)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

[Terminal Unbinding fields, defaults, and recipe example](../packs/crafting/terminal_unbind)
