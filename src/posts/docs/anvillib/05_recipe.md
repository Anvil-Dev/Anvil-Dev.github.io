---
prev:
   text: Network 网络模块
   link: /posts/docs/anvillib/04_network
next:
   text: Moveable Entity Block 模块
   link: /posts/docs/anvillib/06_moveable_entity_block
---

# Recipe 世界内配方模块

Recipe 模块提供了一套**世界内配方（In-World Recipe）**系统，允许模组开发者定义在世界中（而非工作台）触发并执行的配方，典型场景包括：物品落入铁砧下方、爆炸触发合成、生物踩踏物品等。

## 一、配方组成

一个 `InWorldRecipe` 由以下四个部分组成：

| 组成部分          | 接口                 | 说明                   |
|---------------|--------------------|----------------------|
| **Trigger**   | `IRecipeTrigger`   | 触发条件，决定什么情况下运行配方匹配流程 |
| **Predicate** | `IRecipePredicate` | 配方谓词，判断当前场景是否满足配方要求  |
| **Outcome**   | `IRecipeOutcome`   | 配方结果，定义配方成功后执行的操作    |
| **Priority**  | `IPrioritized`     | 优先级，数值越大越先匹配         |

## 二、内置实现

### 触发器（Trigger）

框架内置了一套触发器注册机制，模组可通过 `LibRegistries.TRIGGER_REGISTRY` 注册自定义触发器。AnvilCraft
中使用的触发器（如铁砧落地）均由上层模组注册。

### 谓词（Predicate）

内置谓词用于在配方匹配时检测世界状态：

| 谓词类                  | 说明                          |
|----------------------|-----------------------------|
| `HasItem`            | 检查指定范围内是否存在特定物品（支持物品谓词）     |
| `HasItemIngredient`  | 检查指定范围内是否有物品匹配指定 Ingredient |
| `HasBlock`           | 检查指定偏移位置的方块状态               |
| `HasBlockIngredient` | 检查方块是否匹配 BlockIngredient    |

### 结果（Outcome）

内置结果：

| 结果类                | 说明                     |
|--------------------|------------------------|
| `SpawnItem`        | 在指定位置生成物品实体，支持概率与数量提供器 |
| `SetBlock`         | 在指定位置设置方块（包含 NBT 数据）   |
| `ProduceExplosion` | 在指定位置产生爆炸              |
| `ChooseOneOutcome` | 从多个结果中按权重随机选择一个执行      |

## 三、数据包 JSON 结构

InWorldRecipe 完全基于数据包，JSON 文件放置于：

```
data/<namespace>/recipe/<name>.json
```

### 基础 JSON 结构

```json
{
  "type": "anvillib:in_world",
  "icon": { "id": "minecraft:anvil" },
  "trigger": "anvilcraft:falling_anvil",
  "priority": 0,
  "compatible": false,
  "max_efficiency": 2147483647,
  "predicates": [
    {
      "type": "anvillib:has_item",
      "offset": [0.0, -1.0, 0.0],
      "range": [0.5, 0.5, 0.5],
      "item": {
        "items": ["minecraft:iron_ingot"],
        "count": { "min": 3 }
      }
    }
  ],
  "outcomes": [
    {
      "type": "anvillib:spawn_item",
      "item": { "id": "minecraft:iron_block" },
      "count": 1,
      "offset": [0.0, 0.0, 0.0]
    }
  ]
}
```

| 字段               | 类型        | 说明                           |
|------------------|-----------|------------------------------|
| `type`           | String    | 配方类型，固定为 `anvillib:in_world` |
| `icon`           | ItemStack | 用于 JEI/REI 等展示的图标物品          |
| `trigger`        | String    | 触发器 ID（由上层模组注册）              |
| `priority`       | int       | 优先级，默认 `0`，越高越先匹配            |
| `compatible`     | boolean   | 是否兼容模式（允许与其他同触发配方共存）         |
| `max_efficiency` | int       | 最大效率限制                       |
| `predicates`     | Array     | 谓词列表                         |
| `outcomes`       | Array     | 结果列表                         |

## 四、在数据生成中使用

`InWorldRecipeBuilder` 提供了链式 API，用于在数据生成时程序化构建配方：

