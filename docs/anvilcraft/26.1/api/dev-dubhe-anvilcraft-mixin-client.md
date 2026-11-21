# dev.dubhe.anvilcraft.mixin.client



## ClientTextTooltipAccessor

` public interface ClientTextTooltipAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ClientTextTooltipAccessor.java#L8)

类型注解 ` @Mixin(ClientTextTooltip.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("text") FormattedCharSequence anvilcraft$getText() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ClientTextTooltipAccessor.java#L10) |

## HandbookCookingAccessor

` public interface HandbookCookingAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookCookingAccessor.java#L8)

类型注解 ` @Mixin(AbstractCookingRecipe.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("furnaceIcon") Item anvilcraft$furnaceIcon() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookCookingAccessor.java#L10) |

## HandbookLabelAccessor

` public interface HandbookLabelAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookLabelAccessor.java#L8)

类型注解 ` @Mixin(targets = "dev.anvilcraft.resource.ageratum.client.gui.GuideScreen$LabelEntry", remap = false) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("level") int anvilcraft$level() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookLabelAccessor.java#L10) |
| ` @Accessor("location") @Nullable Identifier anvilcraft$location() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookLabelAccessor.java#L13) |
| ` @Accessor("clickable") boolean anvilcraft$clickable() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookLabelAccessor.java#L16) |

## ItemLayerTransformInvoker

` public interface ItemLayerTransformInvoker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ItemLayerTransformInvoker.java#L8)

类型注解 ` @Mixin(ItemStackRenderState.LayerRenderState.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("applyTransform") void anvilcraft$applyTransform(PoseStack.Pose pose) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ItemLayerTransformInvoker.java#L10) |

## ItemStackRenderStateAccessor

` public interface ItemStackRenderStateAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ItemStackRenderStateAccessor.java#L7)

类型注解 ` @Mixin(ItemStackRenderState.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("layers") ItemStackRenderState.LayerRenderState[] anvilcraft$getLayers() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ItemStackRenderStateAccessor.java#L9) |

## LaserBloomCaptureMixin

` public abstract class LaserBloomCaptureMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/LaserBloomCaptureMixin.java#L14)

类型注解 ` @Mixin(CachedRenderingChunk.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LaserBloomCaptureMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/LaserBloomCaptureMixin.java#L14) |

## ModFluidBucketModelMixin

` public abstract class ModFluidBucketModelMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ModFluidBucketModelMixin.java#L20)

类型注解 ` @Mixin(DynamicFluidContainerModel.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModFluidBucketModelMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ModFluidBucketModelMixin.java#L20) |

## OverworldSkyMixin

` public abstract class OverworldSkyMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/OverworldSkyMixin.java#L10)

类型注解 ` @Mixin(SkyRenderer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverworldSkyMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/OverworldSkyMixin.java#L10) |
