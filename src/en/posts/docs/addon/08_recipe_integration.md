---
prev:
   text: Configuration System
   link: /en/posts/docs/addon/07_config
next:
   text: Event System
   link: /en/posts/docs/addon/09_event_system
---

# Recipe System Integration

This chapter introduces how to integrate and extend AnvilCraft's recipe system in your Addon.

## Overview

AnvilCraft provides a rich set of recipe types for implementing various processing and transformation functions. Addon
developers can:

1. **Use existing recipe types** - Add new recipes via datapacks or code
2. **Create custom recipe types** - Define entirely new recipe processing logic
3. **Integrate InWorld recipes** - Use AnvilLib's in-world recipe system

## AnvilCraft Recipe Types

AnvilCraft provides the following recipe types:

| Recipe Type      | Registry Name                 | Purpose                                       |
|------------------|-------------------------------|-----------------------------------------------|
| Item Crush       | `anvilcraft:item_crush`       | Crush items into smaller items                |
| Item Compress    | `anvilcraft:item_compress`    | Compress multiple items into advanced items   |
| Block Crush      | `anvilcraft:block_crush`      | Crush blocks into smaller blocks/items        |
| Block Compress   | `anvilcraft:block_compress`   | Compress multiple blocks into advanced blocks |
| Stamping         | `anvilcraft:stamping`         | Transform items on the stamping platform      |
| Unpack           | `anvilcraft:unpack`           | Unpack compressed items                       |
| Bulging          | `anvilcraft:bulging`          | Bulge items using fluid                       |
| Squeezing        | `anvilcraft:squeezing`        | Squeeze blocks using fluid                    |
| Item Inject      | `anvilcraft:item_inject`      | Inject fluid into items                       |
| Cooking          | `anvilcraft:cooking`          | Cook items using heat sources                 |
| Super Heating    | `anvilcraft:super_heating`    | Heat using high-temperature fluid             |
| Time Warp        | `anvilcraft:time_warp`        | Time power transformation                     |
| Block Smear      | `anvilcraft:block_smear`      | Smear using blocks                            |
| Mob Transform    | `anvilcraft:mob_transform`    | Transform mob entities                        |
| Multiblock       | `anvilcraft:multiblock`       | Multiblock structure recipes                  |
| Jewel Crafting   | `anvilcraft:jewel_crafting`   | Jewel crafting                                |
| Mineral Fountain | `anvilcraft:mineral_fountain` | Mineral fountain transformation               |

## Adding Recipes via Datapacks

The simplest way is to add recipes via datapacks. Create recipe JSON files in your mod resources.

### Recipe File Location

```
src/main/resources/data/<modid>/recipe/<recipe_name>.json
```

### Item Crush Recipe Example

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

### Item Compress Recipe Example

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

### Bulging Recipe Example

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

### Fluid-Related Field Description

Fluid recipes (bulging, squeezing, super heating, time warp) support the following fields:

| Field       | Type   | Description                                                          |
|-------------|--------|----------------------------------------------------------------------|
| `fluid`     | String | Required fluid type                                                  |
| `transform` | String | Fluid type after transformation (optional)                           |
| `consume`   | int    | Fluid consumption amount, positive for consume, negative for produce |

## Adding Recipes via Code

### Using Data Generators

It's recommended to use data generators to generate recipe files at compile time:

```java
public class MyAddonRecipeProvider extends RecipeProvider {
    
    public MyAddonRecipeProvider(HolderLookup.Provider registries, RecipeOutput output) {
        super(registries, output);
    }
    
    @Override
    protected void buildRecipes() {
        // Item crush recipe
        ItemCrushRecipe.builder()
            .requires(ModItems.CUSTOM_ORE.get())
            .result(ModItems.CUSTOM_DUST.get(), 2)
            .save(this.output, MyAddon.of("item_crush/custom_ore"));
        
        // Item compress recipe
        ItemCompressRecipe.builder()
            .requires(ModItems.CUSTOM_DUST.get(), 9)
            .result(ModBlocks.CUSTOM_BLOCK.get().asItem())
            .save(this.output, MyAddon.of("item_compress/custom_dust"));
    }
}
```

### Adding Recipes at Runtime

If you need to dynamically add recipes, you can listen to the `AddReloadListenerEvent`:

```java
@Mod.EventBusSubscriber(modid = MyAddon.MOD_ID, bus = Mod.EventBusSubscriber.Bus.GAME)
public class RecipeEventHandler {
    
    @SubscribeEvent
    public static void onAddReloadListener(AddReloadListenerEvent event) {
        // Access RecipeManager
        RecipeManager recipeManager = event.getServerResources().getRecipeManager();
        // You can handle recipe-related logic here
    }
}
```

