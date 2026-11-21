# dev.dubhe.anvilcraft.api.event（AmuletEvent 至 GuideBookEvent.HasGuideBookEvent）



## AmuletEvent

` public abstract sealed class AmuletEvent extends Event permits AmuletEvent.Find, AmuletEvent.ProcessFound, AmuletEvent.ModifyRaffleProbability, AmuletEvent.EntityCheck `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L20)

所有与本模组的 dev.dubhe.anvilcraft.api.amulet.Amulet 护符 有关的事件的基类。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmuletManager getManager() ` | 末尾返回 ` this.manager `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L20) |

## AmuletEvent.EntityCheck

` public static final class EntityCheck extends AmuletEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L113)

本事件会在 AmuletManager#findAmulets(LivingEntity) 中发出， 并允许放行或拦截实体触发护符效果。 EntityCheck#passed 为 \`true\` 时，允许实体触发护符效果。反之则不允许。 本事件会在双端发出。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityCheck(AmuletManager manager, LivingEntity entity) ` | 实现调用 ` super(manager) `<br>[调用处 AmuletManager.findAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L79) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L118) |
| ` public void pass() ` | 执行 ` this.passed = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L123) |
| ` public void unpass() ` | 执行 ` this.passed = false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L127) |
| ` public LivingEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L113) |
| ` public boolean isPassed() ` | 末尾返回 ` this.passed `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L113) |

## AmuletEvent.Find

` public static final class Find extends AmuletEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L38)

本事件会在 AmuletManager#findAmulets(LivingEntity) 内发出， 并允许其它模组从非物品栈形式的源提供护符。 注意：您不需要在此事件中处理护符容器（物品栈形式的源）。请与 ProcessFound 中执行上述操作。 本事件会在双端发出。<br>参见 ProcessFound

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Find(AmuletManager manager, LivingEntity entity, Consumer<ItemStack> collector) ` | 实现调用 ` super(manager) `<br>[调用处 AmuletManager.findAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L43) |
| ` public void provide(ItemStack source) ` | 向事件提供源物品栈<br>参数 ` source ` 源物品栈<br>执行 ` this.collector.accept(source) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L52) |
| ` public LivingEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L38) |

## AmuletEvent.ModifyRaffleProbability

` public static final class ModifyRaffleProbability extends AmuletEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86)

本事件会在 AmuletManager#tryRaffle(ServerPlayer, DamageSource) 中抽取失败时发出， 并允许修改抽取概率。 抽取概率为 0-100 的整数，对应 0%-100% 本事件会在逻辑服务端发出。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModifyRaffleProbability( AmuletManager manager, ServerPlayer player, DamageSource source, Holder.Reference<IAmuletDefinition> def, int probability ) ` | 实现调用 ` super(manager) `<br>[调用处 AmuletManager.tryRaffle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L204) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L94) |
| ` public ServerPlayer getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |
| ` public DamageSource getSource() ` | 末尾返回 ` this.source `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |
| ` public Holder.Reference<IAmuletDefinition> getDef() ` | 末尾返回 ` this.def `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |
| ` public int getProbability() ` | 末尾返回 ` this.probability `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |
| ` public void setProbability(final int probability) ` | 执行 ` this.probability = probability `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L86) |

## AmuletEvent.ProcessFound

` public static final class ProcessFound extends AmuletEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L64)

本事件会在 AmuletManager#processFoundStack(ItemStack, List) 内发出， 并允许其它模组处理护符容器（物品栈形式的源）。 取消该事件将阻止源及其可能包含的其它护符被加入最终结果。 注意：您不应在此事件中从非物品栈形式的源提供护符。请与 Find 中执行上述操作。 本事件会在双端发出。<br>参见 Find

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ProcessFound(AmuletManager manager, ItemStack found) ` | 实现调用 ` super(manager) `<br>[调用处 AmuletManager.processFoundStack](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L92) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L69) |
| ` public void provide(ItemStack amulet) ` | 向事件提供护符物品栈<br>参数 ` amulet ` 护符物品栈<br>执行 ` this.extracted.add(amulet) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L77) |
| ` public ItemStack getFound() ` | 末尾返回 ` this.found `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L64) |
| ` public List<ItemStack> getExtracted() ` | 末尾返回 ` this.extracted `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java#L64) |

