# 特殊天体的配方输出

将种子物品与天体预设绑定，并填写资源、物理属性及可选的登陆规则。

直接构造天体定义并交给 RecipeOutput。属性、资源、需求的集合按构造器参数顺序传入；空集合保留该类别为空的含义。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:special_celestial_body/guide`，文件位于 `data/example/recipe/special_celestial_body/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.block.entity.celestial.LiquidCoverage;
import dev.dubhe.anvilcraft.recipe.celestial.SpecialCelestialBodyRecipe;
import java.util.List;
import java.util.Optional;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class SpecialCelestialBodyRecipes {
    public static void generate(RecipeOutput destination) {
        var generatedRecipe = new SpecialCelestialBodyRecipe(
                "white_hole", "white_hole", true, false,
                3, 1, 54, 64, Optional.empty(), Optional.of(LiquidCoverage.NONE),
                6, 0, 0f, List.of(anvil("white_hole")),
                List.of(), List.of(), List.of(), List.of(), List.of(), List.of(), List.of(), Optional.empty()
            );
        destination.accept(ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "special_celestial_body/guide")), generatedRecipe, null);
    }

    private static Identifier anvil(String path) {
        return Identifier.fromNamespaceAndPath("anvilcraft", path);
    }
}
```

实现采用上游 `SpecialCelestialBodyRecipeLoader.createWhiteHole` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L295)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `RecipeOutput.accept` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `name` | 字符串 | 必填 | 名称 |
| `time` | 整数 | 必填 | 时间参数 |
| `space` | 整数 | 必填 | 空间属性 |
| `mass` | 整数 | 必填 | 质量数值 |
| `energy` | 整数 | 必填 | 能量属性 |
| `model` | 字符串 | 必填 | 模型标识 |
| `liquid_coverage` | `LIQUID_COVERAGE_CODEC` | 可省略 | 液体覆盖等级 |
| `magnetic_field` | 整数 | 必填 | 磁场强度 |
| `rotation_speed` | 整数 | 必填 | 自转速度 |
| `axial_tilt` | 数值 | 必填 | 自转轴倾角 |
| `seed_items` | 资源 ID数组 | 必填 | 关联种子物品列表 |
| `resources` | `ResourceFields.CODEC` | 必填 | 该天体产出的资源配置 |
| `landing` | `CelestialTravelData.CODEC` | 可省略 | 降落规则 |
| `travel` | `CelestialTravelData.CODEC` | 可省略 | 旅行规则 |
| `id` | 字符串 | 必填 | 注册 ID |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 |
| `id` | 字符串 | 必填 | 注册 ID |
| `count` | 整数 | 必填 | 数量 |
| `has_atmosphere` | 布尔值 | 可省略 | 是否拥有大气 |
| `minerals` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 矿产条目 |
| `fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 流体条目 |
| `biological_items` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 生物物品资源 |
| `biological_fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 生物流体资源 |
| `offerings` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 供奉物列表 |
| `temple_blessings` | `DemandEntry.CODEC`数组 | 可省略，默认 `[]` | 神庙祝福条目 |
| `temple_punishments` | `DemandEntry.CODEC`数组 | 可省略，默认 `[]` | 神庙惩罚条目 |
| `needs_custom_model` | 布尔值 | 可省略，默认 `false` | 是否使用定制模型 |
| `can_be_shattered` | 布尔值 | 可省略 | 是否可被击碎 |
| `exclude_from_monolith` | 布尔值 | 可省略，默认 `false` | 是否排除在独石选择之外 |
| `atmosphere` | `ATMOSPHERE_COLOR_CODEC` | 可省略 | 大气颜色 |
| `type` | `Type.CODEC` | 可省略，默认 `Type.FIXED` | 分派到对应实现的类型 ID |
| `scale` | 数值 | 可省略，默认 `1.0` | 坐标缩放比例 |
| `x` | 整数 | 可省略，默认 `0` | X 坐标 |
| `y` | 整数 | 可省略，默认 `64` | Y 坐标 |
| `z` | 整数 | 可省略，默认 `0` | Z 坐标 |
| `radius` | 整数 | 可省略，默认 `8` | 半径参数 |
| `type` | `Type.CODEC` | 可省略，默认 `Type.ENTRY_PORTAL` | 分派到对应实现的类型 ID |
| `x` | 整数 | 可省略，默认 `0` | X 坐标 |
| `y` | 整数 | 可省略，默认 `64` | Y 坐标 |
| `z` | 整数 | 可省略，默认 `0` | Z 坐标 |
| `radius` | 整数 | 可省略，默认 `8` | 半径参数 |
| `dimension` | 资源 ID | 必填 | 维度资源 ID |
| `coordinate_rule` | `CoordinateRule.CODEC` | 可省略，默认 `CoordinateRule.DEFAULT` | 目的地坐标计算规则 |
| `return_rule` | `ReturnRule.CODEC` | 可省略，默认 `ReturnRule.DEFAULT` | 返程坐标计算规则 |

[查看 特殊天体字段、默认值与配方示例](../packs/celestial/special_celestial_body) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-celestial-2#specialcelestialbodyrecipe)
