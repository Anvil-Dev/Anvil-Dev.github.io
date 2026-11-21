from __future__ import annotations

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path

# Domain names and reading notes are curated. Fields and examples come from the
# active checkout. A new recipe serializer must be reviewed before publication.
GROUPS = {
    "impact": "铁砧冲击加工",
    "machine": "流体、激光与设备加工",
    "crafting": "合成、饰品与锻造",
    "structures": "多方块与序列装配",
    "fountain": "矿物涌泉",
    "transform": "生物转化",
    "celestial": "天体与神庙配方",
}
DATA = """
impact|block_compress|方块压缩|用一组方块状态谓词描述受压材料，将指定位置改成结果方块。
impact|block_crush|方块粉碎|使用一个状态谓词筛选要粉碎的方块，再指定粉碎后的方块状态。
impact|block_smear|方块涂抹|把接触的方块组合写进 inputs。相同的材料放在不同位置可能匹配其他加工方式。
impact|block_processing|方块处理|序列装配可把材料方块与处理方块配对。输入与输出偏移均以冲击点下方一格为基准。
impact|item_crush|物品粉碎|用粉碎台处理掉落实体。材料谓词可以接受物品标签，产物列表可以给不同产物设置各自的概率。
impact|item_compress|物品压缩|把若干掉落物压成新的物品。多个配方共用材料时，检查 priority 和材料数量。
impact|item_inject|物品注入|同时限定掉落物和要注入的方块。只设物品条件无法区分接受注入的基底。
impact|mesh|筛分|在筛网上方处理掉落物。使用 results 中各个产物的概率控制副产物。
impact|stamping|物品冲压|为冲压工序指定掉落物输入和产物，游戏在铁砧触发加工时检查材料及设备。
impact|stamping_unique_items|特殊物品冲压|为特殊冲压行为提供候选产物。产物使用带概率的物品栈格式。
impact|unpack|拆包|为包装物定义一次拆包后的产物。要输出多件，请在产物中注明数量。
impact|squeezing|方块榨取|用方块状态筛选受压材料，并在同一份配方描述炼药锅内的流体变化。
impact|mass_inject|质量注入|给能参与质量注入的物品指定质量值。同一类材料可用原料标签一起匹配。
impact|anvil_collision|铁砧碰撞|按碰撞铁砧、命中方块和速度匹配。输出可同时包含方块转换和多个掉落物。
machine|fast_cooking|快速烹饪|配方分别处理食材和炼药锅液体。将液体谓词及消耗量写在根对象。
machine|super_heating|超高温加热|把输入物品和炉内环境写入加热配方。产物使用带概率的物品栈。
machine|neutron_irradiation|中子辐照|为中子辐照工序定义物品转换，并通过炼药锅谓词限制反应环境。
machine|time_warp|时移加工|在输入和产物之外，可以用 catalysts 限定催化材料。
machine|solid_liquid|固液加工|同一批次同时匹配固体和锅内流体。用 max_efficiency 限制单次并行加工倍率。
machine|fluid_mixing|流体混合|给混合器定义带用量的流体原料，以及物品或流体产物。
machine|laser_hit|激光照射|用强度和持续照射时长筛选命中的方块。需要模拟方块战利品时开启 use_block_loot。
machine|charger_charging|充放电|为一个输入物品指定充放电功率和耗时。负功率用于充电，正功率用于放电。功率以 kW 计，时间以 tick 计。
machine|portal_conversion|传送门转换|匹配要发生转换的方块状态，再设置转换后的方块及其概率。
crafting|neutronium_charging|中子锭充能|按有序合成的符号表和图案安排中子锭与超级电容，再由专用配方类处理合成时的额外逻辑。
crafting|canning_food|罐装食物|让工作台启用罐装食物的特殊合成。食材识别与结果组件由配方类计算。
crafting|pill_recipe|药丸合成|启用药丸的动态合成。输入槽和产物由特殊配方在合成时判断。
crafting|jewel_crafting|宝石工艺|用饰品工作台配方列出材料和结果，按需关闭成品默认携带的消失诅咒。
crafting|energy_weapon_make|能量武器制作|为能量武器指定一至六个原料谓词和结果栈。依赖外部模组时可配合 NeoForge 加载条件。
crafting|two_to_one_smithing|二合一锻造|将两件基础物品合成一件成品。模板、锻造材料和基础物品分别匹配。
crafting|four_to_one_smithing|四合一锻造|将四件基础物品合成一件成品。结果修饰器可从输入复制或调整组件。
crafting|eight_to_one_smithing|八合一锻造|为八件基础物品及锻造材料设置匹配条件，再一次性指定产物。
crafting|deformation|霜钢锻造变形|指定锻造模板、材料谓词以及参与变形的一组物品。
crafting|permutation|霜钢锻造置换|用多个材料与结果选项把同一个基础物品导向不同锻造成品。
structures|multiblock|多方块合成|用分层字符网格描述输入结构，每个非空符号通过映射表匹配方块。
structures|multiblock_conversion|多方块转换|分别描述输入与输出结构。刷怪笼数据迁移还需给出源、目标相对坐标。
structures|4d_multiblock|四维多方块|在同一份配方中引用多份结构定义，匹配完成后给出一个物品栈。
structures|procedural_process|序列装配|以步骤表组织多个加工过程。首个方块、过程显示模型、循环设置和最终方块各自独立。
fountain|mineral_fountain_active|主动矿物涌泉|除了维度、高度和输出，主动配方可用 around 要求周边存在指定数量的方块。
fountain|mineral_fountain_passive|被动矿物涌泉|给涌泉设置候选产物。用 priority 和 weight 处理多个匹配项。
fountain|mineral_fountain_replacement|矿物涌泉替换|在既有涌泉配方上指定替换对象和触发概率，适合按维度重定向产物。
transform|mob_transform|生物转化|为某个实体类型选择一种或多种转化结果，并可按实体标签数据设置附加条件。
transform|mob_transform_with_item|物品辅助转化|除实体类型外再检查周围的材料，根据物品数量调整特殊结果概率。
celestial|celestial_anvil|天体铁砧合成|登记天体铁砧的特殊工作台配方，黑洞或白洞材料决定生成的天体预设。
celestial|planet_resource|行星资源|用 category 选择矿产、流体、生命或其他资源规则，再填写同名配置对象。
celestial|temple_demand|神庙需求|按类别列出物品与数量，供神庙需求系统选择。
celestial|special_celestial_body|特殊天体|将种子物品与天体预设绑定，并填写资源、物理属性及可选的登陆规则。
"""
RECIPE = {parts[1]: (parts[0], parts[2], parts[3]) for line in DATA.strip().splitlines() if (parts := line.split("|"))}
FIELD_NOTES = dict(
    ingredients="参与匹配的原料列表", ingredient="单个待匹配的原料", inputs="一组参与匹配的输入", input="待匹配的输入",
    result="完成配方后使用的结果", results="各次输出使用的结果列表", conditions="加载条件",
    block_ingredient="接受注入的方块条件", block_result="注入后的方块状态", priority="多个候选之间的优先级",
    catalysts="工序要求的催化剂", anvil="参与碰撞或压制的铁砧条件", transform_blocks="碰撞后转换的方块规则",
    output_items="碰撞产生的掉落物", hitBlock="冲击位置的方块条件", speed="碰撞所需速度参数",
    signed="是否启用有符号值", mass="质量数值", fluid="炼药锅的流体匹配条件", consume="本次工序的消耗设置",
    transform="工序结束时的流体变化", chance="触发概率", ignited="匹配点燃状态", max_efficiency="允许的最大加工倍率",
    fluid_results="产出的流体栈", consume_maximum="按可用原料量尽量多地消耗", laser_strength="匹配的激光强度",
    hit_time="持续照射所需 tick 数", result_items="额外掉落的物品栈", result_block="加工后的方块状态",
    use_block_loot="是否计算方块自身战利品",requires_lens="是否要求透镜",laser_type="参与匹配的激光类型",heat_duration="保留热量的 tick 数",
    time="时间参数", power="充放电功率，负值充电，正值放电，单位 kW", pattern="输入的有序图案或结构定义",
    key="图案字符到原料的映射", category="选择类别", group="配方书分组名称", show_notification="是否显示解锁通知",
    has_vanishing_curse="产物是否带消失诅咒", template="锻造模板谓词", material="锻造材料谓词",
    modifiers="按顺序处理结果的修饰器", options="各材料与结果的对应关系", definitions="依次参与匹配的结构定义",
    inputPattern="输入结构",outputPattern="输出结构",modifySpawnerAction="迁移刷怪笼的相对位置", initial_block="第一步开始前的方块条件",
    steps="按工序编排的步骤对象列表", loop="循环次数", displayed_model="展示使用的模型 ID", displayed_models="多阶段的模型 ID 列表",
    multiple_loop_first_step="重复循环使用的首步", icon="界面图标对应的物品栈",dimension="维度资源 ID",height="涌泉高度条件",
    weight="在候选集中抽取的相对权重", around="附近方块及数量的要求", from_block="可原地转换的方块条件",to_block="生成的方块",
    to_fluid="伴随配方产生的流体栈",replace="允许替换的涌泉配方 ID",heat="热量效果", tier="热量等级",duration="持续时间",count="数量",
    tag_predicates="转化前对实体数据的额外判断",tag_modifications="转化时对实体数据的修改列表",transform_options="转化时启用的选项",
    special_result="命中特殊分支时的实体结果",item_result="掉落的物品结果",chance_percent_per_item="每件输入材料增加的概率百分点",
    index="步骤或列表索引",content="实际执行的子配方", type="分派到对应实现的类型 ID", name="名称",id="注册 ID",
)
FIELD_NOTES["neoforge:conditions"] = "NeoForge 在载入时计算的条件列表"
FIELD_NOTES["or"] = "布尔值为真时按任意匹配，为假时按全部匹配"
FIELD_NOTES.update(dict(
    active_phase="当前生效的相位",amulets="已存护符列表",autoRotate="是否允许自动旋转蓝图",auto_fill="是否自动填充合成原料",
    black_list="旧式黑名单开关",bowl_depth="坑底深度",cell_size="噪声采样单元尺寸",collecting="约束热量收集状态",
    crafting_input="合成网格的原料",custom_name="自定义名称文本",damage="伤害来源或伤害谓词",deny_list="启用排除列表",
    direction="结构朝向",enchanted_chance="具有附魔时按附魔等级计算的概率",enchantments="附魔数据",
    entity="实体谓词",entitys="保存的实体类型列表，键名按序列化器拼写",file="结构存储文件标识",
    include_components="匹配过滤物品时是否比较组件",input_type="输入数据类型",inverted="是否反转判断结果",
    isMonster="记录捕获对象是否为怪物",is_monster="按怪物属性进行匹配",last_opened="最近打开的存储界面",
    layers="地形采样层数",list="过滤器物品列表",mass_anvils="演化体量的铁砧数条件",maxX="X 轴上界",maxY="Y 轴上界",
    maxZ="Z 轴上界",max_radius="最大撞击坑半径",merciless="无情属性的配置",minX="X 轴下界",minY="Y 轴下界",
    minZ="Z 轴下界",min_radius="最小撞击坑半径",modifier="区间内执行的数值修正",noise="使用的噪声采样器",
    offset="相对于触发位置的偏移",phases="已记录的相位",pills="已存药丸",player="触发该准则的玩家谓词",
    players="记录的玩家列表",pos="方块位置",range="作用范围",recipeType="被匹配的配方类型",repair_cost="铁砧修复费用",
    rim_height="撞击坑边缘高度",rim_width="撞击坑边缘宽度",saved_entity_path="保存实体数据的路径",
    selection="当前选择的位置",sizeX="X 轴尺寸",sizeY="Y 轴尺寸",sizeZ="Z 轴尺寸",slot="槽位编号",
    stonecutter_input="切石机输入",stonecutter_selected="选中的切石配方",to_storage="是否输出到存储",
    totems="已存图腾列表",unenchanted_chance="缺少目标附魔时的概率",upsideDown="是否上下翻转结构",uuid="关联结构的唯一标识",
))
FIELD_NOTES.update(dict(
    portal="触发转换的传送门类型", distance="热量作用范围", isHorizontal="是否只计算水平距离",
    probability="选择该结果的概率", result_entity_type="转化后的实体类型", fromPos="源刷怪笼相对坐标", toPos="目标刷怪笼相对坐标",
    max_count="最多转换的方块数", output="转换后的结果", tagKeyPath="目标数值标签路径", requirement="比较运算", expected="用于比较的整数",
    path="待修改的数据路径",op="执行的修改操作",tag="写入的标签内容", block="目标方块的匹配条件",
    min="下限",max="上限",properties="匹配的属性表达式",item="物品或物品栈", return_item="放置完成后返还的物品",
    rules="状态到材料的映射规则",state="匹配条件到状态改写指令的映射", amulet="发放的护符物品栈",
    categories="参与组合匹配的分类", namespace="要匹配的命名空间",key="注册键或图案符号表",filter="物品过滤条件",
    predicates="参与匹配的谓词列表",presence="按存在性检查的组件类型",match_type="谓词的组合方式", component="目标组件类型",
    types="参与操作的组件类型", orig="待转换的原始类型",dest="目标数据表示",attrs="移除的属性 ID",components="组件补丁",
    n="二项分布试验次数",p="每次试验的成功概率",value="固定数值",enchantment="目标附魔",amount="计算出的数量或等级修正",
    cost="维修材料费用",allow_universal="是否接受通用材料",universal_cost="通用材料费用表达式",predicate="具体的匹配条件",
    profileId="事件曲线的唯一 ID",trackId="轨道 ID",surfaceClassFamily="表面类型族",phaseNodes="依次经过的阶段节点",
    terminalProfile="终末事件的 ID",definition="轨道入口和终末天体",version="此轨道定义的结构版本",massAnvils="以铁砧数表示的质量",
    startingNodes="表面类型到入口节点 ID 的映射",terminal="演化结束后留下的天体",metallicity="金属丰度范围与标度",
    phaseId="演化阶段标识",nodeId="同一轨道内的节点 ID",durationWeight="该阶段的相对时长",radius="半径参数",
    temperature="温度参数",luminosity="光度",envelopeFraction="包层所占比例",pulsationAmplitude="脉动幅度",
    pulsationFrequency="脉动频率",surfaceStyle="表面样式",eventProfileId="引用的事件曲线 ID",dynamics="动态控制点与脉冲行为",
    progress="控制点在阶段内的位置",envelope="包层比例",minimumTemperature="温度下限",maximumTemperature="温度上限",
    points="按进度排列的控制点",response="金属丰度响应",eventPolicy="事件触发策略",pulses="脉冲数量",wind="风强度",
    minimum="允许的最小值",maximum="允许的最大值",solarZ="太阳金属丰度参考值",minimumPulses="脉冲数下限",maximumPulses="脉冲数上限",
    amplitude="振幅修正",solarMass="以太阳质量计的质量",size="尺寸",kind="终末类型",precursorTicks="前兆阶段 tick 数",
    collapseTicks="坍缩阶段 tick 数",ejectaTicks="抛射阶段 tick 数",fadeTicks="衰退阶段 tick 数",coreRadiusCurve="核心半径曲线采样",
    ejectaRadiusCurve="抛射物半径曲线采样",peakEmission="峰值发光强度",palette="颜色值数组",shellCount="壳层数量",
    rayCount="射线数量",rayLength="射线长度",asymmetry="不对称程度",remnantKind="事件留下的遗骸类型",choices="可选条目集合",
    cold="寒冷环境参数",hot="炎热环境参数",mild="温和环境参数",source_tag="来源标签",denylist_tag="排除标签",
    step="资源生成步长",planet_type="行星类型",liquid_min="最低液体覆盖等级",output_fluid="输出流体 ID",entries="候选条目列表",
    pressure_type="适用气压类型",life_chances="各温度下产生生命的机会",land_entity_tag="陆生实体标签",aquatic_entity_tag="水生实体标签",
    drop_denylist_tag="禁用掉落物的标签",mild_extra_fluids="温和环境额外流体",civilization_chance="产生文明的机会",
    age_min="最低年龄",age_max="最高年龄",wasteland_chance="形成荒地的机会",mineral="矿产规则",fluid_results="流体产物",
    giant="巨行星资源规则",biological="生物资源规则",offering="供奉资源规则",wasteland="荒地规则",
    has_atmosphere="是否拥有大气",minerals="矿产条目",fluids="流体条目",biological_items="生物物品资源",biological_fluids="生物流体资源",
    offerings="供奉物列表",temple_blessings="神庙祝福条目",temple_punishments="神庙惩罚条目",needs_custom_model="是否使用定制模型",
    can_be_shattered="是否可被击碎",exclude_from_monolith="是否排除在独石选择之外",atmosphere="大气颜色",space="空间属性",
    energy="能量属性",model="模型标识",liquid_coverage="液体覆盖等级",magnetic_field="磁场强度",rotation_speed="自转速度",
    axial_tilt="自转轴倾角",seed_items="关联种子物品列表",resources="该天体产出的资源配置",landing="降落规则",travel="旅行规则",
    x="X 坐标",y="Y 坐标",z="Z 坐标",scale="坐标缩放比例",coordinate_rule="目的地坐标计算规则",return_rule="返程坐标计算规则",
))
CLASS_FIX = {"anvil_collision": "AnvilCollisionCraftRecipe", "4d_multiblock": "Multiblock4DRecipe", "procedural_process": "ProceduralProcessSerializer", "pill_recipe": "PillRecipe"}
HELPERS = {
    "mineral_fountain_active": ["AroundRequirement", "MineralFountainHeat","HeightRange"],
    "mineral_fountain_passive": ["MineralFountainHeat","HeightRange"], "mineral_fountain_replacement": ["MineralFountainHeat","HeightRange"],
    "procedural_process":["ProceduralProcessStep"], "multiblock_conversion":["ModifySpawnerAction"],
    "anvil_collision":["BlockTransform"], "permutation":["FrostSmithingOption"], "mob_transform":["TransformResult","NumericTagValuePredicate","TagModification"],
    "mob_transform_with_item":["TransformResult","NumericTagValuePredicate","TagModification"], "special_celestial_body":["CelestialTravelData"],
}

