"""Build navigable runtime guides from one checked-out AnvilCraft release."""
import argparse
import re
import subprocess
from collections import defaultdict
from pathlib import Path
from urllib.parse import quote

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("source", type=Path)
parser.add_argument("handbook", type=Path)
args = parser.parse_args()
source = args.source.resolve()
handbook = args.handbook.resolve()
sha = subprocess.check_output(["git", "-C", source, "rev-parse", "HEAD"], text=True).strip()
assert f"/tree/{sha}" in (handbook / "index.md").read_text("utf-8")
base = "https://github.com/Anvil-Dev/AnvilCraft/blob/" + sha + "/"
paths = subprocess.check_output(["git", "-C", source, "ls-files", "src/main/java"], encoding="utf-8").splitlines()
files = {p: (source / p).read_text("utf-8") for p in paths if p.endswith(".java") and not p.endswith("package-info.java")}
by_name = defaultdict(list)
uses = defaultdict(list)
for path, code in files.items():
    by_name[Path(path).stem].append(path)
    for line_no, line in enumerate(code.splitlines(), 1):
        if not line.lstrip().startswith(("import ", "package ", "*", "/", "@")):
            for name in set(re.findall(r"\b[A-Z][A-Za-z0-9_$]+\b", line)):
                uses[name].append((path, line_no))

