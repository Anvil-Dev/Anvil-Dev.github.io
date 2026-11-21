# dev.dubhe.anvilcraft.integration.jei.recipe



## BeaconConversionRecipe

` public class BeaconConversionRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final int cursedGoldBlockLayers ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L9) |
| ` public final int cursedGoldBlockCount ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L10) |
| ` public final float chance ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L11) |
| ` public final ChanceItemStack corruptedBeaconOutput ` | 字段类型为 ` ChanceItemStack ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L12) |
| ` public final ChanceItemStack beaconOutput ` | 字段类型为 ` ChanceItemStack ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L13) |
| ` public BeaconConversionRecipe(int cursedGoldBlockLayers, float chance) ` | 实现调用 ` ChanceItemStack.of(ModBlocks.CORRUPTED_BEACON.asStack(), chance) `<br>实现调用 ` ModBlocks.CORRUPTED_BEACON.asStack() `<br>实现调用 ` ChanceItemStack.of(Blocks.BEACON.asItem().getDefaultInstance(), 1.0f - chance) `<br>[调用处 BeaconConversionRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L29) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L15) |
| ` public static ImmutableList<BeaconConversionRecipe> getAllRecipes() ` | 末尾返回 ` builder.build() `<br>[调用处 BeaconConversionCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/BeaconConversionCategory.java#L163) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L27) |

## ComplexFluidJeiRecipe

` public final class ComplexFluidJeiRecipe extends FluidMixingRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L30)

JEI 专用的复杂流体反应配方，用于展示同时包含物品和流体的大锅反应。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ComplexFluidJeiRecipe fromSolidLiquid(SolidLiquidRecipe recipe) ` | 末尾返回 ` new ComplexFluidJeiRecipe(recipe.getInputItems(), recipe.getResultItems(), asGroup(inputs), results, false, false, cauldron.consume() <= 0 && cauldron.transforms().isEmpty()) `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L264) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L80) |
| ` public static ComplexFluidJeiRecipe assimilation(List<ResourceKey<Enchantment>> enchantments) ` | 实现调用 ` LiquidEnchantmentJeiRecipeUtil.createFluidStacks(enchantments, 8) `<br>实现调用 ` LiquidEnchantmentJeiRecipeUtil.createFluidStacks(enchantments, 9) `<br>实现调用 ` List.of(ItemIngredientPredicate.of(Items.LAPIS_LAZULI).build()) `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L272) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L101) |
| ` public static ComplexFluidJeiRecipe cleanse(List<ResourceKey<Enchantment>> enchantments) ` | 实现调用 ` List.of(ItemIngredientPredicate.of(ModItemTags.SILVER_NUGGETS).build()) `<br>实现调用 ` ItemIngredientPredicate.of(ModItemTags.SILVER_NUGGETS).build() `<br>实现调用 ` ItemIngredientPredicate.of(ModItemTags.SILVER_NUGGETS) `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L276) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L117) |
| ` public static ComplexFluidJeiRecipe curseGoldIngot(List<ResourceKey<Enchantment>> curses) ` | 实现调用 ` List.of(ItemIngredientPredicate.of(Items.GOLD_INGOT).withCount(16).build()) `<br>实现调用 ` ItemIngredientPredicate.of(Items.GOLD_INGOT).withCount(16).build() `<br>实现调用 ` ItemIngredientPredicate.of(Items.GOLD_INGOT).withCount(16) `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L283) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L128) |
| ` public static ComplexFluidJeiRecipe curseGoldBlock(List<ResourceKey<Enchantment>> curses) ` | 实现调用 ` List.of(ItemIngredientPredicate.of(Items.GOLD_BLOCK).withCount(16).build()) `<br>实现调用 ` ItemIngredientPredicate.of(Items.GOLD_BLOCK).withCount(16).build() `<br>实现调用 ` ItemIngredientPredicate.of(Items.GOLD_BLOCK).withCount(16) `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L287) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L139) |
| ` public static ComplexFluidJeiRecipe enchantGoldIngot() ` | 实现调用 ` fluids.add(new FluidStack(ModFluids.LIQUID_ENCHANTMENT.get(), 16)) `<br>实现调用 ` ModFluids.LIQUID_ENCHANTMENT.get() `<br>实现调用 ` mending.set(ModComponents.LIQUID_ENCHANTMENT, Enchantments.MENDING) `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L292) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L150) |
| ` public static ComplexFluidJeiRecipe enchantGoldBlock() ` | 实现调用 ` fluids.add(new FluidStack(ModFluids.LIQUID_ENCHANTMENT.get(), 144)) `<br>实现调用 ` ModFluids.LIQUID_ENCHANTMENT.get() `<br>实现调用 ` mending.set(ModComponents.LIQUID_ENCHANTMENT, Enchantments.MENDING) `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L296) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L169) |
| ` public List<ChanceItemStack> getDisplayItemResults() ` | 末尾返回 ` this.resultItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L188) |
| ` public List<List<FluidStack>> getDisplayFluidInputs() ` | 末尾返回 ` copyFluidGroups(this.displayFluidInputs) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L192) |
| ` public int getDisplayFluidInputCount() ` | 末尾返回 ` this.displayFluidInputs.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L196) |
| ` public List<List<FluidStack>> getDisplayFluidResults() ` | 末尾返回 ` copyFluidGroups(this.displayFluidResults) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L200) |
| ` public int getDisplayFluidResultCount() ` | 末尾返回 ` this.displayFluidResults.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L204) |
| ` public boolean shouldLinkFluidVariants() ` | 末尾返回 ` this.linkFluidVariants ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L208) |
| ` public List<ItemIngredientPredicate> getInputItems() ` | 末尾返回 ` this.inputItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L30) |
| ` public boolean isHeaterRequired() ` | 末尾返回 ` this.heaterRequired `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L30) |
| ` public boolean isFluidInputNotConsumed() ` | 输入流体只要求锅里有、不会被消耗掉（固液反应常见），展示时按催化剂处理<br>末尾返回 ` this.fluidInputNotConsumed `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L30) |

