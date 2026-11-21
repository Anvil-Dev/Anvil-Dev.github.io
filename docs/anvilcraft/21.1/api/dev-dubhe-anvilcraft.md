# dev.dubhe.anvilcraft



## AnvilCraft

` public class AnvilCraft `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L85)

类型注解 ` @Mod(AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String NETWORK_VERSION ` | 初值 ` "2" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L87) |
| ` public static final String MOD_ID ` | 初值 ` "anvilcraft" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L88) |
| ` public static final String MOD_NAME ` | 初值 ` "AnvilCraft" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L89) |
| ` public static final Logger LOGGER ` | 初值 ` LoggerFactory.getLogger(MOD_NAME) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L90) |
| ` public static final Gson GSON ` | 初值 ` new GsonBuilder().disableHtmlEscaping().setPrettyPrinting().create() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L91) |
| ` @Nullable public static IEventBus MOD_BUS ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L92) |
| ` public static final AnvilCraftServerConfig CONFIG ` | 初值 ` ConfigManager.register(AnvilCraft.MOD_ID, AnvilCraftServerConfig::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L93) |
| ` public static final AnvilCraftClientConfig CLIENT_CONFIG ` | 初值 ` ConfigManager.register(AnvilCraft.MOD_ID, AnvilCraftClientConfig::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L94) |
| ` public static final Registrum REGISTRUM ` | 初值 ` Registrum.create(MOD_ID).defaultCreativeTab((ResourceKey<CreativeModeTab>) null) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L99) |
| ` public AnvilCraft(IEventBus modEventBus, ModContainer modContainer) ` | 实现调用 ` NeoForgeMod.enableMilkFluid() `<br>实现调用 ` ModBiomeSources.register(modEventBus) `<br>实现调用 ` ModDensityFunctionTypes.register(modEventBus) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L101) |
| ` public static ResourceLocation of(String path) ` | 末尾返回 ` ResourceLocation.fromNamespaceAndPath(MOD_ID, path) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.recipeAnc](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L500) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L176) |
| ` public static ResourceLocation advancementOf(String path) ` | 末尾返回 ` of("anvilcraft/" + path) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L180) |
| ` public static void registerCommand(RegisterCommandsEvent event) ` | 执行 ` ModCommands.register(event.getDispatcher()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L184) |
| ` public static void registerPayload(RegisterPayloadHandlersEvent event) ` | 实现调用 ` event.registrar(NETWORK_VERSION) `<br>实现调用 ` NetworkRegistrar.register(registrar, AnvilCraft.MOD_ID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L188) |
| ` public static void addItemTooltips(ItemTooltipEvent event) ` | 执行 ` ItemTooltipManager.addTooltip(event.getItemStack(), event.getToolTip()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L193) |
| ` public static void addReloadListeners(AddReloadListenerEvent event) ` | 实现调用 ` event.getServerResources().getRecipeManager() `<br>实现调用 ` event.getServerResources() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L197) |
| ` public static void loadComplete(FMLLoadCompleteEvent event) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L213) |
| ` public static IntegrationManager getINTEGRATION_MANAGER() ` | 末尾返回 ` AnvilCraft.INTEGRATION_MANAGER `<br>由 Lombok 生成。<br>[调用处 AnvilCraftClient.clientSetup](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L105) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L85) |
