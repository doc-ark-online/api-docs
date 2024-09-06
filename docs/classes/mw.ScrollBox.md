[界面](../groups/界面.界面.md) / ScrollBox

# ScrollBox <Badge type="tip" text="Class" /> <Score text="ScrollBox" />

滑动框

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`ScrollBox`**

## Table of contents

### Properties <Score text="Properties" /> 


::: details click
### Properties <Score text="Properties" /> 
| **[onCustomPropertyChange](mw.Widget.md#oncustompropertychange)**: `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\> <Badge type="tip" text="client" />  |
| :-----|
| 监听自定义属性同步事件|
:::


### Accessors <Score text="Accessors" /> 
| **[allowOverscroll](mw.ScrollBox.md#allowoverscroll)**(`isAllowOverscroll`: `boolean`): `void` <Badge type="tip" text="client" />  |
| :-----|
| 设置允许滚动超过滚动框大小|
| **[alwaysShowScrollBar](mw.ScrollBox.md#alwaysshowscrollbar)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否一直显示滚动条|
| **[animationType](mw.ScrollBox.md#animationtype)**(): [`UIScrollBoxAnimationType`](../enums/mw.UIScrollBoxAnimationType.md) <Badge type="tip" text="client" />  |
| 获取动画类型|
| **[defaultLocation](mw.ScrollBox.md#defaultlocation)**(): [`ScrollBarDefaultLocation`](../enums/mw.ScrollBarDefaultLocation.md) <Badge type="tip" text="client" />  |
| 返回滚动条的默认位置(类型，非具体坐标)|
| **[elasticMultiplier](mw.ScrollBox.md#elasticmultiplier)**(): `number` <Badge type="tip" text="client" />  |
| 获取弹性系数|
| **[onScrollEnd](mw.ScrollBox.md#onscrollend)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 滚动结束事件|
| **[onUserScrolled](mw.ScrollBox.md#onuserscrolled)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\> <Badge type="tip" text="client" />  |
| 滚动事件|
| **[orientation](mw.ScrollBox.md#orientation)**(): [`Orientation`](../enums/mw.Orientation.md) <Badge type="tip" text="client" />  |
| 获取滚动方向|
| **[scrollAxisBrushDrawType](mw.ScrollBox.md#scrollaxisbrushdrawtype)**(): `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> <Badge type="tip" text="client" />  |
| 获取滚动条图片绘制类型|
| **[scrollAxisBrushGuid](mw.ScrollBox.md#scrollaxisbrushguid)**(): `string` <Badge type="tip" text="client" />  |
| 获取滚动条图片ID|
| **[scrollAxisBrushMargin](mw.ScrollBox.md#scrollaxisbrushmargin)**(): `Readonly`<[`Margin`](mw.Margin.md)\> <Badge type="tip" text="client" />  |
| 获取滚动条图片边距|
| **[scrollAxisColor](mw.ScrollBox.md#scrollaxiscolor)**(): `Readonly`<[`LinearColor`](mw.LinearColor.md)\> <Badge type="tip" text="client" />  |
| 获取滚动条图片颜色|
| **[scrollBarVisibility](mw.ScrollBox.md#scrollbarvisibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />  |
| 获取滚动条的显示于隐藏|
| **[scrollOffset](mw.ScrollBox.md#scrolloffset)**(): `number` <Badge type="tip" text="client" />  |
| 获取滚动框偏移|
| **[scrollOffsetFraction](mw.ScrollBox.md#scrolloffsetfraction)**(): `number` <Badge type="tip" text="client" />  |
| 获取滚动框距离底部的偏移比例|
| **[scrollOffsetOfEnd](mw.ScrollBox.md#scrolloffsetofend)**(): `number` <Badge type="tip" text="client" />  |
| 获取滚动框距离底部的偏移|
| **[scrollWheelMultiplier](mw.ScrollBox.md#scrollwheelmultiplier)**(`inScrollWheelMultiplier`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置鼠标滚轮系数|
| **[scrollbarPadding](mw.ScrollBox.md#scrollbarpadding)**(`inScrollbarPadding`: [`Margin`](mw.Margin.md)): `void` <Badge type="tip" text="client" />  |
| 设置滚动条边距|
| **[scrollbarThickness](mw.ScrollBox.md#scrollbarthickness)**(): `number` <Badge type="tip" text="client" />  |
| 获取滚动条粗细|
| **[shadowVisibility](mw.ScrollBox.md#shadowvisibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />  |
| 获取阴影显示|
| **[smoothScrollingEnable](mw.ScrollBox.md#smoothscrollingenable)**(`isSmoothScrolling`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑|
| **[supportElastic](mw.ScrollBox.md#supportelastic)**(): `boolean` <Badge type="tip" text="client" />  |
| 判断是否支持惯性|


::: details click
### Accessors <Score text="Accessors" /> 
| **[alignPosition](mw.Widget.md#alignposition)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />  |
| :-----|
| 获取控件的对齐位置,在对齐方式为靠右对齐、靠下对齐、中心对齐时，alignPosition的值与positon不同；|
| **[autoSizeHorizontalEnable](mw.Widget.md#autosizehorizontalenable)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否自动水平设置大小|
| **[autoSizeVerticalEnable](mw.Widget.md#autosizeverticalenable)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否自动垂直设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\> <Badge type="tip" text="client" />  |
| 获取控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否可用|
| **[guid](mw.Widget.md#guid)**(): `string` <Badge type="tip" text="client" />  |
| 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否是hovered|
| **[mouseCursor](mw.Widget.md#mousecursor)**(): [`MouseCursor`](../enums/mw.MouseCursor.md) <Badge type="tip" text="client" />  |
| 获取控件上光标类型|
| **[name](mw.Widget.md#name)**(): `string` <Badge type="tip" text="client" />  |
| 获取名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 获取父节点|
| **[pivot](mw.Widget.md#pivot)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取控件锚点位置,这个属性决定了控件图形与锚点的相对位置；(0,0)时，锚点位于控件左上角；(0.5,0.5)时，锚点位于控件正中心|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />  |
| 获取控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number` <Badge type="tip" text="client" />  |
| 获取渲染透明度|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number` <Badge type="tip" text="client" />  |
| 获取渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\> <Badge type="tip" text="client" />  |
| 得到控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />  |
| 获取可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number` <Badge type="tip" text="client" />  |
| 获取zorder|
:::


### Methods <Score text="Methods" /> 
| **[endInertialScrolling](mw.ScrollBox.md#endinertialscrolling)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 立刻停止滚动|
| **[scrollToEnd](mw.ScrollBox.md#scrolltoend)**(): `void` <Badge type="tip" text="client" />  |
| 滚动到底部|
| **[scrollToStart](mw.ScrollBox.md#scrolltostart)**(): `void` <Badge type="tip" text="client" />  |
| 滚动到开始位置|
| **[newObject](mw.ScrollBox.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`ScrollBox`](mw.ScrollBox.md) <Badge type="tip" text="client" />  |
| 创建 ScrollBox 控件|


::: details click
### Methods <Score text="Methods" /> 
| **[addChild](mw.Widget.md#addchild)**(`child`: [`Widget`](mw.Widget.md)): `void` <Badge type="tip" text="client" />  |
| :-----|
| 添加子节点|
| **[clone](mw.Widget.md#clone)**(`position`: [`Vector2`](mw.Vector2.md), `Parent?`: `any`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 克隆UI控件及其子节点到指定父控件位置（默认到其父节点）|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <Badge type="tip" text="client" />  |
| 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <Badge type="tip" text="client" />  |
| 判断是不是同一个对象|
| **[findChildByPath](mw.Widget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 通过相对路径查找节点|
| **[getChildAt](mw.Widget.md#getchildat)**(`index`: `number`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 获取第几位子节点|
| **[getChildByName](mw.Widget.md#getchildbyname)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`name`: `string`): `T`: extends [`Widget`](mw.Widget.md)<`T`\> <Badge type="tip" text="client" />  |
| 通过名字查找节点|
| **[getChildrenCount](mw.Widget.md#getchildrencount)**(): `number` <Badge type="tip" text="client" />  |
| 获取子节点数量|
| **[getCustomProperties](mw.Widget.md#getcustomproperties)**(): `string`[] <Badge type="tip" text="client" />  |
| 获取所有自定义属性|
| **[getCustomProperty](mw.Widget.md#getcustomproperty)**<`T`: extends [`CustomPropertyType`](../modules/Core.mw.md#custompropertytype)\>(`propertyName`: `string`): `T`: extends [`CustomPropertyType`](../modules/Core.mw.md#custompropertytype) <Badge type="tip" text="client" />  |
| 获取自定义属性|
| **[getCustomPropertyChangeDelegate](mw.Widget.md#getcustompropertychangedelegate)**(`property`): `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\> <Badge type="tip" text="client" />  |
| 给定对象属性修改时触发的事件代理|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <Badge type="tip" text="client" />  |
| 立刻触发重新渲染的和排布计算|
| **[removeAllChildren](mw.Widget.md#removeallchildren)**(): `void` <Badge type="tip" text="client" />  |
| 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](mw.Widget.md#removechild)**(`child`: [`Widget`](mw.Widget.md)): `void` <Badge type="tip" text="client" />  |
| 移除节点,会销毁UI无法在使用|
| **[removeChildAt](mw.Widget.md#removechildat)**(`index`: `number`): `void` <Badge type="tip" text="client" />  |
| 移除第几个节点,会销毁UI无法再使用|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <Badge type="tip" text="client" />  |
| 立刻移除并添加到根节点 可以再使用|
| **[serialize](mw.Widget.md#serialize)**(): `string` <Badge type="tip" text="client" />  |
| 序列化UI控件|
| **[setCustomProperty](mw.Widget.md#setcustomproperty)**(`propertyName`: `string`, `value`: `undefined`  [`CustomPropertyType`](../modules/Core.mw.md#custompropertytype)): `void` <Badge type="tip" text="client" />  |
| 设置自定义属性|
| **[deserialize](mw.Widget.md#deserialize)**(`Data`: `string`, `Parent?`: [`Widget`](mw.Widget.md)): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 反序列化UI|
:::


## Properties

## Accessors

___

### allowOverscroll <Score text="allowOverscroll" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **allowOverscroll**(`isAllowOverscroll`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置允许滚动超过滚动框大小

#### Parameters

| `isAllowOverscroll` `boolean` | 允许滚动超过滚动框大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### alwaysShowScrollBar <Score text="alwaysShowScrollBar" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **alwaysShowScrollBar**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **alwaysShowScrollBar**(`isScrollBarAlwaysShown`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否一直显示滚动条

#### Returns

| `boolean` | 是否一直显示滚动条 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否一直显示滚动条

#### Parameters

| `isScrollBarAlwaysShown` `boolean` | 是否一直显示滚动条 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### animationType <Score text="animationType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **animationType**(): [`UIScrollBoxAnimationType`](../enums/mw.UIScrollBoxAnimationType.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **animationType**(`inAnimationType`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取动画类型

#### Returns

| [`UIScrollBoxAnimationType`](../enums/mw.UIScrollBoxAnimationType.md) | 动画类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设定动画类型

#### Parameters

| `inAnimationType` [`UIScrollBoxAnimationType`](../enums/mw.UIScrollBoxAnimationType.md) | 类型 |
| :------ | :------ |


动画类型


</td>
</tr></tbody>
</table>

___

### defaultLocation <Score text="defaultLocation" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **defaultLocation**(): [`ScrollBarDefaultLocation`](../enums/mw.ScrollBarDefaultLocation.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **defaultLocation**(`NewDefaultLocation`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回滚动条的默认位置(类型，非具体坐标)

::: warning Precautions

没有操作滚动条的情况下滚动条的默认位置

:::

#### Returns

| [`ScrollBarDefaultLocation`](../enums/mw.ScrollBarDefaultLocation.md) | 返回滚动条的默认位置(类型，非具体坐标) |
| :------ | :------ |


</td>
<td style="text-align: left">


设置滚动条的默认位置(类型，非具体坐标)

::: warning Precautions

没有操作滚动条的情况下滚动条的默认位置

:::

#### Parameters

| `NewDefaultLocation` [`ScrollBarDefaultLocation`](../enums/mw.ScrollBarDefaultLocation.md) | 滚动条默认位置(类型，非具体坐标) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### elasticMultiplier <Score text="elasticMultiplier" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **elasticMultiplier**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **elasticMultiplier**(`inElasticMultiplier`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取弹性系数

#### Returns

| `number` | 弹性系数 |
| :------ | :------ |


</td>
<td style="text-align: left">


设定弹性系数

#### Parameters

| `inElasticMultiplier` `number` | 系数 |
| :------ | :------ |


弹性系数


</td>
</tr></tbody>
</table>

___

### onScrollEnd <Score text="onScrollEnd" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onScrollEnd**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


滚动结束事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 滚动结束事件 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onUserScrolled <Score text="onUserScrolled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onUserScrolled**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


滚动事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\> | 滚动事件 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### orientation <Score text="orientation" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **orientation**(): [`Orientation`](../enums/mw.Orientation.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **orientation**(`inOrientation`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动方向

#### Returns

| [`Orientation`](../enums/mw.Orientation.md) | 滚动方向 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置滚动方向

#### Parameters

| `inOrientation` [`Orientation`](../enums/mw.Orientation.md) | 方向 |
| :------ | :------ |


滚动方向


</td>
</tr></tbody>
</table>

___

### scrollAxisBrushDrawType <Score text="scrollAxisBrushDrawType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollAxisBrushDrawType**(): `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scrollAxisBrushDrawType**(`InDrawAs`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动条图片绘制类型

#### Returns

| `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> | 图片绘制类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置图片绘制类型

#### Parameters

| `InDrawAs` [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 图片绘制类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollAxisBrushGuid <Score text="scrollAxisBrushGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollAxisBrushGuid**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scrollAxisBrushGuid**(`InGUID`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动条图片ID

#### Returns

| `string` | 滚动条图片ID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置滚动条图片ID

#### Parameters

| `InGUID` `string` | 图片ID |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollAxisBrushMargin <Score text="scrollAxisBrushMargin" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollAxisBrushMargin**(): `Readonly`<[`Margin`](mw.Margin.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scrollAxisBrushMargin**(`InMargin`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动条图片边距

#### Returns

| `Readonly`<[`Margin`](mw.Margin.md)\> | 滚动条图片边距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置滚动条图片边距

#### Parameters

| `InMargin` [`Margin`](mw.Margin.md) | 滚动条图片边距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollAxisColor <Score text="scrollAxisColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollAxisColor**(): `Readonly`<[`LinearColor`](mw.LinearColor.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scrollAxisColor**(`InColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动条图片颜色

#### Returns

| `Readonly`<[`LinearColor`](mw.LinearColor.md)\> | 滚动条图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置滚动条图片颜色

#### Parameters

| `InColor` [`LinearColor`](mw.LinearColor.md) | 滚动条图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollBarVisibility <Score text="scrollBarVisibility" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollBarVisibility**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scrollBarVisibility**(`inScrollBarVisibility`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动条的显示于隐藏

#### Returns

| [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 滚动条的显示于隐藏 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置滚动条是否可见,必须是在SetAlwaysShowScrollbar 为false才生效

#### Parameters

| `inScrollBarVisibility` [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 滚动条是否可见 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollOffset <Score text="scrollOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollOffset**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scrollOffset**(`inScrollOffset`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动框偏移

#### Returns

| `number` | 滚动框偏移 |
| :------ | :------ |


</td>
<td style="text-align: left">


设定滚动框滚动偏移

#### Parameters

| `inScrollOffset` `number` | 滚动偏移 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollOffsetFraction <Score text="scrollOffsetFraction" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollOffsetFraction**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动框距离底部的偏移比例

#### Returns

| `number` | 滚动框偏移比例 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### scrollOffsetOfEnd <Score text="scrollOffsetOfEnd" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollOffsetOfEnd**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动框距离底部的偏移

#### Returns

| `number` | 滚动框偏移 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### scrollWheelMultiplier <Score text="scrollWheelMultiplier" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **scrollWheelMultiplier**(`inScrollWheelMultiplier`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置鼠标滚轮系数

#### Parameters

| `inScrollWheelMultiplier` `number` | 系数 |
| :------ | :------ |


鼠标滚轮系数


</td>
</tr></tbody>
</table>

___

### scrollbarPadding <Score text="scrollbarPadding" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **scrollbarPadding**(`inScrollbarPadding`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置滚动条边距

#### Parameters

| `inScrollbarPadding` [`Margin`](mw.Margin.md) | 滚动条边距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollbarThickness <Score text="scrollbarThickness" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollbarThickness**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scrollbarThickness**(`inScrollbarThickness`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取滚动条粗细

#### Returns

| `number` | 滚动条粗细 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置滚动条粗细

#### Parameters

| `inScrollbarThickness` `number` | 滚动条粗细 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### shadowVisibility <Score text="shadowVisibility" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **shadowVisibility**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **shadowVisibility**(`inVisibility`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取阴影显示

#### Returns

| [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 阴影显示 |
| :------ | :------ |


</td>
<td style="text-align: left">


设定阴影显示

#### Parameters

| `inVisibility` [`SlateVisibility`](../enums/mw.SlateVisibility.md) |  阴影显示 |
| :------ | :------ |


阴影显示


</td>
</tr></tbody>
</table>

___

### smoothScrollingEnable <Score text="smoothScrollingEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **smoothScrollingEnable**(`isSmoothScrolling`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑

#### Parameters

| `isSmoothScrolling` `boolean` | 鼠标滚动时，滚动速度是否插值运算 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### supportElastic <Score text="supportElastic" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **supportElastic**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **supportElastic**(`inSupportElastic`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


判断是否支持惯性

#### Returns

| `boolean` | 是否支持惯性 |
| :------ | :------ |


</td>
<td style="text-align: left">


设定是否支持惯性

#### Parameters

| `inSupportElastic` `boolean` | 惯性 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

是否支持惯性

## Methods

___

### endInertialScrolling <Score text="endInertialScrolling" /> 

• **endInertialScrolling**(): `void` <Badge type="tip" text="client" />

立刻停止滚动


___

### scrollToEnd <Score text="scrollToEnd" /> 

• **scrollToEnd**(): `void` <Badge type="tip" text="client" />

滚动到底部


___

### scrollToStart <Score text="scrollToStart" /> 

• **scrollToStart**(): `void` <Badge type="tip" text="client" />

滚动到开始位置


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`ScrollBox`](mw.ScrollBox.md) <Badge type="tip" text="client" />

创建 ScrollBox 控件

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| :------ | :------ |
| `inName?` `string` | 创建控件的名称 default:null range:设置合理的名称即可 |

#### Returns

| [`ScrollBox`](mw.ScrollBox.md) | 创建的对象 |
| :------ | :------ |

当parent和inName与已有的对象相同时，旧的对象会被销毁
