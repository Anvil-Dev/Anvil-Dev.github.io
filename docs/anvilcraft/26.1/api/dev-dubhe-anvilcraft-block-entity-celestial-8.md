# dev.dubhe.anvilcraft.block.entity.celestial（StellarNodeDynamics 至 StellarTrackLibrary）



## StellarNodeDynamics

` public record StellarNodeDynamics(List<StellarControlPoint> points, StellarMetallicityResponse response, EventPolicy eventPolicy, int pulses, float wind) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L11)

新格式节点的曲线、脉冲与玩法策略。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StellarNodeDynamics> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L15) |
| ` public StellarNodeDynamics(List<StellarControlPoint> points, StellarMetallicityResponse response, EventPolicy eventPolicy, int pulses, float wind) ` | ` (pulses < 1 \|\| pulses > 16 \|\| !Float.isFinite(wind) \|\| wind < 0 \|\| wind > 1) ` 成立时抛出 ` new IllegalArgumentException("Invalid stellar dynamics") `<br>` (points.size() < 2 \|\| points.getFirst().progress() != 0 \|\| points.getLast().progress() != 1) ` 成立时抛出 ` new IllegalArgumentException("Stellar curves must cover [0, 1]") `<br>[调用处 StellarNodeDynamics.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L55) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L39) |
| ` public StellarNodeDynamics resolve(double coordinate) ` | 实现调用 ` this.points.stream().map(point -> point.resolve(this.response, coordinate)).toList() `<br>实现调用 ` this.points.stream().map(point -> point.resolve(this.response, coordinate)) `<br>实现调用 ` this.points.stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L54) |
| ` public StellarVisualState sample(PhaseNode node, PhaseNode previous, float progress) ` | 末尾返回 ` this.points.getLast().visual(node) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L60) |
| ` public List<StellarControlPoint> points() ` | 读取 record 分量 ` points ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L12) |
| ` public StellarMetallicityResponse response() ` | 读取 record 分量 ` response ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L12) |
| ` public EventPolicy eventPolicy() ` | 读取 record 分量 ` eventPolicy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L13) |
| ` public int pulses() ` | 读取 record 分量 ` pulses ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L13) |
| ` public float wind() ` | 读取 record 分量 ` wind ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L11) |

## StellarNodeDynamics.EventPolicy

` public enum EventPolicy `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` VISUAL ` | 声明于枚举 ` StellarNodeDynamics.EventPolicy ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L25) |
| ` SUPERNOVA ` | 声明于枚举 ` StellarNodeDynamics.EventPolicy ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L25) |
| ` DIRECT_COLLAPSE ` | 声明于枚举 ` StellarNodeDynamics.EventPolicy ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L25) |
| ` PPISN ` | 声明于枚举 ` StellarNodeDynamics.EventPolicy ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L25) |
| ` PISN ` | 声明于枚举 ` StellarNodeDynamics.EventPolicy ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L25) |
| ` public static final Codec<EventPolicy> CODEC ` | 由 ` Codec.STRING.comapFlatMap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L27) |
| ` public boolean destructive() ` | 末尾返回 ` this == SUPERNOVA \|\| this == PISN ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L34) |
| ` public static EventPolicy[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L24) |
| ` public static EventPolicy valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L24) |

## StellarScheduledEvent

` public record StellarScheduledEvent(String instanceId, String nodeId, String profileId, int startOffset, int endOffset, int shockOffset, int pulseIndex, long seed, StellarNodeDynamics.EventPolicy policy) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L7)

一次运行中固定的事件实例；偏移量相对总起点，暂停只需平移该起点。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StellarScheduledEvent> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L11) |
| ` public StellarScheduledEvent(String instanceId, String nodeId, String profileId, int startOffset, int endOffset, int shockOffset, int pulseIndex, long seed, StellarNodeDynamics.EventPolicy policy) ` | ` (instanceId.isBlank() \|\| nodeId.isBlank() \|\| profileId.isBlank() \|\| startOffset < 0 \|\| endOffset <= startOffset \|\| shockOffset < startOffset \|\| shockOffset >= endOffset \|\| pulseIndex < 0 \|\| pulseIndex >= 16) ` 成立时抛出 ` new IllegalArgumentException("Invalid stellar event instance") `<br>[调用处 StellarEvolutionState.createEventPlan](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEvolutionState.java#L184) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L23) |
| ` public float progress(double elapsed) ` | 末尾返回 ` (float) Math.clamp((elapsed - this.startOffset) / (this.endOffset - this.startOffset), 0, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L31) |
| ` public String instanceId() ` | 读取 record 分量 ` instanceId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L8) |
| ` public String nodeId() ` | 读取 record 分量 ` nodeId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L8) |
| ` public String profileId() ` | 读取 record 分量 ` profileId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L8) |
| ` public int startOffset() ` | 读取 record 分量 ` startOffset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L8) |
| ` public int endOffset() ` | 读取 record 分量 ` endOffset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L8) |
| ` public int shockOffset() ` | 读取 record 分量 ` shockOffset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L9) |
| ` public int pulseIndex() ` | 读取 record 分量 ` pulseIndex ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L9) |
| ` public long seed() ` | 读取 record 分量 ` seed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L9) |
| ` public StellarNodeDynamics.EventPolicy policy() ` | 读取 record 分量 ` policy ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L7) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L7) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarScheduledEvent.java#L7) |

