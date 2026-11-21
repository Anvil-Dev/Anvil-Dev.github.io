# dev.dubhe.anvilcraft.util（GravityManager.GravitySourceManager 至 ModClientFluidTypeExtensionImpl）



## GravityManager.GravitySourceManager

` public static final class GravitySourceManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L517)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerSourceType( Class<? extends Block> blockClass, IntSupplier radius, DoubleSupplier strength ) ` | 注册重力源类型；半径与强度在运行时读取，配置改动后立即生效。<br>参数 ` radius ` 重力场半径提供者<br>参数 ` strength ` 重力场强度提供者<br>执行 ` REGISTRY.put(blockClass, new SourceTypeFactory(radius, strength)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L529) |
| ` public static @Nullable GravitySourceType getType(Block block) ` | 末尾返回 ` factory == null ? null : factory.create() `<br>[调用处 BlackHoleBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L535) |
| ` public static void addSource(Level level, BlockPos pos, GravitySourceType type) ` | 执行 ` upsertSource(level, pos, pos.getCenter(), type) `<br>[调用处 BlackHoleBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L546) |
| ` public static void upsertSource(Level level, BlockPos id, Vec3 center, GravitySourceType type) ` | 实现调用 ` type.isValid() `<br>实现调用 ` isFinite(center) `<br>实现调用 ` GRAVITY_FIELDS.computeIfAbsent(level, ignored -> new GravityFieldIndex()) `<br>[调用处 CfaGravityController.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaGravityController.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L550) |
| ` public static void removeSource(Level level, BlockPos id) ` | 实现调用 ` GRAVITY_FIELDS.get(level) `<br>实现调用 ` index.remove(id) `<br>实现调用 ` wakeAffectedFallingBlocks(level, removed, null) `<br>[调用处 BlackHoleBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L570) |
| ` public static Vec3 calculateGravityVector(Level level, Vec3 position, double g) ` | 末尾返回 ` calculateGravityVector(level, position, g, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L593) |

## GravityManager.GravitySourceType

` public record GravitySourceType(double strength, int radius, double bodyRadius) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L490)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GravitySourceType(double strength, int radius) ` | 执行 ` this(strength, radius, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L491) |
| ` public boolean isValid() ` | 实现调用 ` Double.isFinite(this.strength) `<br>实现调用 ` Math.abs(this.strength) `<br>实现调用 ` Double.isFinite(this.bodyRadius) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L495) |
| ` public double strength() ` | 读取 record 分量 ` strength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L490) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L490) |
| ` public double bodyRadius() ` | 读取 record 分量 ` bodyRadius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L490) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L490) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L490) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L490) |

## GravityManager.OrbitalMotion

` public static final class OrbitalMotion `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L399)

Per-entity, per-tick state also covers falling blocks whose horizontal kick occurs after movement.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OrbitalMotion() ` | Java 提供的无参构造器。<br>[调用处 EntityMixin](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L67) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L399) |

## GravityType

` public enum GravityType `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NORMAL ` | 声明于枚举 ` GravityType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L7) |
| ` ANTI_GRAVITY ` | 声明于枚举 ` GravityType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L8) |
| ` MICRO_ANTI_GRAVITY ` | 声明于枚举 ` GravityType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L9) |
| ` LOW_GRAVITY ` | 声明于枚举 ` GravityType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L10) |
| ` public double getScalar() ` | 末尾返回 ` this.scalar `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L6) |
| ` public static GravityType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L6) |
| ` public static GravityType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L6) |

## HeaterUtil

