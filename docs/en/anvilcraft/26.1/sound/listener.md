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
        if (event.getSound() != null && event.getSound().getKey() != null) {
            boolean canceled = SoundHelper.INSTANCE.shouldMute(
                event.getLevel(),
                event.getSound().getKey().identifier(),
                new Vec3(entity.getX(), entity.getY(), entity.getZ())
            );
            if (canceled) {
                event.setCanceled(true);
            }
        }
    }

    @SubscribeEvent
    public static void onPlaySoundAtPosition(PlayLevelSoundEvent.AtPosition event) {
        if (event.getSound() != null && event.getSound().getKey() != null) {
            boolean canceled = SoundHelper.INSTANCE.shouldMute(
                event.getLevel(),
                event.getSound().getKey().identifier(),
                event.getPosition()
            );
            if (canceled) {
                event.setCanceled(true);
            }
        }
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java)

- [`ActiveSilencerBlockEntity` · Line 51](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ActiveSilencerBlockEntity.java#L51)
- [`InspectionSupport` · Line 38](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L38)
- [`ClientEventListener` · Line 97](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L97)
- [`ServerLifecycleEventListener` · Line 64](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L64)
- [`SoundEventListener` · Line 17](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L17)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ISoundEventListener` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sound/ISoundEventListener.java) |
| `SoundHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java) |

<!-- source-guide -->
