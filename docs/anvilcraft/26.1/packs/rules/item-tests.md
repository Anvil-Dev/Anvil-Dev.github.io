# 物品细分谓词

在物品谓词的 `predicates` 映射中，以注册 ID 为键，以下字段构成键对应的对象。

## 类型与字段

### `anvilcraft:saved_entity`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `entities` | `EntityType.CODEC`数组 | 可省略，默认 `[]` | 要匹配的实体列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L25) |
| `predicates` | `NumericTagValuePredicate.CODEC`数组 | 可省略，默认 `[]` | 参与匹配的谓词列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L29) |
| `is_monster` | 布尔值 | 可省略，默认 `false` | 按是否为怪物来匹配 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L32) |

[ItemSavedEntityPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java)

### `anvilcraft:enchantment_count`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `min` | 整数 | 必填 | 下限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L17) |
| `max` | 整数 | 必填 | 上限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L20) |

[ItemEnchCountPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java)

### `anvilcraft:integer_component`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `value` | 整数 | 必填 | 固定数值 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L18) |
| `type` | `DataComponentType.CODEC` | 必填 | 分派到对应实现的类型 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L21) |

[IntegerComponentPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java)

### `anvilcraft:merciless_enchantment`

### `anvilcraft:disabled_enchantment`

[ModDataComponentPredicates.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java)
