# Parsing Lines in Your Own Previewer

If your add-on mod includes its own machine status previewer and you want to add a `@state ...` line in Markdown to display status, you can register a line-parsing rule on your previewer's own `MarkdownParser` instance. Return `null` when the rule does not match so subsequent rules such as headings can continue matching. Note that Ageratum creates separate parsers when reloading resources, so rules added to this instance only apply to content parsed through it. If you want all resource pack guides to recognize the syntax, use a [block component factory](blocks) instead.

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDDocument;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.MarkdownParser;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.MDTextComponent;
import net.minecraft.resources.Identifier;

public final class MachinePagePreview {
    private final MarkdownParser parser = new MarkdownParser();

    public MachinePagePreview() {
        parser.registerComponentParser(-5, (source, line) -> {
            if (!line.startsWith("@state ")) return null;
            return new MDTextComponent("Machine state: " + line.substring(7).strip());
        });
    }

    public MDDocument read(Identifier location, String markdown) {
        return parser.parseDocument(location, markdown);
    }
}
```

| Signature | Call Order & Result |
| --- | --- |
| `registerComponentParser(int priority, MDComponentParser parser)` | Adds a line rule to this instance; smaller numbers are called first. Built-in images, legacy formulas, and headings use -10, -9, and 0 respectively. Choose distinct priorities to make ordering explicit. |
| `parseComponent(Identifier source, String line): MDComponent` | Queries line rules in order and returns the first non-null result. Returns `null` if all rules decline. |
| `parse(Identifier, String): List<MDComponent>` | Takes the document resource location and full Markdown string, returning the list of layout components. |
| `parseDocument(Identifier, String): MDDocument` | Retains the resource location, front matter, and component list together, suitable for editors that need preview titles or navigation. |
