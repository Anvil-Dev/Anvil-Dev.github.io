# Registering Block Component Factories

Suppose you want a callout box for a machine's input requirements: authors write `<example:requirement>` and its closing tag in the document, and after parsing, the lists and links inside the box keep their original component structure. Simply call `register(modEventBus)` below once in your mod's client initialization entrypoint. Add-on mods create a `DeferredRegister` under their own namespace, keyed to the registry already created by Ageratum.

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDExtensionComponentFactory;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.MDNoticeBoxComponent;
import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;

public final class RequirementBoxes {
    private static final DeferredRegister<MDExtensionComponentFactory> BOXES =
        DeferredRegister.create(AgeratumRegistries.EXTENSION_COMPONENT_FACTORY_REGISTRY_KEY, "example");

    public static void register(IEventBus bus) {
        BOXES.register("requirement", () -> ctx -> new MDNoticeBoxComponent(
            "optional".equals(ctx.params().get("kind"))
                ? MDNoticeBoxComponent.NoticeType.TIP : MDNoticeBoxComponent.NoticeType.WARNING,
            ctx.renderedContent()));
        BOXES.register(bus);
    }
}
```

In the guide body, you can write it as shown below. `kind` is an optional string defined by this example extension; omitting it renders a warning box, while `optional` renders a tip box.

```markdown
<example:requirement kind="optional">
- Place a tank above the pump.
- Use a control valve to separate rinse water from raw materials.
</example:requirement>
```

| Member | What the Factory Receives |
| --- | --- |
| `MDExtensionComponentFactory.create(MDExtensionContext): MDComponent` | Creates the component during document parsing, which runs during resource reload. Defer operations that require the game world until rendering. |
| `sourceLocation()`, `id()` | The current document location and the component registration name, respectively. Use the former to resolve relative paths and the latter to distinguish factory parameters. |
| `params()`, `rawParams()` | Tag attributes parsed into a string map; raw parameters preserve the syntax string. Read `rawParams()` when needed for colon-block syntax compatibility. |
| `renderedContent()`, `rawContent()` | Reuse child components when you need a composite layout; read the raw text when you need original source, formulas, or preformatted text. |
