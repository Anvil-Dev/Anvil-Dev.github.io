# dev.dubhe.anvilcraft.client.renderer.entity.model



## CauldronOutletModel

` public class CauldronOutletModel extends Model<Unit> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CauldronOutletModel(ModelPart root) ` | 实现调用 ` super(root, RenderTypes::entityCutout) `<br>实现调用 ` root.getChild("outlet") `<br>[调用处 CauldronOutletRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/CauldronOutletRenderer.java#L32) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L18) |
| ` public static final ModelLayerLocation LAYER_LOCATION ` | 初值 ` new ModelLayerLocation( AnvilCraft.of("cauldron_outlet"), "main" ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L23) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(meshdefinition, 16, 16) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/CauldronOutletModel.java#L28) |

## EquipmentBootsModel

` public class EquipmentBootsModel extends HumanoidModel<HumanoidRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentBootsModel.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EquipmentBootsModel(ModelPart root) ` | 执行 ` super(root) `<br>[调用处 ModModelLayers.getEquipmentBootsModel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModModelLayers.java#L57) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentBootsModel.java#L15) |
| ` @Override public void setupAnim(HumanoidRenderState state) ` | 实现调用 ` super.setupAnim(state) `<br>分支 ` (state instanceof ArmorStandRenderState stand) ` 内调用 ` stand.rightLegPose.x() `<br>分支 ` (state instanceof ArmorStandRenderState stand) ` 内调用 ` stand.rightLegPose.y() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentBootsModel.java#L19) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(mesh, 64, 64) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentBootsModel.java#L32) |

## EquipmentChestModel

` public class EquipmentChestModel extends HumanoidModel<HumanoidRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentChestModel.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EquipmentChestModel(ModelPart root) ` | 执行 ` super(root) `<br>[调用处 ModModelLayers.getEquipmentChestModel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModModelLayers.java#L82) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentChestModel.java#L15) |
| ` @Override public void setupAnim(HumanoidRenderState state) ` | 实现调用 ` super.setupAnim(state) `<br>分支 ` (state instanceof ArmorStandRenderState stand) ` 内调用 ` stand.bodyPose.x() `<br>分支 ` (state instanceof ArmorStandRenderState stand) ` 内调用 ` stand.bodyPose.y() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentChestModel.java#L19) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(mesh, 64, 64) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentChestModel.java#L35) |

## EquipmentHelmetModel

` public class EquipmentHelmetModel extends HumanoidModel<HumanoidRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentHelmetModel.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EquipmentHelmetModel(ModelPart root) ` | 执行 ` super(root) `<br>[调用处 ModModelLayers.getEquipmentHelmetModel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModModelLayers.java#L48) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentHelmetModel.java#L15) |
| ` @Override public void setupAnim(HumanoidRenderState state) ` | 实现调用 ` super.setupAnim(state) `<br>分支 ` (state instanceof ArmorStandRenderState stand) ` 内调用 ` stand.headPose.x() `<br>分支 ` (state instanceof ArmorStandRenderState stand) ` 内调用 ` stand.headPose.y() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentHelmetModel.java#L19) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(mesh, 64, 64) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentHelmetModel.java#L29) |

## EquipmentLeggingsModel

` public class EquipmentLeggingsModel extends HumanoidModel<HumanoidRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentLeggingsModel.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EquipmentLeggingsModel(ModelPart root) ` | 执行 ` super(root) `<br>[调用处 ModModelLayers.getEquipmentLeggingsModel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModModelLayers.java#L69) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentLeggingsModel.java#L15) |
| ` @Override public void setupAnim(HumanoidRenderState state) ` | 实现调用 ` super.setupAnim(state) `<br>分支 ` (state instanceof ArmorStandRenderState stand) ` 内调用 ` stand.bodyPose.x() `<br>分支 ` (state instanceof ArmorStandRenderState stand) ` 内调用 ` stand.bodyPose.y() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentLeggingsModel.java#L19) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(mesh, 64, 64) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/EquipmentLeggingsModel.java#L35) |

## IonocraftBackpackModel

` public class IonocraftBackpackModel extends HumanoidModel<HumanoidRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/IonocraftBackpackModel.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IonocraftBackpackModel(ModelPart root) ` | 实现调用 ` super(root) `<br>实现调用 ` root.getChild("body") `<br>[调用处 ModModelLayers.createModel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModModelLayers.java#L132) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/IonocraftBackpackModel.java#L18) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(meshdefinition, 64, 32) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/IonocraftBackpackModel.java#L23) |
| ` public ModelPart getRoot() ` | 末尾返回 ` this.root `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/IonocraftBackpackModel.java#L14) |

## IonocraftModel

` public class IonocraftModel extends EntityModel<IonocraftRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/IonocraftModel.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IonocraftModel(ModelPart root) ` | 执行 ` super(root) `<br>[调用处 IonocraftRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/IonocraftRenderer.java#L22) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/IonocraftModel.java#L14) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(meshDefinition, 32, 32) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/IonocraftModel.java#L18) |
| ` @Override public void setupAnim(IonocraftRenderState state) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/IonocraftModel.java#L55) |

## MagnetizedNodeModel

` public class MagnetizedNodeModel extends Model<MagnetizedNodeRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/MagnetizedNodeModel.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final AnimationDefinition ROTATING ` | 由 ` AnimationDefinition.Builder.withLength(6F).looping() .addAnimation( "rotating", new AnimationChannel(AnimationChannel.Targets.ROTATION, new Keyframe(0F, KeyframeAnimations.degreeVec(0F, 0F, 0F), AnimationChannel.Interpolations.LINEAR), new Keyframe(2F, KeyframeAnimations.degreeVec(0F, 360F, 0F), AnimationChannel.Interpolations.LINEAR), new Keyframe(4F, KeyframeAnimations.degreeVec(0F, 720F, 0F), AnimationChannel.Interpolations.LINEAR), new Keyframe(6F, KeyframeAnimations.degreeVec(0F, 1080F, 0F), AnimationChannel.Interpolations.LINEAR) ) ) .addAnimation( "main", new AnimationChannel(AnimationChannel.Targets.ROTATION, new Keyframe(0F, KeyframeAnimations.degreeVec(0F, 0F, 0F), AnimationChannel.Interpolations.LINEAR), new Keyframe(3F, KeyframeAnimations.degreeVec(0F, -360F, 0F), AnimationChannel.Interpolations.LINEAR), new Keyframe(6F, KeyframeAnimations.degreeVec(0F, -720F, 0F), AnimationChannel.Interpolations.LINEAR) ) ) .build ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/MagnetizedNodeModel.java#L20) |
| ` public MagnetizedNodeModel(ModelPart root) ` | 实现调用 ` super(root, RenderTypes::entityTranslucent) `<br>实现调用 ` MagnetizedNodeModel.ROTATING.bake(root) `<br>[调用处 MagnetizedNodeEntityRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/MagnetizedNodeEntityRenderer.java#L23) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/MagnetizedNodeModel.java#L48) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(meshdefinition, 16, 16) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/MagnetizedNodeModel.java#L53) |
| ` @Override public void setupAnim(MagnetizedNodeRenderState state) ` | 实现调用 ` super.setupAnim(state) `<br>实现调用 ` this.rotating.apply(state.getRotation(), state.ageInTicks) `<br>实现调用 ` state.getRotation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/MagnetizedNodeModel.java#L88) |

## ThrownHeavyHalberdModel

` public class ThrownHeavyHalberdModel extends Model<Unit> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/ThrownHeavyHalberdModel.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownHeavyHalberdModel(ModelPart root) ` | 执行 ` super(root, RenderTypes::entitySolid) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/ThrownHeavyHalberdModel.java#L16) |
| ` public static LayerDefinition createBodyLayer() ` | 末尾返回 ` LayerDefinition.create(meshdefinition, 32, 32) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/model/ThrownHeavyHalberdModel.java#L20) |