` public class HeaterUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/HeaterUtil.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isActiveHeatSource(BlockState state) ` | ` (CampfireBlock.isLitCampfire(state) && state.is(Blocks.CAMPFIRE)) ` 成立时提前返回 ` true `<br>` (state.is(ModBlocks.HEATER)) ` 成立时提前返回 ` ((HeaterBlock) state.getBlock()).isActive(state) `<br>` (state.is(ModBlocks.BURNING_HEATER)) ` 成立时提前返回 ` state.getValue(BurningHeaterBlock.LEVEL) > 0 `<br>` (state.is(ModBlocks.CORRUPTED_BEACON)) ` 成立时提前返回 ` state.getValue(CorruptedBeaconBlock.LIT) `<br>末尾返回 ` state.getBlock() instanceof NeutronIrradiatorBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/HeaterUtil.java#L19) |
| ` public static boolean hurtEntity(Level level, BlockState state, Entity entity) ` | ` (!(state.getBlock() instanceof IDamagingHeater heater) \|\| !heater.isActive(state) \|\| entity.isSteppingCarefully() \|\| !(entity instanceof LivingEntity)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 BurningHeaterBlock.stepOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BurningHeaterBlock.java#L148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/HeaterUtil.java#L27) |
| ` public HeaterUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/HeaterUtil.java#L18) |

## HorizontalDirection

` public final class HorizontalDirection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/HorizontalDirection.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Direction[] HORIZONTAL_DIRECTIONS ` | 初值 ` new Direction[] {Direction.EAST, Direction.SOUTH, Direction.WEST, Direction.NORTH} ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/HorizontalDirection.java#L8) |

## IStateListener

` public interface IStateListener<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/IStateListener.java#L6)

状态监听器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` T getState() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/IStateListener.java#L8) |
| ` void notifyStateChanged(T newState) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/IStateListener.java#L10) |

## Impersonators

` public final class Impersonators `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final IImpersonator<Armadillo> ARMADILLO ` | 初值 ` Impersonators.of(Armadillo.class, DummyArmadillo::fromEntity) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L18) |
| ` public static final IImpersonator<Cat> CAT ` | 初值 ` Impersonators.of(Cat.class, DummyCat::fromEntity) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L19) |
| ` public static final IImpersonator<Wolf> WOLF ` | 初值 ` Impersonators.of(Wolf.class, DummyWolf::fromEntity) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L20) |
| ` public static <T extends LivingEntity> IImpersonator<T> of(Class<T> clazz, Function<LivingEntity, T> factory) ` | 末尾返回 ` new Simple<>(clazz, factory) `<br>[调用处 Impersonators](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L22) |

## InfiniteFluidTankBreakProtection

` public final class InfiniteFluidTankBreakProtection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L22)

含无限液体储罐的玩家破坏保护。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isProtected(Level level, BlockPos pos) ` | 末尾返回 ` findProtectedTarget(level, pos).isPresent() `<br>[调用处 ClientBlockEventListener.syncInfiniteFluidTankBreakModifiers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L31) |
| ` public static void updateModifierAuthorization(ServerPlayer player, BlockPos pos, boolean modifiersHeld) ` | 接收客户端挖掘时的组合键状态。授权只短暂保留，避免玩家松开按键后仍可破坏。<br>实现调用 ` player.getUUID() `<br>实现调用 ` player.serverLevel() `<br>实现调用 ` level.isLoaded(pos) `<br>[调用处 InfiniteFluidTankBreakModifierPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L38) |
| ` public static boolean shouldCancelBreak(ServerPlayer player, BlockPos pos) ` | 检查并处理一次玩家破坏。<br>返回 是否应取消本次破坏<br>` (protectedTarget.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 BreakBlockEventListener.preventInfiniteFluidTankBreak](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L63) |
| ` public static void showToolBreakDenied(Player player) ` | 执行 ` player.displayClientMessage( Component.translatable("screen.anvilcraft.tooltip.fluid_tank.tool_break_failed") .withStyle(ChatFormatting.RED), true ) `<br>[调用处 AnvilHammerItem.breakBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L125) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L95) |
| ` public static void clear(Player player) ` | 实现调用 ` player.getUUID() `<br>实现调用 ` CONFIRMATIONS.remove(playerId) `<br>实现调用 ` MODIFIER_AUTHORIZATIONS.remove(playerId) `<br>[调用处 BreakBlockEventListener.preventInfiniteFluidTankBreak](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L103) |

## LevelLike

