[UI](../modules/UI.UI.md) / Image

# Image <Badge type="tip" text="Class" />

**`Description`**

UI 图片

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`Image`**

## Table of contents

| Accessors                                                                                                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| **[autoSizeEnable](UI.UI.Image.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小                                                       |
| **[cachedGeometry](UI.UI.Image.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的 GetTickSpaceGeometry                    |
| **[constraints](UI.UI.Image.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局          |
| **[desiredSize](UI.UI.Image.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小                                             |
| **[enable](UI.UI.Image.md#enable)**(): `boolean` <br> 是否可用                                                                                   |
| **[guid](UI.UI.Image.md#guid)**(): `string` <br> 获取控件 GUID                                                                                   |
| **[imageColor](UI.UI.Image.md#imagecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取图片的颜色                                     |
| **[imageDrawType](UI.UI.Image.md#imagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) <br> 获取图片绘制类型          |
| **[imageGuid](UI.UI.Image.md#imageguid)**(): `string` <br> 获取图片 id                                                                           |
| **[imageSize](UI.UI.Image.md#imagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取图片大小                                                 |
| **[isHovered](UI.UI.Image.md#ishovered)**(): `boolean` <br> 是否是 hovered                                                                       |
| **[margin](UI.UI.Image.md#margin)**(): [`Margin`](UI.UI.Margin.md) <br> 获取图片边距                                                             |
| **[name](UI.UI.Image.md#name)**(): `string` <br> 获取名字                                                                                        |
| **[paintSpaceGeometry](UI.UI.Image.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染 Widget 的几何信息       |
| **[parent](UI.UI.Image.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点                                                               |
| **[position](UI.UI.Image.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置                                    |
| **[renderOpacity](UI.UI.Image.md#renderopacity)**(): `number` <br> 获取渲染透明度                                                                |
| **[renderScale](UI.UI.Image.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放                                             |
| **[renderShear](UI.UI.Image.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变                                         |
| **[renderTransformAngle](UI.UI.Image.md#rendertransformangle)**(): `number` <br> 获取渲染的角度                                                  |
| **[renderTransformPivot](UI.UI.Image.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点                           |
| **[size](UI.UI.Image.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小                                                               |
| **[slot](UI.UI.Image.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息 |
| **[tickSpaceGeometry](UI.UI.Image.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动 Widget Tick 的几何信息    |
| **[transform](UI.UI.Image.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置                        |
| **[visibility](UI.UI.Image.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性                            |
| **[visible](UI.UI.Image.md#visible)**(): `boolean` <br> 是否可见                                                                                 |
| **[zOrder](UI.UI.Image.md#zorder)**(): `number` <br> 获取 zorder                                                                                 |

| Methods                                                                                                                                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[asyncExportBlendBrush](UI.UI.Image.md#asyncexportblendbrush)**(): `Promise`<`string`\> <br> 将融合的图片导出为一张                                                                     |
| **[destroyObject](UI.UI.Image.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用                                                                                              |
| **[equal](UI.UI.Image.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象                                                                                       |
| **[getImageAssetIconData](UI.UI.Image.md#getimageasseticondata)**(): [`AssetIconData`](UI.UI.AssetIconData.md) <br> 获取显示资源的 ICON                                                   |
| **[invalidateLayoutAndVolatility](UI.UI.Image.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算                                                             |
| **[setImageByAssetIconData](UI.UI.Image.md#setimagebyasseticondata)**([`AssetIconData`](UI.UI.AssetIconData.md)): `void` <br> 设置显示资源的 ICON                                         |
| **[setImageByBlendMode](UI.UI.Image.md#setimagebyblendmode)**(`string`, `string`): `void` <br> 将两张图片融合叠加显示在图片组件上                                                         |
| **[setImageByFile](UI.UI.Image.md#setimagebyfile)**(`string`): `void` <br> 设置图片样式为本地图片文件                                                                                     |
| **[setImageByURL](UI.UI.Image.md#setimagebyurl)**(`string`): `void` <br> 设置图片样式，只允许使用包含 "meta-verse.co/Content" 路径的图片链接                                              |
| **[setImageColorByHex](UI.UI.Image.md#setimagecolorbyhex)**(`string`): `void` <br> 设置图片颜色,指定 Hex 的颜色文本设定颜色 #05050505                                                     |
| **[setImageColorDecimal](UI.UI.Image.md#setimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置图片颜色,指定 R、G、B、A 设置颜色 0 ~255                         |
| **[newObject](UI.UI.Image.md#newobject)**([`Canvas`](UI.UI.Canvas.md), `string`): [`Image`](UI.UI.Image.md) <br> 创建 Image 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁 |

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

### imageColor

• `get` **imageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取图片的颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

图片的颜色，Type.LinearColor 类型，数据范围 0~1

• `set` **imageColor**(`inColor`): `void`

**`Description`**

设置图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                   |
| :-------- | :---------------------------------------- | :-------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 图片颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

颜色

---

### imageDrawType

• `get` **imageDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

图片绘制类型

• `set` **imageDrawType**(`inDrawType`): `void`

**`Description`**

设置图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | 绘制类型    |

#### Returns

`void`

---

### imageGuid

• `get` **imageGuid**(): `string`

**`Description`**

获取图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

图片 id

• `set` **imageGuid**(`inGuid`): `void`

**`Description`**

设置图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description  |
| :------- | :------- | :----------- |
| `inGuid` | `string` | 新的图片样式 |

#### Returns

`void`

---

### imageSize

• `get` **imageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

图片大小

• `set` **imageSize**(`inSize`): `void`

**`Description`**

设置图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | size        |

#### Returns

`void`

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

### margin

• `get` **margin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

图片边距

• `set` **margin**(`inMargin`): `void`

**`Description`**

设置图片的边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description |
| :--------- | :-------------------------- | :---------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | 图片边距    |

#### Returns

`void`

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

### asyncExportBlendBrush

▸ **asyncExportBlendBrush**(): `Promise`<`string`\>

**`Description`**

将融合的图片导出为一张

**`Precautions`**

必须调用过 setImageByBlendMode 后才会生效，高消耗操作注意

**`Effect`**

只在客户端调用生效

#### Returns

`Promise`<`string`\>

导出的图片的本地路径

---

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

### getImageAssetIconData

▸ **getImageAssetIconData**(): [`AssetIconData`](UI.UI.AssetIconData.md)

**`Description`**

获取显示资源的 ICON

**`Effect`**

只在客户端调用生效

#### Returns

[`AssetIconData`](UI.UI.AssetIconData.md)

资源的 ICON 信息

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

### setImageByAssetIconData

▸ **setImageByAssetIconData**(`data`): `void`

**`Description`**

设置显示资源的 ICON

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                                      | Description      |
| :----- | :---------------------------------------- | :--------------- |
| `data` | [`AssetIconData`](UI.UI.AssetIconData.md) | 资源的 ICON 信息 |

#### Returns

`void`

---

### setImageByBlendMode

▸ **setImageByBlendMode**(`backgroundPic`, `foregroundPic`): `void`

**`Description`**

将两张图片融合叠加显示在图片组件上

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type     | Description      |
| :-------------- | :------- | :--------------- |
| `backgroundPic` | `string` | 背景图片绝对路径 |
| `foregroundPic` | `string` | 前景图片绝对路径 |

#### Returns

`void`

---

### setImageByFile

▸ **setImageByFile**(`absPath`): `void`

**`Description`**

设置图片样式为本地图片文件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description  |
| :-------- | :------- | :----------- |
| `absPath` | `string` | 图片绝对路径 |

#### Returns

`void`

---

### setImageByURL

▸ **setImageByURL**(`inURL`): `void`

**`Description`**

设置图片样式，只允许使用包含 "meta-verse.co/Content" 路径的图片链接

**`Effect`**

只在客户端调用生效,下载图片需要时间，失败时暂无回调

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `inURL` | `string` | 图片链接    |

#### Returns

`void`

---

### setImageColorByHex

▸ **setImageColorByHex**(`inHexString`): `void`

**`Description`**

设置图片颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description    |
| :------------ | :------- | :------------- |
| `inHexString` | `string` | Hex 颜色字符串 |

#### Returns

`void`

---

### setImageColorDecimal

▸ **setImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置图片颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                |
| :--- | :------- | :------------------------- |
| `R`  | `number` | 图片 R 值，数据范围 0~255  |
| `G`  | `number` | 图片 G 值，数据范围 0~255  |
| `B`  | `number` | 图片 B 值，数据范围 0~255  |
| `A`  | `number` | 图片透明度，数据范围 0~255 |

#### Returns

`void`

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`Image`](UI.UI.Image.md)

**`Description`**

创建 Image 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                           |
| :-------- | :-------------------------- | :------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的外 parent 对象 default:null |
| `inName?` | `string`                    | 创建控件的名称 default:null           |

#### Returns

[`Image`](UI.UI.Image.md)

返回创建的对象
