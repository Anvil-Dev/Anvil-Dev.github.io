# dev.dubhe.anvilcraft.api.fluid



## BottleFluidHandler

` public class BottleFluidHandler implements IFluidHandlerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L13)

Fluid handler for honey bottles. Each bottle transfers 250 mB.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BottleFluidHandler(ItemStack container) ` | 执行 ` this.container = container `<br>[调用处 CapabilitiesEventListener.registerCapabilities](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L240) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L18) |
| ` @Override public ItemStack getContainer() ` | 末尾返回 ` this.container ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L22) |
| ` @Override public int getTanks() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L27) |
| ` @Override public FluidStack getFluidInTank(int tank) ` | ` (this.container.is(Items.HONEY_BOTTLE)) ` 成立时提前返回 ` new FluidStack(ModFluids.HONEY, FLUID_PER_BOTTLE) `<br>末尾返回 ` FluidStack.EMPTY `<br>实现调用 ` this.container.is(Items.HONEY_BOTTLE) `<br>[调用处 BottleFluidHandler.drain](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L32) |
| ` @Override public int getTankCapacity(int tank) ` | 末尾返回 ` FLUID_PER_BOTTLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L40) |
| ` @Override public boolean isFluidValid(int tank, FluidStack stack) ` | 末尾返回 ` stack.getFluid() instanceof HoneyFluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L45) |
| ` @Override public int fill(FluidStack resource, FluidAction action) ` | ` (resource.getAmount() < FLUID_PER_BOTTLE) ` 成立时提前返回 ` 0 `<br>` (!this.container.is(Items.GLASS_BOTTLE)) ` 成立时提前返回 ` 0 `<br>` (filled.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` FLUID_PER_BOTTLE `<br>实现调用 ` resource.getAmount() `<br>实现调用 ` this.container.is(Items.GLASS_BOTTLE) `<br>实现调用 ` getFilledBottle(resource) `<br>实现调用 ` filled.isEmpty() `<br>实现调用 ` action.execute() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L50) |
| ` @Override public FluidStack drain(int maxDrain, FluidAction action) ` | ` (maxDrain < FLUID_PER_BOTTLE) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (result.isEmpty()) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` result `<br>实现调用 ` this.getFluidInTank(0) `<br>实现调用 ` result.isEmpty() `<br>实现调用 ` action.execute() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L63) |
| ` @Override public FluidStack drain(FluidStack resource, FluidAction action) ` | ` (resource.getAmount() < FLUID_PER_BOTTLE) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (result.isEmpty()) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (!result.is(resource.getFluid())) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` result `<br>实现调用 ` resource.getAmount() `<br>实现调用 ` this.getFluidInTank(0) `<br>实现调用 ` result.isEmpty() `<br>实现调用 ` result.is(resource.getFluid()) `<br>实现调用 ` resource.getFluid() `<br>实现调用 ` action.execute() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/BottleFluidHandler.java#L75) |

## DrainChunkAccess

` public final class DrainChunkAccess `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L15)