# Each heading follows a developer task. Class names select declarations in this release.
systems = [
("amulets", "护符", [
("definitions","从注册表取得护符定义","护符定义随服务端注册表加载。用当前世界的注册表提供者取得管理器，避免把一个世界的定义带到另一个存档。管理器从定义注册表读取 holder，并按提供者缓存实例。","AmuletManager IAmuletDefinition AmuletDefinition"),
("effects","识别护符与执行效果","外部装备栏可在查找事件中交出候选物品。执行效果前先检查作用对象与上下文键，区分没有通过实体检查和通过检查但没有找到护符两种结果。","AmuletEvent AmuletEffectContext IAmuletEffect AttributeAmuletEffect")]),
("behavior","行为树",[
("nodes","组织条件与动作","从根节点开始判断。父节点匹配才会走到子节点，遍历完子节点后才运行父节点动作。run 的布尔结果表示至少一个节点匹配，不能用它判断动作是否修改了世界。","BehaviorTree TreeNode PredicateExecutableTreeNode"),
("context","在一次遍历中共享数据","每次 run 都为原始对象建立新的 ExecutionContext。先用 has 检查键是否存在，再以存入时的类型读取。取错类型会出错，缺键还会导致诊断代码解引用 null。","ExecutionContext SetTreeNode ExecutableTreeNode")]),
("hammer","铁砧锤",[
("change","让锤子改变方块状态","要为自己注册的方块提供交互，可在方块上实现 IHammerChangeable。现有方块通过 HammerManager 登记处理器。直接实现接口的方块优先，其次查询已登记的处理器，然后才回退到标签定义的默认行为。","IHammerChangeable HammerManager HammerRotateBehavior"),
("remove","拆卸与手持效果","处理旋转、拆卸和持锤效果时分别选取对应接口。先检查玩家操作与方块状态，只有实际执行成功才报告处理成功，留出其他交互的机会。","IHammerRemovable IHasHammerEffect")]),
("sliding","滑轨与移动结构",[
("resolve","干预可推动性","在公共初始化阶段把 SlidingStructureExtension 交给 SlidingStructureHooks。服务端解析每个候选方块时依次调用扩展，上一项的返回值成为下一项的 original。判断过程中保持世界不变。","SlidingStructureExtension SlidingStructureHooks"),
("load","处理额外结构和载荷","扩展阶段可以向已解析的结构追加附着方块。expand 返回 false 就中止这次扩展。调试大型结构时先核对解析结果，再查区段与负载对象持有的方块清单。","SlidingBlockStructureResolver SlidingBlockSection SlidingRailLoad")]),
("plasma","等离子喷流",[
("fuel","接入其他燃料容器","在服务器线程查询燃料，处理器未接管该位置时返回 DEFAULT 或空结果。模拟消耗不能扣除燃料。同一位置有多个扩展时，明确的否决也会终止该项查询。","PlasmaJetFuelHandler PlasmaJetHooks"),
("ticks","附加喷流行为","生成检查、燃料和方块操作在服务端执行。需要视觉反馈时使用客户端粒子回调，保持客户端类与服务端逻辑分开加载。","PlasmaJetBehavior PlasmaJetsBlockEntity")]),
("laser","激光",[
("compose","组装与合并光束组件","以组件类型为键写入 LaserComponentMap。同一类型的组件会被替换。需要合束时使用类型自己的合并规则，例如强度求和，而采掘行为还要检查效果是否兼容。","LaserComponentMap LaserComponentTypes ILaserComponentType"),
("hit","控制命中处理顺序","发射和命中阶段迭代按优先级排序的组件。命中回调返回 false 会中断余下的命中处理。替换配置时，等值组件可以保留本地照射进度。","ILaserComponent ILaserComponentOwner LaserHitBehavior LaserMiningComponent")]),
("storage","仓储端口与终端",[
("port","从端口接收玩家交互","端口方块和网络包经由 IStoragePort 分发点击。主键用于即时取出，副键可处理标记、插入或流体。按住左键会重复检测，拦截器要能重复调用。","IStoragePort StoragePortManager"),
("terminal","维护终端可见的仓储源","终端的可见源按维度维护。方块实体就绪后登记主方块位置，移除或区块卸载时注销，避免让失效位置继续出现在终端查询中。","TerminalSourceManager StorageComparatorManager")]),
("items","物品能力与槽位",[
("limits","限制插入或提取","向外暴露物品能力时，根据机器的槽位职责选择过滤、拒绝输入或只读包装器。模拟操作也要返回正确的余量，否则传输设备会误判接收能力。","FilteredItemStackHandler ReadOnlyItemHandlerWrapper InputRefusingItemHandlerWrapper"),
("slots","支持轮询与大容量库存","查看轮询处理器如何决定访问顺序，再检查超限库存如何保存数量。对接外部容器时以方法返回的剩余物品为准。","PollableItemHandler OverLimitItemHandler InfinityItemStackHandler")]),
("tesla","特斯拉塔",[
("filter","注册目标过滤器","过滤器以字符串 ID 在双方注册。网络上传送 ID，解码时查本地映射。重复 ID 会替换原条目，双方注册不一致会导致匹配结果不同。","TeslaFilter"),
("target","判断实体与筛选参数","无需参数的规则直接检查 LivingEntity。带参数的规则同时负责输入文字和标题显示。未知 ID 的后备规则拒绝所有实体。","IsPlayerIdFilter IsEntityIdFilter HasCustomNameFilter IsPetFilter")]),
("charge","电荷与物品能量",[
("collector","在指定位置释放电荷","集电器按世界分开索引。真正写入前检查服务端、正数电荷以及是否已有已登记的收集器。同一坐标替换方块实体后，旧实例的注销不能误删新实例。","ChargeCollectorManager ChargeCollectorBlockEntity"),
("energy","经能力接口向相邻方块送电","从给定方向查询目标方块的能源能力。调用 insertEnergy 会立即尝试接收且不返回接收量；需要结算剩余能量时应直接使用能力返回值。","EnergyHelper ItemFEStorage IEnergyHandlerHolder")]),
("giant-anvil","巨型铁砧",[
("shock","匹配撼地结构","用 ShockAnvilBehavior 将采掘效果和掉落行为配对。比较边框的兼容性时，采掘效果必须相等，掉落行为 ID 也必须相同。","ShockAnvilBehavior ShockDropBehavior"),
("targets","处理受冲击目标","目标方块和实体通过不同接口接收冲击。需要观察整次巨砧落地的附属应找事件发布位置，再决定是否要介入逐目标的处理。","IShockEntity IShockFixedBlock GiantAnvilEvent")]),
("placement","方块放置与目标指针",[
("rules","决定放置时的方块状态","给非标准放置逻辑一个单独的规则。查阅规则的调用者，分清玩家使用方块物品与机器放置的上下文，再决定何时接管。","BlockPlacementRules IBlockPlacementRule BlockPlaceAssist"),
("pointers","为放置器提供目标","目标指针同时需要持久化和网络表示。指针使用前要检验是否仍然有效；带目标状态的 applyToPos 还会核对位置最终实际放下的方块类型。","ITargetPointer BlockPointer BlockItemHandlerPointer ItemEntityPointer")]),
("sound","声音与消音",[
("listener","按维度登记消音区域","注册时保留同一个监听器实例，在方块或世界卸载时用它注销。区域判定需要声音 ID 和空间位置，以免误消除其他维度或其他位置的声音。","ISoundEventListener SoundHelper")]),
("render","方块实体渲染",[
("renderer","登记可缓存的渲染器","按方块实体类型选择渲染器，登记发生在类型可用之后。将渲染注册放在客户端初始化路径，避免服务端加载 Minecraft 客户端类。","CacheableBlockEntityRenderer CacheableBlockEntityRenderers"),
("pipeline","跟踪几何编译与提交","调试缓存更新时沿编译结果、区域和实际提交缓冲三个位置检查。先确认是否产生了新几何，再查该区域是否被重用。","CacheableBERenderingPipeline CompileResult RenderRegion")]),
("player-ui","玩家交互与提示",[
("menu","为菜单查找方块实体","菜单打开时先查世界中该位置的实例；类型不符时依次尝试扩展查找器。查找器可以在两侧调用，保持查询无副作用，无法提供目标时返回 null。","MenuBlockEntityLookup"),
("thought","在容器槽位触发思考","思考提示由客户端容器屏幕、鼠标所在槽位和物品类型共同决定。物品离开槽位时应结束计时；展示时长取当前客户端配置。","Thinkable ThoughtManager"),
("tooltip","附加物品与 HUD 提示","物品描述从当前物品栈生成；HUD 还要考虑玩家观察的目标。涉及服务器仓储用量时使用同步结果，避免渲染循环里直接查询服务器状态。","HudTooltipManager ItemTooltipManager TooltipRenderHelper")]),
("portals","传送门",[
("type","从方块 ID 构造传送门类型","PortalType 同时保存注册 ID 和 Portal 实现。从数据构造时会查询方块注册表；注册项必须实现 Portal，否则构造失败。序列化传递 ID。","PortalType"),
("travel","定位穿越事件","在传送相关事件的发布点检查实体和传送门上下文，区分判断触发条件与处理已经发生的穿越。","EntityThroughPortalEvent PortalConversionRecipe")]),
("progress","进度与条件",[
("datagen","在数据生成时组织进度","进度生成器负责父子关系、显示与条件组合。触发条件用工厂创建，交给进度构建器，最后通过生成器输出目标资源 ID。","AdvancementLineHelper ModCriterionTriggers"),
("trigger","追踪服务端条件触发","数据定义由触发器解码，玩家是否达成由服务端事件驱动。排查进度时同时检查注册 ID、目标玩家和触发位置的上下文。","InWorldRecipeTrigger AnvilOnGroundTrigger TriggerUtil")]),
("entities","实体、刷怪与催熟",[
("fake-player","为机器建立玩家操作上下文","机器需要以玩家语义调用放置、挖掘或攻击逻辑时，按操作选择假玩家实现。查对应工厂的调用点，确定目标服务器世界和物品栈。","AnvilCraftFakePlayers AnvilCraftFakeBlockPlacer AnvilCraftFakeDestroyer"),
("growth","对指定维度催熟或抑制生成","催熟状态按维度管理，重复触发同一位置可能命中当刻的去重逻辑。电感灯的抑制区域由已登记的方块实体快照维护。","RipeningManager SpawningManager")]),
("world-load","区块加载与随机刻",[
("tickets","按服务器世界追踪加载源","记录加载源时区分维度、方块坐标和区块坐标。移除来源后还要检查该区块是否由其他来源维持，避免提前释放。","LevelLoadManager LoadChuckData"),
("random-tick","定位随机刻的执行位置","常规加载与维持随机刻是不同的回调入口。查当前服务端世界、玩家和区块映射在查询中各自的作用。","RandomChuckTickLoadManager")]),
("recipe-code","配方与数据生成",[
("cauldron","让方块参与大锅加工","公共初始化时为加工类别增加一个方块状态谓词，客户端和服务端需注册同一组条件。只检查方块是否能工作；原料、流体和产物交给配方。","CauldronProcessing"),
("chargers","生成充放电配方","在配方数据生成器里指定原料、产物、功率和持续 tick。负功率走充电器，正功率走放电器。功率为零或时间非正会使构建器校验失败。使用独立的配方 ID 以免与其他生成器覆盖同一路径。","ChargerChargingRecipe ChargerChargingRecipeLoader")]),
]
for slug, group, entries in systems:
    folder = handbook / slug
    children = []
    for page, title, intro, words in entries:
        names = [n for n in words.split() if n in by_name]
        if not names:
            continue
        out = ["# " + title, "", intro, "", "## 源码中的用例", ""]
        found = []
        for name in names:
            for p, number in uses[name]:
                if p not in by_name[name] and Path(p).stem not in names and re.search(r"\b" + name + r"(?:\s*[.(]|::|\s*[,>])", files[p].splitlines()[number - 1]):
                    found.append((p, number))
        found = list(dict.fromkeys(found))
        candidates = [p for p, n in found if len(files[p].splitlines()) <= 105 and "public " in files[p] and "/mixin/" not in p and re.search(r"\b(class|record)\b", files[p])]
        useful = sorted(set(candidates), key=lambda p: ("/data/" in p and slug != "progress", abs(len(files[p].splitlines()) - 38), p))
        if useful:
            sample = useful[0]
            code = files[sample].strip()
            if not any(token in code for token in ["// TODO","// ..."]):
                out.extend(["以本分支的 `" + Path(sample).stem + "` 为例。该类在上游工程及其包名下编译。", "", "::: details 查看完整 Java 类", "", "```java", code, "```", "", ":::", "", "[原始文件](" + base + quote(sample) + ")", ""])
        seen = set()
        for p, n in found:
            if p not in seen:
                out.append(f"- [`{Path(p).stem}` · 第 {n} 行]({base}{quote(p)}#L{n})")
                seen.add(p)
            if len(seen) >= 5:
                break
        out.extend(["", "## 接口和参数", "", "| 类型 | 本分支参考 | 声明 |", "| --- | --- | --- |"])
        for name in names:
            p = sorted(by_name[name], key=lambda s: ("/api/" not in s, len(s)))[0]
            pkg = p.split("src/main/java/")[1].rsplit("/",1)[0].replace("/", "-")
            links = []
            for ref in sorted((handbook / "api").glob(pkg + "*.md")):
                content = ref.read_text("utf-8")
                if re.search(r"^## " + re.escape(name) + "$", content, re.M):
                    links.append(f"[签名、参数与返回值](../api/{ref.stem}#{name.lower()})")
                    break
            out.append(f"| `{name}` | " + ("、".join(links) or "见源码声明") + f" | [Java]({base}{quote(p)}) |")
        folder.mkdir(exist_ok=True)
        page_file = folder / (page + ".md")
        if not page_file.exists() or "<!-- source-guide -->" in page_file.read_text("utf-8"):
            page_file.write_text("\n".join(out) + "\n\n<!-- source-guide -->\n", "utf-8")
        children.append(f"- [{title}](./{page})")
    if children:
        (folder / "index.md").write_text("# " + group + "\n\n" + "\n".join(children) + "\n", "utf-8")
print("Created runtime guides for", sha)
