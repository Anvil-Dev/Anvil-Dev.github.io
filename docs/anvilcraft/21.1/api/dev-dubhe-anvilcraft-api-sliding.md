# dev.dubhe.anvilcraft.api.sliding



## SlidingBlockInfo

` public record SlidingBlockInfo(Vec3i offset, BlockState state, BlockEntity blockEntity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<SlidingBlockInfo> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L25) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SlidingBlockInfo> STREAM_CODEC ` | 由 ` StreamCodec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L37) |
| ` public BlockPos getPos(BlockPos center) ` | 末尾返回 ` center.offset(this.offset) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L54) |
| ` public int offsetX() ` | 末尾返回 ` this.offset.getX() `<br>[调用处 SlidingBlockInfo.getPos2D](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L86) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L58) |
| ` public int offsetY() ` | 末尾返回 ` this.offset.getY() `<br>[调用处 SlidingBlockInfo.getPos2D](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L62) |
| ` public int offsetZ() ` | 末尾返回 ` this.offset.getZ() `<br>[调用处 SlidingBlockInfo.getPos2D](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L66) |
| ` public CompoundTag beTag() ` | ` (this.blockEntity == null) ` 成立时提前返回 ` new CompoundTag() `<br>` (this.blockEntity.getLevel() != null) ` 成立时提前返回 ` this.blockEntity.saveWithFullMetadata(this.blockEntity.getLevel().registryAccess()) `<br>末尾返回 ` tag `<br>实现调用 ` this.blockEntity.getLevel() `<br>分支 ` (this.blockEntity.getLevel() != null) ` 内调用 ` this.blockEntity.saveWithFullMetadata(this.blockEntity.getLevel().registryAccess()) `<br>分支 ` (this.blockEntity.getLevel() != null) ` 内调用 ` this.blockEntity.getLevel().registryAccess() `<br>分支 ` (this.blockEntity.getLevel() != null) ` 内调用 ` this.blockEntity.getLevel() `<br>实现调用 ` this.blockEntity.saveWithoutMetadata(RegistryAccess.EMPTY) `<br>实现调用 ` Objects.requireNonNull(BuiltInRegistries.BLOCK_ENTITY_TYPE.getKey(this.blockEntity.getType())).toString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L70) |
| ` public IntIntPair getPos2D(Direction side) ` | 实现调用 ` side.getAxis() `<br>实现调用 ` IntIntPair.of(this.offsetY(), this.offsetZ()) `<br>实现调用 ` this.offsetY() `<br>实现调用 ` this.offsetZ() `<br>实现调用 ` IntIntPair.of(this.offsetX(), this.offsetZ()) `<br>实现调用 ` this.offsetX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L83) |
| ` public SlidingBlockInfo(Vec3i offset, BlockState state, BlockEntity blockEntity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L24) |
| ` public Vec3i offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L24) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L24) |
| ` public BlockEntity blockEntity() ` | 读取 record 分量 ` blockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockInfo.java#L24) |

## SlidingBlockSection

` public final class SlidingBlockSection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SlidingBlockSection EMPTY ` | 初值 ` new SlidingBlockSection(List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L42) |
| ` public static final Codec<SlidingBlockSection> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( SlidingBlockInfo.CODEC.listOf().fieldOf("blocks").forGetter(SlidingBlockSection::blocks) ).apply(ins, SlidingBlockSection::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L43) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SlidingBlockSection> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.collection(ArrayList::new, SlidingBlockInfo.STREAM_CODEC), SlidingBlockSection::blocks, SlidingBlockSection::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L46) |
| ` public SlidingBlockSection(List<SlidingBlockInfo> blocks) ` | 执行 ` this.blocks = blocks `<br>[调用处 SlidingEntitySyncPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java#L37) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L53) |
| ` public static SlidingBlockSection create(BlockPos center, Iterable<Triple<BlockPos, BlockState, Optional<BlockEntity>>> infos) ` | 末尾返回 ` new SlidingBlockSection(builder.build()) `<br>实现调用 ` ImmutableList.builder() `<br>实现调用 ` infoRaw.getLeft() `<br>实现调用 ` infoRaw.getMiddle() `<br>实现调用 ` infoRaw.getRight() `<br>实现调用 ` MathUtil.dist(otherPos, center) `<br>实现调用 ` blockEntity.orElse(null) `<br>[调用处 SlidingBlockEntity.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L57) |
| ` public int size() ` | 末尾返回 ` this.blocks.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L70) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.blocks.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L74) |
| ` public Vec3 findCollide(Vec3 center, AABB box) ` | 末尾返回 ` vector `<br>实现调用 ` info.offsetX() `<br>实现调用 ` info.offsetY() `<br>实现调用 ` info.offsetZ() `<br>实现调用 ` min.add(1, 1, 1) `<br>实现调用 ` box.clip(min, max).ifPresent(vector::add) `<br>实现调用 ` box.clip(min, max) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L78) |
| ` public List<Vec3i> getWallsOnSide(Direction side) ` | ` (this.sideCache.containsKey(side)) ` 成立时提前返回 ` this.sideCache.get(side).getFirst() `<br>末尾返回 ` this.sideCache.get(side).getFirst() `<br>实现调用 ` this.sideCache.containsKey(side) `<br>分支 ` (this.sideCache.containsKey(side)) ` 内调用 ` this.sideCache.get(side).getFirst() `<br>分支 ` (this.sideCache.containsKey(side)) ` 内调用 ` this.sideCache.get(side) `<br>实现调用 ` this.calculateSide(side) `<br>实现调用 ` this.sideCache.get(side).getFirst() `<br>实现调用 ` this.sideCache.get(side) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L88) |
| ` public AABB getBoundsOnSide(Direction side) ` | ` (this.sideCache.containsKey(side)) ` 成立时提前返回 ` this.sideCache.get(side).getSecond() `<br>末尾返回 ` this.sideCache.get(side).getSecond() `<br>实现调用 ` this.sideCache.containsKey(side) `<br>分支 ` (this.sideCache.containsKey(side)) ` 内调用 ` this.sideCache.get(side).getSecond() `<br>分支 ` (this.sideCache.containsKey(side)) ` 内调用 ` this.sideCache.get(side) `<br>实现调用 ` this.calculateSide(side) `<br>实现调用 ` this.sideCache.get(side).getSecond() `<br>实现调用 ` this.sideCache.get(side) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L94) |
| ` public void setBlock(Level level, BlockPos center, Entity entity) ` | 实现调用 ` info.getPos(center) `<br>实现调用 ` info.state() `<br>实现调用 ` level.isOutsideBuildHeight(pos) `<br>分支 ` (level.isOutsideBuildHeight(pos)) ` 内调用 ` this.dropBlock(level, pos, state, info) `<br>实现调用 ` level.getFluidState(pos).getType() `<br>实现调用 ` level.getFluidState(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L125) |
| ` @Override public String toString() ` | 末尾返回 ` "Section[" + this.blocks + ']' ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L188) |
| ` public List<SlidingBlockInfo> blocks() ` | 末尾返回 ` this.blocks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L193) |
| ` @Override public boolean equals(Object obj) ` | ` (obj == this) ` 成立时提前返回 ` true `<br>` (!(obj instanceof SlidingBlockSection that)) ` 成立时提前返回 ` false `<br>末尾返回 ` Objects.equals(this.blocks, that.blocks) `<br>实现调用 ` Objects.equals(this.blocks, that.blocks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L197) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hash(this.blocks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java#L204) |

## SlidingBlockStructureResolver

` public class SlidingBlockStructureResolver `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L20)

No-pistonPos-Check PistonStructureResolver

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int maxPushDepth() ` | 当前允许的最大推动深度：默认读取配置，若其他模组改动了原版活塞上限则优先沿用该上限。<br>末尾返回 ` pistonPushDepth == VANILLA_PUSH_DEPTH ? AnvilCraft.CONFIG.world.slidingRailMaxPushDepth : pistonPushDepth ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L29) |
| ` public static void syncPistonPushDepth(int depth) ` | 由活塞解析同步原版推动上限。<br>执行 ` pistonPushDepth = depth `<br>[调用处 PistonStructureResolverMixin.updateMaxPushDepth](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PistonStructureResolverMixin.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L38) |
| ` public SlidingBlockStructureResolver(Level level, BlockPos startPos, Direction pistonDirection, boolean extending) ` | 分支 ` !(extending) ` 内调用 ` pistonDirection.getOpposite() `<br>[调用处 ISlidingRail.moveBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/sliding/ISlidingRail.java#L125) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L61) |
| ` public void addIgnorePosition(BlockPos pos) ` | 执行 ` this.ignorePositions.add(pos.immutable()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L73) |
| ` public boolean resolve() ` | 实现调用 ` this.toPush.clear() `<br>实现调用 ` this.toDestroy.clear() `<br>实现调用 ` this.level.getBlockState(this.startPos) `<br>实现调用 ` this.pushReactionAt(this.startPos, blockstate) `<br>实现调用 ` this.toDestroy.add(this.startPos) `<br>实现调用 ` SlidingStructureHooks.expand(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L77) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public boolean addBlockLine(BlockPos originPos, Direction direction) ` | ` (this.ignorePositions.contains(originPos)) ` 成立时提前返回 ` true `<br>` (nowState.isAir() \|\| !PistonBaseBlock.isPushable(nowState, this.level, originPos, this.pushDirection, false, direction) \|\| this.toPush.contains(originPos)) ` 成立时提前返回 ` true `<br>` (toPushSize + this.toPush.size() > maxPushDepth()) ` 成立时提前返回 ` false `<br>实现调用 ` this.ignorePositions.contains(originPos) `<br>实现调用 ` this.level.getBlockState(originPos) `<br>实现调用 ` nowState.isAir() `<br>实现调用 ` PistonBaseBlock.isPushable(nowState, this.level, originPos, this.pushDirection, false, direction) `<br>实现调用 ` this.toPush.contains(originPos) `<br>实现调用 ` this.toPush.size() `<br>[调用处 SlidingBlockStructureResolver.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L98) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public boolean addBranchingBlocks(BlockPos fromPos) ` | 末尾返回 ` true `<br>实现调用 ` this.level.getBlockState(fromPos) `<br>实现调用 ` Direction.values() `<br>实现调用 ` dir.getAxis() `<br>实现调用 ` this.pushDirection.getAxis() `<br>分支 ` (dir.getAxis() != this.pushDirection.getAxis()) ` 内调用 ` fromPos.relative(dir) `<br>分支 ` (dir.getAxis() != this.pushDirection.getAxis()) ` 内调用 ` this.ignorePositions.contains(branchPos) `<br>[调用处 SlidingBlockStructureResolver.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L92) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L200) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L20) |
| ` public Direction getPushDirection() ` | 末尾返回 ` this.pushDirection `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L20) |
| ` public List<BlockPos> getToPush() ` | All block positions to be moved by the piston<br>末尾返回 ` this.toPush `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L20) |
| ` public List<BlockPos> getToDestroy() ` | All blocks to be destroyed by the piston<br>末尾返回 ` this.toDestroy `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L20) |

## SlidingRailLoad

` public final class SlidingRailLoad `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingRailLoad.java#L15)

检测滑轨上的滑动载荷。在服务器 tick 中调用，查询不得改变世界状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerOccupant(OccupantCheck check) ` | 执行 ` EXTRA.add(check) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingRailLoad.java#L21) |
| ` public static boolean hasBlockLoad(ServerLevel level, BlockPos railPos) ` | ` (!level.getEntitiesOfClass(SlidingBlockEntity.class, above).isEmpty()) ` 成立时提前返回 ` true `<br>末尾返回 ` false `<br>实现调用 ` railPos.above() `<br>实现调用 ` level.getEntitiesOfClass(SlidingBlockEntity.class, above).isEmpty() `<br>实现调用 ` level.getEntitiesOfClass(SlidingBlockEntity.class, above) `<br>实现调用 ` check.test(level, railPos, above) `<br>[调用处 DetectorSlidingRailBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/sliding/DetectorSlidingRailBlock.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingRailLoad.java#L25) |
| ` public static boolean hasItemLoad(ServerLevel level, BlockPos railPos) ` | 末尾返回 ` !level.getEntitiesOfClass(ItemEntity.class, new AABB(railPos)).isEmpty() `<br>[调用处 DetectorSlidingRailBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/sliding/DetectorSlidingRailBlock.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingRailLoad.java#L36) |

## SlidingRailLoad.OccupantCheck

` public interface OccupantCheck `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingRailLoad.java#L40)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean test(ServerLevel level, BlockPos railPos, AABB above) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingRailLoad.java#L42) |

## SlidingStructureExtension

` public interface SlidingStructureExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureExtension.java#L13)

