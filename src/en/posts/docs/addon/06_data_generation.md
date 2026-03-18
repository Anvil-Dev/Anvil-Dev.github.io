---
prev:
   text: Block Entity Development
   link: /en/posts/docs/addon/05_create_block_entity
next:
   text: Configuration System
   link: /en/posts/docs/addon/07_config
---

# Data Generators

Data Generators are tools in Minecraft mod development used to automatically generate game resource files. Registrum has
built-in rich data generation support, allowing automatic generation of models, recipes, language files, loot tables,
and more.

## Data Generation Overview

When using Registrum to register items, blocks, and entities, most data generation is handled automatically. This
chapter will introduce how to customize and extend data generation.

## Model Generation

### Item Models

Use the `model()` method in `ItemBuilder` to customize item models:

```java
public static final ItemEntry<Item> CUSTOM_ITEM = REGISTRUM
    .item("custom_item", Item::new)
    .model((ctx, provider) -> {
        // Use generated model
        provider.generated(ctx::getEntry);
    })
    .register();

// Handheld item model (like tools)
public static final ItemEntry<Item> CUSTOM_TOOL = REGISTRUM
    .item("custom_tool", Item::new)
    .model((ctx, provider) -> provider.handheld(ctx))
    .register();

// Custom parent model
public static final ItemEntry<Item> CUSTOM_MODEL = REGISTRUM
    .item("custom_model", Item::new)
    .model((ctx, provider) -> {
        provider.withExistingParent(ctx.getName(), 
            ResourceLocation.fromNamespaceAndPath("modid", "item/custom_parent"));
    })
    .register();
```

### Block Models and Blockstates

Use the `blockstate()` method in `BlockBuilder`:

```java
// Simple block (same texture on all sides)
public static final BlockEntry<Block> SIMPLE_BLOCK = REGISTRUM
    .block("simple_block", Block::new)
    .blockstate((ctx, provider) -> provider.simpleBlock(ctx.getEntry()))
    .simpleItem()
    .register();

// Pillar block (different top/bottom vs sides)
public static final BlockEntry<RotatedPillarBlock> PILLAR_BLOCK = REGISTRUM
    .block("pillar_block", RotatedPillarBlock::new)
    .blockstate((ctx, provider) -> provider.logBlock(ctx.getEntry()))
    .simpleItem()
    .register();

// Stairs block
public static final BlockEntry<StairBlock> STAIRS = REGISTRUM
    .block("stairs", p -> new StairBlock(Blocks.STONE.defaultBlockState(), p))
    .blockstate((ctx, provider) -> provider.stairsBlock(ctx.getEntry(), 
        ResourceLocation.fromNamespaceAndPath("modid", "block/base_texture")))
    .simpleItem()
    .register();

// Slab block
public static final BlockEntry<SlabBlock> SLAB = REGISTRUM
    .block("slab", SlabBlock::new)
    .blockstate((ctx, provider) -> {
        ResourceLocation texture = ResourceLocation.fromNamespaceAndPath("modid", "block/base_texture");
        provider.slabBlock(ctx.getEntry(), texture, texture);
    })
    .simpleItem()
    .register();

// Directional block
public static final BlockEntry<DirectionalBlock> DIRECTIONAL = REGISTRUM
    .block("directional", DirectionalBlock::new)
    .blockstate((ctx, provider) -> {
        provider.directionalBlock(ctx.getEntry(), 
            provider.models().cubeAll(ctx.getName(), 
                ResourceLocation.fromNamespaceAndPath("modid", "block/" + ctx.getName())));
    })
    .simpleItem()
    .register();
```

## Recipe Generation

### Basic Recipes

Use the `recipe()` method in `ItemBuilder` or `BlockBuilder`:

