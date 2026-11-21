# dev.dubhe.anvilcraft.api.fluidtank



## InfinityFluidTank

` public class InfinityFluidTank extends FluidTank implements GasDisplayFillProvider, InfiniteFluidSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/InfinityFluidTank.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InfinityFluidTank() ` | 执行 ` super(Integer.MAX_VALUE) `<br>[调用处 CreativeFluidTankBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeFluidTankBlockEntity.java#L23) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/InfinityFluidTank.java#L11) |
| ` @Override public int fill(FluidStack resource, FluidAction action) ` | 末尾返回 ` resource.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/InfinityFluidTank.java#L15) |
| ` @Override public FluidStack drain(int maxDrain, FluidAction action) ` | ` (maxDrain <= 0) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (!this.isEmpty()) ` 成立时提前返回 ` this.fluid.copyWithAmount(maxDrain) `<br>末尾返回 ` FluidStack.EMPTY `<br>实现调用 ` this.isEmpty() `<br>分支 ` (!this.isEmpty()) ` 内调用 ` this.fluid.copyWithAmount(maxDrain) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/InfinityFluidTank.java#L20) |
| ` @Override public FluidStack drain(FluidStack resource, FluidAction action) ` | ` (resource.isEmpty()) ` 成立时提前返回 ` FluidStack.EMPTY `<br>` (!this.isEmpty() && resource.is(this.fluid.getFluid())) ` 成立时提前返回 ` resource.copy() `<br>末尾返回 ` FluidStack.EMPTY `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` this.isEmpty() `<br>实现调用 ` resource.is(this.fluid.getFluid()) `<br>实现调用 ` this.fluid.getFluid() `<br>分支 ` (!this.isEmpty() && resource.is(this.fluid.getFluid())) ` 内调用 ` resource.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/InfinityFluidTank.java#L31) |
| ` @Override public List<FluidStack> getInfiniteFluids() ` | 创造流体储罐的渲染口径恒为满罐（见 CreativeFluidTankBlockEntityRenderer）， 而其容量报告为 Integer#MAX\_VALUE——若按"存量 / 容量"换算，管道内气体会 透明到看不见。故持有该气体时显示填充率恒为 1。<br>末尾返回 ` this.fluid.isEmpty() ? List.of() : List.of(this.fluid.copy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/InfinityFluidTank.java#L47) |
| ` @Override public float gasDisplayFill(FluidStack gas) ` | 末尾返回 ` !this.isEmpty() && FluidStack.isSameFluidSameComponents(this.fluid, gas) ? 1.0f : 0.0f ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/InfinityFluidTank.java#L52) |
