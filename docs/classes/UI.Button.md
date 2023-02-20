[UI](../modules/UI.UI.md) / Button

# Button <Badge type="tip" text="Class" /> <Score text="Button" />

**`Groups`**

GUI

按钮,无默认text

## Hierarchy

- [`PanelWidget`](UI.PanelWidget.md)

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
| **[addChild](UI.PanelWidget.md#addchild)**([`Widget`](UI.Widget.md)): `void` <br> 添加子节点|
| **[findChildByPath](UI.PanelWidget.md#findchildbypath)**(`string`): [`Widget`](UI.Widget.md) <br> 通过相对路径查找节点|
| **[getChildAt](UI.PanelWidget.md#getchildat)**(`number`): [`Widget`](UI.Widget.md) <br> 获取第几位子节点|
| **[getChildByName](UI.PanelWidget.md#getchildbyname)**<extends [`Widget`](UI.Widget.md)<`T`\> |\>(`string`): extends [`Widget`](UI.Widget.md)<`T`\> | <br> 通过名字查找节点|
| **[getChildrenCount](UI.PanelWidget.md#getchildrencount)**(): `number` <br> 获取子节点数量|
| **[removeAllChildren](UI.PanelWidget.md#removeallchildren)**(): `void` <br> 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](UI.PanelWidget.md#removechild)**([`Widget`](UI.Widget.md)): `void` <br> 移除节点,会销毁UI无法在使用|
| **[removeChildAt](UI.PanelWidget.md#removechildat)**(`number`): `void` <br> 移除第几个节点,会销毁UI无法再使用|
:::


## Accessors

### clickMethod <Score text="clickMethod" /> 

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="other" />

设置点击模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.ButtonClickMethod.md) | 点击模式选择 |



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
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### disableImageDrawType <Score text="disableImageDrawType" /> 

• `get` **disableImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取禁用图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

禁用图片绘制类型

• `set` **disableImageDrawType**(`inDrawTYpe`): `void` <Badge type="tip" text="other" />

设置禁用图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |


___

### disableImageGuid <Score text="disableImageGuid" /> 

• `get` **disableImageGuid**(): `string` <Badge type="tip" text="other" />

获取禁用图片ID


#### Returns

`string`

禁用图片ID

• `set` **disableImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

设置不可用图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


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
| `inMargin` | [`Margin`](UI.Margin.md) | 禁用图片边距 |


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



### normalImageColor <Score text="normalImageColor" /> 

• `get` **normalImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取普通图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **normalImageColor**(`inNormalColor`): `void` <Badge type="tip" text="other" />

设置普通图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inNormalColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


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
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |


___

### normalImageGuid <Score text="normalImageGuid" /> 

• `get` **normalImageGuid**(): `string` <Badge type="tip" text="other" />

获取普通图片ID


#### Returns

`string`

普通图片ID

• `set` **normalImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

设置正常图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


___

### normalImageMargin <Score text="normalImageMargin" /> 

• `get` **normalImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

获取普通图片边距


#### Returns

[`Margin`](UI.Margin.md)

普通图片边距

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
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |


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


### pressedImageColor <Score text="pressedImageColor" /> 

• `get` **pressedImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取按压图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **pressedImageColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置按压图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### pressedImageDrawType <Score text="pressedImageDrawType" /> 

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取按压图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

按压图片绘制类型

• `set` **pressedImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="other" />

设置按压图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 类型 |


___

### pressedImageGuid <Score text="pressedImageGuid" /> 

• `get` **pressedImageGuid**(): `string` <Badge type="tip" text="other" />

获取按下图片ID


#### Returns

`string`

按下图片ID

• `set` **pressedImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

设置按下图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片id |


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
| `inMargin` | [`Margin`](UI.Margin.md) | 按压图片边距 |


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
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |


___

### pressedMethod <Score text="pressedMethod" /> 

• `set` **pressedMethod**(`inPressedMethod`): `void` <Badge type="tip" text="other" />

设置按压模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressedMethod` | [`ButtonPressMethod`](../enums/UI.ButtonPressMethod.md) | Press模式选择 |



### touchMethod <Score text="touchMethod" /> 

• `set` **touchMethod**(`inTouchMethod`): `void` <Badge type="tip" text="other" />

设置触摸模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/UI.ButtonTouchMethod.md) | Touch模式选择 |



### transitionEnable <Score text="transitionEnable" /> 

• `get` **transitionEnable**(): `boolean` <Badge type="tip" text="other" />

按钮是否启用过度模式,按下是否有效果


#### Returns

`boolean`

按钮是否启用过度模式

• `set` **transitionEnable**(`inBoolean`): `void` <Badge type="tip" text="other" />

是否套用不同的按下方案


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inBoolean` | `boolean` | 是否套用不同的按下方案 |



## Methods

### isPressed <Score text="isPressed" /> 

• **isPressed**(): `boolean` <Badge type="tip" text="other" />

是否按下


#### Returns

`boolean`

返回按钮是否按下


### setButtonDisableByFile <Score text="setButtonDisableByFile" /> 

• **setButtonDisableByFile**(`absPath`): `void` <Badge type="tip" text="other" />

设置不可用图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


___

### setButtonNormalByFile <Score text="setButtonNormalByFile" /> 

• **setButtonNormalByFile**(`absPath`): `void` <Badge type="tip" text="other" />

设置正常图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


___

### setButtonPressedByFile <Score text="setButtonPressedByFile" /> 

• **setButtonPressedByFile**(`absPath`): `void` <Badge type="tip" text="other" />

设置按下图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片文件路径 |


___

### setDisableImageColorByHex <Score text="setDisableImageColorByHex" /> 

• **setDisableImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置不可用颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setDisableImageColorDecimal <Score text="setDisableImageColorDecimal" /> 

• **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

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

• **setNormalImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置正常颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setNormalImageColorDecimal <Score text="setNormalImageColorDecimal" /> 

• **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

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

• **setPressedImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置按下颜色指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色字符串 |


___

### setPressedImageColorDecimal <Score text="setPressedImageColorDecimal" /> 

• **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

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

• `Static` **newObject**(`parent?`, `inName?`): [`Button`](UI.Button.md) <Badge type="tip" text="other" />

创建Button控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default: null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Button`](UI.Button.md)

返回创建的对象
