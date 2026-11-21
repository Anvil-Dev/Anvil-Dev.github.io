# dev.dubhe.anvilcraft.item.ingredients



## CapacitorItem

` public class CapacitorItem extends Item implements IFullCapacitor, IChargerDischargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int ENERGY ` | 初值 ` 8_000_000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L17) |
| ` public CapacitorItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L19) |
| ` @Override public boolean overrideStackedOnOther(ItemStack stack, Slot slot, ClickAction clickAction, Player player) ` | 末尾返回 ` IFullCapacitor.tryForceChargeTarget(this, stack, slot, clickAction, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L23) |
| ` @Override public void inventoryTick(ItemStack stack, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slot) `<br>实现调用 ` IFullCapacitor.super.inventoryTick(stack, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L28) |
| ` @Override public int getEnergyStored(ItemStack stack) ` | 末尾返回 ` CapacitorItem.ENERGY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L37) |
| ` @Override public ItemStack getEmpty(ItemStack full) ` | 末尾返回 ` full.transmuteCopy(ModItems.CAPACITOR_EMPTY, 1) `<br>[调用处 CapacitorItem.discharge](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L42) |
| ` @Override public ItemStack discharge(ItemStack input) ` | 末尾返回 ` this.getEmpty(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/CapacitorItem.java#L47) |

## EmberMetalIngotItem

` public class EmberMetalIngotItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/EmberMetalIngotItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalIngotItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/EmberMetalIngotItem.java#L6) |

## EmptyCapacitorItem

` public class EmptyCapacitorItem extends Item implements IChargerChargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/EmptyCapacitorItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmptyCapacitorItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/EmptyCapacitorItem.java#L10) |
| ` @Override public ItemStack charge(ItemStack input) ` | 末尾返回 ` ModItems.CAPACITOR.asStack(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/EmptyCapacitorItem.java#L14) |

## EmptySuperCapacitorItem

` public class EmptySuperCapacitorItem extends Item implements IChargerChargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/EmptySuperCapacitorItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmptySuperCapacitorItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/EmptySuperCapacitorItem.java#L10) |
| ` @Override public ItemStack charge(ItemStack input) ` | 末尾返回 ` ModItems.SUPER_CAPACITOR.asStack(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/EmptySuperCapacitorItem.java#L14) |

## ExpGemItem

` public class ExpGemItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ExpGemItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpGemItem(Properties properties) ` | 执行 ` super(properties.useCooldown(0.25F)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ExpGemItem.java#L19) |
| ` @Override public InteractionResult use( Level level, Player player, InteractionHand usedHand ) ` | 末尾返回 ` dev.dubhe.anvilcraft.util.Util.sidedSuccess(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ExpGemItem.java#L23) |
| ` public static InteractionResult useEntity(Player player, Entity target, ItemStack stack) ` | 右键实体<br>` (!(target instanceof Villager villager)) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (villager.level().isClientSide()) ` 成立时提前返回 ` InteractionResult.PASS `<br>[调用处 PlayerEventListener.useEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ExpGemItem.java#L37) |
| ` public static void updateVillager(Villager villager) ` | 实现调用 ` villager.getVillagerXp() `<br>实现调用 ` villager.setVillagerXp(villagerXp) `<br>实现调用 ` Util.cast(villager) `<br>[调用处 ExpGemItem.useEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ExpGemItem.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ExpGemItem.java#L57) |

## HeavyHalberdCoreItem

` public class HeavyHalberdCoreItem extends Item implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/HeavyHalberdCoreItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyHalberdCoreItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/HeavyHalberdCoreItem.java#L32) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` HeavyHalberdCoreItem.MISSING_TOOLS_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/HeavyHalberdCoreItem.java#L36) |
| ` @Override public List<Identifier> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` textures ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/HeavyHalberdCoreItem.java#L41) |

## MultiphaseMatterItem

` public class MultiphaseMatterItem extends Item implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/MultiphaseMatterItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiphaseMatterItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/MultiphaseMatterItem.java#L31) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` MultiphaseMatterItem.EMBER_MISSING_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/MultiphaseMatterItem.java#L35) |
| ` @Override public List<Identifier> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/MultiphaseMatterItem.java#L40) |

## MultiphaseTranscendiumItem

` public class MultiphaseTranscendiumItem extends Item implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/MultiphaseTranscendiumItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiphaseTranscendiumItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.ETERNAL, Eternal.DEFAULT)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/MultiphaseTranscendiumItem.java#L33) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 实现调用 ` input.is(ModItemTags.RESONATOR) `<br>实现调用 ` input.is(ModItemTags.HEAVY_HALBERD) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/MultiphaseTranscendiumItem.java#L37) |
| ` @Override public List<Identifier> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` ListUtil.cycle(MultiphaseTranscendiumItem.EMPTY_SLOT_TEXTURES, id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/MultiphaseTranscendiumItem.java#L57) |

## ResonatorCoreItem

` public class ResonatorCoreItem extends Item implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ResonatorCoreItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResonatorCoreItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ResonatorCoreItem.java#L31) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` ResonatorCoreItem.MISSING_TOOLS_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ResonatorCoreItem.java#L35) |
| ` @Override public List<Identifier> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` textures ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/ResonatorCoreItem.java#L40) |

## RoyalSteelIngotItem

` public class RoyalSteelIngotItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/RoyalSteelIngotItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalSteelIngotItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/RoyalSteelIngotItem.java#L6) |

## SuperCapacitorItem

` public class SuperCapacitorItem extends Item implements IFullCapacitor, IChargerDischargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int ENERGY ` | 初值 ` 160_000_000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L17) |
| ` public SuperCapacitorItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L19) |
| ` @Override public boolean overrideStackedOnOther(ItemStack stack, Slot slot, ClickAction clickAction, Player player) ` | 末尾返回 ` IFullCapacitor.tryForceChargeTarget(this, stack, slot, clickAction, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L23) |
| ` @Override public void inventoryTick(ItemStack stack, ServerLevel level, Entity entity, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slot) `<br>实现调用 ` IFullCapacitor.super.inventoryTick(stack, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L28) |
| ` @Override public int getEnergyStored(ItemStack stack) ` | 末尾返回 ` SuperCapacitorItem.ENERGY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L37) |
| ` @Override public ItemStack getEmpty(ItemStack full) ` | 末尾返回 ` full.transmuteCopy(ModItems.SUPER_CAPACITOR_EMPTY, 1) `<br>[调用处 SuperCapacitorItem.discharge](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L42) |
| ` @Override public ItemStack discharge(ItemStack input) ` | 末尾返回 ` this.getEmpty(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/SuperCapacitorItem.java#L47) |

## TopazItem

` public class TopazItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/TopazItem.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TopazItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/TopazItem.java#L22) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` InteractionResult.FAIL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/ingredients/TopazItem.java#L26) |
