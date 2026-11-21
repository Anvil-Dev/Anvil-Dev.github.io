# dev.dubhe.anvilcraft.util（DevouringLevelReader 至 FormattingUtil）



## DevouringLevelReader

` public class DevouringLevelReader implements LevelReader `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L34)

用来执行吞噬判断的假世界，修改了 LevelReader#getBlockState(BlockPos) LevelReader.getBlockState 的逻辑.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DevouringLevelReader(LevelReader parentLevel, Set<BlockPos> devouringPoses, Set<BlockPos> multiParts) ` | [调用处 DevourUtil.getDevourPosList](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevourUtil.java#L91) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L40) |
| ` @Override public @Nullable ChunkAccess getChunk(int i, int i1, ChunkStatus chunkStatus, boolean b) ` | 末尾返回 ` this.parentLevel.getChunk(i, i1, chunkStatus, b) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L46) |
| ` @Override @Deprecated public boolean hasChunk(int i, int i1) ` | 末尾返回 ` this.parentLevel.hasChunk(i, i1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L51) |
| ` @Override public int getHeight(Heightmap.Types types, int i, int i1) ` | 末尾返回 ` this.parentLevel.getHeight(types, i, i1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L57) |
| ` @Override public int getHeight() ` | 末尾返回 ` this.parentLevel.getHeight() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L62) |
| ` @Override public int getSkyDarken() ` | 末尾返回 ` this.parentLevel.getSkyDarken() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L67) |
| ` @Override public BiomeManager getBiomeManager() ` | 末尾返回 ` this.parentLevel.getBiomeManager() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L72) |
| ` @Override public Holder<Biome> getUncachedNoiseBiome(int i, int i1, int i2) ` | 末尾返回 ` this.parentLevel.getUncachedNoiseBiome(i, i1, i2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L77) |
| ` @Override public boolean isClientSide() ` | 末尾返回 ` this.parentLevel.isClientSide() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L82) |
| ` @Override @Deprecated public int getSeaLevel() ` | 末尾返回 ` this.parentLevel.getSeaLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L87) |
| ` @Override public DimensionType dimensionType() ` | 末尾返回 ` this.parentLevel.dimensionType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L93) |
| ` @Override public RegistryAccess registryAccess() ` | 末尾返回 ` this.parentLevel.registryAccess() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L98) |
| ` @Override public FeatureFlagSet enabledFeatures() ` | 末尾返回 ` this.parentLevel.enabledFeatures() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L103) |
| ` @Override public EnvironmentAttributeReader environmentAttributes() ` | 末尾返回 ` this.parentLevel.environmentAttributes() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L108) |
| ` @Override public LevelLightEngine getLightEngine() ` | 末尾返回 ` this.parentLevel.getLightEngine() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L113) |
| ` @Override public WorldBorder getWorldBorder() ` | 末尾返回 ` this.parentLevel.getWorldBorder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L118) |
| ` @Override public List<VoxelShape> getEntityCollisions(@Nullable Entity entity, AABB aabb) ` | 末尾返回 ` this.parentLevel.getEntityCollisions(entity, aabb) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L123) |
| ` @Override public @Nullable BlockEntity getBlockEntity(BlockPos blockPos) ` | 末尾返回 ` this.parentLevel.getBlockEntity(blockPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L128) |
| ` @Override public BlockState getBlockState(BlockPos blockPos) ` | 当处于吞噬范围且可以破坏时返回空气<br>参数 ` blockPos ` 方块位置<br>返回 对应的BlockState<br>` (DevourUtil.canDevour(blockState) && (this.devouringPoses.contains(blockPos) \|\| this.multiParts.contains(blockPos))) ` 成立时提前返回 ` AIR_STATE `<br>末尾返回 ` blockState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L139) |
| ` @Override public FluidState getFluidState(BlockPos blockPos) ` | 末尾返回 ` this.parentLevel.getFluidState(blockPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L148) |
| ` @Override @Nullable public BlockGetter getChunkForCollisions(int chunkX, int chunkZ) ` | 末尾返回 ` this.parentLevel.getChunkForCollisions(chunkX, chunkZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L154) |
| ` @Override public int getRawBrightness(BlockPos blockPos, int amount) ` | 末尾返回 ` this.parentLevel.getRawBrightness(blockPos, amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L160) |
| ` @Override public int getBrightness(LightLayer lightType, BlockPos blockPos) ` | 末尾返回 ` this.parentLevel.getBrightness(lightType, blockPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L165) |
| ` @Override public int getMinY() ` | 末尾返回 ` this.parentLevel.getMinY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DevouringLevelReader.java#L170) |

## DistanceComparator

` public class DistanceComparator implements Comparator<Vec3> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DistanceComparator.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DistanceComparator(Vec3 center) ` | 执行 ` this.center = center `<br>[调用处 DeflectionRingBlockEntity.attractGianAnvil](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/DeflectionRingBlockEntity.java#L433) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DistanceComparator.java#L11) |
| ` @Override public int compare(Vec3 o1, Vec3 o2) ` | 末尾返回 ` Double.compare(this.center.distanceTo(o1), this.center.distanceTo(o2)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/DistanceComparator.java#L15) |

## EnchantedGoldBlockPositions

` public final class EnchantedGoldBlockPositions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void clear() ` | 执行 ` POSITIONS.clear() `<br>[调用处 ClientLevelMixin.onLevelLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L19) |
| ` public static void onBlockChanged(BlockPos pos, BlockState oldState, BlockState newState) ` | 实现调用 ` oldState.is(ModBlocks.ENCHANTED_GOLD_BLOCK) `<br>实现调用 ` newState.is(ModBlocks.ENCHANTED_GOLD_BLOCK) `<br>分支 ` (isEnchanted) ` 内调用 ` POSITIONS.add(pos.immutable()) `<br>[调用处 LevelChunkMixin.anvilcraft$trackEnchantedGold](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L199) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L23) |
| ` public static void scanChunk(LevelChunk chunk) ` | 实现调用 ` chunk.getSections() `<br>实现调用 ` chunk.getPos().getMinBlockX() `<br>实现调用 ` chunk.getPos() `<br>[调用处 ClientLevelMixin.anvilcraft$scanEnchantedGold](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L36) |
| ` public static void unload(ChunkPos chunk) ` | 执行 ` POSITIONS.removeIf(pos -> pos.getX() >> 4 == chunk.x() && pos.getZ() >> 4 == chunk.z()) `<br>[调用处 ClientLevelMixin.anvilcraft$unloadEnchantedGold](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L100) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L60) |
| ` public static Set<BlockPos> getPositions() ` | 末尾返回 ` POSITIONS `<br>[调用处 EnchantedGoldBlockGlints.render](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantedGoldBlockPositions.java#L64) |

## EnchantmentData

` public record EnchantmentData(DataComponentType<ItemEnchantments> type, Holder<Enchantment> enchantment, int level) implements Comparable<EnchantmentData> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantmentData(DataComponentType<ItemEnchantments> type, EnchantmentInstance inst) ` | 执行 ` this(type, inst.enchantment(), inst.level()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L18) |
| ` public EnchantmentInstance toEnchantmentInst() ` | 末尾返回 ` new EnchantmentInstance(this.enchantment, this.level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L22) |
| ` @Override public int compareTo(EnchantmentData that) ` | 实现调用 ` this.type.equals(that.type) `<br>分支 ` (this.type.equals(that.type)) ` 内调用 ` this.enchantment.equals(that.enchantment) `<br>分支 ` (this.enchantment.equals(that.enchantment)) ` 内调用 ` Integer.compare(this.level, that.level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L26) |
| ` public DataComponentType<ItemEnchantments> type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L14) |
| ` public Holder<Enchantment> enchantment() ` | 读取 record 分量 ` enchantment ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L15) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentData.java#L13) |

## EnchantmentUtil

` public class EnchantmentUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ItemEnchantments merge(ItemEnchantments oldData, ItemEnchantments newData) ` | 末尾返回 ` mutable.toImmutable() `<br>[调用处 Multiphase.forDisplay](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L9) |
| ` public static ItemEnchantments.Mutable builderOf() ` | 末尾返回 ` new ItemEnchantments.Mutable(ItemEnchantments.EMPTY) `<br>[调用处 EnchantmentUtil.builtOf](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L18) |
| ` public static ItemEnchantments builtOf(Holder<Enchantment> enchHolder, @Range(from = 1, to = 255) int level) ` | 末尾返回 ` builder.toImmutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L22) |
| ` public EnchantmentUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EnchantmentUtil.java#L8) |

## EntityUtil

` public class EntityUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void hurt(Entity entity, DamageSource source, float damage) ` | 实现调用 ` entity.level() `<br>分支 ` (entity.level() instanceof ServerLevel level) ` 内调用 ` entity.hurtServer(level, source, damage) `<br>[调用处 FishTankBlockEntity.entityInsideFluidContent](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L1063) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L19) |
| ` public static boolean hurtOrSimulate(Entity entity, DamageSource source, float damage) ` | 末尾返回 ` entity.level() instanceof ServerLevel level ? entity.hurtServer(level, source, damage) : entity.hurtClient(source) `<br>[调用处 TimeWarpPlayerBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/TimeWarpPlayerBehavior.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L25) |
| ` public static void setShulkerOpen(Shulker shulker) ` | 实现调用 ` Objects.requireNonNull(shulker.getAttribute(Attributes.ARMOR)) `<br>实现调用 ` shulker.getAttribute(Attributes.ARMOR) `<br>实现调用 ` shulker.getEntityData().set(Shulker.DATA_PEEK_ID, (byte) 100) `<br>[调用处 CrabClawItem.interactLivingEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/CrabClawItem.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L31) |
| ` @Nullable public static <T extends Entity> T getAnyEntityOfClass(Level level, Class<T> clazz, AABB bounds, Predicate<? super T> predicate) ` | 末尾返回 ` entities.isEmpty() ? null : entities.getFirst() `<br>[调用处 ModDispenserBehavior.bowl](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L227) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L41) |
| ` public EntityUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/EntityUtil.java#L18) |

