# 在容器槽位触发思考

思考提示由客户端容器屏幕、鼠标所在槽位和物品类型共同决定。物品离开槽位时应结束计时；展示时长取当前客户端配置。

## 源码中的用例

以本分支的 `GuideBookItem` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.item.utility;

import dev.dubhe.anvilcraft.api.thought.Thinkable;
import dev.dubhe.anvilcraft.api.tooltip.providers.IItemTooltipProvider;
import dev.dubhe.anvilcraft.integration.IntegrationUtil;
import dev.dubhe.anvilcraft.network.OpenIntegrationScreenPacket;
import dev.dubhe.anvilcraft.util.ModEventUtil;
import net.minecraft.network.chat.Component;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.EquipmentSlotGroup;
import net.minecraft.world.entity.ai.attributes.AttributeModifier;
import net.minecraft.world.entity.ai.attributes.Attributes;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.component.ItemAttributeModifiers;
import net.minecraft.world.item.component.TooltipDisplay;
import net.minecraft.world.level.Level;

import java.util.function.Consumer;

public class GuideBookItem extends Item implements Thinkable, IItemTooltipProvider {
    public GuideBookItem(Properties properties) {
        super(properties.attributes(ItemAttributeModifiers.builder()
            .add(Attributes.ATTACK_DAMAGE,
                new AttributeModifier(BASE_ATTACK_DAMAGE_ID, 3.0, AttributeModifier.Operation.ADD_VALUE),
                EquipmentSlotGroup.MAINHAND)
            .build()));
    }

    @Override
    public InteractionResult use(Level level, Player player, InteractionHand usedHand) {
        if (player instanceof ServerPlayer serverPlayer) {
            if (ModEventUtil.hasGuideBook()) {
                ModEventUtil.openGuideBook(level, serverPlayer, usedHand);
                return InteractionResult.CONSUME;
            } else {
                serverPlayer.connection.send(new OpenIntegrationScreenPacket());
            }
        }
        return InteractionResult.PASS;
    }

    @Override
    public void appendItemTooltip(
        ItemStack stack,
        TooltipContext context,
        TooltipDisplay display,
        Consumer<Component> consumer,
        TooltipFlag flag
    ) {
        this.appendHoverText(consumer);
    }

    @Override
    public void onThought() {
        IntegrationUtil.openIntegrationScreen();
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java)

- [`GuideBookItem` · 第 25 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L25)
- [`ClientEventListener` · 第 132 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L132)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `Thinkable` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/thought/Thinkable.java) |
| `ThoughtManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java) |

<!-- source-guide -->
