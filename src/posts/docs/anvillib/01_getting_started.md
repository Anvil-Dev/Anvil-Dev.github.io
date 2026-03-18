---
prev:
   text: AnvilLib 文档
   link: /posts/docs/anvillib/index
next:
   text: Config 配置模块
   link: /posts/docs/anvillib/02_config
---

# 快速开始

本章节介绍如何将 AnvilLib 引入你的 NeoForge 模组项目。

## 一、添加 Maven 仓库

AnvilLib 已发布至 **Maven Central**，无需添加额外的仓库配置，直接在 `build.gradle` 或 `build.gradle.kts` 中声明依赖即可。

## 二、引入依赖

### Gradle（Groovy DSL）

```groovy
repositories {
    mavenCentral()
}

dependencies {
    // 引入完整库（包含所有子模块）
    implementation "dev.anvilcraft.lib:anvillib-neoforge-1.21.1:2.0.0"

    // 或按需引入单独模块
    implementation "dev.anvilcraft.lib:anvillib-config-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-integration-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-network-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-recipe-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-moveable-entity-block-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-registrum-neoforge-1.21.1:2.0.0"
}
```

### Gradle（Kotlin DSL）

```kotlin
repositories {
    mavenCentral()
}

dependencies {
    // 引入完整库（包含所有子模块）
    implementation("dev.anvilcraft.lib:anvillib-neoforge-1.21.1:2.0.0")

    // 或按需引入单独模块
    implementation("dev.anvilcraft.lib:anvillib-network-neoforge-1.21.1:2.0.0")
}
```

> **提示**：版本号请以 [Maven Central](https://central.sonatype.com/search?q=anvillib) 上的最新发布版本为准。当前文档对应版本为
`2.0.0`。

## 三、模块说明

| Artifact ID                                      | 说明                  |
|--------------------------------------------------|---------------------|
| `anvillib-neoforge-1.21.1`                       | 聚合包，包含全部子模块         |
| `anvillib-config-neoforge-1.21.1`                | 注解驱动的配置管理系统         |
| `anvillib-integration-neoforge-1.21.1`           | 模组集成框架              |
| `anvillib-network-neoforge-1.21.1`               | 网络包自动注册框架           |
| `anvillib-recipe-neoforge-1.21.1`                | 世界内配方系统             |
| `anvillib-moveable-entity-block-neoforge-1.21.1` | 可被活塞推动的方块实体支持       |
| `anvillib-registrum-neoforge-1.21.1`             | 基于 Registrate 的注册系统 |

## 四、环境要求

| 依赖        | 版本要求   |
|-----------|--------|
| Java      | 21+    |
| Minecraft | 1.21.1 |
| NeoForge  | 21.1.x |

## 五、下一步

- [Config 配置模块](02_config.md)
- [Integration 集成模块](03_integration.md)
- [Network 网络模块](04_network.md)
- [Recipe 世界内配方模块](05_recipe.md)
- [Moveable Entity Block 模块](06_moveable_entity_block.md)
- [Registrum 注册模块](07_registrum.md)

