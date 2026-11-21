# dev.dubhe.anvilcraft.api.portal



## PortalType

` public class PortalType `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<PortalType> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group(Identifier.CODEC.fieldOf("portal").forGetter(PortalType::getId)).apply(inst, PortalType::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L19) |
| ` public static final StreamCodec<ByteBuf, PortalType> STREAM_CODEC ` | 初值 ` StreamCodec.composite(Identifier.STREAM_CODEC, PortalType::getId, PortalType::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L24) |
| ` public PortalType(Identifier id) ` | ` (!(block instanceof Portal portal1)) ` 成立时抛出 ` new IllegalArgumentException("Block \'" + id + "\' is not a portal") `<br>实现调用 ` BuiltInRegistries.BLOCK.getValue(id) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L32) |
| ` @SuppressWarnings("deprecation") public <T extends Block & Portal> PortalType(T portal) ` | 实现调用 ` portal.builtInRegistryHolder().key().identifier() `<br>实现调用 ` portal.builtInRegistryHolder().key() `<br>实现调用 ` portal.builtInRegistryHolder() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L41) |
| ` public Component getPortalName() ` | 末尾返回 ` Util.<Block>cast(this.portal).getName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L47) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof PortalType type)) ` 成立时提前返回 ` false `<br>末尾返回 ` Objects.equals(this.getId(), type.getId()) `<br>实现调用 ` Objects.equals(this.getId(), type.getId()) `<br>实现调用 ` this.getId() `<br>实现调用 ` type.getId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L51) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hashCode(this.getId()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L57) |
| ` public Identifier getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。<br>[调用处 PortalType.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L17) |
| ` public Portal getPortal() ` | 末尾返回 ` this.portal `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L17) |
