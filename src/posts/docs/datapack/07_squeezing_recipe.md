# 挤压配方 (Squeezing Recipe)

挤压配方用于使用炼药锅中的流体将方块转换为其他方块。

## 基本结构

```json
{
  "type": "anvilcraft:squeezing",
  "ingredient": {
    "blocks": "minecraft:wet_sponge"
  },
  "result": {
    "block": {
      "Name": "minecraft:sponge"
    },
    "chance": 1.0
  },
  "fluid": "minecraft:water",
  "consume": -1
}
```

## 字段说明

### type

固定值 `anvilcraft:squeezing`，标识这是一个挤压配方。

### ingredient

配方所需的输入方块。元素包含：

- `blocks`: 方块ID（可以是单个方块ID字符串或方块ID数组）

### result

配方的输出结果。元素包含：

- `block`: 方块状态对象，包含方块名称和其他属性
- `chance`: 结果出现的概率（0.0到1.0之间）

### fluid (流体)

流体类型，如 "minecraft:water" 或 "minecraft:lava"

### transform (转换流体)

流体类型，如 "minecraft:water" 或 "minecraft:lava"，表示将要转换成的流体

### consume (流体消耗)

流体消耗量（可选）：

- 正数表示消耗流体
- 负数表示产生流体
- 0 表示不改变流体（默认值）

## 使用示例

将湿海绵挤压成干海绵：

```json
{
  "type": "anvilcraft:squeezing",
  "ingredient": {
    "blocks": "minecraft:wet_sponge"
  },
  "result": {
    "block": {
      "Name": "minecraft:sponge"
    },
    "chance": 1.0
  },
  "fluid": "minecraft:water",
  "consume": -1
}
```