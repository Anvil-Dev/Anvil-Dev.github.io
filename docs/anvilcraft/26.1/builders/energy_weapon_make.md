# 能量武器制作的配方构建器

为能量武器指定一至六个原料谓词和结果栈。依赖外部模组时可配合 NeoForge 加载条件。

材料数量必须为 1 至 6 项，并且必须设置结果模板。材料数越界或结果为 null 时 validate 会抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L180)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:energy_weapon_make/guide`，文件位于 `data/example/recipe/energy_weapon_make/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.EnergyWeaponMakeRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.ItemStackTemplate;

public final class EnergyWeaponMakeRecipes {
    public static void generate(RecipeOutput destination) {
        EnergyWeaponMakeRecipe.builder()
            .requires(ModBlocks.TESLA_TOWER, 4)
            .result(new ItemStackTemplate(ModItems.TESLA_GUN))
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "energy_weapon_make/guide")));
    }
}
```

实现采用上游 `EnergyWeaponMakeRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L26)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `neoforge:conditions` | 加载条件数组 | 可省略，默认 `[]` | NeoForge 在载入时计算的条件列表 |
| `ingredients` | 物品原料谓词数组 | 必填 | 参与匹配的原料列表 |
| `result` | 物品栈模板对象 | 必填 | 完成配方后使用的结果 |

[查看 能量武器制作字段、默认值与配方示例](../packs/crafting/energy_weapon_make)
