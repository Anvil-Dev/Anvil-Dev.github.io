# dev.dubhe.anvilcraft.network.multiple（TranscendenceSmithingPackets.RemoveTemplate 至 TranscendenceSmithingPackets.TurnResult）



## TranscendenceSmithingPackets.RemoveTemplate

` public record RemoveTemplate(int containerId, Identifier template) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L111)

拖出模板区后删除玩家手动添加的条目。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<RemoveTemplate> TYPE ` | 初值 ` TranscendenceSmithingPackets.type("remove_template") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L112) |
| ` public static final StreamCodec<ByteBuf, RemoveTemplate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, RemoveTemplate::containerId, Identifier.STREAM_CODEC, RemoveTemplate::template, RemoveTemplate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L113) |
| ` @Override public Type<RemoveTemplate> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L118) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` menu.removeTemplate(player, this.template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L123) |
| ` public RemoveTemplate(int containerId, Identifier template) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L111) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L111) |
| ` public Identifier template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L111) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L111) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L111) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L111) |

## TranscendenceSmithingPackets.Sync

` public record Sync(int containerId, List<ItemStack> templates, List<Identifier> favorites, ItemStack selectedTemplate) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L29)

服务端同步全部虚拟模板、玩家置顶数据与当前选择。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<Sync> TYPE ` | 初值 ` TranscendenceSmithingPackets.type("sync") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L35) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, Sync> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L36) |
| ` @Override public Type<Sync> type() ` | 末尾返回 ` Sync.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L48) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` menu.handleTemplateSync(this.templates, this.favorites, this.selectedTemplate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L53) |
| ` public Sync(int containerId, List<ItemStack> templates, List<Identifier> favorites, ItemStack selectedTemplate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L29) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L30) |
| ` public List<ItemStack> templates() ` | 读取 record 分量 ` templates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L31) |
| ` public List<Identifier> favorites() ` | 读取 record 分量 ` favorites ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L32) |
| ` public ItemStack selectedTemplate() ` | 读取 record 分量 ` selectedTemplate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L33) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L29) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L29) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L29) |

## TranscendenceSmithingPackets.TemplateAction

` public record TemplateAction(int containerId, Identifier template, boolean toggleFavorite) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L62)

客户端选择模板或切换置顶状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TemplateAction> TYPE ` | 初值 ` TranscendenceSmithingPackets.type("template_action") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L64) |
| ` public static final StreamCodec<ByteBuf, TemplateAction> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, TemplateAction::containerId, Identifier.STREAM_CODEC, TemplateAction::template, ByteBufCodecs.BOOL, TemplateAction::toggleFavorite, TemplateAction::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L65) |
| ` @Override public Type<TemplateAction> type() ` | 末尾返回 ` TemplateAction.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L75) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` menu.handleTemplateAction(player, this.template, this.toggleFavorite) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L80) |
| ` public TemplateAction(int containerId, Identifier template, boolean toggleFavorite) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L62) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L62) |
| ` public Identifier template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L62) |
| ` public boolean toggleFavorite() ` | 读取 record 分量 ` toggleFavorite ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L62) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L62) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L62) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L62) |

## TranscendenceSmithingPackets.TurnResult

` public record TurnResult(int containerId, boolean left) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L133)

客户端切换浮霜模式的候选结果。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<TurnResult> TYPE ` | 初值 ` TranscendenceSmithingPackets.type("turn_result") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L134) |
| ` public static final StreamCodec<ByteBuf, TurnResult> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, TurnResult::containerId, ByteBufCodecs.BOOL, TurnResult::left, TurnResult::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L135) |
| ` @Override public Type<TurnResult> type() ` | 末尾返回 ` TurnResult.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L143) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` menu.turnFrostResult(this.left) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L148) |
| ` public TurnResult(int containerId, boolean left) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L133) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L133) |
| ` public boolean left() ` | 读取 record 分量 ` left ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L133) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L133) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L133) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L133) |
