# Stellar Dynamic Control Points

`dynamics` inside a phase describes how physical quantities vary with progress. Each control point specifies radius, temperature, luminosity, and envelope. The `response` object adjusts offsets caused by metallicity.

The resource location is `data/anvilcraft/stellar_tracks.json`. The resource manager selects the highest-priority complete file by fixed filename. Copy the entire table from the built-in file before editing.

## Built-in Entry Example

```json
{
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
```

[File containing all entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/stellar_tracks.json)

## StellarNodeDynamics

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `points` | `StellarControlPoint.CODEC` array | Required | Control points ordered by progress [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L15) |
| `response` | `StellarMetallicityResponse.CODEC` | Optional, default `StellarMetallicityResponse.NONE` | Metallicity response [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L16) |
| `eventPolicy` | `EventPolicy.CODEC` | Optional, default `EventPolicy.VISUAL` | Event trigger policy [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L18) |
| `pulses` | Integer `1 to 16` | Optional, default `1` | Pulse count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L19) |
| `wind` | Number `0 to 1` | Optional, default `0.0f` | Wind strength [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L20) |

## StellarControlPoint

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `progress` | Number `0 to 1` | Required | Control point position within the phase [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L12) |
| `radius` | Number `0.001f to 10000` | Required | Radius parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L13) |
| `temperature` | Number `100 to 200000` | Required | Temperature parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L14) |
| `luminosity` | Number `0.0001f to 10000000` | Required | Luminosity [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L15) |
| `envelope` | Number `0 to 1` | Required | Envelope fraction [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L16) |
| `minimumTemperature` | Number `100 to 200000` | Optional, default `100.0f` | Minimum temperature [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L17) |
| `maximumTemperature` | Number `100 to 200000` | Optional, default `200000.0f` | Maximum temperature [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L19) |

## StellarMetallicityResponse

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `duration` | Number `-0.5f to 0.5f` | Optional, default `0.0f` | Duration [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L13) |
| `radius` | Number `-0.5f to 0.5f` | Optional, default `0.0f` | Radius parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L14) |
| `temperature` | Number `-0.5f to 0.5f` | Optional, default `0.0f` | Temperature parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L15) |
| `luminosity` | Number `-0.5f to 0.5f` | Optional, default `0.0f` | Luminosity [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L16) |
| `wind` | Number `-0.5f to 0.5f` | Optional, default `0.0f` | Wind strength [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L17) |
| `amplitude` | Number `-0.5f to 0.5f` | Optional, default `0.0f` | Amplitude adjustment [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L18) |
| `minimumPulses` | Integer `1 to 16` | Optional, default `1` | Minimum pulse count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L19) |
| `maximumPulses` | Integer `1 to 16` | Optional, default `1` | Maximum pulse count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L20) |

[StellarTrackLibrary.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java)
