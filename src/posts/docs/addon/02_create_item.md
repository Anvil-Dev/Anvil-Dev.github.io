# 注册物品

## 打开 `init.AddonItems.java` ，你将看到如下语句：

* ```java
  public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .register();
  ```
  该语句即为注册物品的示例，其中 `example_item` 为你即将注册的物品的ID，`Item::new` 为你物品类构造方法的引用。
* ```java
  static {
      REGISTRUM.defaultCreativeTab(ModItemGroups.EXAMPLE_TAB.getKey());
  }
  ```
  该代码块代表在此之后注册的物品将添加至指定的创造模式物品栏
* ```java
  public static void register() {}
  ```
  该空方法用以加载此类

## 本章节内容将详细介绍 `REGISTRUM.item()` 的使用方法

* 使用 `REGISTRUM.item()` 方法后，你将拿到一个 `ItemBuilder` ，该对象拥有一个 `.register()` 方法，调用后返回一个 `ItemEntry` ，其对应的物品将在合适的时机自动注册，后文将着重介绍 `ItemBuilder` 与其所具备的方法。

### `ItemBuilder.properties()`
  * 该方法用于修改物品的默认属性，可以接受一个 `NonNullUnaryOperator<Item.Properties>` 函数，你可以多次调用此方法来累加修改
  * 示例用法：
    ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .properties(prop -> prop.durability(15))
        .register();
    ```
    该示例展示了如何为注册的物品设置最大耐久值

### `ItemBuilder.initialProperties()`
  * 该方法用于替换物品的初始属性，接受一个 `NonNullSupplier<Item.Properties>` 供应商，返回值将作为该物品的初始物品属性
  * 示例用法：
    ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .initialProperties(Item.Properties::new)
        .register();
    ```
    该示例展示了如何为注册的物品设置物品默认属性，注意，你通常不需要这么做，该行为已在 `Registrum` 中默认定义，该实例仅作为教学示范

### `ItemBuilder.tab()` 、 `ItemBuilder.removeTab()`
  * `tab()` 方法用于将物品添加到指定的创造模式物品栏
  * `removeTab()` 方法用于从指定的创造模式物品栏移除物品
  * 如果你已经在类的静态代码块中设置了默认的创造模式物品栏，通常不需要再次调用此方法
  * 示例用法：
    ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .tab(ModItemGroups.EXAMPLE_TAB.getKey())
        .register();
    ```

### `ItemBuilder.color()`
  * 为该物品注册颜色处理器，对于大多数物品，你不需要使用该方法，特别的，如果你想制作类似药水的物品，该方法则很有帮助
  * 示例用法：
    ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .color(() -> () -> (itemStack, tintIndex) -> 0xFFFFFFFF)
        .register();
    ```
    该用法仅供学习，返回值为颜色的 ARGB 值

### `ItemBuilder.model()`
  * 该方法用于设定物品的模型生成器
  * ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .model((ctx, provider) -> provider.handheld(ctx))
        .register();
    ```
    该示例展示了如何为物品设置手持物品父模型（例如各种工具）的模型生成器

### `ItemBuilder.lang()`
  * 该方法用于设定物品的默认英文显示名称，未指定时，将自动使用注册ID转大驼峰加空格作为显示名称，该方法会生成 `en_us` 与 `en_ud`（倒置英语）语言文件
  * ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .lang("Item Example")
        .register();
    ```
    该示例展示了如何将注册物品的默认显示名称修改为 `Item Example`

### `ItemBuilder.recipe()`
  * 该方法用于设置物品的配方生成器
  * ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .recipe((ctx, provider) -> ShapedRecipeBuilder.shaped(RecipeCategory.MISC, ctx.get())
            .pattern("AB")
            .pattern("BA")
            .define('A', Items.IRON_INGOT)
            .define('B', Items.COPPER_INGOT)
            .unlockedBy("has_iron_ingot", RegistrumRecipeProvider.has(Items.IRON_INGOT))
            .unlockedBy("has_copper_ingot", RegistrumRecipeProvider.has(Items.COPPER_INGOT))
            .save(provider)
        )
        .register();
    ```
    该示例展示了如何为物品生成一个有序合成的配方，同时还将生成对应的解锁进度

### `ItemBuilder.tag()`
  * 该方法用于设置物品的标签生成器，可以多次调用以添加多个标签
  * ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .tag(ItemTags.AXES)
        .register();
    ```
    该示例展示如何将物品加入至原版斧子标签内

## 自定义物品类

除了使用原版 Item 类，你还可以创建自定义的物品类：

```java
public class CustomItem extends Item {
    public CustomItem(Properties properties) {
        super(properties);
    }

    @Override
    public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) {
        // 添加自定义逻辑
        super.inventoryTick(stack, level, entity, slotId, isSelected);
    }
}
```

然后在注册时使用：

```java
public static final ItemEntry<CustomItem> CUSTOM_ITEM = REGISTRUM
    .item("custom_item", CustomItem::new)
    .register();
```

## 物品注册最佳实践

1. **命名规范**
    * 使用小写字母和下划线命名物品ID
    * 保持命名的一致性和描述性

2. **分类组织**
    * 将相关的物品放在同一个类中
    * 使用有意义的类名，如 `ToolItems`、`MaterialItems` 等

3. **及时注册**
    * 确保在 mod 主类的构造函数中调用 `register()` 方法
    * 例如：`AddonItems.register();`

4. **避免重复注册**
    * 每个物品只应注册一次
    * 使用唯一的物品ID

## 完整示例

以下是一个完整的自定义物品注册示例：

```java
public static final ItemEntry<Item> RUBY = REGISTRUM
    .item("ruby", Item::new)
    .properties(p -> p.rarity(Rarity.UNCOMMON))
    .lang("Ruby")
    .recipe((ctx, provider) -> ShapedRecipeBuilder.shaped(RecipeCategory.MISC, ctx.get())
        .pattern("XXX")
        .pattern("XXX")
        .pattern("XXX")
        .define('X', Tags.Items.GEMS)
        .unlockedBy("has_gems", RegistrumRecipeProvider.has(Tags.Items.GEMS))
        .save(provider))
    .tag(ItemTags.create(ResourceLocation.fromNamespaceAndPath("c", "gems/ruby")))
    .register();
```

这个示例展示了如何：

- 创建一个稀有度为"不常见"的物品
- 设置自定义的本地化名称
- 添加合成配方
- 添加自定义标签
