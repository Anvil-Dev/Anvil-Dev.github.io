# 八合一锻造

为八件基础物品及锻造材料设置匹配条件，再一次性指定产物。

在数据包中建立 `data/example/recipe/eight_to_one_smithing/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:eight_to_one_smithing/example`。

## 配方示例

```json
{
  "type": "anvilcraft:eight_to_one_smithing",
  "inputs": [
    {
      "items": "minecraft:shears"
    },
    {
      "items": "minecraft:flint_and_steel"
    },
    {
      "items": "minecraft:brush"
    },
    {
      "items": "minecraft:spyglass"
    },
    {
      "items": "anvilcraft:magnet"
    },
    {
      "items": "minecraft:fishing_rod"
    },
    {
      "items": "minecraft:carrot_on_a_stick"
    },
    {
      "items": "minecraft:warped_fungus_on_a_stick"
    }
  ],
  "material": {
    "items": "anvilcraft:multiphase_matter"
  },
  "modifiers": [
    {
      "type": "anvilcraft:merge_data",
      "types": [
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.0"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.1"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.2"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.3"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.4"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.5"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.6"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.7"
        }
      ]
    }
  ],
  "result": {
    "id": "anvilcraft:multitool"
  },
  "template": {
    "items": "anvilcraft:eight_to_one_smithing_template"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/eight_to_one_smithing/multitool.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:eight_to_one_smithing`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `template` | 物品原料谓词 | 必填 | 锻造模板谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L165) |
| `material` | 物品原料谓词 | 必填 | 锻造材料谓词 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L168) |
| `inputs` | 物品原料谓词数组 | 必填 | 一组参与匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L171) |
| `result` | 物品栈模板对象 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L38) |
| `modifiers` | `IResultModifier.CODEC`数组 | 可省略，默认 `[]` | 按顺序处理结果的修饰器 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L42) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java)
