# Items, Blocks, Entities, and Recipes

Fill in the corresponding registry IDs for each. When displaying an item with components, `components` is JSON object text. Block states use comma-separated property assignments, and entity data uses SNBT.

```markdown
<item id="minecraft:iron_pickaxe" count="1" components='{"minecraft:damage":12}'/>

<block id="minecraft:oak_log" state="axis=x" showText="false"/>

<entity id="minecraft:sheep" nbt='{Color:14b}'/>

<recipe id="minecraft:anvil" center="true"/>
```

| Tag | Field | Type | Requirements & Behavior |
| --- | --- | --- | --- |
| `item` | `id` | Item ID | Required. Looks up the client world's item registry. |
| `item` | `count` | Integer string | Optional, default `1`. Displays a parameter error if unparseable as an integer. |
| `item` | `components` | JSON object string | Optional, default `{}`. Decoded via `DataComponentMap` Codec; overrides corresponding components on the default stack on success. |
| `block` | `id`, `state` | Block ID, property string | `id` is required; `state` is optional. Multiple properties are written as `facing=north,half=bottom`. |
| `entity` | `id`, `nbt` | Entity type ID, SNBT compound text | `id` is required. If `nbt` is omitted or unparseable, constructs the preview with an empty compound. |
| All three previews | `showText` | Boolean string | Optional, default `true`; controls name display. |
| `recipe` | `id` | Recipe ID | Required; specify the recipe entry's own ID. |
| `recipe` | `center` | Boolean string | Optional, default `true`. Implementation checks lowercase `"true"` to decide centering. |

The recipe component selects a view based on recipes available in-game. Built-in factories provide views for crafting table, smithing table, stonecutter, and furnace-family recipes. Custom recipes require a component factory that recognizes their type. To adjust recipe ingredients or outputs, edit server-side recipe data; to change placement in the guide, edit the resource pack Markdown. [Item preview](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java) · [Block preview](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java) · [Entity preview](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java) · [Recipe views](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinRecipeComponentFactories.java)
