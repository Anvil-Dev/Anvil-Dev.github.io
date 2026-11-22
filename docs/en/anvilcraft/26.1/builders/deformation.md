# Frost Metal Deformation Recipe Builder

Specifies a smithing template, material predicate, and a group of items participating in deformation.

Provide at least two inputs participating in deformation and configure the material predicate. Fewer than two inputs or a null material throws IllegalArgumentException on save. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L158)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:deformation/guide` to `data/example/recipe/deformation/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.frost.DeformationRecipe;
import dev.dubhe.anvilcraft.recipe.frost.EmptyFrostMaterialPredicate;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;

public final class DeformationRecipes {
    public static void generate(RecipeOutput destination) {
        DeformationRecipe.builder()
            .material(new EmptyFrostMaterialPredicate())
            .input(Items.BOW)
            .input(Items.CROSSBOW)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "deformation/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `DeformationRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L70)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `template` | Item ingredient predicate | Optional, default `DeformationRecipe.DEFAULT_TEMPLATE` | Smithing template predicate |
| `material` | `IFrostMaterialPredicate.CODEC` | Required | Smithing material predicate |
| `inputs` | `RecipeResult.LIST_CODEC` | Required | Group of inputs participating in matching |

[Frost Metal Deformation fields, defaults, and recipe example](../packs/crafting/deformation)
