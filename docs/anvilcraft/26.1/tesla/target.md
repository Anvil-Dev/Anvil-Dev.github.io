# 判断实体与筛选参数

无需参数的规则直接检查 LivingEntity。带参数的规则同时负责输入文字和标题显示。未知 ID 的后备规则拒绝所有实体。

## 源码中的用例

以本分支的 `TeslaFilter` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java)

- [`TeslaFilter` · 第 68 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L68)
- [`TeslaTowerBlockEntity` · 第 378 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L378)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `IsPlayerIdFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java) |
| `IsEntityIdFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java) |
| `HasCustomNameFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/HasCustomNameFilter.java) |
| `IsPetFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPetFilter.java) |

<!-- source-guide -->
