# dev.dubhe.anvilcraft.integration.jade.provider（StoragePortProvider 至 WipBlockProvider）



## StoragePortProvider

` public enum StoragePortProvider implements IServerExtensionProvider<ItemStack> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L39)

仓储相关方块的 Jade 物品预览。 端口展示缓存与标记物品计数；板条箱、大型板条箱、潜影集装箱、超维存储站 以及直连仓储的整合器以有限条目预览库存，避免海量条目一次性同步。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` StoragePortProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L40) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("storage_port") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L42) |
| ` public static final String COUNTS_KEY ` | 初值 ` "Counts" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L43) |
| ` @Override public @Nullable List<ViewGroup<ItemStack>> getGroups(Accessor<?> accessor) ` | ` (!(accessor instanceof BlockAccessor block)) ` 成立时提前返回 ` null `<br>` (block.getBlockEntity() instanceof StoragePortBlockEntity port) ` 成立时提前返回 ` this.portGroups(port) `<br>` (block.getBlockEntity() instanceof StoragePortConsolidatorBlockEntity consolidator) ` 成立时提前返回 ` this.consolidatorGroups(consolidator) `<br>` (isStorageBlock(block.getBlockState())) ` 成立时提前返回 ` this.storageGroups(block) `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L45) |
| ` @Override public boolean shouldRequestData(Accessor<?> accessor) ` | ` (!(accessor instanceof BlockAccessor block)) ` 成立时提前返回 ` false `<br>末尾返回 ` block.getBlockEntity() instanceof StoragePortBlockEntity \|\| block.getBlockEntity() instanceof StoragePortConsolidatorBlockEntity \|\| isStorageBlock(block.getBlockState()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L150) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L168) |
| ` public static StoragePortProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L39) |
| ` public static StoragePortProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L39) |

## WipBlockProvider

` public enum WipBlockProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` WipBlockProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L26) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof WipBlockEntity blockEntity) ` 内调用 ` blockEntity.getRecipeId() `<br>分支 ` (recipeId != null) ` 内调用 ` accessor.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L28) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("wip_block") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L73) |
| ` public static WipBlockProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L25) |
| ` public static WipBlockProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L25) |
