# dev.dubhe.anvilcraft.item.property.component（BoxContents 至 FireReforging）



## BoxContents

` public record BoxContents(List<ItemStack> amulets, List<ItemStack> totems, int selection, int usage) implements TooltipComponent, TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L29)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BoxContents EMPTY ` | 初值 ` new BoxContents(List.of(), List.of(), 0) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L32) |
| ` public static final Codec<BoxContents> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L33) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BoxContents> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L38) |
| ` public static int sum(List<ItemStack> amulets, List<ItemStack> totems, ToIntFunction<ItemStack> fn) ` | 末尾返回 ` sum `<br>[调用处 BoxContents.computeUsage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L49) |
| ` public static int computeUsage(List<ItemStack> amulets, List<ItemStack> totems) ` | 末尾返回 ` BoxContents.sum(amulets, totems, it -> it.getOrDefault(ModComponents.AMULET_WEIGHT, 0)) `<br>[调用处 BoxContents.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L58) |
| ` public @Unmodifiable List<ItemStack> allItems() ` | 末尾返回 ` builder.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L62) |
| ` public Mutable mutable() ` | 末尾返回 ` new Mutable(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L69) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.usage <= 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L73) |
| ` public boolean isAmuletEmpty() ` | 末尾返回 ` this.usage >= 0 && this.amulets.isEmpty() && !this.totems.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L77) |
| ` public int getMaxSelection() ` | 末尾返回 ` this.amulets.size() + this.totems.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L81) |
| ` @Override public void addToTooltip(Item.TooltipContext ctx, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter getter) ` | 实现调用 ` getter.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY) `<br>实现调用 ` contents.usage() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L85) |
| ` public List<ItemStack> amulets() ` | 读取 record 分量 ` amulets ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L30) |
| ` public List<ItemStack> totems() ` | 读取 record 分量 ` totems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L30) |
| ` public int selection() ` | 读取 record 分量 ` selection ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L30) |
| ` public int usage() ` | 读取 record 分量 ` usage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L29) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L29) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L29) |

## BoxContents.Mutable

` public static class Mutable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L95)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void purge() ` | 实现调用 ` this.amulets.removeIf(ItemStack::isEmpty) `<br>实现调用 ` this.totems.removeIf(ItemStack::isEmpty) `<br>实现调用 ` BoxContents.computeUsage(this.amulets, this.totems) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L110) |
| ` public Optional<ItemStack> tryInsert(ItemStack stack) ` | ` (stack.isEmpty()) ` 成立时提前返回 ` Optional.of(ItemStack.EMPTY) `<br>末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L116) |
| ` public ItemStack pop() ` | 末尾返回 ` stack.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L136) |
| ` public void select(int selection) ` | 执行 ` this.selection = selection ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L155) |
| ` public BoxContents immutable() ` | 末尾返回 ` new BoxContents(ImmutableList.copyOf(this.amulets), ImmutableList.copyOf(this.totems), this.selection) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L159) |
| ` public ItemStack popTotem() ` | ` (this.totems.isEmpty()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` first ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L163) |
| ` public List<ItemStack> getAmulets() ` | 末尾返回 ` this.amulets `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L95) |
| ` public List<ItemStack> getTotems() ` | 末尾返回 ` this.totems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java#L95) |

## CanTakeOutAmmo

` public record CanTakeOutAmmo(boolean value) implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CanTakeOutAmmo CAN ` | 初值 ` new CanTakeOutAmmo(true) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L16) |
| ` public static final CanTakeOutAmmo CANT ` | 初值 ` new CanTakeOutAmmo(false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L17) |
| ` public static final Codec<CanTakeOutAmmo> CODEC ` | 初值 ` Codec.BOOL .xmap(CanTakeOutAmmo::new, CanTakeOutAmmo::value) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L18) |
| ` public static final StreamCodec<ByteBuf, CanTakeOutAmmo> STREAM_CODEC ` | 初值 ` ByteBufCodecs.BOOL .map(CanTakeOutAmmo::new, CanTakeOutAmmo::value) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L20) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 实现调用 ` Component.translatable("item.anvilcraft.spectral_slingshot.unload_return") `<br>实现调用 ` Component.translatable("item.anvilcraft.spectral_slingshot.unload_vanish") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L23) |
| ` public CanTakeOutAmmo(boolean value) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L15) |
| ` public boolean value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/CanTakeOutAmmo.java#L15) |

## Comrades

` public record Comrades(List<UUID> players) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16)

