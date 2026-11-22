# Block Smearing Recipe Builder

Write the touching block pair into inputs. Placing the same materials in different positions may match other processing modes.

The input list cannot be empty and result cannot be null. Set the output and input predicates separately so the second input is not mistaken for the result. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L185)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:block_smear/guide` to `data/example/recipe/block_smear/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockSmearRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;

public final class BlockSmearRecipes {
    public static void generate(RecipeOutput destination, Block block1, Block block2, Block result) {
        BlockSmearRecipe.builder().input(block1).input(block2).result(result)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "block_smear/guide"));
    }
}
```

The example follows a recipe from `BlockSmearRecipeLoader.blockSmear`. The caller supplies `Block block1`, `Block block2`, and `Block result` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L56)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputs` | Block state predicate array | Required | Group of inputs participating in matching |
| `result` | Block state with a probability | Required | Result used after recipe completion |

[View Block Smearing fields, defaults & recipe example](../packs/impact/block_smear)
