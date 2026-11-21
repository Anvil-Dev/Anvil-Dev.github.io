# dev.dubhe.anvilcraft.client.support（GravitationalLensSupport.HoleProjection 至 RenderSupport）



## GravitationalLensSupport.HoleProjection

` public static final class HoleProjection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L178)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final float centerU ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L179) |
| ` public final float centerV ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L180) |
| ` public final float cameraDistance ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L181) |
| ` public final float lensDirection ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L182) |

## GuiRenderSupport

` public class GuiRenderSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void centeredEllipsisText(GuiGraphicsExtractor graphics, Font font, Component text, int x, int y, int max) ` | 执行 ` GuiRenderSupport.centeredEllipsisText(graphics, font, text, x, y, max, 0xFFFFFFFF) `<br>[调用处 CategoryButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L11) |
| ` public static void centeredEllipsisText(GuiGraphicsExtractor graphics, Font font, Component text, int x, int y, int max, int color) ` | 实现调用 ` font.width(text) `<br>分支 ` (width < max) ` 内调用 ` graphics.centeredText(font, text, x + Math.floorDiv(max, 2), y, color) `<br>分支 ` (width < max) ` 内调用 ` Math.floorDiv(max, 2) `<br>[调用处 GuiRenderSupport.centeredEllipsisText](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L12) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L15) |
| ` public GuiRenderSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L10) |

## HammerPreviewState

` public final class HammerPreviewState implements IHasHammerEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HammerPreviewState(BlockPos target, BlockState initial, List<BlockState> choices) ` | 实现调用 ` target.immutable() `<br>实现调用 ` List.copyOf(choices) `<br>实现调用 ` this.model(initial) `<br>[调用处 WheelLifecycleEventListener.getHammerWheel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L290) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L25) |
| ` public int currentIndex() ` | 末尾返回 ` this.choices.indexOf(this.currentState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L40) |
| ` public void begin() ` | 实现调用 ` Minecraft.getInstance().levelRenderer.setBlockDirty(this.hiddenBlockPos(), false) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` this.hiddenBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L44) |
| ` public void select(int index) ` | 实现调用 ` this.choices.size() `<br>实现调用 ` this.choices.get(index) `<br>分支 ` (selected != this.currentState) ` 内调用 ` this.model(selected) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L50) |
| ` public boolean isValid() ` | ` (level == null \|\| !level.getBlockState(this.target).is(this.initial.getBlock())) ` 成立时提前返回 ` false `<br>末尾返回 ` entity == null \|\| entity.getType().isValid(this.currentState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L58) |
| ` public void end() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.levelRenderer.setBlockDirty(this.hiddenBlockPos(), false) `<br>实现调用 ` this.hiddenBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L65) |
| ` @Override public boolean shouldRender() ` | 末尾返回 ` this.active && Minecraft.getInstance().level != null `<br>[调用处 HammerPreviewState.shouldSkipRebuildBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L73) |
| ` @Override public boolean shouldSkipRebuildBlock() ` | 末尾返回 ` this.shouldRender() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L78) |
| ` @Override public BlockPos renderingBlockPos() ` | 末尾返回 ` this.currentModel.pos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L83) |
| ` @Override public BlockPos hiddenBlockPos() ` | 末尾返回 ` this.originalModel.pos() `<br>[调用处 HammerPreviewState.begin](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L88) |
| ` @Override public BlockState renderingBlockState() ` | 末尾返回 ` this.currentModel.state() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L93) |
| ` @Override public RenderType renderType() ` | 末尾返回 ` IrisState.isShaderEnabled() ? RenderTypes.translucentMovingBlock() : ModRenderTypes.TRANSLUCENT_COLORED_OVERLAY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerPreviewState.java#L98) |

## HammerWheelIconRenderer

` public final class HammerWheelIconRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerWheelIconRenderer.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HammerWheelIconRenderer(ClientLevel level, ModelRenderTarget target) ` | [调用处 WheelLifecycleEventListener.getHammerWheel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L299) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerWheelIconRenderer.java#L35) |
| ` @SuppressWarnings({"rawtypes", "unchecked"}) public void render(GuiGraphicsExtractor graphics, Vec2 camera) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` this.level.get() `<br>实现调用 ` pose.mulPose(Axis.XP.rotationDegrees(camera.x)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/HammerWheelIconRenderer.java#L40) |

## InspectionSupport

` public class InspectionSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final InspectionSupport INSTANCE ` | 初值 ` new InspectionSupport() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L32) |
| ` public static void initializeClient() ` | 实现调用 ` AnvilCraft.of("silencer") `<br>[调用处 AnvilCraftClient.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L36) |
| ` public void registerActionClient(Identifier id, InspectionAction action) ` | 注册检查项 检查项需同时在 ModInspections 和 InspectionSupport 中注册 对于 ModInspections，使用 ModInspections#registerActionServer(Identifier) 注册检查项<br>参见 ModInspections<br>实现调用 ` this.inspectionActionMap.containsKey(id) `<br>实现调用 ` this.inspectionActionMap.put(id, action) `<br>实现调用 ` this.inspectionState.put(id, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L70) |
| ` public void changeStateClient(Identifier id, boolean state) ` | 实现调用 ` InspectionSupport.log.info("{} inspection {}.", state ? "Disabling" : "Enabling", id) `<br>实现调用 ` this.inspectionState.put(id, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L80) |
| ` public void onRenderInspectionAction( PoseStack poseStack, SubmitNodeCollector renderer, Vec3 camera, DeltaTracker deltaTracker ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L85) |
| ` public InspectionSupport() ` | Java 提供的无参构造器。<br>[调用处 InspectionSupport](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L32) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L30) |

