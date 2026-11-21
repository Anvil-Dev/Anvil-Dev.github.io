# dev.dubhe.anvilcraft.util.geometry



## DelaunayTriangulator

` public final class DelaunayTriangulator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Set<Edge> triangulate(Collection<Point> input) ` | 末尾返回 ` DelaunayTriangulator.triangulate(new ArrayList<>(input)) `<br>[调用处 DelaunayTriangulator.triangulate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L20) |
| ` public static Set<Edge> triangulate(int pointCount, IntFunction<Point> pointFactory) ` | 末尾返回 ` DelaunayTriangulator.triangulate(points) `<br>[调用处 SimplePowerGrid.createTransmitterVisualLines](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/SimplePowerGrid.java#L198) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L24) |

## DelaunayTriangulator.Edge

` public record Edge(int a, int b) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L309)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Edge(int a, int b) ` | 构造 ` DelaunayTriangulator.Edge ` 实例。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L310) |
| ` public int a() ` | 读取 record 分量 ` a ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L309) |
| ` public int b() ` | 读取 record 分量 ` b ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L309) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L309) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L309) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L309) |

## DelaunayTriangulator.Point

` public record Point(int id, double x, double y) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L306)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Point(int id, double x, double y) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L306) |
| ` public int id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L306) |
| ` public double x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L306) |
| ` public double y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L306) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L306) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L306) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/geometry/DelaunayTriangulator.java#L306) |
