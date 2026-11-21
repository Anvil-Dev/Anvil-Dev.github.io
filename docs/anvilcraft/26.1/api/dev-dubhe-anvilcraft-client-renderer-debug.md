# dev.dubhe.anvilcraft.client.renderer.debug



## CfaRenderBoundsDebugRenderer

` public class CfaRenderBoundsDebugRenderer implements DebugRenderer.SimpleDebugRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/debug/CfaRenderBoundsDebugRenderer.java#L21)

锻星砧渲染包围盒调试渲染器，由 F3 调试选项 \`anvilcraft:cfa\_render\_bounds\` 开关。 按原版调试渲染器的做法：在提取阶段迭代可见方块实体，几何通过 Gizmos 提交， 由原版每帧收集器统一绘制。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier LOCATION ` | 调试条目 ID，用于注册 F3 调试选项并查询开关状态。<br>初值 ` AnvilCraft.of("cfa_render_bounds") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/debug/CfaRenderBoundsDebugRenderer.java#L23) |
| ` @Override public void emitGizmos( double camX, double camY, double camZ, DebugValueAccess debugValues, Frustum frustum, float partialTicks ) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.debugEntries.isCurrentlyEnabled(CfaRenderBoundsDebugRenderer.LOCATION) `<br>实现调用 ` minecraft.getBlockEntityRenderDispatcher() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/debug/CfaRenderBoundsDebugRenderer.java#L29) |
| ` public CfaRenderBoundsDebugRenderer() ` | Java 提供的无参构造器。<br>[调用处 DebugRendererEventListener.on](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/DebugRendererEventListener.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/debug/CfaRenderBoundsDebugRenderer.java#L21) |
