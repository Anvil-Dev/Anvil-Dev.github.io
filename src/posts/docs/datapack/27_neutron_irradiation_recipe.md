# 中子辐照配方 (Neutron Irradiation Recipe)

中子辐照配方在中子辐照器环境下处理物品，并可结合炼药锅流体参数。

## 基本结构

```json
{
  "type": "anvilcraft:neutron_irradiation",
  "ingredients": [
    { "items": "minecraft:coal" }
  ],
  "results": [
    { "id": "minecraft:diamond", "count": 1 }
  ],
  "fluid": "minecraft:water",
  "consume": 1,
  "transform": "minecraft:water",
  "chance": 1.0
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:neutron_irradiation`
- `ingredients`: 输入物品列表
- `results`: 输出结果列表
- `fluid` / `consume` / `transform` / `chance`: 炼药锅流体条件（`HasCauldronSimple`）

## 说明

- 该配方依赖中子辐照器方块环境

