# dev.dubhe.anvilcraft.fluid



## CementFluid

` public abstract class CementFluid extends BaseFlowingFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L39)

水泥流体在世界中的行为。 只要水泥——源头或流动部分都算——判断出自己可以向下淌，就把附近最近的源头挪到该格 下方，于是源头顺着建筑逐格下沉，而不是像原版那样留在原处、只把流动部分送下去。 下沉由计划刻驱动，与随机刻无关； 下不去的源头被随机刻选中时，会按配置的凝固概率连同紧贴它的两层 流动水泥一起凝固成对应颜色的原版混凝土； 接触糖块的源头不凝固；接触粘液块的源头不下移；接触蜂蜜块的源头两者都不。


## CementFluid.Flowing

` public static class Flowing extends CementFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L344)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Flowing(Properties properties, Color color) ` | 实现调用 ` super(properties, color) `<br>实现调用 ` this.registerDefaultState(this.getStateDefinition().any().setValue(LEVEL, 7)) `<br>实现调用 ` this.getStateDefinition().any().setValue(LEVEL, 7) `<br>[调用处 ModFluids.registerFlowingCement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L233) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L345) |
| ` @Override public int getAmount(FluidState state) ` | 末尾返回 ` state.getValue(LEVEL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L356) |
| ` @Override public boolean isSource(FluidState state) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L361) |

## CementFluid.Source

` public static class Source extends CementFluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L317)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Source(Properties properties, Color color) ` | 执行 ` super(properties, color) `<br>[调用处 ModFluids.registerSourceCement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L218) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L318) |
| ` @Override public int getAmount(FluidState state) ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L333) |
| ` @Override public boolean isSource(FluidState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/CementFluid.java#L338) |

## GasFluid

` public class GasFluid extends Fluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GasFluid(FluidType type, Supplier<? extends Item> bucket) ` | [调用处 ModFluids](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L124) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L22) |
| ` @Override public Item getBucket() ` | 末尾返回 ` this.bucket.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L27) |
| ` @Override public int getTickDelay(LevelReader level) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L42) |
| ` @Override public float getHeight(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L52) |
| ` @Override public float getOwnHeight(FluidState state) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L57) |
| ` @Override public boolean isSource(FluidState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L67) |
| ` @Override public int getAmount(FluidState state) ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L72) |
| ` @Override public VoxelShape getShape(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` Blocks.AIR.defaultBlockState().getShape(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L77) |
| ` @Override public FluidType getFluidType() ` | 末尾返回 ` this.type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/GasFluid.java#L82) |

## HoneyFluid

` public class HoneyFluid extends Fluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L21)

蜂蜜流体——不可放置，仅存在于储罐/管道中。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidType TYPE ` | 字段类型为 ` FluidType ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L23) |
| ` @Override public Item getBucket() ` | 末尾返回 ` Items.AIR ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L30) |
| ` @Override public int getTickDelay(LevelReader level) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L45) |
| ` @Override public float getHeight(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L55) |
| ` @Override public float getOwnHeight(FluidState state) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L60) |
| ` @Override public boolean isSource(FluidState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L70) |
| ` @Override public int getAmount(FluidState state) ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L75) |
| ` @Override public VoxelShape getShape(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` Blocks.AIR.defaultBlockState().getShape(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L80) |
| ` @Override public FluidType getFluidType() ` | 末尾返回 ` ModFluids.HONEY_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L85) |
| ` public HoneyFluid() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/HoneyFluid.java#L21) |

## LiquidEnchantmentFluid

` public class LiquidEnchantmentFluid extends Fluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L23)

液态魔咒只能存在于流体容器中，无法放置到世界或装入桶中。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidType TYPE ` | 字段类型为 ` FluidType ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L24) |
| ` @Override public Item getBucket() ` | 末尾返回 ` Items.AIR ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L41) |
| ` @Override public int getTickDelay(LevelReader level) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L62) |
| ` @Override public float getHeight(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L72) |
| ` @Override public float getOwnHeight(FluidState state) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L77) |
| ` @Override public boolean isSource(FluidState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L87) |
| ` @Override public int getAmount(FluidState state) ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L92) |
| ` @Override public VoxelShape getShape(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` Blocks.AIR.defaultBlockState().getShape(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L97) |
| ` @Override public FluidType getFluidType() ` | 末尾返回 ` LiquidEnchantmentFluid.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L102) |
| ` public LiquidEnchantmentFluid() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/LiquidEnchantmentFluid.java#L23) |

## PowderSnowFluid

` public class PowderSnowFluid extends Fluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Item getBucket() ` | 末尾返回 ` Items.POWDER_SNOW_BUCKET ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L19) |
| ` @Override public int getTickDelay(LevelReader level) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L34) |
| ` @Override public float getHeight(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L45) |
| ` @Override public float getOwnHeight(FluidState state) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L50) |
| ` @Override public boolean isSource(FluidState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L60) |
| ` @Override public int getAmount(FluidState state) ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L65) |
| ` @Override public VoxelShape getShape(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` Blocks.POWDER_SNOW.defaultBlockState().getShape(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L70) |
| ` @Override public FluidType getFluidType() ` | 末尾返回 ` ModFluids.POWDER_SNOW_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L75) |
| ` public PowderSnowFluid() ` | Java 提供的无参构造器。<br>[调用处 ModFluids.registerVanilla](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L366) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PowderSnowFluid.java#L18) |

## PrimordialMatterFluid

` public class PrimordialMatterFluid extends Fluid `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L20)

原始物质流体——不可放置，可通过桶在储罐/管道间转移。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidType TYPE ` | 字段类型为 ` FluidType ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L22) |
| ` @Override public Item getBucket() ` | 末尾返回 ` ModItems.PRIMORDIAL_MATTER_BUCKET.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L29) |
| ` @Override public int getTickDelay(LevelReader level) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L44) |
| ` @Override public float getHeight(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L54) |
| ` @Override public float getOwnHeight(FluidState state) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L59) |
| ` @Override public boolean isSource(FluidState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L69) |
| ` @Override public int getAmount(FluidState state) ` | 末尾返回 ` 8 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L74) |
| ` @Override public VoxelShape getShape(FluidState state, BlockGetter level, BlockPos pos) ` | 末尾返回 ` Blocks.AIR.defaultBlockState().getShape(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L79) |
| ` @Override public FluidType getFluidType() ` | 末尾返回 ` TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L84) |
| ` public PrimordialMatterFluid() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/PrimordialMatterFluid.java#L20) |

## WaterMovementFluidType

` public class WaterMovementFluidType extends FluidType `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/WaterMovementFluidType.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WaterMovementFluidType(Properties properties) ` | 执行 ` super(properties) `<br>[调用处 ModFluids](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L53) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/WaterMovementFluidType.java#L9) |
| ` @Override public boolean move(LivingEntity entity, Vec3 movementVector, double gravity) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/fluid/WaterMovementFluidType.java#L13) |
