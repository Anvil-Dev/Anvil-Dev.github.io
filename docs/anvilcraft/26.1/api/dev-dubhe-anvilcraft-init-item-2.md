# dev.dubhe.anvilcraft.init.item（ModCustomDataComponents 至 ModItemGroups）



## ModCustomDataComponents

` public class ModCustomDataComponents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModCustomDataComponents.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<ICustomDataComponent.Type<?>, NormalDataComponent.Type> NORMAL ` | 初值 ` ModCustomDataComponents.DF .register("normal_data_component", NormalDataComponent.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModCustomDataComponents.java#L17) |
| ` public static final DeferredHolder<ICustomDataComponent.Type<?>, ItemEnchantmentsData.Type> ITEM_ENCHANTMENTS ` | 初值 ` ModCustomDataComponents.DF.register("item_enchantments", ItemEnchantmentsData.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModCustomDataComponents.java#L20) |
| ` public static final DeferredHolder<ICustomDataComponent.Type<?>, MultiphaseData.Type> MULTIPHASE ` | 初值 ` ModCustomDataComponents.DF .register("multiphase", MultiphaseData.Type::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModCustomDataComponents.java#L23) |
| ` public static void register(IEventBus bus) ` | 执行 ` ModCustomDataComponents.DF.register(bus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L150) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModCustomDataComponents.java#L26) |
| ` public ModCustomDataComponents() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModCustomDataComponents.java#L13) |

## ModDataComponentPredicates

` public class ModDataComponentPredicates `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<DataComponentPredicate.Type<?>, DataComponentPredicate.Type<ItemSavedEntityPredicate>> SAVED_ENTITY ` | 初值 ` ModDataComponentPredicates.register( "saved_entity", ItemSavedEntityPredicate.CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L21) |
| ` public static final DeferredHolder<DataComponentPredicate.Type<?>, DataComponentPredicate.Type<ItemEnchCountPredicate>> ENCH_COUNT ` | 初值 ` ModDataComponentPredicates.register( "enchantment_count", ItemEnchCountPredicate.CODEC.codec() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L27) |
| ` public static final DeferredHolder<DataComponentPredicate.Type<?>, DataComponentPredicate.Type<IntegerComponentPredicate>> INT_COMP ` | 初值 ` ModDataComponentPredicates.register( "integer_component", IntegerComponentPredicate.CODEC.codec() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L33) |
| ` public static final DeferredHolder<DataComponentPredicate.Type<?>, DataComponentPredicate.Type<ExtraEnchantmentsPredicate.MercilessEnchantments>> MERCILESS_ENCH ` | 初值 ` ModDataComponentPredicates.register( "merciless_enchantment", ExtraEnchantmentsPredicate.MercilessEnchantments.CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L39) |
| ` public static final DeferredHolder<DataComponentPredicate.Type<?>, DataComponentPredicate.Type<ExtraEnchantmentsPredicate.DisabledEnchantments>> DISABLED_ENCH ` | 初值 ` ModDataComponentPredicates.register( "disabled_enchantment", ExtraEnchantmentsPredicate.DisabledEnchantments.CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L47) |
| ` public static <T extends DataComponentPredicate> DeferredHolder<DataComponentPredicate.Type<?>, DataComponentPredicate.Type<T>> register( String name, Codec<T> codec ) ` | 末尾返回 ` ModDataComponentPredicates.DF.register(name, () -> new DataComponentPredicate.TypeBase<>(codec) { }) `<br>[调用处 ModDataComponentPredicates](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L55) |
| ` public static void initialize(IEventBus modEventBus) ` | 执行 ` ModDataComponentPredicates.DF.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L64) |
| ` public ModDataComponentPredicates() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDataComponentPredicates.java#L15) |

## ModDeathProtections

` public class ModDeathProtections `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDeathProtections.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeathProtection TOTEM_OF_RECOVERY ` | 字段类型为 ` DeathProtection ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDeathProtections.java#L17) |
| ` public static final DeathProtection TOTEM_OF_RAGE ` | 字段类型为 ` DeathProtection ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDeathProtections.java#L27) |
| ` public static final DeathProtection AMULET_BOX ` | 初值 ` new DeathProtection(List.of( TryTotemsInBoxConsumeEffect.INSTANCE, PreventShrinkingConsumeEffect.INSTANCE )) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDeathProtections.java#L39) |
| ` public ModDeathProtections() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModDeathProtections.java#L16) |

