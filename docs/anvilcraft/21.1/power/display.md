# 客户端读数

为护目镜或机器界面绘制电量时，在客户端按方块位置查 `SimplePowerGrid`。玩家刚进入世界、快照还没收到或位置没有元件时，查询都可能返回空。界面可显示“未同步”，保留已同步的零电量读数。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.power.PowerComponentInfo;
import dev.dubhe.anvilcraft.api.power.SimplePowerGrid;
import net.minecraft.core.BlockPos;
import java.util.OptionalInt;

public final class ClientBatteryReadout {
    public static OptionalInt storedAt(BlockPos pos) {
        return SimplePowerGrid.findPowerGrid(pos)
            .flatMap(grid -> grid.getInfoForPos(pos))
            .map(PowerComponentInfo::stores)
            .map(OptionalInt::of)
            .orElseGet(OptionalInt::empty);
    }
}
```

| 签名或字段 | 用途 |
| --- | --- |
| `findPowerGrid(BlockPos): Optional<SimplePowerGrid>` | 在客户端已同步的电网中查位置。只从客户端渲染或界面入口调用示例。 |
| `getInfoForPos(BlockPos): Optional<PowerComponentInfo>` | 精确取对应位置的元件快照，读 `type()` 区分生产、消费、中继和储能。 |
| `consumes()`、`produces()`、`stores()`、`capacity()` | 分别为本元件的耗电、产电、储电量与储电容量，均为整数。 |
| `range()`、`infinitePower()` | 元件作用半径与无限供电标记。 |
| `isOverloaded(): boolean` | 查询快照记录的过载状态。 |
| `PowerComponentInfo.CODEC`、`STREAM_CODEC` | 数据编码器要求给齐所有记录字段；网络编码器用于依照固定顺序收发整条记录。 |
