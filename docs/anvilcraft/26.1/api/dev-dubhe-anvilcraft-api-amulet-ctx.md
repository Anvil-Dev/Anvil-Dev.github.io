# dev.dubhe.anvilcraft.api.amulet.ctx



## AmuletEffectContext

` public class AmuletEffectContext `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public <T> void set(AmuletEffectContextKey<T> key, T value) ` | 写入上下文的值<br>参数 ` key ` 上下文键<br>参数 ` value ` 上下文值<br>参数 ` <T> ` 上下文值的类型<br>执行 ` this.ctx.put(key, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java#L18) |
| ` public <T> @Nullable T remove(AmuletEffectContextKey<T> key) ` | 移除上下文的值<br>参数 ` key ` 上下文键<br>参数 ` <T> ` 上下文值的类型<br>返回 被移除的上下文值，不存在时为 null<br>末尾返回 ` key.clazz().cast(this.ctx.remove(key)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java#L27) |
| ` public <T> Optional<T> get(AmuletEffectContextKey<T> key) ` | 末尾返回 ` Optional.ofNullable(this.ctx.get(key)).map(key.clazz()::cast) `<br>[调用处 AmuletEffectContext.getOrDefault](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java#L31) |
| ` public <T> T getOrDefault(AmuletEffectContextKey<T> key, T defaultValue) ` | 末尾返回 ` this.get(key).orElse(defaultValue) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java#L35) |
| ` public <T> T getOrThrow(AmuletEffectContextKey<T> key) ` | 末尾返回 ` key.clazz().cast(Objects.requireNonNull(this.ctx.get(key), () -> "Cannot find context for key " + key.id())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java#L39) |
| ` public AmuletEffectContext() ` | Java 提供的无参构造器。<br>[调用处 AmuletAbilitiesEventListener.onInventoryTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/AmuletAbilitiesEventListener.java#L58) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContext.java#L10) |

## AmuletEffectContextKey

` public record AmuletEffectContextKey<T>(Identifier id, Class<T> clazz) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L10)

护符效果上下文的键，由 id 与值的类型共同确定<br>参数 ` id ` 键的 id<br>参数 ` clazz ` 值的类型<br>参数 ` <T> ` 值的类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T> AmuletEffectContextKey<T> of(Identifier id, Class<T> clazz) ` | 创建一个上下文键<br>参数 ` id ` 键的 id<br>参数 ` clazz ` 值的类型<br>参数 ` <T> ` 值的类型<br>返回 上下文键<br>末尾返回 ` new AmuletEffectContextKey<>(id, clazz) `<br>[调用处 ModAmuletEffectContextKeys](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletEffectContextKeys.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L17) |
| ` public static AmuletEffectContextKey<Boolean> ofBool(Identifier id) ` | 创建一个值为 Boolean 的上下文键<br>参数 ` id ` 键的 id<br>返回 值为 Boolean 的上下文键<br>末尾返回 ` AmuletEffectContextKey.of(id, Boolean.class) `<br>[调用处 ModAmuletEffectContextKeys](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletEffectContextKeys.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L25) |
| ` public static AmuletEffectContextKey<Byte> ofByte(Identifier id) ` | 创建一个值为 Byte 的上下文键<br>参数 ` id ` 键的 id<br>返回 值为 Byte 的上下文键<br>末尾返回 ` AmuletEffectContextKey.of(id, Byte.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L33) |
| ` public static AmuletEffectContextKey<Short> ofShort(Identifier id) ` | 创建一个值为 Short 的上下文键<br>参数 ` id ` 键的 id<br>返回 值为 Short 的上下文键<br>末尾返回 ` AmuletEffectContextKey.of(id, Short.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L41) |
| ` public static AmuletEffectContextKey<Integer> ofInt(Identifier id) ` | 创建一个值为 Integer 的上下文键<br>参数 ` id ` 键的 id<br>返回 值为 Integer 的上下文键<br>末尾返回 ` AmuletEffectContextKey.of(id, Integer.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L49) |
| ` public static AmuletEffectContextKey<Long> ofLong(Identifier id) ` | 创建一个值为 Long 的上下文键<br>参数 ` id ` 键的 id<br>返回 值为 Long 的上下文键<br>末尾返回 ` AmuletEffectContextKey.of(id, Long.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L57) |
| ` public static AmuletEffectContextKey<Float> ofFloat(Identifier id) ` | 创建一个值为 Float 的上下文键<br>参数 ` id ` 键的 id<br>返回 值为 Float 的上下文键<br>末尾返回 ` AmuletEffectContextKey.of(id, Float.class) `<br>[调用处 ModAmuletEffectContextKeys](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletEffectContextKeys.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L65) |
| ` public static AmuletEffectContextKey<Double> ofDouble(Identifier id) ` | 创建一个值为 Double 的上下文键<br>参数 ` id ` 键的 id<br>返回 值为 Double 的上下文键<br>末尾返回 ` AmuletEffectContextKey.of(id, Double.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L73) |
| ` public AmuletEffectContextKey(Identifier id, Class<T> clazz) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L10) |
| ` public Identifier id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L10) |
| ` public Class<T> clazz() ` | 读取 record 分量 ` clazz ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/ctx/AmuletEffectContextKey.java#L10) |
