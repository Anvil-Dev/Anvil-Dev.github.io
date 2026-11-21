# dev.dubhe.anvilcraft.integration.jade.provider（RedstoneWireProvider 至 WipBlockProvider）



## RedstoneWireProvider

` public enum RedstoneWireProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RedstoneWireProvider.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` RedstoneWireProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RedstoneWireProvider.java#L15) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState().getBlock() `<br>实现调用 ` accessor.getBlockState() `<br>实现调用 ` RedstoneWireNetworkManager.getPower(accessor.getLevel(), accessor.getPosition()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RedstoneWireProvider.java#L17) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("redstone_wire") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RedstoneWireProvider.java#L24) |
| ` public static RedstoneWireProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RedstoneWireProvider.java#L14) |
| ` public static RedstoneWireProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RedstoneWireProvider.java#L14) |

## RubyPrismProvider

` public enum RubyPrismProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` RubyPrismProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L15) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` blockAccessor.getServerData() `<br>实现调用 ` serverData.contains("laser_level") `<br>分支 ` (serverData.contains("laser_level")) ` 内调用 ` serverData.getInt("laser_level") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L17) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockEntity() `<br>分支 ` (blockAccessor.getBlockEntity() instanceof RubyPrismBlockEntity blockEntity) ` 内调用 ` compoundTag.putInt("laser_level", blockEntity.getLaserLevel()) `<br>分支 ` (blockAccessor.getBlockEntity() instanceof RubyPrismBlockEntity blockEntity) ` 内调用 ` blockEntity.getLaserLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L26) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("ruby_prism") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L33) |
| ` public static RubyPrismProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L14) |
| ` public static RubyPrismProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L14) |

## SmartBlockPlacerProvider

` public enum SmartBlockPlacerProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` SmartBlockPlacerProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L16) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockEntity() `<br>实现调用 ` be.hasBlueprint() `<br>实现调用 ` Component.translatable(modeKey).withStyle(modeColor) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L18) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L66) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("smart_block_placer_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L71) |
| ` public static SmartBlockPlacerProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L15) |
| ` public static SmartBlockPlacerProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L15) |

## SpaceOvercompressorProvider

` public enum SpaceOvercompressorProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` SpaceOvercompressorProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L16) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` blockAccessor.getServerData() `<br>实现调用 ` serverData.contains("storedMass") `<br>分支 ` (serverData.contains("storedMass")) ` 内调用 ` serverData.getLong("storedMass") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L18) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockEntity() `<br>实现调用 ` compoundTag.putLong("storedMass", blockEntity.getStoredMass()) `<br>实现调用 ` blockEntity.getStoredMass() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L28) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("space_overcompressor") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L35) |
| ` public static SpaceOvercompressorProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L15) |
| ` public static SpaceOvercompressorProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L15) |

## StoragePortProvider

` public enum StoragePortProvider implements IServerExtensionProvider<ItemStack> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L40)

仓储相关方块的 Jade 物品预览。 端口展示缓存与标记物品计数；板条箱、大型板条箱、潜影集装箱、超维存储站 以及直连仓储的整合器以有限条目预览库存，避免海量条目一次性同步。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` StoragePortProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L41) |
| ` public static final ResourceLocation UID ` | 初值 ` AnvilCraft.of("storage_port") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L43) |
| ` public static final String COUNTS_KEY ` | 初值 ` "Counts" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L44) |
| ` @Override public @Nullable List<ViewGroup<ItemStack>> getGroups(Accessor<?> accessor) ` | ` (!(accessor instanceof BlockAccessor block)) ` 成立时提前返回 ` null `<br>` (block.getBlockEntity() instanceof StoragePortBlockEntity port) ` 成立时提前返回 ` this.portGroups(port) `<br>` (block.getBlockEntity() instanceof StoragePortConsolidatorBlockEntity consolidator) ` 成立时提前返回 ` this.consolidatorGroups(consolidator) `<br>` (isStorageBlock(block.getBlockState())) ` 成立时提前返回 ` this.storageGroups(block) `<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L46) |
| ` @Override public boolean shouldRequestData(Accessor<?> accessor) ` | ` (!(accessor instanceof BlockAccessor block)) ` 成立时提前返回 ` false `<br>末尾返回 ` block.getBlockEntity() instanceof StoragePortBlockEntity \|\| block.getBlockEntity() instanceof StoragePortConsolidatorBlockEntity \|\| isStorageBlock(block.getBlockState()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L167) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L185) |
| ` public static StoragePortProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L40) |
| ` public static StoragePortProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/StoragePortProvider.java#L40) |

## WipBlockProvider

` public enum WipBlockProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` WipBlockProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L28) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` blockAccessor.getServerData() `<br>实现调用 ` serverData.contains("stepCount") `<br>分支 ` (serverData.contains("stepCount")) ` 内调用 ` Component.translatable( "tooltip.anvilcraft.wip_block.jade.step_count", serverData.getInt("stepCount") ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L30) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockEntity() `<br>分支 ` (blockAccessor.getBlockEntity() instanceof WipBlockEntity blockEntity) ` 内调用 ` blockEntity.getRecipeId() `<br>分支 ` (recipeId != null) ` 内调用 ` blockAccessor.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L55) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("wip_block") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L99) |
| ` public static WipBlockProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L27) |
| ` public static WipBlockProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/WipBlockProvider.java#L27) |
