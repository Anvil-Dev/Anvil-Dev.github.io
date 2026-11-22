# Tracking Server-Side Criterion Triggers

Data definitions are decoded by triggers, while whether a player satisfies them is driven by server events. When troubleshooting advancements, check the registered ID, target player, and trigger position context together.

## Example in Source

Take `PlayerWearAnvilHammerEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerWearAnvilHammerEventListener.java)

- [`AdvancementLineHelper` · Line 302](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L302)
- [`ModCriterionTriggers` · Line 87](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L87)
- [`BeaconConversionBehavior` · Line 56](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L56)
- [`AnvilCraftFakeBlockPlacer` · Line 147](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L147)
- [`FluidPipeNetwork` · Line 1115](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/network/FluidPipeNetwork.java#L1115)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `InWorldRecipeTrigger` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java) |
| `AnvilOnGroundTrigger` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java) |
| `TriggerUtil` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TriggerUtil.java) |

<!-- source-guide -->
