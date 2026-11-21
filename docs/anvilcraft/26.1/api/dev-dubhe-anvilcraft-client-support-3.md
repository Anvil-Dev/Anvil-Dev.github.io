# dev.dubhe.anvilcraft.client.support（ScaledGuiItemAtlases 至 TransparentItemRenderer）



## ScaledGuiItemAtlases

` public final class ScaledGuiItemAtlases implements AutoCloseable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L23)

为放大图标保留真实像素密度；同一分辨率仍复用原生物品图集。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Object OWNED_ITEM ` | 初值 ` new Object() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L24) |
| ` public ScaledGuiItemAtlases(SubmitNodeCollector collector, FeatureRenderDispatcher dispatcher, MultiBufferSource.BufferSource buffers) ` | [调用处 ScaledGuiItemRendererMixin.anvilcraft$prepareScaledItems](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ScaledGuiItemRendererMixin.java#L37) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L34) |
| ` public static int resolution(Matrix3x2fc pose, int guiScale, int maximum) ` | ` (!Double.isFinite(stretch) \|\| stretch <= 1.000001) ` 成立时提前返回 ` 0 `<br>末尾返回 ` Math.min(maximum, (int) Math.ceil(16.0 * guiScale * stretch - 0.00001)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L40) |
| ` public static int pipScale(GuiItemRenderState item, PictureInPictureRenderState state, int guiScale, int maximum) ` | ` (!(identity instanceof List<?> elements) \|\| !elements.contains(OWNED_ITEM)) ` 成立时提前返回 ` guiScale `<br>` (pixels <= 0) ` 成立时提前返回 ` guiScale `<br>` (extent <= 0) ` 成立时提前返回 ` guiScale `<br>末尾返回 ` Math.min(Math.max(guiScale, (pixels + 15) / 16), Math.max(1, maximum / extent)) `<br>[调用处 ScaledGuiItemPipMixin.anvilcraft$projectGateway](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ScaledGuiItemPipMixin.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L59) |
| ` public static Object oversizedKey(GuiItemRenderState item, Object model, int guiScale) ` | ` (bounds == null \|\| !(model instanceof List<?> elements) \|\| !elements.contains(OWNED_ITEM)) ` 成立时提前返回 ` model `<br>末尾返回 ` new OversizedKey(model, bounds.width(), bounds.height(), scale) `<br>[调用处 ScaledGuiItemRendererMixin.anvilcraft$oversizedCacheKey](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ScaledGuiItemRendererMixin.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L69) |
| ` public void prepare(GuiRenderState state, int guiScale) ` | 实现调用 ` this.requested.clear() `<br>实现调用 ` this.atlases.keySet().stream().filter(size -> !this.requested.containsKey(size)).count() `<br>实现调用 ` this.atlases.keySet().stream().filter(size -> !this.requested.containsKey(size)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L80) |
| ` public GuiItemAtlas.@Nullable SlotView get(GuiItemRenderState item) ` | ` (resolution <= 0) ` 成立时提前返回 ` null `<br>` (identities == null) ` 成立时提前返回 ` null `<br>末尾返回 ` atlas.getOrUpdate(item.itemStackRenderState()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L101) |
| ` public void endFrame() ` | 执行 ` this.atlases.values().forEach(GuiItemAtlas::endFrame) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L118) |
| ` public long allocations() ` | 末尾返回 ` this.allocations ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L122) |
| ` public int cachedAtlases() ` | 末尾返回 ` this.atlases.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L126) |
| ` public Set<Integer> requestedResolutions() ` | 末尾返回 ` Set.copyOf(this.requested.keySet()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L130) |
| ` @Override public void close() ` | 实现调用 ` this.atlases.values().forEach(GuiItemAtlas::close) `<br>实现调用 ` this.atlases.values() `<br>实现调用 ` this.atlases.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScaledGuiItemAtlases.java#L134) |

## ScreenShakeManager

` public class ScreenShakeManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L15)

