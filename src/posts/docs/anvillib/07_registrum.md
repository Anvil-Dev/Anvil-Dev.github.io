# Registrum 注册模块

Registrum 模块提供了一套基于 [Registrate](https://github.com/IThundxr/Registrate) 的**链式注册 API**，极大简化了物品、方块、实体、流体、菜单等游戏内容的注册流程，并自动整合数据生成（模型、语言文件、战利品表、配方等）。

## 一、创建 `Registrum` 实例

在模组主类中创建一个静态的 `Registrum` 实例：

```java
import dev.anvilcraft.lib.v2.registrum.Registrum;

public class MyMod {
    // 全局唯一，静态持有
    public static final Registrum REGISTRUM = Registrum.create("my_mod");

    public MyMod(IEventBus modEventBus) {
        // 注册在调用 Registrum.create() 时已自动完成
    }
}
```

`Registrum.create(modId)` 会自动查找对应模组的事件总线并注册监听器，无需手动操作。

## 二、注册物品

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.ItemEntry;
import net.minecraft.world.item.Item;

public class MyItems {
    public static final ItemEntry<Item> MY_ITEM = MyMod.REGISTRUM
        .item("my_item", Item::new)
        // 设置物品属性
        .properties(p -> p.stacksTo(16))
        // 设置语言名称（中文等通过数据包处理）
        .lang("My Item")
        // 添加到创造模式标签页
        .tab(CreativeModeTabs.TOOLS_AND_UTILITIES)
        // 完成注册
        .register();
}
```

### `ItemBuilder` 常用方法

| 方法                              | 说明                           |
|---------------------------------|-------------------------------|
| `.properties(p -> ...)`          | 修改 `Item.Properties`          |
| `.lang(String)`                  | 设置英文翻译                    |
| `.model(ctx, prov -> ...)`       | 自定义物品模型                  |
| `.defaultModel()`                | 使用默认生成模型（纹理路径与 ID 同名）|
| `.tab(ResourceKey<CreativeModeTab>)` | 加入创造模式标签页          |
| `.tag(TagKey<Item>...)`          | 添加物品标签                    |
| `.color(() -> () -> color)`      | 设置物品颜色处理器              |
| `.compostable(float)`            | 设置堆肥概率                    |
| `.burnTime(int)`                 | 设置燃料燃烧时间                |
| `.register()`                    | 完成注册，返回 `ItemEntry`      |

## 三、注册方块

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.BlockEntry;
import net.minecraft.world.level.block.Block;

public class MyBlocks {
    public static final BlockEntry<Block> MY_BLOCK = MyMod.REGISTRUM
        .block("my_block", Block::new)
        .properties(p -> p.strength(2.0f, 6.0f).requiresCorrectToolForDrops())
        .lang("My Block")
        // 自动生成 cube_all 方块模型
        .defaultBlockstate()
        // 自动生成自掉落战利品表
        .defaultLoot()
        // 同时注册对应 BlockItem
        .simpleItem()
        .register();
}
```

### `BlockBuilder` 常用方法

| 方法                                    | 说明                             |
|---------------------------------------|--------------------------------|
| `.properties(p -> ...)`               | 修改 `BlockBehaviour.Properties`  |
| `.defaultBlockstate()`                | 生成所有状态映射到同一模型           |
| `.blockstate(ctx, prov -> ...)`       | 自定义 blockstate JSON           |
| `.defaultLoot()`                      | 生成自掉落战利品表                  |
| `.loot(prov -> ...)`                  | 自定义战利品表                     |
| `.simpleItem()`                       | 注册简单 BlockItem                |
| `.item(factory -> ...)`               | 使用 ItemBuilder 自定义 BlockItem  |
| `.blockEntity(type, factory).build()` | 关联方块实体                       |
| `.tag(TagKey<Block>...)`              | 添加方块标签                       |
| `.addLayer(() -> RenderType::...)`    | 设置渲染层（透明、半透明等）         |
| `.register()`                         | 完成注册，返回 `BlockEntry`        |

## 四、注册方块实体

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.BlockEntityEntry;

public class MyBlockEntities {
    public static final BlockEntityEntry<MyBlockEntity> MY_BLOCK_ENTITY = MyMod.REGISTRUM
        .blockEntity("my_block_entity", MyBlockEntity::new)
        // 绑定方块（可绑定多个）
        .validBlock(MyBlocks.MY_BLOCK)
        .register();
}
```

## 五、注册实体

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.EntityEntry;
import net.minecraft.world.entity.MobCategory;

public class MyEntities {
    public static final EntityEntry<MyEntity> MY_ENTITY = MyMod.REGISTRUM
        .entity("my_entity", MyEntity::new, MobCategory.CREATURE)
        .properties(b -> b.sized(0.6f, 1.8f).clientTrackingRange(8))
        .lang("My Entity")
        // 注册实体属性
        .attributes(MyEntity::createAttributes)
        // 注册实体渲染器（仅客户端）
        .renderer(() -> MyEntityRenderer::new)
        // 注册刷怪蛋
        .spawnEgg(0xFF0000, 0x00FF00)
        .register();
}
```

### `EntityBuilder` 常用方法

| 方法                             | 说明                          |
|--------------------------------|-----------------------------|
| `.properties(b -> ...)`         | 修改 `EntityType.Builder`     |
| `.attributes(supplier)`         | 注册实体属性（必须）              |
| `.renderer(() -> factory)`      | 设置客户端渲染器                |
| `.spawnEgg(bg, fg)`             | 注册刷怪蛋（颜色为 ARGB int）    |
| `.tag(TagKey<EntityType<?>>...)` | 添加实体类型标签               |
| `.register()`                   | 完成注册，返回 `EntityEntry`    |

## 六、注册流体

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

## 七、注册菜单

```java
import dev.anvilcraft.lib.v2.registrum.util.entry.MenuEntry;

public class MyMenus {
    public static final MenuEntry<MyMenu> MY_MENU = MyMod.REGISTRUM
        .menu("my_menu", MyMenu::new, MyMenuScreen::new)
        .register();
}
```

## 八、数据生成集成

Registrum 内置了对 NeoForge 数据生成的深度集成，通过 `ProviderType` 可以在 Builder 中直接声明数据提供器回调：

```java
MyMod.REGISTRUM
    .block("fancy_block", FancyBlock::new)
    // 自定义配方
    .recipe((ctx, prov) -> ShapedRecipeBuilder
        .shaped(RecipeCategory.MISC, ctx.getEntry())
        .pattern("###")
        .pattern(" # ")
        .define('#', Items.STONE)
        .unlockedBy("has_stone", has(Items.STONE))
        .save(prov, ctx.getId()))
    // 自定义语言文件
    .lang("Fancy Block")
    .register();
```

## 九、`RegistryEntry` 访问注册结果

所有 `.register()` 方法返回的 `RegistryEntry`（或其子类 `ItemEntry`、`BlockEntry` 等）继承自 `Supplier<T>`，可直接调用 `.get()` 获取注册对象：

```java
Item item = MyItems.MY_ITEM.get();
Block block = MyBlocks.MY_BLOCK.get();
EntityType<MyEntity> type = MyEntities.MY_ENTITY.get();
```

> **注意**：不应在模组初始化阶段过早调用 `.get()`，应等注册事件完成后再访问。

## 十、完整示例（综合）

```java
@Mod("my_mod")
public class MyMod {
    public static final Registrum REGISTRUM = Registrum.create("my_mod");

    // 注册物品
    public static final ItemEntry<Item> MAGIC_DUST = REGISTRUM
        .item("magic_dust", Item::new)
        .lang("Magic Dust")
        .tab(CreativeModeTabs.INGREDIENTS)
        .register();

    // 注册方块（含 BlockItem）
    public static final BlockEntry<Block> MAGIC_ORE = REGISTRUM
        .block("magic_ore", Block::new)
        .properties(p -> p.strength(3.0f, 3.0f).requiresCorrectToolForDrops())
        .lang("Magic Ore")
        .defaultBlockstate()
        .defaultLoot()
        .simpleItem()
        .register();

    public MyMod(IEventBus modEventBus) {
        // 自动注册，无需额外操作
    }
}
```

## 十一、注意事项

- `Registrum.create()` 必须在**任何 `.register()` 调用之前**完成，通常作为静态字段初始化；
- 所有注册字段推荐使用 `public static final` 声明，确保在类加载时触发注册；
- Registrum 的数据生成回调仅在运行 `runData` 任务时生效，不影响游戏运行；
- Registrum 部分代码基于 [Registrate](https://github.com/IThundxr/Registrate)，遵循 Mozilla Public License 2.0。

