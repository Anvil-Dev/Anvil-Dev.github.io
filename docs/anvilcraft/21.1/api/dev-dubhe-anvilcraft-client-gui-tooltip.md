# dev.dubhe.anvilcraft.client.gui.tooltip



## ClientConfinementChamberTooltip

` public class ClientConfinementChamberTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L16)

约束仓物品 tooltip：以 16×16 图标 + 名称/数量 的形式渲染存储的内容物。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientConfinementChamberTooltip(ConfinementChamberTooltip tooltip) ` | 执行 ` this.item = tooltip.item() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L23) |
| ` @Override public int getHeight() ` | 末尾返回 ` this.item.isEmpty() ? 0 : LINE_HEIGHT + ICON_SIZE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L27) |
| ` @Override public int getWidth(Font font) ` | ` (this.item.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` Math.max(width, ICON_SIZE + ICON_GAP + font.width(this.itemLine())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L32) |
| ` @Override public void renderText( Font font, int mouseX, int mouseY, Matrix4f matrix, MultiBufferSource.BufferSource bufferSource ) ` | 实现调用 ` this.item.isEmpty() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.creative_crate.item").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.creative_crate.item") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L39) |
| ` @Override public void renderImage(Font font, int x, int y, GuiGraphics guiGraphics) ` | 实现调用 ` this.item.isEmpty() `<br>实现调用 ` guiGraphics.renderItem(this.item, x, y + LINE_HEIGHT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L59) |

## ClientCreativeCrateTooltip

` public class ClientCreativeCrateTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeCrateTooltip.java#L23)

创造板条箱物品 tooltip：以 16×16 图标 + 名称/无限标记 的形式渲染存储物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientCreativeCrateTooltip(CreativeCrateTooltip tooltip) ` | 执行 ` this.item = readStoredItem(tooltip.itemTag()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeCrateTooltip.java#L31) |
| ` @Override public int getHeight() ` | 末尾返回 ` this.item.isEmpty() ? 0 : LINE_HEIGHT + ICON_SIZE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeCrateTooltip.java#L54) |
| ` @Override public int getWidth(Font font) ` | ` (this.item.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` Math.max(width, ICON_SIZE + ICON_GAP + font.width(this.itemLine())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeCrateTooltip.java#L59) |
| ` @Override public void renderText( Font font, int mouseX, int mouseY, Matrix4f matrix, MultiBufferSource.BufferSource bufferSource ) ` | 实现调用 ` this.item.isEmpty() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.creative_crate.item").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.creative_crate.item") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeCrateTooltip.java#L66) |
| ` @Override public void renderImage(Font font, int x, int y, GuiGraphics guiGraphics) ` | 实现调用 ` this.item.isEmpty() `<br>实现调用 ` guiGraphics.renderItem(this.item.copyWithCount(1), x, y + LINE_HEIGHT) `<br>实现调用 ` this.item.copyWithCount(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeCrateTooltip.java#L86) |

## ClientFluidTankTooltip

` public class ClientFluidTankTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L35)

流体储罐物品 tooltip：每行流体以 16×16 图标 + 名称/数量文字 的形式渲染 （图标位于文字之前，同一行内对齐），并附带流体标题与容量行。 文字经 #renderText 绘制、图标经 #renderImage 绘制，二者基于 相同的行起点与行高增量，因此图标与文字落在同一行。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientFluidTankTooltip(FluidTankTooltip tooltip) ` | 实现调用 ` tooltip.capacity() `<br>实现调用 ` tooltip.infiniteCapacity() `<br>实现调用 ` tooltip.showCapacity() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L51) |
| ` @Override public int getHeight() ` | 末尾返回 ` height ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L112) |
| ` @Override public int getWidth(Font font) ` | 末尾返回 ` width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L125) |
| ` @Override public void renderText( Font font, int mouseX, int mouseY, Matrix4f matrix, MultiBufferSource.BufferSource bufferSource ) ` | 实现调用 ` this.fluids.isEmpty() `<br>分支 ` (!this.fluids.isEmpty()) ` 内调用 ` Component.translatable("tooltip.anvilcraft.fluid_tank.fluid").withStyle(ChatFormatting.BLUE) `<br>分支 ` (!this.fluids.isEmpty()) ` 内调用 ` Component.translatable("tooltip.anvilcraft.fluid_tank.fluid") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L144) |
| ` @Override public void renderImage(Font font, int x, int y, GuiGraphics guiGraphics) ` | 实现调用 ` this.fluids.isEmpty() `<br>实现调用 ` renderFluidIcon(guiGraphics, fluid, x, rowY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L188) |

## ClientStoragePortTooltip

` public class ClientStoragePortTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L23)

