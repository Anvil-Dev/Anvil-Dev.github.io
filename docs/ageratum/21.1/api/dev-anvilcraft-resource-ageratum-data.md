# dev.anvilcraft.resource.ageratum.data



## AgeratumDatagen

` public class AgeratumDatagen `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumDatagen.java#L10)

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void gatherData(GatherDataEvent event) ` | 事件总线派发 ` GatherDataEvent ` 时调用。<br>实现调用 ` event.getGenerator() `<br>实现调用 ` generator.getPackOutput() `<br>实现调用 ` generator.addProvider(event.includeServer(), new AgeratumLanguageProvider(packOutput)) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumDatagen.java#L12) |
| ` public AgeratumDatagen() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumDatagen.java#L10) |

## AgeratumLanguageProvider

` public class AgeratumLanguageProvider extends LanguageProvider `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumLanguageProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AgeratumLanguageProvider(PackOutput output) ` | 执行 ` super(output, Ageratum.MOD_ID, AgeratumConstants.I18n.DEFAULT_LANGUAGE_CODE) `<br>[调用处 AgeratumDatagen.gatherData](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumDatagen.java#L16) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/data/AgeratumLanguageProvider.java#L11) |
