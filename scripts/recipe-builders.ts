import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'

const {values: args} = parseArgs({options:{source:{type:'string'}, handbook:{type:'string'}, java:{type:'string',default:'java'}}})
if (!args.source || !args.handbook) throw Error('node scripts/recipe-builders.ts --source <upstream> --handbook <branch> --java <JDK executable>')
const source = resolve(args.source), handbook=resolve(args.handbook), branch=basename(handbook)
const read=(path:string)=>readFileSync(path,'utf8').replaceAll('\r\n','\n')
const git=(...argv:string[])=>execFileSync('git',['-C',source,...argv],{encoding:'utf8',maxBuffer:24<<20})
const sha=git('rev-parse','HEAD').trim()
if(!read(join(handbook,'index.md')).includes(sha)) throw Error('文档索引与当前源码提交不符')
const files=git('ls-files','-z','--','src/main/java').split('\0').filter(p=>p.endsWith('.java'))
const tmp=mkdtempSync(join(tmpdir(),'recipe-call-sites-'))
const list=join(tmp,'sources')
const typeNames=new Map(files.map(p=>[basename(p,'.java'),p.slice('src/main/java/'.length,-5).replaceAll('/','.')]))
writeFileSync(list,files.filter(p=>p.includes('/data/') || p.includes('/init/')).join('\n'))
type Call = {file:string;line:string;pkg:string;imports:string;method:string;receiver:string;params:string;ids:string;unqualified:string;args:string;operation:string}
let calls:Call[]
try {
    const tool=fileURLToPath(new URL('./RecipeCalls.java',import.meta.url))
    const raw=execFileSync(args.java,['-Dfile.encoding=UTF-8',tool,source,list],{encoding:'utf8',maxBuffer:64<<20})
    calls=raw.trimEnd().split(/\r?\n/).filter(Boolean).map(row=>{
        const [file,line,pkg,imports,method,receiver,params,ids,unqualified,args,operation]=row.split('\t').map(cell=>Buffer.from(cell,'base64').toString('utf8'))
        return {file,line,pkg,imports,method,receiver,params,ids,unqualified,args,operation}
    })
} finally {rmSync(tmp,{recursive:true,force:true})}
function pages(path:string):string[] {return readdirSync(path,{withFileTypes:true}).flatMap(e=>e.isDirectory()?pages(join(path,e.name)):e.name.endsWith('.md')?[join(path,e.name)]:[])}
const references=pages(join(handbook,'api')).map(path=>({path,md:read(path)}))
const aliases:Record<string,string[]>={mob_transform:['TransformRecipeBuilder'],mob_transform_with_item:['TransformWithItemRecipeBuilder'], multiblock:['MultiblockBuilder'],'4d_multiblock':['Multiblock4DBuilder'],procedural_process:['ProceduralProcessRecipeBuilder']}
const available=new Set<string>(), missing:string[]=[], folder=join(handbook,'builders')
mkdirSync(folder,{recursive:true})
const words=(str:string)=>str.match(/[A-Za-z_$][\w$]*/g)??[]
const commonIngredient = '提交前检查物品原料列表和产物列表。两者都至少需要一项，空列表会触发 IllegalArgumentException。'
const smithing = '基类检查模板、材料和已添加的各个输入是否带有可匹配的物品；缺少对应物品的条件会触发 IllegalArgumentException。'
const special = 'SpecialRecipeBuilder 把特殊配方工厂交给数据生成输出。输入判断和成品由游戏中的配方实现计算，生成时只需选择正确工厂。'
const constraints:Record<string,string> = {
 '4d_multiblock':'每次 next() 收起一份三维图样。结果为空、已收起的图样为空或最后一份图样为空都无法通过 validate。',
 anvil_collision:'anvil 与 hitBlock 都必须设置。缺任意一个，保存时会抛 IllegalArgumentException。',
 block_compress:'用两次 input 提供一对输入方块，并指定非空结果。多写或少写任意一个输入都会让 validate 抛 IllegalArgumentException。',
 block_crush:'input 与 result 必须各提供一个方块，否则保存时会抛 IllegalArgumentException。',
 block_processing:'输入方块列表至少要有一项，结果必须非空。两个约束分别在 validate 中检查。',
 block_smear:'输入列表不能为空，结果不能为 null。成品与输入谓词分别设置，避免把第二种输入误写成结果。',
 canning_food:special,celestial_anvil:special,pill_recipe:special,
 charger_charging:'必须设置原料与结果。power 为负数代表充电、为正数代表放电，零功率会抛异常；time 以 tick 计，必须大于零。',
 deformation:'至少提供两个参与变形的输入，并配置材料谓词。少于两个输入或材料为 null 时，保存会抛 IllegalArgumentException。',
 eight_to_one_smithing:smithing,four_to_one_smithing:smithing,two_to_one_smithing:smithing,
 energy_weapon_make:'材料数量必须在 1 至 6 项范围内，结果物品栈不能为空。构建器在 validate 中对两条规则分别报错。',
 fast_cooking:commonIngredient,item_compress:commonIngredient,item_crush:commonIngredient,mesh:commonIngredient,stamping:commonIngredient,unpack:commonIngredient,
 fluid_mixing:'物品和流体产物列表中不能出现空栈。启用 consumeMaximum 后只能生成流体，并且至少有一种流体结果。',
 item_inject:'需要至少一种物品原料。结果可以是方块，也可以是物品列表；两者同时缺失时保存失败。',
 jewel_crafting:'材料列表允许 1 至 256 项，不能用空物品栈作成品。空列表也会触发 IllegalArgumentException。',
 laser_hit:'构造器接收命中谓词、强度和持续时间。示例用 tier 同时索引 strengths 与 heated，调用者应保证两个集合都含有该位置，避免数组或列表越界。',
 mass_inject:'需要一个非空物品原料和正的质量值；mass 为 0 同样会被 validate 拒绝。',
 mineral_fountain_active:'toBlock 必填。构建时缺少它会抛 IllegalStateException，走 save 的前置 validate 则抛 IllegalArgumentException。周边方块数量通过 AroundRequirement 提供。',
 mineral_fountain_passive:'为兜底产出设置 toBlock。未设置就 build 会抛 IllegalStateException，save 的前置检查会抛 IllegalArgumentException。',
 mineral_fountain_replacement:'必须设置要替换的目标方块 toBlock。维度使用对应注册键的位置，概率参数来自上游 replacement 的调用者。',
 mob_transform:'from 与 to 分别接收原实体和目标实体的 EntityType。显式指定 ID，避免多条原实体相同的转化命中默认文件名。',
 mob_transform_with_item:'输入实体、目标实体和物品条件分别配置。按实体创建不同材料的变体时，为每条配方分配独立 ID。',
 multiblock:'至少给出一份有效图样并指定结果。结果为 null 或图样为空会在保存阶段抛 IllegalArgumentException。',
 multiblock_conversion:'保存时会比较输入和输出结构序列化后的 grid.length。长度不同会在 validate 中抛 IllegalArgumentException。',
 neutron_irradiation:'当前 Builder 的 validate 方法体为空。是否能在世界中触发还取决于实际原料、产物和设备条件。',
 neutronium_charging:'本例接收已生成的有序合成，调用者应传入 ShapedRecipe 实例。传入其他 Recipe 实现会在强制转型处抛 ClassCastException。',
 permutation:'基础输入必须含有物品，再用 options 添加至少一个材料与结果组合。缺失输入或组合为空都会被 validate 拒绝。',
 planet_resource:'先选择 Category，随后设置该类别的数据对象。示例选择 FLUID，为目标天体的地表类型、温度条件和流体 ID 提供值。',
 portal_conversion:'需要可识别的门类型 ID 和非空结果；遗漏任一项都会触发 IllegalArgumentException。',
 procedural_process:'至少有一个步骤，loop 至少为 1。构建器还检查步骤是否属于铁砧加工配方，以及展示模型数量是否超过该步骤序列的上限。',
 solid_liquid:'需要有效的大锅流体条件，还必须提供物品产物或流体变换。缺失时 save 的 validate 会抛 IllegalArgumentException。',
 special_celestial_body:'直接构造天体定义并交给 RecipeOutput。属性、资源、需求的集合按构造器参数顺序传入；空集合保留该类别为空的含义。',
 stamping_diff:'原料条目数必须在 1 至 9 之间，结果列表不能为空。使用区分不同物品的冲压构建器，避免将配方交给普通冲压序列化器。',
 terminal_upgrade:'使用有序合成构建器，保存时把输出包在 TerminalUpgradeRecipe.output 中。服务端合成取第一个终端输入，将其工作台内容、均衡模式和自定义名称复制到成品。',
 terminal_unbind:'使用无序合成构建器并调用 TerminalUpgradeRecipe.output。包装器会根据传入的 ShapelessRecipe 生成 TerminalUnbindRecipe，同样保留终端内的工作台内容、均衡模式和自定义名称。',
 squeezing:'当前 Builder 的 validate 方法体为空。为配方配置能匹配的原料和输出，并通过字段页核对流体和大锅条件。',
 stamping_unique_items:'需要 1 至 9 项互异物品加工所用的原料条目，还需要非空产物列表。条目数越界或产物为空都会被拒绝。',
 super_heating:'至少配置一项物品原料。若列表为空，validate 抛 IllegalArgumentException。',
 temple_demand:'构造时指定需求类别并传入需求条目列表，每个条目给出物品标识和数量。不同类别使用不同文件名可保留各自的兜底需求。',
 time_warp:'原料列表和大锅流体条件至少设置一种。两者均缺时会抛 IllegalArgumentException。'
}
if (branch==='26.1') Object.assign(constraints,{
 stamping_diff:commonIngredient+'匹配时使用差异原料；冲压平台设置了 DEFER_TO_PLATFORM_BEHAVIOR 时会跳过这条配方。',
 jewel_crafting:'材料总数必须为 1 至 256 项，合并相同材料后最多四组。超出任一限制时构造器抛 IllegalArgumentException；没有设置结果时 getResult 抛 IllegalStateException。',
 fluid_mixing:'输入必须为 2 至 4 项。物品和流体各最多三种，产物总数为 1 至 6 项。空气、非正数量的物品和空流体都无法通过校验。启用 consumeMaximum 后只允许流体产物。',
 portal_conversion:'必须设置门类型 ID，并添加至少一个结果。只设置门类型、未添加结果时 validate 会抛 IllegalArgumentException。',
 energy_weapon_make:'材料数量必须为 1 至 6 项，并且必须设置结果模板。材料数越界或结果为 null 时 validate 会抛 IllegalArgumentException。'
})
function candidate(call:Call,names:string[]) {
    const ids=new Set(call.ids.split('\n'))
    if (call.receiver.includes('PermutationRecipeLoader.count(')) {
        const sourceText=read(join(source,call.file))
        if (!sourceText.includes('return ItemIngredientPredicate.of(item).withCount(count).build();')) return
        const expanded=call.receiver.replace(/PermutationRecipeLoader\.count\(([^(),]+),\s*(\d+)\)/g,'ItemIngredientPredicate.of($1).withCount($2).build()')
        if (expanded.includes('PermutationRecipeLoader.count(')) return
        call={...call,receiver:expanded}
        ids.delete('PermutationRecipeLoader')
        ids.add('ItemIngredientPredicate')
    }
    const subject=call.receiver.trim().match(/^(?:new\s+)?(\w+)/)?.[1]
    const special=subject==='SpecialRecipeBuilder' && names.some(name=>call.receiver.includes(name+'::new'))
    if(!(subject && names.includes(subject) || special) || ids.has('this') || ids.has('super')) return
    const params=(call.params||'').split('\n').filter(Boolean).map(line=>line.split('\t'))
    if(params.some(([type])=>type==='var')) return
    const known=new Set(params.map(([,name])=>name)), helpers:string[]=[]
    if(call.receiver.includes('MultiBlockConversionRecipeLoader.largeCauldronPart(')) {
        const match=read(join(source,call.file)).match(/    private static BlockPredicateWithState largeCauldronPart\([^)]*\) \{\s*return [^;{}]*;\s*\}/)
        if(!match) return
        helpers.push(match[0])
        call={...call,receiver:call.receiver.replaceAll('MultiBlockConversionRecipeLoader.largeCauldronPart(', 'largeCauldronPart(')}
        ids.delete('MultiBlockConversionRecipeLoader')
    }
    if(call.unqualified) {
        const ownerSource=read(join(source,call.file))
        for(const name of call.unqualified.split('\n')) {
            const match=ownerSource.match(new RegExp('    private static [\\w.<>?]+ '+name+'\\([^)]*\\) \\{\\s*return [^;{}]*;\\s*\\}'))
            if(match && match[0].length<450) {helpers.push(match[0]);known.add(name)}
        }
    }
    const imports=call.imports.split('\n').map(s=>s.trim()).filter(s=>s.startsWith('import '))
    const named=new Set(imports.map(s=>s.match(/\.([\w$]+);/)?.[1]))
    for(const id of ids) if(/^[a-z_]/.test(id)&&!known.has(id)&&!named.has(id)&&!['net','dev','java','com','org'].includes(id)) return
    for(const id of ids) if(/^[A-Z_]+$/.test(id)&&!known.has(id)&&!named.has(id))return
    const used=new Set([...ids,...params.flatMap(([type])=>words(type)),...helpers.flatMap(words)])
    const needed=imports.filter(i=>i.includes('.*;') || used.has(i.match(/\.([\w$]+);/)?.[1]??''))
    for(const id of used) { const q=typeNames.get(id); if(q && q.slice(0,q.lastIndexOf('.'))===call.pkg && !named.has(id))needed.push('import '+q+';') }
    return {call,params,imports:needed,helpers}
}
for(const file of pages(join(handbook,'packs'))){
    const md=read(file), type=md.match(/根对象的.*?`anvilcraft:([\w-]+)`/)?.[1]
    const cls=md.match(/\[配方实现与匹配规则\]\([^)]*\/(\w+)\.java\)/)?.[1]
    if(!type||!cls)continue
    const targets=[cls,...(aliases[type]??[])]
    const wrapped=branch==='26.1' && ['neutronium_charging','terminal_unbind','terminal_upgrade'].includes(type)
    const wrapper=type==='neutronium_charging'?'NeutroniumChargingRecipe':'TerminalUpgradeRecipe'
    const wrapMethod=({neutronium_charging:'chargedNeutroniumIngot',terminal_unbind:'hyperdimensionTerminalUnbind',terminal_upgrade:'hyperdimensionTerminal'} as Record<string,string>)[type]
    const builder=type==='terminal_unbind'?'ShapelessRecipeBuilder':'ShapedRecipeBuilder'
    const pool=wrapped?calls.filter(c=>c.method===wrapMethod && c.operation==='save' && c.args.includes(wrapper+'.output(')).map(c=>{
        const result=type==='neutronium_charging'?'CHARGED_NEUTRONIUM_INGOT':'HYPERDIMENSION_TERMINAL'
        const receiver=c.receiver.replaceAll('ctx.getId().toString()', '"example:'+type+'"')
            .replaceAll('ctx.get()', 'ModItems.'+result).replaceAll('provider.getItems()','lookup')
        const ids=c.ids.split('\n').filter(id=>id!=='ctx' && id!=='provider')
        const imports=c.imports+'\nimport net.minecraft.core.HolderGetter;\nimport net.minecraft.world.item.Item;\n'
        return {...c,receiver,ids:[...ids,'lookup','ModItems','HolderGetter','Item',wrapper].join('\n'),params:'HolderGetter<Item>\tlookup',imports}
    }):calls
    const options=pool.map(call=>candidate(call,wrapped?[builder]:targets)).filter(x=>x!==undefined)
       .sort((a,b)=>Number(a.call.operation==='new')-Number(b.call.operation==='new') || a.params.length-b.params.length || a.call.receiver.length-b.call.receiver.length)
    const sample=options[0]
    if(!sample) {missing.push(type+' '+cls);continue}
    const {call,params,imports,helpers}=sample
    const symbol=branch==='21.1'?'ResourceLocation':'Identifier'
    const idValue=symbol+'.fromNamespaceAndPath("example", "'+type+'/guide")'
    const keyed=branch!=='21.1' && !['mob_transform','mob_transform_with_item'].includes(type)
    const idExpr=keyed?'ResourceKey.create(Registries.RECIPE, '+idValue+')':idValue
    const needed=new Set([...imports,'import net.minecraft.data.recipes.RecipeOutput;','import net.minecraft.resources.'+symbol+';'])
    if(keyed){needed.add('import net.minecraft.resources.ResourceKey;');needed.add('import net.minecraft.core.registries.Registries;')}
    const className=type.split('_').map(w=>w[0].toUpperCase()+w.slice(1)).join('')+'Recipes'
    const javaName=/^\d/.test(className)?'Example'+className:className
    const args=['RecipeOutput destination',...params.map(([t,n])=>t+' '+n)].join(', ')
    const rows=call.receiver.replace(/\r/g,'').split('\n')
    const indent=Math.min(...rows.slice(1).filter(s=>s.trim()).map(s=>s.length-s.trimStart().length),12)
    const chain=rows.map((line,i)=>i===0?'        '+line.trim():'            '+line.slice(indent)).join('\n')
    const direct=call.operation==='new' || call.operation==='build'
    const sink=wrapped?wrapper+'.output(destination)':'destination'
    const emit=direct?['        var generatedRecipe = '+chain.trimStart()+(call.operation==='build'?'.build();':';'),'        destination.accept('+idExpr+', generatedRecipe, null);']:[chain,'            .save('+sink+', '+idExpr+');']
    const title=md.match(/^# (.+)$/m)![1], summary=md.split('\n\n')[1]
    const src='https://github.com/Anvil-Dev/AnvilCraft/blob/'+sha+'/'+call.file+'#L'+call.line
    const link='../'+relative(handbook,file).replaceAll('\\','/').replace(/\.md$/,'')
    const names=targets.flatMap(t=>[t+'.Builder',t])
    let memberLink=''
    for(const n of names){const ref=references.find(p=>p.md.split('\n').includes('## '+n));if(ref){memberLink='../api/'+basename(ref.path,'.md')+'#'+n.toLowerCase().replaceAll('.','-');break}}
    const fields=md.split('\n').filter(row=>row.startsWith('| `')).map(row=>row.replace(/ \[声明\]\([^)]*\)/g,''))
    let validator=cls
    if(constraints[type]===commonIngredient || type==='stamping_diff')validator='AbstractProcessRecipe'
    else if(constraints[type]===smithing)validator='BaseMultipleToOneSmithingRecipe'
    else if(aliases[type])validator=aliases[type][0]
    const validationFile=files.find(p=>p.endsWith('/'+validator+'.java'))
    const validationSource=validationFile?read(join(source,validationFile)):''
    const validationStart=validationSource.search(/public void validate\(/)
    const validationUrl=validationFile && validationStart>=0?' [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/'+sha+'/'+validationFile+'#L'+validationSource.slice(0,validationStart).split('\n').length+')':''
    const heading=title+(call.operation==='new'?'的配方输出':'的配方构建器')
    const rule=wrapped&&type==='neutronium_charging'?'有序合成必须配合 NeutroniumChargingRecipe.output 保存。组装成品时从首个符合未充能中子锭标签的输入读取附魔，并仅将其复制到指定的充能中子锭结果。':constraints[type]
    if(!rule)throw Error('缺少本类型的参数核对：'+type)
    const lines=['# '+heading,'',summary,'',rule+validationUrl,'','在附属模组的数据生成提供器中调用 `generate`，传入当前 '+ '`RecipeOutput`'+ '。运行数据生成后，配方 ID 为 `example:'+type+'/guide`，文件位于 `data/example/recipe/'+type+'/guide.json`。','',
      '```java','package dev.example.recipebuild;','',...[...needed].sort(),'','public final class '+javaName+' {','    public static void generate('+args+') {',...emit,'    }',...helpers.map(h=>'\n'+h),'}','```','',
      '实现采用上游 `'+basename(call.file,'.java')+'.'+call.method+'` 中的一条实际配方链。'+(params.length?'其中 '+params.map(([t,n])=>'`'+t+' '+n+'`').join('、')+' 由调用者按生成环境传入。':'' )+' [原始配方调用]('+src+')','',
      '| 入口 | 调用约定 |','| --- | --- |','| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |',
      '| '+(direct?'`RecipeOutput.accept`':'`save`')+' | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |','',
      ...(fields.length?['## 生成文件的字段约定','','| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |','| --- | --- | --- | --- |',...fields,'']:[]),
      '[查看 '+title+'字段、默认值与配方示例]('+link+')'+(memberLink?' · [查看 Java 成员签名]('+memberLink+')':''),'']
    writeFileSync(join(folder,type+'.md'),lines.join('\n'));available.add(type)
}
writeFileSync(join(folder,'index.md'),['# 配方构建器','',...[...available].sort().map(t=>'- ['+read(join(folder,t+'.md')).match(/^# (.+)/)![1]+'](./'+t+')'),''].join('\n'))
console.log('Generated:',available.size,'Other serializers:',missing.join(', '))