## InWorld Recipe System

AnvilLib provides a powerful InWorld recipe system for handling in-world interaction recipes.

### InWorld Recipe Structure

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

### Field Description

| Field             | Type    | Description                                 |
|-------------------|---------|---------------------------------------------|
| `type`            | String  | Fixed as `anvillib_recipe:in_world_recipe`  |
| `icon`            | Object  | Recipe icon                                 |
| `trigger`         | String  | Trigger type                                |
| `conflicting`     | Array   | List of conflicting predicates              |
| `non_conflicting` | Array   | List of non-conflicting predicates          |
| `outcomes`        | Array   | List of recipe outcomes                     |
| `priority`        | int     | Priority, higher values are processed first |
| `compatible`      | boolean | Compatibility mode                          |
| `max_efficiency`  | int     | Maximum efficiency value                    |

### Trigger Types

- `anvilcraft:on_anvil_fall_on` - Triggers when an anvil falls

### Predicate Types

Predicates are used to check recipe execution conditions:

#### `anvillib_recipe:has_item`

Check if an item exists at the specified position:

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

Check for item and consume on match:

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

Check if a block exists at the specified position:

```json
{
  "type": "anvillib_recipe:has_block",
  "offset": [0, -1, 0],
  "block": {
    "blocks": "minecraft:iron_block"
  }
}
```

### Outcome Types

Outcomes define the effects when the recipe is executed:

#### `anvillib_recipe:spawn_item`

Spawn items at the specified position:

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

Set a block at the specified position:

```json
{
  "type": "anvillib_recipe:set_block",
  "offset": [0, -1, 0],
  "block": {
    "name": "minecraft:air"
  }
}
```

### Complete InWorld Recipe Example

Convert iron ingot to iron nuggets by crushing:

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

## Creating Custom Recipe Types

If existing recipe types don't meet your needs, you can create custom recipe types.

### 1. Define Recipe Class

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
        // Implement matching logic
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
    
    // Other required methods...
}
```

### 2. Define Recipe Serializer

```java
public class CustomRecipe {
    // ... Recipe class content
    
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

### 3. Register Recipe Type

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
    
    // Register recipe type
    public static final DeferredHolder<RecipeType<?>, RecipeType<CustomRecipe>> CUSTOM_TYPE =
        RECIPE_TYPES.register("custom", () -> new RecipeType<>() {
            @Override
            public String toString() {
                return MyAddon.MOD_ID + ":custom";
            }
        });
    
    // Register recipe serializer
    public static final DeferredHolder<RecipeSerializer<?>, RecipeSerializer<CustomRecipe>> CUSTOM_SERIALIZER =
        RECIPE_SERIALIZERS.register("custom", CustomRecipe.Serializer::new);
    
    public static void register(IEventBus bus) {
        RECIPE_TYPES.register(bus);
        RECIPE_SERIALIZERS.register(bus);
    }
}
```

### 4. Register in Main Class

```java
@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public MyAddon(IEventBus modEventBus) {
        ModRecipeTypes.register(modEventBus);
        // Other initialization...
    }
}
```

## Recipe Data Generation

Using data generators can automatically generate recipe JSON files.

### Recipe Provider Example

```java
public class ModRecipeProvider extends RecipeProvider {
    
    public ModRecipeProvider(HolderLookup.Provider registries, RecipeOutput output) {
        super(registries, output);
    }
    
    @Override
    protected void buildRecipes() {
        // Generate standard crafting recipe
        ShapedRecipeBuilder.shaped(RecipeCategory.MISC, ModItems.CUSTOM_ITEM.get())
            .pattern("III")
            .pattern("IAI")
            .pattern("III")
            .define('I', Items.IRON_INGOT)
            .define('A', Items.AMETHYST_SHARD)
            .unlockedBy("has_iron", has(Items.IRON_INGOT))
            .save(this.output);
        
        // Generating AnvilCraft recipes requires using corresponding Builders
        // or directly generating JSON data
    }
}
```

## Best Practices

1. **Prefer Datapacks**
    - Datapack recipes are easier to maintain and modify
    - Support resource pack overrides

2. **Set Priorities Appropriately**
    - InWorld recipe priority determines execution order
    - Avoid recipe conflicts

3. **Use Tags**
    - Use item/block tags for better recipe compatibility
    - Facilitates integration with other mods

4. **Test Recipes**
    - Use `/reload` command to reload recipes
    - Verify all recipe paths are correct

5. **Documentation**
    - Provide usage instructions for custom recipes
    - Document recipe prerequisites
