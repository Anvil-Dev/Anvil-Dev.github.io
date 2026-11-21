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

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/planet_resource/mineral.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:planet_resource`。

### 根对象

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | 必填 | 选择类别 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L505) |
| `mineral` | `MineralData.CODEC` | 可省略 | 矿产规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L506) |
| `fluid` | `FluidData.CODEC` | 可省略 | 炼药锅的流体匹配条件 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L507) |
| `giant` | `GiantData.CODEC` | 可省略 | 巨行星资源规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L508) |
| `biological` | `BiologicalData.CODEC` | 可省略 | 生物资源规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L509) |
| `offering` | `OfferingData.CODEC` | 可省略 | 供奉资源规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L510) |
| `wasteland` | `WastelandData.CODEC` | 可省略 | 荒地规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L511) |

### WeightedChoice

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L78) |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L79) |

### DirectEntry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L104) |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L105) |

### ChoiceEntry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `choices` | `WeightedChoice.CODEC`数组 | 必填 | 可选条目集合 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L111) |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L112) |

### LifeChances

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `cold` | 整数 | 可省略，默认 `5` | 寒冷环境参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L257) |
| `hot` | 整数 | 可省略，默认 `5` | 炎热环境参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L258) |
| `mild` | 整数 | 可省略，默认 `10` | 温和环境参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L259) |

### MineralData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `source_tag` | 字符串 | 可省略，默认 `"c:raw_materials"` | 来源标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L288) |
| `denylist_tag` | 字符串 | 可省略，默认 `"anvilcraft:non_planetary_minerals"` | 排除标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L289) |
| `step` | 整数 | 可省略，默认 `10` | 资源生成步长 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L290) |

### FluidData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `planet_type` | 字符串 | 可省略，默认 `"rocky_planet"` | 行星类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L308) |
| `temperature` | 字符串 | 可省略，默认 `""` | 温度参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L309) |
| `liquid_min` | 字符串 | 可省略，默认 `"low"` | 最低液体覆盖等级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L310) |
| `output_fluid` | 字符串 | 必填 | 输出流体 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L311) |

### GiantData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L350) |
| `pressure_type` | 字符串 | 必填 | 适用气压类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L352) |

### BiologicalData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `life_chances` | `LifeChances.CODEC` | 可省略，默认 `LifeChances.DEFAULT` | 各温度下产生生命的机会 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L370) |
| `land_entity_tag` | 字符串 | 可省略，默认 `"anvilcraft:planetary_land_animals"` | 陆生实体标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L371) |
| `aquatic_entity_tag` | 字符串 | 可省略，默认 `"anvilcraft:planetary_aquatic_animals"` | 水生实体标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L372) |
| `drop_denylist_tag` | 字符串 | 可省略，默认 `"anvilcraft:non_planetary_mob_drops"` | 禁用掉落物的标签 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L374) |
| `mild_extra_fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 温和环境额外流体 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L376) |

### OfferingData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L400) |
| `civilization_chance` | 整数 | 可省略，默认 `50` | 产生文明的机会 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L401) |
| `age_min` | 整数 | 可省略，默认 `32` | 最低年龄 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L402) |
| `age_max` | 整数 | 可省略，默认 `43` | 最高年龄 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L403) |

### WastelandData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L425) |
| `age_min` | 整数 | 可省略，默认 `35` | 最低年龄 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L426) |
| `wasteland_chance` | 整数 | 可省略，默认 `10` | 形成荒地的机会 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java#L427) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PlanetResourceRecipe.java)
