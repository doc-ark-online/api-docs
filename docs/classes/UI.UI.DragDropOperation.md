[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / DragDropOperation

# Class: DragDropOperation

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).DragDropOperation

**`Author`**

jie.wu

**`Description`**

UI 拖拽事件

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.DragDropOperation.md#constructor)

### Methods

- [equal](UI.UI.DragDropOperation.md#equal)
- [getDragPivot](UI.UI.DragDropOperation.md#getdragpivot)
- [getDragVisualWidget](UI.UI.DragDropOperation.md#getdragvisualwidget)
- [getOffset](UI.UI.DragDropOperation.md#getoffset)
- [getTag](UI.UI.DragDropOperation.md#gettag)
- [tryGetDragDropPayLoad](UI.UI.DragDropOperation.md#trygetdragdroppayload)
- [tryGetDragDropPayLoadAs](UI.UI.DragDropOperation.md#trygetdragdroppayloadas)

## Constructors

### constructor

• `Private` **new DragDropOperation**()

#### Defined in

UI/index.d.ts:580

• `Private` **new DragDropOperation**()

#### Defined in

UI/index.d.ts:581

## Methods

### equal

▸ **equal**(`other`): `boolean`

**`Description`**

判断是否相同

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                              | Description              |
| :------ | :------------------------------------------------ | :----------------------- |
| `other` | [`DragDropOperation`](UI.UI.DragDropOperation.md) | usage:另一个 UI 拖拽事件 |

#### Returns

`boolean`

boolean

#### Defined in

UI/index.d.ts:588

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

#### Defined in

UI/index.d.ts:606

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

#### Defined in

UI/index.d.ts:600

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

#### Defined in

UI/index.d.ts:612

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

#### Defined in

UI/index.d.ts:594

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

#### Defined in

UI/index.d.ts:618

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

#### Defined in

UI/index.d.ts:624
