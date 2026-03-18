---
prev:
   text: 充放电配方 (Charger Charging Recipe)
   link: /posts/docs/datapack/25_charger_charging_recipe
next:
   text: 中子辐照配方 (Neutron Irradiation Recipe)
   link: /posts/docs/datapack/27_neutron_irradiation_recipe
---

# 多重合一锻造配方 (Multiple To One Smithing Recipe)

该系列配方用于在同一模板/材料下，将 2、4、8 个输入位合成一个结果。

## 配方类型

- `anvilcraft:multiple_to_one_smithing`（基础类型）
- `anvilcraft:two_to_one_smithing`
- `anvilcraft:four_to_one_smithing`
- `anvilcraft:eight_to_one_smithing`

## 基本结构

```json
{
  "type": "anvilcraft:two_to_one_smithing",
  "template": { "items": "anvilcraft:two_to_one_smithing_template" },
  "material": { "items": "minecraft:iron_ingot" },
  "inputs": [
    { "items": "minecraft:stone" },
    { "items": "minecraft:andesite" }
  ],
  "result": {
    "id": "minecraft:polished_andesite",
    "count": 1
  }
}
```

## 字段说明

- `template`: 模板条件
- `material`: 材料条件
- `inputs`: 多输入位配料列表（数量由类型决定）
- `result`: 输出结果