## StellarTerminal

` public record StellarTerminal(Kind kind, int massAnvils, double solarMass, int size) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8)

终局与视觉事件分别配置；质量坐标与太阳质量必须指向同一基准值。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StellarTerminal> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L9) |
| ` public void validate(double initialSolarMass) ` | ` (!Double.isFinite(this.solarMass) \|\| this.solarMass < 0 \|\| this.solarMass > initialSolarMass) ` 成立时抛出 ` new IllegalArgumentException("Remnant mass exceeds initial mass") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L37) |
| ` public StellarTerminal(Kind kind, int massAnvils, double solarMass, int size) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8) |
| ` public Kind kind() ` | 读取 record 分量 ` kind ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8) |
| ` public int massAnvils() ` | 读取 record 分量 ` massAnvils ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8) |
| ` public double solarMass() ` | 读取 record 分量 ` solarMass ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8) |
| ` public int size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L8) |

## StellarTerminal.Kind

` public enum Kind `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` WHITE_DWARF ` | 声明于枚举 ` StellarTerminal.Kind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L17) |
| ` NEUTRON_STAR ` | 声明于枚举 ` StellarTerminal.Kind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L17) |
| ` BLACK_HOLE ` | 声明于枚举 ` StellarTerminal.Kind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L17) |
| ` NONE ` | 声明于枚举 ` StellarTerminal.Kind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L18) |
| ` KEEP ` | 声明于枚举 ` StellarTerminal.Kind ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L18) |
| ` public static final Codec<Kind> CODEC ` | 由 ` Codec.STRING.comapFlatMap ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L20) |
| ` public String id() ` | 末尾返回 ` this.id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L32) |
| ` public static Kind[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L16) |
| ` public static Kind valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L16) |

## StellarTrack

` public final class StellarTrack `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L16)

