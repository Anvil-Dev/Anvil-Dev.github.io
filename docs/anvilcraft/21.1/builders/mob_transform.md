# 生物转化的配方构建器

为某个实体类型选择一种或多种转化结果，并可按实体标签数据设置附加条件。

from 与 to 分别接收原实体和目标实体的 EntityType。显式指定 ID，避免多条原实体相同的转化命中默认文件名。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:mob_transform/guide`，文件位于 `data/example/recipe/mob_transform/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.transform.MobTransformRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.EntityType;

public final class MobTransformRecipes {
    public static void generate(RecipeOutput destination) {
        MobTransformRecipe.from(EntityType.ALLAY).to(EntityType.VEX)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "mob_transform/guide"));
    }
}
```

实现采用上游 `MobTransformRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformRecipeLoader.java#L22)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 实体类型 ID | 必填 | 待匹配的输入 |
| `results` | `TransformResult.CODEC`数组 | 必填 | 各次输出使用的结果列表 |
| `tag_predicates` | `NumericTagValuePredicate.CODEC`数组 | 可省略，默认 `[]` | 转化前对实体数据的额外判断 |
| `tag_modifications` | `TagModification.CODEC`数组 | 可省略，默认 `[]` | 转化时对实体数据的修改列表 |
| `transform_options` | `TransformOptions.CODEC`数组 | 可省略，默认 `[]` | 转化时启用的选项 |
| `result_entity_type` | 实体类型 ID | 必填 | 转化后的实体类型 |
| `probability` | 数值 | 必填 | 选择该结果的概率 |
| `tagKeyPath` | 字符串 | 必填 | 目标数值标签路径 |
| `requirement` | `ValueFunction.CODEC` | 必填 | 比较运算 |
| `expected` | 长整数 | 必填 | 用于比较的整数 |
| `path` | 字符串 | 必填 | 待修改的数据路径 |
| `op` | `ModifyOperation.CODEC` | 必填 | 执行的修改操作 |
| `index` | 整数 | 可省略 | 步骤或列表索引 |
| `tag` | 字符串 | 必填 | 写入的标签内容 |

[查看 生物转化字段、默认值与配方示例](../packs/transform/mob_transform)
