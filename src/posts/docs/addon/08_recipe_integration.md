---
prev:
   text: 配置系统
   link: /posts/docs/addon/07_config
next:
   text: 事件系统
   link: /posts/docs/addon/09_event_system
---

# 配方系统集成

本章介绍如何在 Addon 中集成和扩展 AnvilCraft 的配方系统。

## 概述

AnvilCraft 提供了丰富的配方类型，用于实现各种加工和转换功能。Addon 开发者可以：

1. **使用现有配方类型** - 通过数据包或代码添加新配方
2. **创建自定义配方类型** - 定义全新的配方处理逻辑
3. **集成 InWorld 配方** - 使用 AnvilLib 的世界内配方系统

## AnvilCraft 配方类型

AnvilCraft 提供以下配方类型：

| 配方类型  | 注册名                           | 用途             |
|-------|-------------------------------|----------------|
| 物品粉碎  | `anvilcraft:item_crush`       | 将物品粉碎成更小的物品    |
| 物品压缩  | `anvilcraft:item_compress`    | 将多个物品压缩成高级物品   |
| 方块粉碎  | `anvilcraft:block_crush`      | 将方块粉碎成更小的方块/物品 |
| 方块压缩  | `anvilcraft:block_compress`   | 将多个方块压缩成高级方块   |
| 冲压    | `anvilcraft:stamping`         | 在冲压平台上转换物品     |
| 解包    | `anvilcraft:unpack`           | 将压缩物品解包        |
| 膨发    | `anvilcraft:bulging`          | 使用流体膨发物品       |
| 挤压    | `anvilcraft:squeezing`        | 使用流体挤压方块       |
| 物品注入  | `anvilcraft:item_inject`      | 将流体注入物品        |
| 烹饪    | `anvilcraft:cooking`          | 使用热源烹饪物品       |
| 超级加热  | `anvilcraft:super_heating`    | 使用高温流体加热       |
| 时移    | `anvilcraft:time_warp`        | 时间力量转换         |
| 方块涂抹  | `anvilcraft:block_smear`      | 使用方块涂抹         |
| 生物转换  | `anvilcraft:mob_transform`    | 生物实体转换         |
| 多方块结构 | `anvilcraft:multiblock`       | 多方块结构配方        |
| 珠宝制作  | `anvilcraft:jewel_crafting`   | 珠宝制作           |
| 矿物涌泉  | `anvilcraft:mineral_fountain` | 矿物涌泉转换         |

## 通过数据包添加配方

最简单的方式是通过数据包添加配方。在你的 mod 资源中创建配方 JSON 文件。

### 配方文件位置

```
src/main/resources/data/<modid>/recipe/<recipe_name>.json
```

### 物品粉碎配方示例

```json
{
  "type": "anvilcraft:item_crush",
  "ingredients": [
    {
      "items": "myaddon:custom_ore"
    }
  ],
  "results": [
    {
      "id": "myaddon:custom_dust",
      "count": 2
    }
  ]
}
```

### 物品压缩配方示例

```json
{
  "type": "anvilcraft:item_compress",
  "ingredients": [
    {
      "items": "myaddon:custom_dust",
      "count": 9
    }
  ],
  "results": [
    {
      "id": "myaddon:custom_block",
      "count": 1
    }
  ]
}
```

### 膨发配方示例

```json
{
  "type": "anvilcraft:bulging",
  "ingredients": [
    {
      "items": "myaddon:dry_sponge"
    }
  ],
  "results": [
    {
      "id": "minecraft:wet_sponge",
      "count": 1
    }
  ],
  "fluid": "minecraft:water",
  "consume": 1
}
```

### 流体相关字段说明

流体配方（膨发、挤压、超级加热、时移）支持以下字段：

| 字段          | 类型     | 说明              |
|-------------|--------|-----------------|
| `fluid`     | String | 所需流体类型          |
| `transform` | String | 转换后的流体类型（可选）    |
| `consume`   | int    | 流体消耗量，正数消耗，负数产生 |

## 通过代码添加配方

### 使用数据生成器

推荐使用数据生成器在编译时生成配方文件：

```java
public class MyAddonRecipeProvider extends RecipeProvider {
    
    public MyAddonRecipeProvider(HolderLookup.Provider registries, RecipeOutput output) {
        super(registries, output);
    }
    
    @Override
    protected void buildRecipes() {
        // 物品粉碎配方
        ItemCrushRecipe.builder()
            .requires(ModItems.CUSTOM_ORE.get())
            .result(ModItems.CUSTOM_DUST.get(), 2)
            .save(this.output, MyAddon.of("item_crush/custom_ore"));
        
        // 物品压缩配方
        ItemCompressRecipe.builder()
            .requires(ModItems.CUSTOM_DUST.get(), 9)
            .result(ModBlocks.CUSTOM_BLOCK.get().asItem())
            .save(this.output, MyAddon.of("item_compress/custom_dust"));
    }
}
```

