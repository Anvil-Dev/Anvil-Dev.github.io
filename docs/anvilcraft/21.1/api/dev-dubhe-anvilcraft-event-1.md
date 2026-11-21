# dev.dubhe.anvilcraft.event（AmuletAbilitiesEventListener 至 OverworldLikeEventListener）



## AmuletAbilitiesEventListener

` public class AmuletAbilitiesEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L35)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onInventoryTick(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` AmuletManager.shouldEvaluate(entity) `<br>实现调用 ` AmuletManager.get(entity.registryAccess()) `<br>实现调用 ` entity.registryAccess() `<br>实现调用 ` manager.getActiveEffects(entity) `<br>实现调用 ` AmuletManager.identityView() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L42) |
| ` @SubscribeEvent public static void onEat(LivingEntityUseItemEvent.Tick event) ` | 事件总线派发 ` LivingEntityUseItemEvent.Tick ` 时调用。<br>实现调用 ` event.getDuration() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getItem().getFoodProperties(entity) `<br>实现调用 ` event.getItem() `<br>实现调用 ` AmuletAbilitiesEventListener.CONSUMED_FOOD.set(properties != null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L76) |
| ` @SubscribeEvent public static void onEatEffect(MobEffectEvent.Applicable event) ` | 事件总线派发 ` MobEffectEvent.Applicable ` 时调用。<br>实现调用 ` Boolean.TRUE.equals(AmuletAbilitiesEventListener.CONSUMED_FOOD.get()) `<br>实现调用 ` AmuletAbilitiesEventListener.CONSUMED_FOOD.get() `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.MOB_EFFECT, event.getEffectInstance()) `<br>实现调用 ` event.getEffectInstance() `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.CONSUMING_FOOD, true) `<br>实现调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L87) |
| ` @SubscribeEvent public static void onEatFinish(LivingEntityUseItemEvent.Finish event) ` | 事件总线派发 ` LivingEntityUseItemEvent.Finish ` 时调用。<br>执行 ` AmuletAbilitiesEventListener.CONSUMED_FOOD.remove() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L105) |
| ` @SubscribeEvent public static void onEffect(MobEffectEvent.Applicable event) ` | 事件总线派发 ` MobEffectEvent.Applicable ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` AmuletManager.shouldEvaluate(entity) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.MOB_EFFECT, event.getEffectInstance()) `<br>实现调用 ` event.getEffectInstance() `<br>实现调用 ` AmuletManager.get(entity.registryAccess()).trigger(entity, ctx) `<br>实现调用 ` AmuletManager.get(entity.registryAccess()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L110) |
| ` @SubscribeEvent public static void onHurt(LivingIncomingDamageEvent event) ` | 事件总线派发 ` LivingIncomingDamageEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` AmuletManager.shouldEvaluate(entity) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.DAMAGE_SOURCE, event.getSource()) `<br>实现调用 ` event.getSource() `<br>实现调用 ` AmuletManager.get(entity.registryAccess()).trigger(entity, ctx) `<br>实现调用 ` AmuletManager.get(entity.registryAccess()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L125) |
| ` @SubscribeEvent public static void onChangeTarget(LivingChangeTargetEvent event) ` | 事件总线派发 ` LivingChangeTargetEvent ` 时调用。<br>实现调用 ` event.getTargetType() `<br>实现调用 ` Util.castSafely(event.getEntity(), Mob.class).orElse(null) `<br>实现调用 ` Util.castSafely(event.getEntity(), Mob.class) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getNewAboutToBeSetTarget() `<br>实现调用 ` AmuletAbilitiesEventListener.shouldIgnoreTarget(entity, mob) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L139) |
| ` @SubscribeEvent public static void onTick(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>实现调用 ` Util.castSafely(event.getEntity(), Mob.class).orElse(null) `<br>实现调用 ` Util.castSafely(event.getEntity(), Mob.class) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` mob.getTarget() `<br>实现调用 ` AmuletAbilitiesEventListener.shouldIgnoreTarget(entity, mob) `<br>分支 ` (mob instanceof NeutralMob neutral) ` 内调用 ` neutral.stopBeingAngry() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L151) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean shouldIgnoreTarget(LivingEntity target, Mob targeting) ` | ` (!AmuletManager.shouldEvaluate(target)) ` 成立时提前返回 ` false `<br>末尾返回 ` ctx.get(ModAmuletEffectContextKeys.IGNORE_MOB).orElse(false) `<br>实现调用 ` AmuletManager.shouldEvaluate(target) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.TARGETING_MOB, targeting) `<br>实现调用 ` AmuletManager.get(target.registryAccess()).trigger(target, ctx) `<br>实现调用 ` AmuletManager.get(target.registryAccess()) `<br>实现调用 ` target.registryAccess() `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.IGNORE_MOB).orElse(false) `<br>[调用处 LivingEntityMixin.anvilcraft$ignoreProtectedAttacker](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L90) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L163) |
| ` @SubscribeEvent public static void onKnockback(LivingKnockBackEvent event) ` | 事件总线派发 ` LivingKnockBackEvent ` 时调用。<br>实现调用 ` AmuletAbilitiesEventListener.shouldImmuneKnockback(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L174) |
| ` @SubscribeEvent public static void onExplosionKnockback(ExplosionKnockbackEvent event) ` | 事件总线派发 ` ExplosionKnockbackEvent ` 时调用。<br>实现调用 ` AmuletAbilitiesEventListener.shouldImmuneKnockback(event.getAffectedEntity()) `<br>实现调用 ` event.getAffectedEntity() `<br>实现调用 ` event.setKnockbackVelocity(Vec3.ZERO) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L180) |
| ` @SubscribeEvent public static void onInteractTamableAnimal(PlayerInteractEvent.EntityInteract event) ` | 事件总线派发 ` PlayerInteractEvent.EntityInteract ` 时调用。<br>实现调用 ` event.getItemStack().isEmpty() `<br>实现调用 ` event.getItemStack() `<br>实现调用 ` event.getTarget() `<br>实现调用 ` animal.isTame() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.INTERACT_TARGET, animal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L199) |

## AmuletEventListener

` public class AmuletEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L14)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void on(AmuletEvent.Find event) ` | 事件总线派发 ` AmuletEvent.Find ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.provide(player.getMainHandItem()) `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` event.provide(player.getOffhandItem()) `<br>实现调用 ` player.getOffhandItem() `<br>实现调用 ` PocketInventory.items(player).forEach(event::provide) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L16) |
| ` @SubscribeEvent public static void on(AmuletEvent.ProcessFound event) ` | 事件总线派发 ` AmuletEvent.ProcessFound ` 时调用。<br>实现调用 ` event.getFound() `<br>实现调用 ` found.is(ModItems.AMULET_BOX) `<br>分支 ` (found.is(ModItems.AMULET_BOX)) ` 内调用 ` found.get(ModComponents.BOX_CONTENTS) `<br>分支 ` (found.is(ModItems.AMULET_BOX)) ` 内调用 ` contents.amulets() `<br>分支 ` (found.is(ModItems.AMULET_BOX)) ` 内调用 ` stack.has(ModComponents.AMULET) `<br>分支 ` (stack.has(ModComponents.AMULET)) ` 内调用 ` event.provide(stack.copy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L24) |
| ` @SubscribeEvent public static void on(AmuletEvent.EntityCheck event) ` | 事件总线派发 ` AmuletEvent.EntityCheck ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof Player) ` 内调用 ` event.pass() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L38) |
| ` public AmuletEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L14) |

## AutoEnchantingTableEventListener

` public class AutoEnchantingTableEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AutoEnchantingTableEventListener.java#L14)

