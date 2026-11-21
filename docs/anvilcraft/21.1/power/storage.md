# 储电与结算

供电有盈余时，电网把尚未存入的功率交给下一台储电设备。供电不足时，先询问各设备能输出多少；可用储能足以覆盖缺口，才逐台提取。实现 `insert` 与 `extract` 时注意两个返回值的方向，否则多个蓄电池串接时会凭空多算电量。

下面的类负责一台电池的整数容量核算。实现 `IPowerStorage` 的方块实体可把同名方法委托给它，在实际电量改变后标记存档脏位。示例把单次充放上限设为 64，构造器在加载时修正超出新容量的旧存档。

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

| 签名 | 含义与边界 |
| --- | --- |
| `IPowerStorage.insert(int power): int` | 参数是本次盈余，返回未能接纳的部分；满电时原样返回。 |
| `IPowerStorage.extract(int power): int` | 参数是缺口，返回实际扣出的量；空电池返回 0。 |
| `getPowerAmount(): int`、`getCapacity(): int` | 当前储量与上限，供同步和仪表读取。 |
| `getOutputPower(): int` | 结算先用此值评估能否填平缺口。返回当前确实可取出的量。 |
| `PowerGrid.gridInterval(): int` | 返回配置中的电力刻间隔，以游戏刻为单位。 |
| `getRemaining(): int`、`isWorking(): boolean` | 分别返回发电减耗电、发电是否大于等于耗电。等于零仍可工作。 |
| `flush(): boolean` | 重算发电和需求。发现已移除的方块实体时先摘除它并返回 true，当前电力刻应结束。 |
