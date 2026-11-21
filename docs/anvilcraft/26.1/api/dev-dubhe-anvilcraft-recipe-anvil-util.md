# dev.dubhe.anvilcraft.recipe.anvil.util



## Distance

` public record Distance(Type type, int distance, boolean isHorizontal) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L18)

距离定义类 用于定义不同类型的距離计算方式和范围检查

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Distance DEFAULT ` | 默认距离（曼哈顿距离，距离1，水平方向）<br>初值 ` new Distance(Type.MANHATTAN, 1, true) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L20) |
| ` public static final Codec<Distance> CODEC ` | Distance编解码器<br>由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L23) |
| ` public static final StreamCodec<ByteBuf, Distance> STREAM_CODEC ` | Distance流编解码器<br>初值 ` StreamCodec.composite( Type.STREAM_CODEC, Distance::type, ByteBufCodecs.VAR_INT, Distance::distance, ByteBufCodecs.BOOL, Distance::isHorizontal, Distance::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L30) |
| ` public boolean isInRange(Vec3 original, Vec3 other) ` | 检查点是否在范围内<br>参数 ` original ` 原点<br>参数 ` other ` 其他点<br>返回 是否在范围内<br>实现调用 ` original.subtract(other) `<br>实现调用 ` Math.abs(deltaV.x) `<br>实现调用 ` Math.abs(deltaV.z) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L42) |
| ` public Iterable<BlockPos> getAllPosesInRange(Vec3 centerPos) ` | 获取范围内所有位置<br>参数 ` centerPos ` 中心位置<br>返回 位置迭代器<br>实现调用 ` BlockPos.containing(centerPos.x, centerPos.y, centerPos.z) `<br>实现调用 ` BlockPos.withinManhattan(center, this.distance, this.distance, this.distance) `<br>实现调用 ` center.offset(-this.distance, -this.distance, -this.distance) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L61) |
| ` public Distance(Type type, int distance, boolean isHorizontal) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L18) |
| ` public Type type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L18) |
| ` public int distance() ` | 读取 record 分量 ` distance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L18) |
| ` public boolean isHorizontal() ` | 读取 record 分量 ` isHorizontal ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L18) |

## Distance.Type

` public enum Type `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L103)

距离类型枚举

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` EUCLIDEAN ` | 欧几里得距离 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L105) |
| ` MANHATTAN ` | 曼哈顿距离 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L108) |
| ` CHEBYSHEV ` | 切比雪夫距离 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L111) |
| ` public static final Codec<Type> LOWER_NAME_CODEC ` | 小写名称编解码器<br>初值 ` CodecUtil.enumCodecInLowerName(Type.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L114) |
| ` public static final StreamCodec<ByteBuf, Type> STREAM_CODEC ` | Type流编解码器<br>初值 ` StreamCodecUtil.enumStreamCodec(Type.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L117) |
| ` public static Type[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L103) |
| ` public static Type valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/Distance.java#L103) |

## FishTankRecipes

` public final class FishTankRecipes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/FishTankRecipes.java#L44)

在鱼缸副本中匹配加工配方，将容量足够的批次及其流体变化一次提交，避免溢出产物成为掉落物。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean trigger(InWorldRecipeManager manager, InWorldRecipeContext impact, FishTankBlockEntity tank) ` | 返回是否已经处理本次触发；其他类型的配方交回世界内配方管理器。<br>末尾返回 ` true `<br>[调用处 AnvilEventListener.handleNeoAnvilRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L127) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/FishTankRecipes.java#L49) |

## RecipeOutputTracker

