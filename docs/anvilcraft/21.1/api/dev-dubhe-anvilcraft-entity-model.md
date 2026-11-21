# dev.dubhe.anvilcraft.entity.model



## IonocraftModel

` public class IonocraftModel<T extends Entity> extends EntityModel<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/IonocraftModel.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IonocraftModel(ModelPart root) ` | 执行 ` this.modelPart = root.getChild("bb_main") `<br>[调用处 IonocraftRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L21) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/IonocraftModel.java#L18) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(meshDefinition, 32, 32) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/IonocraftModel.java#L22) |
| ` @Override public void setupAnim(Entity entity, float limbSwing, float limbSwingAmount, float ageInTicks, float netHeadYaw, float headPitch) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/IonocraftModel.java#L59) |
| ` @Override public void renderToBuffer(PoseStack poseStack, VertexConsumer buffer, int packedLight, int packedOverlay, int color) ` | 执行 ` this.modelPart.render(poseStack, buffer, packedLight, packedOverlay, color) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/IonocraftModel.java#L63) |

## MagnetizedNodeModel

` public class MagnetizedNodeModel extends HierarchicalModel<MagnetizedNodeEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/MagnetizedNodeModel.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final AnimationDefinition ROTATING ` | 由 ` AnimationDefinition.Builder.withLength(6f).looping() .addAnimation("rotating", new AnimationChannel(AnimationChannel.Targets.ROTATION, new Keyframe(0f, KeyframeAnimations.degreeVec(0f, 0f, 0f), AnimationChannel.Interpolations.LINEAR), new Keyframe(2f, KeyframeAnimations.degreeVec(0f, 360f, 0f), AnimationChannel.Interpolations.LINEAR), new Keyframe(4f, KeyframeAnimations.degreeVec(0f, 720f, 0f), AnimationChannel.Interpolations.LINEAR), new Keyframe(6f, KeyframeAnimations.degreeVec(0f, 1080f, 0f), AnimationChannel.Interpolations.LINEAR))) .addAnimation("main", new AnimationChannel(AnimationChannel.Targets.ROTATION, new Keyframe(0f, KeyframeAnimations.degreeVec(0f, 0f, 0f), AnimationChannel.Interpolations.LINEAR), new Keyframe(3f, KeyframeAnimations.degreeVec(0f, -360f, 0f), AnimationChannel.Interpolations.LINEAR), new Keyframe(6f, KeyframeAnimations.degreeVec(0f, -720f, 0f), AnimationChannel.Interpolations.LINEAR))).build ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/MagnetizedNodeModel.java#L19) |
| ` public MagnetizedNodeModel(ModelPart root) ` | 实现调用 ` super(RenderType::entityTranslucent) `<br>[调用处 MagnetizedNodeEntityRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L22) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/MagnetizedNodeModel.java#L40) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(meshdefinition, 16, 16) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/MagnetizedNodeModel.java#L45) |
| ` @Override public void setupAnim( MagnetizedNodeEntity entity, float limbSwing, float limbSwingAmount, float ageInTicks, float netHeadYaw, float headPitch ) ` | 实现调用 ` this.root().getAllParts().forEach(ModelPart::resetPose) `<br>实现调用 ` this.root().getAllParts() `<br>实现调用 ` this.root() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/MagnetizedNodeModel.java#L80) |
| ` @Override public ModelPart root() ` | 末尾返回 ` this.root `<br>[调用处 MagnetizedNodeModel.setupAnim](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/MagnetizedNodeModel.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/model/MagnetizedNodeModel.java#L93) |
