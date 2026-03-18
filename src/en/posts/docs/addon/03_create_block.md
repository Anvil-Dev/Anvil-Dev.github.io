# Registering Blocks

In AnvilCraft addon development, registering blocks is similar to registering items, but involves more properties and model settings.

## Open `init.AddonBlocks.java`, and you will see the following code:

```java
public static final BlockEntry<Block> EXAMPLE_BLOCK = REGISTRUM
    .block("example_block", Block::new)
    .simpleItem()
    .register();
```

This statement is an example of registering a block, where `example_block` is the ID of the block you are about to register, and `Block::new` is a reference to your block class constructor.

## This chapter will detail how to use `REGISTRUM.block()`

After using the `REGISTRUM.block()` method, you will get a `BlockBuilder` object that has a `.register()` method. Calling it returns a `BlockEntry`, and the corresponding block will be automatically registered at the appropriate time.

### `BlockBuilder.initialProperties()`

This method is used to set the initial properties of a block, based on a complete copy of an existing block:

```java
public static final BlockEntry<Block> EXAMPLE_BLOCK = REGISTRUM
    .block("example_block", Block::new)
    .initialProperties(() -> Blocks.IRON_BLOCK)
    .simpleItem()
    .register();
```

This example shows how to set initial properties for a registered block, inheriting from iron block properties.

### `BlockBuilder.properties()`

This method is used to modify specific properties of a block. It can be called multiple times to accumulate modifications:

```java
public static final BlockEntry<Block> EXAMPLE_BLOCK = REGISTRUM
    .block("example_block", Block::new)
    .initialProperties(() -> Blocks.STONE)
    .properties(p -> p.lightLevel(state -> 5).noOcclusion())
    .simpleItem()
    .register();
```

This example shows how to set the light level and no-occlusion properties for a block.

### `BlockBuilder.tag()`

This method is used to set tags for a block. It can be called multiple times to add multiple tags:

```java
public static final BlockEntry<Block> EXAMPLE_BLOCK = REGISTRUM
    .block("example_block", Block::new)
    .initialProperties(() -> Blocks.STONE)
    .tag(BlockTags.MINEABLE_WITH_PICKAXE, BlockTags.NEEDS_STONE_TOOL)
    .simpleItem()
    .register();
```

This example shows how to add a block to the "mineable with pickaxe" and "needs stone tool" tags.

### `BlockBuilder.blockstate()`

This method is used to set the blockstate and model for a block. By default, a simple `cube_all` model is automatically generated:

```java
public static final BlockEntry<Block> EXAMPLE_BLOCK = REGISTRUM
    .block("example_block", Block::new)
    .initialProperties(() -> Blocks.STONE)
    .blockstate((ctx, provider) -> provider.simpleBlock(ctx.getEntry()))
    .simpleItem()
    .register();
```

This example shows how to set a simple block model for a block.

### `BlockBuilder.item()`

This method is used to register a corresponding item for a block, returning an `ItemBuilder` for further configuration of item properties:

```java
public static final BlockEntry<Block> EXAMPLE_BLOCK = REGISTRUM
    .block("example_block", Block::new)
    .initialProperties(() -> Blocks.STONE)
    .blockstate((ctx, provider) -> provider.simpleBlock(ctx.getEntry()))
    .item()
    .properties(p -> p.rarity(Rarity.UNCOMMON))
    .build()
    .register();
```

This example shows how to register an item for a block and set item properties.

### `BlockBuilder.simpleItem()`

This is a convenience method for quickly registering a basic item for a block (equivalent to `item().build()`):

```java
public static final BlockEntry<Block> EXAMPLE_BLOCK = REGISTRUM
    .block("example_block", Block::new)
    .initialProperties(() -> Blocks.STONE)
    .blockstate((ctx, provider) -> provider.simpleBlock(ctx.getEntry()))
    .simpleItem()
    .register();
```

This example shows how to use `simpleItem()` to quickly register an item for a block.

### `BlockBuilder.recipe()`

This method is used to set the recipe for a block:

```java
public static final BlockEntry<Block> EXAMPLE_BLOCK = REGISTRUM
    .block("example_block", Block::new)
    .initialProperties(() -> Blocks.STONE)
    .blockstate((ctx, provider) -> provider.simpleBlock(ctx.getEntry()))
    .simpleItem()
    .recipe((ctx, provider) -> ShapedRecipeBuilder.shaped(RecipeCategory.BUILDING_BLOCKS, ctx.get(), 4)
        .pattern("XX")
        .pattern("XX")
        .define('X', Items.STONE)
        .unlockedBy("has_stone", RegistrumRecipeProvider.has(Items.STONE))
        .save(provider))
    .register();
```

This example shows how to add a shaped crafting recipe for a block.

## Custom Block Classes

In addition to using the vanilla Block class, you can also create custom block classes:

```java
public class CustomBlock extends Block {
    public CustomBlock(Properties properties) {
        super(properties);
    }

    @Override
    public void onPlace(BlockState state, Level level, BlockPos pos, BlockState oldState, boolean isMoving) {
        // Add custom logic
        super.onPlace(state, level, pos, oldState, isMoving);
    }
}
```

Then use it when registering:

```java
public static final BlockEntry<CustomBlock> CUSTOM_BLOCK = REGISTRUM
    .block("custom_block", CustomBlock::new)
    .initialProperties(() -> Blocks.STONE)
    .simpleItem()
    .register();
```

## Block Registration Best Practices

1. **Naming Conventions**
    * Use lowercase letters and underscores for block IDs
    * Keep naming consistent and descriptive

2. **Property Settings**
    * Always set appropriate initial properties
    * Add appropriate tags based on block functionality

3. **Models and Rendering**
    * Provide appropriate models for blocks
    * Consider block lighting and occlusion properties

4. **Recipe Design**
    * Provide reasonable crafting recipes for blocks
    * Ensure recipes are balanced and don't break game experience

5. **Timely Registration**
    * Ensure you call the `register()` method in the mod main class constructor
    * Example: `AddonBlocks.register();`

## Complete Example

Here is a complete custom block registration example:

```java
public static final BlockEntry<Block> RUBY_BLOCK = REGISTRUM
    .block("ruby_block", Block::new)
    .initialProperties(() -> Blocks.IRON_BLOCK)
    .properties(p -> p.lightLevel(state -> 3))
    .tag(BlockTags.MINEABLE_WITH_PICKAXE, BlockTags.BEACON_BASE_BLOCKS)
    .blockstate((ctx, provider) -> provider.simpleBlock(ctx.getEntry()))
    .simpleItem()
    .recipe((ctx, provider) -> ShapedRecipeBuilder.shaped(RecipeCategory.BUILDING_BLOCKS, ctx.get())
        .pattern("XXX")
        .pattern("XXX")
        .pattern("XXX")
        .define('X', ModItems.RUBY)
        .unlockedBy("has_ruby", RegistrumRecipeProvider.has(ModItems.RUBY))
        .save(provider))
    .register();
```

This example demonstrates how to:

- Create a block based on iron block properties
- Set the block's light level
- Add appropriate tags
- Set a simple block model
- Register an item for the block
- Add a crafting recipe
