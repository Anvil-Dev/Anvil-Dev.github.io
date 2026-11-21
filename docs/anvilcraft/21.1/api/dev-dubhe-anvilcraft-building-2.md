# dev.dubhe.anvilcraft.building（BuildingRodService 至 OrdinaryBlockAdapter）



## BuildingRodService

` public final class BuildingRodService `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L87)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void start(ServerPlayer player, BlockPos first, Direction face, @Nullable BlockHitResult hit) ` | 执行 ` start(player, first, face, hit, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L133) |
| ` public static void start(ServerPlayer player, BlockPos first, Direction face, @Nullable BlockHitResult hit, long seed) ` | 实现调用 ` SELECTIONS.remove(player) `<br>实现调用 ` BuildingRodItem.isHeld(player) `<br>实现调用 ` withinReach(player, first, 0) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L137) |
| ` public static long volume(BlockPos first, BlockPos last) ` | 末尾返回 ` (Math.abs((long) first.getX() - last.getX()) + 1) * (Math.abs((long) first.getY() - last.getY()) + 1) * (Math.abs((long) first.getZ() - last.getZ()) + 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L174) |
| ` public static void box(ServerPlayer player, BlockPos first, BlockPos last, Direction face) ` | 执行 ` box(player, first, last, face, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L180) |
| ` public static void box(ServerPlayer player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit) ` | 执行 ` box(player, first, last, face, hit, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L184) |
| ` public static void box(ServerPlayer player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit, long seed) ` | 实现调用 ` BuildingRodItem.material(player) `<br>实现调用 ` BuildingRodItem.isHeld(player) `<br>实现调用 ` BuildingRodItem.isPlacementMaterial(held) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L81) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L188) |
| ` public static List<Cell> preview(Player player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit) ` | 末尾返回 ` preview(player, first, last, face, hit, null, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L225) |
| ` public static List<Cell> preview(Player player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit, long seed) ` | 末尾返回 ` preview(player, first, last, face, hit, null, seed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L229) |
| ` public static List<Cell> preview(Player player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit, @Nullable BlockHitResult endHit, long seed) ` | ` (!BuildingRodItem.isPlacementMaterial(held) \|\| volume(first, last) > AnvilCraft.CONFIG.equipment.buildingRodMaxBlocks) ` 成立时提前返回 ` List.of() `<br>` (!(held.getItem() instanceof BlockItem) && !held.is(ModItems.FILTER)) ` 成立时提前返回 ` BuildingRodFluids.preview(player, first, last) `<br>末尾返回 ` groups == null ? List.of() : groups.stream().flatMap(group -> group.cells.stream()).toList() `<br>[调用处 BuildingRodClient.placementPreview](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L393) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L234) |
| ` public static List<Cell> singlePlacement(UseOnContext use) ` | ` (!(use.getItemInHand().getItem() instanceof BlockItem item) \|\| use.getPlayer() == null) ` 成立时提前返回 ` List.of() `<br>` (!cells.isEmpty()) ` 成立时提前返回 ` cells `<br>[调用处 LargeBlockPlacePreviewEventListener.updatePreview](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L210) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L392) |
| ` public static void blueprint(ServerPlayer player, BlockPos anchor, Rotation rotation, Mirror mirror, boolean partial) ` | 执行 ` blueprints(player, anchor, anchor, rotation, mirror, partial) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L79) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L471) |
| ` public static void blueprints( ServerPlayer player, BlockPos anchor, BlockPos last, Rotation rotation, Mirror mirror, boolean partial ) ` | 实现调用 ` BuildingRodItem.isHeld(player) `<br>实现调用 ` BuildingRodItem.material(player).is(ModItems.STRUCTURE_DISK) `<br>实现调用 ` BuildingRodItem.material(player) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L77) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L475) |
| ` public static void message(ServerPlayer player, String key) ` | 执行 ` player.displayClientMessage(Component.translatable("message.anvilcraft.building_rod." + key), true) `<br>[调用处 BuildingRodFluids.place](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L960) |

## BuildingRodService.Cell

` public record Cell(BlockPos pos, BlockState state, CompoundTag config, List<BlockEntityContentAdapter.SlotStack> contents) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Cell(BlockPos pos, BlockState state, CompoundTag config, List<BlockEntityContentAdapter.SlotStack> contents) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152) |
| ` public CompoundTag config() ` | 读取 record 分量 ` config ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152) |
| ` public List<BlockEntityContentAdapter.SlotStack> contents() ` | 读取 record 分量 ` contents ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L152) |

