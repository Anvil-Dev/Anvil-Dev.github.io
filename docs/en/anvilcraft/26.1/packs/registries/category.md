# Storage Terminal Categories

Add optional categories to storage networks using `data/<namespace>/anvilcraft/category/<name>.json`. `type` on the root object selects the classification algorithm. Sub-entries in composite categories can reference registered IDs, and namespace categories filter by source mod. This dynamic registry is read and synced when loading a world.

## Usage Example

```json
{
  "type": "anvilcraft:namespace",
  "icon": {
    "id": "anvilcraft:royal_anvil"
  },
  "name": {
    "translate": "category.anvilcraft.namespace",
    "with": [
      {
        "mod_id": "anvilcraft"
      }
    ]
  },
  "namespace": "anvilcraft"
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/anvilcraft/category/anvilcraft.json)

## Types & Fields

### `anvilcraft:block`

The type itself determines all behavior; only the dispatch ID is needed.

[BlockCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java)

### `anvilcraft:enchanted`

The type itself determines all behavior; only the dispatch ID is needed.

[EnchantedCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java)

### `anvilcraft:unstackable`

The type itself determines all behavior; only the dispatch ID is needed.

[UnstackableCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java)

### `anvilcraft:and`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack template object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L52) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L55) |
| `categories` | `ICategory.CODEC` array | Required | Categories participating in composite matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L59) |

[AndCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java)

### `anvilcraft:or`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack template object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L52) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L55) |
| `categories` | `ICategory.CODEC` array | Required | Categories participating in composite matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L59) |

[OrCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java)

### `anvilcraft:has_component`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack template object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L216) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L219) |
| `predicates` | `DataComponentPredicate.CODEC.xmap(HashMap::new, HashMap::new).xmap(ImmutableMap::copyOf, HashMap::new)` | Optional, default `ImmutableMap.of()` | Predicate list for matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L224) |
| `match_type` | `MatchType.CODEC` | Optional, default `MatchType.OR` | How predicates are combined [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L227) |

[HasComponentCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java)

### `anvilcraft:namespace`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack template object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L54) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L57) |
| `namespace` | String | Required | Namespace to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L60) |

[NamespaceCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java)

### `anvilcraft:creative_mode_tab`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack template object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L84) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L87) |
| `key` | `ResourceKey.codec(Registries.CREATIVE_MODE_TAB)` | Required | Registry key [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L90) |

[CreativeModeTabCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java)

### `anvilcraft:recipe_book_category`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack template object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L71) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L74) |
| `key` | `ResourceKey.codec(Registries.RECIPE_BOOK_CATEGORY)` | Required | Registry key [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L77) |

[RecipeBookCategoryCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java)

### `anvilcraft:filter`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack template object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L47) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L50) |
| `filter` | `FilterContent.CODEC` | Required | Item filter condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L53) |

[FilterCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java)

### `anvilcraft:fluid`

The type itself determines all behavior; only the dispatch ID is needed.

[FluidCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java)

[ModCategoryTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java)
