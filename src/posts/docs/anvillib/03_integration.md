---
prev:
   text: Config 配置模块
   link: /posts/docs/anvillib/02_config
next:
   text: Network 网络模块
   link: /posts/docs/anvillib/04_network
---

# Integration 集成模块

Integration 模块提供了一套基于注解扫描的**模组集成框架**，让你的模组能够在其他模组存在时自动加载额外的集成代码，而无需通过
`ModList.isLoaded()` 手动进行条件判断。

## 一、核心注解

### `@Integration`

作用于集成类上，声明该类为针对某个模组的集成类。

```java
package dev.anvilcraft.lib.v2.integration;

@interface Integration {
    String value();                    // 目标模组 ID
    String version() default "*";     // 目标模组版本范围（Maven 格式）
    IntegrationType[] type() default {CLIENT, DEDICATED_SERVER}; // 运行环境
}
```

#### `version` 版本范围格式

采用 Maven 版本范围语法：

| 表达式         | 含义              |
|-------------|-----------------|
| `*`         | 任意版本（默认）        |
| `[1.0,)`    | 1.0 及以上         |
| `[1.0,2.0)` | 1.0（含）到 2.0（不含） |
| `[1.0,2.0]` | 1.0 到 2.0（均含）   |
| `(,1.0]`    | 1.0 及以下         |
| `1.0`       | 精确匹配 1.0        |

#### `type` 运行环境

| 枚举值                | 说明             |
|--------------------|----------------|
| `CLIENT`           | 物理客户端运行时加载     |
| `DEDICATED_SERVER` | 专用服务端运行时加载（默认） |
| `DATA`             | 数据生成阶段加载       |

## 二、`IntegrationManager` 注册

```java
// 在模组主类或专用入口点中创建管理器
IntegrationManager manager = new IntegrationManager("my_mod");

// 扫描注解（在加载阶段调用）
manager.compileContent();

// 加载所有集成（通用入口点）
manager.loadAllIntegrations();

// 加载客户端专属集成
manager.loadAllClientIntegrations();

// 加载数据生成专属集成
manager.loadAllDataIntegrations();
```

## 三、集成类生命周期方法

集成类由 `IntegrationManager` 通过反射实例化，必须有**无参构造函数**。框架会依次查找并调用以下方法（均为可选）：

| 方法名             | 调用时机                                       |
|-----------------|--------------------------------------------|
| `apply()`       | 模组加载时（通用，对应 `CLIENT` / `DEDICATED_SERVER`） |
| `applyClient()` | 客户端初始化时（对应 `CLIENT`）                       |
| `applyData()`   | 数据生成阶段（对应 `DATA`）                          |

## 四、完整示例

### 1. 定义集成类

```java
import dev.anvilcraft.lib.v2.integration.Integration;
import dev.anvilcraft.lib.v2.integration.IntegrationType;

// 在 JEI 19.0+ 存在时自动加载，仅在客户端生效
@Integration(
    value = "jei",
    version = "[19.0,)",
    type = {IntegrationType.CLIENT}
)
public class JEIIntegration {

    public JEIIntegration() {
        // 无参构造函数
    }

    // 客户端初始化时调用
    public void applyClient() {
        // 注册 JEI 插件、分类等
        System.out.println("JEI Integration loaded!");
    }
}
```

```java
// 对 REI 的通用集成（客户端 + 服务端均加载）
@Integration(value = "roughlyenoughitems", version = "[15.0,)")
public class REIIntegration {

    public void apply() {
        // 双端均可执行的集成逻辑
    }
}
```

### 2. 在模组主类中启动管理器

```java
import dev.anvilcraft.lib.v2.integration.IntegrationManager;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.bus.api.SubscribeEvent;

@Mod("my_mod")
public class MyMod {
    private static final IntegrationManager INTEGRATION_MANAGER =
        new IntegrationManager("my_mod");

    public MyMod(IEventBus modEventBus) {
        // 扫描 @Integration 注解
        INTEGRATION_MANAGER.compileContent();

        modEventBus.addListener(this::commonSetup);
    }

    private void commonSetup(FMLCommonSetupEvent event) {
        // 加载所有通用集成
        INTEGRATION_MANAGER.loadAllIntegrations();
    }
}
```

### 3. 客户端集成入口

```java
import net.neoforged.api.distmarker.Dist;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.event.lifecycle.FMLClientSetupEvent;
import net.neoforged.bus.api.IEventBus;

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

## 五、`IntegrationHook`

`IntegrationHook` 提供了在数据生成阶段可访问的静态上下文，可用于在 `applyData()` 中获取 `GatherDataEvent`、`IEventBus` 和
`ModContainer`：

```java
import dev.anvilcraft.lib.v2.integration.IntegrationHook;

@Integration(value = "some_mod", type = {IntegrationType.DATA})
public class SomeModDataIntegration {

    public void applyData() {
        GatherDataEvent event = IntegrationHook.getEvent();
        IEventBus bus = IntegrationHook.getModEventBus();
        // 注册数据生成器...
    }
}
```

## 六、注意事项

- `compileContent()` 必须在 **FML 加载阶段**（即模组扫描数据可用时）调用，通常在模组构造函数中执行；
- 集成类**不应**包含任何 `static` 初始化块引用目标模组的类，否则在目标模组不存在时会抛出 `NoClassDefFoundError`；
- 推荐将每个集成类单独放置在专用包中，避免与主逻辑混合；
- 若某集成类既未声明 `apply()` 也未声明 `applyClient()` 或 `applyData()`，`IntegrationManager` 会在日志中输出警告。

