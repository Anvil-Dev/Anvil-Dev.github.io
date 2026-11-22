# Obtaining Amulet Definitions from the Registry

Amulet definitions load with server registries. Obtain the manager using the current world's registry provider so definitions from one world do not leak into another save. The manager reads holders from the definition registry and caches instances per provider.

## Example in Source

Take `ModAmuletDefinitionTypes` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitionTypes.java)

- [`AmuletAbilitiesEventListener` · Line 45](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L45)
- [`EntityEventListener` · Line 37](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L37)
- [`PlayerEventListener` · Line 207](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L207)
- [`ServerReloadEventListener` · Line 17](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L17)
- [`IAbnormal` · Line 27](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L27)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `AmuletManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java) |
| `IAmuletDefinition` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java) |
| `AmuletDefinition` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java) |

<!-- source-guide -->
