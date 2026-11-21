# dev.anvilcraft.resource.ageratum.client.feat.item



## BoundItemGuideNavigator

` public final class BoundItemGuideNavigator `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/item/BoundItemGuideNavigator.java#L28)

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onTooltipGather(RenderTooltipEvent.GatherComponents event) ` | 事件总线派发 ` RenderTooltipEvent.GatherComponents ` 时调用。<br>实现调用 ` event.getItemStack() `<br>实现调用 ` stack.isEmpty() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/item/BoundItemGuideNavigator.java#L45) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (minecraft.player == null \|\| minecraft.level == null) ` 内调用 ` clearAllState() `<br>实现调用 ` System.currentTimeMillis() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/item/BoundItemGuideNavigator.java#L95) |
