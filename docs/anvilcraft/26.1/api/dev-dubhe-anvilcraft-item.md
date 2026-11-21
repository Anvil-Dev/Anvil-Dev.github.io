# dev.dubhe.anvilcraft.item



## BuildingRodItem

` public class BuildingRodItem extends Item implements ICapacitorChargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int maxEnergy() ` | 能量上限，运行时读取配置。<br>末尾返回 ` AnvilCraft.CONFIG.equipment.buildingRodMaxEnergy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L35) |
| ` public BuildingRodItem(Properties properties) ` | 执行 ` super(properties.stacksTo(1).component(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L39) |
| ` public ItemStack creativeStack() ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L43) |
| ` public static boolean isPlacementMaterial(ItemStack stack) ` | 实现调用 ` stack.is(ModItems.FILTER) `<br>实现调用 ` stack.getItem() `<br>实现调用 ` FluidUtil.getFirstStackContained(stack).isEmpty() `<br>[调用处 BuildingRodService.box](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L49) |
| ` public static boolean isHeld(Player player) ` | 末尾返回 ` player.getMainHandItem().is(ModItems.BUILDING_ROD) \|\| player.getOffhandItem().is(ModItems.BUILDING_ROD) `<br>[调用处 BuildingBlockPlanner.singleAttempt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingBlockPlanner.java#L226) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L55) |
| ` public static ItemStack heldRod(Player player) ` | 末尾返回 ` player.getMainHandItem().is(ModItems.BUILDING_ROD) ? player.getMainHandItem() : player.getOffhandItem() `<br>[调用处 BuildingRodFluids.place](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L59) |
| ` public static InteractionHand materialHand(Player player) ` | 末尾返回 ` player.getMainHandItem().is(ModItems.BUILDING_ROD) ? InteractionHand.OFF_HAND : InteractionHand.MAIN_HAND `<br>[调用处 BuildingBlockPlanner.planBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingBlockPlanner.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L63) |
| ` public static ItemStack material(Player player) ` | 末尾返回 ` player.getItemInHand(materialHand(player)) `<br>[调用处 BuildingRodFluids.place](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L67) |
| ` public static boolean isCarried(Player player) ` | ` (isHeld(player)) ` 成立时提前返回 ` true `<br>末尾返回 ` PocketInventory.carriedItems(player).stream().anyMatch(stack -> stack.is(ModItems.BUILDING_ROD)) `<br>[调用处 BuildingRodItemRenderer.usesToolClaw](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodItemRenderer.java#L202) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L71) |
| ` public static void updateReach(Player player) ` | 实现调用 ` isCarried(player) `<br>实现调用 ` player.getAttribute(Attributes.BLOCK_INTERACTION_RANGE) `<br>实现调用 ` player.getAttribute(Attributes.ENTITY_INTERACTION_RANGE) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L76) |
| ` public static boolean ready(Player player, ItemStack rod) ` | ` (rod.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY).value() > 0) ` 成立时提前返回 ` true `<br>末尾返回 ` false `<br>[调用处 BuildingRodFluids.place](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L100) |
| ` public static void consume(Player player, ItemStack rod, int blocks) ` | 实现调用 ` player.isCreative() `<br>实现调用 ` Math.max(0, rod.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY).value() - blocks * 100) `<br>实现调用 ` rod.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY).value() `<br>[调用处 BuildingRodService.finishPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L676) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L109) |
| ` @Override public boolean canBeCharged(ItemStack stack, EnergyHandler storage, IFullCapacitor capacitor, ItemStack capacitorStack) ` | 末尾返回 ` storage.getAmountAsLong() == 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L128) |
| ` @Override public boolean onEntitySwing(ItemStack stack, LivingEntity entity, InteractionHand hand) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L133) |
| ` @Override public boolean shouldCauseReequipAnimation(ItemStack oldStack, ItemStack newStack, boolean slotChanged) ` | 末尾返回 ` slotChanged \|\| !ItemStack.isSameItem(oldStack, newStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L138) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L143) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand hand) ` | 末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L148) |
| ` @Override public boolean isBarVisible(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L153) |
| ` @Override public int getBarWidth(ItemStack stack) ` | 末尾返回 ` Math.round(13f * stack.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY).value() / maxEnergy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L158) |
| ` @Override public int getBarColor(ItemStack stack) ` | 末尾返回 ` 0x7087FF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L163) |

## BundleLikeItem

` public abstract class BundleLikeItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BundleLikeItem.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BundleLikeItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BundleLikeItem.java#L19) |
| ` @Override public boolean overrideStackedOnOther(ItemStack stack, Slot slot, ClickAction action, Player player) ` | ` (!slot.isActive() \|\| !slot.allowModification(player)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BundleLikeItem.java#L62) |
| ` @Override public boolean overrideOtherStackedOnMe( ItemStack stack, ItemStack other, Slot slot, ClickAction action, Player player, SlotAccess access ) ` | ` (!slot.allowModification(player)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/BundleLikeItem.java#L100) |

## EquipmentAbilities

` public final class EquipmentAbilities `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L42)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean canBreathe(LivingEntity entity) ` | 末尾返回 ` helmet.is(ModItems.BREATHING_HELMET) \|\| helmet.is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>[调用处 AtmosphereLivingMixin.anvilcraft$vacuumBreathing](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/AtmosphereLivingMixin.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L65) |
| ` public static boolean hasEndermanProtection(LivingEntity entity) ` | 末尾返回 ` entity.getItemBySlot(EquipmentSlot.HEAD).is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>[调用处 EndermanMixin.anvilcraft$applyEndermanProtection](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EndermanMixin.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L70) |
| ` public static boolean hasNightVision(LivingEntity entity) ` | 末尾返回 ` helmet.is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) && helmet.getOrDefault(ModComponents.NIGHT_VISION_ENABLED, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L74) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void breathe(LivingBreatheEvent event) ` | 事件总线派发 ` LivingBreatheEvent ` 时调用。<br>实现调用 ` canBreathe(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.setCanBreathe(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L79) |
| ` @SubscribeEvent public static void damage(LivingIncomingDamageEvent event) ` | 事件总线派发 ` LivingIncomingDamageEvent ` 时调用。<br>实现调用 ` isImmune(event.getEntity(), event.getSource()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getSource() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L87) |
| ` @SubscribeEvent public static void preserveExternalNightVision(MobEffectEvent.Added event) ` | 事件总线派发 ` MobEffectEvent.Added ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getEffectInstance().is(MobEffects.NIGHT_VISION) `<br>实现调用 ` event.getEffectInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L92) |
| ` @SubscribeEvent public static void afterTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PocketInventory.get(player).tick(player) `<br>分支 ` (event.getEntity() instanceof ServerPlayer player) ` 内调用 ` PocketInventory.get(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L100) |
| ` public static boolean hasBufferBoots(LivingEntity entity) ` | 末尾返回 ` boots.is(ModItems.BUFFER_BOOTS) \|\| boots.is(ModItems.WEATHERPROOF_SPACESUIT_BOOTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L138) |
| ` public static boolean canChargeJump(LivingEntity entity) ` | 末尾返回 ` hasBufferBoots(entity) && entity.getItemBySlot(EquipmentSlot.FEET).getOrDefault(ModComponents.CHARGED_JUMP_ENABLED, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L143) |
| ` public static int chargeTicks(Player player) ` | 末尾返回 ` canChargeJump(player) ? CHARGE.getOrDefault(player, 0) : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L147) |
| ` public static float chargeProgress(Player player) ` | 末尾返回 ` Math.clamp(chargeTicks(player) / (float) AnvilCraft.CONFIG.equipment.chargedJumpChargeTicks, 0, 1) `<br>[调用处 EquipmentClientEvents.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L151) |
| ` public static boolean isChargeHeld(Player player) ` | 末尾返回 ` releaseTick != null && player.tickCount - releaseTick <= AnvilCraft.CONFIG.equipment.chargedJumpChargeHoldTicks `<br>[调用处 EquipmentClientEvents.chargeBar](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L96) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L155) |
| ` public static float consumeChargedJump(Player player, float normal) ` | ` (!(player instanceof ServerPlayer serverPlayer)) ` 成立时提前返回 ` normal `<br>` (!canChargeJump(player) \|\| pending == null) ` 成立时提前返回 ` normal `<br>` (age < 0 \|\| age > PENDING_CHARGED_JUMP_TIMEOUT) ` 成立时提前返回 ` normal `<br>` (progress <= 0) ` 成立时提前返回 ` normal `<br>` (!Float.isFinite(max) \|\| max <= 0) ` 成立时提前返回 ` normal `<br>末尾返回 ` Math.min(pending.power(), max) `<br>[调用处 LivingEntityMixin.anvilcraft$chargedJump](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L252) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L161) |
| ` public static void applyChargedJump(Player player, float jumpPower) ` | 实现调用 ` canChargeJump(player) `<br>实现调用 ` Float.isFinite(jumpPower) `<br>实现调用 ` SERVER_CHARGE.remove(serverPlayer) `<br>[调用处 ChargedJumpPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L189) |
| ` public static boolean canStandOnFluid(LivingEntity entity, FluidState fluid) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.getAbilities() `<br>实现调用 ` player.getItemBySlot(EquipmentSlot.FEET).is(ModItems.WEATHERPROOF_SPACESUIT_BOOTS) `<br>[调用处 EquipmentLiquidBlockMixin.anvilcraft$standOnFluid](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EquipmentLiquidBlockMixin.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L313) |
| ` public static boolean shouldSinkInFluid(Player player) ` | 末尾返回 ` player.isShiftKeyDown() && !player.isSpectator() && !player.getAbilities().flying && player.getItemBySlot(EquipmentSlot.FEET).is(ModItems.WEATHERPROOF_SPACESUIT_BOOTS) `<br>[调用处 EntityMixin.anvilcraft$sinkInBubbleColumn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L77) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L319) |
| ` @SubscribeEvent public static void beforeTick(PlayerTickEvent.Pre event) ` | 事件总线派发 ` PlayerTickEvent.Pre ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.isLocalPlayer() `<br>分支 ` (player.isLocalPlayer()) ` 内调用 ` tickCharge(player, canChargeJump(player)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L333) |
| ` public static boolean hasFullSuit(LivingEntity entity) ` | 实现调用 ` entity.getItemBySlot(EquipmentSlot.HEAD).is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>实现调用 ` entity.getItemBySlot(EquipmentSlot.HEAD) `<br>实现调用 ` entity.getItemBySlot(EquipmentSlot.CHEST).is(ModItems.WEATHERPROOF_SPACESUIT_CHESTPLATE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L363) |
| ` public static boolean isImmune(LivingEntity entity, DamageSource source) ` | ` (source.is(DamageTypes.FELL_OUT_OF_WORLD) \|\| source.is(DamageTypes.GENERIC_KILL)) ` 成立时提前返回 ` false `<br>` (canBreathe(entity) && source.is(DamageTypeTags.IS_DROWNING)) ` 成立时提前返回 ` true `<br>` (hasBufferBoots(entity) && source.is(DamageTypeTags.IS_FALL)) ` 成立时提前返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L370) |
| ` public static boolean isVoidProtected(Player player) ` | 末尾返回 ` !player.isSpectator() && !player.getAbilities().flying && hasFullSuit(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L379) |
| ` public static Vec3 collideWithVoidFloor(Player player, Vec3 movement) ` | ` (movement.y >= 0 \|\| player.getY() < floor \|\| player.getY() + movement.y >= floor \|\| !isVoidProtected(player)) ` 成立时提前返回 ` movement `<br>末尾返回 ` new Vec3(movement.x, floor - player.getY(), movement.z) `<br>[调用处 EntityMixin.anvilcraft$collideWithVoidFloor](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L399) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L383) |