## ModFoodItems

` public class ModFoodItems `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L22)

类型注解 ` @SuppressWarnings("CodeBlock2Expr") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ItemEntry<CursedGoldenAppleItem> CURSED_GOLDEN_APPLE ` | 由 ` REGISTRUM .item("cursed_golden_apple", properties -> new CursedGoldenAppleItem(properties.food(ModFoods.CURSED_GOLDEN_APPLE))) .tag(Tags.Items.FOODS) .recipe((ctx, provider) -> ShapedRecipeBuilder.shaped(provider.getItems(), RecipeCategory.FOOD, ctx.get()) .pattern("AAA") .pattern("ABA") .pattern("AAA") .define('A', ModBlocks.CURSED_GOLD_BLOCK) .define('B', Items.APPLE) .unlockedBy("has_cursed_gold_block", AnvilCraftDatagen.has(provider.getItems(), ModBlocks.CURSED_GOLD_BLOCK)) .unlockedBy("has_apple", AnvilCraftDatagen.has(provider.getItems(), Items.APPLE)) .save(provider)) .register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L24) |
| ` public static final ItemEntry<Item> CHOCOLATE ` | 由 ` REGISTRUM .item("chocolate", Item::new) .properties(properties -> properties .food(ModFoods.CHOCOLATE, ModConsumables.CHOCOLATE) ) .tag(Tags.Items.FOODS) .recipe(RegistrumItemRecipeLoader::chocolate) .register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L38) |
| ` public static final ItemEntry<Item> BLACK_CHOCOLATE ` | 由 ` REGISTRUM .item("black_chocolate", Item::new) .aliasFrom(AnvilCraft.of("chocolate_black")) .properties(properties -> properties .food(ModFoods.CHOCOLATE_BLACK, ModConsumables.CHOCOLATE_BLACK) ) .tag(Tags.Items.FOODS) .recipe(RegistrumItemRecipeLoader::chocolateBlack) .register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L47) |
| ` @Deprecated(forRemoval = true) public static final ItemEntry<Item> CHOCOLATE_BLACK ` | 初值 ` ModFoodItems.BLACK_CHOCOLATE ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L57) |
| ` public static final ItemEntry<Item> WHITE_CHOCOLATE ` | 由 ` REGISTRUM .item("white_chocolate", Item::new) .aliasFrom(AnvilCraft.of("chocolate_white")) .properties(properties -> properties .food(ModFoods.CHOCOLATE_WHITE, ModConsumables.CHOCOLATE_WHITE) ) .tag(Tags.Items.FOODS) .recipe(RegistrumItemRecipeLoader::chocolateWhite) .register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L60) |
| ` @Deprecated(forRemoval = true) public static final ItemEntry<Item> CHOCOLATE_WHITE ` | 初值 ` ModFoodItems.WHITE_CHOCOLATE ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L70) |
| ` public static final ItemEntry<Item> CREAMY_BREAD_ROLL ` | 由 ` REGISTRUM .item("creamy_bread_roll", Item::new) .properties(properties -> properties .food(ModFoods.CREAMY_BREAD_ROLL) ) .tag(Tags.Items.FOODS) .recipe(RegistrumItemRecipeLoader::creamyBreadRoll) .register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L73) |
| ` public static final ItemEntry<Item> BEEF_MUSHROOM_STEW ` | 初值 ` REGISTRUM .item("beef_mushroom_stew", Item::new) .properties(properties -> properties .stacksTo(1) .food(ModFoods.BEEF_MUSHROOM_STEW) .usingConvertsTo(Items.BOWL) ) .tag(Tags.Items.FOODS) .register() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L82) |
| ` public static final ItemEntry<UtusanItem> UTUSAN ` | 初值 ` REGISTRUM .item("utusan", UtusanItem::new) .register() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L92) |
| ` public static final ItemEntry<CannedFoodItem> CANNED_FOOD ` | 初值 ` REGISTRUM.item("canned_food", CannedFoodItem::new) .tag(Tags.Items.FOODS) .register() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L96) |
| ` public static final ItemEntry<Item> PILL ` | 由 ` REGISTRUM .item("pill", Item::new) .properties(properties -> properties .component(DataComponents.CONSUMABLE, ModConsumables.INSTANT_FOOD) .component(DataComponents.POTION_CONTENTS, PotionContents.EMPTY) .useCooldown(2) ) .recipe((_, provider) -> { StampingRecipe.builder() .requires(provider.getItems(), ModItemTags.FLOUR) .result(ModFoodItems.PILL, 4) .save(provider); }) .register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L100) |
| ` public static void register() ` | 当前实现的方法体为空。<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L104) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L115) |
| ` public ModFoodItems() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L22) |

