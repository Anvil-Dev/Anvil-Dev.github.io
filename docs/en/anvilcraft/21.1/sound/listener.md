# Registering Silencing Zones per Dimension

Keep the same listener instance used at registration so you can unregister it when the block or level unloads. Zone checks require both the sound ID and spatial position so you do not accidentally mute sounds in other dimensions or locations.

## Example in Source

Take `SoundEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.sound.SoundHelper;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.phys.Vec3;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.PlayLevelSoundEvent;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class SoundEventListener {
    @SubscribeEvent
    public static void onPlaySoundAtEntity(PlayLevelSoundEvent.AtEntity event) {
        Entity entity = event.getEntity();
        event.setCanceled(SoundHelper.INSTANCE.shouldMute(
            event.getLevel(),
            event.getSound().value().getLocation(),
            new Vec3(entity.getX(), entity.getY(), entity.getZ())
        ));
    }

    @SubscribeEvent
    public static void onPlaySoundAtPosition(PlayLevelSoundEvent.AtPosition event) {
        event.setCanceled(SoundHelper.INSTANCE.shouldMute(
            event.getLevel(),
            event.getSound().value().getLocation(),
            event.getPosition()
        ));
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java)

- [`ActiveSilencerBlockEntity` · Line 50](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ActiveSilencerBlockEntity.java#L50)
- [`InspectionSupport` · Line 38](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L38)
- [`ClientEventListener` · Line 104](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L104)
- [`ServerLifecycleEventListener` · Line 55](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L55)
- [`SoundEventListener` · Line 16](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L16)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ISoundEventListener` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/ISoundEventListener.java) |
| `SoundHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java) |
