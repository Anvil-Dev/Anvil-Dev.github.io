# dev.dubhe.anvilcraft.building（StructureSnapshotCodec.ParsedSnapshot 至 VanillaBuildingEntities）



## StructureSnapshotCodec.ParsedSnapshot

` public record ParsedSnapshot(StructureSnapshot snapshot, List<BlueprintWarning> warnings) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L63)

解析结果:规范化快照与不阻断导入的警告列表。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ParsedSnapshot(StructureSnapshot snapshot, List<BlueprintWarning> warnings) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L63) |
| ` public StructureSnapshot snapshot() ` | 读取 record 分量 ` snapshot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L63) |
| ` public List<BlueprintWarning> warnings() ` | 读取 record 分量 ` warnings ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L63) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L63) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L63) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L63) |

## VanillaBuildingEntities

` public final class VanillaBuildingEntities `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/VanillaBuildingEntities.java#L32)

施工实体适配注册:船/矿车/盔甲架/画/展示框、刷怪蛋。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register() ` | 实现调用 ` EntityBuildAdapters.register(new VehicleAdapter()) `<br>实现调用 ` EntityBuildAdapters.register(new ArmorStandAdapter()) `<br>实现调用 ` EntityBuildAdapters.register(new HangingAdapter()) `<br>[调用处 EntityBuildAdapters](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/VanillaBuildingEntities.java#L36) |
