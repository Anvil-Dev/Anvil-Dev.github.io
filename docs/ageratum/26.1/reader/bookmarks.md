# 保存与读取书签

书签保存在客户端 `config/ageratum/bookmarks/<namespace>.json`。同一个命名空间共用一个文件，页面标题和资源位置分开编码。希望重命名显示文字时可以保留原资源路径；改变物理路径会使已有书签仍指向旧页。

```json
{
  "version": 1,
  "entries": [
    {
      "title": {"text": "Furnace"},
      "location": "field_guide:ageratum/en_us/furnace.md"
    }
  ]
}
```

| 方法 | 何时调用以及会修改什么 |
| --- | --- |
| `ensureLoaded(namespace, target)` | 首次需要某命名空间时调用。已登记为加载过的命名空间直接返回，调用方应复用原列表。 |
| `reload(namespace, target)` | 先清空目标列表，再从磁盘读取。没有文件、缺少条目数组或条目解码失败时不会补造书签。 |
| `save(namespace, entries)` | 创建目录并将可编码的条目写回对应文件。保存和读取使用 UTF-8。 |

[书签文件及条目 Codec](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java)
