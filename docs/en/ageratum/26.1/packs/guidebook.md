# Guide Item Model and Translations

To change the guidebook icon in the inventory while keeping the built-in model, override `assets/ageratum/textures/item/guidebook.png`. To use a custom model, write the item definition to `assets/ageratum/items/guidebook.json`.

```json
{"model":{"type":"minecraft:model","model":"workshop:item/field_guide"}}
```

This definition is handed to the client's item model resolver. Save the following file at `assets/workshop/models/item/field_guide.json` and provide `assets/workshop/textures/item/field_guide.png`.

```json
{"parent":"minecraft:item/generated","textures":{"layer0":"workshop:item/field_guide"}}
```

| Field | Type | Location & Requirements |
| --- | --- | --- |
| `model` | Object | Required for this item definition. |
| `model.type` | ID string | Uses `minecraft:model` here so the renderer references a static model. |
| `model.model` | ID string | Required for this type. Relative to the namespace's `models/`, omitting the extension. |
| `parent` | ID string | Optional parent model; inherits `minecraft:item/generated` here. |
| `textures.layer0` | ID string | Sets the first texture layer for the generated item model, relative to `textures/`. |

Client language files live at `assets/ageratum/lang/en_us.json` (and `zh_cn.json`). To replace the guidebook's name, override the string value of `item.ageratum.guidebook`, which matches its registry ID. After changing models or translations, press F3+T to reload client resources.
