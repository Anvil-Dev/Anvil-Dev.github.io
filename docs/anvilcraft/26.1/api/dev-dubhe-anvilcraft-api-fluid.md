# dev.dubhe.anvilcraft.api.fluid



## CapacityModifiableFluidHandler

` public class CapacityModifiableFluidHandler extends FluidStacksResourceHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/CapacityModifiableFluidHandler.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CapacityModifiableFluidHandler(int size, int capacity) ` | 执行 ` super(size, capacity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/CapacityModifiableFluidHandler.java#L8) |
| ` public CapacityModifiableFluidHandler(NonNullList<FluidStack> stacks, int capacity) ` | 执行 ` super(stacks, capacity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/CapacityModifiableFluidHandler.java#L12) |
| ` public void setCapacity(int capacity) ` | 执行 ` this.capacity = capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/CapacityModifiableFluidHandler.java#L16) |

## DrainChunkAccess

` public final class DrainChunkAccess `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L21)

排水口按读取位置移动区块加载窗口，防止搜索范围内的区块同时常驻。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DrainChunkAccess(BlockPos drainPos) ` | 实现调用 ` drainPos.immutable() `<br>实现调用 ` ChunkPos.pack(drainPos.getX() >> 4, drainPos.getZ() >> 4) `<br>实现调用 ` drainPos.getX() `<br>实现调用 ` drainPos.getZ() `<br>[调用处 DrainBlockEntity.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/fluid/DrainBlockEntity.java#L85) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L35) |
| ` public void tick(ServerLevel level) ` | 实现调用 ` level.getGameTime() `<br>分支 ` (this.requestTick != level.getGameTime()) ` 内调用 ` level.getGameTime() `<br>分支 ` (level.getGameTime() % 20 == 0) ` 内调用 ` this.keepLoaded(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L40) |
| ` public boolean isValid() ` | 末尾返回 ` true `<br>实现调用 ` this.chunks.values() `<br>实现调用 ` snapshot.revision() `<br>实现调用 ` snapshot.value() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L53) |
| ` public static void onFluidChanged(Level level, BlockPos pos) ` | 已访问区块的版本由搜索共同持有，保证卸载重载后的流体变化也能使旧连通关系失效。<br>实现调用 ` OBSERVED_CHUNKS.get(serverLevel) `<br>分支 ` (observed != null) ` 内调用 ` observed.get(ChunkPos.pack(pos.getX() >> 4, pos.getZ() >> 4)) `<br>分支 ` (observed != null) ` 内调用 ` ChunkPos.pack(pos.getX() >> 4, pos.getZ() >> 4) `<br>分支 ` (observed != null) ` 内调用 ` pos.getX() `<br>分支 ` (observed != null) ` 内调用 ` pos.getZ() `<br>[调用处 LevelChunkMixin.anvilcraft$trackFluidChanges](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L63) |
| ` public @Nullable BlockState read(ServerLevel level, BlockPos pos) ` | ` (!level.isInValidBounds(pos) \|\| dx * dx + dz * dz > (long) MAX_DISTANCE * MAX_DISTANCE) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() `<br>末尾返回 ` chunk.getBlockState(pos) `<br>实现调用 ` pos.getX() `<br>实现调用 ` this.drainPos.getX() `<br>实现调用 ` pos.getZ() `<br>实现调用 ` this.drainPos.getZ() `<br>实现调用 ` level.isInValidBounds(pos) `<br>实现调用 ` Blocks.AIR.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L76) |
| ` public boolean acceptRemoval(BlockPos pos) ` | ` (snapshot == null \|\| snapshot.revision().value != snapshot.value() + 1) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>实现调用 ` ChunkPos.pack(pos.getX() >> 4, pos.getZ() >> 4) `<br>实现调用 ` pos.getX() `<br>实现调用 ` pos.getZ() `<br>实现调用 ` this.chunks.get(key) `<br>实现调用 ` snapshot.revision() `<br>实现调用 ` snapshot.value() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L105) |
| ` public void release(ServerLevel level) ` | 实现调用 ` this.releaseTicket(level, key) `<br>实现调用 ` this.tickets.clear() `<br>实现调用 ` this.pending.clear() `<br>实现调用 ` OBSERVED_CHUNKS.get(level) `<br>分支 ` (observed != null) ` 内调用 ` this.chunks.long2ObjectEntrySet() `<br>分支 ` (observed != null) ` 内调用 ` entry.getValue().revision() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L115) |