战友护符已签署的玩家

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Comrades EMPTY ` | 初值 ` new Comrades(List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L17) |
| ` public static final Codec<Comrades> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( UUIDUtil.CODEC .listOf() .optionalFieldOf("players", List.of()) .forGetter(Comrades::players) ).apply(ins, Comrades::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L18) |
| ` public static final StreamCodec<ByteBuf, Comrades> STREAM_CODEC ` | 初值 ` StreamCodec.composite( UUIDUtil.STREAM_CODEC.apply(ByteBufCodecs.list()), Comrades::players, Comrades::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L24) |
| ` public Comrades(List<UUID> players) ` | 执行 ` players = List.copyOf(players) `<br>[调用处 Comrades](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L17) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L30) |
| ` public Comrades sign(Player player) ` | ` (this.players.contains(id)) ` 成立时提前返回 ` this `<br>末尾返回 ` new Comrades(players.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L34) |
| ` public boolean contains(UUID id) ` | 末尾返回 ` this.players.contains(id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L45) |
| ` public List<UUID> players() ` | 读取 record 分量 ` players ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Comrades.java#L16) |

## DevourRange

` public enum DevourRange implements StringRepresentable, TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` THREE ` | 声明于枚举 ` DevourRange ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L21) |
| ` FIVE ` | 声明于枚举 ` DevourRange ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L22) |
| ` SEVEN ` | 声明于枚举 ` DevourRange ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L23) |
| ` NINE ` | 声明于枚举 ` DevourRange ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L24) |
| ` public static final Codec<DevourRange> CODEC ` | 初值 ` StringRepresentable.fromEnum(DevourRange::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L27) |
| ` public static final StreamCodec<ByteBuf, DevourRange> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(DevourRange.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L28) |
| ` public Component getRangeTooltip() ` | 末尾返回 ` Component.translatable("tooltip.anvilcraft.property.devour_range.range_" + this.range) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L46) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L50) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 实现调用 ` components.getOrDefault(ModComponents.DEVOUR_RANGE, DevourRange.THREE).getRangeTooltip() `<br>实现调用 ` components.getOrDefault(ModComponents.DEVOUR_RANGE, DevourRange.THREE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L55) |
| ` public int getRange() ` | 末尾返回 ` this.range `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L19) |
| ` public int getDamage() ` | 末尾返回 ` this.damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L19) |
| ` public DevourRange getNext() ` | 末尾返回 ` this.next `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L19) |
| ` public static DevourRange[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 DevourRange](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L19) |
| ` public static DevourRange valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DevourRange.java#L19) |

## DiskData

` public record DiskData(CompoundTag tag) implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<DiskData> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( CompoundTag.CODEC .fieldOf("tag") .forGetter(DiskData::tag) ).apply(ins, DiskData::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L20) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, DiskData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.COMPOUND_TAG, DiskData::tag, DiskData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L25) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 实现调用 ` this.tag.getStringOr("StoredFrom", "") `<br>实现调用 ` storedType.isEmpty() `<br>实现调用 ` Identifier.parse(storedType) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L31) |
| ` public DiskData(CompoundTag tag) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L19) |
| ` public CompoundTag tag() ` | 读取 record 分量 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/DiskData.java#L19) |

## Eternal

` public record Eternal() implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Eternal DEFAULT ` | 初值 ` new Eternal() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L22) |
| ` public static final MapCodec<Eternal> CODEC ` | 初值 ` MapCodec.unit(Eternal.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L23) |
| ` public static final StreamCodec<ByteBuf, Eternal> STREAM_CODEC ` | 初值 ` StreamCodec.unit(Eternal.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L24) |
| ` public static void tick(ServerPlayer player) ` | 实现调用 ` InventoryUtil.getItems( player.getInventory(), stack -> stack.has(ModComponents.ETERNAL) ) `<br>实现调用 ` player.getInventory() `<br>实现调用 ` stack.has(DataComponents.DAMAGE) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L26) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 执行 ` consumer.accept(Component.translatable("tooltip.anvilcraft.property.eternal").withColor(0xD3C5F6)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L42) |
| ` public Eternal() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Eternal.java#L21) |

## Ferocious

` public record Ferocious() implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Ferocious DEFAULT ` | 初值 ` new Ferocious() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L29) |
| ` public static final Identifier FEROCIOUS_ID ` | 初值 ` AnvilCraft.of("ferocious") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L30) |
| ` public static final MapCodec<Ferocious> CODEC ` | 初值 ` MapCodec.unit(Ferocious.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L31) |
| ` public static final StreamCodec<ByteBuf, Ferocious> STREAM_CODEC ` | 初值 ` StreamCodec.unit(Ferocious.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L32) |
| ` public static void tick(ServerPlayer player) ` | 实现调用 ` InventoryUtil.getItems(player.getInventory(), stack -> stack.has(ModComponents.FEROCIOUS)) `<br>实现调用 ` player.getInventory() `<br>实现调用 ` Ferocious.tick(stack) `<br>[调用处 PlayerTickEventHandler.onPlayerTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/PlayerTickEventHandler.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L34) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 执行 ` consumer.accept(Component.translatable("tooltip.anvilcraft.property.ferocious").withColor(0xDD1212)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L83) |
| ` public Ferocious() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/Ferocious.java#L28) |