## DecayRecipe

` public record DecayRecipe(ResourceLocation id, List<Block> centers, List<Block> results, TagKey<Block> resultTag, List<BlockPos> matchingNeighbors, Map<BlockPos, Block> fixedNeighbors) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DecayRecipe(ResourceLocation id, List<Block> centers, List<Block> results, TagKey<Block> resultTag, List<BlockPos> matchingNeighbors, Map<BlockPos, Block> fixedNeighbors) ` | ` (centers.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Decay recipe must have at least one center block") `<br>` (resultTag == null && results.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Decay recipe must have results or a result tag") `<br>` (resultTag == null && centers.size() > 1 && results.size() != centers.size()) ` 成立时抛出 ` new IllegalArgumentException("Multi-center decay results must match the number of center blocks") `<br>[调用处 DecayRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L50) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L32) |
| ` public static List<DecayRecipe> getAllRecipes() ` | 实现调用 ` AnvilCraft.of("decay/void_matter") `<br>实现调用 ` List.of(ModBlocks.VOID_MATTER_BLOCK.get()) `<br>实现调用 ` ModBlocks.VOID_MATTER_BLOCK.get() `<br>[调用处 DecayCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/DecayCategory.java#L241) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L48) |
| ` public ResourceLocation id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L18) |
| ` public List<Block> centers() ` | 读取 record 分量 ` centers ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L19) |
| ` public List<Block> results() ` | 读取 record 分量 ` results ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L20) |
| ` public TagKey<Block> resultTag() ` | 读取 record 分量 ` resultTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L21) |
| ` public List<BlockPos> matchingNeighbors() ` | 读取 record 分量 ` matchingNeighbors ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L22) |
| ` public Map<BlockPos, Block> fixedNeighbors() ` | 读取 record 分量 ` fixedNeighbors ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L17) |

## LiquidEnchantmentJeiRecipeUtil

