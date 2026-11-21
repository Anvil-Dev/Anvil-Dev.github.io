# dev.dubhe.anvilcraft.event（AmuletAbilitiesEventListener 至 PlayerBalanceHandler）



## AmuletAbilitiesEventListener

` public class AmuletAbilitiesEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L35)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onInventoryTick(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` AmuletManager.shouldEvaluate(entity) `<br>实现调用 ` AmuletManager.get(entity.registryAccess()) `<br>实现调用 ` entity.registryAccess() `<br>实现调用 ` manager.getActiveEffects(entity) `<br>实现调用 ` AmuletManager.identityView() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L42) |
| ` public static ItemStack withFoodConsumption(LivingEntity entity, ItemStack stack, Supplier<ItemStack> action) ` | 实现调用 ` CONSUMING_FOOD.get() `<br>实现调用 ` stack.has(DataComponents.FOOD) `<br>分支 ` (stack.has(DataComponents.FOOD)) ` 内调用 ` CONSUMING_FOOD.set(entity) `<br>分支 ` !(stack.has(DataComponents.FOOD)) ` 内调用 ` CONSUMING_FOOD.remove() `<br>实现调用 ` action.get() `<br>分支 ` (previous == null) ` 内调用 ` CONSUMING_FOOD.remove() `<br>[调用处 ConsumableFoodEffectMixin.anvilcraft$foodEffects](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ConsumableFoodEffectMixin.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L76) |
| ` @SubscribeEvent public static void onEffect(MobEffectEvent.Applicable event) ` | 事件总线派发 ` MobEffectEvent.Applicable ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` CONSUMING_FOOD.get() `<br>实现调用 ` AmuletManager.shouldEvaluate(entity) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.MOB_EFFECT, event.getEffectInstance()) `<br>实现调用 ` event.getEffectInstance() `<br>分支 ` (eating) ` 内调用 ` ctx.set(ModAmuletEffectContextKeys.CONSUMING_FOOD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L88) |
| ` @SubscribeEvent public static void onHurt(LivingIncomingDamageEvent event) ` | 事件总线派发 ` LivingIncomingDamageEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` AmuletManager.shouldEvaluate(entity) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.DAMAGE_SOURCE, event.getSource()) `<br>实现调用 ` event.getSource() `<br>实现调用 ` AmuletManager.get(entity.registryAccess()).trigger(entity, ctx) `<br>实现调用 ` AmuletManager.get(entity.registryAccess()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L105) |
| ` @SubscribeEvent public static void onChangeTarget(LivingChangeTargetEvent event) ` | 事件总线派发 ` LivingChangeTargetEvent ` 时调用。<br>实现调用 ` event.getTargetType() `<br>实现调用 ` Util.castSafely(event.getEntity(), Mob.class).orElse(null) `<br>实现调用 ` Util.castSafely(event.getEntity(), Mob.class) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getNewAboutToBeSetTarget() `<br>实现调用 ` AmuletAbilitiesEventListener.shouldIgnoreTarget(entity, mob) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L119) |
| ` @SubscribeEvent public static void onTick(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>实现调用 ` Util.castSafely(event.getEntity(), Mob.class).orElse(null) `<br>实现调用 ` Util.castSafely(event.getEntity(), Mob.class) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` mob.getTarget() `<br>实现调用 ` AmuletAbilitiesEventListener.shouldIgnoreTarget(entity, mob) `<br>分支 ` (mob instanceof NeutralMob neutral) ` 内调用 ` neutral.stopBeingAngry() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L131) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean shouldIgnoreTarget(LivingEntity target, Mob targeting) ` | ` (!AmuletManager.shouldEvaluate(target)) ` 成立时提前返回 ` false `<br>末尾返回 ` ctx.get(ModAmuletEffectContextKeys.IGNORE_MOB).orElse(false) `<br>实现调用 ` AmuletManager.shouldEvaluate(target) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.TARGETING_MOB, targeting) `<br>实现调用 ` AmuletManager.get(target.registryAccess()).trigger(target, ctx) `<br>实现调用 ` AmuletManager.get(target.registryAccess()) `<br>实现调用 ` target.registryAccess() `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.IGNORE_MOB).orElse(false) `<br>[调用处 LivingEntityMixin.anvilcraft$ignoreProtectedAttacker](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L143) |
| ` @SubscribeEvent public static void onKnockback(LivingKnockBackEvent event) ` | 事件总线派发 ` LivingKnockBackEvent ` 时调用。<br>实现调用 ` AmuletAbilitiesEventListener.shouldImmuneKnockback(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L154) |
| ` @SubscribeEvent public static void onExplosionKnockback(ExplosionKnockbackEvent event) ` | 事件总线派发 ` ExplosionKnockbackEvent ` 时调用。<br>实现调用 ` AmuletAbilitiesEventListener.shouldImmuneKnockback(event.getAffectedEntity()) `<br>实现调用 ` event.getAffectedEntity() `<br>实现调用 ` event.setKnockbackVelocity(Vec3.ZERO) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L160) |
| ` @SubscribeEvent public static void onInteractTamableAnimal(PlayerInteractEvent.EntityInteract event) ` | 事件总线派发 ` PlayerInteractEvent.EntityInteract ` 时调用。<br>实现调用 ` event.getItemStack().isEmpty() `<br>实现调用 ` event.getItemStack() `<br>实现调用 ` event.getTarget() `<br>实现调用 ` animal.isTame() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.INTERACT_TARGET, animal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L179) |

## AmuletEventListener

` public class AmuletEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L14)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void on(AmuletEvent.Find event) ` | 事件总线派发 ` AmuletEvent.Find ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.provide(player.getMainHandItem()) `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` event.provide(player.getOffhandItem()) `<br>实现调用 ` player.getOffhandItem() `<br>实现调用 ` PocketInventory.items(player).forEach(event::provide) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L16) |
| ` @SubscribeEvent public static void on(AmuletEvent.ProcessFound event) ` | 事件总线派发 ` AmuletEvent.ProcessFound ` 时调用。<br>实现调用 ` event.getFound() `<br>实现调用 ` found.is(ModItems.AMULET_BOX) `<br>分支 ` (found.is(ModItems.AMULET_BOX)) ` 内调用 ` found.get(ModComponents.BOX_CONTENTS) `<br>分支 ` (found.is(ModItems.AMULET_BOX)) ` 内调用 ` contents.amulets() `<br>分支 ` (found.is(ModItems.AMULET_BOX)) ` 内调用 ` stack.has(ModComponents.AMULET) `<br>分支 ` (stack.has(ModComponents.AMULET)) ` 内调用 ` event.provide(stack.copy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L24) |
| ` @SubscribeEvent public static void on(AmuletEvent.EntityCheck event) ` | 事件总线派发 ` AmuletEvent.EntityCheck ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof Player) ` 内调用 ` event.pass() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L38) |
| ` public AmuletEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L14) |

## AutoEnchantingTableEventListener

` public class AutoEnchantingTableEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AutoEnchantingTableEventListener.java#L14)

