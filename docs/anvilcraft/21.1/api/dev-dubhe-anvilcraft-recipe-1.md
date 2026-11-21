# dev.dubhe.anvilcraft.recipe（CanningFoodRecipe 至 FluidMixingRecipe.Builder）



## CanningFoodRecipe

` public class CanningFoodRecipe extends CustomRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CanningFoodRecipe(CraftingBookCategory category) ` | 执行 ` super(category) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L22) |
| ` public boolean isFood(ItemStack foodStack) ` | ` (foodStack.is(ModFoodItems.CANNED_FOOD)) ` 成立时提前返回 ` false `<br>末尾返回 ` foodStack.has(DataComponents.FOOD) && !foodStack.is(ModFoodItems.CANNED_FOOD) `<br>[调用处 CanningFoodRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L26) |
| ` public boolean matches(CraftingInput input, Level level) ` | ` (items.size() < 2 \|\| items.size() > 6) ` 成立时提前返回 ` false `<br>末尾返回 ` canCount == 1 && foodCount >= 1 && foodCount <= 5 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L31) |
| ` public ItemStack assemble(CraftingInput input, HolderLookup.Provider registries) ` | 末尾返回 ` ModFoodItems.CANNED_FOOD.get().setFood(ModFoodItems.CANNED_FOOD.asStack(), food) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L61) |
| ` @Override public NonNullList<ItemStack> getRemainingItems(CraftingInput input) ` | 末尾返回 ` remainingItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L75) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | Used to determine if this recipe can fit in a grid of the given width/height<br>末尾返回 ` width * height >= 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L97) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.CANNING_FOOD_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CanningFoodRecipe.java#L102) |

## CelestialAnvilRecipe

` public final class CelestialAnvilRecipe extends CustomRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L15)

用黑洞或白洞方块合成对应天体预设，合成结果在每次放置时独立生成。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<CelestialAnvilRecipe> SERIALIZER ` | 初值 ` new SimpleCraftingRecipeSerializer<>(CelestialAnvilRecipe::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L16) |
| ` public CelestialAnvilRecipe(CraftingBookCategory category) ` | 执行 ` super(category) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L19) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` width * height >= 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L23) |
| ` @Override public boolean matches(CraftingInput input, Level level) ` | 末尾返回 ` anvils == 1 && holes == 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L28) |
| ` @Override public ItemStack assemble(CraftingInput input, HolderLookup.Provider registries) ` | 实现调用 ` input.items().stream().anyMatch(stack -> stack.is(ModBlocks.WHITE_HOLE.asItem())) `<br>实现调用 ` input.items().stream() `<br>实现调用 ` input.items() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L47) |
| ` @Override public RecipeSerializer<CelestialAnvilRecipe> getSerializer() ` | 末尾返回 ` SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/CelestialAnvilRecipe.java#L54) |

## ChargerChargingRecipe

` public class ChargerChargingRecipe implements Recipe<SingleRecipeInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final Ingredient ingredient ` | 字段类型为 ` Ingredient ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L38) |
| ` public final ItemStack result ` | 字段类型为 ` ItemStack ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L39) |
| ` public final int power ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L40) |
| ` public final int time ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L41) |
| ` public ChargerChargingRecipe(Ingredient input, ItemStack result, int power, int time) ` | [调用处 ChargerChargingRecipe.Serializer.decode](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L135) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L43) |
| ` @Contract(" -> new") public static ChargerChargingRecipe.Builder builder() ` | 末尾返回 ` new ChargerChargingRecipe.Builder() `<br>[调用处 ChargerChargingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L50) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.CHARGER_CHARGING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L55) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.CHARGER_CHARGING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L60) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L65) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider registries) ` | 末尾返回 ` this.result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L70) |
| ` @Override public ItemStack assemble(SingleRecipeInput input, HolderLookup.Provider registries) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L75) |
| ` @Override public boolean matches(SingleRecipeInput input, Level level) ` | 末尾返回 ` this.ingredient.test(input.getItem(0)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L86) |
| ` public Block getProcessingBlock() ` | 末尾返回 ` (this.power < 0 ? ModBlocks.CHARGER : ModBlocks.DISCHARGER).get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L91) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L95) |
| ` public Ingredient getIngredient() ` | 末尾返回 ` this.ingredient `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L36) |
| ` public ItemStack getResult() ` | 末尾返回 ` this.result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L36) |
| ` public int getPower() ` | 末尾返回 ` this.power `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L36) |
| ` public int getTime() ` | 末尾返回 ` this.time `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L36) |

## ChargerChargingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<ChargerChargingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L139)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChargerChargingRecipe.Builder requires(ItemLike item) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Ingredient.of(item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L147) |
| ` public ChargerChargingRecipe.Builder requires(TagKey<Item> tag) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Ingredient.of(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L152) |
| ` public ChargerChargingRecipe.Builder result(ItemLike item) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` item.asItem().getDefaultInstance() `<br>实现调用 ` item.asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L157) |
| ` public ChargerChargingRecipe.Builder power(int power) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L162) |
| ` public ChargerChargingRecipe.Builder time(int time) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L167) |
| ` @Override public ChargerChargingRecipe buildRecipe() ` | 末尾返回 ` new ChargerChargingRecipe(this.ingredient, this.result, this.power, this.time) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L172) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.ingredient == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe has no ingredient, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe has no result, RecipeId: " + id) `<br>` (this.power == 0) ` 成立时抛出 ` new IllegalArgumentException("The power release of charging/discharging recipe must be positive or negative, RecipeId: " + id) `<br>` (this.time <= 0) ` 成立时抛出 ` new IllegalArgumentException("Charging time must be a positive number, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L177) |
| ` @Override public String getType() ` | 末尾返回 ` "charger_charging" `<br>[调用处 ChargerChargingRecipe.Builder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L208) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L193) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.result.getItem() `<br>[调用处 ChargerChargingRecipe.Builder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L207) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L198) |
| ` @Override public void save(RecipeOutput recipeOutput) ` | 执行 ` save(recipeOutput, AnvilCraft.of(BuiltInRegistries.ITEM.getKey(this.getResult()).getPath()).withPrefix(this.getType() + "/")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L203) |
| ` public ChargerChargingRecipe.Builder ingredient(final Ingredient ingredient) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L139) |
| ` public Builder() ` | Java 提供的无参构造器。<br>[调用处 ChargerChargingRecipe.builder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L139) |

