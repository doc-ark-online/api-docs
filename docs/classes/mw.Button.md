[界面](../groups/界面.界面.md) / Button

# Button <Badge type="tip" text="Class" /> <Score text="Button" />

按钮

-------------------------

无默认文本

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`Button`**

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[clickMethod](mw.Button.md#clickmethod)**(`inClickMethod`: [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md)): `void` <Badge type="tip" text="client" />  |
| :-----|
| 设置点击模式|
| **[disableImageColor](mw.Button.md#disableimagecolor)**(): `Readonly`<[`LinearColor`](mw.LinearColor.md)\> <Badge type="tip" text="client" />  |
| 获取禁用图片颜色|
| **[disableImageDrawType](mw.Button.md#disableimagedrawtype)**(): `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> <Badge type="tip" text="client" />  |
| 获取禁用图片绘制类型|
| **[disableImageGuid](mw.Button.md#disableimageguid)**(): `string` <Badge type="tip" text="client" />  |
| 获取禁用图片ID|
| **[disableImageInfo](mw.Button.md#disableimageinfo)**(): [`ImageInfo`](mw.ImageInfo.md) <Badge type="tip" text="client" />  |
| 获取按钮Disable图片的ImageInfo|
| **[disableImageMargin](mw.Button.md#disableimagemargin)**(): `Readonly`<[`Margin`](mw.Margin.md)\> <Badge type="tip" text="client" />  |
| 获取禁用图片边距|
| **[disableImageSize](mw.Button.md#disableimagesize)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />  |
| 获取禁用图片大小|
| **[focusable](mw.Button.md#focusable)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否获取输入焦点|
| **[normalImageColor](mw.Button.md#normalimagecolor)**(): `Readonly`<[`LinearColor`](mw.LinearColor.md)\> <Badge type="tip" text="client" />  |
| 获取普通图片颜色|
| **[normalImageDrawType](mw.Button.md#normalimagedrawtype)**(): `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> <Badge type="tip" text="client" />  |
| 获取普通图片绘制类型|
| **[normalImageGuid](mw.Button.md#normalimageguid)**(): `string` <Badge type="tip" text="client" />  |
| 获取普通图片ID|
| **[normalImageInfo](mw.Button.md#normalimageinfo)**(): [`ImageInfo`](mw.ImageInfo.md) <Badge type="tip" text="client" />  |
| 获取按钮normal图片的ImageInfo|
| **[normalImageMargin](mw.Button.md#normalimagemargin)**(): `Readonly`<[`Margin`](mw.Margin.md)\> <Badge type="tip" text="client" />  |
| 获取普通图片边距|
| **[normalImageSize](mw.Button.md#normalimagesize)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />  |
| 获取图片大小|
| **[onAssetDragEnter](mw.Button.md#onassetdragenter)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`assetGUID`: `string`) => `void`\> |
| **[onAssetDragLeave](mw.Button.md#onassetdragleave)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> |
| **[onClicked](mw.Button.md#onclicked)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 点击事件|
| **[onHovered](mw.Button.md#onhovered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 悬浮事件|
| **[onPressed](mw.Button.md#onpressed)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 按下事件|
| **[onReleased](mw.Button.md#onreleased)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 释放事件|
| **[onUnhovered](mw.Button.md#onunhovered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 未悬浮事件|
| **[pressedImageColor](mw.Button.md#pressedimagecolor)**(): `Readonly`<[`LinearColor`](mw.LinearColor.md)\> <Badge type="tip" text="client" />  |
| 获取按压图片颜色|
| **[pressedImageDrawType](mw.Button.md#pressedimagedrawtype)**(): `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> <Badge type="tip" text="client" />  |
| 获取按压图片绘制类型|
| **[pressedImageGuid](mw.Button.md#pressedimageguid)**(): `string` <Badge type="tip" text="client" />  |
| 获取按下图片ID|
| **[pressedImageInfo](mw.Button.md#pressedimageinfo)**(): [`ImageInfo`](mw.ImageInfo.md) <Badge type="tip" text="client" />  |
| 获取按钮Pressed图片的ImageInfo|
| **[pressedImageMargin](mw.Button.md#pressedimagemargin)**(): `Readonly`<[`Margin`](mw.Margin.md)\> <Badge type="tip" text="client" />  |
| 获取按压图片边距|
| **[pressedImageSize](mw.Button.md#pressedimagesize)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />  |
| 获取按压图片大小|
| **[pressedMethod](mw.Button.md#pressedmethod)**(`inPressedMethod`: [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md)): `void` <Badge type="tip" text="client" />  |
| 设置按压模式|
| **[touchMethod](mw.Button.md#touchmethod)**(`inTouchMethod`: [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md)): `void` <Badge type="tip" text="client" />  |
| 设置触摸模式|
| **[transitionEnable](mw.Button.md#transitionenable)**(): `boolean` <Badge type="tip" text="client" />  |
| 按钮是否启用过度模式,按下是否有效果|


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
| **[addKey](mw.Button.md#addkey)**(`key`: [`Keys`](../enums/mw.Keys.md)): `void` <Badge type="tip" text="client" />  |
| :-----|
| 同一按键同时只能操控一个UI控件，最新绑定的UI控件会覆盖之前的绑定；脚本中添加的绑定无法覆盖编辑器按键绑定菜单中绑定相同按键的UI控件，但当两个UI控件分别通过代码和菜单绑定到同一按键时，使用代码绑定的优先级更高|
| **[getKeys](mw.Button.md#getkeys)**(): [`Keys`](../enums/mw.Keys.md)[] <Badge type="tip" text="client" />  |
| 获取当前UI控件绑定的所有键盘按键，包括编辑器按键绑定菜单和用代码绑定的按键|
| **[isPressed](mw.Button.md#ispressed)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否按下|
| **[removeKey](mw.Button.md#removekey)**(`key`: [`Keys`](../enums/mw.Keys.md)): `void` <Badge type="tip" text="client" />  |
| 此操作只会解绑动态绑定的按键无法解除编辑器按键绑定菜单中绑定的按键|
| **[setButtonDisableByFile](mw.Button.md#setbuttondisablebyfile)**(`absPath`: `string`, `bRefreshCache?`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 设置不可用图片|
| **[setButtonNormalByFile](mw.Button.md#setbuttonnormalbyfile)**(`absPath`: `string`, `bRefreshCache?`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 设置正常图片|
| **[setButtonPressedByFile](mw.Button.md#setbuttonpressedbyfile)**(`absPath`: `string`, `bRefreshCache?`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 设置按下图片|
| **[setDisableImageColorByHex](mw.Button.md#setdisableimagecolorbyhex)**(`inHexString`: `string`): `void` <Badge type="tip" text="client" />  |
| 设置不可用颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setDisableImageColorDecimal](mw.Button.md#setdisableimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置不可用颜色|
| **[setNormalImageColorByHex](mw.Button.md#setnormalimagecolorbyhex)**(`inHexString`: `string`): `void` <Badge type="tip" text="client" />  |
| 设置正常颜色指定 Hex 的颜色文本设定颜色 #05050505|
| **[setNormalImageColorDecimal](mw.Button.md#setnormalimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置正常颜色|
| **[setPressedImageColorByHex](mw.Button.md#setpressedimagecolorbyhex)**(`inHexString`: `string`): `void` <Badge type="tip" text="client" />  |
| 设置按下颜色指定 Hex 的颜色文本设定颜色 #05050505|
| **[setPressedImageColorDecimal](mw.Button.md#setpressedimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置按下颜色|
| **[newObject](mw.Button.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`Button`](mw.Button.md) <Badge type="tip" text="client" />  |
| 创建 Button 控件|


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
| **[deserialize](mw.Widget.md#deserialize)**(`Data`: `string`, `Parent?`: [`Widget`](mw.Widget.md)): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 反序列化UI|
:::


## Accessors

___

### clickMethod <Score text="clickMethod" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置点击模式

#### Parameters

| `inClickMethod` [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md) | 点击模式选择 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageColor <Score text="disableImageColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageColor**(): `Readonly`<[`LinearColor`](mw.LinearColor.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片颜色

#### Returns

| `Readonly`<[`LinearColor`](mw.LinearColor.md)\> | 禁用图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置禁用图片颜色

#### Parameters

| `inColor` [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageDrawType <Score text="disableImageDrawType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageDrawType**(): `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageDrawType**(`inDrawTYpe`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片绘制类型

#### Returns

| `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> | 禁用图片绘制类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置禁用图片绘制类型

#### Parameters

| `inDrawTYpe` [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageGuid <Score text="disableImageGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageGuid**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片ID

#### Returns

| `string` | 禁用图片ID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置不可用图片ID

#### Parameters

| `inGUID` `string` | 图片id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageInfo <Score text="disableImageInfo" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageInfo**(): [`ImageInfo`](mw.ImageInfo.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按钮Disable图片的ImageInfo

#### Returns

| [`ImageInfo`](mw.ImageInfo.md) | 返回ImageInfo对象 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### disableImageMargin <Score text="disableImageMargin" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageMargin**(): `Readonly`<[`Margin`](mw.Margin.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片边距

#### Returns

| `Readonly`<[`Margin`](mw.Margin.md)\> | 禁用图片边距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置禁用图片边距

#### Parameters

| `inMargin` [`Margin`](mw.Margin.md) | 禁用图片边距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageSize <Score text="disableImageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageSize**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片大小

#### Returns

| `Readonly`<[`Vector2`](mw.Vector2.md)\> | 禁用图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置禁用图片大小

#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | 大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### focusable <Score text="focusable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **focusable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **focusable**(`inFocus`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否获取输入焦点

#### Returns

| `boolean` | 是否获取输入焦点 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否获取输入焦点

#### Parameters

| `inFocus` `boolean` | 是否获取输入焦点 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageColor <Score text="normalImageColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageColor**(): `Readonly`<[`LinearColor`](mw.LinearColor.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageColor**(`inNormalColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取普通图片颜色

#### Returns

| `Readonly`<[`LinearColor`](mw.LinearColor.md)\> | 普通图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置普通图片颜色

#### Parameters

| `inNormalColor` [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageDrawType <Score text="normalImageDrawType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageDrawType**(): `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取普通图片绘制类型

#### Returns

| `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> | 普通图片绘制类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置普通图片绘制类型

#### Parameters

| `inDrawType` [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageGuid <Score text="normalImageGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageGuid**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取普通图片ID

#### Returns

| `string` | 普通图片ID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置正常图片ID

#### Parameters

| `inGUID` `string` | 图片id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageInfo <Score text="normalImageInfo" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageInfo**(): [`ImageInfo`](mw.ImageInfo.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按钮normal图片的ImageInfo

#### Returns

| [`ImageInfo`](mw.ImageInfo.md) | 返回ImageInfo对象 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### normalImageMargin <Score text="normalImageMargin" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageMargin**(): `Readonly`<[`Margin`](mw.Margin.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取普通图片边距

#### Returns

| `Readonly`<[`Margin`](mw.Margin.md)\> | 普通图片边距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置普通图片边距

#### Parameters

| `inMargin` [`Margin`](mw.Margin.md) | 普通图片边距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageSize <Score text="normalImageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageSize**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取图片大小

#### Returns

| `Readonly`<[`Vector2`](mw.Vector2.md)\> | 普通图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置图片大小

#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | 大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### onAssetDragEnter <Score text="onAssetDragEnter" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onAssetDragEnter**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`assetGUID`: `string`) => `void`\>

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`assetGUID`: `string`) => `void`\> |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onAssetDragLeave <Score text="onAssetDragLeave" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onAssetDragLeave**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onClicked <Score text="onClicked" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onClicked**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


点击事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onHovered <Score text="onHovered" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onHovered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


悬浮事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onPressed <Score text="onPressed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onPressed**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


按下事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onReleased <Score text="onReleased" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onReleased**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


释放事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onUnhovered <Score text="onUnhovered" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onUnhovered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


未悬浮事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### pressedImageColor <Score text="pressedImageColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageColor**(): `Readonly`<[`LinearColor`](mw.LinearColor.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按压图片颜色

#### Returns

| `Readonly`<[`LinearColor`](mw.LinearColor.md)\> | 按压图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按压图片颜色

#### Parameters

| `inColor` [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImageDrawType <Score text="pressedImageDrawType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageDrawType**(): `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按压图片绘制类型

#### Returns

| `Readonly`<[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)\> | 按压图片绘制类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按压图片绘制类型

#### Parameters

| `inDrawType` [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImageGuid <Score text="pressedImageGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageGuid**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按下图片ID

#### Returns

| `string` | 按下图片ID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按下图片ID

#### Parameters

| `inGUID` `string` | 图片id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImageInfo <Score text="pressedImageInfo" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageInfo**(): [`ImageInfo`](mw.ImageInfo.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按钮Pressed图片的ImageInfo

#### Returns

| [`ImageInfo`](mw.ImageInfo.md) | 返回ImageInfo对象 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### pressedImageMargin <Score text="pressedImageMargin" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageMargin**(): `Readonly`<[`Margin`](mw.Margin.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按压图片边距

#### Returns

| `Readonly`<[`Margin`](mw.Margin.md)\> | 按压图片边距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按压图片边距

#### Parameters

| `inMargin` [`Margin`](mw.Margin.md) | 按压图片边距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImageSize <Score text="pressedImageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageSize**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按压图片大小

#### Returns

| `Readonly`<[`Vector2`](mw.Vector2.md)\> | 按压图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按压图片大小

#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | 大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedMethod <Score text="pressedMethod" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **pressedMethod**(`inPressedMethod`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置按压模式

#### Parameters

| `inPressedMethod` [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md) | Press模式选择 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### touchMethod <Score text="touchMethod" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **touchMethod**(`inTouchMethod`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置触摸模式

#### Parameters

| `inTouchMethod` [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md) | Touch模式选择 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### transitionEnable <Score text="transitionEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **transitionEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **transitionEnable**(`inBoolean`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


按钮是否启用过度模式,按下是否有效果

#### Returns

| `boolean` | 按钮是否启用过度模式 |
| :------ | :------ |


</td>
<td style="text-align: left">


是否套用不同的按下方案

#### Parameters

| `inBoolean` `boolean` | 是否套用不同的按下方案 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

___

### addKey <Score text="addKey" /> 

• **addKey**(`key`): `void` <Badge type="tip" text="client" />

同一按键同时只能操控一个UI控件，最新绑定的UI控件会覆盖之前的绑定；脚本中添加的绑定无法覆盖编辑器按键绑定菜单中绑定相同按键的UI控件，但当两个UI控件分别通过代码和菜单绑定到同一按键时，使用代码绑定的优先级更高

#### Parameters

| `key` [`Keys`](../enums/mw.Keys.md) | 按键 |
| :------ | :------ |


___

### getKeys <Score text="getKeys" /> 

• **getKeys**(): [`Keys`](../enums/mw.Keys.md)[] <Badge type="tip" text="client" />

获取当前UI控件绑定的所有键盘按键，包括编辑器按键绑定菜单和用代码绑定的按键

#### Returns

| [`Keys`](../enums/mw.Keys.md)[] | 返回当前控件绑定的按键,可能为空 |
| :------ | :------ |

___

### isPressed <Score text="isPressed" /> 

• **isPressed**(): `boolean` <Badge type="tip" text="client" />

是否按下

#### Returns

| `boolean` | 返回按钮是否按下 |
| :------ | :------ |

___

### removeKey <Score text="removeKey" /> 

• **removeKey**(`key`): `void` <Badge type="tip" text="client" />

此操作只会解绑动态绑定的按键无法解除编辑器按键绑定菜单中绑定的按键

#### Parameters

| `key` [`Keys`](../enums/mw.Keys.md) | 按键 |
| :------ | :------ |


___

### setButtonDisableByFile <Score text="setButtonDisableByFile" /> 

• **setButtonDisableByFile**(`absPath`, `bRefreshCache?`): `void` <Badge type="tip" text="client" />

设置不可用图片

#### Parameters

| `absPath` `string` |  图片文件路径 <br> range: 路径长度 |
| :------ | :------ |
| `bRefreshCache?` `boolean` | 默认为 true 将重新创建并刷新缓存，为 false 则使用缓存 <br> default: true |


::: warning Precautions

建议设置 bRefreshCache=false 以提升性能

:::

___

### setButtonNormalByFile <Score text="setButtonNormalByFile" /> 

• **setButtonNormalByFile**(`absPath`, `bRefreshCache?`): `void` <Badge type="tip" text="client" />

设置正常图片

#### Parameters

| `absPath` `string` |  图片文件路径 range: 路径长度 |
| :------ | :------ |
| `bRefreshCache?` `boolean` | 为 true 则重新创建并刷新缓存，为 false 则使用缓存。 <br> default: true |


::: warning Precautions

建议设置 bRefreshCache = false 以提升性能

:::

___

### setButtonPressedByFile <Score text="setButtonPressedByFile" /> 

• **setButtonPressedByFile**(`absPath`, `bRefreshCache?`): `void` <Badge type="tip" text="client" />

设置按下图片

#### Parameters

| `absPath` `string` | 图片文件路径 range: 路径长度 |
| :------ | :------ |
| `bRefreshCache?` `boolean` | 默认为 true 将重新创建并刷新缓存，为 false 则使用缓存 <br> default: true |


::: warning Precautions

建议设置 bRefreshCache = false 以提升性能

:::

___

### setDisableImageColorByHex <Score text="setDisableImageColorByHex" /> 

• **setDisableImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置不可用颜色指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | 颜色字符串 range: 符合 Hex 特点的字符串类型 |
| :------ | :------ |


___

### setDisableImageColorDecimal <Score text="setDisableImageColorDecimal" /> 

• **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置不可用颜色

#### Parameters

| `R` `number` | 颜色 R 值。 <br> range:[0, 255] type: 整数 |
| :------ | :------ |
| `G` `number` | 颜色 G 值。 <br> range:[0, 255] type: 整数 |
| `B` `number` | 颜色 B 值。 <br> range:[0, 255] type: 整数 |
| `A` `number` | 颜色 透明度。 <br> range:[0, 255] type: 整数 |


___

### setNormalImageColorByHex <Score text="setNormalImageColorByHex" /> 

• **setNormalImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置正常颜色指定 Hex 的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | 颜色字符串 range: 符合 Hex 特点的字符串类型 |
| :------ | :------ |


___

### setNormalImageColorDecimal <Score text="setNormalImageColorDecimal" /> 

• **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置正常颜色

#### Parameters

| `R` `number` | 颜色 R 值。 <br> range:[0, 255] type: 整数 |
| :------ | :------ |
| `G` `number` | 颜色 G 值。 <br> range:[0, 255] type: 整数 |
| `B` `number` | 颜色 B 值。 <br> range:[0, 255] type: 整数 |
| `A` `number` | 颜色 透明度。 <br> range:[0, 255] type: 整数 |


___

### setPressedImageColorByHex <Score text="setPressedImageColorByHex" /> 

• **setPressedImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置按下颜色指定 Hex 的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | 颜色字符串 range: 符合 Hex 特点的字符串类型 |
| :------ | :------ |


___

### setPressedImageColorDecimal <Score text="setPressedImageColorDecimal" /> 

• **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置按下颜色

#### Parameters

| `R` `number` | 颜色 R 值。 <br> range:[0, 255] type: 整数 |
| :------ | :------ |
| `G` `number` | 颜色 G 值。 <br> range:[0, 255] type: 整数 |
| `B` `number` | 颜色 B 值。 <br> range:[0, 255] type: 整数 |
| `A` `number` | 颜色 透明度。 <br> range:[0, 255] type: 整数 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`Button`](mw.Button.md) <Badge type="tip" text="client" />

创建 Button 控件

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default: null |
| :------ | :------ |
| `inName?` `string` | 创建控件的名称 default:null range:设置合理的名称即可 |

#### Returns

| [`Button`](mw.Button.md) | 返回创建的对象 |
| :------ | :------ |

当parent和inName与已有的对象相同时，旧的对象会被销毁
