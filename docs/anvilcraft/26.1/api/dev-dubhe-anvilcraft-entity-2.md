# dev.dubhe.anvilcraft.entity（StandableLevitatingBlockEntity 至 WeaponBeamEntity）



## StandableLevitatingBlockEntity

` public class StandableLevitatingBlockEntity extends LevitatingBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StandableLevitatingBlockEntity(EntityType<? extends FallingBlockEntity> entityType, Level level) ` | 执行 ` super(entityType, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L20) |
| ` @SuppressWarnings("UnusedReturnValue") public static StandableLevitatingBlockEntity levitate(Level level, BlockPos pos, BlockState blockState) ` | 末尾返回 ` levitating `<br>[调用处 ControllableSandBlock.move](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/ControllableSandBlock.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L36) |
| ` @Override public void move(MoverType type, Vec3 motion) ` | 实现调用 ` super.move(type, motion) `<br>实现调用 ` this.level() `<br>实现调用 ` this.getBoundingBox().expandTowards(0, 0.5F, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L52) |
| ` @Override public void remove(RemovalReason reason) ` | 实现调用 ` super.remove(reason) `<br>实现调用 ` this.level() `<br>实现调用 ` this.getBoundingBox().expandTowards(0, 1.75F, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L74) |
| ` @Override public boolean canBeCollidedWith(@Nullable Entity other) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L93) |
| ` @Override public boolean canCollideWith(Entity entity) ` | 末尾返回 ` super.canCollideWith(entity) && !Util.instanceOfAny(entity, FallingBlockEntity.class, IonocraftEntity.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/StandableLevitatingBlockEntity.java#L98) |

## ThrownEmberMetalHeavyHalberdEntity

` public class ThrownEmberMetalHeavyHalberdEntity extends ThrownHeavyHalberdEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownEmberMetalHeavyHalberdEntity(EntityType<? extends Entity> type, Level level) ` | 执行 ` super(type, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L12) |
| ` public ThrownEmberMetalHeavyHalberdEntity(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_EMBER_METAL_HEAVY_HALBERD.get(), level, shooter, pickupItemStack) `<br>[调用处 EmberMetalHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalHeavyHalberdItem.java#L20) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L16) |
| ` public ThrownEmberMetalHeavyHalberdEntity(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_EMBER_METAL_HEAVY_HALBERD.get(), level, x, y, z, pickupItemStack) `<br>[调用处 EmberMetalHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalHeavyHalberdItem.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L20) |
| ` @Override public String getTextureBase() ` | 末尾返回 ` "ember_metal" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownEmberMetalHeavyHalberdEntity.java#L24) |

## ThrownFrostMetalHeavyHalberdEntity

` public class ThrownFrostMetalHeavyHalberdEntity extends ThrownHeavyHalberdEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownFrostMetalHeavyHalberdEntity(EntityType<? extends Entity> type, Level level) ` | 执行 ` super(type, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L12) |
| ` public ThrownFrostMetalHeavyHalberdEntity(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_FROST_METAL_HEAVY_HALBERD.get(), level, shooter, pickupItemStack) `<br>[调用处 FrostMetalHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalHeavyHalberdItem.java#L20) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L16) |
| ` public ThrownFrostMetalHeavyHalberdEntity(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_FROST_METAL_HEAVY_HALBERD.get(), level, x, y, z, pickupItemStack) `<br>[调用处 FrostMetalHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalHeavyHalberdItem.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L20) |
| ` @Override public String getTextureBase() ` | 末尾返回 ` "frost_metal" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownFrostMetalHeavyHalberdEntity.java#L24) |

## ThrownHeavyHalberdEntity

` public abstract class ThrownHeavyHalberdEntity extends AbstractArrow `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int clientSideReturnHeavyHalberdTickCount ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L39) |
| ` @SuppressWarnings("unchecked") public ThrownHeavyHalberdEntity(EntityType<? extends Entity> type, Level level) ` | 执行 ` super((EntityType<? extends AbstractArrow>) type, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L41) |
| ` public ThrownHeavyHalberdEntity( EntityType<? extends ThrownHeavyHalberdEntity> type, Level level, LivingEntity shooter, ItemStack pickupItemStack ) ` | 实现调用 ` super(type, shooter, level, pickupItemStack, null) `<br>实现调用 ` this.setBaseDamage(HeavyHalberdItem.getThrownBaseDamage(pickupItemStack)) `<br>实现调用 ` HeavyHalberdItem.getThrownBaseDamage(pickupItemStack) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L46) |
| ` public ThrownHeavyHalberdEntity( EntityType<? extends ThrownHeavyHalberdEntity> type, Level level, double x, double y, double z, ItemStack pickupItemStack ) ` | 实现调用 ` super(type, x, y, z, level, pickupItemStack, pickupItemStack) `<br>实现调用 ` this.setBaseDamage(HeavyHalberdItem.getThrownBaseDamage(pickupItemStack)) `<br>实现调用 ` HeavyHalberdItem.getThrownBaseDamage(pickupItemStack) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L55) |
| ` public abstract String getTextureBase() ` | 返回 ` String ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L64) |
| ` @Override public void tick() ` | 实现调用 ` this.getOwner() `<br>实现调用 ` this.entityData.get(ThrownHeavyHalberdEntity.ID_LOYALTY) `<br>实现调用 ` this.isNoPhysics() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L73) |
| ` public boolean isFoil() ` | 末尾返回 ` this.entityData.get(ThrownHeavyHalberdEntity.ID_FOIL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L119) |
| ` @Override public ItemStack getWeaponItem() ` | 末尾返回 ` this.getPickupItemStackOrigin() `<br>[调用处 ThrownHeavyHalberdEntity.onHitEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L180) |
| ` @Override public void playerTouch(Player entity) ` | Called by a player entity when they collide with an entity<br>实现调用 ` this.ownedBy(entity) `<br>实现调用 ` this.getOwner() `<br>分支 ` (this.ownedBy(entity) \|\| this.getOwner() == null) ` 内调用 ` super.playerTouch(entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L196) |
| ` @Override public void readAdditionalSaveData(ValueInput compound) ` | (abstract) Protected helper method to read subclass entity data from NBT.<br>实现调用 ` super.readAdditionalSaveData(compound) `<br>实现调用 ` compound.getBooleanOr("DealtDamage", false) `<br>实现调用 ` this.getLoyaltyFromItem(this.getPickupItemStackOrigin()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L204) |
| ` @Override public void addAdditionalSaveData(ValueOutput compound) ` | 实现调用 ` super.addAdditionalSaveData(compound) `<br>实现调用 ` compound.putBoolean("DealtDamage", this.dealtDamage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L212) |
| ` @Override public void tickDespawn() ` | 实现调用 ` this.entityData.get(ThrownHeavyHalberdEntity.ID_LOYALTY) `<br>分支 ` (this.pickup != AbstractArrow.Pickup.ALLOWED \|\| i <= 0) ` 内调用 ` super.tickDespawn() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L224) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L237) |

## ThrownHeavyHalberdEntity.Factory

` public interface Factory<T extends ThrownHeavyHalberdEntity> extends EntityType.EntityFactory<T>, Serializable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownHeavyHalberdEntity.java#L242)