## FireCauldronWrapper

` public final class FireCauldronWrapper extends SnapshotJournal<BlockState> implements ResourceHandler<FluidResource> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L22)

燃烧油锅与未点燃油锅共用流体，因此单独提供能力以保留燃烧状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static FireCauldronWrapper get(Level level, BlockPos pos) ` | 末尾返回 ` WRAPPERS.computeIfAbsent(new Location(level, pos.immutable()), FireCauldronWrapper::new) `<br>[调用处 ModCapabilities.registerCapabilities](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCapabilities.java#L134) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L37) |
| ` @Override public int size() ` | 末尾返回 ` 1 `<br>[调用处 FireCauldronWrapper.getAmountAsLong](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L41) |
| ` @Override public FluidResource getResource(int index) ` | 末尾返回 ` this.getAmountAsLong(index) > 0 ? FluidResource.of(ModFluids.OIL.get()) : FluidResource.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L46) |
| ` @Override public long getAmountAsLong(int index) ` | 末尾返回 ` state.is(ModBlocks.FIRE_CAULDRON) \|\| state.is(ModBlocks.OIL_CAULDRON) ? state.getValue(Layered4LevelCauldronBlock.LEVEL) * AMOUNT_PER_LEVEL : 0 `<br>实现调用 ` Objects.checkIndex(index, this.size()) `<br>实现调用 ` this.size() `<br>实现调用 ` this.location.state() `<br>实现调用 ` state.is(ModBlocks.FIRE_CAULDRON) `<br>实现调用 ` state.is(ModBlocks.OIL_CAULDRON) `<br>实现调用 ` state.getValue(Layered4LevelCauldronBlock.LEVEL) `<br>[调用处 FireCauldronWrapper.getResource](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L51) |
| ` @Override public long getCapacityAsLong(int index, FluidResource resource) ` | 末尾返回 ` FluidType.BUCKET_VOLUME `<br>实现调用 ` Objects.checkIndex(index, this.size()) `<br>实现调用 ` this.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L59) |
| ` @Override public boolean isValid(int index, FluidResource resource) ` | 末尾返回 ` resource.is(ModFluids.OIL.get()) && resource.isComponentsPatchEmpty() `<br>实现调用 ` Objects.checkIndex(index, this.size()) `<br>实现调用 ` this.size() `<br>实现调用 ` resource.is(ModFluids.OIL.get()) `<br>实现调用 ` ModFluids.OIL.get() `<br>实现调用 ` resource.isComponentsPatchEmpty() `<br>[调用处 FireCauldronWrapper.insert](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L65) |
| ` @Override public int insert(int index, FluidResource resource, int amount, TransactionContext transaction) ` | ` (!this.isValid(index, resource) \|\| !isOilCauldron(state)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` inserted `<br>实现调用 ` Objects.checkIndex(index, this.size()) `<br>实现调用 ` this.size() `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) `<br>实现调用 ` this.location.state() `<br>实现调用 ` this.isValid(index, resource) `<br>实现调用 ` isOilCauldron(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L71) |
| ` @Override public int extract(int index, FluidResource resource, int amount, TransactionContext transaction) ` | ` (!this.isValid(index, resource)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` extracted `<br>实现调用 ` Objects.checkIndex(index, this.size()) `<br>实现调用 ` this.size() `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) `<br>实现调用 ` this.isValid(index, resource) `<br>实现调用 ` Math.min(amount / AMOUNT_PER_LEVEL, this.getAmountAsInt(index) / AMOUNT_PER_LEVEL) `<br>实现调用 ` this.getAmountAsInt(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L87) |

