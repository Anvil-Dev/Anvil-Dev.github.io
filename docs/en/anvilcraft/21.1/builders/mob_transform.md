# Mob Transformation Recipe Builder

Select one or more transformation results for an entity type, with optional extra conditions on entity tag data.

from and to take the source and target EntityType respectively. Specify an explicit ID to avoid multiple transformations from the same source entity colliding on the default filename.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:mob_transform/guide` to `data/example/recipe/mob_transform/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.transform.MobTransformRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.EntityType;

public final class MobTransformRecipes {
    public static void generate(RecipeOutput destination) {
        MobTransformRecipe.from(EntityType.ALLAY).to(EntityType.VEX)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "mob_transform/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `MobTransformRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L22)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Entity type ID | Required | Input entity to match |
| `results` | `TransformResult.CODEC` array | Required | Result list used for each output |
| `tag_predicates` | `NumericTagValuePredicate.CODEC` array | Optional, default `[]` | Extra checks on entity data before transformation |
| `tag_modifications` | `TagModification.CODEC` array | Optional, default `[]` | Modifications applied to entity data during transformation |
| `transform_options` | `TransformOptions.CODEC` array | Optional, default `[]` | Options enabled during transformation |
| `result_entity_type` | Entity type ID | Required | Resulting entity type |
| `probability` | Number | Required | Probability of selecting this result |
| `tagKeyPath` | String | Required | Target numeric tag path |
| `requirement` | `ValueFunction.CODEC` | Required | Comparison operation |
| `expected` | Long integer | Required | Integer to compare against |
| `path` | String | Required | Data path to modify |
| `op` | `ModifyOperation.CODEC` | Required | Modification operation to perform |
| `index` | Integer | Optional | Step or list index |
| `tag` | String | Required | Tag content to write |

[View Mob Transformation fields, defaults & recipe example](../packs/transform/mob_transform)
