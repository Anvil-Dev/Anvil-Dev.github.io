# Laser Irradiation Recipe Output

Filters hit blocks by laser strength and continuous irradiation duration. Enable `use_block_loot` to simulate block loot.

The constructor takes a hit predicate, strength, and duration. The example indexes both strengths and heated by tier; ensure both collections contain that index to avoid out-of-bounds errors.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:laser_hit/guide` to `data/example/recipe/laser_hit/guide.json`.

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.BlockStatePredicate;
import dev.dubhe.anvilcraft.recipe.LaserHitRecipe;
import java.util.List;
import java.util.Optional;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.block.Block;

public final class LaserHitRecipes {
    public static void generate(RecipeOutput destination, BlockStatePredicate input, int[] strengths, int tier, List<Block> heated) {
        var generatedRecipe = new LaserHitRecipe(
                    input, Optional.empty(), strengths[tier], 20, List.of(), heated.get(tier).defaultBlockState(),
                    false, false, -50, LaserHitRecipe.LaserType.NORMAL, 40
                );
        destination.accept(ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "laser_hit/guide")), generatedRecipe, null);
    }
}
```

The example follows a recipe from `LaserHitRecipeLoader.heating`. The caller supplies `BlockStatePredicate input`, `int[] strengths`, `int tier`, and `List<Block> heated` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/LaserHitRecipeLoader.java#L54)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `RecipeOutput.accept` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Block state predicate | Required | Input entity to match |
| `dimension` | Resource ID | Optional | Dimension resource ID |
| `laser_strength` | Integer `1 to Integer.MAX_VALUE` | Required | Matched laser strength |
| `hit_time` | Integer `1 to Integer.MAX_VALUE` | Required | Ticks of continuous irradiation required |
| `result_items` | Array of item stack templates | Optional, default `[]` | Extra dropped item stacks |
| `result_block` | Block state object | Optional, default `air` | Block state after processing |
| `use_block_loot` | Boolean | Optional, default `false` | Whether to evaluate the block's own loot table |
| `requires_lens` | Boolean | Optional, default `false` | Whether a lens is required |
| `priority` | Integer | Optional, default `0` | Priority among multiple candidates |
| `laser_type` | `LaserType.CODEC` | Optional, default `LaserType.NORMAL` | Laser type participating in matching |
| `heat_duration` | Integer `0 to 24000` | Optional, default `0` | Ticks of heat retained |

[View Laser Irradiation fields, defaults & recipe example](../packs/machine/laser_hit)
