# 用生产者数量决定温度

对同一位置供热的设备越多，能达到的温度可以越高。`HeatTierLine` 用排他的数量上限选档。例中一或两台设备供热时得到 `HEATED` 并增加 40 游戏刻，三台及以上得到 `REDHOT` 并增加 100 游戏刻。第一个阈值必须填 3，填 2 会让第二台设备提前升档。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.heat.HeatTier;
import dev.dubhe.anvilcraft.api.heat.HeatTierLine;
import java.util.Optional;

public final class KilnCurve {
    public static final HeatTierLine LINE = HeatTierLine.builder()
        .addPoint(3, HeatTier.HEATED, 2)
        .addPointInTick(HeatTier.REDHOT, 100)
        .build();

    public static Optional<HeatTierLine.Point> at(int count, int distanceLoss) {
        if (count < 1 || distanceLoss < 0) return Optional.empty();
        return LINE.getPoint(count).flatMap(point -> point.lower(distanceLoss));
    }
}
```

| 签名 | 参数、结果与边界 |
| --- | --- |
| `addPoint(int toNext, HeatTier tier[, int duration])` | 数量严格小于 `toNext` 时命中，时间按秒传入，缺省为 0。方法返回同一构建器。重复上限覆盖原有点。 |
| `addPoint(HeatTier tier[, int duration])` | 最末档，实际上以 `Integer.MAX_VALUE` 为排他上限。 |
| `addPointInTick([int toNext,] HeatTier tier, int duration)` | 时间直接使用游戏刻；省去上限时写最后一档。 |
| `build(): HeatTierLine`、`getPoint(int): Optional<Point>` | 构建结果引用原映射，完成后停止修改构建器。无匹配上限时查询返回空。 |
| `always(HeatTier tier, int duration)` | 固定一档，时间直接写入点，单位为游戏刻。 |
| `Point.merge(Point)`、`Point.merge(Point...)` | 取最高温度等级并累加持续时间，返回新点。 |
| `HeatTier.lower(int steps)`、`Point.lower(int)` | 0 保持原级，正数向下，降过 `NORMAL` 返回空。实现用序号减参数；负数会向上索引，越过 `OVERHEATED` 会抛数组越界异常。先约束输入为非负。 |
| `INDEX_CODEC`、`LOWER_NAME_CODEC`、`STREAM_CODEC` | 分别使用枚举序号、小写名称和网络编码。六档顺序为 `normal`、`heated`、`redhot`、`glowing`、`incandescent`、`overheated`。 |
