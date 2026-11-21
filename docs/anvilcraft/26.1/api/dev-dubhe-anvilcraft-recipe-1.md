# dev.dubhe.anvilcraft.recipe（CanningFoodRecipe 至 FluidMixingRecipe.Builder）



## CanningFoodRecipe

` public class CanningFoodRecipe extends CustomRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CanningFoodRecipe> CODEC ` | 初值 ` MapCodec.unit(CanningFoodRecipe.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L27) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CanningFoodRecipe> STREAM_CODEC ` | 初值 ` StreamCodec.unit(CanningFoodRecipe.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L28) |
| ` public static final RecipeSerializer<CanningFoodRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>( CanningFoodRecipe.CODEC, CanningFoodRecipe.STREAM_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L29) |
| ` public boolean isFood(ItemStack foodStack) ` | ` (foodStack.is(ModFoodItems.CANNED_FOOD)) ` 成立时提前返回 ` false `<br>末尾返回 ` foodStack.has(DataComponents.FOOD) && !foodStack.is(ModFoodItems.CANNED_FOOD) `<br>[调用处 CanningFoodRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L32) |
| ` @Override public boolean matches(CraftingInput input, Level level) ` | ` (items.size() < 2 \|\| items.size() > 6) ` 成立时提前返回 ` false `<br>末尾返回 ` canCount == 1 && foodCount >= 1 && foodCount <= 5 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L37) |
| ` @Override public ItemStack assemble(CraftingInput input) ` | 末尾返回 ` ModFoodItems.CANNED_FOOD.get().setFood(ModFoodItems.CANNED_FOOD.asStack(), food) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L68) |
| ` @Override public NonNullList<ItemStack> getRemainingItems(CraftingInput input) ` | 末尾返回 ` remainingItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L83) |
| ` @Override public RecipeSerializer<CanningFoodRecipe> getSerializer() ` | 末尾返回 ` CanningFoodRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L103) |
| ` @Override public List<RecipeDisplay> display() ` | 末尾返回 ` Collections.singletonList(CanningFoodRecipeDisplay.INSTANCE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L108) |
| ` public CanningFoodRecipe() ` | Java 提供的无参构造器。<br>[调用处 CanningFoodRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L26) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L25) |

## CelestialAnvilRecipe

` public final class CelestialAnvilRecipe extends CustomRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L15)

用黑洞或白洞方块合成对应天体预设，合成结果在每次放置时独立生成。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<CelestialAnvilRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>( MapCodec.unit(INSTANCE), StreamCodec.<RegistryFriendlyByteBuf, CelestialAnvilRecipe>unit(INSTANCE)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L17) |
| ` @Override public boolean matches(CraftingInput input, Level level) ` | 末尾返回 ` anvils == 1 && holes == 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L20) |
| ` @Override public ItemStack assemble(CraftingInput input) ` | 实现调用 ` input.items().stream().anyMatch(stack -> stack.is(ModBlocks.WHITE_HOLE.asItem())) `<br>实现调用 ` input.items().stream() `<br>实现调用 ` input.items() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L39) |
| ` @Override public RecipeSerializer<CelestialAnvilRecipe> getSerializer() ` | 末尾返回 ` SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L46) |
| ` public CelestialAnvilRecipe() ` | Java 提供的无参构造器。<br>[调用处 CelestialAnvilRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L16) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L15) |

## ChargerChargingRecipe

` public record ChargerChargingRecipe(Ingredient ingredient, ItemStackTemplate result, int power, int time) implements Recipe<SingleRecipeInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40)