仓储端口物品 tooltip：以 16×16 图标 + 名称/缓存数量 的形式渲染标记物品。 没有标记时回退到缓存中的第一个物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientStoragePortTooltip(StoragePortTooltip tooltip) ` | 实现调用 ` tooltip.blockEntityTag() `<br>实现调用 ` ClientStoragePortTooltip.registries() `<br>实现调用 ` ClientStoragePortTooltip.readItem(tag, registries) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L35) |
| ` @Override public int getHeight() ` | 末尾返回 ` this.item.isEmpty() ? 0 : ClientStoragePortTooltip.LINE_HEIGHT + ClientStoragePortTooltip.ICON_SIZE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L83) |
| ` @Override public int getWidth(Font font) ` | ` (this.item.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` Math.max(labelWidth, ClientStoragePortTooltip.ICON_SIZE + ClientStoragePortTooltip.ICON_GAP + font.width(this.itemLine())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L88) |
| ` @Override public void renderText( Font font, int mouseX, int mouseY, Matrix4f matrix, MultiBufferSource.BufferSource bufferSource ) ` | 实现调用 ` this.item.isEmpty() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.storage_port.item").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.storage_port.item") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L98) |
| ` @Override public void renderImage(Font font, int x, int y, GuiGraphics guiGraphics) ` | 实现调用 ` this.item.isEmpty() `<br>实现调用 ` guiGraphics.renderItem(this.item.copyWithCount(1), x, y + ClientStoragePortTooltip.LINE_HEIGHT) `<br>实现调用 ` this.item.copyWithCount(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L136) |

## ClientStorageTooltip

` public class ClientStorageTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientStorageTooltip(StorageTooltip tooltip) ` | 实现调用 ` tooltip.usedTypes() `<br>实现调用 ` tooltip.typeLimit() `<br>实现调用 ` tooltip.types() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L26) |
| ` @Override public int getHeight() ` | 末尾返回 ` height ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L36) |
| ` @Override public int getWidth(Font font) ` | 末尾返回 ` width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L45) |
| ` @Override public void renderText( Font font, int mouseX, int mouseY, Matrix4f matrix, MultiBufferSource.BufferSource bufferSource ) ` | 实现调用 ` Component.translatable("tooltip.anvilcraft.storage.types").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.storage.types") `<br>实现调用 ` this.typesLine().withStyle(ChatFormatting.GRAY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L70) |
| ` @Override public void renderImage(Font font, int x, int y, GuiGraphics guiGraphics) ` | 实现调用 ` this.types.isEmpty() `<br>实现调用 ` Math.min(this.types.size(), AnvilCraft.CLIENT_CONFIG.ui.storageTooltipMaxVisibleTypes) `<br>实现调用 ` this.types.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L104) |

## FilterContentHoverWindow

` public final class FilterContentHoverWindow `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/FilterContentHoverWindow.java#L18)

过滤器内容的"外挂窗口"：鼠标悬停在过滤器物品上时，在 tooltip 上方渲染一个独立的 浮动窗口显示过滤内容（6×3 物品格）。 窗口背景直接裁剪过滤器的 GUI 贴图（gui/misc/background/filter.png）中 的 6×3 槽位区域，与过滤器界面外观一致（26.1 的写法）。在 RenderTooltipEvent.Pre 中调用 #render，并把 tooltip 向下推 13px。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render(GuiGraphics guiGraphics, ItemStack stack, int x, int y, Font font) ` | 在 tooltip 位置 (x, y) 上方渲染过滤器内容窗口（居中于 x）。<br>参数 ` stack ` 过滤器物品堆栈<br>参数 ` x ` tooltip 左上角 x（绝对屏幕坐标）<br>参数 ` y ` tooltip 左上角 y（绝对屏幕坐标）<br>实现调用 ` stack.get(ModComponents.FILTER_CONTENT) `<br>实现调用 ` guiGraphics.pose().pushPose() `<br>实现调用 ` guiGraphics.pose() `<br>[调用处 ClientEventListener.onRenderTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L567) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/FilterContentHoverWindow.java#L42) |

## StoragePortTooltipComponent

` public final class StoragePortTooltipComponent implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L13)

端口浮窗中的分组图标网格，数量独立于物品堆上限并始终绘制为角标。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortTooltipComponent(Component title, List<Entry> entries, boolean exact) ` | 实现调用 ` List.copyOf(entries) `<br>[调用处 StoragePortTooltipProvider.components](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L22) |
| ` @Override public int getHeight() ` | 末尾返回 ` HEADER_HEIGHT + Math.ceilDiv(this.entries.size(), COLUMNS) * ROW_HEIGHT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L28) |
| ` public void setMinimumWidth(int width) ` | 执行 ` this.minimumWidth = width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L41) |
| ` @Override public int getWidth(Font font) ` | 末尾返回 ` Math.max(this.minimumWidth, Math.max(font.width(this.title) + 16, Math.min(COLUMNS, this.entries.size()) * this.cellWidth(font))) `<br>[调用处 StoragePortTooltipComponent.renderImage](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L45) |
| ` @Override public void renderImage(Font font, int x, int y, GuiGraphics graphics) ` | 实现调用 ` this.getWidth(font) `<br>实现调用 ` font.width(this.title) `<br>实现调用 ` graphics.fill(x, y + 4, titleX - 3, y + 5, 0xFF808080) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L51) |

## StoragePortTooltipComponent.Entry

` public record Entry(ItemStack stack, long count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70)

图标与独立数量，数量为负时表示等待服务端同步。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Entry(ItemStack stack, long count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public ItemStack stack() ` | 读取 record 分量 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public long count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |

## StructurePreviewPlacement

` public record StructurePreviewPlacement(int x, int y, int size) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6)

根据 tooltip 的最终位置选择鼠标另一侧的预览区域，并适应屏幕边缘空间。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable StructurePreviewPlacement opposite( int screenWidth, int screenHeight, int mouseX, int tooltipX, int tooltipY, int tooltipWidth, int preferredSize ) ` | ` (size <= 0) ` 成立时提前返回 ` null `<br>末尾返回 ` new StructurePreviewPlacement(x, y, size) `<br>[调用处 StructureDiskPreviewSupport.renderPreviewAt](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L7) |
| ` public StructurePreviewPlacement(int x, int y, int size) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public int size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
