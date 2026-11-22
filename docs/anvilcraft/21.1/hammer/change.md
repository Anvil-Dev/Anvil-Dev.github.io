# 让锤子改变方块状态

要为自己注册的方块提供交互，可在方块上实现 IHammerChangeable。现有方块通过 HammerManager 登记处理器。直接实现接口的方块优先，其次查询已登记的处理器，然后才回退到标签定义的默认行为。

## 源码中的用例

以本分支的 `ModHammerInits` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.init;

import dev.dubhe.anvilcraft.api.hammer.HammerManager;
import dev.dubhe.anvilcraft.api.hammer.HammerRotateBehavior;
import dev.dubhe.anvilcraft.init.block.ModBlockTags;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.level.block.Block;

public class ModHammerInits {
    /**
     * 初始化铁砧锤处理器
     */

    public static void init() {
        for (Block block : BuiltInRegistries.BLOCK) {
            if (!block.builtInRegistryHolder().is(ModBlockTags.HAMMER_CHANGEABLE)) continue;
            HammerManager.registerChange(() -> block, HammerRotateBehavior.DEFAULT);
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModHammerInits.java)

- [`BlockComparatorBlock` · 第 41 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L41)
- [`LargeLaserBlock` · 第 45 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LargeLaserBlock.java#L45)
- [`SimpleChuteBlock` · 第 53 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L53)
- [`SimpleMagneticChuteBlock` · 第 51 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L51)
- [`PipeBlock` · 第 74 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L74)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `IHammerChangeable` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerChangeable.java) |
| `HammerManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java) |
| `HammerRotateBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java) |
