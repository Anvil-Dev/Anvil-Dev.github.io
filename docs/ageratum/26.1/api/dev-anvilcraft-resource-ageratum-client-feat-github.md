# dev.anvilcraft.resource.ageratum.client.feat.github



## GitHubApiClient

` public final class GitHubApiClient `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubApiClient.java#L32)

GitHub API 客户端。 负责通过 GitHub REST API 解析默认分支最新 commit 并下载仓库 zip 包。 请求携带 OAuth APP 的 Client ID（#CLIENT\_ID），并在 api.github.com 失败时依次回退到内置的社区代理前缀。 代理可用性随时可能变化，因此每个 host 的响应都会经过严格校验 （状态码、Content-Type、JSON/zip 魔数），不满足即视为失败并继续下一个。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String CLIENT_ID ` | OAuth APP Client ID（匿名请求身份标识）。<br>初值 ` "Ov23lisVnunOyzPZWLpo" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubApiClient.java#L38) |
| ` public static final List<String> API_HOSTS ` | JSON API host 列表（解析默认分支、最新 commit 等）：直连优先，随后为社区代理前缀。 实测（2026-09-03）：以下代理对 JSON API 返回 200 且 JSON 可解析、commit SHA 正确： ghapi.anvilcraft.dev（AnvilCraft 第一方镜像，JSON + zip 均可用） github.chenc.dev github.tbap.top github.nswrz.cn 其余社区代理对 JSON API 大多返回 403 / HTML 挑战页 / 404，仅作尽力而为回退。<br>由 ` List.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubApiClient.java#L67) |
| ` public static final List<String> ZIP_HOSTS ` | zip 下载 host 列表：直连优先，随后为社区代理前缀。 实测（2026-09-03）：以下代理返回 200 且完整 zip 校验通过（约 10.5MB、PK 魔数正确）： ghapi.anvilcraft.dev（AnvilCraft 第一方镜像，JSON + zip 均可用） github.chenc.dev、github.tbap.top、github.nswrz.cn（JSON+zip 均可用） gh.felicity.ac.cn、jiashu.1win.eu.org、gh.jjj.gv.uy、 gh.sixyin.com、ghp.keleyaa.com、githubdog.com、 777.z321.cc.cd、g.z321.cc.cd、js.jiangss.shop、 xsadwsd.kdns.fr、ghproxy.felicity.land、gh.qfmc0721.cc.cd、 gh.dpik.top、github.tbap.top、ghfile.geekertao.top、 github.dpik.top、git.yylx.win、ghm.078465.xyz、 gh.927223.xyz、cdn.akaere.online、tvv.tw、 gh.noki.icu、gh.07150721.xyz、github.nswrz.cn（仅 zip 可用）<br>由 ` List.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubApiClient.java#L101) |
| ` @Nullable public static String resolveLatestCommit(String user, String repo) ` | 获取仓库默认分支的最新 commit SHA。<br>参数 ` user ` 仓库所有者<br>参数 ` repo ` 仓库名<br>返回 最新 commit SHA；全部 host 失败时返回 null<br>` (defaultBranch == null) ` 成立时提前返回 ` null `<br>末尾返回 ` tryHosts(API_HOSTS, host -> fetchBranchHeadCommit(host, user, repo, defaultBranch)) `<br>[调用处 GitHubRepoCache.downloadAndExtract](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L254) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubApiClient.java#L149) |
| ` public static boolean downloadZipball(Path destFile, String user, String repo, String commit) ` | 下载指定 commit 的仓库 zip 包到目标文件。 GitHub API 会返回 302 跳转到 codeload.github.com，此处跟随重定向。<br>参数 ` destFile ` 目标 zip 文件路径<br>参数 ` user ` 仓库所有者<br>参数 ` repo ` 仓库名<br>参数 ` commit ` commit SHA 或分支名<br>返回 下载成功返回 true，全部 host 失败返回 false<br>末尾返回 ` tryHosts(ZIP_HOSTS, host -> fetchZipball(host, destFile, user, repo, commit)) `<br>[调用处 GitHubRepoCache.extractZipForCommit](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L432) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubApiClient.java#L169) |

## GitHubAssetResolver

` public final class GitHubAssetResolver `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L27)

