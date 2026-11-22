# Drawing Recipe Cards from Known Inputs and Outputs

Custom machines can pass preview snapshots synced from the server directly to `MDRecipeComponent`. To make a static example that works in a pure resource pack, you can also read item IDs from block extension attributes. The example below registers `<example:press_card input="minecraft:sand" output="minecraft:sandstone"/>` as a visible diagram card. Note that it only displays the two items filled in by the author; if a modpack changes the recipe, the author must update this card as well.

Call `PressRecipeView.register(modEventBus)` once during client initialization. If your sync layer already has the input and output, construct the same view directly with two `ItemStack`s; the constructor copies the item stacks via `copy()` so subsequent inventory changes do not alter the preview.

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDExtensionComponentFactory;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDRenderContext;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.MDRecipeComponent;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.recipe.MDStonecutterRecipeComponent;
import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.Identifier;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;

public final class PressRecipeView extends MDRecipeComponent {
    private final ItemStack input;
    private final ItemStack output;

    public PressRecipeView(ItemStack input, ItemStack output, boolean center) {
        super(MDStonecutterRecipeComponent.STONECUTTER_COMPONENT_TEXTURE, 128, 32, center);
        this.input = input.copy();
        this.output = output.copy();
    }

    public static void register(IEventBus bus) {
        DeferredRegister<MDExtensionComponentFactory> boxes =
            DeferredRegister.create(AgeratumRegistries.EXTENSION_COMPONENT_FACTORY_REGISTRY_KEY, "example");
        boxes.register("press_card", () -> ctx -> new PressRecipeView(
            item(ctx.params().getOrDefault("input", "")),
            item(ctx.params().getOrDefault("output", "")), true));
        boxes.register(bus);
    }

    private static ItemStack item(String text) {
        Identifier id = Identifier.tryParse(text);
        if (id == null) return ItemStack.EMPTY;
        return BuiltInRegistries.ITEM.get(id).map(holder -> new ItemStack(holder.value())).orElse(ItemStack.EMPTY);
    }

    @Override
    protected String layoutTextureKey() { return "example:press_card"; }

    @Override
    protected void extractRecipeRenderState(MDRenderContext context, float mouseX, float mouseY) {
        draw(context, input, 29, mouseX, mouseY);
        draw(context, output, 83, mouseX, mouseY);
    }

    private void draw(MDRenderContext context, ItemStack stack, int x, float mouseX, float mouseY) {
        if (stack.isEmpty()) return;
        context.graphics().item(stack, x, 8);
        context.graphics().itemDecorations(context.minecraft().font, stack, x, 8);
        extractTooltipRenderState(context, stack, x, 8, mouseX, mouseY);
    }
}
```

| Signature | Purpose & Boundaries |
| --- | --- |
| `MDRecipeComponent(Identifier texture, int width, int height, boolean center)` | Passes the default background texture, source image pixel dimensions, and alignment. This example reuses the stonecutter background's 128×32 slot layout. |
| `layoutTextureKey(): String` | Returns the component key looked up in the theme for the background texture. Add-ons use their own namespace; themes keep the same logical coordinates. |
| `extractRecipeRenderState(MDRenderContext, float mouseX, float mouseY)` | The background is already submitted; next submit items, counts, and tooltips to `GuiGraphicsExtractor`. Unregistered or invalid item IDs produce empty slots in the example. |
| `RecipeComponentFactory.create(type, function)`, `create(function, types...)` | When callers can provide actual recipes, use single-type or multi-type factories to convert them into views. The function receives the concrete recipe and center flag and returns `MDRecipeComponent`; you can invoke factories directly in your own sync layer. |
| `layoutTextures()`, `layoutColors()` | Factories can declare keys, default textures, and semantic colors. The default implementation returns an empty map; layout files can provide overrides for specified component keys. |
