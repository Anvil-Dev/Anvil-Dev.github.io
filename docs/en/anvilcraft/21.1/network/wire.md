# Reading Server Signals of Redstone Wires

When a HUD needs to distinguish between "the whole wire's signal" and "the signal excluding redstone dust input", you can reuse `RedstoneWireTooltipProvider` directly. Wire the method below into your client crosshair tooltip callback and call it when the local world is loaded and targeting a block. The provider already handles per-position rate limiting and response caching.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.api.tooltip.impl.RedstoneWireTooltipProvider;
import net.minecraft.core.BlockPos;
import net.minecraft.network.chat.Component;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import java.util.List;

public final class WireReadout {
    private static final RedstoneWireTooltipProvider PROVIDER = new RedstoneWireTooltipProvider();

    public static List<Component> at(Level clientLevel, BlockPos target) {
        if (!clientLevel.isClientSide() || !clientLevel.isLoaded(target)) return List.of();
        BlockState state = clientLevel.getBlockState(target);
        if (!PROVIDER.accepts(clientLevel, target, state)) return List.of();
        return PROVIDER.tooltip(clientLevel, target, state);
    }
}
```

| Side & Entrypoint | Parameters, Return & Timing |
| --- | --- |
| Client `tooltip(level, pos, state)` | Returns a renderable `List<Component>`. Sends `RedstoneWirePowerRequestPacket(pos)` when the query interval for a position elapses. Does not list non-dust power before the first response arrives. |
| Server `RedstoneWirePowerRequestPacket.handleOnServer(player)` | Processes only custom wires in loaded chunks within squared distance `4096`. A player receives at most one valid reply per tick. |
| Client `RedstoneWirePowerResponsePacket(pos, power, nonDustPower)` | The two integers represent total network signal and signal excluding redstone dust. Changes to the former mark the local block for re-render; the latter enters the HUD cache. |

When switching dimensions, the provider clears its position cache since identical coordinates represent different blocks in two dimensions. `PacketDistributor.sendToServer` returns immediately upon sending the request, so the next frame should still tolerate having only the total-network readout. [Provider](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java) · [Request](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java) · [Response](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java)