## ExperienceMending

` public final class ExperienceMending `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ExperienceMending.java#L13)

根据经验修补效果消耗液态经验，容器可以按毫桶扣除，世界方块可以整桶扣除。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean repair(ItemStack stack, ServerLevel level, int availableFluid, IntUnaryOperator consumeFluid) ` | ` (experience <= 0 \|\| availableFluid <= 0 \|\| !stack.isDamaged() \|\| !EnchantmentHelper.has(stack, EnchantmentEffectComponents.REPAIR_WITH_XP)) ` 成立时提前返回 ` false `<br>` (durabilityPerBucket <= 0) ` 成立时提前返回 ` false `<br>` (repair <= 0) ` 成立时提前返回 ` false `<br>` (repaired <= 0) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 ExpFluidCauldronBlock.entityInside](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cauldron/ExpFluidCauldronBlock.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ExperienceMending.java#L17) |

## FireReforgingUtil

` public final class FireReforgingUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FireReforgingUtil.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean repair(ItemStack stack, int amount, Level level, @Nullable BlockPos pos) ` | ` (stack.isEmpty() \|\| !stack.has(ModComponents.FIRE_REFORGING) \|\| !stack.isDamaged()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 FishTankBlockEntity.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L355) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FireReforgingUtil.java#L14) |

## FluidAmountUtil

` public final class FluidAmountUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidAmountUtil.java#L15)

流体数量的显示格式化。 少于 1 B 时用 mB 显示，达到 1 B 起用 B 显示；存在小数时保留三位有效数字。 达到 1000 B 起改用与物品数量一致的 K/M 等缩写。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String formatAmount(int amountMb) ` | 把 mB 数量格式化为显示文本。<br>参数 ` amountMb ` 数量（mB）<br>返回 显示文本，例如 500 mB、1.25 B、128 B、1K B<br>` (amountMb == Integer.MAX_VALUE) ` 成立时提前返回 ` "∞" `<br>` (amountMb < FluidType.BUCKET_VOLUME) ` 成立时提前返回 ` amountMb + " mB" `<br>` (buckets >= FluidAmountUtil.ABBR_THRESHOLD) ` 成立时提前返回 ` FormattingUtil.toAbbrNum((int) buckets) + " B" `<br>` (buckets == Math.floor(buckets)) ` 成立时提前返回 ` (long) buckets + " B" `<br>末尾返回 ` rounded.toPlainString() + " B" `<br>[调用处 StorageScreen.renderFluidIcon](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L2717) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidAmountUtil.java#L26) |
| ` public static String formatExactAmount(int amountMb) ` | 精确数量文本，用于 tooltip 显示。 单位与 #formatAmount(int) 保持一致：不足 1 B 用 mB，否则用 B 的完整精度。<br>参数 ` amountMb ` 数量（mB）<br>返回 精确文本，例如 500 mB、1.575 B、1536 B<br>` (amountMb == Integer.MAX_VALUE) ` 成立时提前返回 ` "∞" `<br>` (amountMb < FluidType.BUCKET_VOLUME) ` 成立时提前返回 ` amountMb + " mB" `<br>末尾返回 ` exact.toPlainString() + " B" `<br>[调用处 StorageScreen.extractStorageContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L1353) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidAmountUtil.java#L54) |

## FluidStackPredicate

` public record FluidStackPredicate(Optional<HolderSet<Fluid>> fluids, Optional<DataComponentPredicate> component, Optional<MinMaxBounds.Ints> amount, boolean isNegate) implements Predicate<FluidStack> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<FluidStackPredicate> INLINE_CODEC ` | 由 ` RegistryCodecs.homogeneousList(Registries.FLUID).xmap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L34) |
| ` public static final Codec<FluidStackPredicate> FULL_CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L43) |
| ` public static final Codec<FluidStackPredicate> CODEC ` | 由 ` Codec.either(INLINE_CODEC, FULL_CODEC).xmap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L49) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FluidStackPredicate> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L55) |
| ` public static final FluidStackPredicate ANY ` | 初值 ` FluidStackPredicate.builder().build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L66) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 ConcreteRecipeLoader.initCementStaining](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ConcreteRecipeLoader.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L68) |
| ` @Override public boolean test(FluidStack stack) ` | ` (this.fluids.isPresent() && !stack.is(this.fluids.get())) ` 成立时提前返回 ` falseValue `<br>` (this.component.isPresent() && !this.component.get().test(stack.getComponents())) ` 成立时提前返回 ` falseValue `<br>` (this.amount.isPresent() && !this.amount.get().matches(stack.getAmount())) ` 成立时提前返回 ` falseValue `<br>末尾返回 ` !falseValue ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L72) |
| ` @Override public FluidStackPredicate negate() ` | 末尾返回 ` new FluidStackPredicate(this.fluids, this.component, this.amount, !this.isNegate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L87) |
| ` public FluidStackPredicate(Optional<HolderSet<Fluid>> fluids, Optional<DataComponentPredicate> component, Optional<MinMaxBounds.Ints> amount, boolean isNegate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28) |
| ` public Optional<HolderSet<Fluid>> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L29) |
| ` public Optional<DataComponentPredicate> component() ` | 读取 record 分量 ` component ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L30) |
| ` public Optional<MinMaxBounds.Ints> amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L31) |
| ` public boolean isNegate() ` | 读取 record 分量 ` isNegate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L32) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L28) |

