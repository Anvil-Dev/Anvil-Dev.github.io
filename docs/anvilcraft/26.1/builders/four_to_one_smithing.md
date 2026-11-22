# 四合一锻造的配方构建器

将四件基础物品合成一件成品。结果修饰器可从输入复制或调整组件。

基类检查模板、材料和已添加的各个输入是否带有可匹配的物品；缺少对应物品的条件会触发 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L310)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:four_to_one_smithing/guide`，文件位于 `data/example/recipe/four_to_one_smithing/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.multiple.FourToOneSmithingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class FourToOneSmithingRecipes {
    public static void generate(RecipeOutput destination) {
        FourToOneSmithingRecipe.builder()
            .material(ModBlocks.FROST_METAL_BLOCK)
            .input(ModItems.SAPPHIRE_AMULET)
            .input(ModItems.RUBY_AMULET)
            .input(ModItems.TOPAZ_AMULET)
            .input(ModItems.EMERALD_AMULET)
            .result(ModItems.GEM_AMULET)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "four_to_one_smithing/guide")));
    }
}
```

实现采用上游 `MultipleToOneSmithingRecipeLoader.four` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L136)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `template` | 物品原料谓词 | 必填 | 锻造模板谓词 |
| `material` | 物品原料谓词 | 必填 | 锻造材料谓词 |
| `inputs` | 物品原料谓词数组 | 必填 | 一组参与匹配的输入 |
| `result` | 物品栈模板对象 | 必填 | 完成配方后使用的结果 |
| `modifiers` | `IResultModifier.CODEC`数组 | 可省略，默认 `[]` | 按顺序处理结果的修饰器 |

[查看 四合一锻造字段、默认值与配方示例](../packs/crafting/four_to_one_smithing)
