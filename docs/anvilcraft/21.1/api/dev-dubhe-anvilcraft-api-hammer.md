# dev.dubhe.anvilcraft.api.hammer



## HammerManager

` public class HammerManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java#L10)

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerChange(Supplier<Block> block, IHammerChangeable changeable) ` | 执行 ` HammerManager.INIT_CHANGE.put(block, changeable) `<br>[调用处 ModHammerInits.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModHammerInits.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java#L15) |
| ` public static IHammerChangeable getChange(Block block) ` | 获取方块修改方法实现<br>参数 ` block ` 方块<br>返回 方块修改方法实现<br>` (block instanceof IHammerChangeable changeable) ` 成立时提前返回 ` changeable `<br>末尾返回 ` HammerManager.CHANGE.getOrDefault( block, block.defaultBlockState().is(ModBlockTags.HAMMER_CHANGEABLE) ? HammerRotateBehavior.DEFAULT : HammerRotateBehavior.EMPTY ) `<br>实现调用 ` block.defaultBlockState().is(ModBlockTags.HAMMER_CHANGEABLE) `<br>实现调用 ` block.defaultBlockState() `<br>[调用处 AnvilHammerItem.useBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/AnvilHammerItem.java#L286) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java#L25) |
| ` public static void register() ` | 注册铁砧锤处理器<br>实现调用 ` INIT_CHANGE.entrySet() `<br>实现调用 ` HammerManager.CHANGE.put(entry.getKey().get(), entry.getValue()) `<br>实现调用 ` entry.getKey().get() `<br>实现调用 ` entry.getKey() `<br>实现调用 ` entry.getValue() `<br>[调用处 ServerLifecycleEventListener.onServerStarted](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java#L37) |
| ` public HammerManager() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerManager.java#L10) |

## HammerRotateBehavior

` public interface HammerRotateBehavior extends IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java#L16)

可被锤子改变的方块

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` DirectionProperty FACING_HOPPER ` | 初值 ` BlockStateProperties.FACING_HOPPER ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java#L18) |
| ` DirectionProperty FACING ` | 初值 ` BlockStateProperties.FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java#L19) |
| ` DirectionProperty HORIZONTAL_FACING ` | 初值 ` BlockStateProperties.HORIZONTAL_FACING ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java#L20) |
| ` HammerRotateBehavior DEFAULT ` | 初值 ` new HammerRotateBehavior() { } ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java#L21) |
| ` HammerRotateBehavior EMPTY ` | 初值 ` new HammerRotateBehavior() { public boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) { return false; } } ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java#L23) |
| ` @Override default boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 末尾返回 ` true `<br>实现调用 ` level.getBlockState(blockPos) `<br>实现调用 ` state.hasProperty(FACING) `<br>分支 ` (state.hasProperty(FACING)) ` 内调用 ` HammerRotateBehavior.rotate(state) `<br>分支 ` !(state.hasProperty(FACING)) ` 内调用 ` state.hasProperty(FACING_HOPPER) `<br>分支 ` (state.hasProperty(FACING_HOPPER)) ` 内调用 ` HammerRotateBehavior.hopperRotate(state) `<br>分支 ` !(state.hasProperty(FACING_HOPPER)) ` 内调用 ` state.hasProperty(HORIZONTAL_FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java#L55) |
| ` @Override default Property<?> getChangeableProperty(BlockState state) ` | ` (state.hasProperty(FACING)) ` 成立时提前返回 ` FACING `<br>末尾返回 ` null `<br>实现调用 ` state.hasProperty(FACING) `<br>分支 ` !(state.hasProperty(FACING)) ` 内调用 ` state.hasProperty(FACING_HOPPER) `<br>分支 ` !(state.hasProperty(FACING_HOPPER)) ` 内调用 ` state.hasProperty(HORIZONTAL_FACING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/HammerRotateBehavior.java#L73) |

## IHammerChangeable

` public interface IHammerChangeable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerChangeable.java#L14)

可被锤子改变的

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean change(Player player, BlockPos blockPos, Level level, ItemStack anvilHammer) ` | 改变状态<br>参数 ` player ` 玩家<br>参数 ` blockPos ` 坐标<br>参数 ` level ` 世界<br>参数 ` anvilHammer ` 铁砧锤物品<br>返回 是否改变成功 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerChangeable.java#L24) |
| ` default boolean checkBlockState(BlockState blockState) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerChangeable.java#L26) |
| ` @Nullable Property<?> getChangeableProperty(BlockState blockState) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerChangeable.java#L30) |

## IHammerRemovable

` public interface IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHammerRemovable.java#L6)

可被锤子移除的


## IHasHammerEffect

` public interface IHasHammerEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean shouldRender() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java#L8) |
| ` boolean shouldSkipRebuildBlock() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java#L10) |
| ` BlockPos renderingBlockPos() ` | [调用处 IHasHammerEffect.hiddenBlockPos](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java#L12) |
| ` default BlockPos hiddenBlockPos() ` | 末尾返回 ` this.renderingBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java#L14) |
| ` BlockState renderingBlockState() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java#L18) |
| ` RenderType renderType() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/hammer/IHasHammerEffect.java#L20) |