## InspectionSupport.InspectionAction

` public interface InspectionAction `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L103)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onRenderInspection( PoseStack poseStack, SubmitNodeCollector renderer, Vec3 camera, DeltaTracker deltaTracker ) ` | 当检查项启用时 将调用此方法渲染 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L106) |

## LevelLikeDisplaySupport

` public class LevelLikeDisplaySupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/LevelLikeDisplaySupport.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<List<ItemStack>> tagIngredients(MultiblockDefinition definition) ` | 末尾返回 ` result `<br>[调用处 MultiBlockConversionCategory.setRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/multiblock/MultiBlockConversionCategory.java#L188) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/LevelLikeDisplaySupport.java#L29) |
| ` public static void cycleTags(LevelLike level) ` | 执行 ` cycleTags(level, (int) (Util.getMillis() / 1000)) `<br>[调用处 MultiBlock4DCategory.draw](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/multiblock/MultiBlock4DCategory.java#L197) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/LevelLikeDisplaySupport.java#L39) |
| ` public static void cycleTags(LevelLike level, int variant) ` | 实现调用 ` TAG_SLOTS.getOrDefault(level, List.of()) `<br>实现调用 ` List.of() `<br>实现调用 ` slot.states.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/LevelLikeDisplaySupport.java#L43) |
| ` public static LevelLike asLevelLike(MultiblockDefinition pattern) ` | 末尾返回 ` levelLike ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/LevelLikeDisplaySupport.java#L64) |
| ` public static LevelLike asLevelLike(BlockPattern pattern) ` | 末尾返回 ` levelLike ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/LevelLikeDisplaySupport.java#L87) |
| ` public LevelLikeDisplaySupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/LevelLikeDisplaySupport.java#L26) |

## MagnetAnvilAnimation

` public final class MagnetAnvilAnimation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L22)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void start(Vec3 start, BlockPos end, BlockState state, boolean requiresMagnet) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` end.getY() `<br>实现调用 ` level.getBlockState(end) `<br>[调用处 MagnetAnvilAnimationPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L30) |
| ` public static boolean hidesBlock(BlockPos pos, BlockState state) ` | 末尾返回 ` animation != null && animation.state == state && animation.hidden `<br>[调用处 SectionCompilerMixin.skipBlockAt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/SectionCompilerMixin.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L44) |
| ` @SubscribeEvent public static void onTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.isPaused() `<br>实现调用 ` update(client, ticks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L49) |
| ` @SubscribeEvent public static void onUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ClientLevel) ` 内调用 ` ANIMATIONS.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L79) |
| ` @SubscribeEvent public static void onRender(SubmitCustomGeometryEvent event) ` | 事件总线派发 ` SubmitCustomGeometryEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` ANIMATIONS.isEmpty() `<br>实现调用 ` client.getDeltaTracker().getGameTimeDeltaPartialTick(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L84) |

## OverworldLikeClientState

