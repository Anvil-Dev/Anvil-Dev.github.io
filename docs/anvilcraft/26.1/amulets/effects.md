# 识别护符与执行效果

外部装备栏可在查找事件中交出候选物品。执行效果前先检查作用对象与上下文键，区分没有通过实体检查和通过检查但没有找到护符两种结果。

## 源码中的用例

以本分支的 `AmuletEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.event.AmuletEvent;
import dev.dubhe.anvilcraft.init.item.ModComponents;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.inventory.PocketInventory;
import dev.dubhe.anvilcraft.item.property.component.BoxContents;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class AmuletEventListener {
    @SubscribeEvent
    public static void on(AmuletEvent.Find event) {
        if (!(event.getEntity() instanceof Player player)) return;
        event.provide(player.getMainHandItem());
        event.provide(player.getOffhandItem());
        PocketInventory.items(player).forEach(event::provide);
    }

    @SubscribeEvent
    public static void on(AmuletEvent.ProcessFound event) {
        ItemStack found = event.getFound();
        if (found.is(ModItems.AMULET_BOX)) {
            BoxContents contents = found.get(ModComponents.BOX_CONTENTS);
            if (contents == null) return;
            for (ItemStack stack : contents.amulets()) {
                if (stack.has(ModComponents.AMULET)) {
                    event.provide(stack.copy());
                }
            }
        }
    }

    @SubscribeEvent
    public static void on(AmuletEvent.EntityCheck event) {
        if (event.getEntity() instanceof Player) {
            event.pass();
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java)

- [`AmuletManager` · 第 79 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L79)
- [`AmuletEventListener` · 第 17 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletEventListener.java#L17)
- [`CuriosCommon` · 第 68 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/CuriosCommon.java#L68)
- [`AmuletAbilitiesEventListener` · 第 58 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L58)
- [`IAbnormal` · 第 26 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/abnormal/IAbnormal.java#L26)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `AmuletEvent` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java) |
| `AmuletEffectContext` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java) |
| `IAmuletEffect` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java) |
| `AttributeAmuletEffect` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java) |

<!-- source-guide -->
