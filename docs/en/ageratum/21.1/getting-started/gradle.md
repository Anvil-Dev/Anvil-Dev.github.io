# Configure Gradle and Interface Injection

Copy `gradlew`, `gradlew.bat`, and `gradle/wrapper/` from the checkout of the corresponding upstream branch into your new project directory, then create the following two files in the project root. Use JDK 21 when running the Gradle Wrapper.

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
        field_guide { sourceSet sourceSets.main }
    }
    runs { client { client() } }
}

dependencies {
    implementation 'dev.anvilcraft.resource:ageratum-neoforge-1.21.1:0.0.1+build.152'
    implementation 'dev.anvilcraft.lib:anvillib-config-neoforge-1.21.1:2.0.0'
    implementation 'dev.anvilcraft.lib:anvillib-rendering-neoforge-1.21.1:2.0.0'
    if (providers.gradleProperty('recipeInjection').isPresent()) {
        implementation 'dev.anvilcraft.lib:anvillib-recipe-neoforge-1.21.1:2.0.0'
        interfaceInjectionData 'dev.anvilcraft.lib:anvillib-recipe-neoforge-1.21.1:2.0.0'
    }


}
```

Ageratum itself only uses the config and rendering submodules of AnvilLib, so writing guides alone does not require recipe interface injection. If your add-on mod also calls recipe interfaces injected onto vanilla types by AnvilLib, add `recipeInjection=true` to `gradle.properties` and refresh your development environment.

## Why Filter Maven Groups

NeoForge Maven only mirrors a subset of Maven Central. Once Gradle resolves module metadata from a repository, it continues resolving variants of that module from the same repository. As a result, plain Java classes may compile while the variants needed for interface injection cannot be found. Using `exclusiveContent` to restrict these groups to Maven Central and Cjsah Maven prevents the NeoForge mirror from matching incomplete publications first.

| Configuration | What It Resolves | When to Use |
| --- | --- | --- |
| `implementation` | Java types of the mod and AnvilLib | Compiling the add-on and preparing the dev client. |
| `interfaceInjectionData` | Injection descriptors published by submodules | When ModDevGradle prepares Minecraft dev artifacts; interfaces added to vanilla types must enter the dev classpath here. |
| `includeGroup` | Exact Maven group | `dev.anvilcraft.lib` contains AnvilLib submodules, `dev.anvilcraft.resource` contains Ageratum, and `dev.dubhe` contains AnvilCraft. |

If Gradle reports a missing injection variant, run `./gradlew dependencies --configuration interfaceInjectionData` first, then check the Minecraft version suffix in the coordinates and the repository filter. Adding only an umbrella library to `implementation` will not add separately published injection descriptors to this configuration.

[Repository filtering](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/gradle/scripts/repositories.gradle) · [Upstream dependencies](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/dependencies.gradle)
