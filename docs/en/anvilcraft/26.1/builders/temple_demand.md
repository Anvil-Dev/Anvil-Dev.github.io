# Temple Demands Recipe Output

Lists items and counts by category for selection by the temple demand system.

Specify the demand category and pass the demand entry list at construction, with each entry giving an item ID and count. Using different filenames per category preserves each category's fallback demands.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:temple_demand/guide` to `data/example/recipe/temple_demand/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.celestial.TempleDemandRecipe;
import java.util.List;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class TempleDemandRecipes {
    public static void generate(RecipeOutput destination) {
        var generatedRecipe = new TempleDemandRecipe(
                TempleDemandRecipe.Category.PUNISHMENT,
                List.of(
                    new TempleDemandRecipe.Entry("anvilcraft:topaz", 1),
                    new TempleDemandRecipe.Entry("minecraft:lava_bucket", 1),
                    new TempleDemandRecipe.Entry("minecraft:tnt", 1024)
                )
            );
        destination.accept(ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "temple_demand/guide")), generatedRecipe, null);
    }
}
```

Implementation uses an actual recipe chain from upstream `TempleDemandRecipeLoader.createPunishmentRecipe`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TempleDemandRecipeLoader.java#L53)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `RecipeOutput.accept` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | Required | Category selector |
| `entries` | `Entry.CODEC` array | Required | Candidate entry list |
| `id` | String | Required | Registry ID |
| `count` | Integer | Required | Count |

[View Temple Demands fields, defaults & recipe example](../packs/celestial/temple_demand)
