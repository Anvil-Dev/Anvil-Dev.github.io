---
prev:
   text: 事件系统
   link: /posts/docs/addon/09_event_system
next:
   text: 网络通信
   link: /posts/docs/addon/11_networking
---

# 资源和本地化

本章介绍如何在 Addon 中管理资源文件，包括材质、模型、音效和语言本地化。

## 资源目录结构

Mod 资源文件存放在 `src/main/resources` 目录下：

```
src/main/resources/
├── META-INF/
│   └── neoforge.mods.toml          # Mod 元数据
├── assets/
│   └── myaddon/                    # 客户端资源
│       ├── blockstates/            # 方块状态定义
│       ├── models/                 # 模型文件
│       │   ├── block/              # 方块模型
│       │   └── item/               # 物品模型
│       ├── textures/               # 材质文件
│       │   ├── block/              # 方块材质
│       │   ├── item/               # 物品材质
│       │   ├── entity/             # 实体材质
│       │   └── gui/                # GUI 材质
│       ├── sounds/                 # 音效文件
│       ├── lang/                   # 语言文件
│       └── sounds.json             # 音效注册
└── data/
    └── myaddon/                    # 服务端数据
        ├── recipe/                 # 配方
        ├── loot_table/             # 战利品表
        ├── tags/                   # 标签
        └── advancement/            # 进度
```

## 材质资源

### 物品材质

物品材质文件位于 `assets/<modid>/textures/item/`：

```
assets/myaddon/textures/item/
├── custom_item.png
├── custom_tool.png
└── custom_gem.png
```

材质尺寸通常为 16x16 像素。

### 方块材质

方块材质文件位于 `assets/<modid>/textures/block/`：

```
assets/myaddon/textures/block/
├── custom_block.png
├── custom_block_top.png
├── custom_block_side.png
└── custom_block_bottom.png
```

### 实体材质

实体材质文件位于 `assets/<modid>/textures/entity/`：

```
assets/myaddon/textures/entity/
├── custom_entity.png
└── custom_entity_overlay.png
```

## 模型文件

### 物品模型

物品模型文件位于 `assets/<modid>/models/item/`：

```json
// assets/myaddon/models/item/custom_item.json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "myaddon:item/custom_item"
  }
}
```

对于工具类物品：

```json
// assets/myaddon/models/item/custom_tool.json
{
  "parent": "minecraft:item/handheld",
  "textures": {
    "layer0": "myaddon:item/custom_tool"
  }
}
```

### 方块模型

方块模型文件位于 `assets/<modid>/models/block/`：

```json
// assets/myaddon/models/block/custom_block.json
{
  "parent": "minecraft:block/cube_all",
  "textures": {
    "all": "myaddon:block/custom_block"
  }
}
```

多面材质方块：

```json
// assets/myaddon/models/block/custom_machine.json
{
  "parent": "minecraft:block/cube",
  "textures": {
    "up": "myaddon:block/custom_machine_top",
    "down": "myaddon:block/custom_machine_bottom",
    "north": "myaddon:block/custom_machine_front",
    "south": "myaddon:block/custom_machine_back",
    "east": "myaddon:block/custom_machine_side",
    "west": "myaddon:block/custom_machine_side"
  }
}
```

### 方块状态

方块状态文件位于 `assets/<modid>/blockstates/`：

```json
// assets/myaddon/blockstates/custom_block.json
{
  "variants": {
    "": {
      "model": "myaddon:block/custom_block"
    }
  }
}
```

带有状态的方块：

```json
// assets/myaddon/blockstates/custom_machine.json
{
  "variants": {
    "facing=north": { "model": "myaddon:block/custom_machine" },
    "facing=south": { "model": "myaddon:block/custom_machine", "y": 180 },
    "facing=east": { "model": "myaddon:block/custom_machine", "y": 90 },
    "facing=west": { "model": "myaddon:block/custom_machine", "y": 270 }
  }
}
```

## 使用数据生成器

推荐使用数据生成器自动生成资源文件。

### 模型生成器

