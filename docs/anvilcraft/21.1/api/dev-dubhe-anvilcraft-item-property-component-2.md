# dev.dubhe.anvilcraft.item.property.component（Multiphase.Phase 至 StructureData）



## Multiphase.Phase

` public record Phase(Optional<Component> customName, int repairCost, ItemEnchantments enchantments) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L150)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Phase EMPTY ` | 初值 ` new Phase(Optional.empty(), 0, ItemEnchantments.EMPTY) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L151) |
| ` public static final MapCodec<Phase> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L152) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, Phase> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ComponentSerialization.OPTIONAL_STREAM_CODEC, Phase::customName, ByteBufCodecs.VAR_INT, Phase::repairCost, ItemEnchantments.STREAM_CODEC, Phase::enchantments, Phase::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L157) |
| ` public Phase(Optional<Component> customName, int repairCost, ItemEnchantments enchantments) ` | 执行 ` customName = customName.map(Component::copy) `<br>[调用处 AnvilMenuResult.createMultiphaseResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L263) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L167) |
| ` public static Phase fromInput(ItemStack stack) ` | 实现调用 ` stack.getOrDefault(DataComponents.ENCHANTMENTS, ItemEnchantments.EMPTY) `<br>实现调用 ` stack.getOrDefault(ModComponents.MERCILESS_ENCHANTMENTS, ItemEnchantments.EMPTY) `<br>[调用处 MultiphaseData.make](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L171) |
| ` public Optional<Component> customName() ` | 读取 record 分量 ` customName ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L150) |
| ` public int repairCost() ` | 读取 record 分量 ` repairCost ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L150) |
| ` public ItemEnchantments enchantments() ` | 读取 record 分量 ` enchantments ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L150) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L150) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L150) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L150) |

## OverLimitItemContainerContents

` public class OverLimitItemContainerContents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final OverLimitItemContainerContents EMPTY ` | 初值 ` new OverLimitItemContainerContents(NonNullList.create()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L23) |
| ` public static final Codec<OverLimitItemContainerContents> CODEC ` | 初值 ` Slot.CODEC.sizeLimitedListOf(MAX_SIZE).xmap(OverLimitItemContainerContents::fromSlots, OverLimitItemContainerContents::asSlots) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L24) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OverLimitItemContainerContents> STREAM_CODEC ` | 初值 ` UnlimitedItemStack.OPTIONAL_STREAM_CODEC.apply(ByteBufCodecs.list(MAX_SIZE)).map(OverLimitItemContainerContents::new, OverLimitItemContainerContents::getItems) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L27) |
| ` public static OverLimitItemContainerContents fromItems(List<UnlimitedItemStack> items) ` | ` (i == NO_SLOT) ` 成立时提前返回 ` EMPTY `<br>末尾返回 ` contents ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L65) |
| ` public static OverLimitItemContainerContents fromItems(OverLimitItemHandler items) ` | ` (i == NO_SLOT) ` 成立时提前返回 ` EMPTY `<br>末尾返回 ` contents ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L77) |
| ` public void copyInto(NonNullList<UnlimitedItemStack> list) ` | 实现调用 ` list.size() `<br>实现调用 ` this.items.size() `<br>实现调用 ` this.items.get(i) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L117) |
| ` public void copyInto(OverLimitItemHandler handler) ` | 实现调用 ` handler.getSlots() `<br>实现调用 ` this.items.size() `<br>实现调用 ` this.items.get(i) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L124) |
| ` public UnlimitedItemStack copyOne() ` | 末尾返回 ` this.items.isEmpty() ? UnlimitedItemStack.EMPTY : this.items.getFirst().copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L131) |
| ` public Stream<UnlimitedItemStack> stream() ` | 末尾返回 ` this.items.stream().map(UnlimitedItemStack::copy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L135) |
| ` public Stream<UnlimitedItemStack> nonEmptyStream() ` | 末尾返回 ` this.items.stream().filter(stack -> !stack.isEmpty()).map(UnlimitedItemStack::copy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L139) |
| ` public Iterable<UnlimitedItemStack> nonEmptyItems() ` | 末尾返回 ` Iterables.filter(this.items, stack -> !stack.isEmpty()) `<br>[调用处 OverLimitItemContainerContents.nonEmptyItemsCopy](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L143) |
| ` public Iterable<UnlimitedItemStack> nonEmptyItemsCopy() ` | 末尾返回 ` Iterables.transform(this.nonEmptyItems(), UnlimitedItemStack::copy) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L147) |
| ` @Override public boolean equals(Object other) ` | ` (this == other) ` 成立时提前返回 ` true `<br>末尾返回 ` other instanceof OverLimitItemContainerContents contents && UnlimitedItemStack.listMatches(this.items, contents.items) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L151) |
| ` @Override public int hashCode() ` | 末尾返回 ` this.items.hashCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L158) |
| ` public int getSlots() ` | Neo: &#123;@return the number of slots in this container&#125;<br>末尾返回 ` this.items.size() `<br>[调用处 OverLimitItemContainerContents.validateSlotIndex](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L188) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L167) |
| ` public UnlimitedItemStack getStackInSlot(int slot) ` | Neo: Gets a copy of the stack at a particular slot.<br>参数 ` slot ` The slot to check. Must be within \[0, #getSlots()\]<br>返回 A copy of the stack in that slot<br>异常 ` UnsupportedOperationException ` if the provided slot index is out-of-bounds.<br>末尾返回 ` this.items.get(slot).copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L179) |
| ` public NonNullList<UnlimitedItemStack> getItems() ` | 末尾返回 ` this.items `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/OverLimitItemContainerContents.java#L19) |

