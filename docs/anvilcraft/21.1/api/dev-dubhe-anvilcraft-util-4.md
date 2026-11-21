# dev.dubhe.anvilcraft.util（DistanceComparator 至 GravityManager.GravitySource）



## DistanceComparator

` public class DistanceComparator implements Comparator<Vec3> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/DistanceComparator.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DistanceComparator(Vec3 center) ` | 执行 ` this.center = center `<br>[调用处 DeflectionRingBlockEntity.attractGianAnvil](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/DeflectionRingBlockEntity.java#L413) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/DistanceComparator.java#L11) |
| ` @Override public int compare(Vec3 o1, Vec3 o2) ` | 末尾返回 ` Double.compare(this.center.distanceTo(o1), this.center.distanceTo(o2)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/DistanceComparator.java#L15) |

## EnchantedGoldBlockPositions

` public final class EnchantedGoldBlockPositions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void clear() ` | 执行 ` POSITIONS.clear() `<br>[调用处 ClientLevelMixin.onLevelLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L18) |
| ` public static void onBlockChanged(BlockPos pos, BlockState oldState, BlockState newState) ` | 实现调用 ` oldState.is(ModBlocks.ENCHANTED_GOLD_BLOCK) `<br>实现调用 ` newState.is(ModBlocks.ENCHANTED_GOLD_BLOCK) `<br>分支 ` (isEnchanted) ` 内调用 ` POSITIONS.add(pos.immutable()) `<br>[调用处 LevelChunkMixin.trackEnchantedGoldBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L22) |
| ` public static void scanChunk(LevelChunk chunk) ` | 实现调用 ` chunk.getSections() `<br>实现调用 ` chunk.getPos().getMinBlockX() `<br>实现调用 ` chunk.getPos() `<br>[调用处 ClientLevelMixin.scanEnchantedGoldBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L79) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L35) |
| ` public static Set<BlockPos> getPositions() ` | 末尾返回 ` POSITIONS `<br>[调用处 EnchantedGoldBlockGlints.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L59) |

## EnchantmentData

` public record EnchantmentData(DataComponentType<ItemEnchantments> type, Holder<Enchantment> enchantment, int level) implements Comparable<EnchantmentData> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantmentData(DataComponentType<ItemEnchantments> type, EnchantmentInstance inst) ` | 执行 ` this(type, inst.enchantment, inst.level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L16) |
| ` public EnchantmentInstance toEnchantmentInst() ` | 末尾返回 ` new EnchantmentInstance(this.enchantment, this.level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L20) |
| ` @Override public int compareTo(EnchantmentData that) ` | 实现调用 ` this.type.equals(that.type) `<br>分支 ` (this.type.equals(that.type)) ` 内调用 ` this.enchantment.equals(that.enchantment) `<br>分支 ` (this.enchantment.equals(that.enchantment)) ` 内调用 ` Integer.compare(this.level, that.level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L24) |
| ` public DataComponentType<ItemEnchantments> type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L12) |
| ` public Holder<Enchantment> enchantment() ` | 读取 record 分量 ` enchantment ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L13) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L11) |

## EnchantmentUtil

` public class EnchantmentUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ItemEnchantments merge(ItemEnchantments oldData, ItemEnchantments newData) ` | 末尾返回 ` mutable.toImmutable() `<br>[调用处 Multiphase.forDisplay](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L9) |
| ` public static ItemEnchantments.Mutable builderOf() ` | 末尾返回 ` new ItemEnchantments.Mutable(ItemEnchantments.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L18) |
| ` public static ItemEnchantments builtOf(Holder<Enchantment> enchHolder, @Range(from = 1, to = 255) int level) ` | 末尾返回 ` builder.toImmutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L22) |
| ` public EnchantmentUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L8) |

## EntityUtil

` public class EntityUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void setShulkerOpen(Shulker shulker) ` | 实现调用 ` Objects.requireNonNull(shulker.getAttribute(Attributes.ARMOR)) `<br>实现调用 ` shulker.getAttribute(Attributes.ARMOR) `<br>实现调用 ` shulker.getEntityData().set(Shulker.DATA_PEEK_ID, (byte) 100) `<br>[调用处 CrabClawItem.interactLivingEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L86) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L17) |
| ` @Nullable public static <T extends Entity> T getAnyEntityOfClass(Level level, Class<T> clazz, AABB bounds, Predicate<? super T> predicate) ` | 末尾返回 ` entities.isEmpty() ? null : entities.getFirst() `<br>[调用处 ModDispenserBehavior.expGem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L203) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L27) |
| ` public EntityUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L16) |

