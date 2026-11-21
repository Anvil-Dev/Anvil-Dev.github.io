# dev.dubhe.anvilcraft.client.support（AmuletSelectorSupport 至 PillSelectorSupport）



## AmuletSelectorSupport

` public class AmuletSelectorSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation BACKGROUND ` | 初值 ` SharedTextures.bg("misc", "amulet_box") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L20) |
| ` public static final int BACKGROUND_WIDTH ` | 初值 ` 78 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L21) |
| ` public static final int BACKGROUND_HEIGHT ` | 初值 ` 80 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L22) |
| ` public static void setHoveredSlot(int slotIndex) ` | 执行 ` AmuletSelectorSupport.hoveredSlot = slotIndex `<br>[调用处 ClientEventListener.onRenderTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L554) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L31) |
| ` public static void render(GuiGraphics guiGraphics, int x, int y) ` | 实现调用 ` RenderSystem.disableDepthTest() `<br>分支 ` (layout != null && contents != null) ` 内调用 ` RenderSystem.disableDepthTest() `<br>分支 ` (layout != null && contents != null) ` 内调用 ` layout.render(guiGraphics, left, top, contents) `<br>[调用处 ClientEventListener.onRenderTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L560) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L35) |
| ` public static boolean hasHoveringItem() ` | 末尾返回 ` !currentHoveringItemStack.isEmpty() `<br>[调用处 ClientEventListener.onMouseScrolled](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L226) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L58) |
| ` public static void setCurrentHoveringItemStack(ItemStack itemStack) ` | 实现调用 ` ItemStack.isSameItemSameComponents(currentHoveringItemStack, itemStack) `<br>实现调用 ` itemStack.isEmpty() `<br>实现调用 ` itemStack.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY) `<br>[调用处 ClientEventListener.onRenderTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L559) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L62) |
| ` public static void mouseScrolled(int amount) ` | 实现调用 ` getCurrentSelectedIndex() `<br>分支 ` (amount > 0) ` 内调用 ` next() `<br>分支 ` (amount < 0) ` 内调用 ` previous() `<br>[调用处 ClientEventListener.onMouseScrolled](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L228) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L90) |
| ` public static void previous() ` | 执行 ` selectDelta(-1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L101) |
| ` public static void next() ` | 执行 ` selectDelta(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L105) |
| ` public static void selectDelta(int delta) ` | 实现调用 ` getCurrentSelectedIndex() `<br>实现调用 ` setCurrentSelectedIndex(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L109) |
| ` public AmuletSelectorSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L19) |

## AmuletSelectorSupport.Layout

` public enum Layout `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L139)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` EMPTY ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L140) |
| ` NO_AMULET ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L150) |
| ` BIG_AMULET_1 ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L165) |
| ` SMALL_AMULET_1 ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L196) |
| ` SMALL_AMULET_2 ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L227) |
| ` public abstract void render(GuiGraphics guiGraphics, int x, int y, BoxContents content) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L332) |
| ` public static Layout layout(BoxContents content) ` | ` (content.isEmpty()) ` 成立时提前返回 ` EMPTY `<br>` (content.isAmuletEmpty()) ` 成立时提前返回 ` NO_AMULET `<br>` (firstBigAmulet) ` 成立时提前返回 ` BIG_AMULET_1 `<br>末尾返回 ` Layout.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L334) |
| ` public static Layout[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L139) |
| ` public static Layout valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L139) |

## AnvilParticleManager

` public class AnvilParticleManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void redstoneEmp(ClientLevel level, BlockPos center, int radius, List<BlockPos> affectedTorches) ` | 实现调用 ` AnvilParticleManager.setLevel(level) `<br>实现调用 ` pos.getCenter() `<br>实现调用 ` center.getCenter() `<br>[调用处 RedstoneEmpEffectPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneEmpEffectPacket.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L25) |
| ` public static void giantAnvilShock(ClientLevel level, BlockPos center, int radius) ` | 实现调用 ` AnvilParticleManager.setLevel(level) `<br>实现调用 ` AnvilParticleManager.SHOCKWAVES.add(new GiantAnvilShockwave(center, radius)) `<br>[调用处 GiantAnvilShockEffectPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L34) |
| ` public static void tick() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` AnvilParticleManager.setLevel(level) `<br>实现调用 ` minecraft.isPaused() `<br>[调用处 SeismicBounceTickEventListener.onTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/SeismicBounceTickEventListener.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L39) |
| ` public AnvilParticleManager() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L18) |