```java
public class ModModelProvider extends BlockStateProvider {
    
    public ModModelProvider(PackOutput output, ExistingFileHelper helper) {
        super(output, MyAddon.MOD_ID, helper);
    }
    
    @Override
    protected void registerStatesAndModels() {
        // 简单方块
        simpleBlockWithItem(ModBlocks.CUSTOM_BLOCK.get(), cubeAll(ModBlocks.CUSTOM_BLOCK.get()));
        
        // 带朝向的方块
        horizontalBlock(ModBlocks.CUSTOM_MACHINE.get(), 
            models().orientable(
                "custom_machine",
                modLoc("block/custom_machine_side"),
                modLoc("block/custom_machine_front"),
                modLoc("block/custom_machine_top")
            )
        );
    }
}
```

### 物品模型生成器

```java
public class ModItemModelProvider extends ItemModelProvider {
    
    public ModItemModelProvider(PackOutput output, ExistingFileHelper helper) {
        super(output, MyAddon.MOD_ID, helper);
    }
    
    @Override
    protected void registerModels() {
        // 简单物品
        basicItem(ModItems.CUSTOM_ITEM.get());
        
        // 手持工具
        handheldItem(ModItems.CUSTOM_TOOL.get());
        
        // 自定义模型
        getBuilder(ModItems.SPECIAL_ITEM.get().toString())
            .parent(new ModelFile.UncheckedModelFile("item/generated"))
            .texture("layer0", modLoc("item/special_item"));
    }
}
```

## 语言本地化

### 语言文件位置

语言文件位于 `assets/<modid>/lang/`：

```
assets/myaddon/lang/
├── en_us.json      # 英文（美国）
├── zh_cn.json      # 简体中文
├── zh_tw.json      # 繁体中文
└── ja_jp.json      # 日文
```

### 语言文件格式

```json
// assets/myaddon/lang/en_us.json
{
  "item.myaddon.custom_item": "Custom Item",
  "item.myaddon.custom_tool": "Custom Tool",
  "block.myaddon.custom_block": "Custom Block",
  "block.myaddon.custom_machine": "Custom Machine",
  "itemGroup.myaddon": "My Addon",
  "tooltip.myaddon.custom_item": "A custom item from My Addon",
  "message.myaddon.success": "Operation successful!",
  "gui.myaddon.machine_title": "Machine"
}
```

```json
// assets/myaddon/lang/zh_cn.json
{
  "item.myaddon.custom_item": "自定义物品",
  "item.myaddon.custom_tool": "自定义工具",
  "block.myaddon.custom_block": "自定义方块",
  "block.myaddon.custom_machine": "自定义机器",
  "itemGroup.myaddon": "我的附属",
  "tooltip.myaddon.custom_item": "来自我的附属的自定义物品",
  "message.myaddon.success": "操作成功！",
  "gui.myaddon.machine_title": "机器"
}
```

### 翻译键约定

| 类型  | 格式                             | 示例                                     |
|-----|--------------------------------|----------------------------------------|
| 物品  | `item.<modid>.<name>`          | `item.myaddon.custom_item`             |
| 方块  | `block.<modid>.<name>`         | `block.myaddon.custom_block`           |
| 物品组 | `itemGroup.<modid>`            | `itemGroup.myaddon`                    |
| 实体  | `entity.<modid>.<name>`        | `entity.myaddon.custom_entity`         |
| 效果  | `effect.<modid>.<name>`        | `effect.myaddon.custom_effect`         |
| 附魔  | `enchantment.<modid>.<name>`   | `enchantment.myaddon.custom_enchant`   |
| 提示  | `tooltip.<modid>.<name>`       | `tooltip.myaddon.info`                 |
| GUI | `gui.<modid>.<name>`           | `gui.myaddon.title`                    |
| 消息  | `message.<modid>.<name>`       | `message.myaddon.hello`                |
| 配置  | `<modid>.configuration.<name>` | `myaddon.configuration.enable_feature` |

### 使用数据生成器生成语言文件

```java
public class ModLanguageProvider extends LanguageProvider {
    
    public ModLanguageProvider(PackOutput output, String locale) {
        super(output, MyAddon.MOD_ID, locale);
    }
    
    @Override
    protected void addTranslations() {
        // 物品
        add(ModItems.CUSTOM_ITEM.get(), "Custom Item");
        add(ModItems.CUSTOM_TOOL.get(), "Custom Tool");
        
        // 方块
        add(ModBlocks.CUSTOM_BLOCK.get(), "Custom Block");
        add(ModBlocks.CUSTOM_MACHINE.get(), "Custom Machine");
        
        // 物品组
        add("itemGroup.myaddon", "My Addon");
        
        // 自定义翻译
        add("tooltip.myaddon.custom_item", "A custom item from My Addon");
        add("message.myaddon.success", "Operation successful!");
    }
}
```

