# dev.dubhe.anvilcraft.api.rendering



## CacheableBERenderingPipeline

` public class CacheableBERenderingPipeline `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RenderRegion getRenderRegion(ChunkPos chunkPos) ` | ` (this.renderRegions.containsKey(chunkPos)) ` 成立时提前返回 ` this.renderRegions.get(chunkPos) `<br>末尾返回 ` renderRegion `<br>实现调用 ` this.renderRegions.containsKey(chunkPos) `<br>分支 ` (this.renderRegions.containsKey(chunkPos)) ` 内调用 ` this.renderRegions.get(chunkPos) `<br>实现调用 ` this.renderRegions.put(chunkPos, renderRegion) `<br>[调用处 CacheableBERenderingPipeline.blockRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L23) |
| ` public CacheableBERenderingPipeline(ClientLevel level) ` | 执行 ` this.level = level `<br>[调用处 CacheableBERenderingPipeline.updateLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L32) |
| ` public void runTasks() ` | 实现调用 ` this.pendingCompiles.isEmpty() `<br>实现调用 ` this.pendingCompiles.poll().run() `<br>实现调用 ` this.pendingCompiles.poll() `<br>实现调用 ` this.pendingUploads.isEmpty() `<br>实现调用 ` this.pendingUploads.poll().run() `<br>实现调用 ` this.pendingUploads.poll() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L36) |
| ` public static void updateLevel(ClientLevel level) ` | 分支 ` (instance != null) ` 内调用 ` instance.releaseBuffers() `<br>[调用处 MinecraftClientMixin.updateLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/MinecraftClientMixin.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L45) |
| ` public void blockRemoved(BlockEntity be) ` | 实现调用 ` be.getBlockPos() `<br>实现调用 ` this.getRenderRegion(chunkPos).blockRemoved(be) `<br>实现调用 ` this.getRenderRegion(chunkPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L52) |
| ` public void update(BlockEntity be) ` | 实现调用 ` be.getBlockPos() `<br>实现调用 ` this.getRenderRegion(chunkPos).update(be) `<br>实现调用 ` this.getRenderRegion(chunkPos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L57) |
| ` public void submitUploadTask(Runnable task) ` | 执行 ` this.pendingUploads.add(task) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L62) |
| ` public void submitCompileTask(Runnable task) ` | 执行 ` this.pendingCompiles.add(task) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L66) |
| ` public void releaseBuffers() ` | 实现调用 ` this.renderRegions.values().forEach(RenderRegion::releaseBuffers) `<br>实现调用 ` this.renderRegions.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L70) |
| ` public void renderBloomed(Matrix4f frustumMatrix, Matrix4f projectionMatrix) ` | 执行 ` this.renderRegions.values().forEach(it -> it.renderBloomed(frustumMatrix, projectionMatrix)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L75) |
| ` public void render(Matrix4f frustumMatrix, Matrix4f projectionMatrix) ` | 执行 ` this.renderRegions.values().forEach(it -> it.render(frustumMatrix, projectionMatrix)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L79) |
| ` public static CacheableBERenderingPipeline getInstance() ` | 末尾返回 ` CacheableBERenderingPipeline.instance `<br>由 Lombok 生成。<br>[调用处 BaseLaserBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseLaserBlockEntity.java#L406) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L14) |

## CacheableBlockEntityRenderer

` public interface CacheableBlockEntityRenderer<T extends BlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderer.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void render( T cacheableBlockEntity, MultiBufferSource.BufferSource buffer, PoseStack poseStack ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderer.java#L8) |

## CacheableBlockEntityRenderers

` public class CacheableBlockEntityRenderers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderers.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T extends BlockEntity> void register( BlockEntityType<? extends T> type, CacheableBlockEntityRenderer<T> renderProvider ) ` | 执行 ` RENDERERS.put(type, renderProvider) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderers.java#L14) |
| ` public static CacheableBlockEntityRenderer<?> get(BlockEntityType<?> type) ` | 末尾返回 ` RENDERERS.get(type) `<br>[调用处 RenderRegion.RebuildTask.run](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L176) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderers.java#L21) |
| ` public CacheableBlockEntityRenderers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderers.java#L11) |

## FullyBufferedBufferSource

` public class FullyBufferedBufferSource extends MultiBufferSource.BufferSource implements AutoCloseable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FullyBufferedBufferSource() ` | 执行 ` super(null, null) `<br>[调用处 RenderRegion.RebuildTask.run](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L170) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L26) |
| ` @Override public VertexConsumer getBuffer(RenderType renderType) ` | 末尾返回 ` this.bufferBuilders.computeIfAbsent( renderType, it -> IrisState.createUnextendedBufferBuilder(this.getByteBuffer(it), it.mode, it.format) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L34) |
| ` public boolean isEmpty() ` | 末尾返回 ` !this.bufferBuilders.isEmpty() && this.bufferBuilders.values().stream().noneMatch(it -> it.vertices > 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L42) |
| ` @Override public void endBatch(RenderType renderType) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L46) |
| ` public void upload( Function<RenderType, VertexBuffer> vertexBufferGetter, Consumer<Runnable> runner ) ` | 实现调用 ` this.bufferBuilders.keySet() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L50) |
| ` public void close(RenderType renderType) ` | 实现调用 ` this.byteBuffers.get(renderType) `<br>实现调用 ` builder.close() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L85) |
| ` public void close() ` | 执行 ` this.byteBuffers.keySet().forEach(this::close) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullyBufferedBufferSource.java#L90) |

