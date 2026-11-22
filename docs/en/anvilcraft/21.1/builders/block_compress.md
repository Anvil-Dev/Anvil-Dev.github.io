# Block Compression Recipe Builder

Describes compressed materials using a list of block state predicates and replaces the target position with the result block.

Provide a pair of input blocks with two input() calls and specify a non-null result. More or fewer inputs cause validate to throw IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L184)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:block_compress/guide` to `data/example/recipe/block_compress/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockCompressRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Blocks;

public final class BlockCompressRecipes {
    public static void generate(RecipeOutput destination) {
        BlockCompressRecipe.builder()
                    .input(Blocks.IRON_BLOCK)
                    .input(Blocks.IRON_BLOCK)
                    .result(ModBlocks.WIP_BLOCK.get())
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "block_compress/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `ProceduralProcessRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L290)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputs` | Block state predicate array | Required | Group of inputs participating in matching |
| `result` | Block state with a probability | Required | Result used after recipe completion |

[View Block Compression fields, defaults & recipe example](../packs/impact/block_compress)
