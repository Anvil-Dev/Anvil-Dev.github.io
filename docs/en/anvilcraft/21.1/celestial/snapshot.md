# Copying Celestial Snapshots to Disks or Singularity Crystals

When saving an already discovered celestial body, obtain the snapshot defined by the anvil via `storeDiskData`, then write it back to a valid carrier using `CelestialSnapshotCodec`. Below is an item preview helper that returns a new item stack, leaving replacement of the original slot to the caller after server-side confirmation.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import dev.dubhe.anvilcraft.block.entity.celestial.CelestialSnapshotCodec;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.item.ItemStack;
import java.util.Optional;

public final class CelestialArchive {
    public static Optional<ItemStack> copyIntoEmptyCarrier(
        CelestialForgingAnvilBlockEntity anvil, ItemStack carrier
    ) {
        if (carrier.isEmpty() || CelestialSnapshotCodec.load(carrier) != null) return Optional.empty();
        CompoundTag snapshot = new CompoundTag();
        anvil.storeDiskData(snapshot);
        if (!snapshot.contains("celestialBody")) return Optional.empty();
        ItemStack copy = carrier.copyWithCount(1);
        CelestialSnapshotCodec.save(copy, snapshot);
        return CelestialSnapshotCodec.load(copy) == null ? Optional.empty() : Optional.of(copy);
    }
}
```

| Call | Carrier, Return & Boundaries |
| --- | --- |
| `storeDiskData(CompoundTag out)` | Writes the current celestial body, seed, age in anvils, stellar mass, anvil count, and related state into `out`. Does not write `celestialBody` when no body is present. |
| `extract(ItemStack)`, `load(ItemStack)` | Both read the same carriers. Disks read the `DISK_DATA` root object; singularity crystals read from `CUSTOM_DATA.celestialSnapshot`. Returns `null` if `celestialBody` is missing or the item does not match. Returns a copy on success. |
| `save(ItemStack, CompoundTag)` | Returns `void`. Disk data merges with the existing root object. Snapshots containing a black hole or neutron star skip writing to disks. Singularity crystals copy existing `CUSTOM_DATA` and replace the snapshot inside; other item types are skipped. |

The example above requires the carrier to have no existing celestial body so read-back can verify whether writing succeeded. If overwriting is allowed while an old snapshot is present, `load(...) != null` alone cannot tell whether the write succeeded. When preserving original snapshot fields for save migration, continue using the anvil's normal import flow. [Snapshot codec](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java) · [Anvil read/write entrypoint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java)
