# dev.dubhe.anvilcraft.client.renderer.blockentity（AdvancedComparatorBlockEntityRender 至 GlassPipeBlockEntityRenderer）



## AdvancedComparatorBlockEntityRender

` public class AdvancedComparatorBlockEntityRender implements BlockEntityRenderer<AdvancedComparatorBlockEntity>, ModelSelectionRenderer<AdvancedComparatorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorBlockEntityRender.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public AdvancedComparatorBlockEntityRender(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorBlockEntityRender.java#L22) |
| ` @Override public void render( AdvancedComparatorBlockEntity blockEntity, float tickDelta, PoseStack poseStack, MultiBufferSource bufferSource, int light, int overlay ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorBlockEntityRender.java#L26) |
| ` @Override public void collectSelectionModels( AdvancedComparatorBlockEntity blockEntity, float partialTick, PoseStack poseStack, ModelConsumer consumer ) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` MountedRedstonePose.apply(poseStack, blockEntity.getBlockState()) `<br>实现调用 ` blockEntity.getBlockState() `<br>[调用处 AdvancedComparatorBlockEntityRender.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorBlockEntityRender.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AdvancedComparatorBlockEntityRender.java#L52) |

## AutoEnchantingTableBlockEntityRenderer

` public class AutoEnchantingTableBlockEntityRenderer implements BlockEntityRenderer<AutoEnchantingTableBlockEntity>, ModelSelectionRenderer<AutoEnchantingTableBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L37)

