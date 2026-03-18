---
prev:
   text: 数据生成器
   link: /posts/docs/addon/06_data_generation
next:
   text: 配方系统集成
   link: /posts/docs/addon/08_recipe_integration
---

# 配置系统

本章介绍如何使用 AnvilLib 提供的配置系统来管理 Addon 的配置文件。

## 概述

AnvilLib 提供了一个基于注解的配置系统，简化了 NeoForge `ModConfig` 的使用。主要特性包括：

- 简洁的注解式配置定义
- 自动生成配置 GUI 界面
- 支持多种配置类型（客户端/服务端/通用）
- 支持嵌套配置对象
- 支持数值范围限制

## 快速入门

### 1. 定义配置类

使用 `@Config` 注解定义一个配置类：

```java
package com.example.myaddon.config;

import dev.anvilcraft.lib.v2.config.BoundedDiscrete;
import dev.anvilcraft.lib.v2.config.Comment;
import dev.anvilcraft.lib.v2.config.Config;
import net.neoforged.fml.config.ModConfig;

@Config(name = "myaddon", type = ModConfig.Type.COMMON)
public class MyAddonConfig {
    
    @Comment("Enable debug mode")
    public boolean enableDebug = false;
    
    @Comment("Maximum process count")
    @BoundedDiscrete(min = 1, max = 100)
    public int maxProcessCount = 10;
    
    @Comment("Process speed multiplier")
    @BoundedDiscrete(min = 0.1, max = 10.0)
    public double speedMultiplier = 1.0;
}
```

### 2. 注册配置

在你的 mod 主类中注册配置：

```java
package com.example.myaddon;

import dev.anvilcraft.lib.v2.config.ConfigManager;
import com.example.myaddon.config.MyAddonConfig;
import net.neoforged.fml.common.Mod;
import net.neoforged.bus.api.IEventBus;

@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public static final String MOD_ID = "myaddon";
    
    // 注册配置并获取配置实例
    public static final MyAddonConfig CONFIG = ConfigManager.register(MOD_ID, MyAddonConfig::new);
    
    public MyAddon(IEventBus modEventBus) {
        // 其他初始化代码
    }
}
```

### 3. 使用配置

在代码中直接访问配置字段：

```java
public void processItems() {
    if (MyAddon.CONFIG.enableDebug) {
        LOGGER.info("Debug mode enabled");
    }
    
    int count = MyAddon.CONFIG.maxProcessCount;
    double speed = MyAddon.CONFIG.speedMultiplier;
    
    // 使用配置值进行处理
}
```

## 配置类型

`@Config` 注解的 `type` 属性支持以下配置类型：

| 类型                      | 说明             | 文件位置                                             |
|-------------------------|----------------|--------------------------------------------------|
| `ModConfig.Type.COMMON` | 通用配置，客户端和服务端共用 | `config/myaddon-common.toml`                     |
| `ModConfig.Type.CLIENT` | 客户端配置，仅客户端使用   | `config/myaddon-client.toml`                     |
| `ModConfig.Type.SERVER` | 服务端配置，每个世界独立   | `saves/<world>/serverconfig/myaddon-server.toml` |

### 客户端配置示例

```java
@Config(name = "myaddon", type = ModConfig.Type.CLIENT)
public class MyAddonClientConfig {
    
    @Comment("Enable fancy rendering")
    public boolean fancyRendering = true;
    
    @Comment("Render distance for custom effects")
    @BoundedDiscrete(min = 16, max = 256)
    public int effectRenderDistance = 64;
    
    @Comment("GUI scale multiplier")
    @BoundedDiscrete(min = 0.5, max = 2.0)
    public float guiScale = 1.0f;
}
```

### 服务端配置示例

```java
@Config(name = "myaddon", type = ModConfig.Type.SERVER)
public class MyAddonServerConfig {
    
    @Comment("Maximum machine radius")
    @BoundedDiscrete(min = 1, max = 16)
    public int maxMachineRadius = 8;
    
    @Comment("Energy consumption per operation")
    @BoundedDiscrete(min = 0, max = 1000)
    public int energyPerOperation = 100;
    
    @Comment("Allow crafting in creative mode")
    public boolean creativeCrafting = true;
}
```

## 配置注解

### @Config

标记一个类为配置类。

```java
@Config(name = "myaddon", type = ModConfig.Type.COMMON)
public class MyAddonConfig {
    // 配置字段
}
```

