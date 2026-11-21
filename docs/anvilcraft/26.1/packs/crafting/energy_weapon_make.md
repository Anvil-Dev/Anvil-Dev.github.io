# 能量武器制作

为能量武器指定一至六个原料谓词和结果栈。依赖外部模组时可配合 NeoForge 加载条件。

在数据包中建立 `data/example/recipe/energy_weapon_make/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:energy_weapon_make/example`。

## 配方示例

```json
{
  "type": "anvilcraft:energy_weapon_make",
  "ingredients": [
    {
      "count": 4,
      "items": "anvilcraft:tesla_tower"
    }
  ],
  "result": {
    "id": "anvilcraft:tesla_gun"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/energy_weapon_make/tesla_gun.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:energy_weapon_make`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `neoforge:conditions` | 加载条件数组 | 可省略，默认 `[]` | NeoForge 在载入时计算的条件列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L44) |
| `ingredients` | 物品原料谓词数组 | 必填 | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L48) |
| `result` | 物品栈模板对象 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L51) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java)
