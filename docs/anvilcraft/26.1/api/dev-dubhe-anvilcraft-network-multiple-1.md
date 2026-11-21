# dev.dubhe.anvilcraft.network.multiple（EnergyWeaponMakePackets 至 TranscendenceSmithingPackets.AddTemplate）



## EnergyWeaponMakePackets

` public class EnergyWeaponMakePackets `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnergyWeaponMakePackets() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L13) |

## EnergyWeaponMakePackets.Make

` public record Make() implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<Make> TYPE ` | 初值 ` EnergyWeaponMakePackets.of("make") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L19) |
| ` public static final StreamCodec<ByteBuf, Make> STREAM_CODEC ` | 初值 ` StreamCodec.unit(new Make()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L20) |
| ` @Override public Type<Make> type() ` | 末尾返回 ` Make.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L22) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.hasContainerOpen() `<br>实现调用 ` menu.make(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L27) |
| ` public Make() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L18) |

## EnergyWeaponMakePackets.Select

` public record Select(int index) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<Select> TYPE ` | 初值 ` EnergyWeaponMakePackets.of("select") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L36) |
| ` public static final StreamCodec<ByteBuf, Select> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, Select::index, Select::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L37) |
| ` @Override public Type<Select> type() ` | 末尾返回 ` Select.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L43) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` menu.setSelectedIndex(this.index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L48) |
| ` public Select(int index) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L35) |
| ` public int index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L35) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L35) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L35) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/EnergyWeaponMakePackets.java#L35) |

## FrostSmithingPackets

` public class FrostSmithingPackets `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostSmithingPackets() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L13) |

## FrostSmithingPackets.ClickButton

` public record ClickButton(boolean left) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ClickButton> TYPE ` | 初值 ` FrostSmithingPackets.of("click_button") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L19) |
| ` public static final StreamCodec<ByteBuf, ClickButton> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.BOOL, ClickButton::left, ClickButton::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L20) |
| ` @Override public Type<ClickButton> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L26) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` menu.turn(this.left) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L31) |
| ` public ClickButton(boolean left) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L18) |
| ` public boolean left() ` | 读取 record 分量 ` left ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/FrostSmithingPackets.java#L18) |

## MultiphasePackets

` public class MultiphasePackets `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MultiphasePackets() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L16) |

## MultiphasePackets.ChangePhase

` public record ChangePhase(InteractionHand hand, byte index) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<ChangePhase> TYPE ` | 初值 ` MultiphasePackets.of("change_phase") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L39) |
| ` public static final StreamCodec<ByteBuf, ChangePhase> STREAM_CODEC ` | 初值 ` StreamCodec.composite( StreamCodecUtil.enumStreamCodec(InteractionHand.class), ChangePhase::hand, ByteBufCodecs.BYTE, ChangePhase::index, ChangePhase::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L40) |
| ` public ChangePhase(InteractionHand hand, int index) ` | 执行 ` this(hand, (byte) index) `<br>[调用处 WheelLifecycleEventListener.addMultiphaseWheelEntry](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L369) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L48) |
| ` @Override public Type<ChangePhase> type() ` | 末尾返回 ` ChangePhase.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L52) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.getItemInHand(this.hand) `<br>实现调用 ` stack.has(ModComponents.MULTIPHASE) `<br>实现调用 ` stack.get(ModComponents.MULTIPHASE).select(stack, this.index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L57) |
| ` public InteractionHand hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L38) |
| ` public byte index() ` | 读取 record 分量 ` index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L38) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L38) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L38) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L38) |

## MultiphasePackets.SwitchPhase

` public record SwitchPhase() implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SwitchPhase> TYPE ` | 初值 ` MultiphasePackets.of("switch_phase") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L22) |
| ` public static final StreamCodec<ByteBuf, SwitchPhase> STREAM_CODEC ` | 初值 ` StreamCodec.unit(new SwitchPhase()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L23) |
| ` @Override public Type<SwitchPhase> type() ` | 末尾返回 ` SwitchPhase.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L25) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` MultiphasePackets.findHeldMultiphase(player) `<br>实现调用 ` stack.get(ModComponents.MULTIPHASE).cycle(stack) `<br>实现调用 ` stack.get(ModComponents.MULTIPHASE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L30) |
| ` public SwitchPhase() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/MultiphasePackets.java#L21) |

## SmithingTemplatePackets

` public final class SmithingTemplatePackets `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L20)

相邻容器锻造模板面板使用的网络包。


## SmithingTemplatePackets.Action

