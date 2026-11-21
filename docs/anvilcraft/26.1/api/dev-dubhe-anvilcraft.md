# dev.dubhe.anvilcraft



## AnvilCraft

` public class AnvilCraft `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L79)

类型注解 ` @Mod(AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String NETWORK_VERSION ` | 初值 ` "2" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L81) |
| ` public static final String MOD_ID ` | 初值 ` "anvilcraft" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L82) |
| ` public static final String MOD_NAME ` | 初值 ` "AnvilCraft" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L83) |
| ` public static final Logger LOGGER ` | 初值 ` LoggerFactory.getLogger(AnvilCraft.MOD_NAME) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L84) |
| ` public static final Gson GSON ` | 初值 ` new GsonBuilder().disableHtmlEscaping().setPrettyPrinting().create() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L85) |
| ` @Nullable public static IEventBus MOD_BUS ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L86) |
| ` public static final AnvilCraftServerConfig CONFIG ` | 初值 ` ConfigManager.register(AnvilCraft.MOD_ID, AnvilCraftServerConfig::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L87) |
| ` public static final AnvilCraftClientConfig CLIENT_CONFIG ` | 初值 ` ConfigManager.register(AnvilCraft.MOD_ID, AnvilCraftClientConfig::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L88) |
| ` public static final Registrum REGISTRUM ` | 初值 ` Registrum.create(AnvilCraft.MOD_ID).defaultCreativeTab((ResourceKey<CreativeModeTab>) null) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L93) |
| ` public AnvilCraft(IEventBus modEventBus, ModContainer modContainer) ` | 实现调用 ` NeoForgeMod.enableMilkFluid() `<br>实现调用 ` ModAttachments.register(modEventBus) `<br>实现调用 ` ModItemGroups.register(modEventBus) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L95) |
| ` public static Identifier of(String path) ` | 末尾返回 ` Identifier.fromNamespaceAndPath(AnvilCraft.MOD_ID, path) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.recipeAnc](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L298) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L168) |
| ` public static Identifier advancement(String path) ` | 末尾返回 ` AnvilCraft.of("anvilcraft/" + path) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L172) |
| ` public static String recipe(String path) ` | 末尾返回 ` AnvilCraft.MOD_ID + ':' + path `<br>[调用处 RegistrumBlockRecipeLoader.cfaInterfacePlaceholder](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RegistrumBlockRecipeLoader.java#L184) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L176) |
| ` public static void registerCommand(RegisterCommandsEvent event) ` | 执行 ` ModCommands.register(event.getDispatcher()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L180) |
| ` public static void registerPayload(RegisterPayloadHandlersEvent event) ` | 实现调用 ` event.registrar(NETWORK_VERSION) `<br>实现调用 ` NetworkRegistrar.register(registrar, AnvilCraft.MOD_ID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L184) |
| ` public static void loadComplete(FMLLoadCompleteEvent event) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L189) |
| ` public static IntegrationManager getINTEGRATION_MANAGER() ` | 末尾返回 ` AnvilCraft.INTEGRATION_MANAGER `<br>由 Lombok 生成。<br>[调用处 AnvilCraftClient.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L79) |
