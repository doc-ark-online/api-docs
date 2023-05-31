[Gui](../groups/Gui.Gui.md) / MaskButton

# MaskButton <Badge type="tip" text="Class" /> <Score text="MaskButton" />

遮罩

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`MaskButton`**

## Table of contents

| Accessors |
| :-----|
| **[circleCenter](UI.MaskButton.md#circlecenter)**(): [`Vector2`](Type.Vector2.md) <br> 获取圆形遮罩的中心旋转点|
| **[circleValue](UI.MaskButton.md#circlevalue)**(): `number` <br> 获取圆形遮罩的遮挡百分值|
| **[clickMethod](UI.MaskButton.md#clickmethod)**(): [`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md) <br> 获取点击模式|
| **[clickedDelegate](UI.MaskButton.md#clickeddelegate)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 点击事件|
| **[disableImageColor](UI.MaskButton.md#disableimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取禁用图片颜色|
| **[disableImageDrawType](UI.MaskButton.md#disableimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取禁用图片绘制类型|
| **[disableImageGuid](UI.MaskButton.md#disableimageguid)**(): `string` <br> 获取禁用图片ID|
| **[disableImageMargin](UI.MaskButton.md#disableimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取禁用图片边距|
| **[disableImageSize](UI.MaskButton.md#disableimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取禁用图片大小|
| **[enableTransition](UI.MaskButton.md#enabletransition)**(`inBoolean`: `boolean`): `void` <br> 是否套用不同的按下方案|
| **[fanShapedRotated](UI.MaskButton.md#fanshapedrotated)**(): `number` <br> 获取扇形遮罩的旋转|
| **[fanShapedRotatedCenter](UI.MaskButton.md#fanshapedrotatedcenter)**(): [`Vector2`](Type.Vector2.md) <br> 获取扇形遮罩的中心旋转点|
| **[fanShapedValue](UI.MaskButton.md#fanshapedvalue)**(): `number` <br> 获取扇形遮罩的遮罩进度|
| **[focusable](UI.MaskButton.md#focusable)**(): `boolean` <br> 获取是否获取输入焦点|
| **[hoveredDelegate](UI.MaskButton.md#hovereddelegate)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 悬浮事件|
| **[inverseOpacity](UI.MaskButton.md#inverseopacity)**(): `boolean` <br> 获取反转透明度权重|
| **[isTransitionEnable](UI.MaskButton.md#istransitionenable)**(): `boolean` <br> 按钮是否启用过度模式,按下是否有效果|
| **[maskImageColor](UI.MaskButton.md#maskimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取遮罩图片颜色|
| **[maskImageGuid](UI.MaskButton.md#maskimageguid)**(): `string` <br> 获取设置遮罩图片ID|
| **[maskOpacity](UI.MaskButton.md#maskopacity)**(): `number` <br> 获取遮挡处的底图的透明度|
| **[maskTextureOpacity](UI.MaskButton.md#masktextureopacity)**(): `number` <br> 获取遮挡处的遮挡图的透明度|
| **[maskType](UI.MaskButton.md#masktype)**(): [`MaskButtonType`](../enums/UI.MaskButtonType.md) <br> 获取遮罩裁剪类型|
| **[normalImageColor](UI.MaskButton.md#normalimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取普通图片颜色|
| **[normalImageDrawType](UI.MaskButton.md#normalimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取普通图片绘制类型|
| **[normalImageGuid](UI.MaskButton.md#normalimageguid)**(): `string` <br> 获取普通图片ID|
| **[normalImageMargin](UI.MaskButton.md#normalimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取普通图片边距|
| **[normalImageSize](UI.MaskButton.md#normalimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取图片大小|
| **[pressedDelegate](UI.MaskButton.md#presseddelegate)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 按下事件|
| **[pressedImageColor](UI.MaskButton.md#pressedimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取按压图片颜色|
| **[pressedImageDrawType](UI.MaskButton.md#pressedimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取按压图片绘制类型|
| **[pressedImageGuid](UI.MaskButton.md#pressedimageguid)**(): `string` <br> 获取按下图片ID|
| **[pressedImageMargin](UI.MaskButton.md#pressedimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取按压图片边距|
| **[pressedImageSize](UI.MaskButton.md#pressedimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取按压图片大小|
| **[pressedMethod](UI.MaskButton.md#pressedmethod)**(): [`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md) <br> 获取按压模式|
| **[releasedDelegate](UI.MaskButton.md#releaseddelegate)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 释放事件|
| **[roundBoxPercentOffset](UI.MaskButton.md#roundboxpercentoffset)**(): [`Vector2`](Type.Vector2.md) <br> 获取矩形百分比大小边距偏移|
| **[roundBoxRadius](UI.MaskButton.md#roundboxradius)**(): `number` <br> 获取设置的角半径|
| **[roundBoxSharpness](UI.MaskButton.md#roundboxsharpness)**(): `number` <br> 获取设置的圆角锐化度|
| **[roundBoxUVRatio](UI.MaskButton.md#roundboxuvratio)**(): `number` <br> 获取圆角调节大小|
| **[touchMethod](UI.MaskButton.md#touchmethod)**(): [`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md) <br> 获取触摸模式|
| **[unHoveredDelegate](UI.MaskButton.md#unhovereddelegate)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 未悬浮事件|
| **[useMaskTextureOpacity](UI.MaskButton.md#usemasktextureopacity)**(): `boolean` <br> 获取遮罩轮廓是否裁剪底图|


::: details 点击查看继承
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
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[isPressed](UI.MaskButton.md#ispressed)**(): `boolean` <br> 是否按下|
| **[setDisableImageColorByHex](UI.MaskButton.md#setdisableimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置不可用颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setDisableImageColorDecimal](UI.MaskButton.md#setdisableimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置禁用颜色指定R、G、B、A设置颜色 0 ~255|
| **[setMaskImageColorByHex](UI.MaskButton.md#setmaskimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置遮罩图片颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setMaskImageColorDecimal](UI.MaskButton.md#setmaskimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置遮罩图片颜色指定R、G、B、A设置颜色 0 ~255|
| **[setNormalImageColorByHex](UI.MaskButton.md#setnormalimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置普通图片颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setNormalImageColorDecimal](UI.MaskButton.md#setnormalimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置普通图片颜色 指定R、G、B、A设置颜色 0 ~255|
| **[setPressedImageColorByHex](UI.MaskButton.md#setpressedimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置按压图片颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setPressedImageColorDecimal](UI.MaskButton.md#setpressedimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置按压图片颜色指定R、G、B、A设置颜色 0 ~255|
| **[newObject](UI.MaskButton.md#newobject)**(`parent?`: [`Canvas`](UI.Canvas.md), `inName?`: `string`): [`MaskButton`](UI.MaskButton.md) <br> 创建 Mask 控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**(`that`: [`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](UI.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


## Accessors

### circleCenter <Score text="circleCenter" /> 

• `get` **circleCenter**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取圆形遮罩的中心旋转点


#### Returns

[`Vector2`](Type.Vector2.md)

中心百分点

• `set` **circleCenter**(`center`): `void` <Badge type="tip" text="client" />

设置圆形遮罩的中心旋转点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Vector2`](Type.Vector2.md) | 中心点百分比 |


___

### circleValue <Score text="circleValue" /> 

• `get` **circleValue**(): `number` <Badge type="tip" text="client" />

获取圆形遮罩的遮挡百分值


#### Returns

`number`

进度值,0~1

• `set` **circleValue**(`value`): `void` <Badge type="tip" text="client" />

设置圆形遮罩的遮挡百分值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 百分进度值,0~1 |


___

### clickMethod <Score text="clickMethod" /> 

• `get` **clickMethod**(): [`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md) <Badge type="tip" text="client" />

获取点击模式


#### Returns

[`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md)

点击模式

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="client" />

设置点击模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md) | 点击模式选择 |


___

### clickedDelegate <Score text="clickedDelegate" /> 

• `get` **clickedDelegate**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

点击事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理


### disableImageColor <Score text="disableImageColor" /> 

• `get` **disableImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取禁用图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

禁用图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **disableImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置禁用图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### disableImageDrawType <Score text="disableImageDrawType" /> 

• `get` **disableImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取禁用图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

禁用图片绘制类型

• `set` **disableImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置禁用图片绘制类型


#### Parameters

| Name | Type |
| :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) |


禁用图片绘制类型

___

### disableImageGuid <Score text="disableImageGuid" /> 

• `get` **disableImageGuid**(): `string` <Badge type="tip" text="client" />

获取禁用图片ID


#### Returns

`string`

禁用图片ID

• `set` **disableImageGuid**(`inGuid`): `void` <Badge type="tip" text="client" />

设置不可用图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 图片id |


___

### disableImageMargin <Score text="disableImageMargin" /> 

• `get` **disableImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="client" />

获取禁用图片边距


#### Returns

[`Margin`](UI.Margin.md)

禁用图片边距

• `set` **disableImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置禁用图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 禁用图片边距 |


___

### disableImageSize <Score text="disableImageSize" /> 

• `get` **disableImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取禁用图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

禁用图片大小

• `set` **disableImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置禁用图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |



### enableTransition <Score text="enableTransition" /> 

• `set` **enableTransition**(`inBoolean`): `void` <Badge type="tip" text="client" />

是否套用不同的按下方案


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inBoolean` | `boolean` | 是否套用不同的按下方案 |


___

### fanShapedRotated <Score text="fanShapedRotated" /> 

• `get` **fanShapedRotated**(): `number` <Badge type="tip" text="client" />

获取扇形遮罩的旋转


#### Returns

`number`

旋转角度 0~1

• `set` **fanShapedRotated**(`value`): `void` <Badge type="tip" text="client" />

设置扇形遮罩的旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 旋转角度 0 ~ 1 |


___

### fanShapedRotatedCenter <Score text="fanShapedRotatedCenter" /> 

• `get` **fanShapedRotatedCenter**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取扇形遮罩的中心旋转点


#### Returns

[`Vector2`](Type.Vector2.md)

旋转中心百分点

• `set` **fanShapedRotatedCenter**(`center`): `void` <Badge type="tip" text="client" />

设置扇形遮罩的中心旋转点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Vector2`](Type.Vector2.md) | 中心点百分比 |


___

### fanShapedValue <Score text="fanShapedValue" /> 

• `get` **fanShapedValue**(): `number` <Badge type="tip" text="client" />

获取扇形遮罩的遮罩进度


#### Returns

`number`

进度值

• `set` **fanShapedValue**(`value`): `void` <Badge type="tip" text="client" />

设置扇形遮罩的遮罩进度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 百分进度值 |


___

### focusable <Score text="focusable" /> 

• `get` **focusable**(): `boolean` <Badge type="tip" text="client" />

获取是否获取输入焦点


#### Returns

`boolean`

是否获取输入焦点

• `set` **focusable**(`inFocus`): `void` <Badge type="tip" text="client" />

设置是否获取输入焦点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFocus` | `boolean` | 是否获取输入焦点 |



### hoveredDelegate <Score text="hoveredDelegate" /> 

• `get` **hoveredDelegate**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

悬浮事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### inverseOpacity <Score text="inverseOpacity" /> 

• `get` **inverseOpacity**(): `boolean` <Badge type="tip" text="client" />

获取反转透明度权重


#### Returns

`boolean`

权重

• `set` **inverseOpacity**(`inverseOpacityWeight`): `void` <Badge type="tip" text="client" />

反转透明度权重


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inverseOpacityWeight` | `boolean` | 权重 |



### isTransitionEnable <Score text="isTransitionEnable" /> 

• `get` **isTransitionEnable**(): `boolean` <Badge type="tip" text="client" />

按钮是否启用过度模式,按下是否有效果


#### Returns

`boolean`

按钮是否启用过度模式

___

### maskImageColor <Score text="maskImageColor" /> 

• `get` **maskImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取遮罩图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

图片的颜色，Type.LinearColor类型，数据范围0~1

• `set` **maskImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置遮罩图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### maskImageGuid <Score text="maskImageGuid" /> 

• `get` **maskImageGuid**(): `string` <Badge type="tip" text="client" />

获取设置遮罩图片ID


#### Returns

`string`

遮罩图片ID

• `set` **maskImageGuid**(`InGuid`): `void` <Badge type="tip" text="client" />

设置遮罩图片ID


#### Parameters

| Name | Type |
| :------ | :------ |
| `InGuid` | `string` |


___

### maskOpacity <Score text="maskOpacity" /> 

• `get` **maskOpacity**(): `number` <Badge type="tip" text="client" />

获取遮挡处的底图的透明度


#### Returns

`number`

透明度

• `set` **maskOpacity**(`o`): `void` <Badge type="tip" text="client" />

设置遮挡处的底图的透明度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `number` | 透明度 |


___

### maskTextureOpacity <Score text="maskTextureOpacity" /> 

• `get` **maskTextureOpacity**(): `number` <Badge type="tip" text="client" />

获取遮挡处的遮挡图的透明度


#### Returns

`number`

透明度

• `set` **maskTextureOpacity**(`o`): `void` <Badge type="tip" text="client" />

设置遮挡处的遮挡图的透明度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `number` | 透明度 |


___

### maskType <Score text="maskType" /> 

• `get` **maskType**(): [`MaskButtonType`](../enums/UI.MaskButtonType.md) <Badge type="tip" text="client" />

获取遮罩裁剪类型


#### Returns

[`MaskButtonType`](../enums/UI.MaskButtonType.md)

裁剪类型

• `set` **maskType**(`inType`): `void` <Badge type="tip" text="client" />

设置遮罩裁剪类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inType` | [`MaskButtonType`](../enums/UI.MaskButtonType.md) | 裁剪类型 |



### normalImageColor <Score text="normalImageColor" /> 

• `get` **normalImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取普通图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **normalImageColor**(`inNormalColor`): `void` <Badge type="tip" text="client" />

设置普通图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inNormalColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### normalImageDrawType <Score text="normalImageDrawType" /> 

• `get` **normalImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取普通图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

普通图片绘制类型

• `set` **normalImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置普通图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |


___

### normalImageGuid <Score text="normalImageGuid" /> 

• `get` **normalImageGuid**(): `string` <Badge type="tip" text="client" />

获取普通图片ID


#### Returns

`string`

普通图片ID

• `set` **normalImageGuid**(`inGuid`): `void` <Badge type="tip" text="client" />

设置普通图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 图片id |


___

### normalImageMargin <Score text="normalImageMargin" /> 

• `get` **normalImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="client" />

获取普通图片边距


#### Returns

[`Margin`](UI.Margin.md)

普通图片边距

• `set` **normalImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置普通图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 普通图片边距 |


___

### normalImageSize <Score text="normalImageSize" /> 

• `get` **normalImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

普通图片大小

• `set` **normalImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |



### pressedDelegate <Score text="pressedDelegate" /> 

• `get` **pressedDelegate**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

按下事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### pressedImageColor <Score text="pressedImageColor" /> 

• `get` **pressedImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取按压图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **pressedImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置按压图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### pressedImageDrawType <Score text="pressedImageDrawType" /> 

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取按压图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

按压图片绘制类型

• `set` **pressedImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置按压图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |


___

### pressedImageGuid <Score text="pressedImageGuid" /> 

• `get` **pressedImageGuid**(): `string` <Badge type="tip" text="client" />

获取按下图片ID


#### Returns

`string`

按下图片ID

• `set` **pressedImageGuid**(`inGuid`): `void` <Badge type="tip" text="client" />

设置按下图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 图片id |


___

### pressedImageMargin <Score text="pressedImageMargin" /> 

• `get` **pressedImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="client" />

获取按压图片边距


#### Returns

[`Margin`](UI.Margin.md)

按压图片边距

• `set` **pressedImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置按压图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 按压图片边距 |


___

### pressedImageSize <Score text="pressedImageSize" /> 

• `get` **pressedImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取按压图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

按压图片大小

• `set` **pressedImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置按压图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |


___

### pressedMethod <Score text="pressedMethod" /> 

• `get` **pressedMethod**(): [`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md) <Badge type="tip" text="client" />

获取按压模式


#### Returns

[`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md)

按压模式

• `set` **pressedMethod**(`inPressedMethod`): `void` <Badge type="tip" text="client" />

设置按压模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressedMethod` | [`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md) | Press模式选择 |


___

### releasedDelegate <Score text="releasedDelegate" /> 

• `get` **releasedDelegate**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

释放事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理


### roundBoxPercentOffset <Score text="roundBoxPercentOffset" /> 

• `get` **roundBoxPercentOffset**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取矩形百分比大小边距偏移


#### Returns

[`Vector2`](Type.Vector2.md)

矩形大小边距偏移的百分比占据，0~0.5

• `set` **roundBoxPercentOffset**(`percent`): `void` <Badge type="tip" text="client" />

设置矩形大小边距偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `percent` | [`Vector2`](Type.Vector2.md) | 矩形大小百分比，0~0.5 |


___

### roundBoxRadius <Score text="roundBoxRadius" /> 

• `get` **roundBoxRadius**(): `number`

获取设置的角半径

#### Returns

`number`

角半径百分比

• `set` **roundBoxRadius**(`value`): `void`

设置角半径

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角半径百分比 |


___

### roundBoxSharpness <Score text="roundBoxSharpness" /> 

• `get` **roundBoxSharpness**(): `number`

获取设置的圆角锐化度

#### Returns

`number`

锐化度

• `set` **roundBoxSharpness**(`v`): `void`

设置的圆角锐化度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 锐化度 |


___

### roundBoxUVRatio <Score text="roundBoxUVRatio" /> 

• `get` **roundBoxUVRatio**(): `number`

获取圆角调节大小

#### Returns

`number`

圆角调节大小

• `set` **roundBoxUVRatio**(`v`): `void`

设置圆角调节大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 圆角调节大小 |



### touchMethod <Score text="touchMethod" /> 

• `get` **touchMethod**(): [`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md) <Badge type="tip" text="client" />

获取触摸模式


#### Returns

[`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md)

触摸模式

• `set` **touchMethod**(`inTouchMethod`): `void` <Badge type="tip" text="client" />

设置触摸模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md) | Touch模式选择 |



### unHoveredDelegate <Score text="unHoveredDelegate" /> 

• `get` **unHoveredDelegate**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

未悬浮事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### useMaskTextureOpacity <Score text="useMaskTextureOpacity" /> 

• `get` **useMaskTextureOpacity**(): `boolean` <Badge type="tip" text="client" />

获取遮罩轮廓是否裁剪底图


#### Returns

`boolean`

权重

• `set` **useMaskTextureOpacity**(`inUseWeight`): `void` <Badge type="tip" text="client" />

设置遮罩轮廓是否裁剪底图


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inUseWeight` | `boolean` | 是否裁剪 |



## Methods

### isPressed <Score text="isPressed" /> 

• **isPressed**(): `boolean` <Badge type="tip" text="client" />

是否按下


#### Returns

`boolean`

返回按钮是否按下


### setDisableImageColorByHex <Score text="setDisableImageColorByHex" /> 

• **setDisableImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置不可用颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setDisableImageColorDecimal <Score text="setDisableImageColorDecimal" /> 

• **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置禁用颜色指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### setMaskImageColorByHex <Score text="setMaskImageColorByHex" /> 

• **setMaskImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置遮罩图片颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setMaskImageColorDecimal <Score text="setMaskImageColorDecimal" /> 

• **setMaskImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置遮罩图片颜色指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### setNormalImageColorByHex <Score text="setNormalImageColorByHex" /> 

• **setNormalImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置普通图片颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setNormalImageColorDecimal <Score text="setNormalImageColorDecimal" /> 

• **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置普通图片颜色 指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### setPressedImageColorByHex <Score text="setPressedImageColorByHex" /> 

• **setPressedImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置按压图片颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setPressedImageColorDecimal <Score text="setPressedImageColorDecimal" /> 

• **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置按压图片颜色指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`MaskButton`](UI.MaskButton.md) <Badge type="tip" text="client" />

创建 Mask 控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default: null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`MaskButton`](UI.MaskButton.md)

返回创建的对象
