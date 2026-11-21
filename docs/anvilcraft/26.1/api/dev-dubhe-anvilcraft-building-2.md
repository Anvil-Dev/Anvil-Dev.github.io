# dev.dubhe.anvilcraft.building（BuildingMaterials.FluidPayment 至 LitematicaImporter.ConvertedStructure）



## BuildingMaterials.FluidPayment

` public record FluidPayment(UUID storage, FluidStack fluid) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L374)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidPayment(UUID storage, FluidStack fluid) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L374) |
| ` public UUID storage() ` | 读取 record 分量 ` storage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L374) |
| ` public FluidStack fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L374) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L374) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L374) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L374) |

## BuildingPlan

` public final class BuildingPlan `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L17)


## BuildingPlan.Cell

` public record Cell(BlockPos pos, BlockState state, CompoundTag config, List<BlockEntityContentAdapter.SlotStack> contents) implements BuildingCommit.PlacedCell `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Cell(BlockPos pos, BlockState state, CompoundTag config, List<BlockEntityContentAdapter.SlotStack> contents) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21) |
| ` public CompoundTag config() ` | 读取 record 分量 ` config ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21) |
| ` public List<BlockEntityContentAdapter.SlotStack> contents() ` | 读取 record 分量 ` contents ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingPlan.java#L21) |

## BuildingRodFluids

` public final class BuildingRodFluids `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isWater(ItemStack stack) ` | ` (!(stack.getItem() instanceof BucketItem) \|\| stack.getItem() instanceof MobBucketItem) ` 成立时提前返回 ` false `<br>末尾返回 ` FluidUtil.getFirstStackContained(stack).getFluid().isSame(Fluids.WATER) `<br>[调用处 BuildingRodClient.updateTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L219) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L29) |
| ` public static List<BuildingPlan.Cell> preview(Player player, BlockPos first, BlockPos last) ` | 末尾返回 ` plan == null ? List.of() : List.copyOf(plan.group.cells) `<br>[调用处 BuildingRodService.preview](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L210) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L58) |

## BuildingRodObstructions

