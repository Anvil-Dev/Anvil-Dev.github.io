# dev.dubhe.anvilcraft.api.totem



## TotemManager

` public class TotemManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L19)

用于管理图腾

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final TotemManager INSTANCE ` | 初值 ` new TotemManager() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L20) |
| ` public void registerTotem(Item item, TotemHandler handler) ` | 执行 ` this.totemMap.put(item, handler) `<br>[调用处 TotemManager.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L32) |
| ` public Map<Item, TotemHandler> getTotemMap() ` | 末尾返回 ` this.totemMap `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L19) |
