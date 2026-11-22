# Letting the Hammer Change Block States

To provide interaction for blocks you register yourself, implement `IHammerChangeable` on the block. Existing blocks register handlers through `HammerManager`. Blocks directly implementing the interface take precedence, followed by registered handlers, and finally falling back to the default behavior defined by tags.

## Example in Source

Take `ModHammerInits` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.init;

import dev.dubhe.anvilcraft.api.hammer.HammerManager;
import dev.dubhe.anvilcraft.api.hammer.HammerRotateBehavior;
import dev.dubhe.anvilcraft.init.block.ModBlockTags;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.level.block.Block;

public class ModHammerInits {
    /**
     * Initialize anvil hammer handlers
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

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModHammerInits.java)

- [`BlockComparatorBlock` · Line 41](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockComparatorBlock.java#L41)
- [`LargeLaserBlock` · Line 45](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LargeLaserBlock.java#L45)
- [`SimpleChuteBlock` · Line 53](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleChuteBlock.java#L53)
- [`SimpleMagneticChuteBlock` · Line 51](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/SimpleMagneticChuteBlock.java#L51)
- [`PipeBlock` · Line 74](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L74)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `IHammerChangeable` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerChangeable.java) |
| `HammerManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java) |
| `HammerRotateBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java) |