## ExperienceMending

` public final class ExperienceMending `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ExperienceMending.java#L13)

根据经验修补效果消耗液态经验，容器可以按毫桶扣除，世界方块可以整桶扣除。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean repair(ItemStack stack, ServerLevel level, int availableFluid, IntUnaryOperator consumeFluid) ` | ` (experience <= 0 \|\| availableFluid <= 0 \|\| !stack.isDamaged() \|\| !EnchantmentHelper.has(stack, EnchantmentEffectComponents.REPAIR_WITH_XP)) ` 成立时提前返回 ` false `<br>` (durabilityPerBucket <= 0) ` 成立时提前返回 ` false `<br>` (repair <= 0) ` 成立时提前返回 ` false `<br>` (repaired <= 0) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 ExpFluidBlock.entityInside](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ExpFluidBlock.java#L37) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ExperienceMending.java#L17) |

## FireReforgingUtil

` public final class FireReforgingUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FireReforgingUtil.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean repair(ItemStack stack, int amount, Level level, @Nullable BlockPos pos) ` | ` (stack.isEmpty() \|\| !stack.has(ModComponents.FIRE_REFORGING) \|\| !stack.isDamaged()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 FishTankBlockEntity.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L392) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FireReforgingUtil.java#L15) |

## FluidAmountUtil

` public final class FluidAmountUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidAmountUtil.java#L15)

流体数量的显示格式化。 少于 1 B 时用 mB 显示，达到 1 B 起用 B 显示；存在小数时保留三位有效数字。 达到 1000 B 起改用与物品数量一致的 K/M 等缩写。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String formatAmount(int amountMb) ` | 把 mB 数量格式化为显示文本。<br>参数 ` amountMb ` 数量（mB）<br>返回 显示文本，例如 500 mB、1.25 B、128 B、1K B<br>` (amountMb == Integer.MAX_VALUE) ` 成立时提前返回 ` "∞" `<br>` (amountMb < FluidType.BUCKET_VOLUME) ` 成立时提前返回 ` amountMb + " mB" `<br>` (buckets >= FluidAmountUtil.ABBR_THRESHOLD) ` 成立时提前返回 ` FormattingUtil.toAbbrNum((long) buckets) + " B" `<br>` (buckets == Math.floor(buckets)) ` 成立时提前返回 ` (long) buckets + " B" `<br>末尾返回 ` rounded.toPlainString() + " B" `<br>[调用处 StorageScreen.renderFluidIcon](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L4713) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidAmountUtil.java#L26) |
| ` public static String formatExactAmount(int amountMb) ` | 精确数量文本，用于 tooltip 显示。 单位与 #formatAmount(int) 保持一致：不足 1 B 用 mB，否则用 B 的完整精度。<br>参数 ` amountMb ` 数量（mB）<br>返回 精确文本，例如 500 mB、1.575 B、1536 B<br>` (amountMb == Integer.MAX_VALUE) ` 成立时提前返回 ` "∞" `<br>` (amountMb < FluidType.BUCKET_VOLUME) ` 成立时提前返回 ` amountMb + " mB" `<br>末尾返回 ` exact.toPlainString() + " B" `<br>[调用处 StorageScreen.renderStorageContents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L1363) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidAmountUtil.java#L54) |

## FluidStackPredicate

` public record FluidStackPredicate(Optional<HolderSet<Fluid>> fluids, Optional<DataComponentPredicate> component, Optional<MinMaxBounds.Ints> amount, boolean isNegate) implements Predicate<FluidStack> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<FluidStackPredicate> INLINE_CODEC ` | 由 ` RegistryCodecs.homogeneousList(Registries.FLUID).xmap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L34) |
| ` public static final Codec<FluidStackPredicate> FULL_CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L43) |
| ` public static final Codec<FluidStackPredicate> CODEC ` | 由 ` Codec.either(INLINE_CODEC, FULL_CODEC).xmap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L49) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FluidStackPredicate> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L55) |
| ` public static final FluidStackPredicate ANY ` | 初值 ` FluidStackPredicate.builder().build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L66) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 ConcreteRecipeLoader.initCementStaining](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L77) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L68) |
| ` @Override public boolean test(FluidStack stack) ` | ` (this.fluids.isPresent() && !stack.is(this.fluids.get())) ` 成立时提前返回 ` falseValue `<br>` (this.component.isPresent() && !this.component.get().test(stack.getComponents())) ` 成立时提前返回 ` falseValue `<br>` (this.amount.isPresent() && !this.amount.get().matches(stack.getAmount())) ` 成立时提前返回 ` falseValue `<br>末尾返回 ` !falseValue ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L72) |
| ` @Override public FluidStackPredicate negate() ` | 末尾返回 ` new FluidStackPredicate(this.fluids, this.component, this.amount, !this.isNegate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L87) |
| ` public FluidStackPredicate(Optional<HolderSet<Fluid>> fluids, Optional<DataComponentPredicate> component, Optional<MinMaxBounds.Ints> amount, boolean isNegate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28) |
| ` public Optional<HolderSet<Fluid>> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L29) |
| ` public Optional<DataComponentPredicate> component() ` | 读取 record 分量 ` component ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L30) |
| ` public Optional<MinMaxBounds.Ints> amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L31) |
| ` public boolean isNegate() ` | 读取 record 分量 ` isNegate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L32) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28) |

