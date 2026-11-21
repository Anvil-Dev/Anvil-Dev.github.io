# dev.dubhe.anvilcraft.util（SegmentedActuator 至 TooltipUtil）



## SegmentedActuator

` public class SegmentedActuator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SegmentedActuator(Runnable finallyRunnable, Task... tasks) ` | 实现调用 ` this(tasks) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L44) |
| ` public SegmentedActuator(Task... tasks) ` | 实现调用 ` List.of(tasks) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L49) |
| ` public void execute() ` | 实现调用 ` this.tasks.size() `<br>分支 ` (this.index >= this.tasks.size()) ` 内调用 ` this.reset() `<br>分支 ` (this.index >= this.tasks.size()) ` 内调用 ` this.finallyRunnable.run() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L54) |
| ` public void reset() ` | 实现调用 ` task.reset() `<br>[调用处 SegmentedActuator.execute](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L67) |
| ` public List<Task> getTasks() ` | 末尾返回 ` this.tasks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L7) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L7) |
| ` public Runnable getFinallyRunnable() ` | 末尾返回 ` this.finallyRunnable `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L7) |

## SegmentedActuator.Task

` public static class Task `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Task(int tick, Runnable runnable) ` | [调用处 LargeBlockPlacePreviewEventListener](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L89) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L16) |
| ` public Result execute() ` | ` (this.count >= this.tick) ` 成立时提前返回 ` Result.NEXT `<br>末尾返回 ` Result.CURRENT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L21) |
| ` public void reset() ` | 执行 ` this.count = 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L30) |
| ` public int getTick() ` | 末尾返回 ` this.tick `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L9) |
| ` public Runnable getRunnable() ` | 末尾返回 ` this.runnable `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L9) |
| ` public int getCount() ` | 末尾返回 ` this.count `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L9) |

## SegmentedActuator.Task.Result

` public enum Result `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` CURRENT ` | 声明于枚举 ` SegmentedActuator.Task.Result ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L35) |
| ` NEXT ` | 声明于枚举 ` SegmentedActuator.Task.Result ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L36) |
| ` public static Result[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L34) |
| ` public static Result valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L34) |

## StateUtil

` public class StateUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<BlockState> hammerStates(BlockState initialState, Property<?> property) ` | ` (!(initialState.getBlock() instanceof MountedRedstone)) ` 成立时提前返回 ` findPossibleStatesForProperty(initialState, property) `<br>末尾返回 ` choices `<br>[调用处 ClientBlockEventListener.clientHandle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L18) |
| ` public static <O, T extends StateHolder<O, T>, E extends Comparable<E>> List<T> findPossibleStatesForProperty( T initialState, Property<E> property ) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L32) |
| ` public static <O, T extends StateHolder<O, T>> boolean equalsState(T state1, T state2) ` | 末尾返回 ` true `<br>[调用处 StateUtil.verifyPossibleStatesForProperty](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L46) |
| ` public static <O, T extends StateHolder<O, T>, E extends Comparable<E>> boolean equalsProperty( Property<E> property, T state1, T state2 ) ` | ` (state1.hasProperty(property) != state2.hasProperty(property)) ` 成立时提前返回 ` false `<br>末尾返回 ` value1.compareTo(value2) == 0 `<br>[调用处 StateUtil.equalsState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L56) |
| ` public static boolean verifyPossibleStatesForProperty(BlockState initialState, BlockState targetState) ` | ` (property == null \|\| !initialState.is(targetState.getBlock())) ` 成立时提前返回 ` false `<br>末尾返回 ` false `<br>[调用处 HammerChangeBlockPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L67) |
| ` public StateUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StateUtil.java#L17) |

## StructureBlueprintFiles

` public final class StructureBlueprintFiles `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBlueprintFiles.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Path directory(MinecraftServer server) throws IOException ` | 末尾返回 ` root `<br>[调用处 BlueprintClientFiles.openDirectory](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BlueprintClientFiles.java#L70) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBlueprintFiles.java#L22) |
| ` public static List<String> list(MinecraftServer server) throws IOException ` | 末尾返回 ` files `<br>[调用处 StructureScannerFiles.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBlueprintFiles.java#L28) |
| ` public static byte[] read(MinecraftServer server, String name) throws IOException ` | ` (!isImportName(name)) ` 成立时抛出 ` new IOException("Invalid blueprint file name") `<br>` (!isReadable(file)) ` 成立时抛出 ` new IOException("Invalid blueprint file") `<br>` (bytes.length == 0 \|\| bytes.length > StructureFileTransfer.MAX_BYTES) ` 成立时抛出 ` new IOException("Invalid file size") `<br>末尾返回 ` bytes `<br>[调用处 StructureScannerFiles.importBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L224) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBlueprintFiles.java#L54) |
| ` public static String write(MinecraftServer server, String name, byte[] bytes) throws IOException ` | 末尾返回 ` write(directory(server), name, bytes) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBlueprintFiles.java#L71) |
| ` public static String write(Path directory, String name, byte[] bytes) throws IOException ` | ` (name.lastIndexOf('.') <= 0 \|\| !name.toLowerCase(Locale.ROOT).endsWith(".nbt")) ` 成立时抛出 ` new IOException("Invalid export file name") `<br>` (bytes.length == 0 \|\| bytes.length > StructureFileTransfer.MAX_BYTES) ` 成立时抛出 ` new IOException("Invalid file size") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBlueprintFiles.java#L75) |

## StructureBookUtil

` public class StructureBookUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBookUtil.java#L37)

结构材料清单书生成工具

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Logger LOGGER ` | 初值 ` LoggerFactory.getLogger(StructureBookUtil.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBookUtil.java#L38) |
| ` public static ItemStack createMaterialListBook(Level level, BlockPos placerPos, SmartBlockPlacerBlockEntity blockEntity) ` | 生成材料清单 逻辑: 蓝图需求 - 世界中已放置 = 还需要放置<br>` (!blockEntity.hasBlueprint()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` writtenBook `<br>[调用处 SmartBlockPlacerMenu.setChanged](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/SmartBlockPlacerMenu.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBookUtil.java#L44) |
| ` public StructureBookUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBookUtil.java#L37) |

## StructureDataPaths

` public final class StructureDataPaths `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureDataPaths.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Path worldRoot(MinecraftServer server) ` | 末尾返回 ` server.getWorldPath(LevelResource.ROOT).toAbsolutePath().normalize() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureDataPaths.java#L24) |
| ` public static Path blueprints(MinecraftServer server) ` | 末尾返回 ` target ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureDataPaths.java#L28) |
| ` public static Path blueprints(Path worldRoot) ` | 末尾返回 ` data(worldRoot).resolve(MOD_DIRECTORY).resolve("blueprints") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureDataPaths.java#L35) |
| ` public static Path structures(MinecraftServer server) ` | 末尾返回 ` target ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureDataPaths.java#L39) |
| ` public static Path structures(Path worldRoot) ` | 末尾返回 ` data(worldRoot).resolve(MOD_DIRECTORY).resolve("structures") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureDataPaths.java#L46) |
| ` public static Path handbookExports(MinecraftServer server) ` | 末尾返回 ` handbookExports(worldRoot(server)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureDataPaths.java#L50) |
| ` public static Path handbookExports(Path worldRoot) ` | 末尾返回 ` data(worldRoot).resolve(HANDBOOK_DIRECTORY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureDataPaths.java#L54) |

## StructureFileTransfer

` public final class StructureFileTransfer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureFileTransfer.java#L8)

顺序分块传输，每个菜单或客户端请求只保留一份有大小及超时限制的缓冲。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int CHUNK_BYTES ` | 初值 ` 24 * 1024 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureFileTransfer.java#L9) |
| ` public static final int MAX_BYTES ` | 初值 ` 2 * 1024 * 1024 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureFileTransfer.java#L10) |
| ` public StructureFileTransfer(UUID id, String name, int total) throws IOException ` | ` (total <= 0 \|\| total > MAX_BYTES) ` 成立时抛出 ` new IOException("Invalid file size") `<br>[调用处 BlueprintClientFiles.receiveFiles](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BlueprintClientFiles.java#L160) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureFileTransfer.java#L17) |
| ` public boolean append(UUID transferId, String fileName, int totalBytes, int offset, byte[] chunk) throws IOException ` | ` (!this.id.equals(transferId) \|\| !this.name.equals(fileName) \|\| this.total != totalBytes \|\| System.nanoTime() - this.started > 60_000_000_000L \|\| offset != this.bytes.size() \|\| chunk.length != Math.min(CHUNK_BYTES, this.total - offset)) ` 成立时抛出 ` new IOException("Invalid file chunk") `<br>末尾返回 ` this.bytes.size() == this.total ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureFileTransfer.java#L24) |
| ` public byte[] finish() throws IOException ` | ` (this.bytes.size() != this.total) ` 成立时抛出 ` new IOException("Incomplete file") `<br>末尾返回 ` this.bytes.toByteArray() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureFileTransfer.java#L34) |
| ` public static boolean isSafeName(String name) ` | ` (name.isBlank() \|\| name.length() > 128 \|\| name.equals(".") \|\| name.equals("..") \|\| name.endsWith(".") \|\| name.endsWith(" ")) ` 成立时提前返回 ` false `<br>末尾返回 ` name.chars().noneMatch(character -> character < 32 \|\| "<>:\"/\\\|?*".indexOf(character) >= 0) `<br>[调用处 BlueprintClientFiles.selectUpload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BlueprintClientFiles.java#L123) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureFileTransfer.java#L39) |

## StructureLoadUtil

` public class StructureLoadUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L55)

结构文件加载工具 从结构磁盘读取保存的结构数据

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final long MAX_STRUCTURE_NBT_BYTES ` | 初值 ` 128L * 1024 * 1024 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L61) |
| ` public static Optional<CompoundTag> getStructureNbtForPreview(Level level, StructureDiskData data) ` | 只读访问完整预览 NBT；返回的标签不可修改，缓存未命中时向服务端请求。<br>` (isInvalidStructureFile(file) \|\| MISSING_STRUCTURE_FILES.containsKey(file)) ` 成立时提前返回 ` Optional.empty() `<br>` (cached != null) ` 成立时提前返回 ` Optional.of(cached) `<br>末尾返回 ` Optional.empty() `<br>[调用处 BuildingRodClient.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L172) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L67) |
| ` public static void cacheStructureNbt(String file, @Nullable CompoundTag tag) ` | null 表示服务端确认文件不存在或读取失败。<br>实现调用 ` isInvalidStructureFile(file) `<br>实现调用 ` LAST_REQUEST_TIME.remove(file) `<br>分支 ` (tag == null) ` 内调用 ` STRUCTURE_NBT_CACHE.remove(file) `<br>[调用处 StructureDiskResponsePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskResponsePacket.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L91) |
| ` public static void removeCachedStructureNbt(String file) ` | 实现调用 ` STRUCTURE_NBT_CACHE.remove(file) `<br>实现调用 ` MISSING_STRUCTURE_FILES.remove(file) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L113) |
| ` public static void clearClientStructureCache() ` | 实现调用 ` STRUCTURE_NBT_CACHE.clear() `<br>实现调用 ` MISSING_STRUCTURE_FILES.clear() `<br>实现调用 ` LAST_REQUEST_TIME.clear() `<br>[调用处 DiskDisplaySupport.logout](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L172) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L118) |
| ` @Nullable public static CompoundTag readStructureFileOnServer(ServerLevel level, String file) ` | ` (isInvalidStructureFile(file)) ` 成立时提前返回 ` null `<br>[调用处 BuildingRodService.blueprints](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L237) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L124) |
| ` @Nullable public static StructureData loadStructureFromDiskForPreview(Level level, ItemStack diskStack) ` | 从结构磁盘读取结构数据（不过滤多方块方块，用于预览）<br>参数 ` level ` 世界实例<br>参数 ` diskStack ` 结构磁盘物品<br>返回 结构数据，如果读取失败返回 null<br>` (diskData == null) ` 成立时提前返回 ` null `<br>` (cached.isEmpty()) ` 成立时提前返回 ` null `<br>[调用处 SmartBlockPlacerScreen.getOrCreateCachedPreviewLevelLike](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L1330) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L145) |
| ` @Nullable public static StructureData loadStructureFromDisk(Level level, ItemStack diskStack) ` | 从结构磁盘读取结构数据<br>参数 ` level ` 世界实例<br>参数 ` diskStack ` 结构磁盘物品<br>返回 结构数据，如果读取失败返回 null<br>实现调用 ` diskStack.get(ModComponents.STRUCTURE_DISK_DATA) `<br>分支 ` (structureDiskData == null) ` 内调用 ` StructureLoadUtil.LOGGER.warn("Disk has no structure data") `<br>实现调用 ` structureDiskData.file().isEmpty() `<br>[调用处 SmartBlockPlacerBlockEntity.reloadBlueprintFromItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L1043) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L170) |
| ` @Nullable public static CompoundTag loadPreviewData(Level level, String fileName) ` | 加载包含方块实体和坐标元数据的结构预览，用于网络同步到客户端<br>参数 ` level ` 世界实例（服务端）<br>参数 ` fileName ` 结构文件名（已校验）<br>返回 保留结构元数据的预览标签，加载失败返回 null<br>实现调用 ` StructureLoadUtil.isInvalidStructureFile(fileName) `<br>分支 ` (StructureLoadUtil.isInvalidStructureFile(fileName)) ` 内调用 ` StructureLoadUtil.LOGGER.warn("Invalid structure file name for preview: {}", fileName) `<br>实现调用 ` StructureLoadUtil.getStructureDirectory(level) `<br>[调用处 StructurePreviewRequestPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructurePreviewRequestPacket.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L316) |
| ` public static boolean isInvalidStructureFile(String fileName) ` | Validate structure file name to prevent path traversal attacks File names must match the pattern: name\_uuid.nbt<br>` (fileName.trim().isEmpty()) ` 成立时提前返回 ` true `<br>` (fileName.length() > StructureLoadUtil.MAX_STRUCTURE_FILE_LENGTH) ` 成立时提前返回 ` true `<br>` (!StructureLoadUtil.VALID_STRUCTURE_FILE.matcher(fileName).matches()) ` 成立时提前返回 ` true `<br>末尾返回 ` fileName.contains("/") \|\| fileName.contains("\\") \|\| fileName.contains("..") `<br>[调用处 StructureDiskRequestPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureDiskRequestPacket.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L376) |
| ` public static boolean isMultiblockBlock(BlockState state) ` | 末尾返回 ` StructureLoadUtil.isMultiblockBlock(state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L458) |
| ` public static boolean isMultiblockBlock(Block block) ` | 检查一个方块是否为多方块方块<br>参数 ` block ` 方块<br>返回 如果是多方块方块返回true<br>` ( switch (block) { case MultiPartBlockEntity<?, ?> ignored1 -> true; case AbstractMultiPartBlock<?> ignored2 -> true; case IHasMultiBlock ignored3 -> true; default -> false; } ) ` 成立时提前返回 ` true `<br>` (block instanceof BedBlock) ` 成立时提前返回 ` true `<br>末尾返回 ` block instanceof DoorBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L468) |
| ` public static boolean isMultiblockSecondaryPart(BlockState state) ` | 检查一个方块状态是否为多方块方块的次要部件（非主体/锚点部件） 次要部件在智能放置器加载结构时会被过滤掉，因为主体部件通过 BlockItem.place() 可以自动创建所有次要部件<br>参数 ` state ` 方块状态<br>返回 如果是次要部件返回true<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L499) |
| ` public StructureLoadUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L55) |

## StructureLoadUtil.BlockPosition

` public record BlockPosition(int x, int y, int z, BlockState state) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455)

方块位置数据

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockPosition(int x, int y, int z, BlockState state) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455) |
| ` public int z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L455) |