类型注解 ` @OnlyIn(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AutoEnchantingTableBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 实现调用 ` context.bakeLayer(ModelLayers.BOOK) `<br>实现调用 ` context.getItemRenderer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L53) |
| ` @Override public void render( AutoEnchantingTableBlockEntity be, float partialTick, PoseStack pose, MultiBufferSource ms, int packedLight, int packedOverlay ) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getItemHandler().getStackInSlot(0) `<br>实现调用 ` be.getItemHandler() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L59) |
| ` @Override public void collectSelectionParts(AutoEnchantingTableBlockEntity be, float partialTick, List<SelectionPart> output) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` this.bookPose(be, partialTick) `<br>实现调用 ` this.applyBookPose(pose, book.time(), book.open(), book.time() * 0.02F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L113) |
| ` @Override public AABB getRenderBoundingBox(AutoEnchantingTableBlockEntity blockEntity) ` | 末尾返回 ` new AABB( pos.getX(), pos.getY(), pos.getZ(), pos.getX() + 1.0, pos.getY() + 2, pos.getZ() + 1.0 ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/AutoEnchantingTableBlockEntityRenderer.java#L233) |

## BaseShowItemRenderer

` public abstract class BaseShowItemRenderer<B extends BlockEntity> implements BlockEntityRenderer<B> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseShowItemRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseShowItemRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.itemRenderer = context.getItemRenderer() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseShowItemRenderer.java#L31) |
| ` @Override public void render( B be, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` this.getDisplayItemStack(be) `<br>实现调用 ` this.getSeed(be) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseShowItemRenderer.java#L54) |
| ` public static void renderItem( Level level, @Nullable ItemStack stack, float x, float y, float z, ItemRenderer renderer, PoseStack pose, MultiBufferSource buffer, int packedLight, float partialTick, int seed ) ` | 实现调用 ` stack.isEmpty() `<br>实现调用 ` RandomSource.create(Item.getId(stack.getItem()) + stack.getDamageValue()) `<br>实现调用 ` Item.getId(stack.getItem()) `<br>[调用处 FittedItemRenderer.getGroundItemBottom](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L101) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BaseShowItemRenderer.java#L78) |

## BatchCraftingBERenderer

` public class BatchCraftingBERenderer extends BaseShowItemRenderer<BaseBatchCraftingBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BatchCraftingBERenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BatchCraftingBERenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BatchCraftingBERenderer.java#L10) |

## BigRedButtonBlockEntityRenderer

` public class BigRedButtonBlockEntityRenderer implements BlockEntityRenderer<BigRedButtonBlockEntity>, ModelSelectionRenderer<BigRedButtonBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BigRedButtonBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L21) |
| ` @Override public void render( BigRedButtonBlockEntity button, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight, int packedOverlay ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L24) |
| ` @Override public void collectSelectionModels(BigRedButtonBlockEntity button, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0.5, 0.5, 0.5) `<br>实现调用 ` button.getBlockState().getValue(BigRedButtonBlock.FACING) `<br>[调用处 BigRedButtonBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/BigRedButtonBlockEntityRenderer.java#L36) |

## CelestialForgingAnvilBlockEntityRenderer

` public class CelestialForgingAnvilBlockEntityRenderer implements BlockEntityRenderer<CelestialForgingAnvilBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L53)

类型注解 ` @SuppressWarnings("checkstyle:VariableDeclarationUsageDistance") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModelResourceLocation R1 ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of("block/celestial_forging_anvil_ring_1")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L55) |
| ` public static final ModelResourceLocation R2 ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of("block/celestial_forging_anvil_ring_2")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L56) |
| ` public static final ModelResourceLocation R3 ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of("block/celestial_forging_anvil_ring_3")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L57) |
| ` public static final ModelResourceLocation R4 ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of("block/celestial_forging_anvil_ring_4")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L58) |
| ` public static final ModelResourceLocation R5 ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of("block/celestial_forging_anvil_ring_5")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L59) |
| ` public static final ModelResourceLocation R6 ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of("block/celestial_forging_anvil_ring_6")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L60) |
| ` public static final ModelResourceLocation R1_EXCAVATOR ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_1_excavator")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L63) |
| ` public static final ModelResourceLocation R1_EXCAVATOR_OFF ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_1_excavator_off")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L65) |
| ` public static final ModelResourceLocation R1_EXCTRACTOR ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_1_exctractor")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L69) |
| ` public static final ModelResourceLocation R1_ECO_STATION ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_1_eco_station")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L73) |
| ` public static final ModelResourceLocation R1_TEMPLE ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_1_temple")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L77) |
| ` public static final ModelResourceLocation R2_EXCTRACTOR ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_2_exctractor")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L81) |
| ` public static final ModelResourceLocation R4_COLLIDER ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_collider")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L85) |
| ` public static final ModelResourceLocation R2_DYSON_SPHERE ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_2_dyson_sphere")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L89) |
| ` public static final ModelResourceLocation R4_DYSON_SPHERE ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_dyson_sphere")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L91) |
| ` public static final ModelResourceLocation R5_DYSON_SPHERE ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_5_dyson_sphere")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L93) |
| ` public static final ModelResourceLocation R4_COIL_FIX ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_coil_fix")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L97) |
| ` public static final ModelResourceLocation R4_COIL_RING ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_coil_ring")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L99) |
| ` public static final ModelResourceLocation R4_PENROSE_SPHERE_FIX ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_penrose_sphere_fix")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L103) |
| ` public static final ModelResourceLocation R4_PENROSE_SPHERE_LASER ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_penrose_sphere_laser")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L105) |
| ` public static final ModelResourceLocation R4_PENROSE_SPHERE_LASER_OFF ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_penrose_sphere_laser_off")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L107) |
| ` public static final ModelResourceLocation R4_MATTER_DECOMPRESSOR_FIX ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_matter_decompressor_fix")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L111) |
| ` public static final ModelResourceLocation R4_MATTER_DECOMPRESSOR_RING ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_matter_decompressor_ring")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L113) |
| ` public static final ModelResourceLocation R4_WORMHOLE_STABILIZER ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_4_wormhole_stabilizer")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L117) |
| ` public static final ModelResourceLocation R5_STELLAR_EVOLUTION_ACCELERATOR ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_5_stellar_evolution_accelerator")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L121) |
| ` public static final ModelResourceLocation R6_STELLAR_EVOLUTION_ACCELERATOR ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of( "block/celestial_forging_anvil_ring_6_stellar_evolution_accelerator")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L123) |
| ` public CelestialForgingAnvilBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.blockRenderer = context.getBlockRenderDispatcher() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L148) |
| ` @Override public void render( CelestialForgingAnvilBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource multiBufferSource, int packedLight, int packedOverlay ) ` | 执行 ` this.renderContents(blockEntity, partialTick, poseStack, multiBufferSource, packedOverlay, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L192) |
| ` public void renderHeadItem( CelestialForgingAnvilBlockEntity blockEntity, PoseStack poseStack, MultiBufferSource multiBufferSource, int packedOverlay ) ` | 执行 ` this.renderContents(blockEntity, 0.0f, poseStack, multiBufferSource, packedOverlay, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L204) |
| ` public void renderItemBody( CelestialForgingAnvilBlockEntity blockEntity, PoseStack poseStack, MultiBufferSource buffer, int packedOverlay ) ` | 实现调用 ` blockEntity.getCelestialBodyData() `<br>分支 ` (body instanceof StarData star) ` 内调用 ` Minecraft.getInstance().getModelManager().getModel(getStarModel(star)) `<br>分支 ` (body instanceof StarData star) ` 内调用 ` Minecraft.getInstance().getModelManager() `<br>[调用处 CelestialForgingAnvilBlockEntityRenderer.renderItemBody](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L219) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L213) |
| ` @Override public boolean shouldRenderOffScreen(CelestialForgingAnvilBlockEntity blockEntity) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L1776) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` 256 `<br>[调用处 CelestialForgingAnvilBlockEntityRenderer.shouldRender](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L1790) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L1781) |
| ` @Override public boolean shouldRender(CelestialForgingAnvilBlockEntity blockEntity, Vec3 cameraPos) ` | 末尾返回 ` Vec3.atCenterOf(blockEntity.getBlockPos()) .multiply(1.0, 0.0, 1.0) .closerThan(cameraPos.multiply(1.0, 0.0, 1.0), this.getViewDistance()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L1786) |
| ` @Override public AABB getRenderBoundingBox(CelestialForgingAnvilBlockEntity blockEntity) ` | 末尾返回 ` aabb.setMaxY(aabb.maxY + maxHeight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilBlockEntityRenderer.java#L1793) |

## CelestialForgingAnvilFluidInterfaceBlockEntityRenderer

` public class CelestialForgingAnvilFluidInterfaceBlockEntityRenderer implements BlockEntityRenderer<CelestialForgingAnvilFluidInterfaceBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilFluidInterfaceBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L33) |
| ` @Override public AABB getRenderBoundingBox(CelestialForgingAnvilFluidInterfaceBlockEntity blockEntity) ` | 末尾返回 ` new AABB(blockEntity.getBlockPos()).expandTowards(0, 5 / 16d, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L36) |
| ` @Override public void render( CelestialForgingAnvilFluidInterfaceBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int light, int overlay ) ` | 实现调用 ` Arrays.stream(blockEntity.getTanks()) .map(FluidTank::getFluid) .filter(fluid -> !fluid.isEmpty()) `<br>实现调用 ` Arrays.stream(blockEntity.getTanks()) .map(FluidTank::getFluid) `<br>实现调用 ` Arrays.stream(blockEntity.getTanks()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CelestialForgingAnvilFluidInterfaceBlockEntityRenderer.java#L41) |

## ChargeCollectorRenderer

` public class ChargeCollectorRenderer extends PowerProducerRenderer<ChargeCollectorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModelResourceLocation MODEL ` | 初值 ` ModelResourceLocation.standalone( AnvilCraft.of("block/charge_collector_head") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java#L9) |
| ` public ChargeCollectorRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargeCollectorRenderer.java#L13) |

## ChargerBlockRenderer

` public class ChargerBlockRenderer extends BaseShowItemRenderer<ChargerBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargerBlockRenderer.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChargerBlockRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargerBlockRenderer.java#L15) |
| ` @Override public void render( ChargerBlockEntity be, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` this.getDisplayItemStack(be) `<br>实现调用 ` stack.isEmpty() `<br>实现调用 ` poseStack.pushPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ChargerBlockRenderer.java#L30) |

## ConfinementChamberRenderer

` public class ConfinementChamberRenderer extends BaseShowItemRenderer<ConfinementChamberBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ConfinementChamberRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConfinementChamberRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ConfinementChamberRenderer.java#L10) |

## ControlValveBlockEntityRenderer

` public class ControlValveBlockEntityRenderer implements BlockEntityRenderer<ControlValveBlockEntity>, ModelSelectionRenderer<ControlValveBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L27)

控制阀的方块实体渲染器：把手轮模型渲染在控制阀 朝向玩家一侧 的中心， 并随流速设置旋转。并渲染内部过滤的流体。在另外三面渲染内部过滤的流体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public ControlValveBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L41) |
| ` @SuppressWarnings("checkstyle:VariableDeclarationUsageDistance") @Override public void render( ControlValveBlockEntity be, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` be.getDisplayedFilterFluid(Util.getMillis()) `<br>实现调用 ` Util.getMillis() `<br>实现调用 ` filterFluid.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L45) |
| ` @Override public void collectSelectionModels(ControlValveBlockEntity be, float partialTick, PoseStack poseStack, ModelConsumer consumer) ` | 实现调用 ` be.getFacing() `<br>实现调用 ` be.getMaxRate() `<br>实现调用 ` FluidPipeNetwork.maxSpeed() `<br>[调用处 ControlValveBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L72) |

## CorruptedBeaconRenderer

` public class CorruptedBeaconRenderer implements BlockEntityRenderer<CorruptedBeaconBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public CorruptedBeaconRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` this.blockRenderer = context.getBlockRenderDispatcher() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L40) |
| ` @Override public void render( CorruptedBeaconBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` blockEntity.getLevel() `<br>实现调用 ` this.blockRenderer.getBlockModel(this.defaultLightState) `<br>实现调用 ` poseStack.pushPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L45) |
| ` public static void renderBeam( VertexConsumer vc, PoseStack.Pose pose, float centerX, float baseY, float centerZ, float length ) ` | 执行 ` renderBeam(vc, pose, centerX, baseY, centerZ, length, 1.0f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L107) |
| ` public static void renderBeam( VertexConsumer vc, PoseStack.Pose pose, float centerX, float baseY, float centerZ, float length, float glowSpreadScale ) ` | 实现调用 ` renderBeamGlow(vc, pose, centerX, baseY, centerZ, length, glowSpreadScale) `<br>[调用处 WeaponBeamRenderer.renderCorruptedBeam](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L179) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L118) |
| ` @Override public boolean shouldRenderOffScreen(CorruptedBeaconBlockEntity blockEntity) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L188) |
| ` @Override public int getViewDistance() ` | 末尾返回 ` 256 `<br>[调用处 CorruptedBeaconRenderer.shouldRender](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L202) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L193) |
| ` @Override public boolean shouldRender(CorruptedBeaconBlockEntity blockEntity, Vec3 cameraPos) ` | 末尾返回 ` Vec3.atCenterOf(blockEntity.getBlockPos()) .multiply(1.0, 0.0, 1.0) .closerThan(cameraPos.multiply(1.0, 0.0, 1.0), this.getViewDistance()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L198) |
| ` @Override public AABB getRenderBoundingBox(CorruptedBeaconBlockEntity blockEntity) ` | 末尾返回 ` new AABB(pos.getX(), pos.getY(), pos.getZ(), pos.getX() + 1, topY, pos.getZ() + 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L205) |

## CreativeCrateBlockEntityRenderer

` public class CreativeCrateBlockEntityRenderer implements BlockEntityRenderer<CreativeCrateBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateBlockEntityRenderer.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeCrateBlockEntityRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateBlockEntityRenderer.java#L15) |
| ` @Override public void render( CreativeCrateBlockEntity crate, float tickDelta, PoseStack poseStack, MultiBufferSource vertexConsumers, int light, int overlay) ` | 实现调用 ` crate.getItemStackHandler() `<br>实现调用 ` itemStackHandler.getStackInSlot(0) `<br>实现调用 ` stackInSlot.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateBlockEntityRenderer.java#L18) |

## CreativeFluidTankBlockEntityRenderer

` public class CreativeFluidTankBlockEntityRenderer implements BlockEntityRenderer<CreativeFluidTankBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankBlockEntityRenderer.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeFluidTankBlockEntityRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankBlockEntityRenderer.java#L27) |
| ` @Override public void render( CreativeFluidTankBlockEntity tank, float tickDelta, PoseStack ms, MultiBufferSource vertexConsumers, int light, int overlay) ` | 实现调用 ` tank.getFluidHandler().getFluidInTank(0) `<br>实现调用 ` tank.getFluidHandler() `<br>实现调用 ` fluidStack.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankBlockEntityRenderer.java#L30) |

## CreativeGeneratorRenderer

` public class CreativeGeneratorRenderer extends PowerProducerRenderer<CreativeGeneratorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeGeneratorRenderer.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModelResourceLocation MODEL ` | 初值 ` ModelResourceLocation.standalone( AnvilCraft.of("block/creative_generator_head") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeGeneratorRenderer.java#L9) |
| ` public CreativeGeneratorRenderer(BlockEntityRendererProvider.Context context) ` | 创造发电机渲染<br>当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeGeneratorRenderer.java#L16) |

## CrushingTableBlockEntityRenderer

` public class CrushingTableBlockEntityRenderer extends ProcessingItemStackRenderer<CrushingTableBlockEntity> implements ModelSelectionRenderer<CrushingTableBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L19)

粉碎台渲染：方块模型渲染主体与边框，实体渲染左右磨轮并带动画旋转。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CrushingTableBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L30) |
| ` @Override public void render( CrushingTableBlockEntity table, float partialTick, PoseStack pose, MultiBufferSource source, int light, int overlay ) ` | 实现调用 ` super.render(table, partialTick, pose, source, light, overlay) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L39) |
| ` @Override public void collectSelectionModels(CrushingTableBlockEntity table, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` this.easeOutQuint(table.getSpinProgress(partialTick)) `<br>实现调用 ` table.getSpinProgress(partialTick) `<br>实现调用 ` this.visitWheel(WHEEL_LEFT, WHEEL_LEFT_CENTER, rotation, pose, consumer) `<br>[调用处 CrushingTableBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CrushingTableBlockEntityRenderer.java#L56) |

## DischargerBlockRenderer

` public class DischargerBlockRenderer extends BaseShowItemRenderer<DischargerBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DischargerBlockRenderer.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DischargerBlockRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DischargerBlockRenderer.java#L15) |
| ` @Override public void render( DischargerBlockEntity be, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` this.getDisplayItemStack(be) `<br>实现调用 ` stack.isEmpty() `<br>实现调用 ` poseStack.pushPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DischargerBlockRenderer.java#L29) |

## DrainBlockEntityRenderer

` public class DrainBlockEntityRenderer implements BlockEntityRenderer<DrainBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L21)

排水口渲染器：像储罐一样渲染内部流体；向下排水时，从排水口下方一直渲染一条 流动水柱 到当前排水目标层（DrainBlockEntity#getColumnBottomY()），仅为视觉效果、非真实方块， 避免流动水扩散与无限水。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("unused") public DrainBlockEntityRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L25) |
| ` @Override public void render( DrainBlockEntity be, float partialTick, PoseStack ms, MultiBufferSource buffer, int light, int overlay ) ` | 实现调用 ` be.getTank().getFluid() `<br>实现调用 ` be.getTank() `<br>实现调用 ` fluid.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L29) |
| ` @Override public AABB getRenderBoundingBox(DrainBlockEntity be) ` | 扩大渲染包围盒以包含向下的水柱，否则水柱在方块本体 AABB 之外会被视锥剔除、看不见。<br>` (bottomY == Integer.MIN_VALUE \|\| bottomY >= pos.getY()) ` 成立时提前返回 ` self `<br>末尾返回 ` self.expandTowards(0, bottomY - pos.getY(), 0) `<br>[调用处 DrainBlockEntityRenderer.shouldRender](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L100) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L78) |
| ` @Override public boolean shouldRenderOffScreen(DrainBlockEntity be) ` | 长水柱可能横跨多个渲染区段，不能只按排水口本体所在区段做视锥剔除。<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L91) |
| ` @Override public boolean shouldRender(DrainBlockEntity be, Vec3 cameraPos) ` | 按摄像机到整根水柱的最近距离判断，而不是只计算到排水口方块中心的距离。<br>末尾返回 ` this.getRenderBoundingBox(be).distanceToSqr(cameraPos) <= viewDistance * viewDistance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L97) |

## ExpCollectorBlockEntityRenderer

` public class ExpCollectorBlockEntityRenderer implements BlockEntityRenderer<ExpCollectorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ExpCollectorBlockEntityRenderer.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ExpCollectorBlockEntityRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ExpCollectorBlockEntityRenderer.java#L13) |
| ` @Override public void render( ExpCollectorBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource bufferSource, int packedLight, int packedOverlay ) ` | 实现调用 ` blockEntity.getFluidHandler() `<br>实现调用 ` fluidHandler.getFluidInTank(0) `<br>实现调用 ` fluidStack.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ExpCollectorBlockEntityRenderer.java#L16) |

## FeCollectorRenderer

` public class FeCollectorRenderer implements BlockEntityRenderer<FeCollectorBlockEntity>, ModelSelectionRenderer<FeCollectorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModelResourceLocation MODEL ` | 初值 ` ModelResourceLocation.standalone( AnvilCraft.of("block/fe_collector_head") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L18) |
| ` @SuppressWarnings("unused") public FeCollectorRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L22) |
| ` @Override public void render( FeCollectorBlockEntity blockEntity, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` buffer.getBuffer(RenderType.cutout()) `<br>实现调用 ` RenderType.cutout() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L26) |
| ` @Override public void collectSelectionModels(FeCollectorBlockEntity blockEntity, float partialTick, PoseStack poseStack, ModelConsumer consumer) ` | 实现调用 ` poseStack.pushPose() `<br>实现调用 ` blockEntity.getRotation() `<br>实现调用 ` Math.log(blockEntity.getServerPower() + 1) `<br>[调用处 FeCollectorRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FeCollectorRenderer.java#L43) |

## FishTankBlockEntityRenderer

` public class FishTankBlockEntityRenderer implements BlockEntityRenderer<FishTankBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankBlockEntityRenderer.java#L45)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final float FISH_SCALE ` | 初值 ` 0.5F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankBlockEntityRenderer.java#L46) |
| ` public FishTankBlockEntityRenderer(BlockEntityRendererProvider.Context ctx) ` | 执行 ` this.dispatcher = ctx.getBlockRenderDispatcher() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankBlockEntityRenderer.java#L54) |
| ` @Override public AABB getRenderBoundingBox(FishTankBlockEntity tank) ` | 末尾返回 ` new AABB(tank.getBlockPos()).expandTowards(0.0D, 2.0D, 0.0D) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankBlockEntityRenderer.java#L58) |
| ` @Override public void render( FishTankBlockEntity tank, float partialTick, PoseStack pose, MultiBufferSource source, int light, int overlay ) ` | 实现调用 ` tank.getFluidHandler() `<br>实现调用 ` fluid.isEmpty() `<br>分支 ` (!fluid.isEmpty()) ` 内调用 ` Math.min((float) fluid.getFluidAmount() / fluid.getCapacity(), 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankBlockEntityRenderer.java#L73) |

## FishTankRenderHooks

` public final class FishTankRenderHooks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L13)

