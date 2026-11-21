# 建立附属模组并启动客户端

在 `src/main/resources/META-INF/neoforge.mods.toml` 写入模组元数据。`modId` 要与 Java 入口和 Gradle 中的源集名称一致。

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

## Java 入口

把[服务端打开手册的完整入口](../guides/open)保存为 `src/main/java/dev/example/fieldguide/FieldGuideMod.java`，再按[编写第一组页面](../guides/pages)将两个 Markdown 文件加入模组资源。

## 编译和运行

```shell
./gradlew compileJava
./gradlew runClient
```

在 Windows PowerShell 中使用 `.\gradlew.bat`。在测试世界中，以持有命令权限的玩家执行 `/fieldguide`。游戏应打开随工程打包的首页。也可用客户端命令 `/ageratum field_guide` 检查资源路径。
