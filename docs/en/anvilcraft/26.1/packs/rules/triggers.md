# Advancement Triggers

Inside the `criteria` object of `data/<namespace>/advancement/<name>.json`, each named criterion contains a `trigger` string and an optional `conditions` object. The field tables below describe `conditions` for each trigger. For example, when checking mineral fountain creation, note the registered ID is spelled `anvilcraft:mineral_fountain_crate`.

## Usage Example

Add a hidden advancement to a modpack that is granted when a block placer successfully places another block placer. Create `data/workshop/advancement/automation/place_a_placer.json` using AnvilCraft's block predicate to match the target. Omitting `display` keeps the advancement out of the UI. During debugging, run `/advancement revoke @s only workshop:automation/place_a_placer` to clear it and retry.

```json
{
  "criteria": {
    "placer_place_placer": {
      "conditions": {
        "block": {
          "block": "anvilcraft:block_placer"
        }
      },
      "trigger": "anvilcraft:placer_place_block"
    }
  },
  "requirements": [
    [
      "placer_place_placer"
    ]
  ]
}
```

[Upstream placer advancement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/advancement/anvilcraft/block_placer.json)

## Types & Fields

### `anvilcraft:placer_place_block`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L29) |
| `block` | `BlockPredicate.CODEC` | Optional | Match condition for target blocks [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L30) |

[PlacerPlaceTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java)

### `anvilcraft:placer_shuttle`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `ContextAwarePredicate.CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L25) |

[PlacerShuttleTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java)

### `anvilcraft:devourer_devour_block`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L27) |
| `block` | `BlockPredicate.CODEC` | Optional | Match condition for target blocks [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L28) |

[DevourerDevourTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java)

### `anvilcraft:lifting_anvil`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L26) |

[MagnetLiftingAnvilTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java)

### `anvilcraft:anvil_on_ground`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L26) |

[AnvilOnGroundTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java)

### `anvilcraft:milk`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L26) |

[MilkTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java)

### `anvilcraft:anvil_looting`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L33) |
| `entity` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Entity predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L34) |

[AnvilLootingTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java)

### `anvilcraft:repair_iron_golem`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L26) |

[DispenserRepairIronGolem.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java)

### `anvilcraft:in_world_recipe`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L29) |
| `recipeType` | Resource ID | Optional | Matched recipe type [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L30) |
| `id` | Resource ID | Optional | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L31) |

[InWorldRecipeTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java)

### `anvilcraft:anvil_hammer_click_block`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L29) |
| `type` | String | Optional | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L30) |

[AnvilHammerClickBlockTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java)

### `anvilcraft:anvil_hammer_change_block`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L32) |
| `old_state` | Block state predicate | Optional | State predicate before transformation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L33) |
| `new_state` | Block state predicate | Optional | State predicate after transformation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L34) |

[AnvilHammerChangeBlockTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java)

### `anvilcraft:anvil_hammer_hurt_entity`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L38) |
| `damage` | Number | Optional | Damage source or damage predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L39) |
| `item` | `ItemPredicate.CODEC` | Optional | Item or item stack [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L40) |

[AnvilHammerHurtEntityTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java)

### `anvilcraft:player_killed_entity_by_anvil_hammer`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L33) |
| `entity` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Entity predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L34) |

[PlayerKilledEntityByAnvilHammerTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java)

### `anvilcraft:anvil_hit_piezoelectric_crystal`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L26) |

[AnvilHitPiezoelectricCrystalTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java)

### `anvilcraft:enter_power_grid`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L26) |

[EnterPowerGridTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java)

### `anvilcraft:convert_beacon`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L26) |

[ConvertBeaconTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java)

### `anvilcraft:fire_reforge`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L26) |

[FireReforgeTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java)

### `anvilcraft:electric_allergy`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L30) |

[ElectricAllergyTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java)

### `anvilcraft:connect_fluid_containers`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConnectFluidContainersTrigger.java#L26) |

[ConnectFluidContainersTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConnectFluidContainersTrigger.java)

### `anvilcraft:heat_collector_collect`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L36) |
| `collecting` | Block state predicate | Optional | Constrains heat collection state [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L37) |
| `output` | `MinMaxBounds.Ints.CODEC` | Optional | Converted result [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L38) |

[HeatCollectorTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java)

### `anvilcraft:void_collector_collect`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L28) |

[VoidCollectorTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java)

### `anvilcraft:mineral_fountain_crate`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `ContextAwarePredicate.CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L25) |

[MineralFountainCreateTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java)

### `anvilcraft:use_item`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L29) |
| `item` | `ItemPredicate.CODEC` | Optional | Item or item stack [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L30) |

[UseItemTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java)

### `anvilcraft:block_comparator_turn_over`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L26) |

[BlockComparatorTurnOverTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java)

### `anvilcraft:multi_block_form`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L26) |

[MultiBlockFormTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java)

### `anvilcraft:player_wear_anvil_hammer`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L26) |

[PlayerWearAnvilHammerTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java)

### `anvilcraft:pipe_connect_containers`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L26) |

[PipeConnectContainersTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java)

### `anvilcraft:void_energy_collector_working`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L26) |

[VoidEnergyCollectorWorkingTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java)

### `anvilcraft:celestial_evolution`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L32) |
| `mass_anvils` | `MinMaxBounds.Ints.CODEC` | Optional | Anvil count condition for evolution mass [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L33) |
| `terminal` | `StellarTerminal.Kind.CODEC` | Optional | Body left after evolution completes [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L34) |

[CelestialEvolutionTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java)

### `anvilcraft:planet_detonation`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L26) |

[PlanetDetonationTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java)

### `anvilcraft:planetary_collapse_death`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L26) |

[PlanetaryCollapseDeathTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java)

### `anvilcraft:star_contact_death`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `player` | `EntityPredicate.ADVANCEMENT_CODEC` | Optional | Player predicate that triggers this criterion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L26) |

[StarContactDeathTrigger.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java)

[ModCriterionTriggers.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java)
