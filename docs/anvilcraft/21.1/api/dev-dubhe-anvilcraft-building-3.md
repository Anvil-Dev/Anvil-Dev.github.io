# dev.dubhe.anvilcraft.building（OrdinaryBlockAdapter.Mapping 至 StructureSnapshotCodec.BlueprintWarning）



## OrdinaryBlockAdapter.Mapping

` public enum Mapping `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` AIR ` | 声明于枚举 ` OrdinaryBlockAdapter.Mapping ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L28) |
| ` PLACE ` | 声明于枚举 ` OrdinaryBlockAdapter.Mapping ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L29) |
| ` ATTACHED ` | 声明于枚举 ` OrdinaryBlockAdapter.Mapping ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L30) |
| ` UNSUPPORTED ` | 声明于枚举 ` OrdinaryBlockAdapter.Mapping ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L31) |
| ` public static Mapping[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L27) |
| ` public static Mapping valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L27) |

## ScannerDiskNormalizer

` public final class ScannerDiskNormalizer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/ScannerDiskNormalizer.java#L12)

扫描器坐标使用预览朝向，方块状态使用世界朝向；先还原坐标再统一部署。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static StructureSnapshot normalize(StructureSnapshot snapshot, Direction facing, boolean upsideDown) ` | 末尾返回 ` new StructureSnapshot(normalizedSize, snapshot.palette(), blocks, entities, ticks, snapshot.capturedAt()) `<br>[调用处 BlueprintCapture.capture](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintCapture.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/ScannerDiskNormalizer.java#L16) |

## SignDecorationAdapter

` public final class SignDecorationAdapter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L26)

告示牌与悬挂告示牌不再随方块一次带字放下:书写、染色、发光、打蜡各拆成一条 DECORATE 操作, 悦灵分别带上染料、荧光墨囊、蜂巢再上去加工,消耗与玩家手动加工一致。 一条操作只能携带一种材料,所以正反面与四种加工必须各占一条,靠 slot 区分。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MASK_ALL ` | slot 0..7 的全掩码;Aspect#WAX 只用正面位,反面位留空不影响判断。<br>初值 ` (1 << (ASPECTS.length * 2)) - 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L45) |
| ` public static boolean isSign(BlockState state) ` | 末尾返回 ` state.getBlock() instanceof SignBlock `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L598) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L58) |
| ` public static int slotOf(Aspect aspect, boolean front) ` | 低位存正反面,高位存面向。<br>末尾返回 ` aspect.ordinal() * 2 + (front ? 0 : 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L63) |
| ` @Nullable public static Aspect aspectOf(int slot) ` | ` (slot < 0) ` 成立时提前返回 ` null `<br>末尾返回 ` index >= ASPECTS.length ? null : ASPECTS[index] ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L67) |
| ` public static boolean isFront(int slot) ` | 末尾返回 ` slot % 2 == 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L74) |
| ` public static int maskOf(int slot) ` | 尚未加工项的位掩码;0 表示这块告示牌该显示什么就显示什么。<br>末尾返回 ` aspect == null ? 0 : 1 << slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L79) |
| ` public static Extracted extract(BlockState target, CompoundTag nbt, HolderLookup.Provider registries) ` | 抽出告示牌的文字、颜色、发光与蜡,并从配置里删掉,否则提交时载入配置会免费复原一遍。 与 BlockEntityContentAdapter 抽走序列化槽物品是同一条约束。<br>` (!isSign(target)) ` 成立时提前返回 ` new Extracted(config, List.of()) `<br>末尾返回 ` new Extracted(config, List.copyOf(decorations)) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L599) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L88) |
| ` public static CompoundTag sanitize(BlockState state, CompoundTag nbt, HolderLookup.Provider registries) ` | 末尾返回 ` compose(blank, extracted.decorations(), registries) `<br>[调用处 BlueprintBlockConfiguration.take](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintBlockConfiguration.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L148) |
| ` public static CompoundTag compose( @Nullable CompoundTag config, List<Decoration> delivered, HolderLookup.Provider registries ) ` | 提交时把配置与已交付的加工项合成最终 NBT;未交付项保持原版空白默认。<br>` (delivered.isEmpty()) ` 成立时提前返回 ` result `<br>末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L158) |
| ` public static CompoundTag stripPending(CompoundTag full, int pending, HolderLookup.Provider registries) ` | 客户端按未加工掩码裁剪蓝图快照 NBT:文字未写就换成空白四行,颜色与发光未做就删字段。 掩码只标注真的排了加工操作而尚未交付的项,所以没有拆分计划的告示牌传 0 即原样渲染。<br>` ((pending & MASK_ALL) == 0) ` 成立时提前返回 ` full `<br>末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L221) |

## SignDecorationAdapter.Aspect

` public enum Aspect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L28)

