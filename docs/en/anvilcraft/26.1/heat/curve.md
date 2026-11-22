# Determining Temperature from Producer Count

The more devices heating the same position, the higher the reachable temperature. `HeatTierLine` selects tiers using an exclusive upper bound on producer count. In the example, one or two heating devices yield `HEATED` and add 40 game ticks, while three or more yield `REDHOT` and add 100 game ticks. The first threshold must be `3`; passing `2` would promote the second device early.

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

| Signature | Parameters, Result & Boundaries |
| --- | --- |
| `addPoint(int toNext, HeatTier tier[, int duration])` | Matches when count is strictly less than `toNext`; duration is in seconds, defaulting to `0`. Returns the same builder. Duplicate upper bounds overwrite earlier entries. |
| `addPoint(HeatTier tier[, int duration])` | Final tier, effectively using `Integer.MAX_VALUE` as the exclusive upper bound. |
| `addPointInTick([int toNext,] HeatTier tier, int duration)` | Duration is given directly in game ticks; omitting the upper bound writes the final tier. |
| `build(): HeatTierLine`, `getPoint(int): Optional<Point>` | The built result references the underlying map; stop mutating the builder afterward. Queries return empty when no upper bound matches. |
| `always(HeatTier tier, int duration)` | Fixes a single tier, writing `duration` directly into the point in game ticks. |
| `Point.merge(Point)`, `Point.merge(Point...)` | Takes the highest temperature tier and sums durations, returning a new point. |
| `HeatTier.lower(int steps)`, `Point.lower(int)` | `0` keeps the current tier, positive values step down, and stepping below `NORMAL` returns empty. Implemented by subtracting from the ordinal; negative values index upward and stepping past `OVERHEATED` throws `ArrayIndexOutOfBoundsException`. Constrain inputs to non-negative first. |
| `INDEX_CODEC`, `LOWER_NAME_CODEC`, `STREAM_CODEC` | Use enum ordinal, lowercase name, and network encoding respectively. The six tiers in order are `normal`, `heated`, `redhot`, `glowing`, `incandescent`, and `overheated`. |
