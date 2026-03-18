---
prev:
   text: Multiblock Recipe
   link: /en/posts/docs/kubejs/13_multiblock_recipe
next:
   text: Jewel Crafting Recipe
   link: /en/posts/docs/kubejs/15_jewel_crafting_recipe
---

# Mob Transform Recipe

The Mob Transform recipe allows you to define transformation rules between mob entities, including complex
transformations based on tag conditions.

## Basic Structure

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:mob_transform",
    input: "minecraft:cow",
    results: [
      {
        entity: "minecraft:pig",
        probability: 1.0
      }
    ],
    tagPredicates: [],
    tagModifications: [],
    transformOptions: []
  })
})
```

### Utility Methods

```js
ServerEvents.recipes(event => {
  // Mob transform recipe - different constructor parameter combinations
  event.recipes.anvilcraft.mob_transform("anvilcraft:cow_to_pig") // ID only
  
  event.recipes.anvilcraft.mob_transform(
    "minecraft:cow",                       // Input mob
    [{ entity: "minecraft:pig", probability: 1.0 }] // Transform results
  )
  
  // Full version with predicates, modifications, and options
  event.recipes.anvilcraft.mob_transform(
    "anvilcraft:cow_to_pig_advanced",     // Recipe ID
    "minecraft:cow",                       // Input mob
    [{ entity: "minecraft:pig", probability: 1.0 }], // Transform results
    [],                                   // Tag predicates
    [],                                   // Tag modifications
    []                                    // Transform options
  )
})
```

## KubeJS Style Builder

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mob_transform()
    .input("minecraft:cow")              // Input mob
    .addResult("minecraft:pig", 1.0)     // Add transform result (mob, probability)
})
```

## Parameter Descriptions

### input (Input Mob)

The original mob entity type to be transformed, such as "minecraft:cow".

### results (Transform Results)

List of possible transformation results:

- `entity`: Target mob entity type
- `probability`: Transformation probability (0.0 to 1.0)

### tagPredicates (Tag Predicates)

Conditions for triggering the transformation, based on entity NBT tag values.

### tagModifications (Tag Modifications)

Modifications to entity NBT tags after transformation.

### transformOptions (Transform Options)

Special options to control transformation behavior.

## Practical Examples

### Basic Transform

```js
ServerEvents.recipes(event => {
  // Transform cow into pig
  event.recipes.anvilcraft.mob_transform()
    .input("minecraft:cow")
    .addResult("minecraft:pig")
})
```

### Transform with Probability

```js
ServerEvents.recipes(event => {
  // Transform cow into pig (70% probability) or sheep (30% probability)
  event.recipes.anvilcraft.mob_transform()
    .input("minecraft:cow")
    .addResult("minecraft:pig", 0.7)
    .addResult("minecraft:sheep", 0.3)
})
```

### Conditional Transform

```js
ServerEvents.recipes(event => {
  // Only transform when entity has specific tag
  event.recipes.anvilcraft.mob_transform()
    .input("minecraft:zombie")
    .addResult("minecraft:skeleton")
    .predicate(p => p.numericTag("Health").greaterThan(10))  // When health > 10
})
```

### Modify Entity Tags

```js
ServerEvents.recipes(event => {
  // Transform and modify entity tags
  event.recipes.anvilcraft.mob_transform()
    .input("minecraft:pig")
    .addResult("minecraft:cow")
    .modification(m => m.set("CustomName", '"Transformed Cow"'))  // Set custom name
})
```

### Using Transform Options

```js
ServerEvents.recipes(event => {
  // Using transform options
  event.recipes.anvilcraft.mob_transform()
    .input("minecraft:chicken")
    .addResult("minecraft:bat")
    .transformOption("PRESERVE_EQUIPMENT")  // Preserve equipment
    .transformOption("COPY_POSITION")       // Copy position
})
```

## Advanced Usage

### Complex Tag Conditions

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mob_transform()
    .input("minecraft:skeleton")
    .addResult("minecraft:wither_skeleton")
    .predicate(p => p.numericTag("Health").greaterThan(15))
    .predicate(p => p.distanceToNearestPlayer().lessThan(5))
    .modification(m => m.set("HandItems", "[{id: 'minecraft:stone_sword', Count: 1b}]"))
})
```

### Multiple Results and Complex Logic

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mob_transform()
    .input("minecraft:villager")
    .addResult("minecraft:witch", 0.3)
    .addResult("minecraft:evoker", 0.2)
    .addResult("minecraft:vindicator", 0.5)
    .predicate(p => p.numericTag("Health").lessThan(10))
    .transformOption("PRESERVE_EQUIPMENT")
})
```

## Available Predicate Conditions

- `numericTag(tagName)`: Access numeric NBT tag
    - `.greaterThan(value)`: Greater than specified value
    - `.lessThan(value)`: Less than specified value
    - `.equals(value)`: Equals specified value
    - `.between(min, max)`: Within specified range

- `distanceToNearestPlayer()`: Distance to nearest player
    - Supports the same comparison methods as numeric tags

## Available Tag Modifications

- `set(tagName, value)`: Set NBT tag value
- `add(tagName, value)`: Add to numeric tag value
- `multiply(tagName, value)`: Multiply numeric tag value
- `remove(tagName)`: Remove tag

## Available Transform Options

- `PRESERVE_EQUIPMENT`: Preserve equipment
- `COPY_POSITION`: Copy position
- `COPY_NAME`: Copy name
- `PRESERVE_EFFECTS`: Preserve effects
