# dev.dubhe.anvilcraft.api.portal



## PortalType

` public class PortalType `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final PortalType NETHER_PORTAL ` | 初值 ` PortalType.assume(Blocks.NETHER_PORTAL) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L20) |
| ` public static final PortalType END_PORTAL ` | 初值 ` PortalType.assume(Blocks.END_PORTAL) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L21) |
| ` public static final PortalType END_GATEWAY ` | 初值 ` PortalType.assume(Blocks.END_GATEWAY) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L22) |
| ` public static final MapCodec<PortalType> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group(ResourceLocation.CODEC.fieldOf("portal").forGetter(PortalType::getId)).apply(inst, PortalType::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L23) |
| ` public static final StreamCodec<ByteBuf, PortalType> STREAM_CODEC ` | 初值 ` StreamCodec.composite(ResourceLocation.STREAM_CODEC, PortalType::getId, PortalType::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L28) |
| ` public PortalType(ResourceLocation id) ` | ` (!(block instanceof Portal portal1)) ` 成立时抛出 ` new IllegalArgumentException("Block \'" + id + "\' is not a portal") `<br>实现调用 ` BuiltInRegistries.BLOCK.get(id) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L36) |
| ` @SuppressWarnings("deprecation") public <T extends Block & Portal> PortalType(T portal) ` | 实现调用 ` portal.builtInRegistryHolder().key().location() `<br>实现调用 ` portal.builtInRegistryHolder().key() `<br>实现调用 ` portal.builtInRegistryHolder() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L45) |
| ` public static PortalType assume(Block portal) ` | 末尾返回 ` new PortalType(casted) `<br>实现调用 ` PortalType.cast(portal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L51) |
| ` public static PortalType assume(Portal portal) ` | 末尾返回 ` new PortalType(casted) `<br>实现调用 ` PortalType.cast(portal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L56) |
| ` public Component getPortalName() ` | 末尾返回 ` Util.<Block>cast(this.portal).getName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L69) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof PortalType type)) ` 成立时提前返回 ` false `<br>末尾返回 ` Objects.equals(this.getId(), type.getId()) `<br>实现调用 ` Objects.equals(this.getId(), type.getId()) `<br>实现调用 ` this.getId() `<br>实现调用 ` type.getId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L73) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hashCode(this.getId()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L79) |
| ` public ResourceLocation getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。<br>[调用处 PortalType.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L18) |
| ` public Portal getPortal() ` | 末尾返回 ` this.portal `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java#L18) |
