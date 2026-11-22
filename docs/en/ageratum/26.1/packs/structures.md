# Previewing NBT and SNBT in Body Text

Create `repair.md` and `stand.snbt` side by side in `assets/workshop/ageratum/en_us/maintenance/`. The page only needs to reference the file in the same directory.

```markdown
# Display Stand Base

<structure id="stand.snbt"/>
```

`stand.snbt` can start as a complete single-block structure.

```text
{
  DataVersion: 4790,
  size: [1, 1, 1],
  palette: [{Name: "minecraft:anvil"}],
  blocks: [{pos: [0, 0, 0], state: 0}],
  entities: []
}
```

| Field | Type | Purpose |
| --- | --- | --- |
| Tag attributes `id`, `path` | Path string | At least one is required; `id` takes precedence. Relative paths resolve from the current Markdown file's directory. |
| `size` | List of three integers | Structure dimensions along X, Y, Z, recorded in that order. |
| `palette` or `palettes` | List of block states or list of palette lists | At least one palette is required. States use `Name` and an optional `Properties` string map. |
| `blocks` | List of compounds | Each entry has a 3-integer `pos` and palette index `state`. Block entity data can be placed in `nbt` on that entry. |
| `entities` | List of compounds | Optional. No entities in this example, so an empty list is written explicitly. |
| `DataVersion` | Integer | Records the structure's data version. Keeping the game-exported value is recommended. |

When specifying a namespace, use the full resource manager path, such as `workshop:ageratum/en_us/maintenance/stand.snbt`. If the extension is omitted, it tries the raw path first, then `.nbt` and `.snbt`. The component detects compressed NBT by its gzip header; otherwise it tries text SNBT first and then the alternate decoder. The text size limit is 8 MiB. For documentation previews only, SNBT is convenient for version control and manual review. [Preview reading & format conversion](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java)

When the client cannot find a direct resource, it also queries the mod classloader for built-in NBT and SNBT under `data/<namespace>/structure/` and `structures/`. This fallback only checks the classpath; for standalone previews use `assets`, as world-enabled server data packs do not enter this client classloader. [Path resolution](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java)