` public final class OverworldLikeClientState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L10)

Client copy of the global overworld-like sky state.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void update( int generation, long visualSeed, long orbitEpochGameTime, OverworldLikeWorldState.Phase phase ) ` | [调用处 OverworldLikeSkyStatePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L20) |
| ` public static void clear() ` | [调用处 OverworldLikeClientEvents.logout](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeClientEvents.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L35) |
| ` public static boolean isInitialized() ` | 末尾返回 ` generation >= 0 `<br>[调用处 OverworldLikeOrbitalSkyRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L43) |
| ` public static long visualSeed() ` | 末尾返回 ` visualSeed `<br>[调用处 OverworldLikeOrbitalSkyRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L79) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L47) |
| ` public static long orbitEpochGameTime() ` | 末尾返回 ` orbitEpochGameTime `<br>[调用处 OverworldLikeOrbitalSkyRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L51) |
| ` public static OverworldLikeWorldState.Phase phase() ` | 末尾返回 ` phase `<br>[调用处 OverworldLikeOrbitalSkyRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L55) |
| ` public static float eclipseFactor(ClientLevel level) ` | ` (!isInitialized() \|\| phase == OverworldLikeWorldState.Phase.RESET_PENDING) ` 成立时提前返回 ` 0.0F `<br>末尾返回 ` OverworldLikeOrbitMath.eclipseFactor( level.getGameTime(), level.getOverworldClockTime(), orbitEpochGameTime, visualSeed ) `<br>[调用处 OverworldLikeOrbitalSkyRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L59) |
| ` public static float modifySkyDarken(ClientLevel level, float original) ` | 末尾返回 ` original * environmentColorMultiplier(level) `<br>[调用处 OverworldLikeLightmapMixin.anvilcraft$eclipseLight](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/OverworldLikeLightmapMixin.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L69) |
| ` public static float environmentColorMultiplier(ClientLevel level) ` | 末尾返回 ` 1.0F - eclipseFactor(level) * AnvilCraft.CLIENT_CONFIG.graphics.overworldLikeEclipseDarken `<br>[调用处 OverworldLikeVisualEventListener.onComputeFogColor](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeVisualEventListener.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L73) |
| ` public static void beginCollapse(int elapsedTicks) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` level.getGameTime() `<br>实现调用 ` Math.max(0, elapsedTicks) `<br>[调用处 OverworldLikeCollapsePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L77) |
| ` public static float collapseProgress() ` | ` (phase != OverworldLikeWorldState.Phase.COLLAPSING \|\| collapseStartedAt < 0L) ` 成立时提前返回 ` 0.0F `<br>` (level == null) ` 成立时提前返回 ` 0.0F `<br>末尾返回 ` Math.clamp((level.getGameTime() - collapseStartedAt) / 40.0F, 0.0F, 1.0F) `<br>[调用处 OverworldLikeOrbitalSkyRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L81) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L84) |

## OverworldLikeCollapseOverlay

` public final class OverworldLikeCollapseOverlay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeCollapseOverlay.java#L9)