自动附魔台引物附魔事件监听器。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPrimerEnchantments(PrimerEnchantmentsEvent event) ` | 事件总线派发 ` PrimerEnchantmentsEvent ` 时调用。<br>实现调用 ` event.getPrimer().is(ModItems.EMERALD_AMULET.get()) `<br>实现调用 ` event.getPrimer() `<br>实现调用 ` ModItems.EMERALD_AMULET.get() `<br>分支 ` (event.getPrimer().is(ModItems.EMERALD_AMULET.get())) ` 内调用 ` event.getLevel().registryAccess().registryOrThrow(Registries.ENCHANTMENT) `<br>分支 ` (event.getPrimer().is(ModItems.EMERALD_AMULET.get())) ` 内调用 ` event.getLevel().registryAccess() `<br>分支 ` (event.getPrimer().is(ModItems.EMERALD_AMULET.get())) ` 内调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AutoEnchantingTableEventListener.java#L16) |
| ` public AutoEnchantingTableEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AutoEnchantingTableEventListener.java#L14) |

## BlockEventListener

` public class BlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L46)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void updateCornerWires(BlockEvent.NeighborNotifyEvent event) ` | 事件总线派发 ` BlockEvent.NeighborNotifyEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` level.isClientSide() `<br>分支 ` (event.getLevel() instanceof Level level && !level.isClientSide()) ` 内调用 ` RedstoneWireBlock.neighborChangedAroundSupport(level, event.getPos(), event.getState().getBlock()) `<br>分支 ` (event.getLevel() instanceof Level level && !level.isClientSide()) ` 内调用 ` event.getPos() `<br>分支 ` (event.getLevel() instanceof Level level && !level.isClientSide()) ` 内调用 ` event.getState().getBlock() `<br>分支 ` (event.getLevel() instanceof Level level && !level.isClientSide()) ` 内调用 ` event.getState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L48) |
| ` @SubscribeEvent public static void anvilHammerAttack(PlayerInteractEvent.LeftClickBlock event) ` | 侦听左键方块事件<br>事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>参数 ` event ` 左键方块事件<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getEntity().getItemInHand(hand).getItem() `<br>实现调用 ` event.getEntity().getItemInHand(hand) `<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity().getItemInHand(hand).getItem() instanceof AnvilHammerItem) ` 内调用 ` AnvilHammerItem.dropAnvil(event.getEntity(), event.getLevel(), event.getPos()) `<br>分支 ` (event.getEntity().getItemInHand(hand).getItem() instanceof AnvilHammerItem) ` 内调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L60) |
| ` @SubscribeEvent public static void onCreativeCrateAttack(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel().getBlockEntity(event.getPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` crate.getItemStackHandler().getStackInSlot(0).isEmpty() `<br>实现调用 ` crate.getItemStackHandler().getStackInSlot(0) `<br>实现调用 ` crate.getItemStackHandler() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L70) |
| ` @SubscribeEvent public static void clickStoragePortEvent(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos).getBlock() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` portBlock.interceptsLeftClick(level, pos, player, BlockEventListener.aimHit(player)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L79) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void anvilHammerUseItem(PlayerInteractEvent.RightClickItem event) ` | 主手铁砧锤、副手持有方块且目标为普通方块时，取消使用物品事件， 使服务端不进入铁砧锤长按，配合客户端完成副手方块放置。<br>事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` player.pick(player.blockInteractionRange(), 1.0F, false) `<br>实现调用 ` player.blockInteractionRange() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L109) |
| ` @SubscribeEvent public static void useMagnetBlockWithOffhandItem(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` player.isShiftKeyDown() `<br>实现调用 ` player.getMainHandItem().isEmpty() `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` event.getLevel().getBlockState(event.getPos()).is(ModBlocks.MAGNET_BLOCK) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L120) |
| ` @SubscribeEvent public static void useRuinsBlock(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getLevel().getBlockState(event.getPos()).is(ModBlocks.RUINS_BLOCK) `<br>实现调用 ` event.getLevel().getBlockState(event.getPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>分支 ` (event.getLevel().getBlockState(event.getPos()).is(ModBlocks.RUINS_BLOCK)) ` 内调用 ` event.setUseBlock(TriState.TRUE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L132) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void onRightClickBlock(PlayerInteractEvent.RightClickBlock event) ` | 侦听右键方块事件<br>事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>参数 ` event ` 右键方块事件<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L144) |
| ` public static void onAnvilFixed(LevelAccessor level, ItemStack item, BlockPos pos, BlockState state) ` | 实现调用 ` state.is(Blocks.CHIPPED_ANVIL) `<br>实现调用 ` state.is(Blocks.DAMAGED_ANVIL) `<br>实现调用 ` level.getRandom() `<br>实现调用 ` random.nextDouble() `<br>实现调用 ` item.shrink(1) `<br>实现调用 ` state.getValue(AnvilBlock.FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L190) |
| ` public BlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L46) |

## BreakBlockEventListener

` public class BreakBlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L27)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void preventInfiniteFluidTankBreak(BlockEvent.BreakEvent event) ` | 事件总线派发 ` BlockEvent.BreakEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` event.getPos() `<br>实现调用 ` InfiniteFluidTankBreakProtection.isProtected(player.serverLevel(), pos) `<br>实现调用 ` player.serverLevel() `<br>实现调用 ` ResonatorItem.isResonanceMining(player.serverLevel(), player, pos) `<br>分支 ` (ResonatorItem.isResonanceMining(player.serverLevel(), player, pos)) ` 内调用 ` InfiniteFluidTankBreakProtection.clear(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L29) |
| ` @SubscribeEvent public static void preventCrateBreak(BlockEvent.BreakEvent event) ` | 事件总线派发 ` BlockEvent.BreakEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` player.isShiftKeyDown() `<br>实现调用 ` player.level() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L43) |
| ` @SubscribeEvent public static void onBlockRemoved(BlockEvent.BreakEvent event) ` | 事件总线派发 ` BlockEvent.BreakEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` player.level() `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` event.getPos().getCenter() `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L69) |
| ` @SubscribeEvent public static void preventTradingStationBreak(BlockEvent.BreakEvent event) ` | 事件总线派发 ` BlockEvent.BreakEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` player.level() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos).is(ModBlocks.TRADING_STATION) `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` level.getBlockEntity(pos, ModBlockEntities.TRADING_STATION.get()).filter(be -> be.isOwner(player)).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L84) |
| ` public BreakBlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L27) |

## CapabilitiesEventListener

` public class CapabilitiesEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L44)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void registerCapabilities(final RegisterCapabilitiesEvent event) ` | 事件总线派发 ` RegisterCapabilitiesEvent ` 时调用。<br>实现调用 ` ModBlocks.FIRE_CAULDRON.get() `<br>实现调用 ` ModList.get().isLoaded("nomansland") `<br>实现调用 ` ModList.get() `<br>分支 ` (ModList.get().isLoaded("nomansland")) ` 内调用 ` ModBlocks.MILK_CAULDRON.get() `<br>实现调用 ` ModBlockEntities.BATCH_CRAFTER.get() `<br>实现调用 ` ModBlockEntities.BATCH_CUTTER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L46) |
| ` public CapabilitiesEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L44) |

## CategoryInitEventListener

` public class CategoryInitEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CategoryInitEventListener.java#L32)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Set<ICategory> getAllModsCategories() ` | 末尾返回 ` new HashSet<>(ALL_MODS_CATEGORIES) `<br>[调用处 CategorySettingsScreen.rebuild](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L216) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CategoryInitEventListener.java#L36) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void onSetup(ServerStartedEvent event) ` | 事件总线派发 ` ServerStartedEvent ` 时调用。<br>实现调用 ` event.getServer().registryAccess() `<br>实现调用 ` event.getServer() `<br>实现调用 ` NeoForge.EVENT_BUS.post(new ModCategoryInitEvent(registries)).getCategories() `<br>实现调用 ` NeoForge.EVENT_BUS.post(new ModCategoryInitEvent(registries)) `<br>实现调用 ` CategoryInitEventListener.ALL_MODS_CATEGORIES.addAll(defaultCategories.values()) `<br>实现调用 ` defaultCategories.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CategoryInitEventListener.java#L40) |
| ` @SubscribeEvent public static void registerDefault(ModCategoryInitEvent event) ` | 事件总线派发 ` ModCategoryInitEvent ` 时调用。<br>实现调用 ` event.register(ResourceLocation.DEFAULT_NAMESPACE, event.get(ModCategories.MINECRAFT)) `<br>实现调用 ` event.get(ModCategories.MINECRAFT) `<br>实现调用 ` event.register(AnvilCraft.MOD_ID, event.get(ModCategories.ANVILCRAFT)) `<br>实现调用 ` event.get(ModCategories.ANVILCRAFT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CategoryInitEventListener.java#L132) |
| ` public CategoryInitEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CategoryInitEventListener.java#L32) |