```java
import dev.anvilcraft.lib.v2.recipe.builder.InWorldRecipeBuilder;
import dev.anvilcraft.lib.v2.recipe.predicate.item.HasItem;
import dev.anvilcraft.lib.v2.recipe.outcome.SpawnItem;
import dev.anvilcraft.lib.v2.recipe.outcome.SetBlock;

// 构建一个配方：有 3 个铁锭时压制成铁块
InWorldRecipeBuilder.create(MY_TRIGGER)
    .hasItem(
        HasItem.builder()
            .offset(0, -1, 0)
            .range(0.5, 0.5, 0.5)
            .items(Items.IRON_INGOT)
            .count(MinMaxBounds.Ints.atLeast(3))
            .build()
    )
    .spawnItem(
        SpawnItem.builder()
            .item(Items.IRON_BLOCK)
            .count(1)
            .build()
    )
    .save(output, ResourceLocation.fromNamespaceAndPath("my_mod", "iron_compress"));
```

### `InWorldRecipeBuilder` 常用方法

| 方法                                     | 说明          |
|----------------------------------------|-------------|
| `InWorldRecipeBuilder.create(trigger)` | 创建构建器，指定触发器 |
| `.hasItem(HasItem)`                    | 添加物品谓词      |
| `.hasBlock(HasBlock)`                  | 添加方块谓词      |
| `.spawnItem(SpawnItem)`                | 添加生成物品结果    |
| `.setBlock(SetBlock)`                  | 添加设置方块结果    |
| `.priority(int)`                       | 设置优先级       |
| `.compatible(boolean)`                 | 设置兼容模式      |
| `.icon(ItemStack)`                     | 设置配方图标      |
| `.save(output, id)`                    | 输出配方 JSON   |

## 五、自定义谓词

实现 `IRecipePredicate<P>` 接口，并注册到 `LibRegistries.PREDICATE_TYPE_REGISTRY`：

```java
public class MyPredicate implements IRecipePredicate<MyPredicate> {

    public static final MapCodec<MyPredicate> CODEC = ...;

    @Override
    public Type<MyPredicate> getType() {
        return MyRecipePredicateTypes.MY_PREDICATE.get();
    }

    @Override
    public boolean test(InWorldRecipeContext context) {
        // 判断是否满足条件
        return true;
    }

    public static class Type implements IRecipePredicate.Type<MyPredicate> {
        @Override
        public MapCodec<MyPredicate> codec() { return CODEC; }
    }
}
```

## 六、自定义结果

实现 `IRecipeOutcome<O>` 接口，并注册到 `LibRegistries.OUTCOME_TYPE_REGISTRY`：

```java
public class MyOutcome implements IRecipeOutcome<MyOutcome> {

    @Override
    public Type<MyOutcome> getType() {
        return MyRecipeOutcomeTypes.MY_OUTCOME.get();
    }

    @Override
    public void accept(InWorldRecipeContext context) {
        // 执行配方结果逻辑
        ServerLevel level = context.getLevel();
        Vec3 pos = context.getPos();
        // ...
    }
}
```

## 七、`InWorldRecipeContext`

`InWorldRecipeContext` 是配方执行时传递的上下文对象，提供了以下能力：

| 方法                          | 说明                   |
|-----------------------------|----------------------|
| `getLevel()`                | 获取 ServerLevel       |
| `getPos()`                  | 获取触发位置（Vec3）         |
| `computeIfAbsent(key)`      | 获取或创建缓存（如 ItemCache） |
| `putAcceptor(id, acceptor)` | 注册缓存提交器              |
| `getFloat(NumberProvider)`  | 从数字提供器求值             |

## 八、概率系统

结果类通过 `chance()` 方法返回一个 `NumberProvider`，在 `acceptWithChance(context)` 中自动处理概率判断：

```java
// JSON 中使用随机概率
{
  "type": "anvillib:spawn_item",
  "item": { "id": "minecraft:diamond" },
  "chance": { "type": "minecraft:uniform", "min": 0.0, "max": 1.0 }
}
```

## 九、注意事项

- Recipe 模块仅负责框架，**触发器的具体触发逻辑**（如监听铁砧落地事件）由使用该框架的上层模组（如 AnvilCraft）实现；
- 配方 JSON 中的 `trigger` 字段值是在 `LibRegistries.TRIGGER_REGISTRY` 中注册的触发器 ResourceLocation；
- `ChooseOneOutcome` 用于多结果随机选择，需内置权重列表；
- 优先级相同的配方之间不保证固定顺序。

