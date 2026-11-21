# 无限源和事务型储罐

仓储端口向同一管网中的其他端点查询无限源。`FluidResource` 保存流体和组件，`FluidStack` 还带有数量。`findInfiniteFluid` 接受资源作为偏好，返回一个栈。要求特定种类的机器需要验证结果，未找到偏好时管网仍可能选中另一种流体。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkManager;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.neoforged.neoforge.fluids.FluidStack;
import net.neoforged.neoforge.transfer.fluid.FluidResource;

public final class InfiniteInlet {
    public static boolean supplies(ServerLevel level, BlockPos inlet, FluidResource required) {
        if (required.isEmpty()) return false;
        FluidStack offered = FluidNetworkManager.INSTANCE.findInfiniteFluid(level, inlet, required);
        return !offered.isEmpty() && required.equals(FluidResource.of(offered));
    }
}
```

| 类型与入口 | 调用时机和边界 |
| --- | --- |
| `InfiniteFluidSource.getInfiniteFluids(): List<FluidStack>` | 在端点处理器上实现，返回当前可无限供应的流体副本，没有则给空列表。管理器还检查阀门可达性。 |
| `InfiniteGasPressureSource.isSupplyingInfiniteGasPressure(): boolean` | 激活时以最高气压参与扩散。容器内的有限存量仍会消耗。 |
| `GasDisplayFillProvider.gasDisplayFill(FluidStack): float` | 为玻璃管提供气体的显示填充率，范围 0 到 1；无该气体时为 0。 |
| `InfinityFluidTank(capacity[, infinity])`、`InfinityFluidTank(size 或 stacks, capacity, infinity)` | 创建一个或多个流体槽。无限模式下槽容量为整数上限，首槽非空时将其资源作为无限源公开。当前实现的按槽 `extract` 在无限模式下只检查槽是否非空；按类型抽取前先校验资源。 |
| `CreativeFluidHandler.replaceStacks(List<FluidStack>)` | 配置创造储罐的模板，按现有槽数复制。配置后 `extract` 只向匹配模板的资源供应请求量；`insert` 接受并丢弃非空输入。 |
| `VoidFluidHandler.INSTANCE` | 单槽空汇，读取存量恒为 0。插入丢弃输入，抽取返回 0。 |
| `FluidStackResourceHandler([int capacity])` | 单槽事务型储罐。无参使用一桶容量；变更参与传入的 `TransactionContext`。 |
| `CapacityModifiableFluidHandler.setCapacity(int)` | 直接改写槽容量，调用方要处理缩容后原有存量，方法本身不会截断。 |
| `IFluidResourceHandlerHolder.getFluidHandler(): ResourceHandler<FluidResource>` | 取持有者的处理器。端点对外还要在正确面暴露对应的 NeoForge 能力。 |