## PillBoxContents

` public record PillBoxContents(int index, List<ItemStack> pills) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final PillBoxContents EMPTY ` | 初值 ` new PillBoxContents(ImmutableList.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L22) |
| ` public static final Codec<PillBoxContents> CODEC ` | 初值 ` RecordCodecBuilder.create(instance -> instance.group(ItemStack.CODEC.listOf().fieldOf("pills").forGetter(PillBoxContents::pills)).apply(instance, PillBoxContents::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L24) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, PillBoxContents> STREAM_CODEC ` | 初值 ` StreamCodec.composite(ItemStack.STREAM_CODEC.apply(ByteBufCodecs.list()), PillBoxContents::pills, PillBoxContents::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L27) |
| ` public PillBoxContents(List<ItemStack> pills) ` | 执行 ` this(-1, pills) `<br>[调用处 PillBoxContents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L22) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L33) |
| ` @Override public boolean equals(@Nullable Object object) ` | 末尾返回 ` object instanceof PillBoxContents contents && ItemStack.listMatches(this.pills, contents.pills) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L37) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashStackList(this.pills) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L43) |
| ` public Mutable mutable() ` | 末尾返回 ` new Mutable(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L48) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L21) |
| ` public List<ItemStack> pills() ` | 读取 record 分量 ` pills ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L21) |

## PillBoxContents.Mutable

` public static class Mutable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L52)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Mutable(PillBoxContents contents) ` | 实现调用 ` contents.pills.stream().map(ItemStack::copy).toList() `<br>实现调用 ` contents.pills.stream().map(ItemStack::copy) `<br>实现调用 ` contents.pills.stream() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L57) |
| ` public void setDefaultIndex() ` | 执行 ` this.index = -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L62) |
| ` public void setIndex(int index) ` | 实现调用 ` this.pills.size() `<br>分支 ` (index < 0) ` 内调用 ` this.pills.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L66) |
| ` public boolean insert(ItemStack itemStack) ` | ` (itemStack.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L76) |
| ` public Optional<ItemStack> get() ` | ` (this.index == -1 && !this.pills.isEmpty()) ` 成立时提前返回 ` Optional.of(this.pills.removeFirst()) `<br>` (this.index < 0 \|\| this.index > this.pills.size() - 1) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(this.pills.remove(this.index)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L105) |
| ` public void useAll(Player player) ` | 实现调用 ` this.pills.iterator() `<br>实现调用 ` iterator.hasNext() `<br>实现调用 ` iterator.next() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L115) |
| ` public PillBoxContents immutable() ` | 末尾返回 ` new PillBoxContents(this.index, ImmutableList.copyOf(this.pills)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L133) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/PillBoxContents.java#L52) |

