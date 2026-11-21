# dev.dubhe.anvilcraft.client.renderer.blockentity.state（WipBlockRenderState 至 WorldFluidRenderState.Vertex）



## WipBlockRenderState

` public class WipBlockRenderState extends LitBlockRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WipBlockRenderState.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WipBlockRenderState() ` | Java 提供的无参构造器。<br>[调用处 WipBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/WipBlockEntityRenderer.java#L115) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WipBlockRenderState.java#L3) |

## WorldFluidRenderState

` public record WorldFluidRenderState(Map<ChunkSectionLayer, List<Vertex>> layers) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static WorldFluidRenderState extract(BlockAndTintGetter level, BlockPos pos, BlockState state) ` | 末尾返回 ` new WorldFluidRenderState(Map.copyOf(layers)) `<br>[调用处 RuinsBlockEntityRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/RuinsBlockEntityRenderer.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L20) |
| ` public void submit(PoseStack pose, SubmitNodeCollector collector) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L38) |
| ` public WorldFluidRenderState(Map<ChunkSectionLayer, List<Vertex>> layers) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L19) |
| ` public Map<ChunkSectionLayer, List<Vertex>> layers() ` | 读取 record 分量 ` layers ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L19) |

## WorldFluidRenderState.Vertex

` public record Vertex(float x, float y, float z, int color, float u, float v, int overlay, int light, float nx, float ny, float nz) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Vertex(float x, float y, float z, int color, float u, float v, int overlay, int light, float nx, float ny, float nz) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public float x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public float y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public float z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public int color() ` | 读取 record 分量 ` color ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public float u() ` | 读取 record 分量 ` u ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public float v() ` | 读取 record 分量 ` v ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public int overlay() ` | 读取 record 分量 ` overlay ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public int light() ` | 读取 record 分量 ` light ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public float nx() ` | 读取 record 分量 ` nx ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L57) |
| ` public float ny() ` | 读取 record 分量 ` ny ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L57) |
| ` public float nz() ` | 读取 record 分量 ` nz ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L57) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/WorldFluidRenderState.java#L56) |
