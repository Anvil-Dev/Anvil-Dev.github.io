# Terminal Upgrade

Use a shaped crafting pattern. The upgraded terminal inherits the input terminal's crafting inventory, stonecutter input, balancing mode, and custom name.

Create `data/example/recipe/terminal_upgrade/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:terminal_upgrade/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:terminal_upgrade",
  "category": "misc",
  "group": "anvilcraft:shulker_terminal",
  "key": {
    "A": "minecraft:shulker_shell",
    "B": "anvilcraft:local_terminal"
  },
  "pattern": [
    "A",
    "B",
    "A"
  ],
  "result": {
    "id": "anvilcraft:shulker_terminal"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/shulker_terminal.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:terminal_upgrade`.

Uses the vanilla shaped crafting serializer underneath. `pattern` (required, string array) gives the shape row by row, with spaces for empty slots. `key` (required, object) maps each non-space character to an ingredient. `result` (required, item stack) specifies the output. `group` (string, default empty), `category` (string, default `misc`), and `show_notification` (boolean, default `true`) control recipe book presentation.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/TerminalUpgradeRecipe.java)
