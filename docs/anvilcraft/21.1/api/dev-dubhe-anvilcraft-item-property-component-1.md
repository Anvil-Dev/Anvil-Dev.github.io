# dev.dubhe.anvilcraft.item.property.component（BoxContents 至 Multiphase）



## BoxContents

` public record BoxContents(List<ItemStack> amulets, List<ItemStack> totems, int selection, int usage) implements TooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L22)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int CAPACITY ` | 初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L24) |
| ` public static final BoxContents EMPTY ` | 初值 ` new BoxContents(List.of(), List.of(), 0) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L25) |
| ` public static final Codec<BoxContents> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L26) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BoxContents> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L31) |
| ` public static int sum(List<ItemStack> amulets, List<ItemStack> totems, ToIntFunction<ItemStack> fn) ` | 末尾返回 ` sum `<br>[调用处 BoxContents.computeUsage](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L42) |
| ` public static int computeUsage(List<ItemStack> amulets, List<ItemStack> totems) ` | 末尾返回 ` BoxContents.sum( amulets, totems, it -> it.getOrDefault(ModComponents.AMULET_WEIGHT, 0) ) `<br>[调用处 BoxContents.Mutable.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L51) |
| ` public @Unmodifiable List<ItemStack> allItems() ` | 末尾返回 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L59) |
| ` @Override public boolean equals(@Nullable Object object) ` | 实现调用 ` ItemStack.listMatches(this.amulets, contents.amulets) `<br>实现调用 ` ItemStack.listMatches(this.totems, contents.totems) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L66) |
| ` @Override public int hashCode() ` | 末尾返回 ` 31 * (31 * hash + this.selection) + this.usage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L75) |
| ` public Mutable mutable() ` | 末尾返回 ` new Mutable(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L81) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.usage <= 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L85) |
| ` public boolean isAmuletEmpty() ` | 末尾返回 ` this.usage >= 0 && this.amulets.isEmpty() && !this.totems.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L89) |
| ` public int getMaxSelection() ` | 末尾返回 ` this.amulets.size() + this.totems.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L93) |
| ` public List<ItemStack> amulets() ` | 读取 record 分量 ` amulets ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L23) |
| ` public List<ItemStack> totems() ` | 读取 record 分量 ` totems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L23) |
| ` public int selection() ` | 读取 record 分量 ` selection ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L23) |
| ` public int usage() ` | 读取 record 分量 ` usage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L22) |

## BoxContents.Mutable

` public static class Mutable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L97)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Optional<ItemStack> tryInsert(ItemStack stack) ` | ` (stack.isEmpty()) ` 成立时提前返回 ` Optional.of(ItemStack.EMPTY) `<br>末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L110) |
| ` public ItemStack pop() ` | 末尾返回 ` stack.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L130) |
| ` public void select(int selection) ` | 执行 ` this.selection = selection ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L149) |
| ` public BoxContents immutable() ` | 末尾返回 ` new BoxContents(ImmutableList.copyOf(this.amulets), ImmutableList.copyOf(this.totems), this.selection) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L153) |
| ` public ItemStack popTotem() ` | ` (this.totems.isEmpty()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` first ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L157) |

## Comrades

