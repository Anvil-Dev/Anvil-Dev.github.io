# dev.dubhe.anvilcraft.event（PlayerBalanceHandler 至 VillagerEventListener）



## PlayerBalanceHandler

` public class PlayerBalanceHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L33)

物品均衡模式的服务端处理： 补货：主/副手物品使用耗尽时，从绑定存储站取出同种物品补充满一组。 存入：背包中某物品超过一组时，只保留一组在身上，多余部分自动存入绑定存储站。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlayerLoggedOut(PlayerEvent.PlayerLoggedOutEvent event) ` | 玩家退出时清理其所有追踪状态，避免静态 Map 永久残留。<br>事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.PREV_HANDS.remove(uuid) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.PREV_SELECTED.remove(uuid) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.DEPOSIT_COOLDOWN.remove(uuid) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.USED_THIS_TICK.remove(uuid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L50) |
| ` @SubscribeEvent public static void onPlayerTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` PlayerBalanceHandler.heldTerminalBalanceMode(serverPlayer) `<br>分支 ` (mode == BalanceMode.OFF) ` 内调用 ` PlayerBalanceHandler.PREV_HANDS.remove(serverPlayer.getUUID()) `<br>分支 ` (mode == BalanceMode.OFF) ` 内调用 ` serverPlayer.getUUID() `<br>分支 ` (mode == BalanceMode.OFF) ` 内调用 ` PlayerBalanceHandler.PREV_SELECTED.remove(serverPlayer.getUUID()) `<br>分支 ` (mode == BalanceMode.OFF) ` 内调用 ` PlayerBalanceHandler.DEPOSIT_COOLDOWN.remove(serverPlayer.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L61) |
| ` @SubscribeEvent public static void onUseItem(PlayerInteractEvent.RightClickBlock event) ` | 玩家右键点击方块时标记，用于补货判定。<br>事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getMainHandItem().isEmpty() `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` player.getOffhandItem().isEmpty() `<br>实现调用 ` player.getOffhandItem() `<br>实现调用 ` PlayerBalanceHandler.USED_THIS_TICK.put(player.getUUID(), true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L91) |
| ` @SubscribeEvent public static void onUseItem(PlayerInteractEvent.RightClickItem event) ` | 玩家右键使用物品（食物、药水、弓、放置等）时标记，用于补货判定。<br>事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.USED_THIS_TICK.put(player.getUUID(), true) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L102) |
| ` @SubscribeEvent public static void onLeftClickEmpty(PlayerInteractEvent.LeftClickEmpty event) ` | 玩家左键攻击/挖掘（消耗耐久或投掷）时标记，用于补货判定。<br>事件总线派发 ` PlayerInteractEvent.LeftClickEmpty ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.USED_THIS_TICK.put(player.getUUID(), true) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L110) |
| ` @SubscribeEvent public static void onLeftClickBlock(PlayerInteractEvent.LeftClickBlock event) ` | 玩家左键点击方块/实体（挖掘、攻击）时标记，用于补货判定。<br>事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.USED_THIS_TICK.put(player.getUUID(), true) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L118) |
| ` public static void addTerminalProvider(Function<Player, ItemStack> provider) ` | 注册额外的终端提供者（如 curios 槽位）；注册顺序决定命中优先级。<br>执行 ` PlayerBalanceHandler.TERMINAL_PROVIDERS.add(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L210) |
| ` public PlayerBalanceHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L33) |

## PlayerEventListener

` public class PlayerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L64)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void loggedOut(PlayerEvent.PlayerLoggedOutEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` InfiniteFluidTankBreakProtection.clear(player) `<br>实现调用 ` BundleLikeServerStub.clear(player.getUUID()) `<br>实现调用 ` player.getUUID() `<br>实现调用 ` StorageServerStub.clearInvertedBucketAction(player.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L66) |
| ` @SubscribeEvent public static void useEntity(PlayerInteractEvent.EntityInteract event) ` | 事件总线派发 ` PlayerInteractEvent.EntityInteract ` 时调用。<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` event.getTarget() `<br>实现调用 ` item.is(ModBlocks.RESIN_BLOCK.asItem()) `<br>实现调用 ` ModBlocks.RESIN_BLOCK.asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L74) |
| ` @SubscribeEvent public static void playerRightClickMagnetizedNode(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` level.getEntitiesOfClass( MagnetizedNodeEntity.class, new AABB(pos).expandTowards(0.0, 0.0625, 0.0) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L96) |
| ` @SubscribeEvent public static void preventUseWhenRocketJump(UseItemOnBlockEvent event) ` | 事件总线派发 ` UseItemOnBlockEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` event.getUsePhase() `<br>实现调用 ` event.getHand() `<br>实现调用 ` Objects.requireNonNull(player).getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Objects.requireNonNull(player).getMainHandItem() `<br>实现调用 ` Objects.requireNonNull(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L145) |
| ` @SubscribeEvent public static void handleDragonRod(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getItemStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L158) |
| ` @SubscribeEvent public static void onJoinedLevel(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer sp) ` 内调用 ` PowerGrid.MANAGER.onPlayerJoined(event.getLevel(), sp) `<br>分支 ` (event.getEntity() instanceof ServerPlayer sp) ` 内调用 ` event.getLevel() `<br>分支 ` (event.getEntity() instanceof ServerPlayer sp) ` 内调用 ` GravityManager.syncTo(sp) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L188) |
| ` @SubscribeEvent public static void onJoinedServer(PlayerEvent.PlayerLoggedInEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedInEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` SpacetimeSupercomputerBlockEntity.cancelPendingTickSprints(Objects.requireNonNull(serverPlayer.getServer())) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` Objects.requireNonNull(serverPlayer.getServer()) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.getServer() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` RecipeCaches.sync(serverPlayer) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` LevelLoadManager.syncOverseers(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L196) |
| ` @SubscribeEvent public static void onPlayerUsingTotem(LivingUseTotemEvent event) ` | 事件总线派发 ` LivingUseTotemEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getItemInHand(event.getHandHolding()) `<br>实现调用 ` event.getHandHolding() `<br>实现调用 ` inHand.is(ModItems.AMULET_BOX.asItem()) `<br>实现调用 ` ModItems.AMULET_BOX.asItem() `<br>实现调用 ` inHand.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY).totems().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L205) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void onPlayerBlockWithHeavyHalberd(LivingIncomingDamageEvent event) ` | 事件总线派发 ` LivingIncomingDamageEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` isBlockingWithHeavyHalberd(player) `<br>实现调用 ` event.getSource().is(Tags.DamageTypes.IS_PHYSICAL) `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.setAmount(event.getAmount() * 0.5F) `<br>实现调用 ` event.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L216) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void onPlayerShieldBlock(LivingShieldBlockEvent event) ` | 事件总线派发 ` LivingShieldBlockEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` isBlockingWithHeavyHalberd(player) `<br>实现调用 ` event.setBlocked(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L224) |
| ` @SubscribeEvent public static void onPlayerUse(PlayerInteractEvent.RightClickItem event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getItemStack() `<br>实现调用 ` stack.isEmpty() `<br>实现调用 ` ModAmulets.COMRADE.getKey().equals(stack.get(ModComponents.AMULET)) `<br>实现调用 ` ModAmulets.COMRADE.getKey() `<br>实现调用 ` stack.get(ModComponents.AMULET) `<br>实现调用 ` stack.getOrDefault(ModComponents.COMRADES, Comrades.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L238) |
| ` @SubscribeEvent public static void onPlayerPlace(BlockEvent.EntityPlaceEvent event) ` | 事件总线派发 ` BlockEvent.EntityPlaceEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getLevel().getBlockEntity(event.getPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` player.awardStat(ModStats.PLACE_POWER_COMPONENT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L258) |
| ` public PlayerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L64) |

## PlayerTickEventHandler

` public class PlayerTickEventHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L22)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlayerLoggedIn(PlayerEvent.PlayerLoggedInEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedInEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` PlayerSettings.getSetting(serverPlayer.registryAccess(), serverPlayer.getGameProfile().getId()) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.registryAccess() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.getGameProfile().getId() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.getGameProfile() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L25) |
| ` @SubscribeEvent public static void onPlayerLoggedOut(PlayerEvent.PlayerLoggedOutEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` StorageServerStub.remove(serverPlayer.getGameProfile().getId()) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.getGameProfile().getId() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.getGameProfile() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L37) |
| ` @SubscribeEvent public static void onPlayerTickPre(PlayerTickEvent.Pre event) ` | 事件总线派发 ` PlayerTickEvent.Pre ` 时调用。<br>执行 ` IonocraftBackpackItem.applySlowFalling(event.getEntity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L44) |
| ` @SubscribeEvent public static void onPlayerTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` CrabClawItem.holdingCrabClawIncreasesRange(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` BuildingRodItem.updateReach(event.getEntity()) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` applyPowerGrid(serverPlayer) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` IonocraftBackpackItem.playerTick(serverPlayer) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` Merciless.tick(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L49) |
| ` public PlayerTickEventHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L22) |

## PlayerTrackingChunkEventListener

` public class PlayerTrackingChunkEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTrackingChunkEventListener.java#L11)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onChunkSent(ChunkWatchEvent.Sent event) ` | 事件总线派发 ` ChunkWatchEvent.Sent ` 时调用。<br>实现调用 ` event.getChunk() `<br>实现调用 ` chunk.getBlockEntities().values() `<br>实现调用 ` chunk.getBlockEntities() `<br>分支 ` (value instanceof BaseLaserBlockEntity laserBE) ` 内调用 ` laserBE.syncTo(event.getPlayer()) `<br>分支 ` (value instanceof BaseLaserBlockEntity laserBE) ` 内调用 ` event.getPlayer() `<br>实现调用 ` RedstoneWireNetworkManager.syncChunk(event.getPlayer(), event.getLevel(), chunk) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTrackingChunkEventListener.java#L13) |
| ` public PlayerTrackingChunkEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTrackingChunkEventListener.java#L11) |

## PlayerWearAnvilHammerEventListener

` public class PlayerWearAnvilHammerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java#L18)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlayerWearAnvilHammer(LivingEquipmentChangeEvent event) ` | 事件总线派发 ` LivingEquipmentChangeEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getSlot() `<br>实现调用 ` event.getTo() `<br>实现调用 ` eventTo.getItem() `<br>实现调用 ` PowerGrid.findPowerGridContains(entity.level(), entity.position()) `<br>实现调用 ` entity.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java#L20) |
| ` public PlayerWearAnvilHammerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java#L18) |

## PortalEventListener

` public class PortalEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java#L21)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onThroughPortal(EntityThroughPortalEvent event) ` | 事件总线派发 ` EntityThroughPortalEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` PortalEventListener.processBlockPortalConversionRecipe(level, entity, event.getType()) `<br>实现调用 ` event.getType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java#L23) |
| ` public PortalEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java#L21) |

## RegisterColorHandlersEventListener

` public class RegisterColorHandlersEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/RegisterColorHandlersEventListener.java#L18)

类型注解 ` @EventBusSubscriber(value = Dist.CLIENT, modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void registerBlockColorHandlersEvent(RegisterColorHandlersEvent.Block event) ` | 事件总线派发 ` RegisterColorHandlersEvent.Block ` 时调用。<br>实现调用 ` ModBlocks.REDSTONE_WIRE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/RegisterColorHandlersEventListener.java#L20) |
| ` @SubscribeEvent public static void registerItemColorHandlersEvent(RegisterColorHandlersEvent.Item event) ` | 事件总线派发 ` RegisterColorHandlersEvent.Item ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/RegisterColorHandlersEventListener.java#L36) |
| ` public RegisterColorHandlersEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/RegisterColorHandlersEventListener.java#L18) |

## ServerBlockEntityEventListener

` public class ServerBlockEntityEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L20)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLoad(BlockEntityEvent.ServerLoad event) ` | 事件总线派发 ` BlockEntityEvent.ServerLoad ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (!(event.getEntity() instanceof IFluidHandlerHolder)) ` 内调用 ` FluidNetworkManager.INSTANCE.addContainerAfterLoad( event.getLevel(), event.getEntity().getBlockPos() ) `<br>分支 ` (!(event.getEntity() instanceof IFluidHandlerHolder)) ` 内调用 ` event.getLevel() `<br>分支 ` (!(event.getEntity() instanceof IFluidHandlerHolder)) ` 内调用 ` event.getEntity().getBlockPos() `<br>分支 ` (!(event.getEntity() instanceof IFluidHandlerHolder)) ` 内调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof IPowerComponent component) ` 内调用 ` PowerGrid.addComponent(component) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L22) |
| ` @SubscribeEvent public static void onUnload(BlockEntityEvent.ServerUnload event) ` | 事件总线派发 ` BlockEntityEvent.ServerUnload ` 时调用。<br>实现调用 ` event.getLevel().getBlockEntity(event.getEntity().getBlockPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getEntity().getBlockPos() `<br>实现调用 ` event.getEntity() `<br>分支 ` (current == null \|\| current == event.getEntity()) ` 内调用 ` FluidNetworkManager.INSTANCE.removeContainer(event.getLevel(), event.getEntity().getBlockPos()) `<br>分支 ` (current == null \|\| current == event.getEntity()) ` 内调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L44) |
| ` public ServerBlockEntityEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L20) |

## ServerConfigEventListener

` public final class ServerConfigEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerConfigEventListener.java#L15)

NeoForge 1.21 synchronizes server configs at login but does not broadcast reloads.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, bus = EventBusSubscriber.Bus.MOD) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onReload(ModConfigEvent.Reloading event) ` | 事件总线派发 ` ModConfigEvent.Reloading ` 时调用。<br>实现调用 ` event.getConfig() `<br>实现调用 ` ServerLifecycleHooks.getCurrentServer() `<br>实现调用 ` config.getLoadedConfig() `<br>实现调用 ` config.getType() `<br>实现调用 ` loaded.config().configFormat() `<br>实现调用 ` loaded.config() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerConfigEventListener.java#L20) |

## ServerLifecycleEventListener

` public class ServerLifecycleEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L24)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onServerStarted(ServerStartedEvent event) ` | 事件总线派发 ` ServerStartedEvent ` 时调用。<br>实现调用 ` ModHammerInits.init() `<br>实现调用 ` HammerManager.register() `<br>实现调用 ` LevelLoadManager.notifyServerStarted() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L26) |
| ` @SubscribeEvent public static void onTick(ServerTickEvent.Pre event) ` | 事件总线派发 ` ServerTickEvent.Pre ` 时调用。<br>实现调用 ` PowerGrid.tickGrid() `<br>实现调用 ` FluidNetworkManager.INSTANCE.tick() `<br>实现调用 ` HeaterManager.tickAll() `<br>实现调用 ` HeatCollectorManager.tickAll() `<br>实现调用 ` RandomChuckTickLoadManager.tick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L33) |
| ` @SubscribeEvent public static void onTick(ServerTickEvent.Post event) ` | 事件总线派发 ` ServerTickEvent.Post ` 时调用。<br>执行 ` RedstoneWireNetworkManager.tick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L42) |
| ` @SubscribeEvent public static void onServerStopped(ServerStoppedEvent event) ` | 事件总线派发 ` ServerStoppedEvent ` 时调用。<br>实现调用 ` PowerGrid.clear() `<br>实现调用 ` HeatCollectorManager.clear() `<br>实现调用 ` FluidNetworkManager.INSTANCE.clear() `<br>实现调用 ` RecipeCaches.unload() `<br>实现调用 ` SoundHelper.INSTANCE.clear() `<br>实现调用 ` StorageServerStub.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L48) |
| ` @SubscribeEvent public static void onServerStopping(ServerStoppingEvent event) ` | 事件总线派发 ` ServerStoppingEvent ` 时调用。<br>执行 ` PowerGrid.isServerClosing = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L60) |
| ` public ServerLifecycleEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L24) |

## ServerReloadEventListener

` public class ServerReloadEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L10)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onServerReload(AddReloadListenerEvent event) ` | 事件总线派发 ` AddReloadListenerEvent ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L12) |
| ` public ServerReloadEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L10) |

## SmartBlockPlacerEventListener

` public class SmartBlockPlacerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SmartBlockPlacerEventListener.java#L12)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void onFindPointer(SmartBlockPlacerFindPointerEvent event) ` | 事件总线派发 ` SmartBlockPlacerFindPointerEvent ` 时调用。<br>实现调用 ` event.getOperation() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` ModTargetPointers.BLOCK_ITEM_HANDLER_ONLY_BLOCK_ITEM.get() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` event.getLevel() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` event.getSourcePos() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` event.getFacing() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` event.getRequiredState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SmartBlockPlacerEventListener.java#L14) |
| ` public SmartBlockPlacerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SmartBlockPlacerEventListener.java#L12) |

## SoundEventListener

` public class SoundEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L11)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlaySoundAtEntity(PlayLevelSoundEvent.AtEntity event) ` | 事件总线派发 ` PlayLevelSoundEvent.AtEntity ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getSound().value().getLocation() `<br>实现调用 ` event.getSound().value() `<br>实现调用 ` event.getSound() `<br>实现调用 ` entity.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L13) |
| ` @SubscribeEvent public static void onPlaySoundAtPosition(PlayLevelSoundEvent.AtPosition event) ` | 事件总线派发 ` PlayLevelSoundEvent.AtPosition ` 时调用。<br>执行 ` event.setCanceled(SoundHelper.INSTANCE.shouldMute( event.getLevel(), event.getSound().value().getLocation(), event.getPosition() )) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L23) |
| ` public SoundEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L11) |