## DimensionNameSupport

` public final class DimensionNameSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DimensionNameSupport.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Component getName(ResourceLocation dimension) ` | 末尾返回 ` Component.translatableWithFallback(key, dimension.toString()) `<br>[调用处 MDMineralFountainRecipeComponent.getDimensionName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L264) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DimensionNameSupport.java#L12) |

## DiskDisplaySupport

` public final class DiskDisplaySupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L63)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ItemStack getImportedDisplay(StructureSnapshot snapshot) ` | ` (level == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (choices == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` matchStructure(data, StructureSnapshotCodec.write(snapshot), level.registryAccess(), choices) `<br>[调用处 StructureScannerScreen.onImportComplete](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L1547) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L73) |
| ` public static ItemStack getScannedDisplay(StructureScannerBlockEntity scanner) ` | ` (level == null \|\| !scanner.isScanComplete()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>[调用处 StructureScannerScreen.updateNameInputEditable](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L993) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L84) |
| ` public static ItemStack getDisplay(ItemStack stack) ` | ` (stack.is(ModItems.STRUCTURE_DISK) && marker != null) ` 成立时提前返回 ` marker.stored() `<br>` (stack.is(ModItems.DISK)) ` 成立时提前返回 ` recordedBlock(stack) `<br>` (!stack.is(ModItems.STRUCTURE_DISK)) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (level == null \|\| data == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (cached.isEmpty()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>[调用处 DiskItemRenderer.renderByItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L96) |
| ` @SubscribeEvent public static void recipesUpdated(RecipesUpdatedEvent event) ` | 事件总线派发 ` RecipesUpdatedEvent ` 时调用。<br>执行 ` reloadRecipes(event.getRecipeManager()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L143) |
| ` @SubscribeEvent public static void tagsUpdated(TagsUpdatedEvent event) ` | 事件总线派发 ` TagsUpdatedEvent ` 时调用。<br>实现调用 ` event.getUpdateCause() `<br>分支 ` (event.getUpdateCause() == TagsUpdatedEvent.UpdateCause.CLIENT_PACKET_RECEIVED) ` 内调用 ` RESULTS.invalidateAll() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L148) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` PATTERNS.clear() `<br>实现调用 ` RESULTS.invalidateAll() `<br>实现调用 ` StructureLoadUtil.clearClientStructureCache() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L153) |

## EnchantedGoldBlockGlints

` public class EnchantedGoldBlockGlints `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static EnchantedGoldBlockGlints getInstance() ` | 末尾返回 ` INSTANCE `<br>[调用处 RenderEventListener.onRenderEnchantedGoldGlints](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L36) |
| ` public void render(PoseStack poseStack, MultiBufferSource bufferSource, Vec3 cameraPos) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().options.getEffectiveRenderDistance() `<br>实现调用 ` EnchantedGoldBlockPositions.getPositions().iterator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L40) |

## FittedItemRenderer

