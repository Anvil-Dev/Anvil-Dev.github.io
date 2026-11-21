# dev.dubhe.anvilcraft.util（GravityManager 至 LightningPathGenerator.PathConsumer）



## GravityManager

` public final class GravityManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L61)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onChunkUnload(ChunkEvent.Unload event) ` | 事件总线派发 ` ChunkEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` GRAVITY_FIELDS.get(level) `<br>实现调用 ` index.idsOwnedByChunk(event.getChunk().getPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L88) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof Level level) ` 内调用 ` GRAVITY_FIELDS.remove(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L98) |
| ` public static void syncTo(ServerPlayer player) ` | 实现调用 ` GRAVITY_FIELDS.get(player.level()) `<br>实现调用 ` player.level() `<br>实现调用 ` List.of() `<br>[调用处 PlayerEventListener.onJoinedLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L195) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L105) |
| ` public static void applyNetworkSync( Level level, boolean replace, List<GravitySourcesSyncPacket.SourceData> sources, List<BlockPos> removed ) ` | 实现调用 ` GRAVITY_FIELDS.computeIfAbsent(level, ignored -> new GravityFieldIndex()) `<br>分支 ` (replace) ` 内调用 ` index.clear() `<br>实现调用 ` index.remove(id) `<br>[调用处 GravitySourcesSyncPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GravitySourcesSyncPacket.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L113) |
| ` public static Vec3 getNetGravityVector(Entity entity) ` | ` (entity.isNoGravity() \|\| AtmosphereManager.isCreativeFlying(entity) \|\| AccelerateManager.isControlledByRing(entity)) ` 成立时提前返回 ` Vec3.ZERO `<br>末尾返回 ` new Vec3(local.x, -entity.getGravity(), local.z) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L130) |
| ` public static boolean hasCustomSurfaceFriction(Entity entity) ` | ` (entity.noPhysics \|\| entity.isSpectator() \|\| entity.isPassenger() \|\| AtmosphereManager.isCreativeFlying(entity) \|\| AccelerateManager.isControlledByRing(entity) \|\| entity.isInWater() \|\| entity.isInLava() \|\| AtmosphereManager.isInFluid(entity)) ` 成立时提前返回 ` false `<br>` (entity instanceof LivingEntity living && living.shouldDiscardFriction()) ` 成立时提前返回 ` false `<br>末尾返回 ` Math.abs(gravity.x) > VECTOR_EPSILON \|\| Math.abs(gravity.z) > VECTOR_EPSILON \|\| gravity.y >= -VECTOR_EPSILON `<br>[调用处 AtmosphereLivingMixin.anvilcraft$directionalFriction](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/AtmosphereLivingMixin.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L139) |
| ` public static boolean hasFloorSupport(Entity entity) ` | ` (!(entity instanceof LivingEntity living) \|\| living.isFallFlying() \|\| entity.getDeltaMovement().y > VECTOR_EPSILON \|\| !hasCustomSurfaceFriction(entity)) ` 成立时提前返回 ` false `<br>` (gravity.lengthSqr() > VECTOR_EPSILON * VECTOR_EPSILON && gravity.y >= -VECTOR_EPSILON) ` 成立时提前返回 ` false `<br>末尾返回 ` Entity.collideBoundingBox(entity, probe, box, entity.level(), List.of()).y != probe.y `<br>[调用处 AtmosphereLivingMixin.anvilcraft$horizontalDrag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/AtmosphereLivingMixin.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L151) |
| ` @SubscribeEvent public static void onEntityTickPost(EntityTickEvent.Post event) ` | 事件总线派发 ` EntityTickEvent.Post ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` entity.isRemoved() `<br>实现调用 ` entity.getDeltaMovement().lengthSqr() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L163) |
| ` public static Vec3 applySurfaceFriction(Entity entity, Vec3 velocity) ` | 末尾返回 ` velocity.multiply(x, y, z) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L174) |
| ` public static GravityType getGravityType(Entity entity) ` | ` (entity instanceof StandableLevitatingBlockEntity \|\| entity instanceof LevitatingBlockEntity) ` 成立时提前返回 ` GravityType.ANTI_GRAVITY `<br>` (entity instanceof StandableFallingBlockEntity) ` 成立时提前返回 ` GravityType.LOW_GRAVITY `<br>末尾返回 ` GravityType.NORMAL `<br>[调用处 EntityMixin.anvilcraft$ApplyGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L353) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L210) |
| ` public static GravityType getFallingBlockGravityType(Block block) ` | 末尾返回 ` block.equals(ModBlocks.LEVITATION_POWDER_BLOCK.get()) ? GravityType.ANTI_GRAVITY : GravityType.NORMAL `<br>[调用处 LevitationPowderBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/LevitationPowderBlock.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L240) |
| ` public static Vec3 getGravityVector(Entity entity) ` | 末尾返回 ` getGravityVector(entity, GravitySourceManager.getEntityG(entity)) `<br>[调用处 EntityMixin.anvilcraft$ApplyHorizontalGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L386) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L254) |
| ` public static Vec3 getGravityVector(Entity entity, double baseGravity) ` | 末尾返回 ` gravity.scale(getGravityType(entity).getScalar()) `<br>[调用处 EntityMixin.anvilcraft$ApplyGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L354) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L258) |
| ` public static Vec3 applyMovementEffects(Entity entity, Vec3 movement) ` | 处理实体与可见天体的碰撞，并对相邻两次常规采样之间被完整穿过的引力场进行积分。<br>末尾返回 ` applyMovementEffects(entity, MoverType.SELF, movement) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L275) |
| ` public static Vec3 applyMovementEffects(Entity entity, MoverType moverType, Vec3 movement) ` | 末尾返回 ` applyMovementEffects(entity, moverType, movement, true) `<br>[调用处 EntityMixin.anvilcraft$applyGravityMovementEffects](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L279) |
| ` public static Vec3 applyOrbitalMovementEffects(Entity entity, MoverType moverType, Vec3 movement) ` | 末尾返回 ` applyMovementEffects(entity, moverType, movement, false) `<br>[调用处 ItemEntityMixin.anvilcraft$neutroniumMove](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L218) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L318) |
| ` public static double deferVerticalGravity(Entity entity, double gravity, double baseGravity) ` | Defers only the registered field; dimension gravity and extension gravity keep their original timing.<br>` (orbit == null \|\| !orbit.enabled \|\| orbit.handled) ` 成立时提前返回 ` gravity `<br>末尾返回 ` gravity + local.y `<br>[调用处 EntityMixin.anvilcraft$deferOrbitalGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L323) |
| ` public static Vec3 deferHorizontalGravity(Entity entity, Vec3 gravity) ` | ` (orbit == null \|\| !orbit.enabled) ` 成立时提前返回 ` gravity `<br>末尾返回 ` gravity.subtract(local.x, 0, local.z) `<br>[调用处 EntityMixin.anvilcraft$ApplyHorizontalGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L386) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L338) |
| ` public static void applyBodyContactEffects(Entity entity) ` | 实现调用 ` player.getAbilities() `<br>实现调用 ` entity.level().isClientSide() `<br>实现调用 ` entity.level() `<br>[调用处 EntityMixin.anvilcraft$applyCelestialBodyContactEffects](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L368) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L397) |
| ` public static Vec3 getNetGravityVectorForFallingBlock(Level level, Vec3 pos, GravityType gravityType) ` | 末尾返回 ` baseGravityVector.add(localGravityVector) `<br>[调用处 LevitationPowderBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/LevitationPowderBlock.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L456) |
| ` public static Vec3 getNetGravityVectorForFallingBlock(Entity entity) ` | 末尾返回 ` baseGravityVector.add(getGravityVector(entity, 0.04)) `<br>[调用处 FallingGiantAnvilEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L464) |
| ` public static void registerDimensionGravity(ResourceKey<Level> dimension, double gravity) ` | 执行 ` DIMENSION_GRAVITY_MAP.put(dimension, gravity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L472) |
| ` public static double getDimensionGravity(Level level) ` | 末尾返回 ` DIMENSION_GRAVITY_MAP.getOrDefault(level.dimension(), 1.0) `<br>[调用处 EntityMixin.anvilcraft$ApplyGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L357) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L476) |

