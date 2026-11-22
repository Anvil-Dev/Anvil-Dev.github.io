# Sequential Assembly Recipe Builder

Organizes multiple processing steps in a step list. The initial block, display models, loop settings, and final block are configured independently.

Requires at least one step and loop >= 1. The builder also checks that steps are anvil processing recipes and that displayed model count does not exceed the step sequence limit. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessRecipeBuilder.java#L221)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:procedural_process/guide` to `data/example/recipe/procedural_process/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.procedural.ProceduralProcessRecipeBuilder;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockProcessingRecipe;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.ItemInjectRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.Blocks;

public final class ProceduralProcessRecipes {
    public static void generate(RecipeOutput destination) {
        ProceduralProcessRecipeBuilder.of(ModBlocks.TUNGSTEN_BLOCK.get())
            .addStep(
                ItemInjectRecipe.builder()
                    .inputBlock(ModBlocks.TUNGSTEN_BLOCK)
                    .requires(Items.NETHERITE_SCRAP)
                    .resultBlock(ModBlocks.WIP_BLOCK)
                    .buildRecipe()
            )
            .addStep(
                BlockProcessingRecipe.builder()
                    .fakeTimeWarp(ModBlocks.WIP_BLOCK.get())
                    .result(ModBlocks.WIP_BLOCK.get())
                    .buildRecipe()
            )
            .result(Blocks.ANCIENT_DEBRIS)
            .icon(Blocks.ANCIENT_DEBRIS.asItem().getDefaultInstance())
            .displayedModels(AnvilCraft.of("ancient_debris_wip"))
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "procedural_process/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `ProceduralProcessRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L230)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `initial_block` | Block state predicate | Required | Block condition before the first step begins |
| `steps` | `ProceduralProcessStep.CODEC` array | Required | Ordered list of step objects |
| `result_block` | Block state with a probability | Required | Block state after processing |
| `icon` | Item stack object | Required | Item stack for the UI icon |
| `loop` | Integer | Required | Loop count |
| `displayed_model` | Resource ID | Optional | Model ID used for display |
| `displayed_models` | Resource ID array | Optional, default `[]` | List of model IDs for multiple phases |
| `multiple_loop_first_step` | `ProceduralProcessStep.CODEC` | Optional | First step used for repeated loops |
| `index` | Integer | Required | Step or list index |
| `content` | `AbstractProcessRecipe.CODEC` | Required | Sub-recipe actually executed |

[View Sequential Assembly fields, defaults & recipe example](../packs/structures/procedural_process)
