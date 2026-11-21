# dev.dubhe.anvilcraft.inventory.component



## BookOnlySlot

` public class BookOnlySlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/BookOnlySlot.java#L14)

只允许放入书类物品的槽位（书与笔、成书、普通书）

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BookOnlySlot(Container container, int slot, int x, int y) ` | 执行 ` this(container, slot, x, y, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/BookOnlySlot.java#L18) |
| ` public BookOnlySlot(Container container, int slot, int x, int y, @Nullable BooleanSupplier isActiveCondition) ` | 实现调用 ` super(container, slot, x, y) `<br>[调用处 SmartBlockPlacerMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L84) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/BookOnlySlot.java#L22) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` stack.is(Items.WRITTEN_BOOK) \|\| stack.is(Items.WRITABLE_BOOK) \|\| stack.is(Items.BOOK) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/BookOnlySlot.java#L28) |
| ` @Override public boolean isActive() ` | ` (this.isActiveCondition != null) ` 成立时提前返回 ` this.isActiveCondition.getAsBoolean() `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/BookOnlySlot.java#L35) |
| ` @Override public int getMaxStackSize() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/BookOnlySlot.java#L43) |
| ` @Override public int getMaxStackSize(ItemStack stack) ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/BookOnlySlot.java#L48) |

## CyclingValueHandler

` public interface CyclingValueHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/CyclingValueHandler.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void notify(int index, String name) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/CyclingValueHandler.java#L4) |

## FilterOnlySlot

` public class FilterOnlySlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterOnlySlot.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterOnlySlot(FilterOnlyContainer container, int slot, int x, int y) ` | 执行 ` super(container, slot, x, y) `<br>[调用处 ItemDetectorMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/ItemDetectorMenu.java#L39) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterOnlySlot.java#L9) |
| ` @Override public ItemStack safeInsert(ItemStack stack, int increment) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterOnlySlot.java#L13) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterOnlySlot.java#L19) |
| ` @Override public boolean mayPickup(Player player) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterOnlySlot.java#L24) |

## FilterSlot

` public class FilterSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterSlot.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterSlot(FilterContainer container, int slot, int x, int y) ` | 执行 ` super(container, slot, x, y) `<br>[调用处 FilterMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/FilterMenu.java#L47) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterSlot.java#L9) |
| ` @Override public ItemStack safeInsert(ItemStack stack, int increment) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterSlot.java#L13) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterSlot.java#L19) |
| ` @Override public boolean mayPickup(Player player) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilterSlot.java#L24) |

## FilteredSlot

` public class FilteredSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L15)

可过滤槽位，允许设置自定义过滤器 PS: 与FilterItem 过滤器（物品）无关

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilteredSlot(Container container, int slot, int x, int y) ` | 执行 ` super(container, slot, x, y) `<br>[调用处 EnergyWeaponMakeMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/EnergyWeaponMakeMenu.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L20) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` !this.isFilterEmpty() && this.filter.testIgnoreCount(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L24) |
| ` @Override public int getMaxStackSize() ` | 末尾返回 ` this.isFilterEmpty() ? 1 : this.filter.count() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L29) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public boolean canCraft() ` | 末尾返回 ` this.isFilterEmpty() \|\| this.filter.testCount(this.getItem().getCount()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L34) |
| ` public boolean isFilterEmpty() ` | 末尾返回 ` this.filter.equals(RecipeUtil.EMPTY_ITEM_INGREDIENT) `<br>[调用处 FilteredSlot.mayPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L39) |
| ` public void resetFilter() ` | 执行 ` this.filter = RecipeUtil.EMPTY_ITEM_INGREDIENT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L43) |
| ` public ItemIngredientPredicate getFilter() ` | 末尾返回 ` this.filter `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L15) |
| ` public void setFilter(final ItemIngredientPredicate filter) ` | 执行 ` this.filter = filter `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/FilteredSlot.java#L15) |

## LimitSlot