` public final class FittedItemRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L38)

以独立的高分辨率纹理保留模型细节，再按实际可见轮廓适配标记大小。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render( ItemStack stack, float size, PoseStack pose, MultiBufferSource buffer, int light, int overlay ) ` | 执行 ` render(stack, size, pose, buffer, light, overlay, false) `<br>[调用处 FilterItemRenderer.renderByItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L50) |
| ` public static void render( ItemStack stack, float size, PoseStack pose, MultiBufferSource buffer, int light, int overlay, boolean suppressFoil ) ` | 实现调用 ` stack.isEmpty() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.getItemRenderer().getModel(stack, minecraft.level, minecraft.player, 0) `<br>[调用处 DiskItemRenderer.renderByItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L56) |
| ` public static float getGroundItemBottom(ItemStack stack, int seed) ` | ` (cached != null && cached.model == model && cached.count == stack.getCount()) ` 成立时提前返回 ` cached.bottom `<br>` (minecraft.level == null) ` 成立时提前返回 ` 0 `<br>末尾返回 ` bottom `<br>[调用处 RenderSupport.renderGroundItemPreview](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/RenderSupport.java#L443) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L90) |
| ` public static boolean isRenderingPreview() ` | 末尾返回 ` captureDepth > 0 `<br>[调用处 DiskItemRenderer.renderByItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L129) |

## FluidRenderHelper

` public final class FluidRenderHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidRenderHelper INSTANCE ` | 初值 ` new FluidRenderHelper() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L39) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, MultiBufferSource buffer, PoseStack ms, int light, boolean renderBottom, boolean invertGasses ) ` | 执行 ` this.renderFluidBox(fluid, minX, minY, minZ, maxX, maxY, maxZ, buffer, ms, light, getSkippedSides(renderBottom), invertGasses) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L41) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, MultiBufferSource buffer, PoseStack ms, int light, Set<Direction> skippedSides, boolean invertGasses ) ` | 实现调用 ` IClientFluidTypeExtensions.of(fluid.getFluid()) `<br>实现调用 ` fluid.getFluid() `<br>实现调用 ` ext.isOpaque() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L59) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, MultiBufferSource buffer, PoseStack ms, int light, boolean renderBottom, boolean invertGasses, TextureAtlasSprite sideTexture ) ` | MultiBufferSource 版、带自定义侧面贴图的重载（用于排水口向下流动水柱）。<br>实现调用 ` IClientFluidTypeExtensions.of(fluid.getFluid()) `<br>实现调用 ` fluid.getFluid() `<br>实现调用 ` ext.isOpaque() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L83) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, VertexConsumer builder, PoseStack ms, int light, boolean renderBottom, boolean invertGasses ) ` | 执行 ` this.renderFluidBox(fluid, minX, minY, minZ, maxX, maxY, maxZ, builder, ms, light, getSkippedSides(renderBottom), invertGasses) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L99) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, VertexConsumer builder, PoseStack ms, int light, Set<Direction> skippedSides, boolean invertGasses ) ` | 实现调用 ` IClientFluidTypeExtensions.of(fluid.getFluid()) `<br>实现调用 ` fluid.getFluid() `<br>实现调用 ` Minecraft.getInstance().getTextureAtlas(InventoryMenu.BLOCK_ATLAS) .apply(renderProps.getStillTexture(fluid)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L117) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, VertexConsumer builder, PoseStack ms, int light, boolean renderBottom, boolean invertGasses, TextureAtlasSprite sideTexture ) ` | 带自定义 侧面贴图 的流体盒渲染：水平四面用 sideTexture（如流动贴图，营造向下流动感）， 顶/底面用静止贴图。用于排水口向下水柱等需要"流动侧面"的渲染。<br>执行 ` this.renderFluidBox(fluid, minX, minY, minZ, maxX, maxY, maxZ, builder, ms, light, getSkippedSides(renderBottom), invertGasses, sideTexture) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L142) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, VertexConsumer builder, PoseStack ms, int light, Set<Direction> skippedSides, boolean invertGasses, TextureAtlasSprite sideTexture ) ` | 实现调用 ` IClientFluidTypeExtensions.of(fluid.getFluid()) `<br>实现调用 ` fluid.getFluid() `<br>实现调用 ` Minecraft.getInstance().getTextureAtlas(InventoryMenu.BLOCK_ATLAS) .apply(renderProps.getStillTexture(fluid)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L161) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, MultiBufferSource buffer, PoseStack ms, int light, Set<Direction> skippedSides, float alphaFill ) ` | 带 alpha 缩放的气体渲染（供玻璃管道等使用）：始终以给定完整范围渲染盒体， alphaFill（0..1）缩放流体 tint 的 alpha，使气体量由透明度传达。<br>实现调用 ` IClientFluidTypeExtensions.of(fluid.getFluid()) `<br>实现调用 ` fluid.getFluid() `<br>实现调用 ` ext.isOpaque() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L224) |
| ` public void renderFluidBox( FluidStack fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, MultiBufferSource buffer, PoseStack ms, int light, boolean renderBottom, float alphaFill ) ` | Gas-fluid variant of #renderFluidBox: the box is always rendered at the given full extents, and alphaFill (0..1) scales the fluid tint's alpha so the amount of gas is conveyed by opacity while still filling the whole tank.<br>实现调用 ` IClientFluidTypeExtensions.of(fluid.getFluid()) `<br>实现调用 ` fluid.getFluid() `<br>实现调用 ` ext.isOpaque() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L247) |
| ` public static void renderStillTiledFace( Direction dir, float left, float down, float right, float up, float depth, VertexConsumer builder, PoseStack ms, int light, int color, TextureAtlasSprite texture ) ` | 执行 ` renderTiledFace(dir, left, down, right, up, depth, builder, ms, light, color, texture, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L327) |
| ` public static void renderTiledFace( Direction dir, float left, float down, float right, float up, float depth, VertexConsumer builder, PoseStack ms, int light, int color, TextureAtlasSprite texture, float textureScale ) ` | 实现调用 ` dir.getAxisDirection() `<br>实现调用 ` dir.getAxis().isHorizontal() `<br>实现调用 ` dir.getAxis() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L334) |
| ` public FluidRenderHelper() ` | Java 提供的无参构造器。<br>[调用处 FluidRenderHelper](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L39) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L38) |