## GravityManager.GravitySource

` public record GravitySource(BlockPos id, Vec3 center, GravitySourceType type) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L504)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GravitySource(BlockPos id, Vec3 center, GravitySourceType type) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L504) |
| ` public BlockPos id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L504) |
| ` public Vec3 center() ` | 读取 record 分量 ` center ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L504) |
| ` public GravitySourceType type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L504) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L504) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L504) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L504) |

## GravityManager.GravitySourceManager

` public static final class GravitySourceManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L507)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerSourceType( Class<? extends Block> blockClass, IntSupplier radius, DoubleSupplier strength ) ` | 注册重力源类型；半径与强度在运行时读取，配置改动后立即生效。<br>参数 ` radius ` 重力场半径提供者<br>参数 ` strength ` 重力场强度提供者<br>执行 ` REGISTRY.put(blockClass, new SourceTypeFactory(radius, strength)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L519) |
| ` public static @Nullable GravitySourceType getType(Block block) ` | 末尾返回 ` factory == null ? null : factory.create() `<br>[调用处 BlackHoleBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L525) |
| ` public static void addSource(Level level, BlockPos pos, GravitySourceType type) ` | 执行 ` upsertSource(level, pos, pos.getCenter(), type) `<br>[调用处 BlackHoleBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L536) |
| ` public static void upsertSource(Level level, BlockPos id, Vec3 center, GravitySourceType type) ` | 实现调用 ` type.isValid() `<br>实现调用 ` isFinite(center) `<br>实现调用 ` GRAVITY_FIELDS.computeIfAbsent(level, ignored -> new GravityFieldIndex()) `<br>[调用处 CfaGravityController.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaGravityController.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L540) |
| ` public static void removeSource(Level level, BlockPos id) ` | 实现调用 ` GRAVITY_FIELDS.get(level) `<br>实现调用 ` index.remove(id) `<br>实现调用 ` wakeAffectedFallingBlocks(level, removed, null) `<br>[调用处 BlackHoleBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L560) |
| ` public static Vec3 calculateGravityVector(Level level, Vec3 position, double g) ` | 末尾返回 ` calculateGravityVector(level, position, g, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L583) |

