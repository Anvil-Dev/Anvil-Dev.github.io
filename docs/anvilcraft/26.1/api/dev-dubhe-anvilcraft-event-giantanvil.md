# dev.dubhe.anvilcraft.event.giantanvil



## GiantAnvilLandingEventListener

` public class GiantAnvilLandingEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L23)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void handleMultiblock(AnvilEvent.GiantOnLand event) ` | 事件总线派发 ` AnvilEvent.GiantOnLand ` 时调用。<br>实现调用 ` NeoForge.EVENT_BUS.post(new GiantAnvilEvent.Multiblock(event)).isCanceled() `<br>实现调用 ` NeoForge.EVENT_BUS.post(new GiantAnvilEvent.Multiblock(event)) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos().below(2) `<br>实现调用 ` event.getPos() `<br>实现调用 ` GiantAnvilLandingEventListener.findCraftingTableSize(landPos, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L26) |
| ` public GiantAnvilLandingEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L23) |
