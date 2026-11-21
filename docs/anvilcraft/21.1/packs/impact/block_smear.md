# 方块涂抹

把接触的方块组合写进 inputs。相同的材料放在不同位置可能匹配其他加工方式。

在数据包中建立 `data/example/recipe/block_smear/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:block_smear/example`。

## 配方示例

```json
{
  "type": "anvilcraft:block_smear",
  "inputs": [
    {
      "blocks": "minecraft:moss_block"
    },
    {
      "blocks": "minecraft:cobblestone"
    }
  ],
  "result": {
    "block": "minecraft:mossy_cobblestone"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/block_smear/mossy_cobblestone.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:block_smear`。

输出位置在冲击点下方两格，结果继承被涂抹方块的同名属性。楼梯朝向、台阶类型和原木轴向因此可以保留。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputs` | 方块状态谓词数组 | 必填 | 一组参与匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L81) |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L84) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java)