## BuildingRodUndo

` public final class BuildingRodUndo `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L52)

保留区域快照，撤销时按实际收回与恢复的资源结算。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean placeFallingBlock(FallingBlockEntity entity, BlockPos pos, BooleanSupplier placement) ` | 末尾返回 ` placeFallingBlock(entity, List.of(pos), placement) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L129) |
| ` public static boolean placeFallingBlock(FallingBlockEntity entity, List<BlockPos> positions, BooleanSupplier placement) ` | 实现调用 ` HISTORY.values() `<br>实现调用 ` entity.level() `<br>实现调用 ` entity.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L133) |
| ` public static void replaced(Level level, BlockPos pos, BlockState before, BlockState after) ` | 实现调用 ` before.getBlock() `<br>实现调用 ` after.getBlock() `<br>实现调用 ` HISTORY.values() `<br>[调用处 BuildingCommit.set](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L132) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L158) |
| ` public static void spawnedBy(Entity source, Entity spawned) ` | 实现调用 ` HISTORY.values() `<br>实现调用 ` undo.derived.containsKey(source.getUUID()) `<br>实现调用 ` source.getUUID() `<br>[调用处 GiantAnvilBlock.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/GiantAnvilBlock.java#L290) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L167) |
| ` @SubscribeEvent public static void blockDrops(BlockDropsEvent event) ` | 事件总线派发 ` BlockDropsEvent ` 时调用。<br>实现调用 ` HISTORY.values() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` undo.region.contains(event.getPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L182) |
| ` @SubscribeEvent public static void fallingBlock(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.loadedFromDisk() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` falling.getStartPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L190) |
| ` public static void undo(ServerPlayer player) ` | 实现调用 ` BuildingRodItem.isHeld(player) `<br>实现调用 ` HISTORY.get(player) `<br>实现调用 ` player.level() `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L320) |

## ConstructionBlueprintException

` public class ConstructionBlueprintException extends Exception `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L7)

结构蓝图导入与任务操作的可展示错误。reason 是稳定的翻译键后缀, 客户端按 message.anvilcraftplasticraft.blueprint.&lt;reason&gt; 显示,detail 为附加说明。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConstructionBlueprintException(String reason, String detail) ` | 实现调用 ` super(detail) `<br>[调用处 LitematicaImporter.convert](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L10) |
| ` public ConstructionBlueprintException(String reason, String detail, Throwable cause) ` | 实现调用 ` super(detail, cause) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L15) |
| ` public String reason() ` | 末尾返回 ` this.reason ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L20) |
| ` public String detail() ` | 末尾返回 ` this.getMessage() == null ? "" : this.getMessage() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L24) |

## EntityBuildAdapter

` public interface EntityBuildAdapter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L18)

建造侧实体适配:匹配类型、材料、剥离内容、提交时直接生成。 注册项放在 init,这里不引用客户端或 FTB。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean matches(EntityType<?> type, CompoundTag nbt) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L35) |
| ` default boolean matches(Entity entity, CompoundTag nbt) ` | 末尾返回 ` this.matches(entity.getType(), nbt) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L37) |
| ` Planned plan(ServerLevel level, StructureSnapshot.EntityEntry entry, CompoundTag transformedNbt) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L41) |
| ` default ItemStack requiredTool() ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L43) |
| ` default boolean requiresHammer() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L47) |
| ` default ItemStack returnAfterDeliver(ServerLevel level, BuildingEntityOp op) ` | 末尾返回 ` op.returnStack().copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L51) |
| ` default @Nullable Entity spawn(ServerLevel level, BuildingEntityOp op) ` | ` (nbt == null \|\| nbt.getString("id").isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` EntityBuildAdapters.create(copy, level).map(entity -> { if (!level.addFreshEntity(entity)) { return null; } return entity; }).orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L55) |
| ` default void insertContents(Entity entity, List<SlotStack> contents, HolderLookup.Provider registries) ` | 实现调用 ` contents.isEmpty() `<br>分支 ` (entity instanceof Container container) ` 内调用 ` content.slot() `<br>分支 ` (entity instanceof Container container) ` 内调用 ` container.getContainerSize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L70) |

