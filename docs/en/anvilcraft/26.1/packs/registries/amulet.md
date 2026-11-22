# Amulet Drop Definitions

Define the mapping between damage sources and amulets in `data/<namespace>/anvilcraft/amulet_definition/<name>.json`. Loaded as a dynamic registry when entering a world and synced to clients. `type` on the root object is required and determines the remaining fields.

## Usage Example

```json
{
  "type": "anvilcraft:normal",
  "amulet": {
    "id": "anvilcraft:anvil_amulet"
  },
  "obtains": [
    {
      "tags": [
        {
          "expected": true,
          "id": "anvilcraft:amulet_valid/anvil"
        }
      ]
    },
    {
      "source_entity": {
        "type_specific": {
          "type": "anvilcraft:falling_block",
          "block": {
            "blocks": "#minecraft:anvil"
          }
        }
      }
    },
    {
      "direct_entity": {
        "slots": {
          "weapon": {
            "items": "#anvilcraft:tools/anvil_hammer"
          }
        }
      }
    }
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/anvilcraft/amulet_definition/anvil.json)

## Types & Fields

### `anvilcraft:normal`

`obtains` describes damage source predicates, accepting a single item or a list. With the default `or = true`, matching any item suffices. An empty predicate set does not match in OR mode and matches in AND mode. The amulet count produced is fixed to 1 by the implementation.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `amulet` | Item stack template object | Required | Amulet item stack granted [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L119) |
| `or` | Boolean | Optional, default `true` | Matches any when true, or all when false [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L124) |

[AmuletDefinition.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java)

### `anvilcraft:comrade`

Uses the Comrade Amulet's dedicated predicate.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `item` | Item stack template object | Required | Item or item stack [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L44) |

[ComradeAmuletDefinition.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java)

### `anvilcraft:abnormal`

Uses the Abnormal Amulet's dedicated predicate.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `item` | Item stack template object | Required | Item or item stack [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L50) |

[AbnormalAmuletDefinition.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java)

[ModAmuletDefinitionTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitionTypes.java)
