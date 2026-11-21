# dev.dubhe.anvilcraft.integration.jade



## AnvilCraftJadePlugin

` public class AnvilCraftJadePlugin implements IWailaPlugin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/AnvilCraftJadePlugin.java#L73)

类型注解 ` @SuppressWarnings("unused") `、` @WailaPlugin `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void register(IWailaCommonRegistration registration) ` | 实现调用 ` registration.registerItemStorage(StoragePortProvider.INSTANCE, StoragePortBlockEntity.class) `<br>实现调用 ` registration.registerItemStorage(StoragePortProvider.INSTANCE, StoragePortConsolidatorBlockEntity.class) `<br>实现调用 ` registration.registerItemStorage(StoragePortProvider.INSTANCE, CrateBlock.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/AnvilCraftJadePlugin.java#L76) |
| ` @Override public void registerClient(IWailaClientRegistration registration) ` | 实现调用 ` registration.registerItemStorageClient(StoragePortClientProvider.INSTANCE) `<br>实现调用 ` registration.registerBlockComponent(ControlValveClientProvider.INSTANCE, ControlValveBlock.class) `<br>实现调用 ` registration.registerBlockComponent(CursedGoldEnchantPowerProvider.INSTANCE, CursedGoldBlock.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/AnvilCraftJadePlugin.java#L111) |
| ` public AnvilCraftJadePlugin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/AnvilCraftJadePlugin.java#L73) |

## JadeItemTooltipSupport

` public final class JadeItemTooltipSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/JadeItemTooltipSupport.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<Component> appendModName(ItemStack stack, List<Component> lines) ` | ` (modName == null \|\| modName.getString().isEmpty()) ` 成立时提前返回 ` lines `<br>末尾返回 ` result `<br>[调用处 JadeScreenTooltipMixin.anvilcraft$modNameBeforeGuide](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/JadeScreenTooltipMixin.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/JadeItemTooltipSupport.java#L14) |

## WipBlockRecipeInfo

` public class WipBlockRecipeInfo `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/WipBlockRecipeInfo.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<Component> getDetails(Recipe<?> recipe) ` | 末尾返回 ` details `<br>[调用处 WipBlockProvider.appendNextStep](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/WipBlockRecipeInfo.java#L27) |
| ` public WipBlockRecipeInfo() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/WipBlockRecipeInfo.java#L23) |
