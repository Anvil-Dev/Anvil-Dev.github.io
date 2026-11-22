# Client Readouts

When drawing power levels for goggles or machine screens, query `SimplePowerGrid` by block position on the client. Queries can return empty right after a player enters a world, before snapshots arrive, or when no component exists at that position. Screens can display "Not synced" while keeping synced zero-power readouts.

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

| Signature or Field | Purpose |
| --- | --- |
| `findPowerGrid(BlockPos): Optional<SimplePowerGrid>` | Looks up a position in client-synced power grids. Call only from client rendering or UI entrypoints. |
| `getInfoForPos(BlockPos): Optional<PowerComponentInfo>` | Fetches the component snapshot at the exact position; read `type()` to distinguish producer, consumer, transmitter, and storage. |
| `consumes()`, `produces()`, `stores()`, `capacity()` | This component's power consumption, production, stored power, and storage capacity, all as integers. |
| `range()`, `infinitePower()` | The component's radius and infinite-power flag. The synced `boundingBox()` gives its actual coverage bounds. |
| `isOverloaded(): boolean` | Queries the overload state recorded in the snapshot. |
| `PowerComponentInfo.CODEC`, `STREAM_CODEC` | The data codec requires position, power, stored amount, capacity, radius, bounding box, and type. `infinitePower` defaults to `false`. The network codec sends and reads the entire record in a fixed order. |
