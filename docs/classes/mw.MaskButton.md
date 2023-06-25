[Ui](../groups/Core.Ui.md) / MaskButton

# MaskButton <Badge type="tip" text="Class" /> <Score text="MaskButton" />

遮罩

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`MaskButton`**

## Table of contents

| Accessors |
| :-----|
| **[circleCenter](mw.MaskButton.md#circlecenter)**(): [`Vector2`](mw.Vector2.md) <br> 获取圆形遮罩的中心旋转点|
| **[circleValue](mw.MaskButton.md#circlevalue)**(): `number` <br> 获取圆形遮罩的遮挡百分值|
| **[clickMethod](mw.MaskButton.md#clickmethod)**(): [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md) <br> 获取点击模式|
| **[clickedDelegate](mw.MaskButton.md#clickeddelegate)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 点击事件|
| **[disableImageColor](mw.MaskButton.md#disableimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取禁用图片颜色|
| **[disableImageDrawType](mw.MaskButton.md#disableimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取禁用图片绘制类型|
| **[disableImageGuid](mw.MaskButton.md#disableimageguid)**(): `string` <br> 获取禁用图片ID|
| **[disableImageMargin](mw.MaskButton.md#disableimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取禁用图片边距|
| **[disableImageSize](mw.MaskButton.md#disableimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取禁用图片大小|
| **[enableTransition](mw.MaskButton.md#enabletransition)**(`inBoolean`: `boolean`): `void` <br> 是否套用不同的按下方案|
| **[fanShapedRotated](mw.MaskButton.md#fanshapedrotated)**(): `number` <br> 获取扇形遮罩的旋转|
| **[fanShapedRotatedCenter](mw.MaskButton.md#fanshapedrotatedcenter)**(): [`Vector2`](mw.Vector2.md) <br> 获取扇形遮罩的中心旋转点|
| **[fanShapedValue](mw.MaskButton.md#fanshapedvalue)**(): `number` <br> 获取扇形遮罩的遮罩进度|
| **[focusable](mw.MaskButton.md#focusable)**(): `boolean` <br> 获取是否获取输入焦点|
| **[hoveredDelegate](mw.MaskButton.md#hovereddelegate)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 悬浮事件|
| **[inverseOpacity](mw.MaskButton.md#inverseopacity)**(): `boolean` <br> 获取反转透明度权重|
| **[isTransitionEnable](mw.MaskButton.md#istransitionenable)**(): `boolean` <br> 按钮是否启用过度模式,按下是否有效果|
| **[maskImageColor](mw.MaskButton.md#maskimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取遮罩图片颜色|
| **[maskImageGuid](mw.MaskButton.md#maskimageguid)**(): `string` <br> 获取设置遮罩图片ID|
| **[maskOpacity](mw.MaskButton.md#maskopacity)**(): `number` <br> 获取遮挡处的底图的透明度|
| **[maskTextureOpacity](mw.MaskButton.md#masktextureopacity)**(): `number` <br> 获取遮挡处的遮挡图的透明度|
| **[maskType](mw.MaskButton.md#masktype)**(): [`MaskButtonType`](../enums/mw.MaskButtonType.md) <br> 获取遮罩裁剪类型|
| **[normalImageColor](mw.MaskButton.md#normalimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取普通图片颜色|
| **[normalImageDrawType](mw.MaskButton.md#normalimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取普通图片绘制类型|
| **[normalImageGuid](mw.MaskButton.md#normalimageguid)**(): `string` <br> 获取普通图片ID|
| **[normalImageMargin](mw.MaskButton.md#normalimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取普通图片边距|
| **[normalImageSize](mw.MaskButton.md#normalimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取图片大小|
| **[pressedDelegate](mw.MaskButton.md#presseddelegate)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 按下事件|
| **[pressedImageColor](mw.MaskButton.md#pressedimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取按压图片颜色|
| **[pressedImageDrawType](mw.MaskButton.md#pressedimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取按压图片绘制类型|
| **[pressedImageGuid](mw.MaskButton.md#pressedimageguid)**(): `string` <br> 获取按下图片ID|
| **[pressedImageMargin](mw.MaskButton.md#pressedimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取按压图片边距|
| **[pressedImageSize](mw.MaskButton.md#pressedimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取按压图片大小|
| **[pressedMethod](mw.MaskButton.md#pressedmethod)**(): [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md) <br> 获取按压模式|
| **[releasedDelegate](mw.MaskButton.md#releaseddelegate)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 释放事件|
| **[roundBoxPercentOffset](mw.MaskButton.md#roundboxpercentoffset)**(): [`Vector2`](mw.Vector2.md) <br> 获取矩形百分比大小边距偏移|
| **[roundBoxRadius](mw.MaskButton.md#roundboxradius)**(): `number` <br> 获取设置的角半径|
| **[roundBoxSharpness](mw.MaskButton.md#roundboxsharpness)**(): `number` <br> 获取设置的圆角锐化度|
| **[roundBoxUVRatio](mw.MaskButton.md#roundboxuvratio)**(): `number` <br> 获取圆角调节大小|
| **[touchMethod](mw.MaskButton.md#touchmethod)**(): [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md) <br> 获取触摸模式|
| **[unHoveredDelegate](mw.MaskButton.md#unhovereddelegate)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 未悬浮事件|
| **[useMaskTextureOpacity](mw.MaskButton.md#usemasktextureopacity)**(): `boolean` <br> 获取遮罩轮廓是否裁剪底图|


::: details 点击查看继承
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
:::


| Methods |
| :-----|
| **[isPressed](mw.MaskButton.md#ispressed)**(): `boolean` <br> 是否按下|
| **[setDisableImageColorByHex](mw.MaskButton.md#setdisableimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置不可用颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setDisableImageColorDecimal](mw.MaskButton.md#setdisableimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置禁用颜色指定R、G、B、A设置颜色 0 ~255|
| **[setMaskImageColorByHex](mw.MaskButton.md#setmaskimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置遮罩图片颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setMaskImageColorDecimal](mw.MaskButton.md#setmaskimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置遮罩图片颜色指定R、G、B、A设置颜色 0 ~255|
| **[setNormalImageColorByHex](mw.MaskButton.md#setnormalimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置普通图片颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setNormalImageColorDecimal](mw.MaskButton.md#setnormalimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置普通图片颜色 指定R、G、B、A设置颜色 0 ~255|
| **[setPressedImageColorByHex](mw.MaskButton.md#setpressedimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置按压图片颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setPressedImageColorDecimal](mw.MaskButton.md#setpressedimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置按压图片颜色指定R、G、B、A设置颜色 0 ~255|
| **[newObject](mw.MaskButton.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`MaskButton`](mw.MaskButton.md) <br> 创建 Mask 控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


### circleCenter <Score text="circleCenter" /> 

• `get` **circleCenter**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取圆形遮罩的中心旋转点


#### Returns

[`Vector2`](mw.Vector2.md)

中心百分点

• `set` **circleCenter**(`center`): `void` <Badge type="tip" text="client" />

设置圆形遮罩的中心旋转点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Vector2`](mw.Vector2.md) | 中心点百分比 |


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

• `get` **clickMethod**(): [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md) <Badge type="tip" text="client" />

获取点击模式


#### Returns

[`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md)

点击模式

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="client" />

设置点击模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md) | 点击模式选择 |


___

### clickedDelegate <Score text="clickedDelegate" /> 

• `get` **clickedDelegate**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

点击事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### disableImageColor <Score text="disableImageColor" /> 

• `get` **disableImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取禁用图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

禁用图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **disableImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置禁用图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### disableImageDrawType <Score text="disableImageDrawType" /> 

• `get` **disableImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取禁用图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

禁用图片绘制类型

• `set` **disableImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置禁用图片绘制类型


#### Parameters

| Name | Type |
| :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) |


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

• `get` **disableImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取禁用图片边距


#### Returns

[`Margin`](mw.Margin.md)

禁用图片边距

• `set` **disableImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置禁用图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](mw.Margin.md) | 禁用图片边距 |


___

### disableImageSize <Score text="disableImageSize" /> 

• `get` **disableImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取禁用图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

禁用图片大小

• `set` **disableImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置禁用图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 大小 |


___

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

• `get` **fanShapedRotatedCenter**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取扇形遮罩的中心旋转点


#### Returns

[`Vector2`](mw.Vector2.md)

旋转中心百分点

• `set` **fanShapedRotatedCenter**(`center`): `void` <Badge type="tip" text="client" />

设置扇形遮罩的中心旋转点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Vector2`](mw.Vector2.md) | 中心点百分比 |


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


___

### hoveredDelegate <Score text="hoveredDelegate" /> 

• `get` **hoveredDelegate**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

悬浮事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

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


___

### isTransitionEnable <Score text="isTransitionEnable" /> 

• `get` **isTransitionEnable**(): `boolean` <Badge type="tip" text="client" />

按钮是否启用过度模式,按下是否有效果


#### Returns

`boolean`

按钮是否启用过度模式

___

### maskImageColor <Score text="maskImageColor" /> 

• `get` **maskImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取遮罩图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

图片的颜色，Type.LinearColor类型，数据范围0~1

• `set` **maskImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置遮罩图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


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

• `get` **maskType**(): [`MaskButtonType`](../enums/mw.MaskButtonType.md) <Badge type="tip" text="client" />

获取遮罩裁剪类型


#### Returns

[`MaskButtonType`](../enums/mw.MaskButtonType.md)

裁剪类型

• `set` **maskType**(`inType`): `void` <Badge type="tip" text="client" />

设置遮罩裁剪类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inType` | [`MaskButtonType`](../enums/mw.MaskButtonType.md) | 裁剪类型 |


___

### normalImageColor <Score text="normalImageColor" /> 

• `get` **normalImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取普通图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **normalImageColor**(`inNormalColor`): `void` <Badge type="tip" text="client" />

设置普通图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inNormalColor` | [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### normalImageDrawType <Score text="normalImageDrawType" /> 

• `get` **normalImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取普通图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

普通图片绘制类型

• `set` **normalImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置普通图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 类型 |


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

• `get` **normalImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取普通图片边距


#### Returns

[`Margin`](mw.Margin.md)

普通图片边距

• `set` **normalImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置普通图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](mw.Margin.md) | 普通图片边距 |


___

### normalImageSize <Score text="normalImageSize" /> 

• `get` **normalImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

普通图片大小

• `set` **normalImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 大小 |


___

### pressedDelegate <Score text="pressedDelegate" /> 

• `get` **pressedDelegate**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

按下事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### pressedImageColor <Score text="pressedImageColor" /> 

• `get` **pressedImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取按压图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **pressedImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置按压图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### pressedImageDrawType <Score text="pressedImageDrawType" /> 

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取按压图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

按压图片绘制类型

• `set` **pressedImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置按压图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 类型 |


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

• `get` **pressedImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取按压图片边距


#### Returns

[`Margin`](mw.Margin.md)

按压图片边距

• `set` **pressedImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置按压图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](mw.Margin.md) | 按压图片边距 |


___

### pressedImageSize <Score text="pressedImageSize" /> 

• `get` **pressedImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取按压图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

按压图片大小

• `set` **pressedImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置按压图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 大小 |


___

### pressedMethod <Score text="pressedMethod" /> 

• `get` **pressedMethod**(): [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md) <Badge type="tip" text="client" />

获取按压模式


#### Returns

[`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md)

按压模式

• `set` **pressedMethod**(`inPressedMethod`): `void` <Badge type="tip" text="client" />

设置按压模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressedMethod` | [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md) | Press模式选择 |


___

### releasedDelegate <Score text="releasedDelegate" /> 

• `get` **releasedDelegate**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

释放事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### roundBoxPercentOffset <Score text="roundBoxPercentOffset" /> 

• `get` **roundBoxPercentOffset**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取矩形百分比大小边距偏移


#### Returns

[`Vector2`](mw.Vector2.md)

矩形大小边距偏移的百分比占据，0~0.5

• `set` **roundBoxPercentOffset**(`percent`): `void` <Badge type="tip" text="client" />

设置矩形大小边距偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `percent` | [`Vector2`](mw.Vector2.md) | 矩形大小百分比，0~0.5 |


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


___

### touchMethod <Score text="touchMethod" /> 

• `get` **touchMethod**(): [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md) <Badge type="tip" text="client" />

获取触摸模式


#### Returns

[`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md)

触摸模式

• `set` **touchMethod**(`inTouchMethod`): `void` <Badge type="tip" text="client" />

设置触摸模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md) | Touch模式选择 |


___

### unHoveredDelegate <Score text="unHoveredDelegate" /> 

• `get` **unHoveredDelegate**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

未悬浮事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

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
___

### isPressed <Score text="isPressed" /> 

• **isPressed**(): `boolean` <Badge type="tip" text="client" />

是否按下


#### Returns

`boolean`

返回按钮是否按下

___

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

• `Static` **newObject**(`parent?`, `inName?`): [`MaskButton`](mw.MaskButton.md) <Badge type="tip" text="client" />

创建 Mask 控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default: null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`MaskButton`](mw.MaskButton.md)

返回创建的对象
