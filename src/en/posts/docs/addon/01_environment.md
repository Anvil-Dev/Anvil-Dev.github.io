---
prev:
   text: Addon Development
   link: /en/posts/docs/addon/index
next:
   text: Registering Items
   link: /en/posts/docs/addon/02_create_item
---

# Environment Setup

## I. Prerequisites

1. Install `IntelliJ IDEA`
2. Install `IntelliJ IDEA` plugins:
    * [Minecraft Development](https://plugins.jetbrains.com/plugin/8327-minecraft-development)

## II. Create Repository from Addon Template

1. Open the [Addon Template Repository](https://github.com/Anvil-Dev/AnvilCraftAddonTemplate), click `Use this template`
   in the top right corner, and select `Create a new repository`;
2. Enter the relevant information for your addon mod on the new page, such as name and description. We recommend naming
   it in the format `AnvilCraft-${AddonName}`, for example `AnvilCraft-Demo`;
3. Clone the repository to your local machine;
    * Please search for instructions on how to do this

## III. Build Environment

1. Open the cloned repository directory with `IntelliJ IDEA`
2. Open `gradle.properties` and modify it with your mod information:
    * `maven_group`
        * Maven group
        * Usually the main package name
        * Recommended to use `dev.anvilcraft.${addonId}`
        * Example: `dev.anvilcraft.demo`
    * `mod_id`
        * Mod ID
        * Recommended to use `anvilcraft_addonId`
        * Example: `anvilcraft_demo`
    * `mod_name`
        * Mod name
        * Recommended to use `AnvilCraft-${AddonName}`
        * Example: `AnvilCraft-Demo`
    * `mod_description`
        * Mod description
    * `mod_license`
        * Mod open source license, recommended to use `LGPL-3.0 license`
        * If you directly include AnvilCraft source code or modified AnvilCraft source code, this must be
          `LGPL-3.0 license`
    * `mod_version`
        * Mod version number
    * `mod_authors`
        * Mod authors
3. Modify dependency information in `gradle/libs.versions.toml`:
    * `versions`.`anvilCraft`
        * AnvilCraft version number
        * You can check the latest version
          at [this link](https://server.cjsah.net:1002/maven/dev/dubhe/anvilcraft-neoforge-1.21.1/maven-metadata.xml)
4. Modify the package name in the following paths to your own package name:
    * `src/main/java`
    * Example: `dev.anvilcraft.addon.demo`
5. Modify `MOD_ID` in `AnvilCraftAddonTemplate.java` to your own mod id
    * Example: `anvilcraft_demo`
6. Rename `AnvilCraftAddonTemplate.java` to your own MOD class name
    * Example: `AnvilCraftDemo.java`
7. Rename `AnvilCraftAddonTemplateClient.java` to your own MOD class name
    * Example: `AnvilCraftDemoClient.java`
8. Rename `src/main/resources/anvilcraft_addon_template.mixins.json` to your own MOD mixins json name
    * Example: `src/main/resources/anvilcraft_demo.mixins.json`
9. Rename `src/main/resources/assets/anvilcraft_addon_template` to your own MOD resource pack namespace
    * Example: `src/main/resources/assets/anvilcraft_demo`
10. Reload Gradle scripts
11. Run the `Tasks -> loom -> dataCopy` task
12. Run the `Tasks -> loom -> genSources` task
13. Reload Gradle scripts
14. Your development environment is now fully ready

## IV. Verify Environment

1. Run the `Tasks -> neoforge runs -> runClient` task to test the environment
    * If Minecraft starts normally and you can see your mod, the environment is configured successfully

2. Check log output
    * Confirm there are no error messages
    * Verify that the mod is loaded correctly

## V. Common Issues and Solutions

1. **Gradle Sync Failed**
    * Check your network connection and ensure you can access Maven repositories
    * Try using the `./gradlew --refresh-dependencies` command to refresh dependencies

2. **Cannot Find AnvilCraft Dependency**
    * Check the latest version number in
      the [Maven Repository](https://server.cjsah.net:1002/maven/dev/dubhe/anvilcraft-neoforge-1.21.1/maven-metadata.xml)
    * Ensure the version number matches your Minecraft version

3. **IDEA Cannot Recognize Project**
    * Delete the `.idea` folder and `*.iml` files, then re-import the project
    * Ensure you have selected the correct JDK version (Java 21)