` public final class RecipeOutputTracker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void mark(ItemEntity entity) ` | 实现调用 ` entity.blockPosition() `<br>实现调用 ` entity.level().getBlockState(pos).is(BlockTags.CAULDRONS) `<br>实现调用 ` entity.level().getBlockState(pos) `<br>[调用处 InWorldRecipeEventListener.spawnItemEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L29) |
| ` public static @Nullable BlockPos getOrigin(ItemEntity entity) ` | ` (!data.contains(POSITION)) ` 成立时提前返回 ` null `<br>` (entity.blockPosition().equals(pos) && entity.level().dimension().identifier().toString().equals(data.getStringOr(DIMENSION, "")) && entity.level().getBlockState(pos).is(BlockTags.CAULDRONS)) ` 成立时提前返回 ` pos `<br>末尾返回 ` null `<br>[调用处 ItemEntityEventListener.onItemEntityJoinLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L37) |
| ` public static boolean isOutputOf(ItemEntity entity, BlockPos pos) ` | 末尾返回 ` pos.equals(getOrigin(entity)) `<br>[调用处 InWorldRecipeEventListener.selectRecipeOutput](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/InWorldRecipeEventListener.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L49) |
| ` public static boolean canMerge(ItemEntity first, ItemEntity second) ` | 末尾返回 ` Objects.equals(getOrigin(first), getOrigin(second)) `<br>[调用处 ItemEntityMixin.keepRecipeOutputSeparate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L283) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L53) |
| ` public static Predicate<ICacheElement> compressionSources(InWorldRecipeContext context) ` | ` (!RecipeOutputTracker.requiresRecipeOutputForCompression(below)) ` 成立时提前返回 ` ALL_SOURCES `<br>末尾返回 ` element -> isRecipeOutput(element, level, cauldronPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L57) |
| ` public static boolean requiresRecipeOutputForCompression(BlockState below) ` | 锅下工作方块生效时，压缩配方只接受尚未取出的加工产物。<br>末尾返回 ` CauldronProcessing.isActive(below) `<br>[调用处 LargeCauldronBlockEntity.previewFirstRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L1110) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L68) |

## WrapUtils

` public class WrapUtils `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L27)

包装工具类 提供各种配方相关对象的创建和转换工具方法

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<IRecipePredicate<?>> getPredicates( List<BlockStatePredicate> results ) ` | 根据方块状态谓词列表创建HasBlock谓词列表<br>参数 ` results ` 方块状态谓词列表<br>返回 HasBlock谓词列表<br>末尾返回 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L32) |
| ` public static IRecipePredicate<?> getIngredientPredicate( BlockStatePredicate block ) ` | 根据方块状态谓词创建HasBlockIngredient谓词<br>参数 ` block ` 方块状态谓词<br>返回 HasBlockIngredient谓词<br>末尾返回 ` new HasBlockIngredient(new Vec3(0, -1, 0), block) `<br>[调用处 WrapUtils.getIngredientPredicates](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L47) |
| ` public static @Unmodifiable List<IRecipePredicate<?>> getIngredientPredicates( BlockStatePredicate block ) ` | 根据方块状态谓词创建HasBlockIngredient谓词列表（不可变）<br>参数 ` block ` 方块状态谓词<br>返回 HasBlockIngredient谓词列表<br>末尾返回 ` List.of(WrapUtils.getIngredientPredicate(block)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L57) |
| ` public static List<IRecipePredicate<?>> getIngredientPredicates( List<BlockStatePredicate> results ) ` | 根据方块状态谓词列表创建HasBlockIngredient谓词列表<br>参数 ` results ` 方块状态谓词列表<br>返回 HasBlockIngredient谓词列表<br>末尾返回 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L67) |
| ` public static @Unmodifiable List<IRecipeOutcome<?>> getOutcomes(ChanceBlockState result, int offsetY) ` | 根据ChanceBlockState和Y轴偏移创建结果列表（不可变）<br>参数 ` result ` ChanceBlockState<br>参数 ` offsetY ` Y轴偏移<br>返回 结果列表<br>末尾返回 ` List.of(SetBlock.fromState(result, new Vec3(0, offsetY, 0))) `<br>[调用处 WrapUtils.getOutcomes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L83) |
| ` public static @Unmodifiable List<IRecipeOutcome<?>> getOutcomes( ChanceBlockState result ) ` | 根据ChanceBlockState创建结果列表（不可变）<br>参数 ` result ` ChanceBlockState<br>返回 结果列表<br>末尾返回 ` WrapUtils.getOutcomes(result, -1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L91) |
| ` public static List<IRecipeOutcome<?>> getOutcomes( List<ChanceBlockState> results ) ` | 根据ChanceBlockState列表创建结果列表<br>参数 ` results ` ChanceBlockState列表<br>返回 结果列表<br>末尾返回 ` outcomes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L101) |
| ` public static ItemStackTemplate getItem(ChanceBlockState result) ` | 根据ChanceBlockState获取物品<br>参数 ` result ` ChanceBlockState<br>返回 物品<br>` (state.isEmpty() \|\| state.isAir()) ` 成立时提前返回 ` new ItemStackTemplate(Items.ANVIL) `<br>末尾返回 ` new ItemStackTemplate(item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L116) |
| ` public static Item getItem(List<ChanceBlockState> results) ` | 根据ChanceBlockState列表获取物品<br>参数 ` results ` ChanceBlockState列表<br>返回 物品<br>` (results.isEmpty()) ` 成立时提前返回 ` Items.ANVIL `<br>末尾返回 ` WrapUtils.getItem(results.getFirst()).item().value() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L128) |
| ` public static Identifier cauldron2Fluid(Block cauldron) ` | 将炼药锅方块转换为流体ID<br>参数 ` cauldron ` 炼药锅方块<br>返回 流体ID<br>` (fluid != null) ` 成立时提前返回 ` fluid `<br>末尾返回 ` Identifier.fromNamespaceAndPath(namespace, path) `<br>[调用处 HasCauldron.getCurFluidStack](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldron.java#L366) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L137) |
| ` public WrapUtils() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/WrapUtils.java#L27) |