## CauldronFluidContentEventListener

` public class CauldronFluidContentEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CauldronFluidContentEventListener.java#L15)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void registerCauldronFluidContent(RegisterCauldronFluidContentEvent event) ` | 事件总线派发 ` RegisterCauldronFluidContentEvent ` 时调用。<br>实现调用 ` event.register(ModBlocks.OIL_CAULDRON.get(), ModFluids.OIL.get(), 1000, Layered4LevelCauldronBlock.LEVEL) `<br>实现调用 ` ModBlocks.OIL_CAULDRON.get() `<br>实现调用 ` ModFluids.OIL.get() `<br>实现调用 ` ModList.get().isLoaded("nomansland") `<br>实现调用 ` ModList.get() `<br>分支 ` (!ModList.get().isLoaded("nomansland")) ` 内调用 ` event.register(ModBlocks.MILK_CAULDRON.get(), NeoForgeMod.MILK.get(), 1000, Layered4LevelCauldronBlock.LEVEL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CauldronFluidContentEventListener.java#L17) |
| ` public CauldronFluidContentEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CauldronFluidContentEventListener.java#L15) |

## CauldronOutletEventListener

` public class CauldronOutletEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CauldronOutletEventListener.java#L25)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlayerUseAnvilHammerOnCauldron(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getItemInHand(event.getHand()) `<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(blockPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CauldronOutletEventListener.java#L27) |
| ` public static void toggleOutlet(Level level, BlockPos cauldronPos, Vec3 position, Direction direction) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` findExistingOutlet(level, cauldronPos, position) `<br>分支 ` (existingOutlet != null) ` 内调用 ` existingOutlet.kill() `<br>分支 ` (existingOutlet != null) ` 内调用 ` playOutletSound(level, cauldronPos) `<br>实现调用 ` removeExistingOutlets(level, cauldronPos) `<br>实现调用 ` removeOpposingOutlet(level, cauldronPos, direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CauldronOutletEventListener.java#L48) |
| ` public CauldronOutletEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CauldronOutletEventListener.java#L25) |

## DatapackEventListener

` public class DatapackEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/DatapackEventListener.java#L11)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("ConstantValue") @SubscribeEvent public static void onDatapack(AddReloadListenerEvent event) ` | 事件总线派发 ` AddReloadListenerEvent ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/DatapackEventListener.java#L13) |
| ` public DatapackEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/DatapackEventListener.java#L11) |

## EntityEventListener

` public class EntityEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L17)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onCheckEntityInvulnerability(EntityInvulnerabilityCheckEvent event) ` | 事件总线派发 ` EntityInvulnerabilityCheckEvent ` 时调用。<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` source.is(ModDamageTypeTags.IS_FALLING_GIANT_ANVIL) `<br>实现调用 ` entity.getType().is(ModEntityTypeTags.FALLING_GIANT_ANVIL_DAMAGE_IMMUNE) `<br>实现调用 ` entity.getType() `<br>实现调用 ` event.setInvulnerable(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L19) |
| ` @SubscribeEvent public static void onLeaveLevel(EntityLeaveLevelEvent event) ` | 事件总线派发 ` EntityLeaveLevelEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` DummyArmadillo.clear(entity) `<br>实现调用 ` DummyCat.clear(entity) `<br>实现调用 ` DummyWolf.clear(entity) `<br>实现调用 ` AmuletManager.get(event.getLevel().registryAccess()).clear(entity.getUUID()) `<br>实现调用 ` AmuletManager.get(event.getLevel().registryAccess()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L31) |
| ` public EntityEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L17) |

## FallingBlockCollisionEventListener

` public class FallingBlockCollisionEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L41)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void anvilCollisionCraft(AnvilEvent.CollisionBlock event) ` | 事件总线派发 ` AnvilEvent.CollisionBlock ` 时调用。<br>实现调用 ` event.isCanceled() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` RailgunAnvilEntity.isGhost(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>分支 ` (RailgunAnvilEntity.isGhost(event.getEntity())) ` 内调用 ` event.getEntity().discard() `<br>分支 ` (RailgunAnvilEntity.isGhost(event.getEntity())) ` 内调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L44) |
| ` public FallingBlockCollisionEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L41) |

