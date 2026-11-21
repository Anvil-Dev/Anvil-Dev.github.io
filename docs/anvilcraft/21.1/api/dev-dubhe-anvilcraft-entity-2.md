# dev.dubhe.anvilcraft.entity（StandableLevitatingBlockEntity 至 WeaponBeamEntity）



## StandableLevitatingBlockEntity

` public class StandableLevitatingBlockEntity extends LevitatingBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StandableLevitatingBlockEntity(EntityType<? extends FallingBlockEntity> entityType, Level level) ` | 执行 ` super(entityType, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L19) |
| ` @SuppressWarnings("UnusedReturnValue") public static StandableLevitatingBlockEntity levitate(Level level, BlockPos pos, BlockState blockState) ` | 末尾返回 ` levitating `<br>[调用处 ControllableSandBlock.move](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/ControllableSandBlock.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L35) |
| ` @Override public void move(MoverType type, Vec3 motion) ` | 实现调用 ` super.move(type, motion) `<br>实现调用 ` this.level() `<br>实现调用 ` this.getBoundingBox().expandTowards(0, 0.5F, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L51) |
| ` @Override public void remove(RemovalReason reason) ` | 实现调用 ` super.remove(reason) `<br>实现调用 ` this.level() `<br>实现调用 ` this.getBoundingBox().expandTowards(0, 1.75F, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L73) |
| ` @Override public boolean canBeCollidedWith() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L92) |
| ` @Override public boolean canCollideWith(Entity entity) ` | 末尾返回 ` super.canCollideWith(entity) && !Util.instanceOfAny(entity, FallingBlockEntity.class, IonocraftEntity.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L97) |

## ThrownEmberMetalHeavyHalberdEntity

` public class ThrownEmberMetalHeavyHalberdEntity extends ThrownHeavyHalberdEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownEmberMetalHeavyHalberdEntity(EntityType<? extends Entity> type, Level level) ` | 执行 ` super(type, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L12) |
| ` public ThrownEmberMetalHeavyHalberdEntity(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_EMBER_METAL_HEAVY_HALBERD.get(), level, shooter, pickupItemStack) `<br>[调用处 EmberMetalHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHeavyHalberdItem.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L16) |
| ` public ThrownEmberMetalHeavyHalberdEntity(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_EMBER_METAL_HEAVY_HALBERD.get(), level, x, y, z, pickupItemStack) `<br>[调用处 EmberMetalHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/EmberMetalHeavyHalberdItem.java#L33) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L20) |

## ThrownFrostMetalHeavyHalberdEntity

` public class ThrownFrostMetalHeavyHalberdEntity extends ThrownHeavyHalberdEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownFrostMetalHeavyHalberdEntity(EntityType<? extends Entity> type, Level level) ` | 执行 ` super(type, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L12) |
| ` public ThrownFrostMetalHeavyHalberdEntity(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_FROST_METAL_HEAVY_HALBERD.get(), level, shooter, pickupItemStack) `<br>[调用处 FrostMetalHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalHeavyHalberdItem.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L16) |
| ` public ThrownFrostMetalHeavyHalberdEntity(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_FROST_METAL_HEAVY_HALBERD.get(), level, x, y, z, pickupItemStack) `<br>[调用处 FrostMetalHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FrostMetalHeavyHalberdItem.java#L33) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L20) |

## ThrownHeavyHalberdEntity

` public abstract class ThrownHeavyHalberdEntity extends AbstractArrow `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int clientSideReturnHeavyHalberdTickCount ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L46) |
| ` @SuppressWarnings("unchecked") public ThrownHeavyHalberdEntity(EntityType<? extends Entity> type, Level level) ` | 执行 ` super((EntityType<? extends AbstractArrow>) type, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L48) |
| ` public ThrownHeavyHalberdEntity( EntityType<? extends ThrownHeavyHalberdEntity> type, Level level, LivingEntity shooter, ItemStack pickupItemStack ) ` | 实现调用 ` super(type, shooter, level, pickupItemStack, null) `<br>实现调用 ` this.setBaseDamage(HeavyHalberdItem.getThrownBaseDamage(pickupItemStack)) `<br>实现调用 ` HeavyHalberdItem.getThrownBaseDamage(pickupItemStack) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L53) |
| ` public ThrownHeavyHalberdEntity( EntityType<? extends ThrownHeavyHalberdEntity> type, Level level, double x, double y, double z, ItemStack pickupItemStack ) ` | 实现调用 ` super(type, x, y, z, level, pickupItemStack, pickupItemStack) `<br>实现调用 ` this.setBaseDamage(HeavyHalberdItem.getThrownBaseDamage(pickupItemStack)) `<br>实现调用 ` HeavyHalberdItem.getThrownBaseDamage(pickupItemStack) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L62) |
| ` @Override public void tick() ` | 实现调用 ` this.getOwner() `<br>实现调用 ` this.entityData.get(ID_LOYALTY) `<br>实现调用 ` this.isNoPhysics() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L78) |
| ` public boolean isFoil() ` | 末尾返回 ` this.entityData.get(ID_FOIL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L120) |
| ` @Override public ItemStack getWeaponItem() ` | 末尾返回 ` this.getPickupItemStackOrigin() `<br>[调用处 ThrownHeavyHalberdEntity.onHitEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L143) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L200) |
| ` @Override public void playerTouch(Player entity) ` | Called by a player entity when they collide with an entity<br>实现调用 ` this.ownedBy(entity) `<br>实现调用 ` this.getOwner() `<br>分支 ` (this.ownedBy(entity) \|\| this.getOwner() == null) ` 内调用 ` super.playerTouch(entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L218) |
| ` @Override public void readAdditionalSaveData(CompoundTag compound) ` | (abstract) Protected helper method to read subclass entity data from NBT.<br>实现调用 ` super.readAdditionalSaveData(compound) `<br>实现调用 ` compound.getBoolean("DealtDamage") `<br>实现调用 ` this.entityData.set(ID_LOYALTY, this.getLoyaltyFromItem(this.getPickupItemStackOrigin())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L228) |
| ` @Override public void addAdditionalSaveData(CompoundTag compound) ` | 实现调用 ` super.addAdditionalSaveData(compound) `<br>实现调用 ` compound.putBoolean("DealtDamage", this.dealtDamage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L235) |
| ` @Override public void tickDespawn() ` | 实现调用 ` this.entityData.get(ID_LOYALTY) `<br>分支 ` (this.pickup != AbstractArrow.Pickup.ALLOWED \|\| i <= 0) ` 内调用 ` super.tickDespawn() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L247) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L260) |

