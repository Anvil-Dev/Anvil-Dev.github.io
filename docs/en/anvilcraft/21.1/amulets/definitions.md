# Obtaining Amulet Definitions from the Registry

Amulet definitions load with server registries. Obtain the manager using the current world's registry provider so definitions from one world do not leak into another save. The manager reads holders from the definition registry and caches instances per provider.

## Example in Source

Take `EntityEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.amulet.AmuletManager;
import dev.dubhe.anvilcraft.init.entity.ModDamageTypeTags;
import dev.dubhe.anvilcraft.init.entity.ModEntityTypeTags;
import dev.dubhe.anvilcraft.util.dummy.DummyArmadillo;
import dev.dubhe.anvilcraft.util.dummy.DummyCat;
import dev.dubhe.anvilcraft.util.dummy.DummyWolf;
import net.minecraft.world.damagesource.DamageSource;
import net.minecraft.world.entity.Entity;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.entity.EntityInvulnerabilityCheckEvent;
import net.neoforged.neoforge.event.entity.EntityLeaveLevelEvent;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class EntityEventListener {
    @SubscribeEvent
    public static void onCheckEntityInvulnerability(EntityInvulnerabilityCheckEvent event) {
        DamageSource source = event.getSource();
        Entity entity = event.getEntity();
        if (
            source.is(ModDamageTypeTags.IS_FALLING_GIANT_ANVIL)
            && entity.getType().is(ModEntityTypeTags.FALLING_GIANT_ANVIL_DAMAGE_IMMUNE)
        ) {
            event.setInvulnerable(true);
        }
    }

    @SubscribeEvent
    public static void onLeaveLevel(EntityLeaveLevelEvent event) {
        Entity entity = event.getEntity();
        DummyArmadillo.clear(entity);
        DummyCat.clear(entity);
        DummyWolf.clear(entity);
        AmuletManager.get(event.getLevel().registryAccess()).clear(entity.getUUID());
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java)

- [`AmuletAbilitiesEventListener` · Line 45](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L45)
- [`EntityEventListener` · Line 37](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L37)
- [`PlayerEventListener` · Line 213](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L213)
- [`ServerReloadEventListener` · Line 15](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L15)
- [`IAbnormal` · Line 27](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L27)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `AmuletManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java) |
| `IAmuletDefinition` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java) |
| `AmuletDefinition` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java) |