## EntityBuildAdapter.Planned

` record Planned(ItemStack material, ItemStack returned, CompoundTag entityNbt, List<SlotStack> contents, List<FluidBuildAdapter.TankFluid> fluids, boolean unsupported) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Planned skip() ` | 末尾返回 ` new Planned(ItemStack.EMPTY, ItemStack.EMPTY, new CompoundTag(), List.of(), List.of(), true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L30) |
| ` public Planned(ItemStack material, ItemStack returned, CompoundTag entityNbt, List<SlotStack> contents, List<FluidBuildAdapter.TankFluid> fluids, boolean unsupported) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22) |
| ` public ItemStack material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L23) |
| ` public ItemStack returned() ` | 读取 record 分量 ` returned ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L24) |
| ` public CompoundTag entityNbt() ` | 读取 record 分量 ` entityNbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L25) |
| ` public List<SlotStack> contents() ` | 读取 record 分量 ` contents ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L26) |
| ` public List<FluidBuildAdapter.TankFluid> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L27) |
| ` public boolean unsupported() ` | 读取 record 分量 ` unsupported ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22) |

## EntityBuildAdapter.SlotStack

` record SlotStack(int slot, ItemStack stack) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SlotStack(int slot, ItemStack stack) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public int slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public ItemStack stack() ` | 读取 record 分量 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |

## EntityBuildAdapters

` public final class EntityBuildAdapters `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L31)

实体建造适配器注册表与瞬态排除。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(EntityBuildAdapter adapter) ` | 执行 ` REGISTRY.add(adapter) `<br>[调用处 VanillaBuildingEntities.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/VanillaBuildingEntities.java#L37) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L44) |
| ` public static Optional<EntityBuildAdapter> find(EntityType<?> type, CompoundTag nbt) ` | 末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L48) |
| ` public static Optional<EntityBuildAdapter> find(Entity entity, CompoundTag nbt) ` | 末尾返回 ` REGISTRY.stream().filter(adapter -> adapter.matches(entity, nbt)).findFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L57) |
| ` public static Optional<Entity> create(CompoundTag tag, Level level) ` | 末尾返回 ` Optional.ofNullable(entity) `<br>[调用处 BuildingRegionSnapshot.restore](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L260) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L61) |
| ` public static boolean isTransient(EntityType<?> type) ` | 实现调用 ` type.getBaseClass() `<br>实现调用 ` Player.class.isAssignableFrom(base) `<br>实现调用 ` ExperienceOrb.class.isAssignableFrom(base) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L67) |
| ` public static boolean isTransient(Entity entity) ` | 实现调用 ` isTransient(entity.getType()) `<br>实现调用 ` entity.getType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L82) |
| ` @Nullable public static Entity spawn(ServerLevel level, BuildingEntityOp op) ` | 实现调用 ` findType(op) .flatMap(adapter -> Optional.ofNullable(adapter.spawn(level, op))) `<br>实现调用 ` findType(op) `<br>[调用处 BuildingRodService.commit](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L901) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L88) |
| ` public static ItemStack returnAfterDeliver(ServerLevel level, BuildingEntityOp op) ` | 末尾返回 ` findType(op) .map(adapter -> adapter.returnAfterDeliver(level, op)) .orElse(op.returnStack().copy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L108) |
| ` public static void insertContents( Entity entity, List<EntityBuildAdapter.SlotStack> contents, HolderLookup.Provider registries ) ` | 分支 ` (entity instanceof Mob mob) ` 内调用 ` content.slot() `<br>分支 ` (entity instanceof Mob mob) ` 内调用 ` EquipmentSlot.values() `<br>分支 ` (content.slot() >= 100 && content.slot() < 100 + EquipmentSlot.values().length) ` 内调用 ` mob.setItemSlot(EquipmentSlot.values()[content.slot() - 100], content.stack().copy()) `<br>[调用处 BuildingRodService.commit](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L903) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L114) |
| ` public static CompoundTag withWorldPos(CompoundTag nbt, Vec3 world) ` | 末尾返回 ` copy `<br>[调用处 BuildingEntityTransform.transform](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityTransform.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L144) |

## FluidBuildAdapter

` public final class FluidBuildAdapter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L31)