屏幕（摄像机）震动管理器 —— 纯客户端。 通过 ViewportEvent.ComputeCameraAngles 往 yaw/pitch/roll 上叠加噪声实现， 不改动世界状态。由超新星爆发、巨型铁砧撼地等事件触发，各自有不同的振幅/时长参数 （见 ShakeType）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ScreenShakeManager getInstance() ` | 末尾返回 ` ScreenShakeManager.INSTANCE `<br>[调用处 ClientEventListener.onAnvilEffectTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L19) |
| ` public void trigger(Vec3 center, float radius, ShakeType type) ` | 触发一次以 center 为中心、radius 为半径、指定类型的屏幕震动。 振幅按本地玩家到中心的距离线性衰减，范围外不震动。 若该类型要求站在地面（撼地），则玩家不在地面上时不震。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` mc.player.onGround() `<br>实现调用 ` mc.player.position().distanceTo(center) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L34) |
| ` public void tick() ` | 客户端每刻递减剩余时长。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L53) |
| ` public boolean isActive() ` | 末尾返回 ` this.remainingTicks > 0 && this.intensity > 0.01f `<br>[调用处 ScreenShakeManager.computeAngleOffsets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L62) |
| ` public float @Nullable [] computeAngleOffsets(float partialTick) ` | 计算当前帧应叠加到摄像机的 yaw/pitch/roll 偏移（度）。 使用多个不同频率的正弦叠加，产生不规则的快速颤动而非规则摆动。<br>` (!this.isActive()) ` 成立时提前返回 ` null `<br>` (falloff <= 0.01f) ` 成立时提前返回 ` null `<br>` (cam == null) ` 成立时提前返回 ` null `<br>末尾返回 ` new float[]{yaw, pitch, roll} ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L74) |
| ` public ScreenShakeManager() ` | Java 提供的无参构造器。<br>[调用处 ScreenShakeManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L17) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ScreenShakeManager.java#L15) |

## SeismicBounceManager

` public class SeismicBounceManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L23)

