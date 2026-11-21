# dev.dubhe.anvilcraft.client.renderer.mun.compat



## MunIrisCompat

` public final class MunIrisCompat `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/compat/MunIrisCompat.java#L18)

向光影包提供月球的天体方向与阴影视角，并在最终合成后绘制真空天空。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isEnabled() ` | 末尾返回 ` MunRenderPipeline.enabled() && MunClientSky.isMun() `<br>[调用处 IrisMunCelestialMixin.anvilcraft$localSunAngle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/mun/compat/IrisMunCelestialMixin.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/compat/MunIrisCompat.java#L22) |
| ` public static Vector4f celestialPosition(boolean sun, boolean cameraSpace) ` | 末尾返回 ` position `<br>[调用处 IrisMunCelestialMixin.anvilcraft$localCelestialPosition](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/mun/compat/IrisMunCelestialMixin.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/compat/MunIrisCompat.java#L26) |
| ` public static float sunAngle() ` | 末尾返回 ` (float) (turns - Math.floor(turns)) `<br>[调用处 IrisMunCelestialMixin.anvilcraft$localSunAngle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/mun/compat/IrisMunCelestialMixin.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/compat/MunIrisCompat.java#L40) |
| ` public static void shadowView(PoseStack stack) ` | 实现调用 ` celestialPosition(true, false).normalize3() `<br>实现调用 ` celestialPosition(true, false) `<br>实现调用 ` Math.abs(sun.y) `<br>[调用处 IrisMunShadowMixin.anvilcraft$localShadowView](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/mun/compat/IrisMunShadowMixin.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/compat/MunIrisCompat.java#L52) |
| ` public static void renderSky() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` MunClientSky.isMun() `<br>实现调用 ` minecraft.getMainRenderTarget().bindWrite(true) `<br>[调用处 IrisMunSkyMixin.anvilcraft$vacuumSkyAfterComposition](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/mun/compat/IrisMunSkyMixin.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/mun/compat/MunIrisCompat.java#L61) |
