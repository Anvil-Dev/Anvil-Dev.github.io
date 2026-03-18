---
prev:
   text: Network Module
   link: /en/posts/docs/anvillib/04_network
next:
   text: Moveable Entity Block Module
   link: /en/posts/docs/anvillib/06_moveable_entity_block
---

# Recipe Module (In-World Recipe)

The Recipe module provides a complete **In-World Recipe** system, allowing mod developers to define recipes that trigger
and execute in the world itself (rather than in a crafting table). Typical use cases include: items falling under an
anvil, explosions triggering synthesis, mobs stepping on items, and more.

## I. Recipe Components

An `InWorldRecipe` consists of four parts:

| Component     | Interface          | Description                                              |
|---------------|--------------------|----------------------------------------------------------|
| **Trigger**   | `IRecipeTrigger`   | Trigger condition — determines when recipe matching runs |
| **Predicate** | `IRecipePredicate` | Conditions the world must meet for the recipe to match   |
| **Outcome**   | `IRecipeOutcome`   | Actions executed when the recipe succeeds                |
| **Priority**  | `IPrioritized`     | Priority — higher values are matched first               |

## II. Built-in Implementations

### Triggers

The framework provides a trigger registry mechanism via `LibRegistries.TRIGGER_REGISTRY`. Mods register their own
triggers (e.g., the anvil-falling trigger used by AnvilCraft) from upstream.

### Predicates

Built-in predicates for checking world state during recipe matching:

| Class                | Description                                                      |
|----------------------|------------------------------------------------------------------|
| `HasItem`            | Checks if a specific item exists within a range (item predicate) |
| `HasItemIngredient`  | Checks if items in range match an Ingredient                     |
| `HasBlock`           | Checks the block state at a specific offset position             |
| `HasBlockIngredient` | Checks if a block matches a BlockIngredient                      |

### Outcomes

Built-in outcomes:

| Class              | Description                                               |
|--------------------|-----------------------------------------------------------|
| `SpawnItem`        | Spawns item entities at a position, with chance and count |
| `SetBlock`         | Sets a block at a position (with optional NBT data)       |
| `ProduceExplosion` | Creates an explosion at a position                        |
| `ChooseOneOutcome` | Randomly picks one outcome from a weighted list           |

## III. Datapack JSON Structure

InWorldRecipe is fully datapack-driven. JSON files are placed at:

```
data/<namespace>/recipe/<name>.json
```

### Base JSON Structure

```json
{
  "type": "anvillib:in_world",
  "icon": { "id": "minecraft:anvil" },
  "trigger": "anvilcraft:falling_anvil",
  "priority": 0,
  "compatible": false,
  "max_efficiency": 2147483647,
  "predicates": [
    {
      "type": "anvillib:has_item",
      "offset": [0.0, -1.0, 0.0],
      "range": [0.5, 0.5, 0.5],
      "item": {
        "items": ["minecraft:iron_ingot"],
        "count": { "min": 3 }
      }
    }
  ],
  "outcomes": [
    {
      "type": "anvillib:spawn_item",
      "item": { "id": "minecraft:iron_block" },
      "count": 1,
      "offset": [0.0, 0.0, 0.0]
    }
  ]
}
```

| Field            | Type      | Description                                                             |
|------------------|-----------|-------------------------------------------------------------------------|
| `type`           | String    | Recipe type, always `anvillib:in_world`                                 |
| `icon`           | ItemStack | Icon item for display in JEI/REI                                        |
| `trigger`        | String    | Trigger resource location (registered by upstream mod)                  |
| `priority`       | int       | Priority (default `0`); higher = matched first                          |
| `compatible`     | boolean   | If true, allows coexistence with other recipes sharing the same trigger |
| `max_efficiency` | int       | Maximum efficiency cap                                                  |
| `predicates`     | Array     | List of predicate conditions                                            |
| `outcomes`       | Array     | List of outcomes to execute                                             |

## IV. Using the Data Generator

`InWorldRecipeBuilder` provides a fluent API for programmatically building recipes during data generation:

```java
import dev.anvilcraft.lib.v2.recipe.builder.InWorldRecipeBuilder;
import dev.anvilcraft.lib.v2.recipe.predicate.item.HasItem;
import dev.anvilcraft.lib.v2.recipe.outcome.SpawnItem;

// Build a recipe: compress 3 iron ingots into 1 iron block
InWorldRecipeBuilder.create(MY_TRIGGER)
    .hasItem(
        HasItem.builder()
            .offset(0, -1, 0)
            .range(0.5, 0.5, 0.5)
            .items(Items.IRON_INGOT)
            .count(MinMaxBounds.Ints.atLeast(3))
            .build()
    )
    .spawnItem(
        SpawnItem.builder()
            .item(Items.IRON_BLOCK)
            .count(1)
            .build()
    )
    .save(output, ResourceLocation.fromNamespaceAndPath("my_mod", "iron_compress"));
```

### `InWorldRecipeBuilder` Common Methods

| Method                                 | Description                         |
|----------------------------------------|-------------------------------------|
| `InWorldRecipeBuilder.create(trigger)` | Create builder with a given trigger |
| `.hasItem(HasItem)`                    | Add an item predicate               |
| `.hasBlock(HasBlock)`                  | Add a block predicate               |
| `.spawnItem(SpawnItem)`                | Add a spawn-item outcome            |
| `.setBlock(SetBlock)`                  | Add a set-block outcome             |
| `.priority(int)`                       | Set the priority                    |
| `.compatible(boolean)`                 | Set compatible mode                 |
| `.icon(ItemStack)`                     | Set the recipe icon                 |
| `.save(output, id)`                    | Output the recipe JSON              |

## V. Custom Predicates

Implement `IRecipePredicate<P>` and register with `LibRegistries.PREDICATE_TYPE_REGISTRY`:

```java
public class MyPredicate implements IRecipePredicate<MyPredicate> {

    public static final MapCodec<MyPredicate> CODEC = ...;

    @Override
    public Type<MyPredicate> getType() {
        return MyRecipePredicateTypes.MY_PREDICATE.get();
    }

    @Override
    public boolean test(InWorldRecipeContext context) {
        // Return true if the condition is met
        return true;
    }

    public static class Type implements IRecipePredicate.Type<MyPredicate> {
        @Override
        public MapCodec<MyPredicate> codec() { return CODEC; }
    }
}
```

## VI. Custom Outcomes

Implement `IRecipeOutcome<O>` and register with `LibRegistries.OUTCOME_TYPE_REGISTRY`:

```java
public class MyOutcome implements IRecipeOutcome<MyOutcome> {

    @Override
    public Type<MyOutcome> getType() {
        return MyRecipeOutcomeTypes.MY_OUTCOME.get();
    }

    @Override
    public void accept(InWorldRecipeContext context) {
        ServerLevel level = context.getLevel();
        Vec3 pos = context.getPos();
        // Execute outcome logic...
    }
}
```

## VII. `InWorldRecipeContext`

`InWorldRecipeContext` is the context object passed during recipe execution:

| Method                      | Description                                  |
|-----------------------------|----------------------------------------------|
| `getLevel()`                | Get the `ServerLevel`                        |
| `getPos()`                  | Get the trigger position (`Vec3`)            |
| `computeIfAbsent(key)`      | Get or create a cache (e.g., `ItemCache`)    |
| `putAcceptor(id, acceptor)` | Register a cache committer                   |
| `getFloat(NumberProvider)`  | Evaluate a `NumberProvider` to a float value |

## VIII. Chance System

Outcome classes return a `NumberProvider` from `chance()`. The `acceptWithChance(context)` method handles probability
resolution automatically:

```json
{
  "type": "anvillib:spawn_item",
  "item": { "id": "minecraft:diamond" },
  "chance": { "type": "minecraft:uniform", "min": 0.0, "max": 1.0 }
}
```

## IX. Notes

- The Recipe module is only a framework — **the actual trigger firing logic** (e.g., listening for an anvil falling) is
  implemented by the upstream mod (e.g., AnvilCraft);
- The `trigger` field in a recipe JSON must be the ResourceLocation of a trigger registered in
  `LibRegistries.TRIGGER_REGISTRY`;
- `ChooseOneOutcome` supports weighted random selection among multiple outcomes;
- Recipes with equal priority are not guaranteed to match in any fixed order.