## FallingBlockCollisionEventListener.ItemImmuneExplosionDamage

` public static class ItemImmuneExplosionDamage extends ExplosionDamageCalculator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L199)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean shouldDamageEntity(Explosion explosion, Entity entity) ` | ` (entity instanceof ItemEntity) ` 成立时提前返回 ` false `<br>末尾返回 ` super.shouldDamageEntity(explosion, entity) `<br>实现调用 ` super.shouldDamageEntity(explosion, entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L200) |
| ` public ItemImmuneExplosionDamage() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L199) |

## GuideEventListener

` public class GuideEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L12)

类型注解 ` @Integration("ageratum") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String INDEX_FILE ` | 初值 ` "index" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L14) |
| ` public void apply() ` | 执行 ` NeoForge.EVENT_BUS.register(GuideEventListener.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L16) |
| ` @SubscribeEvent public static void onHasGuide(GuideBookEvent.HasGuideBookEvent event) ` | 事件总线派发 ` GuideBookEvent.HasGuideBookEvent ` 时调用。<br>执行 ` event.hasGuideBook() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L20) |
| ` @SubscribeEvent public static void onHasGuide(CheckIntegrationLoadedEvent event) ` | 事件总线派发 ` CheckIntegrationLoadedEvent ` 时调用。<br>实现调用 ` event.getId().equals(AnvilCraft.MOD_ID) `<br>实现调用 ` event.getId() `<br>分支 ` (event.getId().equals(AnvilCraft.MOD_ID)) ` 内调用 ` event.setLoaded() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L25) |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void onOpenGuide(GuideBookEvent.OpenGuideBookEvent event) ` | 事件总线派发 ` GuideBookEvent.OpenGuideBookEvent ` 时调用。<br>实现调用 ` Ageratum.openGuide(event.getPlayer(), AnvilCraft.of(INDEX_FILE)) `<br>实现调用 ` event.getPlayer() `<br>实现调用 ` AnvilCraft.of(INDEX_FILE) `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L32) |
| ` public GuideEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L12) |

## InWorldRecipeEventListener

` public class InWorldRecipeEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L33)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void inWorldRecipe(InWorldRecipeManagerEvent.Init event) ` | 事件总线派发 ` InWorldRecipeManagerEvent.Init ` 时调用。<br>实现调用 ` event.getRecipeManager() `<br>实现调用 ` VanillaRecipesWrap.init( manager.anvillib$getRegistries(), manager.getRecipes() ) `<br>实现调用 ` manager.anvillib$getRegistries() `<br>实现调用 ` manager.getRecipes() `<br>实现调用 ` new MeshRecipeGeneratingCache(manager.anvillib$getRegistries()) .buildRecipes() `<br>实现调用 ` manager.anvillib$addRecipes(init) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L35) |
| ` @SubscribeEvent public static void inWorldRecipe(InWorldRecipeEvent event) ` | 事件总线派发 ` InWorldRecipeEvent ` 时调用。<br>实现调用 ` event.getRecipeType() `<br>实现调用 ` event.getId() `<br>实现调用 ` event.getContext() `<br>实现调用 ` context.getLevel() `<br>实现调用 ` BlockPos.containing(context.getPos()) `<br>实现调用 ` context.getPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L52) |
| ` @SubscribeEvent public static void selectRecipeOutput(ItemCacheEvent.SelectOutput event) ` | 事件总线派发 ` ItemCacheEvent.SelectOutput ` 时调用。<br>实现调用 ` event.getElement().getSource() `<br>实现调用 ` event.getElement() `<br>实现调用 ` event.getElement().isGeneratedOutput() `<br>实现调用 ` BlockPos.containing(event.getPos()) `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getCache().getLevel().getBlockState(pos).is(BlockTags.CAULDRONS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L72) |
| ` @SubscribeEvent public static void spawnItemEntity(ItemCacheEvent.SpawnItemEntity event) ` | 事件总线派发 ` ItemCacheEvent.SpawnItemEntity ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` entity.anvilcraft$setIsAdsorbable(false) `<br>实现调用 ` RecipeOutputTracker.mark(entity) `<br>实现调用 ` entity.blockPosition() `<br>实现调用 ` LargeCauldronBlockEntity.getMain( entity.level(), pos, entity.level().getBlockState(pos) ) `<br>实现调用 ` entity.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L82) |
| ` public InWorldRecipeEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L33) |