Full-screen white flash shown to players caught in a collapsing generation.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphicsExtractor guiGraphics) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` CelestialTravelManager.isOverworldLike(minecraft.level.dimension()) `<br>实现调用 ` minecraft.level.dimension() `<br>[调用处 GuiLayerRegistrationEventListener.onRegister](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeCollapseOverlay.java#L13) |

## PillSelectorSupport

` public class PillSelectorSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final PillSelectorSupport INSTANCE ` | 初值 ` new PillSelectorSupport() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L14) |
| ` public static final Identifier BACKGROUND ` | 初值 ` SharedTextures.bg("misc", "pill_box") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L15) |
| ` public void setPillBox(ItemStack pillBox, BoxSelectionTarget target) ` | 实现调用 ` this.target.equals(target) `<br>分支 ` (changed) ` 内调用 ` this.resetIndex() `<br>实现调用 ` pillBox.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L24) |
| ` public void clearHoveredSlot() ` | 执行 ` this.target = BoxSelectionTarget.NONE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L43) |
| ` public boolean hasItem() ` | 末尾返回 ` !this.pillBox.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L47) |
| ` public void mouseScrolled(int amount) ` | 实现调用 ` this.contents.mutable() `<br>实现调用 ` mutable.setIndex(mutable.getIndex() + Integer.signum(amount)) `<br>实现调用 ` mutable.getIndex() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L51) |
| ` public void render(GuiGraphicsExtractor graphics, int x, int y) ` | 实现调用 ` graphics.blit( RenderPipelines.GUI_TEXTURED, PillSelectorSupport.BACKGROUND, left, top, 0, 0, 78, 44, 78, 44 ) `<br>实现调用 ` this.contents.pills().size() `<br>实现调用 ` this.contents.pills() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L60) |

## PowerGridSupport

` public class PowerGridSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Map<Integer, SimplePowerGrid> getGridMap() ` | 末尾返回 ` PowerGridSupport.GRID_MAP `<br>[调用处 SimplePowerGrid.findPowerGrid](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/SimplePowerGrid.java#L117) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L30) |
| ` public static void submitPowerGridBounds(PoseStack poseStack, SubmitNodeCollector nodeCollector, Vec3 camera) ` | 渲染<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().level.dimension().identifier().toString() `<br>实现调用 ` Minecraft.getInstance().level.dimension().identifier() `<br>[调用处 SubmitGeometryEventListener.submitPowerGridLines](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SubmitGeometryEventListener.java#L131) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L35) |
| ` public static void submitEnhancedTransmitterLine(PoseStack poseStack, SubmitNodeCollector collector, Vec3 camera) ` | 实现调用 ` RenderState.isEnhancedRenderingAvailable() `<br>实现调用 ` RenderState.isBloomEffectEnabled() `<br>实现调用 ` submitTransmitterLines(poseStack, collector, camera, ModRenderTypes.LINE_BLOOM) `<br>[调用处 SubmitGeometryEventListener.on](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SubmitGeometryEventListener.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L59) |
| ` public static void submitTransmitterLine(PoseStack poseStack, SubmitNodeCollector collector, Vec3 camera) ` | 实现调用 ` RenderState.isEnhancedRenderingAvailable() `<br>实现调用 ` RenderState.isBloomEffectEnabled() `<br>实现调用 ` submitTransmitterLines(poseStack, collector, camera, RenderTypes.lines()) `<br>[调用处 SubmitGeometryEventListener.on](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SubmitGeometryEventListener.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L64) |
| ` public static void mergeSyncChunk(PowerGridSyncChunkPacket packet) ` | 实现调用 ` packet.totalChunks() `<br>实现调用 ` packet.chunkIndex() `<br>实现调用 ` packet.gridId() `<br>[调用处 PowerGridSyncChunkPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncChunkPacket.java#L124) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L102) |
| ` public static void acceptGrid(SimplePowerGrid grid) ` | 实现调用 ` PENDING.remove(grid.getId()) `<br>实现调用 ` grid.getId() `<br>实现调用 ` installGrid(grid) `<br>[调用处 PowerGridSyncPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridSyncPacket.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L118) |
| ` public static void removeGrid(int id) ` | 实现调用 ` GRID_MAP.remove(id) `<br>分支 ` (grid != null) ` 内调用 ` grid.destroy() `<br>实现调用 ` PENDING.remove(id) `<br>[调用处 PowerGridRemovePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/PowerGridRemovePacket.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L131) |
| ` public static void clearAllGrid() ` | 实现调用 ` SimplePowerGrid.recreateExecutorLimitedParallelism() `<br>实现调用 ` PowerGridSupport.GRID_MAP.values() `<br>实现调用 ` value.destroy() `<br>[调用处 ClientLevelMixin.onLevelLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L150) |
| ` public PowerGridSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/PowerGridSupport.java#L25) |

## ProcessOverlayRenderer

` public final class ProcessOverlayRenderer extends PictureInPictureRenderer<ProcessOverlayRenderer.State> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L52)

在同一深度缓冲中绘制工序的材料、落地阴影与铁砧。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ProcessOverlayRenderer(MultiBufferSource.BufferSource buffer) ` | 实现调用 ` super(buffer) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.getModelManager() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L59) |
| ` public static void extract( GuiGraphicsExtractor graphics, ItemStack stack, float x, float y, float scale, float anvilLift, int seed ) ` | 执行 ` extract(graphics, stack, x, y, scale, anvilLift, seed, List.of()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L66) |
| ` public static void extract( GuiGraphicsExtractor graphics, ItemStack stack, float x, float y, float scale, float anvilLift, int seed, List<PreviewBlock> blocks ) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.getItemModelResolver() `<br>实现调用 ` item.getModelBoundingBox() `<br>[调用处 ProceduralProcessCategory.drawStepOverlay](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/ProceduralProcessCategory.java#L290) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L72) |
| ` @Override public Class<State> getRenderStateClass() ` | 末尾返回 ` State.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L124) |
| ` @Override public void close() ` | 实现调用 ` this.features.close() `<br>实现调用 ` this.buffers.close() `<br>实现调用 ` super.close() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L197) |

## ProcessOverlayRenderer.PreviewBlock

` public record PreviewBlock(float y, BiConsumer<SubmitNodeCollector, PoseStack> draw) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L245)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PreviewBlock(float y, BiConsumer<SubmitNodeCollector, PoseStack> draw) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L245) |
| ` public float y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L245) |
| ` public BiConsumer<SubmitNodeCollector, PoseStack> draw() ` | 读取 record 分量 ` draw ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L245) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L245) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L245) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L245) |

