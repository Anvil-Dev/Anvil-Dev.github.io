# Block Processing Recipe Builder

Sequential assembly can pair material blocks with processing blocks. Input and output offsets are both relative to one block below the impact point.

The input block list must have at least one entry, and result must be non-null. Both constraints are checked in validate. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L132)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:block_processing/guide` to `data/example/recipe/block_processing/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockProcessingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class BlockProcessingRecipes {
    public static void generate(RecipeOutput destination) {
        BlockProcessingRecipe.builder()
                .fakeTimeWarp(ModBlocks.WIP_BLOCK.get())
                .result(ModBlocks.WIP_BLOCK.get())
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "block_processing/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `ProceduralProcessRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L212)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputs` | Block state predicate array | Required | Group of inputs participating in matching |
| `result` | Block state with a probability | Required | Result used after recipe completion |

[View Block Processing fields, defaults & recipe example](../packs/impact/block_processing)