## FluidBottleInteraction

` public final class FluidBottleInteraction `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidBottleInteraction.java#L25)

瓶子按 250 mB 交换；附魔之瓶保留源版一半概率入液、成功交互必定返还空瓶的规则。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean tryInteract( Player player, InteractionHand hand, ResourceHandler<FluidResource> handler, Level level, BlockPos pos ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` true `<br>末尾返回 ` true `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` input(held) `<br>实现调用 ` input.isEmpty() `<br>实现调用 ` Transaction.openRoot() `<br>分支 ` (filling) ` 内调用 ` handler.insert(input, AMOUNT, transaction) `<br>分支 ` (filling) ` 内调用 ` level.isClientSide() `<br>[调用处 FluidTankBlockEntity.onPlayerUse](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FluidTankBlockEntity.java#L266) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidBottleInteraction.java#L31) |

## FluidChangeTracker

` public interface FluidChangeTracker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidChangeTracker.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` long anvilcraft$getFluidRevision() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidChangeTracker.java#L4) |

## FluidHandlerWrapper

` public final class FluidHandlerWrapper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidHandlerWrapper(ResourceHandler<FluidResource> handler) ` | 执行 ` this.handler = handler `<br>[调用处 AutoEnchantingTableFluidPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L26) |
| ` public @Nullable ItemStack fillFromItem(ItemStack container, boolean simulate, @Nullable RandomSource random) ` | ` (container.isEmpty()) ` 成立时提前返回 ` null `<br>` (!experience && (potion == null \|\| !potion.is(Potions.WATER))) ` 成立时提前返回 ` null `<br>实现调用 ` container.isEmpty() `<br>实现调用 ` single.set(0, ItemResource.of(container), 1) `<br>实现调用 ` ItemResource.of(container) `<br>实现调用 ` ItemAccess.forHandlerIndexStrict(single, 0).getCapability(Capabilities.Fluid.ITEM) `<br>实现调用 ` ItemAccess.forHandlerIndexStrict(single, 0) `<br>分支 ` (source != null) ` 内调用 ` source.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L30) |
| ` public @Nullable ItemStack drainToItem(ItemStack container, boolean simulate) ` | ` (!bottle && !container.is(Items.BUCKET)) ` 成立时提前返回 ` null `<br>末尾返回 ` null `<br>实现调用 ` container.is(Items.GLASS_BOTTLE) `<br>实现调用 ` container.is(Items.BUCKET) `<br>实现调用 ` this.handler.size() `<br>实现调用 ` this.handler.getResource(slot) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.handler.getAmountAsLong(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L62) |
| ` public static ItemStack determineFilledContainer(FluidStack fluid, ItemStack container) ` | ` (container.is(Items.BUCKET)) ` 成立时提前返回 ` fluid.getFluid().getBucket().getDefaultInstance() `<br>` (!container.is(Items.GLASS_BOTTLE)) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (fluid.getFluid() instanceof HoneyFluid) ` 成立时提前返回 ` Items.HONEY_BOTTLE.getDefaultInstance() `<br>` (fluid.getFluid() == Fluids.WATER) ` 成立时提前返回 ` PotionContents.createItemStack(Items.POTION, Potions.WATER) `<br>` (fluid.getFluid() == ModFluids.EXP_FLUID.get()) ` 成立时提前返回 ` Items.EXPERIENCE_BOTTLE.getDefaultInstance() `<br>末尾返回 ` ItemStack.EMPTY `<br>实现调用 ` container.is(Items.BUCKET) `<br>分支 ` (container.is(Items.BUCKET)) ` 内调用 ` fluid.getFluid().getBucket().getDefaultInstance() `<br>分支 ` (container.is(Items.BUCKET)) ` 内调用 ` fluid.getFluid().getBucket() `<br>分支 ` (container.is(Items.BUCKET)) ` 内调用 ` fluid.getFluid() `<br>实现调用 ` container.is(Items.GLASS_BOTTLE) `<br>实现调用 ` fluid.getFluid() `<br>[调用处 StorageServerStub.takeFluidBucketsIntoInventory](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2451) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L80) |

## FluidInteractionItems

` public final class FluidInteractionItems `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidInteractionItems.java#L9)

判断手持物品是否属于「流体交互物品」的工具

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isFluidInteractionItem(ItemStack stack) ` | 物品是否会与流体容器交互（桶、瓶等携带流体能力的容器，以及空玻璃瓶） 用于让流体方块在这类物品上吞掉交互，避免落到默认方块行为里误放置方块。<br>` (stack.isEmpty()) ` 成立时提前返回 ` false `<br>` (stack.is(Items.BUCKET) \|\| stack.is(Items.GLASS_BOTTLE)) ` 成立时提前返回 ` true `<br>末尾返回 ` single.getCapability(Capabilities.Fluid.ITEM, ItemAccess.forStack(single)) != null `<br>实现调用 ` stack.isEmpty() `<br>实现调用 ` stack.is(Items.BUCKET) `<br>实现调用 ` stack.is(Items.GLASS_BOTTLE) `<br>实现调用 ` stack.copyWithCount(1) `<br>实现调用 ` single.getCapability(Capabilities.Fluid.ITEM, ItemAccess.forStack(single)) `<br>实现调用 ` ItemAccess.forStack(single) `<br>[调用处 LargeCauldronBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L287) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidInteractionItems.java#L16) |

## FluidStackResourceHandler

` public class FluidStackResourceHandler implements ResourceHandler<FluidResource>, ValueIOSerializable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidStackResourceHandler() ` | 执行 ` this(FluidType.BUCKET_VOLUME) `<br>[调用处 FishTankBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L134) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L26) |
| ` public FluidStackResourceHandler(int capacity) ` | 执行 ` this.capacity = capacity `<br>[调用处 DrainBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/fluid/DrainBlockEntity.java#L59) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L30) |
| ` @Override public int size() ` | 末尾返回 ` 1 `<br>[调用处 FluidStackResourceHandler.insert](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L34) |
| ` @Override public FluidResource getResource(int index) ` | 末尾返回 ` FluidResource.of(this.stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L39) |
| ` @Override public long getAmountAsLong(int index) ` | 末尾返回 ` this.stack.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L44) |
| ` @Override public long getCapacityAsLong(int index, FluidResource resource) ` | 末尾返回 ` this.capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L49) |
| ` @Override public boolean isValid(int index, FluidResource resource) ` | 末尾返回 ` this.stack.isEmpty() \|\| resource.matches(this.stack) `<br>[调用处 FluidStackResourceHandler.insert](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L54) |
| ` @Override public int insert(int index, FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` 0 `<br>实现调用 ` Objects.checkIndex(index, this.size()) `<br>实现调用 ` this.size() `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) `<br>实现调用 ` this.getAmountAsInt(index) `<br>实现调用 ` this.isValid(index, resource) `<br>分支 ` (currentAmount == 0 \|\| this.isValid(index, resource)) ` 内调用 ` Math.min(amount, this.getCapacityAsInt(index, resource) - currentAmount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L59) |
| ` @Override public int extract(int index, FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` 0 `<br>实现调用 ` Objects.checkIndex(index, this.size()) `<br>实现调用 ` this.size() `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) `<br>实现调用 ` this.isValid(index, resource) `<br>分支 ` (this.isValid(index, resource)) ` 内调用 ` this.getAmountAsInt(index) `<br>分支 ` (this.isValid(index, resource)) ` 内调用 ` Math.min(amount, currentAmount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L79) |
| ` public void set(FluidResource resource, int amount) ` | ` (resource.isEmpty() && amount > 0) ` 成立时抛出 ` new IllegalArgumentException("Resource is empty but the amount is positive: " + amount) `<br>实现调用 ` TransferPreconditions.checkNonNegative(amount) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` resource.toStack(amount) `<br>实现调用 ` this.onContentChanged(original) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L98) |
| ` @Override public void serialize(ValueOutput output) ` | 执行 ` output.store("Fluid", FluidStack.OPTIONAL_CODEC, this.stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L109) |
| ` @Override public void deserialize(ValueInput input) ` | 实现调用 ` input.read("Fluid", FluidStack.OPTIONAL_CODEC).orElse(FluidStack.EMPTY) `<br>实现调用 ` input.read("Fluid", FluidStack.OPTIONAL_CODEC) `<br>实现调用 ` this.onContentChanged(this.stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L114) |
| ` public boolean isFull() ` | 末尾返回 ` this.stack.amount() == this.capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L120) |
| ` public float getFill() ` | 末尾返回 ` (float) this.stack.amount() / this.capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L124) |
| ` public FluidStack getStack() ` | 末尾返回 ` this.stack `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L18) |
| ` public void setCapacity(final int capacity) ` | 执行 ` this.capacity = capacity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidStackResourceHandler.java#L18) |

## GasDisplayFillProvider

` public interface GasDisplayFillProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/GasDisplayFillProvider.java#L19)

