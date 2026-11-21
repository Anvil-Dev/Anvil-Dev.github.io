# dev.anvilcraft.resource.ageratum.mixin



## GlDebugMixin

` public class GlDebugMixin `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GlDebugMixin.java#L11)

类型注解 ` @Mixin(GlDebug.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GlDebugMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GlDebugMixin.java#L11) |

## GuiGraphicsExtractorMixin

` public class GuiGraphicsExtractorMixin `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GuiGraphicsExtractorMixin.java#L12)

类型注解 ` @Mixin(GuiGraphicsExtractor.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @WrapOperation( method = "guiWidth", at = @At(value = "INVOKE", target = "Lcom/mojang/blaze3d/platform/Window;getGuiScaledWidth()I") ) public int guiWidth(Window instance, Operation<Integer> original) ` | 末尾返回 ` call ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GuiGraphicsExtractorMixin.java#L15) |
| ` @WrapOperation( method = "guiHeight", at = @At(value = "INVOKE", target = "Lcom/mojang/blaze3d/platform/Window;getGuiScaledHeight()I") ) public int guiHeight(Window instance, Operation<Integer> original) ` | 末尾返回 ` call ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GuiGraphicsExtractorMixin.java#L27) |
| ` public GuiGraphicsExtractorMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GuiGraphicsExtractorMixin.java#L12) |

## LecternBlockMixin

` public class LecternBlockMixin `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/LecternBlockMixin.java#L29)

类型注解 ` @Mixin(LecternBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LecternBlockMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/LecternBlockMixin.java#L29) |

## MouseHandlerMixin

` public abstract class MouseHandlerMixin `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/MouseHandlerMixin.java#L11)

类型注解 ` @Mixin(MouseHandler.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MouseHandlerMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/mixin/MouseHandlerMixin.java#L11) |