加工面向;顺序即 slot 编码,追加新项不会改变已持久化操作的含义。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` TEXT ` | 声明于枚举 ` SignDecorationAdapter.Aspect ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L29) |
| ` COLOR ` | 声明于枚举 ` SignDecorationAdapter.Aspect ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L30) |
| ` GLOW ` | 声明于枚举 ` SignDecorationAdapter.Aspect ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L31) |
| ` WAX ` | 声明于枚举 ` SignDecorationAdapter.Aspect ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L32) |
| ` public static Aspect[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L28) |
| ` public static Aspect valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L28) |

## SignDecorationAdapter.Decoration

` public record Decoration(int slot, ItemStack material, CompoundTag payload) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L51)

一条待加工项;payload 只存该项自己那点数据,其余字段交付时回落原版默认。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Decoration(int slot, ItemStack material, CompoundTag payload) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L51) |
| ` public int slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L51) |
| ` public ItemStack material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L51) |
| ` public CompoundTag payload() ` | 读取 record 分量 ` payload ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L51) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L51) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L51) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L51) |

## SignDecorationAdapter.Extracted

` public record Extracted(CompoundTag config, List<Decoration> decorations) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L55)

剥离后的方块实体配置,以及需要悦灵逐项加工的清单。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Extracted(CompoundTag config, List<Decoration> decorations) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L55) |
| ` public CompoundTag config() ` | 读取 record 分量 ` config ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L55) |
| ` public List<Decoration> decorations() ` | 读取 record 分量 ` decorations ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L55) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L55) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L55) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/SignDecorationAdapter.java#L55) |

## StoragePreviewSnapshot

` public record StoragePreviewSnapshot(List<Entry> items, List<StorageServerStub.FluidEntry> fluids, StorageServerStub.Capacity capacity, double fullness, CraftingStorage crafting, boolean craftingUnlocked) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L32)

结构 NBT 中的只读存储快照，物品按类型与组件合并，数量独立保存。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String KEY ` | 初值 ` "anvilcraft:storage_preview" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L36) |
| ` public static final Codec<StoragePreviewSnapshot> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L47) |
| ` public StoragePreviewSnapshot(List<Entry> items, List<StorageServerStub.FluidEntry> fluids, StorageServerStub.Capacity capacity, double fullness, CraftingStorage crafting, boolean craftingUnlocked) ` | 实现调用 ` List.copyOf(items) `<br>实现调用 ` fluids.stream().map(entry -> new StorageServerStub.FluidEntry(entry.icon().copy(), entry.amount())).toList() `<br>实现调用 ` fluids.stream().map(entry -> new StorageServerStub.FluidEntry(entry.icon().copy(), entry.amount())) `<br>[调用处 StoragePreviewSnapshot.empty](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L80) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L56) |
| ` public static StoragePreviewSnapshot empty(IStorageType<?> type) ` | 末尾返回 ` new StoragePreviewSnapshot(List.of(), List.of(), new StorageServerStub.Capacity(0, space, 0, types), 0, CraftingStorage.EMPTY, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L76) |
| ` public static StoragePreviewSnapshot capture(BaseStorage<?> storage) ` | 实现调用 ` storage.getAvailableItems() `<br>实现调用 ` available.size() `<br>实现调用 ` available.getAmountAsLong(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L84) |
| ` public static CompoundTag captureBlockEntity(BlockEntity entity) ` | ` (level == null) ` 成立时抛出 ` new IllegalStateException("Cannot capture a detached block entity") `<br>末尾返回 ` tag `<br>[调用处 StructureScannerBlockEntity.scanNextLayer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StructureScannerBlockEntity.java#L380) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L103) |
| ` public static StoragePreviewSnapshot read(CompoundTag data, HolderLookup.Provider registries, IStorageType<?> type) ` | ` (!data.contains(KEY)) ` 成立时提前返回 ` empty(type) `<br>末尾返回 ` CODEC.parse(registries.createSerializationContext(NbtOps.INSTANCE), data.get(KEY)).getOrThrow() `<br>[调用处 StorageStructurePreview.create](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/StorageStructurePreview.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L121) |
| ` public List<Entry> items() ` | 读取 record 分量 ` items ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L33) |
| ` public List<StorageServerStub.FluidEntry> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L33) |
| ` public StorageServerStub.Capacity capacity() ` | 读取 record 分量 ` capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L33) |
| ` public double fullness() ` | 读取 record 分量 ` fullness ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L34) |
| ` public CraftingStorage crafting() ` | 读取 record 分量 ` crafting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L34) |
| ` public boolean craftingUnlocked() ` | 读取 record 分量 ` craftingUnlocked ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L34) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L32) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L32) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L32) |

## StoragePreviewSnapshot.Entry

` public record Entry(ItemStack icon, long count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L64)

