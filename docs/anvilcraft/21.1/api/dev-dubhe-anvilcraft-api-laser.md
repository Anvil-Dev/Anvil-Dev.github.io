# dev.dubhe.anvilcraft.api.laser



## GammaLaserBehavior

` public final class GammaLaserBehavior implements ILaserComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void onEmitPre(ILaserComponentOwner owner) ` | 实现调用 ` LaserTypeComponent.isGamma(owner) `<br>分支 ` (!LaserTypeComponent.isGamma(owner)) ` 内调用 ` this.onEmissionStopped(owner) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L19) |
| ` @Override public void onEmissionStopped(ILaserComponentOwner owner) ` | [调用处 GammaLaserBehavior.onEmitPre](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L24) |
| ` @Override public boolean onHitBlock(ILaserComponentOwner owner, Level level, BlockPos blockPos) ` | ` (!LaserTypeComponent.isGamma(owner)) ` 成立时提前返回 ` true `<br>` (!(level instanceof ServerLevel)) ` 成立时提前返回 ` false `<br>末尾返回 ` false `<br>实现调用 ` LaserTypeComponent.isGamma(owner) `<br>实现调用 ` LaserStrengthComponent.getStrength(owner) `<br>实现调用 ` GammaLaserEffects.destroyPrisms(level, owner.getLaserSourcePos(), owner.getLaserDirection(), blockPos) `<br>实现调用 ` owner.getLaserSourcePos() `<br>实现调用 ` owner.getLaserDirection() `<br>实现调用 ` blockPos.equals(this.irradiatingPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L30) |
| ` @Override public boolean equals(@Nullable Object other) ` | 末尾返回 ` other instanceof GammaLaserBehavior ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L60) |
| ` @Override public int hashCode() ` | 末尾返回 ` GammaLaserBehavior.class.hashCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L65) |
| ` public GammaLaserBehavior() ` | Java 提供的无参构造器。<br>[调用处 LaserComponentTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L33) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L13) |

## ILaserComponent

` public interface ILaserComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponent.java#L7)

相等性表示组件配置相同；重新合并时，相同配置保留当前光束实例的运行状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default void onEmitPre(ILaserComponentOwner owner) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponent.java#L8) |
| ` default boolean onHitBlock(ILaserComponentOwner owner, Level level, BlockPos blockPos) ` | 返回 false 时阻止后续组件对此方块执行行为。<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponent.java#L12) |
| ` default void onEmissionStopped(ILaserComponentOwner owner) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponent.java#L16) |

## ILaserComponentOwner