自动附魔台引物附魔事件监听器。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPrimerEnchantments(PrimerEnchantmentsEvent event) ` | 事件总线派发 ` PrimerEnchantmentsEvent ` 时调用。<br>实现调用 ` event.getPrimer().is(ModItems.EMERALD_AMULET.get()) `<br>实现调用 ` event.getPrimer() `<br>实现调用 ` ModItems.EMERALD_AMULET.get() `<br>分支 ` (event.getPrimer().is(ModItems.EMERALD_AMULET.get())) ` 内调用 ` event.getLevel().registryAccess().lookupOrThrow(Registries.ENCHANTMENT) `<br>分支 ` (event.getPrimer().is(ModItems.EMERALD_AMULET.get())) ` 内调用 ` event.getLevel().registryAccess() `<br>分支 ` (event.getPrimer().is(ModItems.EMERALD_AMULET.get())) ` 内调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AutoEnchantingTableEventListener.java#L16) |
| ` public AutoEnchantingTableEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AutoEnchantingTableEventListener.java#L14) |

## BlockEventListener

` public class BlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L44)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void updateCornerWires(BlockEvent.NeighborNotifyEvent event) ` | 事件总线派发 ` BlockEvent.NeighborNotifyEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` level.isClientSide() `<br>分支 ` (event.getLevel() instanceof Level level && !level.isClientSide()) ` 内调用 ` RedstoneWireBlock.neighborChangedAroundSupport(level, event.getPos(), event.getState().getBlock()) `<br>分支 ` (event.getLevel() instanceof Level level && !level.isClientSide()) ` 内调用 ` event.getPos() `<br>分支 ` (event.getLevel() instanceof Level level && !level.isClientSide()) ` 内调用 ` event.getState().getBlock() `<br>分支 ` (event.getLevel() instanceof Level level && !level.isClientSide()) ` 内调用 ` event.getState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L46) |
| ` @SubscribeEvent public static void useRuinsBlock(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getLevel().getBlockState(event.getPos()).is(ModBlocks.RUINS_BLOCK) `<br>实现调用 ` event.getLevel().getBlockState(event.getPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>分支 ` (event.getLevel().getBlockState(event.getPos()).is(ModBlocks.RUINS_BLOCK)) ` 内调用 ` event.setUseBlock(TriState.TRUE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L53) |
| ` @SubscribeEvent public static void anvilHammerAttack(PlayerInteractEvent.LeftClickBlock event) ` | 侦听左键方块事件<br>事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>参数 ` event ` 左键方块事件<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getEntity().getItemInHand(hand).getItem() `<br>实现调用 ` event.getEntity().getItemInHand(hand) `<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity().getItemInHand(hand).getItem() instanceof AnvilHammerItem) ` 内调用 ` AnvilHammerItem.dropAnvil(event.getEntity(), event.getLevel(), event.getPos()) `<br>分支 ` (event.getEntity().getItemInHand(hand).getItem() instanceof AnvilHammerItem) ` 内调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L61) |
| ` @SubscribeEvent public static void onCreativeCrateAttack(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel().getBlockEntity(event.getPos()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` crate.getDisplayStack().isEmpty() `<br>实现调用 ` crate.getDisplayStack() `<br>实现调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L71) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void anvilHammerUseItem(PlayerInteractEvent.RightClickItem event) ` | 主手铁砧锤、副手持有方块且目标为普通方块时，取消使用物品事件， 使服务端不进入铁砧锤长按，配合客户端完成副手方块放置。<br>事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` player.pick(player.blockInteractionRange(), 1.0F, false) `<br>实现调用 ` player.blockInteractionRange() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L88) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void onRightClickBlock(PlayerInteractEvent.RightClickBlock event) ` | 侦听右键方块事件<br>事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>参数 ` event ` 右键方块事件<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L102) |
| ` public static void onAnvilFixed(LevelAccessor level, ItemStack item, BlockPos pos, BlockState state) ` | 实现调用 ` state.is(Blocks.CHIPPED_ANVIL) `<br>实现调用 ` state.is(Blocks.DAMAGED_ANVIL) `<br>实现调用 ` level.getRandom() `<br>实现调用 ` random.nextDouble() `<br>实现调用 ` item.shrink(1) `<br>实现调用 ` state.getValue(AnvilBlock.FACING) `<br>[调用处 BlockEventListener.onRightClickBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L129) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L148) |
| ` public BlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L44) |

## BreakBlockEventListener

` public class BreakBlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L23)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void preventInfiniteFluidTankBreak(BreakBlockEvent event) ` | 事件总线派发 ` BreakBlockEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` event.getPos() `<br>实现调用 ` player.level() `<br>实现调用 ` InfiniteFluidTankBreakProtection.isProtected(level, pos) `<br>实现调用 ` ResonatorItem.isResonanceMining(level, player, pos) `<br>分支 ` (ResonatorItem.isResonanceMining(level, player, pos)) ` 内调用 ` InfiniteFluidTankBreakProtection.clear(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L25) |
| ` @SubscribeEvent public static void onBlockRemoved(BreakBlockEvent event) ` | 事件总线派发 ` BreakBlockEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` player.level() `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` event.getPos().getCenter() `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L40) |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void preventTradingStationBreak(BreakBlockEvent event) ` | 事件总线派发 ` BreakBlockEvent ` 时调用。<br>实现调用 ` event.getPlayer() `<br>实现调用 ` player.level() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.is(ModBlocks.TRADING_STATION) `<br>实现调用 ` state.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L55) |
| ` public BreakBlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L23) |

## CauldronOutletEventListener

` public class CauldronOutletEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/CauldronOutletEventListener.java#L25)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlayerUseAnvilHammerOnCauldron(PlayerInteractEvent.RightClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getItemInHand(event.getHand()) `<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(blockPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/CauldronOutletEventListener.java#L28) |
| ` public CauldronOutletEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/CauldronOutletEventListener.java#L25) |

## DatapackSyncEventListener

` public class DatapackSyncEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/DatapackSyncEventListener.java#L10)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void on(OnDatapackSyncEvent event) ` | 事件总线派发 ` OnDatapackSyncEvent ` 时调用。<br>实现调用 ` ModRecipeTypes.ANVIL_COLLISION_CRAFT.get() `<br>实现调用 ` ModRecipeTypes.BLOCK_COMPRESS.get() `<br>实现调用 ` ModRecipeTypes.BLOCK_CRUSH.get() `<br>实现调用 ` ModRecipeTypes.BLOCK_PROCESSING.get() `<br>实现调用 ` ModRecipeTypes.BLOCK_SMEAR.get() `<br>实现调用 ` ModRecipeTypes.CHARGER_CHARGING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/DatapackSyncEventListener.java#L12) |
| ` public DatapackSyncEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/DatapackSyncEventListener.java#L10) |

## EntityEventListener

` public class EntityEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L17)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onCheckEntityInvulnerability(EntityInvulnerabilityCheckEvent event) ` | 事件总线派发 ` EntityInvulnerabilityCheckEvent ` 时调用。<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` source.is(ModDamageTypeTags.IS_FALLING_GIANT_ANVIL) `<br>实现调用 ` entity.is(ModEntityTypeTags.FALLING_GIANT_ANVIL_DAMAGE_IMMUNE) `<br>实现调用 ` event.setInvulnerable(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L19) |
| ` @SubscribeEvent public static void onLeaveLevel(EntityLeaveLevelEvent event) ` | 事件总线派发 ` EntityLeaveLevelEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` DummyArmadillo.clear(entity) `<br>实现调用 ` DummyCat.clear(entity) `<br>实现调用 ` DummyWolf.clear(entity) `<br>实现调用 ` AmuletManager.get(event.getLevel().registryAccess()).clear(entity.getUUID()) `<br>实现调用 ` AmuletManager.get(event.getLevel().registryAccess()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L31) |
| ` public EntityEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L17) |

## FallingBlockCollisionEventListener

` public class FallingBlockCollisionEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L43)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void anvilCollisionCraft(AnvilEvent.CollisionBlock event) ` | 事件总线派发 ` AnvilEvent.CollisionBlock ` 时调用。<br>实现调用 ` event.isCanceled() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` RailgunAnvilEntity.isGhost(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>分支 ` (RailgunAnvilEntity.isGhost(event.getEntity())) ` 内调用 ` event.getEntity().discard() `<br>分支 ` (RailgunAnvilEntity.isGhost(event.getEntity())) ` 内调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L46) |
| ` public FallingBlockCollisionEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L43) |

