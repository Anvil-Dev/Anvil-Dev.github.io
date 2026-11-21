# 生物转化

为某个实体类型选择一种或多种转化结果，并可按实体标签数据设置附加条件。

在数据包中建立 `data/example/recipe/mob_transform/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:mob_transform/example`。

## 配方示例

```json
{
  "type": "anvilcraft:mob_transform",
  "input": "minecraft:allay",
  "results": [
    {
      "probability": 1.0,
      "result_entity_type": "minecraft:vex"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/mob_transform/allay.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:mob_transform`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 实体类型 ID | 必填 | 待匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L169) |
| `results` | `TransformResult.CODEC`数组 | 必填 | 各次输出使用的结果列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L173) |
| `tag_predicates` | `NumericTagValuePredicate.CODEC`数组 | 可省略，默认 `[]` | 转化前对实体数据的额外判断 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L177) |
| `tag_modifications` | `TagModification.CODEC`数组 | 可省略，默认 `[]` | 转化时对实体数据的修改列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L181) |
| `transform_options` | `TransformOptions.CODEC`数组 | 可省略，默认 `[]` | 转化时启用的选项 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java#L185) |

### TransformResult

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `result_entity_type` | 实体类型 ID | 必填 | 转化后的实体类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L15) |
| `probability` | 数值 | 必填 | 选择该结果的概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TransformResult.java#L18) |

### NumericTagValuePredicate

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `tagKeyPath` | 字符串 | 必填 | 目标数值标签路径 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L25) |
| `requirement` | `ValueFunction.CODEC` | 必填 | 比较运算 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L26) |
| `expected` | 长整数 | 必填 | 用于比较的整数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/NumericTagValuePredicate.java#L27) |

### TagModification

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `path` | 字符串 | 必填 | 待修改的数据路径 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L30) |
| `op` | `ModifyOperation.CODEC` | 必填 | 执行的修改操作 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L31) |
| `index` | 整数 | 可省略 | 步骤或列表索引 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L33) |
| `tag` | 字符串 | 必填 | 写入的标签内容 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/TagModification.java#L35) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/transform/MobTransformRecipe.java)