建造侧流体映射:源液体与分层锅走桶/精确 mB,储罐走 IFluidHandler。 不改 OrdinaryBlockAdapter,含水固体仍是 PLACE 的状态属性。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int BUCKET_AMOUNT ` | 初值 ` 1000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L32) |
| ` public static boolean isLiquidBlock(BlockState state) ` | 末尾返回 ` state.getBlock() instanceof LiquidBlock `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L605) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L46) |
| ` public static boolean isFilledCauldron(BlockState state) ` | ` (state.is(ModBlocks.MILK_CAULDRON)) ` 成立时提前返回 ` true `<br>末尾返回 ` content != null && currentAmount(content, state) > 0 `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L620) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L50) |
| ` public static FluidStack liquidOf(BlockState state) ` | ` (!isLiquidBlock(state)) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (!fluidState.isSource()) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` new FluidStack(fluidState.getType(), BUCKET_AMOUNT) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L614) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L58) |
| ` public static FluidStack cauldronFluidOf(BlockState state) ` | ` (state.is(ModBlocks.MILK_CAULDRON)) ` 成立时提前返回 ` new FluidStack(NeoForgeMod.MILK.get(), BUCKET_AMOUNT * CauldronUtil.currentLevel(state) / 4) `<br>` (content == null) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (amount <= 0) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` new FluidStack(content.fluid, amount) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L622) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L69) |
| ` public static ItemStack bucketOf(FluidStack fluid) ` | ` (fluid.isEmpty() \|\| fluid.getAmount() != BUCKET_AMOUNT) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (bucket == Items.AIR) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` new ItemStack(bucket) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L84) |
| ` public static ItemStack emptyBucket() ` | 末尾返回 ` new ItemStack(Items.BUCKET) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L95) |
| ` public static ItemStack cauldronItem(BlockState state) ` | ` (asItem == Items.AIR \|\| asItem == Items.WATER_BUCKET \|\| asItem == Items.LAVA_BUCKET \|\| asItem == Items.POWDER_SNOW_BUCKET) ` 成立时提前返回 ` new ItemStack(Items.CAULDRON) `<br>末尾返回 ` new ItemStack(asItem) `<br>[调用处 BuildingUndoResources.block](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingUndoResources.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L99) |
| ` public static Extracted extractTanks(BlockState state, @Nullable CompoundTag nbt, HolderLookup.Provider registries) ` | ` (nbt == null \|\| nbt.isEmpty()) ` 成立时提前返回 ` Extracted.empty() `<br>` (handler == null) ` 成立时提前返回 ` Extracted.empty() `<br>末尾返回 ` new Extracted(List.copyOf(tanks), false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L110) |
| ` public static void insert(BlockEntity blockEntity, List<TankFluid> tanks) ` | 实现调用 ` fluidHandlerOf(blockEntity) `<br>实现调用 ` tank.fluid().isEmpty() `<br>实现调用 ` tank.fluid() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L137) |
| ` public static boolean takeExactFluid(ItemStack stack, FluidStack needed) ` | ` (needed.isEmpty() \|\| stack.isEmpty()) ` 成立时提前返回 ` false `<br>` (handler == null) ` 成立时提前返回 ` false `<br>` (simulated.getAmount() != needed.getAmount() \|\| !FluidStack.isSameFluidSameComponents(simulated, needed)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L151) |
| ` public static boolean canProvideExactFluid(ItemStack stack, FluidStack needed) ` | ` (needed.isEmpty() \|\| stack.isEmpty()) ` 成立时提前返回 ` false `<br>` (handler == null) ` 成立时提前返回 ` false `<br>末尾返回 ` simulated.getAmount() == needed.getAmount() && FluidStack.isSameFluidSameComponents(simulated, needed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L168) |

## FluidBuildAdapter.Extracted

` public record Extracted(List<TankFluid> tanks, boolean unmapped) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Extracted empty() ` | 末尾返回 ` new Extracted(List.of(), false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L38) |
| ` public Extracted(List<TankFluid> tanks, boolean unmapped) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L37) |
| ` public List<TankFluid> tanks() ` | 读取 record 分量 ` tanks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L37) |
| ` public boolean unmapped() ` | 读取 record 分量 ` unmapped ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L37) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L37) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L37) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L37) |

## FluidBuildAdapter.TankFluid

` public record TankFluid(int tank, FluidStack fluid) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TankFluid(int tank, FluidStack fluid) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L34) |
| ` public int tank() ` | 读取 record 分量 ` tank ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L34) |
| ` public FluidStack fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L34) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L34) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L34) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L34) |

