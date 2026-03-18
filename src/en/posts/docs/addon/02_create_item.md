# Registering Items

## Open `init.AddonItems.java`, and you will see the following code:

* ```java
  public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .register();
  ```
  This statement is an example of registering an item, where `example_item` is the ID of the item you are about to register, and `Item::new` is a reference to your item class constructor.
* ```java
  static {
      REGISTRUM.defaultCreativeTab(ModItemGroups.EXAMPLE_TAB.getKey());
  }
  ```
  This code block indicates that items registered after this point will be added to the specified creative mode tab.
* ```java
  public static void register() {}
  ```
  This empty method is used to load this class.

## This chapter will detail how to use `REGISTRUM.item()`

* After using the `REGISTRUM.item()` method, you will get an `ItemBuilder` object that has a `.register()` method. Calling it returns an `ItemEntry`, and the corresponding item will be automatically registered at the appropriate time. The following will focus on `ItemBuilder` and its methods.

### `ItemBuilder.properties()`
  * This method is used to modify the default properties of an item. It accepts a `NonNullUnaryOperator<Item.Properties>` function, and you can call this method multiple times to accumulate modifications.
  * Example usage:
    ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .properties(prop -> prop.durability(15))
        .register();
    ```
    This example shows how to set the maximum durability for a registered item.

### `ItemBuilder.initialProperties()`
  * This method is used to replace the initial properties of an item. It accepts a `NonNullSupplier<Item.Properties>` supplier, and the return value will be used as the initial item properties.
  * Example usage:
    ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .initialProperties(Item.Properties::new)
        .register();
    ```
    This example shows how to set the default properties for a registered item. Note that you usually don't need to do this as this behavior is already defined by default in `Registrum`. This example is for educational purposes only.

### `ItemBuilder.tab()`, `ItemBuilder.removeTab()`
  * The `tab()` method is used to add an item to a specified creative mode tab.
  * The `removeTab()` method is used to remove an item from a specified creative mode tab.
  * If you have already set a default creative mode tab in the static code block of the class, you usually don't need to call this method again.
  * Example usage:
    ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .tab(ModItemGroups.EXAMPLE_TAB.getKey())
        .register();
    ```

### `ItemBuilder.color()`
  * Register a color handler for this item. For most items, you don't need to use this method. However, if you want to create items similar to potions, this method is very helpful.
  * Example usage:
    ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .color(() -> () -> (itemStack, tintIndex) -> 0xFFFFFFFF)
        .register();
    ```
    This usage is for learning purposes only; the return value is the ARGB value of the color.

### `ItemBuilder.model()`
  * This method is used to set the model generator for an item.
  * ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .model((ctx, provider) -> provider.handheld(ctx))
        .register();
    ```
    This example shows how to set a handheld item parent model (like various tools) generator for an item.

### `ItemBuilder.lang()`
  * This method is used to set the default English display name for an item. If not specified, the registration ID will be automatically converted to upper camel case with spaces as the display name. This method generates `en_us` and `en_ud` (upside-down English) language files.
  * ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .lang("Item Example")
        .register();
    ```
    This example shows how to change the default display name of a registered item to `Item Example`.

### `ItemBuilder.recipe()`
  * This method is used to set the recipe generator for an item.
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
    This example shows how to generate a shaped crafting recipe for an item, along with corresponding unlock advancements.

### `ItemBuilder.tag()`
  * This method is used to set the tag generator for an item. It can be called multiple times to add multiple tags.
  * ```java
    public static final ItemEntry<Item> EXAMPLE_ITEM = REGISTRUM
        .item("example_item", Item::new)
        .tag(ItemTags.AXES)
        .register();
    ```
    This example shows how to add an item to the vanilla axes tag.

## Custom Item Classes

In addition to using the vanilla Item class, you can also create custom item classes:

```java
public class CustomItem extends Item {
    public CustomItem(Properties properties) {
        super(properties);
    }

    @Override
    public void inventoryTick(ItemStack stack, Level level, Entity entity, int slotId, boolean isSelected) {
        // Add custom logic
        super.inventoryTick(stack, level, entity, slotId, isSelected);
    }
}
```

Then use it when registering:

```java
public static final ItemEntry<CustomItem> CUSTOM_ITEM = REGISTRUM
    .item("custom_item", CustomItem::new)
    .register();
```

## Item Registration Best Practices

1. **Naming Conventions**
    * Use lowercase letters and underscores for item IDs
    * Keep naming consistent and descriptive

2. **Organized Classification**
    * Put related items in the same class
    * Use meaningful class names, such as `ToolItems`, `MaterialItems`, etc.

3. **Timely Registration**
    * Ensure you call the `register()` method in the mod main class constructor
    * Example: `AddonItems.register();`

4. **Avoid Duplicate Registration**
    * Each item should only be registered once
    * Use unique item IDs

## Complete Example

Here is a complete custom item registration example:

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

This example demonstrates how to:

- Create an item with "uncommon" rarity
- Set a custom localized name
- Add a crafting recipe
- Add a custom tag
