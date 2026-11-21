# dev.dubhe.anvilcraft.saved.datafixers



## DataFixer

` public abstract class DataFixer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/datafixers/DataFixer.java#L12)

数据格式修复器<br>使用约定 若类名内需要包含版本号，建议命名为其数据格式的版本。 如某个修复器可以修复从上个版本升级到v2.4版本的数据，则可命名为 V2\_4

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public abstract double version() ` | 获取该修复器数据格式的版本<br>返回 该修复器数据格式的版本<br>使用约定 如某修复器负责修复v2-&gt;v2.1数据格式的数据，则返回 2.1 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/datafixers/DataFixer.java#L19) |
| ` public abstract CompoundTag fixData(CompoundTag nbt, HolderLookup.Provider registries) ` | 将数据修复成特定的数据格式。<br>参数 ` nbt ` 需要修复的数据<br>参数 ` registries ` 注册表提供器<br>返回 修复后的数据<br>实现约定 建议修复整体数据结构。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/datafixers/DataFixer.java#L31) |
| ` public DataFixer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/datafixers/DataFixer.java#L12) |

## DataFixers

` public class DataFixers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/datafixers/DataFixers.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerFixer(ResourceLocation id, DataFixer... fixers) ` | 注册数据修复器<br>参数 ` id ` 一系列数据修复器的共同ID<br>参数 ` fixers ` 一系列数据修复器。顺序不敏感<br>实现调用 ` DataFixers.FIXERS.put(id, fixer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/datafixers/DataFixers.java#L26) |
| ` public static CompoundTag fixData(ResourceLocation id, double currentVer, CompoundTag nbt, HolderLookup.Provider registries) ` | 根据提供的ID获取数据修复器，并使用它们修复数据<br>参数 ` id ` 需要使用的数据修复器们的共同ID<br>参数 ` currentVer ` 目前版本。将会使用低于等于目前版本的所有数据修复器修复数据<br>参数 ` nbt ` 需要修复的数据<br>参数 ` registries ` 注册表提供器<br>返回 修复的数据<br>末尾返回 ` nbt `<br>[调用处 WormholeInterfaceStates.read](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/WormholeInterfaceStates.java#L209) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/datafixers/DataFixers.java#L41) |
| ` public DataFixers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/datafixers/DataFixers.java#L13) |