## GravitationalLensManager

` public class GravitationalLensManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Set<BlockPos> CLIENT_BLACK_HOLE_POSITIONS ` | Client-side cache of loaded black hole block positions.<br>初值 ` Collections.newSetFromMap(new ConcurrentHashMap<>()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L30) |
| ` public static final Set<BlockPos> CLIENT_WHITE_HOLE_POSITIONS ` | Client-side cache of loaded white hole block positions.<br>初值 ` Collections.newSetFromMap(new ConcurrentHashMap<>()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L35) |
| ` public static void register(BlockPos pos) ` | 执行 ` CLIENT_BLACK_HOLE_POSITIONS.add(pos.immutable()) `<br>[调用处 BlackHoleBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L38) |
| ` public static void unregister(BlockPos pos) ` | 执行 ` CLIENT_BLACK_HOLE_POSITIONS.remove(pos) `<br>[调用处 BlackHoleBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L42) |
| ` public static void registerWhiteHole(BlockPos pos) ` | 执行 ` CLIENT_WHITE_HOLE_POSITIONS.add(pos.immutable()) `<br>[调用处 WhiteHoleBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/WhiteHoleBlockEntity.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L46) |
| ` public static void unregisterWhiteHole(BlockPos pos) ` | 执行 ` CLIENT_WHITE_HOLE_POSITIONS.remove(pos) `<br>[调用处 WhiteHoleBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/WhiteHoleBlockEntity.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L50) |
| ` public static List<HoleProjection> collectVisibleHoles( Camera camera, Matrix4f projectionMatrix, int maxCount, float blackHoleDir, float whiteHoleDir ) ` | Collect up to maxCount on-screen holes from both black and white hole sets, sorted nearest first. Black holes get blackHoleDir (positive=convex pull), white holes get whiteHoleDir (negative=concave push).<br>末尾返回 ` result `<br>[调用处 LevelRendererMixin.gravitationalLensPostProcess](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelRendererMixin.java#L234) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L123) |
| ` public static void uploadLensUbo(List<HoleProjection> holes, int count, int programId) ` | Upload hole data to the UBO and bind it. Call each frame before running the lens post-chain.<br>参数 ` holes ` collected hole projections (≤ 256)<br>参数 ` count ` actual number of holes to write (remaining slots zeroed)<br>参数 ` programId ` the shader program ID, for one-time block-index binding<br>实现调用 ` buf.clear() `<br>分支 ` (i < count) ` 内调用 ` holes.get(i) `<br>分支 ` (i < count) ` 内调用 ` buf.put(h.centerU).put(h.centerV).put(h.cameraDistance).put(h.lensDirection) `<br>[调用处 LevelRendererMixin.gravitationalLensPostProcess](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LevelRendererMixin.java#L240) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L197) |
| ` public static void resetLensUbo() ` | Free the UBO and reset state. Call on shader reload / GL context recreation.<br>分支 ` (lensUbo != 0) ` 内调用 ` GL15.glDeleteBuffers(lensUbo) `<br>[调用处 ModShaders.loadLensEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/init/ModShaders.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L233) |
| ` public GravitationalLensManager() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L25) |

## GravitationalLensManager.HoleProjection

` public static final class HoleProjection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L57)

Per-hole data passed to the shader.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final float centerU ` | Center UV of the black hole on screen. | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L61) |
| ` public final float centerV ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L62) |
| ` public final float cameraDistance ` | Distance from camera to black hole (world units). | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L66) |
| ` public final float lensDirection ` | Lens direction: &gt; 0 = convex (pull), &lt; 0 = concave (push). | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensManager.java#L70) |