` public record Comrades(List<UUID> players) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Comrades EMPTY ` | 初值 ` new Comrades(List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L17) |
| ` public static final Codec<Comrades> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( UUIDUtil.CODEC .listOf() .optionalFieldOf("players", List.of()) .forGetter(Comrades::players) ).apply(ins, Comrades::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L18) |
| ` public static final StreamCodec<ByteBuf, Comrades> STREAM_CODEC ` | 初值 ` StreamCodec.composite( UUIDUtil.STREAM_CODEC.apply(ByteBufCodecs.list()), Comrades::players, Comrades::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L24) |
| ` public Comrades sign(Player player) ` | ` (this.players.contains(id)) ` 成立时提前返回 ` this `<br>末尾返回 ` new Comrades(players.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L30) |
| ` public boolean contains(UUID id) ` | 末尾返回 ` this.players.contains(id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L41) |
| ` public Comrades(List<UUID> players) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |
| ` public List<UUID> players() ` | 读取 record 分量 ` players ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |

## DiskData

` public record DiskData(CompoundTag tag) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<DiskData> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( CompoundTag.CODEC .fieldOf("tag") .forGetter(DiskData::tag) ).apply(ins, DiskData::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L11) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, DiskData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.COMPOUND_TAG, DiskData::tag, DiskData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L17) |
| ` public DiskData(CompoundTag tag) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L10) |
| ` public CompoundTag tag() ` | 读取 record 分量 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L10) |

## Eternal

` public record Eternal() `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Eternal INSTANCE ` | 初值 ` new Eternal() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L16) |
| ` public static final Codec<Eternal> CODEC ` | 初值 ` Codec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L17) |
| ` public static final StreamCodec<ByteBuf, Eternal> STREAM_CODEC ` | 初值 ` StreamCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L18) |
| ` public static void tick(ServerPlayer player) ` | 实现调用 ` InventoryUtil.getItems( player.getInventory(), stack -> stack.has(ModComponents.ETERNAL) ) `<br>实现调用 ` player.getInventory() `<br>实现调用 ` stack.has(DataComponents.DAMAGE) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L20) |
| ` public Eternal() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L15) |

## Ferocious

` public record Ferocious() `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Ferocious DEFAULT ` | 初值 ` new Ferocious() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L26) |
| ` public static final ResourceLocation FEROCIOUS_ID ` | 初值 ` AnvilCraft.of("ferocious") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L27) |
| ` public static final MapCodec<Ferocious> CODEC ` | 初值 ` Codec.EMPTY.xmap(a -> Ferocious.DEFAULT, a -> Unit.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L28) |
| ` public static final StreamCodec<ByteBuf, Ferocious> STREAM_CODEC ` | 初值 ` StreamCodec.unit(Ferocious.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L29) |
| ` public static void tick(ServerPlayer player) ` | 实现调用 ` InventoryUtil.getItems(player.getInventory(), stack -> stack.has(ModComponents.FEROCIOUS)) `<br>实现调用 ` player.getInventory() `<br>实现调用 ` Ferocious.tick(stack) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L31) |
| ` public Ferocious() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L25) |

## FilterContent

` public record FilterContent(NonNullList<ItemStack> list, boolean includeComponents, boolean denyList) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<FilterContent> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L29) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FilterContent> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L41) |
| ` public FilterContent(NonNullList<ItemStack> list, boolean includeComponents, boolean denyList) ` | 实现调用 ` list.size() `<br>分支 ` (list.size() < FilterContent.SLOT_COUNT) ` 内调用 ` NonNullList.withSize(FilterContent.SLOT_COUNT, ItemStack.EMPTY) `<br>分支 ` (list.size() < FilterContent.SLOT_COUNT) ` 内调用 ` list.size() `<br>[调用处 FilterContent.setList](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L71) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L51) |
| ` public FilterContent() ` | 执行 ` this(NonNullList.withSize(FilterContent.SLOT_COUNT, ItemStack.EMPTY), false, false) `<br>[调用处 BuildingRodPattern.plan](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodPattern.java#L72) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L66) |
| ` public FilterContent setList(NonNullList<ItemStack> list) ` | 末尾返回 ` new FilterContent(list, this.includeComponents, this.denyList) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L70) |
| ` public FilterContent setIncludeComponents(boolean includeComponents) ` | 末尾返回 ` new FilterContent(this.list, includeComponents, this.denyList) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L74) |
| ` public FilterContent setDenyList(boolean denyList) ` | 末尾返回 ` new FilterContent(this.list, this.includeComponents, denyList) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L78) |
| ` public int getNestingLevel() ` | 末尾返回 ` maxLevel + 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L82) |
| ` public static boolean filter(ItemStack filterStack, ItemStack stack, boolean includeComponents) ` | 过滤物品堆栈是否匹配指定条件<br>参数 ` filterStack ` 过滤器物品堆栈，用于定义过滤条件<br>参数 ` stack ` 待检查的物品堆栈<br>参数 ` includeComponents ` 是否考虑组件信息进行匹配<br>返回 如果物品堆栈匹配过滤条件则返回true，否则返回false<br>` (filterStack.isEmpty()) ` 成立时提前返回 ` true `<br>` (content == null) ` 成立时提前返回 ` false `<br>末尾返回 ` content.filter(stack) `<br>[调用处 TradingStationBlockEntity.isProviding](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/TradingStationBlockEntity.java#L268) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L102) |
| ` public boolean filter(ItemStack stack) ` | 末尾返回 ` this.denyList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L135) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof FilterContent(NonNullList<ItemStack> list1, boolean includeComponents1, boolean denyList1))) ` 成立时提前返回 ` false `<br>` (this.list().size() != list1.size()) ` 成立时提前返回 ` false `<br>末尾返回 ` Objects.equals(this.includeComponents(), includeComponents1) && Objects.equals(this.denyList(), denyList1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L149) |
| ` @Override public int hashCode() ` | 末尾返回 ` hash * 31 + Objects.hash(this.includeComponents(), this.denyList()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L166) |
| ` public NonNullList<ItemStack> list() ` | 读取 record 分量 ` list `<br>[调用处 FilterContent.filter](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L137) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L26) |
| ` public boolean includeComponents() ` | 读取 record 分量 ` includeComponents `<br>[调用处 FilterContent.filter](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L26) |
| ` public boolean denyList() ` | 读取 record 分量 ` denyList `<br>[调用处 FilterContent.filter](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L141) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L26) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L26) |

## HeliostatsData

` public record HeliostatsData(BlockPos pos) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<HeliostatsData> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( BlockPos.CODEC .fieldOf("pos") .forGetter(HeliostatsData::pos) ).apply(ins, HeliostatsData::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L10) |
| ` public static final StreamCodec<ByteBuf, HeliostatsData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, HeliostatsData::pos, HeliostatsData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L16) |
| ` public HeliostatsData(BlockPos pos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L9) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/HeliostatsData.java#L9) |

