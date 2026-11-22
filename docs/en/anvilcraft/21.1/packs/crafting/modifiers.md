# Smithing Result Modifiers

Write modifier objects in the result's `modifiers` array, where `type` selects the modification operation. Reference input slots with `template`, `material`, or indexed names like `input.0`.

## Types & Fields

### `anvilcraft:apply_data`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `components` | `DataComponentPatch.CODEC` | Required | Component patch [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L16) |

[ApplyData.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java)

### `anvilcraft:copy_data`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `types` | `ICustomDataComponent.CODEC` array | Required | Component types to operate on [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L24) |

[CopyData.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java)

### `anvilcraft:merge_data`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `types` | `ICustomDataComponent.CODEC` array | Required | Component types to operate on [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L25) |

[MergeData.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java)

### `anvilcraft:remove_data`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `types` | `DataComponentType.CODEC` array | Required | Component types to operate on [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L24) |

[RemoveData.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java)

### `anvilcraft:remove_attribute`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `attrs` | Resource ID array | Required | Attribute IDs to remove [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L26) |

[RemoveAttribute.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java)

### `anvilcraft:modify_count`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `count` | `INumberProvider.CODEC` | Required | Count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L15) |

[ModifyCount.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java)

### `anvilcraft:change_data_type`

**ChangeDataType**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `orig` | Resource ID | Required | Original type to convert [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L24) |
| `dest` | `ICustomDataComponent.CODEC` | Required | Target data representation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L27) |

**RecipeInputSlot**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | String | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L18) |

[ChangeDataType.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java)

[ModResultModifierTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModResultModifierTypes.java)
