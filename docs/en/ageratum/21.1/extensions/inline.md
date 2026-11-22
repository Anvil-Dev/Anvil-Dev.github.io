# Inline Components and Style Parsers

To display a temperature inside a sentence, you can turn a numeric value directly into formatted game text with units; to emphasize a span of text, use a style parser to modify the outer style. Both extensions below can be registered together, allowing authors to write ``Preheat to <example:temperature value="350"/>, [[hot]]wear goggles[[/hot]].``

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDInlineComponentFactory;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.MDInlineStyleParser;
import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.minecraft.network.chat.Component;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;
import java.util.regex.Pattern;

public final class FurnaceText {
    public static void register(IEventBus bus) {
        DeferredRegister<MDInlineComponentFactory> components =
            DeferredRegister.create(AgeratumRegistries.INLINE_COMPONENT_FACTORY_REGISTRY_KEY, "example");
        components.register("temperature", () -> ctx ->
            Component.literal(ctx.params().getOrDefault("value", "?") + " °C").setStyle(ctx.baseStyle()));
        components.register(bus);

        DeferredRegister<MDInlineStyleParser> styles =
            DeferredRegister.create(AgeratumRegistries.INLINE_STYLE_PARSER_REGISTRY_KEY, "example");
        styles.register("hot", () -> MDInlineStyleParser.create(
            20, Pattern.compile(Pattern.quote("[[hot]]")), "[[/hot]]",
            (style, match) -> style.withColor(0xCE5228).withBold(true)));
        styles.register(bus);
    }
}
```

| Signature | Parsing Order & Parameters |
| --- | --- |
| `MDInlineComponentFactory.create(MDInlineComponentContext): FormattedText` | Self-closing inline tags locate their factory by registered ID; without a namespace they default to `ageratum`. Add-on tags must use their full name. |
| `id()`, `rawParams()`, `params()`, `baseStyle()` | Tag name, raw attribute string, parsed string map, and parent style. The example displays a question mark when `value` is missing and inherits the outer style. |
| `MDInlineStyleParser.create(priority, openTagPattern, closeTag, styleFactory)` | The opening tag uses a regex and the closing tag is a literal string; the 2-argument callback receives the parent style and opening `Matcher`, returning a child style. |
| `create(priority, openTagPattern, closeTag, textFactory)` | The 3-argument callback receives the inner raw text, parent style, and `Matcher`, and can return a `FormattedText` directly. |
| `parse(String text, int pos): InlineStyleMatch`, `priority(): int` | Searches forward from the given offset, returning `null` if unmatched. Compares start position first, then lower priority on ties, then registration ID. Patterns should consume characters and avoid empty-string matches. |
