[UI](../modules/UI.UI.md) / ProgressBar

# ProgressBar <Badge type="tip" text="Class" /> <Score text="ProgressBar" />

**`Groups`**

GUI

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
| **[barThickness](UI.ProgressBar.md#barthickness)**(): `number` <br> 获取进度条厚度|
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
| **[slideMethod](UI.ProgressBar.md#slidemethod)**(): [`SlideMethod`](../enums/UI.SlideMethod.md) <br> 获取进度条的滑动方式|
| **[sliderButtonPressDelegate](UI.ProgressBar.md#sliderbuttonpressdelegate)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <br> Slider按下事件|
| **[sliderButtonReleaseDelegate](UI.ProgressBar.md#sliderbuttonreleasedelegate)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <br> Slider抬起事件|
| **[sliderMaxValue](UI.ProgressBar.md#slidermaxvalue)**(): `number` <br> 获取拖动条最大值|
| **[sliderMinValue](UI.ProgressBar.md#sliderminvalue)**(): `number` <br> 获取拖动条最小值|
| **[thumbImageColor](UI.ProgressBar.md#thumbimagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取滑块图片颜色|
| **[thumbImageDrawType](UI.ProgressBar.md#thumbimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取滑块图片绘制类型|
| **[thumbImageGuid](UI.ProgressBar.md#thumbimageguid)**(): `string` <br> 获取填充区图片id|
| **[thumbImageMargin](UI.ProgressBar.md#thumbimagemargin)**(): [`Margin`](UI.Margin.md) <br> 获取拖动条图片边距|
| **[thumbImageSize](UI.ProgressBar.md#thumbimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取滑块图片大小|


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
| **[newObject](UI.ProgressBar.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`ProgressBar`](UI.ProgressBar.md) <br> 创建 ProgressBar 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**([`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](UI.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


## Accessors

### backgroundImageColor <Score text="backgroundImageColor" /> 

• `get` **backgroundImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取背景图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

背景图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **backgroundImageColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置背景图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 背景颜色，Type.LinearColor类型，数据范围0~1 |


___

### backgroundImageDrawType <Score text="backgroundImageDrawType" /> 

• `get` **backgroundImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取背景图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

背景图片绘制类型

• `set` **backgroundImageDrawType**(`InDrawType`): `void` <Badge type="tip" text="other" />

设置背景图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | Brush类型 |


___

### backgroundImageGuid <Score text="backgroundImageGuid" /> 

• `get` **backgroundImageGuid**(): `string` <Badge type="tip" text="other" />

获取背景图片id


#### Returns

`string`

背景图片id

• `set` **backgroundImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

设置进度条背景图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片GUID |


void

___

### backgroundImageMargin <Score text="backgroundImageMargin" /> 

• `get` **backgroundImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

获取进度条背景图片边距


#### Returns

[`Margin`](UI.Margin.md)

进度条背景图片边距

• `set` **backgroundImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

设置进度条背景图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 进度条背景图片边距 |


___

### backgroundImageSize <Score text="backgroundImageSize" /> 

• `get` **backgroundImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取背景图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

图片大小

• `set` **backgroundImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

设置背景图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 图片大小 |


___

### barThickness <Score text="barThickness" /> 

• `get` **barThickness**(): `number` <Badge type="tip" text="other" />

获取进度条厚度


#### Returns

`number`

厚度

• `set` **barThickness**(`inputBarThickness`): `void` <Badge type="tip" text="other" />

设置进度条厚度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputBarThickness` | `number` | 厚度 |



### currentValue <Score text="currentValue" /> 

• `get` **currentValue**(): `number` <Badge type="tip" text="other" />

获取当前值


#### Returns

`number`

当前值

• `set` **currentValue**(`inValue`): `void` <Badge type="tip" text="other" />

设置当前值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 当前值 |


void


### fillImageColor <Score text="fillImageColor" /> 

• `get` **fillImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取填充图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

填充图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **fillImageColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置填充图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 设置的颜色，Type.LinearColor类型，数据范围0~1 |


___

### fillImageDrawType <Score text="fillImageDrawType" /> 

• `get` **fillImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取填充图片绘制类型

只在客户端调用生效\

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

填充图片绘制类型

• `set` **fillImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="other" />

设置填充图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 填充类型 |


___

### fillImageGuid <Score text="fillImageGuid" /> 

• `get` **fillImageGuid**(): `string` <Badge type="tip" text="other" />

获取填充区图片id


#### Returns

`string`

填充区图片id

• `set` **fillImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

设置进度条图片


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 图片GUID |


void

___

### fillImageMargin <Score text="fillImageMargin" /> 

• `get` **fillImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

获取进度条图片边距


#### Returns

[`Margin`](UI.Margin.md)

进度条图片边距

• `set` **fillImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

设置进度条图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 进度条图片边距 |


___

### fillImageSize <Score text="fillImageSize" /> 

• `get` **fillImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取填充图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

图片大小

• `set` **fillImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

设置填充图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 大小 |


___

### fillType <Score text="fillType" /> 

• `get` **fillType**(): [`ProgressBarFillType`](../enums/UI.ProgressBarFillType.md) <Badge type="tip" text="other" />

获取进度条填充的方式


#### Returns

[`ProgressBarFillType`](../enums/UI.ProgressBarFillType.md)

进度条填充

• `set` **fillType**(`inType`): `void` <Badge type="tip" text="other" />

设置进度条填充的方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inType` | [`ProgressBarFillType`](../enums/UI.ProgressBarFillType.md) | `{ 从左到右,从右到左,从上到下,从下到上 }` |


void


### isRoundedToInt <Score text="isRoundedToInt" /> 

• `get` **isRoundedToInt**(): `boolean` <Badge type="tip" text="other" />

获取当前数值是否取整


#### Returns

`boolean`

当前数值是否取整

• `set` **isRoundedToInt**(`inToInt`): `void` <Badge type="tip" text="other" />

设置当前数值是否取整


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inToInt` | `boolean` | 是否取整 |


void


### onSliderValueChanged <Score text="onSliderValueChanged" /> 

• `get` **onSliderValueChanged**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <Badge type="tip" text="other" />

Slider值变化事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

变化事件


### percent <Score text="percent" /> 

• `get` **percent**(): `number` <Badge type="tip" text="other" />

获取当前百分比


#### Returns

`number`

当前百分比

• `set` **percent**(`inPercent`): `void` <Badge type="tip" text="other" />

设置当前百分比


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPercent` | `number` | 百分比 |


void


### slideMethod <Score text="slideMethod" /> 

• `get` **slideMethod**(): [`SlideMethod`](../enums/UI.SlideMethod.md) <Badge type="tip" text="other" />

获取进度条的滑动方式


#### Returns

[`SlideMethod`](../enums/UI.SlideMethod.md)

• `set` **slideMethod**(`inSlideMethod`): `void` <Badge type="tip" text="other" />

设置进度条的滑动方式


#### Parameters

| Name | Type |
| :------ | :------ |
| `inSlideMethod` | [`SlideMethod`](../enums/UI.SlideMethod.md) |


___

### sliderButtonPressDelegate <Score text="sliderButtonPressDelegate" /> 

• `get` **sliderButtonPressDelegate**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <Badge type="tip" text="other" />

Slider按下事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

按下事件

___

### sliderButtonReleaseDelegate <Score text="sliderButtonReleaseDelegate" /> 

• `get` **sliderButtonReleaseDelegate**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <Badge type="tip" text="other" />

Slider抬起事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

抬起事件

___

### sliderMaxValue <Score text="sliderMaxValue" /> 

• `get` **sliderMaxValue**(): `number` <Badge type="tip" text="other" />

获取拖动条最大值


#### Returns

`number`

拖动条最大值

• `set` **sliderMaxValue**(`inValue`): `void` <Badge type="tip" text="other" />

设置拖动条的最大值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 拖动条最大值 |


void

___

### sliderMinValue <Score text="sliderMinValue" /> 

• `get` **sliderMinValue**(): `number` <Badge type="tip" text="other" />

获取拖动条最小值


#### Returns

`number`

拖动条最小值

• `set` **sliderMinValue**(`inValue`): `void` <Badge type="tip" text="other" />

设置拖动条的最小值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 拖动条最小值 |


void


### thumbImageColor <Score text="thumbImageColor" /> 

• `get` **thumbImageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取滑块图片颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

滑块图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **thumbImageColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置滑块图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 设置的颜色，Type.LinearColor类型，数据范围0~1 |


___

### thumbImageDrawType <Score text="thumbImageDrawType" /> 

• `get` **thumbImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="other" />

获取滑块图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

滑块图片绘制类型

• `set` **thumbImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="other" />

设置滑块图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 绘制类型 |


___

### thumbImageGuid <Score text="thumbImageGuid" /> 

• `get` **thumbImageGuid**(): `string` <Badge type="tip" text="other" />

获取填充区图片id


#### Returns

`string`

填充区图片id

• `set` **thumbImageGuid**(`inGUID`): `void` <Badge type="tip" text="other" />

设置拖动条的样式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 拖动条样式GUID |


void

___

### thumbImageMargin <Score text="thumbImageMargin" /> 

• `get` **thumbImageMargin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="other" />

获取拖动条图片边距


#### Returns

[`Margin`](UI.Margin.md)

拖动条图片边距

• `set` **thumbImageMargin**(`inMargin`): `void` <Badge type="tip" text="other" />

设置拖动条图片边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 拖动条图片边距 |


___

### thumbImageSize <Score text="thumbImageSize" /> 

• `get` **thumbImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取滑块图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

图片大小

• `set` **thumbImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

设置滑块图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 滑块图片大小 |



## Methods

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`ProgressBar`](UI.ProgressBar.md) <Badge type="tip" text="other" />

创建 ProgressBar 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ProgressBar`](UI.ProgressBar.md)

创建的对象