## StructureLoadUtil.StructureData

` public static class StructureData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L415)

结构数据

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final StructureDiskData diskData ` | 字段类型为 ` StructureDiskData ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L416) |
| ` @Nullable public final StructureSnapshot snapshot ` | 字段类型为 ` StructureSnapshot ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L417) |
| ` public int width ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L418) |
| ` public int depth ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L419) |
| ` public int height ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L420) |
| ` public final List<BlockPosition> blocks ` | 初值 ` new ArrayList<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L421) |
| ` public StructureData(StructureDiskData diskData) ` | 执行 ` this(diskData, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L423) |
| ` public static StructureData fromSnapshot(StructureDiskData disk, StructureSnapshot snapshot) ` | 保留已归一化快照的方块实体数据，使预览能够恢复模型所需的运行进度。<br>末尾返回 ` data `<br>[调用处 StructureDiskPreviewSupport.parsePreviewNbt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/StructureDiskPreviewSupport.java#L201) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L436) |
| ` public boolean isEmpty() ` | 末尾返回 ` this.blocks.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureLoadUtil.java#L447) |

## StructureSaveUtil

` public class StructureSaveUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureSaveUtil.java#L42)

结构文件保存工具 将扫描结果保存为原版结构方块格式（.nbt）

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void saveStructureToDisk(Level level, StructureScannerBlockEntity blockEntity, String structureName) ` | 保存结构数据到磁盘物品<br>参数 ` level ` 世界实例<br>参数 ` blockEntity ` 扫描器方块实体<br>参数 ` structureName ` 结构名称<br>执行 ` saveStructureToDisk(level, blockEntity, structureName, true, ItemStack.EMPTY) `<br>[调用处 StructureScannerBlockEntity.performAutoSave](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/StructureScannerBlockEntity.java#L392) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureSaveUtil.java#L53) |
| ` public static void saveStructureToDisk( Level level, StructureScannerBlockEntity blockEntity, String structureName, boolean autoRotate, ItemStack marker ) ` | 实现调用 ` blockEntity.isScanComplete() `<br>实现调用 ` blockEntity.getOutputInventory().isEmpty() `<br>实现调用 ` blockEntity.getOutputInventory() `<br>[调用处 StructureScannerSavePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureSaveUtil.java#L57) |
| ` public static CompoundTag buildStructureNBT( StructureScannerBlockEntity blockEntity, List<StructureScannerBlockEntity.CachedBlockData> scannedBlocks ) ` | 构建结构NBT数据（手动构建原版格式）<br>末尾返回 ` StructureSnapshotCodec.write(buildSnapshot(blockEntity, scannedBlocks).snapshot()) `<br>[调用处 StructureScannerFiles.exportStructure](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L314) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureSaveUtil.java#L135) |
| ` public static BlueprintNormalizer.Result buildSnapshot( StructureScannerBlockEntity blockEntity, List<StructureScannerBlockEntity.CachedBlockData> scannedBlocks ) ` | ` (blockEntity.getLevel() instanceof ServerLevel serverLevel) ` 成立时提前返回 ` BlueprintCapture.capture(serverLevel, blockEntity.getScanBounds()) `<br>末尾返回 ` buildCachedSnapshot(blockEntity, scannedBlocks) `<br>[调用处 StructureScannerScreen.buildPreviewLevelLike](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L1418) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureSaveUtil.java#L142) |
| ` public static BlueprintNormalizer.Result buildCachedSnapshot( StructureScannerBlockEntity blockEntity, List<StructureScannerBlockEntity.CachedBlockData> scannedBlocks ) ` | 蓝图编辑必须使用扫描缓存，避免原世界的后续变化进入编辑结果。<br>` (!(blockEntity.getLevel() instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` result `<br>[调用处 StructureScannerFiles.editBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L128) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureSaveUtil.java#L152) |
| ` public StructureSaveUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureSaveUtil.java#L42) |

## StructureScannerFiles

` public final class StructureScannerFiles `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L52)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void handle(ServerPlayer player, StructureScannerMenu menu, StructureScannerFilePacket packet) ` | 实现调用 ` packet.action() `<br>实现调用 ` StructureBlueprintFiles.list(player.level().getServer()).forEach(name -> files.add(StringTag.valueOf(name))) `<br>实现调用 ` StructureBlueprintFiles.list(player.level().getServer()) `<br>[调用处 StructureScannerFilePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerFilePacket.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L53) |
| ` public static void edit(ServerPlayer player, StructureScannerMenu menu, StructureScannerEditPacket packet) ` | 实现调用 ` sendFile(player, packet.id(), editBlueprint(menu, packet)) `<br>实现调用 ` packet.id() `<br>实现调用 ` editBlueprint(menu, packet) `<br>[调用处 StructureScannerEditPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerEditPacket.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L110) |
| ` public static byte[] editBlueprint(StructureScannerMenu menu, StructureScannerEditPacket packet) throws IOException ` | 修改菜单中的蓝图并返回客户端需要的完整快照，校验失败时保留原蓝图与撤回记录。<br>` (scanner.isScanning() \|\| imported == null && !scanner.isScanComplete()) ` 成立时抛出 ` new IllegalArgumentException("No completed blueprint to edit") `<br>末尾返回 ` bytes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L122) |
| ` public static byte[] importBlueprint(ServerPlayer player, StructureScannerMenu menu, String name) throws IOException, ConstructionBlueprintException ` | 末尾返回 ` stageImport(player, menu, readTag(bytes), name) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L222) |
| ` public static StructureSnapshot parseImport(ServerPlayer player, CompoundTag tag, String fileName) throws IOException, ConstructionBlueprintException ` | 末尾返回 ` parseImportResult(player, tag, fileName).snapshot() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L236) |
| ` public static byte[] stageImport(ServerPlayer player, StructureScannerMenu menu, CompoundTag tag, String fileName) throws IOException, ConstructionBlueprintException ` | 末尾返回 ` preview ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L255) |
| ` public static boolean saveImportedStructure( ServerPlayer player, StructureScannerMenu menu, String name, boolean autoRotate, ItemStack marker ) throws IOException ` | ` (imported == null \|\| !input.is(ModItems.STRUCTURE_DISK) \|\| menu.getSlot(1).hasItem()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 StructureScannerSavePacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/StructureScannerSavePacket.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L269) |
| ` public static CompoundTag exportStructure(ServerPlayer player, StructureScannerMenu menu) throws IOException, ConstructionBlueprintException ` | ` (scanner == null) ` 成立时抛出 ` new IOException("Scanner is unavailable") `<br>末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L303) |

