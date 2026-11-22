# Item Stamping Recipe Builder

Specifies item entity inputs and outputs for stamping; the game checks materials and the stamping platform when an anvil triggers processing.

Checks the ingredient and result lists before submission. Both require at least one entry; an empty list triggers IllegalArgumentException. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L397)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:stamping/guide` to `data/example/recipe/stamping/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.StampingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;

public final class StampingRecipes {
    public static void generate(RecipeOutput destination) {
        StampingRecipe.builder()
            .requires(ModItems.WOOD_FIBER)
            .result(Items.PAPER, 4)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "stamping/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `StampingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L34)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output |

[View Item Stamping fields, defaults & recipe example](../packs/impact/stamping)
