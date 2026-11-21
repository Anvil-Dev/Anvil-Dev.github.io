# dev.dubhe.anvilcraft.api.recipe.data



## ICustomDataComponent

` public interface ICustomDataComponent<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L18)

自定义数据组件。通常为必需其它数据组件才能正常构建的数据组件。<br>参数 ` <T> ` 该数据组件的类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Codec<ICustomDataComponent<?>> CODEC ` | 初值 ` Codec.lazyInitialized(() -> ModRegistries.CUSTOM_DATA_TYPE .byNameCodec().dispatch(ICustomDataComponent::getType, ICustomDataComponent.Type::codec)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L19) |
| ` StreamCodec<RegistryFriendlyByteBuf, ICustomDataComponent<?>> STREAM_CODEC ` | 初值 ` StreamCodec.recursive( streamCodec -> ByteBufCodecs.registry(ModRegistryKeys.CUSTOM_DATA_TYPE) .dispatch(ICustomDataComponent::getType, ICustomDataComponent.Type::streamCodec)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L21) |
| ` DataComponentType<T> getDataComponentType() ` | 获取该数据组件的类型。<br>返回 该数据组件的类型<br>[调用处 ICustomDataComponent.applyToStack](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L28) |
| ` Type<? extends ICustomDataComponent<?>> getType() ` | 获取该自定义数据组件的类型。<br>返回 该自定义数据组件的类型 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L33) |
| ` @Nullable T make(ResultContext ctx) ` | 根据上下文构建数据组件。<br>参数 ` ctx ` 上下文<br>返回 一个全新的数据组件 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L39) |
| ` default void applyToStack(ItemStack stack, @Nullable T value) ` | 分支 ` (value == null) ` 内调用 ` stack.remove(this.getDataComponentType()) `<br>分支 ` (value == null) ` 内调用 ` this.getDataComponentType() `<br>实现调用 ` stack.set(this.getDataComponentType(), value) `<br>实现调用 ` this.getDataComponentType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L42) |
| ` T merge(T oldData, T newData) ` | 将两个数据合并为一个新的组件。<br>参数 ` oldData ` 旧数据<br>参数 ` newData ` 新数据<br>返回 合并后的数据 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L52) |

## ICustomDataComponent.Type

` interface Type<T extends ICustomDataComponent<?>> extends ISerializer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ICustomDataComponent.java#L54)


## ItemEnchantmentsData

` public class ItemEnchantmentsData implements ICustomDataComponent<ItemEnchantments> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ItemEnchantmentsData custom(RecipeInputSlot input, DataComponentType<ItemEnchantments> type) ` | 末尾返回 ` new ItemEnchantmentsData(input, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L35) |
| ` public static ItemEnchantmentsData custom(int input, DataComponentType<ItemEnchantments> type) ` | 末尾返回 ` new ItemEnchantmentsData(input, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L39) |
| ` public static ItemEnchantmentsData enchantments(RecipeInputSlot input) ` | 末尾返回 ` new ItemEnchantmentsData(input, DataComponents.ENCHANTMENTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L43) |
| ` public static ItemEnchantmentsData enchantments(int input) ` | 末尾返回 ` new ItemEnchantmentsData(input, DataComponents.ENCHANTMENTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L47) |
| ` public static ItemEnchantmentsData storedEnchantments(RecipeInputSlot input) ` | 末尾返回 ` new ItemEnchantmentsData(input, DataComponents.STORED_ENCHANTMENTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L51) |
| ` public static ItemEnchantmentsData storedEnchantments(int input) ` | 末尾返回 ` new ItemEnchantmentsData(input, DataComponents.STORED_ENCHANTMENTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L55) |
| ` public static ItemEnchantmentsData mercilessEnchantments(RecipeInputSlot input) ` | 末尾返回 ` new ItemEnchantmentsData(input, ModComponents.MERCILESS_ENCHANTMENTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L59) |
| ` public static ItemEnchantmentsData mercilessEnchantments(int input) ` | 末尾返回 ` new ItemEnchantmentsData(input, ModComponents.MERCILESS_ENCHANTMENTS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L63) |
| ` @Override public DataComponentType<ItemEnchantments> getDataComponentType() ` | 末尾返回 ` this.type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L67) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCustomDataComponents.ITEM_ENCHANTMENTS.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L72) |
| ` @Override public ItemEnchantments make(ResultContext ctx) ` | 末尾返回 ` ctx.getInput(this.input).get(this.type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L77) |
| ` @Override public ItemEnchantments merge(ItemEnchantments oldData, ItemEnchantments newData) ` | 末尾返回 ` mutable.toImmutable() `<br>实现调用 ` newData.entrySet() `<br>实现调用 ` entry.getKey() `<br>实现调用 ` mutable.set(holder, Math.max(oldData.getLevel(holder), entry.getIntValue())) `<br>实现调用 ` Math.max(oldData.getLevel(holder), entry.getIntValue()) `<br>实现调用 ` oldData.getLevel(holder) `<br>实现调用 ` entry.getIntValue() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L82) |
| ` public RecipeInputSlot getInput() ` | 末尾返回 ` this.input `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L20) |
| ` @Override public boolean equals(final Object o) ` | ` (o == this) ` 成立时提前返回 ` true `<br>` (!(o instanceof ItemEnchantmentsData)) ` 成立时提前返回 ` false `<br>` (!other.canEqual((Object) this)) ` 成立时提前返回 ` false `<br>` (this$input == null ? other$input != null : !this$input.equals(other$input)) ` 成立时提前返回 ` false `<br>` (this$type == null ? other$type != null : !this$type.equals(other$type)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>实现调用 ` other.canEqual((Object) this) `<br>实现调用 ` this.getInput() `<br>实现调用 ` other.getInput() `<br>实现调用 ` this$input.equals(other$input) `<br>实现调用 ` this.getType() `<br>实现调用 ` other.getType() `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L20) |
| ` @Override public int hashCode() ` | 末尾返回 ` result `<br>实现调用 ` this.getInput() `<br>实现调用 ` $input.hashCode() `<br>实现调用 ` this.getType() `<br>实现调用 ` $type.hashCode() `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L20) |

