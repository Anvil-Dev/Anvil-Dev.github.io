# Loading Tracks and Selecting Starting Nodes

When an add-on machine needs to preview whether a star can participate in evolution, select a track using mass tier, current surface classification, and the special red dwarf flag. The mass unit is the anvil coordinate used by the celestial menu, where integer `49` corresponds to the built-in solar track `mass_49`. A single selection does not start, reserve, or save evolution progress. [Track selection implementation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L65)

On server reload, the listener reads `anvilcraft:stellar_tracks.json`, `anvilcraft:stellar_event_profiles.json`, and `anvilcraft:stellar_track_coverage.json` after the resource prepare barrier, falling back to built-in files for any missing resource. All three tables are decoded together; the active library is replaced only when event references, initial surface class entries, terminal nodes, all 24 mass tiers, and coverage relationships all validate. If editing any table fails validation, the reason is logged and the existing library remains usable. Machines already running advance from their own track and event snapshots. [Reload entrypoint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ReloadEventListener.java#L15) · [Library publish boundary](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L225) · [Data pack fields](../packs/stars/)

The previewer below can be called when validating add-on machine inputs or generating debug reports. Returns empty if no valid track exists. The index in the report can be used directly to read `phaseNodes()` on that track.

```java
package dev.example.celestial;

import dev.dubhe.anvilcraft.block.entity.celestial.CelestialBodyClass;
import dev.dubhe.anvilcraft.block.entity.celestial.StellarTrack;
import dev.dubhe.anvilcraft.block.entity.celestial.StellarTrackLibrary;
import java.util.Optional;

public final class StellarPreview {
    public record Start(String track, int node, String terminal) {}

    public static Optional<Start> inspect(int mass, CelestialBodyClass surface,
                                          boolean specialRedDwarf, long bodySeed) {
        StellarTrack track = StellarTrackLibrary.select(mass, surface, specialRedDwarf, bodySeed);
        if (track == null) return Optional.empty();
        int node = StellarTrackLibrary.startingPhaseIndex(track, surface);
        return Optional.of(new Start(track.trackId(), node, track.definition().terminal().kind().id()));
    }
}
```

| Interface | Parameters & Return | Usage Boundaries |
| --- | --- | --- |
| `canStart(mass, surfaceClass, specialRedDwarf)` | Returns whether this combination has an entry | Special red dwarfs return `false`; tier 41 accepts only brown dwarfs; tiers 42–64 accept only main-sequence, giant, and supergiant surface classes listed in the library. |
| `select(initialMass, surfaceClass, specialRedDwarf, seed)` | Returns track or `null` | Selects strictly by tier; passing different seeds does not switch the same mass to another track. The overload omitting the special red dwarf parameter defaults to `false`. |
| `track(id)`, `forMass(initialMassAnvils)` | The former queries by ID and allows `null`; the latter queries by `mass_<tier>` | `forMass` throws `IllegalArgumentException` if the tier is not found. |
| `startingPhaseIndex(track, surfaceClass)` | Returns the starting node index for that classification | Reads `definition().startingNodes()`; throws if the entry is missing. |
| `replaceTracks(tracks)`, `replaceTracksFromJson(json)` | Re-validates the full track set against the existing event table | The Java entrypoint passes exceptions to the caller, while the JSON entrypoint logs errors and returns `false`; both require the full set of mass tiers. |