为玻璃管道显示提供"该气体在此容器内的显示填充率"（0..1）。 玻璃管道内气体的透明度由扩散系内各容器取平均得出（见 FluidPipeNetwork#avgGasAlphaFill），目标是与该容器渲染器保持一致。 多数容器的口径可由 net.neoforged.neoforge.transfer.ResourceHandler 的容量推导——该气体存量 / 容器总容量——但以下两类容器推导不出，必须由实现方给出： 增强态大型储罐 ：渲染口径是 存量 / max(总存量, 无限阈值)， 而 size() 会多报一个用于接纳新流体的空槽，容量求和与之不符； 创造流体储罐 ：渲染口径恒为满，而容量报告为 Integer#MAX\_VALUE。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` float gasDisplayFill(FluidStack gas) ` | 该气体在此容器内的显示填充率（0..1）；容器没有该气体时返回 0。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/GasDisplayFillProvider.java#L21) |

## HoneyBottleResourceHandler

` public class HoneyBottleResourceHandler extends ItemAccessResourceHandler<FluidResource> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/HoneyBottleResourceHandler.java#L15)

蜂蜜瓶流体处理器 使蜂蜜瓶可以和储罐进行流体交互（参考水瓶行为，每瓶 250mB）。 空玻璃瓶填充蜂蜜后变为蜂蜜瓶，蜂蜜瓶排空后变回空玻璃瓶。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int HONEY_PER_BOTTLE ` | 单个蜂蜜瓶对应的流体量（mB）<br>初值 ` 250 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/HoneyBottleResourceHandler.java#L17) |
| ` public HoneyBottleResourceHandler(ItemAccess itemAccess) ` | 执行 ` super(itemAccess, 1) `<br>[调用处 ModCapabilities.registerCapabilities](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCapabilities.java#L180) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/HoneyBottleResourceHandler.java#L19) |
| ` @Override public boolean isValid(int index, FluidResource resource) ` | 末尾返回 ` resource.getFluid() instanceof HoneyFluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/HoneyBottleResourceHandler.java#L49) |

