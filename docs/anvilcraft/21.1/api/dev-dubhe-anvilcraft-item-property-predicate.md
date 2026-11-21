# dev.dubhe.anvilcraft.item.property.predicate



## ItemEnchantmentCountPredicate

` public record ItemEnchantmentCountPredicate(int min, int max) implements ItemSubPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ItemEnchantmentCountPredicate> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L15) |
| ` public static final StreamCodec<ByteBuf, ItemEnchantmentCountPredicate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, ItemEnchantmentCountPredicate::min, ByteBufCodecs.VAR_INT, ItemEnchantmentCountPredicate::max, ItemEnchantmentCountPredicate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L23) |
| ` public static ItemEnchantmentCountPredicate count(int count) ` | 末尾返回 ` new ItemEnchantmentCountPredicate(count, count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L31) |
| ` @Override public boolean matches(ItemStack stack) ` | 末尾返回 ` size >= this.min && size <= this.max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L35) |
| ` public ItemEnchantmentCountPredicate(int min, int max) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L14) |
| ` public int min() ` | 读取 record 分量 ` min ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L14) |
| ` public int max() ` | 读取 record 分量 ` max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchantmentCountPredicate.java#L14) |

## ItemSavedEntityPredicate

` public record ItemSavedEntityPredicate(Optional<HolderSet<EntityType<?>>> entitys, List<NumericTagValuePredicate> predicates, boolean isMonster) implements SingleComponentItemPredicate<SavedEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<ItemSavedEntityPredicate> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L27) |
| ` @SuppressWarnings("deprecation") public static ItemSavedEntityPredicate of(EntityType<?> entityType) ` | 末尾返回 ` new ItemSavedEntityPredicate(Optional.of(HolderSet.direct(entityType.builtInRegistryHolder())), new ArrayList<>(), false) `<br>[调用处 ItemCompressRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L40) |
| ` public static ItemSavedEntityPredicate any() ` | 末尾返回 ` new ItemSavedEntityPredicate(Optional.empty(), new ArrayList<>(), false) `<br>[调用处 TimeWarpRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L272) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L45) |
| ` public static ItemSavedEntityPredicate monster() ` | 末尾返回 ` new ItemSavedEntityPredicate(Optional.empty(), new ArrayList<>(), true) `<br>[调用处 TimeWarpRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L293) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L49) |
| ` public ItemSavedEntityPredicate predicate(Consumer<NumericTagValuePredicate.Builder> predicateBuilder) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L53) |
| ` @Override public boolean matches(ItemStack itemStack, SavedEntity component) ` | ` (optional.isEmpty()) ` 成立时提前返回 ` false `<br>` (this.entitys.isPresent() && !type.is(this.entitys.get())) ` 成立时提前返回 ` false `<br>` (this.isMonster && !component.isMonster()) ` 成立时提前返回 ` false `<br>末尾返回 ` this.predicates.stream().allMatch(it -> it.test(tag)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L60) |
| ` @Override public DataComponentType<SavedEntity> componentType() ` | 末尾返回 ` ModComponents.SAVED_ENTITY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L71) |
| ` public ItemSavedEntityPredicate(Optional<HolderSet<EntityType<?>>> entitys, List<NumericTagValuePredicate> predicates, boolean isMonster) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L22) |
| ` public Optional<HolderSet<EntityType<?>>> entitys() ` | 读取 record 分量 ` entitys ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L23) |
| ` public List<NumericTagValuePredicate> predicates() ` | 读取 record 分量 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L24) |
| ` public boolean isMonster() ` | 读取 record 分量 ` isMonster ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L22) |
