# dev.dubhe.anvilcraft.item（EmberMetalHeavyHalberdItem 至 HeavyHalberdCoreItem）



## EmberMetalHeavyHalberdItem

` public class EmberMetalHeavyHalberdItem extends HeavyHalberdItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHeavyHalberdItem.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalHeavyHalberdItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(HeavyHalberdItem.createAttributes(ModTiers.EMBER_METAL, 10, -2.4f)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` HeavyHalberdItem.createAttributes(ModTiers.EMBER_METAL, 10, -2.4f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHeavyHalberdItem.java#L12) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownEmberMetalHeavyHalberdEntity(level, shooter, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHeavyHalberdItem.java#L26) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownEmberMetalHeavyHalberdEntity(level, x, y, z, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHeavyHalberdItem.java#L31) |

## EmberMetalHoeItem

` public class EmberMetalHoeItem extends HoeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHoeItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalHoeItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(HoeItem.createAttributes(ModTiers.EMBER_METAL, -3, 0)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` HoeItem.createAttributes(ModTiers.EMBER_METAL, -3, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHoeItem.java#L8) |

## EmberMetalIngotItem

` public class EmberMetalIngotItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalIngotItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalIngotItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalIngotItem.java#L6) |

## EmberMetalPickaxeItem

` public class EmberMetalPickaxeItem extends PickaxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalPickaxeItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalPickaxeItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(PickaxeItem.createAttributes(ModTiers.EMBER_METAL, 2, -2.8f)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` PickaxeItem.createAttributes(ModTiers.EMBER_METAL, 2, -2.8f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalPickaxeItem.java#L8) |

## EmberMetalResonatorItem

` public class EmberMetalResonatorItem extends ResonatorItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalResonatorItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalResonatorItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(ResonatorItem.createAttributes(ModTiers.EMBER_METAL, 10, -3f)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` ResonatorItem.createAttributes(ModTiers.EMBER_METAL, 10, -3f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalResonatorItem.java#L7) |

## EmberMetalShovelItem

` public class EmberMetalShovelItem extends ShovelItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalShovelItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalShovelItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(ShovelItem.createAttributes(ModTiers.EMBER_METAL, 3, -3f)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` ShovelItem.createAttributes(ModTiers.EMBER_METAL, 3, -3f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalShovelItem.java#L8) |

## EmberMetalSwordItem

` public class EmberMetalSwordItem extends SwordItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalSwordItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalSwordItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(SwordItem.createAttributes(ModTiers.EMBER_METAL, 4, -2.4f)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` SwordItem.createAttributes(ModTiers.EMBER_METAL, 4, -2.4f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalSwordItem.java#L8) |

## EmptyCapacitorItem

` public class EmptyCapacitorItem extends Item implements IEmptyCapacitor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmptyCapacitorItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmptyCapacitorItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmptyCapacitorItem.java#L9) |
| ` @Override public ItemStack getFull(ItemStack empty) ` | 末尾返回 ` empty.transmuteCopy(ModItems.CAPACITOR, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmptyCapacitorItem.java#L13) |

## EmptySuperCapacitorItem

` public class EmptySuperCapacitorItem extends Item implements IEmptyCapacitor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmptySuperCapacitorItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmptySuperCapacitorItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmptySuperCapacitorItem.java#L9) |
| ` @Override public ItemStack getFull(ItemStack empty) ` | 末尾返回 ` empty.transmuteCopy(ModItems.SUPER_CAPACITOR, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmptySuperCapacitorItem.java#L13) |

## EnergyWeaponPlatformItem

` public class EnergyWeaponPlatformItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EnergyWeaponPlatformItem.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnergyWeaponPlatformItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EnergyWeaponPlatformItem.java#L15) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResultHolder.sidedSuccess(stack, true) `<br>末尾返回 ` InteractionResultHolder.sidedSuccess(stack, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EnergyWeaponPlatformItem.java#L19) |

## EquipmentAbilities

` public final class EquipmentAbilities `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L40)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean canBreathe(LivingEntity entity) ` | 末尾返回 ` helmet.is(ModItems.BREATHING_HELMET) \|\| helmet.is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>[调用处 EntityMixin.anvilcraft$preventBreathingWithoutOxygen](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L66) |
| ` public static boolean hasBufferBoots(LivingEntity entity) ` | 末尾返回 ` boots.is(ModItems.BUFFER_BOOTS) \|\| boots.is(ModItems.WEATHERPROOF_SPACESUIT_BOOTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L71) |
| ` public static boolean hasEndermanProtection(LivingEntity entity) ` | 末尾返回 ` helmet.is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>[调用处 EndermanMixin.anvilcraft$applyEndermanProtection](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EndermanMixin.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L76) |
| ` public static boolean hasNightVision(LivingEntity entity) ` | 末尾返回 ` helmet.is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) && helmet.getOrDefault(ModComponents.NIGHT_VISION_ENABLED, true) `<br>[调用处 GameRendererMixin.anvilcraft$steadyHelmetNightVision](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GameRendererMixin.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L81) |
| ` public static boolean canChargeJump(LivingEntity entity) ` | 末尾返回 ` hasBufferBoots(entity) && entity.getItemBySlot(EquipmentSlot.FEET).getOrDefault(ModComponents.CHARGED_JUMP_ENABLED, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L86) |
| ` public static boolean hasFullSuit(LivingEntity entity) ` | 实现调用 ` entity.getItemBySlot(EquipmentSlot.HEAD).is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>实现调用 ` entity.getItemBySlot(EquipmentSlot.HEAD) `<br>实现调用 ` entity.getItemBySlot(EquipmentSlot.CHEST).is(ModItems.WEATHERPROOF_SPACESUIT_CHESTPLATE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L90) |
| ` public static boolean isImmune(LivingEntity entity, DamageSource source) ` | ` (source.is(DamageTypes.FELL_OUT_OF_WORLD) \|\| source.is(DamageTypes.GENERIC_KILL)) ` 成立时提前返回 ` false `<br>` (canBreathe(entity) && source.is(DamageTypeTags.IS_DROWNING)) ` 成立时提前返回 ` true `<br>` (hasBufferBoots(entity) && source.is(DamageTypeTags.IS_FALL)) ` 成立时提前返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L97) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void breathe(LivingBreatheEvent event) ` | 事件总线派发 ` LivingBreatheEvent ` 时调用。<br>实现调用 ` canBreathe(event.getEntity()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.setCanBreathe(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L106) |
| ` @SubscribeEvent public static void damage(LivingIncomingDamageEvent event) ` | 事件总线派发 ` LivingIncomingDamageEvent ` 时调用。<br>实现调用 ` isImmune(event.getEntity(), event.getSource()) `<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getSource() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L114) |
| ` public static int chargeTicks(Player player) ` | 当前蓄力值，用于 HUD 显示；等于配置的蓄力上限表示已蓄满。 松开潜行后不会立刻归零：先在当前进度停留一段时间， 再线性衰减归零。停留期内仍可起跳， 因此构成一段输入缓冲窗口。<br>末尾返回 ` canChargeJump(player) ? CHARGE.getOrDefault(player, 0) : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L126) |
| ` public static float chargeProgress(Player player) ` | 蓄力条当前应有的填充比例（0..1），已含停留与衰减阶段。<br>末尾返回 ` Math.clamp(chargeTicks(player) / (float) AnvilCraft.CONFIG.equipment.chargedJumpChargeTicks, 0, 1) `<br>[调用处 EquipmentClientEvents.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L133) |
| ` public static boolean isChargeHeld(Player player) ` | 是否处于「停止蓄力后的停留阶段」：蓄力值已定格、尚未开始衰减。 HUD 据此换色，让玩家看出此刻进度被暂时锁定，仍可起跳。<br>末尾返回 ` releaseTick != null && player.tickCount - releaseTick <= AnvilCraft.CONFIG.equipment.chargedJumpChargeHoldTicks `<br>[调用处 EquipmentClientEvents.chargeBar](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L137) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L142) |
| ` public static float consumeChargedJump(Player player, float normal) ` | 消耗当前蓄力并返回本次的跳跃速度：按蓄力进度线性提升跳跃高度， 进度 0 为普通跳跃，满蓄力为 AnvilCraft.CONFIG.equipment.chargedJumpMaxHeightMultiplier 倍高度。 读取进度与清空蓄力在同一次调用内完成。若拆成「先清空再算速度」两步， 调用方很容易在取值前就把进度归零，强化会静默失效。 不要求按住潜行，因此停留与衰减阶段内仍可起跳。<br>返回 强化后的跳跃速度；无蓄力时原样返回 normal<br>` (!(player instanceof ServerPlayer serverPlayer)) ` 成立时提前返回 ` normal `<br>` (pending == null \|\| !canChargeJump(player)) ` 成立时提前返回 ` normal `<br>` (age < 0 \|\| age > PENDING_CHARGED_JUMP_TIMEOUT) ` 成立时提前返回 ` normal `<br>` (progress <= 0) ` 成立时提前返回 ` normal `<br>` (!Float.isFinite(max) \|\| max <= 0) ` 成立时提前返回 ` normal `<br>末尾返回 ` Math.min(pending.power(), max) `<br>[调用处 LivingEntityMixin.anvilcraft$chargedJump](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L159) |
| ` public static void applyChargedJump(Player player, float jumpPower) ` | 服务端记录客户端下达的高跳指令，供随后的 jumpFromGround 取用。 客户端在 aiStep 内先发本包、后发移动包，服务端也按此顺序处理： 移动包触发 jumpFromGround 时指令已在。这里不直接改 deltaMovement，否则会在服务端自己的跳跃位移上再叠加一次。<br>实现调用 ` canChargeJump(player) `<br>实现调用 ` Float.isFinite(jumpPower) `<br>实现调用 ` SERVER_CHARGE.remove(serverPlayer) `<br>[调用处 ChargedJumpPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/ChargedJumpPacket.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L213) |
| ` public static boolean canStandOnFluid(LivingEntity entity, FluidState fluid) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.getAbilities() `<br>实现调用 ` player.getItemBySlot(EquipmentSlot.FEET).is(ModItems.WEATHERPROOF_SPACESUIT_BOOTS) `<br>[调用处 EquipmentLiquidBlockMixin.anvilcraft$standOnFluid](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EquipmentLiquidBlockMixin.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L347) |
| ` public static boolean shouldSinkInFluid(Player player) ` | 末尾返回 ` player.isShiftKeyDown() && !player.isSpectator() && !player.getAbilities().flying && player.getItemBySlot(EquipmentSlot.FEET).is(ModItems.WEATHERPROOF_SPACESUIT_BOOTS) `<br>[调用处 EntityMixin.anvilcraft$sinkInBubbleColumn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L353) |
| ` public static boolean isVoidProtected(Player player) ` | 末尾返回 ` !player.isSpectator() && !player.getAbilities().flying && hasFullSuit(player) `<br>[调用处 PlayerMixin.anvilcraft$voidFloorSupportsSneaking](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PlayerMixin.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L358) |
| ` public static Vec3 collideWithVoidFloor(Player player, Vec3 movement) ` | ` (movement.y >= 0 \|\| player.getY() < floor \|\| player.getY() + movement.y >= floor \|\| !isVoidProtected(player)) ` 成立时提前返回 ` movement `<br>末尾返回 ` new Vec3(movement.x, floor - player.getY(), movement.z) `<br>[调用处 EntityMixin.anvilcraft$collideWithVoidFloor](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L154) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L362) |
| ` @SubscribeEvent public static void beforeTick(PlayerTickEvent.Pre event) ` | 事件总线派发 ` PlayerTickEvent.Pre ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` player.isLocalPlayer() `<br>分支 ` (player.isLocalPlayer()) ` 内调用 ` tickCharge(player, canChargeJump(player)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L378) |
| ` @SubscribeEvent public static void preserveExternalNightVision(MobEffectEvent.Added event) ` | 事件总线派发 ` MobEffectEvent.Added ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getEffectInstance().is(MobEffects.NIGHT_VISION) `<br>实现调用 ` event.getEffectInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L408) |
| ` @SubscribeEvent public static void afterTick(PlayerTickEvent.Post event) ` | 事件总线派发 ` PlayerTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` PocketInventory.get(player).tick(player) `<br>实现调用 ` PocketInventory.get(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentAbilities.java#L438) |

## EquipmentArmorItem

` public class EquipmentArmorItem extends ArmorItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EquipmentArmorItem(Properties properties, Type type, boolean weatherproof, String texture) ` | 实现调用 ` properties.durability(type.getDurability(weatherproof ? 74 : 15)) `<br>实现调用 ` type.getDurability(weatherproof ? 74 : 15) `<br>实现调用 ` AnvilCraft.of("textures/entity/equipment/" + texture + ".png") `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L540) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L28) |
| ` public static @Nullable DataComponentType<Boolean> abilityComponent(ItemStack stack) ` | ` (stack.is(ModItems.WEATHERPROOF_SPACESUIT_HELMET)) ` 成立时提前返回 ` ModComponents.NIGHT_VISION_ENABLED `<br>` (stack.is(ModItems.BUFFER_BOOTS) \|\| stack.is(ModItems.WEATHERPROOF_SPACESUIT_BOOTS)) ` 成立时提前返回 ` ModComponents.CHARGED_JUMP_ENABLED `<br>末尾返回 ` null `<br>[调用处 ItemTooltipManager.addTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/ItemTooltipManager.java#L1343) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L35) |
| ` @Override public int getDefense() ` | 末尾返回 ` super.getDefense() + (this.weatherproof ? (this.type == Type.HELMET \|\| this.type == Type.BOOTS ? 2 : 3) : 0) `<br>[调用处 EquipmentArmorItem.getDefaultAttributeModifiers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L43) |
| ` @Override public float getToughness() ` | 末尾返回 ` super.getToughness() + (this.weatherproof ? (this.type == Type.CHESTPLATE ? 2 : 1) : 0) `<br>[调用处 EquipmentArmorItem.getDefaultAttributeModifiers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L48) |
| ` @Override public ItemAttributeModifiers getDefaultAttributeModifiers() ` | ` (!this.weatherproof) ` 成立时提前返回 ` super.getDefaultAttributeModifiers() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L53) |
| ` @Override public boolean isValidRepairItem(ItemStack armor, ItemStack repair) ` | 末尾返回 ` this.weatherproof ? repair.is(ModItems.MULTIPHASE_MATTER) : repair.is(Items.IRON_INGOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L67) |
| ` @Override public ResourceLocation getArmorTexture(ItemStack stack, Entity entity, EquipmentSlot slot, ArmorMaterial.Layer layer, boolean innerModel) ` | 末尾返回 ` this.texture ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L72) |
| ` public boolean isWeatherproof() ` | 末尾返回 ` this.weatherproof `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EquipmentArmorItem.java#L23) |