## FallingBlockCollisionEventListener.ItemImmuneExplosionDamage

` public static class ItemImmuneExplosionDamage extends ExplosionDamageCalculator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L195)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean shouldDamageEntity(Explosion explosion, Entity entity) ` | ` (entity instanceof ItemEntity) ` 成立时提前返回 ` false `<br>末尾返回 ` super.shouldDamageEntity(explosion, entity) `<br>实现调用 ` super.shouldDamageEntity(explosion, entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L196) |
| ` public ItemImmuneExplosionDamage() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/FallingBlockCollisionEventListener.java#L195) |

## GuideEventListener

` public class GuideEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L12)

类型注解 ` @Integration("ageratum") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String INDEX_FILE ` | 初值 ` "index" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L14) |
| ` public void apply() ` | 执行 ` NeoForge.EVENT_BUS.register(GuideEventListener.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L16) |
| ` @SubscribeEvent public static void onHasGuide(GuideBookEvent.HasGuideBookEvent event) ` | 事件总线派发 ` GuideBookEvent.HasGuideBookEvent ` 时调用。<br>执行 ` event.hasGuideBook() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L20) |
| ` @SubscribeEvent public static void onHasGuide(CheckIntegrationLoadedEvent event) ` | 事件总线派发 ` CheckIntegrationLoadedEvent ` 时调用。<br>实现调用 ` event.getId().equals(AnvilCraft.MOD_ID) `<br>实现调用 ` event.getId() `<br>分支 ` (event.getId().equals(AnvilCraft.MOD_ID)) ` 内调用 ` event.setLoaded() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L25) |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void onOpenGuide(GuideBookEvent.OpenGuideBookEvent event) ` | 事件总线派发 ` GuideBookEvent.OpenGuideBookEvent ` 时调用。<br>实现调用 ` Ageratum.openGuide(event.getPlayer(), AnvilCraft.of(GuideEventListener.INDEX_FILE)) `<br>实现调用 ` event.getPlayer() `<br>实现调用 ` AnvilCraft.of(GuideEventListener.INDEX_FILE) `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L32) |
| ` public GuideEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java#L12) |

## InWorldRecipeEventListener

` public class InWorldRecipeEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L33)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent @SuppressWarnings("deprecation") public static void inWorldRecipe(InWorldRecipeManagerEvent.Init event) ` | 事件总线派发 ` InWorldRecipeManagerEvent.Init ` 时调用。<br>实现调用 ` event.getRecipeManager() `<br>实现调用 ` VanillaRecipesWrap.init(manager.getRecipes()) `<br>实现调用 ` manager.getRecipes() `<br>实现调用 ` new MeshRecipeGeneratingCache(manager.anvillib$getRegistries()) .buildRecipes() `<br>实现调用 ` manager.anvillib$getRegistries() `<br>实现调用 ` manager.anvillib$addRecipes(init) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L35) |
| ` @SubscribeEvent public static void inWorldRecipe(InWorldRecipeEvent event) ` | 事件总线派发 ` InWorldRecipeEvent ` 时调用。<br>实现调用 ` event.getRecipeType() `<br>实现调用 ` event.getId() `<br>实现调用 ` event.getContext() `<br>实现调用 ` context.getLevel() `<br>实现调用 ` BlockPos.containing(context.getPos()) `<br>实现调用 ` context.getPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L50) |
| ` @SubscribeEvent public static void selectRecipeOutput(ItemCacheEvent.SelectOutput event) ` | 事件总线派发 ` ItemCacheEvent.SelectOutput ` 时调用。<br>实现调用 ` event.getElement().getSource() `<br>实现调用 ` event.getElement() `<br>实现调用 ` event.getElement().isGeneratedOutput() `<br>实现调用 ` BlockPos.containing(event.getPos()) `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getCache().getLevel().getBlockState(pos).is(BlockTags.CAULDRONS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L68) |
| ` @SubscribeEvent public static void spawnItemEntity(ItemCacheEvent.SpawnItemEntity event) ` | 事件总线派发 ` ItemCacheEvent.SpawnItemEntity ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` entity.anvilcraft$setIsAdsorbable(false) `<br>实现调用 ` RecipeOutputTracker.mark(entity) `<br>实现调用 ` entity.blockPosition() `<br>实现调用 ` LargeCauldronBlockEntity.getMain( entity.level(), pos, entity.level().getBlockState(pos) ) `<br>实现调用 ` entity.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L78) |
| ` public InWorldRecipeEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L33) |

