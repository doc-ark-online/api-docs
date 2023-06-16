[Gui](../groups/Core.Gui.md) / StaleButton

# StaleButton <Badge type="tip" text="Class" /> <Score text="StaleButton" />

按钮

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`StaleButton`**

## Table of contents

| Accessors |
| :-----|
| **[clickMethod](mw.StaleButton.md#clickmethod)**(`inClickMethod`: [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md)): `void` <br> 设置点击模式|
| **[contentColor](mw.StaleButton.md#contentcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 设置字体内容颜色|
| **[disableImageColor](mw.StaleButton.md#disableimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取禁用图片颜色|
| **[disableImageDrawType](mw.StaleButton.md#disableimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取禁用图片绘制类型|
| **[disableImageGuid](mw.StaleButton.md#disableimageguid)**(): `string` <br> 获取禁用图片ID|
| **[disableImageMargin](mw.StaleButton.md#disableimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取禁用图片边距|
| **[disableImageSize](mw.StaleButton.md#disableimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取禁用图片大小|
| **[focusable](mw.StaleButton.md#focusable)**(): `boolean` <br> 获取是否获取输入焦点|
| **[fontColor](mw.StaleButton.md#fontcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取字体颜色|
| **[fontLetterSpace](mw.StaleButton.md#fontletterspace)**(): `number` <br> 获取字体间距|
| **[fontSize](mw.StaleButton.md#fontsize)**(): `number` <br> 获取字体大小|
| **[glyph](mw.StaleButton.md#glyph)**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) <br> 获取字体字形|
| **[normalImageColor](mw.StaleButton.md#normalimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取普通图片颜色|
| **[normalImageDrawType](mw.StaleButton.md#normalimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取普通图片绘制类型|
| **[normalImageGuid](mw.StaleButton.md#normalimageguid)**(): `string` <br> 获取普通图片ID|
| **[normalImageMargin](mw.StaleButton.md#normalimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取普通图片边距|
| **[normalImageSize](mw.StaleButton.md#normalimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取图片大小|
| **[onClicked](mw.StaleButton.md#onclicked)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 点击事件|
| **[onHovered](mw.StaleButton.md#onhovered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 悬浮事件|
| **[onPressed](mw.StaleButton.md#onpressed)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 按下事件|
| **[onReleased](mw.StaleButton.md#onreleased)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 释放事件|
| **[onUnhovered](mw.StaleButton.md#onunhovered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 未悬浮事件|
| **[outlineColor](mw.StaleButton.md#outlinecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取字体描边颜色|
| **[outlineSize](mw.StaleButton.md#outlinesize)**(): `number` <br> 获取字体描边宽度|
| **[pressMethod](mw.StaleButton.md#pressmethod)**(`inPressMethod`: [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md)): `void` <br> 设置按压模式|
| **[pressedImagColor](mw.StaleButton.md#pressedimagcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取按压图片颜色|
| **[pressedImageDrawType](mw.StaleButton.md#pressedimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取按压图片绘制类型|
| **[pressedImageGuid](mw.StaleButton.md#pressedimageguid)**(): `string` <br> 获取按下图片ID|
| **[pressedImageMargin](mw.StaleButton.md#pressedimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取按压图片边距|
| **[pressedImageSize](mw.StaleButton.md#pressedimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取按压图片大小|
| **[shadowColor](mw.StaleButton.md#shadowcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取字体阴影颜色|
| **[shadowOffset](mw.StaleButton.md#shadowoffset)**(): [`Vector2`](mw.Vector2.md) <br> 获取字体阴影偏移|
| **[strikethroughEnable](mw.StaleButton.md#strikethroughenable)**(): `boolean` <br> 获取是否开启字体删除线|
| **[text](mw.StaleButton.md#text)**(): `string` <br> 获取按钮文字|
| **[textAlign](mw.StaleButton.md#textalign)**(): [`TextJustify`](../enums/mw.TextJustify.md) <br> 获取字体对齐方式|
| **[textVerticalAlign](mw.StaleButton.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <br> 获取字体垂直对齐方式|
| **[touchMethod](mw.StaleButton.md#touchmethod)**(`inTouchMethod`: [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md)): `void` <br> 设置触摸模式|
| **[transitionEnable](mw.StaleButton.md#transitionenable)**(): `boolean` <br> 获取按钮是否启用过度模式,按下是否有效果|
| **[underlineEnable](mw.StaleButton.md#underlineenable)**(): `boolean` <br> 返回是否开启字体下划线|


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
| **[isPressed](mw.StaleButton.md#ispressed)**(): `boolean` <br> 是否按下|
| **[setDisableImageColorByHex](mw.StaleButton.md#setdisableimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置不可用颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setDisableImageColorDecimal](mw.StaleButton.md#setdisableimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置不可用颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setFontColorByHex](mw.StaleButton.md#setfontcolorbyhex)**(`inHexString`: `string`): `void` <br> 设置字体颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setFontColorDecimal](mw.StaleButton.md#setfontcolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置字体颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setNormalImageColorByHex](mw.StaleButton.md#setnormalimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置正常颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setNormalImageColorDecimal](mw.StaleButton.md#setnormalimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置正常颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setPressedImageColorByHex](mw.StaleButton.md#setpressedimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置按下颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setPressedImageColorDecimal](mw.StaleButton.md#setpressedimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置按下颜色,指定R、G、B、A设置颜色 0 ~255|
| **[newObject](mw.StaleButton.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`StaleButton`](mw.StaleButton.md) <br> 创建 StaleButton 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


### clickMethod <Score text="clickMethod" /> 

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="client" />

设置点击模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md) | 点击模式 |


点击模式选择

___

### contentColor <Score text="contentColor" /> 

• `get` **contentColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

设置字体内容颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

字体内容颜色，Type.LinearColor类型，数据范围0~1

• `set` **contentColor**(`inContentColor`): `void` <Badge type="tip" text="client" />

设置字体内容颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


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
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |


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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | void |


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

| Name | Type |
| :------ | :------ |
| `inGuid` | `string` |


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
| `inMargin` | [`Margin`](mw.Margin.md) | 边距 |


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

### fontColor <Score text="fontColor" /> 

• `get` **fontColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取字体颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

字体颜色，Type.LinearColor类型，数据范围0~1

• `set` **fontColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置字体颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 字体颜色，Type.LinearColor类型，数据范围0~1 |


___

### fontLetterSpace <Score text="fontLetterSpace" /> 

• `get` **fontLetterSpace**(): `number` <Badge type="tip" text="client" />

获取字体间距


#### Returns

`number`

字体间距

• `set` **fontLetterSpace**(`fontLetterSpace`): `void` <Badge type="tip" text="client" />

设置字体间距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fontLetterSpace` | `number` | 间距 |


___

### fontSize <Score text="fontSize" /> 

• `get` **fontSize**(): `number` <Badge type="tip" text="client" />

获取字体大小


#### Returns

`number`

字体大小

• `set` **fontSize**(`FontSize`): `void` <Badge type="tip" text="client" />

设置字体大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FontSize` | `number` | 大小 |


___

### glyph <Score text="glyph" /> 

• `get` **glyph**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) <Badge type="tip" text="client" />

获取字体字形


#### Returns

[`UIFontGlyph`](../enums/mw.UIFontGlyph.md)

字体字形

• `set` **glyph**(`inGlyph`): `void` <Badge type="tip" text="client" />

设置字体字形


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) | 字体字形的类型 |


___

### normalImageColor <Score text="normalImageColor" /> 

• `get` **normalImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取普通图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **normalImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置普通图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) |  普通图片颜色，Type.LinearColor类型，数据范围0~1 |


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
| `inDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 绘制类型 |


___

### normalImageGuid <Score text="normalImageGuid" /> 

• `get` **normalImageGuid**(): `string` <Badge type="tip" text="client" />

获取普通图片ID


#### Returns

`string`

普通图片ID

• `set` **normalImageGuid**(`inGuid`): `void` <Badge type="tip" text="client" />

设置正常图片ID


#### Parameters

| Name | Type |
| :------ | :------ |
| `inGuid` | `string` |


___

### normalImageMargin <Score text="normalImageMargin" /> 

• `get` **normalImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取普通图片边距


#### Returns

[`Margin`](mw.Margin.md)

边距

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
| `inSize` | [`Vector2`](mw.Vector2.md) | 设置的图片大小，Type.LinearColor类型，数据范围0~1 |


___

### onClicked <Score text="onClicked" /> 

• `get` **onClicked**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

点击事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onHovered <Score text="onHovered" /> 

• `get` **onHovered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

悬浮事件

只在客户端调用生效e

#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onPressed <Score text="onPressed" /> 

• `get` **onPressed**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

按下事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onReleased <Score text="onReleased" /> 

• `get` **onReleased**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

释放事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onUnhovered <Score text="onUnhovered" /> 

• `get` **onUnhovered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

未悬浮事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### outlineColor <Score text="outlineColor" /> 

• `get` **outlineColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取字体描边颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

字体描边颜色，Type.LinearColor类型，数据范围0~1

• `set` **outlineColor**(`inOutlineColor`): `void` <Badge type="tip" text="client" />

设置字体描边颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](mw.LinearColor.md) | 描边颜色，Type.LinearColor类型，数据范围0~1 |


___

### outlineSize <Score text="outlineSize" /> 

• `get` **outlineSize**(): `number` <Badge type="tip" text="client" />

获取字体描边宽度


#### Returns

`number`

字体描边宽度

• `set` **outlineSize**(`inOutlineSize`): `void` <Badge type="tip" text="client" />

设置字体描边宽度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineSize` | `number` | 设置的大小 |


___

### pressMethod <Score text="pressMethod" /> 

• `set` **pressMethod**(`inPressMethod`): `void` <Badge type="tip" text="client" />

设置按压模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressMethod` | [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md) | 按压模式 |


___

### pressedImagColor <Score text="pressedImagColor" /> 

• `get` **pressedImagColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取按压图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **pressedImagColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置按压图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 按压的颜色，Type.LinearColor类型，数据范围0~1 |


___

### pressedImageDrawType <Score text="pressedImageDrawType" /> 

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取按压图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

按压图片绘制类型

• `set` **pressedImageDrawType**(`inDrawTYpe`): `void` <Badge type="tip" text="client" />

设置按压图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 绘制类型 |


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

| Name | Type |
| :------ | :------ |
| `inGuid` | `string` |


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
| `inMargin` | [`Margin`](mw.Margin.md) | 边距 |


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
| `inSize` | [`Vector2`](mw.Vector2.md) | size |


___

### shadowColor <Score text="shadowColor" /> 

• `get` **shadowColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取字体阴影颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

字体阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowColor**(`inShadowColor`): `void` <Badge type="tip" text="client" />

设置字体阴影颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](mw.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |


___

### shadowOffset <Score text="shadowOffset" /> 

• `get` **shadowOffset**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取字体阴影偏移


#### Returns

[`Vector2`](mw.Vector2.md)

字体阴影偏移

• `set` **shadowOffset**(`inOffset`): `void` <Badge type="tip" text="client" />

设置字体阴影偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](mw.Vector2.md) | 阴影偏移量 |


___

### strikethroughEnable <Score text="strikethroughEnable" /> 

• `get` **strikethroughEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启字体删除线


#### Returns

`boolean`

是否开启字体删除线

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void` <Badge type="tip" text="client" />

设置是否开启字体删除线


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableStrikethrough` | `boolean` | 是否开启 |


___

### text <Score text="text" /> 

• `get` **text**(): `string` <Badge type="tip" text="client" />

获取按钮文字


#### Returns

`string`

返回文字

• `set` **text**(`InString`): `void` <Badge type="tip" text="client" />

设置按钮文字


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InString` | `string` | 文字 |


新文本

___

### textAlign <Score text="textAlign" /> 

• `get` **textAlign**(): [`TextJustify`](../enums/mw.TextJustify.md) <Badge type="tip" text="client" />

获取字体对齐方式


#### Returns

[`TextJustify`](../enums/mw.TextJustify.md)

字体对齐方式

• `set` **textAlign**(`InTextJustify`): `void` <Badge type="tip" text="client" />

设置字体对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTextJustify` | [`TextJustify`](../enums/mw.TextJustify.md) | 对齐方式的枚举 |


___

### textVerticalAlign <Score text="textVerticalAlign" /> 

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <Badge type="tip" text="client" />

获取字体垂直对齐方式


#### Returns

[`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md)

字体垂直对齐方式

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void` <Badge type="tip" text="client" />

设置字体垂直对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) | 对齐方式 |


___

### touchMethod <Score text="touchMethod" /> 

• `set` **touchMethod**(`inTouchMethod`): `void` <Badge type="tip" text="client" />

设置触摸模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md) | Touch模式选择 |


___

### transitionEnable <Score text="transitionEnable" /> 

• `get` **transitionEnable**(): `boolean` <Badge type="tip" text="client" />

获取按钮是否启用过度模式,按下是否有效果


#### Returns

`boolean`

按钮是否启用过度模式

• `set` **transitionEnable**(`inBoolean`): `void` <Badge type="tip" text="client" />

是否套用不同的按下方案


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inBoolean` | `boolean` | 是否套用不同的按下方案 |


___

### underlineEnable <Score text="underlineEnable" /> 

• `get` **underlineEnable**(): `boolean` <Badge type="tip" text="client" />

返回是否开启字体下划线


#### Returns

`boolean`

获取是否开启字体下划线

• `set` **underlineEnable**(`inEnableUnderline`): `void` <Badge type="tip" text="client" />

设置是否开启字体下划线


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableUnderline` | `boolean` | 设置是否开启下划线 |



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

设置不可用颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setDisableImageColorDecimal <Score text="setDisableImageColorDecimal" /> 

• **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

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

• **setFontColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置字体颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |


___

### setFontColorDecimal <Score text="setFontColorDecimal" /> 

• **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

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

• **setNormalImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置正常颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setNormalImageColorDecimal <Score text="setNormalImageColorDecimal" /> 

• **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

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

• **setPressedImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置按下颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setPressedImageColorDecimal <Score text="setPressedImageColorDecimal" /> 

• **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

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

• `Static` **newObject**(`parent?`, `inName?`): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />

创建 StaleButton 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外Parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`StaleButton`](mw.StaleButton.md)

返回创建的对象
