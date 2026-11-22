# 判断实体与筛选参数

无需参数的规则直接检查 LivingEntity。带参数的规则同时负责输入文字和标题显示。未知 ID 的后备规则拒绝所有实体。

## 源码中的用例

以本分支的 `TeslaFilter` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/TeslaFilter.java)

- [`TeslaFilter` · 第 68 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/TeslaFilter.java#L68)
- [`TeslaTowerBlockEntity` · 第 346 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L346)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `IsPlayerIdFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/IsPlayerIdFilter.java) |
| `IsEntityIdFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/IsEntityIdFilter.java) |
| `HasCustomNameFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/HasCustomNameFilter.java) |
| `IsPetFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/IsPetFilter.java) |
