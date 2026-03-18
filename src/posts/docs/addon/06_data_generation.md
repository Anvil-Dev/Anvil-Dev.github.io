---
prev:
   text: 方块实体开发
   link: /posts/docs/addon/05_create_block_entity
next:
   text: 配置系统
   link: /posts/docs/addon/07_config
---

# 数据生成器

数据生成器（Data Generator）是 Minecraft 模组开发中用于自动生成游戏资源文件的工具。Registrum
内置了丰富的数据生成支持，可以自动生成模型、配方、语言文件、战利品表等。

## 数据生成概述

在使用 Registrum 注册物品、方块和实体时，大部分数据生成已经自动处理。本章将介绍如何自定义和扩展数据生成。

## 模型生成

### 物品模型

在 `ItemBuilder` 中使用 `model()` 方法自定义物品模型：

```java
public static final ItemEntry<Item> CUSTOM_ITEM = REGISTRUM
    .item("custom_item", Item::new)
    .model((ctx, provider) -> {
        // 使用生成模型
        provider.generated(ctx::getEntry);
    })
    .register();

// 手持物品模型（如工具）
public static final ItemEntry<Item> CUSTOM_TOOL = REGISTRUM
    .item("custom_tool", Item::new)
    .model((ctx, provider) -> provider.handheld(ctx))
    .register();

// 自定义父模型
public static final ItemEntry<Item> CUSTOM_MODEL = REGISTRUM
    .item("custom_model", Item::new)
    .model((ctx, provider) -> {
        provider.withExistingParent(ctx.getName(), 
            ResourceLocation.fromNamespaceAndPath("modid", "item/custom_parent"));
    })
    .register();
```

### 方块模型和方块状态

在 `BlockBuilder` 中使用 `blockstate()` 方法：

```java
// 简单方块（六面相同纹理）
public static final BlockEntry<Block> SIMPLE_BLOCK = REGISTRUM
    .block("simple_block", Block::new)
    .blockstate((ctx, provider) -> provider.simpleBlock(ctx.getEntry()))
    .simpleItem()
    .register();

// 柱状方块（顶部/底部与侧面不同）
public static final BlockEntry<RotatedPillarBlock> PILLAR_BLOCK = REGISTRUM
    .block("pillar_block", RotatedPillarBlock::new)
    .blockstate((ctx, provider) -> provider.logBlock(ctx.getEntry()))
    .simpleItem()
    .register();

// 楼梯方块
public static final BlockEntry<StairBlock> STAIRS = REGISTRUM
    .block("stairs", p -> new StairBlock(Blocks.STONE.defaultBlockState(), p))
    .blockstate((ctx, provider) -> provider.stairsBlock(ctx.getEntry(), 
        ResourceLocation.fromNamespaceAndPath("modid", "block/base_texture")))
    .simpleItem()
    .register();

// 台阶方块
public static final BlockEntry<SlabBlock> SLAB = REGISTRUM
    .block("slab", SlabBlock::new)
    .blockstate((ctx, provider) -> {
        ResourceLocation texture = ResourceLocation.fromNamespaceAndPath("modid", "block/base_texture");
        provider.slabBlock(ctx.getEntry(), texture, texture);
    })
    .simpleItem()
    .register();

// 带朝向的方块
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

## 配方生成

### 基础配方

在 `ItemBuilder` 或 `BlockBuilder` 中使用 `recipe()` 方法：

```java
// 有序合成配方
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

// 无序合成配方
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

// 熔炉配方
public static final ItemEntry<Item> SMELTED_ITEM = REGISTRUM
    .item("smelted_item", Item::new)
    .recipe((ctx, provider) -> {
        SimpleCookingRecipeBuilder.smelting(
            Ingredient.of(Items.RAW_IRON),
            RecipeCategory.MISC,
            ctx.get(),
            0.7F,  // 经验值
            200    // 烹饪时间（tick）
        )
        .unlockedBy("has_raw_iron", RegistrumRecipeProvider.has(Items.RAW_IRON))
        .save(provider);
    })
    .register();

// 锻造台配方
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

### 多个配方

一个物品可以有多个配方：

