# Evaluating Entities and Filter Arguments

Rules without arguments inspect `LivingEntity` directly. Rules with arguments handle both input text and title display. The fallback rule for unknown IDs rejects all entities.

## Example in Source

Take `TeslaFilter` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.api.teslatower;

import io.netty.buffer.ByteBuf;
import net.minecraft.network.chat.Component;
import net.minecraft.network.codec.ByteBufCodecs;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.world.entity.LivingEntity;

import java.util.Collection;
import java.util.HashMap;

public abstract class TeslaFilter {
    public static final StreamCodec<ByteBuf, TeslaFilter> STREAM_CODEC = ByteBufCodecs.STRING_UTF8.map(
        TeslaFilter::getFilter,
        TeslaFilter::getId
    );
    static TeslaFilter emptyFilter = new TeslaFilter() {
        @Override
        public String getId() {
            return "";
        }

        @Override
        public boolean match(LivingEntity entity, String arg) {
            return false;
        }

        @Override
        public Component title() {
            return Component.translatable("screen.anvilcraft.tesla_tower.filter.unknown");
        }
    };
    private static final HashMap<String, TeslaFilter> FILTER_MAP = new HashMap<>();

    public static void register(TeslaFilter filter) {
        TeslaFilter.FILTER_MAP.put(filter.getId(), filter);
    }

    public static TeslaFilter getFilter(String id) {
        return TeslaFilter.FILTER_MAP.getOrDefault(id, TeslaFilter.emptyFilter);
    }

    public static Collection<TeslaFilter> all() {
        return TeslaFilter.FILTER_MAP.values();
    }

    public abstract String getId();

    public abstract boolean match(LivingEntity entity, String arg);

    public boolean needArg() {
        return false;
    }

    public abstract Component title();

    public Component getTitle(String arg) {
        return this.title();
    }

    public String tooltip(String arg) {
        return "";
    }

    public static void init() {
        TeslaFilter.FILTER_MAP.clear();
        TeslaFilter.register(new IsPlayerFilter());
        TeslaFilter.register(new IsPlayerIdFilter());
        TeslaFilter.register(new IsPetFilter());
        TeslaFilter.register(new IsOnVehicleFilter());
        TeslaFilter.register(new IsFriendlyFilter());
        TeslaFilter.register(new IsHostileFilter());
        TeslaFilter.register(new IsNeutralFilter());
        TeslaFilter.register(new IsEntityIdFilter());
        TeslaFilter.register(new IsBabyFriendlyFilter());
        TeslaFilter.register(new HasCustomNameFilter());
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java)

- [`TeslaFilter` · Line 68](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L68)
- [`TeslaTowerBlockEntity` · Line 378](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L378)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `IsPlayerIdFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java) |
| `IsEntityIdFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java) |
| `HasCustomNameFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/HasCustomNameFilter.java) |
| `IsPetFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPetFilter.java) |

<!-- source-guide -->
