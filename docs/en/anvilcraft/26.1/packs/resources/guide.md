# In-Game Guide and Dynamic Models

Guide articles live at `assets/anvilcraft/ageratum/<language>/<category>/<article>.md`. A resource pack can override an existing article at the same path. Keep its navigation title and icon in the YAML front matter. Use Ageratum item references and recipe components in the body to show the current recipe. Chinese articles use `zh_cn`.

[Bundled Chinese guide article](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/ageratum/zh_cn/000_process/001.md)

## Intermediate States and Celestial Models

The client registers each built-in intermediate assembly model during `ModelEvent.RegisterStandalone`. Resource packs can override its JSON and textures at the same paths. For celestial bodies, the client scans JSON files under `models/block/celestial_body/` and registers each as a standalone model using its namespace and extensionless model path.

[RegisterAdditionalEventListener.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java)