## StructureScannerRecipes

` public final class StructureScannerRecipes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerRecipes.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String fileName(Identifier recipe) ` | 末尾返回 ` name.substring(0, Math.min(name.length(), 120)) + ".nbt" `<br>[调用处 BlueprintClientFiles.requestRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BlueprintClientFiles.java#L206) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerRecipes.java#L26) |
| ` public static StructureSnapshot snapshot(Recipe<?> recipe) ` | ` (definition.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe structure is empty") `<br>` ((long) maxX - minX >= StructureSnapshotCodec.MAX_AXIS \|\| (long) maxY - minY >= StructureSnapshotCodec.MAX_AXIS \|\| (long) maxZ - minZ >= StructureSnapshotCodec.MAX_AXIS) ` 成立时抛出 ` new IllegalArgumentException("Recipe structure exceeds 16x16x16") `<br>末尾返回 ` BlueprintNormalizer.normalize(new StructureSnapshot(new Vec3i(maxX - minX + 1, maxY - minY + 1, maxZ - minZ + 1), palette, blocks, List.of())).snapshot() `<br>[调用处 StructureScannerFiles.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerFiles.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureScannerRecipes.java#L31) |

## TagUtil

` public class TagUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TagUtil.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T> Iterable<Holder<T>> getValuesFromTag(ResourceKey<Registry<T>> registryKey, TagKey<T> tag, RegistryAccess registry) ` | 末尾返回 ` registry.lookupOrThrow(registryKey) .getTagOrEmpty(tag) `<br>[调用处 TagUtil.getItemStacksFromTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TagUtil.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TagUtil.java#L19) |
| ` public static Iterable<ItemStack> getItemStacksFromTag(TagKey<Item> tag, RegistryAccess registry) ` | 末尾返回 ` Iterables.transform( iterable, holder -> holder.value().getDefaultInstance() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TagUtil.java#L24) |
| ` public static <T> Optional<HolderSet.Named<T>> toHolderSet(HolderLookup.@Nullable RegistryLookup<T> lookup, TagKey<T> tag) ` | ` (lookup == null) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` lookup.get(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TagUtil.java#L32) |
| ` public TagUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TagUtil.java#L18) |

## TankUtil

` public class TankUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TankUtil.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isMengerStructure(Level level, BlockPos centerPos, int size) ` | 递归检测当前位置的结构是否符合门格海绵结构 门格海绵结构规则：将结构分为3x3x3的块后， 角块和边块应该是门格海绵方块，面块和中心块应该是空气<br>参数 ` level ` 世界对象<br>参数 ` centerPos ` 检测起始位置<br>参数 ` size ` 结构大小（必须是3的倍数）<br>返回 是否符合门格海绵结构<br>` (size <= 0) ` 成立时提前返回 ` false `<br>` (size == 1) ` 成立时提前返回 ` level.getBlockState(centerPos).is(ModBlocks.MENGER_SPONGE.get()) `<br>` (size % 3 != 0) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 FluidTankBlock.onFormed](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/FluidTankBlock.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TankUtil.java#L18) |
| ` public static boolean isNoMengerSponge(Level level, BlockPos centerPos, int size) ` | ` (size <= 0) ` 成立时提前返回 ` false `<br>` (size % 2 == 0) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 TankUtil.isMengerStructure](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TankUtil.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TankUtil.java#L53) |
| ` public static boolean isMengerPos(int x, int y, int z) ` | 判断在3x3x3结构中的位置是否为角块或边块<br>末尾返回 ` sideCount >= 2 `<br>[调用处 TankUtil.isMengerStructure](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TankUtil.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TankUtil.java#L76) |
| ` public TankUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TankUtil.java#L9) |

## ThreadFactoryImpl

` public class ThreadFactoryImpl implements ThreadFactory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ThreadFactoryImpl.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("removal") public ThreadFactoryImpl() ` | 实现调用 ` System.getSecurityManager() `<br>实现调用 ` s.getThreadGroup() `<br>实现调用 ` Thread.currentThread().getThreadGroup() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ThreadFactoryImpl.java#L12) |
| ` @Override public Thread newThread(Runnable r) ` | 末尾返回 ` t ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ThreadFactoryImpl.java#L21) |

## TooltipUtil

` public final class TooltipUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TooltipUtil.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static List<Component> tooltip(Block block) ` | 末尾返回 ` tooltip `<br>[调用处 MDMineralFountainRecipeComponent.renderOutput](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L179) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TooltipUtil.java#L18) |
| ` public static List<Component> recipeIDTooltip(Block block, Identifier id) ` | 末尾返回 ` tooltip `<br>[调用处 AnvilCollisionCraftCategory.getTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/AnvilCollisionCraftCategory.java#L381) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TooltipUtil.java#L30) |
| ` public TooltipUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/TooltipUtil.java#L17) |
