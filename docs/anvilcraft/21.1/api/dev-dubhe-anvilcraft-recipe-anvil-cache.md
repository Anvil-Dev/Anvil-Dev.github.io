# dev.dubhe.anvilcraft.recipe.anvil.cache



## JewelCraftingRecipeCache

` public class JewelCraftingRecipeCache `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/JewelCraftingRecipeCache.java#L20)

宝石工艺配方缓存类，用于缓存和管理宝石工艺配方 该类提供了对宝石工艺配方的缓存、构建和同步功能

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public @Nullable RecipeHolder<JewelCraftingRecipe> getJewelRecipeByResult(ItemStack result) ` | 根据结果物品获取宝石工艺配方<br>参数 ` result ` 结果物品堆<br>返回 宝石工艺配方持有者，如果不存在则返回null<br>末尾返回 ` this.jewelCraftingCache.get(result.getItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/JewelCraftingRecipeCache.java#L32) |
| ` public Set<Item> getAllJewelResultItem() ` | 获取所有宝石工艺结果物品<br>返回 宝石工艺结果物品集合<br>末尾返回 ` this.jewelCraftingCache.keySet() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/JewelCraftingRecipeCache.java#L41) |
| ` public void buildJewelCraftingCache(RecipeManager recipeManager) ` | 根据配方管理器构建宝石工艺配方缓存<br>参数 ` recipeManager ` 配方管理器<br>实现调用 ` recipeManager.getAllRecipesFor(ModRecipeTypes.JEWEL_CRAFTING_TYPE.get()) .stream() `<br>实现调用 ` recipeManager.getAllRecipesFor(ModRecipeTypes.JEWEL_CRAFTING_TYPE.get()) `<br>实现调用 ` ModRecipeTypes.JEWEL_CRAFTING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/JewelCraftingRecipeCache.java#L50) |
| ` public void buildJewelCraftingCache(Map<ItemStack, RecipeHolder<JewelCraftingRecipe>> data) ` | 根据数据映射表构建宝石工艺配方缓存<br>参数 ` data ` 数据映射表<br>执行 ` this.jewelCraftingCache = data.entrySet() .stream() .map(it -> Map.entry(it.getKey().getItem(), it.getValue())) .collect(Util.toMap()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/JewelCraftingRecipeCache.java#L62) |
| ` public RecipeCacheSyncPacket intoPacket() ` | 转换为配方缓存同步数据包<br>返回 配方缓存同步数据包<br>末尾返回 ` new RecipeCacheSyncPacket( this.jewelCraftingCache.entrySet() .stream() .map(it -> Map.entry(it.getKey().getDefaultInstance(), it.getValue())) .collect(Util.toMap()) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/JewelCraftingRecipeCache.java#L74) |
| ` public JewelCraftingRecipeCache() ` | Java 提供的无参构造器。<br>[调用处 RecipeCaches.reload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L31) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/JewelCraftingRecipeCache.java#L20) |

## RecipeCaches

` public class RecipeCaches `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L19)

配方缓存管理类，用于管理各种类型的配方缓存 该类提供了对宝石工艺配方缓存的加载、同步和访问功能

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void reload(RecipeManager recipeManager) ` | 重新加载配方缓存<br>参数 ` recipeManager ` 配方管理器<br>实现调用 ` jewelCraftingRecipeCache.buildJewelCraftingCache(recipeManager) `<br>[调用处 AnvilCraft.addReloadListeners](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L209) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L30) |
| ` public static void sync(ServerPlayer player) ` | 同步配方缓存到指定玩家<br>参数 ` player ` 服务器玩家<br>执行 ` PacketDistributor.sendToPlayer(player, jewelCraftingRecipeCache.intoPacket()) `<br>[调用处 PlayerEventListener.onJoinedServer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/PlayerEventListener.java#L200) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L40) |
| ` public static void networkSynced(Map<ItemStack, RecipeHolder<JewelCraftingRecipe>> data) ` | 网络同步配方缓存数据<br>参数 ` data ` 配方数据映射表<br>实现调用 ` jewelCraftingRecipeCache.buildJewelCraftingCache(data) `<br>[调用处 RecipeCacheSyncPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RecipeCacheSyncPacket.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L49) |
| ` public static void unload() ` | 卸载配方缓存<br>执行 ` jewelCraftingRecipeCache = null `<br>[调用处 ServerLifecycleEventListener.onServerStopped](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L57) |
| ` public static @Nullable RecipeHolder<JewelCraftingRecipe> getJewelRecipeByResult(ItemStack stack) ` | 根据结果物品获取宝石工艺配方<br>参数 ` stack ` 结果物品堆<br>返回 宝石工艺配方持有者，如果不存在则返回null<br>末尾返回 ` jewelCraftingRecipeCache.getJewelRecipeByResult(stack) `<br>[调用处 JewelSourceContainer.setItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/container/JewelSourceContainer.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L67) |
| ` public static Set<Item> getAllJewelResultItem() ` | 获取所有宝石工艺结果物品<br>返回 宝石工艺结果物品集合<br>末尾返回 ` jewelCraftingRecipeCache.getAllJewelResultItem() `<br>[调用处 JewelCraftingMenu.mayPlace](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/JewelCraftingMenu.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L76) |
| ` public RecipeCaches() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/cache/RecipeCaches.java#L19) |
