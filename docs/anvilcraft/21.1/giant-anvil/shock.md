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
     * 按挖掘效果创建破坏模式。<br>
     * 已知的标准效果复用单例；其余（如余烬铁砧的 5 级熔炼）按实际效果构造，
     * 不能因为等级不同就退化成 {@link #NORMAL}，否则熔炼等效果会整体失效。
     */
    public static DestroyMode fromEffect(BlockMiningEffect effect) {
        if (effect.equals(BlockMiningEffect.NORMAL)) return NORMAL;
        if (effect.equals(BlockMiningEffect.SILK_TOUCH)) return SILK_TOUCH;
        if (effect.equals(BlockMiningEffect.DISINTEGRATION)) return DISINTEGRATION;
        if (effect.equals(BlockMiningEffect.SMELTING)) return AUTO_SMELTING;
        if (effect.equals(BlockMiningEffect.FORTUNE_5)) return FORTUNE;
        return createForEffect(effect);
    }

    /** 根据边框铁砧行为创建破坏模式，并保留其自定义掉落处理器。 */
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

    /** 使用当前铁砧行为生成一个或多个掉落物实体。 */
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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/DestroyMode.java)

- [`IShockEntity` · 第 17 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java#L17)
- [`ShockContext` · 第 124 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/ShockContext.java#L124)
- [`DestroyMode` · 第 57 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/giantanvil/shock/DestroyMode.java#L57)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `ShockAnvilBehavior` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-giantanvil#shockanvilbehavior) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java) |
| `ShockDropBehavior` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-giantanvil#shockdropbehavior) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockDropBehavior.java) |
