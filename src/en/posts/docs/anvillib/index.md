---
next:
   text: Getting Started
   link: /en/posts/docs/anvillib/01_getting_started
---

# AnvilLib Documentation

**AnvilLib** is a NeoForge mod library developed by [Anvil Dev](https://github.com/Anvil-Dev), providing Minecraft (
1.21.1) mod developers with a collection of practical tools and frameworks.

## Module Overview

AnvilLib uses a modular design. Each module can be included independently, or you can use the aggregate artifact to get
all features at once.

| Module                    | Maven Artifact (prefix `dev.anvilcraft.lib:`)    | Description                                          |
|---------------------------|--------------------------------------------------|------------------------------------------------------|
| **Config**                | `anvillib-config-neoforge-1.21.1`                | Annotation-based configuration system                |
| **Integration**           | `anvillib-integration-neoforge-1.21.1`           | Mod compatibility integration framework              |
| **Network**               | `anvillib-network-neoforge-1.21.1`               | Networking with automatic packet registration        |
| **Recipe**                | `anvillib-recipe-neoforge-1.21.1`                | In-world recipe system                               |
| **Moveable Entity Block** | `anvillib-moveable-entity-block-neoforge-1.21.1` | Support for piston-movable block entities            |
| **Registrum**             | `anvillib-registrum-neoforge-1.21.1`             | Simplified registration system (based on Registrate) |
| **Main (Aggregate)**      | `anvillib-neoforge-1.21.1`                       | Aggregate artifact bundling all submodules           |

## Requirements

- Java 21+
- Minecraft 1.21.1
- NeoForge 21.1.x

## Documentation Navigation

1. [Getting Started (Dependency Setup)](01_getting_started.md)
2. [Config Module](02_config.md)
3. [Integration Module](03_integration.md)
4. [Network Module](04_network.md)
5. [Recipe (In-World Recipe) Module](05_recipe.md)
6. [Moveable Entity Block Module](06_moveable_entity_block.md)
7. [Registrum Module](07_registrum.md)

