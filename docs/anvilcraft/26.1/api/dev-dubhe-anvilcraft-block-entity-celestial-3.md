# dev.dubhe.anvilcraft.block.entity.celestial（CelestialTravelData.ReturnRule 至 Megastructure.RotationFunction）



## CelestialTravelData.ReturnRule

` public record ReturnRule(Type type, int x, int y, int z, int radius) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ReturnRule DEFAULT ` | 初值 ` new ReturnRule(Type.ENTRY_PORTAL, 0, 64, 0, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L109) |
| ` public static final Codec<ReturnRule> CODEC ` | Accept both the documented object form and a concise string rule in datapacks.<br>初值 ` Codec.either(OBJECT_CODEC, Type.CODEC).xmap(either -> either.map(rule -> rule, type -> new ReturnRule(type, 0, 64, 0, 8)), Either::left) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L120) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ReturnRule> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L125) |
| ` public ReturnRule(Type type, int x, int y, int z, int radius) ` | 执行 ` radius = Math.max(0, radius) `<br>[调用处 SpecialCelestialBodyRecipeLoader.createOverworldLike](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L116) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L140) |
| ` public Type type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108) |
| ` public int z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108) |
| ` public int radius() ` | 读取 record 分量 ` radius ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L108) |

## CelestialTravelData.ReturnRule.Type

` public enum Type `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L144)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ENTRY_PORTAL ` | 声明于枚举 ` CelestialTravelData.ReturnRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L146) |
| ` RANDOM_PORTAL ` | 声明于枚举 ` CelestialTravelData.ReturnRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L147) |
| ` FIXED_PORTAL ` | 声明于枚举 ` CelestialTravelData.ReturnRule.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L148) |
| ` public static final Codec<Type> CODEC ` | 初值 ` Codec.STRING.xmap(Type::fromName, Type::getSerializedName) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L150) |
| ` public static Type fromName(String name) ` | 实现调用 ` name.toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L158) |
| ` public String getSerializedName() ` | 末尾返回 ` this.serializedName `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L144) |
| ` public static Type[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L144) |
| ` public static Type valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L144) |

## CelestialTravelManager

` public final class CelestialTravelManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L33)

