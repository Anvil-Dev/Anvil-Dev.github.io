# dev.dubhe.anvilcraft.item（HeavyHalberdItem 至 MultiphaseTranscendiumItem）



## HeavyHalberdItem

` public abstract class HeavyHalberdItem extends TieredItem implements ProjectileItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L74)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int TRIDENT_MODE ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L75) |
| ` public static final int SPEAR_MODE ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L76) |
| ` public static final int SWORD_MODE ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L77) |
| ` public static final int MACE_MODE ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L78) |
| ` public HeavyHalberdItem(Tier tier, Properties properties) ` | 执行 ` super( tier, properties .component(DataComponents.TOOL, createToolProperties(TRIDENT_MODE)) .rarity(Rarity.EPIC) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L80) |
| ` public static ItemAttributeModifiers createAttributes(Tier tier, float attackDamage, float attackSpeed) ` | 实现调用 ` ItemAttributeModifiers.builder() `<br>实现调用 ` tier.getAttackDamageBonus() `<br>[调用处 EmberMetalHeavyHalberdItem.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHeavyHalberdItem.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L89) |
| ` public static double getThrownBaseDamage(ItemStack stack) ` | 末尾返回 ` 2.0 `<br>[调用处 ThrownHeavyHalberdEntity.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L105) |
| ` public static Tool createToolProperties(int mode) ` | 末尾返回 ` mode == SWORD_MODE ? SwordItem.createToolProperties() : new Tool(List.of(), 1.0F, 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L117) |
| ` public static int getMode(ItemStack stack) ` | 末尾返回 ` Math.clamp( stack.getOrDefault(DataComponents.CUSTOM_MODEL_DATA, CustomModelData.DEFAULT).value(), TRIDENT_MODE, MACE_MODE ) `<br>[调用处 CrabClawItemInHandRenderer.isSpearLike](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L166) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L121) |
| ` public static void setMode(Player player, InteractionHand hand, @Range(from = TRIDENT_MODE, to = MACE_MODE) int mode) ` | 实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` heavyHalberd.getItem() `<br>实现调用 ` Math.clamp(mode, TRIDENT_MODE, MACE_MODE) `<br>[调用处 SwitchHeavyHalberdModePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchHeavyHalberdModePacket.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L129) |
| ` @Override public void setDamage(ItemStack stack, int damage) ` | 实现调用 ` super.setDamage(stack, Math.min(damage, stack.getMaxDamage() - 1)) `<br>实现调用 ` Math.min(damage, stack.getMaxDamage() - 1) `<br>实现调用 ` stack.getMaxDamage() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L136) |
| ` public static void checkTooDamaged(Tier tier, ItemStack stack) ` | 实现调用 ` stack.getItem() `<br>实现调用 ` isTooDamagedToUse(stack) `<br>分支 ` (isTooDamagedToUse(stack)) ` 内调用 ` stack.has(DataComponents.ENCHANTMENTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L142) |
| ` @Override public void verifyComponentsAfterLoad(ItemStack stack) ` | 实现调用 ` super.verifyComponentsAfterLoad(stack) `<br>实现调用 ` updateToolProperties(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L212) |
| ` @Override public float getDestroySpeed(ItemStack stack, BlockState state) ` | 末尾返回 ` super.getDestroySpeed(stack, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L218) |
| ` @Override public boolean isCorrectToolForDrops(ItemStack stack, BlockState state) ` | 末尾返回 ` super.isCorrectToolForDrops(stack, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L224) |
| ` @Override @SuppressWarnings({"removal"}) public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 实现调用 ` ResourceLocation.withDefaultNamespace("throwing") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L230) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` stack.has(DataComponents.UNBREAKABLE) `<br>分支 ` (!stack.has(DataComponents.UNBREAKABLE)) ` 内调用 ` checkTooDamaged(this.getTier(), stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L258) |
| ` @Override public boolean canAttackBlock(BlockState state, Level level, BlockPos pos, Player player) ` | 末尾返回 ` !player.isCreative() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L265) |
| ` @Override public UseAnim getUseAnimation(ItemStack stack) ` | Returns the action that specifies what animation to play when the item is being used.<br>末尾返回 ` switch (getMode(stack)) { case TRIDENT_MODE -> UseAnim.SPEAR; case SWORD_MODE -> UseAnim.BLOCK; default -> UseAnim.NONE; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L273) |
| ` @Override public int getUseDuration(ItemStack stack, LivingEntity entity) ` | 末尾返回 ` getMode(stack) == TRIDENT_MODE \|\| getMode(stack) == SWORD_MODE ? 72000 : 0 `<br>[调用处 HeavyHalberdItem.releaseUsing](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L294) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L282) |
| ` @Override public void releaseUsing(ItemStack stack, Level level, LivingEntity entityLiving, int timeLeft) ` | Called when the player stops using an Item (stops holding the right mouse button).<br>实现调用 ` getMode(stack) `<br>实现调用 ` this.getUseDuration(stack, entityLiving) `<br>实现调用 ` EnchantmentHelper.getTridentSpinAttackStrength(stack, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L290) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) ` | ` (isTooDamagedToUse(itemstack)) ` 成立时提前返回 ` InteractionResultHolder.fail(itemstack) `<br>` (getMode(itemstack) != TRIDENT_MODE) ` 成立时提前返回 ` InteractionResultHolder.pass(itemstack) `<br>` (EnchantmentHelper.getTridentSpinAttackStrength(itemstack, player) > 0.0F && !(this instanceof TranscendenceHeavyHalberdItem) && !player.isInWaterOrRain() ) ` 成立时提前返回 ` InteractionResultHolder.fail(itemstack) `<br>末尾返回 ` InteractionResultHolder.consume(itemstack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L339) |
| ` @Override public int getEnchantmentLevel(ItemStack stack, Holder<Enchantment> enchantment) ` | 末尾返回 ` level > 0 && isEnchantmentActive(stack, enchantment) ? level : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L362) |
| ` @Override public ItemEnchantments getAllEnchantments(ItemStack stack, HolderLookup.RegistryLookup<Enchantment> lookup) ` | 末尾返回 ` activeEnchantments.toImmutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L368) |
| ` @Override public <T extends LivingEntity> int damageItem(ItemStack stack, int amount, @Nullable T entity, Consumer<Item> onBroken) ` | 末尾返回 ` willDamage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L389) |
| ` @Override public boolean hurtEnemy(ItemStack stack, LivingEntity target, LivingEntity attacker) ` | ` (!(attacker instanceof ServerPlayer player) \|\| !MaceItem.canSmashAttack(player) \|\| isTooDamagedToUse(stack)) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L404) |
| ` @Override public void postHurtEnemy(ItemStack stack, LivingEntity target, LivingEntity attacker) ` | 实现调用 ` isTooDamagedToUse(stack) `<br>实现调用 ` stack.hurtAndBreak(1, attacker, EquipmentSlot.MAINHAND) `<br>实现调用 ` MaceItem.canSmashAttack(attacker) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L435) |
| ` @Override public float getAttackDamageBonus(Entity target, float damage, DamageSource source) ` | ` (!(source.getDirectEntity() instanceof LivingEntity entity)) ` 成立时提前返回 ` 0.0F `<br>` (!MaceItem.canSmashAttack(entity) \|\| isTooDamagedToUse(entity.getMainHandItem())) ` 成立时提前返回 ` 0.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L444) |
| ` @Override public Projectile asProjectile(Level level, Position pos, ItemStack stack, Direction direction) ` | 末尾返回 ` thrown ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L467) |
| ` public abstract ThrownHeavyHalberdEntity createThrown(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | [调用处 HeavyHalberdItem.releaseUsing](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L304) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L476) |
| ` public abstract ThrownHeavyHalberdEntity createThrown(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | [调用处 HeavyHalberdItem.asProjectile](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L469) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L478) |
| ` @Override public boolean canPerformAction(ItemStack stack, ItemAbility itemAbility) ` | ` (isTooDamagedToUse(stack)) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L480) |

## HeavyHalberdItem.HeavyHalberdHolder

` public static class HeavyHalberdHolder extends Holder.Reference<Item> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L491)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyHalberdHolder(Holder.Reference.Type type, HolderOwner<Item> owner, ResourceKey<Item> key, Item value) ` | 执行 ` super(type, owner, key, value) `<br>[调用处 HolderReferenceMixin.createModeSpecificItemHolder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/HolderReferenceMixin.java#L36) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L492) |
| ` public boolean is(int mode, TagKey<Item> tagKey) ` | 末尾返回 ` isModeEnabled(mode, tagKey) && super.is(tagKey) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L496) |
| ` public boolean is(int mode, HolderSet<Item> holders) ` | ` (holders instanceof HolderSet.Named<Item> named) ` 成立时提前返回 ` isModeEnabled(mode, named.key()) && holders.contains(this) `<br>末尾返回 ` holders.contains(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L500) |

## HyperdimensionTerminalItem

` public class HyperdimensionTerminalItem extends TerminalItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HyperdimensionTerminalItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L23) |
| ` @Override public void openStorage(Player player, ItemStack stack) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` HyperdimensionTerminalItem.openBoundStorage(player, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L37) |
| ` @Override public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, tooltipFlag) `<br>实现调用 ` stack.get(ModComponents.TERMINAL_BINDING) `<br>实现调用 ` binding.id().isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L43) |
| ` public static void bindToStation(ServerPlayer player, ItemStack stack, StorageBlockEntity entity) ` | 实现调用 ` stack.get(ModComponents.TERMINAL_BINDING) `<br>实现调用 ` binding.id().isPresent() `<br>实现调用 ` binding.id() `<br>[调用处 HyperdimensionStorageStationBlock.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L167) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L54) |
| ` public static void openBoundStorage(Player player, ItemStack stack) ` | 实现调用 ` player.level() `<br>实现调用 ` stack.get(ModComponents.TERMINAL_BINDING) `<br>实现调用 ` binding.id().isEmpty() `<br>[调用处 HyperdimensionStorageStationBlock.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L171) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HyperdimensionTerminalItem.java#L70) |

## IInventoryCarriedAware

` public interface IInventoryCarriedAware `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IInventoryCarriedAware.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onCarriedUpdate(ItemStack itemStack, ServerPlayer serverPlayer) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IInventoryCarriedAware.java#L7) |

## IonocraftBackpackItem

` public class IonocraftBackpackItem extends EquipmentArmorItem implements IInventoryCarriedAware `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DynamicPowerComponent.PowerConsumption FLIGHT_POWER ` | 初值 ` new DynamicPowerComponent.PowerConsumption(8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L29) |
| ` public static final ResourceLocation TEXTURE ` | 初值 ` AnvilCraft.of("textures/entity/equipment/spacesuit.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L35) |
| ` public static final ResourceLocation TEXTURE_OFF ` | 初值 ` AnvilCraft.of("textures/entity/equipment/spacesuit_off.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L36) |
| ` public static final ResourceLocation CREATIVE_FLIGHT_ID ` | 初值 ` AnvilCraft.of("creative_flight") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L38) |
| ` public static final AttributeModifier CREATIVE_FLIGHT ` | 初值 ` new AttributeModifier( CREATIVE_FLIGHT_ID, 1, AttributeModifier.Operation.ADD_VALUE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L39) |
| ` public IonocraftBackpackItem(Properties properties) ` | 执行 ` this(properties, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L48) |
| ` @Override public EquipmentSlot getEquipmentSlot() ` | 末尾返回 ` EquipmentSlot.CHEST ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L57) |
| ` @Override public boolean canEquip(ItemStack stack, EquipmentSlot armorType, LivingEntity entity) ` | 末尾返回 ` armorType == EquipmentSlot.CHEST ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L62) |
| ` @Override public ResourceLocation getArmorTexture( ItemStack stack, Entity entity, EquipmentSlot slot, ArmorMaterial.Layer layer, boolean innerModel) ` | ` (this.isWeatherproof()) ` 成立时提前返回 ` WeatherproofChestplateItem.getEnergyStored(stack) > 0 ? AnvilCraft.of("textures/entity/equipment/weatherproof_spacesuit.png") : AnvilCraft.of("textures/entity/equipment/weatherproof_spacesuit_off.png") `<br>末尾返回 ` entity.getData(ModDataAttachments.IN_POWER_GRID) ? TEXTURE : TEXTURE_OFF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L67) |
| ` public static boolean hasGridFlight(LivingEntity entity) ` | 末尾返回 ` instance != null && instance.hasModifier(CREATIVE_FLIGHT_ID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L78) |
| ` public static boolean isSlowFalling(Player player) ` | 末尾返回 ` gravity != null && gravity.hasModifier(SLOW_FALLING_ID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L83) |
| ` public static boolean protectsFromFalling(Player player) ` | ` (player.isCreative() \|\| player.isSpectator() \|\| player.getAbilities().flying) ` 成立时提前返回 ` true `<br>末尾返回 ` flight == null \|\| !flight.hasModifier(CREATIVE_FLIGHT_ID) \|\| flight.getBaseValue() > 0 \|\| flight.getModifiers().size() > 1 `<br>[调用处 PlayerMixin.anvilcraft$backpackRequiresActiveFlight](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PlayerMixin.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L88) |
| ` public static void applySlowFalling(Player player) ` | 实现调用 ` isSlowFalling(player) `<br>实现调用 ` player.onGround() `<br>实现调用 ` player.isCreative() `<br>[调用处 PlayerTickEventHandler.onPlayerTickPre](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L95) |
| ` public static ItemStack getByPlayer(Player player) ` | 末尾返回 ` stack.getItem() instanceof IonocraftBackpackItem ? stack : ItemStack.EMPTY `<br>[调用处 IonocraftBackpackClientHandler.onClientTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/IonocraftBackpackClientHandler.java#L104) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L103) |
| ` public static void refreshPower(ServerPlayer player) ` | 实现调用 ` IDynamicPowerComponentHolder.of(player).anvilcraft$getPowerComponent() `<br>实现调用 ` IDynamicPowerComponentHolder.of(player) `<br>实现调用 ` getByPlayer(player).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L108) |
| ` public static void refreshFlight(ServerPlayer player) ` | 实现调用 ` player.getAttribute(NeoForgeMod.CREATIVE_FLIGHT) `<br>实现调用 ` player.getAttribute(Attributes.GRAVITY) `<br>实现调用 ` getByPlayer(player).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L119) |
| ` public static void toggleSlowFalling(ServerPlayer player) ` | 实现调用 ` refreshFlight(player) `<br>实现调用 ` player.getData(ModDataAttachments.IONOCRAFT_DESCENT_AVAILABLE) `<br>实现调用 ` player.getAttribute(Attributes.GRAVITY) `<br>[调用处 IonocraftBackpackToggleDescentPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackToggleDescentPacket.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L169) |
| ` public static void playerTick(ServerPlayer player) ` | 实现调用 ` WeatherproofChestplateItem.tickEnergy(player) `<br>实现调用 ` refreshPower(player) `<br>实现调用 ` refreshFlight(player) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L182) |
| ` @Override public void onCarriedUpdate(ItemStack itemStack, ServerPlayer serverPlayer) ` | 实现调用 ` refreshPower(serverPlayer) `<br>实现调用 ` refreshFlight(serverPlayer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L205) |

## IonocraftItem

` public class IonocraftItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftItem.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IonocraftItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftItem.java#L25) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) ` | ` (hitresult.getType() == HitResult.Type.MISS) ` 成立时提前返回 ` InteractionResultHolder.pass(itemstack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftItem.java#L29) |

