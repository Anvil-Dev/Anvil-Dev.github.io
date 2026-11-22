# Triggering Ponder in Container Slots

Ponder prompts are determined jointly by the client container screen, the hovered slot, and the item type. End the timer when the item leaves the slot; the display duration comes from the current client config.

## Example in Source

Take `GuideBookItem` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java)

- [`GuideBookItem` · Line 25](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L25)
- [`ClientEventListener` · Line 132](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L132)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `Thinkable` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/thought/Thinkable.java) |
| `ThoughtManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/thought/ThoughtManager.java) |

<!-- source-guide -->
