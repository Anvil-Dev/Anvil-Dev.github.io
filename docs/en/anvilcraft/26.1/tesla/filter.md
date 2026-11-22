# Registering Target Filters

Filters are registered on both sides by string ID. The network transmits the ID, and decoding looks up the local map. Duplicate IDs replace the previous entry, and mismatched registrations between client and server lead to different matching results.

## Adding a Filter Condition for Burning Entities

Call `TeslaFilter.register(new BurningTarget())` during common setup so both the server resolving targets and the client building the screen find the same ID. Here, a mod-prefixed constant avoids name collisions with other filters.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.teslatower.TeslaFilter;
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

## Example in Source

Take `TeslaFilterSyncPacket` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.network;

import com.google.common.collect.Lists;
import dev.anvilcraft.lib.v2.network.packet.IClientboundPacket;
import dev.anvilcraft.lib.v2.network.packet.IPacket;
import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.teslatower.TeslaFilter;
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
        return TeslaFilterSyncPacket.TYPE;
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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/TeslaFilterSyncPacket.java)

- [`AnvilCraft` · line 129](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L129)
- [`TeslaTowerBlockEntity` · line 77](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L77)
- [`BlueprintBlockConfiguration` · line 234](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BlueprintBlockConfiguration.java#L234)
- [`TeslaTowerScreen` · line 59](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/TeslaTowerScreen.java#L59)
- [`TeslaTowerMenu` · line 67](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/TeslaTowerMenu.java#L67)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `TeslaFilter` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java) |

<!-- source-guide -->
