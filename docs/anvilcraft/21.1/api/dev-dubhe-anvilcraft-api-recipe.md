# dev.dubhe.anvilcraft.api.recipe



## CauldronProcessing

` public final class CauldronProcessing `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java#L24)

炼药锅加工类别与有效加工方块的注册入口，供配方匹配和大锅选取加工位置共用。 附属模组可向已有类别追加方块，也可注册自有类别并通过配方条件引用。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation FAST_COOKING ` | 初值 ` AnvilCraft.of("fast_cooking") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java#L25) |
| ` public static final ResourceLocation SUPER_HEATING ` | 初值 ` AnvilCraft.of("super_heating") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java#L26) |
| ` public static final ResourceLocation TIME_WARP ` | 初值 ` AnvilCraft.of("time_warp") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java#L27) |
| ` public static final ResourceLocation NEUTRON_IRRADIATION ` | 初值 ` AnvilCraft.of("neutron_irradiation") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java#L28) |
| ` public static void register(ResourceLocation category, Predicate<BlockState> active) ` | 在公共初始化阶段为加工类别追加方块条件；客户端与服务端必须注册相同规则。 条件仅负责判断方块是否可工作，原料、流体和产物仍由配方处理。<br>实现调用 ` Objects.requireNonNull(category) `<br>实现调用 ` Objects.requireNonNull(active) `<br>实现调用 ` PROCESSORS.computeIfAbsent(category, key -> new CopyOnWriteArrayList<>()).add(active) `<br>实现调用 ` PROCESSORS.computeIfAbsent(category, key -> new CopyOnWriteArrayList<>()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java#L48) |
| ` public static boolean matches(ResourceLocation category, BlockState state) ` | 判断方块是否能执行指定类别的配方，未注册的类别不匹配。<br>末尾返回 ` PROCESSORS.getOrDefault(category, List.of()).stream().anyMatch(active -> active.test(state)) `<br>[调用处 LargeCauldronBlockEntity.isActiveHeatingHelper](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L685) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java#L55) |
| ` public static boolean isActive(BlockState state) ` | 判断方块能否作为大锅的加工位置。<br>末尾返回 ` PROCESSORS.values().stream().flatMap(List::stream).anyMatch(active -> active.test(state)) `<br>[调用处 LargeCauldronBlockEntity.isActiveRecipeHelper](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L1268) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java#L60) |