一个物品定义只保存一次，数量可以超过普通物品堆叠上限。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<Entry> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L65) |
| ` public Entry(ItemStack icon, long count) ` | 执行 ` icon = icon.copyWithCount(1) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L71) |
| ` public ItemStack icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L64) |
| ` public long count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L64) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L64) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L64) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StoragePreviewSnapshot.java#L64) |

## StructureBlueprintEdit

` public final class StructureBlueprintEdit `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureBlueprintEdit.java#L21)

编辑蓝图快照，不修改扫描来源世界中的方块。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean cycleFacing(ItemStack stack) ` | 标记物品只轮换名为 facing 的方向属性，保留其他状态和物品组件。<br>` (!(stack.getItem() instanceof BlockItem item)) ` 成立时提前返回 ` false `<br>` (facing == null \|\| !(state.getValue(facing) instanceof Direction)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 StructureScannerScreen.mouseClicked](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L1504) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureBlueprintEdit.java#L26) |
| ` public static StructureSnapshot replace(StructureSnapshot snapshot, BlockPos selected, BlockState replacement, boolean all) ` | 单个替换按坐标定位，批量替换只匹配完整方块状态。<br>` (original == replacement) ` 成立时提前返回 ` snapshot `<br>[调用处 StructureScannerFiles.editBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L120) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureBlueprintEdit.java#L47) |
| ` public static StructureSnapshot resize(StructureSnapshot snapshot, Vec3i size, boolean upsideDown) ` | 宽度围绕扫描仪变化，深度向前延伸，高度从扫描仪所在的底面或顶面变化。<br>末尾返回 ` resize(snapshot, snapshot.size(), size, BlockPos.ZERO, upsideDown) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureBlueprintEdit.java#L75) |
| ` public static StructureSnapshot resize( StructureSnapshot snapshot, Vec3i previousSize, Vec3i size, BlockPos previewOffset, boolean upsideDown ) ` | 扩展结构的偏移以原扫描选区为基准，裁剪后转为新选区内的局部坐标。<br>` (size.getX() < 1 \|\| size.getY() < 1 \|\| size.getZ() < 1 \|\| size.getX() > StructureSnapshotCodec.MAX_AXIS \|\| size.getY() > StructureSnapshotCodec.MAX_AXIS \|\| size.getZ() > StructureSnapshotCodec.MAX_AXIS) ` 成立时抛出 ` new IllegalArgumentException("Blueprint size must be between 1 and 16 on each axis") `<br>末尾返回 ` transform(snapshot, new BlueprintPlacement(shift, Rotation.NONE, Mirror.NONE), size, true) `<br>[调用处 StructureScannerFiles.editBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureBlueprintEdit.java#L80) |
| ` public static StructureSnapshot rotate(StructureSnapshot snapshot, Rotation rotation) ` | 将扫描结果转为预览中朝北的坐标，后续编辑使用与导入蓝图相同的坐标系。<br>末尾返回 ` transform(snapshot, new BlueprintPlacement(anchor, rotation, Mirror.NONE), new Vec3i(bounds.getXSpan(), bounds.getYSpan(), bounds.getZSpan()), false) `<br>[调用处 StructureScannerFiles.editBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L134) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureBlueprintEdit.java#L94) |

## StructurePreviewTemplate

` public record StructurePreviewTemplate(StructureTemplate template, BlockPos minimum) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L18)

将扫描仪预览坐标转换为手册共用的原版结构模板，保留方块实体的完整配置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static StructurePreviewTemplate create( @Nullable StructureSnapshot snapshot, BlueprintPlacement placement, AABB bounds, @Nullable BlockPos scannerPos, @Nullable BlockState scannerState, HolderLookup.Provider registries ) ` | 末尾返回 ` new StructurePreviewTemplate(template, minimum) `<br>[调用处 StructureScannerScreen.renderPreview](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L1277) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L19) |
| ` public StructurePreviewTemplate(StructureTemplate template, BlockPos minimum) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L18) |
| ` public StructureTemplate template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L18) |
| ` public BlockPos minimum() ` | 读取 record 分量 ` minimum ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L18) |

## StructureSnapshot

` public record StructureSnapshot(Vec3i size, List<BlockState> palette, List<BlockEntry> blocks, List<EntityEntry> entities, List<BlueprintTicks.Entry> ticks, long capturedAt) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L17)