` public interface ILaserComponentOwner `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int getLaserMaxLength() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L11) |
| ` void setLaserMaxLength(int value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L13) |
| ` List<ILaserComponent> allComponents() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L15) |
| ` @Nullable <T extends ILaserComponent> T getComponent(ILaserComponentType<T, ?> type) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L17) |
| ` @Nullable <T extends ILaserComponent, E> T setOrCreateComponent( ILaserComponentType<T, E> type, @Nullable T instance, @Nullable E creationEnvironment ) ` | 实例优先；已有组件时直接返回；两项创建参数均为空且组件不存在时返回 null。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L21) |
| ` BlockPos getLaserSourcePos() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L26) |
| ` BlockPos getLaserOrigin() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L28) |
| ` Direction getLaserDirection() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L30) |
| ` int getLaserTicks() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L32) |
| ` void deliverLaserDrops(List<ItemStack> drops, BlockPos sourceBlockPos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java#L34) |

## ILaserComponentType

` public interface ILaserComponentType<T extends ILaserComponent, E> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` T createInstance(E componentEnvironment) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java#L6) |
| ` T mergeIncoming(List<T> instances) ` | 合并非空输入，结果不得共享输入组件的可变运行状态。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java#L9) |
| ` @SuppressWarnings("unchecked") default T mergeIncoming(T... instances) ` | 末尾返回 ` this.mergeIncoming(List.of(instances)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java#L11) |
| ` int priority() ` | 数值越大越先执行；同优先级按组件加入顺序执行。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java#L17) |

## LaserComponentMap

` public final class LaserComponentMap `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public <T extends ILaserComponent> void put(ILaserComponentType<T, ?> type, T instance) ` | 实现调用 ` this.components.put(type, instance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L18) |
| ` @Nullable @SuppressWarnings("unchecked") public <T extends ILaserComponent> T get(ILaserComponentType<T, ?> type) ` | 末尾返回 ` (T) this.components.get(type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L23) |
| ` public void putAll(LaserComponentMap other) ` | 实现调用 ` this.components.putAll(other.components) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L29) |
| ` public List<ILaserComponent> allComponents() ` | ` (this.orderedComponents != null) ` 成立时提前返回 ` this.orderedComponents `<br>末尾返回 ` this.orderedComponents `<br>实现调用 ` this.components.entrySet().stream() `<br>实现调用 ` this.components.entrySet() `<br>[调用处 LaserComponentMap.onEmitPre](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L34) |
| ` public void onEmitPre(ILaserComponentOwner owner) ` | 实现调用 ` this.allComponents() `<br>实现调用 ` component.onEmitPre(owner) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L44) |
| ` public void onHitBlock(ILaserComponentOwner owner, Level level, BlockPos pos) ` | 实现调用 ` this.allComponents() `<br>实现调用 ` component.onHitBlock(owner, level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L48) |
| ` public void replaceWith(LaserComponentMap replacement) ` | 配置相同的组件保留本地运行状态，不继承上游的照射进度。<br>实现调用 ` this.components.clear() `<br>实现调用 ` this.components.putAll(resolved) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L55) |
| ` public static LaserComponentMap mergeIncoming(List<LaserComponentMap> incoming) ` | 末尾返回 ` result `<br>实现调用 ` source.components.keySet() `<br>实现调用 ` result.components.containsKey(type) `<br>分支 ` (!result.components.containsKey(type)) ` 内调用 ` mergeType(result, type, incoming) `<br>[调用处 BaseLaserBlockEntity.createLaserComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseLaserBlockEntity.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L66) |
| ` public LaserComponentMap() ` | Java 提供的无参构造器。<br>[调用处 BaseLaserBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseLaserBlockEntity.java#L47) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L13) |

## LaserComponentTypes

` public final class LaserComponentTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ILaserComponentType<LaserStrengthComponent, Integer> STRENGTH ` | 初值 ` new Type<>( LaserStrengthComponent::new, instances -> new LaserStrengthComponent((int) Math.min(Integer.MAX_VALUE, instances.stream().mapToLong(LaserStrengthComponent::strength).sum())), 1000 ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L9) |
| ` public static final ILaserComponentType<LaserTypeComponent, Boolean> LASER_TYPE ` | 初值 ` new Type<>( LaserTypeComponent::new, instances -> new LaserTypeComponent(instances.stream().anyMatch(LaserTypeComponent::gamma)), 900 ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L15) |
| ` public static final ILaserComponentType<LaserMiningComponent, LaserMiningComponent> MINING ` | 字段类型为 ` ILaserComponentType<LaserMiningComponent, LaserMiningComponent> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L20) |
| ` public static final ILaserComponentType<GammaLaserBehavior, Boolean> GAMMA_BEHAVIOR ` | 初值 ` new Type<>( ignored -> new GammaLaserBehavior(), ignored -> new GammaLaserBehavior(), 200 ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L32) |
| ` public static final ILaserComponentType<LaserDamageBehavior, Boolean> DAMAGE_BEHAVIOR ` | 初值 ` new Type<>( ignored -> new LaserDamageBehavior(), ignored -> new LaserDamageBehavior(), 400 ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L35) |
| ` public static final ILaserComponentType<LaserHitBehavior, Boolean> HIT_BEHAVIOR ` | 初值 ` new Type<>( ignored -> new LaserHitBehavior(), ignored -> new LaserHitBehavior(), 300 ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L38) |
| ` public static final ILaserComponentType<LaserParticleBehavior, Boolean> PARTICLE_BEHAVIOR ` | 初值 ` new Type<>( ignored -> new LaserParticleBehavior(), ignored -> new LaserParticleBehavior(), 350 ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L41) |

## LaserDamageBehavior

` public record LaserDamageBehavior() implements ILaserComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserDamageBehavior.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean onHitBlock(ILaserComponentOwner owner, Level level, BlockPos blockPos) ` | ` (!(level instanceof ServerLevel)) ` 成立时提前返回 ` true `<br>` (damage <= 0) ` 成立时提前返回 ` true `<br>末尾返回 ` true `<br>实现调用 ` LaserStrengthComponent.getStrength(owner) `<br>实现调用 ` LaserTypeComponent.isGamma(owner) `<br>分支 ` (LaserTypeComponent.isGamma(owner)) ` 内调用 ` owner.getLaserSourcePos() `<br>分支 ` (LaserTypeComponent.isGamma(owner)) ` 内调用 ` owner.getLaserDirection() `<br>实现调用 ` Math.min(16, strength - 4) `<br>实现调用 ` owner.getLaserDirection() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserDamageBehavior.java#L14) |
| ` public LaserDamageBehavior() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserDamageBehavior.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserDamageBehavior.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserDamageBehavior.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserDamageBehavior.java#L13) |

## LaserHitBehavior

` public final class LaserHitBehavior implements ILaserComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void onEmissionStopped(ILaserComponentOwner owner) ` | [调用处 LaserHitBehavior.onHitBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L28) |
| ` @Override public boolean onHitBlock(ILaserComponentOwner owner, Level level, BlockPos blockPos) ` | ` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` true `<br>` (this.lastMiningTick == tick) ` 成立时提前返回 ` this.activeRecipe == null `<br>` (this.progress < recipe.getHitTime()) ` 成立时提前返回 ` false `<br>` (state != recipe.getResultBlock() && !level.setBlockAndUpdate(blockPos, recipe.getResultBlock())) ` 成立时提前返回 ` false `<br>末尾返回 ` false `<br>实现调用 ` owner.getLaserTicks() `<br>实现调用 ` level.getBlockState(blockPos) `<br>实现调用 ` owner.getComponent(LaserComponentTypes.MINING) `<br>实现调用 ` LaserStrengthComponent.getStrength(owner) `<br>实现调用 ` mining.specialTargets() `<br>实现调用 ` LaserTypeComponent.isGamma(owner) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L38) |
| ` @Override public boolean equals(@Nullable Object other) ` | 末尾返回 ` other instanceof LaserHitBehavior ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L76) |
| ` @Override public int hashCode() ` | 末尾返回 ` LaserHitBehavior.class.hashCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L81) |
| ` public LaserHitBehavior() ` | Java 提供的无参构造器。<br>[调用处 LaserComponentTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L39) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L16) |

## LaserMiningComponent

` public record LaserMiningComponent(BlockMiningEffect effect, boolean specialTargets) implements ILaserComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlockMiningEffect getEffect(ILaserComponentOwner owner) ` | 末尾返回 ` component == null ? BlockMiningEffect.NORMAL : component.effect `<br>实现调用 ` owner.getComponent(LaserComponentTypes.MINING) `<br>[调用处 LaserHitBehavior.onHitBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L6) |
| ` public LaserMiningComponent(BlockMiningEffect effect, boolean specialTargets) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L5) |
| ` public BlockMiningEffect effect() ` | 读取 record 分量 ` effect ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L5) |
| ` public boolean specialTargets() ` | 读取 record 分量 ` specialTargets ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L5) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L5) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L5) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java#L5) |