排水口按访问位置加载有限区块，超出抽取距离的位置作为流体边界。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DrainChunkAccess(BlockPos drainPos) ` | 实现调用 ` drainPos.immutable() `<br>实现调用 ` ChunkPos.asLong(drainPos.getX() >> 4, drainPos.getZ() >> 4) `<br>实现调用 ` drainPos.getX() `<br>实现调用 ` drainPos.getZ() `<br>[调用处 DrainBlockEntity.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/fluid/DrainBlockEntity.java#L109) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L27) |
| ` public boolean isInRange(BlockPos pos) ` | 末尾返回 ` dx * dx + dz * dz <= MAX_DISTANCE * MAX_DISTANCE `<br>实现调用 ` pos.getX() `<br>实现调用 ` this.drainPos.getX() `<br>实现调用 ` pos.getZ() `<br>实现调用 ` this.drainPos.getZ() `<br>[调用处 DrainChunkAccess.read](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L32) |
| ` public @Nullable BlockState read(ServerLevel level, BlockPos pos) ` | ` (!this.isInRange(pos) \|\| !level.isInWorldBounds(pos)) ` 成立时提前返回 ` Blocks.AIR.defaultBlockState() `<br>` (key == this.drainChunk) ` 成立时提前返回 ` chunk == null ? null : chunk.getBlockState(pos) `<br>` (this.pending.contains(key)) ` 成立时提前返回 ` null `<br>` (this.pending.size() >= MAX_PENDING_CHUNKS \|\| this.requests >= MAX_PENDING_CHUNKS) ` 成立时提前返回 ` null `<br>末尾返回 ` null `<br>实现调用 ` this.isInRange(pos) `<br>实现调用 ` level.isInWorldBounds(pos) `<br>分支 ` (!this.isInRange(pos) \|\| !level.isInWorldBounds(pos)) ` 内调用 ` Blocks.AIR.defaultBlockState() `<br>实现调用 ` pos.getX() `<br>实现调用 ` pos.getZ() `<br>实现调用 ` ChunkPos.asLong(chunkX, chunkZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L38) |
| ` public void clear(ServerLevel level) ` | 实现调用 ` level.getChunkSource().removeRegionTicket(TICKET, new ChunkPos(key), 0, this.drainPos) `<br>实现调用 ` level.getChunkSource() `<br>实现调用 ` this.tickets.clear() `<br>实现调用 ` this.pending.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/DrainChunkAccess.java#L79) |

## EnchantedBookFluidHandler

` public class EnchantedBookFluidHandler implements IFluidHandlerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnchantedBookFluidHandler(ItemStack container) ` | 执行 ` this.container = container `<br>[调用处 CapabilitiesEventListener.registerCapabilities](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L246) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L13) |
| ` @Override public ItemStack getContainer() ` | 末尾返回 ` this.container ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L17) |
| ` @Override public int getTanks() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L22) |
| ` @Override public FluidStack getFluidInTank(int tank) ` | 末尾返回 ` LiquidEnchantmentUtil.fromBook(this.container).copyWithAmount(FluidType.BUCKET_VOLUME) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L27) |
| ` @Override public int getTankCapacity(int tank) ` | 末尾返回 ` FluidType.BUCKET_VOLUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L32) |
| ` @Override public boolean isFluidValid(int tank, FluidStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L37) |
| ` @Override public int fill(FluidStack resource, FluidAction action) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L43) |
| ` @Override public FluidStack drain(FluidStack resource, FluidAction action) ` | 末尾返回 ` FluidStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L48) |
| ` @Override public FluidStack drain(int maxDrain, FluidAction action) ` | 末尾返回 ` FluidStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/EnchantedBookFluidHandler.java#L53) |

## FireCauldronWrapper

` public final class FireCauldronWrapper implements IFluidHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L15)

