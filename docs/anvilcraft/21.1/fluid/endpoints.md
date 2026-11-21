# 识别容器和连接面

管道从容器一侧请求能力。假设管道在储罐东边，`sideToPipe` 就是 `EAST`。方块提供能力时直接作为端点；没有方块能力，才查这个单元内的实体。多个储罐矿车可能同时占据同一单元，`findAll` 会保留多个处理器。

下面是调试工具的服务端读数。输入是容器位置以及该容器朝向管道的面，结果是该面可访问、且实际接触管道的处理器个数。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidContainerLookup;
import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkScanner;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.server.level.ServerLevel;

public final class PipeInspector {
    public static long connectedHandlers(ServerLevel level, BlockPos pos, Direction sideToPipe) {
        BlockPos pipe = pos.relative(sideToPipe);
        if (!level.isLoaded(pos) || !level.isLoaded(pipe)
            || !FluidNetworkScanner.isPipePart(level.getBlockState(pipe))) return 0;
        return FluidContainerLookup.findAll(level, pos, sideToPipe).stream()
            .filter(result -> result.entity() == null ||
                FluidContainerLookup.isEntityConnectedToPipe(level, pos, sideToPipe, result.entity()))
            .count();
    }
}
```

这里检查的是容器能力与相邻部件，完整的管段朝向、过滤和可达性由扫描器判断。

| 签名 | 用法与边界 |
| --- | --- |
| `find(Level, BlockPos, @Nullable Direction): Result` | 返回首个处理器，未命中返回 null。面为 null 时只查询无方向能力。 |
| `findAll(Level, BlockPos, @Nullable Direction): List<Result>` | 没找到返回空列表。方块命中直接返回一个结果；实体按 ID 排序。 |
| `findAny(Level, BlockPos[, BlockEntity]): Result` | 先试 null，再依次试六面；用于确认有无能力。已持有方块实体时可走额外参数的重载。 |
| `Result.handler()`、`cauldron()`、`entity()` | 分别返回流体能力、是否按整锅处理、所属实体（方块能力为 null）。 |
| `isEntityConnectedToPipe(Level, BlockPos, Direction, Entity): boolean` | 先验证实体仍在且该面的能力有效。储罐矿车按碰撞箱与单元交叠判断，其他实体还需与管道碰撞形状接触。 |
| `addContainerAfterLoad(Level, BlockPos)`、`removeContainer(Level, BlockPos)` | 区块加载时延后探测，避免当场跨区块回查；卸载时清理。普通方块实体已有 AnvilCraft 的加载监听。 |
