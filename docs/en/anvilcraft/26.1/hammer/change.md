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
    /// Initializes the anvil hammer handlers.
    public static void init() {
        for (Block block : BuiltInRegistries.BLOCK) {
            if (!BuiltInRegistries.BLOCK.wrapAsHolder(block).is(ModBlockTags.HAMMER_CHANGEABLE)) continue;
            HammerManager.registerChange(() -> block, HammerRotateBehavior.DEFAULT);
        }
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHammerInits.java)

- [`PipeBlock` · Line 75](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/fluid/PipeBlock.java#L75)
- [`LargeLaserBlock` · Line 44](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/laser/LargeLaserBlock.java#L44)
- [`SimpleChuteBlock` · Line 50](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/chute/SimpleChuteBlock.java#L50)
- [`SimpleMagneticChuteBlock` · Line 51](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/chute/SimpleMagneticChuteBlock.java#L51)
- [`ActivatorSlidingRailBlock` · Line 43](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/sliding/ActivatorSlidingRailBlock.java#L43)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `IHammerChangeable` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerChangeable.java) |
| `HammerManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java) |
| `HammerRotateBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java) |

<!-- source-guide -->