## ItemEnchantmentsData.Type

` public static class Type implements ICustomDataComponent.Type<ItemEnchantmentsData> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L92)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ItemEnchantmentsData> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L93) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ItemEnchantmentsData> STREAM_CODEC ` | 初值 ` StreamCodec.composite(RecipeInputSlot.STREAM_CODEC, ItemEnchantmentsData::getInput, DataComponentType.STREAM_CODEC, ItemEnchantmentsData::getDataComponentType, ItemEnchantmentsData::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L100) |
| ` @Override public MapCodec<ItemEnchantmentsData> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L108) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ItemEnchantmentsData> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L113) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L92) |

## MultiphaseData

` public class MultiphaseData implements ICustomDataComponent<Multiphase> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static MultiphaseData two() ` | 末尾返回 ` new MultiphaseData() `<br>[调用处 MultipleToOneSmithingRecipeLoader.two](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L27) |
| ` @Override public DataComponentType<Multiphase> getDataComponentType() ` | 末尾返回 ` ModComponents.MULTIPHASE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L38) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCustomDataComponents.MULTIPHASE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L43) |
| ` @Override public Multiphase make(ResultContext ctx) ` | 末尾返回 ` new Multiphase(List.of(Multiphase.Phase.fromInput(ctx.getInput(RecipeInputSlot.input(0))), Multiphase.Phase.fromInput(ctx.getInput(RecipeInputSlot.input(1)))), 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L48) |
| ` @Override public void applyToStack(ItemStack stack, @Nullable Multiphase value) ` | 分支 ` (value == null) ` 内调用 ` stack.remove(ModComponents.MULTIPHASE) `<br>实现调用 ` value.initialize(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L59) |
| ` @Override public Multiphase merge(Multiphase oldData, Multiphase newData) ` | 末尾返回 ` newData ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L68) |
| ` @Override public boolean equals(final Object o) ` | ` (o == this) ` 成立时提前返回 ` true `<br>` (!(o instanceof MultiphaseData)) ` 成立时提前返回 ` false `<br>` (!other.canEqual((Object) this)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>实现调用 ` other.canEqual((Object) this) `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L22) |
| ` @Override public int hashCode() ` | 末尾返回 ` result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L22) |

## MultiphaseData.Type

` public static class Type implements ICustomDataComponent.Type<MultiphaseData> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L77)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MultiphaseData> CODEC ` | 初值 ` Codec.STRING.fieldOf("input_type").xmap(MultiphaseData::fromType, MultiphaseData::type) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L78) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MultiphaseData> STREAM_CODEC ` | 初值 ` ByteBufCodecs.STRING_UTF8.map(MultiphaseData::fromType, MultiphaseData::type).cast() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L81) |
| ` @Override public MapCodec<MultiphaseData> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L85) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, MultiphaseData> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L90) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L77) |

## NormalDataComponent