## FluidStackPredicate.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L92)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("deprecation") public Builder fluid(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(fluid.builtInRegistryHolder()) `<br>实现调用 ` fluid.builtInRegistryHolder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L98) |
| ` @SuppressWarnings("deprecation") public Builder fluid(Fluid... fluids) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(Lists.transform(List.of(fluids), Fluid::builtInRegistryHolder)) `<br>实现调用 ` Lists.transform(List.of(fluids), Fluid::builtInRegistryHolder) `<br>实现调用 ` List.of(fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L104) |
| ` public Builder fluid(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L110) |
| ` @SafeVarargs public final Builder fluid(Holder<Fluid>... fluids) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L115) |
| ` public Builder fluid(TagKey<Fluid> fluids) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` BuiltInRegistries.FLUID.getOrCreateTag(fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L121) |
| ` public Builder component(Consumer<DataComponentPredicate.Builder> component) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` DataComponentPredicate.builder() `<br>实现调用 ` component.accept(this.component) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L126) |
| ` public Builder min(int min) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` MinMaxBounds.Ints.atLeast(min) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L132) |
| ` public Builder max(int max) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` MinMaxBounds.Ints.atMost(max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L137) |
| ` public Builder amount(int min, int max) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` MinMaxBounds.Ints.between(min, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L142) |
| ` public Builder amount(int exactly) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` MinMaxBounds.Ints.exactly(exactly) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L147) |
| ` @SuppressWarnings("unused") public Builder negate() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L152) |
| ` public FluidStackPredicate build() ` | 实现调用 ` Optional.ofNullable(this.fluids) `<br>实现调用 ` Optional.empty() `<br>实现调用 ` Optional.of(this.component.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L158) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L92) |

## FluidUtil

` public class FluidUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidUtil.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<Component> getTooltip(FluidStack stack, int capacity, TooltipFlag flag) ` | ` (!appendName(tooltip, stack, flag)) ` 成立时提前返回 ` tooltip `<br>末尾返回 ` tooltip `<br>[调用处 FluidDisplayWidget.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidUtil.java#L18) |
| ` public static List<Component> getFilterTooltip(FluidStack stack, TooltipFlag flag) ` | ` (!appendName(tooltip, stack, flag)) ` 成立时提前返回 ` tooltip `<br>末尾返回 ` tooltip ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidUtil.java#L35) |
| ` public FluidUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FluidUtil.java#L17) |

## FormattingUtil

` public class FormattingUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L17)

