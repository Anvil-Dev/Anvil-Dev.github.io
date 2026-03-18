---
prev:
   text: 配方系统集成
   link: /posts/docs/addon/08_recipe_integration
next:
   text: 资源和本地化
   link: /posts/docs/addon/10_resources
---

# 事件系统

本章介绍如何在 Addon 中使用 NeoForge 事件系统以及 AnvilCraft 提供的自定义事件。

## 概述

NeoForge 提供了强大的事件系统，允许 mod 在游戏的各个阶段进行交互。AnvilCraft 也定义了一些自定义事件，用于扩展铁砧相关的功能。

## 事件总线

NeoForge 有两种事件总线：

| 事件总线      | 用途         | 常用事件           |
|-----------|------------|----------------|
| MOD 事件总线  | mod 加载阶段事件 | 注册、数据生成、配置加载   |
| GAME 事件总线 | 游戏运行时事件    | 玩家交互、方块事件、实体事件 |

## 使用 @EventBusSubscriber

最简单的事件监听方式是使用 `@EventBusSubscriber` 注解：

### 监听游戏事件

```java
package com.example.myaddon.event;

import com.example.myaddon.MyAddon;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.entity.player.PlayerInteractEvent;

// 默认使用 GAME 事件总线
@EventBusSubscriber(modid = MyAddon.MOD_ID)
public class PlayerEventHandler {
    
    @SubscribeEvent
    public static void onPlayerRightClickBlock(PlayerInteractEvent.RightClickBlock event) {
        // 处理玩家右键方块事件
        var player = event.getEntity();
        var level = event.getLevel();
        var pos = event.getPos();
        
        // 你的逻辑代码
    }
    
    @SubscribeEvent
    public static void onPlayerLeftClickBlock(PlayerInteractEvent.LeftClickBlock event) {
        // 处理玩家左键方块事件
    }
}
```

### 监听 MOD 事件

```java
package com.example.myaddon.event;

import com.example.myaddon.MyAddon;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;

// 明确指定使用 MOD 事件总线
@EventBusSubscriber(modid = MyAddon.MOD_ID, bus = EventBusSubscriber.Bus.MOD)
public class ModSetupHandler {
    
    @SubscribeEvent
    public static void onCommonSetup(FMLCommonSetupEvent event) {
        // mod 通用初始化
        event.enqueueWork(() -> {
            // 在主线程执行的初始化代码
        });
    }
}
```

### 仅客户端事件

```java
package com.example.myaddon.event;

import com.example.myaddon.MyAddon;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.client.event.RenderLevelStageEvent;

// 仅在客户端加载
@EventBusSubscriber(modid = MyAddon.MOD_ID, value = Dist.CLIENT)
public class ClientRenderHandler {
    
    @SubscribeEvent
    public static void onRenderLevel(RenderLevelStageEvent event) {
        if (event.getStage() == RenderLevelStageEvent.Stage.AFTER_PARTICLES) {
            // 渲染自定义内容
        }
    }
}
```

## 手动注册事件监听器

也可以在代码中手动注册事件监听器：

```java
@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public static final String MOD_ID = "myaddon";
    
    public MyAddon(IEventBus modEventBus) {
        // 注册到 MOD 事件总线
        modEventBus.addListener(this::onCommonSetup);
        
        // 注册到 GAME 事件总线
        NeoForge.EVENT_BUS.addListener(this::onPlayerInteract);
    }
    
    private void onCommonSetup(FMLCommonSetupEvent event) {
        // 处理通用初始化
    }
    
    private void onPlayerInteract(PlayerInteractEvent event) {
        // 处理玩家交互
    }
}
```

## 事件优先级

可以通过 `priority` 参数控制事件处理顺序：

```java
@SubscribeEvent(priority = EventPriority.HIGH)
public static void onHighPriorityEvent(SomeEvent event) {
    // 高优先级，先执行
}

@SubscribeEvent(priority = EventPriority.LOW)
public static void onLowPriorityEvent(SomeEvent event) {
    // 低优先级，后执行
}
```

优先级从高到低：`HIGHEST` → `HIGH` → `NORMAL` → `LOW` → `LOWEST`

## 可取消事件

某些事件可以被取消，阻止默认行为：

