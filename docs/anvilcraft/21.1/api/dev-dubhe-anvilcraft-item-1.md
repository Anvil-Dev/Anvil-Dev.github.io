# dev.dubhe.anvilcraft.item（AmethystAxeItem 至 EmberMetalAxeItem）



## AmethystAxeItem

` public class AmethystAxeItem extends AxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystAxeItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmethystAxeItem(Properties properties) ` | 执行 ` super(ModTiers.AMETHYST, properties.attributes(DiggerItem.createAttributes(ModTiers.AMETHYST, 7, -3.2f))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystAxeItem.java#L7) |

## AmethystHoeItem

` public class AmethystHoeItem extends HoeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystHoeItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmethystHoeItem(Properties properties) ` | 执行 ` super(ModTiers.AMETHYST, properties.attributes(DiggerItem.createAttributes(ModTiers.AMETHYST, -1, -2.0f))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystHoeItem.java#L7) |

## AmethystPickaxeItem

` public class AmethystPickaxeItem extends PickaxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystPickaxeItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmethystPickaxeItem(Properties properties) ` | 执行 ` super(ModTiers.AMETHYST, properties.attributes(DiggerItem.createAttributes(ModTiers.AMETHYST, 1, -2.8f))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystPickaxeItem.java#L7) |

## AmethystShovelItem

` public class AmethystShovelItem extends ShovelItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystShovelItem.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmethystShovelItem(Properties properties) ` | 执行 ` super(ModTiers.AMETHYST, properties.attributes(DiggerItem.createAttributes(ModTiers.AMETHYST, 1.5f, -3.0f))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystShovelItem.java#L7) |

## AmethystSwordItem

` public class AmethystSwordItem extends SwordItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystSwordItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmethystSwordItem(Properties properties) ` | 执行 ` super(ModTiers.AMETHYST, properties.attributes(SwordItem.createAttributes(ModTiers.AMETHYST, 3, -2.4f))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AmethystSwordItem.java#L6) |

## AnvilHammerItem

` public class AnvilHammerItem extends Item implements Equipable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L83)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Property<?>[] SUPPORTED_PROPERTIES ` | 字段类型为 ` Property<?>[] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L84) |
| ` public static boolean goggleEnabled ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L93) |
| ` public AnvilHammerItem(Item.Properties properties) ` | 初始化铁砧锤<br>参数 ` properties ` 物品属性<br>实现调用 ` super(properties) `<br>实现调用 ` ItemAttributeModifiers.builder() `<br>实现调用 ` this.getAttackDamageModifierAmount() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L106) |
| ` public static boolean ableToUseAnvilHammer(Level level, BlockPos blockPos, Player player) ` | 检查是否可以使用铁砧锤<br>` (player.isShiftKeyDown()) ` 成立时提前返回 ` true `<br>` (state.is(ModBlockTags.ANVIL_HAMMER_DENYLIST)) ` 成立时提前返回 ` false `<br>` (state.getBlock() instanceof IHammerChangeable hammerChangeable) ` 成立时提前返回 ` hammerChangeable.checkBlockState(state) `<br>末尾返回 ` AnvilHammerItem.findModifyableProperty(state) != null `<br>[调用处 ClientBlockEventListener.clientHandle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L164) |
| ` public static boolean shouldPlaceOffhandBlock(Player player, Level level, BlockHitResult hit) ` | 判断是否应放行副手方块放置。 主手持有铁砧锤、副手持有可放置方块时，对既不能交互、又不能被锤子修改或拆除的普通方块， 放行原版副手方块放置，使其优先于长按右键打开便携铁砧菜单。<br>` (offhand.isEmpty() \|\| offhand.is(ModItemTags.ANVIL_HAMMER)) ` 成立时提前返回 ` false `<br>` (!(offhand.getItem() instanceof BlockItem)) ` 成立时提前返回 ` false `<br>` (state.is(BlockTags.CAULDRONS) \|\| state.is(ModBlockTags.ANVIL_HAMMER_DENYLIST)) ` 成立时提前返回 ` false `<br>` (state.is(ModBlockTags.HAMMER_REMOVABLE) \|\| state.getBlock() instanceof IHammerRemovable) ` 成立时提前返回 ` false `<br>末尾返回 ` findModifyableProperty(state) == null `<br>[调用处 ClientBlockEventListener.anvilHammerUse](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L180) |
| ` @Nullable public static Property<?> findModifyableProperty(BlockState state) ` | ` (state.getBlock() instanceof IHammerChangeable changeable) ` 成立时提前返回 ` changeable.getChangeableProperty(state) `<br>末尾返回 ` null `<br>[调用处 ClientBlockEventListener.clientHandle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L79) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L190) |
| ` public static boolean dropAnvil(@Nullable Player player, Level level, BlockPos blockPos) ` | ` (player == null \|\| level.isClientSide) ` 成立时提前返回 ` false `<br>` (!(item instanceof AnvilHammerItem anvilHammerItem)) ` 成立时提前返回 ` false `<br>` (player.getCooldowns().isOnCooldown(anvilHammerItem)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 BlockEventListener.anvilHammerAttack](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BlockEventListener.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L203) |
| ` public static void openPortableAnvil(Player player, int inventorySlot) ` | 实现调用 ` OpenedHammerSource.fromInventory(serverPlayer.getInventory(), inventorySlot) `<br>实现调用 ` serverPlayer.getInventory() `<br>实现调用 ` openPortableAnvil(serverPlayer, source) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L220) |
| ` public static void openPortableAnvilFromMenuSlot(Player player, int menuSlotId) ` | 实现调用 ` serverPlayer.containerMenu.getCarried().isEmpty() `<br>实现调用 ` serverPlayer.containerMenu.getCarried() `<br>实现调用 ` serverPlayer.containerMenu.slots.size() `<br>[调用处 OpenHammerAnvilPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/OpenHammerAnvilPacket.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L239) |
| ` public static void useBlock( ServerPlayer player, BlockPos blockPos, ServerLevel level, ItemStack anvilHammer, InteractionHand hand, BlockHitResult result ) ` | 右键方块<br>实现调用 ` rocketJump(player, level, result) `<br>实现调用 ` level.mayInteract(player, blockPos) `<br>实现调用 ` player.getAbilities() `<br>[调用处 HammerUsePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/HammerUsePacket.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L272) |
| ` public static boolean interactWithBlock( Player player, BlockPos blockPos, Level level, ItemStack anvilHammer, InteractionHand hand, BlockHitResult result ) ` | ` (state.useItemOn(anvilHammer, level, player, hand, result).result() != InteractionResult.PASS) ` 成立时提前返回 ` true `<br>末尾返回 ` state.useWithoutItem(level, player, result) != InteractionResult.PASS `<br>[调用处 ClientBlockEventListener.clientHandle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L104) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L289) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` InteractionResultHolder.consume(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L308) |
| ` @Override public ItemStack finishUsingItem(ItemStack stack, Level level, LivingEntity livingEntity) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L315) |
| ` @Override public int getUseDuration(ItemStack stack, LivingEntity entity) ` | 末尾返回 ` AnvilCraft.CONFIG.equipment.portableAnvilUseTicks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L326) |
| ` @Override public UseAnim getUseAnimation(ItemStack stack) ` | 末尾返回 ` UseAnim.NONE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L331) |
| ` public static boolean canRocketJump(@Nullable Player player) ` | ` (player == null) ` 成立时提前返回 ` false `<br>` (!stack.is(Items.FIREWORK_ROCKET)) ` 成立时提前返回 ` false `<br>` (!stack.has(DataComponents.FIREWORKS)) ` 成立时提前返回 ` false `<br>末尾返回 ` player.getRotationVector().x > 70 `<br>[调用处 PlayerEventListener.preventUseWhenRocketJump](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L364) |
| ` public static void addIsWearingPredicate(Predicate<Player> predicate) ` | 执行 ` IS_WEARING_PREDICATES.add(predicate) `<br>[调用处 CuriosCommon.setup](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L372) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean isWearing(Player player) ` | 末尾返回 ` false `<br>[调用处 RenderEventListener.hasScannerHammer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L252) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L376) |
| ` @OnlyIn(Dist.CLIENT) @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean shouldRenderEffect(Player player) ` | 实现调用 ` AnvilHammerItem.isWearing(player) `<br>实现调用 ` AnvilHammerItem.isHolding(player) `<br>[调用处 GuiLayerRegistrationEventListener.onRegister](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L384) |
| ` @Override public boolean isEnchantable(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L401) |
| ` @Override public int getEnchantmentValue(ItemStack stack) ` | 末尾返回 ` 14 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L406) |
| ` @Override public boolean isValidRepairItem(ItemStack stack, ItemStack repairCandidate) ` | 末尾返回 ` repairCandidate.is(Items.IRON_INGOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L411) |
| ` public Block getAnvil() ` | 末尾返回 ` Blocks.ANVIL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L420) |
| ` @Override public boolean canAttackBlock(BlockState state, Level level, BlockPos pos, Player player) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L424) |
| ` @Override public float getDestroySpeed(ItemStack stack, BlockState state) ` | 末尾返回 ` 0.0f ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L429) |
| ` @Override public boolean mineBlock(ItemStack stack, Level level, BlockState state, BlockPos pos, LivingEntity miningEntity) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L434) |
| ` @Override public boolean hurtEnemy(ItemStack stack, LivingEntity target, LivingEntity attacker) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L443) |
| ` @Override public boolean isCorrectToolForDrops(ItemStack stack, BlockState state) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L467) |
| ` @Override public ItemAttributeModifiers getDefaultAttributeModifiers(ItemStack stack) ` | 末尾返回 ` this.modifiers ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L472) |
| ` @Override public EquipmentSlot getEquipmentSlot() ` | 末尾返回 ` EquipmentSlot.HEAD ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L477) |

