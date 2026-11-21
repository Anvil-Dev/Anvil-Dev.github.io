# 数值提供器

结果数量可使用常量或带 `type` 的数值提供器。例如 `{"type":"anvilcraft:constant","value":2}` 始终给出 2。嵌套提供器可以在运行时根据附魔或抽样计算数值。

## 类型与字段

### `anvilcraft:constant`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `value` | 数值 | 必填 | 固定数值 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java#L17) |

[ConstantValue.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/ConstantValue.java)

### `anvilcraft:binomial`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `n` | `INumberProvider.CODEC` | 必填 | 二项分布试验次数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L14) |
| `p` | `INumberProvider.CODEC` | 必填 | 每次试验的成功概率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java#L17) |

[BinomialDistributionGenerator.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/BinomialDistributionGenerator.java)

### `anvilcraft:uniform`

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `min` | `INumberProvider.CODEC` | 必填 | 下限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L14) |
| `max` | `INumberProvider.CODEC` | 必填 | 上限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java#L17) |

[UniformGenerator.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/UniformGenerator.java)

### `anvilcraft:enchantment_level`

**EnchantmentLevelProvider**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `enchantment` | `ResourceKey.codec(Registries.ENCHANTMENT)` | 必填 | 目标附魔 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L25) |
| `amount` | `LevelBasedValue.CODEC` | 必填 | 计算出的数量或等级修正 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java#L28) |

**RecipeInputSlot**

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 字符串 | 必填 | 待匹配的输入 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L18) |

[EnchantmentLevelProvider.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/number/EnchantmentLevelProvider.java)

[ModNumberProviderTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModNumberProviderTypes.java)
