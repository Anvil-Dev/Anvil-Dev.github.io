# Getting Started

This section explains how to add AnvilLib as a dependency in your NeoForge mod project.

## I. Maven Repository

AnvilLib is published to **Maven Central** — no additional repository configuration is required. Simply declare the dependency in your `build.gradle` or `build.gradle.kts`.

## II. Adding Dependencies

### Gradle (Groovy DSL)

```groovy
repositories {
    mavenCentral()
}

dependencies {
    // Full library (includes all submodules)
    implementation "dev.anvilcraft.lib:anvillib-neoforge-1.21.1:2.0.0"

    // Or import individual modules as needed
    implementation "dev.anvilcraft.lib:anvillib-config-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-integration-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-network-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-recipe-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-moveable-entity-block-neoforge-1.21.1:2.0.0"
    implementation "dev.anvilcraft.lib:anvillib-registrum-neoforge-1.21.1:2.0.0"
}
```

### Gradle (Kotlin DSL)

```kotlin
repositories {
    mavenCentral()
}

dependencies {
    // Full library (includes all submodules)
    implementation("dev.anvilcraft.lib:anvillib-neoforge-1.21.1:2.0.0")

    // Or import individual modules as needed
    implementation("dev.anvilcraft.lib:anvillib-network-neoforge-1.21.1:2.0.0")
}
```

> **Tip**: Always check [Maven Central](https://central.sonatype.com/search?q=anvillib) for the latest release version. This documentation corresponds to version `2.0.0`.

## III. Module Reference

| Artifact ID                                        | Description                                         |
|---------------------------------------------------|-----------------------------------------------------|
| `anvillib-neoforge-1.21.1`                         | Aggregate artifact — includes all submodules        |
| `anvillib-config-neoforge-1.21.1`                  | Annotation-driven configuration management system   |
| `anvillib-integration-neoforge-1.21.1`             | Mod integration framework                           |
| `anvillib-network-neoforge-1.21.1`                 | Automatic packet registration framework             |
| `anvillib-recipe-neoforge-1.21.1`                  | In-world recipe system                              |
| `anvillib-moveable-entity-block-neoforge-1.21.1`   | Support for piston-movable block entities           |
| `anvillib-registrum-neoforge-1.21.1`               | Registrate-based registration system                |

## IV. Requirements

| Dependency  | Required Version |
|-------------|-----------------|
| Java        | 21+             |
| Minecraft   | 1.21.1          |
| NeoForge    | 21.1.x          |

## V. Next Steps

- [Config Module](02_config.md)
- [Integration Module](03_integration.md)
- [Network Module](04_network.md)
- [Recipe (In-World Recipe) Module](05_recipe.md)
- [Moveable Entity Block Module](06_moveable_entity_block.md)
- [Registrum Module](07_registrum.md)

