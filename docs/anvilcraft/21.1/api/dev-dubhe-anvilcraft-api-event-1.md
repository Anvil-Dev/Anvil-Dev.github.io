# dev.dubhe.anvilcraft.api.event（AmuletEvent 至 GuideBookEvent.OpenGuideBookEvent）



## AmuletEvent

` public abstract sealed class AmuletEvent extends Event permits AmuletEvent.Find, AmuletEvent.ProcessFound, AmuletEvent.ModifyRaffleProbability, AmuletEvent.EntityCheck `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmuletManager getManager() ` | 末尾返回 ` this.manager `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L20) |

## AmuletEvent.EntityCheck

` public static final class EntityCheck extends AmuletEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L113)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityCheck(AmuletManager manager, LivingEntity entity) ` | 实现调用 ` super(manager) `<br>[调用处 AmuletManager.findAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L79) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L118) |
| ` public void pass() ` | 执行 ` this.passed = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L123) |
| ` public void unpass() ` | 执行 ` this.passed = false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L127) |
| ` public LivingEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L113) |
| ` public boolean isPassed() ` | 末尾返回 ` this.passed `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L113) |

## AmuletEvent.Find

` public static final class Find extends AmuletEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Find(AmuletManager manager, LivingEntity entity, Consumer<ItemStack> collector) ` | 实现调用 ` super(manager) `<br>[调用处 AmuletManager.findAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L43) |
| ` public void provide(ItemStack source) ` | 执行 ` this.collector.accept(source) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L52) |
| ` public LivingEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L38) |

## AmuletEvent.ModifyRaffleProbability

` public static final class ModifyRaffleProbability extends AmuletEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModifyRaffleProbability( AmuletManager manager, ServerPlayer player, DamageSource source, Holder.Reference<IAmuletDefinition> def, int probability ) ` | 实现调用 ` super(manager) `<br>[调用处 AmuletManager.tryRaffle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L204) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L94) |
| ` public ServerPlayer getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |
| ` public DamageSource getSource() ` | 末尾返回 ` this.source `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |
| ` public Holder.Reference<IAmuletDefinition> getDef() ` | 末尾返回 ` this.def `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |
| ` public int getProbability() ` | 末尾返回 ` this.probability `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |
| ` public void setProbability(final int probability) ` | 执行 ` this.probability = probability `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |

## AmuletEvent.ProcessFound

` public static final class ProcessFound extends AmuletEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L64)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ProcessFound(AmuletManager manager, ItemStack found) ` | 实现调用 ` super(manager) `<br>[调用处 AmuletManager.processFoundStack](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L92) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L69) |
| ` public void provide(ItemStack amulet) ` | 执行 ` this.extracted.add(amulet) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L77) |
| ` public ItemStack getFound() ` | 末尾返回 ` this.found `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L64) |
| ` public List<ItemStack> getExtracted() ` | 末尾返回 ` this.extracted `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L64) |

## AnvilBehaviorRegisterEvent

` public class AnvilBehaviorRegisterEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AnvilBehaviorRegisterEvent(BlockBehaviorRegister blockBehaviorRegister, StateBehaviorRegister stateBehaviorRegister) ` | [调用处 IAnvilBehavior.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L64) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L14) |
| ` public void registerBehavior(Block matchingBlock, IAnvilBehavior behavior) ` | 执行 ` this.blockBehaviorRegister.register(matchingBlock, behavior) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L19) |
| ` public void registerBehavior(Predicate<BlockState> pred, IAnvilBehavior behavior) ` | 执行 ` this.stateBehaviorRegister.register(pred, behavior) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L23) |

## AnvilBehaviorRegisterEvent.BlockBehaviorRegister

` public interface BlockBehaviorRegister `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void register(Block matchingBlock, IAnvilBehavior behavior) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L28) |

## AnvilBehaviorRegisterEvent.StateBehaviorRegister

` public interface StateBehaviorRegister `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void register(Predicate<BlockState> pred, IAnvilBehavior behavior) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L32) |

## AnvilEvent

` public class AnvilEvent extends EntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AnvilEvent(FallingBlockEntity entity) ` | 实现调用 ` super(entity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L17) |
| ` public FallingBlockEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L13) |

## AnvilEvent.AfterInWorldRecipe

` public static class AfterInWorldRecipe extends AnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L116)

世界内配方处理结束。无论成功与否都会在 finally 中发布。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AfterInWorldRecipe(OnLand landing) ` | 实现调用 ` super(landing.getEntity()) `<br>实现调用 ` landing.getEntity() `<br>[调用处 AnvilEventListener.handleNeoAnvilRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L153) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L120) |
| ` public OnLand getLanding() ` | 末尾返回 ` this.landing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L116) |

## AnvilEvent.BeforeInWorldRecipe

` public static class BeforeInWorldRecipe extends AnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L103)

