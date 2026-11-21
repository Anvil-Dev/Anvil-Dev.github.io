# dev.dubhe.anvilcraft.integration.xaero



## OverseerMinimapHighlighter

` public class OverseerMinimapHighlighter extends ChunkHighlighter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerMinimapHighlighter.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverseerMinimapHighlighter() ` | 执行 ` super(true) `<br>[调用处 XaeroMinimapHighlighterRegistryMixin.anvilcraft$registerOverseers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroMinimapHighlighterRegistryMixin.java#L21) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerMinimapHighlighter.java#L16) |
| ` public static void refresh() ` | 实现调用 ` BuiltInHudModules.MINIMAP.getCurrentSession() `<br>实现调用 ` session.getProcessor().getMinimapWriter().getDimensionHighlightHandler() `<br>实现调用 ` session.getProcessor().getMinimapWriter() `<br>[调用处 OverseerMapData.refreshVisibility](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/overseer/OverseerMapData.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerMinimapHighlighter.java#L20) |
| ` @Override public boolean regionHasHighlights(ResourceKey<Level> dimension, int regionX, int regionZ) ` | 末尾返回 ` !OverseerMapData.region(dimension, regionX, regionZ).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerMinimapHighlighter.java#L27) |
| ` @Override public boolean chunkIsHighlit(ResourceKey<Level> dimension, int chunkX, int chunkZ) ` | 末尾返回 ` OverseerMapData.flags(dimension, chunkX, chunkZ) >= 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerMinimapHighlighter.java#L32) |
| ` @Override public void addChunkHighlightTooltips(InfoDisplayCompiler compiler, ResourceKey<Level> dimension, int x, int z, int width) ` | 执行 ` OverseerMapStyle.tooltipLines(dimension, x, z, width).forEach(compiler::addLine) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerMinimapHighlighter.java#L42) |

## OverseerWorldMapHighlighter

` public class OverseerWorldMapHighlighter extends ChunkHighlighter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverseerWorldMapHighlighter() ` | 执行 ` super(true) `<br>[调用处 XaeroWorldMapHighlighterRegistryMixin.anvilcraft$registerOverseers](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroWorldMapHighlighterRegistryMixin.java#L21) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L16) |
| ` public static void refresh(ResourceKey<Level> dimension) ` | 实现调用 ` WorldMapSession.getCurrentSession() `<br>实现调用 ` session.getMapProcessor().getMapWorld().getDimension(dimension) `<br>实现调用 ` session.getMapProcessor().getMapWorld() `<br>[调用处 OverseerMapData.update](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/overseer/OverseerMapData.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L20) |
| ` @Override public int calculateRegionHash(ResourceKey<Level> dimension, int regionX, int regionZ) ` | 末尾返回 ` 31 * OverseerMapData.revision(dimension) + (OverseerMapData.isVisible() ? 1 : 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L27) |
| ` @Override public boolean regionHasHighlights(ResourceKey<Level> dimension, int regionX, int regionZ) ` | 末尾返回 ` !OverseerMapData.region(dimension, regionX, regionZ).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L32) |
| ` @Override public boolean chunkIsHighlit(ResourceKey<Level> dimension, int chunkX, int chunkZ) ` | 末尾返回 ` OverseerMapData.flags(dimension, chunkX, chunkZ) >= 0 `<br>[调用处 OverseerWorldMapHighlighter.addMinimapBlockHighlightTooltips](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L37) |
| ` @Override public Component getChunkHighlightSubtleTooltip(ResourceKey<Level> dimension, int chunkX, int chunkZ) ` | 末尾返回 ` OverseerMapStyle.tooltip(dimension, chunkX, chunkZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L47) |
| ` @Override public @Nullable Component getChunkHighlightBluntTooltip(ResourceKey<Level> dimension, int chunkX, int chunkZ) ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L52) |
| ` @Override public void addMinimapBlockHighlightTooltips(List<Component> tooltips, ResourceKey<Level> dimension, int x, int z, int width) ` | 实现调用 ` this.chunkIsHighlit(dimension, x >> 4, z >> 4) `<br>分支 ` (this.chunkIsHighlit(dimension, x >> 4, z >> 4)) ` 内调用 ` tooltips.addAll(OverseerMapStyle.tooltipLines(dimension, x >> 4, z >> 4, width)) `<br>分支 ` (this.chunkIsHighlit(dimension, x >> 4, z >> 4)) ` 内调用 ` OverseerMapStyle.tooltipLines(dimension, x >> 4, z >> 4, width) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/xaero/OverseerWorldMapHighlighter.java#L57) |
