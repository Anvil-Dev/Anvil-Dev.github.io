# Multiblock Recipe

Multiblock recipes are used to define complex multiblock structures and produce items at their center.

## Basic Structure

```json
{
  "type": "anvilcraft:multiblock",
  "pattern": {
    "layers": [
      ["   ", " B ", "   "],
      ["BAB", "A A", "BAB"],
      ["BBB", "BBB", "BBB"]
    ],
    "symbols": {
      "A": {
        "predicate": {
          "blocks": "minecraft:iron_block"
        }
      },
      "B": {
        "predicate": {
          "blocks": "minecraft:gold_block"
        }
      }
    }
  },
  "result": {
    "id": "minecraft:diamond",
    "count": 1
  }
}
```

## Field Description

### type

Fixed value `anvilcraft:multiblock`, identifies this as a multiblock recipe.

### pattern

Defines the shape and composition of the multiblock structure:

- `layers`: Array of string arrays representing layers, each layer is a 2D character grid
- `symbols`: Mapping between characters and block predicates

#### layers

Each layer consists of string arrays of equal length, each string represents a row, each character represents a block position:

- Space character indicates no block is needed at that position
- Other characters need corresponding block predicates defined in symbols

#### symbols

Mapping between characters and block predicates:

- Key is the character used in layers
- Value is a block predicate defining the allowed block type at that position

### result

Output item for the recipe:

- `id`: Item ID
- `count`: Item count (optional, defaults to 1)

## Block Predicates

Block predicates are used to define allowed block types at a position:

### Basic Block Predicate

```json
{
  "predicate": {
    "blocks": "minecraft:iron_block"
  }
}
```

### Block Predicate with Properties

```json
{
  "predicate": {
    "blocks": "minecraft:hopper",
    "properties": {
      "facing": "down"
    }
  }
}
```

### Block Tag Predicate

```json
{
  "predicate": {
    "tag": "minecraft:logs"
  }
}
```

## Usage Examples

### Simple 3x3x3 Structure

```json
{
  "type": "anvilcraft:multiblock",
  "pattern": {
    "layers": [
      ["AAA", "AAA", "AAA"],
      ["A A", "A A", "A A"],
      ["AAA", "AAA", "AAA"]
    ],
    "symbols": {
      "A": {
        "predicate": {
          "blocks": "minecraft:iron_block"
        }
      }
    }
  },
  "result": {
    "id": "minecraft:chest",
    "count": 1
  }
}
```

### Complex Structure Example

```json
{
  "type": "anvilcraft:multiblock",
  "pattern": {
    "layers": [
      ["RAR", "A A", "RAR"],
      ["RGR", "G G", "RGR"],
      ["RRR", "RRR", "RRR"]
    ],
    "symbols": {
      "R": {
        "predicate": {
          "blocks": "minecraft:redstone_block"
        }
      },
      "A": {
        "predicate": {
          "blocks": "minecraft:iron_block"
        }
      },
      "G": {
        "predicate": {
          "blocks": "minecraft:gold_block"
        }
      }
    }
  },
  "result": {
    "id": "minecraft:diamond_block",
    "count": 1
  }
}
```

## Notes

1. The center point of the multiblock structure is at the exact center of the structure
2. The structure must match completely to trigger the recipe
3. Space characters indicate no block is needed at that position
4. Symbol definitions must cover all characters used in layers
5. There's no strict limit on structure size, but it's recommended to keep it reasonable for performance
