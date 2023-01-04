[UI](../modules/UI.UI.md) / StaleButton

# StaleButton <Badge type="tip" text="Class" />

**`Description`**

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

## Accessors

### clickMethod

• `set` **clickMethod**(`inClickMethod`): `void`

**`Description`**

设置点击模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md) | 点击模式 |

#### Returns

`void`

点击模式选择


### contentColor

• `get` **contentColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

字体内容颜色，Type.LinearColor类型，数据范围0~1

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`


### disableImageColor

• `get` **disableImageColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

禁用图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **disableImageColor**(`inColor`): `void`

**`Description`**

设置禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### disableImageDrawType

• `get` **disableImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

**`Description`**

获取禁用图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

禁用图片绘制类型

• `set` **disableImageDrawType**(`inDrawType`): `void`

**`Description`**

设置禁用图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | void |

#### Returns

`void`

___

### disableImageGuid

• `get` **disableImageGuid**(): `string`

**`Description`**

获取禁用图片ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

禁用图片ID

• `set` **disableImageGuid**(`inGuid`): `void`

**`Description`**

设置不可用图片ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 图片id |

#### Returns

`void`

___

### disableImageMargin

• `get` **disableImageMargin**(): [`Margin`](UI.Margin.md)

**`Description`**

获取禁用图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.Margin.md)

禁用图片边距

• `set` **disableImageMargin**(`inMargin`): `void`

**`Description`**

设置禁用图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 边距 |

#### Returns

`void`

___

### disableImageSize

• `get` **disableImageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取禁用图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

禁用图片大小

• `set` **disableImageSize**(`inSize`): `void`

**`Description`**

设置禁用图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |

#### Returns

`void`


### focusable

• `get` **focusable**(): `boolean`

**`Description`**

获取是否获取输入焦点

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否获取输入焦点

• `set` **focusable**(`inFocus`): `void`

**`Description`**

设置是否获取输入焦点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFocus` | `boolean` | 是否获取输入焦点 |

#### Returns

`void`

___

### fontColor

• `get` **fontColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取字体颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

字体颜色，Type.LinearColor类型，数据范围0~1

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置字体颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 字体颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### fontLetterSpace

• `get` **fontLetterSpace**(): `number`

**`Description`**

获取字体间距

**`Effect`**

只在客户端调用生效

#### Returns

`number`

字体间距

• `set` **fontLetterSpace**(`fontLetterSpace`): `void`

**`Description`**

设置字体间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fontLetterSpace` | `number` | 间距 |

#### Returns

`void`

___

### fontSize

• `get` **fontSize**(): `number`

**`Description`**

获取字体大小

**`Effect`**

只在客户端调用生效

#### Returns

`number`

字体大小

• `set` **fontSize**(`FontSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FontSize` | `number` | 大小 |

#### Returns

`void`

___

### glyph

• `get` **glyph**(): [`UIFontGlyph`](../enums/UI.UIFontGlyph.md)

**`Description`**

获取字体字形

**`Effect`**

只在客户端调用生效

#### Returns

[`UIFontGlyph`](../enums/UI.UIFontGlyph.md)

字体字形

• `set` **glyph**(`inGlyph`): `void`

**`Description`**

设置字体字形

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UIFontGlyph.md) | 字体字形的类型 |

#### Returns

`void`


### normalImageColor

• `get` **normalImageColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取普通图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **normalImageColor**(`inColor`): `void`

**`Description`**

设置普通图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) |  普通图片颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### normalImageDrawType

• `get` **normalImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

**`Description`**

获取普通图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

普通图片绘制类型

• `set` **normalImageDrawType**(`inDrawType`): `void`

**`Description`**

设置普通图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 绘制类型 |

#### Returns

`void`

___

### normalImageGuid

• `get` **normalImageGuid**(): `string`

**`Description`**

获取普通图片ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

普通图片ID

• `set` **normalImageGuid**(`inGuid`): `void`

**`Description`**

设置正常图片ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 图片id |

#### Returns

`void`

___

### normalImageMargin

• `get` **normalImageMargin**(): [`Margin`](UI.Margin.md)

**`Description`**

获取普通图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.Margin.md)

边距

• `set` **normalImageMargin**(`inMargin`): `void`

**`Description`**

设置普通图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 普通图片边距 |

#### Returns

`void`

___

### normalImageSize

• `get` **normalImageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

普通图片大小

• `set` **normalImageSize**(`inSize`): `void`

**`Description`**

设置图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 设置的图片大小，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### onClicked

• `get` **onClicked**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

点击事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onHovered

• `get` **onHovered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

悬浮事件

**`Effect`**

只在客户端调用生效e

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onPressed

• `get` **onPressed**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

按下事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onReleased

• `get` **onReleased**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

释放事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onUnhovered

• `get` **onUnhovered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

未悬浮事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### outlineColor

• `get` **outlineColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取字体描边颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

字体描边颜色，Type.LinearColor类型，数据范围0~1

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

设置字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](Type.LinearColor.md) | 描边颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### outlineSize

• `get` **outlineSize**(): `number`

**`Description`**

获取字体描边宽度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

字体描边宽度

• `set` **outlineSize**(`inOutlineSize`): `void`

**`Description`**

设置字体描边宽度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineSize` | `number` | 设置的大小 |

#### Returns

`void`


