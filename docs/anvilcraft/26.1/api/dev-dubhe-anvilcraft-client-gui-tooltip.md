# dev.dubhe.anvilcraft.client.gui.tooltip



## ClientConfinementChamberTooltip

` public class ClientConfinementChamberTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientConfinementChamberTooltip(ConfinementChamberTooltip tooltip) ` | 执行 ` this.item = tooltip.item() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L17) |
| ` @Override public int getHeight(Font font) ` | 末尾返回 ` this.item.isEmpty() ? 0 : LINE_HEIGHT + ICON_SIZE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L21) |
| ` @Override public int getWidth(Font font) ` | ` (this.item.isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` Math.max(font.width(Component.translatable("tooltip.anvilcraft.creative_crate.item")), ICON_SIZE + ICON_GAP + font.width(this.itemLine())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L26) |
| ` @Override public void extractImage(Font font, int x, int y, int width, int height, GuiGraphicsExtractor graphics) ` | 实现调用 ` this.item.isEmpty() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.creative_crate.item").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.creative_crate.item") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientConfinementChamberTooltip.java#L33) |

## ClientCreativeContainerTooltip

` public class ClientCreativeContainerTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeContainerTooltip.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientCreativeContainerTooltip(CreativeContainerTooltip tooltip) ` | 执行 ` this.tooltip = tooltip ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeContainerTooltip.java#L26) |
| ` @Override public int getHeight(Font font) ` | 末尾返回 ` height ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeContainerTooltip.java#L30) |
| ` @Override public int getWidth(Font font) ` | 末尾返回 ` width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeContainerTooltip.java#L39) |
| ` @Override public void extractImage(Font font, int x, int y, int w, int h, GuiGraphicsExtractor graphics) ` | 实现调用 ` this.tooltip.entries() `<br>实现调用 ` this.hasHeader(index) `<br>分支 ` (this.hasHeader(index)) ` 内调用 ` graphics.text(font, header(entry).copy().withStyle(ChatFormatting.BLUE), x, rowY, -1, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientCreativeContainerTooltip.java#L49) |

## ClientFilterTooltip

` public class ClientFilterTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFilterTooltip.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientFilterTooltip(FilterTooltip tooltip) ` | 执行 ` this.content = tooltip.content() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFilterTooltip.java#L15) |
| ` @Override public int getHeight(Font font) ` | 末尾返回 ` 18 * 3 + 4 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFilterTooltip.java#L19) |
| ` @Override public int getWidth(Font font) ` | 末尾返回 ` 18 * 6 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFilterTooltip.java#L24) |
| ` @Override public void extractImage(Font font, int x, int y, int w, int h, GuiGraphicsExtractor graphics) ` | 实现调用 ` this.content.list() `<br>实现调用 ` this.extractSlot(itemX, itemY, graphics) `<br>实现调用 ` stack.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFilterTooltip.java#L29) |

## ClientFluidTankTooltip

` public class ClientFluidTankTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientFluidTankTooltip(FluidTankTooltip tooltip) ` | 实现调用 ` tooltip.tankTag() `<br>实现调用 ` tank.getBooleanOr(ClientFluidTankTooltip.TAG_ENHANCED, false) `<br>实现调用 ` tooltip.multi() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L33) |
| ` @Override public int getHeight(Font font) ` | 末尾返回 ` (this.lines.isEmpty() ? 0 : 10) + this.lines.size() * 16 + (this.remaining > 0 ? 10 : 0) + (this.tooltip.showCapacity() ? 20 : 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L93) |
| ` @Override public int getWidth(Font font) ` | 末尾返回 ` width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L99) |
| ` @Override public void extractImage(Font font, int x, int y, int width, int height, GuiGraphicsExtractor graphics) ` | 实现调用 ` this.lines.isEmpty() `<br>分支 ` (!this.lines.isEmpty()) ` 内调用 ` Component.translatable("tooltip.anvilcraft.fluid_tank.fluid").withStyle(ChatFormatting.BLUE) `<br>分支 ` (!this.lines.isEmpty()) ` 内调用 ` Component.translatable("tooltip.anvilcraft.fluid_tank.fluid") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L111) |

## ClientStoragePortTooltip

` public class ClientStoragePortTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientStoragePortTooltip(StoragePortTooltip tooltip) ` | 执行 ` this.contents = StoragePortItemTooltip.contents(tooltip.blockEntityTag(), registries()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L17) |
| ` public static HolderLookup.@Nullable Provider registries() ` | ` (client.level != null) ` 成立时提前返回 ` client.level.registryAccess() `<br>末尾返回 ` client.getConnection() == null ? null : client.getConnection().registryAccess() `<br>[调用处 ClientFluidTankTooltip.read](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientFluidTankTooltip.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L21) |
| ` @Override public int getHeight(Font font) ` | 末尾返回 ` this.contents.item().isEmpty() ? 0 : 26 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L31) |
| ` @Override public int getWidth(Font font) ` | ` (this.contents.item().isEmpty()) ` 成立时提前返回 ` 0 `<br>末尾返回 ` Math.max(font.width(Component.translatable("tooltip.anvilcraft.storage_port.item")), 17 + font.width(this.itemLine())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L36) |
| ` @Override public void extractImage(Font font, int x, int y, int width, int height, GuiGraphicsExtractor graphics) ` | 实现调用 ` this.contents.item().isEmpty() `<br>实现调用 ` this.contents.item() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.storage_port.item").withStyle(ChatFormatting.BLUE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStoragePortTooltip.java#L42) |

## ClientStorageTooltip

` public class ClientStorageTooltip implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ClientStorageTooltip(StorageTooltip tooltip) ` | 实现调用 ` tooltip.usedTypes() `<br>实现调用 ` tooltip.typeLimit() `<br>实现调用 ` tooltip.types() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L24) |
| ` @Override public int getHeight(Font font) ` | 末尾返回 ` height ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L34) |
| ` @Override public int getWidth(Font font) ` | 末尾返回 ` width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L43) |
| ` @Override public void extractImage(Font font, int x, int y, int width, int height, GuiGraphicsExtractor guiGraphics) ` | 实现调用 ` Component.translatable("tooltip.anvilcraft.storage.types").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.storage.types") `<br>实现调用 ` this.typesLine().withStyle(ChatFormatting.GRAY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/ClientStorageTooltip.java#L68) |

## StoragePortTooltipComponent

` public final class StoragePortTooltipComponent implements ClientTooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L13)

