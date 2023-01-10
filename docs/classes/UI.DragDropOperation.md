[UI](../modules/UI.UI.md) / DragDropOperation

# DragDropOperation <Badge type="tip" text="Class" /> <Score text="DragDropOperation" />

**`Description`**

UI 拖拽事件

## Table of contents

| Methods |
| :-----|
| **[equal](UI.DragDropOperation.md#equal)**([`DragDropOperation`](UI.DragDropOperation.md)): `boolean` <br> 判断是否相同|
| **[getDragPivot](UI.DragDropOperation.md#getdragpivot)**(): [`DragPivot`](../enums/UI.DragPivot.md) <br> 获取拖拽锚点|
| **[getDragVisualWidget](UI.DragDropOperation.md#getdragvisualwidget)**(): [`Widget`](UI.Widget.md) <br> 获取拖拽显示的UI|
| **[getOffset](UI.DragDropOperation.md#getoffset)**(): [`Vector2`](Type.Vector2.md) <br> 获取拖拽UI的百分比偏移|
| **[getTag](UI.DragDropOperation.md#gettag)**(): `string` <br> 获取Tag 标签|
| **[tryGetDragDropPayLoad](UI.DragDropOperation.md#trygetdragdroppayload)**(): [`DragDropPayLoad`](UI.DragDropPayLoad.md) <br> 获取传递的数据信息|
| **[tryGetDragDropPayLoadAs](UI.DragDropOperation.md#trygetdragdroppayloadas)**<extends [`DragDropPayLoad`](UI.DragDropPayLoad.md)<`T`\> |\>(): extends [`DragDropPayLoad`](UI.DragDropPayLoad.md)<`T`\> | <br> 获取传递的数据信息|

• `Private` **new DragDropOperation**()

## Methods

### equal <Score text="equal" /> 

▸ **equal**(`other`): `boolean` <Badge type="tip" text="other" />

**`Description`**

判断是否相同


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`DragDropOperation`](UI.DragDropOperation.md) | 另一个UI拖拽事件 |

#### Returns

`boolean`

boolean

___

### getDragPivot <Score text="getDragPivot" /> 

▸ **getDragPivot**(): [`DragPivot`](../enums/UI.DragPivot.md) <Badge type="tip" text="other" />

**`Description`**

获取拖拽锚点


#### Returns

[`DragPivot`](../enums/UI.DragPivot.md)

拖拽锚点

___

### getDragVisualWidget <Score text="getDragVisualWidget" /> 

▸ **getDragVisualWidget**(): [`Widget`](UI.Widget.md) <Badge type="tip" text="other" />

**`Description`**

获取拖拽显示的UI


#### Returns

[`Widget`](UI.Widget.md)

拖拽显示的UI

___

### getOffset <Score text="getOffset" /> 

▸ **getOffset**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

**`Description`**

获取拖拽UI的百分比偏移


#### Returns

[`Vector2`](Type.Vector2.md)

百分比偏移

___

### getTag <Score text="getTag" /> 

▸ **getTag**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取Tag 标签


#### Returns

`string`

返回tag

___

### tryGetDragDropPayLoad <Score text="tryGetDragDropPayLoad" /> 

▸ **tryGetDragDropPayLoad**(): [`DragDropPayLoad`](UI.DragDropPayLoad.md) <Badge type="tip" text="other" />

**`Description`**

获取传递的数据信息


#### Returns

[`DragDropPayLoad`](UI.DragDropPayLoad.md)

数据信息

___

### tryGetDragDropPayLoadAs <Score text="tryGetDragDropPayLoadAs" /> 

▸ **tryGetDragDropPayLoadAs**<`T`\>(): `T` <Badge type="tip" text="other" />

**`Description`**

获取传递的数据信息


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DragDropPayLoad`](UI.DragDropPayLoad.md)<`T`\> |

#### Returns

`T`

数据信息