### 运行时添加配方

如果需要动态添加配方，可以监听 `AddReloadListenerEvent` 事件：

```java
@Mod.EventBusSubscriber(modid = MyAddon.MOD_ID, bus = Mod.EventBusSubscriber.Bus.GAME)
public class RecipeEventHandler {
    
    @SubscribeEvent
    public static void onAddReloadListener(AddReloadListenerEvent event) {
        // 访问 RecipeManager
        RecipeManager recipeManager = event.getServerResources().getRecipeManager();
        // 可以在这里处理配方相关逻辑
    }
}
```

## InWorld 配方系统

AnvilLib 提供了强大的 InWorld 配方系统，用于处理世界内的交互配方。

### InWorld 配方结构

```json
{
  "type": "anvillib_recipe:in_world_recipe",
  "icon": {
    "item": "minecraft:anvil"
  },
  "trigger": "anvilcraft:on_anvil_fall_on",
  "conflicting": [],
  "non_conflicting": [],
  "outcomes": [],
  "priority": 0,
  "compatible": true,
  "max_efficiency": 2147483647
}
```

### 字段说明

| 字段                | 类型      | 说明                                    |
|-------------------|---------|---------------------------------------|
| `type`            | String  | 固定为 `anvillib_recipe:in_world_recipe` |
| `icon`            | Object  | 配方图标                                  |
| `trigger`         | String  | 触发器类型                                 |
| `conflicting`     | Array   | 冲突谓词列表                                |
| `non_conflicting` | Array   | 非冲突谓词列表                               |
| `outcomes`        | Array   | 配方结果列表                                |
| `priority`        | int     | 优先级，数值越高越优先                           |
| `compatible`      | boolean | 是否兼容模式                                |
| `max_efficiency`  | int     | 最大效率值                                 |

### 触发器类型

- `anvilcraft:on_anvil_fall_on` - 当铁砧落下时触发

### 谓词类型

谓词用于检查配方执行条件：

#### `anvillib_recipe:has_item`

检查指定位置是否存在物品：

```json
{
  "type": "anvillib_recipe:has_item",
  "offset": [0, -1, 0],
  "item": {
    "items": "minecraft:iron_ingot"
  }
}
```

#### `anvillib_recipe:has_item_ingredient`

检查物品并在匹配时消耗：

```json
{
  "type": "anvillib_recipe:has_item_ingredient",
  "offset": [0, -1, 0],
  "item": {
    "items": "minecraft:iron_ingot"
  }
}
```

#### `anvillib_recipe:has_block`

检查指定位置是否存在方块：

```json
{
  "type": "anvillib_recipe:has_block",
  "offset": [0, -1, 0],
  "block": {
    "blocks": "minecraft:iron_block"
  }
}
```

### 结果类型

结果定义了配方执行时的效果：

#### `anvillib_recipe:spawn_item`

在指定位置生成物品：

```json
{
  "type": "anvillib_recipe:spawn_item",
  "offset": [0, -1, 0],
  "item": {
    "id": "minecraft:iron_nugget",
    "count": 9
  }
}
```

#### `anvillib_recipe:set_block`

设置指定位置的方块：

```json
{
  "type": "anvillib_recipe:set_block",
  "offset": [0, -1, 0],
  "block": {
    "name": "minecraft:air"
  }
}
```

### 完整 InWorld 配方示例

将铁锭砸成铁粒：

```json
{
  "type": "anvillib_recipe:in_world_recipe",
  "icon": {
    "item": "minecraft:iron_nugget"
  },
  "trigger": "anvilcraft:on_anvil_fall_on",
  "conflicting": [],
  "non_conflicting": [
    {
      "type": "anvillib_recipe:has_item_ingredient",
      "offset": [0, -1, 0],
      "item": {
        "items": "minecraft:iron_ingot"
      }
    }
  ],
  "outcomes": [
    {
      "type": "anvillib_recipe:spawn_item",
      "offset": [0, -1, 0],
      "item": {
        "id": "minecraft:iron_nugget",
        "count": 9
      }
    }
  ],
  "priority": 0,
  "compatible": true
}
```

## 创建自定义配方类型

如果现有配方类型不能满足需求，可以创建自定义配方类型。

### 1. 定义配方类

