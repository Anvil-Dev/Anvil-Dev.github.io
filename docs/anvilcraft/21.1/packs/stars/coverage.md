# 轨道覆盖校验与重载

服务端同时读取轨道、事件和覆盖清单，在临时数据中校验全部引用后才替换正在使用的演化库。读取失败时日志包含 `Invalid stellar resources`，当前演化库继续生效。

覆盖清单使用固定路径 `data/anvilcraft/stellar_track_coverage.json`。根对象的 `tracks` 是必填数组，每条记录的 `trackId`（字符串）、`massAnvils`（整数）、`startingNodes`（字符串到节点 ID 的映射）均须与轨道定义完全一致。一条轨道恰好对应一条记录。

以下为清单内的一条记录。

```json
{
  "trackId": "mass_41",
  "massAnvils": 41,
  "startingNodes": {
    "BROWN_DWARF": "brown_dwarf_cooling"
  }
}
```

[完整覆盖清单](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/stellar_track_coverage.json) · [StellarTrackLibrary.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java)
