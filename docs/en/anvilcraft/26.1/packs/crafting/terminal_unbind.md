# Terminal Unbinding

Place the terminal in a crafting table as a shapeless recipe. The output retains its crafting inventory, balancing mode, and name. The result stack specified by the recipe determines its binding.

Create `data/example/recipe/terminal_unbind/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:terminal_unbind/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:terminal_unbind",
  "category": "misc",
  "group": "anvilcraft:hyperdimension_terminal",
  "ingredients": [
    "anvilcraft:hyperdimension_terminal"
  ],
  "result": {
    "id": "anvilcraft:hyperdimension_terminal"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/hyperdimension_terminal_unbind.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:terminal_unbind`.

Each entry in the required `ingredients` array matches one crafting slot. The required `result` item stack template supplies the new terminal. The optional `group` and `category` fields control how the recipe appears in the recipe book.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/TerminalUnbindRecipe.java)
