# Mob Transform Recipe

Mob transform recipes allow you to define transformation rules between mob entities, including complex transformations based on tag conditions.

## Basic Structure

```json
{
  "type": "anvilcraft:mob_transform",
  "input": "minecraft:cow",
  "results": [
    {
      "entity": "minecraft:pig",
      "probability": 1.0
    }
  ],
  "tagPredicates": [],
  "tagModifications": [],
  "transformOptions": []
}
```

## Field Description

### type

Fixed value `anvilcraft:mob_transform`, identifies this as a mob transform recipe.

### input

The original mob entity type to transform, e.g., "minecraft:cow".

### results

List of possible transformation results:

- `entity`: Target mob entity type
- `probability`: Transformation probability (0.0 to 1.0)

### tagPredicates

Conditions for triggering transformation, based on entity NBT tag values.

### tagModifications

Modifications to entity NBT tags after transformation.

### transformOptions

Special options controlling transformation behavior.

## Tag Predicates

Tag predicates are used to define conditions for triggering transformation, based on entity NBT tag values.

### Numeric Tag Predicate

```json
{
  "tagPath": "Health",
  "comparison": ">",
  "value": 10.0
}
```

Supported comparison operators:

- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal
- `<=`: Less than or equal
- `==`: Equal
- `!=`: Not equal

### Distance Predicate

```json
{
  "type": "distance_to_nearest_player",
  "comparison": "<",
  "value": 5.0
}
```

## Tag Modifications

Tag modifications are used to modify entity NBT tags after transformation.

### Set Tag Value

```json
{
  "operation": "SET",
  "tagPath": "CustomName",
  "value": "{\"text\":\"Transformed Cow\"}"
}
```

### Add to Numeric Tag

```json
{
  "operation": "ADD",
  "tagPath": "Health",
  "value": 10.0
}
```

### Multiply Numeric Tag

```json
{
  "operation": "MULTIPLY",
  "tagPath": "Health",
  "value": 2.0
}
```

### Remove Tag

```json
{
  "operation": "REMOVE",
  "tagPath": "CustomName"
}
```

## Transform Options

Transform options control special aspects of transformation behavior:

- `PRESERVE_EQUIPMENT`: Preserve equipment
- `COPY_POSITION`: Copy position
- `COPY_NAME`: Copy name
- `PRESERVE_EFFECTS`: Preserve effects

## Usage Examples

### Basic Transformation

```json
{
  "type": "anvilcraft:mob_transform",
  "input": "minecraft:cow",
  "results": [
    {
      "entity": "minecraft:pig",
      "probability": 1.0
    }
  ]
}
```

### Transformation with Probability

```json
{
  "type": "anvilcraft:mob_transform",
  "input": "minecraft:cow",
  "results": [
    {
      "entity": "minecraft:pig",
      "probability": 0.7
    },
    {
      "entity": "minecraft:sheep",
      "probability": 0.3
    }
  ]
}
```

### Conditional Transformation

```json
{
  "type": "anvilcraft:mob_transform",
  "input": "minecraft:zombie",
  "results": [
    {
      "entity": "minecraft:skeleton",
      "probability": 1.0
    }
  ],
  "tagPredicates": [
    {
      "tagPath": "Health",
      "comparison": ">",
      "value": 10.0
    }
  ]
}
```

### Modifying Entity Tags

```json
{
  "type": "anvilcraft:mob_transform",
  "input": "minecraft:pig",
  "results": [
    {
      "entity": "minecraft:cow",
      "probability": 1.0
    }
  ],
  "tagModifications": [
    {
      "operation": "SET",
      "tagPath": "CustomName",
      "value": "{\"text\":\"Transformed Cow\"}"
    }
  ]
}
```

### Using Transform Options

```json
{
  "type": "anvilcraft:mob_transform",
  "input": "minecraft:chicken",
  "results": [
    {
      "entity": "minecraft:bat",
      "probability": 1.0
    }
  ],
  "transformOptions": [
    "PRESERVE_EQUIPMENT",
    "COPY_POSITION"
  ]
}
```

### Complex Tag Conditions

```json
{
  "type": "anvilcraft:mob_transform",
  "input": "minecraft:skeleton",
  "results": [
    {
      "entity": "minecraft:wither_skeleton",
      "probability": 1.0
    }
  ],
  "tagPredicates": [
    {
      "tagPath": "Health",
      "comparison": ">",
      "value": 15.0
    },
    {
      "type": "distance_to_nearest_player",
      "comparison": "<",
      "value": 5.0
    }
  ],
  "tagModifications": [
    {
      "operation": "SET",
      "tagPath": "HandItems",
      "value": "[{id: \"minecraft:stone_sword\", Count: 1b}]"
    }
  ]
}
```
