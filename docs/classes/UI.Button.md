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
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md) | 点击模式选择 |

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
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |

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

• `set` **disableImageDrawType**(`inDrawTYpe`): `void`

**`Description`**

设置禁用图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |

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
| `inMargin` | [`Margin`](UI.Margin.md) | 禁用图片边距 |

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


### normalImageColor

• `get` **normalImageColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取普通图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **normalImageColor**(`inNormalColor`): `void`

**`Description`**

设置普通图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inNormalColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |

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
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |

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

普通图片边距

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
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |

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

只在客户端调用生效

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


### pressedImageColor

• `get` **pressedImageColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取按压图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **pressedImageColor**(`inColor`): `void`

**`Description`**

设置按压图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |

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

• `set` **pressedImageDrawType**(`inDrawType`): `void`

**`Description`**

设置按压图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |

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
| `inMargin` | [`Margin`](UI.Margin.md) | 按压图片边距 |

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
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |

#### Returns

`void`

___

### pressedMethod

• `set` **pressedMethod**(`inPressedMethod`): `void`

**`Description`**

设置按压模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressedMethod` | [`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md) | Press模式选择 |

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

按钮是否启用过度模式,按下是否有效果

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

### setButtonDisableByFile

▸ **setButtonDisableByFile**(`absPath`): `void`

**`Description`**

设置不可用图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |

#### Returns

`void`

___

### setButtonNormalByFile

▸ **setButtonNormalByFile**(`absPath`): `void`

**`Description`**

设置正常图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |

#### Returns

`void`

___

### setButtonPressedByFile

▸ **setButtonPressedByFile**(`absPath`): `void`

**`Description`**

设置按下图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |

#### Returns

`void`

___

### setDisableImageColorByHex

▸ **setDisableImageColorByHex**(`inHexString`): `void`

**`Description`**

设置不可用颜色指定Hex的颜色文本设定颜色 #05050505

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

设置不可用颜色指定R、G、B、A设置颜色 0 ~255

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

### setNormalImageColorByHex

▸ **setNormalImageColorByHex**(`inHexString`): `void`

**`Description`**

设置正常颜色指定Hex的颜色文本设定颜色 #05050505

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

设置正常颜色 指定R、G、B、A设置颜色 0 ~255

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

设置按下颜色指定Hex的颜色文本设定颜色 #05050505

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

设置按下颜色指定R、G、B、A设置颜色 0 ~255

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

▸ `Static` **newObject**(`parent?`, `inName?`): [`Button`](UI.Button.md)

**`Description`**

创建Button控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default: null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Button`](UI.Button.md)

返回创建的对象
