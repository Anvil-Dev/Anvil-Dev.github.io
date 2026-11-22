# Stellar Event Profiles

The root of the event file is an array, with each object identified by `profileId`. A phase's `eventProfileId` references IDs here. The loader rejects duplicate IDs, references without matching profiles, and unreachable terminal events.

The resource location is `data/anvilcraft/stellar_event_profiles.json`. The resource manager selects the highest-priority complete file by fixed filename. Copy the entire table from the built-in file before editing.

## Built-in Entry Example

```json
{
  "profileId": "HELIUM_FLASH",
  "precursorTicks": 4,
  "collapseTicks": 4,
  "ejectaTicks": 0,
  "fadeTicks": 12,
  "coreRadiusCurve": [
    1.0,
    0.82,
    1.05
  ],
  "ejectaRadiusCurve": [
    0.0,
    0.0
  ],
  "peakEmission": 1.8,
  "palette": [
    16773280,
    16777215
  ],
  "shellCount": 1,
  "rayCount": 0,
  "rayLength": 0.0,
  "asymmetry": 0.0,
  "remnantKind": "none"
}
```

[File containing all entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/stellar_event_profiles.json)

## StellarEventProfile

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `profileId` | String | Required | Unique ID of the event profile [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L65) |
| `precursorTicks` | Integer | Required | Precursor phase tick count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L66) |
| `collapseTicks` | Integer | Required | Collapse phase tick count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L67) |
| `ejectaTicks` | Integer | Required | Ejecta phase tick count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L68) |
| `fadeTicks` | Integer | Required | Fade phase tick count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L69) |
| `coreRadiusCurve` | Number array | Required | Core radius curve samples [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L70) |
| `ejectaRadiusCurve` | Number array | Required | Ejecta radius curve samples [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L71) |
| `peakEmission` | Number | Required | Peak emission intensity [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L72) |
| `palette` | Integer array | Required | Color value array [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L73) |
| `shellCount` | Integer | Required | Shell count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L74) |
| `rayCount` | Integer | Required | Ray count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L75) |
| `rayLength` | Number | Required | Ray length [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L76) |
| `asymmetry` | Number | Required | Asymmetry degree [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L77) |
| `remnantKind` | `RemnantKind.CODEC` | Required | Remnant kind left by the event [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L78) |

[StellarTrackLibrary.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java)
