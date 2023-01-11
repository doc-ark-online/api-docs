[UI](../modules/UI.UI.md) / Button

# Button <Badge type="tip" text="Class" /> 

**`Description`**

按钮,无默认text

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`Button`**

## Table of contents

| Accessors |
| :-----|
| **[clickMethod](UI.Button.md#clickmethod)**([`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md)): `void` <br> 设置点击模式|
| **[disableImageColor](UI.Button.md#disableimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取禁用图片颜色|
| **[disableImageDrawType](UI.Button.md#disableimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取禁用图片绘制类型|
| **[disableImageGuid](UI.Button.md#disableimageguid)**(): `string` <br> 获取禁用图片ID|
| **[disableImageMargin](UI.Button.md#disableimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取禁用图片边距|
| **[disableImageSize](UI.Button.md#disableimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取禁用图片大小|
| **[focusable](UI.Button.md#focusable)**(): `boolean` <br> 获取是否获取输入焦点|
| **[normalImageColor](UI.Button.md#normalimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取普通图片颜色|
| **[normalImageDrawType](UI.Button.md#normalimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取普通图片绘制类型|
| **[normalImageGuid](UI.Button.md#normalimageguid)**(): `string` <br> 获取普通图片ID|
| **[normalImageMargin](UI.Button.md#normalimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取普通图片边距|
| **[normalImageSize](UI.Button.md#normalimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取图片大小|
| **[onClicked](UI.Button.md#onclicked)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 点击事件|
| **[onHovered](UI.Button.md#onhovered)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 悬浮事件|
| **[onPressed](UI.Button.md#onpressed)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 按下事件|
| **[onReleased](UI.Button.md#onreleased)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 释放事件|
| **[onUnhovered](UI.Button.md#onunhovered)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 未悬浮事件|
| **[pressedImageColor](UI.Button.md#pressedimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取按压图片颜色|
| **[pressedImageDrawType](UI.Button.md#pressedimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取按压图片绘制类型|
| **[pressedImageGuid](UI.Button.md#pressedimageguid)**(): `string` <br> 获取按下图片ID|
| **[pressedImageMargin](UI.Button.md#pressedimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取按压图片边距|
| **[pressedImageSize](UI.Button.md#pressedimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取按压图片大小|
| **[pressedMethod](UI.Button.md#pressedmethod)**([`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md)): `void` <br> 设置按压模式|
| **[touchMethod](UI.Button.md#touchmethod)**([`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md)): `void` <br> 设置触摸模式|
| **[transitionEnable](UI.Button.md#transitionenable)**(): `boolean` <br> 按钮是否启用过度模式,按下是否有效果|


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
| **[slot](UI.Widget.md#slot)**(): [`UISlot`](UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[isPressed](UI.Button.md#ispressed)**(): `boolean` <br> 是否按下|
| **[setButtonDisableByFile](UI.Button.md#setbuttondisablebyfile)**(`string`): `void` <br> 设置不可用图片|
| **[setButtonNormalByFile](UI.Button.md#setbuttonnormalbyfile)**(`string`): `void` <br> 设置正常图片|
| **[setButtonPressedByFile](UI.Button.md#setbuttonpressedbyfile)**(`string`): `void` <br> 设置按下图片|
| **[setDisableImageColorByHex](UI.Button.md#setdisableimagecolorbyhex)**(`string`): `void` <br> 设置不可用颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setDisableImageColorDecimal](UI.Button.md#setdisableimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置不可用颜色指定R、G、B、A设置颜色 0 ~255|
| **[setNormalImageColorByHex](UI.Button.md#setnormalimagecolorbyhex)**(`string`): `void` <br> 设置正常颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setNormalImageColorDecimal](UI.Button.md#setnormalimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置正常颜色 指定R、G、B、A设置颜色 0 ~255|
| **[setPressedImageColorByHex](UI.Button.md#setpressedimagecolorbyhex)**(`string`): `void` <br> 设置按下颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setPressedImageColorDecimal](UI.Button.md#setpressedimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置按下颜色指定R、G、B、A设置颜色 0 ~255|
| **[newObject](UI.Button.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`Button`](UI.Button.md) <br> 创建Button控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**([`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
:::


## Accessors

### clickMethod  

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="other" />

**`Description`**

设置点击模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md) | 点击模式选择 |



### disableImageColor  

• `get` **disableImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取禁用图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

禁用图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **disableImageColor**(`inColor`): `void` <Badge type="tip" text="other" />

**`Description`**

设置禁用图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### disableImageDrawType  

• `get` **disableImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

**`Description`**

获取禁用图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

禁用图片绘制类型

• `set` **disableImageDrawType**(`inDrawTYpe`): `void` <Badge type="tip" text="other" />

**`Description`**

设置禁用图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |


___

### disableImageGuid  

• `get` **disableImageGuid**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取禁用图片ID


#### Returns

`string`

禁用图片ID

• `set` **disableImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

**`Description`**

设置不可用图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


___

### disableImageMargin  

• `get` **disableImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

**`Description`**

获取禁用图片边距


#### Returns

[`Margin`](UI.Margin.md)

禁用图片边距

• `set` **disableImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

**`Description`**

设置禁用图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 禁用图片边距 |


___

### disableImageSize  

• `get` **disableImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

**`Description`**

获取禁用图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

禁用图片大小

• `set` **disableImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

**`Description`**

设置禁用图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |



### focusable  

• `get` **focusable**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取是否获取输入焦点


#### Returns

`boolean`

是否获取输入焦点

• `set` **focusable**(`inFocus`): `void` <Badge type="tip" text="other" />

**`Description`**

设置是否获取输入焦点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFocus` | `boolean` | 是否获取输入焦点 |



### normalImageColor  

• `get` **normalImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取普通图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **normalImageColor**(`inNormalColor`): `void` <Badge type="tip" text="other" />

**`Description`**

设置普通图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inNormalColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### normalImageDrawType  

• `get` **normalImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

**`Description`**

获取普通图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

普通图片绘制类型

• `set` **normalImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="other" />

**`Description`**

设置普通图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |


___

### normalImageGuid  

• `get` **normalImageGuid**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取普通图片ID


#### Returns

`string`

普通图片ID

• `set` **normalImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

**`Description`**

设置正常图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


___

### normalImageMargin  

• `get` **normalImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

**`Description`**

获取普通图片边距


#### Returns

[`Margin`](UI.Margin.md)

普通图片边距

• `set` **normalImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

**`Description`**

设置普通图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 普通图片边距 |


___

### normalImageSize  

• `get` **normalImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

**`Description`**

获取图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

普通图片大小

• `set` **normalImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

**`Description`**

设置图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |


___

### onClicked  

• `get` **onClicked**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

**`Description`**

点击事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onHovered  

• `get` **onHovered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

**`Description`**

悬浮事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onPressed  

• `get` **onPressed**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

**`Description`**

按下事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onReleased  

• `get` **onReleased**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

**`Description`**

释放事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onUnhovered  

• `get` **onUnhovered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

**`Description`**

未悬浮事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理


### pressedImageColor  

• `get` **pressedImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取按压图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **pressedImageColor**(`inColor`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按压图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### pressedImageDrawType  

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

**`Description`**

获取按压图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

按压图片绘制类型

• `set` **pressedImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按压图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |


___

### pressedImageGuid  

• `get` **pressedImageGuid**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取按下图片ID


#### Returns

`string`

按下图片ID

• `set` **pressedImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按下图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


___

### pressedImageMargin  

• `get` **pressedImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

**`Description`**

获取按压图片边距


#### Returns

[`Margin`](UI.Margin.md)

按压图片边距

• `set` **pressedImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按压图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 按压图片边距 |


___

### pressedImageSize  

• `get` **pressedImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

**`Description`**

获取按压图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

按压图片大小

• `set` **pressedImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按压图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |


___

### pressedMethod  

• `set` **pressedMethod**(`inPressedMethod`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按压模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressedMethod` | [`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md) | Press模式选择 |



### touchMethod  

• `set` **touchMethod**(`inTouchMethod`): `void` <Badge type="tip" text="other" />

**`Description`**

设置触摸模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md) | Touch模式选择 |



### transitionEnable  

• `get` **transitionEnable**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

按钮是否启用过度模式,按下是否有效果


#### Returns

`boolean`

按钮是否启用过度模式

• `set` **transitionEnable**(`inBoolean`): `void` <Badge type="tip" text="other" />

**`Description`**

是否套用不同的按下方案


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inBoolean` | `boolean` | 是否套用不同的按下方案 |



## Methods

### isPressed  

▸ **isPressed**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

是否按下


#### Returns

`boolean`

返回按钮是否按下

___

### setButtonDisableByFile  

▸ **setButtonDisableByFile**(`absPath`): `void` <Badge type="tip" text="other" />

**`Description`**

设置不可用图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


___

### setButtonNormalByFile  

▸ **setButtonNormalByFile**(`absPath`): `void` <Badge type="tip" text="other" />

**`Description`**

设置正常图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


___

### setButtonPressedByFile  

▸ **setButtonPressedByFile**(`absPath`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按下图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


___

### setDisableImageColorByHex  

▸ **setDisableImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

**`Description`**

设置不可用颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setDisableImageColorDecimal  

▸ **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

**`Description`**

设置不可用颜色指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### setNormalImageColorByHex  

▸ **setNormalImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

**`Description`**

设置正常颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setNormalImageColorDecimal  

▸ **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

**`Description`**

设置正常颜色 指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### setPressedImageColorByHex  

▸ **setPressedImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按下颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setPressedImageColorDecimal  

▸ **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

**`Description`**

设置按下颜色指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### newObject  

▸ `Static` **newObject**(`parent?`, `inName?`): [`Button`](UI.Button.md) <Badge type="tip" text="other" />

**`Description`**

创建Button控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default: null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Button`](UI.Button.md)

返回创建的对象