```java
// Shaped crafting recipe
public static final ItemEntry<Item> CRAFTED_ITEM = REGISTRUM
    .item("crafted_item", Item::new)
    .recipe((ctx, provider) -> {
        ShapedRecipeBuilder.shaped(RecipeCategory.MISC, ctx.get())
            .pattern("ABA")
            .pattern("BCB")
            .pattern("ABA")
            .define('A', Items.IRON_INGOT)
            .define('B', Items.GOLD_INGOT)
            .define('C', Items.DIAMOND)
            .unlockedBy("has_diamond", RegistrumRecipeProvider.has(Items.DIAMOND))
            .save(provider);
    })
    .register();

// Shapeless crafting recipe
public static final ItemEntry<Item> SHAPELESS_ITEM = REGISTRUM
    .item("shapeless_item", Item::new)
    .recipe((ctx, provider) -> {
        ShapelessRecipeBuilder.shapeless(RecipeCategory.MISC, ctx.get())
            .requires(Items.IRON_INGOT)
            .requires(Items.GOLD_INGOT)
            .unlockedBy("has_iron", RegistrumRecipeProvider.has(Items.IRON_INGOT))
            .save(provider);
    })
    .register();

// Smelting recipe
public static final ItemEntry<Item> SMELTED_ITEM = REGISTRUM
    .item("smelted_item", Item::new)
    .recipe((ctx, provider) -> {
        SimpleCookingRecipeBuilder.smelting(
            Ingredient.of(Items.RAW_IRON),
            RecipeCategory.MISC,
            ctx.get(),
            0.7F,  // Experience
            200    // Cooking time (ticks)
        )
        .unlockedBy("has_raw_iron", RegistrumRecipeProvider.has(Items.RAW_IRON))
        .save(provider);
    })
    .register();

// Smithing table recipe
public static final ItemEntry<Item> SMITHED_ITEM = REGISTRUM
    .item("smithed_item", Item::new)
    .recipe((ctx, provider) -> {
        SmithingTransformRecipeBuilder.smithing(
            Ingredient.of(Items.NETHERITE_UPGRADE_SMITHING_TEMPLATE),
            Ingredient.of(Items.DIAMOND_PICKAXE),
            Ingredient.of(Items.NETHERITE_INGOT),
            RecipeCategory.TOOLS,
            ctx.get()
        )
        .unlocks("has_netherite", RegistrumRecipeProvider.has(Items.NETHERITE_INGOT))
        .save(provider, ResourceLocation.fromNamespaceAndPath("modid", "smithing/custom_tool"));
    })
    .register();
```

### Multiple Recipes

An item can have multiple recipes:

```java
public static final ItemEntry<Item> MULTI_RECIPE_ITEM = REGISTRUM
    .item("multi_recipe_item", Item::new)
    .recipe((ctx, provider) -> {
        // Recipe 1: Crafting
        ShapedRecipeBuilder.shaped(RecipeCategory.MISC, ctx.get())
            .pattern("II")
            .pattern("II")
            .define('I', Items.IRON_INGOT)
            .unlockedBy("has_iron", RegistrumRecipeProvider.has(Items.IRON_INGOT))
            .save(provider);

        // Recipe 2: Smelting
        SimpleCookingRecipeBuilder.smelting(
            Ingredient.of(Items.IRON_BLOCK),
            RecipeCategory.MISC,
            ctx.get(),
            1.0F,
            200
        )
        .unlockedBy("has_iron_block", RegistrumRecipeProvider.has(Items.IRON_BLOCK))
        .save(provider, ResourceLocation.fromNamespaceAndPath("modid", "smelting/custom_from_block"));
    })
    .register();
```

## Language File Generation

### Automatic Generation

By default, Registrum will automatically generate English names from registration IDs (converting underscores to spaces,
capitalizing first letters).

### Custom Names

Use the `lang()` method to customize names:

```java
// Item
public static final ItemEntry<Item> CUSTOM_ITEM = REGISTRUM
    .item("custom_item", Item::new)
    .lang("My Custom Item")
    .register();

// Block
public static final BlockEntry<Block> CUSTOM_BLOCK = REGISTRUM
    .block("custom_block", Block::new)
    .lang("My Custom Block")
    .simpleItem()
    .register();

// Entity
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .lang("My Custom Entity")
    .register();
```

## Tag Generation

### Item Tags