GitHub 远程指南资源解析器。 将文档中的资源引用（图片、结构等）映射到已下载仓库的本地文件： advanced\_clover:textures/foo.png —— 命名空间为资源根目录名， 路径相对于资源根（即仓库中 path:assets/advanced\_clover 指向的目录）； ./foo.png、../bar/x.nbt —— 相对路径，先相对于当前文档所在目录， 再回退到资源根； ageratum/... —— 无命名空间时按相对路径处理。 github 源文档使用特殊命名空间 github: 标记， 通过 #isGitHubLocation(Identifier) 判断。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String GITHUB_NAMESPACE ` | github 源文档的命名空间。<br>初值 ` "github" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L31) |
| ` public static final String GUIDE_ROOT ` | 文档在资源根下的根目录名。<br>初值 ` "ageratum" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L36) |
| ` public static boolean isGitHubLocation(Identifier location) ` | 判断一个资源位置是否属于 GitHub 远程指南源。<br>末尾返回 ` GITHUB_NAMESPACE.equals(location.getNamespace()) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L44) |
| ` public static boolean isGitHubLocation(@Nullable String raw) ` | 判断一个原始字符串是否是 GitHub 远程指南 URI。<br>末尾返回 ` GitHubDocUri.isGitHubDoc(raw) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L51) |
| ` @Nullable public static Path resolve(GitHubRepoCache.RepoState state, Identifier sourceLocation, String rawTarget) ` | 根据仓库状态与当前文档位置解析资源文件。<br>参数 ` state ` 已就绪的仓库状态（含资源根）<br>参数 ` sourceLocation ` 当前文档的位置（github 源）<br>参数 ` rawTarget ` 资源引用（如 textures/foo.png、advanced\_clover:textures/foo.png）<br>返回 存在的本地文件路径，无法解析或文件不存在时返回 null<br>` (rawTarget == null \|\| rawTarget.isBlank()) ` 成立时提前返回 ` null `<br>` (target.isEmpty()) ` 成立时提前返回 ` null `<br>` (relativeToDoc != null && Files.isRegularFile(relativeToDoc)) ` 成立时提前返回 ` relativeToDoc `<br>` (relativeToRoot != null && Files.isRegularFile(relativeToRoot)) ` 成立时提前返回 ` relativeToRoot `<br>` (relativeToDocTextures != null && Files.isRegularFile(relativeToDocTextures)) ` 成立时提前返回 ` relativeToDocTextures `<br>` (relativeToRootTextures != null && Files.isRegularFile(relativeToRootTextures)) ` 成立时提前返回 ` relativeToRootTextures `<br>末尾返回 ` null `<br>[调用处 GitHubImageComponent.resolveFile](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/GitHubImageComponent.java#L89) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L63) |
| ` @Nullable public static Path resolveDocument(GitHubRepoCache.RepoState state, Identifier sourceLocation, @Nullable String fileArgument) ` | 解析 github 源文档对应的文档文件路径（如 ageratum/zh\_cn/index.md）。<br>参数 ` state ` 已就绪的仓库状态（含资源根）<br>参数 ` sourceLocation ` 文档位置（github 源）<br>参数 ` fileArgument ` 文件名（可为 null 表示 index）<br>返回 存在的文件路径，否则 null<br>末尾返回 ` null `<br>[调用处 GitHubGuideSource.openDocument](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L99) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L143) |
| ` @Nullable public static String extractLanguageCode(Identifier sourceLocation) ` | 从 github 源文档位置提取语言代码（ageratum/&lt;lang&gt;/...）。<br>末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L167) |

## GitHubDocUri

` public record GitHubDocUri(String user, String repo, String resourceRoot, String commit) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19)

