# dev.dubhe.anvilcraft.inventory.component.jewel



## JewelInputSlot

` public class JewelInputSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelInputSlot.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JewelInputSlot(JewelSourceContainer sourceContainer, Container container, int slot, int x, int y) ` | 实现调用 ` super(container, slot, x, y) `<br>实现调用 ` this.updateIngredient() `<br>[调用处 JewelCraftingMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L74) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelInputSlot.java#L23) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | ` (this.ingredient == null) ` 成立时提前返回 ` false `<br>` (!this.ingredient.test(stack)) ` 成立时提前返回 ` false `<br>末尾返回 ` super.mayPlace(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelInputSlot.java#L30) |
| ` public void updateIngredient() ` | 实现调用 ` this.sourceContainer.getRecipe() `<br>分支 ` (recipe != null) ` 内调用 ` this.sourceContainer.getRecipe().value() `<br>分支 ` (recipe != null) ` 内调用 ` this.sourceContainer.getRecipe() `<br>[调用处 JewelInputSlot.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelInputSlot.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelInputSlot.java#L41) |
| ` @Nullable public Ingredient getIngredient() ` | 末尾返回 ` this.ingredient `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelInputSlot.java#L13) |
| ` public ItemStack @Nullable [] getIngredientItems() ` | 末尾返回 ` this.ingredientItems `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelInputSlot.java#L13) |
| ` public int getHintCount() ` | 末尾返回 ` this.hintCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelInputSlot.java#L13) |

## JewelResultSlot

` public class JewelResultSlot extends Slot `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelResultSlot.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JewelResultSlot( JewelSourceContainer sourceContainer, CraftingContainer craftSlots, Container container, int slot, int x, int y ) ` | 实现调用 ` super(container, slot, x, y) `<br>[调用处 JewelCraftingMenu.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L62) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelResultSlot.java#L15) |
| ` @Override public boolean mayPlace(ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelResultSlot.java#L28) |
| ` @Override public void onTake(Player player, ItemStack stack) ` | 实现调用 ` stack.getCount() `<br>分支 ` (stack.getCount() > 0) ` 内调用 ` player.awardStat(Stats.ITEM_CRAFTED.get(stack.getItem()), stack.getCount()) `<br>分支 ` (stack.getCount() > 0) ` 内调用 ` Stats.ITEM_CRAFTED.get(stack.getItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelResultSlot.java#L33) |
| ` @Override public boolean isFake() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/component/jewel/JewelResultSlot.java#L47) |
