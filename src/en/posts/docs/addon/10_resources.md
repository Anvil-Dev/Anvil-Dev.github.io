---
prev:
   text: Event System
   link: /en/posts/docs/addon/09_event_system
next:
   text: Networking
   link: /en/posts/docs/addon/11_networking
---

# Resources and Localization

This chapter introduces how to manage resource files in your Addon, including textures, models, sounds, and language
localization.

## Resource Directory Structure

Mod resource files are stored in the `src/main/resources` directory:

```
src/main/resources/
├── META-INF/
│   └── neoforge.mods.toml          # Mod metadata
├── assets/
│   └── myaddon/                    # Client resources
│       ├── blockstates/            # Block state definitions
│       ├── models/                 # Model files
│       │   ├── block/              # Block models
│       │   └── item/               # Item models
│       ├── textures/               # Texture files
│       │   ├── block/              # Block textures
│       │   ├── item/               # Item textures
│       │   ├── entity/             # Entity textures
│       │   └── gui/                # GUI textures
│       ├── sounds/                 # Sound files
│       ├── lang/                   # Language files
│       └── sounds.json             # Sound registration
└── data/
    └── myaddon/                    # Server data
        ├── recipe/                 # Recipes
        ├── loot_table/             # Loot tables
        ├── tags/                   # Tags
        └── advancement/            # Advancements
```

## Texture Resources

### Item Textures

Item texture files are located in `assets/<modid>/textures/item/`:

```
assets/myaddon/textures/item/
├── custom_item.png
├── custom_tool.png
└── custom_gem.png
```

Texture dimensions are typically 16x16 pixels.

### Block Textures

Block texture files are located in `assets/<modid>/textures/block/`:

```
assets/myaddon/textures/block/
├── custom_block.png
├── custom_block_top.png
├── custom_block_side.png
└── custom_block_bottom.png
```

### Entity Textures

Entity texture files are located in `assets/<modid>/textures/entity/`:

```
assets/myaddon/textures/entity/
├── custom_entity.png
└── custom_entity_overlay.png
```

## Model Files

### Item Models

Item model files are located in `assets/<modid>/models/item/`:

```json
// assets/myaddon/models/item/custom_item.json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "myaddon:item/custom_item"
  }
}
```

For tool-type items:

```json
// assets/myaddon/models/item/custom_tool.json
{
  "parent": "minecraft:item/handheld",
  "textures": {
    "layer0": "myaddon:item/custom_tool"
  }
}
```

### Block Models

Block model files are located in `assets/<modid>/models/block/`:

```json
// assets/myaddon/models/block/custom_block.json
{
  "parent": "minecraft:block/cube_all",
  "textures": {
    "all": "myaddon:block/custom_block"
  }
}
```

Multi-face texture blocks:

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

### Block States

Block state files are located in `assets/<modid>/blockstates/`:

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

Blocks with states:

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

## Using Data Generators

It's recommended to use data generators to automatically generate resource files.

### Model Generator

```java
public class ModModelProvider extends BlockStateProvider {
    
    public ModModelProvider(PackOutput output, ExistingFileHelper helper) {
        super(output, MyAddon.MOD_ID, helper);
    }
    
    @Override
    protected void registerStatesAndModels() {
        // Simple block
        simpleBlockWithItem(ModBlocks.CUSTOM_BLOCK.get(), cubeAll(ModBlocks.CUSTOM_BLOCK.get()));
        
        // Block with facing
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

### Item Model Generator

```java
public class ModItemModelProvider extends ItemModelProvider {
    
    public ModItemModelProvider(PackOutput output, ExistingFileHelper helper) {
        super(output, MyAddon.MOD_ID, helper);
    }
    