## ItemEntityEventListener

` public class ItemEntityEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L13)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onItemEntityJoinLevel(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` RecipeOutputTracker.getOrigin(item) `<br>分支 ` (RecipeOutputTracker.getOrigin(item) != null) ` 内调用 ` item.anvilcraft$setIsAdsorbable(false) `<br>实现调用 ` item.getItem().has(ModComponents.ETERNAL) `<br>实现调用 ` item.getItem() `<br>分支 ` (item.getItem().has(ModComponents.ETERNAL)) ` 内调用 ` item.setUnlimitedLifetime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L15) |
| ` @SubscribeEvent public static void poachFix(ItemTossEvent event) ` | 事件总线派发 ` ItemTossEvent ` 时调用。<br>执行 ` event.getEntity().anvilcraft$setShouldPoach(PoachFix.shouldItPoach()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L27) |
| ` public ItemEntityEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L13) |

## LaserGunDropEventListener

` public class LaserGunDropEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LaserGunDropEventListener.java#L13)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void collectDrops(LivingDropsEvent event) ` | 事件总线派发 ` LivingDropsEvent ` 时调用。<br>实现调用 ` event.getSource().is(ModDamageTypes.LASER) `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getSource().getEntity() `<br>实现调用 ` event.getDrops().forEach(drop -> player.getInventory().placeItemBackInInventory(drop.getItem())) `<br>实现调用 ` event.getDrops() `<br>实现调用 ` event.getDrops().clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LaserGunDropEventListener.java#L15) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void collectExperience(LivingExperienceDropEvent event) ` | 事件总线派发 ` LivingExperienceDropEvent ` 时调用。<br>实现调用 ` event.getEntity().getLastDamageSource() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` source.is(ModDamageTypes.LASER) `<br>实现调用 ` event.getAttackingPlayer() `<br>实现调用 ` event.getDroppedExperience() `<br>实现调用 ` event.setDroppedExperience(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LaserGunDropEventListener.java#L25) |
| ` public LaserGunDropEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LaserGunDropEventListener.java#L13) |

## LevelEventListener

` public class LevelEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L22)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onChunkLoad(ChunkEvent.Load event) ` | 事件总线派发 ` ChunkEvent.Load ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` RedstoneWireNetworkManager.chunkLoaded(serverLevel, event.getChunk()) `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` event.getChunk() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L25) |
| ` @SubscribeEvent public static void onChunkUnload(ChunkEvent.Unload event) ` | 事件总线派发 ` ChunkEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` RedstoneWireNetworkManager.chunkUnloaded(serverLevel, event.getChunk().getPos()) `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` event.getChunk().getPos() `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` event.getChunk() `<br>分支 ` !(event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` RedstoneWireClientPowerCache.clearChunk(level, event.getChunk().getPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L33) |
| ` @SubscribeEvent public static void onLevelLoad(LevelEvent.Load event) ` | 世界加载事件<br>事件总线派发 ` LevelEvent.Load ` 时调用。<br>实现调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L46) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 世界卸载事件<br>事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` AccelerationRingBlockEntity.clear(level) `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` ChargeCollectorManager.clear(level) `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` DeflectionRingBlockEntity.clear(level) `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` SpawningManager.clear(level) `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` RedstoneWireClientPowerCache.clear(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L58) |
| ` public LevelEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L22) |

