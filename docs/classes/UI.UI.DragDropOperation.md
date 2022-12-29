[UI](../modules/UI.UI.md) / DragDropOperation

# DragDropOperation <Badge type="tip" text="Class" />

**`Description`**

UI 拖拽事件

## Table of contents

| Methods                                                                                                                                                |
| :----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------- |
| **[equal](UI.UI.DragDropOperation.md#equal)**([`DragDropOperation`](UI.UI.DragDropOperation.md)): `boolean` <br> 判断是否相同                          |
| **[getDragPivot](UI.UI.DragDropOperation.md#getdragpivot)**(): [`DragPivot`](../enums/UI.UI.DragPivot.md) <br> 获取拖拽锚点                            |
| **[getDragVisualWidget](UI.UI.DragDropOperation.md#getdragvisualwidget)**(): [`Widget`](UI.UI.Widget.md) <br> 获取拖拽显示的 UI                        |
| **[getOffset](UI.UI.DragDropOperation.md#getoffset)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取拖拽 UI 的百分比偏移                               |
| **[getTag](UI.UI.DragDropOperation.md#gettag)**(): `string` <br> 获取 Tag 标签                                                                         |
| **[tryGetDragDropPayLoad](UI.UI.DragDropOperation.md#trygetdragdroppayload)**(): [`DragDropPayLoad`](UI.UI.DragDropPayLoad.md) <br> 获取传递的数据信息 |
| **[tryGetDragDropPayLoadAs](UI.UI.DragDropOperation.md#trygetdragdroppayloadas)**<extends [`DragDropPayLoad`](UI.UI.DragDropPayLoad.md)<`T`\>          | \>(): extends [`DragDropPayLoad`](UI.UI.DragDropPayLoad.md)<`T`\> | <br> 获取传递的数据信息 |

• `Private` **new DragDropOperation**()

## Methods

### equal

▸ **equal**(`other`): `boolean`

**`Description`**

判断是否相同

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                              | Description        |
| :------ | :------------------------------------------------ | :----------------- |
| `other` | [`DragDropOperation`](UI.UI.DragDropOperation.md) | 另一个 UI 拖拽事件 |

#### Returns

`boolean`

boolean

---

### getDragPivot

▸ **getDragPivot**(): [`DragPivot`](../enums/UI.UI.DragPivot.md)

**`Description`**

获取拖拽锚点

**`Effect`**

只在客户端调用生效

#### Returns

[`DragPivot`](../enums/UI.UI.DragPivot.md)

拖拽锚点

---

### getDragVisualWidget

▸ **getDragVisualWidget**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取拖拽显示的 UI

**`Effect`**

只在客户端调用生效

#### Returns

[`Widget`](UI.UI.Widget.md)

拖拽显示的 UI

---

### getOffset

▸ **getOffset**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取拖拽 UI 的百分比偏移

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

百分比偏移

---

### getTag

▸ **getTag**(): `string`

**`Description`**

获取 Tag 标签

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回 tag

---

### tryGetDragDropPayLoad

▸ **tryGetDragDropPayLoad**(): [`DragDropPayLoad`](UI.UI.DragDropPayLoad.md)

**`Description`**

获取传递的数据信息

**`Effect`**

只在客户端调用生效

#### Returns

[`DragDropPayLoad`](UI.UI.DragDropPayLoad.md)

数据信息

---

### tryGetDragDropPayLoadAs

▸ **tryGetDragDropPayLoadAs**<`T`\>(): `T`

**`Description`**

获取传递的数据信息

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type                                                        |
| :--- | :---------------------------------------------------------- |
| `T`  | extends [`DragDropPayLoad`](UI.UI.DragDropPayLoad.md)<`T`\> |

#### Returns

`T`

数据信息