数据驱动的恒星演化轨道。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StellarTrack> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L17) |
| ` public StellarTrack( String trackId, String surfaceClassFamily, List<PhaseNode> phaseNodes, String terminalProfile, StellarTrackDefinition definition ) ` | ` (phaseNodes == null \|\| phaseNodes.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("恒星轨道至少需要一个阶段节点") `<br>[调用处 StellarTrack.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L55) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L33) |
| ` public StellarTrackDefinition definition() ` | 末尾返回 ` this.definition ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L47) |
| ` public StellarTrack resolve(double coordinate, CelestialBodyClass surfaceClass) ` | ` (!Double.isFinite(coordinate) \|\| coordinate < -1 \|\| coordinate > 1) ` 成立时抛出 ` new IllegalArgumentException("Invalid metallicity coordinate") `<br>末尾返回 ` new StellarTrack(this.trackId, surfaceClass.name(), this.phaseNodes.stream().map(node -> node.resolve(coordinate)).toList(), this.terminalProfile, this.definition) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L51) |
| ` public int nodeIndex(String nodeId) ` | 实现调用 ` this.phaseNodes.size() `<br>实现调用 ` this.phaseNodes.get(index).nodeId().equals(nodeId) `<br>实现调用 ` this.phaseNodes.get(index).nodeId() `<br>[调用处 StellarTrack.validate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L222) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L59) |
| ` public String trackId() ` | 末尾返回 ` this.trackId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L66) |
| ` public String surfaceClassFamily() ` | 末尾返回 ` this.surfaceClassFamily ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L70) |
| ` public List<PhaseNode> phaseNodes() ` | 末尾返回 ` this.phaseNodes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L74) |
| ` public boolean containsPhase(StellarEvolutionPhase phase) ` | 末尾返回 ` this.phaseNodes.stream().anyMatch(node -> node.phaseId() == phase) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L78) |
| ` public boolean hasTerminalEvent() ` | 末尾返回 ` this.terminalProfile != null && !this.terminalProfile.isBlank() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L82) |
| ` public String terminalProfile() ` | 末尾返回 ` this.terminalProfile ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L86) |
| ` public float totalWeight() ` | 返回轨道权重总和。<br>末尾返回 ` result `<br>[调用处 StellarTrack.phaseDurations](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L91) |
| ` public List<Integer> phaseDurations(int totalTicks) ` | 返回按总预算分配且每个节点至少一 tick 的阶段时长。<br>` (cached != null) ` 成立时提前返回 ` cached `<br>末尾返回 ` result `<br>[调用处 StellarTrack.sample](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L144) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L98) |
| ` public PhaseSample sample(long elapsedTicks, int totalTicks) ` | 根据总轨道进度定位阶段和相邻节点。<br>末尾返回 ` new PhaseSample(this.phaseNodes.size() - 1, cursor, durations.get(durations.size() - 1), 1.0f, last, last) `<br>[调用处 StellarTrack.visualAt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L166) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L143) |
| ` public StellarVisualState visualAt(float progress) ` | 在轨道总进度上插值出视觉快照；节点数值是阶段目标，因此起点取上一节点。<br>末尾返回 ` sample.node().dynamics().sample(sample.node(), this.phaseNodes.get(Math.max(0, sample.index() - 1)), sample.progress()) `<br>[调用处 StellarTrack.sampleVisual](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L172) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L163) |
| ` public StellarVisualState sampleVisual(float progress) ` | 末尾返回 ` this.visualAt(progress) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L171) |
| ` public StellarVisualState sampleVisual(long elapsedTicks, int totalTicks) ` | 末尾返回 ` sample.node().dynamics().sample(sample.node(), this.phaseNodes.get(Math.max(0, sample.index() - 1)), sample.progress()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L175) |
| ` public StellarVisualState sampleVisualState(float progress) ` | 末尾返回 ` this.visualAt(progress) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L181) |
| ` @SuppressWarnings("checkstyle:OverloadMethodsDeclarationOrder") public StellarVisualState visualAt(float progress, StellarEventProfile profile) ` | 按事件 profile 叠加核心收缩和抛射物膨胀。<br>实现调用 ` this.visualAt(progress) `<br>实现调用 ` Float.isFinite(progress) `<br>实现调用 ` Math.clamp(progress, 0.0f, 1.0f) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L186) |
| ` public void validate() ` | 检查阶段顺序和数值约束，资源重载时调用。<br>` (this.trackId.isBlank()) ` 成立时抛出 ` new IllegalArgumentException("恒星轨道 ID 不能为空") `<br>` (this.definition.version() != 3 \|\| this.definition.massAnvils() < 41 \|\| !this.trackId.equals("mass_" + this.definition.massAnvils())) ` 成立时抛出 ` new IllegalArgumentException("Invalid discrete stellar track: " + this.trackId) `<br>` (!reachesOutcome) ` 成立时抛出 ` new IllegalArgumentException("Final physical phase disagrees with outcome: " + this.trackId) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L209) |

## StellarTrack.PhaseSample

` public record PhaseSample(int index, long phaseStart, int phaseDuration, float progress, PhaseNode node, PhaseNode nextNode) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L258)

阶段采样结果，包含节点进度和绝对阶段起点。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PhaseSample(int index, long phaseStart, int phaseDuration, float progress, PhaseNode node, PhaseNode nextNode) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L258) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L259) |
| ` public long phaseStart() ` | 读取 record 分量 ` phaseStart ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L260) |
| ` public int phaseDuration() ` | 读取 record 分量 ` phaseDuration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L261) |
| ` public float progress() ` | 读取 record 分量 ` progress ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L262) |
| ` public PhaseNode node() ` | 读取 record 分量 ` node ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L263) |
| ` public PhaseNode nextNode() ` | 读取 record 分量 ` nextNode ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L264) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L258) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L258) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L258) |

## StellarTrackDefinition

` public record StellarTrackDefinition(int version, int massAnvils, Map<String, String> startingNodes, StellarTerminal terminal, StellarMetallicity metallicity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L9)

每个初始质量档位的版本、发现入口和明确终局。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StellarTrackDefinition> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L13) |
| ` public StellarTrackDefinition(int version, int massAnvils, Map<String, String> startingNodes, StellarTerminal terminal, StellarMetallicity metallicity) ` | 执行 ` startingNodes = Map.copyOf(startingNodes) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L23) |
| ` public int version() ` | 读取 record 分量 ` version ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L10) |
| ` public int massAnvils() ` | 读取 record 分量 ` massAnvils ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L10) |
| ` public Map<String, String> startingNodes() ` | 读取 record 分量 ` startingNodes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L10) |
| ` public StellarTerminal terminal() ` | 读取 record 分量 ` terminal ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L11) |
| ` public StellarMetallicity metallicity() ` | 读取 record 分量 ` metallicity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L9) |

## StellarTrackLibrary

` public final class StellarTrackLibrary `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L21)

