[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / ProgressBar

# Class: ProgressBar

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).ProgressBar

**`Author`**

jie.wu

**`Description`**

UI 进度条

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`ProgressBar`**

## Table of contents

### Constructors

- [constructor](UI.UI.ProgressBar.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.ProgressBar.md#autosizeenable)
- [backgroundImageColor](UI.UI.ProgressBar.md#backgroundimagecolor)
- [backgroundImageDrawType](UI.UI.ProgressBar.md#backgroundimagedrawtype)
- [backgroundImageGuid](UI.UI.ProgressBar.md#backgroundimageguid)
- [backgroundImageMargin](UI.UI.ProgressBar.md#backgroundimagemargin)
- [backgroundImageSize](UI.UI.ProgressBar.md#backgroundimagesize)
- [cachedGeometry](UI.UI.ProgressBar.md#cachedgeometry)
- [constraints](UI.UI.ProgressBar.md#constraints)
- [currentValue](UI.UI.ProgressBar.md#currentvalue)
- [desiredSize](UI.UI.ProgressBar.md#desiredsize)
- [enable](UI.UI.ProgressBar.md#enable)
- [fillImageColor](UI.UI.ProgressBar.md#fillimagecolor)
- [fillImageDrawType](UI.UI.ProgressBar.md#fillimagedrawtype)
- [fillImageGuid](UI.UI.ProgressBar.md#fillimageguid)
- [fillImageMargin](UI.UI.ProgressBar.md#fillimagemargin)
- [fillImageSize](UI.UI.ProgressBar.md#fillimagesize)
- [fillType](UI.UI.ProgressBar.md#filltype)
- [guid](UI.UI.ProgressBar.md#guid)
- [isHovered](UI.UI.ProgressBar.md#ishovered)
- [isRoundedToInt](UI.UI.ProgressBar.md#isroundedtoint)
- [name](UI.UI.ProgressBar.md#name)
- [onSliderValueChanged](UI.UI.ProgressBar.md#onslidervaluechanged)
- [paintSpaceGeometry](UI.UI.ProgressBar.md#paintspacegeometry)
- [parent](UI.UI.ProgressBar.md#parent)
- [percent](UI.UI.ProgressBar.md#percent)
- [position](UI.UI.ProgressBar.md#position)
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
- [transform](UI.UI.ProgressBar.md#transform)
- [visibility](UI.UI.ProgressBar.md#visibility)
- [visible](UI.UI.ProgressBar.md#visible)
- [zOrder](UI.UI.ProgressBar.md#zorder)

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

### autoSizeEnable

• `get` **autoSizeEnable**(): `boolean`

**`Description`**

获取是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动设置大小

#### Inherited from

Widget.autoSizeEnable

#### Defined in

UI/index.d.ts:4987

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description            |
| :--------- | :-------- | :--------------------- |
| `autoSize` | `boolean` | usage:是否自动设置大小 |

#### Returns

`void`

#### Inherited from

Widget.autoSizeEnable

#### Defined in

UI/index.d.ts:4981

---

### backgroundImageColor

• `get` **backgroundImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取背景图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

背景图片颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:1224

• `set` **backgroundImageColor**(`inColor`): `void`

**`Description`**

设置背景图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                         |
| :-------- | :---------------------------------------- | :-------------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:背景颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1218

---

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

| Name         | Type                                                         | Description      |
| :----------- | :----------------------------------------------------------- | :--------------- |
| `InDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:Brush 类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1230

---

### backgroundImageGuid

• `get` **backgroundImageGuid**(): `string`

**`Description`**

获取背景图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

背景图片 id

#### Defined in

UI/index.d.ts:1188

• `set` **backgroundImageGuid**(`inGuid`): `void`

**`Description`**

设置进度条背景图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description     |
| :------- | :------- | :-------------- |
| `inGuid` | `string` | usage:图片 GUID |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1182

---

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

| Name       | Type                        | Description              |
| :--------- | :-------------------------- | :----------------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:进度条背景图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1200

---

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

| Name     | Type                              | Description    |
| :------- | :-------------------------------- | :------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:图片大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1206

---

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

UI/index.d.ts:4897

---

### constraints

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

**`Description`**

获取控件的布局

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

控件的布局

#### Inherited from

Widget.constraints

#### Defined in

UI/index.d.ts:4939

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  | Description      |
| :---------------- | :---------------------------------------------------- | :--------------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | usage:控件的布局 |

#### Returns

`void`

#### Inherited from

Widget.constraints

#### Defined in

UI/index.d.ts:4933

---

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

| Name      | Type     | Description  |
| :-------- | :------- | :----------- |
| `inValue` | `number` | usage:当前值 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1388

---

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

UI/index.d.ts:4831

---

### enable

• `get` **enable**(): `boolean`

**`Description`**

是否可用

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.enable

#### Defined in

UI/index.d.ts:4807

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description          |
| :--------- | :-------- | :------------------- |
| `isEnable` | `boolean` | usage:可用性 boolean |

#### Returns

`void`

返回设置结果

#### Inherited from

Widget.enable

#### Defined in

UI/index.d.ts:4814

---

### fillImageColor

• `get` **fillImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取填充图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

填充图片颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:1285

• `set` **fillImageColor**(`inColor`): `void`

**`Description`**

设置填充图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                           |
| :-------- | :---------------------------------------- | :---------------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:设置的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1279

---

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

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:填充类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1291

---

### fillImageGuid

• `get` **fillImageGuid**(): `string`

**`Description`**

获取填充区图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

填充区图片 id

#### Defined in

UI/index.d.ts:1249

• `set` **fillImageGuid**(`inGuid`): `void`

**`Description`**

设置进度条图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description     |
| :------- | :------- | :-------------- |
| `inGuid` | `string` | usage:图片 GUID |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1243

---

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

| Name       | Type                        | Description          |
| :--------- | :-------------------------- | :------------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:进度条图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1261

---

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

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:大小  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1267

---

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

| Name     | Type                                                           | Description                                   |
| :------- | :------------------------------------------------------------- | :-------------------------------------------- |
| `inType` | [`ProgressBarFillType`](../enums/UI.UI.ProgressBarFillType.md) | usage:{ 从左到右,从右到左,从上到下,从下到上 } |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1310

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取控件 GUID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

控件 GUID

#### Inherited from

Widget.guid

#### Defined in

UI/index.d.ts:4915

---

### isHovered

• `get` **isHovered**(): `boolean`

**`Description`**

是否是 hovered

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.isHovered

#### Defined in

UI/index.d.ts:4820

---

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

| Name      | Type      | Description    |
| :-------- | :-------- | :------------- |
| `inToInt` | `boolean` | usage:是否取整 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1440

---

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

UI/index.d.ts:4783

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`void`

#### Inherited from

Widget.name

#### Defined in

UI/index.d.ts:4777

---

### onSliderValueChanged

• `get` **onSliderValueChanged**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

**`Description`**

Slider 值变化事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\>

变化事件

#### Defined in

UI/index.d.ts:1446

---

### paintSpaceGeometry

• `get` **paintSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于渲染 Widget 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于渲染 Widget 的几何信息

#### Inherited from

Widget.paintSpaceGeometry

#### Defined in

UI/index.d.ts:4909

---

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

UI/index.d.ts:4764

---

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

| Name        | Type     | Description  |
| :---------- | :------- | :----------- |
| `inPercent` | `number` | usage:百分比 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1427

---

### position

• `get` **position**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

**`Description`**

获取控件的位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

控件的位置

#### Inherited from

Widget.position

#### Defined in

UI/index.d.ts:4951

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description      |
| :---------------- | :-------------------------------- | :--------------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | usage:控件的位置 |

#### Returns

`void`

#### Inherited from

Widget.position

#### Defined in

UI/index.d.ts:4945

---

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

UI/index.d.ts:4891

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description  |
| :---------- | :------- | :----------- |
| `InOpacity` | `number` | usage:透明度 |

#### Returns

`void`

#### Inherited from

Widget.renderOpacity

#### Defined in

UI/index.d.ts:4885

---

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

UI/index.d.ts:4879

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染缩放 |

#### Returns

`void`

#### Inherited from

Widget.renderScale

#### Defined in

UI/index.d.ts:4873

---

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

UI/index.d.ts:4867

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description        |
| :------ | :-------------------------------- | :----------------- |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染错切形变 |

#### Returns

`void`

#### Inherited from

Widget.renderShear

#### Defined in

UI/index.d.ts:4861

---

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

UI/index.d.ts:4843

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `o`  | `number` | usage:渲染角度 |

#### Returns

`void`

#### Inherited from

Widget.renderTransformAngle

#### Defined in

UI/index.d.ts:4837

---

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

UI/index.d.ts:4855

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染锚点 |

#### Returns

`void`

#### Inherited from

Widget.renderTransformPivot

#### Defined in

UI/index.d.ts:4849

---

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

#### Inherited from

Widget.size

#### Defined in

UI/index.d.ts:4963

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description    |
| :------- | :-------------------------------- | :------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:输入大小 |

#### Returns

`void`

#### Inherited from

Widget.size

#### Defined in

UI/index.d.ts:4957

---

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

| Name      | Type     | Description        |
| :-------- | :------- | :----------------- |
| `inValue` | `number` | usage:拖动条最大值 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1414

---

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

| Name      | Type     | Description        |
| :-------- | :------- | :----------------- |
| `inValue` | `number` | usage:拖动条最小值 |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1401

---

### slot

• `get` **slot**(): [`UISlot`](UI.UI.UISlot.md)

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取插槽

**`Effect`**

只在客户端调用生效

#### Returns

[`UISlot`](UI.UI.UISlot.md)

返回插槽

#### Inherited from

Widget.slot

#### Defined in

UI/index.d.ts:4771

---

### thumbImageColor

• `get` **thumbImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取滑块图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

滑块图片颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:1359

• `set` **thumbImageColor**(`inColor`): `void`

**`Description`**

设置滑块图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                           |
| :-------- | :---------------------------------------- | :---------------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:设置的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1353

---

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

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1365

---

### thumbImageGuid

• `get` **thumbImageGuid**(): `string`

**`Description`**

获取填充区图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

填充区图片 id

#### Defined in

UI/index.d.ts:1323

• `set` **thumbImageGuid**(`InGuid`): `void`

**`Description`**

设置拖动条的样式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description           |
| :------- | :------- | :-------------------- |
| `InGuid` | `string` | usage:拖动条样式 GUID |

#### Returns

`void`

void

#### Defined in

UI/index.d.ts:1317

---

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

| Name       | Type                        | Description          |
| :--------- | :-------------------------- | :------------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:拖动条图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1335

---

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

| Name     | Type                              | Description        |
| :------- | :-------------------------------- | :----------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:滑块图片大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1341

---

### tickSpaceGeometry

• `get` **tickSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于驱动 Widget Tick 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于驱动 Widget Tick 的几何信息

#### Inherited from

Widget.tickSpaceGeometry

#### Defined in

UI/index.d.ts:4903

---

### transform

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

**`Description`**

得到控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

控件的大小和位置

#### Inherited from

Widget.transform

#### Defined in

UI/index.d.ts:4927

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description    |
| :------------ | :------------------------------------ | :------------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | usage:大小位置 |

#### Returns

`void`

#### Inherited from

Widget.transform

#### Defined in

UI/index.d.ts:4921

---

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

UI/index.d.ts:4795

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description  |
| :----------- | :----------------------------------------------------- | :----------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:可见性 |

#### Returns

`void`

#### Inherited from

Widget.visibility

#### Defined in

UI/index.d.ts:4789

---

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

UI/index.d.ts:4801

---

### zOrder

• `get` **zOrder**(): `number`

**`Description`**

获取 zorder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zorder

#### Inherited from

Widget.zOrder

#### Defined in

UI/index.d.ts:4975

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置 zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `InZOrder` | `number` | usage:值越大在越上层 |

#### Returns

`void`

#### Inherited from

Widget.zOrder

#### Defined in

UI/index.d.ts:4969

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

UI/index.d.ts:4751

---

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description                  |
| :----- | :-------------------------- | :--------------------------- |
| `that` | [`Widget`](UI.UI.Widget.md) | usage:需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

#### Inherited from

[Widget](UI.UI.Widget.md).[equal](UI.UI.Widget.md#equal)

#### Defined in

UI/index.d.ts:4758

---

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

UI/index.d.ts:4825

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ProgressBar`](UI.UI.ProgressBar.md)

**`Description`**

创建 ProgressBar 控件，当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                 |
| :-------- | :-------------------------- | :------------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外 parent 对象 default:null |
| `inName?` | `string`                    | usage:创建控件的名称 default:null           |

#### Returns

[`ProgressBar`](UI.UI.ProgressBar.md)

创建的对象

#### Defined in

UI/index.d.ts:1175
