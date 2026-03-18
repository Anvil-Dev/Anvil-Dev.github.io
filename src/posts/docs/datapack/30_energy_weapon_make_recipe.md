# 能量武器制作配方 (Energy Weapon Make Recipe)

该配方用于使用最多 6 个输入材料合成能量武器，并保留关键属性数据。

## 基本结构

```json
{
  "type": "anvilcraft:energy_weapon_make",
  "ingredients": [
    { "items": "minecraft:diamond_sword" },
    { "items": "minecraft:redstone" }
  ],
  "result": {
    "id": "anvilcraft:energy_blade",
    "count": 1
  }
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:energy_weapon_make`
- `ingredients`: 输入配料列表（1~6）
- `result`: 输出武器
- `neoforge:conditions`: 可选条件数组

## 说明

- 运行时会尝试继承部分附魔与能量数据