精确质量档位的轨道库。一次性校验并发布完整资源集，运行中演化使用自己的快照。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String SOLAR_TRACK_ID ` | 初值 ` "mass_49" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L22) |
| ` public static final Codec<List<StellarTrack>> TRACKS_CODEC ` | 初值 ` StellarTrack.CODEC.listOf() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L23) |
| ` public static final List<CelestialBodyClass> EVOLVABLE_SURFACE_CLASSES ` | 由 ` List.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L24) |
| ` public static List<StellarTrack> tracks() ` | 末尾返回 ` library.tracks().values().stream() .sorted(Comparator.comparingInt(track -> track.definition().massAnvils())).toList() `<br>[调用处 CelestialBodyPresets.sample](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialBodyPresets.java#L161) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L46) |
| ` public static Map<String, StellarEventProfile> eventProfiles() ` | 末尾返回 ` library.profiles() `<br>[调用处 AcceleratorHandler.getEventProfile](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L362) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L51) |
| ` @Nullable public static StellarTrack track(String id) ` | 末尾返回 ` library.tracks().get(id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L55) |
| ` public static StellarTrack forMass(int initialMassAnvils) ` | ` (track == null) ` 成立时抛出 ` new IllegalArgumentException("Missing stellar mass track: " + initialMassAnvils) `<br>末尾返回 ` track ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L60) |
| ` @Nullable public static StellarTrack select(int initialMass, CelestialBodyClass surfaceClass, long seed) ` | 末尾返回 ` select(initialMass, surfaceClass, false, seed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L66) |
| ` @Nullable public static StellarTrack select(int initialMass, CelestialBodyClass surfaceClass, boolean specialRedDwarf, long seed) ` | ` (!canStart(initialMass, surfaceClass, specialRedDwarf)) ` 成立时提前返回 ` null `<br>末尾返回 ` forMass(initialMass) `<br>[调用处 AcceleratorHandler.onBuild](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L461) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L71) |
| ` public static boolean canStart(int mass, CelestialBodyClass surfaceClass, boolean specialRedDwarf) ` | ` (specialRedDwarf) ` 成立时提前返回 ` false `<br>` (mass == 41) ` 成立时提前返回 ` surfaceClass == CelestialBodyClass.BROWN_DWARF `<br>末尾返回 ` mass >= 42 && mass <= 64 && EVOLVABLE_SURFACE_CLASSES.contains(surfaceClass) `<br>[调用处 CelestialForgingAnvilBlockEntity.getClientVisibleOptions](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L1337) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L77) |
| ` public static int startingPhaseIndex(StellarTrack track, CelestialBodyClass surfaceClass) ` | ` (nodeId == null) ` 成立时抛出 ` new IllegalArgumentException("Missing stellar entry: " + track.trackId() + "/" + surfaceClass) `<br>末尾返回 ` track.nodeIndex(nodeId) `<br>[调用处 StellarEvolutionState.beginNew](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEvolutionState.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L83) |
| ` public static int variant(long seed, int salt) ` | 末尾返回 ` (int) value `<br>[调用处 StellarEvolutionState.begin](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEvolutionState.java#L236) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L89) |
| ` public static StellarEventProfile eventProfile(String id) ` | ` (profile != null) ` 成立时提前返回 ` profile `<br>[调用处 StellarEvolutionState.captureProfiles](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEvolutionState.java#L164) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L99) |
| ` public static void replaceTracks(List<StellarTrack> tracks) ` | 实现调用 ` validate(tracks, current.profiles()) `<br>实现调用 ` current.profiles() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L147) |
| ` public static boolean replaceTracksFromJson(JsonElement json) ` | 实现调用 ` replaceTracks(TRACKS_CODEC.parse(JsonOps.INSTANCE, json).getOrThrow()) `<br>实现调用 ` TRACKS_CODEC.parse(JsonOps.INSTANCE, json).getOrThrow() `<br>实现调用 ` TRACKS_CODEC.parse(JsonOps.INSTANCE, json) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L152) |
| ` public static String validateTracks() ` | 实现调用 ` validate(List.copyOf(current.tracks().values()), current.profiles()) `<br>实现调用 ` List.copyOf(current.tracks().values()) `<br>实现调用 ` current.tracks().values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L162) |
| ` public static void validateCoverage(JsonElement coverage, List<StellarTrack> tracks) ` | ` (rows.size() != byId.size()) ` 成立时抛出 ` new IllegalArgumentException("Stellar coverage size mismatch") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L172) |
| ` public static void loadBundledResources() ` | 执行 ` library = BUNDLED ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L210) |
| ` public static void resetDefaults() ` | 执行 ` library = BUNDLED ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L214) |
| ` public static void reload(ResourceManager manager) ` | 实现调用 ` decode(resourceJson(manager, "stellar_tracks.json"), resourceJson(manager, "stellar_event_profiles.json")) `<br>实现调用 ` resourceJson(manager, "stellar_tracks.json") `<br>实现调用 ` resourceJson(manager, "stellar_event_profiles.json") `<br>[调用处 ReloadEventListener.onServerReload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ReloadEventListener.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L226) |
