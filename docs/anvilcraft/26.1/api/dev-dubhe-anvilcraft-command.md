# dev.dubhe.anvilcraft.command



## BlueprintCommand

` public final class BlueprintCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/BlueprintCommand.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> root) ` | 实现调用 ` Commands.literal("blueprint") `<br>实现调用 ` Commands.literal("add") `<br>实现调用 ` Commands.argument("players", GameProfileArgument.gameProfile()) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/BlueprintCommand.java#L17) |

## MultiBlockCommand

` public class MultiBlockCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/MultiBlockCommand.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> builder) ` | 实现调用 ` literal("multiBlock") `<br>实现调用 ` literal("getMainPartPos") `<br>实现调用 ` argument("pos", BlockPosArgument.blockPos()) .executes(MultiBlockCommand::getMainPartPos) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/MultiBlockCommand.java#L24) |
| ` public MultiBlockCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/MultiBlockCommand.java#L23) |

## MultiphaseCommand

` public class MultiphaseCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/MultiphaseCommand.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> parent) ` | 实现调用 ` Commands.literal("multiphase") `<br>实现调用 ` Commands.literal("info").executes(MultiphaseCommand::showInfo) `<br>实现调用 ` Commands.literal("info") `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/MultiphaseCommand.java#L29) |
| ` public MultiphaseCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/MultiphaseCommand.java#L21) |

## OverseerCommand

` public class OverseerCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> builder) ` | 实现调用 ` Commands.literal("overseer") `<br>实现调用 ` Commands.literal("list") `<br>实现调用 ` Commands.argument("dimension", DimensionArgument.dimension()) .executes(OverseerCommand::listOverseers) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L33) |
| ` public OverseerCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L30) |

## PowerGridCommand

` public class PowerGridCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/PowerGridCommand.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> parent) ` | 实现调用 ` Commands.literal("powergrid") `<br>实现调用 ` Commands.literal("info") `<br>实现调用 ` Commands.argument("pos", BlockPosArgument.blockPos()) .executes(PowerGridCommand::showInfo) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/PowerGridCommand.java#L70) |
| ` public PowerGridCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/PowerGridCommand.java#L21) |

## StorageCommand

` public class StorageCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L40)

存储信息与绑定命令：显示仓储方块/超维终端的存储 ID 与类型， 将对应类型与手持的仓储方块/超维终端绑定。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> parent) ` | 实现调用 ` Commands.literal("storage") .requires(Commands.hasPermission(Commands.LEVEL_GAMEMASTERS)) `<br>实现调用 ` Commands.literal("storage") `<br>实现调用 ` Commands.hasPermission(Commands.LEVEL_GAMEMASTERS) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L54) |
| ` public StorageCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/StorageCommand.java#L40) |

## TickSprintVoteCommand

` public class TickSprintVoteCommand `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/TickSprintVoteCommand.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerCommand(LiteralArgumentBuilder<CommandSourceStack> parent) ` | 实现调用 ` Commands.literal("tick_sprint_vote") .requires(CommandSourceStack::isPlayer) `<br>实现调用 ` Commands.literal("tick_sprint_vote") `<br>实现调用 ` Commands.argument("dimension", DimensionArgument.dimension()) `<br>[调用处 ModCommands.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/command/ModCommands.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/TickSprintVoteCommand.java#L20) |
| ` public TickSprintVoteCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/TickSprintVoteCommand.java#L19) |
