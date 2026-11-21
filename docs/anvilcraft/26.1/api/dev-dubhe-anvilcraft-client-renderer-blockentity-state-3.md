# dev.dubhe.anvilcraft.client.renderer.blockentity.state（ControlValveRenderState 至 LayeredFluidTankRenderState）



## ControlValveRenderState

` public class ControlValveRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public BlockModelRenderState getHandwheel() ` | 末尾返回 ` this.handwheel `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public Direction getFacing() ` | 末尾返回 ` this.facing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public Direction.Axis getAxis() ` | 末尾返回 ` this.axis `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public int getMaxRate() ` | 末尾返回 ` this.maxRate `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` @Nullable public FluidResource getFilterResource() ` | 末尾返回 ` this.filterResource `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public void setHandwheel(@Nullable final BlockModelRenderState handwheel) ` | 执行 ` this.handwheel = handwheel `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public void setFacing(final Direction facing) ` | 执行 ` this.facing = facing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public void setAxis(final Direction.Axis axis) ` | 执行 ` this.axis = axis `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public void setMaxRate(final int maxRate) ` | 执行 ` this.maxRate = maxRate `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public void setFilterResource(@Nullable final FluidResource filterResource) ` | 执行 ` this.filterResource = filterResource `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |
| ` public ControlValveRenderState() ` | Java 提供的无参构造器。<br>[调用处 ControlValveBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/ControlValveBlockEntityRenderer.java#L67) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/ControlValveRenderState.java#L11) |

## CorruptedBeaconRenderState

` public class CorruptedBeaconRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CorruptedBeaconRenderState.java#L11)

腐化信标 in-world 渲染状态。extract 阶段捕获光束是否点亮及其顶端高度。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public List<BakedQuad> getGlassQuads() ` | 末尾返回 ` this.glassQuads `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CorruptedBeaconRenderState.java#L11) |
| ` public boolean isLit() ` | 末尾返回 ` this.lit `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CorruptedBeaconRenderState.java#L11) |
| ` public float getBeamHeight() ` | 末尾返回 ` this.beamHeight `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CorruptedBeaconRenderState.java#L11) |
| ` public void setGlassQuads(final List<BakedQuad> glassQuads) ` | 执行 ` this.glassQuads = glassQuads `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CorruptedBeaconRenderState.java#L11) |
| ` public void setLit(final boolean lit) ` | 执行 ` this.lit = lit `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CorruptedBeaconRenderState.java#L11) |
| ` public void setBeamHeight(final float beamHeight) ` | 执行 ` this.beamHeight = beamHeight `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CorruptedBeaconRenderState.java#L11) |
| ` public CorruptedBeaconRenderState() ` | Java 提供的无参构造器。<br>[调用处 CorruptedBeaconRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CorruptedBeaconRenderer.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CorruptedBeaconRenderState.java#L11) |

## CreativeCrateRenderState

` public class CreativeCrateRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CreativeCrateRenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public ItemClusterRenderState getItem() ` | 末尾返回 ` this.item `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CreativeCrateRenderState.java#L9) |
| ` public void setItem(@Nullable final ItemClusterRenderState item) ` | 执行 ` this.item = item `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CreativeCrateRenderState.java#L9) |
| ` public CreativeCrateRenderState() ` | Java 提供的无参构造器。<br>[调用处 CreativeCrateRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeCrateRenderer.java#L29) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/CreativeCrateRenderState.java#L9) |

## DrainRenderState

` public class DrainRenderState extends FluidHandlerRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/DrainRenderState.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public float getColumnMinY() ` | 末尾返回 ` this.columnMinY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/DrainRenderState.java#L6) |
| ` public void setColumnMinY(final float columnMinY) ` | 执行 ` this.columnMinY = columnMinY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/DrainRenderState.java#L6) |
| ` public DrainRenderState() ` | Java 提供的无参构造器。<br>[调用处 DrainBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/DrainBlockEntityRenderer.java#L29) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/DrainRenderState.java#L6) |

## FishTankRenderState

` public class FishTankRenderState extends FluidHandlerRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public List<Pair<ItemStack, ItemClusterRenderState>> getStacks() ` | 末尾返回 ` this.stacks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public List<EntityRenderState> getFishes() ` | 末尾返回 ` this.fishes `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public boolean isIgnited() ` | 末尾返回 ` this.ignited `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` @Nullable public BlockStateModelTessellateState getFire() ` | 末尾返回 ` this.fire `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public long getSeed() ` | 末尾返回 ` this.seed `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public float getTicks() ` | 末尾返回 ` this.ticks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public int getItemTicks() ` | 末尾返回 ` this.itemTicks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public List<FishTankRenderHooks.AfterRender> getAfterRender() ` | 末尾返回 ` this.afterRender `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public void setIgnited(final boolean ignited) ` | 执行 ` this.ignited = ignited `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public void setFire(@Nullable final BlockStateModelTessellateState fire) ` | 执行 ` this.fire = fire `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public void setSeed(final long seed) ` | 执行 ` this.seed = seed `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public void setTicks(final float ticks) ` | 执行 ` this.ticks = ticks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public void setItemTicks(final int itemTicks) ` | 执行 ` this.itemTicks = itemTicks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public void setAfterRender(final List<FishTankRenderHooks.AfterRender> afterRender) ` | 执行 ` this.afterRender = afterRender `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |
| ` public FishTankRenderState() ` | Java 提供的无参构造器。<br>[调用处 FishTankRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FishTankRenderState.java#L16) |

## FluidHandlerRenderState

` public class FluidHandlerRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void setTankW(float tankW) ` | 执行 ` this.setTankW(0, 0, 0, 1, 1, 1, tankW) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L22) |
| ` public void setTankW(int minX, int minY, int minZ, int maxX, int maxY, int maxZ, float tankW) ` | [调用处 FluidHandlerRenderState.setTankW](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L26) |
| ` @Nullable public FluidResource getResource() ` | 末尾返回 ` this.resource `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public float getFill() ` | 末尾返回 ` this.fill `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public int getAmount() ` | 末尾返回 ` this.amount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public float getMinX() ` | 末尾返回 ` this.minX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public float getMinY() ` | 末尾返回 ` this.minY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public float getMinZ() ` | 末尾返回 ` this.minZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public float getMaxX() ` | 末尾返回 ` this.maxX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public float getMaxY() ` | 末尾返回 ` this.maxY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public float getMaxZ() ` | 末尾返回 ` this.maxZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setResource(@Nullable final FluidResource resource) ` | 执行 ` this.resource = resource `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setFill(final float fill) ` | 执行 ` this.fill = fill `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setAmount(final int amount) ` | 执行 ` this.amount = amount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setMinX(final float minX) ` | 执行 ` this.minX = minX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setMinY(final float minY) ` | 执行 ` this.minY = minY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setMinZ(final float minZ) ` | 执行 ` this.minZ = minZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setMaxX(final float maxX) ` | 执行 ` this.maxX = maxX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setMaxY(final float maxY) ` | 执行 ` this.maxY = maxY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public void setMaxZ(final float maxZ) ` | 执行 ` this.maxZ = maxZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |
| ` public FluidHandlerRenderState() ` | Java 提供的无参构造器。<br>[调用处 CreativeFluidTankRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CreativeFluidTankRenderer.java#L24) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/FluidHandlerRenderState.java#L9) |

## GlassPipeRenderState

` public class GlassPipeRenderState extends PipeCheckValveRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidResource fluid ` | 初值 ` FluidResource.EMPTY ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L13) |
| ` public BlockState blockState ` | 初值 ` Blocks.AIR.defaultBlockState() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L14) |
| ` public Set<Direction> directions ` | 初值 ` Set.of() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L15) |
| ` public float alpha ` | 初值 ` 1.0F ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L16) |
| ` public int color ` | 初值 ` -1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L17) |
| ` public boolean opaque ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L18) |
| ` @Nullable public TextureAtlasSprite sprite ` | 字段类型为 ` TextureAtlasSprite ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L19) |
| ` public GlassPipeRenderState() ` | Java 提供的无参构造器。<br>[调用处 GlassPipeBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/GlassPipeBlockEntityRenderer.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/GlassPipeRenderState.java#L12) |

## HasMobBlockRenderState

` public class HasMobBlockRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HasMobBlockRenderState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public EntityRenderState getMob() ` | 末尾返回 ` this.mob `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HasMobBlockRenderState.java#L9) |
| ` public void setMob(@Nullable final EntityRenderState mob) ` | 执行 ` this.mob = mob `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HasMobBlockRenderState.java#L9) |
| ` public HasMobBlockRenderState() ` | Java 提供的无参构造器。<br>[调用处 HasMobBlockRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HasMobBlockRenderer.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HasMobBlockRenderState.java#L9) |

## HeliostatsRenderState

` public class HeliostatsRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HeliostatsRenderState.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void addRotation(Quaternionf rotation) ` | 执行 ` this.rotation.add(rotation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HeliostatsRenderState.java#L18) |
| ` public BlockModelRenderState getHead() ` | 末尾返回 ` this.head `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HeliostatsRenderState.java#L12) |
| ` public List<Quaternionf> getRotation() ` | 末尾返回 ` this.rotation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HeliostatsRenderState.java#L12) |
| ` public void setHead(final BlockModelRenderState head) ` | 执行 ` this.head = head `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HeliostatsRenderState.java#L12) |
| ` public HeliostatsRenderState() ` | Java 提供的无参构造器。<br>[调用处 HeliostatsRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HeliostatsRenderer.java#L44) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HeliostatsRenderState.java#L12) |

## HypercubeRenderState

` public class HypercubeRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HypercubeRenderState.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockModelRenderState model ` | 初值 ` new BlockModelRenderState() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HypercubeRenderState.java#L7) |
| ` public HypercubeRenderState() ` | Java 提供的无参构造器。<br>[调用处 HypercubeBERenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L29) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/HypercubeRenderState.java#L6) |

## IncandescentBlockRenderState

` public class IncandescentBlockRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/IncandescentBlockRenderState.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockModelRenderState getModel() ` | 末尾返回 ` this.model `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/IncandescentBlockRenderState.java#L8) |
| ` public void setModel(final BlockModelRenderState model) ` | 执行 ` this.model = model `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/IncandescentBlockRenderState.java#L8) |
| ` public IncandescentBlockRenderState() ` | Java 提供的无参构造器。<br>[调用处 IncandescentBlockRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/IncandescentBlockRenderer.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/IncandescentBlockRenderState.java#L8) |

## LargeCauldronRenderState

` public class LargeCauldronRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public List<ItemRenderState> getItems() ` | 末尾返回 ` this.items `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |
| ` public List<FluidRenderLayers.Layer> getFluids() ` | 末尾返回 ` this.fluids `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |
| ` @Nullable public BlockStateModelTessellateState getFire() ` | 末尾返回 ` this.fire `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |
| ` public float getFill() ` | 末尾返回 ` this.fill `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |
| ` public List<LargeCauldronRenderHooks.AfterRender> getAfterRender() ` | 末尾返回 ` this.afterRender `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |
| ` public void setFire(@Nullable final BlockStateModelTessellateState fire) ` | 执行 ` this.fire = fire `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |
| ` public void setFill(final float fill) ` | 执行 ` this.fill = fill `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |
| ` public void setAfterRender(final List<LargeCauldronRenderHooks.AfterRender> afterRender) ` | 执行 ` this.afterRender = afterRender `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |
| ` public LargeCauldronRenderState() ` | Java 提供的无参构造器。<br>[调用处 LargeCauldronBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeCauldronBlockEntityRenderer.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L15) |

## LargeCauldronRenderState.ItemRenderState

` public record ItemRenderState(ItemClusterRenderState item, float x, float y, float z, float rotation) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemRenderState(ItemClusterRenderState item, float x, float y, float z, float rotation) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L24) |
| ` public ItemClusterRenderState item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L25) |
| ` public float x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L26) |
| ` public float y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L27) |
| ` public float z() ` | 读取 record 分量 ` z ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L28) |
| ` public float rotation() ` | 读取 record 分量 ` rotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L29) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LargeCauldronRenderState.java#L24) |

## LaserRenderState

` public class LaserRenderState extends CachedBlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier LASER_TEXTURE ` | 初值 ` AnvilCraft.of("laser/beam") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L15) |
| ` public static final Identifier SOLID_TEXTURE ` | 初值 ` AnvilCraft.of("laser/solid") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L16) |
| ` @Nullable public BaseLaserBlockEntity blockEntity ` | 字段类型为 ` BaseLaserBlockEntity ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L18) |
| ` public float length ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L19) |
| ` public float offset ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L20) |
| ` public int color ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L21) |
| ` public int coreColor ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L22) |
| ` public int laserLevel ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L23) |
| ` public Quaternionf rotation ` | 字段类型为 ` Quaternionf ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L24) |
| ` public TextureAtlasSprite laserAtlasSprite ` | 字段类型为 ` TextureAtlasSprite ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L25) |
| ` public TextureAtlasSprite solidAtlasSprite ` | 字段类型为 ` TextureAtlasSprite ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L26) |
| ` public LaserRenderState() ` | 实现调用 ` Minecraft.getInstance().getAtlasManager().getAtlasOrThrow(ModAtlasIds.LASER) `<br>实现调用 ` Minecraft.getInstance().getAtlasManager() `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 LaserBlockEntityRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LaserBlockEntityRenderer.java#L41) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L28) |
| ` public void extract(BaseLaserBlockEntity blockEntity) ` | 实现调用 ` blockEntity.getIrradiateBlockPos() `<br>实现调用 ` blockEntity .getIrradiateBlockPos() .getCenter() .distanceTo(blockEntity.getBlockPos().getCenter()) `<br>实现调用 ` blockEntity .getIrradiateBlockPos() .getCenter() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LaserRenderState.java#L35) |

## LayeredFluidTankRenderState

` public class LayeredFluidTankRenderState extends BlockEntityRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LayeredFluidTankRenderState.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public List<FluidRenderLayers.Layer> layers ` | 初值 ` List.of() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LayeredFluidTankRenderState.java#L9) |
| ` public LayeredFluidTankRenderState() ` | Java 提供的无参构造器。<br>[调用处 LargeFluidTankRenderer.createRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/LargeFluidTankRenderer.java#L40) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/state/LayeredFluidTankRenderState.java#L8) |
