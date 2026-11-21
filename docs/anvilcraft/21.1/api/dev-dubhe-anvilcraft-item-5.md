# dev.dubhe.anvilcraft.item（SpectralSlingshotItem 至 WeatherproofChestplateItem）



## SpectralSlingshotItem

` public class SpectralSlingshotItem extends ProjectileWeaponItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L57)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpectralSlingshotItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L74) |
| ` @Override public Predicate<ItemStack> getAllSupportedProjectiles() ` | 末尾返回 ` itemStack -> true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L78) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings({"removal"}) public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(SpectralSlingshotRenderer.SpectralSlingshotExtensions.of(SpectralSlingshotRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L84) |
| ` public boolean checkLoadable(ItemStack weapon, ItemStack stack) ` | 检查物品是否可以被装载（用于判断箭矢或具有攻击伤害的物品）<br>参数 ` weapon ` 将要装载的武器物品堆<br>参数 ` stack ` 要检查的物品堆<br>返回 如果物品是箭矢或具有正攻击伤害属性则返回true，否则返回false<br>` (this.unableToUse(weapon)) ` 成立时提前返回 ` false `<br>末尾返回 ` dmg > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L98) |
| ` public static boolean canTakeOutAmmo(ItemStack stack) ` | 末尾返回 ` stack.getOrDefault(ModComponents.CAN_TAKE_OUT_AMMO, true) `<br>[调用处 SpectralSlingshotItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L128) |
| ` public static void setCanTakeOutAmmo(ItemStack stack, boolean can) ` | 执行 ` stack.set(ModComponents.CAN_TAKE_OUT_AMMO, can) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L132) |
| ` public boolean unableToUse(ItemStack stack) ` | 末尾返回 ` false `<br>[调用处 SpectralSlingshotItem.checkLoadable](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L100) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L136) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) ` | 实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` itemstack.get(DataComponents.CHARGED_PROJECTILES) `<br>实现调用 ` chargedprojectiles.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L142) |
| ` @Override public void releaseUsing(ItemStack stack, Level level, LivingEntity entityLiving, int timeLeft) ` | 实现调用 ` this.getUseDuration(stack, entityLiving) `<br>实现调用 ` getPowerForTime(i, stack, entityLiving) `<br>实现调用 ` isCharged(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L186) |
| ` public static boolean isCharged(ItemStack crossbowStack) ` | 末尾返回 ` !chargedprojectiles.isEmpty() `<br>[调用处 SpectralSlingshotRenderer.SpectralSlingshotExtensions.getArmPose](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L155) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L234) |
| ` public void performShooting( Level level, LivingEntity shooter, InteractionHand hand, ItemStack weapon, float velocity, float inaccuracy, @Nullable LivingEntity target ) ` | 分支 ` (level instanceof ServerLevel serverlevel) ` 内调用 ` weapon.get(DataComponents.CHARGED_PROJECTILES) `<br>分支 ` (level instanceof ServerLevel serverlevel) ` 内调用 ` chargedprojectiles.isEmpty() `<br>分支 ` (chargedprojectiles != null && !chargedprojectiles.isEmpty()) ` 内调用 ` chargedprojectiles.getItems() `<br>[调用处 SpectralSlingshotItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L310) |
| ` @Override public void onUseTick(Level level, LivingEntity livingEntity, ItemStack stack, int count) ` | Called as the item is being used by an entity.<br>分支 ` (!level.isClientSide) ` 内调用 ` this.getChargingSounds(stack) `<br>分支 ` (!level.isClientSide) ` 内调用 ` stack.getUseDuration(livingEntity) `<br>分支 ` (!level.isClientSide) ` 内调用 ` getChargeDuration(stack, livingEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L351) |
| ` @Override public int getUseDuration(ItemStack stack, LivingEntity entity) ` | 末尾返回 ` getChargeDuration(stack, entity) + 3 `<br>[调用处 SpectralSlingshotItem.releaseUsing](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L188) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L396) |
| ` public static int getChargeDuration(ItemStack stack, LivingEntity shooter) ` | 末尾返回 ` Mth.floor(f * 20.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L401) |
| ` @Override public UseAnim getUseAnimation(ItemStack stack) ` | Returns the action that specifies what animation to play when the item is being used.<br>末尾返回 ` UseAnim.BOW ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L409) |
| ` @Override public void appendHoverText(ItemStack stack, Item.TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` stack.get(DataComponents.CHARGED_PROJECTILES) `<br>实现调用 ` chargedprojectiles.isEmpty() `<br>分支 ` (chargedprojectiles != null && !chargedprojectiles.isEmpty()) ` 内调用 ` chargedprojectiles.getItems().getFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L427) |
| ` @Override public boolean useOnRelease(ItemStack stack) ` | 末尾返回 ` stack.is(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L456) |
| ` @Override public int getDefaultProjectileRange() ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L461) |

## StructureDiskItem