## ExpGemItem

` public class ExpGemItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ExpGemItem.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpGemItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ExpGemItem.java#L20) |
| ` @Override public InteractionResultHolder<ItemStack> use( Level level, Player player, InteractionHand usedHand ) ` | 末尾返回 ` InteractionResultHolder.sidedSuccess(itemStack, level.isClientSide()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ExpGemItem.java#L24) |
| ` public static InteractionResult useEntity(Player player, Entity target, ItemStack stack) ` | 右键实体<br>` (!(target instanceof Villager villager)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (villager.level().isClientSide()) ` 成立时提前返回 ` InteractionResult.PASS `<br>[调用处 PlayerEventListener.useEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ExpGemItem.java#L41) |
| ` public static boolean canLevelUp(Villager villager) ` | 末尾返回 ` villager.getAge() >= 0 && data.getProfession() != VillagerProfession.NONE && VillagerData.canLevelUp(data.getLevel()) `<br>[调用处 ModDispenserBehavior.expGem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L205) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ExpGemItem.java#L57) |
| ` public static void updateVillager(Villager villager) ` | 实现调用 ` villager.getVillagerXp() `<br>实现调用 ` villager.setVillagerXp(villagerXp) `<br>实现调用 ` Util.cast(villager) `<br>[调用处 ModDispenserBehavior.expGem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L208) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ExpGemItem.java#L64) |

## FilterItem

` public class FilterItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L33) |
| ` public static boolean filter(ItemStack filter, ItemStack stack) ` | 实现调用 ` filter.isEmpty() `<br>实现调用 ` filter.is(ModItems.FILTER) `<br>实现调用 ` ItemStack.isSameItemSameComponents(filter, stack) `<br>[调用处 FilteredItemStackHandler.isFiltered](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/FilteredItemStackHandler.java#L151) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L37) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(FilterItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L47) |
| ` @Override public void verifyComponentsAfterLoad(ItemStack stack) ` | 实现调用 ` stack.is(ModItems.FILTER) `<br>实现调用 ` stack.has(ModComponents.FILTER_CONTENT) `<br>分支 ` (stack.is(ModItems.FILTER) && !stack.has(ModComponents.FILTER_CONTENT)) ` 内调用 ` stack.set(ModComponents.FILTER_CONTENT, new FilterContent()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L54) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | ` (!itemstack.is(ModItems.FILTER)) ` 成立时提前返回 ` InteractionResultHolder.pass(itemstack) `<br>` (level.isClientSide()) ` 成立时提前返回 ` InteractionResultHolder.success(itemstack) `<br>末尾返回 ` InteractionResultHolder.success(itemstack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L61) |
| ` @Override public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, tooltipFlag) `<br>实现调用 ` stack.has(ModComponents.FILTER_CONTENT) `<br>分支 ` (stack.has(ModComponents.FILTER_CONTENT)) ` 内调用 ` stack.get(ModComponents.FILTER_CONTENT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L71) |

## FilterItem.FilterMenuProvider

` public record FilterMenuProvider(int position) implements MenuProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L94)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Component getDisplayName() ` | 末尾返回 ` Component.translatable("item.anvilcraft.filter") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L95) |
| ` @Override public FilterMenu createMenu(int containerId, Inventory playerInventory, Player player) ` | 末尾返回 ` new FilterMenu( ModMenuTypes.FILTER.get(), containerId, playerInventory, new FilterContainer(player, this.position, player.getInventory().getItem(this.position)) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L100) |
| ` @Override public void writeClientSideData(AbstractContainerMenu menu, RegistryFriendlyByteBuf buffer) ` | 实现调用 ` buffer.writeInt(filterMenu.getContainer().getPosition()) `<br>实现调用 ` filterMenu.getContainer().getPosition() `<br>实现调用 ` filterMenu.getContainer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L110) |
| ` public FilterMenuProvider(int position) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L94) |
| ` public int position() ` | 读取 record 分量 ` position ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L94) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L94) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L94) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L94) |

## FluidTankMinecartItem

` public class FluidTankMinecartItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FluidTankMinecartItem.java#L36)

