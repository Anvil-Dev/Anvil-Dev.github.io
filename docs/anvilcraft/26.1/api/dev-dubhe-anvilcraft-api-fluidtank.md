# dev.dubhe.anvilcraft.api.fluidtank



## CreativeFluidHandler

` public class CreativeFluidHandler extends FluidStacksResourceHandler implements GasDisplayFillProvider, InfiniteFluidSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L18)

创造模式流体内核：无限存储/供给指定流体。 insert 接受并丢弃流体，不改变玩家配置的流体种类； extract 永远返回请求量（无限供给已设定的流体）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeFluidHandler() ` | 执行 ` super(NonNullList.of(FluidStack.EMPTY, FluidStack.EMPTY), Integer.MAX_VALUE) `<br>[调用处 FluidTankItemTooltip.readCreativeTank](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/FluidTankItemTooltip.java#L107) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L20) |
| ` @Override public List<FluidStack> getInfiniteFluids() ` | 末尾返回 ` resource.isEmpty() ? List.of() : List.of(resource.toStack(1)) `<br>实现调用 ` this.getResource(0) `<br>实现调用 ` resource.isEmpty() `<br>实现调用 ` List.of() `<br>实现调用 ` List.of(resource.toStack(1)) `<br>实现调用 ` resource.toStack(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L24) |
| ` @Override public float gasDisplayFill(FluidStack gas) ` | 末尾返回 ` !this.getResource(0).isEmpty() && this.getResource(0).equals(FluidResource.of(gas)) ? 1 : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L30) |
| ` public List<FluidStack> getStacks() ` | 末尾返回 ` this.copyToList().stream().map(FluidStack::copy).toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L35) |
| ` public void replaceStacks(List<FluidStack> stacks) ` | 实现调用 ` NonNullList.withSize(this.size(), FluidStack.EMPTY) `<br>实现调用 ` this.size() `<br>实现调用 ` copied.size() `<br>实现调用 ` stacks.size() `<br>实现调用 ` copied.set(i, stacks.get(i).copy()) `<br>实现调用 ` stacks.get(i).copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L39) |
| ` @Override public int insert(FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` resource.isEmpty() ? 0 : Math.max(0, amount) `<br>[调用处 CreativeFluidHandler.insert](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L47) |
| ` @Override public int insert(int index, FluidResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` this.insert(resource, amount, transaction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L52) |
| ` @Override public int extract(int index, FluidResource resource, int amount, TransactionContext transaction) ` | ` (existing.isEmpty()) ` 成立时提前返回 ` 0 `<br>` (!FluidResource.of(existing).equals(resource)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` amount `<br>实现调用 ` this.stacks.get(index) `<br>实现调用 ` existing.isEmpty() `<br>实现调用 ` FluidResource.of(existing).equals(resource) `<br>实现调用 ` FluidResource.of(existing) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L57) |
| ` @Override public long getAmountAsLong(int index) ` | 末尾返回 ` this.getResource(index).isEmpty() ? 0 : this.capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/fluidtank/CreativeFluidHandler.java#L65) |
