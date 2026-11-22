# Component Accessors

When copying, merging, or transforming components from smithing inputs, `type` on the component accessor object selects what data to read.


## Types & Fields

### `anvilcraft:normal_data_component`

**NormalDataComponent**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `component` | `DataComponentType.CODEC` | Required | Target component type [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L59) |

**RecipeInputSlot**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | String | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L18) |

[NormalDataComponent.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java)

### `anvilcraft:item_enchantments`

**ItemEnchantmentsData**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `component` | `DataComponentType.CODEC` | Required | Target component type [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L97) |

**RecipeInputSlot**

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input` | String | Required | Input to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L18) |

[ItemEnchantmentsData.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java)

### `anvilcraft:multiphase`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `input_type` | String | Required | Input data type [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L79) |

[MultiphaseData.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java)

[ModCustomDataComponents.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModCustomDataComponents.java)
