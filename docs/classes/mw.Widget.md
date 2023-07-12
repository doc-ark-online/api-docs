[UI](../groups/Core.UI.md) / Widget

# Widget <Badge type="tip" text="Class" /> <Score text="Widget" />

可挂载叶子节点的根节点，以及提供各种自动布局功能

## Hierarchy

- **`Widget`**

  ↳ [`ColorPick`](mw.ColorPick.md)

  ↳ [`Image`](mw.Image.md)

  ↳ [`InputBox`](mw.InputBox.md)

  ↳ [`MaskButton`](mw.MaskButton.md)

  ↳ [`PanelWidget`](mw.PanelWidget.md)

  ↳ [`ProgressBar`](mw.ProgressBar.md)

  ↳ [`StaleButton`](mw.StaleButton.md)

  ↳ [`TextBlock`](mw.TextBlock.md)

  ↳ [`TouchPad`](mw.TouchPad.md)

  ↳ [`UserWidget`](mw.UserWidget.md)

  ↳ [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md)

## Table of contents

| Accessors |
| :-----|
| **[autoSizeEnable](mw.Widget.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md) <br> 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\> <br> 获取控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md) <br> 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean` <br> 是否可用|
| **[guid](mw.Widget.md#guid)**(): `string` <br> 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean` <br> 是否是hovered|
| **[name](mw.Widget.md#name)**(): `string` <br> 获取名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md) <br> 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md) <br> 获取父节点|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <br> 获取控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number` <br> 获取渲染透明度|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md) <br> 获取渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md) <br> 获取渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number` <br> 获取渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md) <br> 获取渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md) <br> 获取大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <br> 获取可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number` <br> 获取zorder|

| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|

## Accessors

### autoSizeEnable <Score text="autoSizeEnable" /> 

• `get` **autoSizeEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否自动设置大小


#### Returns

`boolean`

是否自动设置大小

• `set` **autoSizeEnable**(`autoSize`): `void` <Badge type="tip" text="client" />

设置是否自动设置大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoSize` | `boolean` | 是否自动设置大小 |


___

### cachedGeometry <Score text="cachedGeometry" /> 

• `get` **cachedGeometry**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />

获取上一次的GetTickSpaceGeometry


#### Returns

[`Geometry`](mw.Geometry.md)

返回上一次的 GetTickSpaceGeometry

___

### constraints <Score text="constraints" /> 

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\> <Badge type="tip" text="client" />

获取控件的布局


#### Returns

`Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\>

控件的布局

• `set` **constraints**(`ininconstraints`): `void` <Badge type="tip" text="client" />

设置控件的布局


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ininconstraints` | [`UIConstraintAnchors`](mw.UIConstraintAnchors.md) | 控件的布局 |


___

### desiredSize <Score text="desiredSize" /> 

• `get` **desiredSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取期望大小


#### Returns

[`Vector2`](mw.Vector2.md)

返回期望大小

___

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean` <Badge type="tip" text="client" />

是否可用


#### Returns

`boolean`

boolean

• `set` **enable**(`isEnable`): `void` <Badge type="tip" text="client" />

设置可用性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnable` | `boolean` | 可用性boolean |


返回设置结果

___

### guid <Score text="guid" /> 

• `get` **guid**(): `string` <Badge type="tip" text="client" />

获取控件GUID


#### Returns

`string`

控件GUID

___

### isHovered <Score text="isHovered" /> 

• `get` **isHovered**(): `boolean` <Badge type="tip" text="client" />

是否是hovered


#### Returns

`boolean`

boolean

___

### name <Score text="name" /> 

• `get` **name**(): `string` <Badge type="tip" text="client" />

获取名字


#### Returns

`string`

返回名字

• `set` **name**(`name`): `void` <Badge type="tip" text="client" />

设定名字


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |


___

### paintSpaceGeometry <Score text="paintSpaceGeometry" /> 

• `get` **paintSpaceGeometry**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />

获取最后一次用于渲染Widget的几何信息


#### Returns

[`Geometry`](mw.Geometry.md)

返回最后一次用于渲染Widget的几何信息

___

### parent <Score text="parent" /> 

• `get` **parent**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />

获取父节点


#### Returns

[`Widget`](mw.Widget.md)

返回父节点

___

### position <Score text="position" /> 

• `get` **position**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />

获取控件的位置


#### Returns

`Readonly`<[`Vector2`](mw.Vector2.md)\>

控件的位置

• `set` **position**(`inFigmaPosition`): `void` <Badge type="tip" text="client" />

设置控件的位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFigmaPosition` | [`Vector2`](mw.Vector2.md) | 控件的位置 |


___

### renderOpacity <Score text="renderOpacity" /> 

• `get` **renderOpacity**(): `number` <Badge type="tip" text="client" />

获取渲染透明度


#### Returns

`number`

返回渲染透明度

• `set` **renderOpacity**(`InOpacity`): `void` <Badge type="tip" text="client" />

设置渲染透明度 0 ~ 1


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOpacity` | `number` | 透明度 |


___

### renderScale <Score text="renderScale" /> 

• `get` **renderScale**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取渲染缩放


#### Returns

[`Vector2`](mw.Vector2.md)

返回渲染缩放

• `set` **renderScale**(`scale`): `void` <Badge type="tip" text="client" />

设置渲染缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector2`](mw.Vector2.md) | 渲染缩放 |


