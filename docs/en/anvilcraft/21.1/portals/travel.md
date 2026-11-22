# Locating Traversal Events

Inspect the entity and portal context at the dispatch site of portal-related events to distinguish checking trigger conditions from handling a traversal that has already occurred.

## Example in Source

Take `PortalEventListener` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.event.EntityThroughPortalEvent;
import dev.dubhe.anvilcraft.api.portal.PortalType;
import dev.dubhe.anvilcraft.init.block.ModBlockTags;
import dev.dubhe.anvilcraft.init.recipe.ModRecipeTypes;
import dev.dubhe.anvilcraft.recipe.PortalConversionRecipe;
import dev.dubhe.anvilcraft.util.CompatUtil;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.entity.item.FallingBlockEntity;
import net.minecraft.world.item.crafting.RecipeHolder;
import net.minecraft.world.level.block.state.BlockState;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;

import java.util.Map;
import java.util.Optional;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class PortalEventListener {
    @SubscribeEvent
    public static void onThroughPortal(EntityThroughPortalEvent event) {
        if (!(event.getLevel() instanceof ServerLevel level)) return;
        if (!(event.getEntity() instanceof FallingBlockEntity entity)) return;
        PortalEventListener.processBlockPortalConversionRecipe(level, entity, event.getType());
    }

    private static void processBlockPortalConversionRecipe(ServerLevel level, FallingBlockEntity entity, PortalType type) {
        if (entity.anvilcraft$isSpectral()) {
            entity.discard();
            return;
        }
        if (entity.blockState.is(ModBlockTags.END_PORTAL_UNABLE_CHANGE)) return;
        Optional<RecipeHolder<PortalConversionRecipe>> recipeOp = level.getRecipeManager().getRecipeFor(
            ModRecipeTypes.PORTAL_CONVERSION_TYPE.get(),
            new PortalConversionRecipe.Input(type, entity),
            level
        );
        Map.Entry<BlockState, CompoundTag> result = null;
        if (recipeOp.isPresent()) result = recipeOp.get().value().getResult().getResult(level);
        if (result == null) result = CompatUtil.PORTAL_DEFAULT_CONVERSION.get(type.getPortal());
        if (result == null) return;
        entity.blockState = result.getKey();
        CompoundTag nbt = result.getValue();
        entity.blockData = nbt == null ? null : nbt.copy();
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java)

- [`EntityMixin` · Line 377](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L377)
- [`PortalConversionRecipeLoader` · Line 24](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L24)
- [`PortalEventListener` · Line 36](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java#L36)
- [`ModRecipeTypes` · Line 265](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTypes.java#L265)
- [`AnvilCraftJeiPlugin` · Line 184](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L184)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `EntityThroughPortalEvent` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java) |
| `PortalConversionRecipe` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java) |
