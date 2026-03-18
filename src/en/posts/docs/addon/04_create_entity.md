---
prev:
   text: Registering Blocks
   link: /en/posts/docs/addon/03_create_block
next:
   text: Block Entity Development
   link: /en/posts/docs/addon/05_create_block_entity
---

# Registering Entities

In AnvilCraft addon development, entities are movable objects in the game world, such as projectiles, mobs, or special
effect carriers.

## Entity Registration Basics

Use the `REGISTRUM.entity()` method to register custom entities:

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .register();
```

Where:

- `"custom_entity"` is the entity ID
- `CustomEntity::new` is the entity factory method
- `MobCategory.MISC` is the entity category

## This chapter will detail how to use `REGISTRUM.entity()`

After using the `REGISTRUM.entity()` method, you will get an `EntityBuilder` object that has a `.register()` method.
Calling it returns an `EntityEntry`, and the corresponding entity will be automatically registered at the appropriate
time.

### `EntityBuilder.properties()`

This method is used to configure the basic properties of an entity:

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .properties(builder -> builder
        .sized(0.5F, 0.5F)      // Collision box size
        .eyeHeight(0.25F)       // Eye height
        .clientTrackingRange(4) // Client tracking range
        .updateInterval(20)     // Update interval (ticks)
    )
    .register();
```

Common property settings:

| Method                       | Description                                                 |
|------------------------------|-------------------------------------------------------------|
| `sized(width, height)`       | Set the entity's collision box size                         |
| `eyeHeight(height)`          | Set the height of the entity's eye position                 |
| `clientTrackingRange(range)` | Set the distance at which clients start tracking the entity |
| `updateInterval(ticks)`      | Set the sync update interval (in ticks)                     |
| `fireImmune()`               | Make the entity immune to fire damage                       |
| `noSave()`                   | Entity will not be saved to the world                       |
| `noSummon()`                 | Entity cannot be summoned with the summon command           |

### `EntityBuilder.renderer()`

This method is used to register the client-side renderer for the entity:

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .renderer(() -> CustomEntityRenderer::new)
    .register();
```

The renderer is a class that implements the `EntityRenderer<T>` interface, responsible for drawing the entity on the
client.

### `EntityBuilder.attributes()`

For entities that inherit from `LivingEntity`, you need to register attributes:

```java
public static final EntityEntry<CustomMob> CUSTOM_MOB = REGISTRUM
    .<CustomMob>entity("custom_mob", CustomMob::new, MobCategory.CREATURE)
    .attributes(CustomMob::createAttributes)
    .renderer(() -> CustomMobRenderer::new)
    .register();
```

Define attributes in the entity class:

```java
public class CustomMob extends PathfinderMob {
    public CustomMob(EntityType<? extends PathfinderMob> type, Level level) {
        super(type, level);
    }

    public static AttributeSupplier.Builder createAttributes() {
        return Mob.createMobAttributes()
            .add(Attributes.MAX_HEALTH, 20.0)
            .add(Attributes.MOVEMENT_SPEED, 0.25)
            .add(Attributes.ATTACK_DAMAGE, 3.0);
    }
}
```

### `EntityBuilder.spawnPlacement()`

Configure natural spawn rules for mob entities:

```java
public static final EntityEntry<CustomMob> CUSTOM_MOB = REGISTRUM
    .<CustomMob>entity("custom_mob", CustomMob::new, MobCategory.CREATURE)
    .attributes(CustomMob::createAttributes)
    .spawnPlacement(
        SpawnPlacementTypes.ON_GROUND,
        Heightmap.Types.MOTION_BLOCKING_NO_LEAVES,
        CustomMob::checkSpawnRules,
        RegisterSpawnPlacementsEvent.Operation.AND
    )
    .renderer(() -> CustomMobRenderer::new)
    .register();
```

### `EntityBuilder.lang()`

Set the localized name for the entity:

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .lang("Custom Entity")
    .register();
```

### `EntityBuilder.loot()`

Configure the entity's loot table:

```java
public static final EntityEntry<CustomMob> CUSTOM_MOB = REGISTRUM
    .<CustomMob>entity("custom_mob", CustomMob::new, MobCategory.CREATURE)
    .attributes(CustomMob::createAttributes)
    .loot((tables, entityType) -> {
        tables.add(entityType, LootTable.lootTable()
            .withPool(LootPool.lootPool()
                .add(LootItem.lootTableItem(Items.DIAMOND))
            )
        );
    })
    .register();
```

### `EntityBuilder.tag()`

Add tags to the entity:

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .tag(EntityTypeTags.ARROWS)
    .register();
