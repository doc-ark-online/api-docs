[UI](../modules/UI.UI.md) / ProgressBar

# ProgressBar <Badge type="tip" text="Class" />

**`Description`**

UI进度条

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`ProgressBar`**

## Table of contents

| Accessors |
| :-----|
| **[backgroundImageColor](UI.ProgressBar.md#backgroundimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取背景图片颜色|
| **[backgroundImageDrawType](UI.ProgressBar.md#backgroundimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取背景图片绘制类型|
| **[backgroundImageGuid](UI.ProgressBar.md#backgroundimageguid)**(): `string` <br> 获取背景图片id|
| **[backgroundImageMargin](UI.ProgressBar.md#backgroundimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取进度条背景图片边距|
| **[backgroundImageSize](UI.ProgressBar.md#backgroundimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取背景图片大小|
| **[currentValue](UI.ProgressBar.md#currentvalue)**(): `number` <br> 获取当前值|
| **[fillImageColor](UI.ProgressBar.md#fillimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取填充图片颜色|
| **[fillImageDrawType](UI.ProgressBar.md#fillimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取填充图片绘制类型|
| **[fillImageGuid](UI.ProgressBar.md#fillimageguid)**(): `string` <br> 获取填充区图片id|
| **[fillImageMargin](UI.ProgressBar.md#fillimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取进度条图片边距|
| **[fillImageSize](UI.ProgressBar.md#fillimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取填充图片大小|
| **[fillType](UI.ProgressBar.md#filltype)**(): [`ProgressBarFillType`](../enums/UI.ProgressBarFillType.md) <br> 获取进度条填充的方式|
| **[isRoundedToInt](UI.ProgressBar.md#isroundedtoint)**(): `boolean` <br> 获取当前数值是否取整|
| **[onSliderValueChanged](UI.ProgressBar.md#onslidervaluechanged)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <br> Slider值变化事件|
| **[percent](UI.ProgressBar.md#percent)**(): `number` <br> 获取当前百分比|
| **[sliderMaxValue](UI.ProgressBar.md#slidermaxvalue)**(): `number` <br> 获取拖动条最大值|
| **[sliderMinValue](UI.ProgressBar.md#sliderminvalue)**(): `number` <br> 获取拖动条最小值|
| **[thumbImageColor](UI.ProgressBar.md#thumbimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取滑块图片颜色|
| **[thumbImageDrawType](UI.ProgressBar.md#thumbimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取滑块图片绘制类型|
| **[thumbImageGuid](UI.ProgressBar.md#thumbimageguid)**(): `string` <br> 获取填充区图片id|
| **[thumbImageMargin](UI.ProgressBar.md#thumbimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取拖动条图片边距|
| **[thumbImageSize](UI.ProgressBar.md#thumbimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取滑块图片大小|

| Methods |
| :-----|
| **[newObject](UI.ProgressBar.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`ProgressBar`](UI.ProgressBar.md) <br> 创建 ProgressBar 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁|

## Accessors

### backgroundImageColor

• `get` **backgroundImageColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取背景图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

背景图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **backgroundImageColor**(`inColor`): `void`

**`Description`**

设置背景图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 背景颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### backgroundImageDrawType

• `get` **backgroundImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

**`Description`**

获取背景图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

背景图片绘制类型

• `set` **backgroundImageDrawType**(`InDrawType`): `void`

**`Description`**

设置背景图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | Brush类型 |

#### Returns

`void`

___

### backgroundImageGuid

• `get` **backgroundImageGuid**(): `string`

**`Description`**

获取背景图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

背景图片id

• `set` **backgroundImageGuid**(`inGuid`): `void`

**`Description`**

设置进度条背景图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 图片GUID |

#### Returns

`void`

void

___

### backgroundImageMargin

• `get` **backgroundImageMargin**(): [`Margin`](UI.Margin.md)

**`Description`**

获取进度条背景图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.Margin.md)

进度条背景图片边距

• `set` **backgroundImageMargin**(`inMargin`): `void`

**`Description`**

设置进度条背景图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 进度条背景图片边距 |

#### Returns

`void`

___

### backgroundImageSize

• `get` **backgroundImageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取背景图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

图片大小

• `set` **backgroundImageSize**(`inSize`): `void`

**`Description`**

设置背景图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 图片大小 |

#### Returns

`void`


### currentValue

• `get` **currentValue**(): `number`

**`Description`**

获取当前值

**`Effect`**

只在客户端调用生效

#### Returns

`number`

当前值

• `set` **currentValue**(`inValue`): `void`

**`Description`**

设置当前值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 当前值 |

#### Returns

`void`

void


### fillImageColor

• `get` **fillImageColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取填充图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

填充图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **fillImageColor**(`inColor`): `void`

**`Description`**

设置填充图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 设置的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### fillImageDrawType

• `get` **fillImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

**`Description`**

获取填充图片绘制类型

**`Effect`**

只在客户端调用生效\

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

填充图片绘制类型

• `set` **fillImageDrawType**(`inDrawType`): `void`

**`Description`**

设置填充图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 填充类型 |

#### Returns

`void`

___

### fillImageGuid

• `get` **fillImageGuid**(): `string`

**`Description`**

获取填充区图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

填充区图片id

• `set` **fillImageGuid**(`inGuid`): `void`

**`Description`**

设置进度条图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 图片GUID |

#### Returns

`void`

void

___

### fillImageMargin

• `get` **fillImageMargin**(): [`Margin`](UI.Margin.md)

**`Description`**

获取进度条图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.Margin.md)

进度条图片边距

• `set` **fillImageMargin**(`inMargin`): `void`

**`Description`**

设置进度条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 进度条图片边距 |

#### Returns

`void`

___

### fillImageSize

• `get` **fillImageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取填充图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

图片大小

• `set` **fillImageSize**(`inSize`): `void`

**`Description`**

设置填充图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |

#### Returns

`void`

___

### fillType

• `get` **fillType**(): [`ProgressBarFillType`](../enums/UI.ProgressBarFillType.md)

**`Description`**

获取进度条填充的方式

**`Effect`**

只在客户端调用生效

#### Returns

[`ProgressBarFillType`](../enums/UI.ProgressBarFillType.md)

进度条填充

• `set` **fillType**(`inType`): `void`

**`Description`**

设置进度条填充的方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inType` | [`ProgressBarFillType`](../enums/UI.ProgressBarFillType.md) | { 从左到右,从右到左,从上到下,从下到上 } |

#### Returns

`void`

void


### isRoundedToInt

• `get` **isRoundedToInt**(): `boolean`

**`Description`**

获取当前数值是否取整

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

当前数值是否取整

• `set` **isRoundedToInt**(`inToInt`): `void`

**`Description`**

设置当前数值是否取整

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inToInt` | `boolean` | 是否取整 |

#### Returns

`void`

void


### onSliderValueChanged

• `get` **onSliderValueChanged**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

**`Description`**

Slider值变化事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

变化事件


### percent

• `get` **percent**(): `number`

**`Description`**

获取当前百分比

**`Effect`**

只在客户端调用生效

#### Returns

`number`

当前百分比

• `set` **percent**(`inPercent`): `void`

**`Description`**

设置当前百分比

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPercent` | `number` | 百分比 |

#### Returns

`void`

void


### sliderMaxValue

• `get` **sliderMaxValue**(): `number`

**`Description`**

获取拖动条最大值

**`Effect`**

只在客户端调用生效

#### Returns

`number`

拖动条最大值

• `set` **sliderMaxValue**(`inValue`): `void`

**`Description`**

设置拖动条的最大值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 拖动条最大值 |

#### Returns

`void`

void

___

### sliderMinValue

• `get` **sliderMinValue**(): `number`

**`Description`**

获取拖动条最小值

**`Effect`**

只在客户端调用生效

#### Returns

`number`

拖动条最小值

• `set` **sliderMinValue**(`inValue`): `void`

**`Description`**

设置拖动条的最小值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 拖动条最小值 |

#### Returns

`void`

void


### thumbImageColor

• `get` **thumbImageColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取滑块图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

滑块图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **thumbImageColor**(`inColor`): `void`

**`Description`**

设置滑块图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 设置的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### thumbImageDrawType

• `get` **thumbImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

**`Description`**

获取滑块图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

滑块图片绘制类型

• `set` **thumbImageDrawType**(`inDrawType`): `void`

**`Description`**

设置滑块图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 绘制类型 |

#### Returns

`void`

___

### thumbImageGuid

• `get` **thumbImageGuid**(): `string`

**`Description`**

获取填充区图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

填充区图片id

• `set` **thumbImageGuid**(`InGuid`): `void`

**`Description`**

设置拖动条的样式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGuid` | `string` | 拖动条样式GUID |

#### Returns

`void`

void

___

### thumbImageMargin

• `get` **thumbImageMargin**(): [`Margin`](UI.Margin.md)

**`Description`**

获取拖动条图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.Margin.md)

拖动条图片边距

• `set` **thumbImageMargin**(`inMargin`): `void`

**`Description`**

设置拖动条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 拖动条图片边距 |

#### Returns

`void`

___

### thumbImageSize

• `get` **thumbImageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取滑块图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

图片大小

• `set` **thumbImageSize**(`inSize`): `void`

**`Description`**

设置滑块图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 滑块图片大小 |

#### Returns

`void`


## Methods

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ProgressBar`](UI.ProgressBar.md)

**`Description`**

创建 ProgressBar 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ProgressBar`](UI.ProgressBar.md)

创建的对象
