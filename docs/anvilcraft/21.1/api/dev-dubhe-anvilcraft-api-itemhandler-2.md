# dev.dubhe.anvilcraft.api.itemhandler（SlotItemHandlerWithFilter 至 VoidItemHandler）



## SlotItemHandlerWithFilter

` public class SlotItemHandlerWithFilter extends SlotItemHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/SlotItemHandlerWithFilter.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SlotItemHandlerWithFilter(IItemHandler itemHandler, int index, int posX, int posY) ` | 执行 ` super(itemHandler, index, posX, posY) `<br>[调用处 BaseChuteMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/BaseChuteMenu.java#L50) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/SlotItemHandlerWithFilter.java#L8) |
| ` public boolean isFilter() ` | 判断槽位是否支持过滤<br>返回 是否支持过滤<br>末尾返回 ` this.getItemHandler() instanceof FilteredItemStackHandler ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/SlotItemHandlerWithFilter.java#L17) |
| ` public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/SlotItemHandlerWithFilter.java#L21) |
| ` public ItemStack getFilterItem(int slotIndex) ` | 获取指定槽位上的过滤器要过滤的物品<br>参数 ` slotIndex ` 槽位的索引<br>返回 如果指定槽位是过滤器，返回过滤器要过滤的物品，否则返回空物品<br>` (this.getItemHandler() instanceof FilteredItemStackHandler filtered) ` 成立时提前返回 ` filtered.getFilter(slotIndex) `<br>末尾返回 ` ItemStack.EMPTY `<br>实现调用 ` this.getItemHandler() `<br>分支 ` (this.getItemHandler() instanceof FilteredItemStackHandler filtered) ` 内调用 ` filtered.getFilter(slotIndex) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/SlotItemHandlerWithFilter.java#L31) |
| ` public boolean isSlotDisabled(int slot) ` | 判断指定槽位是否被禁用<br>参数 ` slot ` 槽位<br>返回 指定槽位是否被禁用<br>` (this.getItemHandler() instanceof FilteredItemStackHandler filtered) ` 成立时提前返回 ` filtered.isSlotDisabled(slot) `<br>末尾返回 ` false `<br>实现调用 ` this.getItemHandler() `<br>分支 ` (this.getItemHandler() instanceof FilteredItemStackHandler filtered) ` 内调用 ` filtered.isSlotDisabled(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/SlotItemHandlerWithFilter.java#L44) |
| ` @Override public int getMaxStackSize(ItemStack stack) ` | 末尾返回 ` Math.min(this.getMaxStackSize(), stack.getMaxStackSize()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/SlotItemHandlerWithFilter.java#L51) |

## VoidItemHandler

` public final class VoidItemHandler implements IItemHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L16)

只进不出的虚空物品容器。 接受任意物品的输入并直接销毁（相当于创造板条箱的只输入版本）， 永不存储、永不输出。用于虚空物质块：通过漏斗、溜槽等方块输入的物品 会被无限吸收并消失。 带永恒词条的物品免疫虚空，会被原样退回而不销毁。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoidItemHandler INSTANCE ` | 初值 ` new VoidItemHandler() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L17) |
| ` @Override public int getSlots() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L22) |
| ` @Override public ItemStack getStackInSlot(int slot) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L27) |
| ` @Override public ItemStack insertItem(int slot, ItemStack stack, boolean simulate) ` | ` (VoidItemHandler.isEternal(stack)) ` 成立时提前返回 ` stack `<br>末尾返回 ` ItemStack.EMPTY `<br>实现调用 ` VoidItemHandler.isEternal(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L32) |
| ` @Override public ItemStack extractItem(int slot, int amount, boolean simulate) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L41) |
| ` @Override public int getSlotLimit(int slot) ` | 末尾返回 ` Integer.MAX_VALUE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L46) |
| ` @Override public boolean isItemValid(int slot, ItemStack stack) ` | 末尾返回 ` !VoidItemHandler.isEternal(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L51) |
| ` public static boolean isEternal(ItemStack stack) ` | 是否带有永恒词条。<br>末尾返回 ` stack.has(ModComponents.ETERNAL) `<br>[调用处 VoidItemHandler.insertItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L57) |
