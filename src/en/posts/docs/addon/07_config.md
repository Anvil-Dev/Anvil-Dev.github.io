---
prev:
   text: Data Generators
   link: /en/posts/docs/addon/06_data_generation
next:
   text: Recipe System Integration
   link: /en/posts/docs/addon/08_recipe_integration
---

# Configuration System

This chapter introduces how to use the configuration system provided by AnvilLib to manage your Addon's configuration
files.

## Overview

AnvilLib provides an annotation-based configuration system that simplifies the use of NeoForge `ModConfig`. Main
features include:

- Concise annotation-based configuration definitions
- Automatic configuration GUI generation
- Support for multiple configuration types (client/server/common)
- Support for nested configuration objects
- Support for numeric range constraints

## Quick Start

### 1. Define Configuration Class

Use the `@Config` annotation to define a configuration class:

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

### 2. Register Configuration

Register the configuration in your mod's main class:

```java
package com.example.myaddon;

import dev.anvilcraft.lib.v2.config.ConfigManager;
import com.example.myaddon.config.MyAddonConfig;
import net.neoforged.fml.common.Mod;
import net.neoforged.bus.api.IEventBus;

@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public static final String MOD_ID = "myaddon";
    
    // Register configuration and get the config instance
    public static final MyAddonConfig CONFIG = ConfigManager.register(MOD_ID, MyAddonConfig::new);
    
    public MyAddon(IEventBus modEventBus) {
        // Other initialization code
    }
}
```

### 3. Use Configuration

Access configuration fields directly in your code:

```java
public void processItems() {
    if (MyAddon.CONFIG.enableDebug) {
        LOGGER.info("Debug mode enabled");
    }
    
    int count = MyAddon.CONFIG.maxProcessCount;
    double speed = MyAddon.CONFIG.speedMultiplier;
    
    // Use config values for processing
}
```

## Configuration Types

The `type` attribute of the `@Config` annotation supports the following configuration types:

| Type                    | Description                                     | File Location                                    |
|-------------------------|-------------------------------------------------|--------------------------------------------------|
| `ModConfig.Type.COMMON` | Common config, shared between client and server | `config/myaddon-common.toml`                     |
| `ModConfig.Type.CLIENT` | Client config, client-side only                 | `config/myaddon-client.toml`                     |
| `ModConfig.Type.SERVER` | Server config, per-world                        | `saves/<world>/serverconfig/myaddon-server.toml` |

### Client Configuration Example

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

### Server Configuration Example

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

## Configuration Annotations

### @Config

Marks a class as a configuration class.

```java
@Config(name = "myaddon", type = ModConfig.Type.COMMON)
public class MyAddonConfig {
    // Configuration fields
}
```

| Attribute | Type           | Required | Description                              |
|-----------|----------------|----------|------------------------------------------|
| `name`    | String         | Yes      | Configuration name, typically the mod ID |
| `type`    | ModConfig.Type | No       | Configuration type, defaults to `COMMON` |

### @Comment

Adds a comment description to a configuration field.

```java
@Comment("This is a description of the field")
public int myField = 10;
```

Comments are displayed in:

- Generated TOML files
- Configuration GUI tooltips

### @BoundedDiscrete

Constrains the value range of numeric type fields.

```java
@Comment("A value between 1 and 100")
@BoundedDiscrete(min = 1, max = 100)
public int boundedInt = 50;

@Comment("A decimal value between 0.0 and 1.0")
@BoundedDiscrete(min = 0.0, max = 1.0)
public double boundedDouble = 0.5;
```

| Attribute | Type   | Default                    | Description   |
|-----------|--------|----------------------------|---------------|
| `min`     | double | `Double.NEGATIVE_INFINITY` | Minimum value |
| `max`     | double | `Double.POSITIVE_INFINITY` | Maximum value |

Supported numeric types: `byte`, `short`, `int`, `long`, `float`, `double`

### @CollapsibleObject

Marks a field as a nested configuration object, displayed as a collapsible group in the GUI.

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

## Supported Field Types

The configuration system supports the following field types:

| Type                  | Description                      |
|-----------------------|----------------------------------|
| `boolean` / `Boolean` | Boolean value                    |
| `byte` / `Byte`       | Byte integer                     |
| `short` / `Short`     | Short integer                    |
| `int` / `Integer`     | Integer                          |
| `long` / `Long`       | Long integer                     |
| `float` / `Float`     | Single-precision floating point  |
| `double` / `Double`   | Double-precision floating point  |
| `String`              | String                           |
| `Enum`                | Enum types                       |
| Nested class          | Marked with `@CollapsibleObject` |

### Enum Type Example

```java
@Comment("Select the operation mode")
public OperationMode mode = OperationMode.AUTOMATIC;

public enum OperationMode {
    MANUAL,
    AUTOMATIC,
    HYBRID
}
```