## ThrownHeavyHalberdEntity.Factory

` public interface Factory<T extends ThrownHeavyHalberdEntity> extends EntityType.EntityFactory<T>, Serializable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L265)


## ThrownHeavyHalberdEntity.HeavyHalberdType

` public static class HeavyHalberdType<T extends ThrownHeavyHalberdEntity> extends EntityType<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L268)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeavyHalberdType( EntityFactory<T> factory, MobCategory category, boolean serialize, boolean summon, boolean fireImmune, boolean canSpawnFarFromPlayer, ImmutableSet<Block> immuneTo, EntityDimensions dimensions, float spawnDimensionsScale, int clientTrackingRange, int updateInterval, FeatureFlagSet requiredFeatures, Predicate<EntityType<?>> trackDeltasSupplier, ToIntFunction<EntityType<?>> trackingRangeSupplier, ToIntFunction<EntityType<?>> updateIntervalSupplier ) ` | [调用处 EntityTypeBuilderMixin.buildHeavyHalberd](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityTypeBuilderMixin.java#L60) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L269) |
| ` @Override public boolean is(HolderSet<EntityType<?>> entityType) ` | 末尾返回 ` super.is(entityType) \|\| (entityType instanceof HolderSet.Direct<EntityType<?>> direct && direct.size() == 1 && direct.get(0).is(ResourceLocation.withDefaultNamespace("trident"))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L305) |

## ThrownTranscendenceHeavyHalberdEntity

` public class ThrownTranscendenceHeavyHalberdEntity extends ThrownHeavyHalberdEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownTranscendenceHeavyHalberdEntity(EntityType<? extends Entity> type, Level level) ` | 执行 ` super(type, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L12) |
| ` public ThrownTranscendenceHeavyHalberdEntity(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_TRANSCENDENCE_HEAVY_HALBERD.get(), level, shooter, pickupItemStack) `<br>[调用处 TranscendenceHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceHeavyHalberdItem.java#L41) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L16) |
| ` public ThrownTranscendenceHeavyHalberdEntity(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_TRANSCENDENCE_HEAVY_HALBERD.get(), level, x, y, z, pickupItemStack) `<br>[调用处 TranscendenceHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/TranscendenceHeavyHalberdItem.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L20) |

## WeaponBeamEntity

` public class WeaponBeamEntity extends Entity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int CORRUPTED ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L17) |
| ` public static final int TESLA ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L18) |
| ` public static final int LASER ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L19) |
| ` public WeaponBeamEntity(EntityType<?> type, Level level) ` | 实现调用 ` super(type, level) `<br>[调用处 WeaponBeamEntity.create](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L29) |
| ` public static WeaponBeamEntity create(Level level, Vec3 start, Vec3 end, int style) ` | 末尾返回 ` create(level, start, end, style, 1, null) `<br>[调用处 TeslaTowerBlockEntity.strikeChain](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L307) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L35) |
| ` public static WeaponBeamEntity create(Level level, Vec3 start, Vec3 end, int style, int strength) ` | 末尾返回 ` create(level, start, end, style, strength, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L39) |
| ` public static WeaponBeamEntity create( Level level, Vec3 start, Vec3 end, int style, int strength, @Nullable Entity owner ) ` | 末尾返回 ` beam ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L43) |
| ` public static void showContinuous( Level level, Vec3 start, Vec3 end, int style, int strength, Entity owner ) ` | 实现调用 ` owner.getBoundingBox().expandTowards(owner.getDeltaMovement().scale(-1.0)).inflate(3.0) `<br>实现调用 ` owner.getBoundingBox().expandTowards(owner.getDeltaMovement().scale(-1.0)) `<br>实现调用 ` owner.getBoundingBox() `<br>[调用处 CorruptedBeaconActivatorItem.onUseTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/weapon/CorruptedBeaconActivatorItem.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L57) |
| ` public Vec3 getEndOffset() ` | 末尾返回 ` new Vec3(this.entityData.get(END_X), this.entityData.get(END_Y), this.entityData.get(END_Z)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L92) |
| ` public int getStyle() ` | 末尾返回 ` this.entityData.get(STYLE) `<br>[调用处 WeaponBeamEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L117) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L96) |
| ` public int getStrength() ` | 末尾返回 ` this.entityData.get(STRENGTH) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L100) |
| ` @Nullable public Entity getOwner() ` | 末尾返回 ` ownerId < 0 ? null : this.level().getEntity(ownerId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L104) |
| ` public int getOwnerId() ` | 末尾返回 ` this.entityData.get(OWNER_ID) `<br>[调用处 WeaponBeamEntity.getOwner](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L110) |
| ` @Override public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.level() `<br>实现调用 ` this.getStyle() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L114) |
| ` @Override public boolean isAttackable() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L135) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L140) |