## LitematicaImporter

` public final class LitematicaImporter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L24)

Litematica .litematic 到原版结构 NBT 的转换器。支持多区域、负尺寸轴、 紧凑跨 long 的位压缩调色板、方块实体与实体;输出与原版模板一致的稠密方块列表 (含空气),之后统一走数据修复与规范解析,与其他来源产生同一规范快照。 区域重叠、无法映射的扩展字段等情况按设计要求显式报告,不静默丢弃成方块缺失。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isLitematicFile(String fileName) ` | 末尾返回 ` fileName.toLowerCase(Locale.ROOT).endsWith(".litematic") `<br>[调用处 StructureScannerFiles.parseImportResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L234) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L42) |
| ` public static ConvertedStructure convert(CompoundTag litematic) throws ConstructionBlueprintException ` | ` (!litematic.contains("Regions", Tag.TAG_COMPOUND)) ` 成立时抛出 ` new ConstructionBlueprintException("corrupt_litematic", "missing Regions") `<br>` (regions.isEmpty()) ` 成立时抛出 ` new ConstructionBlueprintException("corrupt_litematic", "empty Regions") `<br>` (size.getX() <= 0 \|\| size.getY() <= 0 \|\| size.getZ() <= 0 \|\| volume <= 0L) ` 成立时抛出 ` new ConstructionBlueprintException( "corrupt_size", size.getX() + "x" + size.getY() + "x" + size.getZ() ) `<br>` (size.getX() > StructureSnapshotCodec.MAX_AXIS \|\| size.getY() > StructureSnapshotCodec.MAX_AXIS \|\| size.getZ() > StructureSnapshotCodec.MAX_AXIS \|\| volume > MAX_VOLUME) ` 成立时抛出 ` new ConstructionBlueprintException( "oversized", size.getX() + "x" + size.getY() + "x" + size.getZ() ) `<br>末尾返回 ` new ConvertedStructure(out, warnings) `<br>[调用处 StructureScannerFiles.parseImportResult](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L235) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L50) |

## LitematicaImporter.ConvertedStructure

` public record ConvertedStructure(CompoundTag structureTag, List<StructureSnapshotCodec.BlueprintWarning> warnings) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47)

转换结果:原版结构语义的 NBT(含 DataVersion)与转换阶段警告。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConvertedStructure(CompoundTag structureTag, List<StructureSnapshotCodec.BlueprintWarning> warnings) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public CompoundTag structureTag() ` | 读取 record 分量 ` structureTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public List<StructureSnapshotCodec.BlueprintWarning> warnings() ` | 读取 record 分量 ` warnings ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |

## OrdinaryBlockAdapter

` public final class OrdinaryBlockAdapter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L26)

