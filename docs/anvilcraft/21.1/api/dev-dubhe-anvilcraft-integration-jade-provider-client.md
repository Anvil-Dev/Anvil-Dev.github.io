# dev.dubhe.anvilcraft.integration.jade.provider.client



## FluidTankClientProvider

` public class FluidTankClientProvider implements IClientExtensionProvider<CompoundTag, FluidView> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/FluidTankClientProvider.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidTankClientProvider INSTANCE ` | 初值 ` new FluidTankClientProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/FluidTankClientProvider.java#L26) |
| ` @Override public List<ClientViewGroup<FluidView>> getClientGroups( Accessor<?> accessor, List<ViewGroup<CompoundTag>> groups ) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/FluidTankClientProvider.java#L31) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` FluidTankProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/FluidTankClientProvider.java#L212) |

## StoragePortClientProvider

` public enum StoragePortClientProvider implements IClientExtensionProvider<ItemStack, ItemView> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L18)

保留缓存与标记仓储物品的完整计数，并沿用 Jade 的物品布局和显示数量设置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` StoragePortClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L19) |
| ` @Override public List<ClientViewGroup<ItemView>> getClientGroups(Accessor<?> accessor, List<ViewGroup<ItemStack>> groups) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L21) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` StoragePortProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L41) |
| ` public static StoragePortClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L18) |
| ` public static StoragePortClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L18) |
