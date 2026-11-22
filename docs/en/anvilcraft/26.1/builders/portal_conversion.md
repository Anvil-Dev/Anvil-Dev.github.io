# Portal Conversion Recipe Builder

Matches the block state to be converted, then sets the resulting block and its probability.

Set the portal type ID and add at least one result. If you set only the portal type, `validate` throws `IllegalArgumentException`. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L420)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:portal_conversion/guide` to `data/example/recipe/portal_conversion/guide.json`.

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.Util;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.PortalConversionRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;

public final class PortalConversionRecipes {
    public static void generate(RecipeOutput destination, Block anvil, float chance) {
        PortalConversionRecipe.builder()
            .type(Util.cast(Blocks.END_PORTAL))
            .input(anvil)
            .result(ModBlocks.SPECTRAL_ANVIL, chance)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "portal_conversion/guide")));
    }
}
```

The example follows a recipe from `PortalConversionRecipeLoader.spectral`. The caller supplies `Block anvil`, and `float chance` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L24)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input entity to match |
| `results` | `WeightedChanceBlockStates.CODEC` | Required | Result list used for each output |
| `portal` | Resource ID | Required | Portal type that triggers conversion |

[View Portal Conversion fields, defaults & recipe example](../packs/machine/portal_conversion)