## ThrownTranscendenceHeavyHalberdEntity

` public class ThrownTranscendenceHeavyHalberdEntity extends ThrownHeavyHalberdEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownTranscendenceHeavyHalberdEntity(EntityType<? extends Entity> type, Level level) ` | 执行 ` super(type, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L12) |
| ` public ThrownTranscendenceHeavyHalberdEntity(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_TRANSCENDENCE_HEAVY_HALBERD.get(), level, shooter, pickupItemStack) `<br>[调用处 TranscendenceHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceHeavyHalberdItem.java#L37) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L16) |
| ` public ThrownTranscendenceHeavyHalberdEntity(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 执行 ` super(ModEntities.THROWN_TRANSCENDENCE_HEAVY_HALBERD.get(), level, x, y, z, pickupItemStack) `<br>[调用处 TranscendenceHeavyHalberdItem.createThrown](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceHeavyHalberdItem.java#L42) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L20) |
| ` @Override public String getTextureBase() ` | 末尾返回 ` "transcendence" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ThrownTranscendenceHeavyHalberdEntity.java#L24) |

## WeaponBeamEntity

` public class WeaponBeamEntity extends Entity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int CORRUPTED ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L20) |
| ` public static final int TESLA ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L21) |
| ` public static final int LASER ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L22) |
| ` public WeaponBeamEntity(EntityType<?> type, Level level) ` | 实现调用 ` super(type, level) `<br>[调用处 WeaponBeamEntity.create](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L57) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L36) |
| ` public static WeaponBeamEntity create(Level level, Vec3 start, Vec3 end, int style) ` | 末尾返回 ` WeaponBeamEntity.create(level, start, end, style, 1, null) `<br>[调用处 TeslaTowerBlockEntity.strikeChain](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L339) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L41) |
| ` public static WeaponBeamEntity create(Level level, Vec3 start, Vec3 end, int style, int strength) ` | 末尾返回 ` WeaponBeamEntity.create(level, start, end, style, strength, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L45) |
| ` public static WeaponBeamEntity create( Level level, Vec3 start, Vec3 end, int style, int strength, @Nullable Entity owner ) ` | 末尾返回 ` beam `<br>[调用处 WeaponBeamEntity.create](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L49) |
| ` public static void showContinuous( Level level, Vec3 start, Vec3 end, int style, int strength, Entity owner ) ` | 实现调用 ` owner.getBoundingBox().expandTowards(owner.getDeltaMovement().scale(-1.0)).inflate(3.0) `<br>实现调用 ` owner.getBoundingBox().expandTowards(owner.getDeltaMovement().scale(-1.0)) `<br>实现调用 ` owner.getBoundingBox() `<br>[调用处 CorruptedBeaconActivatorItem.onUseTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/weapon/CorruptedBeaconActivatorItem.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L62) |
| ` public Vec3 getEndOffset() ` | 末尾返回 ` new Vec3( this.entityData.get(WeaponBeamEntity.END_X), this.entityData.get(WeaponBeamEntity.END_Y), this.entityData.get(WeaponBeamEntity.END_Z) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L97) |
| ` public int getStyle() ` | 末尾返回 ` this.entityData.get(WeaponBeamEntity.STYLE) `<br>[调用处 WeaponBeamEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L124) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L104) |
| ` public int getStrength() ` | 末尾返回 ` this.entityData.get(WeaponBeamEntity.STRENGTH) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L108) |
| ` public @Nullable Entity getOwner() ` | 末尾返回 ` ownerId < 0 ? null : this.level().getEntity(ownerId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L112) |
| ` public int getOwnerId() ` | 末尾返回 ` this.entityData.get(WeaponBeamEntity.OWNER_ID) `<br>[调用处 WeaponBeamEntity.getOwner](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L113) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L117) |
| ` @Override public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.level().isClientSide() `<br>实现调用 ` this.level() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L121) |
| ` @Override public boolean isAttackable() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L146) |
| ` @Override public boolean hurtServer(ServerLevel level, DamageSource damageSource, float amount) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L151) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/WeaponBeamEntity.java#L156) |