格式化工具

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String toLowerCaseUnderscore(String string) ` | 与 .to(LOWER\_UNDERSCORE, string) 几乎相同，但它也会在单词和数字之间插入下划线。<br>参数 ` string ` 任何带有 ASCII 字符的字符串。<br>返回 全小写的字符串，在单词/数字边界前插入下划线：“maragingSteel300” -&gt; “maraging\_steel\_300”<br>末尾返回 ` result.toString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L25) |
| ` public static String toLowerCaseUnder(String string) ` | 与 .to(LOWER\_UNDERSCORE, string) 几乎相同，但它也会在单词和数字之间插入下划线。<br>参数 ` string ` 任何带有 ASCII 字符的字符串。<br>返回 全小写的字符串，在单词/数字边界前插入下划线：“maragingSteel300” -&gt; “maraging\_steel\_300”<br>末尾返回 ` CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_UNDERSCORE, string) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L46) |
| ` public static String toEnglishName(Object internalName) ` | apple\_orange.juice =&gt; Apple Orange (Juice)<br>末尾返回 ` Arrays.stream(internalName.toString().toLowerCase(Locale.ROOT).split("_")).map(StringUtils::capitalize).collect(Collectors.joining(" ")) `<br>[调用处 ActiveSilencerScreen.getSoundName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L53) |
| ` public static String toFormattedTime(int total) ` | 将tick数格式化为时间字符串，只显示到秒（向上取整），不显示 tick/gt。 始终显示为 "Xm Xs" 格式。 &lt;table&gt; &lt;tr&gt;&lt;th&gt;tick数&lt;/th&gt;&lt;th&gt;显示效果&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;0gt&lt;/td&gt;&lt;td&gt;0m 0s&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;1gt&lt;/td&gt;&lt;td&gt;0m 1s&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;30gt&lt;/td&gt;&lt;td&gt;0m 2s&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;100gt&lt;/td&gt;&lt;td&gt;0m 5s&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;1199gt&lt;/td&gt;&lt;td&gt;1m 0s&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;1200gt&lt;/td&gt;&lt;td&gt;1m 0s&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;1500gt&lt;/td&gt;&lt;td&gt;1m 15s&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;1635gt&lt;/td&gt;&lt;td&gt;1m 22s&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;<br>参数 ` total ` 总tick数<br>返回 格式化后的时间字符串<br>` (total <= 0) ` 成立时提前返回 ` "0m 0s" `<br>末尾返回 ` "%dm %ds".formatted(minutes, seconds) `<br>[调用处 BurningHeaterTooltipProvider.tooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L77) |
| ` public static String toFormattedTime(int total, int thresholdInSec) ` | 对应表： &lt;table&gt; &lt;tr&gt;&lt;th&gt;tick数&lt;/th&gt;&lt;th&gt;阈值&lt;/th&gt;&lt;th&gt;显示效果&lt;/th&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;30gt&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;1"50&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;30gt&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;30gt&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;100gt&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;5"&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;150gt&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;7"50&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;1200gt&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;1'&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;1220gt&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;1'01&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;1635gt&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;1'21"75&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;<br>参数 ` total ` 总tick数<br>参数 ` thresholdInSec ` 切换显示格式的阈值（秒），小于该值时显示gt格式，否则显示分秒格式<br>返回 格式化后的时间字符串<br>` (total < thresholdTicks) ` 成立时提前返回 ` total + "gt" `<br>末尾返回 ` result.toString() `<br>[调用处 HeatableBlockTooltipProvider.tooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L103) |
| ` public static Component toShadeProgress(double progress, int length, ChatFormatting... format) ` | 根据进度生成一个给定长度的进度条<br>参数 ` progress ` 进度，0-1<br>参数 ` length ` 进度条长度<br>参数 ` format ` 文本格式<br>返回 进度条文本<br>末尾返回 ` Component.literal(progressStr.toString()).withStyle(format) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L146) |
| ` public static String toAbbrNum(long number) ` | ` (number < 1000) ` 成立时提前返回 ` String.valueOf(number) `<br>末尾返回 ` String.valueOf(number) `<br>[调用处 StorageScreen.renderItemDecorations](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L4950) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L167) |

