# dev.dubhe.anvilcraft.integration.ageratum.component



## MDDirectoryComponent

` public final class MDDirectoryComponent extends MDComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/ageratum/component/MDDirectoryComponent.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDDirectoryComponent() ` | 执行 ` super(FormattedText.EMPTY) `<br>[调用处 HandbookDirectoryMixin.anvilcraft$directory](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookDirectoryMixin.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/ageratum/component/MDDirectoryComponent.java#L22) |
| ` public static MDDocument expand(MDDocument document) ` | ` (document.components().stream().noneMatch(MDDirectoryComponent.class::isInstance)) ` 成立时提前返回 ` document `<br>末尾返回 ` new MDDocument(document.sourceLocation(), document.frontMatter(), components) `<br>[调用处 HandbookDirectoryMixin.anvilcraft$expandDirectory](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookDirectoryMixin.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/ageratum/component/MDDirectoryComponent.java#L26) |
