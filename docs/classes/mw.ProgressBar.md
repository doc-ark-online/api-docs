[UI](../groups/Core.UI.md) / ProgressBar

# ProgressBar <Badge type="tip" text="Class" /> <Score text="ProgressBar" />

UI进度条

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`ProgressBar`**

## Table of contents

| Accessors |
| :-----|
| **[backgroundImageColor](mw.ProgressBar.md#backgroundimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取背景图片颜色|
| **[backgroundImageDrawType](mw.ProgressBar.md#backgroundimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取背景图片绘制类型|
| **[backgroundImageGuid](mw.ProgressBar.md#backgroundimageguid)**(): `string` <br> 获取背景图片id|
| **[backgroundImageMargin](mw.ProgressBar.md#backgroundimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取进度条背景图片边距|
| **[backgroundImageSize](mw.ProgressBar.md#backgroundimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取背景图片大小|
| **[barThickness](mw.ProgressBar.md#barthickness)**(): `number` <br> 获取进度条厚度|
| **[currentValue](mw.ProgressBar.md#currentvalue)**(): `number` <br> 获取当前值|
| **[fillImageColor](mw.ProgressBar.md#fillimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取填充图片颜色|
| **[fillImageDrawType](mw.ProgressBar.md#fillimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取填充图片绘制类型|
| **[fillImageGuid](mw.ProgressBar.md#fillimageguid)**(): `string` <br> 获取填充区图片id|
| **[fillImageMargin](mw.ProgressBar.md#fillimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取进度条图片边距|
| **[fillImageSize](mw.ProgressBar.md#fillimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取填充图片大小|
| **[fillType](mw.ProgressBar.md#filltype)**(): [`ProgressBarFillType`](../enums/mw.ProgressBarFillType.md) <br> 获取进度条填充的方式|
| **[isRoundedToInt](mw.ProgressBar.md#isroundedtoint)**(): `boolean` <br> 获取当前数值是否取整|
| **[onSliderValueChanged](mw.ProgressBar.md#onslidervaluechanged)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <br> Slider值变化事件|
| **[percent](mw.ProgressBar.md#percent)**(): `number` <br> 获取当前百分比|
| **[slideMethod](mw.ProgressBar.md#slidemethod)**(): [`SlideMethod`](../enums/mw.SlideMethod.md) <br> 获取进度条的滑动方式|
| **[sliderButtonPressDelegate](mw.ProgressBar.md#sliderbuttonpressdelegate)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <br> Slider按下事件|
| **[sliderButtonReleaseDelegate](mw.ProgressBar.md#sliderbuttonreleasedelegate)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <br> Slider抬起事件|
| **[sliderMaxValue](mw.ProgressBar.md#slidermaxvalue)**(): `number` <br> 获取拖动条最大值|
| **[sliderMinValue](mw.ProgressBar.md#sliderminvalue)**(): `number` <br> 获取拖动条最小值|
| **[thumbImageColor](mw.ProgressBar.md#thumbimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取滑块图片颜色|
| **[thumbImageDrawType](mw.ProgressBar.md#thumbimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取滑块图片绘制类型|
| **[thumbImageGuid](mw.ProgressBar.md#thumbimageguid)**(): `string` <br> 获取填充区图片id|
| **[thumbImageMargin](mw.ProgressBar.md#thumbimagemargin)**(): [`Margin`](mw.Margin.md) <br> 获取拖动条图片边距|
| **[thumbImageSize](mw.ProgressBar.md#thumbimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取滑块图片大小|


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
| **[newObject](mw.ProgressBar.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`ProgressBar`](mw.ProgressBar.md) <br> 创建 ProgressBar 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


### backgroundImageColor <Score text="backgroundImageColor" /> 

• `get` **backgroundImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取背景图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

背景图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **backgroundImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置背景图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 背景颜色，Type.LinearColor类型，数据范围0~1 |


___

### backgroundImageDrawType <Score text="backgroundImageDrawType" /> 

• `get` **backgroundImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取背景图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

背景图片绘制类型

• `set` **backgroundImageDrawType**(`InDrawType`): `void` <Badge type="tip" text="client" />

设置背景图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | Brush类型 |


___

### backgroundImageGuid <Score text="backgroundImageGuid" /> 

• `get` **backgroundImageGuid**(): `string` <Badge type="tip" text="client" />

获取背景图片id


#### Returns

`string`

背景图片id

• `set` **backgroundImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

设置进度条背景图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片GUID |


void

___

### backgroundImageMargin <Score text="backgroundImageMargin" /> 

• `get` **backgroundImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取进度条背景图片边距


#### Returns

[`Margin`](mw.Margin.md)

进度条背景图片边距

• `set` **backgroundImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置进度条背景图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](mw.Margin.md) | 进度条背景图片边距 |


___

### backgroundImageSize <Score text="backgroundImageSize" /> 

• `get` **backgroundImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取背景图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

图片大小

• `set` **backgroundImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置背景图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 图片大小 |


___

### barThickness <Score text="barThickness" /> 

• `get` **barThickness**(): `number` <Badge type="tip" text="client" />

获取进度条厚度


#### Returns

`number`

厚度

• `set` **barThickness**(`inputBarThickness`): `void` <Badge type="tip" text="client" />

设置进度条厚度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputBarThickness` | `number` | 厚度 |


___

### currentValue <Score text="currentValue" /> 

• `get` **currentValue**(): `number` <Badge type="tip" text="client" />

获取当前值


#### Returns

`number`

当前值

• `set` **currentValue**(`inValue`): `void` <Badge type="tip" text="client" />

设置当前值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 当前值 |


void

___

### fillImageColor <Score text="fillImageColor" /> 

• `get` **fillImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取填充图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

填充图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **fillImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置填充图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 设置的颜色，Type.LinearColor类型，数据范围0~1 |


___

### fillImageDrawType <Score text="fillImageDrawType" /> 

• `get` **fillImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取填充图片绘制类型

只在客户端调用生效\

#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

填充图片绘制类型

• `set` **fillImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置填充图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 填充类型 |


___

### fillImageGuid <Score text="fillImageGuid" /> 

• `get` **fillImageGuid**(): `string` <Badge type="tip" text="client" />

获取填充区图片id


#### Returns

`string`

填充区图片id

• `set` **fillImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

设置进度条图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片GUID |


void

___

### fillImageMargin <Score text="fillImageMargin" /> 

• `get` **fillImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取进度条图片边距


#### Returns

[`Margin`](mw.Margin.md)

进度条图片边距

• `set` **fillImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置进度条图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](mw.Margin.md) | 进度条图片边距 |


___

### fillImageSize <Score text="fillImageSize" /> 

• `get` **fillImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取填充图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

图片大小

• `set` **fillImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置填充图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 大小 |


___

### fillType <Score text="fillType" /> 

• `get` **fillType**(): [`ProgressBarFillType`](../enums/mw.ProgressBarFillType.md) <Badge type="tip" text="client" />

获取进度条填充的方式


#### Returns

[`ProgressBarFillType`](../enums/mw.ProgressBarFillType.md)

进度条填充

• `set` **fillType**(`inType`): `void` <Badge type="tip" text="client" />

设置进度条填充的方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inType` | [`ProgressBarFillType`](../enums/mw.ProgressBarFillType.md) | `{ 从左到右,从右到左,从上到下,从下到上 }` |


void

___

### isRoundedToInt <Score text="isRoundedToInt" /> 

• `get` **isRoundedToInt**(): `boolean` <Badge type="tip" text="client" />

获取当前数值是否取整


#### Returns

`boolean`

当前数值是否取整

• `set` **isRoundedToInt**(`inToInt`): `void` <Badge type="tip" text="client" />

设置当前数值是否取整


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inToInt` | `boolean` | 是否取整 |


void

___

### onSliderValueChanged <Score text="onSliderValueChanged" /> 

• `get` **onSliderValueChanged**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <Badge type="tip" text="client" />

Slider值变化事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

变化事件

___

### percent <Score text="percent" /> 

• `get` **percent**(): `number` <Badge type="tip" text="client" />

获取当前百分比


#### Returns

`number`

当前百分比

• `set` **percent**(`inPercent`): `void` <Badge type="tip" text="client" />

设置当前百分比


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPercent` | `number` | 百分比 |


void

___

### slideMethod <Score text="slideMethod" /> 

• `get` **slideMethod**(): [`SlideMethod`](../enums/mw.SlideMethod.md) <Badge type="tip" text="client" />

获取进度条的滑动方式


#### Returns

[`SlideMethod`](../enums/mw.SlideMethod.md)

• `set` **slideMethod**(`inSlideMethod`): `void` <Badge type="tip" text="client" />

设置进度条的滑动方式


#### Parameters

| Name | Type |
| :------ | :------ |
| `inSlideMethod` | [`SlideMethod`](../enums/mw.SlideMethod.md) |


___

### sliderButtonPressDelegate <Score text="sliderButtonPressDelegate" /> 

• `get` **sliderButtonPressDelegate**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <Badge type="tip" text="client" />

Slider按下事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

按下事件

___

### sliderButtonReleaseDelegate <Score text="sliderButtonReleaseDelegate" /> 

• `get` **sliderButtonReleaseDelegate**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <Badge type="tip" text="client" />

Slider抬起事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

抬起事件

___

### sliderMaxValue <Score text="sliderMaxValue" /> 

• `get` **sliderMaxValue**(): `number` <Badge type="tip" text="client" />

获取拖动条最大值


#### Returns

`number`

拖动条最大值

• `set` **sliderMaxValue**(`inValue`): `void` <Badge type="tip" text="client" />

设置拖动条的最大值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 拖动条最大值 |


void

___

### sliderMinValue <Score text="sliderMinValue" /> 

• `get` **sliderMinValue**(): `number` <Badge type="tip" text="client" />

获取拖动条最小值


#### Returns

`number`

拖动条最小值

• `set` **sliderMinValue**(`inValue`): `void` <Badge type="tip" text="client" />

设置拖动条的最小值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 拖动条最小值 |


void

___

### thumbImageColor <Score text="thumbImageColor" /> 

• `get` **thumbImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取滑块图片颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

滑块图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **thumbImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置滑块图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 设置的颜色，Type.LinearColor类型，数据范围0~1 |


___

### thumbImageDrawType <Score text="thumbImageDrawType" /> 

• `get` **thumbImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取滑块图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

滑块图片绘制类型

• `set` **thumbImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置滑块图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 绘制类型 |


___

### thumbImageGuid <Score text="thumbImageGuid" /> 

• `get` **thumbImageGuid**(): `string` <Badge type="tip" text="client" />

获取填充区图片id


#### Returns

`string`

填充区图片id

• `set` **thumbImageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

设置拖动条的样式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 拖动条样式GUID |


void

___

### thumbImageMargin <Score text="thumbImageMargin" /> 

• `get` **thumbImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取拖动条图片边距


#### Returns

[`Margin`](mw.Margin.md)

拖动条图片边距

• `set` **thumbImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置拖动条图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](mw.Margin.md) | 拖动条图片边距 |


___

### thumbImageSize <Score text="thumbImageSize" /> 

• `get` **thumbImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取滑块图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

图片大小

• `set` **thumbImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置滑块图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 滑块图片大小 |



## Methods
___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`ProgressBar`](mw.ProgressBar.md) <Badge type="tip" text="client" />

创建 ProgressBar 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ProgressBar`](mw.ProgressBar.md)

创建的对象