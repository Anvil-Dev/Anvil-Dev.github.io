# Adding Line Numbers and Highlighting to Code

Code blocks use fences to preserve whitespace and line breaks. The language name is passed to JHighlight to select a renderer, and unrecognized languages are rendered as plain code. You can append curly braces after the language name to highlight specific lines: write closed intervals for consecutive lines, separated by commas, with 1-based line numbers.

````markdown
```java{3-4}
public final class FuelCost {
    public static int coalFor(int outputs) {
        if (outputs < 0) throw new IllegalArgumentException("negative count");
        return Math.ceilDiv(outputs, 8);
    }
}
```
````

| Setting or Marker | Type | Effect |
| --- | --- | --- |
| `{3-4}` | Line range in fence info | Highlights lines 3 and 4 with a background. Ranges refer to the code body, excluding the fences. |
| `showCodeBlockLineNumbers` | Client boolean | Whether to draw line numbers for each line. |
| `allowCodeBlockLineContentLineBreaks` | Client boolean | Controls how overly long code lines adapt to page width. |

[Renderer selection & line-number parsing](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java)
