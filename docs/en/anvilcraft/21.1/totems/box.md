# Hand Order, Amulet Boxes, and Built-in Totems

To allow the Ember Ward to be placed into an amulet box as well, add an item tag for `workshop:ember_ward`. Write the file below to `data/anvilcraft/tags/item/totem.json`; once the server reloads data, the box recognizes the registered Ember Ward.

```json
{"replace": false, "values": ["workshop:ember_ward"]}
```

Death protection checks the main hand first, then the offhand. Players also check an amulet box in their pocket; a standalone totem placed in the pocket does not enter this candidate list. For each matched item, the outer `canExecute` is called first, followed by `CommonHooks.onLivingUseTotem`. A pocket box also reports as the offhand to that hook. The first item passing both checks claims this attempt exclusively.

The box's `canExecute` only checks that its totem list is non-empty. `execute` takes the first item in the list, looks up the handler by item, and calls its `execute` directly. On success, the box's `shrink` converts `BoxContents` to a mutable copy, removes the first entry, and writes it back to `BOX_CONTENTS`. Even if the second totem could activate, failure on the first does not fall through to it. Scroll selection picks which item the player wants to take out, whereas death protection always takes the head of the queue. [Amulet box handler](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/AmuletBoxHandler.java) · [Capacity & extraction](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java)

| Built-in Handler | When It Succeeds | Outcome |
| --- | --- | --- |
| `TotemOfUndyingHandler` | Damage does not belong to `BYPASSES_INVULNERABILITY`. | Sets health to `1`, clears totem-curable effects, grants Regeneration, Absorption, and Fire Resistance, and plays entity event `35`. |
| `TotemOfRecoveryHandler` | Damage is not `GENERIC_KILL`. | Restores the same base state as the Totem of Undying. Server players also receive a Recovery Pearl, record their death position, and teleport to their respawn point. |
| `TotemOfRageHandler` | Damage does not belong to `BYPASSES_INVULNERABILITY`. | Restores full health, clears effects, and applies Rage and related effects; triggered entities undergo duration checks on subsequent `baseTick`s. Survival or adventure players die when the duration expires. |

[Undying](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfUndyingHandler.java) · [Recovery](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRecoveryHandler.java) · [Rage](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRageHandler.java) · [Rage timer & candidate order](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java)