Server-side implementation of the coordinate and return rules in CelestialTravelData.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier OVERWORLD_LIKE_DIMENSION ` | 初值 ` CelestialTravelData.OVERWORLD_LIKE_DIMENSION ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L34) |
| ` public static final ResourceKey<Level> OVERWORLD_LIKE_LEVEL ` | 初值 ` ResourceKey.create(Registries.DIMENSION, OVERWORLD_LIKE_DIMENSION) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L36) |
| ` public static final Identifier VOID_PLANET_DIMENSION ` | 初值 ` Identifier.fromNamespaceAndPath("anvilcraft", "void_planet") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L38) |
| ` public static final ResourceKey<Level> VOID_PLANET_LEVEL ` | 初值 ` ResourceKey.create(Registries.DIMENSION, VOID_PLANET_DIMENSION) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L40) |
| ` public static final Identifier MUN_DIMENSION ` | 初值 ` Identifier.fromNamespaceAndPath("anvilcraft", "mun") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L42) |
| ` public static final ResourceKey<Level> MUN_LEVEL ` | 初值 ` ResourceKey.create(Registries.DIMENSION, MUN_DIMENSION) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L44) |
| ` public static int findSurfaceY(ServerLevel level, int x, int z) ` | 强制将目标区块生成到完整状态后自上而下扫描第一个非空气方块， 在地形尚未生成（高度图不可用）时也能得到正确的地表高度。<br>末尾返回 ` pos.getY() > level.getMinY() ? pos.getY() : 64 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L64) |
| ` public static boolean isOverworldLike(ResourceKey<Level> dimension) ` | 末尾返回 ` OVERWORLD_LIKE_LEVEL.equals(dimension) `<br>[调用处 OverworldLikeVisualEventListener.onComputeFogColor](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeVisualEventListener.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L74) |
| ` public static long overworldLikeSeed(long sourceSeed) ` | Derives the seed used by the built-in overworld-like dimension. The derivation is deliberately stable: all instances of the overworld-like special planet share one dimension, while every save gets terrain that is independent from its ordinary overworld.<br>末尾返回 ` mixed * OVERWORLD_LIKE_MULTIPLIER + OVERWORLD_LIKE_ADDEND `<br>[调用处 OverworldLikeGenerationBootstrap.prepareStorage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldLikeGenerationBootstrap.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L85) |
| ` public static boolean tryLand( Entity entity, ServerLevel sourceLevel, BlockPos sourcePortalPos, Direction sourceFacing, CelestialTravelData travel ) ` | Sends an entity through a special-planet landing portal and records the source portal on the generated return gate.<br>` (entity.isOnPortalCooldown()) ` 成立时提前返回 ` false `<br>` (destination == null) ` 成立时提前返回 ` false `<br>` (travel.coordinateRule().type() == CelestialTravelData.CoordinateRule.Type.FIXED_SURFACE && travel.returnRule().type() == CelestialTravelData.ReturnRule.Type.ENTRY_PORTAL) ` 成立时提前返回 ` landOnFixedSurface(entity, sourceLevel, destination, desired, sourcePortalPos, sourceFacing) `<br>` (returnPos == null) ` 成立时提前返回 ` false `<br>末尾返回 ` travelThroughGate( entity, sourceLevel, destination, returnPos, landing, sourcePortalPos, sourceFacing, travel.returnRule().type() ) `<br>[调用处 CelestialForgingAnvilPortalBlockEntity.tryTouchTeleport](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilPortalBlockEntity.java#L530) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L94) |
| ` public static boolean tryReturn(Entity entity, CelestialBackGateBlockEntity gate) ` | Sends an entity standing in a return gate back to its recorded source portal.<br>` (entity.isOnPortalCooldown()) ` 成立时提前返回 ` false `<br>` (!(gate.getLevel() instanceof ServerLevel sourceLevel)) ` 成立时提前返回 ` false `<br>` (returnDimension == null \|\| returnPortal == null) ` 成立时提前返回 ` false `<br>` (destination == null) ` 成立时提前返回 ` false `<br>末尾返回 ` moved != null `<br>[调用处 CelestialBackGateBlockEntity.tryTouch](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L169) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L242) |
| ` @Nullable public static BlockPos findSafeSurfaceLandingPos(ServerLevel level, BlockPos origin) ` | Finds nearby dry ground, using a small platform when the entire arrival area is ocean.<br>末尾返回 ` landing != null ? landing : createEmergencyLandingPlatform(level, origin, false) `<br>[调用处 MunTravelEventListener.onEntityTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/MunTravelEventListener.java#L96) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L334) |
| ` @Nullable public static BlockPos findSafeLandingPos(ServerLevel level, BlockPos origin) ` | Finds an air column with a solid floor near the requested coordinate.<br>末尾返回 ` findSafeLandingPos(level, origin, true) `<br>[调用处 OverworldLikeResetManager.forceReturn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/OverworldLikeResetManager.java#L188) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L342) |
| ` public static void cleanupDuplicateGates( ServerLevel level, BlockPos selected, ResourceKey<Level> sourceDimension, BlockPos sourcePortalPos, Direction sourceFacing ) ` | Removes only gates that point to the same source portal as the selected gate.<br>实现调用 ` level.getBlockState(selected).getBlock() `<br>实现调用 ` level.getBlockState(selected) `<br>实现调用 ` selected.offset(dx, dy, dz) `<br>[调用处 CelestialBackGateBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialBackGateBlockEntity.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L621) |
| ` public static void playPortalTravelSound(Entity entity) ` | 执行 ` entity.level().playSound(null, entity.getX(), entity.getY(), entity.getZ(), SoundEvents.ENDERMAN_TELEPORT, SoundSource.BLOCKS, 1.0f, 1.0f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L658) |
| ` @Nullable public static Entity teleportEntity( Entity entity, ServerLevel source, ServerLevel destination, Vec3 position, Vec3 momentum ) ` | 末尾返回 ` moved `<br>[调用处 CelestialForgingAnvilPortalBlockEntity.tryTouchTeleport](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilPortalBlockEntity.java#L590) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelManager.java#L663) |

## GiantPlanetData

` public record GiantPlanetData(CelestialBodyClass bodyClass, PressureType pressureType, WindSpeed windSpeed, RingType ringType, int size, int paletteBaseRow, int paletteOverlayRow, float axialTilt, int rotationSpeed, int magneticFieldStrength, boolean brownDwarf, int energy) implements CelestialBodyData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GiantPlanetData( CelestialBodyClass bodyClass, PressureType pressureType, WindSpeed windSpeed, RingType ringType, int size, int paletteBaseRow, int paletteOverlayRow, float axialTilt, int rotationSpeed, int magneticFieldStrength, boolean brownDwarf ) ` | Backwards-compatible constructor for giant planets stored before energy was persisted.<br>执行 ` this( bodyClass, pressureType, windSpeed, ringType, size, paletteBaseRow, paletteOverlayRow, axialTilt, rotationSpeed, magneticFieldStrength, brownDwarf, 0 ) `<br>[调用处 CelestialBodyMatcher.generateGiantPlanet](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyMatcher.java#L477) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L21) |
| ` @Override public CelestialBodyType type() ` | 末尾返回 ` CelestialBodyType.GIANT_PLANET `<br>[调用处 GiantPlanetData.toTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L50) |
| ` @Override public CompoundTag toTag() ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L55) |
| ` public static GiantPlanetData fromTag(CompoundTag tag) ` | 实现调用 ` CelestialBodyData.readClass(tag, CelestialBodyType.GIANT_PLANET) `<br>实现调用 ` tag.getIntOr("magneticFieldStrength", 0) `<br>实现调用 ` tag.getBooleanOr("brownDwarf", false) `<br>[调用处 CelestialBodyData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyData.java#L157) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L74) |
| ` public CelestialBodyClass bodyClass() ` | 读取 record 分量 ` bodyClass ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L6) |
| ` public PressureType pressureType() ` | 读取 record 分量 ` pressureType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L7) |
| ` public WindSpeed windSpeed() ` | 读取 record 分量 ` windSpeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L8) |
| ` public RingType ringType() ` | 读取 record 分量 ` ringType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L9) |
| ` public int size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L10) |
| ` public int paletteBaseRow() ` | 读取 record 分量 ` paletteBaseRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L11) |
| ` public int paletteOverlayRow() ` | 读取 record 分量 ` paletteOverlayRow ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L12) |
| ` public float axialTilt() ` | 读取 record 分量 ` axialTilt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L13) |
| ` public int rotationSpeed() ` | 读取 record 分量 ` rotationSpeed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L14) |
| ` public int magneticFieldStrength() ` | 读取 record 分量 ` magneticFieldStrength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L15) |
| ` public boolean brownDwarf() ` | 读取 record 分量 ` brownDwarf ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L16) |
| ` public int energy() ` | 读取 record 分量 ` energy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L5) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L5) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/GiantPlanetData.java#L5) |

