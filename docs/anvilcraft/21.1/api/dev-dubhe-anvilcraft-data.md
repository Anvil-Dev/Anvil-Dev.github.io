# dev.dubhe.anvilcraft.data



## AnvilCraftDatagen

` public class AnvilCraftDatagen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L47)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void gatherData(GatherDataEvent event) ` | 事件总线派发 ` GatherDataEvent ` 时调用。<br>实现调用 ` event.getGenerator() `<br>实现调用 ` event.getLookupProvider() `<br>实现调用 ` event.getExistingFileHelper() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L49) |
| ` public static void init() ` | 初始化生成器<br>实现调用 ` REGISTRUM.getDataGenInitializer() `<br>实现调用 ` genInit.add(Registries.ENCHANTMENT, ModEnchantments::bootstrap) `<br>实现调用 ` genInit.add(Registries.DAMAGE_TYPE, ModDamageTypes::bootstrap) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L142) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L71) |
| ` public static Criterion<InventoryChangeTrigger.TriggerInstance> has(ItemLike itemLike) ` | 末尾返回 ` RegistrumRecipeProvider.has(itemLike) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L116) |
| ` public static Criterion<InventoryChangeTrigger.TriggerInstance> has(TagKey<Item> tag) ` | 末尾返回 ` RegistrumRecipeProvider.has(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L120) |
| ` public static String hasItem(TagKey<Item> item) ` | 末尾返回 ` "has_" + item.location().getPath() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L124) |
| ` public static String hasItem(ItemLike item) ` | 末尾返回 ` "has_" + BuiltInRegistries.ITEM.getKey(item.asItem()).getPath() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L128) |
| ` public AnvilCraftDatagen() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L47) |
