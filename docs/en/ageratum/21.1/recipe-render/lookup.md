# Locating Recipes from Tags

To show a recipe loaded in the current world inside a guide, place an `<ageratum:recipe>` tag on its own line with `id` set to the recipe's registry name. The line below renders the vanilla furnace recipe that smelts iron ore into an iron ingot.

```markdown
<ageratum:recipe id="minecraft:iron_ingot_from_smelting_iron_ore" center="true"/>
```

When debugging missing images, first check in the client world whether the recipe is synced, then check whether a matching drawing factory exists. This check is suitable for client commands or UI diagnostics and does not modify recipes.

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.minecraft.client.Minecraft;
import net.minecraft.resources.ResourceLocation;

public final class RecipeViewProbe {
    public static String describe(ResourceLocation id) {
        var level = Minecraft.getInstance().level;
        if (level == null) return "Not in a world yet";
        var holder = level.getRecipeManager().byKey(id);
        if (holder.isEmpty()) return "Client does not have recipe " + id;
        var type = holder.get().value().getType();
        for (var factory : AgeratumRegistries.RECIPE_COMPONENT_FACTORY_REGISTRY) {
            if (factory.type().contains(type)) return "Found drawing factory";
        }
        return "Recipe found, but no drawing factory for this type";
    }
}
```

| Attribute or Entrypoint | Type, Timing & Boundaries |
| --- | --- |
| `id` | Required string, full resource name. Calls `ResourceLocation.parse` directly; missing values or invalid characters can throw during parsing. |
| `center` | Optional string, default `true`. Implementation only treats lowercase `"true"` as centered; any other value disables centering. |
| `MDRecipeComponent.parse(MDExtensionContext): MDComponent` | Produces a proxy during document pre-parsing that stores only the ID and alignment option. The actual recipe is fetched from the client `RecipeManager` once in a world. |
| `RecipeComponentFactory.type()` | A factory can support multiple types, matching the first hit while iterating the registry. Built-in support covers crafting, smithing, stonecutting, smelting, smoking, blasting, and campfire cooking. |
| `getPreferredWidth / getHeight` | Before the proxy resolves the actual component, dimensions come from an empty text placeholder; the first render that finds a factory creates the component, and subsequent frames delegate to it. |