## ModFoods

` public class ModFoods `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoods.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FoodProperties CURSED_GOLDEN_APPLE ` | 初值 ` new FoodProperties.Builder() .nutrition(4).saturationModifier(0.3F).alwaysEdible().build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoods.java#L6) |
| ` public static final FoodProperties CHOCOLATE ` | 初值 ` new FoodProperties.Builder() .nutrition(2) .saturationModifier(4.0F) .alwaysEdible() .build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoods.java#L8) |
| ` public static final FoodProperties CHOCOLATE_BLACK ` | 初值 ` new FoodProperties.Builder() .nutrition(2) .saturationModifier(2.0F) .alwaysEdible() .build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoods.java#L13) |
| ` public static final FoodProperties CHOCOLATE_WHITE ` | 初值 ` new FoodProperties.Builder() .nutrition(2) .saturationModifier(2.0F) .alwaysEdible() .build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoods.java#L18) |
| ` public static final FoodProperties CREAMY_BREAD_ROLL ` | 初值 ` new FoodProperties.Builder().nutrition(8).saturationModifier(0.5F).build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoods.java#L23) |
| ` public static final FoodProperties BEEF_MUSHROOM_STEW ` | 初值 ` new FoodProperties.Builder().nutrition(10).saturationModifier(0.8F).build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoods.java#L25) |
| ` public ModFoods() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoods.java#L5) |

## ModItemGroups

` public class ModItemGroups `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L34)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_TOOLS_AND_UTILITIES ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("tools_and_utilities")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L47) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_INGREDIENTS ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("ingredients")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L49) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_FUNCTIONAL_BLOCKS ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("functional_blocks")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L51) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_BUILDING_BLOCKS ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("building_blocks")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L53) |
| ` @Deprecated public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_TOOL ` | 初值 ` ANVILCRAFT_TOOLS_AND_UTILITIES ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L55) |
| ` @Deprecated public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_FUNCTION_BLOCK ` | 初值 ` ANVILCRAFT_FUNCTIONAL_BLOCKS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L58) |
| ` @Deprecated public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_BUILD_BLOCK ` | 初值 ` ANVILCRAFT_BUILDING_BLOCKS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L61) |
| ` public static final DeferredHolder<CreativeModeTab, CreativeModeTab> ANVILCRAFT_ITEMS ` | 初值 ` DeferredHolder.create(Registries.CREATIVE_MODE_TAB, AnvilCraft.of("items")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L64) |
| ` public static void register(IEventBus modEventBus) ` | 执行 ` modEventBus.addListener(ModItemGroups::registerTabs) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L69) |
| ` public ModItemGroups() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L34) |
