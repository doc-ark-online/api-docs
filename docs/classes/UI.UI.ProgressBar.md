[UI](../modules/UI.UI.md) / ProgressBar

# ProgressBar <Badge type="tip" text="Class" />

**`Description`**

UI 进度条

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`ProgressBar`**

## Table of contents

| Accessors                                                                                                                                                                                    |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[autoSizeEnable](UI.UI.ProgressBar.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小                                                                                             |
| **[backgroundImageColor](UI.UI.ProgressBar.md#backgroundimagecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取背景图片颜色                                                     |
| **[backgroundImageDrawType](UI.UI.ProgressBar.md#backgroundimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) <br> 获取背景图片绘制类型                        |
| **[backgroundImageGuid](UI.UI.ProgressBar.md#backgroundimageguid)**(): `string` <br> 获取背景图片 id                                                                                         |
| **[backgroundImageMargin](UI.UI.ProgressBar.md#backgroundimagemargin)**(): [`Margin`](UI.UI.Margin.md) <br> 获取进度条背景图片边距                                                           |
| **[backgroundImageSize](UI.UI.ProgressBar.md#backgroundimagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取背景图片大小                                                               |
| **[cachedGeometry](UI.UI.ProgressBar.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的 GetTickSpaceGeometry                                                          |
| **[constraints](UI.UI.ProgressBar.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局                                                |
| **[currentValue](UI.UI.ProgressBar.md#currentvalue)**(): `number` <br> 获取当前值                                                                                                            |
| **[desiredSize](UI.UI.ProgressBar.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小                                                                                   |
| **[enable](UI.UI.ProgressBar.md#enable)**(): `boolean` <br> 是否可用                                                                                                                         |
| **[fillImageColor](UI.UI.ProgressBar.md#fillimagecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取填充图片颜色                                                                 |
| **[fillImageDrawType](UI.UI.ProgressBar.md#fillimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) <br> 获取填充图片绘制类型                                    |
| **[fillImageGuid](UI.UI.ProgressBar.md#fillimageguid)**(): `string` <br> 获取填充区图片 id                                                                                                   |
| **[fillImageMargin](UI.UI.ProgressBar.md#fillimagemargin)**(): [`Margin`](UI.UI.Margin.md) <br> 获取进度条图片边距                                                                           |
| **[fillImageSize](UI.UI.ProgressBar.md#fillimagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取填充图片大小                                                                           |
| **[fillType](UI.UI.ProgressBar.md#filltype)**(): [`ProgressBarFillType`](../enums/UI.UI.ProgressBarFillType.md) <br> 获取进度条填充的方式                                                    |
| **[guid](UI.UI.ProgressBar.md#guid)**(): `string` <br> 获取控件 GUID                                                                                                                         |
| **[isHovered](UI.UI.ProgressBar.md#ishovered)**(): `boolean` <br> 是否是 hovered                                                                                                             |
| **[isRoundedToInt](UI.UI.ProgressBar.md#isroundedtoint)**(): `boolean` <br> 获取当前数值是否取整                                                                                             |
| **[name](UI.UI.ProgressBar.md#name)**(): `string` <br> 获取名字                                                                                                                              |
| **[onSliderValueChanged](UI.UI.ProgressBar.md#onslidervaluechanged)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`CurrentValue`: `number`) => `void`\> <br> Slider 值变化事件 |
| **[paintSpaceGeometry](UI.UI.ProgressBar.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染 Widget 的几何信息                                             |
| **[parent](UI.UI.ProgressBar.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点                                                                                                     |
| **[percent](UI.UI.ProgressBar.md#percent)**(): `number` <br> 获取当前百分比                                                                                                                  |
| **[position](UI.UI.ProgressBar.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置                                                                          |
| **[renderOpacity](UI.UI.ProgressBar.md#renderopacity)**(): `number` <br> 获取渲染透明度                                                                                                      |
| **[renderScale](UI.UI.ProgressBar.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放                                                                                   |
| **[renderShear](UI.UI.ProgressBar.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变                                                                               |
| **[renderTransformAngle](UI.UI.ProgressBar.md#rendertransformangle)**(): `number` <br> 获取渲染的角度                                                                                        |
| **[renderTransformPivot](UI.UI.ProgressBar.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点                                                                 |
| **[size](UI.UI.ProgressBar.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小                                                                                                     |
| **[sliderMaxValue](UI.UI.ProgressBar.md#slidermaxvalue)**(): `number` <br> 获取拖动条最大值                                                                                                  |
| **[sliderMinValue](UI.UI.ProgressBar.md#sliderminvalue)**(): `number` <br> 获取拖动条最小值                                                                                                  |
| **[slot](UI.UI.ProgressBar.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息                                       |
| **[thumbImageColor](UI.UI.ProgressBar.md#thumbimagecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取滑块图片颜色                                                               |
| **[thumbImageDrawType](UI.UI.ProgressBar.md#thumbimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) <br> 获取滑块图片绘制类型                                  |
| **[thumbImageGuid](UI.UI.ProgressBar.md#thumbimageguid)**(): `string` <br> 获取填充区图片 id                                                                                                 |
| **[thumbImageMargin](UI.UI.ProgressBar.md#thumbimagemargin)**(): [`Margin`](UI.UI.Margin.md) <br> 获取拖动条图片边距                                                                         |
| **[thumbImageSize](UI.UI.ProgressBar.md#thumbimagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取滑块图片大小                                                                         |
| **[tickSpaceGeometry](UI.UI.ProgressBar.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动 Widget Tick 的几何信息                                          |
| **[transform](UI.UI.ProgressBar.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置                                                              |
| **[visibility](UI.UI.ProgressBar.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性                                                                  |
| **[visible](UI.UI.ProgressBar.md#visible)**(): `boolean` <br> 是否可见                                                                                                                       |
| **[zOrder](UI.UI.ProgressBar.md#zorder)**(): `number` <br> 获取 zorder                                                                                                                       |

| Methods                                                                                                                                                                                                            |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[destroyObject](UI.UI.ProgressBar.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用                                                                                                                 |
| **[equal](UI.UI.ProgressBar.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象                                                                                                          |
| **[invalidateLayoutAndVolatility](UI.UI.ProgressBar.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算                                                                                |
| **[newObject](UI.UI.ProgressBar.md#newobject)**([`Canvas`](UI.UI.Canvas.md), `string`): [`ProgressBar`](UI.UI.ProgressBar.md) <br> 创建 ProgressBar 控件，当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁 |

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

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description      |
| :--------- | :-------- | :--------------- |
| `autoSize` | `boolean` | 是否自动设置大小 |

#### Returns

`void`

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

• `set` **backgroundImageColor**(`inColor`): `void`

**`Description`**

设置背景图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                   |
| :-------- | :---------------------------------------- | :-------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 背景颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **backgroundImageDrawType**(`InDrawType`): `void`

**`Description`**

设置背景图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `InDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | Brush 类型  |

#### Returns

`void`

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

• `set` **backgroundImageGuid**(`inGuid`): `void`

**`Description`**

设置进度条背景图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inGuid` | `string` | 图片 GUID   |

#### Returns

`void`

void

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

• `set` **backgroundImageMargin**(`inMargin`): `void`

**`Description`**

设置进度条背景图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description        |
| :--------- | :-------------------------- | :----------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | 进度条背景图片边距 |

#### Returns

`void`

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

• `set` **backgroundImageSize**(`inSize`): `void`

**`Description`**

设置背景图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 图片大小    |

#### Returns

`void`

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

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  | Description |
| :---------------- | :---------------------------------------------------- | :---------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | 控件的布局  |

#### Returns

`void`

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

• `set` **currentValue**(`inValue`): `void`

**`Description`**

设置当前值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `inValue` | `number` | 当前值      |

#### Returns

`void`

void

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

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description    |
| :--------- | :-------- | :------------- |
| `isEnable` | `boolean` | 可用性 boolean |

#### Returns

`void`

返回设置结果

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

• `set` **fillImageColor**(`inColor`): `void`

**`Description`**

设置填充图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                     |
| :-------- | :---------------------------------------- | :---------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 设置的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **fillImageDrawType**(`inDrawType`): `void`

**`Description`**

设置填充图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | 填充类型    |

#### Returns

`void`

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

• `set` **fillImageGuid**(`inGuid`): `void`

**`Description`**

设置进度条图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inGuid` | `string` | 图片 GUID   |

#### Returns

`void`

void

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

• `set` **fillImageMargin**(`inMargin`): `void`

**`Description`**

设置进度条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description    |
| :--------- | :-------------------------- | :------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | 进度条图片边距 |

#### Returns

`void`

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

• `set` **fillImageSize**(`inSize`): `void`

**`Description`**

设置填充图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 大小        |

#### Returns

`void`

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

• `set` **fillType**(`inType`): `void`

**`Description`**

设置进度条填充的方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                                                           | Description                             |
| :------- | :------------------------------------------------------------- | :-------------------------------------- |
| `inType` | [`ProgressBarFillType`](../enums/UI.UI.ProgressBarFillType.md) | { 从左到右,从右到左,从上到下,从下到上 } |

#### Returns

`void`

void

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

• `set` **isRoundedToInt**(`inToInt`): `void`

**`Description`**

设置当前数值是否取整

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type      | Description |
| :-------- | :-------- | :---------- |
| `inToInt` | `boolean` | 是否取整    |

#### Returns

`void`

void

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

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 名字        |

#### Returns

`void`

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

• `set` **percent**(`inPercent`): `void`

**`Description`**

设置当前百分比

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `inPercent` | `number` | 百分比      |

#### Returns

`void`

void

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

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description |
| :---------------- | :-------------------------------- | :---------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | 控件的位置  |

#### Returns

`void`

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

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `InOpacity` | `number` | 透明度      |

#### Returns

`void`

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

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description |
| :------ | :-------------------------------- | :---------- |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | 渲染缩放    |

#### Returns

`void`

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

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description  |
| :------ | :-------------------------------- | :----------- |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | 渲染错切形变 |

#### Returns

`void`

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

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `o`  | `number` | 渲染角度    |

#### Returns

`void`

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

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description |
| :------ | :-------------------------------- | :---------- |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | 渲染锚点    |

#### Returns

`void`

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

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 输入大小    |

#### Returns

`void`

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

• `set` **sliderMaxValue**(`inValue`): `void`

**`Description`**

设置拖动条的最大值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description  |
| :-------- | :------- | :----------- |
| `inValue` | `number` | 拖动条最大值 |

#### Returns

`void`

void

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

• `set` **sliderMinValue**(`inValue`): `void`

**`Description`**

设置拖动条的最小值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description  |
| :-------- | :------- | :----------- |
| `inValue` | `number` | 拖动条最小值 |

#### Returns

`void`

void

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

• `set` **thumbImageColor**(`inColor`): `void`

**`Description`**

设置滑块图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                     |
| :-------- | :---------------------------------------- | :---------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 设置的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **thumbImageDrawType**(`inDrawType`): `void`

**`Description`**

设置滑块图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | 绘制类型    |

#### Returns

`void`

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

• `set` **thumbImageGuid**(`InGuid`): `void`

**`Description`**

设置拖动条的样式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description     |
| :------- | :------- | :-------------- |
| `InGuid` | `string` | 拖动条样式 GUID |

#### Returns

`void`

void

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

• `set` **thumbImageMargin**(`inMargin`): `void`

**`Description`**

设置拖动条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description    |
| :--------- | :-------------------------- | :------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | 拖动条图片边距 |

#### Returns

`void`

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

• `set` **thumbImageSize**(`inSize`): `void`

**`Description`**

设置滑块图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description  |
| :------- | :-------------------------------- | :----------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 滑块图片大小 |

#### Returns

`void`

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

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description |
| :------------ | :------------------------------------ | :---------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | 大小位置    |

#### Returns

`void`

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

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description |
| :----------- | :----------------------------------------------------- | :---------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | 可见性      |

#### Returns

`void`

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

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置 zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description    |
| :--------- | :------- | :------------- |
| `InZOrder` | `number` | 值越大在越上层 |

#### Returns

`void`

## Methods

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

---

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description            |
| :----- | :-------------------------- | :--------------------- |
| `that` | [`Widget`](UI.UI.Widget.md) | 需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

---

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ProgressBar`](UI.UI.ProgressBar.md)

**`Description`**

创建 ProgressBar 控件，当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                           |
| :-------- | :-------------------------- | :------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的外 parent 对象 default:null |
| `inName?` | `string`                    | 创建控件的名称 default:null           |

#### Returns

[`ProgressBar`](UI.UI.ProgressBar.md)

创建的对象
