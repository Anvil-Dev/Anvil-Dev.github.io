---
prev:
   text: 带物品生物转换配方 (Mob Transform With Item Recipe)
   link: /posts/docs/datapack/22_mob_transform_with_item_recipe
next:
   text: 概率矿物涌泉配方 (Mineral Fountain Chance Recipe)
   link: /posts/docs/datapack/24_mineral_fountain_chance_recipe
---

# 多方块转换配方 (Multiblock Conversion Recipe)

多方块转换配方用于将匹配到的输入结构整体替换为输出结构。

## 基本结构

```json
{
  "type": "anvilcraft:multiblock_conversion",
  "inputPattern": {
    "layers": [["AAA", "A A", "AAA"]],
    "symbols": { "A": { "blocks": "minecraft:stone" } }
  },
  "outputPattern": {
    "layers": [["BBB", "B B", "BBB"]],
    "symbols": { "B": { "blocks": "minecraft:deepslate" } }
  }
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:multiblock_conversion`
- `inputPattern`: 输入结构模板
- `outputPattern`: 输出结构模板
- `modifySpawnerAction`: 可选刷怪笼修改行为

## 约束

- 输入与输出结构尺寸必须一致
- 两侧符号定义都必须完整

