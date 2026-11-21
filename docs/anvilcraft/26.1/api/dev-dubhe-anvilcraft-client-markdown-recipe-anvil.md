# dev.dubhe.anvilcraft.client.markdown.recipe.anvil



## MDBaseAnvilRecipeComponent

` public abstract class MDBaseAnvilRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBaseAnvilRecipeComponent.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/256back.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBaseAnvilRecipeComponent.java#L17) |
| ` public static final int BLOCK_Y ` | 初值 ` 64 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBaseAnvilRecipeComponent.java#L19) |
| ` public static final int INPUT_BLOCK_X ` | 初值 ` 128 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBaseAnvilRecipeComponent.java#L20) |
| ` public static final int OUTPUT_BLOCK_X ` | 初值 ` 210 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBaseAnvilRecipeComponent.java#L21) |
| ` public MDBaseAnvilRecipeComponent(boolean enableAlignCenter) ` | 执行 ` super(MDBaseAnvilRecipeComponent.TEXTURE, 256, 128, enableAlignCenter) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBaseAnvilRecipeComponent.java#L23) |

## MDBlockCompressRecipeComponent

` public class MDBlockCompressRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockCompressRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDBlockCompressRecipeComponent(BlockCompressRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputBlocks() `<br>实现调用 ` recipe.getFirstResultBlock().state() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockCompressRecipeComponent.java#L19) |
| ` public BlockState getOutputBlockState() ` | 末尾返回 ` this.outputBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockCompressRecipeComponent.java#L13) |

## MDBlockCrushRecipeComponent

` public class MDBlockCrushRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockCrushRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDBlockCrushRecipeComponent(BlockCrushRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputBlocks() `<br>实现调用 ` recipe.getFirstResultBlock().state() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockCrushRecipeComponent.java#L18) |
| ` public BlockState getOutputBlockState() ` | 末尾返回 ` this.outputBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockCrushRecipeComponent.java#L13) |

## MDBlockProcessingRecipeComponent

` public class MDBlockProcessingRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockProcessingRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDBlockProcessingRecipeComponent(BlockProcessingRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputBlocks() `<br>实现调用 ` recipe.getFirstResultBlock().state() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockProcessingRecipeComponent.java#L19) |
| ` public BlockState getOutputBlockState() ` | 末尾返回 ` this.outputBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockProcessingRecipeComponent.java#L13) |

## MDBlockSmearRecipeComponent

` public class MDBlockSmearRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockSmearRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDBlockSmearRecipeComponent(BlockSmearRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputBlocks() `<br>实现调用 ` recipe.getFirstResultBlock().state() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockSmearRecipeComponent.java#L19) |
| ` public BlockState getOutputBlockState() ` | 末尾返回 ` this.outputBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDBlockSmearRecipeComponent.java#L13) |

## MDFastCookingRecipeComponent

` public class MDFastCookingRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDFastCookingRecipeComponent.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDFastCookingRecipeComponent(FastCookingRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDFastCookingRecipeComponent.java#L23) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDFastCookingRecipeComponent.java#L15) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDFastCookingRecipeComponent.java#L15) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDFastCookingRecipeComponent.java#L15) |

## MDItemCompressRecipeComponent

` public class MDItemCompressRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCompressRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDItemCompressRecipeComponent(ItemCompressRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCompressRecipeComponent.java#L23) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCompressRecipeComponent.java#L13) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCompressRecipeComponent.java#L13) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCompressRecipeComponent.java#L13) |

## MDItemCrushRecipeComponent

` public class MDItemCrushRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCrushRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDItemCrushRecipeComponent(ItemCrushRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCrushRecipeComponent.java#L23) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCrushRecipeComponent.java#L13) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCrushRecipeComponent.java#L13) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemCrushRecipeComponent.java#L13) |

## MDItemInjectRecipeComponent

` public class MDItemInjectRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemInjectRecipeComponent.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDItemInjectRecipeComponent(ItemInjectRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemInjectRecipeComponent.java#L30) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemInjectRecipeComponent.java#L16) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemInjectRecipeComponent.java#L16) |
| ` public BlockState getOutputBlockState() ` | 末尾返回 ` this.outputBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDItemInjectRecipeComponent.java#L16) |

## MDMeshRecipeComponent

` public class MDMeshRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDMeshRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDMeshRecipeComponent(MeshRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDMeshRecipeComponent.java#L23) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDMeshRecipeComponent.java#L13) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDMeshRecipeComponent.java#L13) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDMeshRecipeComponent.java#L13) |

## MDNeutronIrradiationRecipeComponent

` public class MDNeutronIrradiationRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDNeutronIrradiationRecipeComponent.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDNeutronIrradiationRecipeComponent(NeutronIrradiationRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDNeutronIrradiationRecipeComponent.java#L24) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDNeutronIrradiationRecipeComponent.java#L14) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDNeutronIrradiationRecipeComponent.java#L14) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDNeutronIrradiationRecipeComponent.java#L14) |

## MDSolidLiquidRecipeComponent

` public class MDSolidLiquidRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSolidLiquidRecipeComponent.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDSolidLiquidRecipeComponent(SolidLiquidRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSolidLiquidRecipeComponent.java#L31) |
| ` public static BlockState getInputCauldron(SolidLiquidRecipe recipe) ` | 末尾返回 ` CauldronUtil.fullState(material) `<br>[调用处 MDSolidLiquidRecipeComponent.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSolidLiquidRecipeComponent.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSolidLiquidRecipeComponent.java#L48) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSolidLiquidRecipeComponent.java#L16) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSolidLiquidRecipeComponent.java#L16) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSolidLiquidRecipeComponent.java#L16) |
| ` public SolidLiquidRecipe getRecipe() ` | 末尾返回 ` this.recipe `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSolidLiquidRecipeComponent.java#L16) |

## MDSqueezingRecipeComponent

` public class MDSqueezingRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSqueezingRecipeComponent.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDSqueezingRecipeComponent(SqueezingRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputBlocks() `<br>实现调用 ` recipe.getFirstResultBlock().state() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSqueezingRecipeComponent.java#L20) |
| ` public BlockState getOutputBlockState() ` | 末尾返回 ` this.outputBlockState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSqueezingRecipeComponent.java#L14) |

## MDStampingRecipeComponent

` public class MDStampingRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDStampingRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDStampingRecipeComponent(StampingRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDStampingRecipeComponent.java#L23) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDStampingRecipeComponent.java#L13) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDStampingRecipeComponent.java#L13) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDStampingRecipeComponent.java#L13) |

## MDSuperHeatingRecipeComponent

` public class MDSuperHeatingRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDSuperHeatingRecipeComponent(SuperHeatingRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L29) |
| ` public static BlockState getInputCauldron(SuperHeatingRecipe recipe) ` | 末尾返回 ` CauldronUtil.fullState(material) `<br>[调用处 MDSuperHeatingRecipeComponent.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L48) |
| ` public static BlockState getResultCauldron(SuperHeatingRecipe recipe) ` | ` (recipe.isConsumeFluid()) ` 成立时提前返回 ` CauldronUtil.getStateFromContentAndLevel(result, CauldronUtil.maxLevel(result) - 1) `<br>[调用处 MDSuperHeatingRecipeComponent.getOutputBlockState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L53) |
| ` public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L17) |
| ` public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L17) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDSuperHeatingRecipeComponent.java#L17) |

## MDTimeWarpRecipeComponent

` public class MDTimeWarpRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int INFO_X ` | 初值 ` 12 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L21) |
| ` public static final int INFO_Y ` | 初值 ` 106 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L22) |
| ` public MDTimeWarpRecipeComponent(TimeWarpRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getDisplayInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L35) |
| ` public static BlockState getInputCauldron(TimeWarpRecipe recipe) ` | 末尾返回 ` CauldronUtil.fullState(material) `<br>[调用处 MDTimeWarpRecipeComponent.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L80) |
| ` public static BlockState getResultCauldron(TimeWarpRecipe recipe) ` | ` (recipe.isConsumeFluid()) ` 成立时提前返回 ` CauldronUtil.getStateFromContentAndLevel(result, CauldronUtil.maxLevel(result) - 1) `<br>[调用处 MDTimeWarpRecipeComponent.getOutputBlockState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L85) |
| ` public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L20) |
| ` public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L20) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L20) |
| ` public TimeWarpRecipe getRecipe() ` | 末尾返回 ` this.recipe `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDTimeWarpRecipeComponent.java#L20) |

## MDUnpackRecipeComponent

` public class MDUnpackRecipeComponent extends MDBaseAnvilRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDUnpackRecipeComponent.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDUnpackRecipeComponent(UnpackRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(enableAlignCenter) `<br>实现调用 ` recipe.getInputItems() `<br>实现调用 ` recipe.getResultItems() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDUnpackRecipeComponent.java#L23) |
| ` @Nullable public List<ItemIngredientPredicate> getIngredients() ` | 末尾返回 ` this.ingredients `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDUnpackRecipeComponent.java#L13) |
| ` @Nullable public List<ChanceItemStack> getResultItems() ` | 末尾返回 ` this.resultItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDUnpackRecipeComponent.java#L13) |
| ` public List<BlockState> getInputBlockStates() ` | 末尾返回 ` this.inputBlockStates `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/anvil/MDUnpackRecipeComponent.java#L13) |
