# dev.dubhe.anvilcraft.item.property.component（StructureDiskData 至 TerminalBinding）



## StructureDiskData

` public record StructureDiskData(String file, String name, UUID uuid, Direction direction, int sizeX, int sizeY, int sizeZ, boolean upsideDown, boolean autoRotate) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureDiskData(String file, String name, UUID uuid, Direction direction, int sizeX, int sizeY, int sizeZ, boolean upsideDown) ` | 执行 ` this(file, name, uuid, direction, sizeX, sizeY, sizeZ, upsideDown, true) `<br>[调用处 DiskDisplaySupport.getImportedDisplay](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L79) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L24) |
| ` public static final Codec<StructureDiskData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L29) |
| ` public static final StreamCodec<FriendlyByteBuf, StructureDiskData> STREAM_CODEC ` | 初值 ` StreamCodec.of( StructureDiskData::write, StructureDiskData::read ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L41) |
| ` public String file() ` | 读取 record 分量 ` file ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L14) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L15) |
| ` public UUID uuid() ` | 读取 record 分量 ` uuid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L16) |
| ` public Direction direction() ` | 读取 record 分量 ` direction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L17) |
| ` public int sizeX() ` | 读取 record 分量 ` sizeX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L18) |
| ` public int sizeY() ` | 读取 record 分量 ` sizeY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L19) |
| ` public int sizeZ() ` | 读取 record 分量 ` sizeZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L20) |
| ` public boolean upsideDown() ` | 读取 record 分量 ` upsideDown ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L21) |
| ` public boolean autoRotate() ` | 读取 record 分量 ` autoRotate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L13) |

## TerminalBinding

` public record TerminalBinding(Optional<UUID> id) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final TerminalBinding EMPTY ` | 初值 ` new TerminalBinding(Optional.empty()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L14) |
| ` public static final MapCodec<TerminalBinding> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( UUIDUtil.CODEC .optionalFieldOf("id") .forGetter(TerminalBinding::id) ).apply(ins, TerminalBinding::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L15) |
| ` public static final StreamCodec<ByteBuf, TerminalBinding> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.optional(UUIDUtil.STREAM_CODEC), TerminalBinding::id, TerminalBinding::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L20) |
| ` public TerminalBinding(Optional<UUID> id) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L13) |
| ` public Optional<UUID> id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L13) |
