# 模板投影与导出位置

要用客户端命令投影同一份结构，将压缩二进制模板放在 `assets/workshop/ageratum/stands/basic.nbt`。按 F3+T 后，在世界中输入下列命令。

```text
/ageratum structure workshop:stands/basic ~ ~ ~
```

命令索引只扫描 `ageratum/` 下的 `.nbt`，将文件夹前缀和扩展名去掉后作为模板 ID。它与正文 `structure` 标签的直接资源路径不同。模板管理器在客户端重载时接收原始 NBT，实际投影请求到来后再用当前世界的方块注册表装入 `StructureTemplate`。尚未进入世界时无法实例化模板。[模板注册与按需加载](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java) · [投影命令](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java)

## 从页面导出

打开已加载的结构预览后点击导出按钮，客户端会把完整结构压缩并分片发给服务端。服务端校验总大小、分片顺序、标识和 NBT 结构，确认无误后写进**当前世界目录**下的 `data/ageratum/`。导出文件名只保留命名空间和源文件最后一段：比如 `workshop:ageratum/zh_cn/maintenance/stand.snbt` 会存成 `workshop_stand.nbt`，再次导出则依次顺延为 `workshop_stand_1.nbt`、`workshop_stand_2.nbt`。

| 限制 | 值 | 处理 |
| --- | --- | --- |
| 单次传输 | 压缩后最多 8 MiB | 客户端与服务端都会检查大小。 |
| 每片数据 | 最多 24 KiB | 服务端要求下一片偏移等于已收字节数。 |
| 解压读取预算 | 64 MiB | 用有限额的 NBT 读取器解析。 |
| 新请求间隔与超时 | 同一玩家相隔至少 2 秒，传输限时 30 秒 | 超时传输会被清理。 |

导出位置是存档内的输出目录。要将结果作为下一个资源包版本发布，复制该文件到资源包中的 `assets/workshop/ageratum/` 并使用相应模板 ID。[客户端导出](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureExportClient.java) · [服务端校验](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java) · [文件命名](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/structure/StructureExporter.java)