` public final class BuildingRodObstructions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodObstructions.java#L17)


## BuildingRodService

` public final class BuildingRodService `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L79)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void start(ServerPlayer player, BlockPos first, Direction face, @Nullable BlockHitResult hit) ` | 执行 ` start(player, first, face, hit, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L125) |
| ` public static void start(ServerPlayer player, BlockPos first, Direction face, @Nullable BlockHitResult hit, long seed) ` | 实现调用 ` SELECTIONS.remove(player) `<br>实现调用 ` BuildingRodItem.isHeld(player) `<br>实现调用 ` withinReach(player, first, 0) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L129) |
| ` public static long volume(BlockPos first, BlockPos last) ` | 末尾返回 ` (Math.abs((long) first.getX() - last.getX()) + 1) * (Math.abs((long) first.getY() - last.getY()) + 1) * (Math.abs((long) first.getZ() - last.getZ()) + 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L144) |
| ` public static void box(ServerPlayer player, BlockPos first, BlockPos last, Direction face) ` | 执行 ` box(player, first, last, face, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L150) |
| ` public static void box(ServerPlayer player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit) ` | 执行 ` box(player, first, last, face, hit, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L154) |
| ` public static void box(ServerPlayer player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit, long seed) ` | 实现调用 ` BuildingRodItem.material(player) `<br>实现调用 ` BuildingRodItem.isHeld(player) `<br>实现调用 ` BuildingRodItem.isPlacementMaterial(held) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L158) |
| ` public static List<Cell> preview(Player player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit) ` | 末尾返回 ` preview(player, first, last, face, hit, null, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L195) |
| ` public static List<Cell> preview(Player player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit, long seed) ` | 末尾返回 ` preview(player, first, last, face, hit, null, seed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L199) |
| ` public static List<Cell> preview(Player player, BlockPos first, BlockPos last, Direction face, @Nullable BlockHitResult hit, @Nullable BlockHitResult endHit, long seed) ` | ` (!BuildingRodItem.isPlacementMaterial(held) \|\| volume(first, last) > AnvilCraft.CONFIG.equipment.buildingRodMaxBlocks) ` 成立时提前返回 ` List.of() `<br>` (!(held.getItem() instanceof BlockItem) && !held.is(ModItems.FILTER)) ` 成立时提前返回 ` BuildingRodFluids.preview(player, first, last) `<br>末尾返回 ` groups == null ? List.of() : groups.stream().flatMap(group -> group.cells.stream()).toList() `<br>[调用处 BuildingRodClient.placementPreview](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L395) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L204) |
| ` public static List<Cell> singlePlacement(UseOnContext use) ` | 末尾返回 ` BuildingBlockPlanner.singlePlacement(use) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L223) |
| ` public static void blueprint(ServerPlayer player, BlockPos anchor, Rotation rotation, Mirror mirror, boolean partial) ` | 执行 ` blueprints(player, anchor, anchor, rotation, mirror, partial) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L227) |
| ` public static void blueprints( ServerPlayer player, BlockPos anchor, BlockPos last, Rotation rotation, Mirror mirror, boolean partial ) ` | 实现调用 ` BuildingRodItem.isHeld(player) `<br>实现调用 ` BuildingRodItem.material(player).is(ModItems.STRUCTURE_DISK) `<br>实现调用 ` BuildingRodItem.material(player) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L231) |
| ` public static void message(ServerPlayer player, String key) ` | 执行 ` player.sendSystemMessage(Component.translatable("message.anvilcraft.building_rod." + key), true) `<br>[调用处 BuildingRodFluids.place](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L694) |

## BuildingRodUndo

` public final class BuildingRodUndo `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L54)

保留区域快照，撤销时按实际收回与恢复的资源结算。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean placeFallingBlock(FallingBlockEntity entity, BlockPos pos, BooleanSupplier placement) ` | 末尾返回 ` placeFallingBlock(entity, List.of(pos), placement) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L133) |
| ` public static boolean placeFallingBlock(FallingBlockEntity entity, List<BlockPos> positions, BooleanSupplier placement) ` | 实现调用 ` HISTORY.values() `<br>实现调用 ` entity.level() `<br>实现调用 ` entity.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L137) |
| ` public static void replaced(Level level, BlockPos pos, BlockState before, BlockState after) ` | 实现调用 ` level.isClientSide() `<br>实现调用 ` before.getBlock() `<br>实现调用 ` after.getBlock() `<br>[调用处 BlueprintUndoChunkMixin.anvilcraft$trackReplacement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintUndoChunkMixin.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L162) |
| ` public static void spawnedAt(Level level, BlockPos pos, Entity spawned) ` | 实现调用 ` HISTORY.values() `<br>实现调用 ` undo.region.contains(pos) `<br>实现调用 ` undo.derived.put(spawned.getUUID(), spawned) `<br>[调用处 BlueprintTntOriginMixin.anvilcraft$trackPrimed](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintTntOriginMixin.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L171) |
| ` public static void spawnedBy(Entity source, Entity spawned) ` | 实现调用 ` HISTORY.values() `<br>实现调用 ` undo.derived.containsKey(source.getUUID()) `<br>实现调用 ` source.getUUID() `<br>[调用处 GiantAnvilBlock.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/GiantAnvilBlock.java#L279) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L179) |
| ` @SubscribeEvent public static void blockDrops(BlockDropsEvent event) ` | 事件总线派发 ` BlockDropsEvent ` 时调用。<br>实现调用 ` HISTORY.values() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` undo.region.contains(event.getPos()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L194) |
| ` @SubscribeEvent public static void fallingBlock(EntityJoinLevelEvent event) ` | 事件总线派发 ` EntityJoinLevelEvent ` 时调用。<br>实现调用 ` event.loadedFromDisk() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` falling.getStartPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L202) |
| ` public static void undo(ServerPlayer player) ` | 实现调用 ` BuildingRodItem.isHeld(player) `<br>实现调用 ` restore(player) `<br>实现调用 ` player.sendSystemMessage(Component.translatable("message.anvilcraft.building_rod." + message), true) `<br>[调用处 BuildingRodPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BuildingRodPacket.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodUndo.java#L343) |

## ConstructionBlueprintException

` public class ConstructionBlueprintException extends Exception `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L7)

