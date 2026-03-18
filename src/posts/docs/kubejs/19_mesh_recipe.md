---
prev:
   text: 烹饪配方 (Cooking Recipe)
   link: /posts/docs/kubejs/18_cooking_recipe
next:
   text: 概率矿物涌泉配方 (Mineral Fountain Chance Recipe)
   link: /posts/docs/kubejs/20_mineral_fountain_chance_recipe
---

# 筛网配方 (Mesh Recipe)

筛网配方用于在筛网/脚手架环境下过滤并转化掉落物。

## 基本结构

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:mesh",
    ingredients: [
      { items: "minecraft:gravel" }
    ],
    results: [
      { id: "minecraft:flint", count: 1 }
    ]
  })
})
```

## 字段说明

- `type`: 固定值 `anvilcraft:mesh`
- `ingredients`: 输入物品列表
- `results`: 输出结果列表（支持概率结果）

## KubeJS 风格构建器

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mesh()
    .requires("minecraft:gravel")
    .result("minecraft:flint")
})
```

## 常用方法

- `requires(...)`: 添加输入
- `result(...)`: 添加输出（支持数量/概率重载）