燃烧油锅与未点燃油锅共用流体，因此单独提供能力以保留燃烧状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FireCauldronWrapper(Level level, BlockPos pos) ` | 实现调用 ` pos.immutable() `<br>[调用处 CapabilitiesEventListener.registerCapabilities](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L20) |
| ` @Override public int getTanks() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L25) |
| ` @Override public FluidStack getFluidInTank(int tank) ` | 实现调用 ` this.level.getBlockState(this.pos) `<br>实现调用 ` state.is(ModBlocks.FIRE_CAULDRON) `<br>实现调用 ` state.is(ModBlocks.OIL_CAULDRON) `<br>实现调用 ` ModFluids.OIL.get() `<br>实现调用 ` state.getValue(Layered4LevelCauldronBlock.LEVEL) `<br>[调用处 FireCauldronWrapper.fill](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L30) |
| ` @Override public int getTankCapacity(int tank) ` | 末尾返回 ` FluidType.BUCKET_VOLUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L38) |
| ` @Override public boolean isFluidValid(int tank, FluidStack stack) ` | 末尾返回 ` stack.is(ModFluids.OIL.get()) && stack.getComponents().isEmpty() `<br>[调用处 FireCauldronWrapper.fill](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L43) |
| ` @Override public int fill(FluidStack resource, FluidAction action) ` | ` (resource.isEmpty() \|\| !this.isFluidValid(0, resource) \|\| !(state.is(ModBlocks.FIRE_CAULDRON) \|\| state.is(ModBlocks.OIL_CAULDRON) \|\| state.is(Blocks.CAULDRON))) ` 成立时提前返回 ` 0 `<br>末尾返回 ` inserted `<br>实现调用 ` this.level.getBlockState(this.pos) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.isFluidValid(0, resource) `<br>实现调用 ` state.is(ModBlocks.FIRE_CAULDRON) `<br>实现调用 ` state.is(ModBlocks.OIL_CAULDRON) `<br>实现调用 ` state.is(Blocks.CAULDRON) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L48) |
| ` @Override public FluidStack drain(FluidStack resource, FluidAction action) ` | ` (resource.isEmpty() \|\| !this.isFluidValid(0, resource)) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` this.drain(resource.getAmount(), action) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.isFluidValid(0, resource) `<br>实现调用 ` this.drain(resource.getAmount(), action) `<br>实现调用 ` resource.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L64) |
| ` @Override public FluidStack drain(int maxDrain, FluidAction action) ` | ` (maxDrain <= 0) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` new FluidStack(ModFluids.OIL.get(), extracted) `<br>实现调用 ` this.getFluidInTank(0).getAmount() `<br>实现调用 ` this.getFluidInTank(0) `<br>实现调用 ` Math.min(maxDrain / AMOUNT_PER_LEVEL, current / AMOUNT_PER_LEVEL) `<br>实现调用 ` action.execute() `<br>分支 ` (extracted > 0 && action.execute()) ` 内调用 ` this.setAmount(this.level.getBlockState(this.pos), current - extracted) `<br>分支 ` (extracted > 0 && action.execute()) ` 内调用 ` this.level.getBlockState(this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FireCauldronWrapper.java#L72) |

## FluidHandlerWrapper

` public class FluidHandlerWrapper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L42)

流体处理器封装器。 统一处理发射器与流体容器（鱼缸、储罐等 IFluidHandler 实现）之间的流体交互， 简化填充/抽取时物品转换逻辑，避免重复代码。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidHandlerWrapper(IFluidHandler handler) ` | 执行 ` this.handler = handler `<br>[调用处 AutoEnchantingTableFluidPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableFluidPacket.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L50) |
| ` @Nullable public static FluidHandlerWrapper of(Level level, BlockPos pos, @Nullable Direction side) ` | 从世界中获取指定位置的流体处理器封装。<br>参数 ` level ` 世界<br>参数 ` pos ` 目标位置<br>参数 ` side ` 访问面，可为 null<br>返回 封装实例，若目标无流体处理器则返回 null<br>末尾返回 ` handler != null ? new FluidHandlerWrapper(handler) : null `<br>实现调用 ` level.getCapability(Capabilities.FluidHandler.BLOCK, pos, side) `<br>[调用处 ModDispenserBehavior.execute](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L62) |
| ` public boolean isValid() ` | 判断包装器是否持有有效的流体处理器。<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L71) |
| ` public static boolean tryInteractWithBottle( Player player, InteractionHand hand, IFluidHandler handler, Level level, BlockPos pos ) ` | ` (!FluidHandlerWrapper.isExplicitBottleInteraction(stack)) ` 成立时提前返回 ` false `<br>` (level.isClientSide()) ` 成立时提前返回 ` wrapper.fillFromItem(stack, true, null) != null \|\| wrapper.drainToItem(stack, true) != null `<br>末尾返回 ` false `<br>实现调用 ` player.getItemInHand(hand) `<br>实现调用 ` FluidHandlerWrapper.isExplicitBottleInteraction(stack) `<br>实现调用 ` level.isClientSide() `<br>分支 ` (level.isClientSide()) ` 内调用 ` wrapper.fillFromItem(stack, true, null) `<br>分支 ` (level.isClientSide()) ` 内调用 ` wrapper.drainToItem(stack, true) `<br>实现调用 ` wrapper.fillFromItem(stack, false, level.getRandom()) `<br>[调用处 FishTankBlockEntity.interactWithFluid](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L954) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L75) |
| ` public static boolean isFluidInteractionItem(ItemStack stack) ` | 末尾返回 ` FluidHandlerWrapper.isExplicitBottleInteraction(stack) \|\| FluidUtil.getFluidHandler(stack).isPresent() `<br>[调用处 LargeCauldronBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L292) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L112) |
| ` @Nullable public ItemStack fillFromItem(ItemStack filledContainer) ` | 将流体容器物品中的流体填充到此处理器。 模拟并执行：从物品流体处理器中抽取 → 向此处理器填充 → 返回空容器。<br>参数 ` filledContainer ` 装有流体的容器物品栈<br>返回 填充成功返回空容器物品，失败返回 null<br>末尾返回 ` this.fillFromItem(filledContainer, false, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L143) |
| ` @Nullable public ItemStack fillFromItem(ItemStack filledContainer, boolean simulateOnly) ` | 将流体容器物品中的流体填充到此处理器（可选择是否模拟）。<br>参数 ` filledContainer ` 装有流体的容器物品栈<br>参数 ` simulateOnly ` 仅模拟（true）或执行实际转移（false）<br>返回 填充成功返回空容器物品，失败返回 null<br>末尾返回 ` this.fillFromItem(filledContainer, simulateOnly, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L155) |
| ` @Nullable public ItemStack fillFromItem(ItemStack filledContainer, boolean simulateOnly, @Nullable RandomSource random) ` | 将流体容器物品中的流体填充到此处理器（可选择是否模拟和随机概率）。<br>参数 ` filledContainer ` 装有流体的容器物品栈<br>参数 ` simulateOnly ` 仅模拟（true）或执行实际转移（false）<br>参数 ` random ` 随机源，用于附魔之瓶的概率判定；null 则视为 100% 成功<br>返回 填充成功返回空容器物品，失败返回 null<br>` (result != null) ` 成立时提前返回 ` result `<br>末尾返回 ` this.tryFillFromExpBottle(filledContainer, simulateOnly, random) `<br>实现调用 ` FluidUtil.getFluidHandler(filledContainer).orElse(null) `<br>实现调用 ` FluidUtil.getFluidHandler(filledContainer) `<br>分支 ` (itemHandler != null) ` 内调用 ` itemHandler.drain(Integer.MAX_VALUE, IFluidHandler.FluidAction.SIMULATE) `<br>分支 ` (itemHandler != null) ` 内调用 ` drained.isEmpty() `<br>分支 ` (itemHandler != null) ` 内调用 ` this.handler.fill(drained, IFluidHandler.FluidAction.SIMULATE) `<br>分支 ` (itemHandler != null) ` 内调用 ` drained.getAmount() `<br>[调用处 FluidHandlerWrapper.fillFromItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L168) |
| ` @Nullable public ItemStack drainToItem(ItemStack emptyContainer) ` | 从此处理器抽取流体到空容器物品。 根据空容器类型自动决定抽取量（桶 1000mB，瓶 250mB）。<br>参数 ` emptyContainer ` 空容器物品（桶、玻璃瓶等）<br>返回 装满流体的容器物品，失败返回 null<br>末尾返回 ` this.drainToItem(emptyContainer, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L261) |
| ` @Nullable public ItemStack drainToItem(ItemStack emptyContainer, boolean simulateOnly) ` | ` (!isSupportedEmptyContainer(emptyContainer)) ` 成立时提前返回 ` null `<br>末尾返回 ` this.drainToItem(emptyContainer, amount, simulateOnly) `<br>实现调用 ` isSupportedEmptyContainer(emptyContainer) `<br>实现调用 ` emptyContainer.is(Items.GLASS_BOTTLE) `<br>实现调用 ` this.drainToItem(emptyContainer, amount, simulateOnly) `<br>[调用处 FluidHandlerWrapper.drainToItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L263) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L266) |
| ` @Nullable public ItemStack drainToItem(ItemStack emptyContainer, int amount, boolean simulateOnly) ` | 从此处理器抽取指定量流体到空容器物品。<br>参数 ` emptyContainer ` 空容器物品<br>参数 ` amount ` 要抽取的流体量（mB）<br>参数 ` simulateOnly ` 仅模拟<br>返回 装满流体的容器物品，失败返回 null<br>` (!isSupportedEmptyContainer(emptyContainer)) ` 成立时提前返回 ` null `<br>` (drained.getAmount() < amount) ` 成立时提前返回 ` null `<br>` (result.isEmpty()) ` 成立时提前返回 ` null `<br>` (simulateOnly) ` 成立时提前返回 ` result `<br>末尾返回 ` result `<br>实现调用 ` isSupportedEmptyContainer(emptyContainer) `<br>实现调用 ` this.handler.drain(amount, IFluidHandler.FluidAction.SIMULATE) `<br>实现调用 ` drained.getAmount() `<br>实现调用 ` determineFilledContainer(drained, emptyContainer) `<br>实现调用 ` result.isEmpty() `<br>实现调用 ` this.handler.drain(amount, IFluidHandler.FluidAction.EXECUTE) `<br>[调用处 FluidHandlerWrapper.drainToItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L272) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L283) |
| ` public static ItemStack determineFilledContainer(FluidStack drained, ItemStack emptyContainer) ` | 根据抽取到的流体和空容器类型确定装满后的容器物品。<br>` (bucketItem != Items.AIR) ` 成立时提前返回 ` new ItemStack(bucketItem) `<br>末尾返回 ` ItemStack.EMPTY `<br>实现调用 ` emptyContainer.is(Items.GLASS_BOTTLE) `<br>分支 ` (isBottle) ` 内调用 ` drained.getFluid() `<br>分支 ` (drained.getFluid() == Fluids.WATER) ` 内调用 ` PotionContents.createItemStack(Items.POTION, Potions.WATER) `<br>分支 ` (isBottle) ` 内调用 ` ModFluids.EXP_FLUID.get() `<br>实现调用 ` drained.getFluid().getBucket() `<br>实现调用 ` drained.getFluid() `<br>[调用处 StorageServerStub.filledBucketOf](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L6111) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L306) |
| ` public FluidStack getFluid() ` | 获取处理器中的当前流体。<br>末尾返回 ` this.handler.getFluidInTank(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L345) |
| ` public int getCapacity() ` | 获取处理器容量。<br>末尾返回 ` this.handler.getTankCapacity(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L352) |
| ` public boolean isEmpty() ` | 处理器是否为空。<br>末尾返回 ` this.handler.getFluidInTank(0).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L359) |
| ` public boolean isFull() ` | 处理器是否已满。<br>末尾返回 ` fluid.getAmount() >= this.handler.getTankCapacity(0) `<br>实现调用 ` this.handler.getFluidInTank(0) `<br>实现调用 ` fluid.getAmount() `<br>实现调用 ` this.handler.getTankCapacity(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L366) |
| ` public IFluidHandler getHandler() ` | 获取被包装的原始流体处理器。<br>末尾返回 ` this.handler `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/FluidHandlerWrapper.java#L42) |

## GasDisplayFillProvider

` public interface GasDisplayFillProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/GasDisplayFillProvider.java#L19)