结构蓝图导入与任务操作的可展示错误。reason 是稳定的翻译键后缀, 调用方将 reason 映射为本地化消息,detail 为附加说明。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConstructionBlueprintException(String reason, String detail) ` | 实现调用 ` super(detail) `<br>[调用处 LitematicaImporter.convert](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L10) |
| ` public ConstructionBlueprintException(String reason, String detail, Throwable cause) ` | 实现调用 ` super(detail, cause) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L15) |
| ` public String reason() ` | 末尾返回 ` this.reason ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L20) |
| ` public String detail() ` | 末尾返回 ` this.getMessage() == null ? "" : this.getMessage() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/ConstructionBlueprintException.java#L24) |

## EntityBuildAdapter

` public interface EntityBuildAdapter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L18)

建造侧实体适配:匹配类型、材料、剥离内容、提交时直接生成。 注册项放在 init,这里不引用客户端或 FTB。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean matches(EntityType<?> type, CompoundTag nbt) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L35) |
| ` default boolean matches(Entity entity, CompoundTag nbt) ` | 末尾返回 ` this.matches(entity.getType(), nbt) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L37) |
| ` Planned plan(ServerLevel level, StructureSnapshot.EntityEntry entry, CompoundTag transformedNbt) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L41) |
| ` default ItemStack requiredTool() ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L43) |
| ` default boolean requiresHammer() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L47) |
| ` default ItemStack returnAfterDeliver(ServerLevel level, BuildingEntityOp op) ` | 末尾返回 ` op.returnStack().copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L51) |
| ` default @Nullable Entity spawn(ServerLevel level, BuildingEntityOp op) ` | ` (nbt == null \|\| nbt.getStringOr("id", "").isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` EntityBuildAdapters.create(copy, level).map(entity -> { if (!level.addFreshEntity(entity)) { return null; } return entity; }).orElse(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L55) |
| ` default void insertContents(Entity entity, List<SlotStack> contents, HolderLookup.Provider registries) ` | 实现调用 ` contents.isEmpty() `<br>分支 ` (entity instanceof Container container) ` 内调用 ` content.slot() `<br>分支 ` (entity instanceof Container container) ` 内调用 ` container.getContainerSize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L70) |

## EntityBuildAdapter.Planned

` record Planned(ItemStack material, ItemStack returned, CompoundTag entityNbt, List<SlotStack> contents, List<FluidBuildAdapter.TankFluid> fluids, boolean unsupported) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Planned skip() ` | 末尾返回 ` new Planned(ItemStack.EMPTY, ItemStack.EMPTY, new CompoundTag(), List.of(), List.of(), true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L30) |
| ` public Planned(ItemStack material, ItemStack returned, CompoundTag entityNbt, List<SlotStack> contents, List<FluidBuildAdapter.TankFluid> fluids, boolean unsupported) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22) |
| ` public ItemStack material() ` | 读取 record 分量 ` material ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L23) |
| ` public ItemStack returned() ` | 读取 record 分量 ` returned ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L24) |
| ` public CompoundTag entityNbt() ` | 读取 record 分量 ` entityNbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L25) |
| ` public List<SlotStack> contents() ` | 读取 record 分量 ` contents ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L26) |
| ` public List<FluidBuildAdapter.TankFluid> fluids() ` | 读取 record 分量 ` fluids ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L27) |
| ` public boolean unsupported() ` | 读取 record 分量 ` unsupported ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L22) |

## EntityBuildAdapter.SlotStack

` record SlotStack(int slot, ItemStack stack) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SlotStack(int slot, ItemStack stack) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public int slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public ItemStack stack() ` | 读取 record 分量 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapter.java#L19) |

## EntityBuildAdapters

` public final class EntityBuildAdapters `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L29)

实体建造适配器注册表与瞬态排除。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(EntityBuildAdapter adapter) ` | 执行 ` REGISTRY.add(adapter) `<br>[调用处 VanillaBuildingEntities.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/VanillaBuildingEntities.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L42) |
| ` public static Optional<EntityBuildAdapter> find(EntityType<?> type, CompoundTag nbt) ` | 末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L46) |
| ` public static Optional<EntityBuildAdapter> find(Entity entity, CompoundTag nbt) ` | 末尾返回 ` REGISTRY.stream().filter(adapter -> adapter.matches(entity, nbt)).findFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L55) |
| ` public static Optional<Entity> create(CompoundTag tag, Level level) ` | 末尾返回 ` Optional.ofNullable(entity) `<br>[调用处 BuildingRegionSnapshot.restore](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L265) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L59) |
| ` public static boolean isTransient(EntityType<?> type) ` | 实现调用 ` type.getBaseClass() `<br>实现调用 ` Player.class.isAssignableFrom(base) `<br>实现调用 ` ExperienceOrb.class.isAssignableFrom(base) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L65) |
| ` public static boolean isTransient(Entity entity) ` | 实现调用 ` isTransient(entity.getType()) `<br>实现调用 ` entity.getType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L80) |
| ` @Nullable public static Entity spawn(ServerLevel level, BuildingEntityOp op) ` | 实现调用 ` findType(op) .flatMap(adapter -> Optional.ofNullable(adapter.spawn(level, op))) `<br>实现调用 ` findType(op) `<br>[调用处 BuildingRodService.commit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L636) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L86) |
| ` public static ItemStack returnAfterDeliver(ServerLevel level, BuildingEntityOp op) ` | 末尾返回 ` findType(op) .map(adapter -> adapter.returnAfterDeliver(level, op)) .orElse(op.returnStack().copy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L106) |
| ` public static void insertContents( Entity entity, List<EntityBuildAdapter.SlotStack> contents, HolderLookup.Provider registries ) ` | 分支 ` (entity instanceof Mob mob) ` 内调用 ` content.slot() `<br>分支 ` (entity instanceof Mob mob) ` 内调用 ` EquipmentSlot.values() `<br>分支 ` (content.slot() >= 100 && content.slot() < 100 + EquipmentSlot.values().length) ` 内调用 ` mob.setItemSlot(EquipmentSlot.values()[content.slot() - 100], content.stack().copy()) `<br>[调用处 BuildingRodService.commit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L638) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L112) |
| ` public static CompoundTag withWorldPos(CompoundTag nbt, Vec3 world) ` | 末尾返回 ` BuildingEntityTransform.withWorldPos(nbt, world) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/EntityBuildAdapters.java#L142) |

## FluidBuildAdapter

` public final class FluidBuildAdapter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L32)

