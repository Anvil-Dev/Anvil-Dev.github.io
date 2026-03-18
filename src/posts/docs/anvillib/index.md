# AnvilLib 文档

**AnvilLib** 是由 [Anvil Dev](https://github.com/Anvil-Dev) 开发的 NeoForge 模组库，为 Minecraft（1.21.1）模组开发者提供一系列实用的工具和框架。

## 模块概览

AnvilLib 采用模块化设计，每个模块可以独立引入，也可以引入聚合包获得所有功能。

| 模块                        | Maven Artifact（含前缀 `dev.anvilcraft.lib:`）                              | 说明                   |
|---------------------------|-----------------------------------------------------------------------|----------------------|
| **Config**                | `anvillib-config-neoforge-1.21.1`                                     | 基于注解的配置系统            |
| **Integration**           | `anvillib-integration-neoforge-1.21.1`                                | 模组兼容性集成框架            |
| **Network**               | `anvillib-network-neoforge-1.21.1`                                    | 网络通信与数据包自动注册         |
| **Recipe**                | `anvillib-recipe-neoforge-1.21.1`                                     | 世界内配方系统              |
| **Moveable Entity Block** | `anvillib-moveable-entity-block-neoforge-1.21.1`                      | 可被活塞推动的方块实体支持        |
| **Registrum**             | `anvillib-registrum-neoforge-1.21.1`                                  | 简化的注册系统（基于 Registrate）|
| **Main（聚合）**              | `anvillib-neoforge-1.21.1`                                            | 包含所有子模块的聚合发行包        |

## 环境要求

- Java 21+
- Minecraft 1.21.1
- NeoForge 21.1.x

## 文档导航

1. [快速开始（依赖引入）](01_getting_started.md)
2. [Config 配置模块](02_config.md)
3. [Integration 集成模块](03_integration.md)
4. [Network 网络模块](04_network.md)
5. [Recipe 世界内配方模块](05_recipe.md)
6. [Moveable Entity Block 模块](06_moveable_entity_block.md)
7. [Registrum 注册模块](07_registrum.md)