为玻璃管道显示提供"该气体在此容器内的显示填充率"（0..1）。 玻璃管道内气体的透明度由扩散系内各容器取平均得出（见 FluidPipeNetwork#avgGasAlphaFill），目标是与该容器渲染器保持一致。 多数容器的口径可由 net.neoforged.neoforge.fluids.capability.IFluidHandler 的容量推导——该气体存量 / 容器总容量——但以下两类容器推导不出，必须由实现方给出： 增强态大型储罐 ：渲染口径是 存量 / max(总存量, 无限阈值)， 而 getTanks() 会多报一个用于接纳新流体的空槽，容量求和与之不符； 创造流体储罐 ：渲染口径恒为满，而容量报告为 Integer#MAX\_VALUE。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` float gasDisplayFill(FluidStack gas) ` | 该气体在此容器内的显示填充率（0..1）；容器没有该气体时返回 0。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/GasDisplayFillProvider.java#L21) |

## IFluidHandlerHolder

` public interface IFluidHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/IFluidHandlerHolder.java#L8)

持有FluidTank的

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` IFluidHandler getFluidHandler() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/IFluidHandlerHolder.java#L9) |

## InfiniteFluidSource

` public interface InfiniteFluidSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfiniteFluidSource.java#L13)

当前以无限存量供给流体的处理器。 用于管道网络识别“无限储罐”：创造流体储罐、小型/大型流体储罐在增强并达到 无限阈值后，都会实现本接口。仓储流体端口据此把自身切换为无限存量，断网后再恢复为满存量。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` List<FluidStack> getInfiniteFluids() ` | 当前无限供给的所有流体。 大型储罐可能同时有多种流体达到无限，调用方需结合过滤阀的实际放行结果选择。<br>返回 流体副本列表；不是无限源或没有流体时为空列表 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/InfiniteFluidSource.java#L21) |

## LargeCauldronFluidHandler

` public class LargeCauldronFluidHandler implements IFluidHandler, INBTSerializable<CompoundTag> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int TANK_COUNT ` | 初值 ` 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L17) |
| ` public static int tankCapacity() ` | 每个储罐的容量（mB），运行时读取配置。<br>末尾返回 ` AnvilCraft.CONFIG.machines.largeCauldronTankCapacity `<br>[调用处 LargeCauldronBlockEntity.getLightLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L466) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L22) |
| ` public static int totalCapacity() ` | 大锅的总容量（mB）。<br>末尾返回 ` TANK_COUNT * tankCapacity() `<br>[调用处 LargeCauldronBlock.getAnalogOutputSignal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L261) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L29) |
| ` public LargeCauldronFluidHandler(Runnable changeListener) ` | 实现调用 ` tankCapacity() `<br>[调用处 LargeCauldronBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L125) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L37) |
| ` @Override public int getTanks() ` | 末尾返回 ` TANK_COUNT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L51) |
| ` @Override public FluidStack getFluidInTank(int tank) ` | 末尾返回 ` tank >= 0 && tank < TANK_COUNT ? this.tanks[tank].getFluid() : FluidStack.EMPTY `<br>[调用处 LargeCauldronFluidHandler.drainFirstMatching](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L140) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L56) |
| ` @Override public int getTankCapacity(int tank) ` | 末尾返回 ` tankCapacity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L61) |
| ` @Override public boolean isFluidValid(int tank, FluidStack stack) ` | ` (stack.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` this.findFluid(stack) >= 0 \|\| this.activeLayers() < TANK_COUNT `<br>实现调用 ` stack.isEmpty() `<br>实现调用 ` this.findFluid(stack) `<br>实现调用 ` this.activeLayers() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L66) |
| ` @Override public int fill(FluidStack resource, FluidAction action) ` | 末尾返回 ` this.fill(resource, action, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L72) |
| ` @Override public FluidStack drain(FluidStack resource, FluidAction action) ` | 末尾返回 ` this.drainFirstMatching( resource, action, this.layerOrder(DrainOrder.TOP, totalCapacity())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L103) |
| ` @Override public FluidStack drain(int maxDrain, FluidAction action) ` | ` (maxDrain <= 0) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` order.isEmpty() ? FluidStack.EMPTY : this.drainLayer(order.getFirst(), maxDrain, action) `<br>实现调用 ` this.layerOrder(DrainOrder.TOP, totalCapacity()) `<br>实现调用 ` totalCapacity() `<br>实现调用 ` order.isEmpty() `<br>实现调用 ` this.drainLayer(order.getFirst(), maxDrain, action) `<br>实现调用 ` order.getFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L109) |
| ` public IFluidHandler bottomAccess() ` | 末尾返回 ` new LayeredView(DrainOrder.BOTTOM, totalCapacity(), true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L116) |
| ` public IFluidHandler topAccess() ` | 末尾返回 ` new LayeredView(DrainOrder.TOP, totalCapacity(), false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L120) |
| ` public IFluidHandler sideAccess(int accessibleAmount) ` | 末尾返回 ` new LayeredView(DrainOrder.HEIGHT, accessibleAmount, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L124) |
| ` public FluidStack drainStoredFluid(FluidStack resource, FluidAction action) ` | ` (resource.isEmpty()) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (layer < 0) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` this.drainLayer(layer, resource.getAmount(), action) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.findFluid(resource) `<br>实现调用 ` this.drainLayer(layer, resource.getAmount(), action) `<br>实现调用 ` resource.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L128) |
| ` public List<FluidStack> copyFluids() ` | 末尾返回 ` result `<br>实现调用 ` result.add(tank.getFluid().copy()) `<br>实现调用 ` tank.getFluid().copy() `<br>实现调用 ` tank.getFluid() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L212) |
| ` public void setFluids(List<FluidStack> fluids) ` | 实现调用 ` fluid.isEmpty() `<br>实现调用 ` compact.add(fluid.copyWithAmount(Math.min(fluid.getAmount(), tankCapacity()))) `<br>实现调用 ` fluid.copyWithAmount(Math.min(fluid.getAmount(), tankCapacity())) `<br>实现调用 ` Math.min(fluid.getAmount(), tankCapacity()) `<br>实现调用 ` fluid.getAmount() `<br>实现调用 ` tankCapacity() `<br>[调用处 LargeCauldronFluidHandler.fill](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L218) |
| ` public int getTotalAmount() ` | 末尾返回 ` total `<br>实现调用 ` tank.getFluidAmount() `<br>[调用处 LargeCauldronFluidHandler.layerAtHeight](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L183) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L236) |
| ` @Override public CompoundTag serializeNBT(HolderLookup.Provider provider) ` | 末尾返回 ` result `<br>实现调用 ` this.tanks[i].isEmpty() `<br>实现调用 ` this.tanks[i].writeToNBT(provider, new CompoundTag()) `<br>实现调用 ` entry.putInt("Tank", i) `<br>实现调用 ` list.add(entry) `<br>实现调用 ` result.put("Tanks", list) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L242) |
| ` @Override public void deserializeNBT(HolderLookup.Provider provider, CompoundTag tag) ` | 实现调用 ` tank.setFluid(FluidStack.EMPTY) `<br>实现调用 ` tag.getList("Tanks", Tag.TAG_COMPOUND) `<br>实现调用 ` list.size() `<br>实现调用 ` list.getCompound(i) `<br>实现调用 ` entry.getInt("Tank") `<br>实现调用 ` this.tanks[tank].readFromNBT(provider, entry) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/LargeCauldronFluidHandler.java#L256) |

