# Integrating Other Fuel Containers

Query fuel on the server thread, returning `DEFAULT` or an empty result when the handler does not take over that position. Simulated consumption must not deduct fuel. When multiple extensions exist at the same position, an explicit denial also terminates that query.

## Reserving a Cauldron for Another Machine

If an add-on already has a device marked by a specific block, it can explicitly deny that position from acting as a plasma jet base. The handler below reserves cauldrons sitting on bedrock for other equipment. For all other positions it returns `DEFAULT` so subsequent handlers can still take over. Call `install()` once from your add-on mod during common setup.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.plasma.PlasmaJetFuelHandler;
import dev.dubhe.anvilcraft.api.plasma.PlasmaJetHooks;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.util.TriState;

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

## Example in Source

- [`PlasmaJetsBlockEntity` · line 91](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java#L91)
- [`PlasmaJetsBlock` · line 48](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L48)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `PlasmaJetFuelHandler` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetFuelHandler.java) |
| `PlasmaJetHooks` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetHooks.java) |

<!-- source-guide -->
