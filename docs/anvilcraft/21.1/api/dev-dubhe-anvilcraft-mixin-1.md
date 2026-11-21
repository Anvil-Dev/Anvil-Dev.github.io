# dev.dubhe.anvilcraft.mixin（AvoidEntityGoalMixin 至 ServerLevelMixin）



## AvoidEntityGoalMixin

` public abstract class AvoidEntityGoalMixin<T extends LivingEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/AvoidEntityGoalMixin.java#L26)

类型注解 ` @Mixin(AvoidEntityGoal.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AvoidEntityGoalMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/AvoidEntityGoalMixin.java#L26) |

## BeaconMenuMixin

` public abstract class BeaconMenuMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BeaconMenuMixin.java#L26)

类型注解 ` @Mixin(BeaconMenu.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BeaconMenuMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BeaconMenuMixin.java#L26) |

## BlueprintLevelMixin

` public class BlueprintLevelMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintLevelMixin.java#L14)

类型注解 ` @Mixin(Level.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlueprintLevelMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintLevelMixin.java#L14) |

## BlueprintServerLevelMixin

` public class BlueprintServerLevelMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintServerLevelMixin.java#L10)

类型注解 ` @Mixin(ServerLevel.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlueprintServerLevelMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintServerLevelMixin.java#L10) |

## BlueprintTicksMixin

` public class BlueprintTicksMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintTicksMixin.java#L10)

类型注解 ` @Mixin(LevelTicks.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlueprintTicksMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintTicksMixin.java#L10) |

## BuddingAmethystBlockMixin

` public class BuddingAmethystBlockMixin implements IBuddingAmethystBlockExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BuddingAmethystBlockMixin.java#L22)

类型注解 ` @Mixin(BuddingAmethystBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void anvilcraft$tryGrowBuds(Level level, BlockPos pos, BlockState state) ` | 实现调用 ` pos.relative(dir) `<br>实现调用 ` level.getBlockState(neighborPos) `<br>实现调用 ` BuddingAmethystBlock.canClusterGrowAtState(neighborState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BuddingAmethystBlockMixin.java#L28) |
| ` @Override public void anvilcraft$tryBreakClusters(Level level, BlockPos pos, BlockState state, BiConsumer<BlockPos, BlockState> breaker) ` | 实现调用 ` pos.relative(dir) `<br>实现调用 ` level.getBlockState(neighborPos) `<br>实现调用 ` neighborState.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BuddingAmethystBlockMixin.java#L77) |
| ` public BuddingAmethystBlockMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BuddingAmethystBlockMixin.java#L22) |

## CandleCakeBlockMixin

` public class CandleCakeBlockMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/CandleCakeBlockMixin.java#L19)

类型注解 ` @Mixin(CandleCakeBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CandleCakeBlockMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/CandleCakeBlockMixin.java#L19) |

## CauldronBlockMixin

` public abstract class CauldronBlockMixin implements IEmptyCauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/CauldronBlockMixin.java#L7)

类型注解 ` @Mixin(CauldronBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CauldronBlockMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/CauldronBlockMixin.java#L7) |

## ChunkGeneratorMixin

` public class ChunkGeneratorMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ChunkGeneratorMixin.java#L20)

Keeps the overworld-like generator independent from data-driven mod world generation.

类型注解 ` @Mixin(ChunkGenerator.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChunkGeneratorMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ChunkGeneratorMixin.java#L20) |

## ClientPacketListenerMixin

` public abstract class ClientPacketListenerMixin extends ClientCommonPacketListenerImpl implements ClientGamePacketListener, TickablePacketListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ClientPacketListenerMixin.java#L23)

类型注解 ` @Mixin(ClientPacketListener.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Inject( method = "handleEntityEvent", at = @At( value = "INVOKE", target = "Lnet/minecraft/network/protocol/game/ClientboundEntityEventPacket;getEventId()B" ) ) public void handleEntityEvent(ClientboundEntityEventPacket packet, CallbackInfo ci, @Local Entity entity) ` | 实现调用 ` packet.getEventId() `<br>实现调用 ` this.minecraft.particleEngine.createTrackingEmitter(entity, ParticleTypes.TOTEM_OF_UNDYING, 30) `<br>实现调用 ` entity.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ClientPacketListenerMixin.java#L33) |

## ComparatorBlockEntityMixin

` public abstract class ComparatorBlockEntityMixin extends BlockEntity implements ITooltipProviderExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ComparatorBlockEntityMixin.java#L26)

类型注解 ` @Mixin(ComparatorBlockEntity.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ComparatorBlockEntityMixin( BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ComparatorBlockEntityMixin.java#L28) |
| ` @Shadow public abstract int getOutputSignal() ` | [调用处 ComparatorBlockEntityMixin.anvilcraft$getTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ComparatorBlockEntityMixin.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ComparatorBlockEntityMixin.java#L33) |
| ` @Override public List<Component> anvilcraft$getTooltip() ` | 末尾返回 ` lines ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ComparatorBlockEntityMixin.java#L39) |

## ComponentSerializationMixin

` public class ComponentSerializationMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ComponentSerializationMixin.java#L10)

类型注解 ` @Mixin(ComponentSerialization.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ComponentSerializationMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ComponentSerializationMixin.java#L10) |

## DefaultDispenseItemBehaviorMixin

` public abstract class DefaultDispenseItemBehaviorMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/DefaultDispenseItemBehaviorMixin.java#L23)

类型注解 ` @Mixin(DefaultDispenseItemBehavior.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Inject( method = "execute", at = @At(value = "INVOKE", target = "Lnet/minecraft/world/item/ItemStack;split(I)Lnet/minecraft/world/item/ItemStack;"), cancellable = true ) public void betterDispense(BlockSource blockSource, ItemStack item, CallbackInfoReturnable<ItemStack> cir) ` | 实现调用 ` item.getItem() `<br>实现调用 ` item.is(Items.POWDER_SNOW_BUCKET) `<br>实现调用 ` item.is(Items.GLASS_BOTTLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/DefaultDispenseItemBehaviorMixin.java#L25) |
| ` public DefaultDispenseItemBehaviorMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/DefaultDispenseItemBehaviorMixin.java#L23) |

## DispenserBlockMixin

` public class DispenserBlockMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/DispenserBlockMixin.java#L18)

类型注解 ` @Mixin(DispenserBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DispenserBlockMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/DispenserBlockMixin.java#L18) |

## EndermanMixin

` public abstract class EndermanMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EndermanMixin.java#L11)

类型注解 ` @Mixin(EnderMan.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EndermanMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EndermanMixin.java#L11) |

## EntityMixin

` public abstract class EntityMixin implements IEntityExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L45)

类型注解 ` @Mixin(Entity.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public GravityManager.OrbitalMotion anvilcraft$getOrbitalMotion() ` | 末尾返回 ` this.anvilcraft$orbitalMotion ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L69) |
| ` @Unique public Vec3 anvil$fixedDeltaMovement ` | 初值 ` Vec3.ZERO ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L74) |
| ` @Unique public boolean anvil$isDeflected ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L77) |
| ` @Shadow public abstract Vec3 position() ` | [调用处 EntityMixin.anvilcraft$fixFallingBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L197) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L94) |
| ` @Shadow public abstract void setPos(Vec3 pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L97) |
| ` @Shadow public abstract void setPos(double x, double y, double z) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L100) |
| ` @Shadow public abstract double getX() ` | [调用处 EntityMixin.anvilcraft$fixFallingBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L180) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L103) |
| ` @Shadow public abstract double getY() ` | [调用处 EntityMixin.anvilcraft$fixFallingBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L180) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L106) |
| ` @Shadow public abstract double getZ() ` | [调用处 EntityMixin.anvilcraft$fixFallingBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L180) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L109) |
| ` @Shadow public abstract Vec3 getDeltaMovement() ` | [调用处 EntityMixin.anvilcraft$isProjectileMovement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L278) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L112) |
| ` @Shadow public abstract void setPosRaw(double x, double y, double z) ` | [调用处 EntityMixin.anvilcraft$changeProjectilePosSetResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L270) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L115) |
| ` @Shadow public abstract void setBoundingBox(AABB bb) ` | [调用处 EntityMixin.anvilcraft$changeProjectilePosSetResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L271) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L118) |
| ` @Shadow public boolean horizontalCollision ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L124) |
| ` @Shadow public abstract Pose getPose() ` | 返回 ` Pose ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L127) |
| ` @Shadow @Nullable public PortalProcessor portalProcess ` | 字段类型为 ` PortalProcessor ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L133) |
| ` @Override public boolean anvilcraft$isDeflected() ` | 末尾返回 ` this.anvil$isDeflected ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L137) |
| ` @Override public Vec3 anvilcraft$getFixedDeltaMovement() ` | 末尾返回 ` this.anvil$fixedDeltaMovement ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L142) |
| ` @WrapOperation( method = "move(Lnet/minecraft/world/entity/MoverType;Lnet/minecraft/world/phys/Vec3;)V", at = @At( value = "INVOKE", target = "Lnet/minecraft/world/entity/Entity;setPos(DDD)V", ordinal = 1 ) ) public void anvilcraft$fixFallingBlockEntity( Entity instance, double x, double y, double z, Operation<Void> original ) ` | 实现调用 ` this.getX() `<br>实现调用 ` this.getY() `<br>实现调用 ` this.getZ() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L168) |
| ` @WrapOperation( method = "move(Lnet/minecraft/world/entity/MoverType;Lnet/minecraft/world/phys/Vec3;)V", at = @At( value = "INVOKE", target = "Lnet/minecraft/util/Mth;equal(DD)Z", ordinal = 0 ) ) public boolean anvilcraft$cancelCollision1(double x, double y, Operation<Boolean> original) ` | 末尾返回 ` this.anvil$isMovementFixed \|\| original.call(x, y) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L209) |
| ` @WrapOperation( method = "move(Lnet/minecraft/world/entity/MoverType;Lnet/minecraft/world/phys/Vec3;)V", at = @At( value = "INVOKE", target = "Lnet/minecraft/util/Mth;equal(DD)Z", ordinal = 1 ) ) public boolean anvilcraft$cancelCollision2(double x, double y, Operation<Boolean> original) ` | 末尾返回 ` this.anvil$isMovementFixed \|\| original.call(x, y) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L218) |
| ` @Inject( method = "move(Lnet/minecraft/world/entity/MoverType;Lnet/minecraft/world/phys/Vec3;)V", at = @At( value = "INVOKE", target = "Lnet/minecraft/world/entity/Entity;setOnGroundWithMovement(ZLnet/minecraft/world/phys/Vec3;)V", shift = At.Shift.AFTER ) ) public void anvilcraft$cancelCollisionBySable(MoverType type, Vec3 pos, CallbackInfo ci) ` | 实现调用 ` CompatUtil.HAS_SABLE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L227) |
| ` @Inject(method = "setPos(DDD)V", at = @At("HEAD"), cancellable = true) public void anvilcraft$changeProjectilePosSetResult(double x, double y, double z, CallbackInfo ci) ` | 实现调用 ` this.getX() `<br>实现调用 ` this.getY() `<br>实现调用 ` this.getZ() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L262) |
| ` @Inject(method = "move", at = @At("HEAD")) public void anvil$recordMovement( MoverType type, Vec3 pos, CallbackInfo ci ) ` | 实现调用 ` this.getDeltaMovement() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L309) |
| ` @Inject(method = "move", at = @At("RETURN")) public void anvil$collisionCraft(MoverType type, Vec3 movement, CallbackInfo ci) ` | 实现调用 ` thiz.isRemoved() `<br>实现调用 ` this.anvil$beforeBoundingMovement.length() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L354) |
| ` public EntityMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L45) |

## EntityTypeBuilderMixin

` public class EntityTypeBuilderMixin<T extends Entity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityTypeBuilderMixin.java#L20)

类型注解 ` @Mixin(EntityType.Builder.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityTypeBuilderMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityTypeBuilderMixin.java#L20) |

## FallingBlockMixin

` public abstract class FallingBlockMixin extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockMixin.java#L31)

类型注解 ` @Mixin({FallingBlock.class, GiantAnvilBlock.class}) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FallingBlockMixin(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FallingBlockMixin.java#L34) |

## FlyingHitEntityMixin

` public abstract class FlyingHitEntityMixin extends Entity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FlyingHitEntityMixin.java#L26)

类型注解 ` @Mixin(LivingEntity.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Shadow public abstract ItemStack getItemBySlot(EquipmentSlot slot) ` | [调用处 FlyingHitEntityMixin.onFlyingHitEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FlyingHitEntityMixin.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FlyingHitEntityMixin.java#L32) |
| ` public FlyingHitEntityMixin(EntityType<?> entityType, Level level) ` | 执行 ` super(entityType, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/FlyingHitEntityMixin.java#L35) |

## GrowingPlantBlockMixin

` public class GrowingPlantBlockMixin implements IGrowingPlantBlockGetter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GrowingPlantBlockMixin.java#L10)

类型注解 ` @Mixin(GrowingPlantBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Direction anvilcraft$getGrowthDirection() ` | 末尾返回 ` this.growthDirection ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GrowingPlantBlockMixin.java#L16) |
| ` public GrowingPlantBlockMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GrowingPlantBlockMixin.java#L10) |

## GuiGraphicsMixin

` public abstract class GuiGraphicsMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GuiGraphicsMixin.java#L21)

类型注解 ` @Mixin(GuiGraphics.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GuiGraphicsMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GuiGraphicsMixin.java#L21) |

## IdDispatchCodecMixin

` public class IdDispatchCodecMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/IdDispatchCodecMixin.java#L12)

类型注解 ` @Mixin(IdDispatchCodec.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IdDispatchCodecMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/IdDispatchCodecMixin.java#L12) |

## ItemFrameRendererMixin

` public class ItemFrameRendererMixin<T extends ItemFrame> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemFrameRendererMixin.java#L15)

类型注解 ` @Mixin(ItemFrameRenderer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemFrameRendererMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemFrameRendererMixin.java#L15) |

## ItemMixin

` public class ItemMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemMixin.java#L16)

类型注解 ` @Mixin(Item.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemMixin.java#L16) |

## ItemStackMixin

` public abstract class ItemStackMixin implements DataComponentHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L45)

类型注解 ` @Mixin(ItemStack.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemStackMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L45) |

## JeiBasicRecipeTransferHandlerMixin

` public abstract class JeiBasicRecipeTransferHandlerMixin<C extends AbstractContainerMenu, R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiBasicRecipeTransferHandlerMixin.java#L28)

在 JEI 完成菜单校验后，为标准处理器的两种调用入口补齐仓储材料。

类型注解 ` @Mixin(value = BasicRecipeTransferHandler.class, remap = false) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Shadow public abstract @Nullable IRecipeTransferError transferRecipe( C container, R recipe, IRecipeSlotsView recipeSlotsView, Player player, boolean maxTransfer, boolean doTransfer ) ` | [调用处 JeiBasicRecipeTransferHandlerMixin.anvilcraft$restockOrAllow](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiBasicRecipeTransferHandlerMixin.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiBasicRecipeTransferHandlerMixin.java#L30) |
| ` @Shadow public abstract @Nullable IRecipeTransferError transferRecipe(IRecipeTransferContext<R, C> context, boolean doTransfer) ` | [调用处 JeiBasicRecipeTransferHandlerMixin.anvilcraft$restockOrAllow](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiBasicRecipeTransferHandlerMixin.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiBasicRecipeTransferHandlerMixin.java#L40) |
| ` public JeiBasicRecipeTransferHandlerMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiBasicRecipeTransferHandlerMixin.java#L28) |

## JeiSmithingTransferMixin

` public abstract class JeiSmithingTransferMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiSmithingTransferMixin.java#L14)

类型注解 ` @Mixin(BasicRecipeTransferHandlerServer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JeiSmithingTransferMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiSmithingTransferMixin.java#L14) |

## LevelChunkMixin

` public abstract class LevelChunkMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L27)

类型注解 ` @Mixin(LevelChunk.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Shadow public abstract Level getLevel() ` | [调用处 LevelChunkMixin.trackBuildingRodReplacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L29) |
| ` @Shadow public abstract Map<BlockPos, BlockEntity> getBlockEntities() ` | [调用处 LevelChunkMixin.onLoadBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L32) |
| ` @Shadow @Nullable public abstract BlockEntity getBlockEntity(BlockPos pos) ` | [调用处 LevelChunkMixin.onBlockEntityRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L96) |
| ` @Shadow public abstract BlockState getBlockState(BlockPos pos) ` | [调用处 LevelChunkMixin.trackEnchantedGoldBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L100) |
| ` public LevelChunkMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L27) |

## LevelRendererMixin

` public abstract class LevelRendererMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelRendererMixin.java#L43)

类型注解 ` @Mixin(LevelRenderer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LevelRendererMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelRendererMixin.java#L43) |

## LivingEntityMixin

` public abstract class LivingEntityMixin extends Entity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L72)

类型注解 ` @Mixin(LivingEntity.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Shadow public abstract boolean hasEffect(Holder<MobEffect> effect) ` | [调用处 LivingEntityMixin.preventAddEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L295) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L102) |
| ` @Shadow public abstract ItemStack getItemInHand(InteractionHand hand) ` | [调用处 LivingEntityMixin.checkTotemDeathProtection](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L213) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L105) |
| ` @Shadow public abstract void kill() ` | [调用处 LivingEntityMixin.dieOfRage](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L276) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L108) |

## LootItemRandomChanceWithEnchantedBonusConditionMixin

` public class LootItemRandomChanceWithEnchantedBonusConditionMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LootItemRandomChanceWithEnchantedBonusConditionMixin.java#L15)

类型注解 ` @Mixin(LootItemRandomChanceWithEnchantedBonusCondition.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LootItemRandomChanceWithEnchantedBonusConditionMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LootItemRandomChanceWithEnchantedBonusConditionMixin.java#L15) |

## MinecraftServerMixin

` public class MinecraftServerMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/MinecraftServerMixin.java#L17)

Gives the built-in overworld-like level an independent biome zoom seed.

类型注解 ` @Mixin(MinecraftServer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MinecraftServerMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/MinecraftServerMixin.java#L17) |

## MouseHandlerMixin

` public abstract class MouseHandlerMixin implements IMouseHandlerExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/MouseHandlerMixin.java#L22)

类型注解 ` @Mixin(MouseHandler.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void anvilcraft$grabMouseWithScreen() ` | 实现调用 ` this.minecraft.isWindowActive() `<br>分支 ` (!Minecraft.ON_OSX) ` 内调用 ` KeyMapping.setAll() `<br>分支 ` (this.minecraft.isWindowActive() && !this.mouseGrabbed) ` 内调用 ` this.minecraft.getWindow().getScreenWidth() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/MouseHandlerMixin.java#L41) |
| ` public MouseHandlerMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/MouseHandlerMixin.java#L22) |

## NearestAttackableTargetGoalMixin

` public abstract class NearestAttackableTargetGoalMixin<T extends LivingEntity> extends TargetGoal `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/NearestAttackableTargetGoalMixin.java#L21)

类型注解 ` @Mixin(NearestAttackableTargetGoal.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NearestAttackableTargetGoalMixin(Mob mob, boolean mustSee) ` | 执行 ` super(mob, mustSee) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/NearestAttackableTargetGoalMixin.java#L31) |

## OverworldSkyMixin

` public abstract class OverworldSkyMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/OverworldSkyMixin.java#L15)

类型注解 ` @Mixin(LevelRenderer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverworldSkyMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/OverworldSkyMixin.java#L15) |

## PhantomGoalMixin

` public abstract class PhantomGoalMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PhantomGoalMixin.java#L18)

类型注解 ` @Mixin(Phantom.PhantomSweepAttackGoal.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PhantomGoalMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PhantomGoalMixin.java#L18) |

## PlayerHitEntityMixin

` public abstract class PlayerHitEntityMixin extends LivingEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PlayerHitEntityMixin.java#L26)

类型注解 ` @Mixin(ServerPlayer.class) `


## PostChainAccessor

` public interface PostChainAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PostChainAccessor.java#L10)

类型注解 ` @Mixin(PostChain.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor List<PostPass> getPasses() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PostChainAccessor.java#L12) |

## ProjectileUtilMixin

` public abstract class ProjectileUtilMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ProjectileUtilMixin.java#L22)

修正使用 ProjectileUtil 的普通投掷物碰撞检测。 当高速投掷物本 tick 会经过工作中的偏转环时，将方块射线终点和实体查询范围 裁剪到最近的偏转环中心，防止投掷物先撞到环体或越过偏转环。

类型注解 ` @Mixin(ProjectileUtil.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ProjectileUtilMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ProjectileUtilMixin.java#L22) |

## RedstoneWireBlockMixin

` public abstract class RedstoneWireBlockMixin implements ITooltipProviderExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/RedstoneWireBlockMixin.java#L31)

类型注解 ` @Mixin(RedStoneWireBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Shadow @Final public static IntegerProperty POWER ` | 字段类型为 ` IntegerProperty ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/RedstoneWireBlockMixin.java#L33) |
| ` @Override public List<Component> anvilcraft$getTooltip(BlockState state) ` | 末尾返回 ` lines ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/RedstoneWireBlockMixin.java#L59) |
| ` public RedstoneWireBlockMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/RedstoneWireBlockMixin.java#L31) |

## SectionCompilerMixin

` public abstract class SectionCompilerMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/SectionCompilerMixin.java#L37)

类型注解 ` @Mixin(SectionCompiler.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @WrapOperation( method = "getOrBeginLayer", at = @At( value = "FIELD", target = "Lcom/mojang/blaze3d/vertex/DefaultVertexFormat;BLOCK:Lcom/mojang/blaze3d/vertex/VertexFormat;", opcode = Opcodes.GETSTATIC ) ) public VertexFormat wrapFormatBasedOnRenderType( Operation<VertexFormat> original, @Local(argsOnly = true) RenderType realRenderType ) ` | 末尾返回 ` realRenderType.format() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/SectionCompilerMixin.java#L163) |
| ` public SectionCompilerMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/SectionCompilerMixin.java#L37) |

## ServerLevelMixin

` public class ServerLevelMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerLevelMixin.java#L19)

类型注解 ` @Mixin(ServerLevel.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Inject( method = "addFreshEntity", at = @At(value = "HEAD") ) public void poachItemEntity(Entity entity, CallbackInfoReturnable<Boolean> cir) ` | 分支 ` (entity instanceof ItemEntity e1) ` 内调用 ` e1.anvilcraft$poach() `<br>分支 ` (entity instanceof ExperienceOrb experienceOrb) ` 内调用 ` experienceOrb.anvilcraft$poach() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerLevelMixin.java#L60) |
| ` @Inject( method = "addEntity", at = @At( value = "INVOKE", target = "Lorg/slf4j/Logger;warn(Ljava/lang/String;Ljava/lang/Object;)V" ) ) public void recordAddedItemEntity(Entity entity, CallbackInfoReturnable<Boolean> cir) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerLevelMixin.java#L73) |
| ` @WrapOperation( method = "addEntity", at = @At( value = "INVOKE", target = "Lorg/slf4j/Logger;warn(Ljava/lang/String;Ljava/lang/Object;)V" ) ) public void cancelItemDiscardedWarn(Logger instance, String string, Object o, Operation<Void> original) ` | 分支 ` (this.anvilcraft$shouldCheckDiscarded) ` 内调用 ` this.anvilcraft$addedItem.anvilcraft$getDiscarded() `<br>分支 ` (this.anvilcraft$shouldCheckDiscarded) ` 内调用 ` this.anvilcraft$addedExperienceOrb.anvilcraft$getDiscarded() `<br>实现调用 ` original.call(instance, string, o) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerLevelMixin.java#L89) |
| ` public ServerLevelMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerLevelMixin.java#L19) |
