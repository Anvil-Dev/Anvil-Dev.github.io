# Integration Module

The Integration module provides an **annotation-scanning based mod integration framework** that allows your mod to automatically load additional integration code when other mods are present — without manually checking `ModList.isLoaded()` everywhere.

## I. Core Annotation

### `@Integration`

Applied to an integration class to declare it as an integration for a specific mod.

```java
package dev.anvilcraft.lib.v2.integration;

@interface Integration {
    String value();                    // Target mod ID
    String version() default "*";     // Target mod version range (Maven format)
    IntegrationType[] type() default {CLIENT, DEDICATED_SERVER}; // Runtime environments
}
```

#### `version` — Version Range Format

Uses Maven version range syntax:

| Expression        | Meaning                            |
|-------------------|------------------------------------|
| `*`               | Any version (default)              |
| `[1.0,)`          | 1.0 or higher                      |
| `[1.0,2.0)`       | ≥ 1.0 and < 2.0                    |
| `[1.0,2.0]`       | ≥ 1.0 and ≤ 2.0                    |
| `(,1.0]`          | 1.0 or lower                       |
| `1.0`             | Exact version 1.0                  |

#### `type` — Runtime Environments

| Enum Value           | Description                               |
|----------------------|-------------------------------------------|
| `CLIENT`             | Loaded on physical client                 |
| `DEDICATED_SERVER`   | Loaded on dedicated server (default)      |
| `DATA`               | Loaded during data generation             |

## II. `IntegrationManager`

```java
// Create a manager for your mod (typically stored as a static field)
IntegrationManager manager = new IntegrationManager("my_mod");

// Scan @Integration annotations (call during loading phase)
manager.compileContent();

// Load all common integrations
manager.loadAllIntegrations();

// Load client-only integrations
manager.loadAllClientIntegrations();

// Load data generation integrations
manager.loadAllDataIntegrations();
```

## III. Integration Class Lifecycle Methods

Integration classes are instantiated by `IntegrationManager` via reflection and **must have a no-argument constructor**. The framework will look for and call the following methods (all optional):

| Method Name     | When Called                                              |
|-----------------|----------------------------------------------------------|
| `apply()`       | During mod loading (common — `CLIENT` / `DEDICATED_SERVER`) |
| `applyClient()` | During client initialization (`CLIENT`)                  |
| `applyData()`   | During data generation (`DATA`)                          |

## IV. Full Example

### 1. Define Integration Classes

```java
import dev.anvilcraft.lib.v2.integration.Integration;
import dev.anvilcraft.lib.v2.integration.IntegrationType;

// Automatically loaded when JEI 19.0+ is present, client-side only
@Integration(
    value = "jei",
    version = "[19.0,)",
    type = {IntegrationType.CLIENT}
)
public class JEIIntegration {

    public JEIIntegration() {
        // No-arg constructor required
    }

    // Called during client initialization
    public void applyClient() {
        // Register JEI plugins, categories, etc.
        System.out.println("JEI Integration loaded!");
    }
}
```

```java
// Common integration for REI (loaded on both client and server)
@Integration(value = "roughlyenoughitems", version = "[15.0,)")
public class REIIntegration {

    public void apply() {
        // Integration logic that runs on both sides
    }
}
```

### 2. Set Up the Manager in Your Mod Class

```java
import dev.anvilcraft.lib.v2.integration.IntegrationManager;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;
import net.neoforged.bus.api.IEventBus;

@Mod("my_mod")
public class MyMod {
    public static final IntegrationManager INTEGRATION_MANAGER =
        new IntegrationManager("my_mod");

    public MyMod(IEventBus modEventBus) {
        // Scan @Integration annotations
        INTEGRATION_MANAGER.compileContent();
        modEventBus.addListener(this::commonSetup);
    }

    private void commonSetup(FMLCommonSetupEvent event) {
        // Load all common integrations
        INTEGRATION_MANAGER.loadAllIntegrations();
    }
}
```

### 3. Client Entry Point

```java
import net.neoforged.api.distmarker.Dist;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLClientSetupEvent;

@Mod(value = "my_mod", dist = Dist.CLIENT)
public class MyModClient {

    public MyModClient(IEventBus modEventBus) {
        modEventBus.addListener(this::clientSetup);
    }

    private void clientSetup(FMLClientSetupEvent event) {
        MyMod.INTEGRATION_MANAGER.loadAllClientIntegrations();
    }
}
```

## V. `IntegrationHook`

`IntegrationHook` provides static context accessible during data generation, allowing `applyData()` implementations to access `GatherDataEvent`, `IEventBus`, and `ModContainer`:

```java
import dev.anvilcraft.lib.v2.integration.IntegrationHook;

@Integration(value = "some_mod", type = {IntegrationType.DATA})
public class SomeModDataIntegration {

    public void applyData() {
        GatherDataEvent event = IntegrationHook.getEvent();
        IEventBus bus = IntegrationHook.getModEventBus();
        // Register data providers...
    }
}
```

## VI. Notes

- `compileContent()` must be called during the **FML loading phase** (when mod scan data is available) — typically inside the mod constructor;
- Integration classes **must not** contain `static` initializer blocks that reference the target mod's classes, as this will cause `NoClassDefFoundError` when that mod is absent;
- It is recommended to place each integration class in a dedicated sub-package separate from your main logic;
- If an integration class declares none of `apply()`, `applyClient()`, or `applyData()`, `IntegrationManager` will emit a warning in the log.

