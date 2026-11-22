# Item Stack Components

Both recipe outputs and loot can carry components. Key the `components` object on an item stack by registry ID. For example, the result stack below explicitly writes stored energy.

```json
{
  "id": "anvilcraft:magnet_ingot",
  "count": 1,
  "components": {
    "anvilcraft:stored_energy": 16
  }
}
```

## Component Values

The table below describes the persistence format when each component is present. Omitting a component uses the item's default component set.

| Component | Value Type or Codec |
| --- | --- |
| `anvilcraft:disk_data` | `DiskData.CODEC` |
| `anvilcraft:structure_disk_data` | `StructureDiskData.CODEC` |
| `anvilcraft:saved_entity` | `SavedEntity.CODEC` |
| `anvilcraft:heliostats_data` | `HeliostatsData.CODEC` |
| `anvilcraft:structure_data` | `StructureData.CODEC` |
| `anvilcraft:display_item` | `StoredItem.CODEC` |
| `anvilcraft:signed_player` | `SignedPlayers.CODEC` |
| `anvilcraft:stored_energy` | Integer |
| `anvilcraft:railgun_ammo` | `ChargedProjectiles.CODEC` |
| `anvilcraft:railgun_infinite_ammo_mask` | Integer |
| `anvilcraft:reforging` | Empty object `{}` |
| `anvilcraft:multiphase` | `Multiphase.CODEC` |
| `anvilcraft:merciless` | `Merciless.CODEC` |
| `anvilcraft:ferocious` | `Ferocious.CODEC` |
| `anvilcraft:devour_range` | Integer |
| `anvilcraft:devour_protect_containers` | Boolean |
| `anvilcraft:night_vision_enabled` | Boolean |
| `anvilcraft:charged_jump_enabled` | Boolean |
| `anvilcraft:box_contents` | `BoxContents.CODEC` |
| `anvilcraft:eternal` | `Eternal.CODEC` |
| `anvilcraft:providence` | `Providence.CODEC` |
| `anvilcraft:filter_contents` | `FilterContent.CODEC` |
| `anvilcraft:merciless_enchantments` | `ItemEnchantments.CODEC` |
| `anvilcraft:disabled_enchantments` | `ItemEnchantments.CODEC` |
| `anvilcraft:liquid_enchantment` | `ResourceKey.codec(Registries.ENCHANTMENT)` |
| `anvilcraft:can_take_out_ammo` | Boolean |
| `anvilcraft:weakening` | Boolean |
| `anvilcraft:pill_box_contents` | `PillBoxContents.CODEC` |
| `anvilcraft:over_limit_item_container_contents` | `OverLimitItemContainerContents.CODEC` |
| `anvilcraft:amulet` | `ResourceKey.codec(ModRegistryKeys.AMULET)` |
| `anvilcraft:amulet_weight` | Integer |
| `anvilcraft:comrades` | `Comrades.CODEC` |
| `anvilcraft:storage` | `StorageRef.CODEC` |
| `anvilcraft:terminal_binding` | `TerminalBinding.CODEC` |
| `anvilcraft:terminal_balance_mode` | `BalanceMode.CODEC` |
| `anvilcraft:crafting` | `CraftingStorage.CODEC` |

## `disk_data`

**DiskData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `tag` | `CompoundTag.CODEC` | Required | Tag content to write [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L13) |

## `structure_disk_data`

**StructureDiskData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `file` | String | Required | Structure storage file identifier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L30) |
| `name` | String | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L31) |
| `uuid` | `UUIDUtil.CODEC` | Required | Unique identifier of the associated structure [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L32) |
| `direction` | `Direction.CODEC` | Optional, default `Direction.NORTH` | Structure orientation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L33) |
| `sizeX` | Integer | Required | X-axis size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L34) |
| `sizeY` | Integer | Required | Y-axis size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L35) |
| `sizeZ` | Integer | Required | Z-axis size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L36) |
| `upsideDown` | Boolean | Optional, default `false` | Whether to flip the structure upside down [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L37) |
| `autoRotate` | Boolean | Optional, default `true` | Whether to allow auto-rotating the blueprint [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L38) |

## `saved_entity`

**SavedEntity**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `tag` | `CompoundTag.CODEC` | Required | Tag content to write [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L21) |
| `isMonster` | Boolean | Required | Records whether the captured entity is a monster [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L24) |

## `heliostats_data`

**HeliostatsData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `pos` | 3-integer coordinates | Required | Block position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L12) |

## `structure_data`

**StructureData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `minX` | Integer | Required | X-axis lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L15) |
| `minY` | Integer | Required | Y-axis lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L16) |
| `minZ` | Integer | Required | Z-axis lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L17) |
| `maxX` | Integer | Required | X-axis upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L18) |
| `maxY` | Integer | Required | Y-axis upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L19) |
| `maxZ` | Integer | Required | Z-axis upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L20) |

## `multiphase`

**Multiphase**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `phases` | `Phase.CODEC` array | Required | Recorded phases [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L30) |
| `active_phase` | Integer | Required | Currently active phase [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L31) |
| `merciless` | Boolean | Optional, default `false` | Merciless attribute configuration [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L32) |
| `id` | `Codec.PASSTHROUGH` | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L34) |

**Phase**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `custom_name` | `ComponentSerialization.FLAT_CODEC` | Optional | Custom name text [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L153) |
| `repair_cost` | Integer | Required | Anvil repair cost [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L154) |
| `enchantments` | `ItemEnchantments.CODEC` | Required | Enchantment data [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L155) |

## `box_contents`

**BoxContents**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `amulets` | Item stack object array | Required | Stored amulet list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L27) |
| `totems` | Item stack object array | Required | Stored totem list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L28) |
| `selection` | Integer | Required | Currently selected index [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L29) |

## `filter_contents`

**FilterContent**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `list` | `ItemStack.OPTIONAL_CODEC` array | Required | Filter item list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L32) |
| `include_components` | Boolean | Required | Whether to compare components when matching filtered items [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L35) |
| `deny_list` | Boolean | Required | Enable deny list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L37) |
| `black_list` | Boolean | Required | Legacy blacklist toggle [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L37) |

## `pill_box_contents`

**PillBoxContents**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `pills` | Item stack object array | Required | Stored pills [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L25) |

## `over_limit_item_container_contents`

**Slot**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `slot` | Integer `0 to 255` | Required | Slot index [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L195) |

## `comrades`

**Comrades**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `players` | `UUIDUtil.CODEC` array | Optional, default `[]` | Recorded player list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L21) |

## `storage`

**StorageRef**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `type` | `IStorageType.HOLDER_CODEC` | Required | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L27) |
| `id` | `UUIDUtil.CODEC` | Optional | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L30) |

## `terminal_binding`

**TerminalBinding**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | `UUIDUtil.CODEC` | Optional | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L17) |

## `crafting`

**CraftingStorage**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `stonecutter_input` | `ItemStack.OPTIONAL_CODEC` | Required | Stonecutter input [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L42) |
| `crafting_input` | `ItemStack.OPTIONAL_CODEC` array | Required | Ingredients in crafting grid [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L43) |
| `stonecutter_selected` | Integer | Optional, default `0` | Selected stonecutting recipe [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L44) |
| `last_opened` | Boolean | Optional, default `false` | Last opened storage screen [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L45) |
| `auto_fill` | Boolean | Optional, default `false` | Whether to auto-fill crafting ingredients [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L46) |
| `to_storage` | Boolean | Optional, default `false` | Whether to output to storage [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L47) |

[ModComponents.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModComponents.java)
