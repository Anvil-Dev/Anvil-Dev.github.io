# dev.dubhe.anvilcraft.api.sound



## ISoundEventListener

` public interface ISoundEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/ISoundEventListener.java#L9)

声音事件监听器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean shouldMute(ResourceLocation sound, Vec3 pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/ISoundEventListener.java#L10) |

## SoundHelper

` public class SoundHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SoundHelper INSTANCE ` | 初值 ` new SoundHelper() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L17) |
| ` public boolean shouldMute(@Nullable Level level, ResourceLocation sound, Vec3 pos) ` | ` (level == null) ` 成立时提前返回 ` false `<br>末尾返回 ` this.eventListeners.computeIfAbsent(level.dimension(), k -> new CopyOnWriteArrayList<>()).stream().anyMatch(it -> it.shouldMute(sound, pos)) `<br>实现调用 ` this.eventListeners.computeIfAbsent(level.dimension(), k -> new CopyOnWriteArrayList<>()).stream() `<br>实现调用 ` this.eventListeners.computeIfAbsent(level.dimension(), k -> new CopyOnWriteArrayList<>()) `<br>实现调用 ` level.dimension() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L21) |
| ` public void register(Level level, ISoundEventListener eventListener) ` | 执行 ` this.eventListeners.computeIfAbsent(level.dimension(), k -> new CopyOnWriteArrayList<>()).add(eventListener) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L28) |
| ` public void unregister(Level level, ISoundEventListener eventListener) ` | 执行 ` this.eventListeners.computeIfAbsent(level.dimension(), k -> new CopyOnWriteArrayList<>()).remove(eventListener) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L33) |
| ` public void clear() ` | 执行 ` this.eventListeners.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L38) |
| ` public Map<ResourceKey<Level>, List<ISoundEventListener>> getEventListeners() ` | 末尾返回 ` this.eventListeners `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L15) |
| ` public SoundHelper() ` | Java 提供的无参构造器。<br>[调用处 SoundHelper](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L17) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sound/SoundHelper.java#L15) |