## Merciless

` public record Merciless() `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Merciless DEFAULT ` | 初值 ` new Merciless() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L28) |
| ` public static final ResourceLocation MERCILESS_ID ` | 初值 ` AnvilCraft.of("merciless") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L29) |
| ` public static final MapCodec<Merciless> CODEC ` | 初值 ` Codec.EMPTY.xmap(a -> Merciless.DEFAULT, a -> Unit.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L30) |
| ` public static final StreamCodec<ByteBuf, Merciless> STREAM_CODEC ` | 初值 ` StreamCodec.unit(Merciless.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L31) |
| ` public static void tick(ServerPlayer player) ` | 实现调用 ` InventoryUtil.getItems(player.getInventory(), stack -> stack.has(ModComponents.MERCILESS)) `<br>实现调用 ` player.getInventory() `<br>实现调用 ` stack.has(ModComponents.MERCILESS) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L33) |
| ` public static void enable(ItemStack stack) ` | 实现调用 ` stack.set(ModComponents.MERCILESS, DEFAULT) `<br>实现调用 ` absorbEnchantments(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L43) |
| ` public static void disable(ItemStack stack) ` | 实现调用 ` stack.remove(ModComponents.MERCILESS) `<br>实现调用 ` stack.getOrDefault( ModComponents.MERCILESS_ENCHANTMENTS, ItemEnchantments.EMPTY ) `<br>实现调用 ` enchantments.isEmpty() `<br>[调用处 Ferocious.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L48) |
| ` public static void absorbEnchantments(ItemStack stack) ` | 执行 ` Merciless.absorbEnchantments(stack, false) `<br>[调用处 AnvilMenuMixin.normalizeMercilessResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/AnvilMenuMixin.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L61) |
| ` public static void absorbEnchantments(ItemStack stack, boolean allowBeyondMaxLevel) ` | 铁砧预览使用其超限配置，日常吸收仅在魔咒上限内合并同级魔咒。<br>实现调用 ` stack.getOrDefault(DataComponents.ENCHANTMENTS, ItemEnchantments.EMPTY) `<br>实现调用 ` stack.getOrDefault( ModComponents.MERCILESS_ENCHANTMENTS, ItemEnchantments.EMPTY ) `<br>实现调用 ` enchantments.isEmpty() `<br>[调用处 AnvilMenuResult.createResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L204) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L66) |
| ` public Merciless() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L27) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L27) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L27) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Merciless.java#L27) |

