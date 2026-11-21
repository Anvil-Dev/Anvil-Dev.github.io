# 物品辅助转化的配方构建器

除实体类型外再检查周围的材料，根据物品数量调整特殊结果概率。

输入实体、目标实体和物品条件分别配置。按实体创建不同材料的变体时，为每条配方分配独立 ID。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:mob_transform_with_item/guide`，文件位于 `data/example/recipe/mob_transform_with_item/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.transform.MobTransformWithItemRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.item.ItemStackTemplate;
import net.minecraft.world.item.Items;

public final class MobTransformWithItemRecipes {
    public static void generate(RecipeOutput destination) {
        MobTransformWithItemRecipe.from(
                EntityType.ZOMBIE,
                Items.ANVIL,
                EntityType.GIANT,
                new ItemStackTemplate(ModBlocks.GIANT_ANVIL.asItem())
            ).setItemChancePercentagePerItem(5)
            .save(destination, Identifier.fromNamespaceAndPath("example", "mob_transform_with_item/guide"));
    }
}
```

实现采用上游 `MobTransformWithItemRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MobTransformWithItemRecipeLoader.java#L12)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 实体类型 ID | 必填 | 待匹配的输入 |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 |
| `special_result` | `TransformResult.CODEC` | 必填 | 命中特殊分支时的实体结果 |
| `item_result` | 物品栈模板对象 | 必填 | 掉落的物品结果 |
| `chance_percent_per_item` | 整数 | 必填 | 每件输入材料增加的概率百分点 |
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

[查看 物品辅助转化字段、默认值与配方示例](../packs/transform/mob_transform_with_item) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-transform-1#mobtransformwithitemrecipe)