```java
package com.example.myaddon.recipe;

import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.RecipeInput;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.item.crafting.RecipeType;
import net.minecraft.world.level.Level;

public class CustomRecipe implements Recipe<RecipeInput> {
    private final ItemStack input;
    private final ItemStack output;
    
    public CustomRecipe(ItemStack input, ItemStack output) {
        this.input = input;
        this.output = output;
    }
    
    @Override
    public boolean matches(RecipeInput input, Level level) {
        // 实现匹配逻辑
        return ItemStack.isSameItemSameComponents(
            input.getItem(0), this.input
        );
    }
    
    @Override
    public ItemStack assemble(RecipeInput input, HolderLookup.Provider registries) {
        return this.output.copy();
    }
    
    @Override
    public RecipeSerializer<? extends Recipe<RecipeInput>> getSerializer() {
        return ModRecipeTypes.CUSTOM_SERIALIZER.get();
    }
    
    @Override
    public RecipeType<? extends Recipe<RecipeInput>> getType() {
        return ModRecipeTypes.CUSTOM_TYPE.get();
    }
    
    // 其他必需方法...
}
```

### 2. 定义配方序列化器

```java
public class CustomRecipe {
    // ... 配方类内容
    
    public static class Serializer implements RecipeSerializer<CustomRecipe> {
        private static final MapCodec<CustomRecipe> CODEC = RecordCodecBuilder.mapCodec(
            instance -> instance.group(
                ItemStack.CODEC.fieldOf("input").forGetter(r -> r.input),
                ItemStack.CODEC.fieldOf("output").forGetter(r -> r.output)
            ).apply(instance, CustomRecipe::new)
        );
        
        private static final StreamCodec<RegistryFriendlyByteBuf, CustomRecipe> STREAM_CODEC =
            StreamCodec.composite(
                ItemStack.STREAM_CODEC, r -> r.input,
                ItemStack.STREAM_CODEC, r -> r.output,
                CustomRecipe::new
            );
        
        @Override
        public MapCodec<CustomRecipe> codec() {
            return CODEC;
        }
        
        @Override
        public StreamCodec<RegistryFriendlyByteBuf, CustomRecipe> streamCodec() {
            return STREAM_CODEC;
        }
    }
}
```

### 3. 注册配方类型

```java
package com.example.myaddon.init;

import com.example.myaddon.MyAddon;
import com.example.myaddon.recipe.CustomRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.item.crafting.RecipeType;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModRecipeTypes {
    private static final DeferredRegister<RecipeType<?>> RECIPE_TYPES =
        DeferredRegister.create(Registries.RECIPE_TYPE, MyAddon.MOD_ID);
    private static final DeferredRegister<RecipeSerializer<?>> RECIPE_SERIALIZERS =
        DeferredRegister.create(Registries.RECIPE_SERIALIZER, MyAddon.MOD_ID);
    
    // 注册配方类型
    public static final DeferredHolder<RecipeType<?>, RecipeType<CustomRecipe>> CUSTOM_TYPE =
        RECIPE_TYPES.register("custom", () -> new RecipeType<>() {
            @Override
            public String toString() {
                return MyAddon.MOD_ID + ":custom";
            }
        });
    
    // 注册配方序列化器
    public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<CustomRecipe>> CUSTOM_SERIALIZER =
        RECIPE_SERIALIZERS.register("custom", CustomRecipe.Serializer::new);
    
    public static void register(IEventBus bus) {
        RECIPE_TYPES.register(bus);
        RECIPE_SERIALIZERS.register(bus);
    }
}
```

### 4. 在主类中注册

```java
@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public MyAddon(IEventBus modEventBus) {
        ModRecipeTypes.register(modEventBus);
        // 其他初始化...
    }
}
```

## 配方数据生成

使用数据生成器可以自动生成配方 JSON 文件。

### 配方 Provider 示例

```java
public class ModRecipeProvider extends RecipeProvider {
    
    public ModRecipeProvider(HolderLookup.Provider registries, RecipeOutput output) {
        super(registries, output);
    }
    
    @Override
    protected void buildRecipes() {
        // 生成标准合成配方
        ShapedRecipeBuilder.shaped(RecipeCategory.MISC, ModItems.CUSTOM_ITEM.get())
            .pattern("III")
            .pattern("IAI")
            .pattern("III")
            .define('I', Items.IRON_INGOT)
            .define('A', Items.AMETHYST_SHARD)
            .unlockedBy("has_iron", has(Items.IRON_INGOT))
            .save(this.output);
        
        // 生成 AnvilCraft 配方需要使用对应的 Builder
        // 或直接生成 JSON 数据
    }
}
```

## 最佳实践

1. **优先使用数据包**
    - 数据包配方更容易维护和修改
    - 支持资源包覆盖

2. **合理设置优先级**
    - InWorld 配方的优先级决定执行顺序
    - 避免配方冲突

3. **使用标签**
    - 使用物品/方块标签增加配方兼容性
    - 方便与其他 mod 整合

4. **测试配方**
    - 使用 `/reload` 命令重载配方
    - 验证所有配方路径正确

5. **文档化**
    - 为自定义配方提供使用说明
    - 记录配方的前置条件
