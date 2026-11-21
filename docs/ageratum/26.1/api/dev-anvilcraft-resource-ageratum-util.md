# dev.anvilcraft.resource.ageratum.util



## RecipeUtil

` public class RecipeUtil `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/util/RecipeUtil.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ItemStack getDisplayItem(Ingredient ingredient) ` | ` (ingredient.isEmpty()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (stacks.length == 0) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` stacks[RecipeUtil.getDisplayIndex(stacks.length)] `<br>[调用处 MDCraftingTableRecipeComponent.extractRecipeRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/recipe/MDCraftingTableRecipeComponent.java#L68) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/util/RecipeUtil.java#L8) |
| ` public static int getDisplayIndex(int size) ` | 末尾返回 ` (int) ((System.currentTimeMillis() / 1000) % size) `<br>[调用处 RecipeUtil.getDisplayItem](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/util/RecipeUtil.java#L18) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/util/RecipeUtil.java#L21) |
| ` public RecipeUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/util/RecipeUtil.java#L7) |

## ReferenceHolder

` public final class ReferenceHolder<T> `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/util/ReferenceHolder.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T> ReferenceHolder<T> create(Supplier<T> valueSupplier) ` | 末尾返回 ` new ReferenceHolder<>(valueSupplier) `<br>[调用处 StructureProjectionManager](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L41) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/util/ReferenceHolder.java#L15) |
| ` public T get() ` | ` (value == null) ` 成立时提前返回 ` value = Objects.requireNonNull(valueSupplier.get()) `<br>末尾返回 ` value ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/util/ReferenceHolder.java#L19) |