```java
public static final ItemEntry<Item> MULTI_RECIPE_ITEM = REGISTRUM
    .item("multi_recipe_item", Item::new)
    .recipe((ctx, provider) -> {
        // 配方1：合成
        ShapedRecipeBuilder.shaped(RecipeCategory.MISC, ctx.get())
            .pattern("II")
            .pattern("II")
            .define('I', Items.IRON_INGOT)
            .unlockedBy("has_iron", RegistrumRecipeProvider.has(Items.IRON_INGOT))
            .save(provider);

        // 配方2：熔炼
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

## 语言文件生成

### 自动生成

默认情况下，Registrum 会自动从注册ID生成英文名称（将下划线转为空格，首字母大写）。

### 自定义名称

使用 `lang()` 方法自定义名称：

```java
// 物品
public static final ItemEntry<Item> CUSTOM_ITEM = REGISTRUM
    .item("custom_item", Item::new)
    .lang("My Custom Item")
    .register();

// 方块
public static final BlockEntry<Block> CUSTOM_BLOCK = REGISTRUM
    .block("custom_block", Block::new)
    .lang("My Custom Block")
    .simpleItem()
    .register();

// 实体
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .lang("My Custom Entity")
    .register();
```

## 标签生成

### 物品标签

```java
public static final ItemEntry<Item> TAGGED_ITEM = REGISTRUM
    .item("tagged_item", Item::new)
    .tag(ItemTags.AXES)
    .tag(Tags.Items.TOOLS)
    .tag(ItemTags.create(ResourceLocation.fromNamespaceAndPath("c", "tools/custom")))
    .register();
```

### 方块标签

```java
public static final BlockEntry<Block> TAGGED_BLOCK = REGISTRUM
    .block("tagged_block", Block::new)
    .tag(BlockTags.MINEABLE_WITH_PICKAXE)
    .tag(BlockTags.NEEDS_IRON_TOOL)
    .tag(Tags.Blocks.ORES)
    .simpleItem()
    .register();
```

### 实体标签

```java
public static final EntityEntry<CustomEntity> TAGGED_ENTITY = REGISTRUM
    .entity("tagged_entity", CustomEntity::new, MobCategory.MISC)
    .tag(EntityTypeTags.ARROWS)
    .register();
```

## 战利品表生成

### 方块战利品表

```java
// 默认掉落自身
public static final BlockEntry<Block> SIMPLE_LOOT = REGISTRUM
    .block("simple_loot", Block::new)
    .simpleItem()
    .register();

// 自定义战利品表
public static final BlockEntry<Block> CUSTOM_LOOT = REGISTRUM
    .block("custom_loot", Block::new)
    .loot((tables, block) -> {
        tables.dropSelf(block);  // 掉落自身
    })
    .simpleItem()
    .register();

// 使用精准采集
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

### 实体战利品表

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

## 物品燃料和堆肥

### 燃料时间

```java
public static final ItemEntry<Item> FUEL_ITEM = REGISTRUM
    .item("fuel_item", Item::new)
    .burnTime(1600)  // 燃烧时间（tick），煤炭是1600
    .register();
```

### 堆肥概率

```java
public static final ItemEntry<Item> COMPOST_ITEM = REGISTRUM
    .item("compost_item", Item::new)
    .compostable(0.65F)  // 堆肥概率，0.0-1.0
    .register();
```

## 运行数据生成

在开发环境中运行数据生成：

1. 使用 Gradle 任务：`Tasks -> build -> runData`
2. 或者在命令行运行：`./gradlew runData`

生成的文件将放置在 `src/generated/resources` 目录中。

## 最佳实践

1. **保持一致性**
    * 使用统一的命名风格
    * 遵循 Minecraft 原版的资源命名约定

2. **使用标签**
    * 优先使用通用标签（`c:` 命名空间）
    * 为自定义内容创建自己的标签

3. **配方设计**
    * 确保配方有适当的解锁条件
    * 使用有意义的配方ID

4. **模型优化**
    * 尽量复用父模型
    * 避免过于复杂的自定义模型

5. **本地化**
    * 即使使用自动生成的名称，也要检查是否合适
    * 为非英语语言手动提供翻译
