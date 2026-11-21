# 世界内配方条件

在 `anvillib_recipe:in_world_recipe` 中，`trigger` 指定触发时机。铁砧冲击使用 `anvilcraft:on_anvil_fall_on`。内置样例分别使用 `conflicting` 与 `non_conflicting` 保存两组谓词，`outcomes` 保存成功后的动作。位置偏移均相对于触发点。

## 使用示例

```json
{
  "type": "anvillib_recipe:in_world_recipe",
  "compatible": true,
  "conflicting": [
    {
      "type": "anvillib_recipe:has_item_ingredient",
      "item": {
        "items": [
          "anvilcraft:uranium_block",
          "anvilcraft:plutonium_block"
        ]
      },
      "offset": [
        0.0,
        -0.375,
        0.0
      ],
      "range": [
        0.75,
        0.75,
        0.75
      ]
    }
  ],
  "icon": {
    "id": "minecraft:anvil"
  },
  "non_conflicting": [
    {
      "type": "anvilcraft:has_cauldron",
      "fluid": {
        "amount": 0
      },
      "offset": [
        0.0,
        -1.0,
        0.0
      ]
    },
    {
      "type": "anvillib_recipe:has_block",
      "offset": [
        0.0,
        -2.0,
        0.0
      ],
      "predicate": {
        "blocks": "anvilcraft:neutron_irradiator"
      }
    }
  ],
  "outcomes": [
    {
      "type": "anvillib_recipe:choose_one",
      "choices": [
        {
          "outcome": {
            "type": "anvillib_recipe:produce_explosion",
            "fire": false,
            "interact": "block",
            "offset": [
              0.0,
              -0.75,
              0.0
            ],
            "power": 3.0
          },
          "weight": 1.0
        }
      ]
    }
  ],
  "priority": 5,
  "trigger": "anvilcraft:on_anvil_fall_on"
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/neutron_irradiation/radiation_block_explosion.json)

## 类型与字段

### `anvilcraft:has_cauldron`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `offset` | 三维坐标 | 必填 | 相对于触发位置的偏移 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L610) |
| `fluid` | `FluidStackPredicate.CODEC` | 可省略，默认 `FluidStackPredicate.ANY` | 炼药锅的流体匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L611) |
| `consume` | 整数 | 可省略，默认 `0` | 本次工序的消耗设置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L613) |
| `transform` | `TRANSFORMS_CODEC` | 可省略，默认 `[]` | 工序结束时的流体变化 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L614) |
| `chance` | 数值 | 可省略，默认 `1.0f` | 触发概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L616) |
| `ignited` | 布尔值 | 可省略，默认 `false` | 匹配点燃状态 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L617) |

[HasCauldron.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java)

### `anvilcraft:has_cauldron_processor`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `offset` | 三维坐标 | 必填 | 相对于触发位置的偏移 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java#L25) |
| `category` | 资源 ID | 必填 | 选择类别 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java#L26) |

[HasCauldronProcessor.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java)

### `anvilcraft:has_anvil`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `anvil` | 方块状态谓词 | 可省略 | 参与碰撞或压制的铁砧条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java#L35) |
| `inverted` | 布尔值 | 可省略，默认 `false` | 是否反转判断结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java#L38) |

[HasAnvil.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasAnvil.java)

### `anvilcraft:has_diff_items`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredient` | 物品原料谓词 | 必填 | 单个待匹配的原料 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L150) |
| `ingredients` | 物品原料谓词数组 | 必填 | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L151) |
| `offset` | 三维坐标 | 必填 | 相对于触发位置的偏移 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L156) |
| `range` | 三维坐标 | 必填 | 作用范围 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L159) |
| `functions` | `IPredicateFunction.CODEC`数组 | 可省略，默认 `[]` | 对匹配结果执行的谓词函数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java#L164) |

[HasDiffItems.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/item/HasDiffItems.java)

[ModRecipePredicateTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipePredicateTypes.java)
