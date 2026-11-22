# Recipe Tags and Current Lookup Boundaries

Tags like `<ageratum:recipe id="minecraft:iron_ingot_from_smelting_iron_ore"/>` parse normally, but when opening the guide, the proxy component is empty on initial state extraction, and the logic to "look up the recipe from the world and pick the matching factory" is not yet wired up. Thus even with a valid ID and a registered factory, it may still leave an empty placeholder in this version. To show live recipe previews, use a [custom recipe card](factory) instead and pass the data directly from the client.

If your add-on mod already has recipe types synced to the client, the diagnostic function below can check **whether a view factory supporting that type is registered**. It does not need to query recipes in the world—just pass the `RecipeType` after client registration completes.

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.minecraft.world.item.crafting.RecipeType;

public final class RecipeViewProbe {
    public static boolean hasView(RecipeType<?> type) {
        for (var factory : AgeratumRegistries.RECIPE_COMPONENT_FACTORY_REGISTRY) {
            if (factory.type().contains(type)) return true;
        }
        return false;
    }
}
```

| Attribute or Entrypoint | Type, Timing & Boundaries |
| --- | --- |
| `id` | Required string, parsed via `Identifier.parse`. Use the full registry name; missing values or invalid characters can throw during parsing. |
| `center` | Optional string, default `true`. Centering is enabled only when the value equals lowercase `"true"`. |
| `MDRecipeComponent.parse(MDExtensionContext): MDComponent` | Creates a proxy holding only the recipe ID and alignment option. |
| `RecipeComponentFactory.type()`, `create(recipe, center)` | Declares supported recipe types and creates a view from a caller-provided recipe object. Built-in factories list crafting, smithing, stonecutting, and four cooking types; some built-in constructors still leave empty ingredients or results. |
| `getPreferredWidth / getHeight` | Uses empty-text placeholder dimensions before the proxy has a real component. Changing the background texture cannot supply a recipe object missing on the client. |

[Recipe proxy implementation in this branch](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java)
