# Block Tags, Layout, and Formulas

Callout boxes and row layouts can be nested. Opening and closing tags each occupy their own line, while single tags without body content use self-closing form. The two materials below are centered on the same row.

```markdown
<tip>
Prepare materials before repairing.
</tip>

<row direction="horizontal" halign="center" valign="center">
<item id="minecraft:iron_ingot"/>
<item id="minecraft:iron_pickaxe"/>
</row>

<latex formula="a^2+b^2=c^2" dpi="150" color="#29405B" center="true"/>
```

| Tag or Parameter | Type | Requirements & Default Behavior |
| --- | --- | --- |
| `info`, `tip`, `warning`, `danger` | Paired block tags | Accept parsed Markdown child content. No required attributes. |
| `directory` | Self-closing tag | Populated by the guide UI with the directory placeholder. Written `<directory/>`. |
| `row.direction` (alias `dir`) | String | Optional, default `horizontal`. Vertical layout accepts `v`, `vertical`, `column`, `col`. |
| `row.halign` | String | Optional, default `left`. Accepts `center` or `right`; aliases fall back in order `alignX`, `xAlign`, `align`. |
| `row.valign` | String | Optional, default `top`. Controls `center` or `bottom` alignment within a horizontal row; aliases `alignY`, `yAlign`. |
| `latex.formula` | String | At least one of this or a non-empty block body must be provided. Attribute takes precedence. |
| `latex.dpi` | Integer string | Optional, default `150`, clamped to `72`–`600`. |
| `latex.scale` | Numeric string | Optional. Default parsed value is `0.1`; actual display is also subject to minimum readable height, layout space, and `0.5`–`2.0` scaling limits. |
| `latex.color` | Hex color string | Optional, default black; accepts 6-digit hex with or without `#`. |
| `latex.center` | Boolean string | Optional, default `true`. |

The formula component requests images from CodeCogs. When unreachable, it displays a loading or failure notice. To show fixed formulas in offline modpacks, you can also ship formula images with the resource pack. [LaTeX component](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDLatexComponent.java) · [Row layout](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRowComponent.java)

## How Parameters Are Read

Tag attributes use `key=value`. Keys support letters, digits, underscores, dots, and hyphens. Values may be unquoted, or wrapped in single or double quotes when containing spaces. Duplicate keys take the last value. Wrapping with outer single quotes preserves double quotes inside a JSON object verbatim. This uses a key-value parser; components only invoke JSON or SNBT decoders on their corresponding fields, and general HOCON objects have no parsing entrypoint.

`::: tip` with a standalone closing `:::` can also be used for callout boxes. Colon syntax passes the trailing text as raw parameters to the factory, and the built-in `row` parses that text separately. Built-in components that need structured attributes such as `id` should use tag syntax. [Attribute parser](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/ExtensionParamParser.java) · [Block parser](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MarkdownParser.java) · [Factory registry](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinExtensionComponents.java)