规范结构快照:所有导入格式统一转换成的内存表示,语义与原版结构 NBT 等价。 方块按 Y、Z、X 排序,调色板按排序后首次出现顺序编号,实体按坐标稳定排序, 因此同一内容无论来源如何都会产生相同的规范 NBT 与内容哈希。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureSnapshot(Vec3i size, List<BlockState> palette, List<BlockEntry> blocks, List<EntityEntry> entities) ` | 执行 ` this(size, palette, blocks, entities, List.of(), 0) `<br>[调用处 ScannerDiskNormalizer.normalize](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/ScannerDiskNormalizer.java#L38) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L25) |
| ` public StructureSnapshot(Vec3i size, List<BlockState> palette, List<BlockEntry> blocks, List<EntityEntry> entities, List<BlueprintTicks.Entry> ticks, long capturedAt) ` | 实现调用 ` List.copyOf(palette) `<br>实现调用 ` List.copyOf(blocks) `<br>实现调用 ` List.copyOf(entities) `<br>[调用处 BlueprintCapture.capture](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintCapture.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L29) |
| ` public BlockState stateOf(BlockEntry entry) ` | 末尾返回 ` this.palette.get(entry.stateIndex()) `<br>[调用处 StructureSnapshot.nonAirBlockCount](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L44) |
| ` public boolean hasBlockEntities() ` | 末尾返回 ` this.blocks.stream().anyMatch(entry -> entry.nbt().isPresent()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L48) |
| ` public boolean hasEntities() ` | 末尾返回 ` !this.entities.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L52) |
| ` public int nonAirBlockCount() ` | 非空气方块条目数,用于摘要显示与材料预估。<br>末尾返回 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L57) |
| ` public Vec3i size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L18) |
| ` public List<BlockState> palette() ` | 读取 record 分量 ` palette ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L19) |
| ` public List<BlockEntry> blocks() ` | 读取 record 分量 ` blocks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L20) |
| ` public List<EntityEntry> entities() ` | 读取 record 分量 ` entities ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L21) |
| ` public List<BlueprintTicks.Entry> ticks() ` | 读取 record 分量 ` ticks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L22) |
| ` public long capturedAt() ` | 读取 record 分量 ` capturedAt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L17) |

## StructureSnapshot.BlockEntry

` public record BlockEntry(BlockPos pos, int stateIndex, Optional<CompoundTag> nbt) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L37)

一个方块条目;nbt 为方块实体的完整数据(saveWithId 语义),无方块实体时为空。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockEntry(BlockPos pos, int stateIndex, Optional<CompoundTag> nbt) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L37) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L37) |
| ` public int stateIndex() ` | 读取 record 分量 ` stateIndex ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L37) |
| ` public Optional<CompoundTag> nbt() ` | 读取 record 分量 ` nbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L37) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L37) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L37) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L37) |

