# Organizing Advancements During Data Generation

The advancement provider manages parent-child relationships, display info, and criterion combinations. Criteria are created with factories, passed to the advancement builder, and emitted under the target resource ID through the generator.

## Example in Source

Take `AnvilHitPiezoelectricCrystalTrigger` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.advancements.criterion;

import com.mojang.serialization.Codec;
import com.mojang.serialization.codecs.RecordCodecBuilder;
import dev.dubhe.anvilcraft.init.ModCriterionTriggers;
import net.minecraft.advancements.Criterion;
import net.minecraft.advancements.criterion.ContextAwarePredicate;
import net.minecraft.advancements.criterion.EntityPredicate;
import net.minecraft.advancements.criterion.SimpleCriterionTrigger;
import net.minecraft.server.level.ServerPlayer;

import java.util.Optional;

public class AnvilHitPiezoelectricCrystalTrigger extends SimpleCriterionTrigger<AnvilHitPiezoelectricCrystalTrigger.TriggerInstance> {
    @Override
    public Codec<TriggerInstance> codec() {
        return TriggerInstance.CODEC;
    }

    public void trigger(ServerPlayer player) {
        this.trigger(player, TriggerInstance::matches);
    }

    public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance {
        public static final Codec<TriggerInstance> CODEC = RecordCodecBuilder.create(instance -> instance.group(
            EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player)
        ).apply(instance, TriggerInstance::new));

        public static Criterion<TriggerInstance> hit() {
            return ModCriterionTriggers.ANVIL_HIT_PIEZOELECTRIC_CRYSTAL.get().createCriterion(new TriggerInstance(Optional.empty()));
        }

        public boolean matches() {
            return true;
        }
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java)

- [`ModAdvancementsHandler` · Line 40](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/advancement/ModAdvancementsHandler.java#L40)
- [`AnvilCraft` · Line 123](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L123)
- [`AnvilHammerChangeBlockTrigger` · Line 38](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L38)
- [`AnvilHammerClickBlockTrigger` · Line 34](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L34)
- [`AnvilHammerHurtEntityTrigger` · Line 48](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L48)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `AdvancementLineHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java) |
| `ModCriterionTriggers` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java) |

<!-- source-guide -->
