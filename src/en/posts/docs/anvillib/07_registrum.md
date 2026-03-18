---
prev:
   text: Moveable Entity Block Module
   link: /en/posts/docs/anvillib/06_moveable_entity_block
---

# Registrum Module

The Registrum module provides a **fluent, chain-style registration API** based
on [Registrate](https://github.com/IThundxr/Registrate) that greatly simplifies the registration of items, blocks,
entities, fluids, menus, and more. It also deeply integrates with NeoForge data generation (models, language files, loot
tables, recipes, etc.).

## I. Creating a `Registrum` Instance

Create a single static `Registrum` instance in your mod's main class:

```java
import dev.anvilcraft.lib.v2.registrum.Registrum;

public class MyMod {
    // Global singleton — hold as a static field
    public static final Registrum REGISTRUM = Registrum.create("my_mod");

    public MyMod(IEventBus modEventBus) {
        // Event listener registration is handled automatically by Registrum.create()
    }
}
```

`Registrum.create(modId)` automatically finds the mod's event bus and registers the necessary listeners — no manual
setup required.

## II. Registering Items

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.ItemEntry;
import net.minecraft.world.item.Item;

public class MyItems {
    public static final ItemEntry<Item> MY_ITEM = MyMod.REGISTRUM
        .item("my_item", Item::new)
        .properties(p -> p.stacksTo(16))
        .lang("My Item")
        .tab(CreativeModeTabs.TOOLS_AND_UTILITIES)
        .register();
}
```

### `ItemBuilder` Common Methods

| Method                               | Description                                        |
|--------------------------------------|----------------------------------------------------|
| `.properties(p -> ...)`              | Modify `Item.Properties`                           |
| `.lang(String)`                      | Set the English translation                        |
| `.model(ctx, prov -> ...)`           | Provide a custom item model                        |
| `.defaultModel()`                    | Use a default generated model (texture matches ID) |
| `.tab(ResourceKey<CreativeModeTab>)` | Add to a creative mode tab                         |
| `.tag(TagKey<Item>...)`              | Add item tags                                      |
| `.color(() -> () -> color)`          | Set an item color handler                          |
| `.compostable(float)`                | Set the composting chance                          |
| `.burnTime(int)`                     | Set fuel burn time                                 |
| `.register()`                        | Finish registration, return `ItemEntry`            |

## III. Registering Blocks

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.BlockEntry;
import net.minecraft.world.level.block.Block;

public class MyBlocks {
    public static final BlockEntry<Block> MY_BLOCK = MyMod.REGISTRUM
        .block("my_block", Block::new)
        .properties(p -> p.strength(2.0f, 6.0f).requiresCorrectToolForDrops())
        .lang("My Block")
        .defaultBlockstate()   // auto-generates cube_all blockstate model
        .defaultLoot()         // auto-generates self-drop loot table
        .simpleItem()          // also registers a BlockItem
        .register();
}
```

### `BlockBuilder` Common Methods

| Method                                | Description                                  |
|---------------------------------------|----------------------------------------------|
| `.properties(p -> ...)`               | Modify `BlockBehaviour.Properties`           |
| `.defaultBlockstate()`                | Map all states to a single cube_all model    |
| `.blockstate(ctx, prov -> ...)`       | Provide a custom blockstate JSON             |
| `.defaultLoot()`                      | Generate a self-drop loot table              |
| `.loot(prov -> ...)`                  | Provide a custom loot table                  |
| `.simpleItem()`                       | Register a simple BlockItem                  |
| `.item(factory -> ...)`               | Customize the BlockItem via `ItemBuilder`    |
| `.blockEntity(type, factory).build()` | Associate a block entity type                |
| `.tag(TagKey<Block>...)`              | Add block tags                               |
| `.addLayer(() -> RenderType::...)`    | Set render layer (transparent, cutout, etc.) |
| `.register()`                         | Finish registration, return `BlockEntry`     |

## IV. Registering Block Entities

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.BlockEntityEntry;

public class MyBlockEntities {
    public static final BlockEntityEntry<MyBlockEntity> MY_BLOCK_ENTITY = MyMod.REGISTRUM
        .blockEntity("my_block_entity", MyBlockEntity::new)
        .validBlock(MyBlocks.MY_BLOCK)
        .register();
}
```

## V. Registering Entities

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.EntityEntry;
import net.minecraft.world.entity.MobCategory;

public class MyEntities {
    public static final EntityEntry<MyEntity> MY_ENTITY = MyMod.REGISTRUM
        .entity("my_entity", MyEntity::new, MobCategory.CREATURE)
        .properties(b -> b.sized(0.6f, 1.8f).clientTrackingRange(8))
        .lang("My Entity")
        .attributes(MyEntity::createAttributes)
        .renderer(() -> MyEntityRenderer::new)
        .spawnEgg(0xFF0000, 0x00FF00)
        .register();
}
```

### `EntityBuilder` Common Methods

| Method                           | Description                               |
|----------------------------------|-------------------------------------------|
| `.properties(b -> ...)`          | Modify `EntityType.Builder`               |
| `.attributes(supplier)`          | Register entity attributes (required)     |
| `.renderer(() -> factory)`       | Set the client-side entity renderer       |
| `.spawnEgg(bg, fg)`              | Register a spawn egg (ARGB int colors)    |
| `.tag(TagKey<EntityType<?>>...)` | Add entity type tags                      |
| `.register()`                    | Finish registration, return `EntityEntry` |

## VI. Registering Fluids

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.FluidEntry;

public class MyFluids {
    public static final FluidEntry<BaseFlowingFluid.Source> MY_FLUID = MyMod.REGISTRUM
        .fluid("my_fluid")
        .properties(p -> p.levelDecreasePerBlock(2).slopeFindDistance(3))
        .lang("My Fluid")
        .register();
}
```

## VII. Registering Menus

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.MenuEntry;

public class MyMenus {
    public static final MenuEntry<MyMenu> MY_MENU = MyMod.REGISTRUM
        .menu("my_menu", MyMenu::new, MyMenuScreen::new)
        .register();
}
```

## VIII. Data Generation Integration

Registrum is deeply integrated with NeoForge data generation. You can declare data provider callbacks directly in the
builder via `ProviderType`:

```java
MyMod.REGISTRUM
    .block("fancy_block", FancyBlock::new)
    .recipe((ctx, prov) -> ShapedRecipeBuilder
        .shaped(RecipeCategory.MISC, ctx.getEntry())
        .pattern("###")
        .pattern(" # ")
        .define('#', Items.STONE)
        .unlockedBy("has_stone", has(Items.STONE))
        .save(prov, ctx.getId()))
    .lang("Fancy Block")
    .register();
```

## IX. Accessing Registered Objects via `RegistryEntry`

All `.register()` calls return a `RegistryEntry` (or a subclass such as `ItemEntry`, `BlockEntry`, etc.) which extends
`Supplier<T>`. Call `.get()` to retrieve the registered object:

```java
Item item = MyItems.MY_ITEM.get();
Block block = MyBlocks.MY_BLOCK.get();
EntityType<MyEntity> type = MyEntities.MY_ENTITY.get();
```

> **Warning**: Do not call `.get()` too early during mod initialization. Wait until the registration events have fired
> before accessing registered objects.

## X. Full Example (Combined)

```java
@Mod("my_mod")
public class MyMod {
    public static final Registrum REGISTRUM = Registrum.create("my_mod");

    // Register an item
    public static final ItemEntry<Item> MAGIC_DUST = REGISTRUM
        .item("magic_dust", Item::new)
        .lang("Magic Dust")
        .tab(CreativeModeTabs.INGREDIENTS)
        .register();

    // Register a block (with BlockItem)
    public static final BlockEntry<Block> MAGIC_ORE = REGISTRUM
        .block("magic_ore", Block::new)
        .properties(p -> p.strength(3.0f, 3.0f).requiresCorrectToolForDrops())
        .lang("Magic Ore")
        .defaultBlockstate()
        .defaultLoot()
        .simpleItem()
        .register();

    public MyMod(IEventBus modEventBus) {
        // Automatic registration — nothing extra needed here
    }
}
```

## XI. Notes

- `Registrum.create()` must be executed **before** any `.register()` calls — typically as a `static` field initializer;
- All registration fields should be declared as `public static final` to trigger class loading and registration at
  startup;
- Data generation callbacks in Registrum only run during the `runData` task and have no effect during normal gameplay;
- Part of the Registrum module is based on [Registrate](https://github.com/IThundxr/Registrate) and is licensed under
  the Mozilla Public License 2.0.

