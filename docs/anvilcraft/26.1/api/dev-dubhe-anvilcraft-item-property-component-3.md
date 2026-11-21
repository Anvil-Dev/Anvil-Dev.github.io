# dev.dubhe.anvilcraft.item.property.component（SignedPlayers 至 TerminalBinding）



## SignedPlayers

` public record SignedPlayers(HashBiMap<Component, UUID> playerInfos) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SignedPlayers EMPTY ` | 初值 ` new SignedPlayers(HashBiMap.create()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L17) |
| ` public static final Codec<SignedPlayers> CODEC ` | 初值 ` Codec.unboundedMap(ComponentCodecs.FLAT_CODEC, UUIDUtil.CODEC) .xmap(HashBiMap::create, Function.identity()) .xmap(SignedPlayers::new, SignedPlayers::playerInfos) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L18) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SignedPlayers> STREAM_CODEC ` | 初值 ` ByteBufCodecs.map( HashBiMap::create, ComponentSerialization.STREAM_CODEC, UUIDUtil.STREAM_CODEC ).map(SignedPlayers::new, SignedPlayers::playerInfos) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L21) |
| ` public SignedPlayers(HashBiMap<Component, UUID> playerInfos) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L16) |
| ` public HashBiMap<Component, UUID> playerInfos() ` | 读取 record 分量 ` playerInfos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SignedPlayers.java#L16) |

## StorageRef

` public record StorageRef(StorageType type, Optional<UUID> id) implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<StorageRef> CODEC ` | 初值 ` CodecUtil.mapCodec( StorageType.CODEC .fieldOf("type") .forGetter(StorageRef::type), UUIDUtil.CODEC .optionalFieldOf("id") .forGetter(StorageRef::id), StorageRef::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L24) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, StorageRef> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StorageType.STREAM_CODEC, StorageRef::type, ByteBufCodecs.optional(UUIDUtil.STREAM_CODEC), StorageRef::id, StorageRef::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L33) |
| ` public StorageRef(StorageType type) ` | 执行 ` this(type, Optional.empty()) `<br>[调用处 StorageCommand.storageUnbind](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L179) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L41) |
| ` public StorageRef(StorageType type, @Nullable UUID id) ` | 执行 ` this(type, Optional.ofNullable(id)) `<br>[调用处 TerminalSessions.targetStorage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/TerminalSessions.java#L113) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L45) |
| ` public static StorageRef crate() ` | 末尾返回 ` new StorageRef(StorageType.CRATE) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L734) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L49) |
| ` public static StorageRef largeCrate() ` | 末尾返回 ` new StorageRef(StorageType.LARGE_CRATE) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L758) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L53) |
| ` public static StorageRef shulkerContainer() ` | 末尾返回 ` new StorageRef(StorageType.SHULKER_CONTAINER) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L780) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L57) |
| ` public static StorageRef hyperdimension() ` | 末尾返回 ` new StorageRef(StorageType.HYPERDIMENSION) `<br>[调用处 ModBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L833) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L61) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> builder, TooltipFlag flag, DataComponentGetter components) ` | 实现调用 ` this.id.map(id -> Component.literal(id.toString())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L65) |
| ` public StorageType type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L23) |
| ` public Optional<UUID> id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StorageRef.java#L23) |

## StoredEnergy

` public record StoredEnergy(int value) implements IIntegerComponent, TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StoredEnergy EMPTY ` | 初值 ` new StoredEnergy(0) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L22) |
| ` public static final MapCodec<StoredEnergy> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group( Codec.INT .optionalFieldOf("energy", 0) .forGetter(StoredEnergy::value) ).apply(inst, StoredEnergy::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L23) |
| ` public static final StreamCodec<ByteBuf, StoredEnergy> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, StoredEnergy::value, StoredEnergy::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L28) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 实现调用 ` components.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY).value() `<br>实现调用 ` components.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY) `<br>实现调用 ` flag.hasShiftDown() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L34) |
| ` public StoredEnergy(int value) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L21) |
| ` public int value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredEnergy.java#L21) |

