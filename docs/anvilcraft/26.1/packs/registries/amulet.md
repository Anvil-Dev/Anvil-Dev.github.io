# 护符掉落定义

在 `data/<命名空间>/anvilcraft/amulet_definition/<名称>.json` 中规定受伤来源与护符的对应关系。进入世界时按动态注册表读取，并把条目同步给客户端。根对象的 `type` 必填，决定其余字段。

## 使用示例

```json
{
  "type": "anvilcraft:normal",
  "amulet": {
    "id": "anvilcraft:anvil_amulet"
  },
  "obtains": [
    {
      "tags": [
        {
          "expected": true,
          "id": "anvilcraft:amulet_valid/anvil"
        }
      ]
    },
    {
      "source_entity": {
        "type_specific": {
          "type": "anvilcraft:falling_block",
          "block": {
            "blocks": "#minecraft:anvil"
          }
        }
      }
    },
    {
      "direct_entity": {
        "slots": {
          "weapon": {
            "items": "#anvilcraft:tools/anvil_hammer"
          }
        }
      }
    }
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/anvilcraft/amulet_definition/anvil.json)

## 类型与字段

### `anvilcraft:normal`

`obtains` 描述伤害来源谓词，可给单项或多项。默认 `or = true` 时匹配任一项即可。空条件集合在 OR 模式下不匹配，在 AND 模式下匹配。产出的护符数量由实现固定为 1。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `amulet` | 物品栈模板对象 | 必填 | 发放的护符物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L119) |
| `or` | 布尔值 | 可省略，默认 `true` | 布尔值为真时按任意匹配，为假时按全部匹配 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L124) |

[AmuletDefinition.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java)

### `anvilcraft:comrade`

使用同伴护符专用判断。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `item` | 物品栈模板对象 | 必填 | 物品或物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L44) |

[ComradeAmuletDefinition.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java)

### `anvilcraft:abnormal`

使用异常护符专用判断。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `item` | 物品栈模板对象 | 必填 | 物品或物品栈 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L50) |

[AbnormalAmuletDefinition.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java)

[ModAmuletDefinitionTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitionTypes.java)
