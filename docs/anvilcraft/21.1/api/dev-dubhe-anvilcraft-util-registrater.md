# dev.dubhe.anvilcraft.util.registrater



## ModelProviderUtil

` public class ModelProviderUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/registrater/ModelProviderUtil.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void liquid(DataGenContext<Block, ? extends LiquidBlock> ctx, RegistrumBlockstateProvider provider) ` | 用于流体的BlockState生成器<br>执行 ` provider.simpleBlock(ctx.get(), provider.models().getBuilder(ctx.getName()).texture("particle", provider.modLoc("block/" + ctx.getName()))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/registrater/ModelProviderUtil.java#L21) |
| ` public static void bucketGassy(DataGenContext<Item, ? extends BucketItem> ctx, RegistrumItemModelProvider provider) ` | Used for gaseous fluid buckets; the fluid is rendered upside-down in the bucket.<br>实现调用 ` provider.withExistingParent(ctx.getName(), ResourceLocation.parse("neoforge:item/bucket_drip")) `<br>实现调用 ` ctx.getName() `<br>实现调用 ` ResourceLocation.parse("neoforge:item/bucket_drip") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/registrater/ModelProviderUtil.java#L31) |
| ` public static void bucket(DataGenContext<Item, ? extends BucketItem> ctx, RegistrumItemModelProvider provider) ` | 实现调用 ` provider.withExistingParent(ctx.getName(), ResourceLocation.parse("neoforge:item/bucket_drip")) `<br>实现调用 ` ctx.getName() `<br>实现调用 ` ResourceLocation.parse("neoforge:item/bucket_drip") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/registrater/ModelProviderUtil.java#L40) |

## PropertiesProviderUtil

` public class PropertiesProviderUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/registrater/PropertiesProviderUtil.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlockBehaviour.Properties confinedAnvilon(BlockBehaviour.Properties properties) ` | 实现调用 ` properties .lightLevel(it -> 15) .noOcclusion() .requiresCorrectToolForDrops() .strength(1.5F, 6.0F) `<br>实现调用 ` properties .lightLevel(it -> 15) .noOcclusion() .requiresCorrectToolForDrops() `<br>实现调用 ` properties .lightLevel(it -> 15) .noOcclusion() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/registrater/PropertiesProviderUtil.java#L7) |
| ` public PropertiesProviderUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/registrater/PropertiesProviderUtil.java#L6) |
