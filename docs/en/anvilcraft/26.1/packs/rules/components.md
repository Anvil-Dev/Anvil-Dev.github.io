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
| `anvilcraft:terminal_binding` | `TerminalBinding.CODEC` |
| `anvilcraft:charged_jump_enabled` | Boolean |
| `anvilcraft:night_vision_enabled` | Boolean |
| `anvilcraft:terminal_balance_mode` | `BalanceMode.CODEC` |
| `anvilcraft:crafting` | `CraftingStorage.CODEC` |
| `anvilcraft:disk_data` | `DiskData.CODEC` |
| `anvilcraft:saved_entity` | `SavedEntity.CODEC` |
| `anvilcraft:heliostats_data` | `HeliostatsData.CODEC` |
| `anvilcraft:structure_data` | `StructureData.CODEC` |
| `anvilcraft:structure_disk_data` | `StructureDiskData.CODEC` |
| `anvilcraft:display_item` | `StoredItem.CODEC` |
| `anvilcraft:signed_player` | `SignedPlayers.CODEC` |
| `anvilcraft:flight_time` | `FlightTime.CODEC` |
| `anvilcraft:stored_energy` | `StoredEnergy.CODEC` |
| `anvilcraft:railgun_ammo` | `ChargedProjectiles.CODEC` |
| `anvilcraft:railgun_infinite_ammo_mask` | Integer |
| `anvilcraft:reforging` | Empty object `{}` |
| `anvilcraft:multiphase` | `Multiphase.CODEC` |
| `anvilcraft:merciless` | `Merciless.CODEC` |
| `anvilcraft:ferocious` | `Ferocious.CODEC` |
| `anvilcraft:devour_range` | `DevourRange.CODEC` |
| `anvilcraft:devour_protect_containers` | Boolean |
| `anvilcraft:box_contents` | `BoxContents.CODEC` |
| `anvilcraft:eternal` | `Eternal.CODEC` |
| `anvilcraft:providence` | Empty object `{}` |
| `anvilcraft:filter_contents` | `FilterContent.CODEC` |
| `anvilcraft:merciless_enchantments` | `ItemEnchantments.CODEC` |
| `anvilcraft:disabled_enchantments` | `ItemEnchantments.CODEC` |
| `anvilcraft:liquid_enchantment` | `Enchantment.CODEC` |
| `anvilcraft:can_take_out_ammo` | `CanTakeOutAmmo.CODEC` |
| `anvilcraft:weakening` | Boolean |
| `anvilcraft:pill_box_contents` | `PillBoxContents.CODEC` |
| `anvilcraft:over_limit_item_container_contents` | `OverLimitItemContainerContents.CODEC` |
| `anvilcraft:resonate_mode` | `ResonateMode.CODEC` |
| `anvilcraft:multitool_mode` | `MultitoolMode.CODEC` |
| `anvilcraft:heavy_halberd_mode` | `HeavyHalberdMode.CODEC` |
| `anvilcraft:burning_heater_contents` | `ItemContainerContents.CODEC` |
| `anvilcraft:creative_tank_fluids` | `StoredFluids.CODEC` |
| `anvilcraft:amulet` | `ResourceKey.codec(ModRegistryKeys.AMULET)` |
| `anvilcraft:amulet_weight` | Integer |
| `anvilcraft:comrades` | `Comrades.CODEC` |
| `anvilcraft:storage` | `StorageRef.CODEC` |

## `terminal_binding`

**TerminalBinding**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | `UUIDUtil.CODEC` | Optional | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L23) |

## `crafting`

**CraftingStorage**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `stonecutter_input` | `ItemStack.OPTIONAL_CODEC` | Required | Stonecutter input [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L42) |
| `crafting_input` | `ItemStack.OPTIONAL_CODEC` array | Required | Ingredients in crafting grid [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L43) |
| `stonecutter_selected` | Integer | Optional, default `0` | Selected stonecutting recipe [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L44) |
| `last_opened` | Boolean | Optional, default `false` | Last opened storage screen [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L45) |
| `auto_fill` | Boolean | Optional, default `false` | Whether to auto-fill crafting ingredients [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L46) |
| `to_storage` | Boolean | Optional, default `false` | Whether to output to storage [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L47) |

