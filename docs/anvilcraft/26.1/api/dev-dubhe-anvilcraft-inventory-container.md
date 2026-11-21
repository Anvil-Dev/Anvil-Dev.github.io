# dev.dubhe.anvilcraft.inventory.container



## FilterContainer

` public class FilterContainer implements Container `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterContainer(Player player, int position, ItemStack stack) ` | 实现调用 ` Optional.ofNullable(stack.get(ModComponents.FILTER_CONTENT)) `<br>实现调用 ` stack.get(ModComponents.FILTER_CONTENT) `<br>[调用处 FilterItem.FilterMenuProvider.createMenu](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/FilterItem.java#L59) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L25) |
| ` public FilterContainer(Inventory inventory, FriendlyByteBuf buf) ` | 实现调用 ` buf.readInt() `<br>实现调用 ` inventory.getItem(this.position) `<br>实现调用 ` Optional.ofNullable(this.stack.get(ModComponents.FILTER_CONTENT)) `<br>[调用处 FilterMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/FilterMenu.java#L53) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L39) |
| ` @Override public int getContainerSize() ` | 末尾返回 ` this.content.list().size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L53) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L58) |
| ` @Override public ItemStack getItem(int slot) ` | 末尾返回 ` this.content.list().get(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L63) |
| ` @Override public ItemStack removeItem(int slot, int amount) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L68) |
| ` @Override public ItemStack removeItemNoUpdate(int slot) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L73) |
| ` @Override public void setItem(int slot, ItemStack stack) ` | 执行 ` this.content.list().set(slot, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L78) |
| ` @Override public void setChanged() ` | 执行 ` this.stack.set(ModComponents.FILTER_CONTENT, this.content) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L83) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` this.stack == player.getInventory().getItem(this.position) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L88) |
| ` @Override public void clearContent() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L93) |
| ` public void sync() ` | 执行 ` ClientPacketDistributor.sendToServer(new FilterContentSyncPacket(this.position, this.content)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L97) |
| ` public boolean includeComponents() ` | 末尾返回 ` this.getContent().includeComponents() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L101) |
| ` public boolean denyList() ` | 末尾返回 ` this.getContent().denyList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L105) |
| ` public void setIncludeComponents(boolean includeComponents) ` | 执行 ` this.setContent(this.getContent().setIncludeComponents(includeComponents)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L109) |
| ` public void setDenyList(boolean denyList) ` | 执行 ` this.setContent(this.getContent().setDenyList(denyList)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L113) |
| ` public FilterContent getContent() ` | 末尾返回 ` this.content `<br>由 Lombok 生成。<br>[调用处 FilterContainer.includeComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |
| ` public Player getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |
| ` public int getPosition() ` | 末尾返回 ` this.position `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |
| ` public ItemStack getStack() ` | 末尾返回 ` this.stack `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |
| ` public void setContent(final FilterContent content) ` | 执行 ` this.content = content `<br>由 Lombok 生成。<br>[调用处 FilterContainer.setIncludeComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L110) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |

## FilterOnlyContainer

` public class FilterOnlyContainer implements Container `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterOnlyContainer(@Nullable BlockEntity blockEntity, int size) ` | 实现调用 ` NonNullList.withSize(size, ItemStack.EMPTY) `<br>[调用处 ItemDetectorBlockEntity.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ItemDetectorBlockEntity.java#L118) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L24) |
| ` @Override public int getContainerSize() ` | 末尾返回 ` this.size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L30) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L35) |
| ` @Override public ItemStack getItem(int slot) ` | 末尾返回 ` this.filterList.get(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L40) |
| ` @Override public ItemStack removeItem(int slot, int amount) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L45) |
| ` @Override public ItemStack removeItemNoUpdate(int slot) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L50) |
| ` @Override public void setItem(int slot, ItemStack stack) ` | 执行 ` this.filterList.set(slot, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L55) |
| ` @Override public void setChanged() ` | 分支 ` (this.blockEntity != null) ` 内调用 ` this.blockEntity.setChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L60) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L67) |
| ` @Override public void clearContent() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L72) |
| ` public void serialize(ValueOutput output) ` | 实现调用 ` this.filterList.size() `<br>实现调用 ` output.putInt("Size", slots) `<br>实现调用 ` output.childrenList("Items") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L77) |
| ` public void deserialize(ValueInput input) ` | 实现调用 ` input.getIntOr("Size", this.filterList.size()) `<br>实现调用 ` this.filterList.size() `<br>实现调用 ` NonNullList.withSize(this.size, ItemStack.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L90) |
| ` public NonNullList<ItemStack> getFilterList() ` | 末尾返回 ` this.filterList `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L15) |
| ` @Nullable public BlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L15) |

## JewelSourceContainer

` public class JewelSourceContainer extends SimpleContainer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JewelSourceContainer(JewelCraftingMenu menu) ` | 实现调用 ` super(1) `<br>[调用处 JewelCraftingMenu](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L45) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L16) |
| ` @Override public void setItem(int index, ItemStack stack) ` | 实现调用 ` super.setItem(index, stack) `<br>实现调用 ` this.menu.findRecipeBySource(stack) `<br>实现调用 ` this.menu.slotsChanged(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L21) |
| ` @Nullable public RecipeHolder<JewelCraftingRecipe> getRecipe() ` | 末尾返回 ` this.recipe `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L11) |
