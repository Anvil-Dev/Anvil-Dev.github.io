# AppendCustomHoverTextEvent

附属物品需要加一行操作说明时，订阅 `NeoForge.EVENT_BUS` 上的此事件。`ItemStack.addDetailsToTooltip` 进入方法时发布，监听器用 `getBuilder().accept(Component)` 追加一行，后续原版明细继续构建。事件给出当前 `ItemStack`、`TooltipContext`、`TooltipDisplay` 与 `TooltipFlag`。`getPlayer()` 可以为空，例如不带玩家上下文的提示预览。

先按物品和显示条件过滤，再生成文本。构建提示时可能重复进入这一方法，所以把持久化修改留给实际使用操作。事件不能取消，传入的 `Consumer` 仅提供逐行追加能力。[原版方法注入点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java) · [内置追加器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TooltipEventListener.java)

## 给指南针加一行操作提示

在模组构造函数中调用一次 `CompassHint.register()`。示例只对原版指南针追加一行，并允许在没有玩家的物品预览里工作。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.api.event.AppendCustomHoverTextEvent;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.Items;
import net.neoforged.neoforge.common.NeoForge;

public final class CompassHint {
    public static void register() {
        NeoForge.EVENT_BUS.addListener(CompassHint::append);
    }

    private static void append(AppendCustomHoverTextEvent event) {
        if (!event.getStack().is(Items.COMPASS)) return;
        event.getBuilder().accept(Component.translatableWithFallback(
            "tooltip.workshop.compass", "记下营地坐标，再开始远行。"
        ));
    }
}
```

| 事件类型 | 创建位置 |
| --- | --- |
| `AppendCustomHoverTextEvent` | [`ItemStackMixin:107`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java#L107) |

## 参数与事件状态

- [`AppendCustomHoverTextEvent`](../api/dev-dubhe-anvilcraft-api-event-1#appendcustomhovertextevent)
