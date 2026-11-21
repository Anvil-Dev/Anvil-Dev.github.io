# 定位穿越事件

在传送相关事件的发布点检查实体和传送门上下文，区分判断触发条件与处理已经发生的穿越。

## 源码中的用例

以本分支的 `PortalEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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
        Map.Entry<BlockState, CompoundTag> result = null;
        Optional<RecipeHolder<PortalConversionRecipe>> recipeOp = level.getServer().getRecipeManager().getRecipeFor(
            ModRecipeTypes.PORTAL_CONVERSION.get(),
            new PortalConversionRecipe.Input(type, entity),
            level
        );
        if (recipeOp.isPresent()) result = recipeOp.get().value().getResults().getResult(level);
        if (result == null) result = CompatUtil.PORTAL_DEFAULT_CONVERSION.get(type.getPortal());
        if (result == null) return;
        entity.blockState = result.getKey();
        entity.blockData = result.getValue().copy();
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java)

- [`EntityMixin` · 第 327 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L327)
- [`PortalConversionRecipeLoader` · 第 24 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L24)
- [`PortalEventListener` · 第 37 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PortalEventListener.java#L37)
- [`ModRecipeSerializers` · 第 228 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L228)
- [`ModRecipeTypes` · 第 117 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTypes.java#L117)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `EntityThroughPortalEvent` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-event-1#entitythroughportalevent) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/EntityThroughPortalEvent.java) |
| `PortalConversionRecipe` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-recipe-3#portalconversionrecipe) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java) |

<!-- source-guide -->
