# Adding a Planetary Survey Station Megastructure

Add-on mods can register definitions to `ModRegistryKeys.MEGASTRUCTURE`. The survey station below appears only on unamplified rocky planets. It uses the built-in ring-1 model, costs eight copper blocks to build, and emits a burst of locator particles every five seconds while active. Call `SurveyStation.register(modBus)` in your mod constructor to register it.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import dev.dubhe.anvilcraft.block.entity.celestial.Megastructure;
import dev.dubhe.anvilcraft.block.entity.celestial.RockyPlanetData;
import dev.dubhe.anvilcraft.block.entity.megastructure.BaseMegastructureHandler;
import dev.dubhe.anvilcraft.init.registry.ModRegistryKeys;
import net.minecraft.core.BlockPos;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.block.Blocks;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;

public final class SurveyStation {
    private static final DeferredRegister<Megastructure> DEFINITIONS =
        DeferredRegister.create(ModRegistryKeys.MEGASTRUCTURE, "workshop");

    public static void register(IEventBus bus) {
        DEFINITIONS.register("survey_station", id -> Megastructure.builder(id, "survey_station")
            .displayName("screen.workshop.survey_station")
            .prerequisite(ctx -> !ctx.amplified() && ctx.body() instanceof RockyPlanetData)
            .ring(1)
            .model(1, ResourceLocation.fromNamespaceAndPath("anvilcraft", "block/celestial_forging_anvil_ring_1_excavator"))
            .material(Blocks.COPPER_BLOCK, 8)
            .handler(Handler::new)
            .build());
        DEFINITIONS.register(bus);
    }

    private static final class Handler extends BaseMegastructureHandler {
        @Override
        public String name() {
            return "survey_station";
        }

        @Override
        public void serverTick(CelestialForgingAnvilBlockEntity anvil) {
            if (!(anvil.getLevel() instanceof ServerLevel level) || level.getGameTime() % 100L != 0) return;
            BlockPos pos = anvil.getBlockPos();
            level.sendParticles(ParticleTypes.END_ROD, pos.getX() + 0.5, pos.getY() + 2.0,
                pos.getZ() + 0.5, 3, 0.12, 0.02, 0.12, 0.01);
        }
    }
}
```

Declare the display name in `assets/workshop/lang/en_us.json` (and `zh_cn.json`).

```json
{"screen.workshop.survey_station":"Planetary Survey Station"}
```

| Builder Method | Parameters & Boundaries |
| --- | --- |
| `builder(id, name)`, `displayName(key)` | `id` matches the registry ID for save restoration; `name` is kept for legacy saves and handlers. When `displayName` is omitted, defaults to `screen.anvilcraft.cfa.megastructure.<name>`. |
| `prerequisite(predicate)`, `ring(int)`, `ring(function)` | `Context` carries the current celestial body, amplified flag, and nullable resource set. Prerequisite defaults to true; the ring function is required. New builds also filter out rings unsupported by the current amplified state. |
| `model(ring, location)` | Every usable ring must have a model. Adding the same ring twice throws immediately; reading an undefined ring model also throws. |
| `rotation(function)` | Takes a context with celestial body, ring number, base rotation, and body rotation, returning that ring's rotation angle. Defaults to the base rotation. |
| `material(item, count)` | Sets the material and count for a single build. Count must be positive; `material()` returns an empty stack if unconfigured. |
| `handler(supplier)`, `build()` | The factory creates a fresh handler instance each time. Building fails if the ring function or handler factory is missing. |
| `auxiliary()` | Marks the megastructure as an auxiliary one that can coexist with a main megastructure. The handler should implement `isAuxiliaryActive` and persist ring occupancy in save and client sync data. |

`onBuild` and `onClear` correspond to construction and removal. `serverTick` runs active handlers. `onUnload` revokes runtime registrations on chunk unload and should preserve persistent state. When passing your own runtime progress, implement `saveAdditional/loadAdditional` and `writeUpdateTag/readUpdateTag` separately. To inspect built megastructures, call `getOption` by stable ID, which continues restoring structures after celestial body evolution; build menus use `getOptions` to re-evaluate prerequisites. [Megastructure builder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java) · [Handler lifecycle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java) · [Registration & restoration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java)
