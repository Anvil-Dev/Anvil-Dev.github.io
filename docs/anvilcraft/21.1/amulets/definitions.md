# 从注册表取得护符定义

护符定义随服务端注册表加载。用当前世界的注册表提供者取得管理器，避免把一个世界的定义带到另一个存档。管理器从定义注册表读取 holder，并按提供者缓存实例。

## 源码中的用例

以本分支的 `EntityEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java)

- [`AmuletAbilitiesEventListener` · 第 45 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L45)
- [`EntityEventListener` · 第 37 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L37)
- [`PlayerEventListener` · 第 213 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L213)
- [`ServerReloadEventListener` · 第 15 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L15)
- [`IAbnormal` · 第 27 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L27)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `AmuletManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java) |
| `IAmuletDefinition` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java) |
| `AmuletDefinition` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java) |
