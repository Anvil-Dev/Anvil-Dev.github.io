---
prev:
   text: 注册方块
   link: /posts/docs/addon/03_create_block
next:
   text: 方块实体开发
   link: /posts/docs/addon/05_create_block_entity
---

# 注册实体

在 AnvilCraft 附属开发中，实体（Entity）是游戏世界中可移动的对象，如投掷物、生物或特殊效果载体。

## 实体注册基础

使用 `REGISTRUM.entity()` 方法可以注册自定义实体：

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .register();
```

其中：

- `"custom_entity"` 是实体的ID
- `CustomEntity::new` 是实体的工厂方法
- `MobCategory.MISC` 是实体的分类

## 本章节内容将详细介绍 `REGISTRUM.entity()` 的使用方法

使用 `REGISTRUM.entity()` 方法后，你将拿到一个 `EntityBuilder`，该对象拥有一个 `.register()` 方法，调用后返回一个
`EntityEntry`，其对应的实体将在合适的时机自动注册。

### `EntityBuilder.properties()`

该方法用于配置实体的基本属性：

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .properties(builder -> builder
        .sized(0.5F, 0.5F)      // 碰撞箱大小
        .eyeHeight(0.25F)       // 眼睛高度
        .clientTrackingRange(4) // 客户端追踪范围
        .updateInterval(20)     // 更新间隔（tick）
    )
    .register();
```

常用属性设置：

| 方法                           | 说明                    |
|------------------------------|-----------------------|
| `sized(width, height)`       | 设置实体的碰撞箱大小            |
| `eyeHeight(height)`          | 设置实体眼睛位置的高度           |
| `clientTrackingRange(range)` | 设置客户端开始追踪该实体的距离       |
| `updateInterval(ticks)`      | 设置同步更新的间隔（以 tick 为单位） |
| `fireImmune()`               | 使实体免疫火焰伤害             |
| `noSave()`                   | 实体不会被保存到存档            |
| `noSummon()`                 | 实体不能被 summon 命令召唤     |

### `EntityBuilder.renderer()`

该方法用于注册实体的客户端渲染器：

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .renderer(() -> CustomEntityRenderer::new)
    .register();
```

渲染器是一个实现了 `EntityRenderer<T>` 接口的类，负责在客户端绘制实体。

### `EntityBuilder.attributes()`

对于继承自 `LivingEntity` 的实体，需要注册属性：

```java
public static final EntityEntry<CustomMob> CUSTOM_MOB = REGISTRUM
    .<CustomMob>entity("custom_mob", CustomMob::new, MobCategory.CREATURE)
    .attributes(CustomMob::createAttributes)
    .renderer(() -> CustomMobRenderer::new)
    .register();
```

实体类中定义属性：

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

为生物实体配置自然生成规则：

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

设置实体的本地化名称：

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .lang("Custom Entity")
    .register();
```

### `EntityBuilder.loot()`

配置实体的战利品表：

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

为实体添加标签：

```java
public static final EntityEntry<CustomEntity> CUSTOM_ENTITY = REGISTRUM
    .entity("custom_entity", CustomEntity::new, MobCategory.MISC)
    .tag(EntityTypeTags.ARROWS)
    .register();
```

### `EntityBuilder.defaultSpawnEgg()`

为生物实体创建刷怪蛋（已弃用，但仍可用）：

```java
public static final EntityEntry<CustomMob> CUSTOM_MOB = REGISTRUM
    .<CustomMob>entity("custom_mob", CustomMob::new, MobCategory.CREATURE)
    .attributes(CustomMob::createAttributes)
    .defaultSpawnEgg(0xFF0000, 0x00FF00) // 主色和副色
    .register();
```

## 自定义实体类

### 简单实体

创建一个简单的实体类：

```java
public class CustomEntity extends Entity {
    public CustomEntity(EntityType<?> type, Level level) {
        super(type, level);
    }

    @Override
    protected void defineSynchedData(SynchedEntityData.Builder builder) {
        // 定义需要同步的数据
    }

    @Override
    protected void readAdditionalSaveData(CompoundTag tag) {
        // 读取保存的数据
    }

    @Override
    protected void addAdditionalSaveData(CompoundTag tag) {
        // 保存数据
    }

    @Override
    public void tick() {
        super.tick();
        // 每 tick 执行的逻辑
    }
}
```

### 投掷物实体

创建一个投掷物：

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

## 实体渲染器

创建自定义渲染器：

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
        // 自定义渲染逻辑
        super.render(entity, entityYaw, partialTicks, poseStack, buffer, packedLight);
    }
}
```

## MobCategory 分类说明

| 分类                           | 说明        |
|------------------------------|-----------|
| `MONSTER`                    | 怪物，在黑暗中生成 |
| `CREATURE`                   | 友好生物，如牛、羊 |
| `AMBIENT`                    | 环境生物，如蝙蝠  |
| `WATER_CREATURE`             | 水生生物，如鱼   |
| `WATER_AMBIENT`              | 水生环境生物    |
| `UNDERGROUND_WATER_CREATURE` | 地下水生生物    |
| `AXOLOTLS`                   | 美西螈类      |
| `MISC`                       | 杂项，不自然生成  |

## 完整示例

以下是一个完整的投掷物实体注册示例：

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
        // 确保类被加载
    }
}
```

## 最佳实践

1. **合理选择分类**
    * 根据实体的行为选择正确的 `MobCategory`
    * 非生成的实体使用 `MISC`

2. **优化性能**
    * 合理设置 `updateInterval` 减少网络开销
    * 设置合适的 `clientTrackingRange` 节省带宽

3. **渲染器注意事项**
    * 渲染器代码只在客户端执行
    * 使用 `NonNullSupplier` 延迟加载避免服务端崩溃

4. **数据同步**
    * 使用 `SynchedEntityData` 同步客户端和服务端数据
    * 只同步必要的数据以减少网络流量

5. **及时注册**
    * 确保在 mod 主类的构造函数中调用 `register()` 方法