## LightningEventListener

` public class LightningEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LightningEventListener.java#L19)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLightningStrike(LightningBoltStrikeEvent event) ` | 事件总线派发 ` LightningBoltStrikeEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` LightningEventListener.strikeOnLightningRod(level, pos, level.getBlockState(pos)) `<br>实现调用 ` level.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LightningEventListener.java#L21) |
| ` @SubscribeEvent public static void onTeslaStrike(TeslaStrikeEvent.TargetBlock event) ` | 事件总线派发 ` TeslaStrikeEvent.TargetBlock ` 时调用。<br>实现调用 ` LightningEventListener.strikeOnLightningRod(event.getLevel(), event.getTargetPos(), event.getTargetState()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getTargetPos() `<br>实现调用 ` event.getTargetState() `<br>实现调用 ` event.getTargetState().getBlock() `<br>分支 ` (event.getTargetState().getBlock() instanceof LightningRodBlock) ` 内调用 ` LightningBolt.clearCopperOnLightningStrike(event.getLevel(), event.getTargetPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LightningEventListener.java#L28) |
| ` public LightningEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LightningEventListener.java#L19) |

## LivingEntityEventListener

` public class LivingEntityEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L42)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onTick(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>执行 ` CauldronUtil.hurtFromHeaterBelow(event.getEntity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L44) |
| ` @SubscribeEvent public static void onLivingDeath(LivingDeathEvent event) ` | 事件总线派发 ` LivingDeathEvent ` 时调用。<br>实现调用 ` event.getSource().getEntity() `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getSource().typeHolder().is(DamageTypes.SONIC_BOOM) `<br>实现调用 ` event.getSource().typeHolder() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` entity.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L49) |
| ` @SubscribeEvent public static void onJoinLevel(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.goalSelector.getAvailableGoals().isEmpty() `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.goalSelector.getAvailableGoals() `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.goalSelector.addGoal(2, new GenericZombieAttackGoal<>(giant, 1.0, false)) `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.goalSelector.addGoal(7, new WaterAvoidingRandomStrollGoal(giant, 1.0)) `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.targetSelector.addGoal(1, new HurtByTargetGoal(giant).setAlertOthers(ZombifiedPiglin.class)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L60) |
| ` @SubscribeEvent public static void onEntityInteract(PlayerInteractEvent.EntityInteract event) ` | 事件总线派发 ` PlayerInteractEvent.EntityInteract ` 时调用。<br>实现调用 ` event.getTarget() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getItemStack() `<br>分支 ` (entity instanceof LivingEntity livingEntity) ` 内调用 ` livingEntity.getMainHandItem() `<br>分支 ` (entity instanceof LivingEntity livingEntity) ` 内调用 ` item1.isEmpty() `<br>分支 ` (entity instanceof LivingEntity livingEntity) ` 内调用 ` item1.is(Items.AIR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L77) |
| ` public LivingEntityEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L42) |