___

### renderShear <Score text="renderShear" /> 

• `get` **renderShear**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取渲染错切形变


#### Returns

[`Vector2`](mw.Vector2.md)

返回渲染错切形变

• `set` **renderShear**(`shear`): `void` <Badge type="tip" text="client" />

设置渲染错切形变


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shear` | [`Vector2`](mw.Vector2.md) | 渲染错切形变 |


___

### renderTransformAngle <Score text="renderTransformAngle" /> 

• `get` **renderTransformAngle**(): `number` <Badge type="tip" text="client" />

获取渲染的角度


#### Returns

`number`

返回渲染角度

• `set` **renderTransformAngle**(`o`): `void` <Badge type="tip" text="client" />

设置渲染的角度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `number` | 渲染角度 |


___

### renderTransformPivot <Score text="renderTransformPivot" /> 

• `get` **renderTransformPivot**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取渲染锚点


#### Returns

[`Vector2`](mw.Vector2.md)

返回渲染锚点

• `set` **renderTransformPivot**(`Pivot`): `void` <Badge type="tip" text="client" />

设置渲染锚点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pivot` | [`Vector2`](mw.Vector2.md) | 渲染锚点 |


___

### size <Score text="size" /> 

• `get` **size**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取大小


#### Returns

[`Vector2`](mw.Vector2.md)

FVector2D

• `set` **size**(`inSize`): `void` <Badge type="tip" text="client" />

设置控件的大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 输入大小 |


___

### tickSpaceGeometry <Score text="tickSpaceGeometry" /> 

• `get` **tickSpaceGeometry**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />

获取最后一次用于驱动Widget Tick的几何信息


#### Returns

[`Geometry`](mw.Geometry.md)

返回最后一次用于驱动Widget Tick的几何信息

___

### transform <Score text="transform" /> 

• `get` **transform**(): `Readonly`<[`UITransform`](mw.UITransform.md)\> <Badge type="tip" text="client" />

得到控件的大小和位置


#### Returns

`Readonly`<[`UITransform`](mw.UITransform.md)\>

控件的大小和位置

• `set` **transform**(`inTransform`): `void` <Badge type="tip" text="client" />

设置控件的大小和位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTransform` | [`UITransform`](mw.UITransform.md) | 大小位置 |


___

### visibility <Score text="visibility" /> 

• `get` **visibility**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />

获取可见性


#### Returns

[`SlateVisibility`](../enums/mw.SlateVisibility.md)

返回可见性

• `set` **visibility**(`Visibility`): `void` <Badge type="tip" text="client" />

设置可见性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 可见性 |


___

### visible <Score text="visible" /> 

• `get` **visible**(): `boolean` <Badge type="tip" text="client" />

是否可见


#### Returns

`boolean`

boolean

___

### zOrder <Score text="zOrder" /> 

• `get` **zOrder**(): `number` <Badge type="tip" text="client" />

获取zorder


#### Returns

`number`

zorder

• `set` **zOrder**(`InZOrder`): `void` <Badge type="tip" text="client" />

设置zoder


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InZOrder` | `number` | 值越大在越上层 |


## Methods

### destroyObject <Score text="destroyObject" /> 

• **destroyObject**(): `void` <Badge type="tip" text="client" />

立刻移除并销毁 不可以在使用



___

### equal <Score text="equal" /> 

• **equal**(`that`): `boolean` <Badge type="tip" text="client" />

判断是不是同一个对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | [`Widget`](mw.Widget.md) | 需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

___

### invalidateLayoutAndVolatility <Score text="invalidateLayoutAndVolatility" /> 

• **invalidateLayoutAndVolatility**(): `void` <Badge type="tip" text="client" />

立刻触发重新渲染的和排布计算



___

### removeObject <Score text="removeObject" /> 

• **removeObject**(): `void` <Badge type="tip" text="client" />

立刻移除并添加到根节点 可以再使用


