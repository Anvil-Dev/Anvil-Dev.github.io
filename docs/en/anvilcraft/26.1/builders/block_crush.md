# Block Crushing Recipe Builder

Filters the block to crush with a state predicate, then specifies the resulting block state.

Both input and result must provide a block; otherwise saving throws IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L141)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:block_crush/guide` to `data/example/recipe/block_crush/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockCrushRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.block.Block;

public final class BlockCrushRecipes {
    public static void generate(RecipeOutput destination, Block input, Block result) {
        BlockCrushRecipe.builder().input(input).result(result)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "block_crush/guide")));
    }
}
```

The example follows a recipe from `BlockCrushRecipeLoader.blockCrush`. The caller supplies `Block input`, and `Block result` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L31)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input entity to match |
| `result` | Block state with a probability | Required | Result used after recipe completion |

[View Block Crushing fields, defaults & recipe example](../packs/impact/block_crush)