## LootTableEventListener

` public class LootTableEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LootTableEventListener.java#L31)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void lootTable(LootTableLoadEvent event) ` | 战利品表加载事件侦听器<br>事件总线派发 ` LootTableLoadEvent ` 时调用。<br>参数 ` event ` 战利品表加载事件<br>实现调用 ` event.getName() `<br>实现调用 ` event.getTable() `<br>实现调用 ` Blocks.BUDDING_AMETHYST.getLootTable().location().equals(id) `<br>实现调用 ` Blocks.BUDDING_AMETHYST.getLootTable().location() `<br>实现调用 ` Blocks.BUDDING_AMETHYST.getLootTable() `<br>分支 ` (Blocks.BUDDING_AMETHYST.getLootTable().location().equals(id)) ` 内调用 ` new LootPool.Builder() .add(LootItem.lootTableItem(ModItems.GEODE)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LootTableEventListener.java#L38) |
| ` public LootTableEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LootTableEventListener.java#L31) |

## MunFallDamageEventListener

` public class MunFallDamageEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunFallDamageEventListener.java#L10)

月球（Mun）维度的摔落伤害：超过 20 格才有 1 点伤害，之后每升高 6 格增加 1 点。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLivingFall(LivingFallEvent event) ` | 事件总线派发 ` LivingFallEvent ` 时调用。<br>实现调用 ` event.getEntity().level().dimension().equals(CelestialTravelManager.MUN_LEVEL) `<br>实现调用 ` event.getEntity().level().dimension() `<br>实现调用 ` event.getEntity().level() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getDistance() `<br>分支 ` (fallDistance <= safeFallDistance) ` 内调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunFallDamageEventListener.java#L15) |
| ` public MunFallDamageEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunFallDamageEventListener.java#L10) |

## MunTravelEventListener

` public class MunTravelEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L34)