## LocalTerminalItem

` public class LocalTerminalItem extends TerminalItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/LocalTerminalItem.java#L15)

本地终端：不可绑定储存方块，使用时自动连接玩家 32 格以内的一个最近的大型板条箱， 其余功能（终端界面、超级收纳袋、JEI 补库、物品均衡）与超维终端一致。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LocalTerminalItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/LocalTerminalItem.java#L16) |
| ` @Override public void openStorage(Player player, ItemStack stack) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` StorageTerminalClientStub.openRemote(StorageTerminalClientStub.localTerminalId()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/LocalTerminalItem.java#L20) |

## MagnetItem

` public class MagnetItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MagnetItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MagnetItem(Properties properties) ` | 执行 ` super(properties) `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L165) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MagnetItem.java#L17) |
| ` @Override public InteractionResultHolder<ItemStack> use( Level level, Player player, InteractionHand usedHand ) ` | 末尾返回 ` magnetizeItems(this, level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MagnetItem.java#L21) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` placeMagnetizedNode(this, context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MagnetItem.java#L30) |
| ` @Override public boolean isValidRepairItem(ItemStack stack, ItemStack repairCandidate) ` | 末尾返回 ` repairCandidate.is(ModItems.MAGNET_INGOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MagnetItem.java#L35) |
| ` @Override public int getEnchantmentValue(ItemStack stack) ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MagnetItem.java#L40) |

## ModFoods

` public class ModFoods `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FoodProperties CHOCOLATE ` | 初值 ` ModFoods.builder() .nutrition(2) .saturationModifier(4.0f) .alwaysEdible() .fast() .effect(() -> new MobEffectInstance(MobEffects.MOVEMENT_SPEED, 600, 3), 1.0f) .build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L9) |
| ` public static final FoodProperties BLACK_CHOCOLATE ` | 由 ` ModFoods.builder() .nutrition(2) .saturationModifier(2.0f) .alwaysEdible() .fast() .effect(() -> new MobEffectInstance(MobEffects.MOVEMENT_SPEED, 600, 1), 1.0f) .effect(() -> new MobEffectInstance(MobEffects.DIG_SPEED, 600, 2), 1.0f) .build ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L16) |
| ` @Deprecated(forRemoval = true) public static final FoodProperties CHOCOLATE_BLACK ` | 初值 ` ModFoods.BLACK_CHOCOLATE ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L24) |
| ` public static final FoodProperties WHITE_CHOCOLATE ` | 由 ` ModFoods.builder() .nutrition(2) .saturationModifier(2.0f) .alwaysEdible() .fast() .effect(() -> new MobEffectInstance(MobEffects.MOVEMENT_SPEED, 600, 1), 1.0f) .effect(() -> new MobEffectInstance(MobEffects.JUMP, 600, 3), 1.0f) .build ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L26) |
| ` @Deprecated(forRemoval = true) public static final FoodProperties CHOCOLATE_WHITE ` | 初值 ` ModFoods.WHITE_CHOCOLATE ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L34) |
| ` public static final FoodProperties CREAMY_BREAD_ROLL ` | 初值 ` ModFoods.builder() .nutrition(8) .saturationModifier(0.5f) .build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L36) |
| ` public static final FoodProperties BEEF_MUSHROOM_STEW ` | 初值 ` ModFoods.builder() .nutrition(10) .saturationModifier(0.8f) .usingConvertsTo(Items.BOWL) .build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L40) |
| ` public static final FoodProperties CURSED_GOLDEN_APPLE ` | 初值 ` ModFoods.builder() .nutrition(4) .saturationModifier(0.3f) .alwaysEdible() .build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L45) |
| ` public ModFoods() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModFoods.java#L8) |

