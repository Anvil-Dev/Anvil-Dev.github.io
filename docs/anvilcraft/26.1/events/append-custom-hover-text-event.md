# AppendCustomHoverTextEvent

如果想给附属物品加一行操作说明，订阅 `NeoForge.EVENT_BUS` 上的这个事件就行。进入 `ItemStack.addDetailsToTooltip` 时会发布该事件，监听器通过 `getBuilder().accept(Component)` 追加一行提示，原版后续明细还会继续构建。事件里能拿到当前的 `ItemStack`、`TooltipContext`、`TooltipDisplay` 和 `TooltipFlag`；注意 `getPlayer()` 可能为空（比如没有玩家上下文的提示预览）。

建议先按物品和显示条件过滤，再生成文本。构建提示时可能会重复进入这个方法，所以持久化修改不要放在这里做。该事件不能取消，传入的 `Consumer` 也只用来逐行追加文本。[原版方法注入点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemStackMixin.java) · [内置追加器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/TooltipEventListener.java)

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
