# dev.anvilcraft.resource.ageratum.structure



## StructureExporter

` public final class StructureExporter `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/structure/StructureExporter.java#L17)

Writes complete vanilla structure NBT without replacing existing exports.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CompoundTag read(byte[] compressed) throws IOException ` | ` (!root.contains("size", Tag.TAG_LIST) \|\| root.getList("size", Tag.TAG_INT).size() != 3 \|\| !root.contains("blocks", Tag.TAG_LIST) \|\| (!root.contains("palette", Tag.TAG_LIST) && !root.contains("palettes", Tag.TAG_LIST))) ` 成立时抛出 ` new IOException("Not a structure template") `<br>末尾返回 ` root `<br>[调用处 StructureExportHandler.handle](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java#L65) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/structure/StructureExporter.java#L21) |
| ` public static Path write(Path worldRoot, ResourceLocation location, CompoundTag root) throws IOException ` | 实现调用 ` worldRoot.resolve("data").resolve("ageratum") `<br>实现调用 ` worldRoot.resolve("data") `<br>实现调用 ` Files.createDirectories(directory) `<br>[调用处 StructureExportHandler.handle](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java#L66) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/structure/StructureExporter.java#L31) |
