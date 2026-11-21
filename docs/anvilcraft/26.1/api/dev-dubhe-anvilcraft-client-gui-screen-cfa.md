# dev.dubhe.anvilcraft.client.gui.screen.cfa



## CelestialBodyInfoFormatter

` public final class CelestialBodyInfoFormatter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CelestialBodyInfoFormatter.java#L22)

为天体信息面板生成本地化文本。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<Component> format( CelestialBodyData body, int ageAnvilCount, int massAnvilCount, float offsetAge, float offsetRadius, float offsetMass ) ` | 格式化天体在界面中显示的全部属性。<br>末尾返回 ` lines `<br>[调用处 CelestialForgingAnvilScreen.renderBodyInfoAbsolute](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L574) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CelestialBodyInfoFormatter.java#L31) |

## CelestialBodyPreviewRenderer

` public final class CelestialBodyPreviewRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CelestialBodyPreviewRenderer.java#L17)

锻星砧界面中的天体与巨构预览提交工具。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render( GuiGraphicsExtractor graphics, CelestialBodyData body, int animationTick, long seed, int x, int y, int width, int height ) ` | 在给定的绝对屏幕区域中提交天体预览。<br>实现调用 ` special.isEasterEgg() `<br>实现调用 ` Math.min(width, height) `<br>实现调用 ` CfaPreviewPipRenderer.State.body( graphics, body, animationTick, seed, x, y, width, height, scale ) `<br>[调用处 CelestialForgingAnvilScreen.renderBodyPreview](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L833) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CelestialBodyPreviewRenderer.java#L30) |
| ` public static void renderMegastructure( GuiGraphicsExtractor graphics, CelestialRefactorOption option, int animationTick, int x, int y, int width, int height ) ` | 在重构按钮内提交巨构模型预览。<br>实现调用 ` CelestialBodyPreviewRenderer.resolveMegastructureModel(option) `<br>实现调用 ` option.ring() `<br>实现调用 ` Math.min(width, height) `<br>[调用处 CelestialForgingAnvilScreen.renderMegastructureModel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L1103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CelestialBodyPreviewRenderer.java#L59) |
| ` public static @Nullable String playerName(SpecialCelestialBodyData special) ` | 读取玩家头颅天体要显示的玩家名。<br>` (special.playerHeadProfile() == null) ` 成立时提前返回 ` null `<br>` (profile == null) ` 成立时提前返回 ` null `<br>末尾返回 ` profile.name().orElse(profile.partialProfile().id().toString()) `<br>[调用处 CelestialForgingAnvilScreen.renderEasterEggPreview](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L851) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CelestialBodyPreviewRenderer.java#L94) |

## CfaPreviewPipRenderer

` public final class CfaPreviewPipRenderer extends PictureInPictureRenderer<CfaPreviewPipRenderer.State> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L62)

锻星砧界面的画中画渲染器，用于绘制真实天体和巨构模型。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CfaPreviewPipRenderer(MultiBufferSource.BufferSource bufferSource) ` | 实现调用 ` super(bufferSource) `<br>实现调用 ` SkullBlockRenderer.createModel( Minecraft.getInstance().getEntityModels(), SkullBlock.Types.PLAYER ) `<br>实现调用 ` Minecraft.getInstance().getEntityModels() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L66) |
| ` @Override public Class<State> getRenderStateClass() ` | 末尾返回 ` State.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L74) |
| ` @Override public boolean canBeReusedFor(State state, int textureWidth, int textureHeight) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L394) |

## CfaPreviewPipRenderer.BodyContent

` public record BodyContent(CelestialBodyData body, float animationTick, long seed) implements Content `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L415)

天体预览内容。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BodyContent(CelestialBodyData body, float animationTick, long seed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L415) |
| ` public CelestialBodyData body() ` | 读取 record 分量 ` body ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L415) |
| ` public float animationTick() ` | 读取 record 分量 ` animationTick ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L415) |
| ` public long seed() ` | 读取 record 分量 ` seed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L415) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L415) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L415) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L415) |

## CfaPreviewPipRenderer.Content

` public sealed interface Content permits BodyContent, ModelContent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L411)

界面预览内容。


## CfaPreviewPipRenderer.ModelContent

` public record ModelContent(StandaloneModelKey<BlockStateModel> model, float rotationDegrees, long seed) implements Content `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L419)

独立方块模型预览内容。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModelContent(StandaloneModelKey<BlockStateModel> model, float rotationDegrees, long seed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L419) |
| ` public StandaloneModelKey<BlockStateModel> model() ` | 读取 record 分量 ` model ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L420) |
| ` public float rotationDegrees() ` | 读取 record 分量 ` rotationDegrees ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L421) |
| ` public long seed() ` | 读取 record 分量 ` seed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L422) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L419) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L419) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L419) |

## CfaPreviewPipRenderer.State

` public record State(Content content, int x0, int y0, int x1, int y1, float scale, Matrix3x2f pose, ScreenRectangle scissorArea, ScreenRectangle bounds) implements PictureInPictureRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L429)

画中画渲染状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public State( Content content, int x0, int y0, int x1, int y1, float scale, Matrix3x2f pose, @Nullable ScreenRectangle scissorArea ) ` | 执行 ` this( content, x0, y0, x1, y1, scale, pose, scissorArea, PictureInPictureRenderState.getBounds(x0, y0, x1, y1, scissorArea) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L440) |
| ` public static State body( GuiGraphicsExtractor graphics, CelestialBodyData body, float animationTick, long seed, int x, int y, int width, int height, float scale ) ` | 实现调用 ` star.bodyClass() `<br>实现调用 ` Minecraft.getInstance().getModelManager().getStandaloneModel(CFARenderer.BODY_BLACK_HOLE) `<br>实现调用 ` Minecraft.getInstance().getModelManager() `<br>[调用处 CelestialBodyPreviewRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CelestialBodyPreviewRenderer.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L463) |
| ` public static State model( GuiGraphicsExtractor graphics, StandaloneModelKey<BlockStateModel> model, float rotationDegrees, long seed, int x, int y, int width, int height, float scale ) ` | 末尾返回 ` new State( new ModelContent(model, rotationDegrees, seed), x, y, x + width, y + height, scale, graphics.pose().get(new Matrix3x2f()), graphics.peekScissorStack() ) `<br>[调用处 CelestialBodyPreviewRenderer.renderMegastructure](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CelestialBodyPreviewRenderer.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L502) |
| ` public Content content() ` | 读取 record 分量 ` content ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L430) |
| ` public int x0() ` | 读取 record 分量 ` x0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L431) |
| ` public int y0() ` | 读取 record 分量 ` y0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L432) |
| ` public int x1() ` | 读取 record 分量 ` x1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L433) |
| ` public int y1() ` | 读取 record 分量 ` y1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L434) |
| ` public float scale() ` | 读取 record 分量 ` scale ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L435) |
| ` public Matrix3x2f pose() ` | 读取 record 分量 ` pose ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L436) |
| ` public ScreenRectangle scissorArea() ` | 读取 record 分量 ` scissorArea ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L437) |
| ` public ScreenRectangle bounds() ` | 读取 record 分量 ` bounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L438) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L429) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L429) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L429) |