` public final class LiquidEnchantmentJeiRecipeUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/LiquidEnchantmentJeiRecipeUtil.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<ResourceKey<Enchantment>> getEnchantments(boolean cursesOnly) ` | ` (connection == null) ` 成立时提前返回 ` List.of() `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L268) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/LiquidEnchantmentJeiRecipeUtil.java#L22) |
| ` public static List<FluidStack> createFluidStacks(List<ResourceKey<Enchantment>> enchantments, int amount) ` | 末尾返回 ` List.copyOf(fluids) `<br>[调用处 ComplexFluidJeiRecipe.assimilation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/ComplexFluidJeiRecipe.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/LiquidEnchantmentJeiRecipeUtil.java#L35) |

## MeshRecipeGroup

` public record MeshRecipeGroup(ItemIngredientPredicate ingredient, List<Result> results) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int maxRows ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L24) |
| ` public static ImmutableList<MeshRecipeGroup> getAllRecipesGrouped() ` | 末尾返回 ` jeiRecipes.build() `<br>[调用处 MeshRecipeCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/anvil/MeshRecipeCategory.java#L132) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L26) |
| ` public MeshRecipeGroup(ItemIngredientPredicate ingredient, List<Result> results) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public ItemIngredientPredicate ingredient() ` | 读取 record 分量 ` ingredient ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public List<Result> results() ` | 读取 record 分量 ` results ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |

## MeshRecipeGroup.Result

` public record Result(ItemStack item, NumberProvider provider, double expectedCount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(ItemStack item, NumberProvider provider) ` | 执行 ` this(item, provider, NumberProviderUtil.expected(provider)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L67) |
| ` public ItemStack item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public NumberProvider provider() ` | 读取 record 分量 ` provider ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public double expectedCount() ` | 读取 record 分量 ` expectedCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |

## MineralFountainJeiRecipe

` public record MineralFountainJeiRecipe(ResourceLocation id, List<SideRequirement> sideRequirements, List<BlockState> fromBlocks, List<Outcome> outcomes, List<FluidStack> fluids, ResourceLocation dimension, Double replacementChance, Component replacementTarget) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L14)

JEI 展示用的矿物涌泉配方：同「维度 + 优先级 + 材料方块 + 周围需求」的多条配方合并为一条，结果同格轮换。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainJeiRecipe(ResourceLocation id, List<SideRequirement> sideRequirements, List<BlockState> fromBlocks, List<Outcome> outcomes, List<FluidStack> fluids, ResourceLocation dimension, Double replacementChance, Component replacementTarget) ` | 实现调用 ` List.copyOf(sideRequirements) `<br>实现调用 ` List.copyOf(fromBlocks) `<br>实现调用 ` List.copyOf(outcomes) `<br>[调用处 MineralFountainCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/MineralFountainCategory.java#L281) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L24) |
| ` public List<BlockState> outcomeStates() ` | 全部结果的方块状态；流体产出本身也是方块，一并轮换。<br>末尾返回 ` this.outcomes.stream().map(Outcome::state).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L32) |
| ` public List<SideRequirement> sideSlots() ` | 把周围需求摊到四个底座位置上；数量之和通常为 4，不足时剩余位置为空。<br>末尾返回 ` List.copyOf(slots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L37) |
| ` public static final int SIDE_SLOT_COUNT ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L47) |
| ` public double totalChance() ` | 条目整体的单次产出概率。<br>末尾返回 ` this.outcomes.stream().mapToDouble(Outcome::chance).sum() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L50) |
| ` public double chanceOf(BlockState state) ` | 结果方块的最终概率（已含权重占比）；未收录时返回 -1。<br>末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L55) |
| ` public ResourceLocation id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L15) |
| ` public List<SideRequirement> sideRequirements() ` | 读取 record 分量 ` sideRequirements ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L16) |
| ` public List<BlockState> fromBlocks() ` | 读取 record 分量 ` fromBlocks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L17) |
| ` public List<Outcome> outcomes() ` | 读取 record 分量 ` outcomes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L18) |
| ` public List<FluidStack> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L19) |
| ` public ResourceLocation dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L20) |
| ` public Double replacementChance() ` | 读取 record 分量 ` replacementChance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L21) |
| ` public Component replacementTarget() ` | 读取 record 分量 ` replacementTarget ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L14) |

## MineralFountainJeiRecipe.Outcome

` public record Outcome(BlockState state, double chance) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L62)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Outcome(BlockState state, double chance) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L62) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L62) |
| ` public double chance() ` | 读取 record 分量 ` chance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L62) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L62) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L62) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L62) |

## MineralFountainJeiRecipe.SideRequirement