## ItemDefaultComponentsEventListener

` public final class ItemDefaultComponentsEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemDefaultComponentsEventListener.java#L18)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void cannedFood(ModifyDefaultComponentsEvent event) ` | 事件总线派发 ` ModifyDefaultComponentsEvent ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemDefaultComponentsEventListener.java#L20) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void multiphaseNames(ModifyDefaultComponentsEvent event) ` | 事件总线派发 ` ModifyDefaultComponentsEvent ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemDefaultComponentsEventListener.java#L30) |
| ` public ItemDefaultComponentsEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemDefaultComponentsEventListener.java#L18) |

## ItemEntityEventListener

` public class ItemEntityEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L13)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onItemEntityJoinLevel(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` RecipeOutputTracker.getOrigin(item) `<br>分支 ` (RecipeOutputTracker.getOrigin(item) != null) ` 内调用 ` item.anvilcraft$setIsAdsorbable(false) `<br>实现调用 ` item.getItem().has(ModComponents.ETERNAL) `<br>实现调用 ` item.getItem() `<br>分支 ` (item.getItem().has(ModComponents.ETERNAL)) ` 内调用 ` item.setUnlimitedLifetime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L15) |
| ` @SubscribeEvent public static void poachFix(ItemTossEvent event) ` | 事件总线派发 ` ItemTossEvent ` 时调用。<br>执行 ` event.getEntity().anvilcraft$setShouldPoach(PoachFix.shouldItPoach()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L27) |
| ` public ItemEntityEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L13) |

