# 控制命中处理顺序

发射和命中阶段迭代按优先级排序的组件。命中回调返回 false 会中断余下的命中处理。替换配置时，等值组件可以保留本地照射进度。

## 源码中的用例

以本分支的 `LaserComponentTypes` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.api.laser;

import dev.dubhe.anvilcraft.util.BlockMiningEffect;

import java.util.List;
import java.util.function.Function;

public final class LaserComponentTypes {
    public static final ILaserComponentType<LaserStrengthComponent, Integer> STRENGTH = new Type<>(
        LaserStrengthComponent::new,
        instances -> new LaserStrengthComponent((int) Math.min(Integer.MAX_VALUE,
            instances.stream().mapToLong(LaserStrengthComponent::strength).sum())),
        1000
    );
    public static final ILaserComponentType<LaserTypeComponent, Boolean> LASER_TYPE = new Type<>(
        LaserTypeComponent::new,
        instances -> new LaserTypeComponent(instances.stream().anyMatch(LaserTypeComponent::gamma)),
        900
    );
    public static final ILaserComponentType<LaserMiningComponent, LaserMiningComponent> MINING = new Type<>(
        Function.identity(),
        instances -> {
            BlockMiningEffect effect = instances.getFirst().effect();
            boolean compatible = instances.stream().allMatch(instance -> instance.effect().equals(effect));
            return new LaserMiningComponent(
                compatible ? effect : BlockMiningEffect.NORMAL,
                compatible && instances.stream().anyMatch(LaserMiningComponent::specialTargets)
            );
        },
        800
    );
    public static final ILaserComponentType<GammaLaserBehavior, Boolean> GAMMA_BEHAVIOR = new Type<>(
        ignored -> new GammaLaserBehavior(), ignored -> new GammaLaserBehavior(), 200
    );
    public static final ILaserComponentType<LaserDamageBehavior, Boolean> DAMAGE_BEHAVIOR = new Type<>(
        ignored -> new LaserDamageBehavior(), ignored -> new LaserDamageBehavior(), 400
    );
    public static final ILaserComponentType<LaserHitBehavior, Boolean> HIT_BEHAVIOR = new Type<>(
        ignored -> new LaserHitBehavior(), ignored -> new LaserHitBehavior(), 300
    );
    public static final ILaserComponentType<LaserParticleBehavior, Boolean> PARTICLE_BEHAVIOR = new Type<>(
        ignored -> new LaserParticleBehavior(), ignored -> new LaserParticleBehavior(), 350
    );

    private LaserComponentTypes() {
    }

    private record Type<T extends ILaserComponent, E>(
        Function<E, T> factory, Function<List<T>, T> merger, int priority
    ) implements ILaserComponentType<T, E> {
        @Override
        public T createInstance(E componentEnvironment) {
            return this.factory.apply(componentEnvironment);
        }

        @Override
        public T mergeIncoming(List<T> instances) {
            if (instances.isEmpty()) throw new IllegalArgumentException("Cannot merge empty laser components");
            return this.merger.apply(instances);
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java)

- [`ILaserComponentType` · 第 5 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java#L5)
- [`LaserComponentMap` · 第 14 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L14)
- [`LaserComponentTypes` · 第 48 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L48)
- [`BaseLaserBlockEntity` · 第 81 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseLaserBlockEntity.java#L81)
- [`LaserParticleBehavior` · 第 133 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserParticleBehavior.java#L133)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `ILaserComponent` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponent.java) |
| `ILaserComponentOwner` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java) |
| `LaserHitBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java) |
| `LaserMiningComponent` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java) |