建造侧流体映射:源液体与分层锅走桶/精确 mB,储罐走原生流体资源事务。 不改 OrdinaryBlockAdapter,含水固体仍是 PLACE 的状态属性。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int BUCKET_AMOUNT ` | 初值 ` 1000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L33) |
| ` public static boolean isLiquidBlock(BlockState state) ` | 末尾返回 ` state.getBlock() instanceof LiquidBlock `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L361) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L47) |
| ` public static boolean isFilledCauldron(BlockState state) ` | 末尾返回 ` content != null && currentAmount(content, state) > 0 `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L376) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L51) |
| ` public static FluidStack liquidOf(BlockState state) ` | ` (!isLiquidBlock(state)) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (!fluidState.isSource()) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` new FluidStack(fluidState.getType(), BUCKET_AMOUNT) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L370) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L56) |
| ` public static FluidStack cauldronFluidOf(BlockState state) ` | ` (content == null) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (amount <= 0) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` new FluidStack(content.fluid, amount) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L378) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L67) |
| ` public static ItemStack bucketOf(FluidStack fluid) ` | ` (fluid.isEmpty() \|\| fluid.getAmount() != BUCKET_AMOUNT) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (bucket == Items.AIR) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` new ItemStack(bucket) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L79) |
| ` public static ItemStack emptyBucket() ` | 末尾返回 ` new ItemStack(Items.BUCKET) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L90) |
| ` public static ItemStack cauldronItem(BlockState state) ` | ` (asItem == Items.AIR \|\| asItem == Items.WATER_BUCKET \|\| asItem == Items.LAVA_BUCKET \|\| asItem == Items.POWDER_SNOW_BUCKET) ` 成立时提前返回 ` new ItemStack(Items.CAULDRON) `<br>末尾返回 ` new ItemStack(asItem) `<br>[调用处 BuildingUndoResources.block](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingUndoResources.java#L93) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L94) |
| ` public static Extracted extractTanks(BlockState state, @Nullable CompoundTag nbt, HolderLookup.Provider registries) ` | ` (nbt == null \|\| nbt.isEmpty()) ` 成立时提前返回 ` Extracted.empty() `<br>` (handler == null) ` 成立时提前返回 ` Extracted.empty() `<br>末尾返回 ` new Extracted(List.copyOf(tanks), false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L105) |
| ` public static void insert(BlockEntity blockEntity, List<TankFluid> tanks) ` | 实现调用 ` fluidHandlerOf(blockEntity) `<br>实现调用 ` Transaction.openRoot() `<br>实现调用 ` tank.fluid() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L127) |
| ` public static boolean takeExactFluid(ItemAccess access, FluidStack needed) ` | 末尾返回 ` transferExactFluid(access, needed, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L144) |
| ` public static boolean canProvideExactFluid(ItemStack stack, FluidStack needed) ` | ` (stack.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` transferExactFluid(ItemAccess.forHandlerIndexStrict(items, 0), needed, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L148) |

