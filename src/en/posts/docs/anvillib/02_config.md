# Config Module

The Config module provides an **annotation-based** configuration management system that eliminates the need to manually write NeoForge `ModConfigSpec`. Simply define a plain Java class, annotate its fields, and registration, range validation, comment generation, and client GUI creation are all handled automatically.

## I. Core Annotations

### `@Config`

Applied to a configuration class to declare it as a config class.

```java
package dev.anvilcraft.lib.v2.config;

@interface Config {
    String name();                          // Config file name (without extension)
    ModConfig.Type type() default COMMON;   // Config type: COMMON / CLIENT / SERVER
}
```

### `@Comment`

Applied to fields to add human-readable comments that are written into the generated TOML file.

```java
@Comment("Enable debug mode")
public boolean debugMode = false;
```

### `@BoundedDiscrete`

Applied to numeric fields (`int`, `long`, `float`, `double`, etc.) to restrict the allowed value range.

```java
@BoundedDiscrete(min = 1, max = 100)
public int maxCount = 10;
```

| Property | Type     | Default                     | Description      |
|----------|----------|-----------------------------|------------------|
| `min`    | `double` | `Double.NEGATIVE_INFINITY`  | Minimum (inclusive) |
| `max`    | `double` | `Double.POSITIVE_INFINITY`  | Maximum (inclusive) |

### `@CollapsibleObject`

Applied to non-primitive fields to mark them as **nested configuration objects** (corresponding to TOML sections). Nested object fields support all the same annotations.

```java
@CollapsibleObject
public AdvancedSettings advanced = new AdvancedSettings();
```

## II. Registering with `ConfigManager`

Use `ConfigManager.register(modId, factory)` to register your configuration. This method will:

1. Scan the config class for the `@Config` annotation;
2. Register the config with the corresponding mod's `ModContainer`;
3. On the client side, automatically register a NeoForge `ConfigurationScreen` GUI.

```java
ConfigManager.register(String modId, Supplier<T> configFactory)
```

| Parameter       | Type            | Description                                      |
|-----------------|-----------------|--------------------------------------------------|
| `modId`         | `String`        | The mod ID                                       |
| `configFactory` | `Supplier<T>`   | Config class factory (usually `MyConfig::new`)   |
| Return value    | `T`             | The config instance — hold a reference to it     |

## III. Full Example

### 1. Define a Config Class

```java
import dev.anvilcraft.lib.v2.config.BoundedDiscrete;
import dev.anvilcraft.lib.v2.config.CollapsibleObject;
import dev.anvilcraft.lib.v2.config.Comment;
import dev.anvilcraft.lib.v2.config.Config;
import net.neoforged.fml.config.ModConfig;

@Config(name = "my_mod", type = ModConfig.Type.COMMON)
public class MyModConfig {

    @Comment("Whether to enable debug mode")
    public boolean debugMode = false;

    @Comment("Maximum server connections")
    @BoundedDiscrete(min = 1, max = 256)
    public int maxConnections = 32;

    @Comment("Spawn chance (0.0 to 1.0)")
    @BoundedDiscrete(min = 0.0, max = 1.0)
    public double spawnChance = 0.5;

    @Comment("Advanced settings")
    @CollapsibleObject
    public AdvancedSettings advanced = new AdvancedSettings();

    public static class AdvancedSettings {
        @Comment("Enable experimental features")
        public boolean enableExperimental = false;

        @Comment("Cache size")
        @BoundedDiscrete(min = 64, max = 4096)
        public int cacheSize = 512;
    }
}
```

### 2. Register the Config

Register in your mod's main class and hold a reference to the returned instance:

```java
import dev.anvilcraft.lib.v2.config.ConfigManager;

@Mod("my_mod")
public class MyMod {
    public static final MyModConfig CONFIG =
        ConfigManager.register("my_mod", MyModConfig::new);

    public MyMod(IEventBus modEventBus) {
        // Other initialization...
    }
}
```

### 3. Accessing the Config

```java
if (MyMod.CONFIG.debugMode) {
    // Debug logic
}

int limit = MyMod.CONFIG.maxConnections;
```

## IV. Supported Field Types

| Java Type  | Notes                                              |
|------------|----------------------------------------------------|
| `boolean`  | Boolean toggle                                     |
| `int`      | Integer, supports `@BoundedDiscrete`               |
| `long`     | Long integer, supports `@BoundedDiscrete`          |
| `float`    | Single-precision float, supports `@BoundedDiscrete`|
| `double`   | Double-precision float, supports `@BoundedDiscrete`|
| `String`   | String value                                       |
| `List<T>`  | List of primitives                                 |
| Nested object | Custom types annotated with `@CollapsibleObject` |

## V. Automatic GUI

On the client side, `ConfigManager` automatically registers NeoForge's `ConfigurationScreen` as the mod's config GUI. Players can open the visual config screen directly from the mod list screen — no manual implementation required.

## VI. Notes

- Config classes must have a **no-argument constructor**;
- Config fields must be `public` and non-`final`;
- `ConfigManager.register` should be called inside the mod constructor (after the event bus is available);
- Config instances are safe to read from any thread after loading, but should not be accessed before the config load event fires.