## GuiRenderSupport

` public class GuiRenderSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void centeredEllipsisText(GuiGraphics graphics, Font font, Component text, int x, int y, int max) ` | 执行 ` GuiRenderSupport.centeredEllipsisText(graphics, font, text, x, y, max, 0xFFFFFFFF) `<br>[调用处 CategoryButton.renderName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/category/CategoryButton.java#L107) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L25) |
| ` public static void centeredEllipsisText(GuiGraphics graphics, Font font, Component text, int x, int y, int max, int color) ` | 实现调用 ` font.width(text) `<br>分支 ` (width < max) ` 内调用 ` graphics.drawCenteredString(font, text, x + Math.floorDiv(max, 2), y, color) `<br>分支 ` (width < max) ` 内调用 ` Math.floorDiv(max, 2) `<br>[调用处 GuiRenderSupport.centeredEllipsisText](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L29) |
| ` public static void blitSprite(GuiGraphics graphics, ResourceLocation sprite, int x, int y, int width, int height, int color) ` | 执行 ` GuiRenderSupport.blitSprite(graphics, sprite, x, y, 0, width, height, color) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L44) |
| ` public static void blitSprite( GuiGraphics graphics, ResourceLocation spriteLocation, int x, int y, int blitOffset, int width, int height, int color ) ` | 实现调用 ` Minecraft.getInstance().getGuiSprites() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` sprites.getSprite(spriteLocation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L48) |
| ` public static void blitSprite( GuiGraphics graphics, TextureAtlasSprite sprite, int textureWidth, int textureHeight, int posU, int posV, int x, int y, int blitOffset, int widthU, int heightV, int color ) ` | 分支 ` (widthU != 0 && heightV != 0) ` 内调用 ` sprite.atlasLocation() `<br>分支 ` (widthU != 0 && heightV != 0) ` 内调用 ` sprite.getU((float) posU / (float) textureWidth) `<br>分支 ` (widthU != 0 && heightV != 0) ` 内调用 ` sprite.getU((float) (posU + widthU) / (float) textureWidth) `<br>[调用处 GuiRenderSupport.blitTiledSprite](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L178) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L95) |
| ` public static void blitSprite( GuiGraphics graphics, TextureAtlasSprite sprite, int x, int y, int blitOffset, int width, int height, int color ) ` | 分支 ` (width != 0 && height != 0) ` 内调用 ` sprite.atlasLocation() `<br>分支 ` (width != 0 && height != 0) ` 内调用 ` sprite.getU0() `<br>分支 ` (width != 0 && height != 0) ` 内调用 ` sprite.getU1() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L127) |
| ` public GuiRenderSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/GuiRenderSupport.java#L24) |

## InspectionSupport

` public class InspectionSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final InspectionSupport INSTANCE ` | 初值 ` new InspectionSupport() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L32) |
| ` public static void initializeClient() ` | 实现调用 ` AnvilCraft.of("silencer") `<br>[调用处 AnvilCraftClient.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L36) |
| ` public void registerActionClient(ResourceLocation id, InspectionAction action) ` | 注册检查项 检查项需同时在 ModInspections 和 InspectionSupport 中注册 对于 ModInspections，使用 ModInspections#registerActionServer(ResourceLocation) 注册检查项<br>参见 ModInspections<br>实现调用 ` this.inspectionActionMap.containsKey(id) `<br>实现调用 ` this.inspectionActionMap.put(id, action) `<br>实现调用 ` this.inspectionState.put(id, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L68) |
| ` public void changeStateClient(ResourceLocation id, boolean state) ` | 实现调用 ` log.info("{} inspection {}.", state ? "Disabling" : "Enabling", id) `<br>实现调用 ` this.inspectionState.put(id, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L78) |
| ` public void onRenderInspectionAction( PoseStack poseStack, LevelRenderer renderer, Vec3 camera, DeltaTracker deltaTracker ) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L83) |
| ` public InspectionSupport() ` | Java 提供的无参构造器。<br>[调用处 InspectionSupport](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L32) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L30) |