    @Override
    protected void registerModels() {
        // Simple item
        basicItem(ModItems.CUSTOM_ITEM.get());
        
        // Handheld tool
        handheldItem(ModItems.CUSTOM_TOOL.get());
        
        // Custom model
        getBuilder(ModItems.SPECIAL_ITEM.get().toString())
            .parent(new ModelFile.UncheckedModelFile("item/generated"))
            .texture("layer0", modLoc("item/special_item"));
    }
}
```

## Language Localization

### Language File Location

Language files are located in `assets/<modid>/lang/`:

```
assets/myaddon/lang/
├── en_us.json      # English (US)
├── zh_cn.json      # Simplified Chinese
├── zh_tw.json      # Traditional Chinese
└── ja_jp.json      # Japanese
```

### Language File Format

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

### Translation Key Conventions

| Type        | Format                         | Example                                |
|-------------|--------------------------------|----------------------------------------|
| Item        | `item.<modid>.<name>`          | `item.myaddon.custom_item`             |
| Block       | `block.<modid>.<name>`         | `block.myaddon.custom_block`           |
| Item Group  | `itemGroup.<modid>`            | `itemGroup.myaddon`                    |
| Entity      | `entity.<modid>.<name>`        | `entity.myaddon.custom_entity`         |
| Effect      | `effect.<modid>.<name>`        | `effect.myaddon.custom_effect`         |
| Enchantment | `enchantment.<modid>.<name>`   | `enchantment.myaddon.custom_enchant`   |
| Tooltip     | `tooltip.<modid>.<name>`       | `tooltip.myaddon.info`                 |
| GUI         | `gui.<modid>.<name>`           | `gui.myaddon.title`                    |
| Message     | `message.<modid>.<name>`       | `message.myaddon.hello`                |
| Config      | `<modid>.configuration.<name>` | `myaddon.configuration.enable_feature` |

### Using Data Generators for Language Files

```java
public class ModLanguageProvider extends LanguageProvider {
    
    public ModLanguageProvider(PackOutput output, String locale) {
        super(output, MyAddon.MOD_ID, locale);
    }
    
    @Override
    protected void addTranslations() {
        // Items
        add(ModItems.CUSTOM_ITEM.get(), "Custom Item");
        add(ModItems.CUSTOM_TOOL.get(), "Custom Tool");
        
        // Blocks
        add(ModBlocks.CUSTOM_BLOCK.get(), "Custom Block");
        add(ModBlocks.CUSTOM_MACHINE.get(), "Custom Machine");
        
        // Item group
        add("itemGroup.myaddon", "My Addon");
        
        // Custom translations
        add("tooltip.myaddon.custom_item", "A custom item from My Addon");
        add("message.myaddon.success", "Operation successful!");
    }
}
```

### Using Translations in Code

```java
// Use Component to create translatable text
Component message = Component.translatable("message.myaddon.success");
player.displayClientMessage(message, true);

// Translation with parameters
Component formatted = Component.translatable("message.myaddon.welcome", player.getName());

// Item names automatically use translation keys
// item.myaddon.custom_item is automatically applied
```

## Sound Resources

### Adding Sound Files

Sound files are located in `assets/<modid>/sounds/`:

```
assets/myaddon/sounds/
├── custom_sound.ogg
├── machine_start.ogg
└── machine_stop.ogg
```

Sound files must be in `.ogg` format.

### Registering Sounds

Create `assets/<modid>/sounds.json`:

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

### Registering Sound Events in Code

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

### Playing Sounds

```java
// Play on server side
level.playSound(null, pos, ModSounds.CUSTOM_SOUND.get(), SoundSource.BLOCKS, 1.0f, 1.0f);

// Play on client side
level.playLocalSound(pos, ModSounds.CUSTOM_SOUND.get(), SoundSource.BLOCKS, 1.0f, 1.0f, false);

// Play for player
player.playSound(ModSounds.CUSTOM_SOUND.get(), 1.0f, 1.0f);
```

## GUI Textures

### Container GUI Textures

```
assets/myaddon/textures/gui/
├── container/
│   ├── custom_machine.png    # Container background
│   └── slots.png             # Slot textures
└── widgets/
    └── buttons.png           # Button textures
```

### Using GUI Textures in Code

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

## Resource Pack Overrides

Players can override mod textures and language files through resource packs. Simply use the same path in the resource
pack:

```
resourcepack/
└── assets/
    └── myaddon/
        └── textures/
            └── item/
                └── custom_item.png  # Overrides original texture
```

## Best Practices

1. **Texture Naming**
    - Use lowercase letters and underscores
    - Names should be descriptive
    - Keep consistent with registry names

2. **Texture Dimensions**
    - Item/block textures: 16x16 pixels
    - Can use higher resolutions (32x32, 64x64, etc.), but keep powers of 2

3. **Translation Completeness**
    - Ensure all visible text has translation keys
    - Provide at least English translations as fallback

4. **Use Data Generators**
    - Automatic generation reduces errors
    - Facilitates batch modifications

5. **Resource Compression**
    - Optimize PNG file sizes
    - Use appropriate audio bitrates

6. **Test Resources**
    - Test in different language environments
    - Check that textures display correctly
