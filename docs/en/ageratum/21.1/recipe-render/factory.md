# Registering a Drawing Factory for Custom Machines

Suppose you created a "single-input, fixed-output" pressing recipe and want to draw its ingredients and result in the guide. Simply pass the registry holder of your existing `RecipeType` as a supplier to `register` below. The factory resolves the recipe type during registration, while actual recipe data is fetched from the current world and passed to the view. This example reuses the built-in stonecutter view's background texture so no extra texture is needed.

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDRenderContext;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.MDRecipeComponent;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.recipe.MDStonecutterRecipeComponent;
import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import dev.anvilcraft.resource.ageratum.util.RecipeUtil;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.RecipeType;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;
import java.util.function.Supplier;

public final class PressRecipeView extends MDRecipeComponent {
    private final Recipe<?> recipe;

    public PressRecipeView(Recipe<?> recipe, boolean center) {
        super(MDStonecutterRecipeComponent.STONECUTTER_COMPONENT_TEXTURE, 128, 32, center);
        this.recipe = recipe;
    }

    public static <R extends Recipe<?>> void register(IEventBus bus, Supplier<RecipeType<R>> type) {
        DeferredRegister<RecipeComponentFactory<?>> factories =
            DeferredRegister.create(AgeratumRegistries.RECIPE_COMPONENT_FACTORY_REGISTRY_KEY, "example");
        factories.register("press", () -> RecipeComponentFactory.create(type.get(), PressRecipeView::new));
        factories.register(bus);
    }

    @Override
    protected void renderRecipe(MDRenderContext context, float mouseX, float mouseY) {
        var level = context.minecraft().level;
        if (level == null || recipe.getIngredients().isEmpty()) return;
        ItemStack input = RecipeUtil.getDisplayItem(recipe.getIngredients().getFirst());
        draw(context, input, 29, mouseX, mouseY);
        draw(context, recipe.getResultItem(level.registryAccess()), 83, mouseX, mouseY);
    }

    private void draw(MDRenderContext context, ItemStack stack, int x, float mouseX, float mouseY) {
        if (stack.isEmpty()) return;
        context.graphics().renderItem(stack, x, 8);
        context.graphics().renderItemDecorations(context.minecraft().font, stack, x, 8);
        renderRecipeItem(context, stack, x, 8, mouseX, mouseY);
    }
}
```

| Signature | Parameters & Return Convention |
| --- | --- |
| `RecipeComponentFactory.create(type, function)` | A single `RecipeType<R>` and a 2-argument constructor; the latter receives the concrete `R` instance and a center flag, returning the configured view. |
| `RecipeComponentFactory.create(function, types...)` | Used when multiple types share the same layout. All types must work with the same constructor, such as several cooking recipe subtypes sharing a base class. |
| `MDRecipeComponent(imageLocation, width, height, center)` | Client background texture path, source image pixel dimensions, and alignment. The base class handles background and scaling; content drawing uses local coordinates. |
| `renderRecipe(context, mouseX, mouseY)` | Draws the actual items every frame. When an ingredient has multiple candidates, `RecipeUtil.getDisplayItem` gives the currently displayed item. Dynamic crafting outputs require custom preview logic. |
| `renderRecipeItem(context, stack, x, y, mouseX, mouseY)` | Handles item hover tooltips and records bound guide locations. This method does not draw the item itself; explicitly call the graphics context to render the icon and count. |