## FluidTankMinecartItem

` public class FluidTankMinecartItem extends Item implements IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/FluidTankMinecartItem.java#L35)

放置与发射储罐矿车的物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankMinecartItem(Properties properties) ` | 实现调用 ` super(properties.stacksTo(1)) `<br>实现调用 ` properties.stacksTo(1) `<br>实现调用 ` DispenserBlock.registerBehavior(this, new DispenseBehavior()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/FluidTankMinecartItem.java#L36) |
| ` @Override public void appendItemTooltip( ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> builder, TooltipFlag tooltipFlag ) ` | 执行 ` FluidTankItemTooltip.appendFixedTank( stack, context, builder, FluidTankMinecartEntity.CAPACITY ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/FluidTankMinecartItem.java#L41) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (!state.is(BlockTags.RAILS)) ` 成立时提前返回 ` InteractionResult.FAIL `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/FluidTankMinecartItem.java#L79) |

## HyperdimensionTerminalItem

` public final class HyperdimensionTerminalItem extends TerminalItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HyperdimensionTerminalItem(Properties properties) ` | 执行 ` super(properties, Kind.HYPERDIMENSION) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L16) |
| ` public static void bindToStation(ServerPlayer player, ItemStack stack, StorageBlockEntity entity) ` | 实现调用 ` stack.getOrDefault(ModComponents.TERMINAL_BINDING, TerminalBinding.EMPTY).id().isPresent() `<br>实现调用 ` stack.getOrDefault(ModComponents.TERMINAL_BINDING, TerminalBinding.EMPTY).id() `<br>实现调用 ` stack.getOrDefault(ModComponents.TERMINAL_BINDING, TerminalBinding.EMPTY) `<br>[调用处 HyperdimensionStorageStationBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L30) |

## IInventoryCarriedAware

` public interface IInventoryCarriedAware `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/IInventoryCarriedAware.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onCarriedUpdate(HashedStack stack, ServerPlayer serverPlayer) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/IInventoryCarriedAware.java#L7) |

## LocalTerminalItem

` public final class LocalTerminalItem extends TerminalItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/LocalTerminalItem.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LocalTerminalItem(Properties properties) ` | 执行 ` super(properties, Kind.LOCAL) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/LocalTerminalItem.java#L4) |

## RubyItem

` public class RubyItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/RubyItem.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RubyItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/RubyItem.java#L22) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` InteractionResult.FAIL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/RubyItem.java#L26) |

## SapphireItem

` public class SapphireItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SapphireItem.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SapphireItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SapphireItem.java#L27) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand hand) ` | 末尾返回 ` InteractionResult.FAIL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SapphireItem.java#L31) |

## ShulkerTerminalItem

` public final class ShulkerTerminalItem extends TerminalItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ShulkerTerminalItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ShulkerTerminalItem(Properties properties) ` | 执行 ` super(properties, Kind.SHULKER) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ShulkerTerminalItem.java#L7) |

## SingularityCrystalItem

` public class SingularityCrystalItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L18)

保存极端天体快照的奇点晶体。存有数据时显示附魔光效，在空中按住 Shift 右键可清除数据。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SingularityCrystalItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L22) |
| ` public static boolean hasDataStored(ItemStack stack) ` | 末尾返回 ` CelestialForgingAnvilBlockEntity.loadSnapshotFromStack(stack) != null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L26) |
| ` public static void deleteData(ItemStack stack) ` | 实现调用 ` stack.getOrDefault(DataComponents.CUSTOM_DATA, CustomData.EMPTY) `<br>实现调用 ` customData.copyTag() `<br>实现调用 ` tag.remove(SNAPSHOT_KEY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L30) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` hasDataStored(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L41) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L46) |