## Multiphase

` public record Multiphase(List<Phase> phases, int activePhase) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MIN_PHASE_COUNT ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L25) |
| ` public static final int MAX_PHASE_COUNT ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L26) |
| ` public static final MapCodec<Multiphase> CODEC ` | 初值 ` Codec.mapEither(DATA_CODEC, LEGACY_CODEC).xmap( either -> either.map(multiphase -> multiphase, multiphase -> multiphase), Either::left ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L38) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, Multiphase> STREAM_CODEC ` | 初值 ` StreamCodec.composite( Phase.STREAM_CODEC.apply(ByteBufCodecs.list()), Multiphase::phases, ByteBufCodecs.VAR_INT, Multiphase::activePhase, Multiphase::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L42) |
| ` public Multiphase(List<Phase> phases, int activePhase) ` | ` (phases.size() < MIN_PHASE_COUNT \|\| phases.size() > MAX_PHASE_COUNT) ` 成立时抛出 ` new IllegalArgumentException("Multiphase phase count must be between 2 and 4") `<br>` (activePhase < 0 \|\| activePhase >= phases.size()) ` 成立时抛出 ` new IllegalArgumentException("Active phase is out of bounds: " + activePhase) `<br>[调用处 MultiphaseData.make](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/MultiphaseData.java#L50) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L50) |
| ` public static Multiphase create() ` | 末尾返回 ` new Multiphase(List.of(Phase.EMPTY, Phase.EMPTY), 0) `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L351) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L60) |
| ` public static Component makeName(int index) ` | 末尾返回 ` Component.translatableWithFallback( "tooltip.anvilcraft.property.multiphase.name." + index, DEFAULT_NAMES.get(index) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L64) |
| ` public static Component makeSuffix(int index) ` | 末尾返回 ` Component.translatableWithFallback( "tooltip.anvilcraft.property.multiphase.suffix." + index, "-" + DEFAULT_NAMES.get(index) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L71) |
| ` public static Component firstPhaseName(Component name) ` | 末尾返回 ` name.copy().append(makeSuffix(0)) `<br>[调用处 ModItems](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L354) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L78) |
| ` public Component phaseDisplayName(int index) ` | 末尾返回 ` this.phases.get(index).customName().isPresent() ? this.phases.get(index).customName().get().copy() : makeName(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L82) |
| ` public Multiphase capture(ItemStack stack) ` | 末尾返回 ` new Multiphase(captured, this.activePhase) `<br>[调用处 Multiphase.select](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L88) |
| ` public Multiphase forDisplay(ItemStack stack) ` | 末尾返回 ` new Multiphase(displayed, this.activePhase) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L96) |
| ` public void select(ItemStack stack, int phaseIndex) ` | 实现调用 ` this.phases.size() `<br>实现调用 ` this.capture(stack).withSelection(phaseIndex) `<br>实现调用 ` this.capture(stack) `<br>[调用处 Multiphase.cycle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L107) |
| ` public void cycle(ItemStack stack) ` | 执行 ` this.select(stack, (this.activePhase + 1) % this.phases.size()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L114) |
| ` public void initialize(ItemStack stack) ` | 实现调用 ` this.applyToStack(stack) `<br>实现调用 ` stack.set(ModComponents.MULTIPHASE, this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L118) |
| ` public boolean addPhase(ItemStack stack) ` | ` (captured.phases.size() >= MAX_PHASE_COUNT) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L123) |
| ` public void applySelectionPreview(ItemStack stack, int phaseIndex) ` | 实现调用 ` this.phases.size() `<br>实现调用 ` this.withSelection(phaseIndex).applyToStack(stack) `<br>实现调用 ` this.withSelection(phaseIndex) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L132) |
| ` public List<Phase> phases() ` | 读取 record 分量 ` phases ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L24) |
| ` public int activePhase() ` | 读取 record 分量 ` activePhase ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/Multiphase.java#L24) |
