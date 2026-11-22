# Multiblock Crafting Recipe Builder

Describes the input structure with a layered character grid, where each non-empty symbol matches blocks through the mapping table.

Provide at least one valid pattern and specify a result. A null result or empty pattern throws IllegalArgumentException on save. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockBuilder.java#L73)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:multiblock/guide` to `data/example/recipe/multiblock/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.multiblock.MultiblockRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Blocks;

public final class MultiblockRecipes {
    public static void generate(RecipeOutput destination) {
        MultiblockRecipe.builder(Blocks.DIAMOND_BLOCK)
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .symbol('A', Blocks.COAL_BLOCK)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "multiblock/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `MultiBlockRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L100)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `pattern` | `MultiblockDefinition.CODEC` | Required | Ordered input pattern or structure definition |
| `result` | Item stack object | Required | Result used after recipe completion |

[View Multiblock Crafting fields, defaults & recipe example](../packs/structures/multiblock)
