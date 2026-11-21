# 查找电网与动态负载

玩家装备的用电需求跟着实体移动。`IDynamicPowerComponentHolder.of(player)` 返回玩家身上的动态元件持有者。每件装备持有自己的负载对象，启用和停用必须操作同一个实例。底层集合按对象身份比较，即使两个 `PowerConsumption(8)` 的数值相同，也会各算一份。

在逻辑服务端的装备启停回调中保存并关闭这个句柄。同一装备重复启用前先关闭旧句柄。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.power.DynamicPowerComponent;
import dev.dubhe.anvilcraft.api.power.IDynamicPowerComponentHolder;
import net.minecraft.server.level.ServerPlayer;

public final class WearableLoad implements AutoCloseable {
    private final DynamicPowerComponent component;
    private final DynamicPowerComponent.PowerConsumption load;

    public WearableLoad(ServerPlayer player, int demand) {
        if (demand <= 0) throw new IllegalArgumentException("positive demand required");
        component = IDynamicPowerComponentHolder.of(player).anvilcraft$getPowerComponent();
        load = new DynamicPowerComponent.PowerConsumption(demand);
        component.getPowerConsumptions().add(load);
    }

    @Override
    public void close() {
        component.getPowerConsumptions().remove(load);
    }
}
```

| 签名 | 行为 |
| --- | --- |
| `PowerGrid.findPowerGridContains(Level, Vec3)`、`findPowerGridContains(Level, AABB)` | 返回该维度覆盖点或与箱体相交的一个电网，未匹配时返回空 Optional。两者都适合在服务端定位。 |
| `DynamicPowerComponent(Entity, Supplier<AABB>)` | 绑定所属实体与范围提供器；`boundingBox()` 每次调用时取最新箱体。 |
| `switchTo(@Nullable PowerGrid): void` | 离开旧网、加入新网，再回调持有者。相同网实例不会重复通知。传 null 表示断开。 |
| `getPowerConsumption(): int` | 累加本元件所有负载。装备耗电用正数。电网会在下一次结算时重新读取。 |
| `getCommandDiscription()` | 生成调试命令的本地化描述；公开方法名中的拼写是 `Discription`。 |