## LaserParticleBehavior

` public final class LaserParticleBehavior implements ILaserComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserParticleBehavior.java#L31)

激光照射到方块时的命中特效：变体色粉尘与方块破坏粒子混合。 粉尘颜色取自 BlockMiningEffect#getLaserColor()，与光束渲染同源， 因而普通/皇家（精准采集）/浮霜（瓦解）/余烬（熔炼）各变体自动对应各自颜色。 方块破坏粒子用 ParticleTypes#BLOCK 承载被照射方块的贴图， 因而无需触发真实的方块破坏事件即可得到同款碎屑。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void onEmissionStopped(ILaserComponentOwner owner) ` | 执行 ` this.lastEmitTick = -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserParticleBehavior.java#L57) |
| ` @Override public boolean onHitBlock(ILaserComponentOwner owner, Level level, BlockPos blockPos) ` | ` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` true `<br>` (state.isAir()) ` 成立时提前返回 ` true `<br>` (isLaserRelay(owner, state)) ` 成立时提前返回 ` true `<br>` (this.lastEmitTick >= 0 && tick - this.lastEmitTick < EMIT_INTERVAL) ` 成立时提前返回 ` true `<br>末尾返回 ` true `<br>实现调用 ` level.getBlockState(blockPos) `<br>实现调用 ` state.isAir() `<br>实现调用 ` isLaserRelay(owner, state) `<br>实现调用 ` owner.getLaserTicks() `<br>实现调用 ` Vec3.atLowerCornerOf(owner.getLaserDirection().getOpposite().getNormal()) `<br>实现调用 ` owner.getLaserDirection().getOpposite().getNormal() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserParticleBehavior.java#L62) |
| ` @Override public boolean equals(Object other) ` | 末尾返回 ` other instanceof LaserParticleBehavior ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserParticleBehavior.java#L142) |
| ` @Override public int hashCode() ` | 末尾返回 ` LaserParticleBehavior.class.hashCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserParticleBehavior.java#L147) |
| ` public LaserParticleBehavior() ` | Java 提供的无参构造器。<br>[调用处 LaserComponentTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L42) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserParticleBehavior.java#L31) |

## LaserStrengthComponent

` public record LaserStrengthComponent(int strength) implements ILaserComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LaserStrengthComponent(int strength) ` | ` (strength < 0) ` 成立时抛出 ` new IllegalArgumentException("Laser strength cannot be negative") `<br>[调用处 LaserComponentTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L11) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L4) |
| ` public static int getStrength(ILaserComponentOwner owner) ` | 末尾返回 ` component == null ? 0 : component.strength `<br>实现调用 ` owner.getComponent(LaserComponentTypes.STRENGTH) `<br>[调用处 GammaLaserBehavior.onHitBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L8) |
| ` public int strength() ` | 读取 record 分量 ` strength ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L3) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L3) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L3) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserStrengthComponent.java#L3) |

