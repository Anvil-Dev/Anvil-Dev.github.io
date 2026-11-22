# Evaluating Entities and Filter Arguments

Rules without arguments inspect `LivingEntity` directly. Rules with arguments handle both input text and title display. The fallback rule for unknown IDs rejects all entities.

## Example in Source

Take `TeslaFilter` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.api.taslatower;

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
        FILTER_MAP.put(filter.getId(), filter);
    }

    public static TeslaFilter getFilter(String id) {
        return FILTER_MAP.getOrDefault(id, emptyFilter);
    }

    public static Collection<TeslaFilter> all() {
        return FILTER_MAP.values();
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
        FILTER_MAP.clear();
        register(new IsPlayerFilter());
        register(new IsPlayerIdFilter());
        register(new IsPetFilter());
        register(new IsOnVehicleFilter());
        register(new IsFriendlyFilter());
        register(new IsHostileFilter());
        register(new IsNeutralFilter());
        register(new IsEntityIdFilter());
        register(new IsBabyFriendlyFilter());
        register(new HasCustomNameFilter());
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/TeslaFilter.java)

- [`TeslaFilter` · Line 68](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/TeslaFilter.java#L68)
- [`TeslaTowerBlockEntity` · Line 346](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L346)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `IsPlayerIdFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/IsPlayerIdFilter.java) |
| `IsEntityIdFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/IsEntityIdFilter.java) |
| `HasCustomNameFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/HasCustomNameFilter.java) |
| `IsPetFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/IsPetFilter.java) |
