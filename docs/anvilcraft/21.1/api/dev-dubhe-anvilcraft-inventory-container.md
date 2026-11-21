# dev.dubhe.anvilcraft.inventory.container



## FilterContainer

` public class FilterContainer implements Container `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterContainer(Player player, int position, ItemStack stack) ` | 实现调用 ` stack.getOrDefault(ModComponents.FILTER_CONTENT, new FilterContent()) `<br>[调用处 FilterItem.FilterMenuProvider.createMenu](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L106) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L25) |
| ` public FilterContainer(Inventory inventory, FriendlyByteBuf buf) ` | 实现调用 ` buf.readInt() `<br>实现调用 ` inventory.getItem(this.position) `<br>实现调用 ` this.stack.getOrDefault(ModComponents.FILTER_CONTENT, new FilterContent()) `<br>[调用处 FilterMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/FilterMenu.java#L55) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L32) |
| ` @Override public int getContainerSize() ` | 末尾返回 ` this.content.list().size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L39) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L44) |
| ` @Override public ItemStack getItem(int slot) ` | 末尾返回 ` this.content.list().get(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L49) |
| ` @Override public ItemStack removeItem(int slot, int amount) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L54) |
| ` @Override public ItemStack removeItemNoUpdate(int slot) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L59) |
| ` @Override public void setItem(int slot, ItemStack stack) ` | 执行 ` this.content.list().set(slot, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L64) |
| ` @Override public void setChanged() ` | 执行 ` this.stack.set(ModComponents.FILTER_CONTENT, this.content) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L69) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` this.stack == player.getInventory().getItem(this.position) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L74) |
| ` @Override public void clearContent() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L79) |
| ` @OnlyIn(Dist.CLIENT) public void sync() ` | 执行 ` PacketDistributor.sendToServer(new FilterContentSyncPacket(this.position, this.content)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L83) |
| ` public boolean includeComponents() ` | 末尾返回 ` this.getContent().includeComponents() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L88) |
| ` public boolean denyList() ` | 末尾返回 ` this.getContent().denyList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L92) |
| ` public void setIncludeComponents(boolean includeComponents) ` | 执行 ` this.setContent(this.getContent().setIncludeComponents(includeComponents)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L96) |
| ` public void setDenyList(boolean denyList) ` | 执行 ` this.setContent(this.getContent().setDenyList(denyList)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L100) |
| ` public FilterContent getContent() ` | 末尾返回 ` this.content `<br>由 Lombok 生成。<br>[调用处 FilterContainer.includeComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |
| ` public Player getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |
| ` public int getPosition() ` | 末尾返回 ` this.position `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |
| ` public ItemStack getStack() ` | 末尾返回 ` this.stack `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |
| ` public void setContent(final FilterContent content) ` | 执行 ` this.content = content `<br>由 Lombok 生成。<br>[调用处 FilterContainer.setIncludeComponents](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterContainer.java#L17) |

## FilterOnlyContainer

` public class FilterOnlyContainer implements Container `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FilterOnlyContainer(@Nullable BlockEntity blockEntity, int size) ` | 实现调用 ` NonNullList.withSize(size, ItemStack.EMPTY) `<br>[调用处 ItemDetectorBlockEntity.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ItemDetectorBlockEntity.java#L114) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L25) |
| ` @Override public int getContainerSize() ` | 末尾返回 ` this.size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L31) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L36) |
| ` @Override public ItemStack getItem(int slot) ` | 末尾返回 ` this.filterList.get(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L41) |
| ` @Override public ItemStack removeItem(int slot, int amount) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L46) |
| ` @Override public ItemStack removeItemNoUpdate(int slot) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L51) |
| ` @Override public void setItem(int slot, ItemStack stack) ` | 执行 ` this.filterList.set(slot, stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L56) |
| ` @Override public void setChanged() ` | 分支 ` (this.blockEntity != null) ` 内调用 ` this.blockEntity.setChanged() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L61) |
| ` @Override public boolean stillValid(Player player) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L68) |
| ` @Override public void clearContent() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L73) |
| ` public CompoundTag serializeNBT(HolderLookup.Provider provider) ` | 末尾返回 ` nbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L78) |
| ` public void deserializeNBT(HolderLookup.Provider provider, CompoundTag nbt) ` | 实现调用 ` nbt.contains("Size", Tag.TAG_INT) `<br>实现调用 ` nbt.getInt("Size") `<br>实现调用 ` this.filterList.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L93) |
| ` public NonNullList<ItemStack> getFilterList() ` | 末尾返回 ` this.filterList `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L16) |
| ` @Nullable public BlockEntity getBlockEntity() ` | 末尾返回 ` this.blockEntity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/FilterOnlyContainer.java#L16) |

## JewelSourceContainer

` public class JewelSourceContainer extends SimpleContainer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JewelSourceContainer(JewelCraftingMenu menu) ` | 实现调用 ` super(1) `<br>[调用处 JewelCraftingMenu](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L17) |
| ` @Override public void setItem(int index, ItemStack stack) ` | 实现调用 ` super.setItem(index, stack) `<br>实现调用 ` RecipeCaches.getJewelRecipeByResult(stack) `<br>实现调用 ` this.menu.slotsChanged(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L22) |
| ` @Nullable public RecipeHolder<JewelCraftingRecipe> getRecipe() ` | 末尾返回 ` this.recipe `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L12) |
