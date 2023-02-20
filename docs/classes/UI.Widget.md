[UI](../modules/UI.UI.md) / Widget

# Widget <Badge type="tip" text="Class" /> <Score text="Widget" />

**`Groups`**

GUI

可挂载叶子节点的根节点，以及提供各种自动布局功能

## Hierarchy

- **`Widget`**

  ↳ [`ColorPick`](UI.ColorPick.md)

  ↳ [`Image`](UI.Image.md)

  ↳ [`InputBox`](UI.InputBox.md)

  ↳ [`MaskButton`](UI.MaskButton.md)

  ↳ [`PanelWidget`](UI.PanelWidget.md)

  ↳ [`ProgressBar`](UI.ProgressBar.md)

  ↳ [`StaleButton`](UI.StaleButton.md)

  ↳ [`TextBlock`](UI.TextBlock.md)

  ↳ [`TouchPad`](UI.TouchPad.md)

  ↳ [`UserWidget`](UI.UserWidget.md)

  ↳ [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md)

## Table of contents

| Accessors |
| :-----|
| **[autoSizeEnable](UI.Widget.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小|
| **[cachedGeometry](UI.Widget.md#cachedgeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取上一次的GetTickSpaceGeometry|
| **[constraints](UI.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UIConstraintAnchors.md)\> <br> 获取控件的布局|
| **[desiredSize](UI.Widget.md#desiredsize)**(): [`Vector2`](Type.Vector2.md) <br> 获取期望大小|
| **[enable](UI.Widget.md#enable)**(): `boolean` <br> 是否可用|
| **[guid](UI.Widget.md#guid)**(): `string` <br> 获取控件GUID|
| **[isHovered](UI.Widget.md#ishovered)**(): `boolean` <br> 是否是hovered|
| **[name](UI.Widget.md#name)**(): `string` <br> 获取名字|
| **[paintSpaceGeometry](UI.Widget.md#paintspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于渲染Widget的几何信息|
| **[parent](UI.Widget.md#parent)**(): [`Widget`](UI.Widget.md) <br> 获取父节点|
| **[position](UI.Widget.md#position)**(): `Readonly`<[`Vector2`](Type.Vector2.md)\> <br> 获取控件的位置|
| **[renderOpacity](UI.Widget.md#renderopacity)**(): `number` <br> 获取渲染透明度|
| **[renderScale](UI.Widget.md#renderscale)**(): [`Vector2`](Type.Vector2.md) <br> 获取渲染缩放|
| **[renderShear](UI.Widget.md#rendershear)**(): [`Vector2`](Type.Vector2.md) <br> 获取渲染错切形变|
| **[renderTransformAngle](UI.Widget.md#rendertransformangle)**(): `number` <br> 获取渲染的角度|
| **[renderTransformPivot](UI.Widget.md#rendertransformpivot)**(): [`Vector2`](Type.Vector2.md) <br> 获取渲染锚点|
| **[size](UI.Widget.md#size)**(): [`Vector2`](Type.Vector2.md) <br> 获取大小|
| **[slot](UI.Widget.md#slot)**(): [`UISlot`](UI.UISlot.md) <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|

| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**([`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](UI.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|

## Accessors

### autoSizeEnable <Score text="autoSizeEnable" /> 

• `get` **autoSizeEnable**(): `boolean` <Badge type="tip" text="other" />

获取是否自动设置大小


#### Returns

`boolean`

是否自动设置大小

• `set` **autoSizeEnable**(`autoSize`): `void` <Badge type="tip" text="other" />

设置是否自动设置大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoSize` | `boolean` | 是否自动设置大小 |


___

### cachedGeometry <Score text="cachedGeometry" /> 

• `get` **cachedGeometry**(): [`Geometry`](UI.Geometry.md) <Badge type="tip" text="other" />

获取上一次的GetTickSpaceGeometry


#### Returns

[`Geometry`](UI.Geometry.md)

返回上一次的 GetTickSpaceGeometry

___

### constraints <Score text="constraints" /> 

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](UI.UIConstraintAnchors.md)\> <Badge type="tip" text="other" />

获取控件的布局


#### Returns

`Readonly`<[`UIConstraintAnchors`](UI.UIConstraintAnchors.md)\>

控件的布局

• `set` **constraints**(`ininconstraints`): `void` <Badge type="tip" text="other" />

设置控件的布局


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UIConstraintAnchors.md) | 控件的布局 |


___

### desiredSize <Score text="desiredSize" /> 

• `get` **desiredSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取期望大小


#### Returns

[`Vector2`](Type.Vector2.md)

返回期望大小

___

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean` <Badge type="tip" text="other" />

是否可用


#### Returns

`boolean`

boolean

• `set` **enable**(`isEnable`): `void` <Badge type="tip" text="other" />

设置可用性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnable` | `boolean` | 可用性boolean |


返回设置结果

___

### guid <Score text="guid" /> 

• `get` **guid**(): `string` <Badge type="tip" text="other" />

获取控件GUID


#### Returns

`string`

控件GUID

___

### isHovered <Score text="isHovered" /> 

• `get` **isHovered**(): `boolean` <Badge type="tip" text="other" />

是否是hovered


#### Returns

`boolean`

boolean

___

### name <Score text="name" /> 

• `get` **name**(): `string` <Badge type="tip" text="other" />

获取名字


#### Returns

`string`

返回名字

• `set` **name**(`name`): `void` <Badge type="tip" text="other" />

设定名字


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |


___

### paintSpaceGeometry <Score text="paintSpaceGeometry" /> 

• `get` **paintSpaceGeometry**(): [`Geometry`](UI.Geometry.md) <Badge type="tip" text="other" />

获取最后一次用于渲染Widget的几何信息


#### Returns

[`Geometry`](UI.Geometry.md)

返回最后一次用于渲染Widget的几何信息

___

### parent <Score text="parent" /> 

• `get` **parent**(): [`Widget`](UI.Widget.md) <Badge type="tip" text="other" />

获取父节点


#### Returns

[`Widget`](UI.Widget.md)

返回父节点

___

### position <Score text="position" /> 

• `get` **position**(): `Readonly`<[`Vector2`](Type.Vector2.md)\> <Badge type="tip" text="other" />

获取控件的位置


#### Returns

`Readonly`<[`Vector2`](Type.Vector2.md)\>

控件的位置

• `set` **position**(`inFigmaPosition`): `void` <Badge type="tip" text="other" />

设置控件的位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFigmaPosition` | [`Vector2`](Type.Vector2.md) | 控件的位置 |


___

### renderOpacity <Score text="renderOpacity" /> 

• `get` **renderOpacity**(): `number` <Badge type="tip" text="other" />

获取渲染透明度


#### Returns

`number`

返回渲染透明度

• `set` **renderOpacity**(`InOpacity`): `void` <Badge type="tip" text="other" />

设置渲染透明度 0 ~ 1


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOpacity` | `number` | 透明度 |


___

### renderScale <Score text="renderScale" /> 

• `get` **renderScale**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取渲染缩放


#### Returns

[`Vector2`](Type.Vector2.md)

返回渲染缩放

• `set` **renderScale**(`scale`): `void` <Badge type="tip" text="other" />

设置渲染缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector2`](Type.Vector2.md) | 渲染缩放 |


___

### renderShear <Score text="renderShear" /> 

• `get` **renderShear**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取渲染错切形变


#### Returns

[`Vector2`](Type.Vector2.md)

返回渲染错切形变

• `set` **renderShear**(`shear`): `void` <Badge type="tip" text="other" />

设置渲染错切形变


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shear` | [`Vector2`](Type.Vector2.md) | 渲染错切形变 |


___

### renderTransformAngle <Score text="renderTransformAngle" /> 

• `get` **renderTransformAngle**(): `number` <Badge type="tip" text="other" />

获取渲染的角度


#### Returns

`number`

返回渲染角度

• `set` **renderTransformAngle**(`o`): `void` <Badge type="tip" text="other" />

设置渲染的角度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `number` | 渲染角度 |


___

### renderTransformPivot <Score text="renderTransformPivot" /> 

• `get` **renderTransformPivot**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取渲染锚点


#### Returns

[`Vector2`](Type.Vector2.md)

返回渲染锚点

• `set` **renderTransformPivot**(`Pivot`): `void` <Badge type="tip" text="other" />

设置渲染锚点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pivot` | [`Vector2`](Type.Vector2.md) | 渲染锚点 |


___

### size <Score text="size" /> 

• `get` **size**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取大小


#### Returns

[`Vector2`](Type.Vector2.md)

FVector2D

• `set` **size**(`inSize`): `void` <Badge type="tip" text="other" />

设置控件的大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 输入大小 |


___

### slot <Score text="slot" /> 

• `get` **slot**(): [`UISlot`](UI.UISlot.md) <Badge type="tip" text="other" />

**`Deprecated`**

since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

获取插槽


#### Returns

[`UISlot`](UI.UISlot.md)

返回插槽

___

### tickSpaceGeometry <Score text="tickSpaceGeometry" /> 

• `get` **tickSpaceGeometry**(): [`Geometry`](UI.Geometry.md) <Badge type="tip" text="other" />

获取最后一次用于驱动Widget Tick的几何信息


#### Returns

[`Geometry`](UI.Geometry.md)

返回最后一次用于驱动Widget Tick的几何信息

___

### transform <Score text="transform" /> 

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <Badge type="tip" text="other" />

得到控件的大小和位置


#### Returns

`Readonly`<[`UITransform`](UI.UITransform.md)\>

控件的大小和位置

• `set` **transform**(`inTransform`): `void` <Badge type="tip" text="other" />

设置控件的大小和位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTransform` | [`UITransform`](UI.UITransform.md) | 大小位置 |


___

### visibility <Score text="visibility" /> 

• `get` **visibility**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <Badge type="tip" text="other" />

获取可见性


#### Returns

[`SlateVisibility`](../enums/UI.SlateVisibility.md)

返回可见性

• `set` **visibility**(`Visibility`): `void` <Badge type="tip" text="other" />

设置可见性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/UI.SlateVisibility.md) | 可见性 |


___

### visible <Score text="visible" /> 

• `get` **visible**(): `boolean` <Badge type="tip" text="other" />

是否可见


#### Returns

`boolean`

boolean

___

### zOrder <Score text="zOrder" /> 

• `get` **zOrder**(): `number` <Badge type="tip" text="other" />

获取zorder


#### Returns

`number`

zorder

• `set` **zOrder**(`InZOrder`): `void` <Badge type="tip" text="other" />

设置zoder


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InZOrder` | `number` | 值越大在越上层 |


## Methods

### destroyObject <Score text="destroyObject" /> 

• **destroyObject**(): `void` <Badge type="tip" text="other" />

立刻移除并销毁 不可以在使用



___

### equal <Score text="equal" /> 

• **equal**(`that`): `boolean` <Badge type="tip" text="other" />

判断是不是同一个对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | [`Widget`](UI.Widget.md) | 需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

___

### invalidateLayoutAndVolatility <Score text="invalidateLayoutAndVolatility" /> 

• **invalidateLayoutAndVolatility**(): `void` <Badge type="tip" text="other" />

立刻触发重新渲染的和排布计算



___

### removeObject <Score text="removeObject" /> 

• **removeObject**(): `void` <Badge type="tip" text="other" />

立刻移除并添加到根节点 可以再使用


