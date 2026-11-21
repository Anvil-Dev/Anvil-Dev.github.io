# dev.dubhe.anvilcraft.client.event（WheelLifecycleEventListener 至 WheelLifecycleEventListener）



## WheelLifecycleEventListener

` public class WheelLifecycleEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L50)

类型注解 ` @SuppressWarnings({"OptionalUsedAsFieldOrParameterType", "OptionalAssignedToNull"}) `、` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` level.getGameTime() `<br>实现调用 ` WheelLifecycleEventListener.openMultiphaseWheel(gameTime) `<br>实现调用 ` WheelLifecycleEventListener.openResonatorWheel(gameTime) `<br>实现调用 ` WheelLifecycleEventListener.openHeavyHalberdWheel(gameTime) `<br>实现调用 ` WheelLifecycleEventListener.openMultitoolWheel(gameTime) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L88) |
| ` @SubscribeEvent public static void onKeyInput(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` ModKeyMappings.shouldIgnoreForDebugChord(event.getAction()) `<br>实现调用 ` event.getAction() `<br>实现调用 ` ModKeyMappings.SWITCH_PHASE.get().matches(event.getKey(), event.getScanCode()) `<br>实现调用 ` ModKeyMappings.SWITCH_PHASE.get() `<br>实现调用 ` event.getKey() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L664) |
| ` @SubscribeEvent public static void onKeyInput(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` ModKeyMappings.SWITCH_PHASE.get().matchesMouse(event.getButton()) `<br>实现调用 ` ModKeyMappings.SWITCH_PHASE.get() `<br>实现调用 ` event.getButton() `<br>分支 ` (ModKeyMappings.SWITCH_PHASE.get().matchesMouse(event.getButton())) ` 内调用 ` WheelLifecycleEventListener.processMultiphasePress(client, event.getAction()) `<br>分支 ` (ModKeyMappings.SWITCH_PHASE.get().matchesMouse(event.getButton())) ` 内调用 ` event.getAction() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L682) |
| ` public WheelLifecycleEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L50) |
