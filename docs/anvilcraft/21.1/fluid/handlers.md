# 无限源和特殊容器

仓储端口要识别“接上了一台无限供水罐”，可以向管网查询。`preferred` 是偏好，找不到匹配项时仍可能返回同网其他可达无限源的流体。机器若只处理指定流体，要自己再比较组件。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.fluid.network.FluidNetworkManager;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.neoforged.neoforge.fluids.FluidStack;

public final class InfiniteInlet {
    public static boolean supplies(ServerLevel level, BlockPos inlet, FluidStack required) {
        if (required.isEmpty()) return false;
        FluidStack offered = FluidNetworkManager.INSTANCE.findInfiniteFluid(level, inlet, required);
        return !offered.isEmpty() && FluidStack.isSameFluidSameComponents(offered, required);
    }
}
```

| 类型与入口 | 生命周期与返回约定 |
| --- | --- |
| `InfiniteFluidSource.getInfiniteFluids(): List<FluidStack>` | 实现于端点的流体处理器，返回当前无限供给的各流体副本。暂时不满足无限条件时返回空列表。 |
| `InfiniteGasPressureSource.isSupplyingInfiniteGasPressure(): boolean` | 决定气体扩散中的源压力优先级；有限储量仍照常扣减。可以随供电和输出模式改变。 |
| `GasDisplayFillProvider.gasDisplayFill(FluidStack): float` | 为玻璃管提供显示填充率，范围 0 到 1；不含该气体时返回 0。 |
| `InfinityFluidTank()` | 容量为整数上限，`fill` 报告接受全部输入且不会改变模板流体。非空模板允许抽取指定数量。按栈抽取判断流体种类，调用方对组件有要求时应自行比对。 |
| `VoidFluidHandler.INSTANCE` | 恒报一个空槽，接受并丢弃全部输入，两种 `drain` 均返回空栈。适合拿来做垃圾桶。 |
| `OnlyDrainFluidTank(int[, Predicate<FluidStack>])` | 对外部 `fill` 永远返回 0。内部注解标记的 `internalFill` 用于实现它的生产侧。 |
| `IFluidHandlerHolder.getFluidHandler(): IFluidHandler` | 给持有储罐的对象提供访问器。接入外部管道仍需验证相应面上的 NeoForge 流体能力。 |
