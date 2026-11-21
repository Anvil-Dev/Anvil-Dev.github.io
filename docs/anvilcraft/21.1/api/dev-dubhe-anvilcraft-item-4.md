# dev.dubhe.anvilcraft.item（MultitoolItem 至 SingularityCrystalItem）



## MultitoolItem

` public class MultitoolItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L57)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int ALL_MODE ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L58) |
| ` public static final int SHEARS_MODE ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L59) |
| ` public static final int FLINT_AND_STEEL_MODE ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L60) |
| ` public static final int BRUSH_MODE ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L61) |
| ` public static final int SPYGLASS_MODE ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L62) |
| ` public static final int MAGNET_MODE ` | 初值 ` 5 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L63) |
| ` public static final int FISHING_ROD_MODE ` | 初值 ` 6 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L64) |
| ` public static final int CARROT_ON_A_STICK_MODE ` | 初值 ` 7 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L65) |
| ` public static final int WARPED_FUNGUS_ON_A_STICK_MODE ` | 初值 ` 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L66) |
| ` public MultitoolItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L68) |
| ` @Override @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 实现调用 ` ResourceLocation.withDefaultNamespace("cast") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L72) |
| ` @Override public void releaseUsing(ItemStack stack, Level level, LivingEntity livingEntity, int timeCharged) ` | 实现调用 ` MultitoolItem.getMode(stack) `<br>分支 ` (MultitoolItem.getMode(stack) == SPYGLASS_MODE) ` 内调用 ` this.stopUsing(livingEntity) `<br>分支 ` !(MultitoolItem.getMode(stack) == SPYGLASS_MODE) ` 内调用 ` super.releaseUsing(stack, level, livingEntity, timeCharged) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L92) |
| ` @Override public ItemStack finishUsingItem(ItemStack stack, Level level, LivingEntity livingEntity) ` | 实现调用 ` MultitoolItem.getMode(stack) `<br>分支 ` (MultitoolItem.getMode(stack) == SPYGLASS_MODE) ` 内调用 ` this.stopUsing(livingEntity) `<br>分支 ` !(MultitoolItem.getMode(stack) == SPYGLASS_MODE) ` 内调用 ` super.finishUsingItem(stack, level, livingEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L101) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 实现调用 ` MultitoolItem.getMode(player.getItemInHand(usedHand)) `<br>实现调用 ` player.getItemInHand(usedHand) `<br>实现调用 ` player.playSound(SoundEvents.SPYGLASS_USE, 1.0F, 1.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L111) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 实现调用 ` context.getItemInHand().getOrDefault(DataComponents.CUSTOM_MODEL_DATA, CustomModelData.DEFAULT).value() `<br>实现调用 ` context.getItemInHand().getOrDefault(DataComponents.CUSTOM_MODEL_DATA, CustomModelData.DEFAULT) `<br>实现调用 ` context.getItemInHand() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L131) |
| ` @Override public boolean canPerformAction(ItemStack stack, ItemAbility itemAbility) ` | 实现调用 ` MultitoolItem.getMode(stack) `<br>实现调用 ` ItemAbilities.DEFAULT_SHEARS_ACTIONS.contains(itemAbility) `<br>实现调用 ` ItemAbilities.DEFAULT_FLINT_ACTIONS.contains(itemAbility) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L142) |
| ` @Override public UseAnim getUseAnimation(ItemStack stack) ` | 末尾返回 ` switch (MultitoolItem.getMode(stack)) { case BRUSH_MODE -> UseAnim.BRUSH; case SPYGLASS_MODE -> UseAnim.SPYGLASS; default -> super.getUseAnimation(stack); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L153) |
| ` @Override public int getUseDuration(ItemStack stack, LivingEntity entity) ` | 末尾返回 ` switch (MultitoolItem.getMode(stack)) { case BRUSH_MODE -> Items.BRUSH.getUseDuration(stack, entity); case SPYGLASS_MODE -> 1200; default -> super.getUseDuration(stack, entity); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L162) |
| ` @Override public void onUseTick(Level level, LivingEntity livingEntity, ItemStack stack, int remainingUseDuration) ` | 实现调用 ` MultitoolItem.getMode(stack) `<br>分支 ` (MultitoolItem.getMode(stack) == BRUSH_MODE) ` 内调用 ` Items.BRUSH.onUseTick(level, livingEntity, stack, remainingUseDuration) `<br>分支 ` !(MultitoolItem.getMode(stack) == BRUSH_MODE) ` 内调用 ` super.onUseTick(level, livingEntity, stack, remainingUseDuration) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L171) |
| ` @Override public boolean mineBlock(ItemStack stack, Level level, BlockState state, BlockPos pos, LivingEntity miningEntity) ` | ` (MultitoolItem.getMode(stack) == SHEARS_MODE) ` 成立时提前返回 ` this.mineBlockAsShears(stack, level, state, miningEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L180) |
| ` @Override public InteractionResult interactLivingEntity( ItemStack stack, Player player, LivingEntity interactionTarget, InteractionHand usedHand ) ` | ` (MultitoolItem.getMode(stack) == SHEARS_MODE) ` 成立时提前返回 ` this.interactLivingEntityAsShears(stack, player, interactionTarget, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L189) |
| ` @Override public int getEnchantmentValue(ItemStack stack) ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L203) |
| ` public InteractionResult useOnAsShears(UseOnContext context) ` | 实现调用 ` context.getLevel() `<br>实现调用 ` context.getClickedPos() `<br>实现调用 ` level.getBlockState(blockpos) `<br>[调用处 MultitoolItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L134) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L290) |
| ` public InteractionResult useOnAsFlintAndSteel(UseOnContext context) ` | 实现调用 ` context.getPlayer() `<br>实现调用 ` context.getLevel() `<br>实现调用 ` context.getClickedPos() `<br>[调用处 MultitoolItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L135) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L313) |
| ` public InteractionResult useOnAsBrush(UseOnContext context) ` | 末尾返回 ` Items.BRUSH.useOn(context) `<br>[调用处 MultitoolItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L136) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L362) |
| ` public InteractionResult useOnAsMagnet(UseOnContext context) ` | 末尾返回 ` MagnetUtil.placeMagnetizedNode(this, context) `<br>[调用处 MultitoolItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L137) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L366) |
| ` public static int getMode(ItemStack item) ` | 末尾返回 ` Math.clamp(item.getOrDefault(DataComponents.CUSTOM_MODEL_DATA, CustomModelData.DEFAULT).value(), 0, 8) `<br>[调用处 GunpowderBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GunpowderBlock.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L414) |
| ` public static void setMode(Player player, InteractionHand hand, @Range(from = 0, to = 8) int mode) ` | 实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` item.is(ModItems.MULTITOOL_ITEM) `<br>实现调用 ` item.remove(DataComponents.TOOL) `<br>[调用处 SwitchMultitoolModePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchMultitoolModePacket.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L418) |

## MultitoolItem.MultitoolHolder

` public static class MultitoolHolder extends Holder.Reference<Item> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L434)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultitoolHolder(Type type, HolderOwner<Item> owner, @Nullable ResourceKey<Item> key, @Nullable Item value) ` | 执行 ` super(type, owner, key, value) `<br>[调用处 HolderReferenceMixin.createModeSpecificItemHolder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/HolderReferenceMixin.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L435) |
| ` public boolean is(int mode, TagKey<Item> tagKey) ` | 实现调用 ` tag.equals(Tags.Items.TOOLS_SHEAR) `<br>实现调用 ` super.is(tag) `<br>实现调用 ` tag.equals(ItemTags.CREEPER_IGNITERS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L439) |
| ` public boolean is(int mode, HolderSet<Item> holders) ` | 实现调用 ` holderSet.key().equals(Tags.Items.TOOLS_SHEAR) `<br>实现调用 ` holderSet.key() `<br>实现调用 ` holderSet.contains(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L452) |

## PillBoxItem

` public class PillBoxItem extends BundleLikeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillBoxItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PillBoxItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.PILL_BOX_CONTENTS, PillBoxContents.EMPTY)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillBoxItem.java#L13) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` use(itemStack, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillBoxItem.java#L47) |
| ` public static InteractionResultHolder<ItemStack> use(ItemStack pillBox, Player player) ` | ` (!pillBox.is(ModItems.PILL_BOX)) ` 成立时提前返回 ` InteractionResultHolder.pass(pillBox) `<br>` (contents.pills().isEmpty()) ` 成立时提前返回 ` InteractionResultHolder.pass(pillBox) `<br>末尾返回 ` InteractionResultHolder.success(pillBox) `<br>[调用处 UsePillBoxPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/UsePillBoxPacket.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillBoxItem.java#L53) |

## PillItem

` public class PillItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PillItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillItem.java#L20) |
| ` @Override public ItemStack getDefaultInstance() ` | 末尾返回 ` itemStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillItem.java#L24) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillItem.java#L31) |
| ` public static void use(ItemStack itemStack, Player player) ` | 实现调用 ` itemStack.getOrDefault(DataComponents.POTION_CONTENTS, PotionContents.EMPTY) `<br>实现调用 ` itemStack.getOrDefault(ModComponents.WEAKENING, false) `<br>[调用处 PillBoxContents.Mutable.useAll](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillItem.java#L43) |
| ` @Override public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` stack.getOrDefault(DataComponents.POTION_CONTENTS, PotionContents.EMPTY) `<br>实现调用 ` stack.getOrDefault(ModComponents.WEAKENING, false) `<br>实现调用 ` potionContents.potion().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/PillItem.java#L64) |

## RecoveryPearl

` public class RecoveryPearl extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RecoveryPearl.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RecoveryPearl(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RecoveryPearl.java#L20) |
| ` @SuppressWarnings({"DataFlowIssue"}) @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` InteractionResultHolder.sidedSuccess(itemStack, level.isClientSide()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RecoveryPearl.java#L24) |
| ` public static void crossDimensionTeleportTo(ResourceKey<Level> dimension, Player player, BlockPos pos) ` | 实现调用 ` player.level() `<br>实现调用 ` level.getServer() `<br>分支 ` (server != null) ` 内调用 ` server.getLevel(dimension) `<br>[调用处 TotemOfRecoveryHandler.execute](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRecoveryHandler.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RecoveryPearl.java#L67) |

## ResonatorCoreItem

` public class ResonatorCoreItem extends Item implements IMultipleMaterial `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorCoreItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResonatorCoreItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorCoreItem.java#L31) |
| ` @Override public Component getInputTooltip(ItemStack template, List<ItemStack> inputs) ` | 末尾返回 ` MISSING_TOOLS_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorCoreItem.java#L35) |
| ` @Override public List<ResourceLocation> getEmptySlotTextures(ItemStack template, int id, List<ItemStack> inputs) ` | 末尾返回 ` textures ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorCoreItem.java#L40) |

## ResonatorItem

` public abstract class ResonatorItem extends TieredItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L74)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int AUTO_MODE ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L75) |
| ` public static final int AXE_MODE ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L76) |
| ` public static final int SHOVEL_MODE ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L77) |
| ` public static final int HOE_MODE ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L78) |
| ` public static final int PICKAXE_MODE ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L79) |
| ` public ResonatorItem(Tier tier, Properties properties) ` | 执行 ` super( tier, properties.component(DataComponents.TOOL, createToolProperties(tier)) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L85) |
| ` @Override @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L92) |
| ` public static ItemAttributeModifiers createAttributes(Tier tier, float attackDamage, float attackSpeed) ` | 实现调用 ` ItemAttributeModifiers.builder() `<br>实现调用 ` tier.getAttackDamageBonus() `<br>[调用处 EmberMetalResonatorItem.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalResonatorItem.java#L11) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L119) |
| ` public static Tool createToolProperties(Tier tier) ` | 末尾返回 ` new Tool(List.copyOf(rules), tier.getSpeed(), 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L135) |
| ` public static Tool createToolProperties(@Range(from = 0, to = 4) int mode, Tier tier) ` | 实现调用 ` createToolProperties(tier) `<br>实现调用 ` List.of(Tool.Rule.minesAndDrops(BlockTags.MINEABLE_WITH_AXE, tier.getSpeed())) `<br>实现调用 ` Tool.Rule.minesAndDrops(BlockTags.MINEABLE_WITH_AXE, tier.getSpeed()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L147) |
| ` public static int getMode(ItemStack stack) ` | 末尾返回 ` Math.clamp(stack.getOrDefault(DataComponents.CUSTOM_MODEL_DATA, CustomModelData.DEFAULT).value(), 0, 4) `<br>[调用处 ResonanceMiningClientEventListener.suppressAirUse](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ResonanceMiningClientEventListener.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L162) |
| ` @Override public <T extends LivingEntity> int damageItem(ItemStack stack, int amount, @Nullable T entity, Consumer<Item> onBroken) ` | ` (isTooDamagedToUse(stack)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` super.damageItem(stack, amount, entity, onBroken) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L166) |
| ` @Override public void setDamage(ItemStack stack, int damage) ` | 实现调用 ` super.setDamage(stack, Math.min(damage, stack.getMaxDamage() - 1)) `<br>实现调用 ` Math.min(damage, stack.getMaxDamage() - 1) `<br>实现调用 ` stack.getMaxDamage() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L172) |
| ` public static void checkTooDamaged(Tier tier, ItemStack stack) ` | 实现调用 ` stack.getItem() `<br>实现调用 ` isTooDamagedToUse(stack) `<br>分支 ` (isTooDamagedToUse(stack)) ` 内调用 ` stack.has(DataComponents.ENCHANTMENTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L178) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` stack.has(DataComponents.UNBREAKABLE) `<br>分支 ` (!stack.has(DataComponents.UNBREAKABLE)) ` 内调用 ` checkTooDamaged(this.getTier(), stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L258) |
| ` public float getDestroySpeed(ItemStack stack, BlockState state) ` | ` (isTooDamagedToUse(stack)) ` 成立时提前返回 ` 1.0f `<br>末尾返回 ` tool != null ? tool.getMiningSpeed(state) : this.getTier().getSpeed() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L264) |
| ` @Override public boolean hurtEnemy(ItemStack stack, LivingEntity target, LivingEntity attacker) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L270) |
| ` @Override public void postHurtEnemy(ItemStack stack, LivingEntity target, LivingEntity attacker) ` | 执行 ` stack.hurtAndBreak(2, attacker, EquipmentSlot.MAINHAND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L275) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | ` (getMode(stack) == AUTO_MODE && this.canStartResonanceMining(stack)) ` 成立时提前返回 ` InteractionResultHolder.pass(stack) `<br>末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L290) |
| ` @Override public InteractionResult onItemUseFirst(ItemStack stack, UseOnContext context) ` | ` (getMode(stack) != AUTO_MODE \|\| !this.canStartResonanceMining(stack)) ` 成立时提前返回 ` super.onItemUseFirst(stack, context) `<br>末尾返回 ` this.startResonanceMining(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L299) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 实现调用 ` context.getItemInHand() `<br>实现调用 ` ResonatorItem.getMode(stack) `<br>实现调用 ` this.canStartResonanceMining(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L307) |
| ` @Override public int getUseDuration(ItemStack stack, LivingEntity entity) ` | 末尾返回 ` getMode(stack) == AUTO_MODE ? USE_DURATION : super.getUseDuration(stack, entity) `<br>[调用处 ResonatorItem.onUseTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L386) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L346) |
| ` @Override public UseAnim getUseAnimation(ItemStack stack) ` | 末尾返回 ` getMode(stack) == AUTO_MODE ? UseAnim.CROSSBOW : UseAnim.NONE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L351) |
| ` public static float resonanceMiningProgress(Level level, Player player, float partialTick) ` | ` (!(player.getUseItem().getItem() instanceof ResonatorItem resonator)) ` 成立时提前返回 ` -1.0F `<br>` (!resonator.miningTargets(level).containsKey(player)) ` 成立时提前返回 ` -1.0F `<br>末尾返回 ` Math.min(1.0F, (elapsedTicks + partialTick) / resonator.resonanceMiningTicks()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L356) |
| ` @Override public void onUseTick(Level level, LivingEntity livingEntity, ItemStack stack, int remainingUseDuration) ` | 实现调用 ` this.miningTargets(level) `<br>实现调用 ` targets.get(livingEntity) `<br>分支 ` (!level.isClientSide) ` 内调用 ` livingEntity.stopUsingItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L365) |
| ` @Override public void releaseUsing(ItemStack stack, Level level, LivingEntity livingEntity, int remainingUseDuration) ` | 实现调用 ` this.miningTargets(level).remove(livingEntity) `<br>实现调用 ` this.miningTargets(level) `<br>实现调用 ` sendMiningEffects(level, target.effectPositions(), 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L408) |
| ` public static boolean isResonanceMining(Level level, Player player, BlockPos pos) ` | ` (!(player.getUseItem().getItem() instanceof ResonatorItem resonator)) ` 成立时提前返回 ` false `<br>末尾返回 ` target != null && target.hitPos().equals(pos) `<br>[调用处 BreakBlockEventListener.preventInfiniteFluidTankBreak](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L440) |
| ` public InteractionResult useOnAsAxe(UseOnContext context) ` | ` (player == null) ` 成立时提前返回 ` InteractionResult.PASS `<br>` ( context.getHand().equals(InteractionHand.MAIN_HAND) && player.getOffhandItem().is(Items.SHIELD) && !player.isSecondaryUseActive() ) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (optional.isEmpty()) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.sidedSuccess(level.isClientSide) `<br>[调用处 ResonatorItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L315) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L501) |
| ` public InteractionResult useOnAsShovel(UseOnContext context) ` | ` (context.getClickedFace() == Direction.DOWN) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (optional.isEmpty()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.sidedSuccess(true) `<br>末尾返回 ` InteractionResult.sidedSuccess(false) `<br>[调用处 ResonatorItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L316) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L550) |
| ` public InteractionResult useOnAsHoe(UseOnContext context) ` | ` (contextConsumer == null) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.sidedSuccess(true) `<br>末尾返回 ` InteractionResult.sidedSuccess(false) `<br>[调用处 ResonatorItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L317) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L590) |
| ` @SuppressWarnings("unused") public InteractionResult useOnAsPickaxe(UseOnContext context) ` | 末尾返回 ` InteractionResult.PASS `<br>[调用处 ResonatorItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L318) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L609) |
| ` public static void setMode(Player player, InteractionHand hand, @Range(from = 0, to = 4) int mode) ` | 实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` resonator.is(ModItemTags.RESONATOR) `<br>实现调用 ` resonator.getItem() `<br>[调用处 SwitchResonateModePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SwitchResonateModePacket.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L614) |
| ` @Override public boolean canPerformAction(ItemStack stack, ItemAbility itemAbility) ` | ` (isTooDamagedToUse(stack)) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L623) |

## ResonatorItem.ResonatorHolder

` public static class ResonatorHolder extends Holder.Reference<Item> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L645)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ResonatorHolder(Holder.Reference.Type type, HolderOwner<Item> owner, ResourceKey<Item> key, Item value) ` | 执行 ` super(type, owner, key, value) `<br>[调用处 HolderReferenceMixin.createModeSpecificItemHolder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/HolderReferenceMixin.java#L44) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L646) |
| ` public boolean is(int mode, TagKey<Item> tagKey) ` | ` (mode == AUTO_MODE) ` 成立时提前返回 ` super.is(tagKey) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L650) |
| ` public boolean is(int mode, HolderSet<Item> holders) ` | ` (mode == AUTO_MODE) ` 成立时提前返回 ` holders.contains(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L661) |

## RoyalAnvilHammerItem

` public class RoyalAnvilHammerItem extends AnvilHammerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalAnvilHammerItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalAnvilHammerItem(Properties properties) ` | 初始化铁砧锤<br>参数 ` properties ` 物品属性<br>执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalAnvilHammerItem.java#L14) |
| ` @Override public boolean isValidRepairItem(ItemStack stack, ItemStack repairCandidate) ` | 末尾返回 ` repairCandidate.is(ModItems.ROYAL_STEEL_INGOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalAnvilHammerItem.java#L18) |
| ` @Override public Block getAnvil() ` | 末尾返回 ` ModBlocks.ROYAL_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalAnvilHammerItem.java#L28) |

## RoyalAxeItem

` public class RoyalAxeItem extends AxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalAxeItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalAxeItem(Properties properties) ` | 执行 ` super( ModTiers.ROYAL, properties.attributes(AxeItem.createAttributes(ModTiers.ROYAL, 5, -3.0f)) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalAxeItem.java#L6) |

## RoyalHoeItem

` public class RoyalHoeItem extends HoeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalHoeItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalHoeItem(Properties properties) ` | 执行 ` super( ModTiers.ROYAL, properties.attributes(HoeItem.createAttributes(ModTiers.ROYAL, -3, 0)) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalHoeItem.java#L6) |

## RoyalPickaxeItem

` public class RoyalPickaxeItem extends PickaxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalPickaxeItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalPickaxeItem(Properties properties) ` | 执行 ` super( ModTiers.ROYAL, properties.attributes(PickaxeItem.createAttributes(ModTiers.ROYAL, 1, -2.8f)) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalPickaxeItem.java#L6) |

## RoyalShovelItem

` public class RoyalShovelItem extends ShovelItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalShovelItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalShovelItem(Properties properties) ` | 执行 ` super( ModTiers.ROYAL, properties.attributes(ShovelItem.createAttributes(ModTiers.ROYAL, 1.5f, -3.0f)) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalShovelItem.java#L6) |

## RoyalSteelIngotItem

` public class RoyalSteelIngotItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalSteelIngotItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalSteelIngotItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalSteelIngotItem.java#L6) |

## RoyalSwordItem

` public class RoyalSwordItem extends SwordItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalSwordItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RoyalSwordItem(Properties properties) ` | 执行 ` super( ModTiers.ROYAL, properties.attributes(SwordItem.createAttributes(ModTiers.ROYAL, 3, -2.4f)) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RoyalSwordItem.java#L6) |

## RubyItem

` public class RubyItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RubyItem.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RubyItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RubyItem.java#L22) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` InteractionResult.FAIL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RubyItem.java#L26) |
| ` public boolean applyEffect(Level level, BlockPos pos) ` | ` (!level.getBlockState(pos).is(Blocks.STONE)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 RubyItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RubyItem.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/RubyItem.java#L44) |

## SapphireItem

` public class SapphireItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SapphireItem.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SapphireItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SapphireItem.java#L28) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) ` | ` (!this.applyEffect(level, playerPos)) ` 成立时提前返回 ` InteractionResultHolder.fail(itemInHand) `<br>` (player.getAbilities().instabuild) ` 成立时提前返回 ` InteractionResultHolder.success(itemInHand) `<br>末尾返回 ` InteractionResultHolder.success(itemInHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SapphireItem.java#L32) |
| ` public boolean applyEffect(Level level, BlockPos pos) ` | 末尾返回 ` false `<br>[调用处 SapphireItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SapphireItem.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SapphireItem.java#L51) |

## SeedsPackItem

` public class SeedsPackItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SeedsPackItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SeedsPackItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SeedsPackItem.java#L18) |
| ` @Override public InteractionResultHolder<ItemStack> use( Level level, Player player, InteractionHand usedHand ) ` | ` (this.items.isEmpty()) ` 成立时提前返回 ` InteractionResultHolder.fail(stack) `<br>末尾返回 ` InteractionResultHolder.consume(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SeedsPackItem.java#L25) |

## ShulkerTerminalItem

` public class ShulkerTerminalItem extends TerminalItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ShulkerTerminalItem.java#L18)

潜影终端：不可绑定储存方块，使用时按优先级自动连接 玩家身上槽位最靠前的潜影集装箱（未绑定 UUID 时惰性授予）， 或 64 格以内的一个最近的世界潜影集装箱；其余功能与超维终端一致。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ShulkerTerminalItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ShulkerTerminalItem.java#L19) |
| ` @Override public void openStorage(Player player, ItemStack stack) ` | 实现调用 ` player.level().isClientSide() `<br>实现调用 ` player.level() `<br>实现调用 ` StorageTerminalClientStub.openRemote(StorageTerminalClientStub.shulkerTerminalId()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ShulkerTerminalItem.java#L33) |

## SingularityCrystalItem

` public class SingularityCrystalItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L20)

Singularity crystal item that stores extreme celestial body snapshots. Shows enchantment glint when data is stored. Shift-right-click in air clears stored data like a disk.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SingularityCrystalItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L24) |
| ` public static boolean hasDataStored(ItemStack stack) ` | 末尾返回 ` CelestialForgingAnvilBlockEntity.loadSnapshotFromStack(stack) != null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L28) |
| ` public static void deleteData(ItemStack stack) ` | 实现调用 ` stack.getOrDefault(DataComponents.CUSTOM_DATA, CustomData.EMPTY) `<br>实现调用 ` customData.copyTag() `<br>实现调用 ` tag.remove(SNAPSHOT_KEY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L32) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` hasDataStored(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L43) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SingularityCrystalItem.java#L48) |