## LaserGunDropEventListener

` public class LaserGunDropEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LaserGunDropEventListener.java#L13)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void collectDrops(LivingDropsEvent event) ` | 事件总线派发 ` LivingDropsEvent ` 时调用。<br>实现调用 ` event.getSource().is(ModDamageTypes.LASER) `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getSource().getEntity() `<br>实现调用 ` event.getDrops().forEach(drop -> player.getInventory().placeItemBackInInventory(drop.getItem())) `<br>实现调用 ` event.getDrops() `<br>实现调用 ` event.getDrops().clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LaserGunDropEventListener.java#L15) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void collectExperience(LivingExperienceDropEvent event) ` | 事件总线派发 ` LivingExperienceDropEvent ` 时调用。<br>实现调用 ` event.getEntity().getLastDamageSource() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` source.is(ModDamageTypes.LASER) `<br>实现调用 ` event.getAttackingPlayer() `<br>实现调用 ` event.getDroppedExperience() `<br>实现调用 ` event.setDroppedExperience(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LaserGunDropEventListener.java#L26) |
| ` public LaserGunDropEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LaserGunDropEventListener.java#L13) |

## LevelEventListener

` public class LevelEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L27)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onChunkLoad(ChunkEvent.Load event) ` | 事件总线派发 ` ChunkEvent.Load ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` RedstoneWireNetworkManager.chunkLoaded(serverLevel, event.getChunk()) `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` event.getChunk() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L30) |
| ` @SubscribeEvent public static void onChunkUnload(ChunkEvent.Unload event) ` | 事件总线派发 ` ChunkEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` RedstoneWireNetworkManager.chunkUnloaded(serverLevel, event.getChunk().getPos()) `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` event.getChunk().getPos() `<br>分支 ` (event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` event.getChunk() `<br>分支 ` !(event.getLevel() instanceof ServerLevel serverLevel) ` 内调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` RedstoneWireClientPowerCache.clearChunk(level, event.getChunk().getPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L37) |
| ` @SubscribeEvent public static void onLevelLoad(LevelEvent.Load event) ` | 世界加载事件<br>事件总线派发 ` LevelEvent.Load ` 时调用。<br>实现调用 ` event.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L47) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 世界卸载事件<br>事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (accessor instanceof Level level) ` 内调用 ` AccelerationRingBlockEntity.clear(level) `<br>分支 ` (accessor instanceof Level level) ` 内调用 ` DeflectionRingBlockEntity.clear(level) `<br>分支 ` (accessor instanceof Level level) ` 内调用 ` RedstoneWireClientPowerCache.clear(level) `<br>分支 ` (accessor instanceof Level level) ` 内调用 ` HeatCollectorManager.remove(level) `<br>分支 ` (accessor instanceof Level level) ` 内调用 ` DummyArmadillo.clear(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L57) |
| ` public LevelEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L27) |