充放电器配方<br>参数 ` power ` units: kW, positive for discharge and negative for charge<br>参数 ` time ` units: tick

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ChargerChargingRecipe> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L56) |
| ` public static final RecipeSerializer<ChargerChargingRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>(ChargerChargingRecipe.CODEC, ChargerChargingRecipe.STREAM_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L67) |
| ` public static Builder builder(HolderGetter<Item> items) ` | 末尾返回 ` new Builder(items) `<br>[调用处 ChargerChargingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L72) |
| ` @Override public RecipeType<ChargerChargingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.CHARGER_CHARGING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L76) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L81) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L86) |
| ` @Override public RecipeSerializer<ChargerChargingRecipe> getSerializer() ` | 末尾返回 ` ChargerChargingRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L91) |
| ` @Override public ItemStack assemble(SingleRecipeInput input) ` | 末尾返回 ` NeutroniumChargingRecipe.preserveEnchantments(input.getItem(0), this.result.create()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L96) |
| ` @Override public boolean matches(SingleRecipeInput input, Level level) ` | 末尾返回 ` this.ingredient.test(input.getItem(0)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L101) |
| ` public Block getProcessingBlock() ` | 末尾返回 ` (this.power < 0 ? ModBlocks.CHARGER : ModBlocks.DISCHARGER).get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L106) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L110) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L115) |
| ` @Override public String group() ` | 末尾返回 ` "charger_charging" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L120) |
| ` public ChargerChargingRecipe(Ingredient ingredient, ItemStackTemplate result, int power, int time) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |
| ` public Ingredient ingredient() ` | 读取 record 分量 ` ingredient ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |
| ` public ItemStackTemplate result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |
| ` public int power() ` | 读取 record 分量 ` power ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |
| ` public int time() ` | 读取 record 分量 ` time ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |

## ChargerChargingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<ChargerChargingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L125)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder(HolderGetter<Item> items) ` | 执行 ` this.items = items ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L134) |
| ` public Builder requires(ItemLike item) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Ingredient.of(item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L138) |
| ` public Builder requires(TagKey<Item> tag) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Ingredient.of(this.items.getOrThrow(tag)) `<br>实现调用 ` this.items.getOrThrow(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L143) |
| ` public Builder result(ItemLike item) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` item.asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L148) |
| ` public Builder power(int power) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L153) |
| ` public Builder time(int time) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L158) |
| ` @Override public ChargerChargingRecipe buildRecipe() ` | 末尾返回 ` new ChargerChargingRecipe(this.ingredient, this.result, this.power, this.time) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L163) |
| ` @Override public void validate(Identifier id) ` | ` (this.ingredient == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe has no ingredient, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe has no result, RecipeId: " + id) `<br>` (this.power == 0) ` 成立时抛出 ` new IllegalArgumentException("The power release of charging/discharging recipe must be positive or negative, RecipeId: " + id) `<br>` (this.time <= 0) ` 成立时抛出 ` new IllegalArgumentException("Charging time must be a positive number, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L168) |
| ` @Override public String getType() ` | 末尾返回 ` "charger_charging" `<br>[调用处 ChargerChargingRecipe.Builder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L199) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L184) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` this.result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L189) |
| ` @Override public void save(RecipeOutput recipeOutput) ` | 执行 ` this.save(recipeOutput, AnvilCraft.of(BuiltInRegistries.ITEM.getKey(this.result.item().value()).getPath()).withPrefix(this.getType() + "/")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L194) |
| ` public ChargerChargingRecipe.Builder ingredient(@Nullable final Ingredient ingredient) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L125) |

## EnergyWeaponMakeRecipe

` public record EnergyWeaponMakeRecipe(List<ICondition> conditions, List<ItemIngredientPredicate> ingredients, ItemStackTemplate result) implements Recipe<EnergyWeaponMakeRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<EnergyWeaponMakeRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<EnergyWeaponMakeRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L41) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 EnergyWeaponMakeRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L11) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L67) |
| ` @Override public RecipeType<EnergyWeaponMakeRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.ENERGY_WEAPON_MAKE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L71) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L76) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L81) |
| ` @Override public RecipeSerializer<EnergyWeaponMakeRecipe> getSerializer() ` | 末尾返回 ` EnergyWeaponMakeRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L86) |
| ` @Override public ItemStack assemble(Input input) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L91) |
| ` @Override public boolean matches(Input input, Level level) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L100) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L114) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L119) |
| ` @Override public String group() ` | 末尾返回 ` "energy_weapon_make" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L124) |
| ` public List<ICondition> conditions() ` | 读取 record 分量 ` conditions ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L37) |
| ` public List<ItemIngredientPredicate> ingredients() ` | 读取 record 分量 ` ingredients ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L38) |
| ` public ItemStackTemplate result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L39) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L36) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L36) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L36) |

## EnergyWeaponMakeRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<EnergyWeaponMakeRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L141)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder withCondition(ICondition condition) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.conditions.add(condition) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L148) |
| ` public Builder requires(ItemIngredientPredicate.Builder ingredient) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.ingredients.add(ingredient.build()) `<br>实现调用 ` ingredient.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L153) |
| ` public Builder requires(ItemLike item, int count) ` | 末尾返回 ` this.requires(ItemIngredientPredicate.of(item).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L158) |
| ` public Builder requires(ItemLike item) ` | 末尾返回 ` this.requires(item, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L162) |
| ` public Builder requires(HolderGetter<Item> items, TagKey<Item> tag, int count) ` | 末尾返回 ` this.requires(ItemIngredientPredicate.of(items, tag).withCount(count)) `<br>[调用处 EnergyWeaponMakeRecipe.Builder.requires](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L171) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L166) |
| ` public Builder requires(HolderGetter<Item> items, TagKey<Item> tag) ` | 末尾返回 ` this.requires(items, tag, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L170) |
| ` @Override public EnergyWeaponMakeRecipe buildRecipe() ` | 末尾返回 ` new EnergyWeaponMakeRecipe(this.conditions, this.ingredients, this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L174) |
| ` @Override public void validate(Identifier id) ` | ` (this.ingredients.isEmpty() \|\| this.ingredients.size() > 6) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredients size must in 1-6, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L179) |
| ` @Override public String getType() ` | 末尾返回 ` "energy_weapon_make" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L189) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` this.result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L194) |
| ` public EnergyWeaponMakeRecipe.Builder result(final ItemStackTemplate result) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L141) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L141) |

## EnergyWeaponMakeRecipe.Input

` public record Input(List<ItemStack> items) implements RecipeInput, IItemsInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L129)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` this.items.get(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L130) |
| ` @Override public int size() ` | 末尾返回 ` this.items.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L135) |
| ` public Input(List<ItemStack> items) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L129) |
| ` public List<ItemStack> items() ` | 读取 record 分量 ` items ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L129) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L129) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L129) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L129) |

## FluidMixingRecipe

