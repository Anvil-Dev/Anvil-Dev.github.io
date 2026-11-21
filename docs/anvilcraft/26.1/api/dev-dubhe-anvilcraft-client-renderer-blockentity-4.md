# dev.dubhe.anvilcraft.client.renderer.blockentity（StampingPlatformBlockEntityRenderer 至 WipBlockEntityRenderer）



## StampingPlatformBlockEntityRenderer

` public class StampingPlatformBlockEntityRenderer extends ProcessingItemStackRenderer<StampingPlatformBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> DOOR_LEFT ` | 初值 ` new StandaloneModelKey<>(() -> "processing_table_door_left") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L14) |
| ` public static final StandaloneModelKey<BlockStateModel> DOOR_RIGHT ` | 初值 ` new StandaloneModelKey<>(() -> "processing_table_door_right") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L15) |
| ` public StampingPlatformBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StampingPlatformBlockEntityRenderer.java#L19) |

## StorageFluidPortBlockEntityRenderer

` public class StorageFluidPortBlockEntityRenderer extends BaseFluidHandlerHolderRenderer<StorageFluidPortBlockEntity, FluidHandlerRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StorageFluidPortBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L17) |
| ` @Override public FluidHandlerRenderState createRenderState() ` | 末尾返回 ` new FluidHandlerRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L20) |
| ` @Override public void extractRenderState( StorageFluidPortBlockEntity port, FluidHandlerRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` super.extractRenderState(port, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` state.setFill(Mth.clamp((float) port.getFluid().getAmount() / StorageFluidPortBlockEntity.CAPACITY_MB, 0, 1)) `<br>实现调用 ` Mth.clamp((float) port.getFluid().getAmount() / StorageFluidPortBlockEntity.CAPACITY_MB, 0, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L33) |
| ` @Override public void submit(FluidHandlerRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` state.getResource() `<br>实现调用 ` state.getFill() `<br>实现调用 ` state.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StorageFluidPortBlockEntityRenderer.java#L42) |

## StoragePortBlockEntityRenderer

` public class StoragePortBlockEntityRenderer implements BlockEntityRenderer<StoragePortBlockEntity, StoragePortRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.resolver = context.itemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L22) |
| ` @Override public StoragePortRenderState createRenderState() ` | 末尾返回 ` new StoragePortRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L26) |
| ` @Override public void extractRenderState( StoragePortBlockEntity port, StoragePortRenderState state, float partialTick, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(port, state, partialTick, cameraPosition, breakProgress) `<br>实现调用 ` state.markedItem.clear() `<br>实现调用 ` port.getMarkedItem().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L31) |
| ` @Override public void submit(StoragePortRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera) ` | 实现调用 ` Direction.values() `<br>实现调用 ` direction.ordinal() `<br>实现调用 ` pose.pushPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/StoragePortBlockEntityRenderer.java#L46) |

## TeslaTowerRenderer

` public class TeslaTowerRenderer implements BlockEntityRenderer<TeslaTowerBlockEntity, TeslaTowerRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public TeslaTowerRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L25) |
| ` @Override public TeslaTowerRenderState createRenderState() ` | 末尾返回 ` new TeslaTowerRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L29) |
| ` @Override public void extractRenderState( TeslaTowerBlockEntity be, TeslaTowerRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` be.getLevel() `<br>实现调用 ` level.getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L34) |
| ` @Override public void submit( TeslaTowerRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` state.getStart() `<br>实现调用 ` state.getEnd() `<br>实现调用 ` state.getCamera() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L63) |
| ` @SuppressWarnings("SameParameterValue") public void submitLightning( Matrix4f matrix, VertexConsumer consumer, Vec3 start, Vec3 end, Vec3 localCamera, float width, float alpha ) ` | 实现调用 ` end.subtract(start).normalize() `<br>实现调用 ` end.subtract(start) `<br>实现调用 ` start.add(end).scale(0.5) `<br>[调用处 TeslaTowerRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L88) |
| ` @Override public boolean shouldRenderOffScreen() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L142) |
| ` @Override public AABB getRenderBoundingBox(TeslaTowerBlockEntity blockEntity) ` | 末尾返回 ` TeslaTowerRenderer.BASE_RENDER_BBOX .move(blockEntity.getBlockPos()) .move(0, 4, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TeslaTowerRenderer.java#L147) |

## TradingStationBlockEntityRenderer

` public class TradingStationBlockEntityRenderer implements BlockEntityRenderer<TradingStationBlockEntity, TradingStationRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TradingStationBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.itemModelResolver = context.itemModelResolver() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L32) |
| ` @Override public TradingStationRenderState createRenderState() ` | 末尾返回 ` new TradingStationRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L36) |
| ` @Override public void extractRenderState( TradingStationBlockEntity be, TradingStationRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` be.getFilters().getItem(i) `<br>实现调用 ` be.getFilters() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L41) |
| ` @Override public void submit( TradingStationRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 实现调用 ` state.getItems() `<br>实现调用 ` items.isEmpty() `<br>实现调用 ` items.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L72) |
| ` @Override public AABB getRenderBoundingBox(TradingStationBlockEntity blockEntity) ` | 末尾返回 ` aabb ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L133) |

## UnpackingTableBlockEntityRenderer

` public class UnpackingTableBlockEntityRenderer extends ProcessingItemStackRenderer<UnpackingTableBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/UnpackingTableBlockEntityRenderer.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UnpackingTableBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/UnpackingTableBlockEntityRenderer.java#L8) |

