# dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.recipe



## MDCraftingTableRecipeComponent

` public class MDCraftingTableRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDCraftingTableRecipeComponent.java#L26)

工作台配方渲染组件。 将 3x3 输入网格和输出物品绘制到固定背景纹理上， 用于展示 net.minecraft.world.item.crafting.RecipeType#CRAFTING 配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier CRAFTING_TABLE_COMPONENT_TEXTURE ` | 工作台组件背景纹理。<br>初值 ` Ageratum.location("textures/gui/component/crafting_table.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDCraftingTableRecipeComponent.java#L31) |
| ` public MDCraftingTableRecipeComponent(CraftingRecipe recipe, boolean enableAlignCenter) ` | 创建工作台配方组件。<br>实现调用 ` super(MDCraftingTableRecipeComponent.CRAFTING_TABLE_COMPONENT_TEXTURE, 128, 72, enableAlignCenter) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` MDCraftingTableRecipeComponent.getIngredients(recipe) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDCraftingTableRecipeComponent.java#L44) |
| ` @Nullable public NonNullList<Ingredient> getIngredients() ` | 输入材料列表；客户端世界缺失时为 null。<br>末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDCraftingTableRecipeComponent.java#L26) |
| ` @Nullable public ItemStack getResultItem() ` | 输出物品；客户端世界缺失时为 null。<br>末尾返回 ` this.resultItem `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDCraftingTableRecipeComponent.java#L26) |

## MDFurnaceRecipeComponent

` public class MDFurnaceRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDFurnaceRecipeComponent.java#L25)

熔炉类配方渲染组件。 将输入材料和输出物品绘制到固定背景纹理上， 用于展示 net.minecraft.world.item.crafting.RecipeType#CRAFTING 配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier FURNACE_COMPONENT_TEXTURE ` | 熔炉类组件背景纹理。<br>初值 ` Ageratum.location("textures/gui/component/furnace.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDFurnaceRecipeComponent.java#L30) |
| ` public MDFurnaceRecipeComponent(AbstractCookingRecipe recipe, boolean enableAlignCenter) ` | 创建熔炉类配方组件。<br>实现调用 ` super(MDFurnaceRecipeComponent.FURNACE_COMPONENT_TEXTURE, 128, 53, enableAlignCenter) `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDFurnaceRecipeComponent.java#L47) |
| ` @Nullable public Ingredient getIngredient() ` | 输入材料；客户端世界缺失时为 null。<br>末尾返回 ` this.ingredient `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDFurnaceRecipeComponent.java#L25) |
| ` @Nullable public ItemStack getResultItem() ` | 输出物品；客户端世界缺失时为 null。<br>末尾返回 ` this.resultItem `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDFurnaceRecipeComponent.java#L25) |
| ` @Nullable public ItemStack getToastSymbol() ` | 吐司图标；客户端世界缺失时为 null。<br>末尾返回 ` this.toastSymbol `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDFurnaceRecipeComponent.java#L25) |

## MDSmithingTableRecipeComponent

` public class MDSmithingTableRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDSmithingTableRecipeComponent.java#L38)

锻造台配方渲染组件。 将模板、基底、材料和输出物品绘制到固定背景纹理上， 用于展示 RecipeType#SMITHING 配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier SMITHING_TABLE_COMPONENT_TEXTURE ` | 锻造台组件背景纹理。<br>初值 ` Ageratum.location("textures/gui/component/smithing_table.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDSmithingTableRecipeComponent.java#L43) |
| ` public MDSmithingTableRecipeComponent(SmithingRecipe recipe, boolean enableAlignCenter) ` | 创建锻造台配方组件。<br>` (level == null) ` 成立时抛出 ` new IllegalStateException("ClientLevel cannot be null while creating MDSmithingTableRecipeComponent!") ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDSmithingTableRecipeComponent.java#L56) |
| ` public NonNullList<Ingredient> getIngredients() ` | 输入材料列表<br>末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDSmithingTableRecipeComponent.java#L38) |
| ` public Supplier<ItemStack> getResultSupplier() ` | 输出物品供应者<br>末尾返回 ` this.resultSupplier `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDSmithingTableRecipeComponent.java#L38) |

## MDStonecutterRecipeComponent

` public class MDStonecutterRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDStonecutterRecipeComponent.java#L25)

切石机配方渲染组件。 将输入材料和输出物品绘制到固定背景纹理上， 用于展示 net.minecraft.world.item.crafting.RecipeType#CRAFTING 配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier STONECUTTER_COMPONENT_TEXTURE ` | 切石机组件背景纹理。<br>初值 ` Ageratum.location("textures/gui/component/stonecutter.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDStonecutterRecipeComponent.java#L30) |
| ` public MDStonecutterRecipeComponent(StonecutterRecipe recipe, boolean enableAlignCenter) ` | 创建切石机配方组件。<br>实现调用 ` super(MDStonecutterRecipeComponent.STONECUTTER_COMPONENT_TEXTURE, 128, 32, enableAlignCenter) `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDStonecutterRecipeComponent.java#L43) |
| ` @Nullable public Ingredient getIngredient() ` | 输入材料；客户端世界缺失时为 null。<br>末尾返回 ` this.ingredient `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDStonecutterRecipeComponent.java#L25) |
| ` @Nullable public ItemStack getResultItem() ` | 输出物品；客户端世界缺失时为 null。<br>末尾返回 ` this.resultItem `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDStonecutterRecipeComponent.java#L25) |
