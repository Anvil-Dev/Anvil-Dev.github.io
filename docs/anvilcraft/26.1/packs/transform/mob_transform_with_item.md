# 物品辅助转化

除实体类型外再检查周围的材料，根据物品数量调整特殊结果概率。

在数据包中建立 `data/example/recipe/mob_transform_with_item/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:mob_transform_with_item/example`。

## 配方示例

```json
{
  "type": "anvilcraft:mob_transform_with_item",
  "chance_percent_per_item": 5,
  "ingredients": [
    {
      "items": "minecraft:anvil"
    }
  ],
  "input": "minecraft:zombie",
  "item_result": {
    "id": "anvilcraft:giant_anvil"
  },
  "special_result": {
    "probability": 1.0,
    "result_entity_type": "minecraft:giant"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/mob_transform_with_item/zombie_to_giant_anvil.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:mob_transform_with_item`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 实体类型 ID | 必填 | 待匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L61) |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L65) |
| `special_result` | `TransformResult.CODEC` | 必填 | 命中特殊分支时的实体结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L68) |
| `item_result` | 物品栈模板对象 | 必填 | 掉落的物品结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L71) |
| `chance_percent_per_item` | 整数 | 必填 | 每件输入材料增加的概率百分点 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L74) |
| `tag_predicates` | `NumericTagValuePredicate.CODEC`数组 | 可省略，默认 `[]` | 转化前对实体数据的额外判断 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L78) |
| `tag_modifications` | `TagModification.CODEC`数组 | 可省略，默认 `[]` | 转化时对实体数据的修改列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L82) |
| `transform_options` | `TransformOptions.CODEC`数组 | 可省略，默认 `[]` | 转化时启用的选项 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java#L86) |

### TransformResult

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `result_entity_type` | 实体类型 ID | 必填 | 转化后的实体类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L15) |
| `probability` | 数值 | 必填 | 选择该结果的概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L18) |

### NumericTagValuePredicate

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `tagKeyPath` | 字符串 | 必填 | 目标数值标签路径 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L27) |
| `requirement` | `ValueFunction.CODEC` | 必填 | 比较运算 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L28) |
| `expected` | 长整数 | 必填 | 用于比较的整数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L29) |

### TagModification

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `path` | 字符串 | 必填 | 待修改的数据路径 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L31) |
| `op` | `ModifyOperation.CODEC` | 必填 | 执行的修改操作 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L32) |
| `index` | 整数 | 可省略 | 步骤或列表索引 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L34) |
| `tag` | 字符串 | 必填 | 写入的标签内容 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L36) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformWithItemRecipe.java)