` public class FluidMixingRecipe implements Recipe<FluidMixingRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_INGREDIENTS ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L39) |
| ` public static final int MAX_ITEM_RESULTS ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L40) |
| ` public static final int MAX_FLUID_RESULTS ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L41) |
| ` public static final int MAX_RESULTS ` | 初值 ` FluidMixingRecipe.MAX_ITEM_RESULTS + FluidMixingRecipe.MAX_FLUID_RESULTS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L42) |
| ` public static final RecipeSerializer<FluidMixingRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>(Serializer.CODEC, Serializer.STREAM_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L43) |
| ` public FluidMixingRecipe( List<SizedFluidIngredient> ingredients, List<ItemStackTemplate> itemResults, List<FluidStack> fluidResults, boolean consumeMaximum ) ` | 实现调用 ` List.copyOf(ingredients) `<br>实现调用 ` List.copyOf(itemResults) `<br>实现调用 ` fluidResults.stream().map(FluidStack::copy).toList() `<br>[调用处 FluidMixingRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L331) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L54) |
| ` public static Builder builder(HolderGetter<Fluid> fluids) ` | 末尾返回 ` new Builder(fluids) `<br>[调用处 FluidMixingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L11) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L66) |
| ` public List<SizedFluidIngredient> getFluidIngredients() ` | 末尾返回 ` this.ingredients ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L70) |
| ` public List<ItemStack> getItemResults() ` | 末尾返回 ` this.itemResults.stream().map(ItemStackTemplate::create).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L74) |
| ` public int getResultCount() ` | 末尾返回 ` this.itemResults.size() + this.fluidResults.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L82) |
| ` public boolean consumesMaximum() ` | 末尾返回 ` this.consumeMaximum ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L86) |
| ` public Optional<List<FluidStack>> consume(List<FluidStack> storedFluids) ` | Returns the fluid state after consumption, or an empty optional when the ingredients cannot all be matched.<br>末尾返回 ` this.consume(storedFluids, 1) `<br>[调用处 FluidMixingRecipe.getMaximumBatches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L104) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L93) |
| ` public Optional<List<FluidStack>> consume(List<FluidStack> storedFluids, int batches) ` | ` (batches <= 0) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` this.consumeIngredient(0, batches, remaining) ? Optional.of(remaining) : Optional.empty() `<br>[调用处 FluidMixingRecipe.consume](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L97) |
| ` public int getMaximumBatches(List<FluidStack> storedFluids) ` | ` (!this.consumeMaximum) ` 成立时提前返回 ` this.consume(storedFluids).isPresent() ? 1 : 0 `<br>末尾返回 ` low ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L103) |
| ` public Optional<List<FluidStack>> getFluidResults(int batches) ` | ` (batches <= 0) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(results) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L120) |
| ` @Override public boolean matches(Input input, Level level) ` | 末尾返回 ` this.consume(input.fluids()).isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L153) |
| ` @Override public ItemStack assemble(Input input) ` | 末尾返回 ` this.itemResults.isEmpty() ? ItemStack.EMPTY : this.itemResults.getFirst().create() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L158) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L163) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L168) |
| ` @Override public RecipeSerializer<FluidMixingRecipe> getSerializer() ` | 末尾返回 ` ModRecipeSerializers.FLUID_MIXING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L173) |
| ` @Override public RecipeType<FluidMixingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.FLUID_MIXING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L178) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L183) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L188) |
| ` @Override public String group() ` | 末尾返回 ` "fluid_mixing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L193) |
| ` public List<FluidStack> getFluidResults() ` | 末尾返回 ` this.fluidResults `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L38) |

## FluidMixingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<FluidMixingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L281)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder requires(Fluid fluid, int amount) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.ingredients.add(SizedFluidIngredient.of(fluid, amount)) `<br>实现调用 ` SizedFluidIngredient.of(fluid, amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L292) |
| ` public Builder requires(TagKey<Fluid> fluid, int amount) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.ingredients.add(new SizedFluidIngredient(FluidIngredient.of(this.fluids.getOrThrow(fluid)), amount)) `<br>实现调用 ` FluidIngredient.of(this.fluids.getOrThrow(fluid)) `<br>实现调用 ` this.fluids.getOrThrow(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L297) |
| ` public Builder result(ItemLike item, int count) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.itemResults.add(new ItemStackTemplate(item.asItem(), count)) `<br>实现调用 ` item.asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L305) |
| ` public Builder result(ItemStack item) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.itemResults.add(ItemStackTemplate.fromNonEmptyStack(item)) `<br>实现调用 ` ItemStackTemplate.fromNonEmptyStack(item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L310) |
| ` public Builder result(Fluid fluid, int amount) ` | 末尾返回 ` this.result(new FluidStack(fluid, amount)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L315) |
| ` public Builder result(FluidStack fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.fluidResults.add(fluid.copy()) `<br>实现调用 ` fluid.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L319) |
| ` public Builder consumeMaximum() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L324) |
| ` @Override public FluidMixingRecipe buildRecipe() ` | 末尾返回 ` new FluidMixingRecipe(this.ingredients, this.itemResults, this.fluidResults, this.consumeMaximum) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L329) |
| ` @Override public void validate(Identifier id) ` | ` (this.itemResults.stream().anyMatch(result -> result.item().value() == Items.AIR \|\| result.count() <= 0)) ` 成立时抛出 ` new IllegalArgumentException("Fluid mixing recipe has an empty result, RecipeId: " + id) `<br>` (this.fluidResults.stream().anyMatch(FluidStack::isEmpty)) ` 成立时抛出 ` new IllegalArgumentException("Fluid mixing recipe has an empty fluid result, RecipeId: " + id) `<br>` (this.consumeMaximum && (!this.itemResults.isEmpty() \|\| this.fluidResults.isEmpty())) ` 成立时抛出 ` new IllegalArgumentException("Maximum-consumption fluid mixing recipe must have fluid results only, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L339) |
| ` @Override public String getType() ` | 末尾返回 ` "fluid_mixing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L368) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` this.itemResults.isEmpty() ? new ItemStackTemplate(Items.AIR) : this.itemResults.getFirst() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L373) |