Item used to place and dispense a FluidTankMinecartEntity.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankMinecartItem(Properties properties) ` | 实现调用 ` properties .stacksTo(1) `<br>实现调用 ` FluidTankMinecartItem.defaultBlockEntityData() `<br>实现调用 ` DispenserBlock.registerBehavior(this, new DispenseBehavior()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FluidTankMinecartItem.java#L37) |
| ` @Override public void appendHoverText( ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag ) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, tooltipFlag) `<br>实现调用 ` stack.getOrDefault(DataComponents.BLOCK_ENTITY_DATA, CustomData.EMPTY) `<br>实现调用 ` data.copyTag().getCompound("Tank") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FluidTankMinecartItem.java#L44) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (!state.is(BlockTags.RAILS)) ` 成立时提前返回 ` InteractionResult.FAIL `<br>末尾返回 ` InteractionResult.sidedSuccess(level.isClientSide) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FluidTankMinecartItem.java#L89) |

## FrostAnvilHammerItem

` public class FrostAnvilHammerItem extends AnvilHammerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostAnvilHammerItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostAnvilHammerItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.MERCILESS, Merciless.DEFAULT)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostAnvilHammerItem.java#L11) |
| ` @Override public int getEnchantmentValue(ItemStack stack) ` | 末尾返回 ` 15 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostAnvilHammerItem.java#L15) |
| ` @Override public boolean isValidRepairItem(ItemStack stack, ItemStack repairCandidate) ` | 末尾返回 ` repairCandidate.is(ModItems.FROST_METAL_INGOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostAnvilHammerItem.java#L20) |
| ` @Override public Block getAnvil() ` | 末尾返回 ` ModBlocks.FROST_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostAnvilHammerItem.java#L30) |

## FrostMetalAxeItem

` public class FrostMetalAxeItem extends AxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalAxeItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalAxeItem(Properties properties) ` | 实现调用 ` properties.attributes(AxeItem.createAttributes(ModTiers.FROST_METAL, 9, -3f)) `<br>实现调用 ` AxeItem.createAttributes(ModTiers.FROST_METAL, 9, -3f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalAxeItem.java#L8) |

## FrostMetalHeavyHalberdItem

` public class FrostMetalHeavyHalberdItem extends HeavyHalberdItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalHeavyHalberdItem.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalHeavyHalberdItem(Properties properties) ` | 实现调用 ` properties .attributes(HeavyHalberdItem.createAttributes(ModTiers.FROST_METAL, 13, -2.4f)) `<br>实现调用 ` HeavyHalberdItem.createAttributes(ModTiers.FROST_METAL, 13, -2.4f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalHeavyHalberdItem.java#L12) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownFrostMetalHeavyHalberdEntity(level, shooter, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalHeavyHalberdItem.java#L26) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownFrostMetalHeavyHalberdEntity(level, x, y, z, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalHeavyHalberdItem.java#L31) |

## FrostMetalHoeItem

` public class FrostMetalHoeItem extends HoeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalHoeItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalHoeItem(Properties properties) ` | 实现调用 ` properties.attributes(HoeItem.createAttributes(ModTiers.FROST_METAL, 1, 0)) `<br>实现调用 ` HoeItem.createAttributes(ModTiers.FROST_METAL, 1, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalHoeItem.java#L8) |

## FrostMetalPickaxeItem

` public class FrostMetalPickaxeItem extends PickaxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalPickaxeItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalPickaxeItem(Properties properties) ` | 实现调用 ` properties.attributes(PickaxeItem.createAttributes(ModTiers.FROST_METAL, 4, -2.8f)) `<br>实现调用 ` PickaxeItem.createAttributes(ModTiers.FROST_METAL, 4, -2.8f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalPickaxeItem.java#L8) |

## FrostMetalResonatorItem

` public class FrostMetalResonatorItem extends ResonatorItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalResonatorItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalResonatorItem(Properties properties) ` | 实现调用 ` properties .attributes(ResonatorItem.createAttributes(ModTiers.FROST_METAL, 13, -3f)) `<br>实现调用 ` ResonatorItem.createAttributes(ModTiers.FROST_METAL, 13, -3f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalResonatorItem.java#L7) |

## FrostMetalShovelItem

` public class FrostMetalShovelItem extends ShovelItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalShovelItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalShovelItem(Properties properties) ` | 实现调用 ` properties.attributes(ShovelItem.createAttributes(ModTiers.FROST_METAL, 5, -3f)) `<br>实现调用 ` ShovelItem.createAttributes(ModTiers.FROST_METAL, 5, -3f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalShovelItem.java#L8) |

## FrostMetalSwordItem

` public class FrostMetalSwordItem extends SwordItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalSwordItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalSwordItem(Properties properties) ` | 实现调用 ` properties.attributes(SwordItem.createAttributes(ModTiers.FROST_METAL, 7, -2.4f)) `<br>实现调用 ` SwordItem.createAttributes(ModTiers.FROST_METAL, 7, -2.4f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalSwordItem.java#L8) |

## GeodeItem

` public class GeodeItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GeodeItem.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GeodeItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GeodeItem.java#L24) |
| ` @Override public InteractionResultHolder<ItemStack> use( Level level, Player player, InteractionHand usedHand) ` | ` (!level.isClientSide) ` 成立时提前返回 ` InteractionResultHolder.success(itemStack) `<br>末尾返回 ` InteractionResultHolder.success(itemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GeodeItem.java#L28) |

## GuideBookItem

` public class GuideBookItem extends Item implements Thinkable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GuideBookItem.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GuideBookItem(Properties properties) ` | 实现调用 ` ItemAttributeModifiers.builder() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GuideBookItem.java#L31) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` new InteractionResultHolder<>(InteractionResult.PASS, player.getItemInHand(usedHand)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GuideBookItem.java#L41) |
| ` @Override @OnlyIn(Dist.CLIENT) public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, tooltipFlag) `<br>实现调用 ` Environment.get().getDist().isClient() `<br>实现调用 ` Environment.get().getDist() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GuideBookItem.java#L54) |
| ` @Override @OnlyIn(Dist.CLIENT) public void onThought() ` | 执行 ` IntegrationUtil.openIntegrationScreen() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GuideBookItem.java#L82) |

## HeavyHalberdCoreItem

` public class HeavyHalberdCoreItem extends Item implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdCoreItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyHalberdCoreItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdCoreItem.java#L30) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` MISSING_TOOLS_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdCoreItem.java#L34) |
| ` @Override public List<ResourceLocation> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` textures ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdCoreItem.java#L39) |
