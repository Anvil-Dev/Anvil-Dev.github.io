# dev.dubhe.anvilcraft.client.hud



## AnvilHammerUseHUD

` public final class AnvilHammerUseHUD `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/AnvilHammerUseHUD.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphics graphics, DeltaTracker deltaTracker) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isUsingItem() `<br>实现调用 ` player.getUseItem().getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/AnvilHammerUseHUD.java#L15) |

## AttackIndicatorProgressHUD

` public final class AttackIndicatorProgressHUD `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/AttackIndicatorProgressHUD.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphics graphics, float progress) ` | 实现调用 ` Math.clamp(progress, 0.0F, 1.0F) `<br>实现调用 ` graphics.guiWidth() `<br>实现调用 ` graphics.guiHeight() `<br>[调用处 AnvilHammerUseHUD.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/AnvilHammerUseHUD.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/AttackIndicatorProgressHUD.java#L17) |

## BufferBootsChargeHUD

` public final class BufferBootsChargeHUD `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/BufferBootsChargeHUD.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int color(float progress) ` | 末尾返回 ` ColorUtil.lerpColor(Math.clamp(progress, 0, 1), CHARGING_LOW, CHARGING_HIGH) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/BufferBootsChargeHUD.java#L29) |
| ` public static int color(float progress, boolean held) ` | 停留阶段固定为 #HELD，其余情况随进度渐变。<br>末尾返回 ` held ? HELD : color(progress) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/BufferBootsChargeHUD.java#L36) |
| ` public static void render(GuiGraphics graphics, float progress, boolean held) ` | 实现调用 ` Math.clamp(progress, 0, 1) `<br>实现调用 ` graphics.guiWidth() `<br>实现调用 ` graphics.guiHeight() `<br>[调用处 EquipmentClientEvents.chargeBar](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L137) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/BufferBootsChargeHUD.java#L40) |

## EnergyWeaponUseHUD

` public final class EnergyWeaponUseHUD `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/EnergyWeaponUseHUD.java#L18)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void update(WeaponChargeProgressPacket progress) ` | 实现调用 ` Util.getMillis() `<br>[调用处 WeaponChargeProgressPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/EnergyWeaponUseHUD.java#L29) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>执行 ` sample = null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/EnergyWeaponUseHUD.java#L35) |
| ` public static void render(GuiGraphics graphics, DeltaTracker deltaTracker) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isUsingItem() `<br>实现调用 ` sample.item() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/EnergyWeaponUseHUD.java#L40) |

## PowerGridHUD

` public class PowerGridHUD `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/PowerGridHUD.java#L17)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isPaused() `<br>实现调用 ` trackedPlayer.getData(ModDataAttachments.IN_POWER_GRID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/PowerGridHUD.java#L28) |
| ` public static void render(GuiGraphics graphics, DeltaTracker deltaTracker) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.player.isCreative() `<br>实现调用 ` minecraft.player.isSpectator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/PowerGridHUD.java#L46) |
| ` public PowerGridHUD() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/PowerGridHUD.java#L17) |

## TradingStationHUD

` public class TradingStationHUD `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/TradingStationHUD.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphics graphics, DeltaTracker partialTick) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.level() `<br>实现调用 ` hit.getBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/TradingStationHUD.java#L26) |
| ` public TradingStationHUD() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/TradingStationHUD.java#L23) |

## WeatherproofChestplateHUD

` public class WeatherproofChestplateHUD `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/WeatherproofChestplateHUD.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphics guiGraphics, DeltaTracker partialTick) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` WeatherproofChestplateItem.getByPlayer(player) `<br>实现调用 ` backpack.is(ModItems.WEATHERPROOF_SPACESUIT_CHESTPLATE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/WeatherproofChestplateHUD.java#L26) |
| ` public WeatherproofChestplateHUD() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/WeatherproofChestplateHUD.java#L20) |
