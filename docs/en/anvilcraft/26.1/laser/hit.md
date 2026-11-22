# Controlling Hit Processing Order

During emit and hit phases, components are iterated in priority order. Returning `false` from a hit callback interrupts the remaining hit processing. When replacing configurations, equal-value components can preserve local irradiation progress.

## Example in Source

Take `LaserComponentTypes` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java)

- [`ILaserComponentType` · Line 5](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentType.java#L5)
- [`LaserComponentMap` · Line 14](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentMap.java#L14)
- [`LaserComponentTypes` · Line 48](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserComponentTypes.java#L48)
- [`BaseLaserBlockEntity` · Line 79](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseLaserBlockEntity.java#L79)
- [`LaserParticleBehavior` · Line 131](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserParticleBehavior.java#L131)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ILaserComponent` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponent.java) |
| `ILaserComponentOwner` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/ILaserComponentOwner.java) |
| `LaserHitBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserHitBehavior.java) |
| `LaserMiningComponent` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/laser/LaserMiningComponent.java) |

<!-- source-guide -->
