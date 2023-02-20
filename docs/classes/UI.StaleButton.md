[UI](../modules/UI.UI.md) / StaleButton

# StaleButton <Badge type="tip" text="Class" /> <Score text="StaleButton" />

**`Groups`**

GUI

按钮

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`StaleButton`**

## Table of contents

| Accessors |
| :-----|
| **[clickMethod](UI.StaleButton.md#clickmethod)**([`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md)): `void` <br> 设置点击模式|
| **[contentColor](UI.StaleButton.md#contentcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 设置字体内容颜色|
| **[disableImageColor](UI.StaleButton.md#disableimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取禁用图片颜色|
| **[disableImageDrawType](UI.StaleButton.md#disableimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取禁用图片绘制类型|
| **[disableImageGuid](UI.StaleButton.md#disableimageguid)**(): `string` <br> 获取禁用图片ID|
| **[disableImageMargin](UI.StaleButton.md#disableimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取禁用图片边距|
| **[disableImageSize](UI.StaleButton.md#disableimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取禁用图片大小|
| **[focusable](UI.StaleButton.md#focusable)**(): `boolean` <br> 获取是否获取输入焦点|
| **[fontColor](UI.StaleButton.md#fontcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取字体颜色|
| **[fontLetterSpace](UI.StaleButton.md#fontletterspace)**(): `number` <br> 获取字体间距|
| **[fontSize](UI.StaleButton.md#fontsize)**(): `number` <br> 获取字体大小|
| **[glyph](UI.StaleButton.md#glyph)**(): [`UIFontGlyph`](../enums/UI.UIFontGlyph.md) <br> 获取字体字形|
| **[normalImageColor](UI.StaleButton.md#normalimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取普通图片颜色|
| **[normalImageDrawType](UI.StaleButton.md#normalimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取普通图片绘制类型|
| **[normalImageGuid](UI.StaleButton.md#normalimageguid)**(): `string` <br> 获取普通图片ID|
| **[normalImageMargin](UI.StaleButton.md#normalimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取普通图片边距|
| **[normalImageSize](UI.StaleButton.md#normalimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取图片大小|
| **[onClicked](UI.StaleButton.md#onclicked)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 点击事件|
| **[onHovered](UI.StaleButton.md#onhovered)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 悬浮事件|
| **[onPressed](UI.StaleButton.md#onpressed)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 按下事件|
| **[onReleased](UI.StaleButton.md#onreleased)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 释放事件|
| **[onUnhovered](UI.StaleButton.md#onunhovered)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 未悬浮事件|
| **[outlineColor](UI.StaleButton.md#outlinecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取字体描边颜色|
| **[outlineSize](UI.StaleButton.md#outlinesize)**(): `number` <br> 获取字体描边宽度|
| **[pressMethod](UI.StaleButton.md#pressmethod)**([`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md)): `void` <br> 设置按压模式|
| **[pressedImagColor](UI.StaleButton.md#pressedimagcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取按压图片颜色|
| **[pressedImageDrawType](UI.StaleButton.md#pressedimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取按压图片绘制类型|
| **[pressedImageGuid](UI.StaleButton.md#pressedimageguid)**(): `string` <br> 获取按下图片ID|
| **[pressedImageMargin](UI.StaleButton.md#pressedimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取按压图片边距|
| **[pressedImageSize](UI.StaleButton.md#pressedimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取按压图片大小|
| **[shadowColor](UI.StaleButton.md#shadowcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取字体阴影颜色|
| **[shadowOffset](UI.StaleButton.md#shadowoffset)**(): [`Vector2`](Type.Vector2.md) <br> 获取字体阴影偏移|
| **[strikethroughEnable](UI.StaleButton.md#strikethroughenable)**(): `boolean` <br> 获取是否开启字体删除线|
| **[text](UI.StaleButton.md#text)**(): `string` <br> 获取按钮文字|
| **[textAlign](UI.StaleButton.md#textalign)**(): [`TextJustify`](../enums/UI.TextJustify.md) <br> 获取字体对齐方式|
| **[textVerticalAlign](UI.StaleButton.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md) <br> 获取字体垂直对齐方式|
| **[touchMethod](UI.StaleButton.md#touchmethod)**([`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md)): `void` <br> 设置触摸模式|
| **[transitionEnable](UI.StaleButton.md#transitionenable)**(): `boolean` <br> 获取按钮是否启用过度模式,按下是否有效果|
| **[underlineEnable](UI.StaleButton.md#underlineenable)**(): `boolean` <br> 返回是否开启字体下划线|


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
| **[slot](UI.Widget.md#slot)**(): [`UISlot`](UI.UISlot.md) <br> since:020 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[isPressed](UI.StaleButton.md#ispressed)**(): `boolean` <br> 是否按下|
| **[setDisableImageColorByHex](UI.StaleButton.md#setdisableimagecolorbyhex)**(`string`): `void` <br> 设置不可用颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setDisableImageColorDecimal](UI.StaleButton.md#setdisableimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置不可用颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setFontColorByHex](UI.StaleButton.md#setfontcolorbyhex)**(`string`): `void` <br> 设置字体颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setFontColorDecimal](UI.StaleButton.md#setfontcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置字体颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setNormalImageColorByHex](UI.StaleButton.md#setnormalimagecolorbyhex)**(`string`): `void` <br> 设置正常颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setNormalImageColorDecimal](UI.StaleButton.md#setnormalimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置正常颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setPressedImageColorByHex](UI.StaleButton.md#setpressedimagecolorbyhex)**(`string`): `void` <br> 设置按下颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setPressedImageColorDecimal](UI.StaleButton.md#setpressedimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置按下颜色,指定R、G、B、A设置颜色 0 ~255|
| **[newObject](UI.StaleButton.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`StaleButton`](UI.StaleButton.md) <br> 创建 StaleButton 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**([`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](UI.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


## Accessors

### clickMethod <Score text="clickMethod" /> 

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="other" />

设置点击模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md) | 点击模式 |


点击模式选择


### contentColor <Score text="contentColor" /> 

• `get` **contentColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

设置字体内容颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

字体内容颜色，Type.LinearColor类型，数据范围0~1

• `set` **contentColor**(`inContentColor`): `void` <Badge type="tip" text="other" />

设置字体内容颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |



### disableImageColor <Score text="disableImageColor" /> 

• `get` **disableImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取禁用图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

禁用图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **disableImageColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置禁用图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |


___

### disableImageDrawType <Score text="disableImageDrawType" /> 

• `get` **disableImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取禁用图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

禁用图片绘制类型

• `set` **disableImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="other" />

设置禁用图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | void |


___

### disableImageGuid <Score text="disableImageGuid" /> 

• `get` **disableImageGuid**(): `string` <Badge type="tip" text="other" />

获取禁用图片ID


#### Returns

`string`

禁用图片ID

• `set` **disableImageGuid**(`inGuid`): `void` <Badge type="tip" text="other" />

设置不可用图片ID


#### Parameters

| Name | Type |
| :------ | :------ |
| `inGuid` | `string` |


___

### disableImageMargin <Score text="disableImageMargin" /> 

• `get` **disableImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

获取禁用图片边距


#### Returns

[`Margin`](UI.Margin.md)

禁用图片边距

• `set` **disableImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

设置禁用图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 边距 |


___

### disableImageSize <Score text="disableImageSize" /> 

• `get` **disableImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取禁用图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

禁用图片大小

• `set` **disableImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

设置禁用图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |



### focusable <Score text="focusable" /> 

• `get` **focusable**(): `boolean` <Badge type="tip" text="other" />

获取是否获取输入焦点


#### Returns

`boolean`

是否获取输入焦点

• `set` **focusable**(`inFocus`): `void` <Badge type="tip" text="other" />

设置是否获取输入焦点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFocus` | `boolean` | 是否获取输入焦点 |


___

### fontColor <Score text="fontColor" /> 

• `get` **fontColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取字体颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

字体颜色，Type.LinearColor类型，数据范围0~1

• `set` **fontColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置字体颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 字体颜色，Type.LinearColor类型，数据范围0~1 |


___

### fontLetterSpace <Score text="fontLetterSpace" /> 

• `get` **fontLetterSpace**(): `number` <Badge type="tip" text="other" />

获取字体间距


#### Returns

`number`

字体间距

• `set` **fontLetterSpace**(`fontLetterSpace`): `void` <Badge type="tip" text="other" />

设置字体间距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fontLetterSpace` | `number` | 间距 |


___

### fontSize <Score text="fontSize" /> 

• `get` **fontSize**(): `number` <Badge type="tip" text="other" />

获取字体大小


#### Returns

`number`

字体大小

• `set` **fontSize**(`FontSize`): `void` <Badge type="tip" text="other" />

设置字体大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FontSize` | `number` | 大小 |


___

### glyph <Score text="glyph" /> 

• `get` **glyph**(): [`UIFontGlyph`](../enums/UI.UIFontGlyph.md) <Badge type="tip" text="other" />

获取字体字形


#### Returns

[`UIFontGlyph`](../enums/UI.UIFontGlyph.md)

字体字形

• `set` **glyph**(`inGlyph`): `void` <Badge type="tip" text="other" />

设置字体字形


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UIFontGlyph.md) | 字体字形的类型 |



### normalImageColor <Score text="normalImageColor" /> 

• `get` **normalImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取普通图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **normalImageColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置普通图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) |  普通图片颜色，Type.LinearColor类型，数据范围0~1 |


___

### normalImageDrawType <Score text="normalImageDrawType" /> 

• `get` **normalImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取普通图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

普通图片绘制类型

• `set` **normalImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="other" />

设置普通图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 绘制类型 |


___

### normalImageGuid <Score text="normalImageGuid" /> 

• `get` **normalImageGuid**(): `string` <Badge type="tip" text="other" />

获取普通图片ID


#### Returns

`string`

普通图片ID

• `set` **normalImageGuid**(`inGuid`): `void` <Badge type="tip" text="other" />

设置正常图片ID


#### Parameters

| Name | Type |
| :------ | :------ |
| `inGuid` | `string` |


___

### normalImageMargin <Score text="normalImageMargin" /> 

• `get` **normalImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

获取普通图片边距


#### Returns

[`Margin`](UI.Margin.md)

边距

• `set` **normalImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

设置普通图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 普通图片边距 |


___

### normalImageSize <Score text="normalImageSize" /> 

• `get` **normalImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

普通图片大小

• `set` **normalImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

设置图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 设置的图片大小，Type.LinearColor类型，数据范围0~1 |


___

### onClicked <Score text="onClicked" /> 

• `get` **onClicked**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

点击事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onHovered <Score text="onHovered" /> 

• `get` **onHovered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

悬浮事件

只在客户端调用生效e

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onPressed <Score text="onPressed" /> 

• `get` **onPressed**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

按下事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onReleased <Score text="onReleased" /> 

• `get` **onReleased**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

释放事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onUnhovered <Score text="onUnhovered" /> 

• `get` **onUnhovered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

未悬浮事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### outlineColor <Score text="outlineColor" /> 

• `get` **outlineColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取字体描边颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

字体描边颜色，Type.LinearColor类型，数据范围0~1

• `set` **outlineColor**(`inOutlineColor`): `void` <Badge type="tip" text="other" />

设置字体描边颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](Type.LinearColor.md) | 描边颜色，Type.LinearColor类型，数据范围0~1 |


___

### outlineSize <Score text="outlineSize" /> 

• `get` **outlineSize**(): `number` <Badge type="tip" text="other" />

获取字体描边宽度


#### Returns

`number`

字体描边宽度

• `set` **outlineSize**(`inOutlineSize`): `void` <Badge type="tip" text="other" />

设置字体描边宽度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineSize` | `number` | 设置的大小 |



### pressMethod <Score text="pressMethod" /> 

• `set` **pressMethod**(`inPressMethod`): `void` <Badge type="tip" text="other" />

设置按压模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressMethod` | [`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md) | 按压模式 |


___

### pressedImagColor <Score text="pressedImagColor" /> 

• `get` **pressedImagColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取按压图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **pressedImagColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置按压图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 按压的颜色，Type.LinearColor类型，数据范围0~1 |


___

### pressedImageDrawType <Score text="pressedImageDrawType" /> 

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取按压图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

按压图片绘制类型

• `set` **pressedImageDrawType**(`inDrawTYpe`): `void` <Badge type="tip" text="other" />

设置按压图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 绘制类型 |


___

### pressedImageGuid <Score text="pressedImageGuid" /> 

• `get` **pressedImageGuid**(): `string` <Badge type="tip" text="other" />

获取按下图片ID


#### Returns

`string`

按下图片ID

• `set` **pressedImageGuid**(`inGuid`): `void` <Badge type="tip" text="other" />

设置按下图片ID


#### Parameters

| Name | Type |
| :------ | :------ |
| `inGuid` | `string` |


___

### pressedImageMargin <Score text="pressedImageMargin" /> 

• `get` **pressedImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

获取按压图片边距


#### Returns

[`Margin`](UI.Margin.md)

按压图片边距

• `set` **pressedImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

设置按压图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 边距 |


___

### pressedImageSize <Score text="pressedImageSize" /> 

• `get` **pressedImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取按压图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

按压图片大小

• `set` **pressedImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

设置按压图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | size |



### shadowColor <Score text="shadowColor" /> 

• `get` **shadowColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取字体阴影颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

字体阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowColor**(`inShadowColor`): `void` <Badge type="tip" text="other" />

设置字体阴影颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](Type.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |


___

### shadowOffset <Score text="shadowOffset" /> 

• `get` **shadowOffset**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取字体阴影偏移


#### Returns

[`Vector2`](Type.Vector2.md)

字体阴影偏移

• `set` **shadowOffset**(`inOffset`): `void` <Badge type="tip" text="other" />

设置字体阴影偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](Type.Vector2.md) | 阴影偏移量 |



### strikethroughEnable <Score text="strikethroughEnable" /> 

• `get` **strikethroughEnable**(): `boolean` <Badge type="tip" text="other" />

获取是否开启字体删除线


#### Returns

`boolean`

是否开启字体删除线

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void` <Badge type="tip" text="other" />

设置是否开启字体删除线


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableStrikethrough` | `boolean` | 是否开启 |


___

### text <Score text="text" /> 

• `get` **text**(): `string` <Badge type="tip" text="other" />

获取按钮文字


#### Returns

`string`

返回文字

• `set` **text**(`InString`): `void` <Badge type="tip" text="other" />

设置按钮文字


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InString` | `string` | 文字 |


新文本

___

### textAlign <Score text="textAlign" /> 

• `get` **textAlign**(): [`TextJustify`](../enums/UI.TextJustify.md) <Badge type="tip" text="other" />

获取字体对齐方式


#### Returns

[`TextJustify`](../enums/UI.TextJustify.md)

字体对齐方式

• `set` **textAlign**(`InTextJustify`): `void` <Badge type="tip" text="other" />

设置字体对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTextJustify` | [`TextJustify`](../enums/UI.TextJustify.md) | 对齐方式的枚举 |


___

### textVerticalAlign <Score text="textVerticalAlign" /> 

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md) <Badge type="tip" text="other" />

获取字体垂直对齐方式


#### Returns

[`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md)

字体垂直对齐方式

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void` <Badge type="tip" text="other" />

设置字体垂直对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md) | 对齐方式 |



### touchMethod <Score text="touchMethod" /> 

• `set` **touchMethod**(`inTouchMethod`): `void` <Badge type="tip" text="other" />

设置触摸模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md) | Touch模式选择 |



### transitionEnable <Score text="transitionEnable" /> 

• `get` **transitionEnable**(): `boolean` <Badge type="tip" text="other" />

获取按钮是否启用过度模式,按下是否有效果


#### Returns

`boolean`

按钮是否启用过度模式

• `set` **transitionEnable**(`inBoolean`): `void` <Badge type="tip" text="other" />

是否套用不同的按下方案


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inBoolean` | `boolean` | 是否套用不同的按下方案 |


___

### underlineEnable <Score text="underlineEnable" /> 

• `get` **underlineEnable**(): `boolean` <Badge type="tip" text="other" />

返回是否开启字体下划线


#### Returns

`boolean`

获取是否开启字体下划线

• `set` **underlineEnable**(`inEnableUnderline`): `void` <Badge type="tip" text="other" />

设置是否开启字体下划线


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableUnderline` | `boolean` | 设置是否开启下划线 |



## Methods

### isPressed <Score text="isPressed" /> 

• **isPressed**(): `boolean` <Badge type="tip" text="other" />

是否按下


#### Returns

`boolean`

返回按钮是否按下


### setDisableImageColorByHex <Score text="setDisableImageColorByHex" /> 

• **setDisableImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置不可用颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setDisableImageColorDecimal <Score text="setDisableImageColorDecimal" /> 

• **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

设置不可用颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### setFontColorByHex <Score text="setFontColorByHex" /> 

• **setFontColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置字体颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |


___

### setFontColorDecimal <Score text="setFontColorDecimal" /> 

• **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

设置字体颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 字体R值，数据范围0~255 |
| `G` | `number` | 字体G值，数据范围0~255 |
| `B` | `number` | 字体B值，数据范围0~255 |
| `A` | `number` | 字体透明度，数据范围0~255 |


___

### setNormalImageColorByHex <Score text="setNormalImageColorByHex" /> 

• **setNormalImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置正常颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setNormalImageColorDecimal <Score text="setNormalImageColorDecimal" /> 

• **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

设置正常颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### setPressedImageColorByHex <Score text="setPressedImageColorByHex" /> 

• **setPressedImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置按下颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setPressedImageColorDecimal <Score text="setPressedImageColorDecimal" /> 

• **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

设置按下颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`StaleButton`](UI.StaleButton.md) <Badge type="tip" text="other" />

创建 StaleButton 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外Parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`StaleButton`](UI.StaleButton.md)

返回创建的对象
