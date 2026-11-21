# dev.dubhe.anvilcraft.command



## BlueprintCommand

` public final class BlueprintCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/BlueprintCommand.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> root) ` | 实现调用 ` literal("blueprint").requires(source -> source.hasPermission(3)) `<br>实现调用 ` literal("blueprint") `<br>实现调用 ` literal("add") `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/BlueprintCommand.java#L18) |

## MultiBlockCommand

` public class MultiBlockCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/MultiBlockCommand.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> builder) ` | 实现调用 ` literal("multiBlock") `<br>实现调用 ` literal("getMainPartPos") `<br>实现调用 ` argument("pos", BlockPosArgument.blockPos()) .executes(MultiBlockCommand::getMainPartPos) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/MultiBlockCommand.java#L23) |
| ` public MultiBlockCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/MultiBlockCommand.java#L22) |

## OverseerCommand

` public class OverseerCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> builder) ` | 实现调用 ` literal("overseer").requires(source -> source.hasPermission(2)) `<br>实现调用 ` literal("overseer") `<br>实现调用 ` literal("list") `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L33) |
| ` public OverseerCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L30) |

## PowergridCommand

` public class PowergridCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/PowergridCommand.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> parent) ` | 实现调用 ` literal("powergrid") `<br>实现调用 ` literal("info") `<br>实现调用 ` Commands.argument("pos", BlockPosArgument.blockPos()) .executes(PowergridCommand::showInfo) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/PowergridCommand.java#L72) |
| ` public PowergridCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/PowergridCommand.java#L23) |

## StorageCommand

` public class StorageCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L48)

存储信息与绑定命令：显示仓储方块/超维终端的存储 ID 与类型， 将对应类型与手持的仓储方块/超维终端绑定。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> parent) ` | 实现调用 ` literal("storage") .requires(source -> source.hasPermission(2)) .executes(StorageCommand::storageInfo) `<br>实现调用 ` literal("storage") .requires(source -> source.hasPermission(2)) `<br>实现调用 ` literal("storage") `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L62) |
| ` public StorageCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L48) |

## TickSprintVoteCommand

` public class TickSprintVoteCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/TickSprintVoteCommand.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> parent) ` | 实现调用 ` literal("tick_sprint_vote") .requires(CommandSourceStack::isPlayer) `<br>实现调用 ` literal("tick_sprint_vote") `<br>实现调用 ` argument("dimension", DimensionArgument.dimension()) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/TickSprintVoteCommand.java#L22) |
| ` public TickSprintVoteCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/TickSprintVoteCommand.java#L21) |