鱼缸客户端渲染扩展。仅在客户端渲染线程调用。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(Handler handler) ` | 执行 ` HANDLERS.add(handler) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L19) |
| ` public static boolean showVanillaFire(FishTankBlockEntity tank) ` | 末尾返回 ` true `<br>[调用处 FishTankBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankBlockEntityRenderer.java#L119) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L23) |
| ` public static void afterRender( FishTankBlockEntity tank, float partialTick, PoseStack poseStack, MultiBufferSource buffers, int packedLight, int packedOverlay ) ` | 实现调用 ` handler.afterRender(tank, partialTick, poseStack, buffers, packedLight, packedOverlay) `<br>[调用处 FishTankBlockEntityRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankBlockEntityRenderer.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L30) |

## FishTankRenderHooks.Handler

` public interface Handler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean showVanillaFire(FishTankBlockEntity tank) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L44) |
| ` default void afterRender( FishTankBlockEntity tank, float partialTick, PoseStack poseStack, MultiBufferSource buffers, int packedLight, int packedOverlay ) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderHooks.java#L48) |

## FluidTankBlockEntityRenderer

` public class FluidTankBlockEntityRenderer implements BlockEntityRenderer<FluidTankBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FluidTankBlockEntityRenderer.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankBlockEntityRenderer(BlockEntityRendererProvider.Context ignore) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FluidTankBlockEntityRenderer.java#L29) |
| ` @Override public void render( FluidTankBlockEntity tank, float tickDelta, PoseStack ms, MultiBufferSource vertexConsumers, int light, int overlay) ` | 实现调用 ` tank.getFluidHandler() `<br>实现调用 ` handler.getFluidInTank(0) `<br>实现调用 ` fluid.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FluidTankBlockEntityRenderer.java#L32) |

## GlassPipeBlockEntityRenderer

` public class GlassPipeBlockEntityRenderer implements BlockEntityRenderer<GlassPipeBlockEntity>, ModelSelectionRenderer<GlassPipeBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GlassPipeBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 构造 ` GlassPipeBlockEntityRenderer ` 实例。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L15) |
| ` @Override public void collectSelectionModels(GlassPipeBlockEntity entity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 执行 ` this.pipeCheckValveRenderer.collectSelectionModels(entity, partialTick, pose, consumer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L20) |
| ` @Override public void render( GlassPipeBlockEntity be, float partialTick, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` this.glassPipeFluidRenderer.render(be, partialTick, poseStack, buffer, packedLight, packedOverlay) `<br>实现调用 ` this.pipeCheckValveRenderer.render(be, partialTick, poseStack, buffer, packedLight, packedOverlay) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L25) |
