# 在正文预览 NBT 与 SNBT

在 `assets/workshop/ageratum/zh_cn/maintenance/` 并排创建 `repair.md`、`stand.snbt`。页面只需引用同目录文件。

```markdown
# 展示台底座

<structure id="stand.snbt"/>
```

`stand.snbt` 可以用一个完整的单方块结构开始。

```text
{
  DataVersion: 3955,
  size: [1, 1, 1],
  palette: [{Name: "minecraft:anvil"}],
  blocks: [{pos: [0, 0, 0], state: 0}],
  entities: []
}
```

| 字段 | 类型 | 用途 |
| --- | --- | --- |
| 标签属性 `id`、`path` | 路径字符串 | 至少填一个，`id` 优先。相对路径从当前 Markdown 所在目录解析。 |
| `size` | 三个整数的列表 | 结构在 X、Y、Z 的尺寸，导出时检查长度。 |
| `palette` 或 `palettes` | 方块状态列表或多套列表 | 至少提供一套调色板。状态用 `Name` 和可选的 `Properties` 字符串映射。 |
| `blocks` | compound 列表 | 每项用三整数 `pos` 和调色板索引 `state`。方块实体信息可放在该项的 `nbt`。 |
| `entities` | compound 列表 | 可选。本例没有实体，显式写空列表。 |
| `DataVersion` | 整数 | 记录结构的数据版本。建议保留游戏导出的值。 |

带命名空间时使用资源管理器中的全路径，例如 `workshop:ageratum/zh_cn/maintenance/stand.snbt`。扩展名缺省时先试原路径，再试 `.nbt`、`.snbt`。组件用 gzip 文件头识别压缩 NBT，否则先尝试文本 SNBT，再尝试另一种解码方式。文本上限为 8 MiB。只为文档预览时，SNBT 便于版本控制和人工审查。[预览读取与格式转换](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java)

客户端找不到直接资源时，还会用模组 classloader 查询 `data/<命名空间>/structure/` 与 `structures/` 下的内置 NBT、SNBT。这条回退只看 classpath。分发独立预览请使用 `assets`，随世界启用的服务端数据包不会进入该客户端 classloader。[路径解析](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java)
