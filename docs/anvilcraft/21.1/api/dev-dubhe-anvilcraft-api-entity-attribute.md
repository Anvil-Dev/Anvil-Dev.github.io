# dev.dubhe.anvilcraft.api.entity.attribute



## EntityReachAttribute

` public class EntityReachAttribute `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/attribute/EntityReachAttribute.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Supplier<Multimap<Holder<Attribute>, AttributeModifier>> getRangeModifierSupplier( AttributeModifier modifier ) ` | 末尾返回 ` Suppliers.memoize(() -> ImmutableMultimap.of( Attributes.BLOCK_INTERACTION_RANGE, modifier, Attributes.ENTITY_INTERACTION_RANGE, modifier )) `<br>[调用处 CrabClawItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/attribute/EntityReachAttribute.java#L15) |
| ` public static Attribute getReachAttribute() ` | 末尾返回 ` Attributes.BLOCK_INTERACTION_RANGE.value() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/attribute/EntityReachAttribute.java#L24) |
| ` public EntityReachAttribute() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/attribute/EntityReachAttribute.java#L13) |