## GravityManager.GravitySourceType

` public record GravitySourceType(double strength, int radius, double bodyRadius) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L480)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GravitySourceType(double strength, int radius) ` | 执行 ` this(strength, radius, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L481) |
| ` public boolean isValid() ` | 实现调用 ` Double.isFinite(this.strength) `<br>实现调用 ` Math.abs(this.strength) `<br>实现调用 ` Double.isFinite(this.bodyRadius) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L485) |
| ` public double strength() ` | 读取 record 分量 ` strength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L480) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L480) |
| ` public double bodyRadius() ` | 读取 record 分量 ` bodyRadius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L480) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L480) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L480) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L480) |

## GravityManager.OrbitalMotion

` public static final class OrbitalMotion `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L389)

Per-entity, per-tick state also covers falling blocks whose horizontal kick occurs after movement.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OrbitalMotion() ` | Java 提供的无参构造器。<br>[调用处 EntityMixin](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L48) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L389) |

## GravityType

` public enum GravityType `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NORMAL ` | 声明于枚举 ` GravityType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L7) |
| ` ANTI_GRAVITY ` | 声明于枚举 ` GravityType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L8) |
| ` MICRO_ANTI_GRAVITY ` | 声明于枚举 ` GravityType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L9) |
| ` LOW_GRAVITY ` | 声明于枚举 ` GravityType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L10) |
| ` public double getScalar() ` | 末尾返回 ` this.scalar `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L6) |
| ` public static GravityType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L6) |
| ` public static GravityType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityType.java#L6) |

## HandbookStructureExporter

