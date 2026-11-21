# dev.dubhe.anvilcraft.integration.jei.handlers



## GhostIngredientHandler

` public class GhostIngredientHandler<M extends AbstractContainerMenu, T extends AbstractContainerScreen<M> & IGhostIngredientScreen> implements IGhostIngredientHandler<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L20)

类型注解 ` @NullMarked `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public <X> List<Target<X>> getTargetsTyped( T screen, ITypedIngredient<X> ingredient, boolean doStart ) ` | 末尾返回 ` targets ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L25) |
| ` @Override public void onComplete() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L55) |
| ` public GhostIngredientHandler() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftJeiPlugin.registerGuiHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L390) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L20) |

## GhostIngredientHandler.GhostTarget

` public static class GhostTarget<I, M extends AbstractContainerMenu, T extends AbstractContainerScreen<M> & IGhostIngredientScreen> implements Target<I> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L60)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GhostTarget(T screen, int slotIndex, IGhostIngredientScreen.Vec2i size) ` | 实现调用 ` screen.getMenu().slots.get(slotIndex) `<br>实现调用 ` screen.getMenu() `<br>实现调用 ` screen.getLeftPos() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L71) |
| ` public GhostTarget(T screen, int slotIndex, Rect2i area) ` | 实现调用 ` screen.getLeftPos() `<br>实现调用 ` area.getX() `<br>实现调用 ` screen.getTopPos() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L79) |
| ` @Override public void accept(I ingredient) ` | 分支 ` (ingredient instanceof ItemStack stack) ` 内调用 ` this.screen.getMenu().getSlot(0) `<br>分支 ` (ingredient instanceof ItemStack stack) ` 内调用 ` this.screen.getMenu() `<br>分支 ` (ingredient instanceof ItemStack stack) ` 内调用 ` this.screen.getMenu().getSlot(this.slotIndex) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L91) |
| ` public Rect2i getArea() ` | 末尾返回 ` this.area `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/GhostIngredientHandler.java#L60) |

## SmithingTemplateGhostHandler

` public final class SmithingTemplateGhostHandler implements IGhostIngredientHandler<TranscendenceSmithingScreen> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/SmithingTemplateGhostHandler.java#L13)

JEI 拖入只添加通过配方校验的模板，不生成真实物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public <T> List<Target<T>> getTargetsTyped(TranscendenceSmithingScreen screen, ITypedIngredient<T> ingredient, boolean doStart) ` | ` (!screen.getMenu().canAddTemplate(stack)) ` 成立时提前返回 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/SmithingTemplateGhostHandler.java#L14) |
| ` @Override public void onComplete() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/SmithingTemplateGhostHandler.java#L35) |
| ` public SmithingTemplateGhostHandler() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftJeiPlugin.registerGuiHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L343) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/handlers/SmithingTemplateGhostHandler.java#L13) |
