# 物品定义与特殊渲染器

资源包用 `assets/<命名空间>/items/<物品名>.json` 将物品关联到显示模型。流体储罐要显示当前内容物，可沿用现有的基础模型，并交给铁砧工艺的特殊渲染器处理可变部分。

```json
{
  "hand_animation_on_swap": false,
  "model": {
    "type": "minecraft:special",
    "base": "anvilcraft:block/fluid_tank",
    "model": {
      "type": "anvilcraft:fluid_tank"
    }
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/assets/anvilcraft/items/fluid_tank.json)

| 字段路径 | 类型 | 要求与含义 |
| --- | --- | --- |
| `model` | 对象 | 必填，物品模型的根节点。 |
| `model.type` | ID | 使用特殊渲染时填写 `minecraft:special`。 |
| `model.base` | 模型 ID | 特殊模型节点必填，指定显示变换等基础表现。 |
| `model.model` | 对象 | 特殊模型节点必填。以其中的 `type` 选择具体渲染器。 |
| `hand_animation_on_swap` | 布尔值 | 可选。示例显式关闭切换到这件物品的手部动画。 |

## 已注册的特殊渲染器

| 类型 | 字段或来源 |
| --- | --- |
| `anvilcraft:celestial_forging_anvil` |  [CelestialForgingAnvilItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java) |
| `anvilcraft:filter` | 仅需类型 ID。 [FilterItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java) |
| `anvilcraft:disk` | 仅需类型 ID。 [DiskItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java) |
| `anvilcraft:spectral_slingshot` | 仅需类型 ID。 [SpectralSlingshotRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java) |
| `anvilcraft:spectral_weapon_launcher` | 仅需类型 ID。 [SpectralWeaponLauncherRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java) |
| `anvilcraft:creative_crate` | 仅需类型 ID。 [CreativeCrateItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java) |
| `anvilcraft:creative_fluid_tank` | 仅需类型 ID。 [CreativeFluidTankItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java) |
| `anvilcraft:fluid_tank` | 仅需类型 ID。 [FluidTankItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java) |
| `anvilcraft:has_mob_block` |  [HasMobBlockItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java) |
| `anvilcraft:large_fluid_tank` | 仅需类型 ID。 [LargeFluidTankItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java) |
| `anvilcraft:storage_port` | 仅需类型 ID。 [StoragePortItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java) |
| `anvilcraft:storage_fluid_port` | 仅需类型 ID。 [StorageFluidPortItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java) |
| `anvilcraft:ruins_block` | 仅需类型 ID。 [RuinsBlockItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java) |
| `anvilcraft:monolith` |  [MonolithItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java) |

## 装备贴图

穿戴模型在 `assets/<命名空间>/equipment/<名称>.json` 声明。根对象的 `layers` 按人体等模型用途组织图层数组。每层的 `texture` 是纹理 ID，`use_player_texture` 可选并决定是否使用玩家贴图。

```json
{
  "layers": {
    "humanoid": [
      {
        "texture": "anvilcraft:ionocraft_backpack",
        "use_player_texture": false
      }
    ]
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/equipment/ionocraft_backpack.json)