## MilkCauldronWrapper

` public class MilkCauldronWrapper implements IFluidHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L13)

在牛奶的全局锅映射由其它模组占用时，保留四层牛奶锅的流体交互。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MilkCauldronWrapper(Level level, BlockPos pos) ` | 实现调用 ` pos.immutable() `<br>[调用处 CapabilitiesEventListener.registerCapabilities](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L18) |
| ` @Override public int getTanks() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L23) |
| ` @Override public FluidStack getFluidInTank(int tank) ` | 末尾返回 ` state.is(ModBlocks.MILK_CAULDRON) ? new FluidStack(NeoForgeMod.MILK.get(), CauldronUtil.currentLevel(state) * AMOUNT_PER_LEVEL) : FluidStack.EMPTY `<br>实现调用 ` this.level.getBlockState(this.pos) `<br>实现调用 ` state.is(ModBlocks.MILK_CAULDRON) `<br>实现调用 ` NeoForgeMod.MILK.get() `<br>实现调用 ` CauldronUtil.currentLevel(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L28) |
| ` @Override public int getTankCapacity(int tank) ` | 末尾返回 ` FluidType.BUCKET_VOLUME ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L36) |
| ` @Override public boolean isFluidValid(int tank, FluidStack stack) ` | 末尾返回 ` stack.is(NeoForgeMod.MILK.get()) `<br>[调用处 MilkCauldronWrapper.fill](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L41) |
| ` @Override public int fill(FluidStack resource, FluidAction action) ` | ` (resource.isEmpty() \|\| !this.isFluidValid(0, resource)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` CauldronUtil.fill(this.level, this.pos, ModBlocks.MILK_CAULDRON.get(), resource.getAmount() / AMOUNT_PER_LEVEL, action.simulate()) * AMOUNT_PER_LEVEL `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.isFluidValid(0, resource) `<br>实现调用 ` ModBlocks.MILK_CAULDRON.get() `<br>实现调用 ` resource.getAmount() `<br>实现调用 ` action.simulate() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L46) |
| ` @Override public FluidStack drain(FluidStack resource, FluidAction action) ` | ` (resource.isEmpty() \|\| !this.isFluidValid(0, resource) \|\| !resource.getComponents().isEmpty()) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` this.drain(resource.getAmount(), action) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.isFluidValid(0, resource) `<br>实现调用 ` resource.getComponents().isEmpty() `<br>实现调用 ` resource.getComponents() `<br>实现调用 ` this.drain(resource.getAmount(), action) `<br>实现调用 ` resource.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L55) |
| ` @Override public FluidStack drain(int maxDrain, FluidAction action) ` | 末尾返回 ` new FluidStack(NeoForgeMod.MILK.get(), drained * AMOUNT_PER_LEVEL) `<br>实现调用 ` ModBlocks.MILK_CAULDRON.get() `<br>实现调用 ` action.simulate() `<br>实现调用 ` NeoForgeMod.MILK.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/MilkCauldronWrapper.java#L63) |

## OnlyDrainFluidTank

` public class OnlyDrainFluidTank extends FluidTank `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/OnlyDrainFluidTank.java#L17)

仅允许抽取的流体容器实现。 该类继承自框架提供的 FluidTank，但重写了 fill 方法以禁止通过常规接口填充流体（返回 0 表示不接受任何填充）。 如果模块内部确实需要直接填充，请使用带有 ApiStatus.Internal 标注的 internalFill 方法， 该方法会委托给父类实现以执行真实的填充操作。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OnlyDrainFluidTank(int capacity) ` | 执行 ` super(capacity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/OnlyDrainFluidTank.java#L18) |
| ` public OnlyDrainFluidTank(int capacity, Predicate<FluidStack> validator) ` | 执行 ` super(capacity, validator) `<br>[调用处 ExpCollectorBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ExpCollectorBlockEntity.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/OnlyDrainFluidTank.java#L22) |
| ` @Override public final int fill(FluidStack resource, FluidAction action) ` | 禁止通过常规 API 填充该容器。<br>参数 ` resource ` 要填充的流体及数量（不会被接受）<br>参数 ` action ` 表示是否为模拟操作<br>返回 永远返回 0，表示未接受任何流体填充<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/OnlyDrainFluidTank.java#L33) |
| ` @ApiStatus.Internal public final int internalFill(FluidStack resource, FluidAction action) ` | 内部使用的填充方法，允许调用父类的填充逻辑。 该方法被标注为 ApiStatus.Internal，意味着它不是公共 API 的一部分， 仅用于模块内部需要绕过禁止填充限制的场景（例如初始化或特定行为）。<br>参数 ` resource ` 要填充的流体和数量<br>参数 ` action ` 表示是否为模拟操作<br>返回 实际接受的流体量（委托给父类实现）<br>末尾返回 ` super.fill(resource, action) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/OnlyDrainFluidTank.java#L49) |

