# dev.anvilcraft.resource.ageratum.mixin



## GlDebugMixin

` public class GlDebugMixin `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GlDebugMixin.java#L11)

类型注解 ` @Mixin(GlDebug.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GlDebugMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GlDebugMixin.java#L11) |

## GuiGraphicsMixin

` public class GuiGraphicsMixin `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GuiGraphicsMixin.java#L12)

类型注解 ` @Mixin(GuiGraphics.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @WrapOperation( method = "guiWidth", at = @At(value = "INVOKE", target = "Lcom/mojang/blaze3d/platform/Window;getGuiScaledWidth()I") ) public int guiWidth(Window instance, Operation<Integer> original) ` | 末尾返回 ` call ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GuiGraphicsMixin.java#L15) |
| ` @WrapOperation( method = "guiHeight", at = @At(value = "INVOKE", target = "Lcom/mojang/blaze3d/platform/Window;getGuiScaledHeight()I") ) public int guiHeight(Window instance, Operation<Integer> original) ` | 末尾返回 ` call ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GuiGraphicsMixin.java#L27) |
| ` public GuiGraphicsMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/GuiGraphicsMixin.java#L12) |

## MouseHandlerMixin

` public class MouseHandlerMixin `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/MouseHandlerMixin.java#L11)

类型注解 ` @Mixin(MouseHandler.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MouseHandlerMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/mixin/MouseHandlerMixin.java#L11) |
