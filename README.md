# AnvilCraft 开发者手册

面向附属模组、整合包和资源包作者的中文技术文档。站点以 AnvilCraft 为主入口，顶栏可进入 Ageratum。进入分支后，侧栏和搜索使用该分支的文档。

| 模组 | Minecraft 1.21.1 | Minecraft 26.1.2 |
| --- | --- | --- |
| AnvilCraft | [21.1 手册](docs/anvilcraft/21.1/index.md) | [26.1 手册](docs/anvilcraft/26.1/index.md) |
| Ageratum | [21.1 手册](docs/ageratum/21.1/index.md) | [26.1 手册](docs/ageratum/26.1/index.md) |

[全分支与子文档拆分清单](docs/checklist.md) 记录上游分支、取材提交与功能组。配方和资源字段从各分册的“数据包与资源包”进入。查方法重载、隐式成员、事件或工厂时，打开“Java 公开 API”或在站内搜索类型名。

## 运行站点

使用 Node.js 24 及 npm。首次克隆后在仓库根目录执行以下命令。

```shell
npm ci
npm run docs:dev
```

打开终端打印的本地地址。生产构建输出到 `docs/.vitepress/dist/`，可交给静态 HTTP 服务器。

```shell
npm run typecheck
npm run docs:check
npm run docs:build
npm run docs:check-render
npm run docs:preview
```

## 核查一个分支

先检出相应上游分支并运行 `git pull --ff-only`。手册首页记录了本次取材的提交。复核已发布手册时，上游工作树须在该提交；更新手册时，先更新首页和清单中的基线，再逐组核对源码和示例。

符号核查读取发布主源集，包含公开嵌套类型、接口的隐式成员、枚举、record 和 Lombok 展开的公开方法。继承方法在声明类型下查阅。下面的 PowerShell 命令假设上游位于相邻目录，`JAVA_HOME` 指向该分支对应的 JDK，`LOMBOK_JAR` 指向本地版本匹配的 Lombok JAR。

```powershell
node scripts/reference.ts --check --source ../AnvilCraft --output docs/anvilcraft/21.1/api --upstream https://github.com/Anvil-Dev/AnvilCraft --java "$env:JAVA_HOME/bin/java.exe" --lombok "$env:LOMBOK_JAR"
node scripts/check-source-links.ts ../AnvilCraft docs/anvilcraft/21.1
node scripts/verify-examples.ts ../AnvilCraft docs/anvilcraft/21.1 --standalone
```

独立示例校验从手册读取 Gradle 配置、模组元数据和 `dev.example` 包下的完整 Java 类，在临时目录使用上游 Gradle Wrapper 和公开 Maven 依赖运行 `classes`。Linux 或 macOS 下按本机路径传递 Java 可执行文件。首次运行需要下载 Minecraft 开发产物和 Maven 依赖。资料中引用的上游实现保留原包名，链接指向取材提交。

## 文档目录

每棵分支树位于 `docs/<模组>/<版本>/`。功能组以目录及其 `index.md` 命名，子页面从一级标题生成侧栏条目。Vue 组件在 `docs/.vitepress/theme/`，站点与导航使用 TypeScript，样式使用 SCSS。源文件使用 UTF-8。

新增、移动或改名页面后执行 `node scripts/checklist.ts`，按分册重新生成逐篇清单。总清单表中的“逐篇清单”可按功能组和子系统打开每篇正文。执行 `npm run docs:check` 会对照现有文件复核清单的标题、链接和页数。