## ModTiers

` public enum ModTiers implements Tier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` AMETHYST ` | 声明于枚举 ` ModTiers ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L17) |
| ` ROYAL ` | 声明于枚举 ` ModTiers ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L25) |
| ` FROST_METAL ` | 声明于枚举 ` ModTiers ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L33) |
| ` EMBER_METAL ` | 声明于枚举 ` ModTiers ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L41) |
| ` TRANSCENDIUM ` | 声明于枚举 ` ModTiers ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L49) |
| ` @Override public int getUses() ` | 末尾返回 ` this.uses ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L82) |
| ` @Override public float getSpeed() ` | 末尾返回 ` this.speed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L87) |
| ` @Override public float getAttackDamageBonus() ` | 末尾返回 ` this.damage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L92) |
| ` @Override public TagKey<Block> getIncorrectBlocksForDrops() ` | 末尾返回 ` this.incorrectBlockTags ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L97) |
| ` @Override public int getEnchantmentValue() ` | 末尾返回 ` this.enchantmentValue ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L102) |
| ` @Override public Ingredient getRepairIngredient() ` | 末尾返回 ` this.repairIngredient.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L107) |
| ` public static ModTiers[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L16) |
| ` public static ModTiers valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ModTiers.java#L16) |

## MultiphaseMatterItem

` public class MultiphaseMatterItem extends Item implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultiphaseMatterItem.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiphaseMatterItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultiphaseMatterItem.java#L31) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` EMBER_MISSING_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultiphaseMatterItem.java#L35) |
| ` @Override public List<ResourceLocation> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultiphaseMatterItem.java#L40) |

## MultiphaseTranscendiumItem

` public class MultiphaseTranscendiumItem extends Item implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultiphaseTranscendiumItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiphaseTranscendiumItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.ETERNAL, Eternal.INSTANCE) .component(DataComponents.UNBREAKABLE, new Unbreakable(true))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultiphaseTranscendiumItem.java#L35) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` switch (tool) { case DEFAULT -> MISSING_TOOLS_TOOLTIP; case TRUE -> RESONATOR_MISSING_TOOLS_TOOLTIP; case FALSE -> HEAVY_HALBERD_MISSING_TOOLS_TOOLTIP; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultiphaseTranscendiumItem.java#L40) |
| ` @Override public List<ResourceLocation> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` ListUtil.cycle(EMPTY_SLOT_TEXTURES, id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultiphaseTranscendiumItem.java#L60) |
