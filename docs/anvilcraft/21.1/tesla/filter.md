# 注册目标过滤器

过滤器以字符串 ID 在双方注册。网络上传送 ID，解码时查本地映射。重复 ID 会替换原条目，双方注册不一致会导致匹配结果不同。

## 为燃烧中的实体添加筛选条件

在公共初始化调用 `TeslaFilter.register(new BurningTarget())`，让服务器解析目标、客户端生成界面时都能找到同一个 ID。这里用带模组名的常量避开与其他过滤器重名。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.taslatower.TeslaFilter;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.LivingEntity;

public final class BurningTarget extends TeslaFilter {
    @Override public String getId() { return "sandstone_press:burning"; }

    @Override
    public boolean match(LivingEntity entity, String arg) {
        return entity.isOnFire();
    }

    @Override
    public Component title() {
        return Component.translatable("filter.sandstone_press.burning");
    }
}
```

## 源码中的用例

以本分支的 `TeslaFilterSyncPacket` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.network;

import com.google.common.collect.Lists;
import dev.anvilcraft.lib.v2.network.packet.IClientboundPacket;
import dev.anvilcraft.lib.v2.network.packet.IPacket;
import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.taslatower.TeslaFilter;
import dev.dubhe.anvilcraft.client.gui.screen.TeslaTowerScreen;
import io.netty.buffer.ByteBuf;
import it.unimi.dsi.fastutil.Pair;
import net.minecraft.client.Minecraft;
import net.minecraft.network.codec.ByteBufCodecs;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.world.entity.player.Player;

import java.util.List;

public record TeslaFilterSyncPacket(List<FilterData> filters) implements IClientboundPacket {
    public static final Type<TeslaFilterSyncPacket> TYPE = IPacket.type(AnvilCraft.of("tesla_filter_sync"));
    public static final StreamCodec<ByteBuf, TeslaFilterSyncPacket> STREAM_CODEC = StreamCodec.composite(
        FilterData.STREAM_CODEC.apply(ByteBufCodecs.list()),
        TeslaFilterSyncPacket::filters,
        TeslaFilterSyncPacket::new
    );

    public static TeslaFilterSyncPacket create(List<Pair<TeslaFilter, String>> filters) {
        return new TeslaFilterSyncPacket(Lists.transform(filters, FilterData::new));
    }

    @Override
    public Type<TeslaFilterSyncPacket> type() {
        return TYPE;
    }

    @Override
    public void handleOnClient(Player player) {
        if (!(Minecraft.getInstance().screen instanceof TeslaTowerScreen screen)) return;
        screen.handleSync(Lists.transform(this.filters, data -> Pair.of(data.filter, data.extra)));
    }

    public record FilterData(TeslaFilter filter, String extra) {
        public static final StreamCodec<ByteBuf, FilterData> STREAM_CODEC = StreamCodec.composite(
            TeslaFilter.STREAM_CODEC,
            FilterData::filter,
            ByteBufCodecs.STRING_UTF8,
            FilterData::extra,
            FilterData::new
        );

        public FilterData(Pair<TeslaFilter, String> data) {
            this(data.left(), data.right());
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java)

- [`AnvilCraft` · 第 136 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L136)
- [`TeslaTowerBlockEntity` · 第 74 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L74)
- [`BlueprintBlockConfiguration` · 第 221 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintBlockConfiguration.java#L221)
- [`TeslaTowerScreen` · 第 56 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/TeslaTowerScreen.java#L56)
- [`TeslaTowerMenu` · 第 67 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L67)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `TeslaFilter` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-taslatower#teslafilter) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/taslatower/TeslaFilter.java) |
