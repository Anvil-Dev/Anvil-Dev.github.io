# Tracking Server-Side Criterion Triggers

Data definitions are decoded by triggers, while whether a player satisfies them is driven by server events. When troubleshooting advancements, check the registered ID, target player, and trigger position context together.

## Example in Source

Take `PlayerWearAnvilHammerEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java)

- [`AdvancementLineHelper` · Line 504](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L504)
- [`ModCriterionTriggers` · Line 77](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L77)
- [`BeaconConversionBehavior` · Line 55](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L55)
- [`AnvilCraftFakeBlockPlacer` · Line 140](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L140)
- [`FluidPipeNetwork` · Line 1219](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L1219)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `InWorldRecipeTrigger` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java) |
| `AnvilOnGroundTrigger` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java) |
| `TriggerUtil` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/TriggerUtil.java) |
