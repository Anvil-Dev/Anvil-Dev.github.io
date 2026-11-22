# 质量注入的配方构建器

给能参与质量注入的物品指定质量值。同一类材料可用原料标签一起匹配。

需要一个非空物品原料和正的质量值；mass 为 0 同样会被 validate 拒绝。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/MassInjectRecipe.java#L238)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:mass_inject/guide`，文件位于 `data/example/recipe/mass_inject/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.registrum.providers.generators.RegistrumRecipeProvider;
import dev.dubhe.anvilcraft.recipe.anvil.MassInjectRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.tags.TagKey;
import net.minecraft.world.item.Item;

public final class MassInjectRecipes {
    public static void generate(RecipeOutput destination, RegistrumRecipeProvider provider, TagKey<Item> tag, int mass) {
        MassInjectRecipe.builder(provider.getItems()).requires(tag).mass(mass)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "mass_inject/guide")));
    }
}
```

实现采用上游 `MassInjectRecipeLoader.addTag` 中的一条实际配方链。其中 `RegistrumRecipeProvider provider`、`TagKey<Item> tag`、`int mass` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MassInjectRecipeLoader.java#L84)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredient` | 原料 ID、标签或有效原料表达式 | 必填 | 单个待匹配的原料 |
| `mass` | 整数 | 必填 | 质量数值 |

[查看 质量注入字段、默认值与配方示例](../packs/impact/mass_inject)
