[Gui](../groups/Core.Gui.md) / DragDropOperation

# DragDropOperation <Badge type="tip" text="Class" /> <Score text="DragDropOperation" />

UI 拖拽事件

## Table of contents

| Methods |
| :-----|
| **[equal](mw.DragDropOperation.md#equal)**(`other`: [`DragDropOperation`](mw.DragDropOperation.md)): `boolean` <br> 判断是否相同|
| **[getDragPivot](mw.DragDropOperation.md#getdragpivot)**(): [`DragPivot`](../enums/mw.DragPivot.md) <br> 获取拖拽锚点|
| **[getDragVisualWidget](mw.DragDropOperation.md#getdragvisualwidget)**(): [`Widget`](mw.Widget.md) <br> 获取拖拽显示的UI|
| **[getOffset](mw.DragDropOperation.md#getoffset)**(): [`Vector2`](mw.Vector2.md) <br> 获取拖拽UI的百分比偏移|
| **[getTag](mw.DragDropOperation.md#gettag)**(): `string` <br> 获取Tag 标签|
| **[tryGetDragDropPayLoad](mw.DragDropOperation.md#trygetdragdroppayload)**(): [`DragDropPayLoad`](mw.DragDropPayLoad.md) <br> 获取传递的数据信息|
| **[tryGetDragDropPayLoadAs](mw.DragDropOperation.md#trygetdragdroppayloadas)**<`T`: extends [`DragDropPayLoad`](mw.DragDropPayLoad.md)<`T`\>\>(): `T`: extends [`DragDropPayLoad`](mw.DragDropPayLoad.md)<`T`\> <br> 获取传递的数据信息|

• `Private` **new DragDropOperation**()

## Methods

### equal <Score text="equal" /> 

• **equal**(`other`): `boolean` <Badge type="tip" text="client" />

判断是否相同


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`DragDropOperation`](mw.DragDropOperation.md) | 另一个UI拖拽事件 |

#### Returns

`boolean`

boolean

___

### getDragPivot <Score text="getDragPivot" /> 

• **getDragPivot**(): [`DragPivot`](../enums/mw.DragPivot.md) <Badge type="tip" text="client" />

获取拖拽锚点


#### Returns

[`DragPivot`](../enums/mw.DragPivot.md)

拖拽锚点

___

### getDragVisualWidget <Score text="getDragVisualWidget" /> 

• **getDragVisualWidget**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />

获取拖拽显示的UI


#### Returns

[`Widget`](mw.Widget.md)

拖拽显示的UI

___

### getOffset <Score text="getOffset" /> 

• **getOffset**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取拖拽UI的百分比偏移


#### Returns

[`Vector2`](mw.Vector2.md)

百分比偏移

___

### getTag <Score text="getTag" /> 

• **getTag**(): `string` <Badge type="tip" text="client" />

获取Tag 标签


#### Returns

`string`

返回tag

___

### tryGetDragDropPayLoad <Score text="tryGetDragDropPayLoad" /> 

• **tryGetDragDropPayLoad**(): [`DragDropPayLoad`](mw.DragDropPayLoad.md) <Badge type="tip" text="client" />

获取传递的数据信息


#### Returns

[`DragDropPayLoad`](mw.DragDropPayLoad.md)

数据信息

___

### tryGetDragDropPayLoadAs <Score text="tryGetDragDropPayLoadAs" /> 

• **tryGetDragDropPayLoadAs**<`T`\>(): `T` <Badge type="tip" text="client" />

获取传递的数据信息


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DragDropPayLoad`](mw.DragDropPayLoad.md)<`T`\> |

#### Returns

`T`

数据信息
