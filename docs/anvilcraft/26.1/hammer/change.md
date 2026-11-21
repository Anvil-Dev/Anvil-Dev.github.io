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
    /// 初始化铁砧锤处理器
    public static void init() {
        for (Block block : BuiltInRegistries.BLOCK) {
            if (!BuiltInRegistries.BLOCK.wrapAsHolder(block).is(ModBlockTags.HAMMER_CHANGEABLE)) continue;
            HammerManager.registerChange(() -> block, HammerRotateBehavior.DEFAULT);
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHammerInits.java)

- [`PipeBlock` · 第 75 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L75)
- [`LargeLaserBlock` · 第 44 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/laser/LargeLaserBlock.java#L44)
- [`SimpleChuteBlock` · 第 50 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/chute/SimpleChuteBlock.java#L50)
- [`SimpleMagneticChuteBlock` · 第 51 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/chute/SimpleMagneticChuteBlock.java#L51)
- [`ActivatorSlidingRailBlock` · 第 43 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/sliding/ActivatorSlidingRailBlock.java#L43)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `IHammerChangeable` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-hammer#ihammerchangeable) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerChangeable.java) |
| `HammerManager` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-hammer#hammermanager) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java) |
| `HammerRotateBehavior` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-hammer#hammerrotatebehavior) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java) |

<!-- source-guide -->
