# Registering Impact Behavior for a Block

The add-on mod below makes an anvil falling at least two blocks press sandstone into smooth sandstone. Attach the listener to the game event bus during mod construction. AnvilCraft posts the registration event only when handling `AnvilEvent.OnLand` for the first time; handlers registered after that event will not appear in the lookup table.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.event.AnvilBehaviorRegisterEvent;
import net.minecraft.world.level.block.Blocks;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.common.NeoForge;

@Mod("sandstone_press")
public final class SandstonePress {
    public SandstonePress() {
        NeoForge.EVENT_BUS.addListener(SandstonePress::register);
    }

    private static void register(AnvilBehaviorRegisterEvent event) {
        event.registerBehavior(Blocks.SANDSTONE, (level, hitPos, state, distance, landing) -> {
            if (distance < 2.0F) return false;
            return level.setBlockAndUpdate(hitPos, Blocks.SMOOTH_SANDSTONE.defaultBlockState());
        });
    }
}
```

| Signature or Parameter | Convention |
| --- | --- |
| `registerBehavior(Block, IAnvilBehavior)` | Matches all block states of this block. |
| `registerBehavior(Predicate<BlockState>, IAnvilBehavior)` | Use when checking facing, lit state, or block tags. Registered predicates are iterated on landing; predicates should only read state and avoid mutating the world during matching. |
| `handle(ServerLevel, BlockPos, BlockState, double, AnvilEvent.OnLand)` | `hitPos` is the position below the anvil's landing spot, `state` is the matched state at that position, and `distance` is the fall distance. The landing position itself is `landing.getPos()`. |
| Return value of `handle` | Returning `true` stops this round of behavior iteration. Returning `false` lets subsequent matches run. |
| `priority()` | Default `100`. Landing iteration in this commit follows registry iteration order and does not sort by this value. |

Multiple behaviors can match the same block. `findMatching` generates a read-only list ordered by registration order from the registry each time. If a stonecutter is below, the break branch may return early. In-world recipes usually run before behaviors, and a behavior's return value cannot undo recipe results already produced.

[Behavior interface](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java) · [Landing call site](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java)