## AnvilBehaviorRegisterEvent

` public class AnvilBehaviorRegisterEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AnvilBehaviorRegisterEvent(BlockBehaviorRegister blockBehaviorRegister, StateBehaviorRegister stateBehaviorRegister) ` | [调用处 IAnvilBehavior.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L15) |
| ` public void registerBehavior(Holder<Block> matchingBlock, IAnvilBehavior behavior) ` | 执行 ` this.blockBehaviorRegister.register(matchingBlock.value(), behavior) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L20) |
| ` public void registerBehavior(Block matchingBlock, IAnvilBehavior behavior) ` | 执行 ` this.blockBehaviorRegister.register(matchingBlock, behavior) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L24) |
| ` public void registerBehavior(Predicate<BlockState> pred, IAnvilBehavior behavior) ` | 执行 ` this.stateBehaviorRegister.register(pred, behavior) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L28) |

## AnvilBehaviorRegisterEvent.BlockBehaviorRegister

` public interface BlockBehaviorRegister `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void register(Block matchingBlock, IAnvilBehavior behavior) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L33) |

## AnvilBehaviorRegisterEvent.StateBehaviorRegister

` public interface StateBehaviorRegister `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void register(Predicate<BlockState> pred, IAnvilBehavior behavior) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java#L37) |

## AnvilEvent

` public class AnvilEvent extends EntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AnvilEvent(FallingBlockEntity entity) ` | 实现调用 ` super(entity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L18) |
| ` public FallingBlockEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L14) |

## AnvilEvent.CollisionBlock

` public static class CollisionBlock extends AnvilEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L46)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CollisionBlock(Level level, BlockPos pos, FallingBlockEntity entity, double speed) ` | 铁砧落地事件<br>参数 ` level ` 世界<br>参数 ` pos ` 位置<br>参数 ` entity ` 铁砧<br>参数 ` speed ` 撞击速度<br>实现调用 ` super(entity) `<br>[调用处 EntityMixin.anvil$collisionCraft](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L308) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L61) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L46) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L46) |
| ` public double getSpeed() ` | 末尾返回 ` this.speed `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L46) |
| ` public boolean isAnvilDamage() ` | 末尾返回 ` this.isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L46) |
| ` public void setAnvilDamage(final boolean isAnvilDamage) ` | 执行 ` this.isAnvilDamage = isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L46) |

## AnvilEvent.GiantOnLand

` public static class GiantOnLand extends AnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L69)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GiantOnLand(ServerLevel level, BlockPos pos, FallingGiantAnvilEntity entity, float fallDistance) ` | 铁砧落地事件<br>参数 ` level ` 世界<br>参数 ` pos ` 位置<br>参数 ` entity ` 铁砧<br>参数 ` fallDistance ` 下落距离<br>实现调用 ` super(entity) `<br>[调用处 GiantAnvilBlock.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L288) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L85) |
| ` public ServerLevel getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L69) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L69) |
| ` public float getFallDistance() ` | 末尾返回 ` this.fallDistance `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L69) |
| ` public FallingGiantAnvilEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L69) |
| ` public boolean isAnvilDamage() ` | 末尾返回 ` this.isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L69) |
| ` public void setAnvilDamage(final boolean isAnvilDamage) ` | 执行 ` this.isAnvilDamage = isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L69) |

## AnvilEvent.HurtEntity

` public static class HurtEntity extends AnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L94)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HurtEntity( FallingBlockEntity entity, BlockPos pos, ServerLevel level, Entity hurtedEntity, float damage ) ` | 铁砧伤害实体<br>参数 ` entity ` 铁砧<br>参数 ` pos ` 位置<br>参数 ` level ` 世界<br>参数 ` hurtedEntity ` 被伤害的实体<br>参数 ` damage ` 伤害<br>实现调用 ` super(entity) `<br>[调用处 FallingSpectralBlockEntity.causeFallDamage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingSpectralBlockEntity.java#L271) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L108) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L94) |
| ` public ServerLevel getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L94) |
| ` public Entity getHurtedEntity() ` | 末尾返回 ` this.hurtedEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L94) |
| ` public float getDamage() ` | 末尾返回 ` this.damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L94) |

