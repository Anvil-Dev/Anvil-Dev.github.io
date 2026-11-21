# dev.dubhe.anvilcraft.building（StructureSnapshotCodec 至 VanillaBuildingEntities）



## StructureSnapshotCodec

` public final class StructureSnapshotCodec `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L45)

规范快照与原版结构 NBT 之间的解析、校验与确定性序列化。 解析显式报告未知方块、未知实体、损坏调色板与超大声明,绝不把错误静默转换为空气; 尺寸与条目上限在分配大量内存之前检查。内容哈希取规范 NBT 未压缩字节的 SHA-256, 相同逻辑内容的 CompoundTag 键集合相同即产生相同字节,因此哈希与来源格式无关。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_AXIS ` | 单轴最大尺寸;损坏文件声明的极端尺寸在此被拒绝。<br>初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L47) |
| ` public static final int MAX_BLOCK_ENTRIES ` | 方块条目上限。<br>初值 ` MAX_AXIS * MAX_AXIS * MAX_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L49) |
| ` public static final int MAX_ENTITY_ENTRIES ` | 实体条目上限。<br>初值 ` 4_096 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L51) |
| ` public static final int MAX_PALETTE_ENTRIES ` | 调色板条目上限。<br>初值 ` MAX_BLOCK_ENTRIES ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L53) |
| ` public static ParsedSnapshot parse(CompoundTag tag, HolderLookup.Provider registries) throws ConstructionBlueprintException ` | 把原版结构语义的 NBT 解析为规范快照,输入可来自模板管理器、扫描器文件或上传文件。<br>` (paletteTag.size() > MAX_PALETTE_ENTRIES) ` 成立时抛出 ` new ConstructionBlueprintException( "oversized", "palette entries " + paletteTag.size() + " > " + MAX_PALETTE_ENTRIES ) `<br>末尾返回 ` new ParsedSnapshot(snapshot, List.copyOf(warnings)) `<br>[调用处 BlueprintNormalizer.load](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L69) |
| ` public static StructureSnapshot canonicalize(StructureSnapshot snapshot) ` | 重排方块与实体并按首次出现顺序重建调色板,保证同一内容得到唯一规范形式。<br>末尾返回 ` new StructureSnapshot(snapshot.size(), palette, blocks, entities, snapshot.ticks(), snapshot.capturedAt()) `<br>[调用处 BlueprintNormalizer.normalize](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L270) |
| ` public static CompoundTag write(StructureSnapshot snapshot) ` | 写出规范结构 NBT;输入必须已经过 #canonicalize。<br>末尾返回 ` (CompoundTag) BlueprintNbt.canonicalCopy(tag) `<br>[调用处 StructurePreviewTemplate.create](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L305) |
| ` public static String hash(CompoundTag canonicalTag) ` | 规范 NBT 未压缩字节的 SHA-256 十六进制,即蓝图内容哈希。<br>实现调用 ` NbtIo.write(canonicalTag, new DataOutputStream(bytes)) `<br>实现调用 ` MessageDigest.getInstance("SHA-256") `<br>实现调用 ` HexFormat.of().formatHex(digest.digest(bytes.toByteArray())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L359) |

## StructureSnapshotCodec.BlueprintWarning

` public record BlueprintWarning(String reason, String detail) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L65)

一条导入警告;reason 为稳定翻译键后缀。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlueprintWarning(String reason, String detail) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L65) |
| ` public String reason() ` | 读取 record 分量 ` reason ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L65) |
| ` public String detail() ` | 读取 record 分量 ` detail ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L65) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L65) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L65) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L65) |

## StructureSnapshotCodec.ParsedSnapshot

` public record ParsedSnapshot(StructureSnapshot snapshot, List<BlueprintWarning> warnings) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L61)

解析结果:规范化快照与不阻断导入的警告列表。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ParsedSnapshot(StructureSnapshot snapshot, List<BlueprintWarning> warnings) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L61) |
| ` public StructureSnapshot snapshot() ` | 读取 record 分量 ` snapshot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L61) |
| ` public List<BlueprintWarning> warnings() ` | 读取 record 分量 ` warnings ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L61) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L61) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L61) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L61) |

## VanillaBuildingEntities

` public final class VanillaBuildingEntities `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/VanillaBuildingEntities.java#L30)

施工实体适配注册:船/矿车/盔甲架/画/展示框、刷怪蛋。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register() ` | 实现调用 ` EntityBuildAdapters.register(new VehicleAdapter()) `<br>实现调用 ` EntityBuildAdapters.register(new ArmorStandAdapter()) `<br>实现调用 ` EntityBuildAdapters.register(new HangingAdapter()) `<br>[调用处 EntityBuildAdapters](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/VanillaBuildingEntities.java#L34) |
