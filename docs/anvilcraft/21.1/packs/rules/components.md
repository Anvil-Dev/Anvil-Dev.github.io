# 物品栈组件

配方产物和战利品均能携带组件。在物品栈的 `components` 对象里以注册 ID 为键。例如下面的结果栈显式写入储能值。

```json
{
  "id": "anvilcraft:magnet_ingot",
  "count": 1,
  "components": {
    "anvilcraft:stored_energy": 16
  }
}
```

## 组件值

下表描述组件存在时的持久化格式。省略组件表示使用物品的默认组件集合。

| 组件 | 值类型或 Codec |
| --- | --- |
| `anvilcraft:disk_data` | `DiskData.CODEC` |
| `anvilcraft:structure_disk_data` | `StructureDiskData.CODEC` |
| `anvilcraft:saved_entity` | `SavedEntity.CODEC` |
| `anvilcraft:heliostats_data` | `HeliostatsData.CODEC` |
| `anvilcraft:structure_data` | `StructureData.CODEC` |
| `anvilcraft:display_item` | `StoredItem.CODEC` |
| `anvilcraft:signed_player` | `SignedPlayers.CODEC` |
| `anvilcraft:stored_energy` | 整数 |
| `anvilcraft:railgun_ammo` | `ChargedProjectiles.CODEC` |
| `anvilcraft:railgun_infinite_ammo_mask` | 整数 |
| `anvilcraft:reforging` | 空对象 `{}` |
| `anvilcraft:multiphase` | `Multiphase.CODEC` |
| `anvilcraft:merciless` | `Merciless.CODEC` |
| `anvilcraft:ferocious` | `Ferocious.CODEC` |
| `anvilcraft:devour_range` | 整数 |
| `anvilcraft:devour_protect_containers` | 布尔值 |
| `anvilcraft:night_vision_enabled` | 布尔值 |
| `anvilcraft:charged_jump_enabled` | 布尔值 |
| `anvilcraft:box_contents` | `BoxContents.CODEC` |
| `anvilcraft:eternal` | `Eternal.CODEC` |
| `anvilcraft:providence` | `Providence.CODEC` |
| `anvilcraft:filter_contents` | `FilterContent.CODEC` |
| `anvilcraft:merciless_enchantments` | `ItemEnchantments.CODEC` |
| `anvilcraft:disabled_enchantments` | `ItemEnchantments.CODEC` |
| `anvilcraft:liquid_enchantment` | `ResourceKey.codec(Registries.ENCHANTMENT)` |
| `anvilcraft:can_take_out_ammo` | 布尔值 |
| `anvilcraft:weakening` | 布尔值 |
| `anvilcraft:pill_box_contents` | `PillBoxContents.CODEC` |
| `anvilcraft:over_limit_item_container_contents` | `OverLimitItemContainerContents.CODEC` |
| `anvilcraft:amulet` | `ResourceKey.codec(ModRegistryKeys.AMULET)` |
| `anvilcraft:amulet_weight` | 整数 |
| `anvilcraft:comrades` | `Comrades.CODEC` |
| `anvilcraft:storage` | `StorageRef.CODEC` |
| `anvilcraft:terminal_binding` | `TerminalBinding.CODEC` |
| `anvilcraft:terminal_balance_mode` | `BalanceMode.CODEC` |
| `anvilcraft:crafting` | `CraftingStorage.CODEC` |

## `disk_data`

**DiskData**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `tag` | `CompoundTag.CODEC` | 必填 | 写入的标签内容 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L13) |

## `structure_disk_data`

**StructureDiskData**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `file` | 字符串 | 必填 | 结构存储文件标识 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L30) |
| `name` | 字符串 | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L31) |
| `uuid` | `UUIDUtil.CODEC` | 必填 | 关联结构的唯一标识 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L32) |
| `direction` | `Direction.CODEC` | 可省略，默认 `Direction.NORTH` | 结构朝向 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L33) |
| `sizeX` | 整数 | 必填 | X 轴尺寸 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L34) |
| `sizeY` | 整数 | 必填 | Y 轴尺寸 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L35) |
| `sizeZ` | 整数 | 必填 | Z 轴尺寸 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L36) |
| `upsideDown` | 布尔值 | 可省略，默认 `false` | 是否上下翻转结构 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L37) |
| `autoRotate` | 布尔值 | 可省略，默认 `true` | 是否允许自动旋转蓝图 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L38) |