## AnvilEvent.OnLand

` public static class OnLand extends AnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OnLand(ServerLevel level, BlockPos pos, FallingBlockEntity entity, double fallDistance) ` | 铁砧落地事件<br>参数 ` level ` 世界<br>参数 ` pos ` 位置<br>参数 ` entity ` 铁砧<br>参数 ` fallDistance ` 下落距离<br>实现调用 ` super(entity) `<br>[调用处 GiantAnvilBlock.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L292) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L38) |
| ` public ServerLevel getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L23) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L23) |
| ` public double getFallDistance() ` | 末尾返回 ` this.fallDistance `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L23) |
| ` public boolean isAnvilDamage() ` | 末尾返回 ` this.isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L23) |
| ` public void setAnvilDamage(final boolean isAnvilDamage) ` | 执行 ` this.isAnvilDamage = isAnvilDamage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilEvent.java#L23) |

## AppendCustomHoverTextEvent

` public class AppendCustomHoverTextEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AppendCustomHoverTextEvent.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemStack getStack() ` | 末尾返回 ` this.stack `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AppendCustomHoverTextEvent.java#L16) |
| ` public Item.TooltipContext getContext() ` | 末尾返回 ` this.context `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AppendCustomHoverTextEvent.java#L16) |
| ` public TooltipDisplay getDisplay() ` | 末尾返回 ` this.display `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AppendCustomHoverTextEvent.java#L16) |
| ` @Nullable public Player getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AppendCustomHoverTextEvent.java#L16) |
| ` public TooltipFlag getTooltipFlag() ` | 末尾返回 ` this.tooltipFlag `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AppendCustomHoverTextEvent.java#L16) |
| ` public Consumer<Component> getBuilder() ` | 末尾返回 ` this.builder `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AppendCustomHoverTextEvent.java#L16) |
| ` public AppendCustomHoverTextEvent(final ItemStack stack, final Item.TooltipContext context, final TooltipDisplay display, @Nullable final Player player, final TooltipFlag tooltipFlag, final Consumer<Component> builder) ` | 由 Lombok 生成。<br>[调用处 ItemStackMixin.appendCustomHoverText](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L107) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AppendCustomHoverTextEvent.java#L16) |

## BlockEntityEvent

` public abstract class BlockEntityEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockEntityEvent(Level level, BlockEntity entity) ` | 构造 ` BlockEntityEvent ` 实例。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L13) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L8) |
| ` public BlockEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L8) |

## BlockEntityEvent.ServerLoad

` public static class ServerLoad extends BlockEntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServerLoad(Level level, BlockEntity entity) ` | 执行 ` super(level, entity) `<br>[调用处 LevelChunkMixin.onLoadBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L70) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L19) |

## BlockEntityEvent.ServerUnload

` public static class ServerUnload extends BlockEntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServerUnload(Level level, BlockEntity entity) ` | 执行 ` super(level, entity) `<br>[调用处 LevelChunkMixin.onRemoveBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/BlockEntityEvent.java#L25) |

## CheckIntegrationLoadedEvent

` public class CheckIntegrationLoadedEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CheckIntegrationLoadedEvent(String id) ` | 执行 ` this.id = id `<br>[调用处 ModEventUtil.checkIntegration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L11) |
| ` public void setLoaded() ` | 执行 ` this.loaded = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L15) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L6) |
| ` public boolean isLoaded() ` | 末尾返回 ` this.loaded `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/CheckIntegrationLoadedEvent.java#L6) |

## EntityThroughPortalEvent

` public class EntityThroughPortalEvent extends EntityEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityThroughPortalEvent(Level level, Entity entity, PortalType type) ` | 实现调用 ` super(entity) `<br>[调用处 EntityMixin.handlePortal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L327) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java#L15) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java#L10) |
| ` public PortalType getType() ` | 末尾返回 ` this.type `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java#L10) |

## FishTankEvent