```java
@SubscribeEvent
public static void onBlockBreak(BlockEvent.BreakEvent event) {
    if (shouldPreventBreak(event)) {
        event.setCanceled(true);  // 取消方块破坏
    }
}

@SubscribeEvent
public static void onRightClick(PlayerInteractEvent.RightClickBlock event) {
    if (shouldCustomHandle(event)) {
        event.setCanceled(true);
        event.setCancellationResult(InteractionResult.SUCCESS);
    }
}
```

## 常用 NeoForge 事件

### 玩家事件

```java
// 玩家登录
@SubscribeEvent
public static void onPlayerLogin(PlayerEvent.PlayerLoggedInEvent event) {
    Player player = event.getEntity();
}

// 玩家登出
@SubscribeEvent
public static void onPlayerLogout(PlayerEvent.PlayerLoggedOutEvent event) {
    Player player = event.getEntity();
}

// 玩家交互实体
@SubscribeEvent
public static void onEntityInteract(PlayerInteractEvent.EntityInteract event) {
    Player player = event.getEntity();
    Entity target = event.getTarget();
}

// 玩家使用物品
@SubscribeEvent
public static void onUseItem(PlayerInteractEvent.RightClickItem event) {
    ItemStack item = event.getItemStack();
}
```

### 方块事件

```java
// 方块破坏
@SubscribeEvent
public static void onBlockBreak(BlockEvent.BreakEvent event) {
    BlockPos pos = event.getPos();
    BlockState state = event.getState();
}

// 方块放置
@SubscribeEvent
public static void onBlockPlace(BlockEvent.EntityPlaceEvent event) {
    BlockPos pos = event.getPos();
    Entity entity = event.getEntity();
}

// 方块邻居更新
@SubscribeEvent
public static void onNeighborNotify(BlockEvent.NeighborNotifyEvent event) {
    BlockPos pos = event.getPos();
}
```

### 实体事件

```java
// 实体加入世界
@SubscribeEvent
public static void onEntityJoin(EntityJoinLevelEvent event) {
    Entity entity = event.getEntity();
    Level level = event.getLevel();
}

// 实体受伤
@SubscribeEvent
public static void onEntityHurt(LivingIncomingDamageEvent event) {
    LivingEntity entity = event.getEntity();
    float damage = event.getAmount();
}

// 实体死亡
@SubscribeEvent
public static void onEntityDeath(LivingDeathEvent event) {
    LivingEntity entity = event.getEntity();
    DamageSource source = event.getSource();
}
```

### 服务器事件

```java
// 服务器启动
@SubscribeEvent
public static void onServerStarting(ServerStartingEvent event) {
    MinecraftServer server = event.getServer();
}

// 服务器停止
@SubscribeEvent
public static void onServerStopping(ServerStoppingEvent event) {
    MinecraftServer server = event.getServer();
}

// 注册命令
@SubscribeEvent
public static void onRegisterCommands(RegisterCommandsEvent event) {
    CommandDispatcher<CommandSourceStack> dispatcher = event.getDispatcher();
    // 注册自定义命令
}

// 资源重载
@SubscribeEvent
public static void onReload(AddReloadListenerEvent event) {
    // 添加重载监听器
}
```

### 客户端事件

```java
// 注册按键绑定
@SubscribeEvent
public static void onRegisterKeyMappings(RegisterKeyMappingsEvent event) {
    event.register(MY_KEY_MAPPING);
}

// 渲染 HUD
@SubscribeEvent
public static void onRenderHud(RenderGuiLayerEvent.Post event) {
    // 渲染自定义 HUD
}

// 客户端 Tick
@SubscribeEvent
public static void onClientTick(ClientTickEvent.Post event) {
    // 每个客户端 tick 执行
}
```

## AnvilCraft 自定义事件

AnvilCraft 提供了多个自定义事件，用于扩展铁砧相关功能。

### AnvilEvent - 铁砧事件

