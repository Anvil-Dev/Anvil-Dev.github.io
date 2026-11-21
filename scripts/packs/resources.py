"""Build AnvilCraft's pack format guides from the currently checked-out branch."""
import argparse
from collections import defaultdict
import json
from pathlib import Path
import re

from recipes import FIELD_NOTES, GROUPS, code, fence, fields_table, schema_groups, source_link, typename, write


class Handbook:
    def __init__(self, root, dest, inv):
        self.root = root
        self.dest = dest
        self.rev = inv["revision"]
        self.resources = inv["resources"]
        self.fields = defaultdict(list)
        self.sources = {p.stem:p for p in (root/"src/main/java").rglob("*.java") if "integration" not in p.parts}
        for field in inv["fields"]:
            self.fields[Path(field["path"]).stem].append(field)

    def raw(self, cls):
        return self.sources[cls].read_text(encoding="utf-8-sig")

    def link(self, cls):
        return source_link(self.sources[cls].relative_to(self.root).as_posix(),self.rev)

    def example(self, path):
        obj=json.loads((self.root/path).read_text(encoding="utf-8-sig"))
        return fence(obj)+"\n"+source_link(path,self.rev,label="完整资源文件")+"\n"

    def select(self, bucket, contains=None):
        paths=self.resources.get(bucket,[])
        if contains:paths=[p for p in paths if contains in p]
        return min((p for p in paths if p.endswith('.json')),key=lambda p:((self.root/p).stat().st_size,p))

    def registry(self, page, title, intro, cls, sample=None, additional=None):
        text=f"# {title}\n\n{intro}\n"
        if sample:text+="\n## 使用示例\n"+self.example(sample)
        text+="\n## 类型与字段\n"
        for m in re.finditer(r'(?:register|registerComponentType)\(\s*"([^"]+)"\s*,\s*([^;]*?)\);',self.raw(cls),re.S):
            identifier, expression=m.groups()
            types=re.findall(r"\b([A-Z][\w]*)\.(?:Type|CODEC|Impl)|\b([A-Z][\w]*)::new",expression)
            classes=[a or b for a,b in types]
            impl=next((n for n in classes if n in self.sources),None)
            if "ConsumeFuel" in expression:impl="SuperHeatingRecipe"
            text+="\n### "+code("anvilcraft:"+identifier)+"\n"
            if additional and identifier in additional:text+="\n"+additional[identifier]+"\n"
            fs=list(self.fields[impl]) if impl else []
            if impl=="SuperHeatingRecipe": fs=[]
            if impl and re.search(r"RecipeInputSlot\.CODEC\s*\.forGetter",self.raw(impl)):fs+=self.fields["RecipeInputSlot"]
            if fs:
                for owner,rows in schema_groups(fs,self.root).items():
                    if len(schema_groups(fs,self.root))>1: text+="\n**"+owner+"**\n"
                    text+=fields_table(rows,self.rev)
            elif impl and "MapCodec.unit(" in self.raw(impl):text+="\n类型本身就确定全部行为，填写分派 ID 即可。\n"
            if impl:text+="\n"+self.link(impl)+"\n"
        text+="\n"+self.link(cls)+"\n"
        write(self.dest/(page+".md"),text)

    def celestials(self):
        tracks=self.select("data/anvilcraft/stellar_tracks.json")
        profiles=self.select("data/anvilcraft/stellar_event_profiles.json")
        coverage=self.select("data/anvilcraft/stellar_track_coverage.json")
        headings={
          "tracks":("演化轨道与阶段","stellar_tracks.json","每条轨道引用进入阶段的节点 ID，结束阶段还可绑定事件。必须保留质量 41 至 64 对应的 24 条轨道，ID 从 `mass_41` 到 `mass_64`。质量 41 使用棕矮星入口。",["StellarTrack","StellarTrackDefinition","StellarTerminal","PhaseNode","StellarMetallicity"]),
          "dynamics":("恒星动态控制点","stellar_tracks.json","阶段内的 `dynamics` 描述物理量如何随进度变化。各个控制点给出半径、温度、光度和包层。响应对象调节金属丰度带来的偏移。",["StellarNodeDynamics","StellarControlPoint","StellarMetallicityResponse"]),
          "profiles":("恒星事件曲线","stellar_event_profiles.json","事件文件的根是数组，每个对象用 `profileId` 标识。阶段的 `eventProfileId` 引用此处的 ID。加载器拒绝重复 ID、无对应曲线的引用和不可达的终末事件。",["StellarEventProfile"]),
        }
        for slug,(title,filename,intro,classes) in headings.items():
            text=f"# {title}\n\n{intro}\n\n资源位置为 `data/anvilcraft/{filename}`。资源管理器按固定文件名选取最高优先级的完整文件。修改前从内置文件复制整表。\n"
            target=profiles if slug=="profiles" else tracks
            d=json.loads((self.root/target).read_text("utf8"))
            row=d[0] if isinstance(d,list) else d["tracks"][0]
            if slug=="dynamics":row=row["phaseNodes"][0]["dynamics"]
            text+="\n## 一个内置条目\n"+fence(row)+"\n"+source_link(target,self.rev,label="包含全部条目的文件")+"\n"
            for cls in classes: text+="\n## "+cls+"\n"+fields_table(self.fields[cls],self.rev)
            text+="\n"+self.link("StellarTrackLibrary")+"\n"
            write(self.dest/("stars/"+slug+".md"),text)
        cov=json.loads((self.root/coverage).read_text("utf8"))
        text="# 轨道覆盖校验与重载\n\n服务端同时读取轨道、事件和覆盖清单，在临时数据中校验全部引用后才替换正在使用的演化库。读取失败时日志包含 `Invalid stellar resources`，当前演化库继续生效。\n\n覆盖清单使用固定路径 `data/anvilcraft/stellar_track_coverage.json`。根对象的 `tracks` 是必填数组，每条记录的 `trackId`（字符串）、`massAnvils`（整数）、`startingNodes`（字符串到节点 ID 的映射）均须与轨道定义完全一致。一条轨道恰好对应一条记录。\n\n以下为清单内的一条记录。\n"+fence(cov["tracks"][0])+"\n"+source_link(coverage,self.rev,label="完整覆盖清单")+" · "+self.link("StellarTrackLibrary")
        write(self.dest/"stars/coverage.md",text)
        write(self.dest/"stars/index.md","# 恒星演化数据\n\n调整恒星的阶段时长、外观或终末事件时需要同时保持三份固定文件一致。\n\n- [轨道与阶段](./tracks)\n- [动态控制点](./dynamics)\n- [事件曲线](./profiles)\n- [覆盖清单](./coverage)")

    def registry_pages(self):
        base="data/anvilcraft/anvilcraft"
        self.registry("registries/amulet","护符掉落定义","在 `data/<命名空间>/anvilcraft/amulet_definition/<名称>.json` 中规定受伤来源与护符的对应关系。进入世界时按动态注册表读取，并把条目同步给客户端。根对象的 `type` 必填，决定其余字段。",
            "ModAmuletDefinitionTypes", self.select(base,"/amulet_definition/anvil.json"),
            {"normal":"`obtains` 描述伤害来源谓词，可给单项或多项。默认 `or = true` 时匹配任一项即可。空条件集合在 OR 模式下不匹配，在 AND 模式下匹配。产出的护符数量由实现固定为 1。","comrade":"使用同伴护符专用判断。","abnormal":"使用异常护符专用判断。"})
        self.registry("registries/category","存储终端分类","使用 `data/<命名空间>/anvilcraft/category/<名称>.json` 给存储网络增加可选分类。根对象的 `type` 选择分类算法。复合分类中的子项可以引用注册 ID，命名空间分类可按来源模组筛选。此动态注册表在加载世界时读取并同步。","ModCategoryTypes",self.select(base,"/category/anvilcraft.json"))
        text="# 蓝图放置材料与状态\n\n一次自动放置需要消耗哪些物品，取决于蓝图方块自己的注册名。要改原版方块，在 `data/minecraft/anvilcraft/block_placement_rules/<方块名>.json` 创建同名条目。模组方块使用其自身的命名空间。规则在世界动态注册表建立时读取并同步给客户端。\n\n## 状态与材料的对应\n"+self.example(self.select("data/minecraft/anvilcraft","/block_placement_rules/sea_pickle.json"))
        text+="\n根对象的 `rules` 数组从上到下保留所有匹配项。每条规则中，`properties` 可以为字符串或字符串数组。数组成员之间取或，同一字符串内以逗号分隔的条件取且。空字符串匹配任意状态。`a=b` 检查属性值，`!a=b` 取反，`a`、`!a` 检查属性存在性。\n\n`item` 可以写成物品 ID，或含 `id`、`count`、`components` 的物品栈。`{}` 表示空栈，可用来禁止放置。返还空桶等副产品时填写 `return_item`。\n\n## 状态改写\n\n`state` 是表达式到指令的对象。指令中的 `属性` 会从蓝图复制同名值，`!属性` 恢复目标默认值，`属性=值` 设置常量；`minecraft:stone[属性->]` 可切换方块并复制指定属性。未知属性会被跳过。\n"
        for owner,rows in schema_groups(self.fields["BlockPlacementRuleSet"],self.root).items(): text+="\n### "+owner+"\n"+fields_table(rows,self.rev)
        write(self.dest/"registries/placement.md",text)
        write(self.dest/"registries/index.md","# 动态注册表\n\n- [护符掉落定义](./amulet)\n- [存储终端分类](./category)\n- [蓝图放置材料与状态](./placement)\n\n新建条目后重新进入世界，使客户端与服务端取得同一组注册键。\n\n"+self.link("ModRegistryKeys"))

    def mechanics(self):
        inworld=next(p for p in self.resources["data/anvilcraft/recipe"] if p.endswith("/radiation_block_explosion.json"))
        self.registry("impact/predicates","世界内配方条件","在 `anvillib_recipe:in_world_recipe` 中，`trigger` 指定触发时机。铁砧冲击使用 `anvilcraft:on_anvil_fall_on`。内置样例分别使用 `conflicting` 与 `non_conflicting` 保存两组谓词，`outcomes` 保存成功后的动作。位置偏移均相对于触发点。","ModRecipePredicateTypes",inworld)
        self.registry("impact/outcomes","世界内配方结果","把下列对象放入世界内配方的 `outcomes` 数组，`type` 选择结果实现。热量动作的 `heat` 是分等级的效果列表；锅内流体匹配与消耗属于条件侧。","ModRecipeOutcomeTypes")
        self.registry("crafting/modifiers","锻造结果修饰器","在结果的 `modifiers` 数组中逐项写对象，`type` 表示修改操作。引用输入槽时使用 `template`、`material` 或 `input.0` 等编号。","ModResultModifierTypes")
        self.registry("crafting/providers","数值提供器","结果数量可使用常量或带 `type` 的数值提供器。例如 `{\"type\":\"anvilcraft:constant\",\"value\":2}` 始终给出 2。嵌套提供器可以在运行时根据附魔或抽样计算数值。","ModNumberProviderTypes")
        self.registry("crafting/custom-data","组件访问方式","从锻造输入复制、合并或转换组件时，组件访问对象的 `type` 选择读取何种数据。\n","ModCustomDataComponents")
        self.registry("crafting/frost-material","霜钢锻造材料谓词","在锻造配方的 `material` 中选择一种谓词。`and` 和 `or` 均可递归组合。内置置换配方给出了完整的模板、材料和结果写法。","ModFrostMaterialPredicateTypes", self.select("data/anvilcraft/recipe","/permutation/"))
        self.registry("rules/triggers","进度触发器","在 `data/<命名空间>/advancement/<名称>.json` 的 `criteria` 对象内，每个自命名准则包含 `trigger` 字符串和可选 `conditions` 对象。下列字段表描述对应触发器的 `conditions`。例如检查涌泉建立时，注册 ID 拼写为 `anvilcraft:mineral_fountain_crate`。","ModCriterionTriggers",self.select("data/anvilcraft/advancement","/mineral_fountain"))
        self.registry("rules/loot-conditions","战利品条件","把条件对象写进战利品池、条目或函数的 `conditions` 数组。这里的分派键是 `condition`。物品组件谓词从战利品上下文读取对应物品。","ModLootItemConditions")
        self.registry("rules/enchantment","附魔效果与组件","在 `data/<命名空间>/enchantment/<名称>.json` 配置附魔等级、费用、可用装备和 `effects`。根对象下 `effects` 的键是效果组件 ID。实际效果对象由 `type` 分派。左键收获效果的注册 ID 拼作 `anvilcraft:haevest_left_click`。","ModEnchantmentEffects",self.select("data/anvilcraft/enchantment"))
        self.registry("rules/item-tests","物品细分谓词","在物品谓词的 `predicates` 映射中，以注册 ID 为键，以下字段构成键对应的对象。","ModItemSubPredicates")
        self.registry("rules/entity-tests","实体细分谓词","在实体谓词中设置 `type_specific` 对象，用 `type` 选择下列实现。方块实体类型匹配与实体当前所处的流体环境是独立的条件。","ModEntitySubPredicates")
        text="# 全局战利品修饰器\n\n先在 `data/neoforge/loot_modifiers/global_loot_modifiers.json` 注册要应用的条目。根对象的 `entries` 是有序 ID 数组，`replace` 是布尔值；若希望保留较低优先级数据包的注册项，填 `false`。\n"+self.example(self.select("data/neoforge/loot_modifiers"))
        text+="\n修饰器文件放在 `data/<命名空间>/loot_modifiers/<名称>.json`。`type` 为实现 ID，`conditions` 为战利品条件数组，空数组允许在任意满足实现要求的上下文尝试。内置熔炼和瓦解逻辑由代码实现。\n"+self.example(self.select("data/anvilcraft/loot_modifiers"))+"\n"+self.link("ModLootModifiers")+" · "+self.link("ModLootItemFunctions")
        write(self.dest/"rules/loot-modifiers.md",text)
        self.components()
        write(self.dest/"rules/index.md","# 战利品、进度与物品组件\n\n- [进度触发器](./triggers)\n- [全局战利品修饰器](./loot-modifiers)\n- [战利品条件](./loot-conditions)\n- [附魔效果与组件](./enchantment)\n- [物品栈组件](./components)\n- [物品细分谓词](./item-tests)\n- [实体细分谓词](./entity-tests)")

    def components(self):
        source=self.raw("ModComponents")
        text="# 物品栈组件\n\n配方产物和战利品均能携带组件。在物品栈的 `components` 对象里以注册 ID 为键。例如下面的结果栈显式写入储能值。\n"+fence({"id":"anvilcraft:magnet_ingot","count":1,"components":{"anvilcraft:stored_energy":16}})
        text+="\n## 组件值\n\n下表描述组件存在时的持久化格式。省略组件表示使用物品的默认组件集合。\n\n| 组件 | 值类型或 Codec |\n| --- | --- |\n"
        details=[]
        for m in re.finditer(r'(register(?:Empty)?)\(\s*"([^"]+)"\s*([^;]*?)\);',source,re.S):
            method,name,args=m.groups()
            codec=re.search(r'\.persistent\((.*?)\)\s*\.networkSynchronized',args,re.S)
            raw=" ".join(codec[1].split()) if codec else None
            if not raw and method!="registerEmpty":continue
            text+=f"| `anvilcraft:{name}` | "+(typename(raw) if raw else "空对象 `{}`")+" |\n"
            cls=raw.split('.')[0] if raw else None
            if cls in self.sources and self.fields[cls]:details.append((name,cls))
        for name,cls in details:
            text+="\n## "+code(name)+"\n"
            for owner,rows in schema_groups(self.fields[cls],self.root).items():
                text+="\n**"+owner+"**\n"+fields_table(rows,self.rev)
        write(self.dest/"rules/components.md",text+"\n"+self.link("ModComponents"))

    def tags(self):
        groups=defaultdict(list)
        for k,files in self.resources.items():
            if not k.startswith("data/") or not k.endswith("/tags"):continue
            for p in files:
                registry,tag=p.partition("/tags/")[2].split("/",1)
                groups[registry].append((k.split("/")[1]+":"+tag.removesuffix(".json"),p))
        labels={"block":"方块","item":"物品","entity_type":"实体类型","enchantment":"附魔","fluid":"流体","damage_type":"伤害类型","point_of_interest_type":"兴趣点类型"}
        index="# 标签与内置键\n\n要给既有配方或设备扩展可用材料，通常只需给它读取的标签追加条目。先按注册表找标签，再在自己的数据包内使用相同命名空间与路径。\n"
        for reg,entries in groups.items():
            label=labels.get(reg,reg)
            text=f"# {label}标签\n\n路径为 `data/<命名空间>/tags/{reg}/<标签名>.json`。同一个标签可由多个数据包追加。\n\n`values` 必填，是注册 ID、以 `#` 开头的标签引用或条目对象的数组。可选布尔值 `replace` 默认 `false`。对象条目使用字符串 `id` 和可选布尔值 `required`（默认 `true`）；依赖可选模组时填写 `false`。\n"
            text+="\n## 内置示例\n"+self.example(min(entries,key=lambda x: (self.root/x[1]).stat().st_size)[1])+"\n## 标签目录\n\n| 标签 ID | 内置文件 |\n| --- | --- |\n"
            for tag,p in sorted(entries):text+="| "+code(tag)+" | "+source_link(p,self.rev,label="查看条目")+" |\n"
            write(self.dest/("tags/"+reg+".md"),text)
            index+="\n- ["+label+"标签](./"+reg+")"
        write(self.dest/"tags/index.md",index)

    def standard(self):
        groups=[
            ("terrain","世界生成与维度","data/anvilcraft/worldgen","修改月球的矿脉或地形时要区分配置、放置规则与维度引用。配置地物描述生成什么，放置地物指定尝试次数、高度和空间筛选。",["biome","configured_feature","placed_feature","noise","noise_settings","structure","structure_set","template_pool"]),
            ("assets","方块模型、音效与字体","assets/anvilcraft","资源包按完整路径覆盖内置资源。按 F3+T 重新读取后，用最小场景检查新增资源是否被已有方块、粒子、声音事件或字体引用。",["blockstates","models","particles","font","sounds.json"]),
            ("world","维度、伤害与燃料","data/anvilcraft","维度定义引用维度类型和生成器。月球气压和重力另存于 dimension_physics 路径，坐标加速度使用三分量数值数组。",["dimension","dimension_type","dimension_physics","damage_type"]),
            ("lib","多方块定义与表达式函数","data/anvilcraft/anvillib","AnvilCraft 向 AnvilLib 提供具名结构与可调用函数。结构中的非空符号要有对应 mapping，函数参数名与表达式体的引用保持一致。",["definitions","function"]),
        ]
        for slug,title,prefix,intro,names in groups:
            text=f"# {title}\n\n{intro}\n"
            for name in names:
                if prefix.endswith(("worldgen","anvillib")):
                    bucket=prefix; seq=[p for p in self.resources.get(bucket,[]) if "/"+name+"/" in p]
                else:
                    bucket=prefix+"/"+name;seq=self.resources.get(bucket,[])
                seq=[p for p in seq if p.endswith(".json")]
                if not seq:continue
                chosen=min(seq,key=lambda p: (self.root/p).stat().st_size)
                obj=json.loads((self.root/chosen).read_text("utf-8-sig"))
                text+="\n## "+code(name)+"\n\n路径 "+code(chosen.partition("/resources/")[2])+"。\n"
                if isinstance(obj,dict) and len(json.dumps(obj))<3800:text+=self.example(chosen)
                else:text+="\n"+source_link(chosen,self.rev,label="完整内置文件")+"\n"
                if isinstance(obj,dict):
                    text+="\n| 此文件使用的根字段 | 样例中的值类型 | 含义 |\n| --- | --- | --- |\n"
                    for k,v in obj.items():
                        t={dict:"对象",list:"数组",str:"字符串",int:"整数",bool:"布尔值",float:"数值",type(None):"空"}.get(type(v),"")
                        text+="| "+code(k)+" | "+t+" | "+VANILLA_FIELDS.get(k,FIELD_NOTES.get(k,"按上方资源 ID 的定义读取"))+" |\n"
            if slug=="terrain":
                text+="\n## 撞击坑密度函数\n\n月球地形中的自定义密度函数还可配置以下参数。\n"+fields_table(self.fields["CraterDensityFunction"],self.rev)
            if slug=="world":
                text+="\n## 熔炉燃料数据映射\n\n向 `data/neoforge/data_maps/item/furnace_fuels.json` 的 `values` 对象添加物品 ID 或标签。\n"+self.example(self.select("data/neoforge/data_maps"))
            write(self.dest/("resources/"+slug+".md"),text)
        self.client()
        write(self.dest/"resources/index.md","# 世界资源与客户端资源包\n\n- [模型选取与动态部件](./selection)\n- [方块模型、音效与字体](./assets)\n- [游戏内手册与动态模型](./guide)\n- [世界生成与维度](./terrain)\n- [维度、伤害与燃料](./world)\n- [多方块定义与表达式函数](./lib)")
    def client(self):
        text="# 模型选取与动态部件\n\n在资源包中建立 `assets/example/anvillib/cube_selection.json`。先设置命名空间默认行为，再对个别方块作例外处理。方块级设置优先。\n"+fence({"namespaces":{"anvilcraft":"model"},"blocks":{"anvilcraft:trading_station":"outline"}})
        text+="\n| 字段 | 类型 | 缺省行为 |\n| --- | --- | --- |\n| `namespaces` | 命名空间到模式的对象 | 沿用已有规则 |\n| `blocks` | 方块 ID 到模式的对象 | 采用命名空间规则 |\n\n`model` 启用模型选取和描边，`outline` 采用原有选取并绘制模型轮廓，`vanilla` 保留原有选取和描边。高优先级包逐键覆盖，同包按资源 ID 字典序合并。\n\n## 排除方块实体渲染部件\n\n固定资源 `assets/anvilcraft/model_selection_denylist.json` 接受可选字符串数组 `disable_ber_selection`。元素须为已注册的 AnvilCraft 方块 ID。高优先级包的完整有效数组替换先前的值；省略该字段得到空集合。解析失败保留前一个有效集合。\n"+self.example(self.select("assets/anvilcraft/model_selection_denylist.json"))+"\n"+self.link("ModelSelectionDenylist")
        write(self.dest/"resources/selection.md",text)
        example=next(p for p in self.resources["assets/anvilcraft/ageratum"] if "/zh_cn/" in p and p.endswith("/001.md"))
        text="# 游戏内手册与动态模型\n\n手册位于 `assets/anvilcraft/ageratum/<语言>/<分类>/<文章>.md`。资源包可用相同路径修改现有文章。保留 YAML 前置导航标题和图标；正文可通过 Ageratum 的物品引用和配方组件展示当前配方。中文文章使用 `zh_cn`。\n\n"+source_link(example,self.rev,label="随模组发布的中文手册文章")+"\n\n## 中间态与天体模型\n\n客户端搜集序列装配的 `models/block/wip_display/` 及天体的 `models/block/celestial_body/` 下的 JSON 模型，按独立模型注册。序列装配的 `displayed_models` 使用模型 ID，去掉 `models/` 和扩展名。天体纹理放在 `assets/anvilcraft/textures/block/celestial_body/`；重载资源包会清空动态纹理缓存。\n\n"+self.link("RegisterAdditionalEventListener")+" · "+self.link("StellarVisualReloadListener")
        write(self.dest/"resources/guide.md",text)