## PowderSnowWrapper

` public class PowderSnowWrapper extends FluidBucketWrapper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/PowderSnowWrapper.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PowderSnowWrapper(ItemStack container) ` | 执行 ` super(container) `<br>[调用处 CapabilitiesEventListener.registerCapabilities](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L234) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/PowderSnowWrapper.java#L11) |
| ` @Override public FluidStack getFluid() ` | ` (this.container.is(Items.POWDER_SNOW_BUCKET)) ` 成立时提前返回 ` new FluidStack(ModFluids.POWDER_SNOW, FluidType.BUCKET_VOLUME) `<br>末尾返回 ` super.getFluid() `<br>实现调用 ` this.container.is(Items.POWDER_SNOW_BUCKET) `<br>实现调用 ` super.getFluid() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/PowderSnowWrapper.java#L15) |

## VoidFluidHandler

` public final class VoidFluidHandler implements IFluidHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L12)

只进不出的虚空流体容器。 接受任意流体的填充并直接丢弃（相当于创造流体储罐的只输入版本）， 永不存储、永不输出。用于门格海绵：通过管道输入的流体会被无限吸收并消失。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoidFluidHandler INSTANCE ` | 初值 ` new VoidFluidHandler() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L13) |
| ` @Override public int getTanks() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L18) |
| ` @Override public FluidStack getFluidInTank(int tank) ` | 末尾返回 ` FluidStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L23) |
| ` @Override public int getTankCapacity(int tank) ` | 末尾返回 ` Integer.MAX_VALUE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L28) |
| ` @Override public boolean isFluidValid(int tank, FluidStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L33) |
| ` @Override public int fill(FluidStack resource, FluidAction action) ` | 末尾返回 ` resource.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L38) |
| ` @Override public FluidStack drain(FluidStack resource, FluidAction action) ` | 末尾返回 ` FluidStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L43) |
| ` @Override public FluidStack drain(int maxDrain, FluidAction action) ` | 末尾返回 ` FluidStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluid/VoidFluidHandler.java#L48) |
