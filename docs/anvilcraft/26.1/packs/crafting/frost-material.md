# 霜钢锻造材料谓词

在锻造配方的 `material` 中选择一种谓词。`and` 和 `or` 均可递归组合。内置置换配方给出了完整的模板、材料和结果写法。

## 使用示例

```json
{
  "type": "anvilcraft:permutation",
  "input": {
    "items": "minecraft:netherite_axe"
  },
  "options": [
    {
      "material": {
        "type": "anvilcraft:empty"
      },
      "result": {
        "id": "minecraft:diamond_axe"
      }
    }
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/permutation/netherite_axe.json)

## 类型与字段

### `anvilcraft:and`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `predicates` | `IFrostMaterialPredicate.CODEC`数组 | 必填 | 参与匹配的谓词列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L19) |

[AndFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java)

### `anvilcraft:or`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `predicates` | `IFrostMaterialPredicate.CODEC`数组 | 必填 | 参与匹配的谓词列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L19) |

[OrFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java)

### `anvilcraft:repair_material`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `cost` | 整数 | 必填 | 维修材料费用 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L52) |
| `allow_universal` | 布尔值 | 可省略，默认 `true` | 是否接受通用材料 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L55) |
| `universal_cost` | `IExpression.CODEC` | 可省略，默认 `DEFAULT_UNIVERSAL_COST` | 通用材料费用表达式 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L58) |

[RepairMaterialFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java)

### `anvilcraft:custom`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `predicate` | 物品原料谓词 | 必填 | 具体的匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L21) |

[CustomFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java)

### `anvilcraft:empty`

类型本身就确定全部行为，填写分派 ID 即可。

[EmptyFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java)

[ModFrostMaterialPredicateTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java)