## InspectionSupport.InspectionAction

` public interface InspectionAction `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L101)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onRenderInspection( PoseStack poseStack, LevelRenderer renderer, Vec3 camera, DeltaTracker deltaTracker ) ` | 当检查项启用时 将调用此方法渲染 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/InspectionSupport.java#L106) |

## MagnetAnvilAnimation

` public final class MagnetAnvilAnimation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L30)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void start(Vec3 start, BlockPos end, BlockState state, boolean requiresMagnet) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` end.getY() `<br>实现调用 ` level.getBlockState(end) `<br>[调用处 MagnetAnvilAnimationPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/MagnetAnvilAnimationPacket.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L38) |
| ` public static boolean hidesBlock(BlockPos pos, BlockState state) ` | 末尾返回 ` animation != null && animation.state == state && animation.hidden `<br>[调用处 SectionCompilerMixin.skipBlockAt](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/SectionCompilerMixin.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L52) |
| ` @SubscribeEvent public static void onTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.isPaused() `<br>实现调用 ` update(client, ticks) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L57) |
| ` @SubscribeEvent public static void onUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ClientLevel) ` 内调用 ` ANIMATIONS.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L65) |
| ` @SubscribeEvent public static void onRender(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` ANIMATIONS.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/MagnetAnvilAnimation.java#L70) |

## OverworldLikeClientState

` public final class OverworldLikeClientState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L10)

Client copy of the global overworld-like sky state.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void update( int generation, long visualSeed, long orbitEpochGameTime, OverworldLikeWorldState.Phase phase ) ` | [调用处 OverworldLikeSkyStatePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeSkyStatePacket.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L20) |
| ` public static void clear() ` | [调用处 ClientLevelMixin.onLevelLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L70) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L35) |
| ` public static boolean isInitialized() ` | 末尾返回 ` generation >= 0 `<br>[调用处 OverworldLikeOrbitalSkyRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L43) |
| ` public static long visualSeed() ` | 末尾返回 ` visualSeed `<br>[调用处 OverworldLikeOrbitalSkyRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L47) |
| ` public static long orbitEpochGameTime() ` | 末尾返回 ` orbitEpochGameTime `<br>[调用处 OverworldLikeOrbitalSkyRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L51) |
| ` public static OverworldLikeWorldState.Phase phase() ` | 末尾返回 ` phase `<br>[调用处 OverworldLikeOrbitalSkyRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L55) |
| ` public static float eclipseFactor(ClientLevel level) ` | ` (!isInitialized() \|\| phase == OverworldLikeWorldState.Phase.RESET_PENDING) ` 成立时提前返回 ` 0.0F `<br>末尾返回 ` OverworldLikeOrbitMath.eclipseFactor( level.getGameTime(), level.getDayTime(), orbitEpochGameTime, visualSeed ) `<br>[调用处 OverworldLikeOrbitalSkyRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L59) |
| ` public static float modifySkyDarken(ClientLevel level, float original) ` | 末尾返回 ` original * environmentColorMultiplier(level) `<br>[调用处 ClientLevelMixin.anvilcraft$addOverworldLikeEclipseDarken](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L69) |
| ` public static float environmentColorMultiplier(ClientLevel level) ` | 末尾返回 ` 1.0F - eclipseFactor(level) * (float) AnvilCraft.CLIENT_CONFIG.graphics.overworldLikeEclipseDarken `<br>[调用处 OverworldLikeVisualEventListener.onComputeFogColor](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeVisualEventListener.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L73) |
| ` public static void beginCollapse(int elapsedTicks) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` level.getGameTime() `<br>实现调用 ` Math.max(0, elapsedTicks) `<br>[调用处 OverworldLikeCollapsePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/OverworldLikeCollapsePacket.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L77) |
| ` public static float collapseProgress() ` | ` (phase != OverworldLikeWorldState.Phase.COLLAPSING \|\| collapseStartedAt < 0L) ` 成立时提前返回 ` 0.0F `<br>` (level == null) ` 成立时提前返回 ` 0.0F `<br>末尾返回 ` Math.clamp((level.getGameTime() - collapseStartedAt) / 40.0F, 0.0F, 1.0F) `<br>[调用处 OverworldLikeOrbitalSkyRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/OverworldLikeOrbitalSkyRenderer.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeClientState.java#L84) |

## OverworldLikeCollapseOverlay

` public final class OverworldLikeCollapseOverlay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeCollapseOverlay.java#L9)