` public class FishTankEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L17)

鱼缸扩展点。ServerTick 在本体熔岩翻新逻辑之前发布，因此非熔岩内容也可被处理。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FishTankEvent(Level level, BlockPos pos, FishTankBlockEntity tank) ` | 构造 ` FishTankEvent ` 实例。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L23) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L17) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L17) |
| ` public FishTankBlockEntity getTank() ` | 末尾返回 ` this.tank `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L17) |

## FishTankEvent.EntityInside

` public static class EntityInside extends FishTankEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityInside(Level level, BlockPos pos, BlockState state, FishTankBlockEntity tank, Entity entity) ` | 实现调用 ` super(level, pos, tank) `<br>[调用处 FishTankBlock.entityInside](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L220) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L44) |
| ` public BlockState getState() ` | 末尾返回 ` this.state `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L39) |
| ` public Entity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L39) |

## FishTankEvent.FluidDamage

` public static class FluidDamage extends FishTankEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidDamage(Level level, BlockPos pos, FishTankBlockEntity tank, FluidStack fluid, float damage) ` | 实现调用 ` super(level, pos, tank) `<br>[调用处 FishTankBlockEntity.entityInsideFluidContent](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L1064) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L57) |
| ` public FluidStack getFluid() ` | 末尾返回 ` this.fluid `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L51) |
| ` public float getDamage() ` | 末尾返回 ` this.damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L51) |
| ` public void setDamage(final float damage) ` | 执行 ` this.damage = damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L51) |

## FishTankEvent.ServerTick

` public static class ServerTick extends FishTankEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServerTick(ServerLevel level, BlockPos pos, FishTankBlockEntity tank) ` | 实现调用 ` super(level, pos, tank) `<br>[调用处 FishTankBlockEntity.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L345) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L33) |
| ` public ServerLevel getServerLevel() ` | 末尾返回 ` this.serverLevel `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/FishTankEvent.java#L29) |

## GiantAnvilEvent

` public class GiantAnvilEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L18)

巨型铁砧生命周期扩展。均在服务器线程发布。 取消 Multiblock 将跳过写死的多方块转化配方； 取消 BlockTick / FallingTick 将跳过本体本 tick 的坍塌或下落逻辑。


## GiantAnvilEvent.BlockTick

` public static class BlockTick extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockTick( GiantAnvilBlock block, BlockState state, ServerLevel level, BlockPos pos, RandomSource random ) ` | [调用处 GiantAnvilBlock.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L318) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L39) |
| ` public GiantAnvilBlock getBlock() ` | 末尾返回 ` this.block `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |
| ` public BlockState getState() ` | 末尾返回 ` this.state `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |
| ` public ServerLevel getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |
| ` public RandomSource getRandom() ` | 末尾返回 ` this.random `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L31) |

## GiantAnvilEvent.FallingTick

` public static class FallingTick extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L54)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FallingTick(FallingGiantAnvilEntity entity) ` | 执行 ` this.entity = entity `<br>[调用处 FallingGiantAnvilEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FallingGiantAnvilEntity.java#L82) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L58) |
| ` public FallingGiantAnvilEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L54) |

## GiantAnvilEvent.Multiblock

` public static class Multiblock extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Multiblock(AnvilEvent.GiantOnLand landing) ` | 执行 ` this.landing = landing `<br>[调用处 GiantAnvilLandingEventListener.handleMultiblock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/GiantAnvilLandingEventListener.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L26) |
| ` public AnvilEvent.GiantOnLand getLanding() ` | 末尾返回 ` this.landing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GiantAnvilEvent.java#L22) |

## GuideBookEvent

` public class GuideBookEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GuideBookEvent() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L10) |

## GuideBookEvent.HasGuideBookEvent

` public static class HasGuideBookEvent extends GuideBookEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HasGuideBookEvent() ` | 当前实现的方法体为空。<br>[调用处 ModEventUtil.hasGuideBook](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L14) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L15) |
| ` public void hasGuideBook() ` | 执行 ` this.hasGuideBook = true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L18) |
| ` public boolean isHasGuideBook() ` | 末尾返回 ` this.hasGuideBook `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L11) |
