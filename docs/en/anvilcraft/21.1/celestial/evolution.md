# Finding the Starting Phase of Stellar Evolution

When a star chart UI needs to show which evolution segment a star starts at, filter by mass and surface class first, then read the entry node from the track. The method below works both after a player selects a candidate body and when regenerating previews after a data reload.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.celestial.CelestialBodyClass;
import dev.dubhe.anvilcraft.block.entity.celestial.StellarTrack;
import dev.dubhe.anvilcraft.block.entity.celestial.StellarTrackLibrary;
import java.util.Optional;

public final class EvolutionPreview {
    public record Entry(String trackId, int startingNode) {}

    public static Optional<Entry> find(int mass, CelestialBodyClass surface, boolean specialRedDwarf) {
        if (!StellarTrackLibrary.canStart(mass, surface, specialRedDwarf)) return Optional.empty();
        StellarTrack track = StellarTrackLibrary.track("mass_" + mass);
        if (track == null) return Optional.empty();
        int node = StellarTrackLibrary.startingPhaseIndex(track, surface);
        return Optional.of(new Entry(track.trackId(), node));
    }
}
```

| Signature | Semantics & Boundaries |
| --- | --- |
| `canStart(mass, surface, specialRedDwarf)` | Special red dwarfs always return `false`. Mass 41 accepts only `BROWN_DWARF`. Masses 42–64 accept evolvable main-sequence, giant, and supergiant classes. |
| `track(id)`, `forMass(int)` | The former returns `null` if missing; the latter looks up `mass_N` and throws `IllegalArgumentException` if missing. `tracks()` lists current tracks in ascending mass order. |
| `select(mass, surface, specialRedDwarf, seed)` | Returns `null` if starting prerequisites are not met; otherwise delegates to `forMass`. The signature keeps `seed`, while this selection path picks the track by mass. |
| `startingPhaseIndex(track, surface)` | Reads `startingNodes` from the track definition and looks up the node index. Throws if the entry for that class is missing or the referenced node does not exist. |
| `track.resolve(coordinate, surface)` | Returns the track resolved at the metallicity coordinate. The coordinate must be finite and between `-1` and `1`. |
| `eventProfiles()`, `eventProfile(id)` | The former fetches current event definitions; the latter fetches by ID and throws on unknown IDs. |

Server resource reload calls `StellarTrackLibrary.reload` after the prepare barrier. The entire library is replaced only if tracks, events, and coverage matrices all validate; on failure, the previous data is preserved. For long-lived caches, store the stable track ID and look it up again on next use. `replaceTracksFromJson` is suitable for replacing the entire track set at once and returns `false` on failure; `validateTracks()` returns an empty string on success. [Track library & validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java) · [Node resolution](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java) · [Reload order](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java)
