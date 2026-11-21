# dev.dubhe.anvilcraft.util.recover



## RecoverEntry

` public record RecoverEntry<T>(UUID id, T value) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T> MapCodec<RecoverEntry<T>> codec(MapCodec<T> codec) ` | 末尾返回 ` RecordCodecBuilder.mapCodec(ins -> ins.group( UUIDUtil.CODEC .fieldOf("id") .forGetter(RecoverEntry::id), codec .forGetter(RecoverEntry::value) ).apply(ins, RecoverEntry::new)) `<br>[调用处 RecoverStation.codec](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L10) |
| ` public RecoverEntry(UUID id, T value) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L9) |
| ` public UUID id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L9) |
| ` public T value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L9) |

## RecoverStation

` public class RecoverStation<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RecoverStation(int maxSize) ` | 执行 ` this.entries = EvictingQueue.create(maxSize) `<br>[调用处 RecoverStation.create](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L27) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L18) |
| ` public static <T> RecoverStation<T> create(int maxSize) ` | 末尾返回 ` new RecoverStation<>(maxSize) `<br>[调用处 Storages.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L26) |
| ` public Set<UUID> recoverableIds() ` | 末尾返回 ` ids.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L30) |
| ` public Optional<RecoverEntry<T>> recover(UUID id) ` | 末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L38) |
| ` public void removed(UUID id, T storage) ` | 执行 ` this.entries.offer(new RecoverEntry<>(id, storage)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L48) |
| ` public void sync(boolean isClient, Set<UUID> recoverableIds) ` | 实现调用 ` this.entries.clear() `<br>实现调用 ` this.entries.add(new RecoverEntry<>(recoverableId, null)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L52) |
| ` public void clear() ` | 执行 ` this.entries.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L60) |
| ` public static <T> MapCodec<RecoverStation<T>> codec(MapCodec<T> codec) ` | 末尾返回 ` CodecUtil.evictingQueueMapCodec(RecoverEntry.codec(codec).codec()).xmap(RecoverStation::new, RecoverStation::getEntries) `<br>[调用处 Storages](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L64) |
| ` public EvictingQueue<RecoverEntry<T>> getEntries() ` | 末尾返回 ` this.entries `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L14) |