## LiquidCoverage

` public enum LiquidCoverage implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NONE ` | 声明于枚举 ` LiquidCoverage ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L6) |
| ` LOW ` | 声明于枚举 ` LiquidCoverage ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L7) |
| ` MEDIUM ` | 声明于枚举 ` LiquidCoverage ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L8) |
| ` HIGH ` | 声明于枚举 ` LiquidCoverage ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L9) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L17) |
| ` public static LiquidCoverage fromName(String name) ` | 末尾返回 ` LiquidCoverage.NONE `<br>[调用处 RockyPlanetData.fromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/RockyPlanetData.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L22) |
| ` public static LiquidCoverage[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 LiquidCoverage.fromName](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L5) |
| ` public static LiquidCoverage valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/LiquidCoverage.java#L5) |

## Megastructure

` public final class Megastructure `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L19)

Code-registered definition of a Celestial Forging Anvil megastructure.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Builder builder(Identifier id, String name) ` | 末尾返回 ` new Builder(id, name) `<br>[调用处 ModMegastructures](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L49) |
| ` public Identifier id() ` | 末尾返回 ` this.id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L53) |
| ` public String name() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L57) |
| ` public String displayName() ` | 末尾返回 ` this.displayName ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L61) |
| ` public Map<Integer, Identifier> modelLocations() ` | 末尾返回 ` this.modelLocations ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L65) |
| ` public ItemStack material() ` | 末尾返回 ` this.material == null ? ItemStack.EMPTY : new ItemStack(this.material) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L69) |
| ` public int materialCount() ` | 末尾返回 ` this.materialCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L73) |
| ` public boolean auxiliary() ` | 末尾返回 ` this.auxiliary ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L77) |
| ` public boolean isAvailable(Context context) ` | 末尾返回 ` this.prerequisite.test(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L81) |
| ` public int ring(Context context) ` | 末尾返回 ` this.ringFunction.applyAsInt(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L85) |
| ` public Identifier modelLocation(int ring) ` | ` (location == null) ` 成立时抛出 ` new IllegalStateException("No model registered for megastructure " + this.id + " on ring " + ring) `<br>末尾返回 ` location ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L89) |
| ` public float rotation(Context context, int ring, float baseRotation, float bodyRotation) ` | 末尾返回 ` this.rotationFunction.apply(new RotationContext(context.body(), ring, baseRotation, bodyRotation)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L97) |
| ` public IMegastructureHandler createHandler() ` | 末尾返回 ` this.handlerFactory.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L101) |

## Megastructure.Builder

` public static final class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L130)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder displayName(String displayName) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Objects.requireNonNull(displayName) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L149) |
| ` public Builder prerequisite(Prerequisite prerequisite) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Objects.requireNonNull(prerequisite) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L154) |
| ` public Builder ring(int ring) ` | 末尾返回 ` this.ring(context -> ring) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L159) |
| ` public Builder ring(ToIntFunction<Context> ringFunction) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Objects.requireNonNull(ringFunction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L163) |
| ` public Builder rotation(RotationFunction rotationFunction) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Objects.requireNonNull(rotationFunction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L168) |
| ` public Builder model(int ring, Identifier modelLocation) ` | ` (previous != null) ` 成立时抛出 ` new IllegalArgumentException("Duplicate model ring " + ring + " for megastructure " + this.id) `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.modelLocations.put(ring, Objects.requireNonNull(modelLocation)) `<br>实现调用 ` Objects.requireNonNull(modelLocation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L173) |
| ` public Builder material(ItemLike material, int count) ` | ` (count <= 0) ` 成立时抛出 ` new IllegalArgumentException("Megastructure material count must be positive") `<br>返回当前实例，可继续链式调用。<br>实现调用 ` Objects.requireNonNull(material) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L181) |
| ` public Builder handler(Supplier<? extends IMegastructureHandler> handlerFactory) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Objects.requireNonNull(handlerFactory) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L190) |
| ` public Builder auxiliary() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L195) |
| ` public Megastructure build() ` | 末尾返回 ` new Megastructure(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L200) |