```java
public static final ItemEntry<Item> TAGGED_ITEM = REGISTRUM
    .item("tagged_item", Item::new)
    .tag(ItemTags.AXES)
    .tag(Tags.Items.TOOLS)
    .tag(ItemTags.create(ResourceLocation.fromNamespaceAndPath("c", "tools/custom")))
    .register();
```

### Block Tags

```java
public static final BlockEntry<Block> TAGGED_BLOCK = REGISTRUM
    .block("tagged_block", Block::new)
    .tag(BlockTags.MINEABLE_WITH_PICKAXE)
    .tag(BlockTags.NEEDS_IRON_TOOL)
    .tag(Tags.Blocks.ORES)
    .simpleItem()
    .register();
```

### Entity Tags

```java
public static final EntityEntry<CustomEntity> TAGGED_ENTITY = REGISTRUM
    .entity("tagged_entity", CustomEntity::new, MobCategory.MISC)
    .tag(EntityTypeTags.ARROWS)
    .register();
```

## Loot Table Generation

### Block Loot Tables

```java
// Default drops itself
public static final BlockEntry<Block> SIMPLE_LOOT = REGISTRUM
    .block("simple_loot", Block::new)
    .simpleItem()
    .register();

// Custom loot table
public static final BlockEntry<Block> CUSTOM_LOOT = REGISTRUM
    .block("custom_loot", Block::new)
    .loot((tables, block) -> {
        tables.dropSelf(block);  // Drops itself
    })
    .simpleItem()
    .register();

// Using silk touch
public static final BlockEntry<Block> SILK_TOUCH_LOOT = REGISTRUM
    .block("silk_touch_block", Block::new)
    .loot((tables, block) -> {
        tables.add(block, tables.createSilkTouchDispatchTable(
            block,
            LootItem.lootTableItem(Items.DIAMOND)
                .apply(SetItemCountFunction.setCount(UniformGenerator.between(1, 3)))
        ));
    })
    .simpleItem()
    .register();
```

### Entity Loot Tables

```java
public static final EntityEntry<CustomMob> MOB_WITH_LOOT = REGISTRUM
    .<CustomMob>entity("custom_mob", CustomMob::new, MobCategory.CREATURE)
    .attributes(CustomMob::createAttributes)
    .loot((tables, entityType) -> {
        tables.add(entityType, LootTable.lootTable()
            .withPool(LootPool.lootPool()
                .setRolls(ConstantValue.exactly(1))
                .add(LootItem.lootTableItem(Items.LEATHER)
                    .apply(SetItemCountFunction.setCount(UniformGenerator.between(0, 2)))
                    .apply(LootingEnchantFunction.lootingMultiplier(
                        UniformGenerator.between(0, 1)))
                )
            )
        );
    })
    .register();
```

## Item Fuel and Composting

### Burn Time

```java
public static final ItemEntry<Item> FUEL_ITEM = REGISTRUM
    .item("fuel_item", Item::new)
    .burnTime(1600)  // Burn time (ticks), coal is 1600
    .register();
```

### Compost Chance

```java
public static final ItemEntry<Item> COMPOST_ITEM = REGISTRUM
    .item("compost_item", Item::new)
    .compostable(0.65F)  // Compost chance, 0.0-1.0
    .register();
```

## Running Data Generation

Run data generation in your development environment:

1. Use Gradle task: `Tasks -> build -> runData`
2. Or run in command line: `./gradlew runData`

Generated files will be placed in the `src/generated/resources` directory.

## Best Practices

1. **Maintain Consistency**
    * Use a uniform naming style
    * Follow Minecraft's vanilla resource naming conventions

2. **Use Tags**
    * Prefer using common tags (`c:` namespace)
    * Create your own tags for custom content

3. **Recipe Design**
    * Ensure recipes have appropriate unlock conditions
    * Use meaningful recipe IDs

4. **Model Optimization**
    * Reuse parent models when possible
    * Avoid overly complex custom models

5. **Localization**
    * Even with auto-generated names, check if they are appropriate
    * Manually provide translations for non-English languages
