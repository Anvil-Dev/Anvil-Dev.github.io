# dev.anvilcraft.resource.ageratum.init



## AgeratumDataComponents

` public class AgeratumDataComponents `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumDataComponents.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DataComponentEntry<Doc> DOC ` | 初值 ` REGISTRUM .dataComponent("doc", Doc.class) .networkSynchronized(Doc.STREAM_CODEC) .persistent(Doc.CODEC) .register() ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumDataComponents.java#L9) |
| ` public static void register() ` | 当前实现的方法体为空。<br>[调用处 Ageratum.构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L36) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumDataComponents.java#L15) |
| ` public AgeratumDataComponents() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumDataComponents.java#L8) |

## AgeratumItemGroups

` public class AgeratumItemGroups `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItemGroups.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredRegister<CreativeModeTab> TABS ` | 初值 ` DeferredRegister.create(Registries.CREATIVE_MODE_TAB, Ageratum.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItemGroups.java#L13) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> DEFAULT_TAB ` | 由 ` TABS.register ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItemGroups.java#L14) |
| ` public AgeratumItemGroups() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItemGroups.java#L12) |

## AgeratumItems

` public class AgeratumItems `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItems.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ItemEntry<GuideBookItem> DEFAULT_GUIDE_ITEM ` | 由 ` REGISTRUM .item("guidebook", GuideBookItem::new) .lang("Ageratum Guidebook") .properties(properties -> properties .stacksTo(1) .component( AgeratumDataComponents.DOC.get(), Doc.of(Ageratum.location(AgeratumConstants.Guide.INDEX_FILE)) ) ) .register ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItems.java#L16) |
| ` public static void register() ` | 当前实现的方法体为空。<br>[调用处 Ageratum.构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L37) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItems.java#L28) |
| ` public AgeratumItems() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItems.java#L11) |
