# Event System

This chapter introduces how to use the NeoForge event system and custom events provided by AnvilCraft in your Addon.

## Overview

NeoForge provides a powerful event system that allows mods to interact at various stages of the game. AnvilCraft also defines some custom events for extending anvil-related functionality.

## Event Buses

NeoForge has two event buses:

| Event Bus | Purpose | Common Events |
|-----------|---------|---------------|
| MOD Event Bus | Mod loading phase events | Registration, data generation, config loading |
| GAME Event Bus | Game runtime events | Player interactions, block events, entity events |

## Using @EventBusSubscriber

The simplest way to listen to events is using the `@EventBusSubscriber` annotation:

### Listening to Game Events

```java
package com.example.myaddon.event;

import com.example.myaddon.MyAddon;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.entity.player.PlayerInteractEvent;

// Uses GAME event bus by default
@EventBusSubscriber(modid = MyAddon.MOD_ID)
public class PlayerEventHandler {
    
    @SubscribeEvent
    public static void onPlayerRightClickBlock(PlayerInteractEvent.RightClickBlock event) {
        // Handle player right-click block event
        var player = event.getEntity();
        var level = event.getLevel();
        var pos = event.getPos();
        
        // Your logic code
    }
    
    @SubscribeEvent
    public static void onPlayerLeftClickBlock(PlayerInteractEvent.LeftClickBlock event) {
        // Handle player left-click block event
    }
}
```

### Listening to MOD Events

```java
package com.example.myaddon.event;

import com.example.myaddon.MyAddon;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;

// Explicitly specify MOD event bus
@EventBusSubscriber(modid = MyAddon.MOD_ID, bus = EventBusSubscriber.Bus.MOD)
public class ModSetupHandler {
    
    @SubscribeEvent
    public static void onCommonSetup(FMLCommonSetupEvent event) {
        // Mod common initialization
        event.enqueueWork(() -> {
            // Initialization code to execute on main thread
        });
    }
}
```

### Client-Only Events

```java
package com.example.myaddon.event;

import com.example.myaddon.MyAddon;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.client.event.RenderLevelStageEvent;

// Only loaded on client
@EventBusSubscriber(modid = MyAddon.MOD_ID, value = Dist.CLIENT)
public class ClientRenderHandler {
    
    @SubscribeEvent
    public static void onRenderLevel(RenderLevelStageEvent event) {
        if (event.getStage() == RenderLevelStageEvent.Stage.AFTER_PARTICLES) {
            // Render custom content
        }
    }
}
```

## Manual Event Listener Registration

You can also manually register event listeners in code:

```java
@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public static final String MOD_ID = "myaddon";
    
    public MyAddon(IEventBus modEventBus) {
        // Register to MOD event bus
        modEventBus.addListener(this::onCommonSetup);
        
        // Register to GAME event bus
        NeoForge.EVENT_BUS.addListener(this::onPlayerInteract);
    }
    
    private void onCommonSetup(FMLCommonSetupEvent event) {
        // Handle common initialization
    }
    
    private void onPlayerInteract(PlayerInteractEvent event) {
        // Handle player interaction
    }
}
```

## Event Priority

You can control event processing order through the `priority` parameter:

```java
@SubscribeEvent(priority = EventPriority.HIGH)
public static void onHighPriorityEvent(SomeEvent event) {
    // High priority, executed first
}

@SubscribeEvent(priority = EventPriority.LOW)
public static void onLowPriorityEvent(SomeEvent event) {
    // Low priority, executed later
}
```

Priority from highest to lowest: `HIGHEST` → `HIGH` → `NORMAL` → `LOW` → `LOWEST`

## Cancellable Events

Some events can be cancelled to prevent default behavior:

```java
@SubscribeEvent
public static void onBlockBreak(BlockEvent.BreakEvent event) {
    if (shouldPreventBreak(event)) {
        event.setCanceled(true);  // Cancel block breaking
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

## Common NeoForge Events

### Player Events

```java
// Player login
@SubscribeEvent
public static void onPlayerLogin(PlayerEvent.PlayerLoggedInEvent event) {
    Player player = event.getEntity();
}

// Player logout
@SubscribeEvent
public static void onPlayerLogout(PlayerEvent.PlayerLoggedOutEvent event) {
    Player player = event.getEntity();
}

// Player interact with entity
@SubscribeEvent
public static void onEntityInteract(PlayerInteractEvent.EntityInteract event) {
    Player player = event.getEntity();
    Entity target = event.getTarget();
}

// Player use item
@SubscribeEvent
public static void onUseItem(PlayerInteractEvent.RightClickItem event) {
    ItemStack item = event.getItemStack();
}
```

### Block Events

```java
// Block break
@SubscribeEvent
public static void onBlockBreak(BlockEvent.BreakEvent event) {
    BlockPos pos = event.getPos();
    BlockState state = event.getState();
}

// Block place
@SubscribeEvent
public static void onBlockPlace(BlockEvent.EntityPlaceEvent event) {
    BlockPos pos = event.getPos();
    Entity entity = event.getEntity();
}

// Block neighbor update
@SubscribeEvent
public static void onNeighborNotify(BlockEvent.NeighborNotifyEvent event) {
    BlockPos pos = event.getPos();
}
```

### Entity Events

```java
// Entity join world
@SubscribeEvent
public static void onEntityJoin(EntityJoinLevelEvent event) {
    Entity entity = event.getEntity();
    Level level = event.getLevel();
}

// Entity hurt
@SubscribeEvent
public static void onEntityHurt(LivingIncomingDamageEvent event) {
    LivingEntity entity = event.getEntity();
    float damage = event.getAmount();
}

