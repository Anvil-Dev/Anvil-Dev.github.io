# Power Storage and Settlement

When power supply has a surplus, the grid passes unstored power to the next storage device. When supply is insufficient, it first asks each device how much it can output; only if available stored power covers the deficit does it extract from each device in turn. Pay attention to the direction of the two return values when implementing `insert` and `extract`, otherwise chaining multiple batteries will create power out of thin air.

The class below handles integer capacity accounting for a battery. A block entity implementing `IPowerStorage` can delegate the same-named methods to it and mark save data dirty after actual power changes. The example sets the per-transfer charge/discharge limit to `64`, and the constructor clamps old save data that exceeds the new capacity on load.

```java
package dev.example.addon;

public final class BatteryBuffer {
    private final int capacity;
    private int stored;

    public BatteryBuffer(int capacity, int saved) {
        if (capacity < 0) throw new IllegalArgumentException("negative capacity");
        this.capacity = capacity;
        this.stored = Math.clamp(saved, 0, capacity);
    }

    public int getPowerAmount() { return stored; }
    public int getCapacity() { return capacity; }
    public int getOutputPower() { return Math.min(64, stored); }

    public int insert(int offered) {
        if (offered <= 0) return offered;
        int accepted = Math.min(offered, Math.min(64, capacity - stored));
        stored += accepted;
        return offered - accepted;
    }

    public int extract(int requested) {
        int delivered = Math.clamp(requested, 0, getOutputPower());
        stored -= delivered;
        return delivered;
    }
}
```

| Signature | Meaning & Boundaries |
| --- | --- |
| `IPowerStorage.insert(int power): int` | Parameter is the current surplus; returns the unaccepted remainder (returns `power` unchanged when full). |
| `IPowerStorage.extract(int power): int` | Parameter is the deficit; returns the amount actually extracted (returns `0` when empty). |
| `getPowerAmount(): int`, `getCapacity(): int` | Current stored power and maximum capacity, for syncing and meter readouts. |
| `getOutputPower(): int` | Settlement uses this value first to check whether the deficit can be covered. Return the amount actually extractable right now. |
| `PowerGrid.gridInterval(): int` | Returns the configured power tick interval in game ticks. |
| `getRemaining(): int`, `isWorking(): boolean` | Respectively return generation minus consumption, and whether generation >= consumption. Still works at zero remaining power. |
| `flush(): boolean` | Recomputes generation and demand. If a removed block entity is found, removes it first and returns `true`, ending the current power tick. |
