# dev.dubhe.anvilcraft.data



## AnvilCraftDatagen

` public class AnvilCraftDatagen `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L47)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void gatherData(GatherDataEvent.Client event) ` | 事件总线派发 ` GatherDataEvent.Client ` 时调用。<br>实现调用 ` event.getGenerator() `<br>实现调用 ` generator.getPackOutput() `<br>实现调用 ` generator.addProvider(true, new ModParticleDescriptionProvider(packOutput)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L49) |
| ` @SubscribeEvent public static void gatherData(GatherDataEvent.Server event) ` | 事件总线派发 ` GatherDataEvent.Server ` 时调用。<br>实现调用 ` event.getGenerator() `<br>实现调用 ` event.getLookupProvider() `<br>实现调用 ` generator.getPackOutput() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L65) |
| ` public static void init() ` | 初始化生成器<br>实现调用 ` REGISTRUM.getDataGenInitializer() `<br>实现调用 ` genInit.add(Registries.ENCHANTMENT, ModEnchantments::bootstrap) `<br>实现调用 ` genInit.add(Registries.DAMAGE_TYPE, ModDamageTypes::bootstrap) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L138) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L81) |
| ` public static Criterion<InventoryChangeTrigger.TriggerInstance> has(HolderGetter<Item> lookup, ItemLike itemLike) ` | 末尾返回 ` RegistrumRecipeProvider.inventoryTrigger(ItemPredicate.Builder.item().of(lookup, itemLike)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L107) |
| ` public static Criterion<InventoryChangeTrigger.TriggerInstance> has(HolderGetter<Item> lookup, TagKey<Item> tag) ` | 末尾返回 ` RegistrumRecipeProvider.inventoryTrigger(ItemPredicate.Builder.item().of(lookup, tag)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L111) |
| ` public static String hasItem(TagKey<Item> item) ` | 末尾返回 ` "has_" + item.location().getPath() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L115) |
| ` public static String hasItem(ItemLike item) ` | 末尾返回 ` "has_" + BuiltInRegistries.ITEM.getKey(item.asItem()).getPath() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L119) |
| ` public AnvilCraftDatagen() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L47) |