## RenderRegion

` public class RenderRegion `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RenderType[] FORCED_ORDER ` | 初值 ` { RenderType.SOLID, ModRenderTypes.LASER, RenderType.TRANSLUCENT, } ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L33) |
| ` public static final List<RenderType> BLOOM_RENDERTYPES ` | 初值 ` List.of( ModRenderTypes.LASER ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L38) |
| ` public RenderRegion(ChunkPos chunkPos, CacheableBERenderingPipeline pipeline) ` | [调用处 CacheableBERenderingPipeline.getRenderRegion](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBERenderingPipeline.java#L27) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L51) |
| ` public void update(BlockEntity be) ` | 分支 ` (this.lastRebuildTask != null) ` 内调用 ` this.lastRebuildTask.cancel() `<br>实现调用 ` this.blockEntityList.removeIf(BlockEntity::isRemoved) `<br>实现调用 ` be.isRemoved() `<br>分支 ` (be.isRemoved()) ` 内调用 ` this.blockEntityList.remove(be) `<br>分支 ` (be.isRemoved()) ` 内调用 ` this.pipeline.submitCompileTask(new RebuildTask()) `<br>实现调用 ` this.blockEntityList.add(be) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L56) |
| ` public void blockRemoved(BlockEntity be) ` | 分支 ` (this.lastRebuildTask != null) ` 内调用 ` this.lastRebuildTask.cancel() `<br>实现调用 ` this.blockEntityList.remove(be) `<br>实现调用 ` this.blockEntityList.removeIf(BlockEntity::isRemoved) `<br>实现调用 ` this.pipeline.submitCompileTask(new RebuildTask()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L70) |
| ` public void renderBloomed(Matrix4f frustumMatrix, Matrix4f projectionMatrix) ` | 执行 ` this.renderInternal(frustumMatrix, projectionMatrix, BLOOM_RENDERTYPES, RenderState::bloomStage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L79) |
| ` public void render(Matrix4f frustumMatrix, Matrix4f projectionMatrix) ` | 执行 ` this.renderInternal(frustumMatrix, projectionMatrix, this.buffers.keySet(), RenderState::levelStage) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L83) |
| ` public VertexBuffer getBuffer(RenderType renderType) ` | ` (this.buffers.containsKey(renderType)) ` 成立时提前返回 ` this.buffers.get(renderType) `<br>末尾返回 ` vb `<br>实现调用 ` this.buffers.containsKey(renderType) `<br>分支 ` (this.buffers.containsKey(renderType)) ` 内调用 ` this.buffers.get(renderType) `<br>实现调用 ` this.buffers.put(renderType, vb) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L87) |
| ` public void releaseBuffers() ` | 执行 ` this.buffers.values().forEach(VertexBuffer::close) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L126) |
