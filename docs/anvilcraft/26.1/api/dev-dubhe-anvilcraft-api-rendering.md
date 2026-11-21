# dev.dubhe.anvilcraft.api.rendering



## BlockStateModelRenderer

` public class BlockStateModelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BlockStateModelRenderer INSTANCE ` | 初值 ` new BlockStateModelRenderer() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelRenderer.java#L17) |
| ` @Nullable public WrappedBlockStateModel getModel(BlockStateModelTessellateState state) ` | 末尾返回 ` this.cache.get(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelRenderer.java#L38) |
| ` public BlockStateModelTessellateState prepare( StandaloneModelKey<BlockStateModel> key, boolean translucent, boolean lighting ) ` | 末尾返回 ` state `<br>分支 ` (translucent) ` 内调用 ` Sheets.translucentBlockSheet() `<br>分支 ` !(translucent) ` 内调用 ` Sheets.cutoutBlockSheet() `<br>实现调用 ` this.cache.get(state) `<br>分支 ` (model == null) ` 内调用 ` this.cache.put(state, new WrappedBlockStateModel(state, this)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelRenderer.java#L43) |
| ` public ModelBlockRenderer getTessellator() ` | 末尾返回 ` this.tessellator `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelRenderer.java#L16) |
| ` public ModelBlockRenderer getTessellatorNoLighting() ` | 末尾返回 ` this.tessellatorNoLighting `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelRenderer.java#L16) |

## BlockStateModelTessellateState

` public record BlockStateModelTessellateState(StandaloneModelKey<BlockStateModel> key, RenderType renderType, boolean translucent, boolean lighting) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void submit( SubmitNodeCollector collector, PoseStack poseStack, int overlayCoords, int packedLight, int tint ) ` | 实现调用 ` BlockStateModelRenderer.INSTANCE.getModel(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L16) |
| ` public BlockStateModelTessellateState(StandaloneModelKey<BlockStateModel> key, RenderType renderType, boolean translucent, boolean lighting) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L9) |
| ` public StandaloneModelKey<BlockStateModel> key() ` | 读取 record 分量 ` key ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L10) |
| ` public RenderType renderType() ` | 读取 record 分量 ` renderType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L11) |
| ` public boolean translucent() ` | 读取 record 分量 ` translucent ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L12) |
| ` public boolean lighting() ` | 读取 record 分量 ` lighting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelTessellateState.java#L9) |

## FullBrightNoOpLighter

` public class FullBrightNoOpLighter extends BlockModelLighter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullBrightNoOpLighter.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void prepareQuadAmbientOcclusion( BlockAndTintGetter level, BlockState state, BlockPos centerPosition, BakedQuad quad, QuadInstance outputInstance ) ` | 执行 ` outputInstance.setColor(-1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullBrightNoOpLighter.java#L12) |
| ` @Override public void prepareQuadFlat( BlockAndTintGetter level, BlockState state, BlockPos pos, int lightCoords, BakedQuad quad, QuadInstance outputInstance ) ` | 执行 ` outputInstance.setColor(-1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullBrightNoOpLighter.java#L33) |
| ` @Override public int getLightCoords(BlockState state, BlockAndTintGetter level, BlockPos relativePos) ` | 末尾返回 ` 15728880 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullBrightNoOpLighter.java#L45) |
| ` public FullBrightNoOpLighter() ` | Java 提供的无参构造器。<br>[调用处 BlockStateModelRenderer.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelRenderer.java#L35) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/FullBrightNoOpLighter.java#L10) |

## WrappedBlockStateModel

` public class WrappedBlockStateModel extends Model<BlockStateModelTessellateState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/WrappedBlockStateModel.java#L21)

类型注解 ` @NullMarked `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WrappedBlockStateModel(BlockStateModelTessellateState state, BlockStateModelRenderer renderer) ` | 实现调用 ` super( WrappedBlockStateModel.EMPTY, RenderTypes::entityCutout ) `<br>[调用处 BlockStateModelRenderer.prepare](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/BlockStateModelRenderer.java#L72) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/WrappedBlockStateModel.java#L28) |
| ` public void renderToBuffer( PoseStack poseStack, VertexConsumer buffer, int lightCoords, int overlayCoords, int color ) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` this.state.key() `<br>实现调用 ` this.renderer.getTessellatorNoLighting() `<br>实现调用 ` mc.getModelManager().getStandaloneModel(key) `<br>实现调用 ` mc.getModelManager() `<br>实现调用 ` Blocks.AIR.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/rendering/WrappedBlockStateModel.java#L37) |
