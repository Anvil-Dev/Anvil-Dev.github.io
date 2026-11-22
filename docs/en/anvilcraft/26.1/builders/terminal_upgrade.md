# Terminal Upgrade Recipe Builder

Use a shaped crafting pattern. The upgraded terminal inherits the input terminal's crafting inventory, stonecutter input, balancing mode, and custom name.

Use the shaped crafting builder and wrap the output in `TerminalUpgradeRecipe.output` when saving. During crafting, the server copies the first input terminal's crafting inventory, balancing mode, and custom name to the result.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:terminal_upgrade/guide` to `data/example/recipe/terminal_upgrade/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.data.AnvilCraftDatagen;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.TerminalUpgradeRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeCategory;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.ShapedRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;

public final class TerminalUpgradeRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> lookup) {
        ShapedRecipeBuilder.shaped(lookup, RecipeCategory.MISC, ModItems.HYPERDIMENSION_TERMINAL)
            .pattern(" B ").pattern("ACA").pattern(" D ")
            .define('A', ModItems.TRANSCENDIUM_INGOT)
            .define('B', ModBlocks.SINGULARITY_CRYSTAL)
            .define('C', ModItems.SHULKER_TERMINAL)
            .define('D', ModBlocks.HYPERCUBE)
            .group("example:terminal_upgrade")
            .unlockedBy(AnvilCraftDatagen.hasItem(ModItems.TRANSCENDIUM_INGOT),
                AnvilCraftDatagen.has(lookup, ModItems.TRANSCENDIUM_INGOT))
            .unlockedBy(AnvilCraftDatagen.hasItem(ModBlocks.SINGULARITY_CRYSTAL.asItem()),
                AnvilCraftDatagen.has(lookup, ModBlocks.SINGULARITY_CRYSTAL))
            .unlockedBy(AnvilCraftDatagen.hasItem(ModItems.SHULKER_TERMINAL),
                AnvilCraftDatagen.has(lookup, ModItems.SHULKER_TERMINAL))
            .unlockedBy(AnvilCraftDatagen.hasItem(ModBlocks.HYPERCUBE.asItem()),
                AnvilCraftDatagen.has(lookup, ModBlocks.HYPERCUBE))
            .save(TerminalUpgradeRecipe.output(destination), ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "terminal_upgrade/guide")));
    }
}
```

The example follows a recipe from `RegistrumItemRecipeLoader.hyperdimensionTerminal`. The caller supplies `HolderGetter<Item> lookup` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RegistrumItemRecipeLoader.java#L831)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

[Terminal Upgrade fields, defaults, and recipe example](../packs/crafting/terminal_upgrade)
