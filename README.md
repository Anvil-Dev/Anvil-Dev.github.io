# AnvilCraft 官网与开发文档

简体中文 · [English](README.en.md)

首页、基本信息和四册开发手册均提供简体中文和英文。顶栏的「开发文档」和「藿香」分别打开 AnvilCraft 和 Ageratum 的版本菜单。进入分册后，侧栏和搜索使用该分支的文档。

| 模组 | Minecraft 1.21.1 | Minecraft 26.1.2 |
| --- | --- | --- |
| AnvilCraft | [21.1 手册](docs/anvilcraft/21.1/index.md) | [26.1 手册](docs/anvilcraft/26.1/index.md) |
| Ageratum | [21.1 手册](docs/ageratum/21.1/index.md) | [26.1 手册](docs/ageratum/26.1/index.md) |

[全分支与子文档拆分清单](CHECKLIST.md) 记录上游分支、取材提交与功能组。配方和资源字段从各分册的“数据包与资源包”进入。查找 Java 声明与实际调用时，可从功能指南打开对应版本的源码链接。

## 运行站点

使用 Node.js 24 及 pnpm。首次克隆后在仓库根目录执行以下命令。

```shell
pnpm install --frozen-lockfile
pnpm docs:dev
```

打开终端打印的本地地址。生产构建输出到 `docs/.vitepress/dist/`，可交给静态 HTTP 服务器。

```shell
pnpm typecheck
pnpm docs:check
pnpm docs:build
pnpm docs:check-render
pnpm docs:preview
```

## 发布官网

向 `main` 提交拉取请求时，GitHub Actions 会检查类型、校验手册、构建站点并核查生成页面的站内链接。合并到 `main` 后，`.github/workflows/page.yml` 从同一份 `docs/.vitepress/dist/` 生成两份归档。

- `pages` 供 1Panel 使用，保留 7 天。下载并解压后可见 `artifact.tar`，站点首页位于 tar 根目录。工作流先把这份站点发布到 `gh-pages`，再用仓库密钥 `ONEPANEL_URL` 和 `ONEPANEL_TOKEN` 触发计划任务「更新www.anvilcraft.dev」。
- `github-pages` 交给 GitHub Pages 发布到 `anvil-dev.github.io`。

需要重新发布同一提交时，在 Actions 的 **Deploy VitePress site to Pages** 工作流选择 `main` 并手动运行。

## 社区页面与账户

从「基本信息」可进入模组介绍、概览、特别鸣谢与支持页面。鸣谢页连接贡献者墙和申请入口，右上角账户菜单连接 GitHub 登录与个人中心。

前端默认使用 `https://api.anvilcraft.dev`。自建后端时，在运行 `pnpm docs:dev` 或构建前设置环境变量 `ANVIL_API_BASE`，填入后端源地址即可，例如 `http://localhost:8080`。也可在前端脚本运行前提供 `window.__ANVIL_API_BASE__`。账户、贡献者与实时更新共用这一地址。

部署到新域名时，将站点来源加入所用后端的 CORS 配置，并确保 GitHub OAuth 与后端约定的回跳地址最终回到该站点的 `/oauth-callback`。GitHub 客户端密钥由后端管理。使用设备码的部署沿用 GitHub 设备授权流程。

首页图文和图标、基本信息与社区页面移植自 Anvil-Dev 官网。上游页脚署名为 Copyright © 2024-present Gugle，内容采用 CC BY-NC-SA 4.0。迁移的前端代码沿用上游 AGPL 许可，本仓库针对开发文档导航、双语路由和账户交互做了适配。[上游取材提交](https://github.com/Anvil-Dev/Anvil-Dev.github.io/tree/26c370f6ca809bafa66781e07dcde509a97f05de) · [内容许可](https://creativecommons.org/licenses/by-nc-sa/4.0/) · [上游代码许可全文](licenses/Anvil-Dev.github.io-AGPL-3.0.txt)

## 核查一个分支

先检出相应上游分支并运行 `git pull --ff-only`。手册首页记录了本次取材的提交。复核已发布手册时，上游工作树须在该提交；更新手册时，先更新首页和清单中的基线，再逐组核对源码和示例。

下面的 PowerShell 命令假设上游位于相邻目录，`JAVA_HOME` 指向该分支对应的 JDK。

```powershell
node scripts/check-source-links.ts ../AnvilCraft docs/anvilcraft/21.1
node scripts/recipe-builders.ts --check --source ../AnvilCraft --handbook docs/anvilcraft/21.1 --java "$env:JAVA_HOME/bin/java.exe"
node scripts/verify-examples.ts ../AnvilCraft docs/anvilcraft/21.1 --standalone
```

独立示例校验从手册读取 Gradle 配置、模组元数据和 `dev.example` 包下的完整 Java 类，在临时目录使用上游 Gradle Wrapper 和公开 Maven 依赖运行 `classes`。Linux 或 macOS 下按本机路径传递 Java 可执行文件。首次运行需要下载 Minecraft 开发产物和 Maven 依赖。资料中引用的上游实现保留原包名，链接指向取材提交。

## 文档目录

中文分册位于 `docs/<模组>/<版本>/`，英文分册位于 `docs/en/<模组>/<版本>/`。同一篇文档在两个目录下使用相同的相对路径，读者可用导航栏的语言菜单切换。功能组以目录及其 `index.md` 命名，子页面从一级标题生成侧栏条目。Vue 组件在 `docs/.vitepress/theme/`，站点与导航使用 TypeScript，样式使用 SCSS。源文件使用 UTF-8。

新增、移动或改名页面后执行 `node scripts/checklist.ts`，按分册重新生成逐篇清单。总清单表中的“逐篇清单”可按功能组和子系统打开每篇正文。执行 `npm run docs:check` 会对照现有文件复核清单的标题、链接和页数。