## `disk_data`

**DiskData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `tag` | `CompoundTag.CODEC` | Required | Tag content to write [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L22) |

## `saved_entity`

**SavedEntity**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `type` | `EntityType.CODEC` | Required | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L25) |
| `tag` | `CompoundTag.CODEC` | Required | Tag content to write [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L28) |
| `isMonster` | Boolean | Required | Records whether the captured entity is a monster [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L31) |

## `heliostats_data`

**HeliostatsData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `pos` | 3-integer coordinates | Required | Block position [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L12) |

## `structure_data`

**StructureData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `minX` | Integer | Required | X-axis lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L15) |
| `minY` | Integer | Required | Y-axis lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L16) |
| `minZ` | Integer | Required | Z-axis lower bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L17) |
| `maxX` | Integer | Required | X-axis upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L18) |
| `maxY` | Integer | Required | Y-axis upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L19) |
| `maxZ` | Integer | Required | Z-axis upper bound [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L20) |

## `structure_disk_data`

**StructureDiskData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `file` | String | Required | Structure storage file identifier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L34) |
| `name` | String | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L35) |
| `uuid` | `UUIDUtil.CODEC` | Required | Unique identifier of the associated structure [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L36) |
| `direction` | `Direction.CODEC` | Optional, default `Direction.NORTH` | Structure orientation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L37) |
| `sizeX` | Integer | Required | X-axis size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L38) |
| `sizeY` | Integer | Required | Y-axis size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L39) |
| `sizeZ` | Integer | Required | Z-axis size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L40) |
| `upsideDown` | Boolean | Optional, default `false` | Whether to flip the structure upside down [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L41) |
| `autoRotate` | Boolean | Optional, default `true` | Whether to allow auto-rotating the blueprint [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L42) |

## `flight_time`

**FlightTime**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `time` | Integer | Optional, default `0` | Time parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FlightTime.java#L23) |

## `stored_energy`

**StoredEnergy**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `energy` | Integer | Optional, default `0` | Energy property [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L25) |

## `multiphase`

**Multiphase**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `phases` | `Phase.CODEC` array | Required | Recorded phases [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L37) |
| `active_phase` | Integer | Required | Currently active phase [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L38) |
| `merciless` | Boolean | Optional, default `false` | Merciless attribute configuration [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L39) |
| `id` | `Codec.PASSTHROUGH` | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L41) |

**Phase**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `custom_name` | `Phase.NAME_CODEC` | Optional | Custom name text [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L179) |
| `repair_cost` | Integer | Required | Anvil repair cost [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L180) |
| `enchantments` | `ItemEnchantments.CODEC` | Required | Enchantment data [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L181) |

## `box_contents`

**BoxContents**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `amulets` | `ItemStack.OPTIONAL_CODEC` array | Required | Stored amulet list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L34) |
| `totems` | `ItemStack.OPTIONAL_CODEC` array | Required | Stored totem list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L35) |
| `selection` | Integer | Required | Currently selected index [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L36) |

## `filter_contents`

**FilterContent**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `list` | `ItemStack.OPTIONAL_CODEC` array | Required | Filter item list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L37) |
| `include_components` | Boolean | Required | Whether to compare components when matching filtered items [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L40) |
| `deny_list` | Boolean | Required | Enable deny list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L42) |
| `black_list` | Boolean | Required | Legacy blacklist toggle [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L42) |

## `pill_box_contents`

**PillBoxContents**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `pills` | Item stack object array | Required | Stored pills [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L24) |

## `over_limit_item_container_contents`

**Slot**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `slot` | Integer `0 to 255` | Required | Slot index [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L218) |

## `comrades`

**Comrades**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `players` | `UUIDUtil.CODEC` array | Optional, default `[]` | Recorded player list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L21) |

## `storage`

**StorageRef**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `type` | `StorageType.CODEC` | Required | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L26) |
| `id` | `UUIDUtil.CODEC` | Optional | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L29) |

[ModComponents.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModComponents.java)
