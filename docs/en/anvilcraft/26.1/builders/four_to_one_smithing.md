# Four-to-One Smithing Recipe Builder

Combines four base items into one output. Result modifiers can copy or adjust components from inputs.

The base class checks that template, material, and each added input have matchable items; missing items trigger IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L310)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:four_to_one_smithing/guide` to `data/example/recipe/four_to_one_smithing/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.multiple.FourToOneSmithingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class FourToOneSmithingRecipes {
    public static void generate(RecipeOutput destination) {
        FourToOneSmithingRecipe.builder()
            .material(ModBlocks.FROST_METAL_BLOCK)
            .input(ModItems.SAPPHIRE_AMULET)
            .input(ModItems.RUBY_AMULET)
            .input(ModItems.TOPAZ_AMULET)
            .input(ModItems.EMERALD_AMULET)
            .result(ModItems.GEM_AMULET)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "four_to_one_smithing/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `MultipleToOneSmithingRecipeLoader.four`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L136)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `template` | Item ingredient predicate | Required | Smithing template predicate |
| `material` | Item ingredient predicate | Required | Smithing material predicate |
| `inputs` | Array of item ingredient predicates | Required | Group of inputs participating in matching |
| `result` | Item stack template object | Required | Result used after recipe completion |
| `modifiers` | `IResultModifier.CODEC` array | Optional, default `[]` | Modifiers applied to the result in order |

[Four-to-One Smithing fields, defaults, and recipe example](../packs/crafting/four_to_one_smithing)