## BuildingRodItem

` public class BuildingRodItem extends Item implements ICapacitorChargeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int maxEnergy() ` | 能量上限，运行时读取配置。<br>末尾返回 ` AnvilCraft.CONFIG.equipment.buildingRodMaxEnergy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L34) |
| ` public BuildingRodItem(Properties properties) ` | 执行 ` super(properties.stacksTo(1).component(ModComponents.STORED_ENERGY, 0)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L38) |
| ` public ItemStack creativeStack() ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L42) |
| ` public static boolean isPlacementMaterial(ItemStack stack) ` | 实现调用 ` stack.is(ModItems.FILTER) `<br>实现调用 ` stack.getItem() `<br>实现调用 ` FluidUtil.getFluidContained(stack).isPresent() `<br>[调用处 BuildingRodService.box](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L190) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L48) |
| ` public static boolean isHeld(Player player) ` | 末尾返回 ` player.getMainHandItem().is(ModItems.BUILDING_ROD) \|\| player.getOffhandItem().is(ModItems.BUILDING_ROD) `<br>[调用处 BuildingRodService.start](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L54) |
| ` public static ItemStack heldRod(Player player) ` | 末尾返回 ` player.getMainHandItem().is(ModItems.BUILDING_ROD) ? player.getMainHandItem() : player.getOffhandItem() `<br>[调用处 BuildingRodFluids.place](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L58) |
| ` public static InteractionHand materialHand(Player player) ` | 末尾返回 ` player.getMainHandItem().is(ModItems.BUILDING_ROD) ? InteractionHand.OFF_HAND : InteractionHand.MAIN_HAND `<br>[调用处 BuildingRodService.planBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L259) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L62) |
| ` public static ItemStack material(Player player) ` | 末尾返回 ` player.getItemInHand(materialHand(player)) `<br>[调用处 BuildingMaterials.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L100) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L66) |
| ` public static boolean isCarried(Player player) ` | ` (isHeld(player)) ` 成立时提前返回 ` true `<br>末尾返回 ` PocketInventory.carriedItems(player).stream().anyMatch(stack -> stack.is(ModItems.BUILDING_ROD)) `<br>[调用处 BuildingRodItemRenderer.usesToolClaw](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodItemRenderer.java#L203) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L70) |
| ` public static void updateReach(Player player) ` | 实现调用 ` material(player) `<br>实现调用 ` isHeld(player) `<br>实现调用 ` isPlacementMaterial(other) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L75) |
| ` public static boolean ready(Player player, ItemStack rod) ` | ` (rod.getOrDefault(ModComponents.STORED_ENERGY, 0) > 0) ` 成立时提前返回 ` true `<br>末尾返回 ` false `<br>[调用处 BuildingRodFluids.place](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L92) |
| ` public static void consume(Player player, ItemStack rod, int blocks) ` | 实现调用 ` player.isCreative() `<br>实现调用 ` Math.max(0, rod.getOrDefault(ModComponents.STORED_ENERGY, 0) - blocks * 100) `<br>实现调用 ` rod.getOrDefault(ModComponents.STORED_ENERGY, 0) `<br>[调用处 BuildingRodService.finishPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L941) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L99) |
| ` @Override public boolean canBeCharged(ItemStack stack, IEnergyStorage storage, IFullCapacitor capacitor, ItemStack capacitorStack) ` | 末尾返回 ` storage.getEnergyStored() == 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L117) |
| ` @Override public boolean onEntitySwing(ItemStack stack, LivingEntity entity, InteractionHand hand) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L122) |
| ` @Override public boolean shouldCauseReequipAnimation(ItemStack oldStack, ItemStack newStack, boolean slotChanged) ` | 末尾返回 ` slotChanged \|\| !ItemStack.isSameItem(oldStack, newStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L127) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | 末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L132) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) ` | 末尾返回 ` InteractionResultHolder.success(player.getItemInHand(hand)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L137) |
| ` @Override public boolean isBarVisible(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L142) |
| ` @Override public int getBarWidth(ItemStack stack) ` | 末尾返回 ` Math.round(13f * stack.getOrDefault(ModComponents.STORED_ENERGY, 0) / maxEnergy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L147) |
| ` @Override public int getBarColor(ItemStack stack) ` | 末尾返回 ` 0x7087FF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BuildingRodItem.java#L152) |

