# 追踪服务端条件触发

数据定义由触发器解码，玩家是否达成由服务端事件驱动。排查进度时同时检查注册 ID、目标玩家和触发位置的上下文。

## 源码中的用例

以本分支的 `PlayerWearAnvilHammerEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import dev.dubhe.anvilcraft.item.tool.AnvilHammerItem;
import dev.dubhe.anvilcraft.util.TriggerUtil;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.entity.living.LivingEquipmentChangeEvent;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class PlayerWearAnvilHammerEventListener {
    @SubscribeEvent
    public static void onPlayerWearAnvilHammer(LivingEquipmentChangeEvent event) {
        if (event.getSlot() == EquipmentSlot.HEAD) tryTrigger(event.getEntity(), event.getTo());
    }

    public static void tryTrigger(LivingEntity entity, ItemStack stack) {
        if (!(entity instanceof ServerPlayer) || !(stack.getItem() instanceof AnvilHammerItem)) return;
        if (PowerGrid.findPowerGridContains(entity.level(), entity.position()).filter(PowerGrid::isWorking).isPresent()) {
            TriggerUtil.playerWearAnvilHammer(entity.level(), BlockPos.containing(entity.position()));
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java)

- [`AdvancementLineHelper` · 第 302 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L302)
- [`ModCriterionTriggers` · 第 87 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L87)
- [`BeaconConversionBehavior` · 第 56 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L56)
- [`AnvilCraftFakeBlockPlacer` · 第 147 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L147)
- [`FluidPipeNetwork` · 第 1115 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L1115)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `InWorldRecipeTrigger` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java) |
| `AnvilOnGroundTrigger` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java) |
| `TriggerUtil` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TriggerUtil.java) |

<!-- source-guide -->
