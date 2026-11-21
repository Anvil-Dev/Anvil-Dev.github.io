# 配置 Gradle 与接口注入

从对应上游分支的检出目录里，把 `gradlew`、`gradlew.bat` 和 `gradle/wrapper/` 复制到新项目目录，再在根目录新建下面两个文件。执行 Wrapper 时请使用 JDK 25。

## settings.gradle

```groovy
pluginManagement {
    repositories {
        gradlePluginPortal()
        maven { url = uri('https://maven.neoforged.net/releases') }
    }
}
rootProject.name = 'field_guide'
```

## build.gradle

```groovy
plugins {
    id 'java-library'
    id 'net.neoforged.moddev' version '2.0.147'
}

group = 'dev.example'
version = '1.0.0'
java.toolchain.languageVersion = JavaLanguageVersion.of(25)
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
    version = '26.1.2.114'
    mods {
        field_guide { sourceSet sourceSets.main }
    }
    runs { client { client() } }
}

dependencies {
    implementation 'dev.anvilcraft.resource:ageratum-neoforge-26.1.2:0.0.1+build.153'
    implementation 'dev.anvilcraft.lib:anvillib-config-neoforge-26.1:2.0.0'
    implementation 'dev.anvilcraft.lib:anvillib-rendering-neoforge-26.1:2.0.0'
    implementation 'dev.anvilcraft.lib:anvillib-registrum-neoforge-26.1:2.0.0'
    implementation 'dev.anvilcraft.lib:anvillib-font-neoforge-26.1:2.0.0'
    interfaceInjectionData 'dev.anvilcraft.lib:anvillib-font-neoforge-26.1:2.0.0'


}
```

Ageratum 用到了 AnvilLib 的配置、Registrum、字体和渲染子模块。其中字体模块会单独发布接口注入描述，所以示例里把同一个坐标同时加进了 Java 编译路径和 ModDevGradle 的注入配置。

## 为什么要过滤 Maven 组

NeoForge Maven 只同步了 Maven Central 的一部分内容。Gradle 一旦从某个仓库选中了模块元数据，就会继续从同一个仓库解析这个模块的变体。所以普通 Java 类能编过，不代表接口注入所需的变体也能找到。用 `exclusiveContent` 把这几个组限定到 Maven Central 和 Cjsah Maven，就是为了防止 NeoForge 镜像抢先命中不完整的发布。

| 配置 | 解析的内容 | 何时使用 |
| --- | --- | --- |
| `implementation` | 模组和 AnvilLib 的 Java 类型 | 编译附属、准备开发客户端时。 |
| `interfaceInjectionData` | 子模块发布的注入描述 | ModDevGradle 准备 Minecraft 开发产物时。给原版类型添加的接口必须在这一步进入开发类路径。 |
| `includeGroup` | Maven 的精确 group | `dev.anvilcraft.lib` 包含各 AnvilLib 子模块，`dev.anvilcraft.resource` 包含藿香，`dev.dubhe` 包含铁砧工艺。 |

若 Gradle 报缺少注入变体，先运行 `./gradlew dependencies --configuration interfaceInjectionData`，再检查坐标中的 Minecraft 后缀和仓库过滤。只加聚合库到 `implementation` 不会把单独发布的注入描述加入这项配置。

[仓库过滤](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/gradle/scripts/repositories.gradle) · [上游依赖](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/dependencies.gradle)