` public record SideRequirement(List<BlockState> states, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L69)

一项底座需求：四个相邻面中需要 count 个 states 中的方块。 谓词命中多个方块（如标签）时 states 有多项，展示时轮换。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SideRequirement(List<BlockState> states, int count) ` | 执行 ` states = List.copyOf(states) `<br>[调用处 MineralFountainCategory.replacementAround](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/MineralFountainCategory.java#L491) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L70) |
| ` public List<BlockState> states() ` | 读取 record 分量 ` states ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L69) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L69) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L69) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L69) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L69) |

## MobTransformJeiRecipe

` public record MobTransformJeiRecipe(ResourceLocation id, EntityType<?> input, List<ItemIngredientPredicate> inputItems, List<TransformResult> results, ItemStack outputItem, int chancePercentPerItem) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MobTransformJeiRecipe(ResourceLocation id, EntityType<?> input, List<ItemIngredientPredicate> inputItems, List<TransformResult> results, ItemStack outputItem, int chancePercentPerItem) ` | 实现调用 ` List.copyOf(inputItems) `<br>实现调用 ` List.copyOf(results) `<br>实现调用 ` outputItem.copy() `<br>[调用处 MobTransformJeiRecipe.ofStandard](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L30) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L22) |
| ` public static MobTransformJeiRecipe ofStandard(RecipeHolder<MobTransformRecipe> holder) ` | 末尾返回 ` new MobTransformJeiRecipe( holder.id(), recipe.input(), List.of(), recipe.results(), ItemStack.EMPTY, 0 ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L28) |
| ` public static MobTransformJeiRecipe ofWithItem(RecipeHolder<MobTransformWithItemRecipe> holder) ` | 末尾返回 ` new MobTransformJeiRecipe( holder.id(), recipe.input(), recipe.itemIngredients(), List.of(recipe.specialResult()), recipe.itemResult(), recipe.chancePercentPerItem() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L40) |
| ` public boolean hasHeldItem() ` | 末尾返回 ` !this.inputItems.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L52) |
| ` public ResourceLocation id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L15) |
| ` public EntityType<?> input() ` | 读取 record 分量 ` input ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L16) |
| ` public List<ItemIngredientPredicate> inputItems() ` | 读取 record 分量 ` inputItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L17) |
| ` public List<TransformResult> results() ` | 读取 record 分量 ` results ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L18) |
| ` public ItemStack outputItem() ` | 读取 record 分量 ` outputItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L19) |
| ` public int chancePercentPerItem() ` | 读取 record 分量 ` chancePercentPerItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L14) |

## UseItemOnBlockRecipe

` public record UseItemOnBlockRecipe(Block inputBlock, Item item, Block outputBlock) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L20)

加工台方块的右键转化配方。<br>参数 ` inputBlock ` 转化前的方块<br>参数 ` item ` 手持的物品<br>参数 ` outputBlock ` 转化后的方块

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UseItemOnBlockRecipe(Block inputBlock, Item item, Block outputBlock) ` | ` (inputBlock.asItem() == Items.AIR \|\| item == Items.AIR \|\| outputBlock.asItem() == Items.AIR) ` 成立时抛出 ` new IllegalArgumentException("Conversion recipe cannot contain empty entries") `<br>[调用处 UseItemOnBlockRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L25) |
| ` public ItemStack inputStack() ` | 末尾返回 ` new ItemStack(this.inputBlock) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L31) |
| ` public ItemStack toolStack() ` | 末尾返回 ` new ItemStack(this.item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L35) |
| ` public ItemStack outputStack() ` | 末尾返回 ` new ItemStack(this.outputBlock) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L39) |
| ` public static List<UseItemOnBlockRecipe> getAllRecipes() ` | 实现调用 ` ModBlocks.STAMPING_PLATFORM.get() `<br>实现调用 ` ModBlocks.CRUSHING_TABLE.get() `<br>实现调用 ` Blocks.SCAFFOLDING.asItem() `<br>[调用处 UseItemOnBlockCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/UseItemOnBlockCategory.java#L143) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L43) |
| ` public Block inputBlock() ` | 读取 record 分量 ` inputBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L21) |
| ` public Item item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L22) |
| ` public Block outputBlock() ` | 读取 record 分量 ` outputBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L20) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L20) |