def source_link(path, rev, line=None, label=None):
    return f"[{label or Path(path).name}](https://github.com/Anvil-Dev/AnvilCraft/blob/{rev}/{path}" + (f"#L{line}" if line else "") + ")"

def code(o):
    return "`" + str(o).replace("|", "\\|") + "`"

def fence(obj):
    return "\n```json\n" + json.dumps(obj, indent=2, ensure_ascii=False) + "\n```\n"

def write(path, body):
    path.parent.mkdir(parents=True, exist_ok=True)
    for block in re.findall(r"```json\n(.*?)\n```", body, re.S):
        json.loads(block)
    if path.exists() and path.read_text(encoding="utf8")==body.rstrip()+"\n": return
    path.write_text(body.rstrip()+"\n", encoding="utf8")

def typename(expr):
    raw = expr.replace(" .", ".")
    if ".listOf(" in raw or raw in ("INGREDIENTS_CODEC","ITEM_RESULTS_CODEC","FLUID_RESULTS_CODEC","ICondition.LIST_CODEC"):
        kind = {"INGREDIENTS_CODEC":"带用量的流体原料", "ITEM_RESULTS_CODEC":"物品栈","FLUID_RESULTS_CODEC":"流体栈","ICondition.LIST_CODEC":"加载条件"}.get(raw)
        inner = raw.split(".listOf(")[0]
        return (kind or typename(inner)) + "数组"
    for t,n in (("intRange", "整数"),("floatRange","数值"),("doubleRange","数值")):
        if t in raw: return n+" "+code(raw[raw.index("(")+1:raw.index(")")].replace(", ", " 至 "))
    exact={"Codec.INT":"整数","Codec.LONG":"长整数","Codec.FLOAT":"数值","Codec.DOUBLE":"数值","Codec.BOOL":"布尔值","Codec.STRING":"字符串","CodecUtil.ITEM":"物品 ID","CodecUtil.ENTITY":"实体类型 ID","RESOURCE_LOCATION_CODEC":"资源 ID","ResourceLocation.CODEC":"资源 ID","Identifier.CODEC":"资源 ID","Ingredient.CODEC_NONEMPTY":"非空原料","ItemStack.CODEC":"物品栈对象","FluidStack.CODEC":"流体栈对象","BlockStatePredicate.CODEC":"方块状态谓词","ChanceItemStack.CODEC":"带概率的物品栈","ChanceBlockState.CODEC":"带概率的方块状态","ItemIngredientPredicate.CODEC":"物品原料谓词","BlockState.CODEC":"方块状态对象","BlockPos.CODEC":"三整数坐标","Vec3.CODEC":"三维坐标","Codec.unboundedMap(Codec.STRING, Codec.STRING)":"字符串到字符串的对象"}
    if raw.endswith(".codec()"): return typename(raw[:-8])
    return exact.get(raw,code(raw))