## IFluidResourceHandlerHolder

` public interface IFluidResourceHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/IFluidResourceHandlerHolder.java#L7)

持有 FluidTank 的

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ResourceHandler<FluidResource> getFluidHandler() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/IFluidResourceHandlerHolder.java#L8) |

## InfiniteFluidSource

` public interface InfiniteFluidSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfiniteFluidSource.java#L13)

当前以无限存量供给流体的处理器。 用于管道网络识别“无限储罐”：创造流体储罐在配置流体后、小型/大型流体储罐在增强并达到 无限阈值后，都会实现本接口。仓储流体端口据此把自身切换为无限存量，断网后再恢复为满存量。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` List<FluidStack> getInfiniteFluids() ` | 当前无限供给的所有流体。 大型储罐可能同时有多种流体达到无限，调用方需结合过滤阀的实际放行结果选择。<br>返回 流体副本列表；不是无限源或没有流体时为空列表 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfiniteFluidSource.java#L21) |

## InfinityFluidTank

` public class InfinityFluidTank extends FluidStacksResourceHandler implements InfiniteFluidSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InfinityFluidTank(int capacity) ` | 执行 ` this(1, capacity, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L21) |
| ` public InfinityFluidTank(int capacity, boolean infinity) ` | 执行 ` this(1, capacity, infinity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L25) |
| ` public InfinityFluidTank(int size, int capacity, boolean infinity) ` | 实现调用 ` super(size, capacity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L29) |
| ` public InfinityFluidTank(NonNullList<FluidStack> stacks, int capacity, boolean infinity) ` | 实现调用 ` super(stacks, capacity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L34) |
| ` @Override public List<FluidStack> getInfiniteFluids() ` | 末尾返回 ` this.infinity && !resource.isEmpty() ? List.of(resource.toStack(1)) : List.of() `<br>实现调用 ` this.getResource(0) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` List.of(resource.toStack(1)) `<br>实现调用 ` resource.toStack(1) `<br>实现调用 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L45) |
| ` public void setCapacity(int capacity) ` | 实现调用 ` this.size() `<br>实现调用 ` this.getResource(i) `<br>实现调用 ` resource.isEmpty() `<br>分支 ` (this.infinity && !resource.isEmpty()) ` 内调用 ` this.stacks.set(i, this.getStackFrom(resource, capacity)) `<br>分支 ` (this.infinity && !resource.isEmpty()) ` 内调用 ` this.getStackFrom(resource, capacity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L51) |
| ` @Override public int extract(FluidResource resource, int amount, TransactionContext transaction) ` | ` (!this.infinity) ` 成立时提前返回 ` super.extract(resource, amount, transaction) `<br>末尾返回 ` 0 `<br>分支 ` (!this.infinity) ` 内调用 ` super.extract(resource, amount, transaction) `<br>实现调用 ` this.size() `<br>实现调用 ` this.extract(i, resource, amount, transaction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L61) |
| ` @Override public int extract(int index, FluidResource resource, int amount, TransactionContext transaction) ` | ` (!this.infinity) ` 成立时提前返回 ` super.extract(index, resource, amount, transaction) `<br>末尾返回 ` this.getResource(index).isEmpty() ? 0 : amount `<br>分支 ` (!this.infinity) ` 内调用 ` super.extract(index, resource, amount, transaction) `<br>实现调用 ` this.getResource(index).isEmpty() `<br>实现调用 ` this.getResource(index) `<br>[调用处 InfinityFluidTank.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L72) |
| ` @Override public int insert(FluidResource resource, int amount, TransactionContext transaction) ` | ` (!this.infinity) ` 成立时提前返回 ` super.insert(resource, amount, transaction) `<br>末尾返回 ` 0 `<br>分支 ` (!this.infinity) ` 内调用 ` super.insert(resource, amount, transaction) `<br>实现调用 ` this.size() `<br>实现调用 ` this.insert(i, resource, amount, transaction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L79) |
| ` @Override public int insert(int index, FluidResource resource, int amount, TransactionContext transaction) ` | ` (!this.infinity) ` 成立时提前返回 ` super.insert(index, resource, amount, transaction) `<br>` (resource.isEmpty() \|\| !this.isValid(index, resource)) ` 成立时提前返回 ` 0 `<br>` (!resourceIn.isEmpty() && !resourceIn.equals(resource)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` amount `<br>分支 ` (!this.infinity) ` 内调用 ` super.insert(index, resource, amount, transaction) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.isValid(index, resource) `<br>实现调用 ` this.getResource(0) `<br>实现调用 ` resourceIn.isEmpty() `<br>实现调用 ` resourceIn.equals(resource) `<br>[调用处 InfinityFluidTank.insert](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L90) |
| ` @Override public void serialize(ValueOutput output) ` | 实现调用 ` super.serialize(output) `<br>实现调用 ` output.putBoolean("Infinity", this.infinity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L106) |
| ` @Override public void deserialize(ValueInput input) ` | 实现调用 ` super.deserialize(input) `<br>实现调用 ` input.getBooleanOr("Infinity", false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L112) |
| ` public boolean isInfinity() ` | 末尾返回 ` this.infinity `<br>由 Lombok 生成。<br>[调用处 InfinityFluidTank.getCapacity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L16) |
| ` public void setInfinity(final boolean infinity) ` | 执行 ` this.infinity = infinity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfinityFluidTank.java#L16) |