` public final class HandbookStructureExporter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HandbookStructureExporter.java#L17)

Writes complete vanilla structure NBT without replacing existing exports.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CompoundTag read(byte[] compressed) throws IOException ` | ` (root.getList("size").filter(size -> size.size() == 3 && size.stream().allMatch(IntTag.class::isInstance)).isEmpty() \|\| root.getList("blocks").isEmpty() \|\| (root.getList("palette").isEmpty() && root.getList("palettes").isEmpty())) ` 成立时抛出 ` new IOException("Not a structure template") `<br>末尾返回 ` root `<br>[调用处 HandbookStructureExportHandler.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportHandler.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HandbookStructureExporter.java#L21) |
| ` public static Path write(Path worldRoot, Identifier location, CompoundTag root) throws IOException ` | 实现调用 ` StructureDataPaths.handbookExports(worldRoot) `<br>实现调用 ` Files.createDirectories(directory) `<br>实现调用 ` location.getPath() `<br>[调用处 HandbookStructureExportHandler.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HandbookStructureExportHandler.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HandbookStructureExporter.java#L31) |

## HeaterUtil

` public class HeaterUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HeaterUtil.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isActiveHeatSource(BlockState state) ` | ` (CampfireBlock.isLitCampfire(state) && state.is(Blocks.CAMPFIRE)) ` 成立时提前返回 ` true `<br>` (state.is(ModBlocks.HEATER)) ` 成立时提前返回 ` ((HeaterBlock) state.getBlock()).isActive(state) `<br>` (state.is(ModBlocks.BURNING_HEATER)) ` 成立时提前返回 ` state.getValue(BurningHeaterBlock.LEVEL) > 0 `<br>` (state.is(ModBlocks.CORRUPTED_BEACON)) ` 成立时提前返回 ` state.getValue(CorruptedBeaconBlock.LIT) `<br>末尾返回 ` state.getBlock() instanceof NeutronIrradiatorBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HeaterUtil.java#L19) |
| ` public static boolean hurtEntity(Level level, BlockState state, Entity entity) ` | 若给定方块是正在工作的加热器，则对实体造成烧伤<br>返回 是否实际造成了伤害判定<br>` (!(state.getBlock() instanceof IDamagingHeater heater) \|\| !heater.isActive(state) \|\| entity.isSteppingCarefully() \|\| !(entity instanceof LivingEntity)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 HeaterBlock.stepOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/consumer/HeaterBlock.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HeaterUtil.java#L30) |
| ` public HeaterUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HeaterUtil.java#L18) |

## HorizontalDirection

` public final class HorizontalDirection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HorizontalDirection.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Direction[] HORIZONTAL_DIRECTIONS ` | 初值 ` new Direction[] {Direction.EAST, Direction.SOUTH, Direction.WEST, Direction.NORTH} ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/HorizontalDirection.java#L8) |

## IStateListener

` public interface IStateListener<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/IStateListener.java#L4)

状态监听器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` T getState() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/IStateListener.java#L6) |
| ` void notifyStateChanged(T newState) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/IStateListener.java#L8) |

## Impersonators

` public final class Impersonators `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final IImpersonator<Armadillo> ARMADILLO ` | 初值 ` Impersonators.of(Armadillo.class, DummyArmadillo::fromEntity) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L18) |
| ` public static final IImpersonator<Cat> CAT ` | 初值 ` Impersonators.of(Cat.class, DummyCat::fromEntity) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L19) |
| ` public static final IImpersonator<Wolf> WOLF ` | 初值 ` Impersonators.of(Wolf.class, DummyWolf::fromEntity) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L20) |
| ` public static <T extends LivingEntity> IImpersonator<T> of(Class<T> clazz, Function<LivingEntity, T> factory) ` | 末尾返回 ` new Simple<>(clazz, factory) `<br>[调用处 Impersonators](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/Impersonators.java#L22) |

## InfiniteFluidTankBreakProtection

` public final class InfiniteFluidTankBreakProtection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L22)

含无限液体储罐的玩家破坏保护。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isProtected(Level level, BlockPos pos) ` | 末尾返回 ` InfiniteFluidTankBreakProtection.findProtectedTarget(level, pos).isPresent() `<br>[调用处 ClientBlockEventListener.syncInfiniteFluidTankBreakModifiers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L31) |
| ` public static void updateModifierAuthorization(ServerPlayer player, BlockPos pos, boolean modifiersHeld) ` | 接收客户端挖掘时的组合键状态。授权只短暂保留，避免玩家松开按键后仍可破坏。<br>实现调用 ` player.getUUID() `<br>实现调用 ` player.level() `<br>实现调用 ` level.isLoaded(pos) `<br>[调用处 InfiniteFluidTankBreakModifierPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/InfiniteFluidTankBreakModifierPacket.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L38) |
| ` public static boolean shouldCancelBreak(ServerPlayer player, BlockPos pos) ` | 检查并处理一次玩家破坏。<br>返回 是否应取消本次破坏<br>` (protectedTarget.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 BreakBlockEventListener.preventInfiniteFluidTankBreak](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L64) |
| ` public static void showToolBreakDenied(Player player) ` | 执行 ` player.sendOverlayMessage( Component.translatable("screen.anvilcraft.tooltip.fluid_tank.tool_break_failed") .withStyle(ChatFormatting.RED) ) `<br>[调用处 AnvilHammerItem.breakBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/AnvilHammerItem.java#L125) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L96) |
| ` public static void clear(Player player) ` | 实现调用 ` player.getUUID() `<br>实现调用 ` InfiniteFluidTankBreakProtection.CONFIRMATIONS.remove(playerId) `<br>实现调用 ` InfiniteFluidTankBreakProtection.MODIFIER_AUTHORIZATIONS.remove(playerId) `<br>[调用处 BreakBlockEventListener.preventInfiniteFluidTankBreak](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L103) |

## ItemResourceHelper

` public class ItemResourceHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ItemResourceHelper.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean matchesNetworkStack(ItemStack first, ItemStack second, RegistryAccess registries) ` | Compares network snapshots, including components whose nested stacks use identity equality.<br>` (ItemStack.matches(first, second)) ` 成立时提前返回 ` true `<br>` (first.isEmpty() \|\| second.isEmpty() \|\| first.getItem() != second.getItem() \|\| first.getCount() != second.getCount() \|\| first.getComponents().size() != second.getComponents().size()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 TerminalJeiTransferPlan.addDesired](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L123) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ItemResourceHelper.java#L16) |
| ` public static ItemStack getStackInSlot(ResourceHandler<ItemResource> handler, int slot) ` | 末尾返回 ` handler.getResource(slot).toStack(handler.getAmountAsInt(slot)) `<br>[调用处 ItemDetectorBlockEntity.scanContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ItemDetectorBlockEntity.java#L277) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ItemResourceHelper.java#L44) |
| ` public static int getSlotLimit(ResourceHandler<ItemResource> handler, int slot) ` | 末尾返回 ` handler.getCapacityAsInt(slot, resource) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ItemResourceHelper.java#L49) |
| ` public static boolean isSlotEmpty(ResourceHandler<ItemResource> handler, int slot) ` | 末尾返回 ` handler.getAmountAsInt(slot) <= 0 `<br>[调用处 ItemCollectorBlockEntity.getRedstoneSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ItemCollectorBlockEntity.java#L307) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ItemResourceHelper.java#L55) |
| ` public static ItemStack insertInto(ResourceHandler<ItemResource> handler, int index, ItemStack stack) ` | ` (remain == 0) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` stack.copyWithCount(remain) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ItemResourceHelper.java#L60) |
| ` public ItemResourceHelper() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ItemResourceHelper.java#L14) |

## LevelLike

` public class LevelLike implements BlockAndTintGetter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LevelLike(ClientLevel parent) ` | 执行 ` this.parent = parent `<br>[调用处 SmartBlockPlacerScreen.buildPreviewLevelLike](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L1372) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L61) |
| ` public void addBlueprint(StructureSnapshot snapshot, BlueprintPlacement placement) ` | 实现调用 ` BlueprintBlockConfiguration.sourceOrigin(snapshot) `<br>实现调用 ` BlueprintMultiblocks.expand(snapshot, placement, -1) `<br>实现调用 ` block.nbt() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L65) |
| ` public AABB getRenderBounds() ` | 末尾返回 ` bounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L86) |
| ` public Optional<BlockPos> getMinPos() ` | 末尾返回 ` hasAny ? Optional.of(new BlockPos(minX, minY, minZ)) : Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L93) |
| ` public Optional<BlockPos> getMaxPos() ` | 末尾返回 ` hasAny ? Optional.of(new BlockPos(maxX, maxY, maxZ)) : Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L113) |
| ` public int horizontalSize() ` | 末尾返回 ` Math.max(keys.stream().map(BlockPos::getX).max(Integer::compare).map(it -> it + 1).orElse(0), keys.stream().map(BlockPos::getZ).max(Integer::compare).map(it -> it + 1).orElse(0)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L133) |
| ` public int verticalSize() ` | 末尾返回 ` keys.stream().map(BlockPos::getY).max(Integer::compare).map(it -> it + 1).orElse(0) `<br>[调用处 LevelLike.nextLayer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L274) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L148) |
| ` @Override public @Nullable BlockEntity getBlockEntity(BlockPos blockPos) ` | 末尾返回 ` this.blockEntities.get(blockPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L157) |
| ` public void setBlockState(BlockPos pos, BlockState state) ` | 实现调用 ` this.blockEntities.remove(pos) `<br>实现调用 ` this.blockEntityData.remove(pos) `<br>实现调用 ` this.blocks.put(pos, state) `<br>[调用处 LevelLike.setBlockState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L179) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L162) |
| ` public void setBlockState(BlockPos pos, BlockState state, @Nullable CompoundTag data) ` | 实现调用 ` this.setBlockState(pos, state) `<br>分支 ` (data != null) ` 内调用 ` this.storeBlockEntityData(pos, data) `<br>分支 ` (data != null) ` 内调用 ` BlueprintBlockEntities.create(this.parent, pos, state, data.copy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L178) |
| ` public @Nullable CompoundTag getBlockEntityData(BlockPos pos) ` | 原始配置用于只读 GUI，避免渲染方块实体的加载回调改写数据。<br>末尾返回 ` data == null ? null : data.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L190) |
| ` public void setCurrentVisibleLayer(int layer) ` | 执行 ` this.currentVisibleLayer = layer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L206) |
| ` public void setBlockStateAlwaysRender(BlockPos pos, BlockState state) ` | 实现调用 ` this.setBlockState(pos, state) `<br>实现调用 ` this.alwaysRendered.add(pos.immutable()) `<br>实现调用 ` pos.immutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L210) |
| ` public BlockState getBlockState(BlockPos pos) ` | ` (!this.allLayersVisible && !this.alwaysRendered.contains(pos) && pos.getY() != this.currentVisibleLayer) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() `<br>末尾返回 ` this.blocks.getOrDefault(pos, Blocks.AIR.defaultBlockState()) `<br>[调用处 LevelLike.getFluidState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L224) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L215) |
| ` @Override public FluidState getFluidState(BlockPos blockPos) ` | 末尾返回 ` this.getBlockState(blockPos).getFluidState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L222) |
| ` @Override public LevelLightEngine getLightEngine() ` | 末尾返回 ` LevelLightEngine.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L242) |
| ` @Override public int getHeight() ` | 末尾返回 ` 256 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L253) |
| ` @Override public int getMinY() ` | 末尾返回 ` -63 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L258) |
| ` @Override public int getBrightness(LightLayer type, BlockPos pos) ` | 末尾返回 ` 14 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L263) |
| ` @Override public int getRawBrightness(BlockPos pos, int amount) ` | 末尾返回 ` 14 - amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L268) |
| ` public void nextLayer() ` | 实现调用 ` this.verticalSize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L273) |
| ` public void previousLayer() ` | 分支 ` (this.currentVisibleLayer <= 0) ` 内调用 ` this.verticalSize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L281) |
| ` @Override public CardinalLighting cardinalLighting() ` | 末尾返回 ` CardinalLighting.DEFAULT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L289) |
| ` @Override public int getBlockTint(BlockPos pos, ColorResolver color) ` | 末尾返回 ` color.getColor(value, pos.getX(), pos.getZ()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L294) |
| ` public long getRevision() ` | 末尾返回 ` this.revision `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L43) |
| ` public List<Entity> getEntities() ` | 末尾返回 ` this.entities `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L43) |
| ` public int getCurrentVisibleLayer() ` | 末尾返回 ` this.currentVisibleLayer `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L43) |
| ` public void setAllLayersVisible(final boolean allLayersVisible) ` | 执行 ` this.allLayersVisible = allLayersVisible `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L43) |
| ` public boolean isAllLayersVisible() ` | 末尾返回 ` this.allLayersVisible `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L43) |

## LevelLike.AirLevelLike

` public static class AirLevelLike extends LevelLike `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L302)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AirLevelLike(ClientLevel parent) ` | 执行 ` super(parent) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L304) |
| ` @Override public BlockState getBlockState(BlockPos pos) ` | 末尾返回 ` Blocks.AIR.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L308) |
| ` @Override public FluidState getFluidState(BlockPos blockPos) ` | 末尾返回 ` Fluids.EMPTY.defaultFluidState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LevelLike.java#L313) |

## LightningPathGenerator

` public class LightningPathGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void generatePath(Vec3 start, Vec3 end, int branches, double deviationPercentage, @Nullable PathConsumer consumer) ` | 实现调用 ` end.subtract(start) `<br>实现调用 ` vector.length() `<br>实现调用 ` current.add(vector.scale(1.0 / branches)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L10) |
| ` public LightningPathGenerator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L9) |

## LightningPathGenerator.PathConsumer

` public interface PathConsumer extends BiConsumer<Vec3, Vec3> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L33)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override void accept(Vec3 start, Vec3 end) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LightningPathGenerator.java#L35) |