Full-screen white flash shown to players caught in a collapsing generation.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphics guiGraphics) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` CelestialTravelManager.isOverworldLike(minecraft.level.dimension()) `<br>实现调用 ` minecraft.level.dimension() `<br>[调用处 GuiLayerRegistrationEventListener.onRegister](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/OverworldLikeCollapseOverlay.java#L13) |

## PillSelectorSupport

` public class PillSelectorSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final PillSelectorSupport INSTANCE ` | 初值 ` new PillSelectorSupport() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L16) |
| ` public static final ResourceLocation BACKGROUND ` | 初值 ` SharedTextures.bg("misc", "pill_box") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L17) |
| ` public void setPillBox(ItemStack pillBox, int slotIndex) ` | 实现调用 ` pillBox.isEmpty() `<br>分支 ` (pillBox.isEmpty()) ` 内调用 ` this.resetIndex() `<br>分支 ` !(pillBox.isEmpty()) ` 内调用 ` pillBox.getOrDefault(ModComponents.PILL_BOX_CONTENTS, PillBoxContents.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L25) |
| ` public void resetIndex() ` | 实现调用 ` this.pillBox.isEmpty() `<br>分支 ` (!this.pillBox.isEmpty()) ` 内调用 ` this.pillBox.getOrDefault(ModComponents.PILL_BOX_CONTENTS, PillBoxContents.EMPTY) `<br>分支 ` (!this.pillBox.isEmpty()) ` 内调用 ` contents1.mutable() `<br>[调用处 PillSelectorSupport.setPillBox](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L36) |
| ` public void clearHoveredSlot() ` | 界面关闭时调用：丢弃槽位号，避免菜单已切换后仍用旧索引发同步包 （重置包会落到新菜单的同号槽位上）。<br>执行 ` this.hoveredSlot = -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L60) |
| ` public void render(GuiGraphics guiGraphics, int x, int y) ` | 实现调用 ` this.pillBox.isEmpty() `<br>实现调用 ` RenderSystem.disableDepthTest() `<br>实现调用 ` guiGraphics.blit( BACKGROUND, left, top, 0, 0, 78, 44, 78, 44 ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L64) |
| ` public boolean hasItem() ` | 末尾返回 ` !this.pillBox.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L109) |
| ` public void nextIndex() ` | 实现调用 ` this.contents.mutable() `<br>实现调用 ` mutable.getIndex() `<br>实现调用 ` mutable.setIndex(index) `<br>[调用处 PillSelectorSupport.mouseScrolled](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L141) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L113) |
| ` public void previousIndex() ` | 实现调用 ` this.contents.mutable() `<br>实现调用 ` mutable.getIndex() `<br>实现调用 ` mutable.setIndex(index) `<br>[调用处 PillSelectorSupport.mouseScrolled](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L143) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L122) |
| ` public void setIndex(int index) ` | 实现调用 ` this.contents.mutable() `<br>实现调用 ` mutable.setIndex(index) `<br>实现调用 ` mutable.immutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L131) |
| ` public void mouseScrolled(int amount) ` | 分支 ` (amount > 0) ` 内调用 ` this.nextIndex() `<br>分支 ` !(amount > 0) ` 内调用 ` this.previousIndex() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PillSelectorSupport.java#L139) |
