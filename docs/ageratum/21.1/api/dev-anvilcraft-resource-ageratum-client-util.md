# dev.anvilcraft.resource.ageratum.client.util



## RelativePathResolver

` public class RelativePathResolver `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/util/RelativePathResolver.java#L9)

在逻辑基目录下解析用户提供的相对路径工具。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String resolveWithinBase(String baseDir, String target) ` | 将目标路径相对基目录进行规范化。 支持 . 与 .. 片段；若尝试越过根目录，则会被钳制在根目录， 不会生成父级前缀。<br>末尾返回 ` String.join("/", parts) `<br>[调用处 MDNBTStructureComponent.StructureTarget.resolve](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L912) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/util/RelativePathResolver.java#L19) |
