# Starting Searches and Observing Results

After obtaining the position clicked by a player in a server-side tool's use callback, you can start a search. The anvil's controller advances tick by tick on its own, and the UI can read remaining ticks in subsequent updates; this call has no synchronous way to return a celestial body.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;

public final class CelestialSearchConsole {
    public enum Result { NO_ANVIL, ALREADY_RUNNING, STARTED, NEEDS_POWER, NO_MATCH, UNAVAILABLE }

    public static Result start(ServerLevel level, BlockPos pos) {
        if (!level.isLoaded(pos)
            || !(level.getBlockEntity(pos) instanceof CelestialForgingAnvilBlockEntity anvil)) {
            return Result.NO_ANVIL;
        }
        if (anvil.isSearching()) return Result.ALREADY_RUNNING;
        if (anvil.isLocked() || anvil.isAcceleratorActive()) return Result.UNAVAILABLE;
        anvil.startSearch();
        if (anvil.isSearching()) return Result.STARTED;
        if (anvil.isPowerInsufficient()) return Result.NEEDS_POWER;
        if (anvil.isSearchFailed()) return Result.NO_MATCH;
        return Result.UNAVAILABLE;
    }
}
```

| API | Parameters, Return & Boundaries |
| --- | --- |
| `startSearch()` | Returns `void`. Returns immediately if already locked, searching, or accelerator is active. Slots 0 to 3 correspond to time, space, mass, and energy; slot 4 holds the seed. Without a seed, it tests whether these parameters match first. |
| `isSearching()`, `getSearchTicksRemaining()` | 200 ticks remain after a successful start, decremented by `serverTick()`. Clears the previous active celestial body when search starts; do not read it as a result during the same interaction. |
| `isSearchFailed()`, `isPowerInsufficient()` | Two booleans distinguishing "no match" from "insufficient power". Power check requires a power grid, and either zero input demand or an active grid. Losing power mid-search aborts the search and unlocks. |
| `getCelestialBodyData()` | Returns `null` when there is no target; read it after completion. Normal matching reads the four slot counts, while inserted snapshots or special seeds have their own matching paths. |

Starting a search copies the seed item, components, and snapshot. On completion, the seed stack is verified; if the item or components were swapped mid-search, the old seed's snapshot and dedicated match basis are cleared. Save unloading and UI updates are handled by the anvil's own lifecycle; add-on tools should not drive an extra `serverTick()`. [Search controller](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaSearchController.java) · [Anvil entrypoint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java)
