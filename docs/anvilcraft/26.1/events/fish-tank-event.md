# FishTankEvent

想改变燃烧鱼缸的接触伤害时，用 `FluidDamage`。服务端先验证实体碰到实际液面范围。物品实体走修复分支并提前返回。对其他实体，鱼缸处于已点燃状态时在 `FIRE_IGNITE` 后的回调里发布事件，初始伤害为 4。发布者把 `getDamage()` 直接交给伤害调用。它不提供受害实体，也不会因伤害改为零而撤销已执行的点燃逻辑。

`ServerTick` 在鱼缸修复内部物品之前发布。`EntityInside` 记录实体进入鱼缸方块的回调，在客户端提前返回之前发布。仅需服务端逻辑时自行检查 `getLevel().isClientSide()`。这两个通知都没有取消入口。未点燃的熔岩走原版熔岩效果分支，不能靠 `FluidDamage` 修改其数值。[鱼缸刻与液体接触](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java) · [方块接触回调](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java)

## 降低主世界坐标原点附近鱼缸的燃烧伤害

在附属模组构造函数中调用 `SpawnTankProtection.register()`。监听器只在主世界坐标原点附近的一块固定区域调整伤害，保留其他监听器已经设置的较低数值。这个例子不依赖受害实体字段。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.api.event.FishTankEvent;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.neoforged.neoforge.common.NeoForge;

public final class SpawnTankProtection {
    public static void register() {
        NeoForge.EVENT_BUS.addListener(SpawnTankProtection::limitDamage);
    }

    private static void limitDamage(FishTankEvent.FluidDamage event) {
        if (!event.getLevel().dimension().equals(Level.OVERWORLD)) return;
        BlockPos tank = event.getPos();
        if (Math.abs((long) tank.getX()) <= 32 && Math.abs((long) tank.getZ()) <= 32) {
            event.setDamage(Math.min(event.getDamage(), 1.0F));
        }
    }
}
```

| 事件类型 | 创建位置 |
| --- | --- |
| `FishTankEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `FishTankEvent.ServerTick` | [`FishTankBlockEntity:345`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L345) |
| `FishTankEvent.EntityInside` | [`FishTankBlock:220`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/FishTankBlock.java#L220) |
| `FishTankEvent.FluidDamage` | [`FishTankBlockEntity:1064`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L1064) |