## BundleLikeItem

` public abstract class BundleLikeItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BundleLikeItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BundleLikeItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BundleLikeItem.java#L20) |
| ` @Override public boolean overrideStackedOnOther(ItemStack stack, Slot slot, ClickAction action, Player player) ` | ` (!slot.isActive() \|\| !slot.allowModification(player)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BundleLikeItem.java#L64) |
| ` @Override public boolean overrideOtherStackedOnMe( ItemStack stack, ItemStack other, Slot slot, ClickAction action, Player player, SlotAccess access ) ` | ` (!slot.allowModification(player)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/BundleLikeItem.java#L102) |

## CannedFoodItem

` public class CannedFoodItem extends Item implements IExtraItemDisplay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CannedFoodItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L20) |
| ` @Override public void verifyComponentsAfterLoad(ItemStack stack) ` | 实现调用 ` stack.has(ModComponents.DISPLAY_ITEM) `<br>分支 ` (!stack.has(ModComponents.DISPLAY_ITEM)) ` 内调用 ` this.setFood(stack, ModFoodItems.BEEF_MUSHROOM_STEW.asStack()) `<br>分支 ` (!stack.has(ModComponents.DISPLAY_ITEM)) ` 内调用 ` ModFoodItems.BEEF_MUSHROOM_STEW.asStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L24) |
| ` @Override public ItemStack getDisplayedItem(ItemStack stack) ` | 末尾返回 ` Optional.ofNullable(stack.get(ModComponents.DISPLAY_ITEM)).map(StoredItem::stored).orElse(ItemStack.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L32) |
| ` public ItemStack setFood(ItemStack canStack, ItemStack foodStack) ` | 末尾返回 ` canStack `<br>[调用处 CannedFoodItem.verifyComponentsAfterLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L39) |
| ` @Override public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` stack.getOrDefault(ModComponents.DISPLAY_ITEM, new StoredItem(ItemStack.EMPTY)) `<br>实现调用 ` foodInfo.stored() `<br>实现调用 ` food.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L68) |
| ` @Override public int offsetX(ItemStack stack) ` | 末尾返回 ` 5 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L81) |
| ` @Override public int offsetY(ItemStack stack) ` | 末尾返回 ` 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L86) |
| ` @Override public float scale(ItemStack stack) ` | 末尾返回 ` 0.5F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CannedFoodItem.java#L91) |

## CapacitorItem

` public class CapacitorItem extends Item implements IFullCapacitor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CapacitorItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int ENERGY ` | 初值 ` 8_000_000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CapacitorItem.java#L14) |
| ` public CapacitorItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CapacitorItem.java#L16) |
| ` @Override public boolean overrideStackedOnOther(ItemStack stack, Slot slot, ClickAction clickAction, Player player) ` | 末尾返回 ` IFullCapacitor.tryForceChargeTarget(this, stack, slot, clickAction, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CapacitorItem.java#L20) |
| ` @Override public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) ` | 实现调用 ` super.inventoryTick(stack, level, entity, slotId, isSelected) `<br>实现调用 ` IFullCapacitor.super.inventoryTick(stack, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CapacitorItem.java#L25) |
| ` @Override public int getEnergyStored(ItemStack stack) ` | 末尾返回 ` CapacitorItem.ENERGY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CapacitorItem.java#L34) |
| ` @Override public ItemStack getEmpty(ItemStack full) ` | 末尾返回 ` full.transmuteCopy(ModItems.CAPACITOR_EMPTY, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CapacitorItem.java#L39) |

## CrabClawItem

` public class CrabClawItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final AttributeModifier RANGE_ATTRIBUTE_MODIFIER ` | 初值 ` new AttributeModifier( AnvilCraft.of("range_modifier"), 3, AttributeModifier.Operation.ADD_VALUE ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L32) |
| ` public static final String CRAB_CLAW_MARKER ` | 初值 ` "crabClaw" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L39) |
| ` public static final String DUAL_CRAB_CLAW_MARKER ` | 初值 ` "dualCrabClaw" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L40) |
| ` public CrabClawItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L42) |
| ` public static void holdingCrabClawIncreasesRange(LivingEntity entity) ` | 蟹钳增加交互距离<br>实现调用 ` entity.level() `<br>实现调用 ` EntityHelper.getCustomData(entity) `<br>实现调用 ` ModItems.CRAB_CLAW.isIn(player.getOffhandItem()) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L49) |
| ` @Override public InteractionResult interactLivingEntity(ItemStack stack, Player player, LivingEntity target, InteractionHand hand) ` | 末尾返回 ` InteractionResult.PASS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L82) |
| ` @Override public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag tooltipFlag) ` | 实现调用 ` tooltipComponents.add(CommonComponents.EMPTY) `<br>实现调用 ` tooltipComponents.add(Component.translatable("item.modifiers.hand").withStyle(ChatFormatting.GRAY)) `<br>实现调用 ` Component.translatable("item.modifiers.hand").withStyle(ChatFormatting.GRAY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L95) |

