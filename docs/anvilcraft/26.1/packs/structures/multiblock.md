# 多方块合成

用分层字符网格描述输入结构，每个非空符号通过映射表匹配方块。

在数据包中建立 `data/example/recipe/multiblock/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:multiblock/example`。

## 配方示例

```json
{
  "type": "anvilcraft:multiblock",
  "pattern": {
    "grid": [
      [
        "000",
        "000",
        "000"
      ],
      [
        "000",
        "000",
        "000"
      ],
      [
        "000",
        "000",
        "000"
      ]
    ],
    "mapping": {
      "0": {
        "blocks": "minecraft:coal_block"
      }
    }
  },
  "result": {
    "id": "minecraft:diamond_block"
  }
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/multiblock/diamond_block.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:multiblock`。

结构可用 `grid`、`mapping` 的完整定义，也接受 `layers`、`symbols` 的结构对象。后者的映射值用 `block`（方块 ID 或标签）和 `properties` 描述状态。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `pattern` | `MultiblockUtil.DEFINITION_CODEC` | 必填 | 输入的有序图案或结构定义 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java#L207) |
| `result` | 物品栈模板对象 | 必填 | 完成配方后使用的结果 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java#L210) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockRecipe.java)
