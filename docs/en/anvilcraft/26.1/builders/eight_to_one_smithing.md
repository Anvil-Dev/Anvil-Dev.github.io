# Eight-to-One Smithing Recipe Builder

Sets matching conditions for eight base items and a smithing material, then specifies the output.

The base class checks that template, material, and each added input have matchable items; missing items trigger IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L310)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:eight_to_one_smithing/guide` to `data/example/recipe/eight_to_one_smithing/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.api.recipe.data.NormalDataComponent;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.multiple.EightToOneSmithingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;

public final class EightToOneSmithingRecipes {
    public static void generate(RecipeOutput destination) {
        EightToOneSmithingRecipe.builder()
            .material(ModItems.MULTIPHASE_MATTER)
            .input(Items.SHEARS)
            .input(Items.FLINT_AND_STEEL)
            .input(Items.BRUSH)
            .input(Items.SPYGLASS)
            .input(ModItems.MAGNET)
            .input(Items.FISHING_ROD)
            .input(Items.CARROT_ON_A_STICK)
            .input(Items.WARPED_FUNGUS_ON_A_STICK)
            .resultMerge(ModItems.MULTITOOL_ITEM, NormalDataComponent.normalEight())
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "eight_to_one_smithing/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `MultipleToOneSmithingRecipeLoader.eight`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L155)

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

[Eight-to-One Smithing fields, defaults, and recipe example](../packs/crafting/eight_to_one_smithing)
