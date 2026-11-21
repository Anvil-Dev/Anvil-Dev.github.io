# 行星资源

用 category 选择矿产、流体、生命或其他资源规则，再填写同名配置对象。

在数据包中建立 `data/example/recipe/planet_resource/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:planet_resource/example`。

## 配方示例

```json
{
  "type": "anvilcraft:planet_resource",
  "category": "mineral",
  "mineral": {}
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/planet_resource/mineral.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:planet_resource`。

### 根对象

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | 必填 | 选择类别 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L474) |
| `mineral` | `MineralData.CODEC` | 可省略 | 矿产规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L475) |
| `fluid` | `FluidData.CODEC` | 可省略 | 炼药锅的流体匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L476) |
| `giant` | `GiantData.CODEC` | 可省略 | 巨行星资源规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L477) |
| `biological` | `BiologicalData.CODEC` | 可省略 | 生物资源规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L478) |
| `offering` | `OfferingData.CODEC` | 可省略 | 供奉资源规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L479) |
| `wasteland` | `WastelandData.CODEC` | 可省略 | 荒地规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L480) |

### WeightedChoice

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L78) |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L79) |

### DirectEntry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L98) |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L99) |

### ChoiceEntry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `choices` | `WeightedChoice.CODEC`数组 | 必填 | 可选条目集合 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L105) |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L106) |

### LifeChances

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `cold` | 整数 | 可省略，默认 `5` | 寒冷环境参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L243) |
| `hot` | 整数 | 可省略，默认 `5` | 炎热环境参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L244) |
| `mild` | 整数 | 可省略，默认 `10` | 温和环境参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L245) |

### MineralData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `source_tag` | 字符串 | 可省略，默认 `"c:raw_materials"` | 来源标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L270) |
| `blacklist_tag` | 字符串 | 可省略，默认 `"anvilcraft:non_planetary_minerals"` | 排除矿产的标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L271) |
| `step` | 整数 | 可省略，默认 `10` | 资源生成步长 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L272) |

### FluidData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `planet_type` | 字符串 | 可省略，默认 `"rocky_planet"` | 行星类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L288) |
| `temperature` | 字符串 | 可省略，默认 `""` | 温度参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L289) |
| `liquid_min` | 字符串 | 可省略，默认 `"low"` | 最低液体覆盖等级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L290) |
| `output_fluid` | 字符串 | 必填 | 输出流体 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L291) |

### GiantData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L328) |
| `pressure_type` | 字符串 | 必填 | 适用气压类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L330) |

### BiologicalData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `life_chances` | `LifeChances.CODEC` | 可省略，默认 `LifeChances.DEFAULT` | 各温度下产生生命的机会 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L346) |
| `land_entity_tag` | 字符串 | 可省略，默认 `"anvilcraft:planetary_land_animals"` | 陆生实体标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L347) |
| `aquatic_entity_tag` | 字符串 | 可省略，默认 `"anvilcraft:planetary_aquatic_animals"` | 水生实体标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L348) |
| `drop_blacklist_tag` | 字符串 | 可省略，默认 `"anvilcraft:non_planetary_mob_drops"` | 排除生物掉落物的标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L350) |
| `mild_extra_fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 温和环境额外流体 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L352) |

### OfferingData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L374) |
| `civilization_chance` | 整数 | 可省略，默认 `50` | 产生文明的机会 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L375) |
| `age_min` | 整数 | 可省略，默认 `32` | 最低年龄 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L376) |
| `age_max` | 整数 | 可省略，默认 `43` | 最高年龄 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L377) |

### WastelandData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L397) |
| `age_min` | 整数 | 可省略，默认 `35` | 最低年龄 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L398) |
| `wasteland_chance` | 整数 | 可省略，默认 `10` | 形成荒地的机会 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L399) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java)
