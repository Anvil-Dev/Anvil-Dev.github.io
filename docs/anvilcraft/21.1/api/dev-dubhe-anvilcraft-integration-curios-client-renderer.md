# dev.dubhe.anvilcraft.integration.curios.client.renderer



## GogglesCurioRenderer

` public class GogglesCurioRenderer implements ICurioRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/renderer/GogglesCurioRenderer.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GogglesCurioRenderer() ` | 执行 ` this.model = new HumanoidModel<>(Minecraft.getInstance().getEntityModels().bakeLayer(ModModelLayers.GOGGLES)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/renderer/GogglesCurioRenderer.java#L22) |
| ` @Override public <T extends LivingEntity, M extends EntityModel<T>> void render( ItemStack stack, SlotContext slotContext, PoseStack matrixStack, RenderLayerParent<T, M> renderLayerParent, MultiBufferSource renderTypeBuffer, int light, float limbSwing, float limbSwingAmount, float partialTicks, float ageInTicks, float netHeadYaw, float headPitch ) ` | 实现调用 ` this.model.setupAnim(slotContext.entity(), limbSwing, limbSwingAmount, ageInTicks, netHeadYaw, headPitch) `<br>实现调用 ` slotContext.entity() `<br>实现调用 ` this.model.prepareMobModel(slotContext.entity(), limbSwing, limbSwingAmount, partialTicks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/renderer/GogglesCurioRenderer.java#L26) |