| 属性     | 类型             | 必填 | 说明               |
|--------|----------------|----|------------------|
| `name` | String         | 是  | 配置名称，通常使用 mod ID |
| `type` | ModConfig.Type | 否  | 配置类型，默认 `COMMON` |

### @Comment

为配置字段添加注释说明。

```java
@Comment("This is a description of the field")
public int myField = 10;
```

注释会显示在：

- 生成的 TOML 文件中
- 配置 GUI 界面的 tooltip 中

### @BoundedDiscrete

限制数值类型字段的取值范围。

```java
@Comment("A value between 1 and 100")
@BoundedDiscrete(min = 1, max = 100)
public int boundedInt = 50;

@Comment("A decimal value between 0.0 and 1.0")
@BoundedDiscrete(min = 0.0, max = 1.0)
public double boundedDouble = 0.5;
```

| 属性    | 类型     | 默认值                        | 说明  |
|-------|--------|----------------------------|-----|
| `min` | double | `Double.NEGATIVE_INFINITY` | 最小值 |
| `max` | double | `Double.POSITIVE_INFINITY` | 最大值 |

支持的数值类型：`byte`, `short`, `int`, `long`, `float`, `double`

### @CollapsibleObject

标记一个字段为嵌套配置对象，在 GUI 中会显示为可折叠的分组。

```java
@CollapsibleObject
public NestedConfig nested = new NestedConfig();

public static class NestedConfig {
    @Comment("Nested field 1")
    public boolean field1 = true;
    
    @Comment("Nested field 2")
    @BoundedDiscrete(min = 0, max = 10)
    public int field2 = 5;
}
```

## 支持的字段类型

配置系统支持以下字段类型：

| 类型                    | 说明                         |
|-----------------------|----------------------------|
| `boolean` / `Boolean` | 布尔值                        |
| `byte` / `Byte`       | 字节整数                       |
| `short` / `Short`     | 短整数                        |
| `int` / `Integer`     | 整数                         |
| `long` / `Long`       | 长整数                        |
| `float` / `Float`     | 单精度浮点数                     |
| `double` / `Double`   | 双精度浮点数                     |
| `String`              | 字符串                        |
| `Enum`                | 枚举类型                       |
| 嵌套类                   | 使用 `@CollapsibleObject` 标记 |

### 枚举类型示例

```java
@Comment("Select the operation mode")
public OperationMode mode = OperationMode.AUTOMATIC;

public enum OperationMode {
    MANUAL,
    AUTOMATIC,
    HYBRID
}
```

## 完整配置示例

以下是一个完整的配置示例，展示了所有功能：

```java
package com.example.myaddon.config;

import dev.anvilcraft.lib.v2.config.BoundedDiscrete;
import dev.anvilcraft.lib.v2.config.CollapsibleObject;
import dev.anvilcraft.lib.v2.config.Comment;
import dev.anvilcraft.lib.v2.config.Config;
import net.neoforged.fml.config.ModConfig;

@Config(name = "myaddon", type = ModConfig.Type.SERVER)
public class MyAddonServerConfig {
    
    // 布尔值配置
    @Comment("Enable advanced features")
    public boolean advancedFeatures = false;
    
    // 带范围限制的整数配置
    @Comment("Maximum processing radius")
    @BoundedDiscrete(min = 1, max = 16)
    public int maxRadius = 8;
    
    // 带范围限制的浮点数配置
    @Comment("Speed multiplier for all operations")
    @BoundedDiscrete(min = 0.1, max = 10.0)
    public double speedMultiplier = 1.0;
    
    // 枚举配置
    @Comment("Default operation mode")
    public Mode defaultMode = Mode.BALANCED;
    
    // 字符串配置
    @Comment("Custom prefix for messages")
    public String messagePrefix = "[MyAddon]";
    
    // 嵌套配置对象
    @CollapsibleObject
    public MachineSettings machineSettings = new MachineSettings();
    
    @CollapsibleObject
    public EnergySettings energySettings = new EnergySettings();
    
    // 嵌套配置类
    public static class MachineSettings {
        @Comment("Machine tick interval")
        @BoundedDiscrete(min = 1, max = 100)
        public int tickInterval = 20;
        
        @Comment("Auto-restart on failure")
        public boolean autoRestart = true;
        
        @Comment("Maximum retry count")
        @BoundedDiscrete(min = 0, max = 10)
        public int maxRetries = 3;
    }
    
    public static class EnergySettings {
        @Comment("Energy capacity")
        @BoundedDiscrete(min = 1000, max = 1000000)
        public int capacity = 100000;
        
        @Comment("Energy consumption rate")
        @BoundedDiscrete(min = 1, max = 1000)
        public int consumptionRate = 100;
        
        @Comment("Enable energy buffer")
        public boolean enableBuffer = true;
    }
    
    public enum Mode {
        ECONOMY,
        BALANCED,
        PERFORMANCE
    }
}
```

