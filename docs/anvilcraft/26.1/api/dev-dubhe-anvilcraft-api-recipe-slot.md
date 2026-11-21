# dev.dubhe.anvilcraft.api.recipe.slot



## RecipeInputSlot

` public class RecipeInputSlot implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<RecipeInputSlot> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group(Codec.STRING.fieldOf("input").forGetter(RecipeInputSlot::getSerializedName)).apply(ins, RecipeInputSlot::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L16) |
| ` public static final StreamCodec<ByteBuf, RecipeInputSlot> STREAM_CODEC ` | 初值 ` StreamCodec.composite(ByteBufCodecs.STRING_UTF8, RecipeInputSlot::getSerializedName, RecipeInputSlot::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L21) |
| ` public RecipeInputSlot(String serializedName) ` | 执行 ` this.serializedName = serializedName `<br>[调用处 RecipeInputSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L33) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L28) |
| ` public static final RecipeInputSlot TEMPLATE ` | 初值 ` new RecipeInputSlot("template") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L33) |
| ` public static final RecipeInputSlot MATERIAL ` | 初值 ` new RecipeInputSlot("material") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L34) |
| ` public static RecipeInputSlot input(int index) ` | 末尾返回 ` new RecipeInputSlot("input." + index) `<br>[调用处 ItemEnchantmentsData.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/data/ItemEnchantmentsData.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L36) |
| ` public String getSerializedName() ` | 末尾返回 ` this.serializedName `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L13) |
| ` @Override public boolean equals(final Object o) ` | ` (o == this) ` 成立时提前返回 ` true `<br>` (!(o instanceof RecipeInputSlot)) ` 成立时提前返回 ` false `<br>` (!other.canEqual((Object) this)) ` 成立时提前返回 ` false `<br>` (this$serializedName == null ? other$serializedName != null : !this$serializedName.equals(other$serializedName)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>实现调用 ` other.canEqual((Object) this) `<br>实现调用 ` this.getSerializedName() `<br>实现调用 ` other.getSerializedName() `<br>实现调用 ` this$serializedName.equals(other$serializedName) `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L13) |
| ` @Override public int hashCode() ` | 末尾返回 ` result `<br>实现调用 ` this.getSerializedName() `<br>实现调用 ` $serializedName.hashCode() `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/slot/RecipeInputSlot.java#L13) |
