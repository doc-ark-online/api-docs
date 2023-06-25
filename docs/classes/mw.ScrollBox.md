[Ui](../groups/Core.Ui.md) / ScrollBox

# ScrollBox <Badge type="tip" text="Class" /> <Score text="ScrollBox" />

滑动框

## Hierarchy

- [`PanelWidget`](mw.PanelWidget.md)

  ↳ **`ScrollBox`**

## Table of contents

| Properties |
| :-----|
| **[brushMargin](mw.ScrollBox.md#brushmargin)**: `any` <br> 临时变量|
| **[tempUEMargin](mw.ScrollBox.md#tempuemargin)**: `any` <br> 临时变量|

| Accessors |
| :-----|
| **[allowOverscroll](mw.ScrollBox.md#allowoverscroll)**(`isAllowOverscroll`: `boolean`): `void` <br> 设置允许滚动超过滚动框大小|
| **[alwaysShowScrollBar](mw.ScrollBox.md#alwaysshowscrollbar)**(`isScrollBarAlwaysShown`: `boolean`): `void` <br> 设置是否一直显示滚动条|
| **[animationType](mw.ScrollBox.md#animationtype)**(): [`UIScrollBoxAnimationType`](../enums/mw.UIScrollBoxAnimationType.md) <br> 获取动画类型|
| **[defaultLocation](mw.ScrollBox.md#defaultlocation)**(): [`ScrollBarDefaultLocation`](../enums/mw.ScrollBarDefaultLocation.md) <br> 返回滚动条的默认位置(类型，非具体坐标)|
| **[elasticMultiplier](mw.ScrollBox.md#elasticmultiplier)**(): `number` <br> 获取弹性系数|
| **[isScrollBarAlwaysShown](mw.ScrollBox.md#isscrollbaralwaysshown)**(): `boolean` <br> 获取是否一直显示滚动条|
| **[onScrollEnd](mw.ScrollBox.md#onscrollend)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 滚动结束事件|
| **[onUserScrolled](mw.ScrollBox.md#onuserscrolled)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\> <br> 滚动事件|
| **[orientation](mw.ScrollBox.md#orientation)**(): [`Orientation`](../enums/mw.Orientation.md) <br> 获取滚动方向|
| **[scrollAxisBrushDrawType](mw.ScrollBox.md#scrollaxisbrushdrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取滚动条图片绘制类型|
| **[scrollAxisBrushGuid](mw.ScrollBox.md#scrollaxisbrushguid)**(): `string` <br> 获取滚动条图片ID|
| **[scrollAxisBrushMargin](mw.ScrollBox.md#scrollaxisbrushmargin)**(): [`Margin`](mw.Margin.md) <br> 获取滚动条图片边距|
| **[scrollAxisColor](mw.ScrollBox.md#scrollaxiscolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取滚动条图片颜色|
| **[scrollBarVisibility](mw.ScrollBox.md#scrollbarvisibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <br> 获取滚动条的显示于隐藏|
| **[scrollOffset](mw.ScrollBox.md#scrolloffset)**(): `number` <br> 获取滚动框偏移|
| **[scrollOffsetFraction](mw.ScrollBox.md#scrolloffsetfraction)**(): `number` <br> 获取滚动框距离底部的偏移比例|
| **[scrollOffsetOfEnd](mw.ScrollBox.md#scrolloffsetofend)**(): `number` <br> 获取滚动框距离底部的偏移|
| **[scrollWheelMultiplier](mw.ScrollBox.md#scrollwheelmultiplier)**(`inScrollWheelMultiplier`: `number`): `void` <br> 设置鼠标滚轮系数|
| **[scrollbarPadding](mw.ScrollBox.md#scrollbarpadding)**(`inScrollbarPadding`: [`Margin`](mw.Margin.md)): `void` <br> 设置滚动条边距|
| **[scrollbarThickness](mw.ScrollBox.md#scrollbarthickness)**(`inScrollbarThickness`: `number`): `void` <br> 设置滚动条粗细|
| **[shadowVisibility](mw.ScrollBox.md#shadowvisibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <br> 获取阴影显示|
| **[smoothScrollingEnable](mw.ScrollBox.md#smoothscrollingenable)**(`isSmoothScrolling`: `boolean`): `void` <br> 设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑|
| **[supportElastic](mw.ScrollBox.md#supportelastic)**(): `boolean` <br> 判断是否支持惯性|


::: details 点击查看继承
| Accessors |
| :-----|
:::


| Methods |
| :-----|
| **[endInertialScrolling](mw.ScrollBox.md#endinertialscrolling)**(): `void` <br> 立刻停止滚动|
| **[scrollToEnd](mw.ScrollBox.md#scrolltoend)**(): `void` <br> 滚动到底部|
| **[scrollToStart](mw.ScrollBox.md#scrolltostart)**(): `void` <br> 滚动到开始位置|
| **[newObject](mw.ScrollBox.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`ScrollBox`](mw.ScrollBox.md) <br> 创建 ScrollBox 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁|


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


### brushMargin <Score text="brushMargin" /> 

• `Private` **brushMargin**: `any`

临时变量

___

### tempUEMargin <Score text="tempUEMargin" /> 

• `Private` **tempUEMargin**: `any`

临时变量

## Accessors

### allowOverscroll <Score text="allowOverscroll" /> 

• `set` **allowOverscroll**(`isAllowOverscroll`): `void` <Badge type="tip" text="client" />

设置允许滚动超过滚动框大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isAllowOverscroll` | `boolean` | 允许滚动超过滚动框大小 |


___

### alwaysShowScrollBar <Score text="alwaysShowScrollBar" /> 

• `set` **alwaysShowScrollBar**(`isScrollBarAlwaysShown`): `void` <Badge type="tip" text="client" />

设置是否一直显示滚动条


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isScrollBarAlwaysShown` | `boolean` | 是否一直显示滚动条 |


___

### animationType <Score text="animationType" /> 

• `get` **animationType**(): [`UIScrollBoxAnimationType`](../enums/mw.UIScrollBoxAnimationType.md) <Badge type="tip" text="client" />

获取动画类型


#### Returns

[`UIScrollBoxAnimationType`](../enums/mw.UIScrollBoxAnimationType.md)

动画类型

• `set` **animationType**(`inAnimationType`): `void` <Badge type="tip" text="client" />

设定动画类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAnimationType` | [`UIScrollBoxAnimationType`](../enums/mw.UIScrollBoxAnimationType.md) | 类型 |


动画类型

___

### defaultLocation <Score text="defaultLocation" /> 

• `get` **defaultLocation**(): [`ScrollBarDefaultLocation`](../enums/mw.ScrollBarDefaultLocation.md) <Badge type="tip" text="client" />

返回滚动条的默认位置(类型，非具体坐标)


::: warning Precautions

没有操作滚动条的情况下滚动条的默认位置

:::

#### Returns

[`ScrollBarDefaultLocation`](../enums/mw.ScrollBarDefaultLocation.md)

返回滚动条的默认位置(类型，非具体坐标)

• `set` **defaultLocation**(`NewDefaultLocation`): `void` <Badge type="tip" text="client" />

设置滚动条的默认位置(类型，非具体坐标)


::: warning Precautions

没有操作滚动条的情况下滚动条的默认位置

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewDefaultLocation` | [`ScrollBarDefaultLocation`](../enums/mw.ScrollBarDefaultLocation.md) | 滚动条默认位置(类型，非具体坐标) |


___

### elasticMultiplier <Score text="elasticMultiplier" /> 

• `get` **elasticMultiplier**(): `number` <Badge type="tip" text="client" />

获取弹性系数


#### Returns

`number`

弹性系数

• `set` **elasticMultiplier**(`inElasticMultiplier`): `void` <Badge type="tip" text="client" />

设定弹性系数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inElasticMultiplier` | `number` | 系数 |


弹性系数

___

### isScrollBarAlwaysShown <Score text="isScrollBarAlwaysShown" /> 

• `get` **isScrollBarAlwaysShown**(): `boolean` <Badge type="tip" text="client" />

获取是否一直显示滚动条


#### Returns

`boolean`

是否一直显示滚动条

___

### onScrollEnd <Score text="onScrollEnd" /> 

• `get` **onScrollEnd**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

滚动结束事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

滚动结束事件

___

### onUserScrolled <Score text="onUserScrolled" /> 

• `get` **onUserScrolled**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\> <Badge type="tip" text="client" />

滚动事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\>

滚动事件

___

### orientation <Score text="orientation" /> 

• `get` **orientation**(): [`Orientation`](../enums/mw.Orientation.md) <Badge type="tip" text="client" />

获取滚动方向


#### Returns

[`Orientation`](../enums/mw.Orientation.md)

滚动方向

• `set` **orientation**(`inOrientation`): `void` <Badge type="tip" text="client" />

设置滚动方向


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOrientation` | [`Orientation`](../enums/mw.Orientation.md) | 方向 |


滚动方向

___

### scrollAxisBrushDrawType <Score text="scrollAxisBrushDrawType" /> 

• `get` **scrollAxisBrushDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取滚动条图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

图片绘制类型

• `set` **scrollAxisBrushDrawType**(`InDrawAs`): `void` <Badge type="tip" text="client" />

设置图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDrawAs` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 图片绘制类型 |


___

### scrollAxisBrushGuid <Score text="scrollAxisBrushGuid" /> 

• `get` **scrollAxisBrushGuid**(): `string` <Badge type="tip" text="client" />

获取滚动条图片ID


#### Returns

`string`

滚动条图片ID

• `set` **scrollAxisBrushGuid**(`InGUID`): `void` <Badge type="tip" text="client" />

设置滚动条图片ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGUID` | `string` | 图片ID |


___

### scrollAxisBrushMargin <Score text="scrollAxisBrushMargin" /> 

• `get` **scrollAxisBrushMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取滚动条图片边距


#### Returns

[`Margin`](mw.Margin.md)

滚动条图片边距

• `set` **scrollAxisBrushMargin**(`InMargin`): `void` <Badge type="tip" text="client" />

设置滚动条图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InMargin` | [`Margin`](mw.Margin.md) | 滚动条图片边距 |


___

### scrollAxisColor <Score text="scrollAxisColor" /> 

• `get` **scrollAxisColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取滚动条图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

滚动条图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **scrollAxisColor**(`InColor`): `void` <Badge type="tip" text="client" />

设置滚动条图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InColor` | [`LinearColor`](mw.LinearColor.md) | 滚动条图片颜色，Type.LinearColor类型，数据范围0~1 |


___

### scrollBarVisibility <Score text="scrollBarVisibility" /> 

• `get` **scrollBarVisibility**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />

获取滚动条的显示于隐藏


#### Returns

[`SlateVisibility`](../enums/mw.SlateVisibility.md)

滚动条的显示于隐藏

• `set` **scrollBarVisibility**(`inScrollBarVisibility`): `void` <Badge type="tip" text="client" />

设置滚动条是否可见,必须是在SetAlwaysShowScrollbar 为false才生效


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollBarVisibility` | [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 滚动条是否可见 |


___

### scrollOffset <Score text="scrollOffset" /> 

• `get` **scrollOffset**(): `number` <Badge type="tip" text="client" />

获取滚动框偏移


#### Returns

`number`

滚动框偏移

• `set` **scrollOffset**(`inScrollOffset`): `void` <Badge type="tip" text="client" />

设定滚动框滚动偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollOffset` | `number` | 滚动偏移 |


___

### scrollOffsetFraction <Score text="scrollOffsetFraction" /> 

• `get` **scrollOffsetFraction**(): `number` <Badge type="tip" text="client" />

获取滚动框距离底部的偏移比例


#### Returns

`number`

滚动框偏移比例

___

### scrollOffsetOfEnd <Score text="scrollOffsetOfEnd" /> 

• `get` **scrollOffsetOfEnd**(): `number` <Badge type="tip" text="client" />

获取滚动框距离底部的偏移


#### Returns

`number`

滚动框偏移

___

### scrollWheelMultiplier <Score text="scrollWheelMultiplier" /> 

• `set` **scrollWheelMultiplier**(`inScrollWheelMultiplier`): `void` <Badge type="tip" text="client" />

设置鼠标滚轮系数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollWheelMultiplier` | `number` | 系数 |


鼠标滚轮系数

___

### scrollbarPadding <Score text="scrollbarPadding" /> 

• `set` **scrollbarPadding**(`inScrollbarPadding`): `void` <Badge type="tip" text="client" />

设置滚动条边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollbarPadding` | [`Margin`](mw.Margin.md) | 滚动条边距 |


___

### scrollbarThickness <Score text="scrollbarThickness" /> 

• `set` **scrollbarThickness**(`inScrollbarThickness`): `void` <Badge type="tip" text="client" />

设置滚动条粗细


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollbarThickness` | `number` | 滚动条粗细 |


___

### shadowVisibility <Score text="shadowVisibility" /> 

• `get` **shadowVisibility**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />

获取阴影显示


#### Returns

[`SlateVisibility`](../enums/mw.SlateVisibility.md)

阴影显示

• `set` **shadowVisibility**(`inVisibility`): `void` <Badge type="tip" text="client" />

设定阴影显示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisibility` | [`SlateVisibility`](../enums/mw.SlateVisibility.md) |  阴影显示 |


阴影显示

___

### smoothScrollingEnable <Score text="smoothScrollingEnable" /> 

• `set` **smoothScrollingEnable**(`isSmoothScrolling`): `void` <Badge type="tip" text="client" />

设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSmoothScrolling` | `boolean` | 鼠标滚动时，滚动速度是否插值运算 |


___

### supportElastic <Score text="supportElastic" /> 

• `get` **supportElastic**(): `boolean` <Badge type="tip" text="client" />

判断是否支持惯性


#### Returns

`boolean`

是否支持惯性

• `set` **supportElastic**(`inSupportElastic`): `void` <Badge type="tip" text="client" />

设定是否支持惯性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSupportElastic` | `boolean` | 惯性 |


是否支持惯性


## Methods
___

### endInertialScrolling <Score text="endInertialScrolling" /> 

• **endInertialScrolling**(): `void` <Badge type="tip" text="client" />

立刻停止滚动



___

### scrollToEnd <Score text="scrollToEnd" /> 

• **scrollToEnd**(): `void` <Badge type="tip" text="client" />

滚动到底部



___

### scrollToStart <Score text="scrollToStart" /> 

• **scrollToStart**(): `void` <Badge type="tip" text="client" />

滚动到开始位置



___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`ScrollBox`](mw.ScrollBox.md) <Badge type="tip" text="client" />

创建 ScrollBox 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ScrollBox`](mw.ScrollBox.md)

创建的对象