` public class NormalDataComponent<T> implements ICustomDataComponent<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T> NormalDataComponent<T> of(RecipeInputSlot input, DataComponentType<T> type) ` | 末尾返回 ` new NormalDataComponent<>(input, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L26) |
| ` public static <T> NormalDataComponent<T> of(int input, DataComponentType<T> type) ` | 末尾返回 ` new NormalDataComponent<>(RecipeInputSlot.input(input), type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L30) |
| ` @Override public DataComponentType<T> getDataComponentType() ` | 末尾返回 ` this.type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L34) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCustomDataComponents.NORMAL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L39) |
| ` @Override public T make(ResultContext ctx) ` | 末尾返回 ` ctx.getInput(this.input).get(this.type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L44) |
| ` @Override public T merge(T oldData, T newData) ` | 末尾返回 ` newData ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L49) |
| ` public static ICustomDataComponent<?>[] frostFour() ` | 实现调用 ` NormalDataComponent.of(0, DataComponents.CUSTOM_NAME) `<br>实现调用 ` ItemEnchantmentsData.enchantments(0) `<br>实现调用 ` ItemEnchantmentsData.mercilessEnchantments(0) `<br>实现调用 ` ItemEnchantmentsData.enchantments(1) `<br>实现调用 ` ItemEnchantmentsData.mercilessEnchantments(1) `<br>实现调用 ` ItemEnchantmentsData.enchantments(2) `<br>[调用处 MultipleToOneSmithingRecipeLoader.four](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L110) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L81) |
| ` public static ICustomDataComponent<?>[] emberFour() ` | 实现调用 ` NormalDataComponent.of(0, DataComponents.CUSTOM_NAME) `<br>实现调用 ` ItemEnchantmentsData.enchantments(0) `<br>实现调用 ` ItemEnchantmentsData.enchantments(1) `<br>实现调用 ` ItemEnchantmentsData.enchantments(2) `<br>实现调用 ` ItemEnchantmentsData.enchantments(3) `<br>[调用处 MultipleToOneSmithingRecipeLoader.four](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L95) |
| ` public static ICustomDataComponent<?>[] normalEight() ` | 实现调用 ` ItemEnchantmentsData.enchantments(0) `<br>实现调用 ` ItemEnchantmentsData.enchantments(1) `<br>实现调用 ` ItemEnchantmentsData.enchantments(2) `<br>实现调用 ` ItemEnchantmentsData.enchantments(3) `<br>实现调用 ` ItemEnchantmentsData.enchantments(4) `<br>实现调用 ` ItemEnchantmentsData.enchantments(5) `<br>[调用处 MultipleToOneSmithingRecipeLoader.eight](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultipleToOneSmithingRecipeLoader.java#L165) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L105) |
| ` public RecipeInputSlot getInput() ` | 末尾返回 ` this.input `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L15) |
| ` @Override public boolean equals(final Object o) ` | ` (o == this) ` 成立时提前返回 ` true `<br>` (!(o instanceof NormalDataComponent)) ` 成立时提前返回 ` false `<br>` (!other.canEqual((Object) this)) ` 成立时提前返回 ` false `<br>` (this$input == null ? other$input != null : !this$input.equals(other$input)) ` 成立时提前返回 ` false `<br>` (this$type == null ? other$type != null : !this$type.equals(other$type)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>实现调用 ` other.canEqual((Object) this) `<br>实现调用 ` this.getInput() `<br>实现调用 ` other.getInput() `<br>实现调用 ` this$input.equals(other$input) `<br>实现调用 ` this.getType() `<br>实现调用 ` other.getType() `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L15) |
| ` @Override public int hashCode() ` | 末尾返回 ` result `<br>实现调用 ` this.getInput() `<br>实现调用 ` $input.hashCode() `<br>实现调用 ` this.getType() `<br>实现调用 ` $type.hashCode() `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L15) |

## NormalDataComponent.Type

` public static class Type implements ICustomDataComponent.Type<NormalDataComponent<?>> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L54)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<NormalDataComponent<?>> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L55) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, NormalDataComponent<?>> STREAM_CODEC ` | 初值 ` StreamCodec.composite(RecipeInputSlot.STREAM_CODEC, NormalDataComponent::getInput, DataComponentType.STREAM_CODEC, NormalDataComponent::getDataComponentType, NormalDataComponent::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L62) |
| ` @Override public MapCodec<NormalDataComponent<?>> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L70) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, NormalDataComponent<?>> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L75) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/NormalDataComponent.java#L54) |