## FluidBuildAdapter.Extracted

` public record Extracted(List<TankFluid> tanks, boolean unmapped) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Extracted empty() ` | 末尾返回 ` new Extracted(List.of(), false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L39) |
| ` public Extracted(List<TankFluid> tanks, boolean unmapped) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L38) |
| ` public List<TankFluid> tanks() ` | 读取 record 分量 ` tanks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L38) |
| ` public boolean unmapped() ` | 读取 record 分量 ` unmapped ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L38) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L38) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L38) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L38) |

## FluidBuildAdapter.TankFluid

` public record TankFluid(int tank, FluidStack fluid) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TankFluid(int tank, FluidStack fluid) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L35) |
| ` public int tank() ` | 读取 record 分量 ` tank ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L35) |
| ` public FluidStack fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L35) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L35) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L35) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/FluidBuildAdapter.java#L35) |

## LitematicaImporter

` public final class LitematicaImporter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L24)

Litematica .litematic 到原版结构 NBT 的转换器。支持多区域、负尺寸轴、 紧凑跨 long 的位压缩调色板、方块实体与实体;输出与原版模板一致的稠密方块列表 (含空气),之后统一走数据修复与规范解析,与其他来源产生同一规范快照。 区域重叠、无法映射的扩展字段等情况按设计要求显式报告,不静默丢弃成方块缺失。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isLitematicFile(String fileName) ` | 末尾返回 ` fileName.toLowerCase(Locale.ROOT).endsWith(".litematic") `<br>[调用处 StructureScannerFiles.parseImportResult](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L244) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L42) |
| ` public static ConvertedStructure convert(CompoundTag litematic) throws ConstructionBlueprintException ` | ` (!(litematic.get("Regions") instanceof CompoundTag)) ` 成立时抛出 ` new ConstructionBlueprintException("corrupt_litematic", "missing Regions") `<br>` (regions.isEmpty()) ` 成立时抛出 ` new ConstructionBlueprintException("corrupt_litematic", "empty Regions") `<br>` (size.getX() <= 0 \|\| size.getY() <= 0 \|\| size.getZ() <= 0 \|\| volume <= 0L) ` 成立时抛出 ` new ConstructionBlueprintException( "corrupt_size", size.getX() + "x" + size.getY() + "x" + size.getZ() ) `<br>` (size.getX() > StructureSnapshotCodec.MAX_AXIS \|\| size.getY() > StructureSnapshotCodec.MAX_AXIS \|\| size.getZ() > StructureSnapshotCodec.MAX_AXIS \|\| volume > MAX_VOLUME) ` 成立时抛出 ` new ConstructionBlueprintException( "oversized", size.getX() + "x" + size.getY() + "x" + size.getZ() ) `<br>末尾返回 ` new ConvertedStructure(out, warnings) `<br>[调用处 StructureScannerFiles.parseImportResult](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L245) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L50) |

## LitematicaImporter.ConvertedStructure

` public record ConvertedStructure(CompoundTag structureTag, List<StructureSnapshotCodec.BlueprintWarning> warnings) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47)

转换结果:原版结构语义的 NBT(含 DataVersion)与转换阶段警告。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConvertedStructure(CompoundTag structureTag, List<StructureSnapshotCodec.BlueprintWarning> warnings) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public CompoundTag structureTag() ` | 读取 record 分量 ` structureTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public List<StructureSnapshotCodec.BlueprintWarning> warnings() ` | 读取 record 分量 ` warnings ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L47) |