端口浮窗中的分组图标网格，数量独立于物品堆上限并始终绘制为角标。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortTooltipComponent(Component title, List<Entry> entries, boolean exact) ` | 实现调用 ` List.copyOf(entries) `<br>[调用处 StoragePortTooltipProvider.components](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L22) |
| ` @Override public int getHeight(Font font) ` | 末尾返回 ` HEADER_HEIGHT + Math.ceilDiv(this.entries.size(), COLUMNS) * ROW_HEIGHT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L28) |
| ` public void setMinimumWidth(int width) ` | 执行 ` this.minimumWidth = width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L41) |
| ` @Override public int getWidth(Font font) ` | 末尾返回 ` Math.max(this.minimumWidth, Math.max(font.width(this.title) + 16, Math.min(COLUMNS, this.entries.size()) * this.cellWidth(font))) `<br>[调用处 StoragePortTooltipComponent.extractImage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L45) |
| ` @Override public void extractImage(Font font, int x, int y, int width, int height, GuiGraphicsExtractor graphics) ` | 实现调用 ` this.getWidth(font) `<br>实现调用 ` font.width(this.title) `<br>实现调用 ` graphics.fill(x, y + 4, titleX - 3, y + 5, 0xFF808080) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L51) |

## StoragePortTooltipComponent.Entry

` public record Entry(ItemStack stack, long count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70)

图标与独立数量，数量为负时表示等待服务端同步。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Entry(ItemStack stack, long count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public ItemStack stack() ` | 读取 record 分量 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public long count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StoragePortTooltipComponent.java#L70) |

## StructurePreviewPlacement

` public record StructurePreviewPlacement(int x, int y, int size) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6)

根据 tooltip 的最终位置选择鼠标另一侧的预览区域，并适应屏幕边缘空间。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable StructurePreviewPlacement opposite( int screenWidth, int screenHeight, int mouseX, int tooltipX, int tooltipY, int tooltipWidth, int preferredSize ) ` | ` (size <= 0) ` 成立时提前返回 ` null `<br>末尾返回 ` new StructurePreviewPlacement(x, y, size) `<br>[调用处 StructureDiskPreviewSupport.renderPreviewAt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L7) |
| ` public StructurePreviewPlacement(int x, int y, int size) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public int size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/tooltip/StructurePreviewPlacement.java#L6) |
