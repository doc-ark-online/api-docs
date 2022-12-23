[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / ProgressBar

# Class: ProgressBar

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).ProgressBar

**`Author`**

wujie

**`Description`**

UI进度条

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`ProgressBar`**

## Table of contents

### Constructors

- [constructor](UI.UI.ProgressBar.md#constructor)

### Accessors

- [backgroundImageColor](UI.UI.ProgressBar.md#backgroundimagecolor)
- [backgroundImageDrawType](UI.UI.ProgressBar.md#backgroundimagedrawtype)
- [backgroundImageGuid](UI.UI.ProgressBar.md#backgroundimageguid)
- [backgroundImageMargin](UI.UI.ProgressBar.md#backgroundimagemargin)
- [backgroundImageSize](UI.UI.ProgressBar.md#backgroundimagesize)
- [cachedGeometry](UI.UI.ProgressBar.md#cachedgeometry)
- [currentValue](UI.UI.ProgressBar.md#currentvalue)
- [desiredSize](UI.UI.ProgressBar.md#desiredsize)
- [fillImageColor](UI.UI.ProgressBar.md#fillimagecolor)
- [fillImageDrawType](UI.UI.ProgressBar.md#fillimagedrawtype)
- [fillImageGuid](UI.UI.ProgressBar.md#fillimageguid)
- [fillImageMargin](UI.UI.ProgressBar.md#fillimagemargin)
- [fillImageSize](UI.UI.ProgressBar.md#fillimagesize)
- [fillType](UI.UI.ProgressBar.md#filltype)
- [guid](UI.UI.ProgressBar.md#guid)
- [isEnabled](UI.UI.ProgressBar.md#isenabled)
- [isHovered](UI.UI.ProgressBar.md#ishovered)
- [isRoundedToInt](UI.UI.ProgressBar.md#isroundedtoint)
- [name](UI.UI.ProgressBar.md#name)
- [onSliderValueChange](UI.UI.ProgressBar.md#onslidervaluechange)
- [paintSpaceGeometry](UI.UI.ProgressBar.md#paintspacegeometry)
- [parent](UI.UI.ProgressBar.md#parent)
- [percent](UI.UI.ProgressBar.md#percent)
- [renderOpacity](UI.UI.ProgressBar.md#renderopacity)
- [renderScale](UI.UI.ProgressBar.md#renderscale)
- [renderShear](UI.UI.ProgressBar.md#rendershear)
- [renderTransformAngle](UI.UI.ProgressBar.md#rendertransformangle)
- [renderTransformPivot](UI.UI.ProgressBar.md#rendertransformpivot)
- [size](UI.UI.ProgressBar.md#size)
- [sliderMaxValue](UI.UI.ProgressBar.md#slidermaxvalue)
- [sliderMinValue](UI.UI.ProgressBar.md#sliderminvalue)
- [slot](UI.UI.ProgressBar.md#slot)
- [thumbImageColor](UI.UI.ProgressBar.md#thumbimagecolor)
- [thumbImageDrawType](UI.UI.ProgressBar.md#thumbimagedrawtype)
- [thumbImageGuid](UI.UI.ProgressBar.md#thumbimageguid)
- [thumbImageMargin](UI.UI.ProgressBar.md#thumbimagemargin)
- [thumbImageSize](UI.UI.ProgressBar.md#thumbimagesize)
- [tickSpaceGeometry](UI.UI.ProgressBar.md#tickspacegeometry)
- [visibility](UI.UI.ProgressBar.md#visibility)
- [visible](UI.UI.ProgressBar.md#visible)

### Methods

- [destroyObject](UI.UI.ProgressBar.md#destroyobject)
- [equal](UI.UI.ProgressBar.md#equal)
- [invalidateLayoutAndVolatility](UI.UI.ProgressBar.md#invalidatelayoutandvolatility)
- [newObject](UI.UI.ProgressBar.md#newobject)

## Constructors

### constructor

• **new ProgressBar**()

#### Inherited from

[Widget](UI.UI.Widget.md).[constructor](UI.UI.Widget.md#constructor)

## Accessors

### backgroundImageColor

• `get` **backgroundImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取背景图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

背景图片颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:1224

• `set` **backgroundImageColor**(`inColor`): `void`

**`Description`**

设置背景图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:背景颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1218

___

### backgroundImageDrawType

• `get` **backgroundImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取背景图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

背景图片绘制类型

#### Defined in

UI/index.d.ts:1236

• `set` **backgroundImageDrawType**(`InDrawType`): `void`

**`Description`**

设置背景图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:Brush类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1230

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

#### Defined in

UI/index.d.ts:1188

• `set` **backgroundImageGuid**(`inGuid`): `void`

**`Description`**

设置进度条背景图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | usage:图片GUID |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1182

___

### backgroundImageMargin

• `get` **backgroundImageMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取进度条背景图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

进度条背景图片边距

#### Defined in

UI/index.d.ts:1194

• `set` **backgroundImageMargin**(`inMargin`): `void`

**`Description`**

设置进度条背景图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:进度条背景图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1200

___

### backgroundImageSize

• `get` **backgroundImageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取背景图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

图片大小

#### Defined in

UI/index.d.ts:1212

• `set` **backgroundImageSize**(`inSize`): `void`

**`Description`**

设置背景图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:图片大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1206

___

### cachedGeometry

• `get` **cachedGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取上一次的 GetTickSpaceGeometry

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回上一次的 GetTickSpaceGeometry

#### Inherited from

Widget.cachedGeometry

#### Defined in

UI/index.d.ts:4893

___

### currentValue

• `get` **currentValue**(): `number`

**`Description`**

获取当前值

**`Effect`**

只在客户端调用生效

#### Returns

`number`

当前值

#### Defined in

UI/index.d.ts:1381

• `set` **currentValue**(`inValue`): `void`

**`Description`**

设置当前值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | usage:当前值 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1388

___

### desiredSize

• `get` **desiredSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取期望大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回期望大小

#### Inherited from

Widget.desiredSize

#### Defined in

UI/index.d.ts:4827

___

### fillImageColor

• `get` **fillImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取填充图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

填充图片颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:1285

• `set` **fillImageColor**(`inColor`): `void`

**`Description`**

设置填充图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:设置的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1279

___

### fillImageDrawType

• `get` **fillImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取填充图片绘制类型

**`Effect`**

只在客户端调用生效\

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

填充图片绘制类型

#### Defined in

UI/index.d.ts:1297

• `set` **fillImageDrawType**(`inDrawType`): `void`

**`Description`**

设置填充图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:填充类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1291

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

#### Defined in

UI/index.d.ts:1249

• `set` **fillImageGuid**(`inGuid`): `void`

**`Description`**

设置进度条图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | usage:图片GUID |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1243

___

### fillImageMargin

• `get` **fillImageMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取进度条图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

进度条图片边距

#### Defined in

UI/index.d.ts:1255

• `set` **fillImageMargin**(`inMargin`): `void`

**`Description`**

设置进度条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:进度条图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1261

___

### fillImageSize

• `get` **fillImageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取填充图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

图片大小

#### Defined in

UI/index.d.ts:1273

• `set` **fillImageSize**(`inSize`): `void`

**`Description`**

设置填充图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1267

___

### fillType

• `get` **fillType**(): [`ProgressBarFillType`](../enums/UI.UI.ProgressBarFillType.md)

**`Description`**

获取进度条填充的方式

**`Effect`**

只在客户端调用生效

#### Returns

[`ProgressBarFillType`](../enums/UI.UI.ProgressBarFillType.md)

进度条填充

#### Defined in

UI/index.d.ts:1303

• `set` **fillType**(`inType`): `void`

**`Description`**

设置进度条填充的方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inType` | [`ProgressBarFillType`](../enums/UI.UI.ProgressBarFillType.md) | usage:{ 从左到右,从右到左,从上到下,从下到上 } |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1310

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取控件GUID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

控件GUID

#### Inherited from

Widget.guid

#### Defined in

UI/index.d.ts:4911

___

### isEnabled

• `get` **isEnabled**(): `boolean`

**`Description`**

是否可用

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.isEnabled

#### Defined in

UI/index.d.ts:4797

• `set` **isEnabled**(`enable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | usage:可用性boolean |

#### Returns

`void`

返回设置结果

#### Inherited from

Widget.isEnabled

#### Defined in

UI/index.d.ts:4804

___

### isHovered

• `get` **isHovered**(): `boolean`

**`Description`**

是否是hovered

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.isHovered

#### Defined in

UI/index.d.ts:4816

___

### isRoundedToInt

• `get` **isRoundedToInt**(): `boolean`

**`Description`**

获取当前数值是否取整

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

当前数值是否取整

#### Defined in

UI/index.d.ts:1433

• `set` **isRoundedToInt**(`inToInt`): `void`

**`Description`**

设置当前数值是否取整

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inToInt` | `boolean` | usage:是否取整 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1440

___

### name

• `get` **name**(): `string`

**`Description`**

获取名字

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回名字

#### Inherited from

Widget.name

#### Defined in

UI/index.d.ts:4773

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名字 |

#### Returns

`void`

#### Inherited from

Widget.name

#### Defined in

UI/index.d.ts:4767

___

### onSliderValueChange

• `get` **onSliderValueChange**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

**`Description`**

Slider值变化事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

变化事件

#### Defined in

UI/index.d.ts:1446

___

### paintSpaceGeometry

• `get` **paintSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于渲染Widget的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于渲染Widget的几何信息

#### Inherited from

Widget.paintSpaceGeometry

#### Defined in

UI/index.d.ts:4905

___

### parent

• `get` **parent**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取父节点

**`Effect`**

只在客户端调用生效

#### Returns

[`Widget`](UI.UI.Widget.md)

返回父节点

#### Inherited from

Widget.parent

#### Defined in

UI/index.d.ts:4755

___

### percent

• `get` **percent**(): `number`

**`Description`**

获取当前百分比

**`Effect`**

只在客户端调用生效

#### Returns

`number`

当前百分比

#### Defined in

UI/index.d.ts:1420

• `set` **percent**(`inPercent`): `void`

**`Description`**

设置当前百分比

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPercent` | `number` | usage:百分比 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1427

___

### renderOpacity

• `get` **renderOpacity**(): `number`

**`Description`**

获取渲染透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染透明度

#### Inherited from

Widget.renderOpacity

#### Defined in

UI/index.d.ts:4887

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOpacity` | `number` | usage:透明度 |

#### Returns

`void`

#### Inherited from

Widget.renderOpacity

#### Defined in

UI/index.d.ts:4881

___

### renderScale

• `get` **renderScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染缩放

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染缩放

#### Inherited from

Widget.renderScale

#### Defined in

UI/index.d.ts:4875

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染缩放 |

#### Returns

`void`

#### Inherited from

Widget.renderScale

#### Defined in

UI/index.d.ts:4869

___

### renderShear

• `get` **renderShear**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染错切形变

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染错切形变

#### Inherited from

Widget.renderShear

#### Defined in

UI/index.d.ts:4863

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染错切形变 |

#### Returns

`void`

#### Inherited from

Widget.renderShear

#### Defined in

UI/index.d.ts:4857

___

### renderTransformAngle

• `get` **renderTransformAngle**(): `number`

**`Description`**

获取渲染的角度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染角度

#### Inherited from

Widget.renderTransformAngle

#### Defined in

UI/index.d.ts:4839

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `number` | usage:渲染角度 |

#### Returns

`void`

#### Inherited from

Widget.renderTransformAngle

#### Defined in

UI/index.d.ts:4833

___

### renderTransformPivot

• `get` **renderTransformPivot**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染锚点

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染锚点

#### Inherited from

Widget.renderTransformPivot

#### Defined in

UI/index.d.ts:4851

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染锚点 |

#### Returns

`void`

#### Inherited from

Widget.renderTransformPivot

#### Defined in

UI/index.d.ts:4845

___

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取控件实际大小，需要在添加后才能使用

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

控件大小

#### Inherited from

Widget.size

#### Defined in

UI/index.d.ts:4810

___

### sliderMaxValue

• `get` **sliderMaxValue**(): `number`

**`Description`**

获取拖动条最大值

**`Effect`**

只在客户端调用生效

#### Returns

`number`

拖动条最大值

#### Defined in

UI/index.d.ts:1407

• `set` **sliderMaxValue**(`inValue`): `void`

**`Description`**

设置拖动条的最大值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | usage:拖动条最大值 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1414

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

#### Defined in

UI/index.d.ts:1394

• `set` **sliderMinValue**(`inValue`): `void`

**`Description`**

设置拖动条的最小值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | usage:拖动条最小值 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1401

___

### slot

• `get` **slot**(): [`UISlot`](UI.UI.UISlot.md)

**`Description`**

获取Slot槽

**`Effect`**

只在客户端调用生效

#### Returns

[`UISlot`](UI.UI.UISlot.md)

返回Slot槽

#### Inherited from

Widget.slot

#### Defined in

UI/index.d.ts:4761

___

### thumbImageColor

• `get` **thumbImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取滑块图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

滑块图片颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:1359

• `set` **thumbImageColor**(`inColor`): `void`

**`Description`**

设置滑块图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:设置的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1353

___

### thumbImageDrawType

• `get` **thumbImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取滑块图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

滑块图片绘制类型

#### Defined in

UI/index.d.ts:1375

• `set` **thumbImageDrawType**(`inDrawType`): `void`

**`Description`**

设置滑块图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1365

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

#### Defined in

UI/index.d.ts:1323

• `set` **thumbImageGuid**(`InGuid`): `void`

**`Description`**

设置拖动条的样式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGuid` | `string` | usage:拖动条样式GUID |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1317

___

### thumbImageMargin

• `get` **thumbImageMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取拖动条图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

拖动条图片边距

#### Defined in

UI/index.d.ts:1329

• `set` **thumbImageMargin**(`inMargin`): `void`

**`Description`**

设置拖动条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:拖动条图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1335

___

### thumbImageSize

• `get` **thumbImageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取滑块图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

图片大小

#### Defined in

UI/index.d.ts:1347

• `set` **thumbImageSize**(`inSize`): `void`

**`Description`**

设置滑块图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:滑块图片大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1341

___

### tickSpaceGeometry

• `get` **tickSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于驱动Widget Tick的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于驱动Widget Tick的几何信息

#### Inherited from

Widget.tickSpaceGeometry

#### Defined in

UI/index.d.ts:4899

___

### visibility

• `get` **visibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取可见性

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

返回可见性

#### Inherited from

Widget.visibility

#### Defined in

UI/index.d.ts:4785

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:可见性 |

#### Returns

`void`

#### Inherited from

Widget.visibility

#### Defined in

UI/index.d.ts:4779

___

### visible

• `get` **visible**(): `boolean`

**`Description`**

是否可见

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.visible

#### Defined in

UI/index.d.ts:4791

## Methods

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[Widget](UI.UI.Widget.md).[destroyObject](UI.UI.Widget.md#destroyobject)

#### Defined in

UI/index.d.ts:4742

___

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | [`Widget`](UI.UI.Widget.md) | usage:需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

#### Inherited from

[Widget](UI.UI.Widget.md).[equal](UI.UI.Widget.md#equal)

#### Defined in

UI/index.d.ts:4749

___

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[Widget](UI.UI.Widget.md).[invalidateLayoutAndVolatility](UI.UI.Widget.md#invalidatelayoutandvolatility)

#### Defined in

UI/index.d.ts:4821

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ProgressBar`](UI.UI.ProgressBar.md)

**`Description`**

创建 ProgressBar 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外parent对象 default:null |
| `inName?` | `string` | usage:创建控件的名称 default:null |

#### Returns

[`ProgressBar`](UI.UI.ProgressBar.md)

创建的对象

#### Defined in

UI/index.d.ts:1175
