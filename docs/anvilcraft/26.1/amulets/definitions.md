# 从注册表取得护符定义

护符定义随服务端注册表加载。用当前世界的注册表提供者取得管理器，避免把一个世界的定义带到另一个存档。管理器从定义注册表读取 holder，并按提供者缓存实例。

## 源码中的用例

以本分支的 `ModAmuletDefinitionTypes` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.init.item;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.amulet.def.AmuletDefinition;
import dev.dubhe.anvilcraft.api.amulet.def.IAmuletDefinition;
import dev.dubhe.anvilcraft.init.registry.ModRegistryKeys;
import dev.dubhe.anvilcraft.item.amulet.def.AbnormalAmuletDefinition;
import dev.dubhe.anvilcraft.item.amulet.def.ComradeAmuletDefinition;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModAmuletDefinitionTypes {
    private static final DeferredRegister<IAmuletDefinition.Type<?>> REGISTER = DeferredRegister.create(
        ModRegistryKeys.AMULET_DEF_TYPE,
        AnvilCraft.MOD_ID
    );

    public static final DeferredHolder<IAmuletDefinition.Type<?>, AmuletDefinition.Type> NORMAL =
        ModAmuletDefinitionTypes.REGISTER.register(
        "normal",
        AmuletDefinition.Type::new
    );
    public static final DeferredHolder<IAmuletDefinition.Type<?>, ComradeAmuletDefinition.Type> COMRADE =
        ModAmuletDefinitionTypes.REGISTER.register(
        "comrade",
        ComradeAmuletDefinition.Type::new
    );
    public static final DeferredHolder<IAmuletDefinition.Type<?>, AbnormalAmuletDefinition.Type> ABNORMAL =
        ModAmuletDefinitionTypes.REGISTER.register(
        "abnormal",
        AbnormalAmuletDefinition.Type::new
    );

    public static void register(IEventBus modEventBus) {
        ModAmuletDefinitionTypes.REGISTER.register(modEventBus);
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitionTypes.java)

- [`AmuletAbilitiesEventListener` · 第 45 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L45)
- [`EntityEventListener` · 第 37 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L37)
- [`PlayerEventListener` · 第 207 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L207)
- [`ServerReloadEventListener` · 第 17 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L17)
- [`IAbnormal` · 第 27 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L27)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `AmuletManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java) |
| `IAmuletDefinition` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java) |
| `AmuletDefinition` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java) |

<!-- source-guide -->