## StoredFluids

` public record StoredFluids(List<FluidStack> fluids) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StoredFluids EMPTY ` | 初值 ` new StoredFluids(List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L13) |
| ` public static final Codec<StoredFluids> CODEC ` | 初值 ` FluidStack.OPTIONAL_CODEC.listOf().xmap( StoredFluids::new, StoredFluids::fluids ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, StoredFluids> STREAM_CODEC ` | 初值 ` FluidStack.OPTIONAL_STREAM_CODEC .apply(ByteBufCodecs.list()) .map(StoredFluids::new, StoredFluids::fluids) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L18) |
| ` public StoredFluids(List<FluidStack> fluids) ` | 执行 ` fluids = fluids.stream() .filter(Objects::nonNull) .map(FluidStack::copy) .toList() `<br>[调用处 CreativeFluidTankBlockEntity.collectImplicitComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeFluidTankBlockEntity.java#L82) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L22) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.fluids.stream().allMatch(FluidStack::isEmpty) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L29) |
| ` @Override public boolean equals(Object obj) ` | ` (!(obj instanceof StoredFluids(List<FluidStack> otherFluids))) ` 成立时提前返回 ` false `<br>` (this.fluids.size() != otherFluids.size()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L33) |
| ` @Override public int hashCode() ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L43) |
| ` public List<FluidStack> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredFluids.java#L12) |

## StoredItem

` public final class StoredItem implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L20)

展示物品的数据组件；模板允许在默认组件绑定完成后再创建物品栈。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoredItem(ItemStack stored) ` | 执行 ` this.stored = () -> stored ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L23) |
| ` public StoredItem(ItemStackTemplate template) ` | 执行 ` this.stored = Suppliers.memoize(template::create) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L27) |
| ` public ItemStack stored() ` | 返回仅用于展示的物品栈，调用方不应修改它。<br>末尾返回 ` this.stored.get() `<br>[调用处 StoredItem.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L32) |
| ` public static Codec<StoredItem> CODEC ` | 初值 ` ItemStack.CODEC.xmap( StoredItem::new, StoredItem::stored ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L36) |
| ` public static StreamCodec<RegistryFriendlyByteBuf, StoredItem> STREAM_CODEC ` | 初值 ` ItemStack.STREAM_CODEC.map( StoredItem::new, StoredItem::stored ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L41) |
| ` @Override public boolean equals(Object obj) ` | ` (!(obj instanceof StoredItem other)) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.stored(), other.stored()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L46) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.stored()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L52) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 实现调用 ` components.getOrDefault(ModComponents.DISPLAY_ITEM, new StoredItem(ItemStack.EMPTY)) `<br>实现调用 ` storedItem.stored() `<br>实现调用 ` stored.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StoredItem.java#L57) |

## StructureData

` public record StructureData(int minX, int minY, int minZ, int maxX, int maxY, int maxZ) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StructureData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L14) |
| ` public static final StreamCodec<ByteBuf, StructureData> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L23) |
| ` public StructureData(BlockPos initPos) ` | 执行 ` this(initPos.getX(), initPos.getY(), initPos.getZ(), initPos.getX(), initPos.getY(), initPos.getZ()) `<br>[调用处 StructureToolItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/StructureToolItem.java#L59) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L39) |
| ` public StructureData addPos(BlockPos pos) ` | 末尾返回 ` new StructureData(newMinX, newMinY, newMinZ, newMaxX, newMaxY, newMaxZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L43) |
| ` public BlockPos minPos() ` | 末尾返回 ` new BlockPos(this.minX, this.minY, this.minZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L53) |
| ` public BlockPos maxPos() ` | 末尾返回 ` new BlockPos(this.maxX, this.maxY, this.maxZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L57) |
| ` public int getSizeX() ` | 末尾返回 ` this.maxX - this.minX + 1 `<br>[调用处 StructureData.isCube](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L61) |
| ` public int getSizeY() ` | 末尾返回 ` this.maxY - this.minY + 1 `<br>[调用处 StructureData.isCube](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L65) |
| ` public int getSizeZ() ` | 末尾返回 ` this.maxZ - this.minZ + 1 `<br>[调用处 StructureData.isCube](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L69) |
| ` public boolean isCube() ` | 末尾返回 ` this.getSizeX() == this.getSizeY() && this.getSizeY() == this.getSizeZ() `<br>[调用处 StructureData.isOddCubeWithinSize](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L79) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L73) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public boolean isOddCubeWithinSize(int maxSize) ` | 末尾返回 ` this.isCube() && this.getSizeX() % 2 == 1 && this.getSizeX() <= maxSize ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L77) |
| ` public int minX() ` | 读取 record 分量 ` minX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L11) |
| ` public int minY() ` | 读取 record 分量 ` minY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L11) |
| ` public int minZ() ` | 读取 record 分量 ` minZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L11) |
| ` public int maxX() ` | 读取 record 分量 ` maxX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L12) |
| ` public int maxY() ` | 读取 record 分量 ` maxY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L12) |
| ` public int maxZ() ` | 读取 record 分量 ` maxZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureData.java#L10) |