```java
import dev.dubhe.anvilcraft.api.event.AnvilEvent;

@EventBusSubscriber(modid = MyAddon.MOD_ID)
public class AnvilEventHandler {
    
    // 铁砧落地事件
    @SubscribeEvent
    public static void onAnvilLand(AnvilEvent.OnLand event) {
        Level level = event.getLevel();
        BlockPos pos = event.getPos();
        float fallDistance = event.getFallDistance();
        FallingBlockEntity anvil = event.getEntity();
        
        // 自定义铁砧落地逻辑
        if (fallDistance > 10.0f) {
            // 高空落下的铁砧特殊处理
        }
    }
    
    // 铁砧碰撞方块事件
    @SubscribeEvent
    public static void onAnvilCollision(AnvilEvent.CollisionBlock event) {
        Level level = event.getLevel();
        BlockPos pos = event.getPos();
        double speed = event.getSpeed();
        
        // 可以取消碰撞事件
        if (shouldPreventCollision(level, pos)) {
            event.setCanceled(true);
        }
    }
    
    // 铁砧伤害实体事件
    @SubscribeEvent
    public static void onAnvilHurtEntity(AnvilEvent.HurtEntity event) {
        Entity hurtEntity = event.getHurtedEntity();
        float damage = event.getDamage();
        
        // 自定义伤害处理
    }
    
    // 巨型铁砧落地事件
    @SubscribeEvent
    public static void onGiantAnvilLand(AnvilEvent.GiantOnLand event) {
        Level level = event.getLevel();
        BlockPos pos = event.getPos();
        FallingGiantAnvilEntity anvil = event.getEntity();
        
        // 巨型铁砧特殊处理
    }
}
```

### 其他 AnvilCraft 事件

```java
// 方块实体事件
@SubscribeEvent
public static void onBlockEntity(BlockEntityEvent event) {
    // 方块实体相关事件
}

// 物品实体事件
@SubscribeEvent
public static void onItemEntity(ItemEntityEvent event) {
    // 物品实体相关事件
}

// 闪电击中事件
@SubscribeEvent
public static void onLightningStrike(LightningBoltStrikeEvent event) {
    // 闪电击中时触发
}

// 磁铁使用事件
@SubscribeEvent
public static void onUseMagnet(UseMagnetEvent event) {
    // 磁铁使用时触发
}
```

## 创建自定义事件

### 定义事件类

```java
package com.example.myaddon.event;

import net.neoforged.bus.api.Event;
import net.neoforged.bus.api.ICancellableEvent;

public class CustomMachineEvent extends Event implements ICancellableEvent {
    private final BlockPos pos;
    private final Level level;
    private int efficiency;
    
    public CustomMachineEvent(Level level, BlockPos pos, int efficiency) {
        this.level = level;
        this.pos = pos;
        this.efficiency = efficiency;
    }
    
    public Level getLevel() {
        return level;
    }
    
    public BlockPos getPos() {
        return pos;
    }
    
    public int getEfficiency() {
        return efficiency;
    }
    
    public void setEfficiency(int efficiency) {
        this.efficiency = efficiency;
    }
}
```

### 触发事件

```java
public class CustomMachine {
    
    public void process(Level level, BlockPos pos) {
        // 创建并触发事件
        CustomMachineEvent event = new CustomMachineEvent(level, pos, 100);
        NeoForge.EVENT_BUS.post(event);
        
        // 检查事件是否被取消
        if (event.isCanceled()) {
            return;
        }
        
        // 使用可能被修改的效率值
        int efficiency = event.getEfficiency();
        // 继续处理...
    }
}
```

### 监听自定义事件

```java
@EventBusSubscriber(modid = "other_addon")
public class CustomEventListener {
    
    @SubscribeEvent
    public static void onCustomMachine(CustomMachineEvent event) {
        // 修改效率
        event.setEfficiency(event.getEfficiency() * 2);
        
        // 或者取消事件
        if (shouldCancel(event)) {
            event.setCanceled(true);
        }
    }
}
```

## 最佳实践

1. **使用正确的事件总线**
    - MOD 加载阶段事件使用 `Bus.MOD`
    - 游戏运行时事件使用 `Bus.GAME`（默认）

2. **事件处理方法**
    - 使用 `@EventBusSubscriber` 时方法必须是 `static`
    - 方法必须有且仅有一个事件参数

3. **避免性能问题**
    - 在高频事件（如 Tick）中避免耗时操作
    - 使用缓存减少重复计算

4. **正确处理取消**
    - 只有实现 `ICancellableEvent` 的事件才能取消
    - 检查事件是否已被取消再执行操作

5. **客户端/服务端分离**
    - 使用 `@OnlyIn(Dist.CLIENT)` 标记仅客户端代码
    - 检查 `level.isClientSide()` 区分端

```java
@SubscribeEvent
public static void onSomeEvent(SomeEvent event) {
    if (event.getLevel().isClientSide()) {
        // 客户端逻辑
    } else {
        // 服务端逻辑
    }
}
```

6. **事件优先级**
    - 只在必要时使用非默认优先级
    - 高优先级用于需要先检查/取消的情况
