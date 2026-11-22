# Intervening in Pushability

Hand your `SlidingStructureExtension` to `SlidingStructureHooks` during common setup. When the server resolves each candidate block, it calls extensions in order, passing the previous return value as `original` to the next. Keep the world unmodified during evaluation.

## Preventing Sliding Rails from Moving Specific Blocks

Call `install()` during common setup. The rule overrides only the state your add-on cares about, leaving all other blocks with the incoming push reaction.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.sliding.SlidingStructureExtension;
import dev.dubhe.anvilcraft.api.sliding.SlidingStructureHooks;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.material.PushReaction;

public final class AnchorRule implements SlidingStructureExtension {
    public static void install() {
        SlidingStructureHooks.register(new AnchorRule());
    }

    @Override
    public PushReaction modifyPushReaction(Level level, BlockPos pos, BlockState state,
            PushReaction original, Direction pushDirection) {
        return state.is(Blocks.LODESTONE) ? PushReaction.BLOCK : original;
    }
}
```

## Example in Source

- [`SlidingBlockStructureResolver` · Line 79](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java#L79)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `SlidingStructureExtension` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureExtension.java) |
| `SlidingStructureHooks` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingStructureHooks.java) |

<!-- source-guide -->