世界内配方处理开始。在服务器线程、handleNeoAnvilRecipe 进入时发布。 用于隔离同一落点上的多个实体锅批次。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BeforeInWorldRecipe(OnLand landing) ` | 实现调用 ` super(landing.getEntity()) `<br>实现调用 ` landing.getEntity() `<br>[调用处 AnvilEventListener.handleNeoAnvilRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L125) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L107) |
| ` public OnLand getLanding() ` | 末尾返回 ` this.landing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L103) |

## AnvilEvent.CollisionBlock

` public static class CollisionBlock extends AnvilEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L47)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CollisionBlock(Level level, BlockPos pos, FallingBlockEntity entity, double speed) ` | 铁砧落地事件<br>参数 ` level ` 世界<br>参数 ` pos ` 位置<br>参数 ` entity ` 铁砧<br>参数 ` speed ` 撞击速度<br>实现调用 ` super(entity) `<br>[调用处 EntityMixin.anvil$collisionCraft](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L360) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L64) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L47) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L47) |
| ` public double getSpeed() ` | 末尾返回 ` this.speed `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L47) |
| ` public boolean isAnvilDamage() ` | 末尾返回 ` this.isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L47) |
| ` public void setAnvilDamage(final boolean isAnvilDamage) ` | 执行 ` this.isAnvilDamage = isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L47) |

## AnvilEvent.GiantOnLand

` public static class GiantOnLand extends AnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L72)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GiantOnLand(Level level, BlockPos pos, FallingGiantAnvilEntity entity, float fallDistance) ` | 铁砧落地事件<br>参数 ` level ` 世界<br>参数 ` pos ` 位置<br>参数 ` entity ` 铁砧<br>参数 ` fallDistance ` 下落距离<br>实现调用 ` super(entity) `<br>[调用处 GiantAnvilBlock.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L298) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L90) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L72) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L72) |
| ` public float getFallDistance() ` | 末尾返回 ` this.fallDistance `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L72) |
| ` public FallingGiantAnvilEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L72) |
| ` public boolean isAnvilDamage() ` | 末尾返回 ` this.isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L72) |
| ` public void setAnvilDamage(final boolean isAnvilDamage) ` | 执行 ` this.isAnvilDamage = isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L72) |

## AnvilEvent.HurtEntity

` public static class HurtEntity extends AnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L126)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HurtEntity( FallingBlockEntity entity, BlockPos pos, Level level, Entity hurtedEntity, float damage ) ` | 铁砧伤害实体<br>参数 ` entity ` 铁砧<br>参数 ` pos ` 位置<br>参数 ` level ` 世界<br>参数 ` hurtedEntity ` 被伤害的实体<br>参数 ` damage ` 伤害<br>实现调用 ` super(entity) `<br>[调用处 FallingSpectralBlockEntity.causeFallDamage](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L261) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L142) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L126) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L126) |
| ` public Entity getHurtedEntity() ` | 末尾返回 ` this.hurtedEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L126) |
| ` public float getDamage() ` | 末尾返回 ` this.damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L126) |

## AnvilEvent.OnLand

` public static class OnLand extends AnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OnLand(Level level, BlockPos pos, FallingBlockEntity entity, float fallDistance) ` | 铁砧落地事件<br>参数 ` level ` 世界<br>参数 ` pos ` 位置<br>参数 ` entity ` 铁砧<br>参数 ` fallDistance ` 下落距离<br>实现调用 ` super(entity) `<br>[调用处 GiantAnvilBlock.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L302) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L39) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L22) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L22) |
| ` public float getFallDistance() ` | 末尾返回 ` this.fallDistance `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L22) |
| ` public boolean isAnvilDamage() ` | 末尾返回 ` this.isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L22) |
| ` public void setAnvilDamage(final boolean isAnvilDamage) ` | 执行 ` this.isAnvilDamage = isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L22) |

## BlockEntityEvent

` public abstract class BlockEntityEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockEntityEvent(Level level, BlockEntity entity) ` | 构造 ` BlockEntityEvent ` 实例。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L13) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L8) |
| ` public BlockEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L8) |

## BlockEntityEvent.ServerLoad

` public static class ServerLoad extends BlockEntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServerLoad(Level level, BlockEntity entity) ` | 执行 ` super(level, entity) `<br>[调用处 LevelChunkMixin.onLoadBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L47) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L19) |

## BlockEntityEvent.ServerUnload

` public static class ServerUnload extends BlockEntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServerUnload(Level level, BlockEntity entity) ` | 执行 ` super(level, entity) `<br>[调用处 LevelChunkMixin.onRemoveBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L60) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L25) |

## CheckIntegrationLoadedEvent

` public class CheckIntegrationLoadedEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CheckIntegrationLoadedEvent(String id) ` | 执行 ` this.id = id `<br>[调用处 ModEventUtil.checkIntegration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L11) |
| ` public void setLoaded() ` | 执行 ` this.loaded = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L15) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L6) |
| ` public boolean isLoaded() ` | 末尾返回 ` this.loaded `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L6) |

## EntityThroughPortalEvent

` public class EntityThroughPortalEvent extends EntityEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityThroughPortalEvent(Level level, Entity entity, PortalType type) ` | 实现调用 ` super(entity) `<br>[调用处 EntityMixin.handlePortal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L377) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java#L15) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java#L10) |
| ` public PortalType getType() ` | 末尾返回 ` this.type `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java#L10) |

## FishTankEvent

` public class FishTankEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L17)

鱼缸扩展点。ServerTick 在本体熔岩翻新逻辑之前发布，因此非熔岩内容也可被处理。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FishTankEvent(Level level, BlockPos pos, FishTankBlockEntity tank) ` | 构造 ` FishTankEvent ` 实例。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L23) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L17) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L17) |
| ` public FishTankBlockEntity getTank() ` | 末尾返回 ` this.tank `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L17) |

## FishTankEvent.EntityInside

` public static class EntityInside extends FishTankEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityInside(Level level, BlockPos pos, BlockState state, FishTankBlockEntity tank, Entity entity) ` | 实现调用 ` super(level, pos, tank) `<br>[调用处 FishTankBlock.entityInside](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/FishTankBlock.java#L190) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L44) |
| ` public BlockState getState() ` | 末尾返回 ` this.state `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L39) |
| ` public Entity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L39) |

## FishTankEvent.FluidDamage

` public static class FluidDamage extends FishTankEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidDamage(Level level, BlockPos pos, FishTankBlockEntity tank, FluidStack fluid, float damage) ` | 实现调用 ` super(level, pos, tank) `<br>[调用处 FishTankBlockEntity.entityInsideFluidContent](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L994) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L57) |
| ` public FluidStack getFluid() ` | 末尾返回 ` this.fluid `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L51) |
| ` public float getDamage() ` | 末尾返回 ` this.damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L51) |
| ` public void setDamage(final float damage) ` | 执行 ` this.damage = damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L51) |

## FishTankEvent.ServerTick

` public static class ServerTick extends FishTankEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServerTick(ServerLevel level, BlockPos pos, FishTankBlockEntity tank) ` | 实现调用 ` super(level, pos, tank) `<br>[调用处 FishTankBlockEntity.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L386) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L33) |
| ` public ServerLevel getServerLevel() ` | 末尾返回 ` this.serverLevel `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L29) |

## GiantAnvilEvent

` public class GiantAnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L18)

巨型铁砧生命周期扩展。均在服务器线程发布。 取消 Multiblock 将跳过写死的多方块转化配方； 取消 BlockTick / FallingTick 将跳过本体本 tick 的坍塌或下落逻辑。


## GiantAnvilEvent.BlockTick

` public static class BlockTick extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockTick( GiantAnvilBlock block, BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | [调用处 GiantAnvilBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L327) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L39) |
| ` public GiantAnvilBlock getBlock() ` | 末尾返回 ` this.block `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |
| ` public BlockState getState() ` | 末尾返回 ` this.state `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |
| ` public ServerLevel getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |
| ` public RandomSource getRandom() ` | 末尾返回 ` this.random `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |

## GiantAnvilEvent.FallingTick

` public static class FallingTick extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L54)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FallingTick(FallingGiantAnvilEntity entity) ` | 执行 ` this.entity = entity `<br>[调用处 FallingGiantAnvilEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L58) |
| ` public FallingGiantAnvilEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L54) |

## GiantAnvilEvent.Multiblock

` public static class Multiblock extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Multiblock(AnvilEvent.GiantOnLand landing) ` | 执行 ` this.landing = landing `<br>[调用处 GiantAnvilLandingEventListener.handleMultiblock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L26) |
| ` public AnvilEvent.GiantOnLand getLanding() ` | 末尾返回 ` this.landing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L22) |

## GuideBookEvent

` public class GuideBookEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GuideBookEvent() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L10) |

## GuideBookEvent.HasGuideBookEvent

` public static class HasGuideBookEvent extends GuideBookEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HasGuideBookEvent() ` | 当前实现的方法体为空。<br>[调用处 ModEventUtil.hasGuideBook](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L14) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L15) |
| ` public void hasGuideBook() ` | 执行 ` this.hasGuideBook = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L18) |
| ` public boolean isHasGuideBook() ` | 末尾返回 ` this.hasGuideBook `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L11) |

## GuideBookEvent.OpenGuideBookEvent

` public static class OpenGuideBookEvent extends GuideBookEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OpenGuideBookEvent(Level level, ServerPlayer player, InteractionHand usedHand) ` | [调用处 ModEventUtil.openGuideBook](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L18) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L29) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L23) |
| ` public ServerPlayer getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L23) |
| ` public InteractionHand getUsedHand() ` | 末尾返回 ` this.usedHand `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L23) |