## StructureDiskData

` public record StructureDiskData(String file, String name, UUID uuid, Direction direction, int sizeX, int sizeY, int sizeZ, boolean upsideDown, boolean autoRotate) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureDiskData(String file, String name, UUID uuid, Direction direction, int sizeX, int sizeY, int sizeZ) ` | 执行 ` this(file, name, uuid, direction, sizeX, sizeY, sizeZ, false, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L24) |
| ` public StructureDiskData(String file, String name, UUID uuid, Direction direction, int sizeX, int sizeY, int sizeZ, boolean upsideDown) ` | 执行 ` this(file, name, uuid, direction, sizeX, sizeY, sizeZ, upsideDown, true) `<br>[调用处 DiskDisplaySupport.getImportedDisplay](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L82) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L28) |
| ` public static final Codec<StructureDiskData> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L33) |
| ` public static final StreamCodec<FriendlyByteBuf, StructureDiskData> STREAM_CODEC ` | 初值 ` StreamCodec.of( StructureDiskData::write, StructureDiskData::read ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L45) |
| ` public String file() ` | 读取 record 分量 ` file ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L14) |
| ` public String name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L15) |
| ` public UUID uuid() ` | 读取 record 分量 ` uuid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L16) |
| ` public Direction direction() ` | 读取 record 分量 ` direction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L17) |
| ` public int sizeX() ` | 读取 record 分量 ` sizeX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L18) |
| ` public int sizeY() ` | 读取 record 分量 ` sizeY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L19) |
| ` public int sizeZ() ` | 读取 record 分量 ` sizeZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L20) |
| ` public boolean upsideDown() ` | 读取 record 分量 ` upsideDown ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L21) |
| ` public boolean autoRotate() ` | 读取 record 分量 ` autoRotate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/StructureDiskData.java#L13) |

## TerminalBinding

` public record TerminalBinding(Optional<UUID> id) implements TooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final TerminalBinding EMPTY ` | 初值 ` new TerminalBinding(Optional.empty()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L20) |
| ` public static final MapCodec<TerminalBinding> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( UUIDUtil.CODEC .optionalFieldOf("id") .forGetter(TerminalBinding::id) ).apply(ins, TerminalBinding::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L21) |
| ` public static final StreamCodec<ByteBuf, TerminalBinding> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.optional(UUIDUtil.STREAM_CODEC), TerminalBinding::id, TerminalBinding::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L26) |
| ` @Override public void addToTooltip(Item.TooltipContext context, Consumer<Component> consumer, TooltipFlag flag, DataComponentGetter components) ` | 执行 ` consumer.accept(Component.translatable("item.anvilcraft.hyperdimension_terminal." + (this.id.isPresent() ? "bound" : "unbound"))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L32) |
| ` public TerminalBinding(Optional<UUID> id) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L19) |
| ` public Optional<UUID> id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/TerminalBinding.java#L19) |
