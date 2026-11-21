# 进度触发器

在 `data/<命名空间>/advancement/<名称>.json` 的 `criteria` 对象内，每个自命名准则包含 `trigger` 字符串和可选 `conditions` 对象。下列字段表描述对应触发器的 `conditions`。例如检查涌泉建立时，注册 ID 拼写为 `anvilcraft:mineral_fountain_crate`。

## 使用示例

```json
{
  "parent": "minecraft:recipes/root",
  "criteria": {
    "has_the_recipe": {
      "conditions": {
        "recipe": "anvilcraft:mineral_fountain_active/lava"
      },
      "trigger": "minecraft:recipe_unlocked"
    }
  },
  "requirements": [
    [
      "has_the_recipe"
    ]
  ],
  "rewards": {
    "recipes": [
      "anvilcraft:mineral_fountain_active/lava"
    ]
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/advancement/recipes/mineral_fountain_active/lava.json)

## 类型与字段

### `anvilcraft:placer_place_block`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L29) |
| `block` | `BlockPredicate.CODEC` | 可省略 | 目标方块的匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L30) |

[PlacerPlaceTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java)

### `anvilcraft:devourer_devour_block`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L27) |
| `block` | `BlockPredicate.CODEC` | 可省略 | 目标方块的匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L28) |

[DevourerDevourTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java)

### `anvilcraft:use_item`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L28) |
| `item` | `ItemPredicate.CODEC` | 可省略 | 物品或物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L29) |

[UseItemTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java)

### `anvilcraft:lifting_anvil`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L26) |

[MagnetLiftingAnvilTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java)

### `anvilcraft:anvil_on_ground`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L26) |

[AnvilOnGroundTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java)

### `anvilcraft:milk`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L26) |

[MilkTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java)

### `anvilcraft:anvil_looting`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L32) |
| `entity` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 实体谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L33) |

[AnvilLootingTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java)

### `anvilcraft:repair_iron_golem`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L26) |

[DispenserRepairIronGolem.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java)

### `anvilcraft:in_world_recipe`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L29) |
| `recipeType` | 资源 ID | 可省略 | 被匹配的配方类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L30) |
| `id` | 资源 ID | 可省略 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L31) |

[InWorldRecipeTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java)

### `anvilcraft:anvil_hammer_click_block`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L29) |
| `type` | 字符串 | 可省略 | 分派到对应实现的类型 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L30) |

[AnvilHammerClickBlockTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java)

### `anvilcraft:anvil_hammer_hurt_entity`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L37) |
| `damage` | 数值 | 可省略 | 伤害来源或伤害谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L38) |
| `item` | `ItemPredicate.CODEC` | 可省略 | 物品或物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L39) |

[AnvilHammerHurtEntityTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java)

### `anvilcraft:player_killed_entity_by_anvil_hammer`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L32) |
| `entity` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 实体谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L33) |

[PlayerKilledEntityByAnvilHammerTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java)

### `anvilcraft:anvil_hit_piezoelectric_crystal`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L26) |

[AnvilHitPiezoelectricCrystalTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java)

### `anvilcraft:enter_power_grid`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L26) |

[EnterPowerGridTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java)

### `anvilcraft:electric_allergy`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L30) |

[ElectricAllergyTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java)

### `anvilcraft:player_wear_anvil_hammer`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L26) |

[PlayerWearAnvilHammerTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java)

### `anvilcraft:convert_beacon`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L26) |

[ConvertBeaconTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java)

### `anvilcraft:fire_reforge`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L26) |

[FireReforgeTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java)

### `anvilcraft:heat_collector_collect`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L36) |
| `collecting` | 方块状态谓词 | 可省略 | 约束热量收集状态 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L37) |
| `output` | `MinMaxBounds.Ints.CODEC` | 可省略 | 转换后的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L38) |

[HeatCollectorTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java)

### `anvilcraft:placer_shuttle`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L26) |

[PlacerShuttleTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java)

### `anvilcraft:mineral_fountain_crate`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `ContextAwarePredicate.CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L25) |

[MineralFountainCreateTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java)

### `anvilcraft:block_comparator_turn_over`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L26) |

[BlockComparatorTurnOverTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java)

### `anvilcraft:pipe_connect_containers`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L26) |

[PipeConnectContainersTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java)

### `anvilcraft:void_energy_collector_working`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L26) |

[VoidEnergyCollectorWorkingTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java)

### `anvilcraft:multi_block_form`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L26) |

[MultiBlockFormTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java)

### `anvilcraft:celestial_evolution`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L32) |
| `mass_anvils` | `MinMaxBounds.Ints.CODEC` | 可省略 | 演化体量的铁砧数条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L33) |
| `terminal` | `StellarTerminal.Kind.CODEC` | 可省略 | 演化结束后留下的天体 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L34) |

[CelestialEvolutionTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java)

### `anvilcraft:planet_detonation`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L26) |

[PlanetDetonationTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java)

### `anvilcraft:planetary_collapse_death`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L26) |

[PlanetaryCollapseDeathTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java)

### `anvilcraft:star_contact_death`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | 可省略 | 触发该准则的玩家谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L26) |

[StarContactDeathTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java)

[ModCriterionTriggers.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java)
