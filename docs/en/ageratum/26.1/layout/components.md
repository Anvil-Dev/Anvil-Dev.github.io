# Making Components Follow the Current Theme

For example, a "High Temperature Warning" component may need dark red on light pages and bright red on dark pages. Agree on a fixed resource key and color name for the component, then read the color from `MDRenderContext` during rendering. Color settings live in the active layout, so switching pages updates the theme automatically.

```java
package dev.example.fieldguide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDRenderContext;
import dev.anvilcraft.resource.ageratum.client.layout.LayoutResourceProvider;
import java.util.Map;
import net.minecraft.resources.Identifier;

public final class KilnPalette implements LayoutResourceProvider {
    public static final Identifier BADGE = Identifier.fromNamespaceAndPath("field_guide", "kiln_badge");
    public static final int DEFAULT_TEXT = 0xff8b3028;

    @Override
    public Map<Identifier, Map<String, Integer>> layoutColors() {
        return Map.of(BADGE, Map.of("text", DEFAULT_TEXT));
    }

    public static int textColor(MDRenderContext context) {
        return context.layout().componentColor(BADGE, "text", DEFAULT_TEXT);
    }
}
```

Return this palette from `layoutColors()` on a registered block component, inline component, or recipe factory. The reloader iterates over those three factory registries and includes their resource declarations in the default layout. Instantiating `KilnPalette` on its own does not register a factory.

```json
{
  "extends": "ageratum:fullscreen_dark",
  "colors": {
    "components": {
      "field_guide:kiln_badge": {
        "text": "#FF9A88"
      }
    }
  }
}
```

| Method | Parameters, Timing & Return |
| --- | --- |
| `layoutColors()` | Returns component ID → semantic name → default ARGB; read when registering resources on reload. |
| `componentColor(key, name, fallback)` | Returns the color in the active layout, or the caller-provided fallback if the key is missing. |
| `context.child()` | Obtains a child render context so child components inherit the active theme. |

[Resource declaration interface](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutResourceProvider.java) · [Layout color lookup](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java)
