# dev.dubhe.anvilcraft.saved.setting.mode



## BalanceMode

` public enum BalanceMode implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L16)

物品均衡模式：控制手持物品用完自动补货、背包物品超一组自动存入存储站。 智能为同时启用补货与存入；仅补货/仅存入只启用其一；关为全部禁用。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SMART ` | 声明于枚举 ` BalanceMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L17) |
| ` RESTOCK ` | 声明于枚举 ` BalanceMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L18) |
| ` DEPOSIT ` | 声明于枚举 ` BalanceMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L19) |
| ` OFF ` | 声明于枚举 ` BalanceMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L20) |
| ` public static final Codec<BalanceMode> CODEC ` | 初值 ` StringRepresentable.fromEnum(BalanceMode::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L23) |
| ` public static final StreamCodec<ByteBuf, BalanceMode> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(BalanceMode.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L24) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) `<br>[调用处 BalanceMode.getModeName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L26) |
| ` public Component getModeName() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.balance_mode." + this.getSerializedName()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L31) |
| ` public boolean restockEnabled() ` | 是否启用补货（手持物品用完时从存储站补一组）。<br>末尾返回 ` this == SMART \|\| this == RESTOCK ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L36) |
| ` public boolean depositEnabled() ` | 是否启用自动存入（物品超一组时把多余部分存入存储站）。<br>末尾返回 ` this == SMART \|\| this == DEPOSIT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L41) |
| ` public static BalanceMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L16) |
| ` public static BalanceMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/BalanceMode.java#L16) |

## NbtDisplayMode

` public enum NbtDisplayMode implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` UNFOLD ` | 声明于枚举 ` NbtDisplayMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L16) |
| ` FOLD ` | 声明于枚举 ` NbtDisplayMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L17) |
| ` public static final Codec<NbtDisplayMode> CODEC ` | 初值 ` StringRepresentable.fromEnum(NbtDisplayMode::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L20) |
| ` public static final StreamCodec<ByteBuf, NbtDisplayMode> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(NbtDisplayMode.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L21) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) `<br>[调用处 NbtDisplayMode.getModeName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L28) |
| ` public Component getModeName() ` | 末尾返回 ` tooltip ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L33) |
| ` public static NbtDisplayMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L629) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L15) |
| ` public static NbtDisplayMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/NbtDisplayMode.java#L15) |

## OrderMode

` public enum OrderMode implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SEQUENTIAL ` | 声明于枚举 ` OrderMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L13) |
| ` REVERSE ` | 声明于枚举 ` OrderMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L14) |
| ` public static final Codec<OrderMode> CODEC ` | 初值 ` StringRepresentable.fromEnum(OrderMode::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L17) |
| ` public static final StreamCodec<ByteBuf, OrderMode> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(OrderMode.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L18) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) `<br>[调用处 OrderMode.getModeName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L20) |
| ` public Component getModeName() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.storage.order." + this.getSerializedName()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L25) |
| ` public static OrderMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L604) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L12) |
| ` public static OrderMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/OrderMode.java#L12) |

## SearchMode

` public enum SearchMode implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` CLEAR ` | 声明于枚举 ` SearchMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L16) |
| ` RETENTION ` | 声明于枚举 ` SearchMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L17) |
| ` public static final Codec<SearchMode> CODEC ` | 初值 ` StringRepresentable.fromEnum(SearchMode::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L20) |
| ` public static final StreamCodec<ByteBuf, SearchMode> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(SearchMode.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L21) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) `<br>[调用处 SearchMode.getModeName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L28) |
| ` public Component getModeName() ` | 末尾返回 ` tooltip ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L33) |
| ` public static SearchMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L568) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L15) |
| ` public static SearchMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SearchMode.java#L15) |

## SortMode

` public enum SortMode implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` COUNT ` | 声明于枚举 ` SortMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L13) |
| ` MOD ` | 声明于枚举 ` SortMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L14) |
| ` NAME ` | 声明于枚举 ` SortMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L15) |
| ` public static final Codec<SortMode> CODEC ` | 初值 ` StringRepresentable.fromEnum(SortMode::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L18) |
| ` public static final StreamCodec<ByteBuf, SortMode> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(SortMode.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L19) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) `<br>[调用处 SortMode.getModeName](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L21) |
| ` public Component getModeName() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.storage.sort." + this.getSerializedName()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L26) |
| ` public static SortMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L587) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L12) |
| ` public static SortMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/setting/mode/SortMode.java#L12) |
