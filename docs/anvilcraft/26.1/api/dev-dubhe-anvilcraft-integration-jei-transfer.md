# dev.dubhe.anvilcraft.integration.jei.transfer



## FrostRecipeTransferHandler

` public final class FrostRecipeTransferHandler<C extends AbstractContainerMenu, R> implements IRecipeTransferHandler<C, R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostRecipeTransferHandler(Class<C> menuClass, MenuType<C> menuType, IRecipeType<R> recipeType, IRecipeTransferHandlerHelper errors) ` | [调用处 SmithingRecipeTransferHandler.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L36) |
| ` @Override public Class<? extends C> getContainerClass() ` | 末尾返回 ` this.menuClass ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L44) |
| ` @Override public Optional<MenuType<C>> getMenuType() ` | 末尾返回 ` Optional.of(this.menuType) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L49) |
| ` @Override public IRecipeType<R> getRecipeType() ` | 末尾返回 ` this.recipeType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L54) |
| ` @Override public @Nullable IRecipeTransferError transferRecipe(C menu, R recipe, IRecipeSlotsView slots, Player player, boolean maximum, boolean transfer) ` | ` (!(recipe instanceof FrostSmithingCategory.Display display) \|\| player.containerMenu != menu) ` 成立时提前返回 ` this.errors.createInternalError() `<br>` (choice == null && snapshot != null && snapshot.complete()) ` 成立时提前返回 ` this.errors.createUserErrorForMissingSlots(Component.translatable("jei.tooltip.error.recipe.transfer.missing"), slots.getSlotViews(RecipeIngredientRole.INPUT)) `<br>` (!transfer \|\| TerminalJeiStorageCache.isBusy()) ` 成立时提前返回 ` null `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/FrostRecipeTransferHandler.java#L59) |

## SmithingRecipeTransferHandler

` public final class SmithingRecipeTransferHandler<C extends AbstractContainerMenu, R> implements IRecipeTransferHandler<C, R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(IRecipeTransferRegistration registration) ` | 实现调用 ` ModMenuTypes.ROYAL_SMITHING.get() `<br>实现调用 ` ModMenuTypes.EMBER_SMITHING.get() `<br>实现调用 ` ModMenuTypes.TRANSCENDENCE_SMITHING.get() `<br>[调用处 AnvilCraftJeiPlugin.registerRecipeTransferHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L337) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L73) |
| ` @Override public Class<? extends C> getContainerClass() ` | 末尾返回 ` this.materials.getContainerClass() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L106) |
| ` @Override public Optional<MenuType<C>> getMenuType() ` | 末尾返回 ` this.materials.getMenuType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L111) |
| ` @Override public IRecipeType<R> getRecipeType() ` | 末尾返回 ` this.materials.getRecipeType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L116) |
| ` @Override @Nullable public IRecipeTransferError transferRecipe( C menu, R recipe, IRecipeSlotsView slots, Player player, boolean maxTransfer, boolean doTransfer ) ` | ` (templateViews.isEmpty()) ` 成立时提前返回 ` this.helper.createInternalError() `<br>` (error != null \|\| !doTransfer) ` 成立时提前返回 ` error `<br>` (ItemStack.isSameItemSameComponents(selectedTemplate(menu), template)) ` 成立时提前返回 ` this.materials.transferRecipe(menu, recipe, materialViews, player, maxTransfer, true) `<br>` (this.selectingMenu == menu && this.templateRequest != null && !this.templateRequest.isDone()) ` 成立时提前返回 ` null `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L121) |

## StructureScannerRecipeTransferHandler

` public final class StructureScannerRecipeTransferHandler<R extends RecipeHolder<?>> implements IRecipeTransferHandler<StructureScannerMenu, R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(IRecipeTransferRegistration registration) ` | 实现调用 ` registration.getTransferHelper() `<br>[调用处 AnvilCraftJeiPlugin.registerRecipeTransferHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L338) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L30) |
| ` @Override public Class<? extends StructureScannerMenu> getContainerClass() ` | 末尾返回 ` StructureScannerMenu.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L37) |
| ` @Override public Optional<MenuType<StructureScannerMenu>> getMenuType() ` | 末尾返回 ` Optional.of(ModMenuTypes.STRUCTURE_SCANNER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L42) |
| ` @Override public IRecipeType<R> getRecipeType() ` | 末尾返回 ` this.type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L47) |
| ` @Override @Nullable public IRecipeTransferError transferRecipe( StructureScannerMenu menu, R recipe, IRecipeSlotsView slots, Player player, boolean maxTransfer, boolean doTransfer ) ` | ` (!menu.stillValid(player) \|\| BlueprintClientFiles.isBusy()) ` 成立时提前返回 ` this.helper.createInternalError() `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L52) |

## TerminalJeiTransferPlan

` public final class TerminalJeiTransferPlan `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Result create(Player player, List<Slot> crafting, List<Slot> inventory, List<IRecipeSlotView> inputs, IStackHelper helper, StorageServerStub.TerminalSnapshot snapshot, boolean maximum) ` | 末尾返回 ` new Result(List.copyOf(desired), List.copyOf(operations.missingItems)) `<br>[调用处 TerminalJeiTransferSupport.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferSupport.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L33) |

## TerminalJeiTransferPlan.Result

` public record Result(List<ItemStack> desiredInventory, List<IRecipeSlotView> missing) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(List<ItemStack> desiredInventory, List<IRecipeSlotView> missing) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L30) |
| ` public List<ItemStack> desiredInventory() ` | 读取 record 分量 ` desiredInventory ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L30) |
| ` public List<IRecipeSlotView> missing() ` | 读取 record 分量 ` missing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L30) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L30) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L30) |

## TerminalJeiTransferSupport

` public final class TerminalJeiTransferSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferSupport.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void handle(AbstractContainerMenu menu, IRecipeSlotsView slots, Player player, IStackHelper stackHelper, IRecipeTransferHandlerHelper errors, List<Slot> crafting, List<Slot> inventory, boolean maximum, boolean transfer, Supplier<@Nullable IRecipeTransferError> retry, Consumer<@Nullable IRecipeTransferError> cancel) ` | 实现调用 ` TerminalJeiStorageCache.isRetrying() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` RecipeTransferUtil.validateSlots(player, List.of(), crafting, inventory) `<br>[调用处 JeiBasicRecipeTransferHandlerMixin.anvilcraft$restock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/JeiBasicRecipeTransferHandlerMixin.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferSupport.java#L30) |
