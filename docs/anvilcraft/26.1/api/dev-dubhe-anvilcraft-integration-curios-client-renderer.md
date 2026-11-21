# dev.dubhe.anvilcraft.integration.curios.client.renderer



## GogglesCurioRenderer

` public class GogglesCurioRenderer implements ICurioRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/renderer/GogglesCurioRenderer.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModelLayerLocation LAYER ` | 初值 ` new ModelLayerLocation(AnvilCraft.of("goggles"), "goggles") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/renderer/GogglesCurioRenderer.java#L28) |
| ` public GogglesCurioRenderer() ` | 执行 ` this.model = new HumanoidModel<>(Minecraft.getInstance().getEntityModels().bakeLayer(GogglesCurioRenderer.LAYER)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/renderer/GogglesCurioRenderer.java#L32) |
| ` public static MeshDefinition mesh() ` | 末尾返回 ` mesh `<br>[调用处 CuriosClient.onLayerRegister](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/CuriosClient.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/renderer/GogglesCurioRenderer.java#L36) |
| ` @Override public <S extends LivingEntityRenderState, M extends EntityModel<? super S>> void render( ItemStack stack, SlotContext slotContext, PoseStack poseStack, SubmitNodeCollector submitNodeCollector, int packedLight, S renderState, RenderLayerParent<S, M> renderLayerParent, EntityRendererProvider.Context context, float rotationY, float rotationX ) ` | 实现调用 ` ICurioRenderer.setupHumanoidAnimations(this.model, renderState) `<br>实现调用 ` poseStack.pushPose() `<br>实现调用 ` poseStack.translate(this.model.head.x / 16.0, this.model.head.y / 16.0, this.model.head.z / 16.0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/client/renderer/GogglesCurioRenderer.java#L43) |