// Entity death
@SubscribeEvent
public static void onEntityDeath(LivingDeathEvent event) {
    LivingEntity entity = event.getEntity();
    DamageSource source = event.getSource();
}
```

### Server Events

```java
// Server starting
@SubscribeEvent
public static void onServerStarting(ServerStartingEvent event) {
    MinecraftServer server = event.getServer();
}

// Server stopping
@SubscribeEvent
public static void onServerStopping(ServerStoppingEvent event) {
    MinecraftServer server = event.getServer();
}

// Register commands
@SubscribeEvent
public static void onRegisterCommands(RegisterCommandsEvent event) {
    CommandDispatcher<CommandSourceStack> dispatcher = event.getDispatcher();
    // Register custom commands
}

// Resource reload
@SubscribeEvent
public static void onReload(AddReloadListenerEvent event) {
    // Add reload listeners
}
```

### Client Events

```java
// Register key bindings
@SubscribeEvent
public static void onRegisterKeyMappings(RegisterKeyMappingsEvent event) {
    event.register(MY_KEY_MAPPING);
}

// Render HUD
@SubscribeEvent
public static void onRenderHud(RenderGuiLayerEvent.Post event) {
    // Render custom HUD
}

// Client tick
@SubscribeEvent
public static void onClientTick(ClientTickEvent.Post event) {
    // Execute every client tick
}
```

## AnvilCraft Custom Events

AnvilCraft provides multiple custom events for extending anvil-related functionality.

### AnvilEvent - Anvil Events

```java
import dev.dubhe.anvilcraft.api.event.AnvilEvent;

@EventBusSubscriber(modid = MyAddon.MOD_ID)
public class AnvilEventHandler {
    
    // Anvil land event
    @SubscribeEvent
    public static void onAnvilLand(AnvilEvent.OnLand event) {
        Level level = event.getLevel();
        BlockPos pos = event.getPos();
        float fallDistance = event.getFallDistance();
        FallingBlockEntity anvil = event.getEntity();
        
        // Custom anvil landing logic
        if (fallDistance > 10.0f) {
            // Special handling for high-altitude falling anvil
        }
    }
    
    // Anvil collision block event
    @SubscribeEvent
    public static void onAnvilCollision(AnvilEvent.CollisionBlock event) {
        Level level = event.getLevel();
        BlockPos pos = event.getPos();
        double speed = event.getSpeed();
        
        // Can cancel collision event
        if (shouldPreventCollision(level, pos)) {
            event.setCanceled(true);
        }
    }
    
    // Anvil hurt entity event
    @SubscribeEvent
    public static void onAnvilHurtEntity(AnvilEvent.HurtEntity event) {
        Entity hurtEntity = event.getHurtedEntity();
        float damage = event.getDamage();
        
        // Custom damage handling
    }
    
    // Giant anvil land event
    @SubscribeEvent
    public static void onGiantAnvilLand(AnvilEvent.GiantOnLand event) {
        Level level = event.getLevel();
        BlockPos pos = event.getPos();
        FallingGiantAnvilEntity anvil = event.getEntity();
        
        // Giant anvil special handling
    }
}
```

### Other AnvilCraft Events

```java
// Block entity event
@SubscribeEvent
public static void onBlockEntity(BlockEntityEvent event) {
    // Block entity related events
}

// Item entity event
@SubscribeEvent
public static void onItemEntity(ItemEntityEvent event) {
    // Item entity related events
}

// Lightning strike event
@SubscribeEvent
public static void onLightningStrike(LightningBoltStrikeEvent event) {
    // Triggered when lightning strikes
}

// Magnet use event
@SubscribeEvent
public static void onUseMagnet(UseMagnetEvent event) {
    // Triggered when magnet is used
}
```

## Creating Custom Events

### Define Event Class

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

### Fire Event

```java
public class CustomMachine {
    
    public void process(Level level, BlockPos pos) {
        // Create and fire event
        CustomMachineEvent event = new CustomMachineEvent(level, pos, 100);
        NeoForge.EVENT_BUS.post(event);
        
        // Check if event was cancelled
        if (event.isCanceled()) {
            return;
        }
        
        // Use potentially modified efficiency value
        int efficiency = event.getEfficiency();
        // Continue processing...
    }
}
```

### Listen to Custom Event

```java
@EventBusSubscriber(modid = "other_addon")
public class CustomEventListener {
    
    @SubscribeEvent
    public static void onCustomMachine(CustomMachineEvent event) {
        // Modify efficiency
        event.setEfficiency(event.getEfficiency() * 2);
        
        // Or cancel event
        if (shouldCancel(event)) {
            event.setCanceled(true);
        }
    }
}
```

## Best Practices

1. **Use the Correct Event Bus**
   - Use `Bus.MOD` for MOD loading phase events
   - Use `Bus.GAME` for game runtime events (default)

2. **Event Handler Methods**
   - Methods must be `static` when using `@EventBusSubscriber`
   - Methods must have exactly one event parameter

3. **Avoid Performance Issues**
   - Avoid expensive operations in high-frequency events (like Tick)
   - Use caching to reduce repeated calculations

4. **Handle Cancellation Correctly**
   - Only events implementing `ICancellableEvent` can be cancelled
   - Check if event is already cancelled before executing operations

5. **Client/Server Separation**
   - Use `@OnlyIn(Dist.CLIENT)` to mark client-only code
   - Check `level.isClientSide()` to distinguish sides

```java
@SubscribeEvent
public static void onSomeEvent(SomeEvent event) {
    if (event.getLevel().isClientSide()) {
        // Client logic
    } else {
        // Server logic
    }
}
```

6. **Event Priority**
   - Only use non-default priority when necessary
   - High priority for cases that need to check/cancel first
