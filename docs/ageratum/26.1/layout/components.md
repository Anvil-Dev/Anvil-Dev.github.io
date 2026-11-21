# 让组件跟随当前主题

比如一个“高温警告”组件，在浅色页面需要深红，在深色页面则需要亮红。只要给组件约定好固定的资源键和颜色名，渲染时从本次 `MDRenderContext` 里取色就行。颜色配置写在当前布局里，切换书页时就会自动跟着换主题。

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

在已登记的块组件、行内组件或配方工厂的 `layoutColors()` 中返回该调色表。重载器会遍历这三类工厂，将它们的资源声明纳入默认布局。单独实例化 `KilnPalette` 不会登记工厂。

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

| 方法 | 参数、时机和返回 |
| --- | --- |
| `layoutColors()` | 返回组件 ID → 语义名称 → 默认 ARGB；在重载登记资源时读取。 |
| `componentColor(key, name, fallback)` | 给出当前布局下的颜色，找不到该键时返回调用者提供的后备色。 |
| `context.child()` | 取得子绘制上下文，子组件使用继承的主题。 |

[资源声明接口](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutResourceProvider.java) · [布局取色](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java)