## LightningEventListener

` public class LightningEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LightningEventListener.java#L18)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLightningStrike(LightningBoltStrikeEvent event) ` | 事件总线派发 ` LightningBoltStrikeEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` LightningEventListener.strikeOnLightningRod(level, pos, level.getBlockState(pos)) `<br>实现调用 ` level.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LightningEventListener.java#L20) |
| ` @SubscribeEvent public static void onTeslaStrike(TeslaStrikeEvent.TargetBlock event) ` | 事件总线派发 ` TeslaStrikeEvent.TargetBlock ` 时调用。<br>实现调用 ` LightningEventListener.strikeOnLightningRod(event.getLevel(), event.getTargetPos(), event.getTargetState()) `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getTargetPos() `<br>实现调用 ` event.getTargetState() `<br>实现调用 ` event.getTargetState().getBlock() `<br>分支 ` (event.getTargetState().getBlock() instanceof LightningRodBlock) ` 内调用 ` LightningBolt.clearCopperOnLightningStrike(event.getLevel(), event.getTargetPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LightningEventListener.java#L27) |
| ` public LightningEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LightningEventListener.java#L18) |

## LivingEntityEventListener

` public class LivingEntityEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L44)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onTick(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>执行 ` CauldronUtil.hurtFromHeaterBelow(event.getEntity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L46) |
| ` @SubscribeEvent public static void onLivingDeath(LivingDeathEvent event) ` | 事件总线派发 ` LivingDeathEvent ` 时调用。<br>实现调用 ` event.getSource().getEntity() `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getSource().typeHolder().is(DamageTypes.SONIC_BOOM) `<br>实现调用 ` event.getSource().typeHolder() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` entity.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L52) |
| ` @SubscribeEvent public static void onJoinLevel(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.goalSelector.getAvailableGoals().isEmpty() `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.goalSelector.getAvailableGoals() `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.goalSelector.addGoal(2, new GenericZombieAttackGoal<>(giant, 1.0, false)) `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.goalSelector.addGoal(7, new WaterAvoidingRandomStrollGoal(giant, 1.0)) `<br>分支 ` (event.getEntity() instanceof Giant giant) ` 内调用 ` giant.targetSelector.addGoal(1, new HurtByTargetGoal(giant).setAlertOthers(ZombifiedPiglin.class)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L64) |
| ` @SubscribeEvent public static void onEntityInteract(PlayerInteractEvent.EntityInteract event) ` | 事件总线派发 ` PlayerInteractEvent.EntityInteract ` 时调用。<br>实现调用 ` event.getTarget() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getItemStack() `<br>实现调用 ` level.isClientSide() `<br>分支 ` (entity instanceof LivingEntity livingEntity) ` 内调用 ` livingEntity.getMainHandItem() `<br>分支 ` (entity instanceof LivingEntity livingEntity) ` 内调用 ` item1.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L81) |
| ` @SubscribeEvent public static void on(MobEffectEvent.Remove event) ` | 事件总线派发 ` MobEffectEvent.Remove ` 时调用。<br>实现调用 ` event.getEffect().is(ModMobEffects.RAGE.getKey()) `<br>实现调用 ` event.getEffect() `<br>实现调用 ` ModMobEffects.RAGE.getKey() `<br>分支 ` (event.getEffect().is(ModMobEffects.RAGE.getKey())) ` 内调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L116) |
| ` public LivingEntityEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L44) |

## LootTableEventListener