## 注册多个配置

你可以为同一个 mod 注册多个不同类型的配置：

```java
@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public static final String MOD_ID = "myaddon";
    
    // 服务端配置
    public static final MyAddonServerConfig SERVER_CONFIG = 
        ConfigManager.register(MOD_ID, MyAddonServerConfig::new);
    
    // 客户端配置
    public static final MyAddonClientConfig CLIENT_CONFIG = 
        ConfigManager.register(MOD_ID, MyAddonClientConfig::new);
    
    // 通用配置
    public static final MyAddonCommonConfig COMMON_CONFIG = 
        ConfigManager.register(MOD_ID, MyAddonCommonConfig::new);
    
    public MyAddon(IEventBus modEventBus) {
        // 配置会自动注册，无需额外操作
    }
}
```

## 配置文件位置

配置文件根据类型存储在不同位置：

- **COMMON**: `<minecraft>/config/<modid>-common.toml`
- **CLIENT**: `<minecraft>/config/<modid>-client.toml`
- **SERVER**: `<minecraft>/saves/<world>/serverconfig/<modid>-server.toml`

生成的 TOML 文件示例：

```toml
#Enable advanced features
advanced_features = false
#Maximum processing radius
#Range: 1 ~ 16
max_radius = 8
#Speed multiplier for all operations
#Range: 0.1 ~ 10.0
speed_multiplier = 1.0
#Default operation mode
default_mode = "BALANCED"
#Custom prefix for messages
message_prefix = "[MyAddon]"

[machine_settings]
    #Machine tick interval
    #Range: 1 ~ 100
    tick_interval = 20
    #Auto-restart on failure
    auto_restart = true
    #Maximum retry count
    #Range: 0 ~ 10
    max_retries = 3

[energy_settings]
    #Energy capacity
    #Range: 1000 ~ 1000000
    capacity = 100000
    #Energy consumption rate
    #Range: 1 ~ 1000
    consumption_rate = 100
    #Enable energy buffer
    enable_buffer = true
```

## 配置 GUI

AnvilLib 会自动为你的配置注册一个配置界面工厂。玩家可以通过 mod 列表中的配置按钮打开配置界面。

配置界面会：

- 显示所有配置字段
- 使用 `@Comment` 注解的内容作为 tooltip
- 对 `@BoundedDiscrete` 标记的字段显示滑块
- 对枚举字段显示下拉选择框
- 对 `@CollapsibleObject` 标记的字段显示可折叠分组

## 配置本地化

你可以为配置字段提供本地化支持。语言键格式为：

- 配置标题: `<modid>.configuration.title`
- 配置选项: `<modid>.configuration.<field_name>`
- 配置提示: `<modid>.configuration.<field_name>.tooltip`
- 嵌套配置按钮: `<modid>.configuration.<parent>.<field_name>.button`

使用数据生成器生成语言文件：

```java
public class ModLanguageProvider extends LanguageProvider {
    
    public ModLanguageProvider(PackOutput output) {
        super(output, MyAddon.MOD_ID, "en_us");
    }
    
    @Override
    protected void addTranslations() {
        // 使用 ConfigData 自动生成配置翻译
        ConfigData.readConfigClass(this, MyAddonServerConfig.class);
        ConfigData.readConfigClass(this, MyAddonClientConfig.class);
    }
}
```

## 最佳实践

1. **配置类型选择**
    - 影响游戏逻辑的配置使用 `SERVER` 类型
    - 纯客户端视觉效果使用 `CLIENT` 类型
    - 两端都需要的配置使用 `COMMON` 类型

2. **字段命名**
    - 使用驼峰命名法（camelCase）
    - 字段名会自动转换为下划线格式（如 `maxRadius` → `max_radius`）

3. **默认值**
    - 为所有字段提供合理的默认值
    - 默认值应该是大多数用户的最佳选择

4. **范围限制**
    - 对数值字段始终使用 `@BoundedDiscrete`
    - 设置合理的最小和最大值，防止无效配置

5. **注释说明**
    - 为每个字段添加 `@Comment` 说明
    - 注释应简洁明了，说明字段的作用

6. **配置分组**
    - 使用 `@CollapsibleObject` 组织相关配置
    - 避免单个配置类中有太多字段
