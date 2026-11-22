# Set Up the Add-on Mod and Launch the Client

Write the mod metadata in `src/main/resources/META-INF/neoforge.mods.toml`. `modId` must match the Java entrypoint and the source set name in Gradle.

```toml
modLoader="javafml"
loaderVersion="[4,)"
license="MIT"

[[mods]]
modId="sandstone_press"
version="1.0.0"
displayName="Sandstone Press"

[[dependencies.sandstone_press]]
modId="anvilcraft"
type="required"
versionRange="[1.6.0,)"
ordering="AFTER"
side="BOTH"
```

## Java Entrypoint

Save the complete `SandstonePress` class from [Registering Impact Behavior for a Block](../anvil/register) as `src/main/java/dev/example/press/SandstonePress.java`. It wires the registration event on the game event bus to the sandstone handler.

## Build and Run

```shell
./gradlew compileJava
./gradlew runClient
```

In Windows PowerShell, use `.\gradlew.bat`. Enter a test world, place sandstone, and drop an anvil onto it from at least two blocks high. Once smooth sandstone appears, test again from directly above the sandstone to verify the minimum drop distance.