## StructureDiskItem

` public class StructureDiskItem extends Item implements IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/StructureDiskItem.java#L19)

结构磁盘物品 在tooltip中显示保存的结构名称

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureDiskItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/StructureDiskItem.java#L21) |
| ` @Override public void appendItemTooltip( ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> builder, TooltipFlag tooltipFlag ) ` | 实现调用 ` stack.get(ModComponents.STRUCTURE_DISK_DATA) `<br>分支 ` (structureDiskData != null) ` 内调用 ` builder.accept(Component.translatable("item.anvilcraft.structure_disk.structure", structureDiskData.name())) `<br>分支 ` (structureDiskData != null) ` 内调用 ` Component.translatable("item.anvilcraft.structure_disk.structure", structureDiskData.name()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/StructureDiskItem.java#L25) |

## TerminalItem

` public abstract class TerminalItem extends BundleLikeItem implements ICannotFitInStationItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Kind kind() ` | 末尾返回 ` this.kind ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L42) |
| ` public @Nullable UUID targetId(Player player, ItemStack stack) ` | 实现调用 ` TerminalSessions.localTerminalId(player.getUUID()) `<br>实现调用 ` player.getUUID() `<br>实现调用 ` TerminalSessions.shulkerTerminalId(player.getUUID()) `<br>[调用处 TerminalItem.canRemoveOne](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L110) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L46) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand hand) ` | ` (!level.isClientSide()) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L54) |
| ` public void openStorage(Player player, ItemStack stack) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` DistExecutor.run(Dist.CLIENT, () -> () -> StorageTerminalClientStub.open(player, stack, this.kind)) `<br>[调用处 TerminalItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L61) |
| ` public static List<ItemStack> carriedItems(Player player) ` | 末尾返回 ` items `<br>[调用处 TerminalSessions.targetStorage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/TerminalSessions.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L66) |
| ` public static List<ItemStack> getAll(Player player) ` | 末尾返回 ` terminals `<br>[调用处 TerminalSessions.findTerminal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/TerminalSessions.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L72) |
| ` public static ItemStack setCrafting(Player player, ItemStack terminal, CraftingStorage crafting) ` | 末尾返回 ` terminal `<br>[调用处 StorageServerStub.CraftingTarget.write](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L480) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L86) |
| ` @Override public boolean canFitInsideContainerItems(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L138) |

## TerminalItem.Kind

` public enum Kind `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` LOCAL ` | 声明于枚举 ` TerminalItem.Kind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L32) |
| ` SHULKER ` | 声明于枚举 ` TerminalItem.Kind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L32) |
| ` HYPERDIMENSION ` | 声明于枚举 ` TerminalItem.Kind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L32) |
| ` public static Kind[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L31) |
| ` public static Kind valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L31) |