### pressMethod

• `set` **pressMethod**(`inPressMethod`): `void`

**`Description`**

设置按压模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressMethod` | [`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md) | 按压模式 |

#### Returns

`void`

___

### pressedImagColor

• `get` **pressedImagColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取按压图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **pressedImagColor**(`inColor`): `void`

**`Description`**

设置按压图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 按压的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### pressedImageDrawType

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

**`Description`**

获取按压图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

按压图片绘制类型

• `set` **pressedImageDrawType**(`inDrawTYpe`): `void`

**`Description`**

设置按压图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 绘制类型 |

#### Returns

`void`

___

### pressedImageGuid

• `get` **pressedImageGuid**(): `string`

**`Description`**

获取按下图片ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

按下图片ID

• `set` **pressedImageGuid**(`inGuid`): `void`

**`Description`**

设置按下图片ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 图片id |

#### Returns

`void`

___

### pressedImageMargin

• `get` **pressedImageMargin**(): [`Margin`](UI.Margin.md)

**`Description`**

获取按压图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.Margin.md)

按压图片边距

• `set` **pressedImageMargin**(`inMargin`): `void`

**`Description`**

设置按压图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 边距 |

#### Returns

`void`

___

### pressedImageSize

• `get` **pressedImageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取按压图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

按压图片大小

• `set` **pressedImageSize**(`inSize`): `void`

**`Description`**

设置按压图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | size |

#### Returns

`void`


### shadowColor

• `get` **shadowColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

字体阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

设置字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](Type.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### shadowOffset

• `get` **shadowOffset**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取字体阴影偏移

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

字体阴影偏移

• `set` **shadowOffset**(`inOffset`): `void`

**`Description`**

设置字体阴影偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](Type.Vector2.md) | 阴影偏移量 |

#### Returns

`void`


### strikethroughEnable

• `get` **strikethroughEnable**(): `boolean`

**`Description`**

获取是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否开启字体删除线

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void`

**`Description`**

设置是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableStrikethrough` | `boolean` | 是否开启 |

#### Returns

`void`

___

### text

• `get` **text**(): `string`

**`Description`**

获取按钮文字

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回文字

• `set` **text**(`InString`): `void`

**`Description`**

设置按钮文字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InString` | `string` | 文字 |

#### Returns

`void`

新文本

___

### textAlign

• `get` **textAlign**(): [`TextJustify`](../enums/UI.TextJustify.md)

**`Description`**

获取字体对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextJustify`](../enums/UI.TextJustify.md)

字体对齐方式

• `set` **textAlign**(`InTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTextJustify` | [`TextJustify`](../enums/UI.TextJustify.md) | 对齐方式的枚举 |

#### Returns

`void`

___

### textVerticalAlign

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md)

**`Description`**

获取字体垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md)

字体垂直对齐方式

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void`

**`Description`**

设置字体垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md) | 对齐方式 |

#### Returns

`void`


### touchMethod

• `set` **touchMethod**(`inTouchMethod`): `void`

**`Description`**

设置触摸模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md) | Touch模式选择 |

#### Returns

`void`


### transitionEnable

• `get` **transitionEnable**(): `boolean`

**`Description`**

获取按钮是否启用过度模式,按下是否有效果

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

按钮是否启用过度模式

• `set` **transitionEnable**(`inBoolean`): `void`

**`Description`**

是否套用不同的按下方案

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inBoolean` | `boolean` | 是否套用不同的按下方案 |

#### Returns

`void`

___

### underlineEnable

• `get` **underlineEnable**(): `boolean`

**`Description`**

返回是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

获取是否开启字体下划线

• `set` **underlineEnable**(`inEnableUnderline`): `void`

**`Description`**

设置是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableUnderline` | `boolean` | 设置是否开启下划线 |

#### Returns

`void`


## Methods

### isPressed

▸ **isPressed**(): `boolean`

**`Description`**

是否按下

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回按钮是否按下

___

### setDisableImageColorByHex

▸ **setDisableImageColorByHex**(`inHexString`): `void`

**`Description`**

设置不可用颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |

#### Returns

`void`

___

### setDisableImageColorDecimal

▸ **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置不可用颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |

#### Returns

`void`

___

### setFontColorByHex

▸ **setFontColorByHex**(`inHexString`): `void`

**`Description`**

设置字体颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |

#### Returns

`void`

___

### setFontColorDecimal

▸ **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置字体颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 字体R值，数据范围0~255 |
| `G` | `number` | 字体G值，数据范围0~255 |
| `B` | `number` | 字体B值，数据范围0~255 |
| `A` | `number` | 字体透明度，数据范围0~255 |

#### Returns

`void`

___

### setNormalImageColorByHex

▸ **setNormalImageColorByHex**(`inHexString`): `void`

**`Description`**

设置正常颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |

#### Returns

`void`

___

### setNormalImageColorDecimal

▸ **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置正常颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |

#### Returns

`void`

___

### setPressedImageColorByHex

▸ **setPressedImageColorByHex**(`inHexString`): `void`

**`Description`**

设置按下颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |

#### Returns

`void`

___

### setPressedImageColorDecimal

▸ **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置按下颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`StaleButton`](UI.StaleButton.md)

**`Description`**

创建 StaleButton 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外Parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`StaleButton`](UI.StaleButton.md)

返回创建的对象