VANILLA_FIELDS=dict(noise="噪声参数或噪声注册 ID",layers="叠加层",cell_size="采样单元尺寸",min_radius="最小半径",max_radius="最大半径",rim_height="坑缘高度",bowl_depth="坑底深度",rim_width="坑缘宽度", type="选择子格式的注册 ID",config="对应类型的配置",feature="引用的配置地物",placement="按顺序执行的位置筛选或重复操作",structures="候选结构及权重",elements="模板池的加权条目",fallback="备用模板池 ID",amplitudes="各级噪声振幅",firstOctave="首个采样八度",generator="该维度的区块生成器",base_gravity="基础重力向量",base_pressure="基础气压",universal_drag="环境阻力",dimension="适用维度", variants="状态到模型变体的映射",parent="要继承的模型",textures="纹理变量或纹理引用",providers="按优先级排列的字体提供器",mapping="字符到匹配条件的映射",grid="按层分组的字符行",parameters="函数形参名称",body="表达式函数体", exhaustion="造成伤害时的饥饿消耗",message_id="死亡消息翻译键后缀",scaling="难度缩放模式")

def build(repo,inventory,dest):
    h=Handbook(repo,dest,inventory)
    h.registry_pages()
    h.celestials()
    h.mechanics()
    h.tags()
    h.standard()
    index="# 数据包与资源包\n\n配方放在服务端 `data/<命名空间>/recipe/`，资源包的模型、翻译和游戏内手册放在 `assets/<命名空间>/`。要覆盖内置配方，复用它的命名空间和相对路径；另取 ID 会新增同类型配方。改配方或标签后执行 `/reload`，动态注册表变更在重新打开世界时加载。\n\n## 选择格式\n\n"
    for g,title in GROUPS.items(): index+="- ["+title+"](./"+g+"/)\n"
    for g,title in [("registries","动态注册表"),("stars","恒星演化数据"),("rules","战利品、进度与物品组件"),("tags","标签与内置键"),("resources","世界资源与客户端资源包")]:index+=f"- [{title}](./{g}/)\n"
    write(dest/"index.md",index)

if __name__=="__main__":
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("repo",type=Path)
    parser.add_argument("inventory",type=Path)
    parser.add_argument("destination",type=Path)
    args=parser.parse_args()
    build(args.repo.resolve(),json.loads(args.inventory.read_text(encoding="utf8")),args.destination)