## LaserTypeComponent

` public record LaserTypeComponent(boolean gamma) implements ILaserComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void onEmitPre(ILaserComponentOwner owner) ` | 分支 ` (this.gamma) ` 内调用 ` owner.setLaserMaxLength(Math.min(16, owner.getLaserMaxLength())) `<br>分支 ` (this.gamma) ` 内调用 ` Math.min(16, owner.getLaserMaxLength()) `<br>分支 ` (this.gamma) ` 内调用 ` owner.getLaserMaxLength() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L17) |
| ` public boolean canPassThrough(Level level, Direction direction, BlockPos pos) ` | ` (this.gamma) ` 成立时提前返回 ` state.is(BlockTags.REPLACEABLE) `<br>` (state.is(ModBlockTags.LASER_CAN_PASS_THROUGH) \|\| state.is(Tags.Blocks.GLASS_BLOCKS) \|\| state.is(Tags.Blocks.GLASS_PANES) \|\| state.is(BlockTags.REPLACEABLE)) ` 成立时提前返回 ` true `<br>` (state.getBlock() instanceof LensBlock && state.getValue(LensBlock.TYPE) == LensType.NONE && direction.getAxis() == state.getValue(LensBlock.AXIS)) ` 成立时提前返回 ` true `<br>` (!AnvilCraft.CONFIG.equipment.laserImpactChecking) ` 成立时提前返回 ` false `<br>末尾返回 ` state.getCollisionShape(level, pos).toAabbs().stream().noneMatch(bounds::intersects) `<br>实现调用 ` level.getBlockState(pos) `<br>分支 ` (this.gamma) ` 内调用 ` state.is(BlockTags.REPLACEABLE) `<br>实现调用 ` state.is(ModBlockTags.LASER_CAN_PASS_THROUGH) `<br>实现调用 ` state.is(Tags.Blocks.GLASS_BLOCKS) `<br>实现调用 ` state.is(Tags.Blocks.GLASS_PANES) `<br>实现调用 ` state.is(BlockTags.REPLACEABLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L22) |
| ` public static boolean isGamma(ILaserComponentOwner owner) ` | 末尾返回 ` component != null && component.gamma `<br>实现调用 ` owner.getComponent(LaserComponentTypes.LASER_TYPE) `<br>[调用处 GammaLaserBehavior.onEmitPre](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/GammaLaserBehavior.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L45) |
| ` public LaserTypeComponent(boolean gamma) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L16) |
| ` public boolean gamma() ` | 读取 record 分量 ` gamma ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserTypeComponent.java#L16) |
