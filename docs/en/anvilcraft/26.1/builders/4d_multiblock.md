# 4D Multiblock Recipe Builder

References multiple structure definitions in the same recipe, producing an item stack once matching completes.

Each next() finalizes one 3D pattern. An empty result, any empty finalized pattern, or an empty final pattern fails validate. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DBuilder.java#L158)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:4d_multiblock/guide` to `data/example/recipe/4d_multiblock/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.multiblock.Multiblock4DRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class Example4dMultiblockRecipes {
    public static void generate(RecipeOutput destination) {
        Multiblock4DRecipe.builder("anvilcraft:hypercube", 1)
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .symbol('A', "anvilcraft:tempering_glass")
            .next()
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .symbol('A', "anvilcraft:tempering_glass")
            .next()
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .symbol('A', "anvilcraft:tempering_glass")
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "4d_multiblock/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `MultiBlockRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L283)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `definitions` | `MultiblockDefinition.CODEC` array | Required | Structure definitions matched in sequence |
| `result` | Item stack template object | Required | Result used after recipe completion |

[View 4D Multiblock fields, defaults & recipe example](../packs/structures/4d_multiblock)
