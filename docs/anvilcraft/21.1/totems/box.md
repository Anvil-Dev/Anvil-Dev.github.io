# 手持顺序、护符盒与内置图腾

让余烬符也能装进护符盒，需要为 `workshop:ember_ward` 增加物品标签。把下列文件写到 `data/anvilcraft/tags/item/totem.json`，服务器重载数据后盒子便能识别已注册的余烬符。

```json
{"replace": false, "values": ["workshop:ember_ward"]}
```

死亡保护先检查主手、再检查副手。玩家还会检查口袋中的护符盒，口袋中单独放一枚图腾不会进入这组候选。对匹配物品先调用外层 `canExecute`，再调用 `CommonHooks.onLivingUseTotem`。口袋盒也按副手向该钩子报告。第一个通过两道判断的物品独占此次尝试。

盒子的 `canExecute` 只检查图腾列表非空。`execute` 取列表第一项，根据物品查处理器，直接调用它的 `execute`。成功后，盒子的 `shrink` 将 `BoxContents` 转成可变副本，移除第一项，再写回 `BOX_CONTENTS`。即使第二枚图腾能生效，第一枚失败时也不会跳到它。滚轮选中的是玩家要取出的物品，死亡保护始终取队首。[护符盒处理器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/AmuletBoxHandler.java) · [容量与取出](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/BoxContents.java)

| 内置处理器 | 何时成功 | 处理结果 |
| --- | --- | --- |
| `TotemOfUndyingHandler` | 伤害不属于 `BYPASSES_INVULNERABILITY`。 | 生命设为 1，清除可被图腾治疗的效果，添加再生、伤害吸收、抗火，播放实体事件 35。 |
| `TotemOfRecoveryHandler` | 伤害不是 `GENERIC_KILL`。 | 恢复与不死图腾相同的基本状态。服务端玩家额外获得回溯珍珠、记录死亡位置并传往重生点。 |
| `TotemOfRageHandler` | 伤害不属于 `BYPASSES_INVULNERABILITY`。 | 生命回满，清效果后添加狂怒等效果；成功触发的实体在后续 `baseTick` 接受持续时间检查。生存或冒险玩家会在期限后死亡。 |

[不死](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfUndyingHandler.java) · [恢复](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRecoveryHandler.java) · [狂怒](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRageHandler.java) · [狂怒计时与候选顺序](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java)
