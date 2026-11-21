# dev.anvilcraft.resource.ageratum.data



## AgeratumDatagen

` public class AgeratumDatagen `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumDatagen.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init() ` | 实现调用 ` REGISTRUM.getDataGenInitializer() `<br>实现调用 ` REGISTRUM.addDataGenerator(ProviderType.LANG, AgeratumLangHandler::init) `<br>[调用处 Ageratum.构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L39) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumDatagen.java#L8) |
| ` public AgeratumDatagen() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumDatagen.java#L7) |

## AgeratumLangHandler

` public class AgeratumLangHandler `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumLangHandler.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init(RegistrumLangProvider provider) ` | 实现调用 ` ConfigData.readConfigClass(provider, AgeratumClientConfig.class) `<br>实现调用 ` provider.add("ageratum.guide.zoom.default", "Default") `<br>实现调用 ` provider.add("commands.ageratum.preview.disable", "Preview is not enabled") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumLangHandler.java#L8) |
| ` public AgeratumLangHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumLangHandler.java#L7) |
