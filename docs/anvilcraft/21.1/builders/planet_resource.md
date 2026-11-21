# 行星资源的配方构建器

用 category 选择矿产、流体、生命或其他资源规则，再填写同名配置对象。

先选择 Category，随后设置该类别的数据对象。示例选择 FLUID，为目标天体的地表类型、温度条件和流体 ID 提供值。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:planet_resource/guide`，文件位于 `data/example/recipe/planet_resource/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.block.entity.celestial.PlanetResourceRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class PlanetResourceRecipes {
    public static void generate(RecipeOutput destination) {
        var generatedRecipe = PlanetResourceRecipe.builder(PlanetResourceRecipe.Category.FLUID)
                .fluid(new PlanetResourceRecipe.FluidData("rocky_planet", "", "low", "minecraft:water")).build();
        destination.accept(ResourceLocation.fromNamespaceAndPath("example", "planet_resource/guide"), generatedRecipe, null);
    }
}
```

实现采用上游 `PlanetResourceRecipeLoader.createFluidRecipes` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L54)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `RecipeOutput.accept` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | 必填 | 选择类别 |
| `mineral` | `MineralData.CODEC` | 可省略 | 矿产规则 |
| `fluid` | `FluidData.CODEC` | 可省略 | 炼药锅的流体匹配条件 |
| `giant` | `GiantData.CODEC` | 可省略 | 巨行星资源规则 |
| `biological` | `BiologicalData.CODEC` | 可省略 | 生物资源规则 |
| `offering` | `OfferingData.CODEC` | 可省略 | 供奉资源规则 |
| `wasteland` | `WastelandData.CODEC` | 可省略 | 荒地规则 |
| `id` | 字符串 | 必填 | 注册 ID |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 |
| `id` | 字符串 | 必填 | 注册 ID |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 |
| `choices` | `WeightedChoice.CODEC`数组 | 必填 | 可选条目集合 |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 |
| `cold` | 整数 | 可省略，默认 `5` | 寒冷环境参数 |
| `hot` | 整数 | 可省略，默认 `5` | 炎热环境参数 |
| `mild` | 整数 | 可省略，默认 `10` | 温和环境参数 |
| `source_tag` | 字符串 | 可省略，默认 `"c:raw_materials"` | 来源标签 |
| `denylist_tag` | 字符串 | 可省略，默认 `"anvilcraft:non_planetary_minerals"` | 排除标签 |
| `step` | 整数 | 可省略，默认 `10` | 资源生成步长 |
| `planet_type` | 字符串 | 可省略，默认 `"rocky_planet"` | 行星类型 |
| `temperature` | 字符串 | 可省略，默认 `""` | 温度参数 |
| `liquid_min` | 字符串 | 可省略，默认 `"low"` | 最低液体覆盖等级 |
| `output_fluid` | 字符串 | 必填 | 输出流体 ID |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 |
| `pressure_type` | 字符串 | 必填 | 适用气压类型 |
| `life_chances` | `LifeChances.CODEC` | 可省略，默认 `LifeChances.DEFAULT` | 各温度下产生生命的机会 |
| `land_entity_tag` | 字符串 | 可省略，默认 `"anvilcraft:planetary_land_animals"` | 陆生实体标签 |
| `aquatic_entity_tag` | 字符串 | 可省略，默认 `"anvilcraft:planetary_aquatic_animals"` | 水生实体标签 |
| `drop_denylist_tag` | 字符串 | 可省略，默认 `"anvilcraft:non_planetary_mob_drops"` | 禁用掉落物的标签 |
| `mild_extra_fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 温和环境额外流体 |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 |
| `civilization_chance` | 整数 | 可省略，默认 `50` | 产生文明的机会 |
| `age_min` | 整数 | 可省略，默认 `32` | 最低年龄 |
| `age_max` | 整数 | 可省略，默认 `43` | 最高年龄 |
| `entries` | `WeightedEntry.CODEC`数组 | 必填 | 候选条目列表 |
| `age_min` | 整数 | 可省略，默认 `35` | 最低年龄 |
| `wasteland_chance` | 整数 | 可省略，默认 `10` | 形成荒地的机会 |

[查看 行星资源字段、默认值与配方示例](../packs/celestial/planet_resource) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-block-entity-celestial-4#planetresourcerecipe-builder)
