# dev.dubhe.anvilcraft.client.renderer.blockentity（TradingStationBlockEntityRenderer 至 WipBlockEntityRenderer）



## TradingStationBlockEntityRenderer

` public class TradingStationBlockEntityRenderer implements BlockEntityRenderer<TradingStationBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TradingStationBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L26) |
| ` @Override public void render( TradingStationBlockEntity be, float partialTick, PoseStack pose, MultiBufferSource bufferSource, int packedLight, int packedOverlay ) ` | 实现调用 ` be.getFilters().getItem(i) `<br>实现调用 ` be.getFilters() `<br>实现调用 ` stack.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L29) |
| ` @Override public AABB getRenderBoundingBox(TradingStationBlockEntity blockEntity) ` | 末尾返回 ` aabb ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/TradingStationBlockEntityRenderer.java#L122) |

## UnpackingTableBlockEntityRenderer

` public class UnpackingTableBlockEntityRenderer extends ProcessingItemStackRenderer<UnpackingTableBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/UnpackingTableBlockEntityRenderer.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UnpackingTableBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 执行 ` super(context) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/UnpackingTableBlockEntityRenderer.java#L8) |

## VoidEnergyCollectorRenderer

` public class VoidEnergyCollectorRenderer extends PowerProducerRenderer<VoidEnergyCollectorBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/VoidEnergyCollectorRenderer.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModelResourceLocation MODEL ` | 初值 ` ModelResourceLocation.standalone( AnvilCraft.of("block/void_energy_collector_head") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/VoidEnergyCollectorRenderer.java#L9) |
| ` public VoidEnergyCollectorRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/VoidEnergyCollectorRenderer.java#L13) |

## WipBlockEntityRenderer

` public class WipBlockEntityRenderer implements BlockEntityRenderer<WipBlockEntity>, ModelSelectionRenderer<WipBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WipBlockEntityRenderer(BlockEntityRendererProvider.Context context) ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L27) |
| ` @Override public void render( WipBlockEntity wipBlockEntity, float v, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` wipBlockEntity.getLevel() `<br>实现调用 ` poseStack.pushPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L30) |
| ` @Override public void collectSelectionModels(WipBlockEntity entity, float partialTick, PoseStack pose, ModelConsumer consumer) ` | 实现调用 ` entity.getLevel() `<br>分支 ` (level != null) ` 内调用 ` consumer.accept(this.model(entity, level), pose) `<br>分支 ` (level != null) ` 内调用 ` this.model(entity, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L74) |
