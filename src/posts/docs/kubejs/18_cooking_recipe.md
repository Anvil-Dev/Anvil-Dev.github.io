---
prev:
   text: 煮沸配方 (Boiling Recipe)
   link: /posts/docs/kubejs/17_boiling_recipe
next:
   text: 筛网配方 (Mesh Recipe)
   link: /posts/docs/kubejs/19_mesh_recipe
---

# 烹饪配方 (Cooking Recipe)

烹饪配方用于在加热环境下将输入物品处理为输出物品，并可配合炼药锅流体条件。

## 基本结构

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:cooking",
    ingredients: [
      {
        items: "minecraft:beef"
      }
    ],
    results: [
      {
        id: "minecraft:cooked_beef",
        count: 1
      }
    ],
    fluid: "minecraft:water",
    consume: 0,
    transform: "anvilcraft:null"
  })
})
```

## 字段说明

- `type`: 固定值 `anvilcraft:cooking`
- `ingredients`: 输入物品列表
- `results`: 输出结果列表（支持概率结果）
- `fluid`: 可选炼药锅流体条件
- `consume`: 流体消耗量（负数表示产出）
- `transform`: 处理后的流体转换目标

## KubeJS 风格构建器

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.cooking()
    .requires("minecraft:beef")
    .result("minecraft:cooked_beef")
    .cauldron("minecraft:water")
})
```

## 常用方法

- `requires(...)`: 添加输入
- `result(...)`: 添加输出
- `cauldron(...)`: 设置炼药锅流体
- `consumeFluid(true)`: 启用流体消耗
- `produceFluid(true)`: 启用流体产出
- `transform(...)`: 设置流体转换