## Providence

` public record Providence() `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Providence.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Providence INSTANCE ` | 初值 ` new Providence() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Providence.java#L8) |
| ` public static final Codec<Providence> CODEC ` | 初值 ` Codec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Providence.java#L9) |
| ` public static final StreamCodec<ByteBuf, Providence> STREAM_CODEC ` | 初值 ` StreamCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Providence.java#L10) |
| ` public Providence() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Providence.java#L7) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Providence.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Providence.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Providence.java#L7) |

## SavedEntity

` public record SavedEntity(CompoundTag tag, boolean isMonster) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<SavedEntity> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L19) |
| ` public static final StreamCodec<ByteBuf, SavedEntity> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.COMPOUND_TAG, SavedEntity::tag, ByteBufCodecs.BOOL, SavedEntity::isMonster, SavedEntity::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L28) |
| ` @Nullable public Entity toEntity(Level level) ` | ` (optional.isEmpty()) ` 成立时提前返回 ` null `<br>` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L36) |
| ` public static SavedEntity fromMob(Mob entity) ` | 末尾返回 ` new SavedEntity(entityTag, !entity.getType().getCategory().isFriendly()) `<br>[调用处 HasMobBlockEntity.collectImplicitComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/HasMobBlockEntity.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L47) |
| ` public SavedEntity(CompoundTag tag, boolean isMonster) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L18) |
| ` public CompoundTag tag() ` | 读取 record 分量 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L18) |
| ` public boolean isMonster() ` | 读取 record 分量 ` isMonster ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L18) |

## SignedPlayers

` public record SignedPlayers(HashBiMap<Component, UUID> playerInfos) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SignedPlayers EMPTY ` | 初值 ` new SignedPlayers(HashBiMap.create()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L16) |
| ` public static final Codec<SignedPlayers> CODEC ` | 初值 ` Codec.unboundedMap(ComponentSerialization.FLAT_CODEC, UUIDUtil.CODEC) .xmap(HashBiMap::create, Function.identity()) .xmap(SignedPlayers::new, SignedPlayers::playerInfos) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L17) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SignedPlayers> STREAM_CODEC ` | 初值 ` ByteBufCodecs.map( HashBiMap::create, ComponentSerialization.STREAM_CODEC, UUIDUtil.STREAM_CODEC ).map(SignedPlayers::new, SignedPlayers::playerInfos) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L20) |
| ` public SignedPlayers(HashBiMap<Component, UUID> playerInfos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L15) |
| ` public HashBiMap<Component, UUID> playerInfos() ` | 读取 record 分量 ` playerInfos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L15) |

## StorageRef

` public record StorageRef(Holder<IStorageType<?>> type, Optional<UUID> id) implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<StorageRef> CODEC ` | 初值 ` CodecUtil.mapCodec( IStorageType.HOLDER_CODEC .fieldOf("type") .forGetter(StorageRef::type), UUIDUtil.CODEC .optionalFieldOf("id") .forGetter(StorageRef::id), StorageRef::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L25) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, StorageRef> STREAM_CODEC ` | 初值 ` StreamCodec.composite( IStorageType.HOLDER_STREAM_CODEC, StorageRef::type, ByteBufCodecs.optional(UUIDUtil.STREAM_CODEC), StorageRef::id, StorageRef::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L34) |
| ` public StorageRef(Holder<IStorageType<?>> type) ` | 执行 ` this(type, Optional.empty()) `<br>[调用处 StorageCommand.storageUnbind](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L187) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L42) |
| ` public StorageRef(Holder<IStorageType<?>> type, @Nullable UUID id) ` | 执行 ` this(type, Optional.ofNullable(id)) `<br>[调用处 StorageBlockEntity.collectImplicitComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L153) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L46) |
| ` public static StorageRef crate() ` | 末尾返回 ` new StorageRef(ModStorageTypes.CRATE) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L1690) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L50) |
| ` public static StorageRef largeCrate() ` | 末尾返回 ` new StorageRef(ModStorageTypes.LARGE_CRATE) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L1708) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L54) |
| ` public static StorageRef shulkerContainer() ` | 末尾返回 ` new StorageRef(ModStorageTypes.SHULKER_CONTAINER) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L1729) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L58) |
| ` public static StorageRef hyperdimension() ` | 末尾返回 ` new StorageRef(ModStorageTypes.HYPERDIMENSION) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L1753) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L62) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> builder, TooltipFlag flag) ` | 实现调用 ` this.id.map(id -> Component.literal(id.toString())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L66) |
| ` public Holder<IStorageType<?>> type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L24) |
| ` public Optional<UUID> id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L24) |

## StoredItem

` public record StoredItem(ItemStack stored) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L16)