` public class LevelLike implements BlockAndTintGetter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L44)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LevelLike(ClientLevel parent) ` | 执行 ` this.parent = parent `<br>[调用处 SmartBlockPlacerScreen.renderDisplayedBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L916) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L61) |
| ` public void addBlueprint(StructureSnapshot snapshot, BlueprintPlacement placement) ` | 实现调用 ` BlueprintBlockConfiguration.sourceOrigin(snapshot) `<br>实现调用 ` BlueprintMultiblocks.expand(snapshot, placement, -1) `<br>实现调用 ` block.nbt() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L65) |
| ` public long getAnimationFrame() ` | 候选方块每秒轮换，预览缓存需要随显示帧刷新。<br>末尾返回 ` this.blocks.size() > this.blocks.keySet().size() ? System.currentTimeMillis() / 1000 : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L86) |
| ` public List<Entity> getEntities() ` | 末尾返回 ` Collections.unmodifiableList(this.entities) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L90) |
| ` public AABB getRenderBounds() ` | 末尾返回 ` bounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L94) |
| ` @Override public ModelData getModelData(BlockPos pos) ` | 末尾返回 ` entity == null ? ModelData.EMPTY : entity.getModelData() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L101) |
| ` public int horizontalSize() ` | 末尾返回 ` Math.max(keys.stream().map(BlockPos::getX).max(Integer::compare).map(it -> it + 1).orElse(0), keys.stream().map(BlockPos::getZ).max(Integer::compare).map(it -> it + 1).orElse(0)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L107) |
| ` public int verticalSize() ` | 末尾返回 ` keys.stream().map(BlockPos::getY).max(Integer::compare).map(it -> it + 1).orElse(0) `<br>[调用处 LevelLike.nextLayer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L307) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L122) |
| ` @Override public @Nullable BlockEntity getBlockEntity(BlockPos blockPos) ` | ` (blocks.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` blocks.get((int) ((System.currentTimeMillis() / 1000) % blocks.size())).be() `<br>[调用处 LevelLike.getModelData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L131) |
| ` public void setBlockState(BlockPos pos, BlockStatePredicate predicate) ` | 执行 ` this.setBlockStateWithAlpha(pos, predicate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L138) |
| ` public void setBlockState(BlockPos pos, BlockState state) ` | 执行 ` this.setBlockStateWithAlpha(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L142) |
| ` public void setBlockState(BlockPos pos, BlockState state, @Nullable CompoundTag data) ` | 实现调用 ` this.setBlockState(pos, state) `<br>分支 ` (data != null) ` 内调用 ` this.storeBlockEntityData(pos, data) `<br>分支 ` (data != null) ` 内调用 ` this.blocks.removeAll(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L146) |
| ` public @Nullable CompoundTag getBlockEntityData(BlockPos pos) ` | 末尾返回 ` data == null ? null : data.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L155) |
| ` public void setBlockStateAlwaysRender(BlockPos pos, BlockStatePredicate predicate) ` | 实现调用 ` this.setBlockStateWithAlpha(pos, predicate) `<br>实现调用 ` this.alwaysRenderBlocks.add(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L171) |
| ` public void setBlockStateAlwaysRender(BlockPos pos, BlockState state) ` | 实现调用 ` this.setBlockStateWithAlpha(pos, state) `<br>实现调用 ` this.alwaysRenderBlocks.add(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L176) |
| ` public void setBlockStateWithAlpha(BlockPos pos, BlockStatePredicate predicate) ` | 实现调用 ` this.blockEntityData.remove(pos) `<br>实现调用 ` this.blocks.removeAll(pos) `<br>实现调用 ` collectRenderStates(predicate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L181) |
| ` public void setBlockStateWithAlpha(BlockPos pos, BlockState state) ` | 实现调用 ` this.blockEntityData.remove(pos) `<br>实现调用 ` this.blocks.removeAll(pos) `<br>实现调用 ` state.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L208) |
| ` public Set<BlockPos> getAlwaysRenderBlocks() ` | 末尾返回 ` Collections.unmodifiableSet(this.alwaysRenderBlocks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L241) |
| ` public BlockState getBlockState(BlockPos pos) ` | ` (!this.alwaysRenderBlocks.contains(pos) && !this.allLayersVisible && pos.getY() != this.currentVisibleLayer) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() `<br>` (blocks.isEmpty()) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() `<br>末尾返回 ` this.blocks.get(pos).get((int) ((System.currentTimeMillis() / 1000) % blocks.size())).state() `<br>[调用处 LevelLike.getFluidState](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L257) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L245) |
| ` @Override public FluidState getFluidState(BlockPos blockPos) ` | 末尾返回 ` this.getBlockState(blockPos).getFluidState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L255) |
| ` @Override public float getShade(Direction direction, boolean b) ` | ` (!b) ` 成立时提前返回 ` flag ? 0.9F : 1.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L260) |
| ` @Override public LevelLightEngine getLightEngine() ` | 末尾返回 ` this.parent.getLightEngine() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L275) |
| ` @Override public int getBlockTint(BlockPos blockPos, ColorResolver colorResolver) ` | 末尾返回 ` colorResolver.getColor(plains, blockPos.getX(), blockPos.getZ()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L280) |
| ` @Override public int getHeight() ` | 末尾返回 ` 256 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L286) |
| ` @Override public int getMinBuildHeight() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L291) |
| ` @Override public int getBrightness(LightLayer type, BlockPos pos) ` | 末尾返回 ` 14 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L296) |
| ` @Override public int getRawBrightness(BlockPos pos, int amount) ` | 末尾返回 ` 14 - amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L301) |
| ` public void nextLayer() ` | 实现调用 ` this.verticalSize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L306) |
| ` public void previousLayer() ` | 分支 ` (this.currentVisibleLayer <= 0) ` 内调用 ` this.verticalSize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L314) |
| ` public long getRevision() ` | 末尾返回 ` this.revision `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L44) |
| ` public void setCurrentVisibleLayer(final int currentVisibleLayer) ` | 执行 ` this.currentVisibleLayer = currentVisibleLayer `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L44) |
| ` public int getCurrentVisibleLayer() ` | 末尾返回 ` this.currentVisibleLayer `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L44) |
| ` public void setAllLayersVisible(final boolean allLayersVisible) ` | 执行 ` this.allLayersVisible = allLayersVisible `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L44) |
| ` public boolean isAllLayersVisible() ` | 末尾返回 ` this.allLayersVisible `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L44) |

