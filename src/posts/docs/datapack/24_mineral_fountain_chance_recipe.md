# 概率矿物涌泉配方 (Mineral Fountain Chance Recipe)

该配方在指定维度中，将方块按概率转换为目标方块。

## 基本结构

```json
{
  "type": "anvilcraft:mineral_fountain_chance",
  "dimension": "minecraft:overworld",
  "from_block": {
    "blocks": "minecraft:stone"
  },
  "to_block": {
    "state": { "Name": "minecraft:diamond_ore" },
    "chance": 0.05
  }
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:mineral_fountain_chance`
- `dimension`: 生效维度
- `from_block`: 输入方块条件
- `to_block`: 输出方块与概率

## 说明

- 与 `17_mineral_fountain_recipe.md` 的固定转换不同，该配方按概率执行
- `chance` 建议使用 `0.0` 到 `1.0` 范围的小数

