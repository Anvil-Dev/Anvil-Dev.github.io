# Config 配置模块

Config 模块提供了一套基于 **Java 注解** 的配置管理系统，让你无需手动编写 NeoForge `ModConfigSpec`，只需定义一个普通的 Java 类，通过注解即可完成配置注册、范围限制、注释生成和客户端 GUI 的自动生成。

## 一、核心注解

### `@Config`

作用于配置类上，声明该类为一个配置类。

```java
package dev.anvilcraft.lib.v2.config;

@interface Config {
    String name();                          // 配置文件名（不含扩展名）
    ModConfig.Type type() default COMMON;   // 配置类型：COMMON / CLIENT / SERVER
}
```

### `@Comment`

作用于字段上，为配置项添加注释说明，会被写入 TOML 配置文件。

```java
@Comment("启用调试模式")
public boolean debugMode = false;
```

### `@BoundedDiscrete`

作用于数值类型字段（`int`、`long`、`float`、`double` 等），限定允许的数值范围。

```java
@BoundedDiscrete(min = 1, max = 100)
public int maxCount = 10;
```

| 属性    | 类型       | 默认值                  | 说明       |
|-------|----------|----------------------|----------|
| `min` | `double` | `Double.NEGATIVE_INFINITY` | 最小值（含） |
| `max` | `double` | `Double.POSITIVE_INFINITY` | 最大值（含） |

### `@CollapsibleObject`

作用于非基本类型字段，表示该字段是一个**嵌套配置对象**（对应 TOML 中的 section）。嵌套对象的字段同样支持上述所有注解。

```java
@CollapsibleObject
public AdvancedSettings advanced = new AdvancedSettings();
```

## 二、`ConfigManager` 注册

通过 `ConfigManager.register(modId, factory)` 完成配置注册。该方法会：

1. 自动扫描配置类上的 `@Config` 注解；
2. 将配置注册到对应模组的 `ModContainer`；
3. 若当前处于客户端，自动注册 NeoForge 原生配置 GUI（`ConfigurationScreen`）。

```java
ConfigManager.register(String modId, Supplier<T> configFactory)
```

| 参数            | 类型                | 说明                  |
|---------------|-------------------|---------------------|
| `modId`       | `String`          | 模组 ID               |
| `configFactory` | `Supplier<T>`   | 配置类构造工厂（通常为 `MyConfig::new`） |
| 返回值           | `T`               | 配置实例，可直接持有引用        |

## 三、完整示例

### 1. 定义配置类

```java
import dev.anvilcraft.lib.v2.config.BoundedDiscrete;
import dev.anvilcraft.lib.v2.config.CollapsibleObject;
import dev.anvilcraft.lib.v2.config.Comment;
import dev.anvilcraft.lib.v2.config.Config;
import net.neoforged.fml.config.ModConfig;

@Config(name = "my_mod", type = ModConfig.Type.COMMON)
public class MyModConfig {

    @Comment("是否启用调试模式")
    public boolean debugMode = false;

    @Comment("服务器最大连接数")
    @BoundedDiscrete(min = 1, max = 256)
    public int maxConnections = 32;

    @Comment("生成概率（0.0 ~ 1.0）")
    @BoundedDiscrete(min = 0.0, max = 1.0)
    public double spawnChance = 0.5;

    @Comment("高级设置")
    @CollapsibleObject
    public AdvancedSettings advanced = new AdvancedSettings();

    public static class AdvancedSettings {
        @Comment("启用实验性功能")
        public boolean enableExperimental = false;

        @Comment("缓存大小")
        @BoundedDiscrete(min = 64, max = 4096)
        public int cacheSize = 512;
    }
}
```

### 2. 注册配置

在模组主类中注册配置，并持有引用：

```java
import dev.anvilcraft.lib.v2.config.ConfigManager;

@Mod("my_mod")
public class MyMod {
    public static final MyModConfig CONFIG =
        ConfigManager.register("my_mod", MyModConfig::new);

    public MyMod(IEventBus modEventBus) {
        // 其他初始化代码...
    }
}
```

### 3. 在代码中访问配置

```java
if (MyMod.CONFIG.debugMode) {
    // 调试逻辑
}

int limit = MyMod.CONFIG.maxConnections;
```

## 四、支持的数据类型

| Java 类型   | 说明                               |
|-----------|----------------------------------|
| `boolean` | 布尔值                              |
| `int`     | 整数，支持 `@BoundedDiscrete`          |
| `long`    | 长整数，支持 `@BoundedDiscrete`         |
| `float`   | 单精度浮点，支持 `@BoundedDiscrete`      |
| `double`  | 双精度浮点，支持 `@BoundedDiscrete`      |
| `String`  | 字符串                              |
| `List<T>` | 基本类型列表                           |
| 嵌套对象       | 使用 `@CollapsibleObject` 标注的自定义类型 |

## 五、自动 GUI

在客户端，`ConfigManager` 会自动将 NeoForge 的 `ConfigurationScreen` 注册为配置 GUI，无需手动实现。玩家可以通过模组列表页面直接打开可视化配置界面。

## 六、注意事项

- 配置类必须有**无参构造函数**；
- 配置字段必须为 `public` 非 `final` 字段；
- `ConfigManager.register` 应在模组构造函数中（即模组事件总线注册之后）调用；
- 配置实例是线程安全读取的，但不应在配置加载前访问。