## StructureSnapshot.EntityEntry

` public record EntityEntry(Vec3 pos, BlockPos blockPos, CompoundTag nbt) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L41)

一个实体条目;字段语义与原版结构 entities 条目一致。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityEntry(Vec3 pos, BlockPos blockPos, CompoundTag nbt) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L41) |
| ` public Vec3 pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L41) |
| ` public BlockPos blockPos() ` | 读取 record 分量 ` blockPos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L41) |
| ` public CompoundTag nbt() ` | 读取 record 分量 ` nbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L41) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L41) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L41) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshot.java#L41) |

## StructureSnapshotCodec

` public final class StructureSnapshotCodec `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L47)

规范快照与原版结构 NBT 之间的解析、校验与确定性序列化。 解析显式报告未知方块、未知实体、损坏调色板与超大声明,绝不把错误静默转换为空气; 尺寸与条目上限在分配大量内存之前检查。内容哈希取规范 NBT 未压缩字节的 SHA-256, 相同逻辑内容的 CompoundTag 键集合相同即产生相同字节,因此哈希与来源格式无关。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_AXIS ` | 单轴最大尺寸;损坏文件声明的极端尺寸在此被拒绝。<br>初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L49) |
| ` public static final int MAX_BLOCK_ENTRIES ` | 方块条目上限。<br>初值 ` MAX_AXIS * MAX_AXIS * MAX_AXIS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L51) |
| ` public static final int MAX_ENTITY_ENTRIES ` | 实体条目上限。<br>初值 ` 4_096 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L53) |
| ` public static final int MAX_PALETTE_ENTRIES ` | 调色板条目上限。<br>初值 ` MAX_BLOCK_ENTRIES ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L55) |
| ` public static ParsedSnapshot parse(CompoundTag tag, HolderLookup.Provider registries) throws ConstructionBlueprintException ` | 把原版结构语义的 NBT 解析为规范快照,输入可来自模板管理器、扫描器文件或上传文件。<br>` (paletteTag.size() > MAX_PALETTE_ENTRIES) ` 成立时抛出 ` new ConstructionBlueprintException( "oversized", "palette entries " + paletteTag.size() + " > " + MAX_PALETTE_ENTRIES ) `<br>末尾返回 ` new ParsedSnapshot(snapshot, List.copyOf(warnings)) `<br>[调用处 BlueprintNormalizer.load](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L71) |
| ` public static StructureSnapshot canonicalize(StructureSnapshot snapshot) ` | 重排方块与实体并按首次出现顺序重建调色板,保证同一内容得到唯一规范形式。<br>末尾返回 ` new StructureSnapshot(snapshot.size(), palette, blocks, entities, snapshot.ticks(), snapshot.capturedAt()) `<br>[调用处 BlueprintNormalizer.normalize](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L296) |
| ` public static CompoundTag write(StructureSnapshot snapshot) ` | 写出规范结构 NBT;输入必须已经过 #canonicalize。<br>末尾返回 ` tag `<br>[调用处 StructurePreviewTemplate.create](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructurePreviewTemplate.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L331) |
| ` public static String hash(CompoundTag canonicalTag) ` | 规范 NBT 未压缩字节的 SHA-256 十六进制,即蓝图内容哈希。<br>实现调用 ` NbtIo.write(canonicalTag, new DataOutputStream(bytes)) `<br>实现调用 ` MessageDigest.getInstance("SHA-256") `<br>实现调用 ` HexFormat.of().formatHex(digest.digest(bytes.toByteArray())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L385) |

## StructureSnapshotCodec.BlueprintWarning

` public record BlueprintWarning(String reason, String detail) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L67)

一条导入警告;reason 为稳定翻译键后缀。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlueprintWarning(String reason, String detail) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L67) |
| ` public String reason() ` | 读取 record 分量 ` reason ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L67) |
| ` public String detail() ` | 读取 record 分量 ` detail ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L67) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L67) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L67) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L67) |
