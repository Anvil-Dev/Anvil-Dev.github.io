# Letting Machines and Terminals Read Evolution Progress

The Celestial Forging Anvil establishes its runtime evolution state only after the evolution accelerator is built. `CfaMegastructureManager` hands the build notification to the corresponding handler; `AcceleratorHandler.onBuild` confirms on the server that the current body is a star, no evolution is already running, and a track can be selected, then records the initial mass, energy, size, evolution seed, and game time, saving the phase configuration as a runtime snapshot. If you want to extend display panels, read the query methods exposed by the anvil directly. [Build notification](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaMegastructureManager.java#L221) · [Creating snapshot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L456)

Every server tick, the anvil invokes the megastructure manager. Removing the amplifier before evolution finishes freezes progress; restoring the amplifier adds the paused duration back into the timeline. The handler marks "applied" before executing due events and settling the terminal outcome. Burst flashes and camera shakes are phase events, whereas remnant spawning or body disruption happens during terminal dispatch—so terminals cannot infer that a remnant has spawned simply because a shake just occurred. [Advancing, pausing & events](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L410) · [Settling remnants](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L589)

The code below produces a read-only snapshot for a debug terminal: call `read` when the panel refreshes, where `Optional.empty()` means no track is currently active. The built-in terminal also updates remaining seconds locally while calibrating against server-synced data. [Where the built-in screen reads it](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L645)

```java
package dev.example.celestial;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import java.util.Optional;

public record EvolutionReadout(String track, String outcome, boolean paused,
                               int remainingTicks, float totalProgress) {
    public static Optional<EvolutionReadout> read(CelestialForgingAnvilBlockEntity anvil,
                                                  float partialTick) {
        if (anvil.getStellarEvolutionState() == null) return Optional.empty();
        return Optional.of(new EvolutionReadout(anvil.getStellarTrackId(),
            anvil.getStellarTerminalOutcomeId(), anvil.isAcceleratorPaused(),
            anvil.getAcceleratorTicksRemaining(), anvil.getStellarTotalProgress(partialTick)));
    }
}
```

| Query | Meaning | Boundaries |
| --- | --- | --- |
| `getStellarEvolutionState()`, `getEvolutionTrack()` | Gets the evolution state and currently resolved track | Both may be null. Terminals should reserve an idle machine state. |
| `getStellarTrackId()`, `getStellarTerminalOutcomeId()` | Track ID and configured terminal outcome ID | May be empty strings when no state or track is active. The terminal ID indicates the expected outcome. |
| `getStellarTotalProgress(float partialTick)`, `getStellarPhaseProgress()` | Overall timeline progress and current phase progress | Pass render interpolation to the former when drawing smooth animations; pass `0` for static numeric displays. |
| `isAcceleratorPaused()`, `getAcceleratorTicksRemaining()` | Pause flag and remaining ticks | Convert at 20 ticks per second when displaying seconds on terminals. World changes and progress settlement run on the server. |
| `StellarTerminal.Kind` | `white_dwarf`, `neutron_star`, `black_hole` produce corresponding remnants; `disruption` removes the body; `keep` keeps the body | Requires both `massAnvils` and `solarMass` to be `0` for disruption. Other remnants' anvil coordinates and solar masses must match the mass table. |

[Terminal data constraints](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L35) · [Public queries on the anvil](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L260)
