# 跟踪几何编译与提交

调试缓存更新时沿编译结果、区域和实际提交缓冲三个位置检查。先确认是否产生了新几何，再查该区域是否被重用。

## 源码中的用例

以本分支的 `FullyBufferedBufferSource` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.api.rendering;

import com.mojang.blaze3d.vertex.BufferBuilder;
import com.mojang.blaze3d.vertex.ByteBufferBuilder;
import com.mojang.blaze3d.vertex.MeshData;
import com.mojang.blaze3d.vertex.VertexBuffer;
import com.mojang.blaze3d.vertex.VertexConsumer;
import dev.dubhe.anvilcraft.integration.iris.IrisState;
import it.unimi.dsi.fastutil.objects.Reference2IntMap;
import it.unimi.dsi.fastutil.objects.Reference2IntOpenHashMap;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.RenderType;
import org.lwjgl.system.MemoryUtil;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

public class FullyBufferedBufferSource extends MultiBufferSource.BufferSource implements AutoCloseable {
    private static final MemoryUtil.MemoryAllocator ALLOCATOR = MemoryUtil.getAllocator(false);
    private final Map<RenderType, ByteBufferBuilder> byteBuffers = new HashMap<>();
    private final Map<RenderType, BufferBuilder> bufferBuilders = new HashMap<>();
    final Reference2IntMap<RenderType> indexCountMap = new Reference2IntOpenHashMap<>();

    public FullyBufferedBufferSource() {
        super(null, null);
    }

    private ByteBufferBuilder getByteBuffer(RenderType renderType) {
        return this.byteBuffers.computeIfAbsent(renderType, it -> new ByteBufferBuilder(786432));
    }

    @Override
    public VertexConsumer getBuffer(RenderType renderType) {
        return this.bufferBuilders.computeIfAbsent(
            renderType,
            it -> IrisState.createUnextendedBufferBuilder(this.getByteBuffer(it), it.mode, it.format)
        );
    }

    public boolean isEmpty() {
        return !this.bufferBuilders.isEmpty() && this.bufferBuilders.values().stream().noneMatch(it -> it.vertices > 0);
    }

    @Override
    public void endBatch(RenderType renderType) {
    }

    public void upload(
        Function<RenderType, VertexBuffer> vertexBufferGetter,
        Consumer<Runnable> runner
    ) {
        for (RenderType renderType : this.bufferBuilders.keySet()) {
            runner.accept(() -> {
                BufferBuilder bufferBuilder = this.bufferBuilders.get(renderType);
                ByteBufferBuilder byteBuffer = this.byteBuffers.get(renderType);
                long ptr = byteBuffer.pointer;
                int compiledVertices = bufferBuilder.vertices * renderType.format.getVertexSize();
                if (compiledVertices >= 0) {
                    long allocated = ALLOCATOR.malloc(compiledVertices);
                    MemoryUtil.memCopy(ptr, allocated, compiledVertices);
                    MeshData mesh = bufferBuilder.build();
                    if (mesh != null) {
                        mesh.close();
                    }
                    CompileResult compileResult = new CompileResult(
                        renderType,
                        bufferBuilder.vertices,
                        renderType.format.getVertexSize(),
                        allocated,
                        renderType.mode.indexCount(bufferBuilder.vertices)
                    );
                    this.indexCountMap.put(renderType, renderType.mode.indexCount(bufferBuilder.vertices));
                    compileResult.upload(vertexBufferGetter.apply(renderType));
                    compileResult.free();
                }
                byteBuffer.close();
                this.bufferBuilders.remove(renderType);
                this.byteBuffers.remove(renderType);
            });
        }
    }

    public void close(RenderType renderType) {
        ByteBufferBuilder builder = this.byteBuffers.get(renderType);
        builder.close();
    }

    public void close() {
        this.byteBuffers.keySet().forEach(this::close);
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java)

- [`BaseLaserBlockEntity` · 第 406 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseLaserBlockEntity.java#L406)
- [`CelestialForgingAnvilLaserInterfaceBlockEntity` · 第 320 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilLaserInterfaceBlockEntity.java#L320)
- [`CelestialForgingAnvilPortalBlockEntity` · 第 170 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilPortalBlockEntity.java#L170)
- [`CreativeLaserBlockEntity` · 第 156 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeLaserBlockEntity.java#L156)
- [`LevelChunkMixin` · 第 108 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L108)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `CacheableBERenderingPipeline` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-rendering#cacheableberenderingpipeline) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java) |
| `CompileResult` | 见源码声明 | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CompileResult.java) |
| `RenderRegion` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-rendering#renderregion) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java) |