附属可改写滑轨结构解析中的推动反应，并在原版解析成功后追加胶粘/粘性方块。 返回 false 表示结构无法移动。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default PushReaction modifyPushReaction( Level level, BlockPos pos, BlockState state, PushReaction original, Direction pushDirection ) ` | 末尾返回 ` original ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureExtension.java#L14) |
| ` default boolean expand(SlidingBlockStructureResolver resolver) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureExtension.java#L24) |

## SlidingStructureHooks

` public final class SlidingStructureHooks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureHooks.java#L16)

滑轨结构解析扩展：推动反应改写与解析成功后的额外收集。 在服务器线程调用；#modifyPushReaction 不得改变世界状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(SlidingStructureExtension extension) ` | 执行 ` EXTENSIONS.add(extension) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureHooks.java#L22) |
| ` public static PushReaction modifyPushReaction( Level level, BlockPos pos, BlockState state, PushReaction original, Direction pushDirection ) ` | 末尾返回 ` reaction `<br>实现调用 ` extension.modifyPushReaction(level, pos, state, reaction, pushDirection) `<br>[调用处 SlidingBlockStructureResolver.pushReactionAt](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L223) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureHooks.java#L26) |
| ` public static boolean expand(SlidingBlockStructureResolver resolver) ` | 末尾返回 ` true `<br>实现调用 ` extension.expand(resolver) `<br>[调用处 SlidingBlockStructureResolver.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureHooks.java#L40) |