## ProcessOverlayRenderer.State

` public record State(ItemStackRenderState item, List<Vector3f> offsets, float bottom, float rotation, BlockModelRenderState anvil, float anvilLift, List<PreviewBlock> blocks, int x0, int y0, int x1, int y1, float scale, Matrix3x2f pose, ScreenRectangle scissorArea) implements PictureInPictureRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L248)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @Nullable ScreenRectangle bounds() ` | 末尾返回 ` this.scissorArea == null ? bounds : this.scissorArea.intersection(bounds) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L253) |
| ` public State(ItemStackRenderState item, List<Vector3f> offsets, float bottom, float rotation, BlockModelRenderState anvil, float anvilLift, List<PreviewBlock> blocks, int x0, int y0, int x1, int y1, float scale, Matrix3x2f pose, ScreenRectangle scissorArea) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L248) |
| ` public ItemStackRenderState item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L249) |
| ` public List<Vector3f> offsets() ` | 读取 record 分量 ` offsets ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L249) |
| ` public float bottom() ` | 读取 record 分量 ` bottom ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L249) |
| ` public float rotation() ` | 读取 record 分量 ` rotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L249) |
| ` public BlockModelRenderState anvil() ` | 读取 record 分量 ` anvil ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L249) |
| ` public float anvilLift() ` | 读取 record 分量 ` anvilLift ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L250) |
| ` public List<PreviewBlock> blocks() ` | 读取 record 分量 ` blocks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L250) |
| ` public int x0() ` | 读取 record 分量 ` x0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L251) |
| ` public int y0() ` | 读取 record 分量 ` y0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L251) |
| ` public int x1() ` | 读取 record 分量 ` x1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L251) |
| ` public int y1() ` | 读取 record 分量 ` y1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L251) |
| ` public float scale() ` | 读取 record 分量 ` scale ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L251) |
| ` public Matrix3x2f pose() ` | 读取 record 分量 ` pose ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L251) |
| ` public ScreenRectangle scissorArea() ` | 读取 record 分量 ` scissorArea ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L251) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L248) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L248) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessOverlayRenderer.java#L248) |

## ProcessingModelShape

` public interface ProcessingModelShape `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessingModelShape.java#L4)

