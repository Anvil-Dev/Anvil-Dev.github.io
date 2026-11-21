# dev.dubhe.anvilcraft.dfu



## AnvilCraftDfu

` public class AnvilCraftDfu `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/AnvilCraftDfu.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int DATA_VERSION ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/AnvilCraftDfu.java#L15) |
| ` public static DataFixerBuilder.Result construct() ` | 末尾返回 ` builder.build() `<br>实现调用 ` AnvilCraftDfu.addFixers(builder) `<br>实现调用 ` builder.build() `<br>[调用处 AnvilCraftDfu](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/AnvilCraftDfu.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/AnvilCraftDfu.java#L24) |
| ` public static void constructAndOptimize() ` | 实现调用 ` StartupNotificationManager.prependProgressBar("AnvilCraft DFU", 0) `<br>实现调用 ` ModWorkManager.parallelExecutor() `<br>实现调用 ` AnvilCraftDfu.DFU.optimize(AnvilCraftDfu.REFERENCES, exec) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L146) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/AnvilCraftDfu.java#L30) |
| ` public static void addFixers(DataFixerBuilder builder) ` | 当前实现的方法体为空。<br>[调用处 AnvilCraftDfu.construct](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/AnvilCraftDfu.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/AnvilCraftDfu.java#L38) |
| ` public AnvilCraftDfu() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/AnvilCraftDfu.java#L14) |

## DfuMetadata

` public record DfuMetadata(int dataVersion) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/DfuMetadata.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DfuMetadata DEFAULT ` | 初值 ` new DfuMetadata(AnvilCraftDfu.DATA_VERSION) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/DfuMetadata.java#L7) |
| ` public static final Codec<DfuMetadata> CODEC ` | 初值 ` RecordCodecBuilder.create(o -> o.group( Codec.INT.fieldOf("dataVersion").forGetter(DfuMetadata::dataVersion) ).apply(o, DfuMetadata::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/DfuMetadata.java#L9) |
| ` public DfuMetadata(int dataVersion) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/DfuMetadata.java#L6) |
| ` public int dataVersion() ` | 读取 record 分量 ` dataVersion ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/DfuMetadata.java#L6) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/DfuMetadata.java#L6) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/DfuMetadata.java#L6) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/dfu/DfuMetadata.java#L6) |