## FluidStackPredicate.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L92)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("deprecation") public Builder fluid(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(fluid.builtInRegistryHolder()) `<br>实现调用 ` fluid.builtInRegistryHolder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L98) |
| ` @SuppressWarnings("deprecation") public Builder fluid(Fluid... fluids) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(Lists.transform(List.of(fluids), Fluid::builtInRegistryHolder)) `<br>实现调用 ` Lists.transform(List.of(fluids), Fluid::builtInRegistryHolder) `<br>实现调用 ` List.of(fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L104) |
| ` public Builder fluid(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L110) |
| ` @SafeVarargs public final Builder fluid(Holder<Fluid>... fluids) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L115) |
| ` public Builder fluid(HolderGetter<Fluid> registry, TagKey<Fluid> fluids) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` registry.getOrThrow(fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L121) |
| ` public Builder fluid(TagKey<Fluid> fluids) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` BuiltInRegistries.FLUID.getOrThrow(fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L126) |
| ` public Builder component(Consumer<DataComponentPredicate.Builder> component) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` DataComponentPredicate.builder() `<br>实现调用 ` component.accept(this.component) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L131) |
| ` public Builder min(int min) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` MinMaxBounds.Ints.atLeast(min) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L137) |
| ` public Builder max(int max) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` MinMaxBounds.Ints.atMost(max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L142) |
| ` public Builder amount(int min, int max) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` MinMaxBounds.Ints.between(min, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L147) |
| ` public Builder amount(int exactly) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` MinMaxBounds.Ints.exactly(exactly) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L152) |
| ` public Builder negate() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L157) |
| ` public FluidStackPredicate build() ` | 实现调用 ` Optional.ofNullable(this.fluids) `<br>实现调用 ` Optional.empty() `<br>实现调用 ` Optional.of(this.component.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L162) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidStackPredicate.java#L92) |

## FluidUtil

` public class FluidUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidUtil.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<Component> getTooltip(FluidStack stack, int capacity, TooltipFlag flag) ` | ` (!FluidUtil.appendName(tooltip, stack, flag)) ` 成立时提前返回 ` tooltip `<br>末尾返回 ` tooltip `<br>[调用处 FluidDisplayWidget.extractWidgetRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidUtil.java#L18) |
| ` public static List<Component> getFilterTooltip(FluidStack stack, TooltipFlag flag) ` | ` (!FluidUtil.appendName(tooltip, stack, flag)) ` 成立时提前返回 ` tooltip `<br>末尾返回 ` tooltip `<br>[调用处 ControlValveScreen.extractTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L376) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidUtil.java#L31) |
| ` public FluidUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FluidUtil.java#L17) |