旧版 isGui3d 区分生成物品模型与方块几何，与 gui\_light 无关。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean anvilcraft$isThreeDimensional() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessingModelShape.java#L5) |
| ` void anvilcraft$setThreeDimensional(boolean value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/ProcessingModelShape.java#L7) |

## RenderSupport

` public class RenderSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L47)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void renderItemWithTransparency(ItemStack stack, GuiGraphicsExtractor graphics, int x, int y, float alpha) ` | 执行 ` TransparentItemRenderer.extract(stack, graphics, x, y, alpha) `<br>[调用处 AutoEnchantingTableScreen.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L207) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L49) |
| ` public static void renderSlotGhost(ItemStack stack, GuiGraphicsExtractor graphics, int x, int y, float alpha, int overlay) ` | 执行 ` TransparentItemRenderer.extract(stack, graphics, x, y, alpha, overlay) `<br>[调用处 CelestialForgingAnvilScreen.renderSlotGhosts](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L912) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L54) |
| ` public static int processAnchorIndex(AbstractProcessRecipe<?> recipe) ` | 末尾返回 ` Math.clamp(index, 0, Math.max(recipe.getInputBlocks().size() - 1, 0)) `<br>[调用处 MDProceduralProcessRecipeComponent.renderStep](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L83) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L77) |
| ` public static void renderBlock(GuiGraphicsExtractor graphics, BlockState block, float x, float y, float size) ` | 执行 ` GuiRenderExtras.tessellateBlock(graphics, block, null, null, x, y, x + size, y + size, -1, true, RenderSupport.BLOCK_DISPLAY_POSE.copy()) `<br>[调用处 ChargerChargingCategory.draw](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/ChargerChargingCategory.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L84) |
| ` public static void renderBlockAt(GuiGraphicsExtractor graphics, BlockState block, float x, float y, float scale) ` | Draw a preview at an anchor with a fixed number of GUI pixels per block.<br>实现调用 ` block.getFluidState().isEmpty() `<br>实现调用 ` block.getFluidState() `<br>分支 ` (!block.getFluidState().isEmpty()) ` 内调用 ` Minecraft.getInstance() `<br>[调用处 MDMineralFountainRecipeComponent.renderOutput](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L167) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L101) |
| ` public static void render3x3Block(GuiGraphicsExtractor graphics, BlockState block, float x, float y, float size) ` | 实现调用 ` RenderSupport.BLOCK_DISPLAY_POSE.copy() `<br>实现调用 ` poseStack.scale(0.3F, 0.3F, 0.3F) `<br>实现调用 ` GuiRenderExtras.tessellateBlock(graphics, block, null, null, x, y, x + size, y + size, -1, true, poseStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L202) |
| ` public static void renderWipBlock( GuiGraphicsExtractor graphics, Identifier recipeId, int stepCount, float x, float y, float size ) ` | 实现调用 ` Minecraft.getInstance() `<br>分支 ` (level == null) ` 内调用 ` RenderSupport.renderBlock(graphics, ModBlocks.WIP_BLOCK.get().defaultBlockState(), x, y, size) `<br>分支 ` (level == null) ` 内调用 ` ModBlocks.WIP_BLOCK.get().defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L220) |
| ` public static void renderWipBlockAt( GuiGraphicsExtractor graphics, @Nullable Identifier displayedModel, float x, float y, float scale ) ` | 执行 ` renderModelsAt(graphics, x, y, scale, extractWipBlock(displayedModel)) `<br>[调用处 MDProceduralProcessRecipeComponent.renderStep](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L258) |
| ` public static BiConsumer<SubmitNodeCollector, PoseStack> extractProcessBlock(BlockState block, @Nullable Identifier displayedModel) ` | ` (block.is(ModBlocks.WIP_BLOCK)) ` 成立时提前返回 ` extractWipBlock(displayedModel) `<br>` (entity != null) ` 成立时提前返回 ` entity `<br>末尾返回 ` (collector, pose) -> model.submitMultiLayer(pose, collector, LightCoordsUtil.FULL_BRIGHT, OverlayTexture.NO_OVERLAY, 0) `<br>[调用处 ProceduralProcessCategory.draw](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/ProceduralProcessCategory.java#L231) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L278) |
| ` public static void renderLevelLikeAt( LevelLike level, GuiGraphicsExtractor graphics, int posX, int posY, float scaleFactor, float rotationSpeed ) ` | 保持配方动画的锚点、缩放和旋转，模型由砧库渲染器绘制。<br>执行 ` RenderSupport.renderLevelLikeAt(level, graphics, posX, posY, scaleFactor, rotationSpeed, Mth.ceil(scaleFactor) * 2, false) `<br>[调用处 BeaconConversionCategory.draw](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/BeaconConversionCategory.java#L158) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L331) |
| ` public static void renderLevelLikeAt( LevelLike level, GuiGraphicsExtractor graphics, int posX, int posY, float scaleFactor, float rotationSpeed, int previewSize, boolean scanEffect ) ` | 实现调用 ` level.getMinPos() `<br>实现调用 ` level.getMaxPos() `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 StructureDiskPreviewSupport.renderPreviewAt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L342) |
| ` public static void renderLevelLike( LevelLike level, GuiGraphicsExtractor graphics, int posX, int posY, int size, int scale, float rotationSpeed, boolean glitched ) ` | 实现调用 ` level.getMinPos() `<br>实现调用 ` level.getMaxPos() `<br>实现调用 ` minPos.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L376) |
| ` public static float autoScale( Quaternionf rotation, AABB bounds, int windowWidth, int windowHeight, float padding ) ` | 末尾返回 ` Math.min((windowWidth - padding * 2) / Math.max(projectedWidth, 1.0E-4F), (windowHeight - padding * 2) / Math.max(projectedHeight, 1.0E-4F)) `<br>[调用处 SmartBlockPlacerScreen.renderPreviewAutoScaled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L1239) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L407) |
