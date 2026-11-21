# dev.dubhe.anvilcraft.recipe.celestial（SpecialCelestialBodyRecipe.WeightedEntry 至 TempleDemandRecipe.Entry）



## SpecialCelestialBodyRecipe.WeightedEntry

` public record WeightedEntry(String id, int weight) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L267)

=== 加权条目 ===

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<WeightedEntry> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( Codec.STRING.fieldOf("id").forGetter(WeightedEntry::id), Codec.INT.fieldOf("weight").forGetter(WeightedEntry::weight) ).apply(ins, WeightedEntry::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L268) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, WeightedEntry> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, WeightedEntry::id, ByteBufCodecs.INT, WeightedEntry::weight, WeightedEntry::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L273) |
| ` public Identifier resourceId() ` | 末尾返回 ` Identifier.parse(this.id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L281) |
| ` public WeightedEntry(String id, int weight) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L267) |
| ` public String id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L267) |
| ` public int weight() ` | 读取 record 分量 ` weight ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L267) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L267) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L267) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L267) |

## TempleDemandInput

` public record TempleDemandInput(TempleDemandRecipe.Category category) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandInput.java#L7)

TempleDemandRecipe#matches 使用的空输入包装。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandInput.java#L8) |
| ` @Override public int size() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandInput.java#L13) |
| ` public TempleDemandInput(TempleDemandRecipe.Category category) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandInput.java#L7) |
| ` public TempleDemandRecipe.Category category() ` | 读取 record 分量 ` category ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandInput.java#L7) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandInput.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandInput.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandInput.java#L7) |

## TempleDemandRecipe

` public record TempleDemandRecipe(Category category, List<Entry> entries) implements Recipe<TempleDemandInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L26)

定义神庙巨构每日供奉需求条目的配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<TempleDemandRecipe> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L76) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, TempleDemandRecipe> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L81) |
| ` public static final RecipeSerializer<TempleDemandRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>( TempleDemandRecipe.CODEC, TempleDemandRecipe.STREAM_CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L91) |
| ` @Override public boolean matches(TempleDemandInput input, Level level) ` | 末尾返回 ` this.category == input.category() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L95) |
| ` @Deprecated @Override public ItemStack assemble(TempleDemandInput input) ` | 末尾返回 ` Items.AIR.getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L100) |
| ` @Override public RecipeType<TempleDemandRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.TEMPLE_DEMAND.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L106) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L111) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L116) |
| ` @Override public RecipeSerializer<TempleDemandRecipe> getSerializer() ` | 末尾返回 ` TempleDemandRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L121) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L126) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L131) |
| ` @Override public String group() ` | 末尾返回 ` "temple_demand" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L136) |
| ` public TempleDemandRecipe(Category category, List<Entry> entries) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L26) |
| ` public Category category() ` | 读取 record 分量 ` category ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L27) |
| ` public List<Entry> entries() ` | 读取 record 分量 ` entries ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L26) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L26) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L26) |

## TempleDemandRecipe.Category

` public enum Category `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BLESSING ` | 声明于枚举 ` TempleDemandRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L32) |
| ` PUNISHMENT ` | 声明于枚举 ` TempleDemandRecipe.Category ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L33) |
| ` public static final Codec<Category> CODEC ` | 初值 ` Codec.STRING.xmap( Category::fromName, Category::getSerializedName ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L35) |
| ` public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L46) |
| ` public static Category fromName(String name) ` | 实现调用 ` Category.values() `<br>实现调用 ` value.name.equals(name) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L50) |
| ` public static Category[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L31) |
| ` public static Category valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L31) |

## TempleDemandRecipe.Entry

` public record Entry(String itemId, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L58)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<Entry> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( Codec.STRING.fieldOf("id").forGetter(Entry::itemId), Codec.INT.fieldOf("count").forGetter(Entry::count) ).apply(ins, Entry::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L59) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, Entry> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.STRING_UTF8, Entry::itemId, ByteBufCodecs.INT, Entry::count, Entry::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L64) |
| ` public Identifier itemResource() ` | 末尾返回 ` Identifier.parse(this.itemId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L71) |
| ` public Entry(String itemId, int count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L58) |
| ` public String itemId() ` | 读取 record 分量 ` itemId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L58) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L58) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L58) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L58) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L58) |
