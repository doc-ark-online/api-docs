[UI](../groups/UI.UI.md) / Widget

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

### Accessors <Score text="Accessors" /> 
| **[autoSizeEnable](mw.Widget.md#autosizeenable)**(): `boolean`  |
| :-----|
| 设置是否自动设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\>  |
| 设置控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md)  |
| 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean`  |
| 设置可用性|
| **[guid](mw.Widget.md#guid)**(): `string`  |
| 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean`  |
| 是否是hovered|
| **[name](mw.Widget.md#name)**(): `string`  |
| 设定名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md)  |
| 获取父节点|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\>  |
| 设置控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number`  |
| 设置渲染透明度 0 ~ 1|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number`  |
| 设置渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md)  |
| 设置控件的大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\>  |
| 设置控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md)  |
| 设置可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean`  |
| 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number`  |
| 设置zoder|

### Methods <Score text="Methods" /> 
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void`  |
| :-----|
| 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean`  |
| 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void`  |
| 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void`  |
| 立刻移除并添加到根节点 可以再使用|

## Accessors

### autoSizeEnable <Score text="autoSizeEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoSizeEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoSizeEnable**(`autoSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否自动设置大小


#### Returns

| `boolean` | 是否自动设置大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否自动设置大小


#### Parameters

| `autoSize` `boolean` | 是否自动设置大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### cachedGeometry <Score text="cachedGeometry" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **cachedGeometry**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取上一次的GetTickSpaceGeometry


#### Returns

| [`Geometry`](mw.Geometry.md) | 返回上一次的 GetTickSpaceGeometry |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### constraints <Score text="constraints" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **constraints**(`ininconstraints`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取控件的布局


#### Returns

| `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\> | 控件的布局 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置控件的布局


#### Parameters

| `ininconstraints` [`UIConstraintAnchors`](mw.UIConstraintAnchors.md) | 控件的布局 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### desiredSize <Score text="desiredSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **desiredSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取期望大小


#### Returns

| [`Vector2`](mw.Vector2.md) | 返回期望大小 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### enable <Score text="enable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **enable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **enable**(`isEnable`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否可用


#### Returns

| `boolean` | boolean |
| :------ | :------ |


</td>
<td style="text-align: left">


设置可用性


#### Parameters

| `isEnable` `boolean` | 可用性boolean |
| :------ | :------ |


返回设置结果


</td>
</tr></tbody>
</table>

___

### guid <Score text="guid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **guid**(): `string` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取控件GUID


#### Returns

| `string` | 控件GUID |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### isHovered <Score text="isHovered" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isHovered**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否是hovered


#### Returns

| `boolean` | boolean |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### name <Score text="name" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **name**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **name**(`name`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取名字


#### Returns

| `string` | 返回名字 |
| :------ | :------ |


</td>
<td style="text-align: left">


设定名字


#### Parameters

| `name` `string` | 名字 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### paintSpaceGeometry <Score text="paintSpaceGeometry" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **paintSpaceGeometry**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取最后一次用于渲染Widget的几何信息


#### Returns

| [`Geometry`](mw.Geometry.md) | 返回最后一次用于渲染Widget的几何信息 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### parent <Score text="parent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **parent**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取父节点


#### Returns

| [`Widget`](mw.Widget.md) | 返回父节点 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### position <Score text="position" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **position**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **position**(`inFigmaPosition`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取控件的位置


#### Returns

| `Readonly`<[`Vector2`](mw.Vector2.md)\> | 控件的位置 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置控件的位置


#### Parameters

| `inFigmaPosition` [`Vector2`](mw.Vector2.md) | 控件的位置 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### renderOpacity <Score text="renderOpacity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **renderOpacity**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **renderOpacity**(`InOpacity`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取渲染透明度


#### Returns

| `number` | 返回渲染透明度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置渲染透明度 0 ~ 1


#### Parameters

| `InOpacity` `number` | 透明度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### renderScale <Score text="renderScale" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **renderScale**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **renderScale**(`scale`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取渲染缩放


#### Returns

| [`Vector2`](mw.Vector2.md) | 返回渲染缩放 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置渲染缩放


#### Parameters

| `scale` [`Vector2`](mw.Vector2.md) | 渲染缩放 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### renderShear <Score text="renderShear" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **renderShear**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **renderShear**(`shear`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取渲染错切形变


#### Returns

| [`Vector2`](mw.Vector2.md) | 返回渲染错切形变 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置渲染错切形变


#### Parameters

| `shear` [`Vector2`](mw.Vector2.md) | 渲染错切形变 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### renderTransformAngle <Score text="renderTransformAngle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **renderTransformAngle**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **renderTransformAngle**(`o`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取渲染的角度


#### Returns

| `number` | 返回渲染角度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置渲染的角度


#### Parameters

| `o` `number` | 渲染角度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### renderTransformPivot <Score text="renderTransformPivot" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **renderTransformPivot**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **renderTransformPivot**(`Pivot`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取渲染锚点


#### Returns

| [`Vector2`](mw.Vector2.md) | 返回渲染锚点 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置渲染锚点


#### Parameters

| `Pivot` [`Vector2`](mw.Vector2.md) | 渲染锚点 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### size <Score text="size" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **size**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **size**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取大小


#### Returns

| [`Vector2`](mw.Vector2.md) | FVector2D |
| :------ | :------ |


</td>
<td style="text-align: left">


设置控件的大小


#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | 输入大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### tickSpaceGeometry <Score text="tickSpaceGeometry" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **tickSpaceGeometry**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取最后一次用于驱动Widget Tick的几何信息


#### Returns

| [`Geometry`](mw.Geometry.md) | 返回最后一次用于驱动Widget Tick的几何信息 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### transform <Score text="transform" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **transform**(): `Readonly`<[`UITransform`](mw.UITransform.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **transform**(`inTransform`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


得到控件的大小和位置


#### Returns

| `Readonly`<[`UITransform`](mw.UITransform.md)\> | 控件的大小和位置 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置控件的大小和位置


#### Parameters

| `inTransform` [`UITransform`](mw.UITransform.md) | 大小位置 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### visibility <Score text="visibility" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **visibility**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **visibility**(`Visibility`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取可见性


#### Returns

| [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 返回可见性 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置可见性


#### Parameters

| `Visibility` [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 可见性 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### visible <Score text="visible" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **visible**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否可见


#### Returns

| `boolean` | boolean |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### zOrder <Score text="zOrder" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **zOrder**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **zOrder**(`InZOrder`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取zorder


#### Returns

| `number` | zorder |
| :------ | :------ |


</td>
<td style="text-align: left">


设置zoder


#### Parameters

| `InZOrder` `number` | 值越大在越上层 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### destroyObject <Score text="destroyObject" /> 

• **destroyObject**(): `void` <Badge type="tip" text="client" />

立刻移除并销毁 不可以在使用



___

### equal <Score text="equal" /> 

• **equal**(`that`): `boolean` <Badge type="tip" text="client" />

判断是不是同一个对象

#### Parameters

| `that` [`Widget`](mw.Widget.md) | 需要比较的另外一个对象 |
| :------ | :------ |

#### Returns

| `boolean` | boolean |
| :------ | :------ |


___

### invalidateLayoutAndVolatility <Score text="invalidateLayoutAndVolatility" /> 

• **invalidateLayoutAndVolatility**(): `void` <Badge type="tip" text="client" />

立刻触发重新渲染的和排布计算



___

### removeObject <Score text="removeObject" /> 

• **removeObject**(): `void` <Badge type="tip" text="client" />

立刻移除并添加到根节点 可以再使用


