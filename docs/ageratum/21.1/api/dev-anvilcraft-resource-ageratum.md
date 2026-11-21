# dev.anvilcraft.resource.ageratum



## Ageratum

` public class Ageratum `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L32)

Ageratum 模组主类。 该模组定位为“游戏内手册框架”，用于为其它模组提供统一的文档展示能力。 当前负责模组初始化与文档打开入口。

类型注解 ` @Mod(Ageratum.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String MOD_ID ` | 模组 ID，也是默认命名空间。<br>初值 ` "ageratum" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L37) |
| ` public static final DeferredRegister.Items ITEMS ` | 初值 ` DeferredRegister.createItems(Ageratum.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L38) |
| ` public static final DeferredRegister<CreativeModeTab> TABS ` | 初值 ` DeferredRegister.create(Registries.CREATIVE_MODE_TAB, Ageratum.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L39) |
| ` public static final DeferredItem<Item> DEFAULT_GUIDE_ITEM ` | 初值 ` ITEMS.register( "guidebook", () -> new Item(new Item.Properties().stacksTo(1)) ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L40) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> DEFAULT_TAB ` | 由 ` TABS.register ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L44) |
| ` public Ageratum(IEventBus modEventBus, ModContainer modContainer) ` | 模组构造函数，由 NeoForge 在加载时调用。<br>参数 ` modEventBus ` 模组专属事件总线<br>参数 ` modContainer ` 模组容器<br>实现调用 ` ITEMS.register(modEventBus) `<br>实现调用 ` TABS.register(modEventBus) `<br>实现调用 ` NeoForge.EVENT_BUS.register(this) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L62) |
| ` public static ResourceLocation location(String path) ` | 生成以本模组 ID 为命名空间的 ResourceLocation。<br>参数 ` path ` 资源路径（不含命名空间前缀）<br>返回 完整的资源位置<br>末尾返回 ` ResourceLocation.fromNamespaceAndPath(Ageratum.MOD_ID, path) `<br>[调用处 AgeratumConstants.GuideScreenUI.Textures](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L197) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L74) |
| ` public static void openGuide(ServerPlayer player, ResourceLocation location) ` | 打开指定资源位置的文档。 客户端调用：直接尝试打开文档界面。 服务端调用：通过网络包通知客户端打开文档。 若文档不存在则忽略，不抛出异常。<br>执行 ` AgeratumNetwork.sendOpenGuide(player, location) `<br>[调用处 Ageratum.useGuideItem](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L94) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L85) |
| ` @SubscribeEvent public void useGuideItem(PlayerInteractEvent.RightClickItem event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getItemStack() `<br>实现调用 ` stack.is(Ageratum.DEFAULT_GUIDE_ITEM.get()) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L89) |
