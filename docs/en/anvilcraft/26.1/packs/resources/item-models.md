# Item Definitions and Special Renderers

Resource packs associate an item with its display model in `assets/<namespace>/items/<item>.json`. To show the current contents of a fluid tank, keep its base model and let AnvilCraft's special renderer draw the changing contents.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/assets/anvilcraft/items/fluid_tank.json)

| Field path | Type | Requirement and meaning |
| --- | --- | --- |
| `model` | Object | Required. The root node of the item model. |
| `model.type` | ID | Use `minecraft:special` for special rendering. |
| `model.base` | Model ID | Required for a special model node. Defines the base appearance, including display transforms. |
| `model.model` | Object | Required for a special model node. Its `type` selects the renderer. |
| `hand_animation_on_swap` | Boolean | Optional. The example disables the hand animation when switching to this item. |

## Registered Special Renderers

| Type | Fields or source |
| --- | --- |
| `anvilcraft:celestial_forging_anvil` |  [CelestialForgingAnvilItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java) |
| `anvilcraft:filter` | Only the type ID is required. [FilterItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java) |
| `anvilcraft:disk` | Only the type ID is required. [DiskItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java) |
| `anvilcraft:spectral_slingshot` | Only the type ID is required. [SpectralSlingshotRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java) |
| `anvilcraft:spectral_weapon_launcher` | Only the type ID is required. [SpectralWeaponLauncherRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java) |
| `anvilcraft:creative_crate` | Only the type ID is required. [CreativeCrateItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java) |
| `anvilcraft:creative_fluid_tank` | Only the type ID is required. [CreativeFluidTankItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java) |
| `anvilcraft:fluid_tank` | Only the type ID is required. [FluidTankItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java) |
| `anvilcraft:has_mob_block` |  [HasMobBlockItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java) |
| `anvilcraft:large_fluid_tank` | Only the type ID is required. [LargeFluidTankItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java) |
| `anvilcraft:storage_port` | Only the type ID is required. [StoragePortItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java) |
| `anvilcraft:storage_fluid_port` | Only the type ID is required. [StorageFluidPortItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java) |
| `anvilcraft:ruins_block` | Only the type ID is required. [RuinsBlockItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java) |
| `anvilcraft:monolith` |  [MonolithItemRenderer.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java) |

## Equipment Textures

Declare worn equipment models in `assets/<namespace>/equipment/<name>.json`. The root `layers` object groups arrays of layers by model use, such as humanoid. Each layer has a `texture` ID. Its optional `use_player_texture` flag controls whether the player's texture is used.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/equipment/ionocraft_backpack.json)