` public class LootTableEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LootTableEventListener.java#L32)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void lootTable(LootTableLoadEvent event) ` | 战利品表加载事件侦听器<br>事件总线派发 ` LootTableLoadEvent ` 时调用。<br>参数 ` event ` 战利品表加载事件<br>实现调用 ` event.getName() `<br>实现调用 ` event.getTable() `<br>实现调用 ` Blocks.BUDDING_AMETHYST.getLootTable().orElseThrow().identifier().equals(id) `<br>实现调用 ` Blocks.BUDDING_AMETHYST.getLootTable().orElseThrow().identifier() `<br>实现调用 ` Blocks.BUDDING_AMETHYST.getLootTable().orElseThrow() `<br>实现调用 ` Blocks.BUDDING_AMETHYST.getLootTable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LootTableEventListener.java#L37) |
| ` public LootTableEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LootTableEventListener.java#L32) |

## MunFallDamageEventListener

` public class MunFallDamageEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunFallDamageEventListener.java#L10)

保留源版月球（Mun）的 20 格安全区与每 6 格伤害档位。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLivingFall(LivingFallEvent event) ` | 事件总线派发 ` LivingFallEvent ` 时调用。<br>实现调用 ` event.getEntity().level().dimension().equals(CelestialTravelManager.MUN_LEVEL) `<br>实现调用 ` event.getEntity().level().dimension() `<br>实现调用 ` event.getEntity().level() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getDistance() `<br>分支 ` (fallDistance <= safeFallDistance) ` 内调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunFallDamageEventListener.java#L13) |
| ` public MunFallDamageEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunFallDamageEventListener.java#L10) |

## MunTravelEventListener

` public class MunTravelEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L35)

Upward high-speed pearls reach Mun when the moon is overhead or return from its origin area.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLogout(PlayerEvent.PlayerLoggedOutEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>执行 ` ARRIVAL_DAMAGE.remove(event.getEntity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L47) |
| ` @SubscribeEvent public static void onServerStopped(ServerStoppedEvent event) ` | 事件总线派发 ` ServerStoppedEvent ` 时调用。<br>执行 ` ARRIVAL_DAMAGE.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L52) |
| ` @SubscribeEvent public static void onEntityJoin(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` level.dimension().equals(CelestialTravelManager.MUN_LEVEL) `<br>实现调用 ` level.dimension() `<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ThrownEnderpearl pearl) ` 内调用 ` isReturnLaunch(pearl) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L57) |
| ` @SubscribeEvent public static void onEntityTick(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` pearl.isRemoved() `<br>实现调用 ` pearl.level() `<br>实现调用 ` level.dimension().equals(CelestialTravelManager.MUN_LEVEL) `<br>实现调用 ` level.dimension() `<br>分支 ` (returning) ` 内调用 ` isReturnLaunch(pearl) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L73) |
| ` @SubscribeEvent public static void onPlayerTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` ARRIVAL_DAMAGE.get(player) `<br>实现调用 ` player.isAlive() `<br>实现调用 ` player.level().dimension().equals(damage.dimension()) `<br>实现调用 ` player.level().dimension() `<br>实现调用 ` player.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L128) |
| ` public MunTravelEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L35) |

## OverworldLikeEventListener