## LevelLike.AirLevelLike

` public static class AirLevelLike extends LevelLike `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L322)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AirLevelLike(ClientLevel parent) ` | 执行 ` super(parent) `<br>[调用处 RenderSupport.renderBlockWithRotationNoTranslate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L210) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L323) |
| ` @Override public BlockState getBlockState(BlockPos pos) ` | 末尾返回 ` Blocks.AIR.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L327) |
| ` @Override public FluidState getFluidState(BlockPos blockPos) ` | 末尾返回 ` Fluids.EMPTY.defaultFluidState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L332) |

## LightningPathGenerator

` public class LightningPathGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void generatePath(Vec3 start, Vec3 end, int branches, double deviationPercentage, @Nullable PathConsumer consumer) ` | 实现调用 ` end.subtract(start) `<br>实现调用 ` vector.length() `<br>实现调用 ` current.add(vector.scale(1.0 / branches)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L10) |
| ` public LightningPathGenerator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L9) |

## LightningPathGenerator.PathConsumer

` public interface PathConsumer extends BiConsumer<Vec3, Vec3> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L33)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override void accept(Vec3 start, Vec3 end) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L35) |

## LiquidEnchantmentClientFluidTypeExtension

` public class LiquidEnchantmentClientFluidTypeExtension extends ModClientFluidTypeExtensionImpl `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LiquidEnchantmentClientFluidTypeExtension(ResourceLocation texture) ` | 执行 ` super(texture, texture) `<br>[调用处 ModFluids.onRegisterFluidType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L550) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L15) |
| ` public int[] getLayerColors(FluidStack stack) ` | 原贴图、魔咒色与诅咒红色按顺序作为独立渲染层。<br>` (enchantment.isEmpty()) ` 成立时提前返回 ` BASE_LAYER `<br>末尾返回 ` new int[]{0xFFFFFFFF, enchantmentLayer} `<br>[调用处 LiquidEnchantmentClientFluidTypeExtension.getTintColor](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L20) |
| ` @Override public int getTintColor(FluidStack stack) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L31) |

