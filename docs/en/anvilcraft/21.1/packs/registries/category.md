# Storage Terminal Categories

Add optional categories to storage networks using `data/<namespace>/anvilcraft/category/<name>.json`. `type` on the root object selects the classification algorithm. Sub-entries in composite categories can reference registered IDs, and namespace categories filter by source mod. This dynamic registry is read and synced when loading a world.

## Usage Example

```json
{
  "type": "anvilcraft:namespace",
  "icon": {
    "count": 1,
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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/anvilcraft/category/anvilcraft.json)

## Types & Fields

### `anvilcraft:block`

The type itself determines all behavior; only the dispatch ID is needed.

[BlockCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java)

### `anvilcraft:enchanted`

The type itself determines all behavior; only the dispatch ID is needed.

[EnchantedCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java)

### `anvilcraft:unstackable`

The type itself determines all behavior; only the dispatch ID is needed.

[UnstackableCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java)

### `anvilcraft:and`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L66) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L69) |
| `categories` | `ICategory.CODEC` array | Required | Categories participating in composite matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L73) |

[AndCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java)

### `anvilcraft:or`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L66) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L69) |
| `categories` | `ICategory.CODEC` array | Required | Categories participating in composite matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L73) |

[OrCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java)

### `anvilcraft:has_component`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L209) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L212) |
| `predicates` | `DataComponentPredicate.CODEC` array | Optional, default `[]` | Predicate list for matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L216) |
| `presence` | `DataComponentType.CODEC` array | Optional, default `[]` | Component types checked by presence [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L220) |
| `match_type` | `MatchType.CODEC` | Optional, default `MatchType.OR` | How predicates are combined [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L223) |

[HasComponentCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java)

### `anvilcraft:namespace`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L73) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L76) |
| `namespace` | String | Required | Namespace to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L79) |

[NamespaceCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java)

### `anvilcraft:creative_mode_tab`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L98) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L101) |
| `key` | `ResourceKey.codec(Registries.CREATIVE_MODE_TAB)` | Required | Registry key [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L104) |

[CreativeModeTabCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java)

### `anvilcraft:filter`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L60) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L63) |
| `filter` | `FilterContent.CODEC` | Required | Item filter condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L66) |

[FilterCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java)

### `anvilcraft:crafting_book_category`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `icon` | Item stack object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L78) |
| `name` | `ICategory.NAME_CODEC` | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L81) |
| `category` | `CraftingBookCategory.CODEC` | Required | Category selector [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L84) |

[CraftingBookCategoryCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java)

### `anvilcraft:fluid`

The type itself determines all behavior; only the dispatch ID is needed.

[FluidCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java)

[ModCategoryTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java)