普通方块材料映射:有放置物品的方块消耗一份对应物品,朝向等属性随蓝图恢复; 门上半、床头、活塞头,以及成对大箱子的左半是依附格,不重复扣料。 成对大箱子的右半一次扣两只箱子;落单的 LEFT/RIGHT 仍按单箱处理并在提交时写成 SINGLE。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Mapping mapping(BlockState state) ` | ` (state.isAir() \|\| state.getBlock() instanceof StructureVoidBlock) ` 成立时提前返回 ` Mapping.AIR `<br>` (state.getBlock() instanceof LiquidBlock) ` 成立时提前返回 ` Mapping.UNSUPPORTED `<br>` (isAttachedHalf(state)) ` 成立时提前返回 ` Mapping.ATTACHED `<br>` (item == Items.AIR) ` 成立时提前返回 ` Mapping.UNSUPPORTED `<br>末尾返回 ` Mapping.PLACE `<br>[调用处 BlueprintMultiblocks.expand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L37) |
| ` public static ItemStack material(BlockState state) ` | ` (mapping(state) != Mapping.PLACE) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` new ItemStack(state.getBlock().asItem()) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L568) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L54) |
| ` public static ItemStack pairedChestMaterial(BlockState state) ` | ` (item == Items.AIR) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` new ItemStack(item, 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L61) |
| ` public static boolean isAttachedHalf(BlockState state) ` | ` (state.hasProperty(BlockStateProperties.DOUBLE_BLOCK_HALF) && state.getValue(BlockStateProperties.DOUBLE_BLOCK_HALF) == DoubleBlockHalf.UPPER) ` 成立时提前返回 ` true `<br>` (state.hasProperty(BlockStateProperties.BED_PART) && state.getValue(BlockStateProperties.BED_PART) == BedPart.HEAD) ` 成立时提前返回 ` true `<br>末尾返回 ` state.getBlock() instanceof PistonHeadBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L69) |
| ` public static boolean isDoubleChestHalf(BlockState state) ` | 实现调用 ` state.hasProperty(BlockStateProperties.CHEST_TYPE) `<br>实现调用 ` state.getValue(BlockStateProperties.CHEST_TYPE) `<br>实现调用 ` state.hasProperty(BlockStateProperties.HORIZONTAL_FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L81) |
| ` public static boolean isPairedChestAttached(BlockPos pos, BlockState state, Map<Long, BlockState> declared) ` | 末尾返回 ` isDoubleChestHalf(state) && state.getValue(BlockStateProperties.CHEST_TYPE) == ChestType.LEFT && isComplementary(state, declared.get(partnerPos(pos, state).asLong())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L87) |
| ` public static boolean isPairedChestCore(BlockPos pos, BlockState state, Map<Long, BlockState> declared) ` | 末尾返回 ` isDoubleChestHalf(state) && state.getValue(BlockStateProperties.CHEST_TYPE) == ChestType.RIGHT && isComplementary(state, declared.get(partnerPos(pos, state).asLong())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L93) |
| ` public static BlockPos partnerPos(BlockPos pos, BlockState state) ` | 末尾返回 ` pos.relative(connectedDirection(state)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L99) |
| ` public static BlockState projectionState(BlockState target, BlockPos pos, Map<Long, BlockState> overlay) ` | 规划里没有成对另一半时,投影按单箱画,避免 BER 画出半个大箱子。<br>` (!isDoubleChestHalf(target)) ` 成立时提前返回 ` target `<br>` (isComplementary(target, overlay.get(partnerPos(pos, target).asLong()))) ` 成立时提前返回 ` target `<br>末尾返回 ` target.setValue(BlockStateProperties.CHEST_TYPE, ChestType.SINGLE) `<br>[调用处 BlueprintNormalizer.normalize](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L106) |
| ` public static BlockState commitState(BlockState target, BlockPos pos, Set<Long> delivered) ` | 取消或提交时,另一半还没交付就把 LEFT/RIGHT 收成 SINGLE,不要把半个大箱子写进世界。<br>` (!isDoubleChestHalf(target)) ` 成立时提前返回 ` target `<br>` (delivered.contains(partnerPos(pos, target).asLong())) ` 成立时提前返回 ` target `<br>末尾返回 ` target.setValue(BlockStateProperties.CHEST_TYPE, ChestType.SINGLE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/OrdinaryBlockAdapter.java#L119) |
