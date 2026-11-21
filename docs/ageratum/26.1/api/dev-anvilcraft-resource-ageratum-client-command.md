# dev.anvilcraft.resource.ageratum.client.command



## AgeratumCommand

` public class AgeratumCommand `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L50)

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onCommandRegister(RegisterClientCommandsEvent event) ` | 事件总线派发 ` RegisterClientCommandsEvent ` 时调用。<br>实现调用 ` event.getDispatcher() `<br>实现调用 ` Commands.literal("ageratum") .then( Commands.literal("item").executes(AgeratumCommand::itemCommand) ) `<br>实现调用 ` Commands.literal("ageratum") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L69) |
| ` public static int itemCommand(CommandContext<CommandSourceStack> context) ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L106) |
| ` public static int preview(CommandContext<CommandSourceStack> context) ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L182) |
| ` public static int structure(CommandContext<CommandSourceStack> context) throws CommandSyntaxException ` | ` (optional.isEmpty()) ` 成立时抛出 ` ERROR_TEMPLATE_INVALID.create(templateId) `<br>末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L197) |
| ` public static void warmSuggestionCache(Map<Identifier, ?> documents) ` | 从已解析的文档数据预热命令建议缓存。<br>实现调用 ` cachedFiles.clear() `<br>实现调用 ` documents.keySet() `<br>实现调用 ` location.getPath() `<br>[调用处 GuideDocumentCache.apply](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L103) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L272) |
| ` public AgeratumCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L50) |
