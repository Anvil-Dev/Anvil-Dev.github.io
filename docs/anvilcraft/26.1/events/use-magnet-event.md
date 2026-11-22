# UseMagnetEvent

如果想修改手持磁铁的吸引范围，把监听器注册到**模组事件总线**。玩家没有潜行时，`MagnetUtil.magnetizeItems` 会先用配置值创建事件，再用 `ModLoader.postEvent` 发布（如果正在潜行，方法在发布前就已经返回 `PASS` 了）。

`setAttractRadius(double)` 改的是沿 X、Y、Z 三轴展开的搜索盒半径，物品和经验球共用这个数值。发布方会直接读回你改过的值，所以请传入有限的非负数。如果取消事件，方法会直接返回 `PASS`，跳过移动物品、集中经验球、消耗手持物品耐久和添加冷却。事件里带有 `Level`，如果监听逻辑有副作用，记得按逻辑侧区分处理。[磁铁调用点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java)

## 给副手持指南针的玩家限制吸引距离

在模组构造函数把自己的 `IEventBus` 传给 `CompassMagnetLimit.register(modBus)`。玩家可以用指南针与磁铁组合精确拾取近处物品，配置的吸引半径已经小于四格时沿用较小值。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.api.event.UseMagnetEvent;
import net.minecraft.world.item.Items;
import net.neoforged.bus.api.IEventBus;

public final class CompassMagnetLimit {
    public static void register(IEventBus modBus) {
        modBus.addListener(CompassMagnetLimit::limitRadius);
    }

    private static void limitRadius(UseMagnetEvent event) {
        if (event.getPlayer().getOffhandItem().is(Items.COMPASS)) {
            event.setAttractRadius(Math.min(4.0, event.getAttractRadius()));
        }
    }
}
```

| 事件类型 | 创建位置 |
| --- | --- |
| `UseMagnetEvent` | [`MagnetUtil:164`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L164) |