## FilterContent

` public record FilterContent(NonNullList<ItemStack> list, boolean includeComponents, boolean denyList) implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<FilterContent> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L34) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FilterContent> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L46) |
| ` public FilterContent(NonNullList<ItemStack> list, boolean includeComponents, boolean denyList) ` | 实现调用 ` list.size() `<br>分支 ` (list.size() < FilterContent.SLOT_COUNT) ` 内调用 ` NonNullList.withSize(FilterContent.SLOT_COUNT, ItemStack.EMPTY) `<br>分支 ` (list.size() < FilterContent.SLOT_COUNT) ` 内调用 ` list.size() `<br>[调用处 FilterContent.setList](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L56) |
| ` public FilterContent() ` | 执行 ` this(NonNullList.withSize(FilterContent.SLOT_COUNT, ItemStack.EMPTY), false, false) `<br>[调用处 BuildingRodPattern.plan](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodPattern.java#L72) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L71) |
| ` public FilterContent setList(NonNullList<ItemStack> list) ` | 末尾返回 ` new FilterContent(list, this.includeComponents, this.denyList) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L75) |
| ` public FilterContent setIncludeComponents(boolean includeComponents) ` | 末尾返回 ` new FilterContent(this.list, includeComponents, this.denyList) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L79) |
| ` public FilterContent setDenyList(boolean denyList) ` | 末尾返回 ` new FilterContent(this.list, this.includeComponents, denyList) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L83) |
| ` public int getNestingLevel() ` | 末尾返回 ` maxLevel + 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L87) |
| ` public static boolean filter(ItemStack filterStack, ItemStack stack, boolean includeComponents) ` | 过滤物品堆栈是否匹配指定条件<br>参数 ` filterStack ` 过滤器物品堆栈，用于定义过滤条件<br>参数 ` stack ` 待检查的物品堆栈<br>参数 ` includeComponents ` 是否考虑组件信息进行匹配<br>返回 如果物品堆栈匹配过滤条件则返回true，否则返回false<br>` (filterStack.isEmpty()) ` 成立时提前返回 ` true `<br>` (content == null) ` 成立时提前返回 ` false `<br>末尾返回 ` content.filter(stack) `<br>[调用处 TradingStationBlockEntity.isProviding](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TradingStationBlockEntity.java#L259) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L105) |
| ` public boolean filter(ItemStack stack) ` | 末尾返回 ` this.denyList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L138) |
| ` @Override public void addToTooltip(Item.TooltipContext ctx, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 实现调用 ` this.includeComponents() `<br>实现调用 ` this.denyList() `<br>实现调用 ` consumer.accept( matchComponent.copy() .append(", ") .append(listMode) .withStyle(ChatFormatting.GRAY) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L151) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof FilterContent(NonNullList<ItemStack> list1, boolean components, boolean denyList1))) ` 成立时提前返回 ` false `<br>` (this.denyList != denyList1 \|\| this.includeComponents() != components \|\| this.list.size() != list1.size()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L171) |
| ` @Override public int hashCode() ` | 末尾返回 ` hash ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L183) |
| ` public NonNullList<ItemStack> list() ` | 读取 record 分量 ` list `<br>[调用处 FilterContent.filter](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L140) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L31) |
| ` public boolean includeComponents() ` | 读取 record 分量 ` includeComponents `<br>[调用处 FilterContent.filter](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L142) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L31) |
| ` public boolean denyList() ` | 读取 record 分量 ` denyList `<br>[调用处 FilterContent.filter](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L144) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L31) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FilterContent.java#L31) |

## FireReforging

` public record FireReforging() implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FireReforging DEFAULT ` | 初值 ` new FireReforging() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L16) |
| ` public static final MapCodec<FireReforging> CODEC ` | 初值 ` MapCodec.unit(FireReforging.DEFAULT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L17) |
| ` public static final StreamCodec<ByteBuf, FireReforging> STREAM_CODEC ` | 初值 ` StreamCodec.unit(new FireReforging()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L18) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 执行 ` consumer.accept(Component.translatable("tooltip.anvilcraft.property.fire_reforging").withStyle(ChatFormatting.GOLD)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L20) |
| ` public FireReforging() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/FireReforging.java#L15) |
