# dev.anvilcraft.resource.ageratum.client.command



## AgeratumCommand

` public class AgeratumCommand `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L51)

类型注解 ` @EventBusSubscriber(modid = Ageratum.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onCommandRegister(RegisterClientCommandsEvent event) ` | 注册客户端命令 /ageratum。 命令格式： /ageratum &amp;lt;namespace&amp;gt; — 打开该命名空间的 index.md /ageratum &amp;lt;namespace&amp;gt; &amp;lt;file&amp;gt; — 打开指定文件（不需要 .md 后缀） /ageratum structure &amp;lt;template&amp;gt; &amp;lt;x&amp;gt; &amp;lt;y&amp;gt; &amp;lt;z&amp;gt; — 在指定位置显示结构投影<br>事件总线派发 ` RegisterClientCommandsEvent ` 时调用。<br>参数 ` event ` 命令注册事件<br>实现调用 ` event.getDispatcher() `<br>实现调用 ` Commands.literal("ageratum") .then(Commands.literal("item").executes(AgeratumCommand::itemCommand)) `<br>实现调用 ` Commands.literal("ageratum") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L86) |
| ` public static int itemCommand(CommandContext<CommandSourceStack> context) ` | 生成手持物品的 &lt;ref&gt; 标签并发送到聊天栏，点击可复制。<br>末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L108) |
| ` public static int preview(CommandContext<CommandSourceStack> context) ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L186) |
| ` public static int structure(CommandContext<CommandSourceStack> context) throws CommandSyntaxException ` | 在指定位置显示结构投影（纯客户端，从资源包中读取模板）。<br>` (optional.isEmpty()) ` 成立时抛出 ` ERROR_TEMPLATE_INVALID.create(templateId) `<br>末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L203) |
| ` public static void warmSuggestionCache(Map<ResourceLocation, ?> documents) ` | 从已解析的文档数据预热命令建议缓存。 在 GuideDocumentCache 重载完成后调用。<br>实现调用 ` cachedFiles.clear() `<br>实现调用 ` documents.keySet() `<br>实现调用 ` location.getPath() `<br>[调用处 GuideDocumentCache.apply](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java#L111) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L279) |
| ` public AgeratumCommand() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L51) |
