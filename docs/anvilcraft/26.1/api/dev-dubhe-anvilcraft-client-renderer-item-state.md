# dev.dubhe.anvilcraft.client.renderer.item.state



## FluidTankItemRenderState

` public class FluidTankItemRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17)

物品形态储罐渲染所需的流体内容

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("deprecation") public static final RenderType FLUID_RENDER_TYPE ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L20) |
| ` @Nullable public FluidResource getResource() ` | 末尾返回 ` this.resource `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |
| ` public float getFill() ` | 末尾返回 ` this.fill `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |
| ` public int getAmount() ` | 末尾返回 ` this.amount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |
| ` public List<LargeFluidTankRenderUtil.Layer> getLayers() ` | 末尾返回 ` this.layers `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |
| ` public void setResource(@Nullable final FluidResource resource) ` | 执行 ` this.resource = resource `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |
| ` public void setFill(final float fill) ` | 执行 ` this.fill = fill `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |
| ` public void setAmount(final int amount) ` | 执行 ` this.amount = amount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |
| ` public void setLayers(final List<LargeFluidTankRenderUtil.Layer> layers) ` | 执行 ` this.layers = layers `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |
| ` public FluidTankItemRenderState() ` | Java 提供的无参构造器。<br>[调用处 CreativeFluidTankItemRenderer.extractArgument](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L30) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/FluidTankItemRenderState.java#L17) |

## SpectralRenderState

` public class SpectralRenderState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/SpectralRenderState.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpectralRenderState(ItemStack stack, ItemModelResolver resolver) ` | 实现调用 ` resolver.updateForTopItem(this.ammo, stack, ItemDisplayContext.GROUND, null, null, 0) `<br>实现调用 ` ((ItemStackRenderStateAccessor) this.ammo).anvilcraft$getLayers() `<br>实现调用 ` layer.setItemTransform(ItemTransform.NO_TRANSFORM) `<br>[调用处 SpectralSlingshotRenderer.extractArgument](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L32) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/SpectralRenderState.java#L15) |
| ` public ItemStackRenderState getAmmo() ` | 末尾返回 ` this.ammo `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/state/SpectralRenderState.java#L11) |
