# dev.dubhe.anvilcraft.util.recover



## RecoverEntry

` public record RecoverEntry<T>(UUID id, T value) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RecoverEntry(UUID id, T value) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L6) |
| ` public UUID id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L6) |
| ` public T value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L6) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L6) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L6) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverEntry.java#L6) |

## RecoverStation

` public class RecoverStation<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RecoverStation(int maxSize) ` | 执行 ` this.entries = EvictingQueue.create(maxSize) `<br>[调用处 RecoverStation.create](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L31) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L22) |
| ` public static <T> RecoverStation<T> create(int maxSize) ` | 末尾返回 ` new RecoverStation<>(maxSize) `<br>[调用处 Storages.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/Storages.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L30) |
| ` public Set<UUID> recoverableIds() ` | 末尾返回 ` ids.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L34) |
| ` public Optional<RecoverEntry<T>> recover(UUID id) ` | 末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L42) |
| ` public void removed(UUID id, T storage) ` | 执行 ` this.entries.offer(new RecoverEntry<>(id, storage)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L52) |
| ` public void sync(boolean isClient, Set<UUID> recoverableIds) ` | 实现调用 ` this.entries.clear() `<br>实现调用 ` this.entries.add(new RecoverEntry<>(recoverableId, null)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L56) |
| ` public void clear() ` | 执行 ` this.entries.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L64) |
| ` public CompoundTag serializeNBT(Function<@NullableType T, Tag> encoder) ` | 末尾返回 ` tag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L68) |
| ` public void deserializeNBT(BiFunction<UUID, CompoundTag, @NullableType T> decoder, CompoundTag tag) ` | 实现调用 ` this.entries.clear() `<br>实现调用 ` tag.getList("entries", Tag.TAG_COMPOUND) `<br>实现调用 ` list.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L81) |
| ` public EvictingQueue<RecoverEntry<T>> getEntries() ` | 末尾返回 ` this.entries `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/recover/RecoverStation.java#L18) |
