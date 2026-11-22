# Global Loot Modifiers

When the server reloads, it reads each entry in `loot_modifiers`. The optional integer `priority` defaults to 1000. Higher values run first. Both modifiers supplied by AnvilCraft explicitly set their priority to 0.

Modifier files live at `data/<namespace>/loot_modifiers/<name>.json`. `type` is the implementation ID, and `conditions` is an array of loot conditions; an empty array allows attempting in any context meeting the implementation's requirements. Built-in smelting and disintegration logic is implemented in code.

```json
{
  "type": "anvilcraft:smelting_loot_modifier",
  "conditions": [],
  "priority": 0
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/loot_modifiers/smelting_loot_modifier.json)

[ModLootModifiers.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java) · [ModLootItemFunctions.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java)