震波方块弹跳管理器。 负责管理弹跳数据，模型提取与渲染由 SeismicBounceRenderEventListener 处理。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static SeismicBounceManager getInstance() ` | 末尾返回 ` SeismicBounceManager.INSTANCE `<br>[调用处 ClientEventListener.onAnvilEffectTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L147) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L50) |
| ` public void triggerShock(BlockPos center, int radius) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Math.abs(dx) `<br>实现调用 ` Math.abs(dz) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L54) |
| ` public void startBounce(BlockPos pos, float amplitude, int startDelay) ` | 实现调用 ` this.activeBounces.get(pos) `<br>分支 ` (existing != null) ` 内调用 ` existing.reset(amplitude, startDelay) `<br>分支 ` !(existing != null) ` 内调用 ` this.activeBounces.put(pos, new BounceData(amplitude, startDelay)) `<br>[调用处 SeismicBounceManager.triggerShock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L84) |
| ` public void startResonance(BlockPos pos, int durationTicks) ` | 执行 ` this.activeResonances.put(pos.immutable(), new ResonanceData(durationTicks)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L93) |
| ` public void stopResonance(BlockPos pos) ` | 执行 ` this.activeResonances.remove(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L97) |
| ` public void tick() ` | 实现调用 ` this.activeBounces.isEmpty() `<br>实现调用 ` this.activeResonances.isEmpty() `<br>实现调用 ` this.activeBounces.values().forEach(data -> data.remainingTicks--) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L101) |
| ` public Map<BlockPos, BounceData> getActiveBounces() ` | 末尾返回 ` this.activeBounces `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L23) |
| ` public Map<BlockPos, ResonanceData> getActiveResonances() ` | 末尾返回 ` this.activeResonances `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L23) |

## SeismicBounceManager.BounceData

` public static class BounceData implements RenderOffset `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L122)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public float getProgress() ` | ` (active <= 0) ` 成立时提前返回 ` 0.0F `<br>末尾返回 ` Math.min((float) active / this.totalTicks, 1.0F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L141) |
| ` public float getRenderOffsetY(float partialTick) ` | ` (active < 0) ` 成立时提前返回 ` 0.0F `<br>末尾返回 ` (float) (this.amplitude * bounce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L148) |
| ` public int getRemainingTicks() ` | 末尾返回 ` this.remainingTicks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L122) |
| ` public float getAmplitude() ` | 末尾返回 ` this.amplitude `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L122) |

## SeismicBounceManager.RenderOffset

` public interface RenderOffset `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L110)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default float getRenderOffsetX(float partialTick) ` | 末尾返回 ` 0.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L111) |
| ` float getRenderOffsetY(float partialTick) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L115) |
| ` default float getRenderOffsetZ(float partialTick) ` | 末尾返回 ` 0.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L117) |

## SeismicBounceManager.ResonanceData

` public static class ResonanceData implements RenderOffset `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L164)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public float getRenderOffsetX(float partialTick) ` | 末尾返回 ` (float) Math.sin(this.elapsed(partialTick) * 10.7F) * 0.025F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L173) |
| ` @Override public float getRenderOffsetY(float partialTick) ` | 末尾返回 ` (float) Math.sin(this.elapsed(partialTick) * 13.1F + 2.1F) * 0.02F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L178) |
| ` @Override public float getRenderOffsetZ(float partialTick) ` | 末尾返回 ` (float) Math.sin(this.elapsed(partialTick) * 12.3F + 4.2F) * 0.025F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/SeismicBounceManager.java#L183) |

## StorageCraftingPrediction

` public final class StorageCraftingPrediction `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageCraftingPrediction.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public boolean add(ItemStack carried, ItemStack result) ` | ` (result.isEmpty() \|\| this.pending.size() >= MAX_PENDING) ` 成立时提前返回 ` false `<br>` (!predicted.isEmpty() && (!ItemStack.isSameItemSameComponents(predicted, result) \|\| predicted.getCount() + result.getCount() > result.getMaxStackSize())) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageCraftingPrediction.java#L14) |
| ` public void acknowledge() ` | 实现调用 ` this.pending.removeFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageCraftingPrediction.java#L26) |
| ` public boolean isPending() ` | 末尾返回 ` !this.pending.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageCraftingPrediction.java#L31) |
| ` public ItemStack carried(ItemStack confirmed) ` | ` (this.pending.isEmpty()) ` 成立时提前返回 ` confirmed `<br>` (!this.dirty) ` 成立时提前返回 ` this.preview `<br>末尾返回 ` this.preview `<br>[调用处 StorageCraftingPrediction.add](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageCraftingPrediction.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageCraftingPrediction.java#L35) |
| ` public StorageCraftingPrediction() ` | Java 提供的无参构造器。<br>[调用处 StorageScreen](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L140) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageCraftingPrediction.java#L8) |

## StorageStructurePreview

` public final class StorageStructurePreview `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageStructurePreview.java#L18)

手册与机器共用的存储界面提供器，仅从结构快照读取内容。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register() ` | 实现调用 ` ModBlocks.CRATE.get() `<br>实现调用 ` ModBlocks.LARGE_CRATE.get() `<br>实现调用 ` ModBlocks.SHULKER_CONTAINER.get() `<br>[调用处 AnvilCraftClient.clientSetup](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageStructurePreview.java#L22) |

## StorageTakePrediction

` public final class StorageTakePrediction `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageTakePrediction.java#L8)

只预测光标和可见数量；背包与实际库存始终由服务端同步。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StorageTakePrediction(boolean quickMove) ` | 执行 ` this.quickMove = quickMove `<br>[调用处 StorageScreen.takeStorageItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L2123) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageTakePrediction.java#L15) |
| ` public boolean add(int slot, ItemStack item, long available, int button, boolean quickMove) ` | ` (this.quickMove != quickMove \|\| this.pending >= MAX_PENDING \|\| item.isEmpty() \|\| !quickMove && !this.taken.isEmpty() \|\| !this.taken.containsKey(slot) && this.taken.size() >= MAX_PENDING) ` 成立时提前返回 ` false `<br>` (amount == 0) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageTakePrediction.java#L19) |
| ` public void acknowledge() ` | 执行 ` this.pending-- ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageTakePrediction.java#L32) |
| ` public boolean isPending() ` | 末尾返回 ` this.pending > 0 `<br>[调用处 StorageTakePrediction.carried](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageTakePrediction.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageTakePrediction.java#L36) |
| ` public long taken(int slot) ` | 末尾返回 ` this.taken.get(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageTakePrediction.java#L40) |
| ` public ItemStack carried(ItemStack confirmed) ` | 末尾返回 ` this.isPending() && !this.quickMove ? this.carried : confirmed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StorageTakePrediction.java#L44) |

## StructureDiskPreviewSupport

` public class StructureDiskPreviewSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L44)

结构磁盘预览支持类 管理结构磁盘的缓存和3D预览渲染。 缓存策略（会话级）： 完整缓存 #PREVIEW\_CACHE — 解析完毕的 LevelLike，本次游戏内永不过期， 仅在超过 #MAX\_CACHE\_SIZE 时淘汰最旧条目 待处理缓存 #PENDING\_PREVIEW\_DATA — 服务端返回的原始 NBT， 等待 tooltip 渲染时获取磁盘上下文后完成解析 完整结构文件请求与缺失状态由 StructureLoadUtil 统一缓存和节流

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerPreviewHandler(PreviewHandler handler) ` | 返回 true 表示接管预览，仅客户端调用。<br>执行 ` PREVIEW_HANDLERS.add(handler) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L48) |
| ` public static void renderPreviewAt(GuiGraphicsExtractor graphics, ItemStack diskStack, int mouseX, int mouseY) ` | 在指定位置渲染预览<br>执行 ` renderPreviewAt(graphics, diskStack, mouseX, mouseY, mouseX + 12, mouseY - 12, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L87) |
| ` public static void renderPreviewAt(GuiGraphicsExtractor graphics, ItemStack diskStack, int mouseX, int mouseY, int tooltipX, int tooltipY, int tooltipWidth) ` | 实现调用 ` handler.render(graphics, diskStack, mouseX, mouseY) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` StructureDiskPreviewSupport.getOrCreateCache(diskStack, minecraft.level) `<br>[调用处 ClientEventListener.onRenderTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L286) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L91) |
| ` public static void receiveStructureData(UUID structureUuid, CompoundTag structureData) ` | 接收服务端返回的结构预览NBT数据（由 StructurePreviewResponsePacket 调用） 存储原始数据，待 tooltip 渲染时再解析为 LevelLike。<br>执行 ` StructureDiskPreviewSupport.PENDING_PREVIEW_DATA.put(structureUuid, structureData) `<br>[调用处 StructurePreviewResponsePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewResponsePacket.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L130) |
| ` public static void clearCache() ` | 实现调用 ` PREVIEW_CACHE.clear() `<br>实现调用 ` PENDING_PREVIEW_DATA.clear() `<br>实现调用 ` StructureLoadUtil.clearClientStructureCache() `<br>[调用处 ClientEventListener.onClientPlayerDisconnect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L185) |
| ` public StructureDiskPreviewSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L44) |

## StructureDiskPreviewSupport.PreviewHandler

` public interface PreviewHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L52)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean render(GuiGraphicsExtractor graphics, ItemStack stack, int mouseX, int mouseY) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L54) |

