# 配置 Gradle 与接口注入

从与本文分支相同的上游检出目录复制 `gradlew`、`gradlew.bat` 和 `gradle/wrapper/` 到新目录。在项目根目录创建下面两个文件。使用 JDK 21 执行 Wrapper。

## settings.gradle

```groovy
pluginManagement {
    repositories {
        gradlePluginPortal()
        maven { url = uri('https://maven.neoforged.net/releases') }
    }
}
rootProject.name = 'sandstone_press'
```

## build.gradle

```groovy
plugins {
    id 'java-library'
    id 'net.neoforged.moddev' version '2.0.147'
}

group = 'dev.example'
version = '1.0.0'
java.toolchain.languageVersion = JavaLanguageVersion.of(21)
tasks.withType(JavaCompile).configureEach { options.encoding = 'UTF-8' }

repositories {
    exclusiveContent {
        forRepositories(
            mavenCentral(),
            maven {
                name = 'Cjsah Maven'
                url = uri('https://server.cjsah.net:1002/maven/releases/')
            }
        )
        filter {
            includeGroup 'dev.anvilcraft.lib'
            includeGroup 'dev.anvilcraft.resource'
            includeGroup 'dev.dubhe'
        }
    }
}

neoForge {
    version = '21.1.238'
    mods {
        sandstone_press { sourceSet sourceSets.main }
    }
    runs { client { client() } }
}

dependencies {
    implementation 'dev.dubhe:anvilcraft-neoforge-1.21.1:1.6.0+snapshot.2991'
    implementation 'dev.anvilcraft.lib:anvillib-neoforge-1.21.1:2.0.0'
    interfaceInjectionData 'dev.anvilcraft.lib:anvillib-recipe-neoforge-1.21.1:2.0.0'
    interfaceInjectionData 'dev.anvilcraft.lib:anvillib-moveable-entity-block-neoforge-1.21.1:2.0.0'

}
```

## 为什么要过滤 Maven 组

NeoForge Maven 只同步了 Maven Central 的部分内容。Gradle 一旦从某个仓库选中模块元数据，会继续从该仓库解析该模块所需的变体。普通 Java 类能编译，并不能证明接口注入所需的变体也能解析。`exclusiveContent` 将表中的组限定到 Maven Central 与 Cjsah Maven，避免 NeoForge 的镜像抢先命中不完整的发布。

| 配置 | 解析的内容 | 何时使用 |
| --- | --- | --- |
| `implementation` | 模组和 AnvilLib 的 Java 类型 | 编译附属、准备开发客户端时。 |
| `interfaceInjectionData` | 子模块发布的注入描述 | ModDevGradle 准备 Minecraft 开发产物时。给原版类型添加的接口必须在这一步进入开发类路径。 |
| `includeGroup` | Maven 的精确 group | `dev.anvilcraft.lib` 包含各 AnvilLib 子模块，`dev.anvilcraft.resource` 包含藿香，`dev.dubhe` 包含铁砧工艺。 |

若 Gradle 报缺少注入变体，先运行 `./gradlew dependencies --configuration interfaceInjectionData`，再检查坐标中的 Minecraft 后缀和仓库过滤。只加聚合库到 `implementation` 不会把单独发布的注入描述加入这项配置。

[仓库过滤](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/gradle/scripts/repositories.gradle) · [上游依赖](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/dependencies.gradle)
