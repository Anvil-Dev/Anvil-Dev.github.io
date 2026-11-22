# Anvil Collision Recipe Builder

Matches by colliding anvil, hit block, and speed. Outputs can include both block conversions and multiple item drops.

Both anvil and hitBlock must be set. Omitting either throws IllegalArgumentException on save. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L424)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:anvil_collision/guide` to `data/example/recipe/anvil_collision/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.collision.AnvilCollisionCraftRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class AnvilCollisionRecipes {
    public static void generate(RecipeOutput destination) {
        AnvilCollisionCraftRecipe.builder()
            .anvil(ModBlocks.EMBER_ANVIL.get())
            .hitBlock(ModBlocks.FROST_METAL_BLOCK.get())
            .outputItem(ModItems.MULTIPHASE_MATTER.get(), 4)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "anvil_collision/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `AnvilCollisionCraftRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L26)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `anvil` | Block state predicate | Required | Anvil condition participating in collision or pressing |
| `consume` | Boolean | Required | Consumption setting for this step |
| `hitBlock` | Block state predicate | Required | Block condition at the impact position |
| `transform_blocks` | `BlockTransform.CODEC` array | Required | Block conversion rules after collision |
| `output_items` | Array of item stacks with individual probabilities | Required | Item drops produced by collision |
| `speed` | Integer | Required | Required collision speed parameter |
| `input` | Block state predicate | Required | Input entity to match |
| `output` | Block state with a probability | Required | Converted result |
| `max_count` | Integer | Required | Maximum number of blocks to convert |

[View Anvil Collision fields, defaults & recipe example](../packs/impact/anvil_collision)
