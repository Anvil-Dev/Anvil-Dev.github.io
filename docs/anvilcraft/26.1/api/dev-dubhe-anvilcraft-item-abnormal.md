# dev.dubhe.anvilcraft.item.abnormal



## CursedItem

` public class CursedItem extends Item implements ICursed `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/CursedItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CursedItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/CursedItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slot) `<br>实现调用 ` ICursed.super.inventoryTick(stack, level, entity, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/CursedItem.java#L15) |

## EnchantedGoldIngotItem

` public class EnchantedGoldIngotItem extends EnchantedGoldItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/EnchantedGoldIngotItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantedGoldIngotItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/EnchantedGoldIngotItem.java#L6) |
| ` @Override public boolean isPiglinCurrency(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/EnchantedGoldIngotItem.java#L10) |

## EnchantedGoldItem

` public class EnchantedGoldItem extends Item implements IEnchantedGold `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/EnchantedGoldItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantedGoldItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/EnchantedGoldItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slot) `<br>实现调用 ` IEnchantedGold.super.inventoryTick(stack, level, entity, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/EnchantedGoldItem.java#L15) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/EnchantedGoldItem.java#L21) |

## IAbnormal

` public interface IAbnormal `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default void inventoryTick(ItemStack ignored, ServerLevel level, Entity entity, @Nullable EquipmentSlot ignored1) ` | 执行效果<br>参数 ` level ` 世界<br>参数 ` entity ` 实体<br>实现调用 ` level.isClientSide() `<br>实现调用 ` player.getAbilities() `<br>实现调用 ` AmuletManager.get(level.registryAccess()).trigger(player, ctx) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L22) |
| ` void addEffect(Player player) ` | [调用处 IAbnormal.inventoryTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L32) |
| ` static MobEffectInstance makeEffectInstance(Holder<MobEffect> effect, int amplifier) ` | 末尾返回 ` new MobEffectInstance(effect, 200, amplifier, false, true) `<br>[调用处 ICursed.addEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ICursed.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L34) |
| ` default int getItemCount(Player player) ` | 统计异常物品数量<br>参数 ` player ` 玩家<br>返回 异常物品数量<br>末尾返回 ` i ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L42) |
| ` static <T extends IAbnormal> int getAbnormalCount(Player player, Class<T> clazz) ` | 统计异常物品数量<br>参数 ` player ` 玩家<br>返回 异常物品数量<br>末尾返回 ` i `<br>[调用处 RoyalAnvilMenu.onTake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/RoyalAnvilMenu.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L57) |

## ICursed

` public interface ICursed extends IItemExtension, IAbnormal `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ICursed.java#L9)

诅咒物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default void addEffect(Player player) ` | 实现调用 ` IEnchantedGold.isCarryingEnchantedGold(player) `<br>实现调用 ` player.addEffect(IAbnormal.makeEffectInstance(MobEffects.WEAKNESS, 1)) `<br>实现调用 ` IAbnormal.makeEffectInstance(MobEffects.WEAKNESS, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ICursed.java#L10) |
| ` @Override default boolean isPiglinCurrency(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ICursed.java#L23) |

## IEnchantedGold

` public interface IEnchantedGold `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IEnchantedGold.java#L16)

附魔金物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default void inventoryTick(ItemStack ignored, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` player.getAbilities() `<br>实现调用 ` getEnchantedGoldCount(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IEnchantedGold.java#L17) |
| ` static boolean isHoldingEnchantedGold(Player player) ` | 玩家是否手持附魔金<br>末尾返回 ` player.isHolding(stack -> stack.is(ModItemTags.ENCHANTED_GOLD)) `<br>[调用处 PiglinAiMixin.ignoreEnchantedGoldHolder](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinAiMixin.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IEnchantedGold.java#L32) |
| ` static boolean isCarryingEnchantedGold(Player player) ` | 玩家是否携带附魔金<br>末尾返回 ` getEnchantedGoldCount(player) > 0 `<br>[调用处 ICursed.addEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ICursed.java#L12) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IEnchantedGold.java#L39) |
| ` static int getEnchantedGoldCount(Player player) ` | 统计玩家携带的附魔金数量<br>末尾返回 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IEnchantedGold.java#L46) |

## ILevitation

` public interface ILevitation extends IAbnormal `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ILevitation.java#L7)

飘浮物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default void addEffect(Player player) ` | 实现调用 ` this.getItemCount(player) `<br>分支 ` (count < 128) ` 内调用 ` player.addEffect(IAbnormal.makeEffectInstance(MobEffects.SLOW_FALLING, 0)) `<br>分支 ` (count < 128) ` 内调用 ` IAbnormal.makeEffectInstance(MobEffects.SLOW_FALLING, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ILevitation.java#L8) |

## IRadiation

` public interface IRadiation extends IAbnormal `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IRadiation.java#L7)

辐射物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default void addEffect(Player player) ` | 实现调用 ` this.getItemCount(player) `<br>实现调用 ` player.addEffect(IAbnormal.makeEffectInstance(MobEffects.WITHER, 0)) `<br>实现调用 ` IAbnormal.makeEffectInstance(MobEffects.WITHER, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IRadiation.java#L8) |

## ISuperHeavy

` public interface ISuperHeavy extends IAbnormal `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ISuperHeavy.java#L7)

超重物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default void addEffect(Player player) ` | 实现调用 ` this.getItemCount(player) `<br>实现调用 ` player.addEffect(IAbnormal.makeEffectInstance(MobEffects.SLOWNESS, amplifier)) `<br>实现调用 ` IAbnormal.makeEffectInstance(MobEffects.SLOWNESS, amplifier) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/ISuperHeavy.java#L8) |

## LevitationItem

` public class LevitationItem extends Item implements ILevitation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/LevitationItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LevitationItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/LevitationItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slot) `<br>实现调用 ` ILevitation.super.inventoryTick(stack, level, entity, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/LevitationItem.java#L15) |

## RadiationItem

` public class RadiationItem extends Item implements IRadiation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/RadiationItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RadiationItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/RadiationItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slot) `<br>实现调用 ` IRadiation.super.inventoryTick(stack, level, entity, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/RadiationItem.java#L15) |

## SuperHeavyItem

` public class SuperHeavyItem extends Item implements ISuperHeavy `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/SuperHeavyItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SuperHeavyItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/SuperHeavyItem.java#L11) |
| ` @Override public void inventoryTick(ItemStack stack, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slot) `<br>实现调用 ` ISuperHeavy.super.inventoryTick(stack, level, entity, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/SuperHeavyItem.java#L15) |
