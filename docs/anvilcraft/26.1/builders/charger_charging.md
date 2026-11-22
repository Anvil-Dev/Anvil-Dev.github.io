# 充放电的配方构建器

为一个输入物品指定充放电功率和耗时。负功率用于充电，正功率用于放电。功率以 kW 计，时间以 tick 计。

必须设置原料与结果。power 为负数代表充电、为正数代表放电，零功率会抛异常；time 以 tick 计，必须大于零。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L169)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:charger_charging/guide`，文件位于 `data/example/recipe/charger_charging/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.ChargerChargingRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;

public final class ChargerChargingRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> items) {
        ChargerChargingRecipe.builder(items)
            .requires(Items.IRON_BLOCK)
            .result(ModBlocks.MAGNET_BLOCK)
            .power(-20)
            .time(80)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "charger_charging/guide")));
    }
}
```

实现采用上游 `ChargerChargingRecipeLoader.init` 中的一条实际配方链。其中 `HolderGetter<Item> items` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L22)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredient` | 原料 ID、标签或有效原料表达式 | 必填 | 单个待匹配的原料 |
| `result` | 物品栈模板对象 | 必填 | 完成配方后使用的结果 |
| `power` | 整数 | 必填 | 充放电功率，负值充电，正值放电，单位 kW |
| `time` | 整数 | 必填 | 时间参数 |

[查看 充放电字段、默认值与配方示例](../packs/machine/charger_charging)
