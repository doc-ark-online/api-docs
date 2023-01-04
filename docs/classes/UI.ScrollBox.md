[UI](../modules/UI.UI.md) / ScrollBox

# ScrollBox <Badge type="tip" text="Class" />

**`Description`**

滑动框

## Hierarchy

- [`PanelWidget`](UI.PanelWidget.md)

  ↳ **`ScrollBox`**

## Table of contents

| Properties |
| :-----|
| **[brushMargin](UI.ScrollBox.md#brushmargin)**: `any` <br> 临时变量|
| **[tempUEMargin](UI.ScrollBox.md#tempuemargin)**: `any` <br> 临时变量|

| Accessors |
| :-----|
| **[allowOverscroll](UI.ScrollBox.md#allowoverscroll)**(`boolean`): `void` <br> 设置允许滚动超过滚动框大小|
| **[alwaysShowScrollBar](UI.ScrollBox.md#alwaysshowscrollbar)**(`boolean`): `void` <br> 设置是否一直显示滚动条|
| **[animationType](UI.ScrollBox.md#animationtype)**(): [`UIScrollBoxAnimationType`](../enums/UI.UIScrollBoxAnimationType.md) <br> 获取动画类型|
| **[defaultLocation](UI.ScrollBox.md#defaultlocation)**(): [`ScrollBarDefaultLocation`](../enums/UI.ScrollBarDefaultLocation.md) <br> 返回滚动条的默认位置(类型，非具体坐标)|
| **[elasticMultiplier](UI.ScrollBox.md#elasticmultiplier)**(): `number` <br> 获取弹性系数|
| **[isScrollBarAlwaysShown](UI.ScrollBox.md#isscrollbaralwaysshown)**(): `boolean` <br> 获取是否一直显示滚动条|
| **[onScrollEnd](UI.ScrollBox.md#onscrollend)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 滚动结束事件|
| **[onUserScrolled](UI.ScrollBox.md#onuserscrolled)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\> <br> 滚动事件|
| **[orientation](UI.ScrollBox.md#orientation)**(): [`Orientation`](../enums/UI.Orientation.md) <br> 获取滚动方向|
| **[scrollAxisBrushDrawType](UI.ScrollBox.md#scrollaxisbrushdrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取滚动条图片绘制类型|
| **[scrollAxisBrushGuid](UI.ScrollBox.md#scrollaxisbrushguid)**(): `string` <br> 获取滚动条图片ID|
| **[scrollAxisBrushMargin](UI.ScrollBox.md#scrollaxisbrushmargin)**(): [`Margin`](UI.Margin.md) <br> 获取滚动条图片边距|
| **[scrollAxisColor](UI.ScrollBox.md#scrollaxiscolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取滚动条图片颜色|
| **[scrollBarVisibility](UI.ScrollBox.md#scrollbarvisibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取滚动条的显示于隐藏|
| **[scrollOffset](UI.ScrollBox.md#scrolloffset)**(): `number` <br> 获取滚动框偏移|
| **[scrollOffsetFraction](UI.ScrollBox.md#scrolloffsetfraction)**(): `number` <br> 获取滚动框距离底部的偏移比例|
| **[scrollOffsetOfEnd](UI.ScrollBox.md#scrolloffsetofend)**(): `number` <br> 获取滚动框距离底部的偏移|
| **[scrollWheelMultiplier](UI.ScrollBox.md#scrollwheelmultiplier)**(`number`): `void` <br> 设置鼠标滚轮系数|
| **[scrollbarPadding](UI.ScrollBox.md#scrollbarpadding)**([`Margin`](UI.Margin.md)): `void` <br> 设置滚动条边距|
| **[scrollbarThickness](UI.ScrollBox.md#scrollbarthickness)**(`number`): `void` <br> 设置滚动条粗细|
| **[shadowVisibility](UI.ScrollBox.md#shadowvisibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取阴影显示|
| **[smoothScrollingEnable](UI.ScrollBox.md#smoothscrollingenable)**(`boolean`): `void` <br> 设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑|
| **[supportElastic](UI.ScrollBox.md#supportelastic)**(): `boolean` <br> 判断是否支持惯性|

| Methods |
| :-----|
| **[endInertialScrolling](UI.ScrollBox.md#endinertialscrolling)**(): `void` <br> 立刻停止滚动|
| **[scrollToEnd](UI.ScrollBox.md#scrolltoend)**(): `void` <br> 滚动到底部|
| **[scrollToStart](UI.ScrollBox.md#scrolltostart)**(): `void` <br> 滚动到开始位置|
| **[newObject](UI.ScrollBox.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`ScrollBox`](UI.ScrollBox.md) <br> 创建 ScrollBox 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁|

## Properties

### brushMargin

• `Private` **brushMargin**: `any`

**`Description`**

临时变量

___

### tempUEMargin

• `Private` **tempUEMargin**: `any`

**`Description`**

临时变量

## Accessors

### allowOverscroll

• `set` **allowOverscroll**(`isAllowOverscroll`): `void`

**`Description`**

设置允许滚动超过滚动框大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isAllowOverscroll` | `boolean` | 允许滚动超过滚动框大小 |

#### Returns

`void`

___

### alwaysShowScrollBar

• `set` **alwaysShowScrollBar**(`isScrollBarAlwaysShown`): `void`

**`Description`**

设置是否一直显示滚动条

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isScrollBarAlwaysShown` | `boolean` | 是否一直显示滚动条 |

#### Returns

`void`

___

### animationType

• `get` **animationType**(): [`UIScrollBoxAnimationType`](../enums/UI.UIScrollBoxAnimationType.md)

**`Description`**

获取动画类型

**`Effect`**

只在客户端调用生效

#### Returns

[`UIScrollBoxAnimationType`](../enums/UI.UIScrollBoxAnimationType.md)

动画类型

• `set` **animationType**(`inAnimationType`): `void`

**`Description`**

设定动画类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAnimationType` | [`UIScrollBoxAnimationType`](../enums/UI.UIScrollBoxAnimationType.md) | 类型 |

#### Returns

`void`

动画类型


### defaultLocation

• `get` **defaultLocation**(): [`ScrollBarDefaultLocation`](../enums/UI.ScrollBarDefaultLocation.md)

**`Description`**

返回滚动条的默认位置(类型，非具体坐标)

**`Effect`**

没有操作滚动条的情况下滚动条的默认位置

#### Returns

[`ScrollBarDefaultLocation`](../enums/UI.ScrollBarDefaultLocation.md)

返回滚动条的默认位置(类型，非具体坐标)

• `set` **defaultLocation**(`NewDefaultLocation`): `void`

**`Description`**

设置滚动条的默认位置(类型，非具体坐标)

**`Effect`**

没有操作滚动条的情况下滚动条的默认位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewDefaultLocation` | [`ScrollBarDefaultLocation`](../enums/UI.ScrollBarDefaultLocation.md) | 滚动条默认位置(类型，非具体坐标) |

#### Returns

`void`


### elasticMultiplier

• `get` **elasticMultiplier**(): `number`

**`Description`**

获取弹性系数

**`Effect`**

只在客户端调用生效

#### Returns

`number`

弹性系数

• `set` **elasticMultiplier**(`inElasticMultiplier`): `void`

**`Description`**

设定弹性系数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inElasticMultiplier` | `number` | 系数 |

#### Returns

`void`

弹性系数


### isScrollBarAlwaysShown

• `get` **isScrollBarAlwaysShown**(): `boolean`

**`Description`**

获取是否一直显示滚动条

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否一直显示滚动条


### onScrollEnd

• `get` **onScrollEnd**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

滚动结束事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

滚动结束事件

___

### onUserScrolled

• `get` **onUserScrolled**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\>

**`Description`**

滚动事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\>

滚动事件

___

### orientation

• `get` **orientation**(): [`Orientation`](../enums/UI.Orientation.md)

**`Description`**

获取滚动方向

**`Effect`**

只在客户端调用生效

#### Returns

[`Orientation`](../enums/UI.Orientation.md)

滚动方向

• `set` **orientation**(`inOrientation`): `void`

**`Description`**

设置滚动方向

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOrientation` | [`Orientation`](../enums/UI.Orientation.md) | 方向 |

#### Returns

`void`

滚动方向


### scrollAxisBrushDrawType

• `get` **scrollAxisBrushDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

**`Description`**

获取滚动条图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

图片绘制类型

• `set` **scrollAxisBrushDrawType**(`InDrawAs`): `void`

**`Description`**

设置图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDrawAs` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 图片绘制类型 |

#### Returns

`void`

___

### scrollAxisBrushGuid

• `get` **scrollAxisBrushGuid**(): `string`

**`Description`**

获取滚动条图片ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

滚动条图片ID

• `set` **scrollAxisBrushGuid**(`InGUID`): `void`

**`Description`**

设置滚动条图片ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGUID` | `string` | 图片ID |

#### Returns

`void`

___

### scrollAxisBrushMargin

• `get` **scrollAxisBrushMargin**(): [`Margin`](UI.Margin.md)

**`Description`**

获取滚动条图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.Margin.md)

滚动条图片边距

• `set` **scrollAxisBrushMargin**(`InMargin`): `void`

**`Description`**

设置滚动条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InMargin` | [`Margin`](UI.Margin.md) | 滚动条图片边距 |

#### Returns

`void`

___

### scrollAxisColor

• `get` **scrollAxisColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取滚动条图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

滚动条图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **scrollAxisColor**(`InColor`): `void`

**`Description`**

设置滚动条图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InColor` | [`LinearColor`](Type.LinearColor.md) | 滚动条图片颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### scrollBarVisibility

• `get` **scrollBarVisibility**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md)

**`Description`**

获取滚动条的显示于隐藏

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.SlateVisibility.md)

滚动条的显示于隐藏

• `set` **scrollBarVisibility**(`inScrollBarVisibility`): `void`

**`Description`**

设置滚动条是否可见,必须是在SetAlwaysShowScrollbar 为false才生效

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollBarVisibility` | [`SlateVisibility`](../enums/UI.SlateVisibility.md) | 滚动条是否可见 |

#### Returns

`void`

___

### scrollOffset

• `get` **scrollOffset**(): `number`

**`Description`**

获取滚动框偏移

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移

• `set` **scrollOffset**(`inScrollOffset`): `void`

**`Description`**

设定滚动框滚动偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollOffset` | `number` | 滚动偏移 |

#### Returns

`void`

___

### scrollOffsetFraction

• `get` **scrollOffsetFraction**(): `number`

**`Description`**

获取滚动框距离底部的偏移比例

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移比例

___

### scrollOffsetOfEnd

• `get` **scrollOffsetOfEnd**(): `number`

**`Description`**

获取滚动框距离底部的偏移

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移

___

### scrollWheelMultiplier

• `set` **scrollWheelMultiplier**(`inScrollWheelMultiplier`): `void`

**`Description`**

设置鼠标滚轮系数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollWheelMultiplier` | `number` | 系数 |

#### Returns

`void`

鼠标滚轮系数

___

### scrollbarPadding

• `set` **scrollbarPadding**(`inScrollbarPadding`): `void`

**`Description`**

设置滚动条边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollbarPadding` | [`Margin`](UI.Margin.md) | 滚动条边距 |

#### Returns

`void`

___

### scrollbarThickness

• `set` **scrollbarThickness**(`inScrollbarThickness`): `void`

**`Description`**

设置滚动条粗细

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollbarThickness` | `number` | 滚动条粗细 |

#### Returns

`void`

___

### shadowVisibility

• `get` **shadowVisibility**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md)

**`Description`**

获取阴影显示

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.SlateVisibility.md)

阴影显示

• `set` **shadowVisibility**(`inVisibility`): `void`

**`Description`**

设定阴影显示

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisibility` | [`SlateVisibility`](../enums/UI.SlateVisibility.md) |  阴影显示 |

#### Returns

`void`

阴影显示


### smoothScrollingEnable

• `set` **smoothScrollingEnable**(`isSmoothScrolling`): `void`

**`Description`**

设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSmoothScrolling` | `boolean` | 鼠标滚动时，滚动速度是否插值运算 |

#### Returns

`void`

___

### supportElastic

• `get` **supportElastic**(): `boolean`

**`Description`**

判断是否支持惯性

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否支持惯性

• `set` **supportElastic**(`inSupportElastic`): `void`

**`Description`**

设定是否支持惯性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSupportElastic` | `boolean` | 惯性 |

#### Returns

`void`

是否支持惯性


## Methods

### endInertialScrolling

▸ **endInertialScrolling**(): `void`

**`Description`**

立刻停止滚动

**`Effect`**

只在客户端调用生效

#### Returns

`void`


### scrollToEnd

▸ **scrollToEnd**(): `void`

**`Description`**

滚动到底部

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### scrollToStart

▸ **scrollToStart**(): `void`

**`Description`**

滚动到开始位置

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ScrollBox`](UI.ScrollBox.md)

**`Description`**

创建 ScrollBox 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ScrollBox`](UI.ScrollBox.md)

创建的对象
