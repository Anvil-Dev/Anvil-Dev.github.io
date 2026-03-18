# 煮沸配方 (Boiling Recipe)

煮沸配方用于在铁砧处理流程中，结合炼药锅流体与营火条件处理物品。

## 基本结构

```json
{
  "type": "anvilcraft:boiling",
  "ingredients": [
    { "items": "minecraft:kelp" }
  ],
  "results": [
    { "id": "minecraft:dried_kelp", "count": 1 }
  ],
  "fluid": "minecraft:water",
  "consume": 1,
  "transform": "minecraft:water"
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:boiling`
- `ingredients`: 输入物品列表
- `results`: 输出结果列表（支持概率结果）
- `fluid`: 所需炼药锅流体
- `consume`: 消耗量（负数表示产出流体）
- `transform`: 处理后转换到的流体

## 说明

- 该配方默认依赖点燃营火作为环境条件
- 常与 `consume` / `transform` 搭配实现流体状态变化

