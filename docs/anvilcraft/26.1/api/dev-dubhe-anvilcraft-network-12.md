# dev.dubhe.anvilcraft.network（WeaponChargeProgressPacket 至 WeaponChargeProgressPacket）



## WeaponChargeProgressPacket

` public record WeaponChargeProgressPacket(int item, int hand, int elapsed, int duration, boolean repeating, float tickRate) implements IClientboundPacket `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<WeaponChargeProgressPacket> TYPE ` | 初值 ` IPacket.type(AnvilCraft.of("weapon_charge_progress")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L18) |
| ` public static final StreamCodec<ByteBuf, WeaponChargeProgressPacket> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L19) |
| ` public static void sync(Player player, ItemStack stack, int elapsed, int duration, boolean repeating) ` | 实现调用 ` player.getUseItem() `<br>实现调用 ` player.level().tickRateManager().tickrate() `<br>实现调用 ` player.level().tickRateManager() `<br>[调用处 ResonatorItem.onUseTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ResonatorItem.java#L311) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L29) |
| ` public float progressAfter(double milliseconds) ` | ` (this.duration <= 0) ` 成立时提前返回 ` -1 `<br>末尾返回 ` this.repeating ? (float) (ticks % this.duration / this.duration) : (float) Math.clamp(ticks / this.duration, 0, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L39) |
| ` @Override public Type<WeaponChargeProgressPacket> type() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L47) |
| ` @Override public void handleOnClient(Player player) ` | 执行 ` EnergyWeaponUseHUD.update(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L52) |
| ` public WeaponChargeProgressPacket(int item, int hand, int elapsed, int duration, boolean repeating, float tickRate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int hand() ` | 读取 record 分量 ` hand ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int elapsed() ` | 读取 record 分量 ` elapsed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int duration() ` | 读取 record 分量 ` duration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public boolean repeating() ` | 读取 record 分量 ` repeating ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public float tickRate() ` | 读取 record 分量 ` tickRate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/WeaponChargeProgressPacket.java#L16) |