## CursedGoldenAppleItem

` public class CursedGoldenAppleItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CursedGoldenAppleItem.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CursedGoldenAppleItem(Properties properties) ` | 执行 ` super(properties) `<br>[调用处 ModFoodItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L41) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CursedGoldenAppleItem.java#L23) |
| ` @Override public ItemStack finishUsingItem(ItemStack stack, Level level, LivingEntity livingEntity) ` | 末尾返回 ` super.finishUsingItem(stack, level, livingEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CursedGoldenAppleItem.java#L27) |

## DiskItem

` public class DiskItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DiskItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L42) |
| ` @Override @OnlyIn(Dist.CLIENT) @SuppressWarnings("removal") public void initializeClient(Consumer<IClientItemExtensions> consumer) ` | 执行 ` consumer.accept(CustomRenderItemClientExtension.of(DiskItemRenderer.getInstance())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L46) |
| ` public static boolean hasDataStored(ItemStack stack) ` | 磁盘中是否存储有数据<br>末尾返回 ` stack.has(ModComponents.DISK_DATA) `<br>[调用处 CelestialForgingAnvilBlockEntity.useDisk](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L944) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L56) |
| ` public static CompoundTag getData(ItemStack stack) ` | 末尾返回 ` stack.getOrDefault(ModComponents.DISK_DATA, new DiskData(new CompoundTag())) .tag() `<br>[调用处 CelestialSnapshotCodec.load](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L60) |
| ` public static CompoundTag createData(ItemStack stack) ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L65) |
| ` public static void deleteData(ItemStack stack) ` | 执行 ` stack.remove(ModComponents.DISK_DATA) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L71) |
| ` @Override public boolean isEnchantable(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L75) |
| ` @Override public boolean isFoil(ItemStack stack) ` | 末尾返回 ` hasDataStored(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L80) |
| ` @Override public void appendHoverText( ItemStack stack, Item.TooltipContext context, List<Component> tooltipComponents, TooltipFlag isAdvanced) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, isAdvanced) `<br>实现调用 ` hasDataStored(stack) `<br>分支 ` (hasDataStored(stack)) ` 内调用 ` ResourceLocation.parse(getData(stack).getString("StoredFrom")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L85) |
| ` @Override public InteractionResult useOn(UseOnContext context) ` | ` (level.isClientSide) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (player == null \|\| player.isShiftKeyDown()) ` 成立时提前返回 ` InteractionResult.FAIL `<br>` (!level.getBlockState(clickedPos).hasBlockEntity()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!(blockEntity instanceof IDiskCloneable diskCloneable)) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.SUCCESS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L104) |
| ` @SubscribeEvent public static void onBlockPlaced(BlockEvent.EntityPlaceEvent event) ` | 事件总线派发 ` BlockEvent.EntityPlaceEvent ` 时调用。<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L137) |
| ` @Override public InteractionResultHolder<ItemStack> use( Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L198) |

