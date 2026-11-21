# dev.dubhe.anvilcraft.integration.jei.transfer



## IRecipeTransferCallable

` public interface IRecipeTransferCallable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/IRecipeTransferCallable.java#L12)

重试原 Handler 传输逻辑的调用入口。各模组 Handler 的 mixin 通过 lambda 传入 "调用被注入的 transferRecipe 原方法"，使 TerminalJeiTransferSupport 与具体 Handler 类解耦。

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable IRecipeTransferError transfer() ` | 调用原 Handler 的传输方法（doTransfer=true）。<br>返回 原方法的传输错误；null 表示成功 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/IRecipeTransferCallable.java#L19) |

## SmithingRecipeTransferHandler

` public final class SmithingRecipeTransferHandler<C extends AbstractContainerMenu, R> implements IRecipeTransferHandler<C, R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(IRecipeTransferRegistration registration) ` | 实现调用 ` ModMenuTypes.ROYAL_SMITHING.get() `<br>实现调用 ` ModMenuTypes.EMBER_SMITHING.get() `<br>实现调用 ` ModMenuTypes.FROST_SMITHING.get() `<br>[调用处 AnvilCraftJeiPlugin.registerRecipeTransferHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L355) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L67) |
| ` @Override public Class<? extends C> getContainerClass() ` | 末尾返回 ` this.materials.getContainerClass() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L100) |
| ` @Override public Optional<MenuType<C>> getMenuType() ` | 末尾返回 ` this.materials.getMenuType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L105) |
| ` @Override public RecipeType<R> getRecipeType() ` | 末尾返回 ` this.materials.getRecipeType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L110) |
| ` @Override @Nullable public IRecipeTransferError transferRecipe( C menu, R recipe, IRecipeSlotsView slots, Player player, boolean maxTransfer, boolean doTransfer ) ` | ` (templateViews.isEmpty()) ` 成立时提前返回 ` this.helper.createInternalError() `<br>` (error != null \|\| !doTransfer) ` 成立时提前返回 ` error `<br>` (ItemStack.isSameItemSameComponents(selectedTemplate(menu), template)) ` 成立时提前返回 ` this.materials.transferRecipe(menu, recipe, materialViews, player, maxTransfer, true) `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/SmithingRecipeTransferHandler.java#L115) |

## StructureScannerRecipeTransferHandler

` public final class StructureScannerRecipeTransferHandler<R extends RecipeHolder<?>> implements IRecipeTransferHandler<StructureScannerMenu, R> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(IRecipeTransferRegistration registration) ` | 实现调用 ` registration.getTransferHelper() `<br>[调用处 AnvilCraftJeiPlugin.registerRecipeTransferHandlers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L356) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L30) |
| ` @Override public Class<? extends StructureScannerMenu> getContainerClass() ` | 末尾返回 ` StructureScannerMenu.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L37) |
| ` @Override public Optional<MenuType<StructureScannerMenu>> getMenuType() ` | 末尾返回 ` Optional.of(ModMenuTypes.STRUCTURE_SCANNER.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L42) |
| ` @Override public RecipeType<R> getRecipeType() ` | 末尾返回 ` this.type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L47) |
| ` @Override @Nullable public IRecipeTransferError transferRecipe( StructureScannerMenu menu, R recipe, IRecipeSlotsView slots, Player player, boolean maxTransfer, boolean doTransfer ) ` | ` (!menu.stillValid(player) \|\| BlueprintClientFiles.isBusy()) ` 成立时提前返回 ` this.helper.createInternalError() `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/StructureScannerRecipeTransferHandler.java#L52) |

## TerminalJeiTransferSupport

` public final class TerminalJeiTransferSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferSupport.java#L48)

终端支持的 JEI 配方转移补全逻辑（与具体 Handler 解耦）： #checkSatisfies：检查阶段（doTransfer=false）——汇总玩家绑定终端的存储 物品数量，结合背包已有量计算每个配方槽的实际缺口；无缺口返回 null（"+" 可用）， 有缺口返回精确的缺失错误（每个缺失槽只高亮一次）。 #restockThenTransfer：传输阶段（doTransfer=true）——按配方各槽位实际上限 计算背包缺口，先从存储站补足（异步），补库完成后通过 IRecipeTransferCallable 重试原传输逻辑；重试后统计背包中本次补入物品的剩余量（JEI 转移失败或部分使用时 剩余），把多余材料退回存储站，避免残留在玩家背包。 匹配语义与 JEI 自身一致（RecipeTransferUtil.calculateRequiredCountsByUid）： 配方输入槽是一组可替换的变体，槽内任意变体都满足该槽；同一物品用 IStackHelper#getUidForStack 的 uid 判定相等（含 subtype），tag 原料（如 #minecraft:planks）展开的所有变体即所有木板。 不注入 getInventoryState：其声明的"虚拟空槽"无法让服务端实际取到物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable IRecipeTransferError checkSatisfies( AbstractContainerMenu container, IRecipeSlotsView recipeSlots, Player player, IStackHelper stackHelper, IRecipeTransferHandlerHelper helper ) ` | 检查阶段：结合「背包 + 合成格」与「全部绑定终端存储」计算配方缺口。<br>参数 ` stackHelper ` JEI 的 uid 工具（判定配方变体与背包/存储物品是否同一物品）<br>参数 ` helper ` JEI 传输错误工厂（用于构造精确缺失错误）<br>返回 null 表示"+"可用（存储可补足，或缓存未就绪时的乐观判定——点击后由 补库 + 重试给出真实结果）；否则返回缺失错误（只高亮真正缺的槽）<br>末尾返回 ` TerminalJeiTransferSupport.checkSatisfies( container.slots, container.getCarried(), recipeSlots, player, stackHelper, helper ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferSupport.java#L60) |
| ` public static @Nullable IRecipeTransferError checkSatisfies( List<Slot> slots, IRecipeSlotsView recipeSlots, Player player, IStackHelper stackHelper, IRecipeTransferHandlerHelper helper ) ` | 使用 Handler 的实际配方与物品栏槽，兼容不在菜单 slots 中的升级合成格。<br>末尾返回 ` TerminalJeiTransferSupport.checkSatisfies(slots, ItemStack.EMPTY, recipeSlots, player, stackHelper, helper) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferSupport.java#L73) |
| ` public static boolean restockThenTransfer( AbstractContainerMenu container, List<Slot> craftingSlots, List<Slot> inventorySlots, IRecipeSlotsView recipeSlots, Player player, IStackHelper stackHelper, boolean maxTransfer, IRecipeTransferCallable transfer ) ` | 传输阶段：补足背包缺口后重试原传输逻辑；重试后把本次补入但未使用的材料退回存储站。<br>参数 ` craftingSlots ` 配方槽（与 recipeSlots 的 INPUT 视图按索引对应）<br>参数 ` inventorySlots ` JEI 转移使用的物品栏槽（补库/退回的统计范围）<br>参数 ` stackHelper ` JEI 的 uid 工具（判定配方变体与背包/存储物品是否同一物品）<br>参数 ` transfer ` 原 Handler 的传输方法（重试调用，内部应跳过本支持类的再次编排）<br>返回 true 表示本次转移已被本方法拦截（补库进行中，稍后重试原逻辑）， 调用方应返回成功（null）并停止原方法；false 表示无需补库， 调用方应继续执行原传输逻辑<br>` (storageIds.isEmpty()) ` 成立时提前返回 ` false `<br>` (missing.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 JeiBasicRecipeTransferHandlerMixin.anvilcraft$restockOrAllow](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiBasicRecipeTransferHandlerMixin.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferSupport.java#L122) |
