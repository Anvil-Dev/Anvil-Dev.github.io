# 煮沸配方 (Boiling Recipe)

煮沸配方用于在炼药锅环境下处理物品，通常用于低温流体处理与条件转换。

## 基本结构

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:boiling",
    ingredients: [
      {
        items: "minecraft:kelp"
      }
    ],
    results: [
      {
        id: "minecraft:dried_kelp",
        count: 1
      }
    ],
    fluid: "minecraft:water",
    consume: 1,
    transform: "minecraft:water"
  })
})
```

## 字段说明

- `type`: 固定值 `anvilcraft:boiling`
- `ingredients`: 输入物品列表
- `results`: 输出结果列表（支持概率结果）
- `fluid`: 所需炼药锅流体
- `consume`: 流体消耗量（负数表示产出流体）
- `transform`: 处理后炼药锅转换到的流体

## KubeJS 风格构建器

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.boiling()
    .requires("minecraft:kelp")
    .result("minecraft:dried_kelp")
    .cauldron("minecraft:water")
    .consumeFluid(true)
})
```

## 常用方法

- `requires(...)`: 添加输入
- `result(...)`: 添加输出
- `cauldron(...)`: 设置流体条件
- `consumeFluid(true)`: 消耗流体
- `produceFluid(true)`: 产出流体
- `transform(...)`: 设置流体转换目标


