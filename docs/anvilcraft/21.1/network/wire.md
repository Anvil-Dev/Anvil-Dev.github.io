# 读取红石导线的服务端信号

HUD 要区分“整条线的信号”和“排除红石粉输入后的信号”，可以直接复用 `RedstoneWireTooltipProvider`。将下列方法接到客户端准星提示的绘制回调，在本地世界已加载且指向方块时调用。提供器已有按位置的限频和响应缓存。

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

| 端与入口 | 参数、返回与时机 |
| --- | --- |
| 客户端 `tooltip(level, pos, state)` | 返回可绘制的 `List<Component>`。对一个位置到达查询间隔时发送 `RedstoneWirePowerRequestPacket(pos)`。第一次响应之前不列非红石粉强度。 |
| 服务端 `RedstoneWirePowerRequestPacket.handleOnServer(player)` | 只处理载入区块、距离平方不超过 4096 的自定义导线。同一玩家在一刻最多收到一次有效答复。 |
| 客户端 `RedstoneWirePowerResponsePacket(pos, power, nonDustPower)` | 两个整数对应整网信号和排除红石粉的信号。前者变化时标记本地方块重绘，后者进入 HUD 缓存。 |

切换维度时提供器清空位置缓存。同一坐标在两个维度代表不同方块。`PacketDistributor.sendToServer` 发出请求即返回，下一帧仍应允许只有整网读数。[提供器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java) · [请求](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java) · [响应](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java)
