# 建立附属模组并启动客户端

在 `src/main/resources/META-INF/neoforge.mods.toml` 写入模组元数据。`modId` 要与 Java 入口和 Gradle 中的源集名称一致。

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

## Java 入口

把[撞击行为示例](../anvil/register)中的完整 `SandstonePress` 类保存到 `src/main/java/dev/example/press/SandstonePress.java`。它会把游戏事件总线上的注册事件接到砂岩处理器。

## 编译和运行

```shell
./gradlew compileJava
./gradlew runClient
```

在 Windows PowerShell 中使用 `.\gradlew.bat`。进入测试世界，放下砂岩，让铁砧从至少两格高的位置落在砂岩上。平滑砂岩出现后，再从紧贴砂岩的位置试一遍，检查最小下落距离。