## Complete Configuration Example

Here's a complete configuration example demonstrating all features:

```java
package com.example.myaddon.config;

import dev.anvilcraft.lib.v2.config.BoundedDiscrete;
import dev.anvilcraft.lib.v2.config.CollapsibleObject;
import dev.anvilcraft.lib.v2.config.Comment;
import dev.anvilcraft.lib.v2.config.Config;
import net.neoforged.fml.config.ModConfig;

@Config(name = "myaddon", type = ModConfig.Type.SERVER)
public class MyAddonServerConfig {
    
    // Boolean configuration
    @Comment("Enable advanced features")
    public boolean advancedFeatures = false;
    
    // Range-constrained integer configuration
    @Comment("Maximum processing radius")
    @BoundedDiscrete(min = 1, max = 16)
    public int maxRadius = 8;
    
    // Range-constrained floating point configuration
    @Comment("Speed multiplier for all operations")
    @BoundedDiscrete(min = 0.1, max = 10.0)
    public double speedMultiplier = 1.0;
    
    // Enum configuration
    @Comment("Default operation mode")
    public Mode defaultMode = Mode.BALANCED;
    
    // String configuration
    @Comment("Custom prefix for messages")
    public String messagePrefix = "[MyAddon]";
    
    // Nested configuration objects
    @CollapsibleObject
    public MachineSettings machineSettings = new MachineSettings();
    
    @CollapsibleObject
    public EnergySettings energySettings = new EnergySettings();
    
    // Nested configuration classes
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

## Registering Multiple Configurations

You can register multiple configurations of different types for the same mod:

```java
@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public static final String MOD_ID = "myaddon";
    
    // Server configuration
    public static final MyAddonServerConfig SERVER_CONFIG = 
        ConfigManager.register(MOD_ID, MyAddonServerConfig::new);
    
    // Client configuration
    public static final MyAddonClientConfig CLIENT_CONFIG = 
        ConfigManager.register(MOD_ID, MyAddonClientConfig::new);
    
    // Common configuration
    public static final MyAddonCommonConfig COMMON_CONFIG = 
        ConfigManager.register(MOD_ID, MyAddonCommonConfig::new);
    
    public MyAddon(IEventBus modEventBus) {
        // Configurations are automatically registered, no additional operations needed
    }
}
```

## Configuration File Locations

Configuration files are stored in different locations based on their type:

- **COMMON**: `<minecraft>/config/<modid>-common.toml`
- **CLIENT**: `<minecraft>/config/<modid>-client.toml`
- **SERVER**: `<minecraft>/saves/<world>/serverconfig/<modid>-server.toml`

Generated TOML file example:

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

## Configuration GUI

AnvilLib automatically registers a configuration screen factory for your configuration. Players can open the
configuration screen through the configuration button in the mod list.

The configuration screen will:

- Display all configuration fields
- Use `@Comment` annotation content as tooltips
- Show sliders for `@BoundedDiscrete` marked fields
- Show dropdown selectors for enum fields
- Show collapsible groups for `@CollapsibleObject` marked fields

## Configuration Localization

You can provide localization support for configuration fields. Language key formats are:

- Configuration title: `<modid>.configuration.title`
- Configuration option: `<modid>.configuration.<field_name>`
- Configuration tooltip: `<modid>.configuration.<field_name>.tooltip`
- Nested configuration button: `<modid>.configuration.<parent>.<field_name>.button`

Use data generators to generate language files:

```java
public class ModLanguageProvider extends LanguageProvider {
    
    public ModLanguageProvider(PackOutput output) {
        super(output, MyAddon.MOD_ID, "en_us");
    }
    
    @Override
    protected void addTranslations() {
        // Use ConfigData to automatically generate config translations
        ConfigData.readConfigClass(this, MyAddonServerConfig.class);
        ConfigData.readConfigClass(this, MyAddonClientConfig.class);
    }
}
```

## Best Practices

1. **Configuration Type Selection**
    - Use `SERVER` type for configs that affect game logic
    - Use `CLIENT` type for purely visual effects
    - Use `COMMON` type for configs needed on both sides

2. **Field Naming**
    - Use camelCase naming convention
    - Field names are automatically converted to snake_case (e.g., `maxRadius` → `max_radius`)

3. **Default Values**
    - Provide reasonable default values for all fields
    - Default values should be the best choice for most users

4. **Range Constraints**
    - Always use `@BoundedDiscrete` for numeric fields
    - Set reasonable minimum and maximum values to prevent invalid configurations

5. **Comment Descriptions**
    - Add `@Comment` descriptions to every field
    - Comments should be concise and clear, explaining the field's purpose

6. **Configuration Grouping**
    - Use `@CollapsibleObject` to organize related configurations
    - Avoid having too many fields in a single configuration class
