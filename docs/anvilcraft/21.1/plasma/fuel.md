# 接入其他燃料容器

在服务器线程查询燃料，处理器未接管该位置时返回 DEFAULT 或空结果。模拟消耗不能扣除燃料。同一位置有多个扩展时，明确的否决也会终止该项查询。

## 保留一只锅给其他机器

如果附属已有一台以指定方块标记的设备，可以显式否决该位置作为喷流底座。下面的处理器把基岩上的锅留给其他设备。其余位置返回 `DEFAULT`，后续处理器仍可接管。由附属模组在公共初始化时调用一次 `install()`。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.plasma.PlasmaJetFuelHandler;
import dev.dubhe.anvilcraft.api.plasma.PlasmaJetHooks;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Blocks;
import net.neoforged.neoforge.common.util.TriState;

public final class ReservedCauldron implements PlasmaJetFuelHandler {
    public static void install() {
        PlasmaJetHooks.registerFuel(new ReservedCauldron());
    }

    @Override
    public TriState isValidBase(Level level, BlockPos cauldronPos) {
        return level.getBlockState(cauldronPos.below()).is(Blocks.BEDROCK)
            ? TriState.FALSE : TriState.DEFAULT;
    }
}
```

## 源码中的用例

- [`PlasmaJetsBlock` · 第 47 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PlasmaJetsBlock.java#L47)
- [`PlasmaJetsBlockEntity` · 第 96 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L96)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `PlasmaJetFuelHandler` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-plasma#plasmajetfuelhandler) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetFuelHandler.java) |
| `PlasmaJetHooks` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-plasma#plasmajethooks) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetHooks.java) |
