# dev.dubhe.anvilcraft.saved.storage.category.store



## CategoryEntry

` public class CategoryEntry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CategoryEntry> CODEC ` | 初值 ` CodecUtil.mapCodec(ICategory.CODEC.fieldOf("category").forGetter(CategoryEntry::getCategory), CategoryMode.CODEC.fieldOf("mode").forGetter(CategoryEntry::getMode), CategoryEntry::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L19) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CategoryEntry> STREAM_CODEC ` | 初值 ` StreamCodec.composite(ICategory.STREAM_CODEC, CategoryEntry::getCategory, CategoryMode.STREAM_CODEC, CategoryEntry::getMode, CategoryEntry::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L28) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, List<CategoryEntry>> LIST_STREAM_CODEC ` | 初值 ` CategoryEntry.STREAM_CODEC.apply(ByteBufCodecs.list()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L35) |
| ` public CategoryMode changeMode(boolean inversed) ` | 末尾返回 ` this.mode = this.mode.next(inversed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L40) |
| ` public CategoryMode changeMode(CategoryMode mode) ` | 末尾返回 ` this.mode = mode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L44) |
| ` public ICategory getCategory() ` | 末尾返回 ` this.category `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L15) |
| ` public CategoryMode getMode() ` | 末尾返回 ` this.mode `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L15) |
| ` public CategoryEntry(final ICategory category) ` | 执行 ` this.category = category `<br>由 Lombok 生成。<br>[调用处 PlayerSetting.initialize](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/PlayerSetting.java#L67) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L15) |
| ` public CategoryEntry(final ICategory category, final CategoryMode mode) ` | 由 Lombok 生成。<br>[调用处 SettingClientStub.copy](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/rpc/SettingClientStub.java#L102) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryEntry.java#L15) |

## CategoryMode

` public enum CategoryMode implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` UNLIMITED ` | 声明于枚举 ` CategoryMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L15) |
| ` ALLOWLIST ` | 声明于枚举 ` CategoryMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L16) |
| ` BLOCKLIST ` | 声明于枚举 ` CategoryMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L17) |
| ` public static final Codec<CategoryMode> CODEC ` | 初值 ` StringRepresentable.fromEnum(CategoryMode::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L20) |
| ` public static final StreamCodec<ByteBuf, CategoryMode> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(CategoryMode.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L21) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) `<br>[调用处 CategoryMode.getModeName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L28) |
| ` public Component getModeName() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.storage.category.mode." + this.getSerializedName()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L33) |
| ` public CategoryMode next(boolean inversed) ` | 返回 ` CategoryMode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L37) |
| ` public int getTexYDiff() ` | 末尾返回 ` this.texYDiff `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L13) |
| ` public static CategoryMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L13) |
| ` public static CategoryMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/store/CategoryMode.java#L13) |
