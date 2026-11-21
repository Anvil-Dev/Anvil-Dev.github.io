# 模型选取与动态部件

在资源包中建立 `assets/example/anvillib/cube_selection.json`。先设置命名空间默认行为，再对个别方块作例外处理。方块级设置优先。

```json
{
  "namespaces": {
    "anvilcraft": "model"
  },
  "blocks": {
    "anvilcraft:trading_station": "outline"
  }
}
```

| 字段 | 类型 | 缺省行为 |
| --- | --- | --- |
| `namespaces` | 命名空间到模式的对象 | 沿用已有规则 |
| `blocks` | 方块 ID 到模式的对象 | 采用命名空间规则 |

`model` 启用模型选取和描边，`outline` 采用原有选取并绘制模型轮廓，`vanilla` 保留原有选取和描边。高优先级包逐键覆盖，同包按资源 ID 字典序合并。

## 排除方块实体渲染部件

固定资源 `assets/anvilcraft/model_selection_denylist.json` 接受可选字符串数组 `disable_ber_selection`。元素须为已注册的 AnvilCraft 方块 ID。高优先级包的完整有效数组替换先前的值；省略该字段得到空集合。解析失败保留前一个有效集合。

```json
{
  "disable_ber_selection": [
    "anvilcraft:pulse_generator"
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/assets/anvilcraft/model_selection_denylist.json)

[ModelSelectionDenylist.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java)
