# Evolution Tracks & Phases

Each track references node IDs for entry phases, and terminal phases can also bind events. All 24 tracks corresponding to masses 41 to 64 must be preserved, with IDs from `mass_41` to `mass_64`. Mass 41 uses the brown dwarf entry.

The resource location is `data/anvilcraft/stellar_tracks.json`. The resource manager selects the highest-priority complete file by fixed filename. Copy the entire table from the built-in file before editing.

## Built-in Entry Example

```json
{
  "trackId": "mass_41",
  "definition": {
    "version": 3,
    "massAnvils": 41,
    "startingNodes": {
      "BROWN_DWARF": "brown_dwarf_cooling"
    },
    "terminal": {
      "kind": "keep",
      "massAnvils": 41,
      "solarMass": 0.063,
      "size": 24
    },
    "metallicity": {
      "minimum": 0.1,
      "maximum": 2.5,
      "solarZ": 0.014
    }
  },
  "terminalProfile": "",
  "phaseNodes": [
    {
      "nodeId": "brown_dwarf_cooling",
      "phaseId": "brown_dwarf_cooling",
      "durationWeight": 93.6,
      "radius": 0.185804,
      "temperature": 900,
      "luminosity": 0.00091,
      "envelopeFraction": 1,
      "pulsationAmplitude": 0,
      "pulsationFrequency": 0,
      "surfaceStyle": "brown_dwarf_cooling",
      "eventProfileId": "",
      "dynamics": {
        "response": {
          "duration": 0.1,
          "radius": 0.08,
          "temperature": -0.06,
          "luminosity": -0.1,
          "wind": 0.18,
          "amplitude": 0.12,
          "minimumPulses": 1,
          "maximumPulses": 1
        },
        "eventPolicy": "visual",
        "pulses": 1,
        "wind": 0,
        "points": [
          {
            "progress": 0,
            "radius": 0.218594,
            "temperature": 1700,
            "luminosity": 0.009097,
            "envelope": 1
          },
          {
            "progress": 1,
            "radius": 0.185804,
            "temperature": 900,
            "luminosity": 0.00091,
            "envelope": 1
          }
        ]
      }
    }
  ]
}
```

[File containing all entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/stellar_tracks.json)

## StellarTrack

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `trackId` | String | Required | Track ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L16) |
| `surfaceClassFamily` | String | Optional, default `""` | Surface class family [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L17) |
| `phaseNodes` | `PhaseNode.CODEC` array | Required | Phase nodes traversed in order [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L18) |
| `terminalProfile` | String | Optional, default `""` | Terminal event profile ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L19) |
| `definition` | `StellarTrackDefinition.CODEC` | Required | Track entries and terminal body [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L20) |

## StellarTrackDefinition

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `version` | Integer `3 to 3` | Required | Schema version of this track definition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L14) |
| `massAnvils` | Integer `41 to 64` | Required | Mass in anvils [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L15) |
| `startingNodes` | String-to-string object | Required | Map from surface class to entry node ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L16) |
| `terminal` | `StellarTerminal.CODEC` | Required | Body left after evolution completes [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L18) |
| `metallicity` | `StellarMetallicity.CODEC` | Optional, default `StellarMetallicity.DEFAULT` | Metallicity range and scale [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L19) |

## StellarTerminal

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `kind` | `Kind.CODEC` | Required | Terminal kind [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L10) |
| `massAnvils` | Integer `0 to 64` | Required | Mass in anvils [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L11) |
| `solarMass` | Number `0 to 181` | Required | Mass in solar masses [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L12) |
| `size` | Integer `1 to 64` | Required | Size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L13) |

## PhaseNode

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `phaseId` | `StellarEvolutionPhase.CODEC` | Required | Evolution phase identifier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L24) |
| `durationWeight` | Number | Required | Relative duration of this phase [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L25) |
| `radius` | Number | Required | Radius parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L26) |
| `temperature` | Number | Required | Temperature parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L27) |
| `luminosity` | Number | Required | Luminosity [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L28) |
| `envelopeFraction` | Number | Required | Envelope fraction [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L29) |
| `pulsationAmplitude` | Number | Required | Pulsation amplitude [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L30) |
| `pulsationFrequency` | Number | Required | Pulsation frequency [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L31) |
| `surfaceStyle` | String | Optional, default `"default"` | Surface style [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L32) |
| `eventProfileId` | String | Optional, default `""` | Referenced event profile ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L33) |
| `nodeId` | String | Required | Node ID within the same track [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L34) |
| `dynamics` | `StellarNodeDynamics.CODEC` | Required | Dynamic control points and pulse behavior [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L35) |

## StellarMetallicity

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `minimum` | Number `0.001 to 10` | Optional, default `0.1` | Minimum allowed value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicity.java#L12) |
| `maximum` | Number `0.001 to 10` | Optional, default `2.5` | Maximum allowed value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicity.java#L13) |
| `solarZ` | Number `0.001 to 0.1` | Optional, default `0.014` | Solar metallicity reference value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicity.java#L14) |

[StellarTrackLibrary.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java)