```

### `EntityBuilder.defaultSpawnEgg()`

Create a spawn egg for a mob entity (deprecated but still usable):

```java
public static final EntityEntry<CustomMob> CUSTOM_MOB = REGISTRUM
    .<CustomMob>entity("custom_mob", CustomMob::new, MobCategory.CREATURE)
    .attributes(CustomMob::createAttributes)
    .defaultSpawnEgg(0xFF0000, 0x00FF00) // Primary and secondary colors
    .register();
```

## Custom Entity Classes

### Simple Entity

Create a simple entity class:

```java
public class CustomEntity extends Entity {
    public CustomEntity(EntityType<?> type, Level level) {
        super(type, level);
    }

    @Override
    protected void defineSynchedData(SynchedEntityData.Builder builder) {
        // Define data that needs to be synchronized
    }

    @Override
    protected void readAdditionalSaveData(CompoundTag tag) {
        // Read saved data
    }

    @Override
    protected void addAdditionalSaveData(CompoundTag tag) {
        // Save data
    }

    @Override
    public void tick() {
        super.tick();
        // Logic executed every tick
    }
}
```

### Projectile Entity

Create a projectile:

```java
public class CustomProjectile extends ThrowableProjectile {
    public CustomProjectile(EntityType<? extends ThrowableProjectile> type, Level level) {
        super(type, level);
    }

    public CustomProjectile(Level level, LivingEntity owner) {
        super(ModEntities.CUSTOM_PROJECTILE.get(), owner, level);
    }

    @Override
    protected void onHitEntity(EntityHitResult result) {
        super.onHitEntity(result);
        Entity entity = result.getEntity();
        entity.hurt(damageSources().thrown(this, getOwner()), 5.0F);
    }

    @Override
    protected void onHitBlock(BlockHitResult result) {
        super.onHitBlock(result);
        discard();
    }
}
```

## Entity Renderer

Create a custom renderer:

```java
public class CustomEntityRenderer extends EntityRenderer<CustomEntity> {
    private static final ResourceLocation TEXTURE = 
        ResourceLocation.fromNamespaceAndPath("modid", "textures/entity/custom_entity.png");

    public CustomEntityRenderer(EntityRendererProvider.Context context) {
        super(context);
    }

    @Override
    public ResourceLocation getTextureLocation(CustomEntity entity) {
        return TEXTURE;
    }

    @Override
    public void render(CustomEntity entity, float entityYaw, float partialTicks, 
                       PoseStack poseStack, MultiBufferSource buffer, int packedLight) {
        // Custom rendering logic
        super.render(entity, entityYaw, partialTicks, poseStack, buffer, packedLight);
    }
}
```

## MobCategory Descriptions

| Category                     | Description                                |
|------------------------------|--------------------------------------------|
| `MONSTER`                    | Monsters, spawn in darkness                |
| `CREATURE`                   | Friendly creatures, such as cows and sheep |
| `AMBIENT`                    | Ambient creatures, such as bats            |
| `WATER_CREATURE`             | Aquatic creatures, such as fish            |
| `WATER_AMBIENT`              | Aquatic ambient creatures                  |
| `UNDERGROUND_WATER_CREATURE` | Underground aquatic creatures              |
| `AXOLOTLS`                   | Axolotl types                              |
| `MISC`                       | Miscellaneous, do not spawn naturally      |

## Complete Example

Here is a complete projectile entity registration example:

```java
public class ModEntities {
    public static final EntityEntry<CustomProjectile> CUSTOM_PROJECTILE = REGISTRUM
        .<CustomProjectile>entity("custom_projectile", CustomProjectile::new, MobCategory.MISC)
        .properties(builder -> builder
            .sized(0.5F, 0.5F)
            .eyeHeight(0.13F)
            .clientTrackingRange(4)
            .updateInterval(20)
        )
        .renderer(() -> CustomProjectileRenderer::new)
        .register();

    public static void register() {
        // Ensure the class is loaded
    }
}
```

## Best Practices

1. **Choose the Right Category**
    * Select the correct `MobCategory` based on entity behavior
    * Use `MISC` for non-spawning entities

2. **Optimize Performance**
    * Set appropriate `updateInterval` to reduce network overhead
    * Set appropriate `clientTrackingRange` to save bandwidth

3. **Renderer Considerations**
    * Renderer code only executes on the client
    * Use `NonNullSupplier` for lazy loading to avoid server crashes

4. **Data Synchronization**
    * Use `SynchedEntityData` to sync data between client and server
    * Only sync necessary data to reduce network traffic

5. **Timely Registration**
    * Ensure you call the `register()` method in the mod main class constructor