## TheMonolithEventListener

` public class TheMonolithEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L41)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onChunkLoad(ChunkEvent.Load event) ` | 事件总线派发 ` ChunkEvent.Load ` 时调用。<br>实现调用 ` event.isNewChunk() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` Level.OVERWORLD.equals(level.dimension()) `<br>实现调用 ` level.dimension() `<br>实现调用 ` level.getSharedSpawnPos() `<br>实现调用 ` spawnChunk.equals(event.getChunk().getPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L71) |
| ` @SubscribeEvent public static void onServerTick(ServerTickEvent.Post event) ` | 事件总线派发 ` ServerTickEvent.Post ` 时调用。<br>实现调用 ` NEW_WORLDS.remove(event.getServer()) `<br>实现调用 ` event.getServer() `<br>实现调用 ` SmallMonolith.generate(event.getServer().overworld()) `<br>实现调用 ` event.getServer().overworld() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L81) |
| ` @SubscribeEvent public static void onPlayerTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.serverLevel() `<br>实现调用 ` level.getPoiManager() `<br>实现调用 ` player.blockPosition() `<br>实现调用 ` Collectors.toSet() `<br>实现调用 ` nearby.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L87) |
| ` @SubscribeEvent public static void onRightClickBlock(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getLevel().getBlockState(event.getPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` state.is(ModBlocks.MONOLITH.get()) `<br>实现调用 ` ModBlocks.MONOLITH.get() `<br>实现调用 ` state.is(ModBlocks.MONOLITH_LINE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L118) |
| ` @SubscribeEvent public static void onEntityLeave(EntityLeaveLevelEvent event) ` | 事件总线派发 ` EntityLeaveLevelEvent ` 时调用。<br>实现调用 ` PROGRESS.remove(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` RETURN_TOUCHES.remove(event.getEntity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L161) |
| ` public TheMonolithEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L41) |

## UseOnBlockEventListener

` public class UseOnBlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/UseOnBlockEventListener.java#L12)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onUseOnBlock(UseItemOnBlockEvent e) ` | 事件总线派发 ` UseItemOnBlockEvent ` 时调用。<br>实现调用 ` e.getUsePhase() `<br>实现调用 ` e.getUseOnContext() `<br>实现调用 ` context.getItemInHand().is(ItemTags.HOES) `<br>实现调用 ` context.getItemInHand() `<br>实现调用 ` context.getLevel() `<br>实现调用 ` context.getPlayer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/UseOnBlockEventListener.java#L14) |
| ` public UseOnBlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/UseOnBlockEventListener.java#L12) |

## VillagerEventListener

` public class VillagerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/VillagerEventListener.java#L21)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void addCustomTrades(VillagerTradesEvent event) ` | 添加自定义交易时间<br>事件总线派发 ` VillagerTradesEvent ` 时调用。<br>参数 ` event ` 事件<br>实现调用 ` event.getType() `<br>实现调用 ` ModVillagers.JEWELER.get() `<br>分支 ` (event.getType() == ModVillagers.JEWELER.get()) ` 内调用 ` event.getTrades() `<br>分支 ` (event.getType() == ModVillagers.JEWELER.get()) ` 内调用 ` trades.get(1) `<br>分支 ` (event.getType() == ModVillagers.JEWELER.get()) ` 内调用 ` trades.get(2) `<br>分支 ` (event.getType() == ModVillagers.JEWELER.get()) ` 内调用 ` trades.get(3) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/VillagerEventListener.java#L28) |
| ` public VillagerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/VillagerEventListener.java#L21) |
