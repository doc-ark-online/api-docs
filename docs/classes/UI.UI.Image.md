[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / Image

# Class: Image

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).Image

**`Author`**

jie.wu

**`Description`**

UI 图片

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`Image`**

## Table of contents

### Constructors

- [constructor](UI.UI.Image.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.Image.md#autosizeenable)
- [cachedGeometry](UI.UI.Image.md#cachedgeometry)
- [constraints](UI.UI.Image.md#constraints)
- [desiredSize](UI.UI.Image.md#desiredsize)
- [enable](UI.UI.Image.md#enable)
- [guid](UI.UI.Image.md#guid)
- [imageColor](UI.UI.Image.md#imagecolor)
- [imageDrawType](UI.UI.Image.md#imagedrawtype)
- [imageGuid](UI.UI.Image.md#imageguid)
- [imageSize](UI.UI.Image.md#imagesize)
- [isHovered](UI.UI.Image.md#ishovered)
- [margin](UI.UI.Image.md#margin)
- [name](UI.UI.Image.md#name)
- [paintSpaceGeometry](UI.UI.Image.md#paintspacegeometry)
- [parent](UI.UI.Image.md#parent)
- [position](UI.UI.Image.md#position)
- [renderOpacity](UI.UI.Image.md#renderopacity)
- [renderScale](UI.UI.Image.md#renderscale)
- [renderShear](UI.UI.Image.md#rendershear)
- [renderTransformAngle](UI.UI.Image.md#rendertransformangle)
- [renderTransformPivot](UI.UI.Image.md#rendertransformpivot)
- [size](UI.UI.Image.md#size)
- [slot](UI.UI.Image.md#slot)
- [tickSpaceGeometry](UI.UI.Image.md#tickspacegeometry)
- [transform](UI.UI.Image.md#transform)
- [visibility](UI.UI.Image.md#visibility)
- [visible](UI.UI.Image.md#visible)
- [zOrder](UI.UI.Image.md#zorder)

### Methods

- [asyncExportBlendBrush](UI.UI.Image.md#asyncexportblendbrush)
- [destroyObject](UI.UI.Image.md#destroyobject)
- [equal](UI.UI.Image.md#equal)
- [getImageAssetIconData](UI.UI.Image.md#getimageasseticondata)
- [invalidateLayoutAndVolatility](UI.UI.Image.md#invalidatelayoutandvolatility)
- [setImageByAssetIconData](UI.UI.Image.md#setimagebyasseticondata)
- [setImageByBlendMode](UI.UI.Image.md#setimagebyblendmode)
- [setImageByFile](UI.UI.Image.md#setimagebyfile)
- [setImageByURL](UI.UI.Image.md#setimagebyurl)
- [setImageColorByHex](UI.UI.Image.md#setimagecolorbyhex)
- [setImageColorDecimal](UI.UI.Image.md#setimagecolordecimal)
- [newObject](UI.UI.Image.md#newobject)

## Constructors

### constructor

• **new Image**()

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

### imageColor

• `get` **imageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取图片的颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

图片的颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:728

• `set` **imageColor**(`inColor`): `void`

**`Description`**

设置图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                         |
| :-------- | :---------------------------------------- | :-------------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:图片颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

颜色

#### Defined in

UI/index.d.ts:722

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

#### Defined in

UI/index.d.ts:677

• `set` **imageDrawType**(`inDrawType`): `void`

**`Description`**

设置图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:671

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

#### Defined in

UI/index.d.ts:683

• `set` **imageGuid**(`inGuid`): `void`

**`Description`**

设置图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description        |
| :------- | :------- | :----------------- |
| `inGuid` | `string` | usage:新的图片样式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:689

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

#### Defined in

UI/index.d.ts:665

• `set` **imageSize**(`inSize`): `void`

**`Description`**

设置图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:size  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:659

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

### margin

• `get` **margin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

图片边距

#### Defined in

UI/index.d.ts:647

• `set` **margin**(`inMargin`): `void`

**`Description`**

设置图片的边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description    |
| :--------- | :-------------------------- | :------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:653

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

#### Defined in

UI/index.d.ts:715

---

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

### getImageAssetIconData

▸ **getImageAssetIconData**(): [`AssetIconData`](UI.UI.AssetIconData.md)

**`Description`**

获取显示资源的 ICON

**`Effect`**

只在客户端调用生效

#### Returns

[`AssetIconData`](UI.UI.AssetIconData.md)

资源的 ICON 信息

#### Defined in

UI/index.d.ts:755

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

### setImageByAssetIconData

▸ **setImageByAssetIconData**(`data`): `void`

**`Description`**

设置显示资源的 ICON

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                                      | Description            |
| :----- | :---------------------------------------- | :--------------------- |
| `data` | [`AssetIconData`](UI.UI.AssetIconData.md) | usage:资源的 ICON 信息 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:749

---

### setImageByBlendMode

▸ **setImageByBlendMode**(`backgroundPic`, `foregroundPic`): `void`

**`Description`**

将两张图片融合叠加显示在图片组件上

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type     | Description            |
| :-------------- | :------- | :--------------------- |
| `backgroundPic` | `string` | usage:背景图片绝对路径 |
| `foregroundPic` | `string` | usage:前景图片绝对路径 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:708

---

### setImageByFile

▸ **setImageByFile**(`absPath`): `void`

**`Description`**

设置图片样式为本地图片文件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description        |
| :-------- | :------- | :----------------- |
| `absPath` | `string` | usage:图片绝对路径 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:701

---

### setImageByURL

▸ **setImageByURL**(`inURL`): `void`

**`Description`**

设置图片样式，只允许使用包含 "meta-verse.co/Content" 路径的图片链接

**`Effect`**

只在客户端调用生效,下载图片需要时间，失败时暂无回调

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `inURL` | `string` | usage:图片链接 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:695

---

### setImageColorByHex

▸ **setImageColorByHex**(`inHexString`): `void`

**`Description`**

设置图片颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description          |
| :------------ | :------- | :------------------- |
| `inHexString` | `string` | usage:Hex 颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:743

---

### setImageColorDecimal

▸ **setImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置图片颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `R`  | `number` | usage:图片 R 值，数据范围 0~255  |
| `G`  | `number` | usage:图片 G 值，数据范围 0~255  |
| `B`  | `number` | usage:图片 B 值，数据范围 0~255  |
| `A`  | `number` | usage:图片透明度，数据范围 0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:737

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`Image`](UI.UI.Image.md)

**`Description`**

创建 Image 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                 |
| :-------- | :-------------------------- | :------------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外 parent 对象 default:null |
| `inName?` | `string`                    | usage:创建控件的名称 default:null           |

#### Returns

[`Image`](UI.UI.Image.md)

返回创建的对象

#### Defined in

UI/index.d.ts:641
