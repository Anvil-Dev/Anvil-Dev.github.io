# dev.dubhe.anvilcraft.integration.jei.recipe



## BeaconConversionRecipe

` public class BeaconConversionRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final int cursedGoldBlockLayers ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L10) |
| ` public final int cursedGoldBlockCount ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L11) |
| ` public final float chance ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L12) |
| ` public final ChanceItemStack corruptedBeaconOutput ` | 字段类型为 ` ChanceItemStack ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L13) |
| ` public final ChanceItemStack beaconOutput ` | 字段类型为 ` ChanceItemStack ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L14) |
| ` public BeaconConversionRecipe(int cursedGoldBlockLayers, float chance) ` | 实现调用 ` ChanceItemStack.of(ItemStackTemplate.fromNonEmptyStack(ModBlocks.CORRUPTED_BEACON.asStack()), chance) `<br>实现调用 ` ItemStackTemplate.fromNonEmptyStack(ModBlocks.CORRUPTED_BEACON.asStack()) `<br>实现调用 ` ModBlocks.CORRUPTED_BEACON.asStack() `<br>[调用处 BeaconConversionRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L30) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L16) |
| ` public static ImmutableList<BeaconConversionRecipe> getAllRecipes() ` | 末尾返回 ` builder.build() `<br>[调用处 BeaconConversionCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/BeaconConversionCategory.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/BeaconConversionRecipe.java#L28) |

## DecayRecipe

` public record DecayRecipe(Identifier id, List<Block> centers, List<Block> results, TagKey<Block> resultTag, List<BlockPos> matchingNeighbors, Map<BlockPos, Block> fixedNeighbors) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DecayRecipe(Identifier id, List<Block> centers, List<Block> results, TagKey<Block> resultTag, List<BlockPos> matchingNeighbors, Map<BlockPos, Block> fixedNeighbors) ` | ` (centers.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Decay recipe must have at least one center block") `<br>` (resultTag == null && results.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Decay recipe must have results or a result tag") `<br>` (resultTag == null && centers.size() > 1 && results.size() != centers.size()) ` 成立时抛出 ` new IllegalArgumentException("Multi-center decay results must match the number of center blocks") `<br>[调用处 DecayRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L50) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L32) |
| ` public static List<DecayRecipe> getAllRecipes() ` | 实现调用 ` AnvilCraft.of("decay/void_matter") `<br>实现调用 ` List.of(ModBlocks.VOID_MATTER_BLOCK.get()) `<br>实现调用 ` ModBlocks.VOID_MATTER_BLOCK.get() `<br>[调用处 DecayCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/DecayCategory.java#L239) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L48) |
| ` public Identifier id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L18) |
| ` public List<Block> centers() ` | 读取 record 分量 ` centers ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L19) |
| ` public List<Block> results() ` | 读取 record 分量 ` results ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L20) |
| ` public TagKey<Block> resultTag() ` | 读取 record 分量 ` resultTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L21) |
| ` public List<BlockPos> matchingNeighbors() ` | 读取 record 分量 ` matchingNeighbors ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L22) |
| ` public Map<BlockPos, Block> fixedNeighbors() ` | 读取 record 分量 ` fixedNeighbors ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/DecayRecipe.java#L17) |

## LiquidEnchantmentJeiRecipeUtil

` public final class LiquidEnchantmentJeiRecipeUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/LiquidEnchantmentJeiRecipeUtil.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<Holder.Reference<Enchantment>> getEnchantments(boolean cursesOnly) ` | ` (connection == null) ` 成立时提前返回 ` List.of() `<br>[调用处 SolidLiquidCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L256) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/LiquidEnchantmentJeiRecipeUtil.java#L20) |
| ` public static List<FluidStack> createFluidStacks( List<? extends Holder<Enchantment>> enchantments, int amount ) ` | 末尾返回 ` List.copyOf(fluids) `<br>[调用处 ComplexFluidJeiRecipe.assimilation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/ComplexFluidJeiRecipe.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/LiquidEnchantmentJeiRecipeUtil.java#L31) |

## MeshRecipeGroup

` public record MeshRecipeGroup(ItemIngredientPredicate ingredient, List<Result> results) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int maxRows ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L24) |
| ` public static ImmutableList<MeshRecipeGroup> getAllRecipesGrouped() ` | 末尾返回 ` jeiRecipes.build() `<br>[调用处 MeshRecipeCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/anvil/MeshRecipeCategory.java#L129) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L26) |
| ` public MeshRecipeGroup(ItemIngredientPredicate ingredient, List<Result> results) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public ItemIngredientPredicate ingredient() ` | 读取 record 分量 ` ingredient ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public List<Result> results() ` | 读取 record 分量 ` results ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L22) |

## MeshRecipeGroup.Result

` public record Result(ItemStackTemplate item, NumberProvider provider, double expectedCount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(ItemStackTemplate item, NumberProvider provider) ` | 执行 ` this(item, provider, NumberProviderUtil.expected(provider)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L67) |
| ` public ItemStackTemplate item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public NumberProvider provider() ` | 读取 record 分量 ` provider ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public double expectedCount() ` | 读取 record 分量 ` expectedCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MeshRecipeGroup.java#L66) |

## MineralFountainJeiRecipe

` public record MineralFountainJeiRecipe(Identifier id, List<SideRequirement> sideRequirements, List<BlockState> fromBlocks, List<Outcome> outcomes, List<FluidStack> fluids, Identifier dimension, Double replacementChance, Component replacementTarget) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainJeiRecipe(Identifier id, List<SideRequirement> sideRequirements, List<BlockState> fromBlocks, List<Outcome> outcomes, List<FluidStack> fluids, Identifier dimension, Double replacementChance, Component replacementTarget) ` | 实现调用 ` List.copyOf(sideRequirements) `<br>实现调用 ` List.copyOf(fromBlocks) `<br>实现调用 ` List.copyOf(outcomes) `<br>[调用处 MineralFountainCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/MineralFountainCategory.java#L286) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L22) |
| ` public List<BlockState> outcomeStates() ` | 末尾返回 ` this.outcomes.stream().map(Outcome::state).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L29) |
| ` public List<SideRequirement> sideSlots() ` | 末尾返回 ` List.copyOf(slots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L33) |
| ` public static final int SIDE_SLOT_COUNT ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L43) |
| ` public double totalChance() ` | 末尾返回 ` this.outcomes.stream().mapToDouble(Outcome::chance).sum() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L45) |
| ` public double chanceOf(BlockState state) ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L49) |
| ` public Identifier id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L13) |
| ` public List<SideRequirement> sideRequirements() ` | 读取 record 分量 ` sideRequirements ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L14) |
| ` public List<BlockState> fromBlocks() ` | 读取 record 分量 ` fromBlocks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L15) |
| ` public List<Outcome> outcomes() ` | 读取 record 分量 ` outcomes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L16) |
| ` public List<FluidStack> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L17) |
| ` public Identifier dimension() ` | 读取 record 分量 ` dimension ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L18) |
| ` public Double replacementChance() ` | 读取 record 分量 ` replacementChance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L19) |
| ` public Component replacementTarget() ` | 读取 record 分量 ` replacementTarget ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L12) |

