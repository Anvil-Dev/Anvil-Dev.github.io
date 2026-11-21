# 神庙需求

按类别列出物品与数量，供神庙需求系统选择。

在数据包中建立 `data/example/recipe/temple_demand/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:temple_demand/example`。

## 配方示例

```json
{
  "type": "anvilcraft:temple_demand",
  "category": "punishment",
  "entries": [
    {
      "count": 1,
      "id": "anvilcraft:topaz"
    },
    {
      "count": 1,
      "id": "minecraft:lava_bucket"
    },
    {
      "count": 1024,
      "id": "minecraft:tnt"
    }
  ]
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/temple_demand/punishment.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:temple_demand`。

### 根对象

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | 必填 | 选择类别 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L77) |
| `entries` | `Entry.CODEC`数组 | 必填 | 候选条目列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L78) |

### Entry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L60) |
| `count` | 整数 | 必填 | 数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L61) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java)