## LargeCauldronFluidHandler

` public class LargeCauldronFluidHandler implements ResourceHandler<FluidResource>, ValueIOSerializable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int TANK_COUNT ` | 初值 ` 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L20) |
| ` public static int tankCapacity() ` | 末尾返回 ` AnvilCraft.CONFIG.machines.largeCauldronTankCapacity `<br>[调用处 LargeCauldronBlockEntity.getLightLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L491) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L23) |
| ` public static int totalCapacity() ` | 末尾返回 ` LargeCauldronFluidHandler.TANK_COUNT * LargeCauldronFluidHandler.tankCapacity() `<br>[调用处 LargeCauldronBlock.getAnalogOutputSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L265) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L27) |
| ` public LargeCauldronFluidHandler(Runnable changeListener) ` | 执行 ` this.changeListener = changeListener `<br>[调用处 LargeCauldronBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L135) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L35) |
| ` @Override public int size() ` | 末尾返回 ` LargeCauldronFluidHandler.TANK_COUNT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L39) |
| ` @Override public FluidResource getResource(int index) ` | 末尾返回 ` index < this.fluids.size() ? FluidResource.of(this.fluids.get(index)) : FluidResource.EMPTY `<br>实现调用 ` Objects.checkIndex(index, LargeCauldronFluidHandler.TANK_COUNT) `<br>实现调用 ` this.fluids.size() `<br>实现调用 ` FluidResource.of(this.fluids.get(index)) `<br>实现调用 ` this.fluids.get(index) `<br>[调用处 LargeCauldronFluidHandler.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L44) |
| ` @Override public long getAmountAsLong(int index) ` | 末尾返回 ` index < this.fluids.size() ? this.fluids.get(index).getAmount() : 0 `<br>实现调用 ` Objects.checkIndex(index, LargeCauldronFluidHandler.TANK_COUNT) `<br>实现调用 ` this.fluids.size() `<br>实现调用 ` this.fluids.get(index).getAmount() `<br>实现调用 ` this.fluids.get(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L50) |
| ` @Override public long getCapacityAsLong(int index, FluidResource resource) ` | 末尾返回 ` LargeCauldronFluidHandler.tankCapacity() `<br>实现调用 ` Objects.checkIndex(index, LargeCauldronFluidHandler.TANK_COUNT) `<br>实现调用 ` LargeCauldronFluidHandler.tankCapacity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L56) |
| ` @Override public boolean isValid(int index, FluidResource resource) ` | ` (resource.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` this.findFluid(resource) >= 0 \|\| this.fluids.size() < LargeCauldronFluidHandler.TANK_COUNT `<br>实现调用 ` Objects.checkIndex(index, LargeCauldronFluidHandler.TANK_COUNT) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.findFluid(resource) `<br>实现调用 ` this.fluids.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L62) |
| ` @Override public int insert(int index, FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` this.insert(resource, amount, false, transaction) `<br>实现调用 ` Objects.checkIndex(index, LargeCauldronFluidHandler.TANK_COUNT) `<br>实现调用 ` this.insert(resource, amount, false, transaction) `<br>[调用处 LargeCauldronFluidHandler.insert](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L69) |
| ` @Override public int insert(FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` this.insert(resource, amount, false, transaction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L75) |
| ` @Override public int extract(int index, FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` this.extractLayer(index, resource, amount, transaction) `<br>实现调用 ` Objects.checkIndex(index, LargeCauldronFluidHandler.TANK_COUNT) `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) `<br>实现调用 ` this.extractLayer(index, resource, amount, transaction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L107) |
| ` @Override public int extract(FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` 0 `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) `<br>实现调用 ` this.fluids.size() `<br>实现调用 ` this.getResource(layer).equals(resource) `<br>实现调用 ` this.getResource(layer) `<br>分支 ` (this.getResource(layer).equals(resource)) ` 内调用 ` this.extractLayer(layer, resource, amount, transaction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L114) |
| ` public ResourceHandler<FluidResource> bottomAccess() ` | 末尾返回 ` new LayeredView(DrainOrder.BOTTOM, LargeCauldronFluidHandler.totalCapacity(), true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L145) |
| ` public ResourceHandler<FluidResource> topAccess() ` | 末尾返回 ` new LayeredView(DrainOrder.TOP, LargeCauldronFluidHandler.totalCapacity(), false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L149) |
| ` public ResourceHandler<FluidResource> sideAccess(int accessibleAmount) ` | 末尾返回 ` new LayeredView(DrainOrder.HEIGHT, accessibleAmount, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L153) |
| ` public FluidStack getFluidInTank(int tank) ` | 末尾返回 ` resource.isEmpty() ? FluidStack.EMPTY : resource.toStack(this.getAmountAsInt(tank)) `<br>实现调用 ` this.getResource(tank) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` resource.toStack(this.getAmountAsInt(tank)) `<br>实现调用 ` this.getAmountAsInt(tank) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L157) |
| ` public List<FluidStack> copyFluids() ` | 末尾返回 ` result `<br>实现调用 ` result.add(fluid.copy()) `<br>实现调用 ` fluid.copy() `<br>实现调用 ` result.size() `<br>实现调用 ` result.add(FluidStack.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L162) |
| ` public void setFluids(List<FluidStack> fluids) ` | 实现调用 ` this.fluids.clear() `<br>实现调用 ` fluid.isEmpty() `<br>实现调用 ` this.fluids.add(fluid.copyWithAmount(Math.min(fluid.getAmount(), LargeCauldronFluidHandler.tankCapacity()))) `<br>实现调用 ` fluid.copyWithAmount(Math.min(fluid.getAmount(), LargeCauldronFluidHandler.tankCapacity())) `<br>实现调用 ` Math.min(fluid.getAmount(), LargeCauldronFluidHandler.tankCapacity()) `<br>实现调用 ` fluid.getAmount() `<br>[调用处 LargeCauldronFluidHandler.deserialize](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L192) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L169) |
| ` public int getTotalAmount() ` | 末尾返回 ` total `<br>实现调用 ` fluid.getAmount() `<br>[调用处 LargeCauldronFluidHandler.layerAtHeight](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L204) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L179) |
| ` @Override public void serialize(ValueOutput output) ` | 执行 ` output.store("Fluids", LargeCauldronFluidHandler.FLUIDS_CODEC, this.fluids) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L185) |
| ` @Override public void deserialize(ValueInput input) ` | 执行 ` this.setFluids(input.read("Fluids", LargeCauldronFluidHandler.FLUIDS_CODEC).orElse(List.of())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L190) |

## VoidFluidHandler

` public final class VoidFluidHandler implements ResourceHandler<FluidResource> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L14)

只进不出的虚空流体容器。 接受任意流体的填充并直接丢弃（相当于创造流体储罐的只输入版本）， 永不存储、永不输出。用于门格海绵：通过管道输入的流体会被无限吸收并消失。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoidFluidHandler INSTANCE ` | 初值 ` new VoidFluidHandler() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L15) |
| ` @Override public int size() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L20) |
| ` @Override public FluidResource getResource(int index) ` | 末尾返回 ` FluidResource.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L25) |
| ` @Override public long getAmountAsLong(int index) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L30) |
| ` @Override public long getCapacityAsLong(int index, FluidResource resource) ` | 末尾返回 ` Integer.MAX_VALUE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L35) |
| ` @Override public boolean isValid(int index, FluidResource resource) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L40) |
| ` @Override public int insert(int index, FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` amount `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L45) |
| ` @Override public int extract(int index, FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L52) |
