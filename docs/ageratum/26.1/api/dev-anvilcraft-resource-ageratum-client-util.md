# dev.anvilcraft.resource.ageratum.client.util



## AlphaVertexConsumer

` public class AlphaVertexConsumer implements VertexConsumer `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L10)

为顶点流统一缩放透明度的包装器。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AlphaVertexConsumer(VertexConsumer delegate, float alphaMultiplier) ` | 实现调用 ` Mth.clamp(alphaMultiplier, 0.0f, 1.0f) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L14) |
| ` @Override public VertexConsumer addVertex(float x, float y, float z) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L27) |
| ` @Override public VertexConsumer setColor(int red, int green, int blue, int alpha) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L33) |
| ` @Override public VertexConsumer setUv(float u, float v) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L39) |
| ` @Override public VertexConsumer setUv1(int u, int v) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L45) |
| ` @Override public VertexConsumer setUv2(int u, int v) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L51) |
| ` @Override public VertexConsumer setNormal(float x, float y, float z) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L57) |
| ` @Override public VertexConsumer setLineWidth(float v) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L63) |
| ` @Override public void addVertex( float x, float y, float z, int color, float u, float v, int overlay, int light, float normalX, float normalY, float normalZ ) ` | 实现调用 ` this.scaleAlpha((color >>> 24) & 0xFF) `<br>实现调用 ` this.delegate.addVertex(x, y, z, adjustedColor, u, v, overlay, light, normalX, normalY, normalZ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L69) |
| ` @Override public VertexConsumer setColor(float red, float green, float blue, float alpha) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L88) |
| ` @Override public VertexConsumer setColor(int color) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L94) |
| ` @Override public VertexConsumer setLight(int light) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L102) |
| ` @Override public VertexConsumer setOverlay(int overlay) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L108) |
| ` @Override public VertexConsumer addVertex(PoseStack.Pose pose, float x, float y, float z) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L114) |
| ` @Override public VertexConsumer setNormal(PoseStack.Pose pose, float x, float y, float z) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/AlphaVertexConsumer.java#L120) |

## OffsetVertexConsumer

` public class OffsetVertexConsumer implements VertexConsumer `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L9)

为顶点坐标追加固定平移量的包装器。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OffsetVertexConsumer(VertexConsumer delegate, float offsetX, float offsetY, float offsetZ) ` | 构造 ` OffsetVertexConsumer ` 实例。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L15) |
| ` @Override public VertexConsumer addVertex(float x, float y, float z) ` | 末尾返回 ` this.delegate.addVertex(x + this.offsetX, y + this.offsetY, z + this.offsetZ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L22) |
| ` @Override public VertexConsumer setColor(int red, int green, int blue, int alpha) ` | 末尾返回 ` this.delegate.setColor(red, green, blue, alpha) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L27) |
| ` @Override public VertexConsumer setUv(float u, float v) ` | 末尾返回 ` this.delegate.setUv(u, v) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L32) |
| ` @Override public VertexConsumer setUv1(int u, int v) ` | 末尾返回 ` this.delegate.setUv1(u, v) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L37) |
| ` @Override public VertexConsumer setUv2(int u, int v) ` | 末尾返回 ` this.delegate.setUv2(u, v) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L42) |
| ` @Override public VertexConsumer setNormal(float x, float y, float z) ` | 末尾返回 ` this.delegate.setNormal(x, y, z) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L47) |
| ` @Override public VertexConsumer setLineWidth(float v) ` | 末尾返回 ` this.delegate.setLineWidth(v) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L52) |
| ` @Override public void addVertex( float x, float y, float z, int color, float u, float v, int overlay, int light, float normalX, float normalY, float normalZ ) ` | 执行 ` this.delegate.addVertex( x + this.offsetX, y + this.offsetY, z + this.offsetZ, color, u, v, overlay, light, normalX, normalY, normalZ ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L57) |
| ` @Override public VertexConsumer setColor(float red, float green, float blue, float alpha) ` | 末尾返回 ` this.delegate.setColor(red, green, blue, alpha) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L86) |
| ` @Override public VertexConsumer setColor(int color) ` | 末尾返回 ` this.delegate.setColor(color) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L91) |
| ` @Override public VertexConsumer setLight(int light) ` | 末尾返回 ` this.delegate.setLight(light) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L96) |
| ` @Override public VertexConsumer setOverlay(int overlay) ` | 末尾返回 ` this.delegate.setOverlay(overlay) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L101) |
| ` @Override public VertexConsumer addVertex(PoseStack.Pose pose, float x, float y, float z) ` | 末尾返回 ` this.delegate.addVertex(pose, x + this.offsetX, y + this.offsetY, z + this.offsetZ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L106) |
| ` @Override public VertexConsumer setNormal(PoseStack.Pose pose, float x, float y, float z) ` | 末尾返回 ` this.delegate.setNormal(pose, x, y, z) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/OffsetVertexConsumer.java#L111) |

## RelativePathResolver

` public class RelativePathResolver `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/RelativePathResolver.java#L9)

在逻辑基目录下解析用户提供的相对路径工具。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String resolveWithinBase(String baseDir, String target) ` | 将目标路径相对基目录进行规范化。 支持 . 与 .. 片段；若尝试越过根目录，则会被钳制在根目录， 不会生成父级前缀。<br>末尾返回 ` String.join("/", parts) `<br>[调用处 GitHubAssetResolver.resolveWithinRoot](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L186) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/RelativePathResolver.java#L19) |