## LiquidEnchantmentUtil

` public final class LiquidEnchantmentUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static FluidStack fromBook(ItemStack stack) ` | ` (!stack.is(Items.BOOK) && !stack.is(Items.ENCHANTED_BOOK)) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` fluid `<br>[调用处 EnchantedBookFluidHandler.getFluidInTank](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L28) |
| ` public static Optional<Holder<Enchantment>> getEnchantment(FluidStack stack) ` | ` (!stack.is(ModFluids.LIQUID_ENCHANTMENT.get())) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.ofNullable(stack.get(ModComponents.LIQUID_ENCHANTMENT)) .flatMap(key -> Objects.requireNonNull(CommonHooks.resolveLookup(Registries.ENCHANTMENT)).get(key)) `<br>[调用处 AutoEnchantingTableBlockEntity.canPerformWork](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/AutoEnchantingTableBlockEntity.java#L373) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L40) |
| ` public static boolean isBlank(FluidStack stack) ` | 末尾返回 ` stack.is(ModFluids.LIQUID_ENCHANTMENT.get()) && getEnchantment(stack).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L46) |
| ` public static boolean isEnchanted(FluidStack stack) ` | 末尾返回 ` getEnchantment(stack).isPresent() `<br>[调用处 AutoEnchantingTableBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/AutoEnchantingTableBlockEntity.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L50) |
| ` public static boolean isCursed(FluidStack stack) ` | 末尾返回 ` getEnchantment(stack).filter(enchantment -> enchantment.is(EnchantmentTags.CURSE)).isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L54) |
| ` public static int getColor(Holder<Enchantment> enchantment) ` | 根据魔咒完整注册名计算跨存档稳定的 24 位 FNV-1a 颜色。<br>末尾返回 ` hash & 0xFFFFFF `<br>[调用处 LiquidEnchantmentClientFluidTypeExtension.getLayerColors](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L59) |
| ` public static int curseLayer(Holder<Enchantment> enchantment) ` | 返回诅咒液态魔咒专用的渲染覆盖层颜色；消失诅咒偏橙红、绑定诅咒偏玫红，其余诅咒回退通用深红。<br>` (path.equals("vanishing_curse")) ` 成立时提前返回 ` 0xF0E83400 `<br>` (path.equals("binding_curse")) ` 成立时提前返回 ` 0xF0C01050 `<br>末尾返回 ` 0xE8990000 `<br>[调用处 LiquidEnchantmentClientFluidTypeExtension.getLayerColors](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L72) |
| ` public static long amountForLevel(int level) ` | ` (level <= 0) ` 成立时提前返回 ` 0 `<br>` (level >= Long.SIZE) ` 成立时提前返回 ` Long.MAX_VALUE `<br>末尾返回 ` 1L << (level - 1) `<br>[调用处 AutoEnchantingTableBlockEntity.canPerformWork](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/AutoEnchantingTableBlockEntity.java#L380) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L82) |
| ` public static int levelForAmount(long amount) ` | 末尾返回 ` amount <= 0 ? 0 : Long.SIZE - Long.numberOfLeadingZeros(amount) `<br>[调用处 AutoEnchantingTableBlockEntity.computeLiquidMaxLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/AutoEnchantingTableBlockEntity.java#L536) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L88) |

## MagnetUtil

` public abstract class MagnetUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L50)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void animateAnvilFromMagnet(Level level, Vec3 start, BlockState state, BlockPos magnet, int... removedEntities) ` | 执行 ` sendAnimation(level, start, state, magnet.below(), true, removedEntities) `<br>[调用处 MagnetBlock.attract](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/MagnetBlock.java#L142) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L54) |
| ` public static void animateAscendingBlock(Level level, Vec3 start, BlockState state, BlockPos end) ` | 执行 ` sendAnimation(level, start, state, end, false, new int[0]) `<br>[调用处 GunpowderBlockBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/GunpowderBlockBehavior.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L58) |
| ` @SubscribeEvent public static void onLevelTick(LevelTickEvent.Post event) ` | 事件总线派发 ` LevelTickEvent.Post ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` PENDING_ANIMATIONS.remove(level) `<br>实现调用 ` animation.send(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L75) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ServerLevel level) ` 内调用 ` PENDING_ANIMATIONS.remove(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L84) |
| ` public static boolean hasMagnetism(Level level, BlockPos pos) ` | 末尾返回 ` (state.is(ModBlockTags.MAGNET) \|\| state.getBlock() instanceof MagnetBlock) && state.hasProperty(MagnetBlock.LIT) && !state.getValue(MagnetBlock.LIT) `<br>[调用处 SpectralAnvilBlock.neighborChanged](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SpectralAnvilBlock.java#L148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L107) |
| ` public static InteractionResult placeMagnetizedNode(Item item, UseOnContext context) ` | ` (player == null) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!player.isShiftKeyDown()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (blockState.isAir()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!blockState.getBlock().properties().hasCollision && maxY == 0) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` InteractionResult.sidedSuccess(level.isClientSide()) `<br>[调用处 MultitoolItem.useOnAsMagnet](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L367) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L115) |
| ` public static InteractionResultHolder<ItemStack> magnetizeItems( Item item, Level level, Player player, InteractionHand usedHand ) ` | ` (player.isShiftKeyDown()) ` 成立时提前返回 ` InteractionResultHolder.pass(player.getItemInHand(usedHand)) `<br>` (event.isCanceled()) ` 成立时提前返回 ` InteractionResultHolder.pass(itemStack) `<br>末尾返回 ` InteractionResultHolder.sidedSuccess(itemStack, level.isClientSide()) `<br>[调用处 MultitoolItem.useAsMagnet](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/MultitoolItem.java#L209) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L158) |
| ` public MagnetUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L50) |

## ModClientFluidTypeExtensionImpl

` public class ModClientFluidTypeExtensionImpl implements IClientFluidTypeExtensions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Getter public final ResourceLocation stillTexture ` | 字段类型为 ` ResourceLocation ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L14) |
| ` @Getter public final ResourceLocation flowingTexture ` | 字段类型为 ` ResourceLocation ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L16) |
| ` public final boolean noFog ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L18) |
| ` public final int fogColor ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L19) |
| ` public final float fogDistance ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L20) |
| ` public final int tintColor ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L21) |
| ` public ModClientFluidTypeExtensionImpl( ResourceLocation stillTexture, ResourceLocation flowingTexture, int fogColor, float fogDistance ) ` | [调用处 ModFluids.onRegisterFluidType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L542) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L25) |
| ` public ModClientFluidTypeExtensionImpl( ResourceLocation stillTexture, ResourceLocation flowingTexture, int fogColor, float fogDistance, int tintColor, boolean opaque ) ` | [调用处 ModFluids.onRegisterFluidType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L429) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L41) |
| ` public ModClientFluidTypeExtensionImpl( ResourceLocation stillTexture, ResourceLocation flowingTexture ) ` | [调用处 ModFluids.onRegisterFluidType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L554) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L58) |
| ` @Override public Vector3f modifyFogColor( Camera camera, float partialTick, ClientLevel level, int renderDistance, float darkenWorldAmount, Vector3f fluidFogColor ) ` | ` (this.noFog) ` 成立时提前返回 ` fluidFogColor `<br>末尾返回 ` new Vector3f(fogRed, fogGreen, fogBlue) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L71) |
| ` @Override public int getTintColor() ` | 末尾返回 ` this.tintColor ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L87) |
| ` @Override public void modifyFogRender( Camera camera, FogRenderer.FogMode mode, float renderDistance, float partialTick, float nearDistance, float farDistance, FogShape shape ) ` | 实现调用 ` camera.getEntity().isSpectator() `<br>实现调用 ` camera.getEntity() `<br>实现调用 ` RenderSystem.setShaderFogStart(0.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L92) |
| ` public ResourceLocation getStillTexture() ` | 末尾返回 ` this.stillTexture `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L13) |
| ` public ResourceLocation getFlowingTexture() ` | 末尾返回 ` this.flowingTexture `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L13) |
| ` public boolean isOpaque() ` | 末尾返回 ` this.opaque `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L13) |
