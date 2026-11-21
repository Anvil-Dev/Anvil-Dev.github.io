# dev.dubhe.anvilcraft.item.property.predicate



## ExtraEnchantmentsPredicate

` public class ExtraEnchantmentsPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static MercilessEnchantments merciless(List<EnchantmentPredicate> enchantments) ` | 末尾返回 ` new MercilessEnchantments(enchantments) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L14) |
| ` public static DisabledEnchantments disabled(List<EnchantmentPredicate> enchantments) ` | 末尾返回 ` new DisabledEnchantments(enchantments) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L18) |
| ` public ExtraEnchantmentsPredicate() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L13) |

## ExtraEnchantmentsPredicate.DisabledEnchantments

` public static class DisabledEnchantments extends EnchantmentsPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L48)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<DisabledEnchantments> CODEC ` | 初值 ` EnchantmentsPredicate.codec(DisabledEnchantments::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L49) |
| ` @Override public DataComponentType<ItemEnchantments> componentType() ` | 末尾返回 ` ModComponents.DISABLED_ENCHANTMENTS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L55) |
| ` @Override public boolean equals(Object obj) ` | ` (!(obj instanceof DisabledEnchantments disabled)) ` 成立时提前返回 ` false `<br>末尾返回 ` this.enchantments().equals(disabled.enchantments()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L60) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hashCode(this.enchantments()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L68) |

## ExtraEnchantmentsPredicate.MercilessEnchantments

` public static class MercilessEnchantments extends EnchantmentsPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<MercilessEnchantments> CODEC ` | 初值 ` EnchantmentsPredicate.codec(MercilessEnchantments::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L23) |
| ` @Override public DataComponentType<ItemEnchantments> componentType() ` | 末尾返回 ` ModComponents.MERCILESS_ENCHANTMENTS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L29) |
| ` @Override public boolean equals(Object obj) ` | ` (!(obj instanceof MercilessEnchantments merciless)) ` 成立时提前返回 ` false `<br>末尾返回 ` this.enchantments().equals(merciless.enchantments()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L34) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hashCode(this.enchantments()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ExtraEnchantmentsPredicate.java#L42) |

## IntegerComponentPredicate

` public record IntegerComponentPredicate(DataComponentType<? extends IIntegerComponent> component, int exact) implements DataComponentPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<IntegerComponentPredicate> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L16) |
| ` @Override public boolean matches(DataComponentGetter components) ` | 末尾返回 ` components.has(this.component) && components.get(this.component).value() == this.exact ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L29) |
| ` public DataComponentType<? extends IIntegerComponent> component() ` | 读取 record 分量 ` component ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L13) |
| ` public int exact() ` | 读取 record 分量 ` exact ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/IntegerComponentPredicate.java#L12) |

## ItemEnchCountPredicate

` public record ItemEnchCountPredicate(int min, int max) implements SingleComponentItemPredicate<ItemEnchantments> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ItemEnchCountPredicate> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L15) |
| ` public static final StreamCodec<ByteBuf, ItemEnchCountPredicate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, ItemEnchCountPredicate::min, ByteBufCodecs.VAR_INT, ItemEnchCountPredicate::max, ItemEnchCountPredicate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L23) |
| ` public static ItemEnchCountPredicate count(int count) ` | 末尾返回 ` new ItemEnchCountPredicate(count, count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L31) |
| ` @Override public DataComponentType<ItemEnchantments> componentType() ` | 末尾返回 ` DataComponents.ENCHANTMENTS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L35) |
| ` @Override public boolean matches(ItemEnchantments value) ` | 末尾返回 ` size >= this.min && size <= this.max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L40) |
| ` public ItemEnchCountPredicate(int min, int max) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L14) |
| ` public int min() ` | 读取 record 分量 ` min ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L14) |
| ` public int max() ` | 读取 record 分量 ` max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemEnchCountPredicate.java#L14) |

## ItemSavedEntityPredicate

` public record ItemSavedEntityPredicate(List<EntityType<?>> entities, List<NumericTagValuePredicate> predicates, boolean isMonster) implements SingleComponentItemPredicate<SavedEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<ItemSavedEntityPredicate> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L22) |
| ` public static ItemSavedEntityPredicate of(EntityType<?> entityType) ` | 末尾返回 ` new ItemSavedEntityPredicate(Lists.newArrayList(entityType), new ArrayList<>(), false) `<br>[调用处 ItemCompressRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L36) |
| ` public static ItemSavedEntityPredicate any() ` | 末尾返回 ` new ItemSavedEntityPredicate(new ArrayList<>(), new ArrayList<>(), false) `<br>[调用处 TimeWarpRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L291) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L40) |
| ` public static ItemSavedEntityPredicate monster() ` | 末尾返回 ` new ItemSavedEntityPredicate(new ArrayList<>(), new ArrayList<>(), true) `<br>[调用处 TimeWarpRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TimeWarpRecipeLoader.java#L314) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L44) |
| ` public ItemSavedEntityPredicate predicate(Consumer<NumericTagValuePredicate.Builder> predicateBuilder) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L48) |
| ` @Override @SuppressWarnings("deprecation") public boolean matches(SavedEntity value) ` | ` (this.isMonster && !value.isMonster()) ` 成立时提前返回 ` false `<br>末尾返回 ` this.predicates.stream().allMatch(it -> it.test(value.tag())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L55) |
| ` @Override public DataComponentType<SavedEntity> componentType() ` | 末尾返回 ` ModComponents.SAVED_ENTITY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L72) |
| ` public ItemSavedEntityPredicate(List<EntityType<?>> entities, List<NumericTagValuePredicate> predicates, boolean isMonster) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L17) |
| ` public List<EntityType<?>> entities() ` | 读取 record 分量 ` entities ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L18) |
| ` public List<NumericTagValuePredicate> predicates() ` | 读取 record 分量 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L19) |
| ` public boolean isMonster() ` | 读取 record 分量 ` isMonster ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/predicate/ItemSavedEntityPredicate.java#L17) |
