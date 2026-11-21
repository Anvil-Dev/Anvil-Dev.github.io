# 序列装配

以步骤表组织多个加工过程。首个方块、过程显示模型、循环设置和最终方块各自独立。

在数据包中建立 `data/example/recipe/procedural_process/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:procedural_process/example`。

## 配方示例

```json
{
  "type": "anvilcraft:procedural_process",
  "displayed_models": [
    "anvilcraft:block/wip_display/monolith_wip"
  ],
  "icon": {
    "count": 1,
    "id": "anvilcraft:monolith"
  },
  "initial_block": {
    "blocks": "minecraft:blackstone"
  },
  "loop": 1,
  "result_block": {
    "block": "anvilcraft:monolith"
  },
  "steps": [
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          {
            "blocks": "anvilcraft:spacetime_supercomputer"
          },
          {
            "blocks": "minecraft:blackstone"
          }
        ],
        "result": {
          "block": "anvilcraft:wip_block"
        }
      },
      "index": 0
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          {
            "blocks": "anvilcraft:mass_energy_inverter"
          },
          {
            "blocks": "anvilcraft:wip_block"
          }
        ],
        "result": {
          "block": "anvilcraft:monolith"
        }
      },
      "index": 1
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/procedural_process/monolith_compress.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:procedural_process`。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `initial_block` | 方块状态谓词 | 必填 | 第一步开始前的方块条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L25) |
| `steps` | `ProceduralProcessStep.CODEC`数组 | 必填 | 按工序编排的步骤对象列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L26) |
| `result_block` | 带概率的方块状态 | 必填 | 加工后的方块状态 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L27) |
| `icon` | 物品栈对象 | 必填 | 界面图标对应的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L28) |
| `loop` | 整数 | 必填 | 循环次数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L29) |
| `displayed_model` | 资源 ID | 可省略 | 展示使用的模型 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L30) |
| `displayed_models` | 资源 ID数组 | 可省略，默认 `[]` | 多阶段的模型 ID 列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L33) |
| `multiple_loop_first_step` | `ProceduralProcessStep.CODEC` | 可省略 | 重复循环使用的首步 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L36) |

### ProceduralProcessStep

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `index` | 整数 | 必填 | 步骤或列表索引 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessStep.java#L61) |
| `content` | `AbstractProcessRecipe.CODEC` | 必填 | 实际执行的子配方 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessStep.java#L62) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java)
