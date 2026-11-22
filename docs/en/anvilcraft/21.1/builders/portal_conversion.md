# Portal Conversion Recipe Builder

Matches the block state to be converted, then sets the resulting block and its probability.

Requires a recognizable portal type ID and a non-null result; omitting either triggers IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L252)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:portal_conversion/guide` to `data/example/recipe/portal_conversion/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.api.portal.PortalType;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.PortalConversionRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;

public final class PortalConversionRecipes {
    public static void generate(RecipeOutput destination, Block anvil, float chance) {
        PortalConversionRecipe.builder()
            .type(PortalType.END_PORTAL)
            .input(anvil)
            .result(ModBlocks.SPECTRAL_ANVIL.getDefaultState(), chance)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "portal_conversion/guide"));
    }
}
```

The example follows a recipe from `PortalConversionRecipeLoader.spectral`. The caller supplies `Block anvil`, and `float chance` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L24)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input entity to match |
| `result` | Block state with a probability | Required | Result used after recipe completion |
| `portal` | Resource ID | Required | Portal type that triggers conversion |

[View Portal Conversion fields, defaults & recipe example](../packs/machine/portal_conversion)
