# Item-Assisted Mob Transformation Recipe Builder

Checks surrounding materials in addition to entity type, adjusting the probability of a special result based on item count.

Input entity, target entity, and item conditions are configured separately. When creating per-material variants for an entity, assign a distinct ID to each recipe.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:mob_transform_with_item/guide` to `data/example/recipe/mob_transform_with_item/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.transform.MobTransformWithItemRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.item.ItemStackTemplate;
import net.minecraft.world.item.Items;

public final class MobTransformWithItemRecipes {
    public static void generate(RecipeOutput destination) {
        MobTransformWithItemRecipe.from(
                EntityType.ZOMBIE,
                Items.ANVIL,
                EntityType.GIANT,
                new ItemStackTemplate(ModBlocks.GIANT_ANVIL.asItem())
            ).setItemChancePercentagePerItem(5)
            .save(destination, Identifier.fromNamespaceAndPath("example", "mob_transform_with_item/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `MobTransformWithItemRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L12)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | Entity type ID | Required | Input entity to match |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `special_result` | `TransformResult.CODEC` | Required | Entity result when hitting the special branch |
| `item_result` | Item stack template object | Required | Dropped item result |
| `chance_percent_per_item` | Integer | Required | Percentage points added per input item |
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

[View Item-Assisted Mob Transformation fields, defaults & recipe example](../packs/transform/mob_transform_with_item)
