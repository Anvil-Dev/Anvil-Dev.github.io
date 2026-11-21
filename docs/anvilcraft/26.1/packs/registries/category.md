# 存储终端分类

使用 `data/<命名空间>/anvilcraft/category/<名称>.json` 给存储网络增加可选分类。根对象的 `type` 选择分类算法。复合分类中的子项可以引用注册 ID，命名空间分类可按来源模组筛选。此动态注册表在加载世界时读取并同步。

## 使用示例

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

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/anvilcraft/category/anvilcraft.json)

## 类型与字段

### `anvilcraft:block`

类型本身就确定全部行为，填写分派 ID 即可。

[BlockCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java)

### `anvilcraft:enchanted`

类型本身就确定全部行为，填写分派 ID 即可。

[EnchantedCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java)

### `anvilcraft:unstackable`

类型本身就确定全部行为，填写分派 ID 即可。

[UnstackableCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java)

### `anvilcraft:and`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `icon` | 物品栈模板对象 | 必填 | 界面图标对应的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L52) |
| `name` | `ICategory.NAME_CODEC` | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L55) |
| `categories` | `ICategory.CODEC`数组 | 必填 | 参与组合匹配的分类 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L59) |

[AndCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java)

### `anvilcraft:or`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `icon` | 物品栈模板对象 | 必填 | 界面图标对应的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L52) |
| `name` | `ICategory.NAME_CODEC` | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L55) |
| `categories` | `ICategory.CODEC`数组 | 必填 | 参与组合匹配的分类 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L59) |

[OrCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java)

### `anvilcraft:has_component`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `icon` | 物品栈模板对象 | 必填 | 界面图标对应的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L216) |
| `name` | `ICategory.NAME_CODEC` | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L219) |
| `predicates` | `DataComponentPredicate.CODEC.xmap(HashMap::new, HashMap::new).xmap(ImmutableMap::copyOf, HashMap::new)` | 可省略，默认 `ImmutableMap.of()` | 参与匹配的谓词列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L224) |
| `match_type` | `MatchType.CODEC` | 可省略，默认 `MatchType.OR` | 谓词的组合方式 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L227) |

[HasComponentCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java)

### `anvilcraft:namespace`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `icon` | 物品栈模板对象 | 必填 | 界面图标对应的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L54) |
| `name` | `ICategory.NAME_CODEC` | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L57) |
| `namespace` | 字符串 | 必填 | 要匹配的命名空间 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L60) |

[NamespaceCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java)

### `anvilcraft:creative_mode_tab`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `icon` | 物品栈模板对象 | 必填 | 界面图标对应的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L84) |
| `name` | `ICategory.NAME_CODEC` | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L87) |
| `key` | `ResourceKey.codec(Registries.CREATIVE_MODE_TAB)` | 必填 | 注册键或图案符号表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L90) |

[CreativeModeTabCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java)

### `anvilcraft:recipe_book_category`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `icon` | 物品栈模板对象 | 必填 | 界面图标对应的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L71) |
| `name` | `ICategory.NAME_CODEC` | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L74) |
| `key` | `ResourceKey.codec(Registries.RECIPE_BOOK_CATEGORY)` | 必填 | 注册键或图案符号表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L77) |

[RecipeBookCategoryCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java)

### `anvilcraft:filter`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `icon` | 物品栈模板对象 | 必填 | 界面图标对应的物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L47) |
| `name` | `ICategory.NAME_CODEC` | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L50) |
| `filter` | `FilterContent.CODEC` | 必填 | 物品过滤条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L53) |

[FilterCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java)

### `anvilcraft:fluid`

类型本身就确定全部行为，填写分派 ID 即可。

[FluidCategory.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java)

[ModCategoryTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategoryTypes.java)
