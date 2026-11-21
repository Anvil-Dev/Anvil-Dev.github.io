# dev.anvilcraft.resource.ageratum



## Ageratum

` public class Ageratum `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L21)

Ageratum 模组主类。 该模组定位为“游戏内手册框架”，用于为其它模组提供统一的文档展示能力。 当前负责模组初始化与文档打开入口。

类型注解 ` @Mod(Ageratum.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String MOD_ID ` | 模组 ID，也是默认命名空间。<br>初值 ` "ageratum" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L26) |
| ` public static final Registrum REGISTRUM ` | 初值 ` Registrum.create(Ageratum.MOD_ID) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L27) |
| ` public Ageratum(IEventBus modEventBus, ModContainer modContainer) ` | 模组构造函数，由 NeoForge 在加载时调用。<br>参数 ` modEventBus ` 模组专属事件总线<br>参数 ` modContainer ` 模组容器<br>实现调用 ` AgeratumDataComponents.register() `<br>实现调用 ` AgeratumItems.register() `<br>实现调用 ` AgeratumItemGroups.TABS.register(modEventBus) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L35) |
| ` public static Identifier location(String path) ` | 生成以本模组 ID 为命名空间的 Identifier。<br>参数 ` path ` 资源路径（不含命名空间前缀）<br>返回 完整的资源位置<br>末尾返回 ` Identifier.fromNamespaceAndPath(Ageratum.MOD_ID, path) `<br>[调用处 AgeratumClient.onReloadListenerRegister](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L91) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L48) |
| ` public static void openGuide(ServerPlayer player, Identifier location) ` | 打开指定资源位置的文档。 客户端调用：直接尝试打开文档界面。 服务端调用：通过网络包通知客户端打开文档。 若文档不存在则忽略，不抛出异常。<br>执行 ` AgeratumNetwork.sendOpenGuide(player, location) `<br>[调用处 GuideBookItem.use](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/GuideBookItem.java#L30) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L59) |
| ` public static void openGitHubGuide(ServerPlayer player, String uri) ` | 打开 GitHub 远程指南。 服务端调用：将原始 URI 字符串转发给客户端，由客户端执行下载与展示。<br>参数 ` player ` 目标玩家<br>参数 ` uri ` GitHub 指南 URI（如 github:user/repo#path:assets/xxx&amp;commit=sha）<br>执行 ` AgeratumNetwork.sendGitHubOpenGuide(player, uri) `<br>[调用处 GuideBookItem.use](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/GuideBookItem.java#L28) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java#L71) |
