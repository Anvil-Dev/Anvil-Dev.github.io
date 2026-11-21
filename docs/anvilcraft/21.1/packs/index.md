# 数据包与资源包

配方放在服务端 `data/<命名空间>/recipe/`，资源包的模型、翻译和游戏内手册放在 `assets/<命名空间>/`。要覆盖内置配方，复用它的命名空间和相对路径；另取 ID 会新增同类型配方。改配方或标签后执行 `/reload`，动态注册表变更在重新打开世界时加载。

## 选择格式

- [铁砧冲击加工](./impact/)
- [流体、激光与设备加工](./machine/)
- [合成、饰品与锻造](./crafting/)
- [多方块与序列装配](./structures/)
- [矿物涌泉](./fountain/)
- [生物转化](./transform/)
- [天体与神庙配方](./celestial/)
- [动态注册表](./registries/)
- [恒星演化数据](./stars/)
- [战利品、进度与物品组件](./rules/)
- [标签与内置键](./tags/)
- [世界资源与客户端资源包](./resources/)

## 从空文件夹新建数据包

在存档的 `datapacks/workshop/` 中创建 `pack.mcmeta`。同级建立 `data/workshop/recipe/`，放入要新增的配方。Minecraft 1.21.1 的数据包格式为 48。

```json
{
  "pack": {
    "pack_format": 48,
    "description": "砧台加工配方"
  }
}
```

在世界中执行 `/reload` 后，用 `/datapack list enabled` 确认加载了 `workshop`。若需要替换本体配方，使用 `data/anvilcraft/recipe/` 并保留被覆盖文件的相对路径。发布 ZIP 时，将 `pack.mcmeta` 与 `data/` 放在归档根目录。

客户端翻译、模型或贴图放进单独的资源包，把 `pack_format` 改为 34，在 `assets/` 下按资源路径组织文件。从客户端资源包菜单启用后，用 F3+T 重新加载。
