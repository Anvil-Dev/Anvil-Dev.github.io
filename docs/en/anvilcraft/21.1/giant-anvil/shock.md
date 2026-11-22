# Matching Shock Structures

Use `ShockAnvilBehavior` to pair a mining effect with a drop behavior. When comparing frame compatibility, both the mining effect and the drop behavior ID must match.

## Example in Source

Take `DestroyMode` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.event.giantanvil.shock;

import dev.dubhe.anvilcraft.api.giantanvil.ShockAnvilBehavior;
import dev.dubhe.anvilcraft.api.giantanvil.ShockDropBehavior;
import dev.dubhe.anvilcraft.util.BlockMiningEffect;
import dev.dubhe.anvilcraft.util.BreakBlockUtil;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.block.state.BlockState;

import java.util.List;

public abstract class DestroyMode {
    public static final DestroyMode NORMAL = createForEffect(BlockMiningEffect.NORMAL);
    public static final DestroyMode SILK_TOUCH = createForEffect(BlockMiningEffect.SILK_TOUCH);
    public static final DestroyMode AUTO_SMELTING = createForEffect(BlockMiningEffect.SMELTING);
    public static final DestroyMode FORTUNE = createForEffect(BlockMiningEffect.FORTUNE_5);
    public static final DestroyMode DISINTEGRATION = createForEffect(BlockMiningEffect.DISINTEGRATION);

    private static DestroyMode createForEffect(BlockMiningEffect effect) {
        return new DestroyMode() {
            @Override
            public List<ItemStack> apply(BlockState state, BlockPos pos, ShockContext ctx) {
                return applyEffect(state, pos, ctx, effect, null);
            }

            @Override
            public List<ItemStack> apply(BlockState state, BlockPos pos, ShockContext ctx, ItemStack baseTool) {
                return applyEffect(state, pos, ctx, effect, baseTool);
            }
        };
    }

    /**
     * Creates a destroy mode from a mining effect.<br>
     * Known standard effects reuse singletons; others (such as Ember Anvil's level-5 smelting)
     * are constructed from the actual effect rather than degrading to {@link #NORMAL} due to level differences.
     */
    public static DestroyMode fromEffect(BlockMiningEffect effect) {
        if (effect.equals(BlockMiningEffect.NORMAL)) return NORMAL;
        if (effect.equals(BlockMiningEffect.SILK_TOUCH)) return SILK_TOUCH;
        if (effect.equals(BlockMiningEffect.DISINTEGRATION)) return DISINTEGRATION;
        if (effect.equals(BlockMiningEffect.SMELTING)) return AUTO_SMELTING;
        if (effect.equals(BlockMiningEffect.FORTUNE_5)) return FORTUNE;
        return createForEffect(effect);
    }

    /** Creates a destroy mode from a frame anvil behavior, preserving its custom drop handler. */
    public static DestroyMode fromAnvilBehavior(ShockAnvilBehavior behavior) {
        return fromEffect(behavior.miningEffect()).withDropBehavior(behavior.dropBehavior());
    }

    private final ShockDropBehavior dropBehavior;

    protected DestroyMode() {
        this(ShockDropBehavior.DEFAULT);
    }

    private DestroyMode(ShockDropBehavior dropBehavior) {
        this.dropBehavior = dropBehavior;
    }

    private DestroyMode withDropBehavior(ShockDropBehavior behavior) {
        DestroyMode source = this;
        return new DestroyMode(behavior) {
            @Override
            public List<ItemStack> apply(BlockState state, BlockPos pos, ShockContext ctx) {
                return source.apply(state, pos, ctx);
            }

            @Override
            public List<ItemStack> apply(BlockState state, BlockPos pos, ShockContext ctx, ItemStack baseTool) {
                return source.apply(state, pos, ctx, baseTool);
            }
        };
    }

    /** Spawns one or more item drop entities using the current anvil behavior. */
    public final void dropItems(List<ItemStack> itemStacks, BlockPos pos, ShockContext context) {
        for (ItemStack itemStack : itemStacks) {
            if (itemStack.isEmpty()) continue;
            this.dropBehavior.drop(context, pos, itemStack);
        }
    }

    private static List<ItemStack> applyEffect(
        BlockState state, BlockPos pos, ShockContext ctx, BlockMiningEffect effect, ItemStack baseTool
    ) {
        if (!(ctx.level() instanceof ServerLevel serverLevel)) return List.of();
        if (effect.isDisintegration()) {
            BreakBlockUtil.dropExperience(serverLevel, pos, state, effect);
        }
        return BreakBlockUtil.drop(serverLevel, pos, state, effect, baseTool);
    }

    public abstract List<ItemStack> apply(BlockState state, BlockPos pos, ShockContext ctx);

    public List<ItemStack> apply(BlockState state, BlockPos pos, ShockContext ctx, ItemStack tool) {
        return this.apply(state, pos, ctx);
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/DestroyMode.java)

- [`IShockEntity` · Line 17](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java#L17)
- [`ShockContext` · Line 124](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/ShockContext.java#L124)
- [`DestroyMode` · Line 57](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/DestroyMode.java#L57)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ShockAnvilBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java) |
| `ShockDropBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockDropBehavior.java) |