## `saved_entity`

**SavedEntity**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `tag` | `CompoundTag.CODEC` | 必填 | 写入的标签内容 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L21) |
| `isMonster` | 布尔值 | 必填 | 记录捕获对象是否为怪物 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L24) |

## `heliostats_data`

**HeliostatsData**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `pos` | 三整数坐标 | 必填 | 方块位置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L12) |

## `structure_data`

**StructureData**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `minX` | 整数 | 必填 | X 轴下界 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L15) |
| `minY` | 整数 | 必填 | Y 轴下界 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L16) |
| `minZ` | 整数 | 必填 | Z 轴下界 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L17) |
| `maxX` | 整数 | 必填 | X 轴上界 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L18) |
| `maxY` | 整数 | 必填 | Y 轴上界 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L19) |
| `maxZ` | 整数 | 必填 | Z 轴上界 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L20) |

## `multiphase`

**Multiphase**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `phases` | `Phase.CODEC`数组 | 必填 | 已记录的相位 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L30) |
| `active_phase` | 整数 | 必填 | 当前生效的相位 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L31) |
| `merciless` | 布尔值 | 可省略，默认 `false` | 无情属性的配置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L32) |
| `id` | `Codec.PASSTHROUGH` | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L34) |

**Phase**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `custom_name` | `ComponentSerialization.FLAT_CODEC` | 可省略 | 自定义名称文本 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L153) |
| `repair_cost` | 整数 | 必填 | 铁砧修复费用 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L154) |
| `enchantments` | `ItemEnchantments.CODEC` | 必填 | 附魔数据 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L155) |

## `box_contents`

**BoxContents**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `amulets` | 物品栈对象数组 | 必填 | 已存护符列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L27) |
| `totems` | 物品栈对象数组 | 必填 | 已存图腾列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L28) |
| `selection` | 整数 | 必填 | 当前选择的位置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L29) |

## `filter_contents`

**FilterContent**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `list` | `ItemStack.OPTIONAL_CODEC`数组 | 必填 | 过滤器物品列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L32) |
| `include_components` | 布尔值 | 必填 | 匹配过滤物品时是否比较组件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L35) |
| `deny_list` | 布尔值 | 必填 | 启用排除列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L37) |
| `black_list` | 布尔值 | 必填 | 旧式黑名单开关 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L37) |

## `pill_box_contents`

**PillBoxContents**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `pills` | 物品栈对象数组 | 必填 | 已存药丸 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L25) |

## `over_limit_item_container_contents`

**Slot**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `slot` | 整数 `0 至 255` | 必填 | 槽位编号 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L195) |

## `comrades`

**Comrades**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `players` | `UUIDUtil.CODEC`数组 | 可省略，默认 `[]` | 记录的玩家列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L21) |

## `storage`

**StorageRef**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `type` | `IStorageType.HOLDER_CODEC` | 必填 | 分派到对应实现的类型 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L27) |
| `id` | `UUIDUtil.CODEC` | 可省略 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L30) |

## `terminal_binding`

**TerminalBinding**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | `UUIDUtil.CODEC` | 可省略 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L17) |

## `crafting`

**CraftingStorage**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `stonecutter_input` | `ItemStack.OPTIONAL_CODEC` | 必填 | 切石机输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L42) |
| `crafting_input` | `ItemStack.OPTIONAL_CODEC`数组 | 必填 | 合成网格的原料 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L43) |
| `stonecutter_selected` | 整数 | 可省略，默认 `0` | 选中的切石配方 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L44) |
| `last_opened` | 布尔值 | 可省略，默认 `false` | 最近打开的存储界面 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L45) |
| `auto_fill` | 布尔值 | 可省略，默认 `false` | 是否自动填充合成原料 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L46) |
| `to_storage` | 布尔值 | 可省略，默认 `false` | 是否输出到存储 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/CraftingStorage.java#L47) |

[ModComponents.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModComponents.java)
