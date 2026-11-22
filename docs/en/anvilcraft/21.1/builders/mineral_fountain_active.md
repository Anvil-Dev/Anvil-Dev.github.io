# Active Mineral Fountain Recipe Builder

In addition to dimension, height, and output, active recipes can use around to require a specified number of blocks nearby.

toBlock is required. Missing it throws IllegalStateException on build, or IllegalArgumentException in save's pre-validate. Nearby block counts are provided via AroundRequirement. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L225)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:mineral_fountain_active/guide` to `data/example/recipe/mineral_fountain_active/guide.json`.

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.BlockStatePredicate;
import dev.anvilcraft.lib.v2.util.predicate.ChanceBlockState;
import dev.dubhe.anvilcraft.api.heat.HeatTier;
import dev.dubhe.anvilcraft.recipe.mineral.AroundRequirement;
import dev.dubhe.anvilcraft.recipe.mineral.MineralFountainActiveRecipe;
import dev.dubhe.anvilcraft.recipe.mineral.MineralFountainHeat;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import net.minecraft.world.level.material.Fluids;
import net.neoforged.neoforge.fluids.FluidStack;
import net.neoforged.neoforge.fluids.FluidType;

public final class MineralFountainActiveRecipes {
    public static void generate(RecipeOutput destination) {
        MineralFountainActiveRecipe.builder()
            .fromBlock(from(Blocks.AIR))
            .require(new AroundRequirement(liquidSource(Blocks.LAVA), 4))
            .toBlock(result(Blocks.LAVA))
            .toFluid(new FluidStack(Fluids.LAVA, FluidType.BUCKET_VOLUME))
            .heat(new MineralFountainHeat(HeatTier.REDHOT, 20, 1))
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "mineral_fountain_active/guide"));
    }

    private static BlockStatePredicate from(Block block) {
        return BlockStatePredicate.builder().of(block).build();
    }

    private static BlockStatePredicate liquidSource(Block block) {
        return BlockStatePredicate.builder()
            .of(block)
            .with(BlockStateProperties.LEVEL, 0)
            .build();
    }

    private static ChanceBlockState result(Block block) {
        return new ChanceBlockState(block.defaultBlockState(), 1.0f);
    }
}
```

Implementation uses an actual recipe chain from upstream `MineralFountainRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L41)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `dimension` | Resource ID | Optional | Dimension resource ID |
| `height` | `HeightRange.CODEC` | Optional, default `min = 0, max = 8` | Fountain height condition |
| `priority` | Integer | Optional, default `0` | Priority among multiple candidates |
| `weight` | Integer | Optional, default `1` | Relative weight when sampling from candidates |
| `around` | `AroundRequirement.CODEC` array | Optional, default `[]` | Nearby block and count requirements |
| `from_block` | Block state predicate | Optional, default `air` | Condition for blocks convertible in place |
| `to_block` | Block state with a probability | Required | Generated block |
| `heat` | `MineralFountainHeat.CODEC` | Optional | Heat effect |
| `to_fluid` | Fluid stack object | Optional | Fluid stack produced alongside the recipe |
| `block` | Block state predicate | Required | Match condition for target blocks |
| `count` | Integer | Optional, default `1` | Count |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | Required | Heat tier |
| `duration` | Integer | Optional, default `20` | Duration |
| `count` | Integer | Optional, default `1` | Count |
| `min` | Integer | Optional, default `0` | Lower bound |
| `max` | Integer | Optional, default `8` | Upper bound |

[View Active Mineral Fountain fields, defaults & recipe example](../packs/fountain/mineral_fountain_active)
