# 发起搜索并观察结果

在服务端工具的使用回调中拿到玩家点击的位置后，可以发起一次搜索。砧体处理器自行按刻推进，界面可在后续更新中读取剩余时间；本次调用没有同步返回天体的方式。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;

public final class CelestialSearchConsole {
    public enum Result { NO_ANVIL, ALREADY_RUNNING, STARTED, NEEDS_POWER, NO_MATCH, UNAVAILABLE }

    public static Result start(ServerLevel level, BlockPos pos) {
        if (!level.isLoaded(pos)
            || !(level.getBlockEntity(pos) instanceof CelestialForgingAnvilBlockEntity anvil)) {
            return Result.NO_ANVIL;
        }
        if (anvil.isSearching()) return Result.ALREADY_RUNNING;
        if (anvil.isLocked() || anvil.isAcceleratorActive()) return Result.UNAVAILABLE;
        anvil.startSearch();
        if (anvil.isSearching()) return Result.STARTED;
        if (anvil.isPowerInsufficient()) return Result.NEEDS_POWER;
        if (anvil.isSearchFailed()) return Result.NO_MATCH;
        return Result.UNAVAILABLE;
    }
}
```

| API | 参数、返回与边界 |
| --- | --- |
| `startSearch()` | 返回 `void`。已锁定、正在搜索或加速器运行时直接返回。槽 0 至 3 对应时间、空间、质量、能量，槽 4 放种子。没有种子时先试这组参数能否匹配。 |
| `isSearching()`、`getSearchTicksRemaining()` | 成功启动后剩余 200 刻，实际扣减由 `serverTick()` 完成。搜索开始时清除先前的当前天体，不要在同一交互中读取它作为结果。 |
| `isSearchFailed()`、`isPowerInsufficient()` | 两个布尔值区分“没有匹配”和“供电不足”。供电判断要求有电网，并且输入需求为零或电网在工作。途中失电会终止搜索并解除锁定。 |
| `getCelestialBodyData()` | 无目标时返回 `null`，结束时再取。常规匹配会读取四槽计数，插入的快照/特殊种子还有各自的匹配路径。 |

启动时会复制种子物品、组件和快照。完成时会核对种子栈，当中途更换物品或组件，旧种子的快照和专用匹配依据会被清除。存档卸载和 UI 的更新交给砧体原有生命周期处理，附属工具不应额外驱动一次 `serverTick()`。[搜索控制器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java) · [砧体入口](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java)