## StructurePreviewEffects

` public record StructurePreviewEffects(VoxelShape range, float opacity, BiConsumer<SubmitNodeCollector, PoseStack> additional) implements StructurePreviewPipRenderer.Effects `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L25)

为砧库结构预览添加范围框、扫描后处理及轮盘的附加模型。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void submit(SubmitNodeCollector collector, PoseStack pose) ` | 分支 ` (this.additional != null) ` 内调用 ` this.additional.accept(collector, pose) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L28) |
| ` @Override public void render(StructurePreviewPipRenderer.State state) ` | 实现调用 ` Minecraft.getInstance().gameRenderer.getGameRenderState() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` state.x1() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L35) |
| ` public StructurePreviewEffects(VoxelShape range, float opacity, BiConsumer<SubmitNodeCollector, PoseStack> additional) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L25) |
| ` public VoxelShape range() ` | 读取 record 分量 ` range ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L26) |
| ` public float opacity() ` | 读取 record 分量 ` opacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L26) |
| ` public BiConsumer<SubmitNodeCollector, PoseStack> additional() ` | 读取 record 分量 ` additional ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewEffects.java#L25) |

## StructurePreviewScene

` public record StructurePreviewScene(StructureTemplate template, SandboxRenderLevel level, BlockPos offset, AABB bounds) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37)

机器、磁盘提示和配方预览共用砧库的沙盒与原生结构渲染器。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static StructurePreviewScene of(LevelLike source) ` | 末尾返回 ` of(source, true) `<br>[调用处 SmartBlockPlacerScreen.renderPreviewAutoScaled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L1232) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L44) |
| ` public static StructurePreviewScene of(LevelLike source, boolean blockEntities) ` | ` (cached != null && cached.revision() == source.getRevision() && cached.layer() == source.getCurrentVisibleLayer() && cached.allLayers() == source.isAllLayersVisible() && cached.blockEntities() == blockEntities) ` 成立时提前返回 ` cached.scene() `<br>末尾返回 ` scene `<br>[调用处 HammerWheelIconRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerWheelIconRenderer.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L48) |
| ` public void submit(GuiGraphicsExtractor graphics, Matrix4f transform, int x0, int y0, int x1, int y1, float scale, VoxelShape range, float scanOpacity) ` | 执行 ` this.submit(graphics, transform, x0, y0, x1, y1, scale, range, scanOpacity, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L107) |
| ` public void submit(GuiGraphicsExtractor graphics, Matrix4f transform, int x0, int y0, int x1, int y1, float scale, VoxelShape range, float scanOpacity, @Nullable BiConsumer<SubmitNodeCollector, PoseStack> additional) ` | 实现调用 ` new Matrix4f(transform).translate(-this.offset.getX(), -this.offset.getY(), -this.offset.getZ()) `<br>实现调用 ` this.offset.getX() `<br>实现调用 ` this.offset.getY() `<br>[调用处 StructurePreviewScene.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L112) |
| ` public static void render(SandboxRenderLevel level, ViewportCameraRig camera, GuiGraphicsExtractor graphics, int width, int height, float panX, float panY, VoxelShape range, float scanOpacity) ` | 实现调用 ` camera.getZoom() `<br>实现调用 ` new Matrix4f().translate(panX / scale, panY / scale, 0) .scale(1 / scale).mul(camera.buildViewMatrix()) `<br>实现调用 ` new Matrix4f().translate(panX / scale, panY / scale, 0) .scale(1 / scale) `<br>[调用处 SmartBlockPlacerScreen.renderPreviewAutoScaled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L1251) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L128) |
| ` public StructurePreviewScene(StructureTemplate template, SandboxRenderLevel level, BlockPos offset, AABB bounds) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37) |
| ` public StructureTemplate template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37) |
| ` public SandboxRenderLevel level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37) |
| ` public BlockPos offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37) |
| ` public AABB bounds() ` | 读取 record 分量 ` bounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructurePreviewScene.java#L37) |