Upward high-speed pearls reach Mun when the moon is overhead or return from its origin area.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLogout(PlayerEvent.PlayerLoggedOutEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>执行 ` ARRIVAL_DAMAGE.remove(event.getEntity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L46) |
| ` @SubscribeEvent public static void onServerStopped(ServerStoppedEvent event) ` | 事件总线派发 ` ServerStoppedEvent ` 时调用。<br>执行 ` ARRIVAL_DAMAGE.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L51) |
| ` @SubscribeEvent public static void onEntityJoin(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` level.dimension().equals(CelestialTravelManager.MUN_LEVEL) `<br>实现调用 ` level.dimension() `<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ThrownEnderpearl pearl) ` 内调用 ` isReturnLaunch(pearl) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L56) |
| ` @SubscribeEvent public static void onEntityTick(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` pearl.isRemoved() `<br>实现调用 ` pearl.level() `<br>实现调用 ` level.dimension().equals(CelestialTravelManager.MUN_LEVEL) `<br>实现调用 ` level.dimension() `<br>分支 ` (returning) ` 内调用 ` isReturnLaunch(pearl) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L72) |
| ` @SubscribeEvent public static void onPlayerTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` ARRIVAL_DAMAGE.get(player) `<br>实现调用 ` player.isAlive() `<br>实现调用 ` player.level().dimension().equals(damage.dimension()) `<br>实现调用 ` player.level().dimension() `<br>实现调用 ` player.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L127) |
| ` public MunTravelEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L34) |

## OverworldLikeEventListener

` public class OverworldLikeEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L19)

Connects overworld-like lifecycle state to server and player events.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onServerTick(ServerTickEvent.Post event) ` | 事件总线派发 ` ServerTickEvent.Post ` 时调用。<br>执行 ` OverworldLikeResetManager.tick(event.getServer()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L21) |
| ` @SubscribeEvent public static void onPlayerLoggedIn(PlayerEvent.PlayerLoggedInEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedInEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` OverworldLikeResetManager.onPlayerLoggedIn(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L26) |
| ` @SubscribeEvent public static void onPlayerRespawn(PlayerEvent.PlayerRespawnEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerRespawnEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` OverworldLikeResetManager.onPlayerRespawn(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L33) |
| ` @SubscribeEvent public static void onPlayerChangedDimension(PlayerEvent.PlayerChangedDimensionEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerChangedDimensionEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` OverworldLikeResetManager.onPlayerChangedDimension(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L40) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST, receiveCanceled = true) public static void keepPlanetaryCollapseUnavoidable(LivingIncomingDamageEvent event) ` | 事件总线派发 ` LivingIncomingDamageEvent ` 时调用。<br>实现调用 ` event.getSource().is(ModDamageTypes.PLANETARY_COLLAPSE) `<br>实现调用 ` event.getSource() `<br>分支 ` (event.getSource().is(ModDamageTypes.PLANETARY_COLLAPSE)) ` 内调用 ` event.setCanceled(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L47) |
| ` @SubscribeEvent public static void onPlanetaryCollapseDeath(LivingDeathEvent event) ` | 事件总线派发 ` LivingDeathEvent ` 时调用。<br>实现调用 ` event.getSource().is(ModDamageTypes.PLANETARY_COLLAPSE) `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` TriggerUtil.planetaryCollapseDeath(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L54) |
| ` @SubscribeEvent public static void onStarContactDeath(LivingDeathEvent event) ` | 事件总线派发 ` LivingDeathEvent ` 时调用。<br>实现调用 ` event.getSource().is(ModDamageTypes.STAR_CONTACT) `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` TriggerUtil.starContactDeath(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L62) |
| ` @SubscribeEvent public static void onServerStopped(ServerStoppedEvent event) ` | 事件总线派发 ` ServerStoppedEvent ` 时调用。<br>执行 ` OverworldLikeGenerationBootstrap.clear(event.getServer()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L70) |
| ` public OverworldLikeEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L19) |
