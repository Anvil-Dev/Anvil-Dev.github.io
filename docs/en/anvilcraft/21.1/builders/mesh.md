# Meshing Recipe Builder

Process dropped items above a mesh. Set the probability of each entry in `results` to control its yield.

Checks the ingredient and result lists before submission. Both require at least one entry; an empty list triggers IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L456)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:mesh/guide` to `data/example/recipe/mesh/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.MeshRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class MeshRecipes {
    public static void generate(RecipeOutput destination) {
        MeshRecipe.builder()
            .requires(ModBlocks.QUARTZ_SAND)
            .result(ModBlocks.QUARTZ_SAND, 0.5f)
            .result(Items.QUARTZ)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "mesh/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `MeshRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L64)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output |

[View Meshing fields, defaults & recipe example](../packs/impact/mesh)
