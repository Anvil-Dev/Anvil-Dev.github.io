# 按维度登记消音区域

注册时保留同一个监听器实例，在方块或世界卸载时用它注销。区域判定需要声音 ID 和空间位置，以免误消除其他维度或其他位置的声音。

## 源码中的用例

以本分支的 `SoundEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java)

- [`ActiveSilencerBlockEntity` · 第 51 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ActiveSilencerBlockEntity.java#L51)
- [`InspectionSupport` · 第 38 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L38)
- [`ClientEventListener` · 第 97 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L97)
- [`ServerLifecycleEventListener` · 第 64 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L64)
- [`SoundEventListener` · 第 17 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SoundEventListener.java#L17)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `ISoundEventListener` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-sound#isoundeventlistener) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sound/ISoundEventListener.java) |
| `SoundHelper` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-sound#soundhelper) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java) |

<!-- source-guide -->