由于 DataComponentType 要求存储的数值必须继承 hashCode与 equals方法， 我们需要一个记录类存储用于展示的物品。<br>参数 ` stored ` 被储存的用于展示的物品<br>使用约定 stored中的物品仅用于展示，不要尝试修改它。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Codec<StoredItem> CODEC ` | 初值 ` ItemStack.CODEC.xmap( StoredItem::new, StoredItem::stored ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L17) |
| ` public static StreamCodec<RegistryFriendlyByteBuf, StoredItem> STREAM_CODEC ` | 初值 ` ItemStack.STREAM_CODEC.map( StoredItem::new, StoredItem::stored ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L22) |
| ` @Override public boolean equals(Object obj) ` | ` (!(obj instanceof StoredItem(ItemStack stack))) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.stored, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L27) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.stored) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L33) |
| ` public StoredItem(ItemStack stored) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L16) |
| ` public ItemStack stored() ` | 读取 record 分量 ` stored ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L16) |

## StructureData

` public record StructureData(int minX, int minY, int minZ, int maxX, int maxY, int maxZ) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StructureData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L14) |
| ` public static final StreamCodec<ByteBuf, StructureData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L23) |
| ` public StructureData(BlockPos initPos) ` | 执行 ` this(initPos.getX(), initPos.getY(), initPos.getZ(), initPos.getX(), initPos.getY(), initPos.getZ()) `<br>[调用处 StructureToolItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/StructureToolItem.java#L48) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L39) |
| ` public StructureData addPos(BlockPos pos) ` | 末尾返回 ` new StructureData(newMinX, newMinY, newMinZ, newMaxX, newMaxY, newMaxZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L43) |
| ` public BlockPos minPos() ` | 末尾返回 ` new BlockPos(this.minX, this.minY, this.minZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L53) |
| ` public BlockPos maxPos() ` | 末尾返回 ` new BlockPos(this.maxX, this.maxY, this.maxZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L57) |
| ` public int getSizeX() ` | 末尾返回 ` this.maxX - this.minX + 1 `<br>[调用处 StructureData.isCube](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L61) |
| ` public int getSizeY() ` | 末尾返回 ` this.maxY - this.minY + 1 `<br>[调用处 StructureData.isCube](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L65) |
| ` public int getSizeZ() ` | 末尾返回 ` this.maxZ - this.minZ + 1 `<br>[调用处 StructureData.isCube](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L69) |
| ` public boolean isCube() ` | 末尾返回 ` this.getSizeX() == this.getSizeY() && this.getSizeY() == this.getSizeZ() `<br>[调用处 StructureData.isOddCubeWithinSize](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L79) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L73) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public boolean isOddCubeWithinSize(int maxSize) ` | 末尾返回 ` this.isCube() && this.getSizeX() % 2 == 1 && this.getSizeX() <= maxSize ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L77) |
| ` public int minX() ` | 读取 record 分量 ` minX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L11) |
| ` public int minY() ` | 读取 record 分量 ` minY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L11) |
| ` public int minZ() ` | 读取 record 分量 ` minZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L11) |
| ` public int maxX() ` | 读取 record 分量 ` maxX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L12) |
| ` public int maxY() ` | 读取 record 分量 ` maxY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L12) |
| ` public int maxZ() ` | 读取 record 分量 ` maxZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L10) |
