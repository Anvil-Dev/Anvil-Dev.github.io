# dev.dubhe.anvilcraft.client.renderer.entity.model



## CauldronOutletModel

` public class CauldronOutletModel `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CauldronOutletModel(ModelPart root) ` | 执行 ` this.outlet = root.getChild("outlet") `<br>[调用处 CauldronOutletRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L17) |
| ` public static final ModelLayerLocation LAYER_LOCATION ` | 初值 ` new ModelLayerLocation( ResourceLocation.fromNamespaceAndPath( "anvilcraft", "cauldron_outlet" ), "main" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L21) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(meshdefinition, 16, 16) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L28) |
| ` public void renderToBuffer(PoseStack poseStack, VertexConsumer vertexConsumer, int packedLight, int packedOverlay, int color) ` | 执行 ` this.outlet.render(poseStack, vertexConsumer, packedLight, packedOverlay, color) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L56) |

## EquipmentModels

` public final class EquipmentModels `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentModels.java#L22)

从 models/equipment 下的 Blockbench 模型导出的装备层。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static HumanoidModel<?> get(ItemStack stack, HumanoidModel<?> original) ` | 末尾返回 ` model == null ? original : model `<br>[调用处 AnvilCraftClient.ItemExtensionImpl.getHumanoidArmorModel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentModels.java#L28) |
| ` public static void register(EntityRenderersEvent.RegisterLayerDefinitions event) ` | 实现调用 ` event.registerLayerDefinition(layer("breathing_helmet"), EquipmentModels::breathingHelmet) `<br>实现调用 ` layer("breathing_helmet") `<br>实现调用 ` event.registerLayerDefinition(layer("ionocraft_backpack"), EquipmentModels::ionocraftBackpack) `<br>[调用处 ModModelLayers.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/init/ModModelLayers.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentModels.java#L37) |
| ` public static void bake(EntityRenderersEvent.AddLayers event) ` | 实现调用 ` MODELS.put("breathing_helmet", new HumanoidModel<>(event.getContext().bakeLayer(layer("breathing_helmet")))) `<br>实现调用 ` event.getContext().bakeLayer(layer("breathing_helmet")) `<br>实现调用 ` event.getContext() `<br>[调用处 ModModelLayers.createModel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/init/ModModelLayers.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentModels.java#L48) |
