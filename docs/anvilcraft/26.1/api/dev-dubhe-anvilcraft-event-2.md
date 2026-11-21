# dev.dubhe.anvilcraft.event（PlayerEventListener 至 UseOnBlockEventListener）



## PlayerEventListener

` public class PlayerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L62)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onJoinedServer(PlayerEvent.PlayerLoggedInEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedInEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` SpacetimeSupercomputerBlockEntity.cancelPendingTickSprints(serverPlayer.level().getServer()) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.level().getServer() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.level() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` LevelLoadManager.syncOverseers(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L64) |
| ` @SubscribeEvent public static void onLoggedOut(PlayerEvent.PlayerLoggedOutEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>执行 ` InfiniteFluidTankBreakProtection.clear(event.getEntity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L72) |
| ` @SubscribeEvent public static void useEntity(PlayerInteractEvent.EntityInteract event) ` | 事件总线派发 ` PlayerInteractEvent.EntityInteract ` 时调用。<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` event.getTarget() `<br>实现调用 ` item.is(ModBlocks.RESIN_BLOCK.asItem()) `<br>实现调用 ` ModBlocks.RESIN_BLOCK.asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L77) |
| ` @SubscribeEvent public static void playerRightClickMagnetizedNode(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` level.getEntitiesOfClass( MagnetizedNodeEntity.class, new AABB(pos).expandTowards(0.0, 0.0625, 0.0) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L99) |
| ` @SubscribeEvent public static void preventUseWhenRocketJump(UseItemOnBlockEvent event) ` | 事件总线派发 ` UseItemOnBlockEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` event.getUsePhase() `<br>实现调用 ` event.getHand() `<br>实现调用 ` player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` AnvilHammerItem.canRocketJump(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L148) |
| ` @SubscribeEvent public static void handleDragonRod(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getItemStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L161) |
| ` @SubscribeEvent public static void onJoinedLevel(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer sp) ` 内调用 ` PowerGrid.MANAGER.onPlayerJoined(event.getLevel(), sp) `<br>分支 ` (event.getEntity() instanceof ServerPlayer sp) ` 内调用 ` event.getLevel() `<br>分支 ` (event.getEntity() instanceof ServerPlayer sp) ` 内调用 ` GravityManager.syncTo(sp) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L191) |
| ` @SubscribeEvent public static void onPlayerUsingTotem(LivingUseTotemEvent event) ` | 事件总线派发 ` LivingUseTotemEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getTotem() `<br>实现调用 ` inHand.is(ModItems.AMULET_BOX.asItem()) `<br>实现调用 ` ModItems.AMULET_BOX.asItem() `<br>实现调用 ` inHand.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY).totems().isEmpty() `<br>实现调用 ` inHand.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY).totems() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L199) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void onPlayerBlockWithHeavyHalberd(LivingIncomingDamageEvent event) ` | 事件总线派发 ` LivingIncomingDamageEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` PlayerEventListener.isBlockingWithHeavyHalberd(player) `<br>实现调用 ` event.getSource().is(Tags.DamageTypes.IS_PHYSICAL) `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.setAmount(event.getAmount() * 0.5F) `<br>实现调用 ` event.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L210) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void onPlayerShieldBlock(LivingShieldBlockEvent event) ` | 事件总线派发 ` LivingShieldBlockEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` PlayerEventListener.isBlockingWithHeavyHalberd(player) `<br>实现调用 ` event.setBlocked(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L218) |
| ` @SubscribeEvent public static void onPlayerUse(PlayerInteractEvent.RightClickItem event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getItemStack() `<br>实现调用 ` stack.isEmpty() `<br>实现调用 ` ModAmulets.COMRADE.getKey().equals(stack.get(ModComponents.AMULET)) `<br>实现调用 ` ModAmulets.COMRADE.getKey() `<br>实现调用 ` stack.get(ModComponents.AMULET) `<br>实现调用 ` stack.getOrDefault(ModComponents.COMRADES, Comrades.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L232) |
| ` @SubscribeEvent public static void onPlayerPlace(BlockEvent.EntityPlaceEvent event) ` | 事件总线派发 ` BlockEvent.EntityPlaceEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getLevel().getBlockEntity(event.getPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` player.awardStat(ModStats.PLACE_POWER_COMPONENT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L252) |
| ` public PlayerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L62) |

## PlayerTickEventHandler

` public class PlayerTickEventHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L25)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlayerLoggedIn(PlayerEvent.PlayerLoggedInEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedInEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` PlayerSettings.getSetting(serverPlayer.registryAccess(), serverPlayer.nameAndId()) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.registryAccess() `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.nameAndId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L27) |
| ` @SubscribeEvent public static void onPlayerLoggedOut(PlayerEvent.PlayerLoggedOutEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` IonoCraftBackpackItem.onPlayerLoggedOut(serverPlayer.getUUID()) `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` serverPlayer.getUUID() `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` LaserGunItem.clearState(serverPlayer.getUUID()) `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` StorageServerStub.remove(serverPlayer.getUUID()) `<br>分支 ` (player instanceof ServerPlayer serverPlayer) ` 内调用 ` BundleLikeServerStub.clear(serverPlayer.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L37) |
| ` @SubscribeEvent public static void onPlayerTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` IonoCraftBackpackItem.applySlowFalling(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` CrabClawItem.updateReach(event.getEntity()) `<br>实现调用 ` BuildingRodItem.updateReach(event.getEntity()) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` PlayerTickEventHandler.applyPowerGrid(serverPlayer) `<br>分支 ` (event.getEntity() instanceof ServerPlayer serverPlayer) ` 内调用 ` IonoCraftBackpackItem.playerTick(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L48) |
| ` public PlayerTickEventHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L25) |

## PlayerTrackingChunkEventListener

` public class PlayerTrackingChunkEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTrackingChunkEventListener.java#L11)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onChunkSent(ChunkWatchEvent.Sent event) ` | 事件总线派发 ` ChunkWatchEvent.Sent ` 时调用。<br>实现调用 ` event.getChunk() `<br>实现调用 ` chunk.getBlockEntities().values() `<br>实现调用 ` chunk.getBlockEntities() `<br>分支 ` (value instanceof BaseLaserBlockEntity laserBE) ` 内调用 ` laserBE.syncTo(event.getPlayer()) `<br>分支 ` (value instanceof BaseLaserBlockEntity laserBE) ` 内调用 ` event.getPlayer() `<br>实现调用 ` RedstoneWireNetworkManager.syncChunk(event.getPlayer(), event.getLevel(), chunk) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTrackingChunkEventListener.java#L13) |
| ` public PlayerTrackingChunkEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTrackingChunkEventListener.java#L11) |

## PlayerWearAnvilHammerEventListener

` public class PlayerWearAnvilHammerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java#L16)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlayerWearAnvilHammer(LivingEquipmentChangeEvent event) ` | 事件总线派发 ` LivingEquipmentChangeEvent ` 时调用。<br>实现调用 ` event.getSlot() `<br>分支 ` (event.getSlot() == EquipmentSlot.HEAD) ` 内调用 ` tryTrigger(event.getEntity(), event.getTo()) `<br>分支 ` (event.getSlot() == EquipmentSlot.HEAD) ` 内调用 ` event.getEntity() `<br>分支 ` (event.getSlot() == EquipmentSlot.HEAD) ` 内调用 ` event.getTo() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java#L18) |
| ` public static void tryTrigger(LivingEntity entity, ItemStack stack) ` | 实现调用 ` stack.getItem() `<br>实现调用 ` PowerGrid.findPowerGridContains(entity.level(), entity.position()).filter(PowerGrid::isWorking).isPresent() `<br>实现调用 ` PowerGrid.findPowerGridContains(entity.level(), entity.position()).filter(PowerGrid::isWorking) `<br>实现调用 ` PowerGrid.findPowerGridContains(entity.level(), entity.position()) `<br>实现调用 ` entity.level() `<br>实现调用 ` entity.position() `<br>[调用处 CuriosCommon.onPlayerWearAnvilHammerInCurioSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java#L23) |
| ` public PlayerWearAnvilHammerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java#L16) |

## PortalEventListener

` public class PortalEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java#L21)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onThroughPortal(EntityThroughPortalEvent event) ` | 事件总线派发 ` EntityThroughPortalEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` PortalEventListener.processBlockPortalConversionRecipe(level, entity, event.getType()) `<br>实现调用 ` event.getType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java#L23) |
| ` public PortalEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java#L21) |

## ReloadEventListener

` public class ReloadEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ReloadEventListener.java#L12)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onServerReload(AddServerReloadListenersEvent event) ` | 事件总线派发 ` AddServerReloadListenersEvent ` 时调用。<br>实现调用 ` AnvilCraft.of("stellar_tracks") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ReloadEventListener.java#L14) |
| ` @SubscribeEvent public static void onServerTagsUpdated(TagsUpdatedEvent.ServerDataLoad event) ` | 事件总线派发 ` TagsUpdatedEvent.ServerDataLoad ` 时调用。<br>执行 ` RoyalPreferenceOutcome.RoyalPreference.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ReloadEventListener.java#L20) |
| ` public ReloadEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ReloadEventListener.java#L12) |

## ServerBlockEntityEventListener

` public class ServerBlockEntityEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L19)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLoad(BlockEntityEvent.ServerLoad event) ` | 事件总线派发 ` BlockEntityEvent.ServerLoad ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (!(event.getEntity() instanceof IFluidResourceHandlerHolder)) ` 内调用 ` FluidNetworkManager.INSTANCE.addContainerAfterLoad(event.getLevel(), event.getEntity().getBlockPos()) `<br>分支 ` (!(event.getEntity() instanceof IFluidResourceHandlerHolder)) ` 内调用 ` event.getLevel() `<br>分支 ` (!(event.getEntity() instanceof IFluidResourceHandlerHolder)) ` 内调用 ` event.getEntity().getBlockPos() `<br>分支 ` (!(event.getEntity() instanceof IFluidResourceHandlerHolder)) ` 内调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof IPowerComponent component) ` 内调用 ` PowerGrid.addComponent(component) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L21) |
| ` @SubscribeEvent public static void onUnload(BlockEntityEvent.ServerUnload event) ` | 事件总线派发 ` BlockEntityEvent.ServerUnload ` 时调用。<br>实现调用 ` event.getLevel().getBlockEntity(event.getEntity().getBlockPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getEntity().getBlockPos() `<br>实现调用 ` event.getEntity() `<br>分支 ` (current == null \|\| current == event.getEntity()) ` 内调用 ` FluidNetworkManager.INSTANCE.removeContainer(event.getLevel(), event.getEntity().getBlockPos()) `<br>分支 ` (current == null \|\| current == event.getEntity()) ` 内调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L40) |
| ` public ServerBlockEntityEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L19) |

## ServerLifecycleEventListener

` public class ServerLifecycleEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L28)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onServerStarted(ServerStartedEvent event) ` | 事件总线派发 ` ServerStartedEvent ` 时调用。<br>实现调用 ` ModHammerInits.init() `<br>实现调用 ` HammerManager.register() `<br>实现调用 ` LevelLoadManager.notifyServerStarted() `<br>实现调用 ` ExpCollectorBlockEntity.clearPoachingCollectors() `<br>实现调用 ` ItemCollectorBlockEntity.clearPoachingCollectors() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L30) |
| ` @SubscribeEvent public static void onTick(ServerTickEvent.Pre event) ` | 事件总线派发 ` ServerTickEvent.Pre ` 时调用。<br>实现调用 ` PowerGrid.tickGrid() `<br>实现调用 ` HeaterManager.tickAll() `<br>实现调用 ` HeatCollectorManager.tickAll() `<br>实现调用 ` FluidNetworkManager.INSTANCE.tick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L39) |
| ` @SubscribeEvent public static void onTick(ServerTickEvent.Post event) ` | 事件总线派发 ` ServerTickEvent.Post ` 时调用。<br>执行 ` RedstoneWireNetworkManager.tick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L47) |
| ` @SubscribeEvent public static void onServerStopping(ServerStoppingEvent event) ` | 事件总线派发 ` ServerStoppingEvent ` 时调用。<br>执行 ` PowerGrid.isServerClosing = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L52) |
| ` @SubscribeEvent public static void onServerStopped(ServerStoppedEvent event) ` | 事件总线派发 ` ServerStoppedEvent ` 时调用。<br>实现调用 ` StoragePortManager.clear() `<br>实现调用 ` PowerGrid.clear() `<br>实现调用 ` HeatCollectorManager.clear() `<br>实现调用 ` FluidNetworkManager.INSTANCE.clear() `<br>实现调用 ` SoundHelper.INSTANCE.clear() `<br>实现调用 ` StorageServerStub.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L57) |
| ` public ServerLifecycleEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L28) |

## ServerReloadEventListener

` public class ServerReloadEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L11)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onServerReload(AddServerReloadListenersEvent event) ` | 事件总线派发 ` AddServerReloadListenersEvent ` 时调用。<br>实现调用 ` AnvilCraft.of("amulets") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L13) |
| ` public ServerReloadEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L11) |

## SmartBlockPlacerEventListener

` public class SmartBlockPlacerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SmartBlockPlacerEventListener.java#L12)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void onFindPointer(SmartBlockPlacerFindPointerEvent event) ` | 事件总线派发 ` SmartBlockPlacerFindPointerEvent ` 时调用。<br>实现调用 ` event.getOperation() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` ModTargetPointers.BLOCK_ITEM_HANDLER_ONLY_BLOCK_ITEM.get() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` event.getLevel() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` event.getSourcePos() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` event.getFacing() `<br>分支 ` (event.getOperation() == SmartBlockPlacerBlockEntity.OperationMode.PICKUP) ` 内调用 ` event.getRequiredState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SmartBlockPlacerEventListener.java#L14) |
| ` public SmartBlockPlacerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SmartBlockPlacerEventListener.java#L12) |

## SoundEventListener

` public class SoundEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L11)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlaySoundAtEntity(PlayLevelSoundEvent.AtEntity event) ` | 事件总线派发 ` PlayLevelSoundEvent.AtEntity ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getSound() `<br>实现调用 ` event.getSound().getKey() `<br>分支 ` (event.getSound() != null && event.getSound().getKey() != null) ` 内调用 ` event.getLevel() `<br>分支 ` (event.getSound() != null && event.getSound().getKey() != null) ` 内调用 ` event.getSound().getKey().identifier() `<br>分支 ` (event.getSound() != null && event.getSound().getKey() != null) ` 内调用 ` event.getSound().getKey() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L13) |
| ` @SubscribeEvent public static void onPlaySoundAtPosition(PlayLevelSoundEvent.AtPosition event) ` | 事件总线派发 ` PlayLevelSoundEvent.AtPosition ` 时调用。<br>实现调用 ` event.getSound() `<br>实现调用 ` event.getSound().getKey() `<br>分支 ` (event.getSound() != null && event.getSound().getKey() != null) ` 内调用 ` event.getLevel() `<br>分支 ` (event.getSound() != null && event.getSound().getKey() != null) ` 内调用 ` event.getSound().getKey().identifier() `<br>分支 ` (event.getSound() != null && event.getSound().getKey() != null) ` 内调用 ` event.getSound().getKey() `<br>分支 ` (event.getSound() != null && event.getSound().getKey() != null) ` 内调用 ` event.getSound() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L28) |
| ` public SoundEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L11) |