GitHub 远程指南 URI。 支持如下语法（github: 前缀）： github:user/repo —— 使用仓库根目录作为资源根，最新 commit github:user/repo#path:assets/advanced\_clover —— 指定资源包命名空间根 github:user/repo#commit=798f631 —— 指定 commit github:user/repo#path:assets/advanced\_clover&amp;commit=798f631 —— 组合形式 参数分隔符同时兼容 = 与 :（如 path:assets/xxx、 commit:798f631），以 = 优先。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public String rootName() ` | 资源根目录名称（用于命名空间解析与展示）。<br>末尾返回 ` slash >= 0 ? normalized.substring(slash + 1) : normalized ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L24) |
| ` public static boolean isGitHubDoc(@Nullable String raw) ` | 判断原始值是否为 GitHub 远程指南 URI。<br>末尾返回 ` raw != null && raw.trim().startsWith(GITHUB_PREFIX) `<br>[调用处 GitHubAssetResolver.isGitHubLocation](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubAssetResolver.java#L52) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L36) |
| ` @Nullable public static GitHubDocUri parse(@Nullable String raw) ` | 解析 GitHub 远程指南 URI。<br>返回 解析成功返回 URI，否则返回 null<br>` (!isGitHubDoc(raw)) ` 成立时提前返回 ` null `<br>` (slash <= 0 \|\| slash == repoPart.length() - 1) ` 成立时提前返回 ` null `<br>` (user.isEmpty() \|\| repo.isEmpty() \|\| user.contains("/") \|\| repo.contains("/")) ` 成立时提前返回 ` null `<br>末尾返回 ` new GitHubDocUri(user, repo, resourceRoot, commit) `<br>[调用处 GitHubGuideSource.open](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L37) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L45) |
| ` public GitHubDocUri(String user, String repo, String resourceRoot, String commit) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19) |
| ` public String user() ` | 读取 record 分量 ` user ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19) |
| ` public String repo() ` | 读取 record 分量 ` repo ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19) |
| ` public String resourceRoot() ` | 读取 record 分量 ` resourceRoot ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19) |
| ` public String commit() ` | 读取 record 分量 ` commit ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubDocUri.java#L19) |

## GitHubGuideSource

` public final class GitHubGuideSource `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L25)

GitHub 远程指南打开入口。 缓存优先：打开时若本地已有可用缓存（缺省 commit 或显式 commit 匹配）， 立即展示缓存内容，不显示加载界面、不阻塞网络；随后在后台静默检查更新， 有新版本时下载到 pending 目录，下次打开自动生效。仅在无缓存可用时才显示 「加载中」过渡界面并现场下载；全部失败显示红色 加载失败...。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void open(String rawUri) ` | 打开 GitHub 远程指南（从原始 URI 字符串）。<br>参数 ` rawUri ` 例如 github:Gu-ZT/Ageratum-Resources-Pack-TeaCon2026#path:assets/advanced\_clover&amp;commit=798f631<br>实现调用 ` GitHubDocUri.parse(rawUri) `<br>分支 ` (uri == null) ` 内调用 ` showFailure() `<br>实现调用 ` open(uri) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L36) |
| ` public static void open(GitHubDocUri uri) ` | 打开 GitHub 远程指南（已解析 URI）。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` GitHubRepoCache.tryLoadCached(uri) `<br>分支 ` (cachedState != null) ` 内调用 ` openDocument(minecraft, uri, cachedState) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L48) |
| ` public static Identifier toDisplayLocation(GitHubDocUri uri, String fileArgument) ` | 构造展示用 github 源文档位置。 路径：&lt;user&gt;/&lt;repo&gt;/&lt;root&gt;/&lt;file&gt;，其中 user/repo/root 均转为小写 以满足 Identifier 字符集要求（仅作展示与注册表键，资源解析走状态数据）。<br>末尾返回 ` Identifier.fromNamespaceAndPath(GitHubAssetResolver.GITHUB_NAMESPACE, path) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L126) |

## GitHubLoadingScreen

` public class GitHubLoadingScreen extends Screen `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubLoadingScreen.java#L16)