## TerminalRemoteOverlay

` public final class TerminalRemoteOverlay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L50)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void setHovering(ItemStack stack) ` | 实现调用 ` TerminalRemoteOverlay.storageIdOf(stack) `<br>实现调用 ` stack.is(ModItems.HYPERDIMENSION_TERMINAL) `<br>分支 ` (newId != null && !stack.is(ModItems.HYPERDIMENSION_TERMINAL)) ` 内调用 ` TerminalReachabilityCache.ensure(newId) `<br>[调用处 TerminalOverlayEventListener.onContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L96) |
| ` public static boolean isHovering() ` | 末尾返回 ` TerminalRemoteOverlay.storageId != null `<br>[调用处 TerminalOverlayEventListener.onTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L117) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean isDismissed() ` | 末尾返回 ` TerminalRemoteOverlay.dismissed `<br>[调用处 TerminalOverlayEventListener.onContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L121) |
| ` public static void setDismissed(boolean dismissed) ` | 执行 ` TerminalRemoteOverlay.dismissed = dismissed `<br>[调用处 TerminalOverlayEventListener.onContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L126) |
| ` public static boolean isBoundTerminal(ItemStack stack) ` | 末尾返回 ` TerminalRemoteOverlay.storageIdOf(stack) != null `<br>[调用处 TerminalOverlayEventListener.onContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L130) |
| ` public static @Nullable UUID terminalIdOf(ItemStack stack) ` | 末尾返回 ` TerminalRemoteOverlay.storageIdOf(stack) `<br>[调用处 TerminalOverlayEventListener.onClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L126) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L134) |
| ` public static void render(GuiGraphicsExtractor graphics, Font font, float partialTick) ` | 实现调用 ` TerminalRemoteOverlay.isHovering() `<br>实现调用 ` TerminalRemoteOverlay.panelW() `<br>实现调用 ` TerminalRemoteOverlay.panelH() `<br>[调用处 TerminalOverlayEventListener.onRender](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L92) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L138) |
| ` public static boolean mouseClicked(MouseButtonEvent event, boolean doubleClick) ` | ` (button != 0 && button != 1) ` 成立时提前返回 ` false `<br>` (!TerminalRemoteOverlay.isHovering()) ` 成立时提前返回 ` false `<br>` (TerminalRemoteOverlay.taking) ` 成立时提前返回 ` true `<br>` (TerminalRemoteOverlay.cursor < 0) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 TerminalOverlayEventListener.onClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L227) |
| ` public static boolean mouseScrolled(int amount) ` | ` (!TerminalRemoteOverlay.isHovering()) ` 成立时提前返回 ` false `<br>` (TerminalRemoteOverlay.order.isEmpty()) ` 成立时提前返回 ` true `<br>末尾返回 ` true `<br>[调用处 TerminalOverlayEventListener.onScroll](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L255) |
| ` public static boolean keyPressed(KeyEvent event) ` | ` (!TerminalRemoteOverlay.isHovering()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 TerminalOverlayEventListener.onKey](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L293) |
| ` public static boolean charTyped(CharacterEvent event) ` | ` (!TerminalRemoteOverlay.isHovering() \|\| !TerminalRemoteOverlay.searchBoxFocused()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 TerminalOverlayEventListener.onCharacter](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L333) |
| ` public static boolean hasSelection() ` | 末尾返回 ` TerminalRemoteOverlay.cursor >= 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L344) |
| ` public static void tick() ` | 实现调用 ` TerminalRemoteOverlay.isHovering() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` id.equals(TerminalSessions.localTerminalId(player.getUUID())) `<br>[调用处 TerminalOverlayEventListener.onRender](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L378) |
| ` public static void applyCarriedIfCreative(ItemStack carried) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` creativeScreen.getMenu().setCarried(carried) `<br>实现调用 ` creativeScreen.getMenu() `<br>[调用处 TerminalOverlayEventListener.onClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L135) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L694) |
| ` public static void updateForTooltip(int tooltipX, int tooltipY) ` | 实现调用 ` TerminalRemoteOverlay.reanchor() `<br>[调用处 TerminalOverlayEventListener.onContainer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L737) |
| ` public static void reset() ` | 实现调用 ` List.of() `<br>实现调用 ` TerminalRemoteOverlay.CONTENTS.clear() `<br>实现调用 ` TerminalRemoteOverlay.COUNTS.clear() `<br>[调用处 TerminalOverlayEventListener.clear](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L226) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TerminalRemoteOverlay.java#L801) |

## TranslucentVertexConsumer

` public record TranslucentVertexConsumer(VertexConsumer delegate, int alpha) implements VertexConsumer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L9)

