# Mass Injection Recipe Builder

Assigns a mass value to items eligible for mass injection. Materials of the same category can be matched together using an ingredient tag.

Requires a non-empty item ingredient and a positive mass; mass 0 is rejected by validate. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L238)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:mass_inject/guide` to `data/example/recipe/mass_inject/guide.json`.

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.registrum.providers.generators.RegistrumRecipeProvider;
import dev.dubhe.anvilcraft.recipe.anvil.MassInjectRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.tags.TagKey;
import net.minecraft.world.item.Item;

public final class MassInjectRecipes {
    public static void generate(RecipeOutput destination, RegistrumRecipeProvider provider, TagKey<Item> tag, int mass) {
        MassInjectRecipe.builder(provider.getItems()).requires(tag).mass(mass)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "mass_inject/guide")));
    }
}
```

The example follows a recipe from `MassInjectRecipeLoader.addTag`. The caller supplies `RegistrumRecipeProvider provider`, `TagKey<Item> tag`, and `int mass` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L84)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Ingredient ID, tag, or valid ingredient expression | Required | Single ingredient to match |
| `mass` | Integer | Required | Mass value |

[View Mass Injection fields, defaults & recipe example](../packs/impact/mass_inject)
