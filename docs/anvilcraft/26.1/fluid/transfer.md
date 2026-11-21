# 流速、扬程与整量推送

普通液体从等效高度高的容器流向低处，目标从最低的一组开始填；同高的多个目标会分摊流量。等效高度包含沿途正常工作泵的势差。泵过载、红石关闭或无法供电时仍保留管段连接，但失去扬程和工作时的单向约束。气体按填充率和泵压造成的压力差扩散。

需要“要么交付整桶，要么不动”时，在服务端操作中使用 `pushExact`。下例适合低频操作，例如手持设备点击出料；每次主动扫描会遍历连通管段，大型机器不宜每游戏刻重新扫描。源与目标都须遵守 NeoForge 事务协议。实际抽取、插入在同一根事务中完成，只有两边都达到请求量时才提交。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkScanner;
import dev.dubhe.anvilcraft.api.fluid.network.FluidPipeNetwork;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.server.level.ServerLevel;
import net.neoforged.neoforge.fluids.FluidStack;
import net.neoforged.neoforge.transfer.ResourceHandler;
import net.neoforged.neoforge.transfer.fluid.FluidResource;
import java.util.Optional;

public final class BatchOutlet {
    public static Optional<BlockPos> deliver(ServerLevel level, BlockPos outlet, Direction face,
            ResourceHandler<FluidResource> source, FluidStack batch) {
        BlockPos pipe = outlet.relative(face);
        if (batch.isEmpty() || !level.isLoaded(pipe)) return Optional.empty();
        FluidPipeNetwork network = FluidNetworkScanner.scan(level, pipe);
        if (network == null) return Optional.empty();
        return Optional.ofNullable(network.pushExact(source, outlet, pipe, outlet.getY(), batch));
    }
}
```

| 签名 | 调用约定 |
| --- | --- |
| `scan(Level, BlockPos): FluidPipeNetwork` | 种子必须是管道、泵或控制阀位置。给容器自身的位置一般会返回 null。 |
| `heightDeltaToHighestPeer(Level, BlockPos): Integer` | 返回最高其他端点减自己的等效高度，可为负值。无同网端点、没有缓存的世界数据或客户端调用时为 null。 |
| `speedForHeightDiff(int): int` | 非正高度差返回 0，否则计算高度差乘 `heightRate()` 并截到 `maxSpeed()`，单位 mB/t。只传实际高度差。 |
| `pushExact(source, sourcePos, entryPipePos, sourceEffectiveHeight, fluid): BlockPos` | 模拟检查源和目标，要求目标严格更低、可达且能完整接纳；成功返回目标坐标，失败返回 null。实际插入或抽取不足时，关闭未提交的事务以撤销变更。 |
| `pushFromExternalSource(handler, pos, entryPipePos, sourceEffectiveHeight): void` | 外部泵送设备按普通分配逻辑排液；需要核实实际交付量时检查自身库存变化。 |
| `ValveState.resetBudget()`、`allows(FluidResource)`、`remaining()`、`consume(int)` | 重置为本刻有效流量、查询过滤、读剩余额度、扣已通过的非负数量。整量推送检查路径，但不扣阀的刻预算。 |