### 在代码中使用翻译

```java
// 使用 Component 创建可翻译文本
Component message = Component.translatable("message.myaddon.success");
player.displayClientMessage(message, true);

// 带参数的翻译
Component formatted = Component.translatable("message.myaddon.welcome", player.getName());

// 物品名称自动使用翻译键
// item.myaddon.custom_item 会被自动应用
```

## 音效资源

### 添加音效文件

音效文件位于 `assets/<modid>/sounds/`：

```
assets/myaddon/sounds/
├── custom_sound.ogg
├── machine_start.ogg
└── machine_stop.ogg
```

音效文件必须是 `.ogg` 格式。

### 注册音效

创建 `assets/<modid>/sounds.json`：

```json
{
  "custom_sound": {
    "sounds": ["myaddon:custom_sound"]
  },
  "machine": {
    "sounds": [
      {
        "name": "myaddon:machine_start",
        "stream": false
      }
    ]
  },
  "ambient": {
    "sounds": [
      {
        "name": "myaddon:ambient_1",
        "volume": 0.5
      },
      {
        "name": "myaddon:ambient_2",
        "volume": 0.5
      }
    ]
  }
}
```

### 在代码中注册音效事件

```java
public class ModSounds {
    public static final DeferredRegister<SoundEvent> SOUNDS = 
        DeferredRegister.create(Registries.SOUND_EVENT, MyAddon.MOD_ID);
    
    public static final Supplier<SoundEvent> CUSTOM_SOUND = SOUNDS.register(
        "custom_sound",
        () -> SoundEvent.createVariableRangeEvent(MyAddon.of("custom_sound"))
    );
    
    public static final Supplier<SoundEvent> MACHINE_START = SOUNDS.register(
        "machine",
        () -> SoundEvent.createVariableRangeEvent(MyAddon.of("machine"))
    );
    
    public static void register(IEventBus bus) {
        SOUNDS.register(bus);
    }
}
```

### 播放音效

```java
// 在服务端播放
level.playSound(null, pos, ModSounds.CUSTOM_SOUND.get(), SoundSource.BLOCKS, 1.0f, 1.0f);

// 在客户端播放
level.playLocalSound(pos, ModSounds.CUSTOM_SOUND.get(), SoundSource.BLOCKS, 1.0f, 1.0f, false);

// 对玩家播放
player.playSound(ModSounds.CUSTOM_SOUND.get(), 1.0f, 1.0f);
```

## GUI 材质

### 容器 GUI 材质

```
assets/myaddon/textures/gui/
├── container/
│   ├── custom_machine.png    # 容器背景
│   └── slots.png             # 槽位材质
└── widgets/
    └── buttons.png           # 按钮材质
```

### 在代码中使用 GUI 材质

```java
public class CustomMachineScreen extends AbstractContainerScreen<CustomMachineMenu> {
    private static final ResourceLocation TEXTURE = 
        MyAddon.of("textures/gui/container/custom_machine.png");
    
    @Override
    protected void renderBg(GuiGraphics graphics, float partialTick, int mouseX, int mouseY) {
        graphics.blit(TEXTURE, leftPos, topPos, 0, 0, imageWidth, imageHeight);
    }
}
```

## 资源包覆盖

玩家可以通过资源包覆盖 mod 的材质和语言文件。只需在资源包中使用相同的路径：

```
resourcepack/
└── assets/
    └── myaddon/
        └── textures/
            └── item/
                └── custom_item.png  # 覆盖原始材质
```

## 最佳实践

1. **材质命名**
    - 使用小写字母和下划线
    - 名称应具有描述性
    - 与注册名保持一致

2. **材质尺寸**
    - 物品/方块材质：16x16 像素
    - 可以使用更高分辨率（32x32, 64x64等），但要保持 2 的幂次

3. **翻译完整性**
    - 确保所有可见文本都有翻译键
    - 至少提供英文翻译作为后备

4. **使用数据生成器**
    - 自动生成减少错误
    - 方便批量修改

5. **资源压缩**
    - 优化 PNG 文件大小
    - 使用适当的音频比特率

6. **测试资源**
    - 在不同语言环境下测试
    - 检查材质是否正确显示
