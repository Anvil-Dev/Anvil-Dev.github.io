# Charger Charging Recipe

Charger/discharger recipes define energy processing behavior for items.

## Basic Structure

```json
{
  "type": "anvilcraft:charger_charging",
  "ingredient": {
    "item": "minecraft:redstone"
  },
  "result": {
    "id": "minecraft:glowstone_dust",
    "count": 1
  },
  "power": -120,
  "time": 40
}
```

## Field Description

- `type`: Fixed value `anvilcraft:charger_charging`
- `ingredient`: Input item condition
- `result`: Output item
- `power`: Power value (negative=charge, positive=discharge)
- `time`: Processing time in ticks

## Notes

- `power` cannot be `0`
- `time` must be greater than `0`

