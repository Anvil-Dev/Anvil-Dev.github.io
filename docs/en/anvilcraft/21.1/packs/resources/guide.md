# In-Game Guide and Dynamic Models

The guide lives at `assets/anvilcraft/ageratum/<language>/<category>/<article>.md`. Resource packs can modify existing articles using the same path. Keep the YAML front matter navigation title and icon; the body can display current recipes via Ageratum's item reference and recipe components. Chinese articles use `zh_cn`.

[Bundled Chinese guide article](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/assets/anvilcraft/ageratum/zh_cn/000_process/001.md)

## Intermediate States and Celestial Models

The client collects JSON models under `models/block/wip_display/` for sequential assembly and `models/block/celestial_body/` for celestial bodies, registering them as standalone models. `displayed_models` in sequential assembly uses model IDs without `models/` or the file extension. Celestial textures live in `assets/anvilcraft/textures/block/celestial_body/`; reloading resource packs clears the dynamic texture cache.

[RegisterAdditionalEventListener.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java) · [StellarVisualReloadListener.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StellarVisualReloadListener.java)