` public class OverworldLikeEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L19)

Connects overworld-like lifecycle state to server and player events.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onServerTick(ServerTickEvent.Post event) ` | 事件总线派发 ` ServerTickEvent.Post ` 时调用。<br>执行 ` OverworldLikeResetManager.tick(event.getServer()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L21) |
| ` @SubscribeEvent public static void onPlayerLoggedIn(PlayerEvent.PlayerLoggedInEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerLoggedInEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` OverworldLikeResetManager.onPlayerLoggedIn(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L26) |
| ` @SubscribeEvent public static void onPlayerRespawn(PlayerEvent.PlayerRespawnEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerRespawnEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` OverworldLikeResetManager.onPlayerRespawn(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L33) |
| ` @SubscribeEvent public static void onPlayerChangedDimension(PlayerEvent.PlayerChangedDimensionEvent event) ` | 事件总线派发 ` PlayerEvent.PlayerChangedDimensionEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` OverworldLikeResetManager.onPlayerChangedDimension(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L40) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST, receiveCanceled = true) public static void keepPlanetaryCollapseUnavoidable(LivingIncomingDamageEvent event) ` | 事件总线派发 ` LivingIncomingDamageEvent ` 时调用。<br>实现调用 ` event.getSource().is(ModDamageTypes.PLANETARY_COLLAPSE) `<br>实现调用 ` event.getSource() `<br>分支 ` (event.getSource().is(ModDamageTypes.PLANETARY_COLLAPSE)) ` 内调用 ` event.setCanceled(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L47) |
| ` @SubscribeEvent public static void onPlanetaryCollapseDeath(LivingDeathEvent event) ` | 事件总线派发 ` LivingDeathEvent ` 时调用。<br>实现调用 ` event.getSource().is(ModDamageTypes.PLANETARY_COLLAPSE) `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` TriggerUtil.planetaryCollapseDeath(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L54) |
| ` @SubscribeEvent public static void onStarContactDeath(LivingDeathEvent event) ` | 事件总线派发 ` LivingDeathEvent ` 时调用。<br>实现调用 ` event.getSource().is(ModDamageTypes.STAR_CONTACT) `<br>实现调用 ` event.getSource() `<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` TriggerUtil.starContactDeath(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L62) |
| ` @SubscribeEvent public static void onServerStopped(ServerStoppedEvent event) ` | 事件总线派发 ` ServerStoppedEvent ` 时调用。<br>执行 ` OverworldLikeGenerationBootstrap.clear(event.getServer()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L70) |
| ` public OverworldLikeEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/OverworldLikeEventListener.java#L19) |

## PlayerBalanceHandler

` public class PlayerBalanceHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L34)

物品均衡模式的服务端处理： 补货：主/副手物品使用耗尽时，从绑定存储站取出同种物品补充满一组。 存入：背包中某物品超过一组时，只保留一组在身上，多余部分自动存入绑定存储站。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onPlayerLoggedOut(PlayerEvent.PlayerLoggedOutEvent event) ` | 玩家退出时清理其所有追踪状态，避免静态 Map 永久残留。<br>事件总线派发 ` PlayerEvent.PlayerLoggedOutEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.PREV_HANDS.remove(uuid) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.PREV_SELECTED.remove(uuid) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.DEPOSIT_COOLDOWN.remove(uuid) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.USED_THIS_TICK.remove(uuid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L51) |
| ` @SubscribeEvent public static void onPlayerTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` tick(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L62) |
| ` public static void tick(ServerPlayer serverPlayer) ` | 实现调用 ` PlayerBalanceHandler.heldTerminalBalanceMode(serverPlayer) `<br>实现调用 ` serverPlayer.hasInfiniteMaterials() `<br>实现调用 ` serverPlayer.isSpectator() `<br>实现调用 ` PlayerBalanceHandler.PREV_HANDS.remove(serverPlayer.getUUID()) `<br>实现调用 ` serverPlayer.getUUID() `<br>实现调用 ` PlayerBalanceHandler.PREV_SELECTED.remove(serverPlayer.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L70) |
| ` public static void clear() ` | 实现调用 ` PREV_HANDS.clear() `<br>实现调用 ` PREV_SELECTED.clear() `<br>实现调用 ` DEPOSIT_COOLDOWN.clear() `<br>实现调用 ` USED_THIS_TICK.clear() `<br>[调用处 ServerLifecycleEventListener.onServerStopped](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L98) |
| ` @SubscribeEvent public static void onUseFinished(LivingEntityUseItemEvent.Finish event) ` | 事件总线派发 ` LivingEntityUseItemEvent.Finish ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` USED_THIS_TICK.put(player.getUUID(), true) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L105) |
| ` @SubscribeEvent public static void onUseItem(PlayerInteractEvent.RightClickBlock event) ` | 玩家右键点击方块时标记，用于补货判定。<br>事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.getMainHandItem().isEmpty() `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` player.getOffhandItem().isEmpty() `<br>实现调用 ` player.getOffhandItem() `<br>实现调用 ` PlayerBalanceHandler.USED_THIS_TICK.put(player.getUUID(), true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L111) |
| ` @SubscribeEvent public static void onUseItem(PlayerInteractEvent.RightClickItem event) ` | 玩家右键使用物品（食物、药水、弓、放置等）时标记，用于补货判定。<br>事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.USED_THIS_TICK.put(player.getUUID(), true) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L122) |
| ` @SubscribeEvent public static void onLeftClickEmpty(PlayerInteractEvent.LeftClickEmpty event) ` | 玩家左键攻击/挖掘（消耗耐久或投掷）时标记，用于补货判定。<br>事件总线派发 ` PlayerInteractEvent.LeftClickEmpty ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.USED_THIS_TICK.put(player.getUUID(), true) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L130) |
| ` @SubscribeEvent public static void onLeftClickBlock(PlayerInteractEvent.LeftClickBlock event) ` | 玩家左键点击方块/实体（挖掘、攻击）时标记，用于补货判定。<br>事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PlayerBalanceHandler.USED_THIS_TICK.put(player.getUUID(), true) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L138) |
| ` public static void addTerminalProvider(Function<Player, ItemStack> provider) ` | 注册额外的终端提供者（如 curios 槽位）；注册顺序决定命中优先级。<br>执行 ` PlayerBalanceHandler.TERMINAL_PROVIDERS.add(provider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L230) |
| ` public PlayerBalanceHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerBalanceHandler.java#L34) |
