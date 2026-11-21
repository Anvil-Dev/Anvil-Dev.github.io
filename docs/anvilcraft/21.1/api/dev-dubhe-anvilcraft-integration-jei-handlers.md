# dev.dubhe.anvilcraft.integration.jei.handlers



## GhostIngredientHandler

` public class GhostIngredientHandler<M extends AbstractContainerMenu, T extends AbstractContainerScreen<M> & IGhostIngredientScreen> implements IGhostIngredientHandler<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public <X> List<Target<X>> getTargetsTyped( T screen, ITypedIngredient<X> ingredient, boolean doStart ) ` | 末尾返回 ` targets ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L23) |
| ` @Override public void onComplete() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L43) |
| ` public GhostIngredientHandler() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftJeiPlugin.registerGuiHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L364) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L19) |

## GhostIngredientHandler.GhostTarget

` public static class GhostTarget<I, M extends AbstractContainerMenu, T extends AbstractContainerScreen<M> & IGhostIngredientScreen> implements Target<I> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L48)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GhostTarget(T screen, int slotIndex, IGhostIngredientScreen.Vec2i size) ` | 实现调用 ` screen.getGhostSlotArea(slotIndex) `<br>分支 ` (fixed != null) ` 内调用 ` screen.getGuiLeft() `<br>分支 ` (fixed != null) ` 内调用 ` screen.getGuiTop() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L58) |
| ` @Override public void accept(I ingredient) ` | 分支 ` (ingredient instanceof ItemStack stack) ` 内调用 ` this.screen.acceptGhost(this.screen.getMenu().getSlot(this.slotIndex), stack) `<br>分支 ` (ingredient instanceof ItemStack stack) ` 内调用 ` this.screen.getMenu().getSlot(this.slotIndex) `<br>分支 ` (ingredient instanceof ItemStack stack) ` 内调用 ` this.screen.getMenu() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L70) |
| ` public Rect2i getArea() ` | 末尾返回 ` this.area `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L48) |

## SmithingTemplateGhostHandler

` public final class SmithingTemplateGhostHandler implements IGhostIngredientHandler<TranscendenceSmithingScreen> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/SmithingTemplateGhostHandler.java#L13)

JEI 拖入只添加通过配方校验的模板，不生成真实物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public <T> List<Target<T>> getTargetsTyped(TranscendenceSmithingScreen screen, ITypedIngredient<T> ingredient, boolean doStart) ` | ` (!screen.getMenu().canAddTemplate(stack)) ` 成立时提前返回 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/SmithingTemplateGhostHandler.java#L14) |
| ` @Override public void onComplete() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/SmithingTemplateGhostHandler.java#L35) |
| ` public SmithingTemplateGhostHandler() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftJeiPlugin.registerGuiHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L363) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/SmithingTemplateGhostHandler.java#L13) |
