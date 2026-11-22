# 在数据生成时组织进度

进度生成器负责父子关系、显示与条件组合。触发条件用工厂创建，交给进度构建器，最后通过生成器输出目标资源 ID。

## 源码中的用例

以本分支的 `AnvilHitPiezoelectricCrystalTrigger` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java)

- [`ModAdvancementsHandler` · 第 40 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/advancement/ModAdvancementsHandler.java#L40)
- [`AnvilCraft` · 第 123 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L123)
- [`AnvilHammerChangeBlockTrigger` · 第 38 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L38)
- [`AnvilHammerClickBlockTrigger` · 第 34 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L34)
- [`AnvilHammerHurtEntityTrigger` · 第 48 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L48)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `AdvancementLineHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java) |
| `ModCriterionTriggers` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java) |

<!-- source-guide -->