## FullBrightLevel

` public class FullBrightLevel implements BlockAndTintGetter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FullBrightLevel(Level delegate) ` | 执行 ` this.delegate = delegate ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L19) |
| ` @Override public float getShade(Direction direction, boolean shade) ` | 末尾返回 ` this.delegate.getShade(direction, shade) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L23) |
| ` @Override public LevelLightEngine getLightEngine() ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L28) |
| ` @Override public int getBlockTint(BlockPos blockPos, ColorResolver colorResolver) ` | 末尾返回 ` this.delegate.getBlockTint(blockPos, colorResolver) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L34) |
| ` @Override public int getBrightness(LightLayer type, BlockPos pos) ` | 末尾返回 ` 14 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L39) |
| ` @Override public int getRawBrightness(BlockPos pos, int amount) ` | 末尾返回 ` 14 - amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L44) |
| ` @Override public @Nullable BlockEntity getBlockEntity(BlockPos pos) ` | 末尾返回 ` this.delegate.getBlockEntity(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L49) |
| ` @Override public BlockState getBlockState(BlockPos pos) ` | 末尾返回 ` this.delegate.getBlockState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L54) |
| ` @Override public FluidState getFluidState(BlockPos pos) ` | 末尾返回 ` this.delegate.getFluidState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L59) |
| ` @Override public int getHeight() ` | 末尾返回 ` this.delegate.getHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L64) |
| ` @Override public int getMinBuildHeight() ` | 末尾返回 ` this.delegate.getMinBuildHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevel.java#L69) |

## FullBrightLevelProxy

` public class FullBrightLevelProxy extends FullBrightLevel `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevelProxy.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FullBrightLevelProxy(Level delegate) ` | 执行 ` super(delegate) `<br>[调用处 AnvilHammerScreen](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevelProxy.java#L11) |
| ` @Override public BlockState getBlockState(BlockPos pos) ` | 末尾返回 ` Blocks.AIR.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevelProxy.java#L15) |
| ` @Override public FluidState getFluidState(BlockPos pos) ` | 末尾返回 ` Fluids.EMPTY.defaultFluidState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/FullBrightLevelProxy.java#L20) |

## GravityManager

` public final class GravityManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L61)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onChunkUnload(ChunkEvent.Unload event) ` | 事件总线派发 ` ChunkEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` GRAVITY_FIELDS.get(level) `<br>实现调用 ` index.idsOwnedByChunk(event.getChunk().getPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L94) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` GRAVITY_FIELDS.remove(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L104) |
| ` public static void syncTo(ServerPlayer player) ` | 实现调用 ` GRAVITY_FIELDS.get(player.level()) `<br>实现调用 ` player.level() `<br>实现调用 ` List.of() `<br>[调用处 PlayerEventListener.onJoinedLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L192) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L111) |
| ` public static void applyNetworkSync( Level level, boolean replace, List<GravitySourcesSyncPacket.SourceData> sources, List<BlockPos> removed ) ` | 实现调用 ` GRAVITY_FIELDS.computeIfAbsent(level, ignored -> new GravityFieldIndex()) `<br>分支 ` (replace) ` 内调用 ` index.clear() `<br>实现调用 ` index.remove(id) `<br>[调用处 GravitySourcesSyncPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L119) |
| ` public static GravityType getGravityType(Entity entity) ` | ` (entity instanceof StandableLevitatingBlockEntity \|\| entity instanceof LevitatingBlockEntity) ` 成立时提前返回 ` GravityType.ANTI_GRAVITY `<br>` (entity instanceof StandableFallingBlockEntity) ` 成立时提前返回 ` GravityType.LOW_GRAVITY `<br>末尾返回 ` GravityType.NORMAL `<br>[调用处 EntityMixin.anvilcraft$ApplyGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L403) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L136) |
| ` public static GravityType getFallingBlockGravityType(Block block) ` | 末尾返回 ` block.equals(ModBlocks.LEVITATION_POWDER_BLOCK.get()) ? GravityType.ANTI_GRAVITY : GravityType.NORMAL `<br>[调用处 LevitationPowderBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LevitationPowderBlock.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L166) |
| ` public static Vec3 getGravityVector(Entity entity) ` | 末尾返回 ` getGravityVector(entity, GravitySourceManager.getEntityG(entity)) `<br>[调用处 EntityMixin.anvilcraft$ApplyHorizontalGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L436) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L180) |
| ` public static Vec3 getGravityVector(Entity entity, double baseGravity) ` | 末尾返回 ` gravity.scale(getGravityType(entity).getScalar()) `<br>[调用处 EntityMixin.anvilcraft$ApplyGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L404) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L184) |
| ` public static Vec3 getNetGravityVector(Entity entity) ` | Includes dimension gravity and the entity's effective vertical gravity, not just local sources.<br>` (entity.isNoGravity() \|\| AtmosphereManager.isCreativeFlying(entity) \|\| AccelerateManager.isControlledByRing(entity)) ` 成立时提前返回 ` Vec3.ZERO `<br>末尾返回 ` new Vec3(local.x, -entity.getGravity(), local.z) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L199) |
| ` public static boolean hasCustomSurfaceFriction(Entity entity) ` | Ordinary downward gravity keeps vanilla friction and other mods' changes to it.<br>` (entity.noPhysics \|\| entity.isSpectator() \|\| entity.isPassenger() \|\| AtmosphereManager.isCreativeFlying(entity) \|\| AccelerateManager.isControlledByRing(entity) \|\| entity.isInWater() \|\| entity.isInLava() \|\| entity.isInFluidType()) ` 成立时提前返回 ` false `<br>` (entity instanceof LivingEntity living && living.shouldDiscardFriction()) ` 成立时提前返回 ` false `<br>末尾返回 ` Math.abs(gravity.x) > VECTOR_EPSILON \|\| Math.abs(gravity.z) > VECTOR_EPSILON \|\| gravity.y >= -VECTOR_EPSILON `<br>[调用处 ExperienceOrbMixin.anvilcraft$useDirectionalSurfaceFriction](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ExperienceOrbMixin.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L209) |
| ` public static boolean hasFloorSupport(Entity entity) ` | A stationary contact still supports walking and jumping when gravity cannot set onGround.<br>` (!(entity instanceof LivingEntity living) \|\| living.isFallFlying() \|\| entity.getDeltaMovement().y > VECTOR_EPSILON \|\| !hasCustomSurfaceFriction(entity)) ` 成立时提前返回 ` false `<br>` (gravity.lengthSqr() > VECTOR_EPSILON * VECTOR_EPSILON && gravity.y >= -VECTOR_EPSILON) ` 成立时提前返回 ` false `<br>末尾返回 ` Entity.collideBoundingBox(entity, probe, box, entity.level(), List.of()).y != probe.y `<br>[调用处 LivingEntityMixin.anvilcraft$scaleHorizontalAirDrag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L332) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L222) |
| ` @SubscribeEvent public static void onEntityTickPost(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` entity.isRemoved() `<br>实现调用 ` entity.getDeltaMovement().lengthSqr() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L234) |
| ` public static Vec3 applySurfaceFriction(Entity entity, Vec3 velocity) ` | Applies each tangent component once, even when several blocks or faces support the entity.<br>末尾返回 ` velocity.multiply(x, y, z) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L246) |
| ` public static Vec3 applyMovementEffects(Entity entity, Vec3 movement) ` | 处理实体与可见天体的碰撞，并对相邻两次常规采样之间被完整穿过的引力场进行积分。<br>末尾返回 ` applyMovementEffects(entity, MoverType.SELF, movement) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L285) |
| ` public static Vec3 applyMovementEffects(Entity entity, MoverType moverType, Vec3 movement) ` | 末尾返回 ` applyMovementEffects(entity, moverType, movement, true) `<br>[调用处 EntityMixin.anvilcraft$applyGravityMovementEffects](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L289) |
| ` public static Vec3 applyOrbitalMovementEffects(Entity entity, MoverType moverType, Vec3 movement) ` | 末尾返回 ` applyMovementEffects(entity, moverType, movement, false) `<br>[调用处 ItemEntityMixin.anvilcraft$neutroniumMove](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L285) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L328) |
| ` public static double deferVerticalGravity(Entity entity, double gravity, double baseGravity) ` | Defers only the registered field; dimension gravity and extension gravity keep their original timing.<br>` (orbit == null \|\| !orbit.enabled \|\| orbit.handled) ` 成立时提前返回 ` gravity `<br>末尾返回 ` gravity + local.y `<br>[调用处 EntityMixin.anvilcraft$deferOrbitalGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L165) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L333) |
| ` public static Vec3 deferHorizontalGravity(Entity entity, Vec3 gravity) ` | ` (orbit == null \|\| !orbit.enabled) ` 成立时提前返回 ` gravity `<br>末尾返回 ` gravity.subtract(local.x, 0, local.z) `<br>[调用处 EntityMixin.anvilcraft$ApplyHorizontalGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L436) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L348) |
| ` public static void applyBodyContactEffects(Entity entity) ` | 实现调用 ` player.getAbilities() `<br>实现调用 ` entity.level().isClientSide() `<br>实现调用 ` entity.level() `<br>[调用处 EntityMixin.anvilcraft$applyCelestialBodyContactEffects](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L418) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L407) |
| ` public static Vec3 getNetGravityVectorForFallingBlock(Level level, Vec3 pos, GravityType gravityType) ` | 末尾返回 ` baseGravityVector.add(localGravityVector) `<br>[调用处 LevitationPowderBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LevitationPowderBlock.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L466) |
| ` public static Vec3 getNetGravityVectorForFallingBlock(Entity entity) ` | 末尾返回 ` baseGravityVector.add(getGravityVector(entity, 0.04)) `<br>[调用处 FallingGiantAnvilEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L90) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L474) |
| ` public static void registerDimensionGravity(ResourceKey<Level> dimension, double gravity) ` | 执行 ` DIMENSION_GRAVITY_MAP.put(dimension, gravity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L482) |
| ` public static double getDimensionGravity(Level level) ` | 末尾返回 ` DIMENSION_GRAVITY_MAP.getOrDefault(level.dimension(), 1.0) `<br>[调用处 EntityMixin.anvilcraft$ApplyGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L407) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L486) |

## GravityManager.GravitySource

` public record GravitySource(BlockPos id, Vec3 center, GravitySourceType type) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L514)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GravitySource(BlockPos id, Vec3 center, GravitySourceType type) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L514) |
| ` public BlockPos id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L514) |
| ` public Vec3 center() ` | 读取 record 分量 ` center ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L514) |
| ` public GravitySourceType type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L514) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L514) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L514) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L514) |