## DragonRodItem

` public class DragonRodItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int DEFAULT_RANGE ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L51) |
| ` public DragonRodItem(Properties properties, int enchantmentValue) ` | 执行 ` this(properties, enchantmentValue, BlockMiningEffect.NORMAL) `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L315) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L57) |
| ` public DragonRodItem(Properties properties, int enchantmentValue, BlockMiningEffect miningEffect) ` | 实现调用 ` properties.component(ModComponents.DEVOUR_RANGE, DEFAULT_RANGE) `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L339) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L61) |
| ` public static boolean protectsContainers(ItemStack stack) ` | 末尾返回 ` stack.getOrDefault(ModComponents.DEVOUR_PROTECT_CONTAINERS, false) `<br>[调用处 DragonRodItem.devourBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L153) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L69) |
| ` @Override public boolean isValidRepairItem(ItemStack stack, ItemStack repairCandidate) ` | ` (stack.is(ModItems.DRAGON_ROD)) ` 成立时提前返回 ` repairCandidate.is(Items.IRON_INGOT) `<br>末尾返回 ` super.isValidRepairItem(stack, repairCandidate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L73) |
| ` @Override public int getEnchantmentValue(ItemStack stack) ` | 末尾返回 ` this.enchantmentValue ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L89) |
| ` @Override public boolean canAttackBlock(BlockState state, Level level, BlockPos pos, Player player) ` | 末尾返回 ` !player.isCreative() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L94) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | ` (!dragonRod.is(this)) ` 成立时提前返回 ` superHolder `<br>末尾返回 ` new InteractionResultHolder<>(superHolder.getResult(), dragonRod) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L99) |
| ` @Override public boolean mineBlock(ItemStack stack, Level level, BlockState state, BlockPos pos, LivingEntity miningEntity) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L117) |
| ` @SuppressWarnings("DataFlowIssue") public static void devourBlock( ServerLevel level, Player player, InteractionHand hand, BlockPos centerPos, BlockState centerState, Direction clickedSide ) ` | 实现调用 ` centerState.is(ModBlockTags.DEVOUR_DENYLIST) `<br>实现调用 ` centerState.getDestroySpeed(level, centerPos) `<br>实现调用 ` player.getItemInHand(hand) `<br>[调用处 PlayerEventListener.handleDragonRod](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L182) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L122) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean canDevour(Player player, ItemStack dragonRod) ` | 末尾返回 ` dragonRod.getDamageValue() < dragonRod.getMaxDamage() - 1 && !player.getCooldowns().isOnCooldown(dragonRod.getItem()) `<br>[调用处 PlayerEventListener.handleDragonRod](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L176) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L251) |
| ` public static int calculateDamage(ItemStack dragonRod) ` | 末尾返回 ` Mth.clamp(dragonRod.getMaxDamage() - dragonRod.getDamageValue(), 1, damage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L257) |
| ` public static int calculateCooldown(Player player) ` | 末尾返回 ` Math.max(cooldown, 4) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L268) |
| ` public static void stopContinuousMode(Player player) ` | 执行 ` CONTINUOUS_DEVOUR_PLAYERS.remove(player.getUUID()) `<br>[调用处 PlayerEventListener.handleDragonRod](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L170) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L279) |
| ` public static void tickContinuousDevour(ServerPlayer player) ` | 实现调用 ` player.getUUID() `<br>实现调用 ` CONTINUOUS_DEVOUR_PLAYERS.contains(playerId) `<br>实现调用 ` player.getMainHandItem() `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DragonRodItem.java#L283) |

## EmberAnvilHammerItem

` public class EmberAnvilHammerItem extends AnvilHammerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberAnvilHammerItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberAnvilHammerItem(Properties properties) ` | 初始化铁砧锤<br>参数 ` properties ` 物品属性<br>执行 ` super( properties.fireResistant() .component(ModComponents.FIRE_REFORGING, Unit.INSTANCE) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberAnvilHammerItem.java#L16) |
| ` @Override public int getEnchantmentValue(ItemStack stack) ` | 末尾返回 ` 22 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberAnvilHammerItem.java#L23) |
| ` @Override public boolean isValidRepairItem(ItemStack stack, ItemStack repairCandidate) ` | 末尾返回 ` repairCandidate.is(ModItems.EMBER_METAL_INGOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberAnvilHammerItem.java#L28) |
| ` @Override public Block getAnvil() ` | 末尾返回 ` ModBlocks.EMBER_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberAnvilHammerItem.java#L38) |

## EmberMetalAxeItem

` public class EmberMetalAxeItem extends AxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalAxeItem.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalAxeItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .attributes(AxeItem.createAttributes(ModTiers.EMBER_METAL, 6, -3f)) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` AxeItem.createAttributes(ModTiers.EMBER_METAL, 6, -3f) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalAxeItem.java#L8) |