透明顶点消费者<br>参数 ` delegate ` 原始顶点消费者（委托对象）<br>参数 ` alpha ` 目标半透明度（0-255，50% 对应 128）

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public VertexConsumer addVertex(float v, float v1, float v2) ` | 末尾返回 ` this.delegate.addVertex(v, v1, v2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L10) |
| ` @Override public VertexConsumer setColor(int i, int i1, int i2, int i3) ` | 末尾返回 ` this.delegate.setColor(i, i1, i2, this.alpha) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L15) |
| ` @Override public VertexConsumer setColor(int color) ` | 末尾返回 ` this.delegate.setColor((this.alpha & 0xFF) << 24 \| color & 0xFFFFFF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L20) |
| ` @Override public VertexConsumer setUv(float v, float v1) ` | 末尾返回 ` this.delegate.setUv(v, v1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L25) |
| ` @Override public VertexConsumer setUv1(int i, int i1) ` | 末尾返回 ` this.delegate.setUv1(i, i1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L30) |
| ` @Override public VertexConsumer setUv2(int i, int i1) ` | 末尾返回 ` this.delegate.setUv2(i, i1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L35) |
| ` @Override public VertexConsumer setNormal(float v, float v1, float v2) ` | 末尾返回 ` this.delegate.setNormal(v, v1, v2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L40) |
| ` @Override public VertexConsumer setLineWidth(float width) ` | 末尾返回 ` this.delegate.setLineWidth(width) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L45) |
| ` public TranslucentVertexConsumer(VertexConsumer delegate, int alpha) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L9) |
| ` public VertexConsumer delegate() ` | 读取 record 分量 ` delegate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L9) |
| ` public int alpha() ` | 读取 record 分量 ` alpha ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TranslucentVertexConsumer.java#L9) |