## ChargerChargingRecipe.Serializer

` public static class Serializer implements RecipeSerializer<ChargerChargingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L100)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ChargerChargingRecipe> STREAM_CODEC ` | 初值 ` StreamCodec.of(ChargerChargingRecipe.Serializer::encode, ChargerChargingRecipe.Serializer::decode) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L109) |
| ` @Override public MapCodec<ChargerChargingRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L113) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ChargerChargingRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L118) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L100) |

## EnergyWeaponMakeRecipe

` public record EnergyWeaponMakeRecipe(List<ICondition> conditions, List<ItemIngredientPredicate> ingredients, ItemStack result) implements Recipe<EnergyWeaponMakeRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 EnergyWeaponMakeRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L10) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L42) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.ENERGY_WEAPON_MAKE_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L46) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.ENERGY_WEAPON_MAKE_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L51) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L56) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider registries) ` | 末尾返回 ` this.result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L61) |
| ` @Override public ItemStack assemble(Input input, HolderLookup.Provider registries) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L66) |
| ` @Override public boolean matches(Input input, Level level) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L75) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L89) |
| ` public List<ICondition> conditions() ` | 读取 record 分量 ` conditions ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L34) |
| ` public List<ItemIngredientPredicate> ingredients() ` | 读取 record 分量 ` ingredients ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L35) |
| ` public ItemStack result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L36) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L33) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L33) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L33) |

## EnergyWeaponMakeRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<EnergyWeaponMakeRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L138)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder withCondition(ICondition condition) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.conditions.add(condition) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L145) |
| ` public Builder requires(ItemIngredientPredicate.Builder ingredient) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.ingredients.add(ingredient.build()) `<br>实现调用 ` ingredient.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L150) |
| ` public Builder requires(ItemLike item, int count) ` | 末尾返回 ` this.requires(ItemIngredientPredicate.of(item).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L155) |
| ` public Builder requires(ItemLike item) ` | 末尾返回 ` this.requires(item, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L159) |
| ` public Builder requires(TagKey<Item> tag, int count) ` | 末尾返回 ` this.requires(ItemIngredientPredicate.of(tag).withCount(count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L163) |
| ` public Builder requires(TagKey<Item> tag) ` | 末尾返回 ` this.requires(tag, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L167) |
| ` @Override public EnergyWeaponMakeRecipe buildRecipe() ` | 末尾返回 ` new EnergyWeaponMakeRecipe(this.conditions, this.ingredients, this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L171) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.ingredients.isEmpty() \|\| this.ingredients.size() > 6) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredients size must in 1-6, RecipeId: " + id) `<br>` (this.result.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be empty, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L176) |
| ` @Override public String getType() ` | 末尾返回 ` "energy_weapon_make" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L186) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.result.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L191) |
| ` public EnergyWeaponMakeRecipe.Builder result(final ItemStack result) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L138) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L138) |

## EnergyWeaponMakeRecipe.Input

