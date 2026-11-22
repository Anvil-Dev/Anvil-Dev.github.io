# Super Heating Recipe Builder

Writes input items and furnace environment into a super-heating recipe. Outputs use weighted item stacks.

Configure at least one item ingredient. An empty list throws IllegalArgumentException in validate. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L284)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:super_heating/guide` to `data/example/recipe/super_heating/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.SuperHeatingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.Blocks;

public final class SuperHeatingRecipes {
    public static void generate(RecipeOutput destination) {
        SuperHeatingRecipe.builder()
            .requires(Blocks.COAL_BLOCK, 8)
            .result(Items.DIAMOND)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "super_heating/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `SuperHeatingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L123)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output |
| `fluid` | `FluidStackPredicate.CODEC` | Optional, default `EMPTY_PREDICATE` | Cauldron fluid matching condition |
| `consume` | Integer | Optional, default `0` | Consumption setting for this step |
| `transform` | `TRANSFORMS_CODEC` | Optional, default `[]` | Fluid transformation at end of step |
| `chance` | Number | Optional, default `1.0f` | Trigger probability |
| `ignited` | Boolean | Optional, default `false` | Match ignited state |

[View Super Heating fields, defaults & recipe example](../packs/machine/super_heating)