## StoragePortInteractionListener

` public final class StoragePortInteractionListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/StoragePortInteractionListener.java#L15)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void clickStoragePortEvent(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos).getBlock() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` portBlock.interceptsLeftClick(level, pos, player, StoragePortInteractionListener.aimHit(player)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/StoragePortInteractionListener.java#L17) |
| ` public StoragePortInteractionListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/StoragePortInteractionListener.java#L15) |

## TheMonolithEventListener

` public class TheMonolithEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L40)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onCreateSpawnPosition(LevelEvent.CreateSpawnPosition event) ` | 事件总线派发 ` LevelEvent.CreateSpawnPosition ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` Level.OVERWORLD.equals(level.dimension()) `<br>实现调用 ` level.dimension() `<br>实现调用 ` NEW_WORLDS.add(level.getServer()) `<br>实现调用 ` level.getServer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L70) |
| ` @SubscribeEvent public static void onServerTick(ServerTickEvent.Post event) ` | 事件总线派发 ` ServerTickEvent.Post ` 时调用。<br>实现调用 ` NEW_WORLDS.remove(event.getServer()) `<br>实现调用 ` event.getServer() `<br>实现调用 ` SmallMonolith.generate(event.getServer().overworld()) `<br>实现调用 ` event.getServer().overworld() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L77) |
| ` @SubscribeEvent public static void onPlayerTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.level() `<br>实现调用 ` level.getPoiManager() `<br>实现调用 ` player.blockPosition() `<br>实现调用 ` Collectors.toSet() `<br>实现调用 ` nearby.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L83) |
| ` @SubscribeEvent public static void onRightClickBlock(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getLevel().getBlockState(event.getPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` state.is(ModBlocks.MONOLITH.get()) `<br>实现调用 ` ModBlocks.MONOLITH.get() `<br>实现调用 ` state.is(ModBlocks.MONOLITH_LINE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L115) |
| ` @SubscribeEvent public static void onEntityLeave(EntityLeaveLevelEvent event) ` | 事件总线派发 ` EntityLeaveLevelEvent ` 时调用。<br>实现调用 ` PROGRESS.remove(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` RETURN_TOUCHES.remove(event.getEntity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L160) |
| ` public TheMonolithEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TheMonolithEventListener.java#L40) |

## TooltipEventListener

` public class TooltipEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TooltipEventListener.java#L24)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onTooltip(AppendCustomHoverTextEvent event) ` | 事件总线派发 ` AppendCustomHoverTextEvent ` 时调用。<br>实现调用 ` event.getStack() `<br>实现调用 ` event.getContext() `<br>实现调用 ` event.getDisplay() `<br>实现调用 ` event.getBuilder() `<br>实现调用 ` event.getTooltipFlag() `<br>实现调用 ` flag.hasShiftDown() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TooltipEventListener.java#L44) |
| ` public TooltipEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TooltipEventListener.java#L24) |

## UseOnBlockEventListener

` public class UseOnBlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/UseOnBlockEventListener.java#L12)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onUseOnBlock(UseItemOnBlockEvent e) ` | 事件总线派发 ` UseItemOnBlockEvent ` 时调用。<br>实现调用 ` e.getUsePhase() `<br>实现调用 ` e.getUseOnContext() `<br>实现调用 ` context.getItemInHand().is(ItemTags.HOES) `<br>实现调用 ` context.getItemInHand() `<br>实现调用 ` context.getLevel().isClientSide() `<br>实现调用 ` context.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/UseOnBlockEventListener.java#L14) |
| ` public UseOnBlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/UseOnBlockEventListener.java#L12) |