## VoidEnergyCollectorRenderer

` public class VoidEnergyCollectorRenderer extends PowerProducerRenderer<VoidEnergyCollectorBlockEntity, PowerGeneratorRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/VoidEnergyCollectorRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> HEAD ` | 初值 ` new StandaloneModelKey<>( () -> "AnvilCraft: Void Energy Collector Head Model" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/VoidEnergyCollectorRenderer.java#L10) |
| ` public VoidEnergyCollectorRenderer(BlockEntityRendererProvider.Context ignored) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/VoidEnergyCollectorRenderer.java#L14) |
| ` @Override public PowerGeneratorRenderState createRenderState() ` | 末尾返回 ` new PowerGeneratorRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/VoidEnergyCollectorRenderer.java#L17) |

## WipBlockEntityRenderer

` public class WipBlockEntityRenderer implements BlockEntityRenderer<WipBlockEntity, WipBlockRenderState>, ModelSelectionRenderer<WipBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<BlockStateModel> SPACETIME_SUPERCOMPUTER_WIP ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/spacetime_supercomputer_wip" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L37) |
| ` public static final StandaloneModelKey<BlockStateModel> ANCIENT_DEBRIS_WIP ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/ancient_debris_wip") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L40) |
| ` public static final StandaloneModelKey<BlockStateModel> NETHERITE_BLOCK_WIP ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/netherite_block_wip") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L42) |
| ` public static final StandaloneModelKey<BlockStateModel> HEAVY_IRON_BLOCK_WIP ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/heavy_iron_block_wip") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L44) |
| ` public static final StandaloneModelKey<BlockStateModel> ANCIENT_SEA_REEF_WIP ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/ancient_sea_reef_wip") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L46) |
| ` public static final StandaloneModelKey<BlockStateModel> NESTING_SHULKER_BOX ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/nesting_shulker_box" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L48) |
| ` public static final StandaloneModelKey<BlockStateModel> OVER_NESTING_SHULKER_BOX ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/over_nesting_shulker_box" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L51) |
| ` public static final StandaloneModelKey<BlockStateModel> SUPERCRITICAL_NESTING_SHULKER_BOX ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/supercritical_nesting_shulker_box" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L54) |
| ` public static final StandaloneModelKey<BlockStateModel> SPACETIME_SUPERCOMPUTER_WIP_2 ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/spacetime_supercomputer_wip_2" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L57) |
| ` public static final StandaloneModelKey<BlockStateModel> SPACETIME_SUPERCOMPUTER_WIP_3 ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/spacetime_supercomputer_wip_3" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L60) |
| ` public static final StandaloneModelKey<BlockStateModel> NETHERITE_BLOCK_WIP_2 ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/netherite_block_wip_2" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L63) |
| ` public static final StandaloneModelKey<BlockStateModel> HEAVY_IRON_BLOCK_WIP_2 ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/heavy_iron_block_wip_2" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L66) |
| ` public static final StandaloneModelKey<BlockStateModel> ANCIENT_SEA_REEF_WIP_2 ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/ancient_sea_reef_wip_2" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L69) |
| ` public static final StandaloneModelKey<BlockStateModel> SHULKER_BOX_WIP ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/shulker_box_wip" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L72) |
| ` public static final StandaloneModelKey<BlockStateModel> SHULKER_BOX_WIP_2 ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/shulker_box_wip_2" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L75) |
| ` public static final StandaloneModelKey<BlockStateModel> MASS_ENERGY_INVERTER_WIP ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/mass_energy_inverter_wip" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L79) |
| ` public static final StandaloneModelKey<BlockStateModel> MASS_ENERGY_INVERTER_WIP_2 ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/mass_energy_inverter_wip_2" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L82) |
| ` public static final StandaloneModelKey<BlockStateModel> MASS_ENERGY_INVERTER_WIP_3 ` | 初值 ` WipBlockEntityRenderer.registerModel( "block/wip_display/mass_energy_inverter_wip_3" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L85) |
| ` public static @Nullable StandaloneModelKey<BlockStateModel> getModelKey(Identifier id) ` | 末尾返回 ` key `<br>[调用处 RenderSupport.extractWipBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L266) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L96) |
| ` public WipBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 实现调用 ` Minecraft.getInstance().getBlockColors() `<br>实现调用 ` Minecraft.getInstance() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L108) |
| ` @Override public WipBlockRenderState createRenderState() ` | 末尾返回 ` new WipBlockRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L113) |
| ` @Override public void extractRenderState( WipBlockEntity be, WipBlockRenderState state, float partialTicks, Vec3 cameraPosition, ModelFeatureRenderer.@Nullable CrumblingOverlay breakProgress ) ` | 实现调用 ` BlockEntityRenderer.super.extractRenderState(be, state, partialTicks, cameraPosition, breakProgress) `<br>实现调用 ` state.clearQuads() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L118) |
| ` @Override public void collectSelectionModels(WipBlockEntity be, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` be.getLevel() `<br>分支 ` (be.getLevel() != null) ` 内调用 ` consumer.accept(this.getDisplayedSelection(be, be.getLevel()), pose) `<br>分支 ` (be.getLevel() != null) ` 内调用 ` this.getDisplayedSelection(be, be.getLevel()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L165) |
| ` @Override public void submit( WipBlockRenderState state, PoseStack pose, SubmitNodeCollector collector, CameraRenderState camera ) ` | 执行 ` state.submitGeometry(pose, collector) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L170) |