## Megastructure.Context

` public record Context(CelestialBodyData body, boolean amplified, PlanetaryResourceSet resources) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L105)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Context(CelestialBodyData body, boolean amplified, PlanetaryResourceSet resources) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L105) |
| ` public CelestialBodyData body() ` | 读取 record 分量 ` body ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L106) |
| ` public boolean amplified() ` | 读取 record 分量 ` amplified ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L107) |
| ` public PlanetaryResourceSet resources() ` | 读取 record 分量 ` resources ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L108) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L105) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L105) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L105) |

## Megastructure.Prerequisite

` public interface Prerequisite `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L120)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean test(Context context) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L122) |

## Megastructure.RotationContext

` public record RotationContext(CelestialBodyData body, int ring, float baseRotation, float bodyRotation) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L112)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RotationContext(CelestialBodyData body, int ring, float baseRotation, float bodyRotation) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L112) |
| ` public CelestialBodyData body() ` | 读取 record 分量 ` body ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L113) |
| ` public int ring() ` | 读取 record 分量 ` ring ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L114) |
| ` public float baseRotation() ` | 读取 record 分量 ` baseRotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L115) |
| ` public float bodyRotation() ` | 读取 record 分量 ` bodyRotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L116) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L112) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L112) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L112) |

## Megastructure.RotationFunction

` public interface RotationFunction `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L125)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` float apply(RotationContext context) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java#L127) |
