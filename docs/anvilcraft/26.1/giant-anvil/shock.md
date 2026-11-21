# 匹配撼地结构

用 ShockAnvilBehavior 将采掘效果和掉落行为配对。比较边框的兼容性时，采掘效果必须相等，掉落行为 ID 也必须相同。

## 源码中的用例

以本分支的 `DestroyMode` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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
import org.jspecify.annotations.Nullable;

import java.util.List;

public abstract class DestroyMode {
    public static final DestroyMode NORMAL = DestroyMode.createForEffect(BlockMiningEffect.NORMAL);
    public static final DestroyMode SILK_TOUCH = DestroyMode.createForEffect(BlockMiningEffect.SILK_TOUCH);
    public static final DestroyMode AUTO_SMELTING = DestroyMode.createForEffect(BlockMiningEffect.SMELTING);
    public static final DestroyMode FORTUNE = DestroyMode.createForEffect(BlockMiningEffect.FORTUNE_5);
    public static final DestroyMode DISINTEGRATION = DestroyMode.createForEffect(BlockMiningEffect.DISINTEGRATION);

    private static DestroyMode createForEffect(BlockMiningEffect effect) {
        return new DestroyMode() {
            @Override
            public List<ItemStack> apply(BlockState state, BlockPos pos, ShockContext ctx) {
                return DestroyMode.applyEffect(state, pos, ctx, effect, null);
            }

            @Override
            public List<ItemStack> apply(BlockState state, BlockPos pos, ShockContext ctx, ItemStack baseTool) {
                return DestroyMode.applyEffect(state, pos, ctx, effect, baseTool);
            }
        };
    }

    public static DestroyMode fromEffect(BlockMiningEffect effect) {
        if (effect.equals(BlockMiningEffect.SILK_TOUCH)) return DestroyMode.SILK_TOUCH;
        if (effect.equals(BlockMiningEffect.DISINTEGRATION)) return DestroyMode.DISINTEGRATION;
        if (effect.equals(BlockMiningEffect.SMELTING)) return DestroyMode.AUTO_SMELTING;
        if (effect.equals(BlockMiningEffect.FORTUNE_5)) return DestroyMode.FORTUNE;
        return DestroyMode.NORMAL;
    }

    /** 根据边框铁砧行为创建破坏模式，并保留其自定义掉落处理器。 */
    public static DestroyMode fromAnvilBehavior(ShockAnvilBehavior behavior) {
        return DestroyMode.fromEffect(behavior.miningEffect()).withDropBehavior(behavior.dropBehavior());
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

    /** 使用当前铁砧行为生成一个或多个掉落物实体。 */
    public final void dropItems(List<ItemStack> itemStacks, BlockPos pos, ShockContext context) {
        for (ItemStack itemStack : itemStacks) {
            if (itemStack.isEmpty()) continue;
            this.dropBehavior.drop(context, pos, itemStack);
        }
    }

    private static List<ItemStack> applyEffect(
        BlockState state,
        BlockPos pos,
        ShockContext ctx,
        BlockMiningEffect effect,
        @Nullable ItemStack baseTool
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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/DestroyMode.java)

- [`IShockEntity` · 第 17 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java#L17)
- [`ShockContext` · 第 124 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/ShockContext.java#L124)
- [`DestroyMode` · 第 52 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/DestroyMode.java#L52)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `ShockAnvilBehavior` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-giantanvil#shockanvilbehavior) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java) |
| `ShockDropBehavior` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-giantanvil#shockdropbehavior) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockDropBehavior.java) |

<!-- source-guide -->
