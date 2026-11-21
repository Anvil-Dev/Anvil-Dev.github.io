# dev.dubhe.anvilcraft.mixin（ServerPlayerContainerListenerMixin 至 ZombieVillagerMixin）



## ServerPlayerContainerListenerMixin

` public abstract class ServerPlayerContainerListenerMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerContainerListenerMixin.java#L14)

类型注解 ` @Mixin(targets = "net.minecraft.server.level.ServerPlayer$2") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServerPlayerContainerListenerMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerContainerListenerMixin.java#L14) |

## ServerPlayerMixin

` public abstract class ServerPlayerMixin extends Player implements IDynamicPowerComponentHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L37)

类型注解 ` @Mixin(ServerPlayer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Shadow @Final public MinecraftServer server ` | 字段类型为 ` MinecraftServer ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L39) |
| ` public ServerPlayerMixin(Level level, BlockPos pos, float rotY, GameProfile gameProfile) ` | 执行 ` super(level, pos, rotY, gameProfile) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L46) |
| ` @Unique public AABB anvilcraft$getPowerSupplyingBoundingBox() ` | 末尾返回 ` this.getBoundingBox().inflate(0.5) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L64) |
| ` @Override public void anvilcraft$gridTick() ` | 实现调用 ` this.anvilcraft$component.getPowerGrid() `<br>实现调用 ` grid.isWorking() `<br>实现调用 ` this.getData(ModDataAttachments.POWER_GRID_OVERLOADED) `<br>[调用处 ServerPlayerMixin.anvilcraft$switchTo](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L69) |
| ` @Override public void anvilcraft$switchTo(@Nullable PowerGrid grid) ` | 实现调用 ` this.anvilcraft$gridTick() `<br>实现调用 ` this.getData(ModDataAttachments.IN_POWER_GRID) `<br>实现调用 ` this.setData(ModDataAttachments.IN_POWER_GRID, inPowerGrid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L78) |
| ` @Override public void remove(Entity.RemovalReason reason) ` | 实现调用 ` super.remove(reason) `<br>实现调用 ` this.anvilcraft$component.switchTo(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L117) |
| ` @Override public DynamicPowerComponent anvilcraft$getPowerComponent() ` | 末尾返回 ` this.anvilcraft$component ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServerPlayerMixin.java#L123) |

## ServicesMixin

` public class ServicesMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServicesMixin.java#L10)

类型注解 ` @Mixin(Services.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServicesMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ServicesMixin.java#L10) |

## SignalGetterMixin

` public interface SignalGetterMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/SignalGetterMixin.java#L12)

让红石元件从输入面读取绕过支撑方块边缘的导线信号。

类型注解 ` @Mixin(SignalGetter.class) `


## TargetGoalMixin

` public class TargetGoalMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/TargetGoalMixin.java#L16)

类型注解 ` @Mixin(TargetGoal.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TargetGoalMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/TargetGoalMixin.java#L16) |

## VaultBlockEntityServerMixin

` public abstract class VaultBlockEntityServerMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/VaultBlockEntityServerMixin.java#L10)

类型注解 ` @Mixin(VaultBlockEntity.Server.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public VaultBlockEntityServerMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/VaultBlockEntityServerMixin.java#L10) |

## VillagerBrainMixin

` public abstract class VillagerBrainMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/VillagerBrainMixin.java#L19)

类型注解 ` @Mixin(Villager.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public VillagerBrainMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/VillagerBrainMixin.java#L19) |

## VillagerMixin

` public abstract class VillagerMixin extends AbstractVillager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/VillagerMixin.java#L17)

类型注解 ` @Mixin(Villager.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public VillagerMixin(EntityType<? extends AbstractVillager> entityType, Level level) ` | 执行 ` super(entityType, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/VillagerMixin.java#L19) |

## ZombieVillagerMixin

` public abstract class ZombieVillagerMixin extends Zombie `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ZombieVillagerMixin.java#L19)

类型注解 ` @Mixin(ZombieVillager.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ZombieVillagerMixin(EntityType<? extends ZombieVillager> entityType, Level level) ` | 执行 ` super(entityType, level) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ZombieVillagerMixin.java#L25) |