def default(field):
    if field["method"]=="fieldOf": return "必填"
    value=field["default"]
    if value is None: return "可省略"
    value = {"List.of()":"[]","Map.of()":"{}","new ArrayList<>()":"[]","Integer.MAX_VALUE":"2147483647","DEFAULT_WEIGHT":"1","DEFAULT_FROM":"空气方块","AbstractMineralFountainRecipe.DEFAULT_FROM":"空气方块","HeightRange.DEFAULT":"min = 0，max = 8","DEFAULT.min":"0","DEFAULT.max":"8","Blocks.AIR.defaultBlockState()":"空气方块"}.get(value,value)
    return "可省略，默认 "+code(value)

def fields_table(fields,rev):
    if not fields: return ""
    result="\n| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |\n| --- | --- | --- | --- |\n"
    for f in fields:
        name=f["name"]
        result+="| "+code(name)+" | "+typename(f["codec"])+" | "+default(f)+" | "+FIELD_NOTES.get(name,"")+" "+source_link(f["path"],rev,f["line"],"声明")+" |\n"
    return result

def schema_groups(fields,root):
    result=defaultdict(list)
    for f in fields:
        lines=(root/f["path"]).read_text(encoding="utf-8-sig").splitlines()
        earlier="\n".join(lines[:f["line"]])
        owners=list(re.finditer(r"\b(?:MapCodec|Codec)<([\w.]+)>\s+(\w+)\s*=\s*RecordCodecBuilder\.",earlier))
        label = owners[-1][1] if owners else Path(f["path"]).stem
        result[label].append(f)
    return result

