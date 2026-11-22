# Multiblock Definitions and Expression Functions

AnvilCraft provides named structures and callable functions to AnvilLib. Non-empty symbols in structures must have corresponding mappings, and function parameter names must match references in the expression body.

## `definitions`

File path: `data/anvilcraft/anvillib/definitions/fluid_tank.json`.

```json
{
  "grid": [
    [
      "AAA",
      "A A",
      "AAA"
    ],
    [
      "A A",
      " 0 ",
      "A A"
    ],
    [
      "AAA",
      "A A",
      "AAA"
    ]
  ],
  "mapping": {
    "0": {
      "blocks": "anvilcraft:fluid_tank"
    },
    "A": {
      "blocks": "anvilcraft:menger_sponge"
    }
  }
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/anvillib/definitions/fluid_tank.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `grid` | Array | Character rows grouped by layer |
| `mapping` | Object | Map from character to match condition |

## `function`

File path: `data/anvilcraft/anvillib/function/double.json`.

```json
{
  "type": "anvillib:custom",
  "body": "$(a)*2",
  "parameters": [
    "a"
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/anvillib/function/double.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `type` | String | Registered ID selecting the sub-format |
| `body` | String | Expression function body |
| `parameters` | Array | Formal parameter names of the function |
