# 充放电配方 (Charger Charging Recipe)

充放电配方定义充电器/放电器对物品的能量处理规则。

## 基本结构

```json
{
  "type": "anvilcraft:charger_charging",
  "ingredient": {
    "item": "minecraft:redstone"
  },
  "result": {
    "id": "minecraft:glowstone_dust",
    "count": 1
  },
  "power": -120,
  "time": 40
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:charger_charging`
- `ingredient`: 输入物品条件
- `result`: 输出物品
- `power`: 功率，负数为充电，正数为放电
- `time`: 处理时长（tick）

## 说明

- `power` 不能为 `0`
- `time` 必须大于 `0`