## SectionOffsetVertexConsumer

` public class SectionOffsetVertexConsumer implements VertexConsumer `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L10)

将区块分段局部坐标转换为世界坐标的 VertexConsumer 包装器。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SectionOffsetVertexConsumer(VertexConsumer delegate, SectionPos sectionPos) ` | 构造 ` SectionOffsetVertexConsumer ` 实例。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L14) |
| ` @Override public VertexConsumer addVertex(float x, float y, float z) ` | 末尾返回 ` delegate.addVertex(x, y, z) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L19) |
| ` @Override public VertexConsumer setColor(int i, int i1, int i2, int i3) ` | 末尾返回 ` delegate.setColor(i, i1, i2, i3) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L29) |
| ` @Override public VertexConsumer setUv(float v, float v1) ` | 末尾返回 ` delegate.setUv(v, v1) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L34) |
| ` @Override public VertexConsumer setUv1(int i, int i1) ` | 末尾返回 ` delegate.setUv1(i, i1) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L39) |
| ` @Override public VertexConsumer setUv2(int i, int i1) ` | 末尾返回 ` delegate.setUv2(i, i1) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L44) |
| ` @Override public VertexConsumer setNormal(float v, float v1, float v2) ` | 末尾返回 ` delegate.setNormal(v, v1, v2) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L49) |
| ` @Override public VertexConsumer setLineWidth(float v) ` | 末尾返回 ` delegate.setLineWidth(v) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L54) |
| ` @Override public void addVertex( float p_351049_, float p_350528_, float p_351018_, int p_350427_, float p_350508_, float p_350864_, int p_350846_, int p_350731_, float p_350784_, float p_351051_, float p_350759_ ) ` | 执行 ` delegate.addVertex( p_351049_, p_350528_, p_351018_, p_350427_, p_350508_, p_350864_, p_350846_, p_350731_, p_350784_, p_351051_, p_350759_ ) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L59) |
| ` @Override public VertexConsumer setColor(float p_350350_, float p_350356_, float p_350623_, float p_350312_) ` | 末尾返回 ` delegate.setColor(p_350350_, p_350356_, p_350623_, p_350312_) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L88) |
| ` @Override public VertexConsumer setColor(int p_350809_) ` | 末尾返回 ` delegate.setColor(p_350809_) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L93) |
| ` @Override public VertexConsumer setLight(int p_350855_) ` | 末尾返回 ` delegate.setLight(p_350855_) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L98) |
| ` @Override public VertexConsumer setOverlay(int p_350697_) ` | 末尾返回 ` delegate.setOverlay(p_350697_) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L103) |
| ` @Override public VertexConsumer addVertex(PoseStack.Pose p_350506_, float p_350934_, float p_350873_, float p_350981_) ` | 末尾返回 ` delegate.addVertex(p_350506_, p_350934_, p_350873_, p_350981_) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L108) |
| ` @Override public VertexConsumer setNormal(PoseStack.Pose p_350592_, float p_350534_, float p_350411_, float p_350441_) ` | 末尾返回 ` delegate.setNormal(p_350592_, p_350534_, p_350411_, p_350441_) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SectionOffsetVertexConsumer.java#L113) |

## SodiumSpriteBridge

` public class SodiumSpriteBridge `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SodiumSpriteBridge.java#L18)

对 Sodium 精灵活跃度 API 的可选兼容桥接。 通过反射解析目标类，保证在安装或未安装 Sodium 时都能运行。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void pingSpriteUsage(@Nullable TextureAtlasSprite sprite) ` | 若兼容句柄存在，则通知 Sodium 当前帧使用了该精灵。<br>分支 ` (sprite != null && METHOD_HANDLE != null) ` 内调用 ` METHOD_HANDLE.invokeExact(sprite) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SodiumSpriteBridge.java#L45) |
| ` public SodiumSpriteBridge() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/util/SodiumSpriteBridge.java#L18) |