` public record Input(List<ItemStack> items) implements RecipeInput, IItemsInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L94)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` this.items.get(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L95) |
| ` @Override public int size() ` | 末尾返回 ` this.items.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L100) |
| ` public Input(List<ItemStack> items) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L94) |
| ` public List<ItemStack> items() ` | 读取 record 分量 ` items ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L94) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L94) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L94) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L94) |

## EnergyWeaponMakeRecipe.Serializer

` public static class Serializer implements RecipeSerializer<EnergyWeaponMakeRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L106)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<EnergyWeaponMakeRecipe> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L107) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, EnergyWeaponMakeRecipe> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L119) |
| ` @Override public MapCodec<EnergyWeaponMakeRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L127) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, EnergyWeaponMakeRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L132) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L106) |

## FluidMixingRecipe

` public class FluidMixingRecipe implements Recipe<FluidMixingRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int MAX_INGREDIENTS ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L34) |
| ` public static final int MAX_ITEM_RESULTS ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L35) |
| ` public static final int MAX_FLUID_RESULTS ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L36) |
| ` public static final int MAX_RESULTS ` | 初值 ` MAX_ITEM_RESULTS + MAX_FLUID_RESULTS ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L37) |
| ` public FluidMixingRecipe( List<SizedFluidIngredient> ingredients, List<ItemStack> itemResults, List<FluidStack> fluidResults, boolean consumeMaximum ) ` | 实现调用 ` List.copyOf(ingredients) `<br>实现调用 ` itemResults.stream().map(ItemStack::copy).toList() `<br>实现调用 ` itemResults.stream().map(ItemStack::copy) `<br>[调用处 FluidMixingRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L301) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L46) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 FluidMixingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L10) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L58) |
| ` public List<SizedFluidIngredient> getFluidIngredients() ` | 末尾返回 ` this.ingredients ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L62) |
| ` public int getResultCount() ` | 末尾返回 ` this.itemResults.size() + this.fluidResults.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L66) |
| ` public boolean consumesMaximum() ` | 末尾返回 ` this.consumeMaximum ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L70) |
| ` public Optional<List<FluidStack>> consume(List<FluidStack> storedFluids) ` | Returns the fluid state after consumption, or an empty optional when the ingredients cannot all be matched.<br>末尾返回 ` this.consume(storedFluids, 1) `<br>[调用处 FluidMixingRecipe.getMaximumBatches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L77) |
| ` public Optional<List<FluidStack>> consume(List<FluidStack> storedFluids, int batches) ` | ` (batches <= 0) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` this.consumeIngredient(0, batches, remaining) ? Optional.of(remaining) : Optional.empty() `<br>[调用处 FluidMixingRecipe.consume](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L81) |
| ` public int getMaximumBatches(List<FluidStack> storedFluids) ` | ` (!this.consumeMaximum) ` 成立时提前返回 ` this.consume(storedFluids).isPresent() ? 1 : 0 `<br>末尾返回 ` low ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L87) |
| ` public Optional<List<FluidStack>> getFluidResults(int batches) ` | ` (batches <= 0) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(results) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L104) |
| ` @Override public boolean matches(Input input, Level level) ` | 末尾返回 ` this.consume(input.fluids()).isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L137) |
| ` @Override public ItemStack assemble(Input input, HolderLookup.Provider registries) ` | 末尾返回 ` this.itemResults.isEmpty() ? ItemStack.EMPTY : this.itemResults.getFirst().copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L142) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L147) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider registries) ` | 末尾返回 ` this.itemResults.isEmpty() ? ItemStack.EMPTY : this.itemResults.getFirst().copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L152) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.FLUID_MIXING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L157) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.FLUID_MIXING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L162) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L167) |
| ` public List<ItemStack> getItemResults() ` | 末尾返回 ` this.itemResults `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L33) |
| ` public List<FluidStack> getFluidResults() ` | 末尾返回 ` this.fluidResults `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L33) |

## FluidMixingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<FluidMixingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L260)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder requires(Fluid fluid, int amount) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.ingredients.add(SizedFluidIngredient.of(fluid, amount)) `<br>实现调用 ` SizedFluidIngredient.of(fluid, amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L266) |
| ` public Builder requires(TagKey<Fluid> fluid, int amount) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.ingredients.add(SizedFluidIngredient.of(fluid, amount)) `<br>实现调用 ` SizedFluidIngredient.of(fluid, amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L271) |
| ` public Builder result(ItemLike item, int count) ` | 末尾返回 ` this.result(new ItemStack(item, count)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L276) |
| ` public Builder result(ItemStack item) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.itemResults.add(item.copy()) `<br>实现调用 ` item.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L280) |
| ` public Builder result(Fluid fluid, int amount) ` | 末尾返回 ` this.result(new FluidStack(fluid, amount)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L285) |
| ` public Builder result(FluidStack fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.fluidResults.add(fluid.copy()) `<br>实现调用 ` fluid.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L289) |
| ` public Builder consumeMaximum() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L294) |
| ` @Override public FluidMixingRecipe buildRecipe() ` | 末尾返回 ` new FluidMixingRecipe(this.ingredients, this.itemResults, this.fluidResults, this.consumeMaximum) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L299) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.itemResults.stream().anyMatch(ItemStack::isEmpty)) ` 成立时抛出 ` new IllegalArgumentException("Fluid mixing recipe has an empty result, RecipeId: " + id) `<br>` (this.fluidResults.stream().anyMatch(FluidStack::isEmpty)) ` 成立时抛出 ` new IllegalArgumentException("Fluid mixing recipe has an empty fluid result, RecipeId: " + id) `<br>` (this.consumeMaximum && (!this.itemResults.isEmpty() \|\| this.fluidResults.isEmpty())) ` 成立时抛出 ` new IllegalArgumentException("Maximum-consumption fluid mixing recipe must have fluid results only, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L309) |
| ` @Override public String getType() ` | 末尾返回 ` "fluid_mixing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L336) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.itemResults.isEmpty() ? Items.AIR : this.itemResults.getFirst().getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L341) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L260) |
