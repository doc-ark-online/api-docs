[Gui](../groups/Core.Gui.md) / Button

# Button <Badge type="tip" text="Class" /> <Score text="Button" />

按钮,无默认text

## Hierarchy

- [`PanelWidget`](mw.PanelWidget.md)

  ↳ **`Button`**

## Table of contents

| Accessors |
| :-----|
| **[clickMethod](mw.Button.md#clickmethod)**(`inClickMethod`: [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md)): `void` <br> 设置点击模式|
| **[disableImageColor](mw.Button.md#disableimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取禁用图片颜色|
| **[disableImageDrawType](mw.Button.md#disableimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取禁用图片绘制类型|
| **[disableImageGuid](mw.Button.md#disableimageguid)**(): `string` <br> 获取禁用图片ID|
| **[disableImageMargin](mw.Button.md#disableimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取禁用图片边距|
| **[disableImageSize](mw.Button.md#disableimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取禁用图片大小|
| **[focusable](mw.Button.md#focusable)**(): `boolean` <br> 获取是否获取输入焦点|
| **[normalImageColor](mw.Button.md#normalimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取普通图片颜色|
| **[normalImageDrawType](mw.Button.md#normalimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取普通图片绘制类型|
| **[normalImageGuid](mw.Button.md#normalimageguid)**(): `string` <br> 获取普通图片ID|
| **[normalImageMargin](mw.Button.md#normalimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取普通图片边距|
| **[normalImageSize](mw.Button.md#normalimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取图片大小|
| **[onClicked](mw.Button.md#onclicked)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 点击事件|
| **[onHovered](mw.Button.md#onhovered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 悬浮事件|
| **[onPressed](mw.Button.md#onpressed)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 按下事件|
| **[onReleased](mw.Button.md#onreleased)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 释放事件|
| **[onUnhovered](mw.Button.md#onunhovered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 未悬浮事件|
| **[pressedImageColor](mw.Button.md#pressedimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取按压图片颜色|
| **[pressedImageDrawType](mw.Button.md#pressedimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取按压图片绘制类型|
| **[pressedImageGuid](mw.Button.md#pressedimageguid)**(): `string` <br> 获取按下图片ID|
| **[pressedImageMargin](mw.Button.md#pressedimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取按压图片边距|
| **[pressedImageSize](mw.Button.md#pressedimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取按压图片大小|
| **[pressedMethod](mw.Button.md#pressedmethod)**(`inPressedMethod`: [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md)): `void` <br> 设置按压模式|
| **[touchMethod](mw.Button.md#touchmethod)**(`inTouchMethod`: [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md)): `void` <br> 设置触摸模式|
| **[transitionEnable](mw.Button.md#transitionenable)**(): `boolean` <br> 按钮是否启用过度模式,按下是否有效果|


::: details 点击查看继承
| Accessors |
| :-----|
:::


| Methods |
| :-----|
| **[isPressed](mw.Button.md#ispressed)**(): `boolean` <br> 是否按下|
| **[setButtonDisableByFile](mw.Button.md#setbuttondisablebyfile)**(`absPath`: `string`): `void` <br> 设置不可用图片|
| **[setButtonNormalByFile](mw.Button.md#setbuttonnormalbyfile)**(`absPath`: `string`): `void` <br> 设置正常图片|
| **[setButtonPressedByFile](mw.Button.md#setbuttonpressedbyfile)**(`absPath`: `string`): `void` <br> 设置按下图片|
| **[setDisableImageColorByHex](mw.Button.md#setdisableimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置不可用颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setDisableImageColorDecimal](mw.Button.md#setdisableimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置不可用颜色指定R、G、B、A设置颜色 0 ~255|
| **[setNormalImageColorByHex](mw.Button.md#setnormalimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置正常颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setNormalImageColorDecimal](mw.Button.md#setnormalimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置正常颜色 指定R、G、B、A设置颜色 0 ~255|
| **[setPressedImageColorByHex](mw.Button.md#setpressedimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置按下颜色指定Hex的颜色文本设定颜色 #05050505|
| **[setPressedImageColorDecimal](mw.Button.md#setpressedimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置按下颜色指定R、G、B、A设置颜色 0 ~255|
| **[newObject](mw.Button.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`Button`](mw.Button.md) <br> 创建Button控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[addChild](mw.PanelWidget.md#addchild)**(`child`: [`Widget`](mw.Widget.md)): `void` <br> 添加子节点|
| **[findChildByPath](mw.PanelWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md) <br> 通过相对路径查找节点|
| **[getChildAt](mw.PanelWidget.md#getchildat)**(`index`: `number`): [`Widget`](mw.Widget.md) <br> 获取第几位子节点|
| **[getChildByName](mw.PanelWidget.md#getchildbyname)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`name`: `string`): `T`: extends [`Widget`](mw.Widget.md)<`T`\> <br> 通过名字查找节点|
| **[getChildrenCount](mw.PanelWidget.md#getchildrencount)**(): `number` <br> 获取子节点数量|
| **[removeAllChildren](mw.PanelWidget.md#removeallchildren)**(): `void` <br> 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](mw.PanelWidget.md#removechild)**(`child`: [`Widget`](mw.Widget.md)): `void` <br> 移除节点,会销毁UI无法在使用|
| **[removeChildAt](mw.PanelWidget.md#removechildat)**(`index`: `number`): `void` <br> 移除第几个节点,会销毁UI无法再使用|
:::


### clickMethod <Score text="clickMethod" /> 

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="client" />

设置点击模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md) | 点击模式选择 |


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

• `set` **disableImageDrawType**(`inDrawTYpe`): `void` <Badge type="tip" text="client" />

设置禁用图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 类型 |


___

### disableImageGuid <Score text="disableImageGuid" /> 

• `get` **disableImageGuid**(): `string` <Badge type="tip" text="client" />

获取禁用图片ID


#### Returns

`string`

禁用图片ID

• `set` **disableImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

设置不可用图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


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

• `set` **normalImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

设置正常图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


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

### onClicked <Score text="onClicked" /> 

• `get` **onClicked**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

点击事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

返回事件的代理

___

### onHovered <Score text="onHovered" /> 

• `get` **onHovered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

悬浮事件


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

• `set` **pressedImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

设置按下图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


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

• `set` **pressedMethod**(`inPressedMethod`): `void` <Badge type="tip" text="client" />

设置按压模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressedMethod` | [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md) | Press模式选择 |


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

按钮是否启用过度模式,按下是否有效果


#### Returns

`boolean`

按钮是否启用过度模式

• `set` **transitionEnable**(`inBoolean`): `void` <Badge type="tip" text="client" />

是否套用不同的按下方案


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inBoolean` | `boolean` | 是否套用不同的按下方案 |



## Methods
___

### isPressed <Score text="isPressed" /> 

• **isPressed**(): `boolean` <Badge type="tip" text="client" />

是否按下


#### Returns

`boolean`

返回按钮是否按下

___

### setButtonDisableByFile <Score text="setButtonDisableByFile" /> 

• **setButtonDisableByFile**(`absPath`): `void` <Badge type="tip" text="client" />

设置不可用图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


___

### setButtonNormalByFile <Score text="setButtonNormalByFile" /> 

• **setButtonNormalByFile**(`absPath`): `void` <Badge type="tip" text="client" />

设置正常图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


___

### setButtonPressedByFile <Score text="setButtonPressedByFile" /> 

• **setButtonPressedByFile**(`absPath`): `void` <Badge type="tip" text="client" />

设置按下图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


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

设置不可用颜色指定R、G、B、A设置颜色 0 ~255


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

设置正常颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setNormalImageColorDecimal <Score text="setNormalImageColorDecimal" /> 

• **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置正常颜色 指定R、G、B、A设置颜色 0 ~255


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

设置按下颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setPressedImageColorDecimal <Score text="setPressedImageColorDecimal" /> 

• **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置按下颜色指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R值，数据范围0~255 |
| `G` | `number` | 颜色G值，数据范围0~255 |
| `B` | `number` | 颜色B值，数据范围0~255 |
| `A` | `number` | 颜色透明度，数据范围0~255 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`Button`](mw.Button.md) <Badge type="tip" text="client" />

创建Button控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default: null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Button`](mw.Button.md)

返回创建的对象