def recipe_pages(root, dest, inv):
    rev=inv["revision"]
    codes={p.stem:p for p in (root/"src/main/java").rglob("*.java") if "integration" not in p.parts}
    register=codes["ModRecipeTypes"].read_text(encoding="utf8")
    serializers=re.findall(r'RECIPE_SERIALIZERS\.register\(\s*"([^"]+)"',register)
    unknown=set(serializers)-RECIPE.keys()
    if unknown: raise ValueError(f"Review new recipes: {unknown}")
    fields=defaultdict(list)
    for f in inv["fields"]: fields[Path(f["path"]).stem].append(f)
    examples=defaultdict(list)
    for k,paths in inv["resources"].items():
        if not k.startswith("data/") or not k.endswith("/recipe"):continue
        for p in paths:
            if not p.endswith(".json"):continue
            j=json.loads((root/p).read_text(encoding="utf-8-sig"))
            if j.get("type","").startswith("anvilcraft:"):examples[j["type"].removeprefix("anvilcraft:")].append((p,j))
    for recipe_id in serializers:
        group,title,intent=RECIPE[recipe_id]
        cls=CLASS_FIX.get(recipe_id, "".join(x.title() for x in recipe_id.split("_"))+"Recipe")
        path=codes[cls]
        java=path.read_text(encoding="utf8")
        source=path.relative_to(root).as_posix()
        samples=sorted(examples[recipe_id],key=lambda e:(len(json.dumps(e[1])),e[0]))
        exemplar=samples[0] if samples else (None,{"type":"anvilcraft:block_processing","inputs":[{"blocks":"minecraft:stone"},{"blocks":"minecraft:cobblestone"}],"result":{"block":"minecraft:gravel"}})
        assert exemplar[1]["type"]=="anvilcraft:"+recipe_id
        body=f"# {title}\n\n{intent}\n\n在数据包中建立 `data/example/recipe/{recipe_id}/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:{recipe_id}/example`。\n\n## 配方示例\n"+fence(exemplar[1])
        if exemplar[0]:body+="\n"+source_link(exemplar[0],rev,label="内置配方原文件")+"\n"
        body+="\n## 字段与取值\n\n根对象的 `type` 必填，填写 "+code("anvilcraft:"+recipe_id)+"。\n"
        groupfields=list(fields[cls])
        if "extends AbstractSerializer" in java and not groupfields: groupfields+=fields["AbstractProcessRecipe"]
        if re.search(r"HasCauldronSimple\.CODEC\s*\.forGetter",java): groupfields+=fields["HasCauldronSimple"]
        if "_to_one_smithing" in recipe_id:groupfields=fields["BaseMultipleToOneSmithingRecipe"]+fields["RecipeResult"][:2]
        if "PortalType.CODEC" in java and recipe_id=="portal_conversion": groupfields+=fields["PortalType"]
        if re.search(r"ProduceHeat\.Type\.MAP_CODEC\s*\.forGetter",java):
            groupfields += [f for f in fields["ProduceHeat"] if f["name"] in ("heat","distance")]
            body+="\n`heat` 的元素包含热量等级 `tier` 与持续 tick 数 `duration`，两者均必填。\n"
        if "createIngredientListCodec(" in java:
            helper=re.search(r'createIngredientListCodec\("ingredients",\s*(\d+)',java)
            if helper:
                groupfields.append(dict(name="ingredients",codec="Ingredient.CODEC.listOf()",method="fieldOf",default=None,path=source,line=java[:helper.start()].count("\n")+1))
                body+=f"\n原料列表最多包含 {helper[1]} 项。\n"
        if recipe_id=="fluid_mixing":body+="\n`ingredients` 接受 2 至 4 项，每项同时描述流体和用量。物品和流体产物各最多 3 项，合计至少 1 项。开启 `consume_maximum` 时仅允许流体产物。\n"
        if recipe_id.startswith("mineral_fountain"):body+="\n高度从当前维度的最低建造高度向上计数，两个端点都参与匹配。例如最低 Y 为 −64 的世界，默认范围覆盖 Y = −64 至 −56。\n"
        if recipe_id=="block_smear":body+="\n输出位置在冲击点下方两格，结果继承被涂抹方块的同名属性。楼梯朝向、台阶类型和原木轴向因此可以保留。\n"
        if recipe_id in ("canning_food","pill_recipe","celestial_anvil"):
            body+="\n`category` 是配方书分类字符串，示例使用 `misc`。输入判定与结果计算由 Java 的 `matches` 和 `assemble` 实现。改变分类只影响配方归类。\n"
        if recipe_id=="neutronium_charging":body+="\n底层使用原版有序合成序列化器。`pattern`（必填，字符串数组）按行给出形状，空格代表空槽。`key`（必填，对象）把每个非空字符映射为原料。`result`（必填，物品栈）指定产物。`group`（字符串，默认为空）、`category`（字符串，默认 `misc`）、`show_notification`（布尔值，默认 `true`）控制配方书表现。\n"
        if recipe_id in ("planet_resource","temple_demand","special_celestial_body"):
            if recipe_id=="special_celestial_body":
                body+="\nBehaviorFields 与 AtmosphereFields 的字段均直接写在根对象。ResourceFields 描述 `resources` 的内容；WeightedEntry、DemandEntry 是这些资源列表里的元素。\n"
            groups=schema_groups(groupfields,root)
            for k,fs in sorted(groups.items(),key=lambda it: it[0]!=cls):
                body+="\n### "+("根对象" if k==cls else k)+"\n"+fields_table(fs,rev)
        else: body+=fields_table(groupfields,rev)
        for helper in HELPERS.get(recipe_id,[]):
            for k,fs in schema_groups(fields[helper],root).items():
                body+="\n### "+k+"\n"+fields_table(fs,rev)
        body+="\n"+source_link(source,rev,label="配方实现与匹配规则")+"\n"
        write(dest/group/(recipe_id+".md"),body)
    for g,title in GROUPS.items():
        pages=[(RECIPE[k][1],k) for k in serializers if RECIPE[k][0]==g]
        if pages: write(dest/g/"index.md",f"# {title}\n\n"+"\n".join(f"- [{t}](./{k})" for t,k in pages))
    return len(serializers)

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("repo",type=Path)
    parser.add_argument("inventory",type=Path)
    parser.add_argument("destination",type=Path)
    args=parser.parse_args()
    print(recipe_pages(args.repo.resolve(),args.destination,json.loads(args.inventory.read_text(encoding="utf8"))),"recipe serializers")
