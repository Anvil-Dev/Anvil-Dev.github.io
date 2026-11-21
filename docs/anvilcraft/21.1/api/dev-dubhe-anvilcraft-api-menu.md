# dev.dubhe.anvilcraft.api.menu



## MenuBlockEntityLookup

` public final class MenuBlockEntityLookup `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/menu/MenuBlockEntityLookup.java#L15)

菜单客户端构造在 Level#getBlockEntity(BlockPos) 失败时的查找扩展。 查找器在客户端与服务器线程都可能被调用；不得改变世界状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(Finder finder) ` | 执行 ` FINDERS.add(finder) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/menu/MenuBlockEntityLookup.java#L21) |
| ` public static @Nullable BlockEntity find(Level level, BlockPos pos, Class<? extends BlockEntity> type) ` | ` (type.isInstance(existing)) ` 成立时提前返回 ` existing `<br>末尾返回 ` null `<br>实现调用 ` level.getBlockEntity(pos) `<br>实现调用 ` type.isInstance(existing) `<br>实现调用 ` finder.find(level, pos, type) `<br>实现调用 ` type.isInstance(found) `<br>[调用处 AdvancedComparatorMenu.readComparator](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AdvancedComparatorMenu.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/menu/MenuBlockEntityLookup.java#L25) |

## MenuBlockEntityLookup.Finder

` public interface Finder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/menu/MenuBlockEntityLookup.java#L35)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable BlockEntity find(Level level, BlockPos pos, Class<? extends BlockEntity> type) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/menu/MenuBlockEntityLookup.java#L37) |