` public record Action(int containerId, Identifier template, boolean toggleFavorite) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L62)

客户端请求借用模板，或切换模板的置顶状态。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<Action> TYPE ` | 初值 ` SmithingTemplatePackets.type("action") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L64) |
| ` public static final StreamCodec<ByteBuf, Action> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, Action::containerId, Identifier.STREAM_CODEC, Action::template, ByteBufCodecs.BOOL, Action::toggleFavorite, Action::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L65) |
| ` @Override public Type<Action> type() ` | 末尾返回 ` Action.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L75) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` menu.handleTemplateAction(player, this.template, this.toggleFavorite) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L80) |
| ` public Action(int containerId, Identifier template, boolean toggleFavorite) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L62) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L62) |
| ` public Identifier template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L62) |
| ` public boolean toggleFavorite() ` | 读取 record 分量 ` toggleFavorite ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L62) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L62) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L62) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L62) |

## SmithingTemplatePackets.Sync

` public record Sync(int containerId, List<ItemStack> templates, List<Identifier> favorites, ItemStack borrowedTemplate) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L29)

服务端向当前菜单同步可用模板和玩家置顶数据。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<Sync> TYPE ` | 初值 ` SmithingTemplatePackets.type("sync") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L35) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, Sync> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L36) |
| ` @Override public Type<Sync> type() ` | 末尾返回 ` Sync.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L48) |
| ` @Override public void handleOnClient(Player player) ` | 实现调用 ` menu.handleTemplateSync(this.templates, this.favorites, this.borrowedTemplate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L53) |
| ` public Sync(int containerId, List<ItemStack> templates, List<Identifier> favorites, ItemStack borrowedTemplate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L29) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L30) |
| ` public List<ItemStack> templates() ` | 读取 record 分量 ` templates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L31) |
| ` public List<Identifier> favorites() ` | 读取 record 分量 ` favorites ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L32) |
| ` public ItemStack borrowedTemplate() ` | 读取 record 分量 ` borrowedTemplate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L33) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L29) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L29) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/SmithingTemplatePackets.java#L29) |

## TradingStationPackets

` public class TradingStationPackets `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TradingStationPackets() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L20) |

## TradingStationPackets.SyncAllowing

` public record SyncAllowing(BlockPos pos, boolean playerAllowed, boolean villagerAllowed, boolean inputAllowed, boolean outputAllowed) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L69)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SyncAllowing> TYPE ` | 初值 ` TradingStationPackets.of("sync_allowing") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L76) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SyncAllowing> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L77) |
| ` @Override public Type<SyncAllowing> type() ` | 末尾返回 ` SyncAllowing.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L91) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` TradingStationPackets.getOpenStation(player, this.pos) `<br>实现调用 ` beOp.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L96) |
| ` public SyncAllowing(BlockPos pos, boolean playerAllowed, boolean villagerAllowed, boolean inputAllowed, boolean outputAllowed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L69) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L70) |
| ` public boolean playerAllowed() ` | 读取 record 分量 ` playerAllowed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L71) |
| ` public boolean villagerAllowed() ` | 读取 record 分量 ` villagerAllowed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L72) |
| ` public boolean inputAllowed() ` | 读取 record 分量 ` inputAllowed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L73) |
| ` public boolean outputAllowed() ` | 读取 record 分量 ` outputAllowed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L74) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L69) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L69) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L69) |

## TradingStationPackets.SyncFilter

` public record SyncFilter(BlockPos pos, int slot, ItemStack stack) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<SyncFilter> TYPE ` | 初值 ` TradingStationPackets.of("sync_filter") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L37) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, SyncFilter> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockPos.STREAM_CODEC, SyncFilter::pos, ByteBufCodecs.VAR_INT, SyncFilter::slot, ItemStack.OPTIONAL_STREAM_CODEC, SyncFilter::stack, SyncFilter::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L38) |
| ` @Override public Type<SyncFilter> type() ` | 末尾返回 ` SyncFilter.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L48) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` player.isSpectator() `<br>实现调用 ` player.level() `<br>实现调用 ` TradingStationPackets.getOpenStation(player, this.pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L53) |
| ` public SyncFilter(BlockPos pos, int slot, ItemStack stack) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L36) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L36) |
| ` public int slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L36) |
| ` public ItemStack stack() ` | 读取 record 分量 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L36) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L36) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L36) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TradingStationPackets.java#L36) |

## TranscendenceSmithingPackets

` public final class TranscendenceSmithingPackets `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L20)

超限锻造台的模板与结果选择网络包。


## TranscendenceSmithingPackets.AddTemplate

` public record AddTemplate(int containerId, ItemStack template) implements IServerboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L89)

从 JEI 拖入的候选物品，仅用于添加模板目录条目。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<AddTemplate> TYPE ` | 初值 ` TranscendenceSmithingPackets.type("add_template") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L90) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AddTemplate> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, AddTemplate::containerId, ItemStack.STREAM_CODEC, AddTemplate::template, AddTemplate::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L91) |
| ` @Override public Type<AddTemplate> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L96) |
| ` @Override public void handleOnServer(Player player) ` | 实现调用 ` menu.addTemplate(player, this.template) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L101) |
| ` public AddTemplate(int containerId, ItemStack template) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L89) |
| ` public int containerId() ` | 读取 record 分量 ` containerId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L89) |
| ` public ItemStack template() ` | 读取 record 分量 ` template ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L89) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L89) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L89) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/multiple/TranscendenceSmithingPackets.java#L89) |
