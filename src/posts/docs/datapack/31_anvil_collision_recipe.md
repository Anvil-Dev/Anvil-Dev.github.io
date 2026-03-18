---
prev:
   text: 能量武器制作配方 (Energy Weapon Make Recipe)
   link: /posts/docs/datapack/30_energy_weapon_make_recipe
---

# 铁砧碰撞工艺配方 (Anvil Collision Craft Recipe)

该配方在铁砧以指定速度撞击目标方块时触发，可转换方块并产出掉落。

## 基本结构

```json
{
  "type": "anvilcraft:anvil_collision",
  "anvil": { "blocks": "minecraft:anvil" },
  "consume": false,
  "hitBlock": { "blocks": "minecraft:stone" },
  "transform_blocks": [
    {
      "input_block": { "blocks": "minecraft:stone" },
      "output_block": { "state": { "Name": "minecraft:cobblestone" }, "chance": 1.0 }
    }
  ],
  "output_items": [
    { "id": "minecraft:gravel", "count": 1 }
  ],
  "speed": 6
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:anvil_collision`
- `anvil`: 铁砧方块条件
- `consume`: 是否消耗铁砧
- `hitBlock`: 被撞击方块条件
- `transform_blocks`: 方块转换列表
- `output_items`: 掉落输出列表
- `speed`: 最低撞击速度阈值