GitHub 远程指南的加载/失败过渡界面。 加载期间居中显示黄色 加载中，请稍后...； 失败时文本变为红色 加载失败...。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void extractRenderState(GuiGraphicsExtractor guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.extractTransparentBackground(guiGraphics) `<br>实现调用 ` Component.translatable("gui.ageratum.github.load_failed").withStyle(ChatFormatting.RED) `<br>实现调用 ` Component.translatable("gui.ageratum.github.load_failed") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubLoadingScreen.java#L23) |
| ` @Override public boolean isPauseScreen() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubLoadingScreen.java#L34) |
| ` public void markFailed() ` | 切换为失败状态并保持界面显示红色提示。<br>执行 ` this.failed = true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubLoadingScreen.java#L42) |
| ` public boolean isFailed() ` | 当前是否处于失败状态。<br>末尾返回 ` this.failed ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubLoadingScreen.java#L49) |
| ` public static GitHubLoadingScreen open() ` | 创建加载界面并切换到它。<br>末尾返回 ` screen `<br>[调用处 GitHubGuideSource.showLoadingAndFetch](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L70) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubLoadingScreen.java#L56) |

## GitHubRepoCache

` public final class GitHubRepoCache `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L35)

GitHub 仓库缓存：负责下载指定 commit 的 zip 包并解压到 caches/ageratum/repos/&lt;user&gt;-&lt;repo&gt;/ 目录。 解压时会剥离 zip 内不确定的顶层目录（&lt;user&gt;-&lt;repo&gt;-&lt;sha&gt;）， 使缓存目录直接对应仓库根。使用 .commit 标记文件记录已缓存 commit， 相同 commit 直接命中缓存，避免重复下载。 所有下载/解压均在异步线程执行，调用方通过 CompletableFuture 消费结果。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Path cacheRoot() ` | 缓存根目录（游戏运行目录下）。<br>末尾返回 ` FMLLoader.getCurrent().getGameDir() .resolve("caches") .resolve("ageratum") .resolve("repos") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L41) |
| ` @Nullable public static RepoState getActiveState(net.minecraft.resources.Identifier location) ` | 获取与 github 源文档位置关联的仓库状态（已就绪）。<br>末尾返回 ` ACTIVE_STATES.get(location) `<br>[调用处 GitHubImageComponent.resolveFile](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/GitHubImageComponent.java#L85) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L81) |
| ` public static void registerActiveState(net.minecraft.resources.Identifier location, RepoState state) ` | 注册 github 源文档位置与仓库状态的关联（打开文档时调用）。<br>执行 ` ACTIVE_STATES.put(location, state) `<br>[调用处 GitHubGuideSource.openDocument](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L114) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L89) |
| ` public static void unregisterActiveState(net.minecraft.resources.Identifier location) ` | 移除 github 源文档位置与仓库状态的关联（界面关闭时调用）。<br>执行 ` ACTIVE_STATES.remove(location) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L96) |
| ` @Nullable public static RepoState tryLoadCached(GitHubDocUri uri) ` | 尝试直接使用本地已生效缓存（只读磁盘，不发起任何网络请求）。 适用场景：打开远程指南时应优先展示缓存内容，网络检查/下载放到后台。 若上次静默刷新已备好待切换缓存（pending 完整），则先纯本地切换生效； 缺省 commit 的 URI 只要有可用缓存即命中；显式指定 commit 的 URI 要求缓存 commit 完全匹配，避免展示与用户指定不一致的内容。<br>参数 ` uri ` 已解析的 GitHub 指南 URI<br>返回 缓存可用的 RepoState；未命中返回 null<br>末尾返回 ` readCachedState(uri, repoDir) `<br>[调用处 GitHubGuideSource.open](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L52) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L111) |
| ` public static CompletableFuture<RepoState> ensureDownloaded(GitHubDocUri uri) ` | 确保指定 URI 对应的仓库 commit 已下载并解压。 返回的 future 完成时：state != null 表示成功 （state.root() 为仓库根目录，state.commit() 为实际使用的 commit）， null 表示所有尝试均失败。 行为： 已生效缓存（commit 匹配）或待切换缓存（pending 完整）→ 立即返回，不发起网络请求； 未缓存且 URI 显式指定 commit → 下载该 commit 后返回； 未缓存且 URI 缺省 commit → 解析最新 commit 并下载后返回。 注意：存在匹配缓存（含缺省 commit 的已缓存仓库）时直接返回缓存，不发任何网络请求； 仅在无可用缓存时才解析最新 commit 并下载。需要在「打开」时优先展示缓存、不显示加载界面， 请先调用 #tryLoadCached(uri)；仅当返回 null 时才需要调用本方法。<br>参数 ` uri ` 已解析的 GitHub 指南 URI<br>[调用处 GitHubGuideSource.showLoadingAndFetch](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L71) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L174) |
| ` public static void refreshInBackground(GitHubDocUri uri) ` | 静默检查更新：缺省 commit 时在后台解析最新 commit，与当前生效缓存不同则下载到 待切换目录，不打扰当前展示；下次 #tryLoadCached 时自动切换生效。 同一仓库的下载以 #lockFor 互斥，且同一时间只会有一个静默刷新在跑， 避免并发互踩与重复解析。<br>参数 ` uri ` 已解析的 GitHub 指南 URI（缺省 commit）<br>实现调用 ` uri.commit() `<br>实现调用 ` repoDir(uri) `<br>实现调用 ` REFRESH_IN_FLIGHT.add(repoDir.toString()) `<br>[调用处 GitHubGuideSource.open](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubGuideSource.java#L56) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L198) |
| ` public static String relativizeRoot(RepoState state) ` | 计算资源根相对仓库根的路径（如 assets/advanced\_clover）。<br>实现调用 ` state.root().relativize(state.resourceRoot()).toString().replace('\\', '/') `<br>实现调用 ` state.root().relativize(state.resourceRoot()).toString() `<br>实现调用 ` state.root().relativize(state.resourceRoot()) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L390) |

## GitHubRepoCache.RepoState

` public record RepoState(String user, String repo, Path root, Path resourceRoot, String commit) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L611)

已就绪的仓库状态。<br>参数 ` user ` 仓库所有者<br>参数 ` repo ` 仓库名<br>参数 ` root ` 仓库根目录（zip 顶层目录已剥离）<br>参数 ` resourceRoot ` 资源根目录（path 参数指向的目录；缺省为仓库根）<br>参数 ` commit ` 实际使用的 commit SHA

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RepoState(String user, String repo, Path root, Path resourceRoot, String commit) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L611) |
| ` public String user() ` | 读取 record 分量 ` user ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L612) |
| ` public String repo() ` | 读取 record 分量 ` repo ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L613) |
| ` public Path root() ` | 读取 record 分量 ` root ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L614) |
| ` public Path resourceRoot() ` | 读取 record 分量 ` resourceRoot ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L615) |
| ` public String commit() ` | 读取 record 分量 ` commit ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L616) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L611) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L611) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/github/GitHubRepoCache.java#L611) |