## TransparentItemRenderer

` public final class TransparentItemRenderer extends PictureInPictureRenderer<TransparentItemRenderer.State> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TransparentItemRenderer.java#L37)

在物品顶点阶段应用透明度，保留原生闪光材质的混合规则。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TransparentItemRenderer(MultiBufferSource.BufferSource buffer) ` | 实现调用 ` super(buffer) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.getModelManager() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TransparentItemRenderer.java#L42) |
| ` public static void extract(ItemStack stack, GuiGraphicsExtractor graphics, int x, int y, float alpha) ` | 执行 ` extract(stack, graphics, x, y, alpha, 0) `<br>[调用处 RenderSupport.renderItemWithTransparency](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TransparentItemRenderer.java#L49) |
| ` public static void extract(ItemStack stack, GuiGraphicsExtractor graphics, int x, int y, float alpha, int slotOverlay) ` | 实现调用 ` stack.isEmpty() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.getItemModelResolver() `<br>[调用处 RenderSupport.renderSlotGhost](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TransparentItemRenderer.java#L53) |
| ` @Override public Class<State> getRenderStateClass() ` | 末尾返回 ` State.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TransparentItemRenderer.java#L71) |
| ` @Override public void close() ` | 实现调用 ` this.features.close() `<br>实现调用 ` this.buffers.close() `<br>实现调用 ` super.close() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TransparentItemRenderer.java#L104) |