## MineralFountainJeiRecipe.Outcome

` public record Outcome(BlockState state, double chance) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L56)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Outcome(BlockState state, double chance) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L56) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L56) |
| ` public double chance() ` | 读取 record 分量 ` chance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L56) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L56) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L56) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L56) |

## MineralFountainJeiRecipe.SideRequirement

` public record SideRequirement(List<BlockState> states, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L59)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SideRequirement(List<BlockState> states, int count) ` | 执行 ` states = List.copyOf(states) `<br>[调用处 MineralFountainCategory.replacementAround](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/MineralFountainCategory.java#L468) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L60) |
| ` public List<BlockState> states() ` | 读取 record 分量 ` states ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L59) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L59) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L59) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L59) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MineralFountainJeiRecipe.java#L59) |

## MobTransformJeiRecipe

` public record MobTransformJeiRecipe(Identifier id, EntityType<?> input, List<ItemIngredientPredicate> inputItems, List<TransformResult> results, ItemStack outputItem, int chancePercentPerItem) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MobTransformJeiRecipe(Identifier id, EntityType<?> input, List<ItemIngredientPredicate> inputItems, List<TransformResult> results, ItemStack outputItem, int chancePercentPerItem) ` | 实现调用 ` List.copyOf(inputItems) `<br>实现调用 ` List.copyOf(results) `<br>实现调用 ` outputItem.copy() `<br>[调用处 MobTransformJeiRecipe.ofStandard](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L30) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L22) |
| ` public static MobTransformJeiRecipe ofStandard(RecipeHolder<MobTransformRecipe> holder) ` | 末尾返回 ` new MobTransformJeiRecipe( holder.id().identifier(), recipe.input(), List.of(), recipe.results(), ItemStack.EMPTY, 0 ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L28) |
| ` public static MobTransformJeiRecipe ofWithItem(RecipeHolder<MobTransformWithItemRecipe> holder) ` | 实现调用 ` holder.value() `<br>实现调用 ` holder.id().identifier() `<br>实现调用 ` holder.id() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L40) |
| ` public boolean hasHeldItem() ` | 末尾返回 ` !this.inputItems.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L52) |
| ` public Identifier id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L15) |
| ` public EntityType<?> input() ` | 读取 record 分量 ` input ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L16) |
| ` public List<ItemIngredientPredicate> inputItems() ` | 读取 record 分量 ` inputItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L17) |
| ` public List<TransformResult> results() ` | 读取 record 分量 ` results ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L18) |
| ` public ItemStack outputItem() ` | 读取 record 分量 ` outputItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L19) |
| ` public int chancePercentPerItem() ` | 读取 record 分量 ` chancePercentPerItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/MobTransformJeiRecipe.java#L14) |

