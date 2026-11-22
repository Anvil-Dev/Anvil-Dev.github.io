# 追踪服务端条件触发

数据定义由触发器解码，玩家是否达成由服务端事件驱动。排查进度时同时检查注册 ID、目标玩家和触发位置的上下文。

## 源码中的用例

以本分支的 `PlayerWearAnvilHammerEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import dev.dubhe.anvilcraft.item.AnvilHammerItem;
import dev.dubhe.anvilcraft.util.TriggerUtil;
import net.minecraft.core.BlockPos;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.entity.living.LivingEquipmentChangeEvent;

import java.util.Optional;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class PlayerWearAnvilHammerEventListener {
    @SubscribeEvent
    public static void onPlayerWearAnvilHammer(LivingEquipmentChangeEvent event) {
        LivingEntity entity = event.getEntity();
        EquipmentSlot slot = event.getSlot();
        ItemStack eventTo = event.getTo();
        if (entity instanceof Player && slot == EquipmentSlot.HEAD && eventTo.getItem() instanceof AnvilHammerItem) {
            Optional<PowerGrid> powerGrid = PowerGrid.findPowerGridContains(entity.level(), entity.position());
            if (powerGrid.isPresent() && powerGrid.get().isWorking()) {
                TriggerUtil.playerWearAnvilHammer(entity.level(), BlockPos.containing(entity.position()));
            }
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java)

- [`AdvancementLineHelper` · 第 504 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L504)
- [`ModCriterionTriggers` · 第 77 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L77)
- [`BeaconConversionBehavior` · 第 55 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L55)
- [`AnvilCraftFakeBlockPlacer` · 第 140 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L140)
- [`FluidPipeNetwork` · 第 1219 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L1219)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `InWorldRecipeTrigger` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java) |
| `AnvilOnGroundTrigger` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java) |
| `TriggerUtil` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/TriggerUtil.java) |
