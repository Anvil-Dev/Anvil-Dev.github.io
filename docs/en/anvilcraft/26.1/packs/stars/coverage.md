# Track Coverage Validation and Reloading

The server reads tracks, events, and the coverage manifest together, validating all references in temporary data before replacing the active evolution library. On load failure, logs contain `Invalid stellar resources` and the current evolution library remains active.

The coverage manifest uses the fixed path `data/anvilcraft/stellar_track_coverage.json`. `tracks` on the root object is a required array; each entry's `trackId` (string), `massAnvils` (integer), and `startingNodes` (map from string to node ID) must match the track definition exactly. Each track corresponds to exactly one entry.

Below is one entry from the manifest.

```json
{
  "trackId": "mass_41",
  "massAnvils": 41,
  "startingNodes": {
    "BROWN_DWARF": "brown_dwarf_cooling"
  }
}
```

[Full coverage manifest](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/stellar_track_coverage.json) · [StellarTrackLibrary.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java)