` public class LimitSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/LimitSlot.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LimitSlot(Container container, int slot, int x, int y, Predicate<ItemStack> limit) ` | 实现调用 ` super(container, slot, x, y) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/LimitSlot.java#L12) |
| ` public LimitSlot(Container container, int slot, int x, int y) ` | 执行 ` this(container, slot, x, y, i -> false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/LimitSlot.java#L17) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` this.limit.test(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/LimitSlot.java#L21) |

## ReadOnlySlot

` public class ReadOnlySlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/ReadOnlySlot.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ReadOnlySlot(Container container, int slot, int x, int y) ` | 执行 ` super(container, slot, x, y) `<br>[调用处 BatchCrafterMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/BatchCrafterMenu.java#L69) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/ReadOnlySlot.java#L9) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/ReadOnlySlot.java#L13) |
| ` @Override public boolean mayPickup(Player player) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/ReadOnlySlot.java#L18) |

## StructureDiskOnlySlot

` public class StructureDiskOnlySlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/StructureDiskOnlySlot.java#L18)

只允许放入Structure Disk物品的槽位 可选择是否限制结构大小不超过 5x5x5

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureDiskOnlySlot( Container container, int slot, int x, int y, boolean enforceSizeLimit ) ` | 创建结构磁盘槽位<br>参数 ` container ` 容器<br>参数 ` slot ` 槽位索引<br>参数 ` x ` X坐标<br>参数 ` y ` Y坐标<br>参数 ` enforceSizeLimit ` 是否强制执行 5x5x5 大小限制（Smart Block Placer 需要，Structure Scanner 不需要）<br>执行 ` this(container, slot, x, y, enforceSizeLimit, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/StructureDiskOnlySlot.java#L32) |
| ` public StructureDiskOnlySlot( Container container, int slot, int x, int y, @Nullable BooleanSupplier canExtractCondition ) ` | 创建结构磁盘槽位（带提取条件）<br>执行 ` this(container, slot, x, y, false, canExtractCondition) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/StructureDiskOnlySlot.java#L42) |
| ` public StructureDiskOnlySlot( Container container, int slot, int x, int y, boolean enforceSizeLimit, @Nullable BooleanSupplier canExtractCondition ) ` | 创建结构磁盘槽位（完整参数）<br>实现调用 ` super(container, slot, x, y) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/StructureDiskOnlySlot.java#L52) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | ` (!stack.is(ModItems.STRUCTURE_DISK.get())) ` 成立时提前返回 ` false `<br>` (!this.enforceSizeLimit) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/StructureDiskOnlySlot.java#L62) |
| ` @Override public boolean mayPickup(Player playerIn) ` | 末尾返回 ` this.canExtractCondition == null \|\| this.canExtractCondition.getAsBoolean() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/StructureDiskOnlySlot.java#L88) |
| ` @Override public int getMaxStackSize() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/StructureDiskOnlySlot.java#L94) |
| ` @Override public int getMaxStackSize(ItemStack stack) ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/StructureDiskOnlySlot.java#L99) |

## WrittenBookOnlySlot

` public class WrittenBookOnlySlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/WrittenBookOnlySlot.java#L13)

只允许放入成书的槽位，且此槽位只能取出不能放入

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WrittenBookOnlySlot(Container container, int slot, int x, int y, @Nullable BooleanSupplier isActiveCondition) ` | 实现调用 ` super(container, slot, x, y) `<br>[调用处 SmartBlockPlacerMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L96) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/WrittenBookOnlySlot.java#L17) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/WrittenBookOnlySlot.java#L23) |
| ` @Override public boolean isActive() ` | ` (this.isActiveCondition != null) ` 成立时提前返回 ` this.isActiveCondition.getAsBoolean() `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/WrittenBookOnlySlot.java#L28) |
| ` @Override public int getMaxStackSize() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/WrittenBookOnlySlot.java#L36) |
| ` @Override public int getMaxStackSize(ItemStack stack) ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/component/WrittenBookOnlySlot.java#L41) |