` public class StructureDiskItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureDiskItem.java#L22)

结构磁盘物品 在tooltip中显示保存的结构名称

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureDiskItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureDiskItem.java#L24) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(DiskItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureDiskItem.java#L28) |
| ` @Override public void appendHoverText(ItemStack stack, Item.TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, tooltipFlag) `<br>实现调用 ` stack.get(ModComponents.STRUCTURE_DISK_DATA) `<br>分支 ` (structureDiskData != null) ` 内调用 ` Component.translatable("item.anvilcraft.structure_disk.structure", structureDiskData.name()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureDiskItem.java#L35) |

## StructureToolItem

` public class StructureToolItem extends Item implements IHandHeldItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureToolItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L35) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` super.useOn(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L39) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L67) |
| ` @Override public void appendHoverText( ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` stack.get(ModComponents.STRUCTURE_DATA) `<br>分支 ` (data != null) ` 内调用 ` data.minX() `<br>分支 ` (data != null) ` 内调用 ` data.minY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L109) |
| ` @Override public boolean accepts(ItemStack itemStack) ` | 末尾返回 ` itemStack.is(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L129) |
| ` @Override public void render( PoseStack poseStack, VertexConsumer consumer, ItemStack itemStack, double camX, double camY, double camZ) ` | 实现调用 ` itemStack.get(ModComponents.STRUCTURE_DATA) `<br>分支 ` (data != null) ` 内调用 ` data.minPos() `<br>分支 ` (data != null) ` 内调用 ` data.maxPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L134) |
| ` @Override public void renderTooltip(GuiGraphics guiGraphics, int screenWidth, int screenHeight) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L146) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L150) |

## SuperCapacitorItem

` public class SuperCapacitorItem extends Item implements IFullCapacitor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SuperCapacitorItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int ENERGY ` | 初值 ` 160_000_000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SuperCapacitorItem.java#L14) |
| ` public SuperCapacitorItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SuperCapacitorItem.java#L16) |
| ` @Override public boolean overrideStackedOnOther(ItemStack stack, Slot slot, ClickAction clickAction, Player player) ` | 末尾返回 ` IFullCapacitor.tryForceChargeTarget(this, stack, slot, clickAction, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SuperCapacitorItem.java#L20) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` IFullCapacitor.super.inventoryTick(stack, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SuperCapacitorItem.java#L25) |
| ` @Override public int getEnergyStored(ItemStack stack) ` | 末尾返回 ` SuperCapacitorItem.ENERGY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SuperCapacitorItem.java#L34) |
| ` @Override public ItemStack getEmpty(ItemStack full) ` | 末尾返回 ` full.transmuteCopy(ModItems.SUPER_CAPACITOR_EMPTY, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SuperCapacitorItem.java#L39) |

## TerminalItem

` public abstract class TerminalItem extends BundleLikeItem implements ICannotFitInStationItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L27)

终端类物品的通用 BundleLike 行为：物品本身不本地存储内容， 点击交互直接把物品放入 / 取出终端连接的存储站 （本地终端→大型板条箱、潜影终端→潜影目标、超维终端→绑定存储站）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` new InteractionResultHolder<>(InteractionResult.PASS, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L32) |
| ` public abstract void openStorage(Player player, ItemStack stack) ` | [调用处 TerminalItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L42) |
| ` public static List<ItemStack> getAll(Player player) ` | 按物品栏、饰品等兼容槽顺序查找终端，也检查实际随身携带的精妙背包。<br>末尾返回 ` terminals `<br>[调用处 TerminalKeyMappingEventListener.tryOpenTerminal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalKeyMappingEventListener.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L45) |
| ` @Override public boolean canFitInsideContainerItems(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TerminalItem.java#L134) |

## TeslaTowerItem

` public class TeslaTowerItem extends SimpleMultiPartBlockItem<Vertical4PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TeslaTowerItem.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TeslaTowerItem(SimpleMultiPartBlock<Vertical4PartHalf> block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TeslaTowerItem.java#L15) |

## TopazItem

` public class TopazItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TopazItem.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TopazItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TopazItem.java#L22) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` InteractionResult.FAIL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TopazItem.java#L26) |

## TranscendenceAnvilHammerItem

` public class TranscendenceAnvilHammerItem extends AnvilHammerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceAnvilHammerItem.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component NAME ` | 初值 ` Component.translatable("item.anvilcraft.transcendence_anvil_hammer") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceAnvilHammerItem.java#L16) |
| ` public TranscendenceAnvilHammerItem(Properties properties) ` | 初始化铁砧锤<br>参数 ` properties ` 物品属性<br>实现调用 ` properties.fireResistant() .component(ModComponents.MULTIPHASE, Multiphase.create()) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` Multiphase.create() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceAnvilHammerItem.java#L23) |
| ` @Override public int getEnchantmentValue(ItemStack stack) ` | 末尾返回 ` 28 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceAnvilHammerItem.java#L33) |
| ` @Override public boolean isValidRepairItem(ItemStack stack, ItemStack repairCandidate) ` | 末尾返回 ` repairCandidate.is(ModItems.TRANSCENDIUM_INGOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceAnvilHammerItem.java#L38) |
| ` @Override public Block getAnvil() ` | 末尾返回 ` ModBlocks.TRANSCENDENCE_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceAnvilHammerItem.java#L48) |

## TranscendenceHeavyHalberdItem

` public class TranscendenceHeavyHalberdItem extends HeavyHalberdItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceHeavyHalberdItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component NAME ` | 初值 ` Component.translatable("item.anvilcraft.transcendence_heavy_halberd") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceHeavyHalberdItem.java#L18) |
| ` public TranscendenceHeavyHalberdItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(HeavyHalberdItem.createAttributes(ModTiers.TRANSCENDIUM, 17, -2.4f)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` HeavyHalberdItem.createAttributes(ModTiers.TRANSCENDIUM, 17, -2.4f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceHeavyHalberdItem.java#L20) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownTranscendenceHeavyHalberdEntity(level, shooter, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceHeavyHalberdItem.java#L39) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownTranscendenceHeavyHalberdEntity(level, x, y, z, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceHeavyHalberdItem.java#L44) |

## TranscendenceResonatorItem

` public class TranscendenceResonatorItem extends ResonatorItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceResonatorItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component NAME ` | 初值 ` Component.translatable("item.anvilcraft.transcendence_resonator") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceResonatorItem.java#L13) |
| ` public TranscendenceResonatorItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(ResonatorItem.createAttributes(ModTiers.TRANSCENDIUM, 17, -3f)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` ResonatorItem.createAttributes(ModTiers.TRANSCENDIUM, 17, -3f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceResonatorItem.java#L16) |

## WeatherproofChestplateItem

` public class WeatherproofChestplateItem extends IonocraftBackpackItem implements ICapacitorChargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int maxEnergy() ` | 能量上限，运行时读取配置。<br>末尾返回 ` AnvilCraft.CONFIG.equipment.weatherproofChestplateMaxEnergy `<br>[调用处 WeatherproofChestplateHUD.renderBackpack](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/hud/WeatherproofChestplateHUD.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L16) |
| ` public static int flightConsumption() ` | 每个飞行刻消耗的能量，运行时读取配置。<br>末尾返回 ` AnvilCraft.CONFIG.equipment.weatherproofChestplateFlightConsumption ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L21) |
| ` public WeatherproofChestplateItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.STORED_ENERGY, 0), true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L35) |
| ` public ItemStack creativeStack() ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L39) |
| ` public static int getEnergyStored(ItemStack stack) ` | 末尾返回 ` Math.clamp(stack.getOrDefault(ModComponents.STORED_ENERGY, 0), 0, maxEnergy()) `<br>[调用处 AnvilCraftClient.clientSetup](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L45) |
| ` public static boolean canFly(ItemStack stack) ` | 末尾返回 ` getEnergyStored(stack) >= flightConsumption() `<br>[调用处 IonocraftBackpackItem.refreshFlight](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L130) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L49) |
| ` @Override public boolean canAccept(ItemStack stack, IFullCapacitor capacitor, ItemStack capacitorStack, boolean force) ` | 末尾返回 ` force \|\| getEnergyStored(stack) <= flightConsumption() `<br>[调用处 WeatherproofChestplateItem.charge](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L53) |
| ` @Override public boolean charge(ItemStack stack, IFullCapacitor capacitor, ItemStack capacitorStack) ` | 末尾返回 ` this.canAccept(stack, capacitor, capacitorStack, false) && this.chargeForce(stack, capacitor, capacitorStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L58) |
| ` public static void clearGridDemand(DynamicPowerComponent component) ` | 实现调用 ` component.getPowerConsumptions().remove(demand) `<br>实现调用 ` component.getPowerConsumptions() `<br>[调用处 PowerGrid.flush](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L210) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L63) |
| ` public static boolean canChargeFromGrid(ServerPlayer player) ` | 仅将当前需要补充能量的胸甲计入电网充电功率分配。<br>末尾返回 ` stack.getItem() instanceof WeatherproofChestplateItem && grid != null && player.isAlive() && !player.isCreative() && !player.isSpectator() && getEnergyStored(stack) < maxEnergy() `<br>[调用处 PowerGrid.flush](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L211) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L70) |
| ` public static int refreshGridDemand(ServerPlayer player, long available) ` | ` (!canChargeFromGrid(player)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` 0 `<br>[调用处 PowerGrid.flush](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L229) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L77) |
| ` public static void tickEnergy(ServerPlayer player) ` | 实现调用 ` getByPlayer(player) `<br>实现调用 ` stack.getItem() `<br>实现调用 ` player.isAlive() `<br>[调用处 IonocraftBackpackItem.playerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/IonocraftBackpackItem.java#L183) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/WeatherproofChestplateItem.java#L103) |
