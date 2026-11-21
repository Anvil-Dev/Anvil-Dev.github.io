# dev.dubhe.anvilcraft.integration.jade



## AnvilCraftJadePlugin

` public class AnvilCraftJadePlugin implements IWailaPlugin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/AnvilCraftJadePlugin.java#L64)

类型注解 ` @WailaPlugin `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void register(IWailaCommonRegistration registration) ` | 实现调用 ` registration.registerItemStorage(StoragePortProvider.INSTANCE, StoragePortBlockEntity.class) `<br>实现调用 ` registration.registerItemStorage(StoragePortProvider.INSTANCE, StoragePortConsolidatorBlockEntity.class) `<br>实现调用 ` registration.registerItemStorage(StoragePortProvider.INSTANCE, CrateBlock.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/AnvilCraftJadePlugin.java#L66) |
| ` @Override public void registerClient(IWailaClientRegistration registration) ` | 实现调用 ` registration.registerItemStorageClient(StoragePortClientProvider.INSTANCE) `<br>实现调用 ` registration.registerBlockComponent(PowerBlockProvider.INSTANCE, Block.class) `<br>实现调用 ` registration.registerBlockComponent(RubyPrismProvider.INSTANCE, Block.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/AnvilCraftJadePlugin.java#L98) |
| ` public AnvilCraftJadePlugin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/AnvilCraftJadePlugin.java#L64) |

## WipBlockRecipeInfo

` public class WipBlockRecipeInfo `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/WipBlockRecipeInfo.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<Component> getDetails(Recipe<?> recipe) ` | 末尾返回 ` details `<br>[调用处 WipBlockProvider.appendNextStep](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L95) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/WipBlockRecipeInfo.java#L26) |
| ` public WipBlockRecipeInfo() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/WipBlockRecipeInfo.java#L22) |