## FormattingUtil

` public class FormattingUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L15)

格式化工具

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String toLowerCaseUnderscore(String string) ` | 与 .to(LOWER\_UNDERSCORE, string) 几乎相同，但它也会在单词和数字之间插入下划线。<br>参数 ` string ` 任何带有 ASCII 字符的字符串。<br>返回 全小写的字符串，在单词/数字边界前插入下划线：“maragingSteel300” -&gt; “maraging\_steel\_300”<br>末尾返回 ` result.toString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L21) |
| ` public static String toLowerCaseUnder(String string) ` | 与 .to(LOWER\_UNDERSCORE, string) 几乎相同，但它也会在单词和数字之间插入下划线。<br>参数 ` string ` 任何带有 ASCII 字符的字符串。<br>返回 全小写的字符串，在单词/数字边界前插入下划线：“maragingSteel300” -&gt; “maraging\_steel\_300”<br>末尾返回 ` CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_UNDERSCORE, string) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L40) |
| ` public static String toEnglishName(Object internalName) ` | apple\_orange.juice =&gt; Apple Orange (Juice)<br>末尾返回 ` Arrays.stream(internalName.toString().toLowerCase(Locale.ROOT).split("_")).map(StringUtils::capitalize).collect(Collectors.joining(" ")) `<br>[调用处 ActiveSilencerScreen.getSoundName](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L177) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L45) |
| ` public static String toFormattedTime(int total, int thresholdInSec) ` | 对应表： \| tick数 \| 阈值 \| 显示效果 \| \|:---------\|:---:\|:----------\| \| \`30gt\` \| \`1\` \| \`1"50\` \| \| \`30gt\` \| \`5\` \| \`30gt\` \| \| \`100gt\` \| \`5\` \| \`5"\` \| \| \`150gt\` \| \`5\` \| \`7"50\` \| \| \`1200gt\` \| \`5\` \| \`1'\` \| \| \`1220gt\` \| \`5\` \| \`1'01\` \| \| \`1635gt\` \| \`5\` \| \`1'21"75\` \|<br>参数 ` total ` 总tick数<br>参数 ` thresholdInSec ` 切换显示格式的阈值（秒），小于该值时显示gt格式，否则显示分秒格式<br>返回 格式化后的时间字符串<br>` (total < thresholdTicks) ` 成立时提前返回 ` total + "gt" `<br>末尾返回 ` result.toString() `<br>[调用处 HeatableBlockTooltipProvider.tooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L67) |
| ` public static String toFormattedTime(int total) ` | 格式化时间（简单人性化格式）<br>参数 ` total ` 总tick数<br>返回 格式化后的时间字符串，如 "4m 0s"<br>` (total <= 0) ` 成立时提前返回 ` "0m 0s" `<br>末尾返回 ` "%dm %ds".formatted(minutes, seconds) `<br>[调用处 BurningHeaterTooltipProvider.tooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L107) |
| ` public static Component toShadeProgress(double progress, int length, ChatFormatting... format) ` | 根据进度生成一个给定长度的进度条<br>参数 ` progress ` 进度，0-1<br>返回 进度条文本<br>末尾返回 ` Component.literal(progressStr.toString()).withStyle(format) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L119) |
| ` public static String toAbbrNum(int number) ` | 末尾返回 ` FormattingUtil.toAbbrNum((long) number) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L140) |
| ` public static String toAbbrNum(long number) ` | ` (number < 1000) ` 成立时提前返回 ` String.valueOf(number) `<br>末尾返回 ` String.valueOf(number) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/FormattingUtil.java#L144) |
