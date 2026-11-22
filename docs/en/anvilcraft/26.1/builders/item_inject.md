# Item Injection Recipe Builder

Restricts both the dropped item and the target block to inject into. An item condition alone cannot distinguish which base block accepts injection.

At least one item ingredient is required. The result may be a block or an item list; omitting both fails on save. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L156)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:item_inject/guide` to `data/example/recipe/item_inject/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.ItemInjectRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class ItemInjectRecipes {
    public static void generate(RecipeOutput destination) {
        ItemInjectRecipe.builder()
                .inputBlock(ModBlocks.WIP_BLOCK).requires(ModItems.SAPPHIRE)
                .resultBlock(ModBlocks.WIP_BLOCK)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "item_inject/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `ProceduralProcessRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L268)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output |
| `block_ingredient` | Block state predicate | Required | Block condition accepting injection |
| `block_result` | Block state with a probability | Optional | Block state after injection |

[View Item Injection fields, defaults & recipe example](../packs/impact/item_inject)
