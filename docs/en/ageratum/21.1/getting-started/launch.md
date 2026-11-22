# Set Up the Add-on Mod and Launch the Client

Write the mod metadata in `src/main/resources/META-INF/neoforge.mods.toml`. `modId` must match the Java entrypoint and the source set name in Gradle.

```toml
modLoader="javafml"
loaderVersion="[4,)"
license="MIT"

[[mods]]
modId="field_guide"
version="1.0.0"
displayName="Field Guide"

[[dependencies.field_guide]]
modId="ageratum"
type="required"
versionRange="[0.0.1,)"
ordering="AFTER"
side="BOTH"
```

## Java Entrypoint

Save the [complete server-side guide-opening entrypoint](../guides/open) as `src/main/java/dev/example/fieldguide/FieldGuideMod.java`, then add the two Markdown files to your mod resources following [Writing Your First Set of Pages](../guides/pages).

## Build and Run

```shell
./gradlew compileJava
./gradlew runClient
```

In Windows PowerShell, use `.\gradlew.bat`. In a test world, run `/fieldguide` as a player with command permissions. The game should open the home page bundled with your project. You can also use the client command `/ageratum field_guide` to check the resource path.