## UseItemOnBlockRecipe

` public record UseItemOnBlockRecipe(Block inputBlock, Item item, Block outputBlock) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L20)

加工台方块的右键转化配方。<br>参数 ` inputBlock ` 转化前的方块<br>参数 ` item ` 手持的物品<br>参数 ` outputBlock ` 转化后的方块

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UseItemOnBlockRecipe(Block inputBlock, Item item, Block outputBlock) ` | ` (inputBlock.asItem() == Items.AIR \|\| item == Items.AIR \|\| outputBlock.asItem() == Items.AIR) ` 成立时抛出 ` new IllegalArgumentException("Conversion recipe cannot contain empty entries") `<br>[调用处 UseItemOnBlockRecipe.getAllRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L25) |
| ` public ItemStack inputStack() ` | 末尾返回 ` new ItemStack(this.inputBlock) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L31) |
| ` public ItemStack toolStack() ` | 末尾返回 ` new ItemStack(this.item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L35) |
| ` public ItemStack outputStack() ` | 末尾返回 ` new ItemStack(this.outputBlock) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L39) |
| ` public static List<UseItemOnBlockRecipe> getAllRecipes() ` | 实现调用 ` ModBlocks.STAMPING_PLATFORM.get() `<br>实现调用 ` ModBlocks.CRUSHING_TABLE.get() `<br>实现调用 ` Blocks.SCAFFOLDING.asItem() `<br>[调用处 UseItemOnBlockCategory.registerRecipes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/UseItemOnBlockCategory.java#L141) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L43) |
| ` public Block inputBlock() ` | 读取 record 分量 ` inputBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L21) |
| ` public Item item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L22) |
| ` public Block outputBlock() ` | 读取 record 分量 ` outputBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L20) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/recipe/UseItemOnBlockRecipe.java#L20) |
