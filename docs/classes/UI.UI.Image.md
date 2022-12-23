[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / Image

# Class: Image

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).Image

**`Author`**

wujie

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

- [cachedGeometry](UI.UI.Image.md#cachedgeometry)
- [desiredSize](UI.UI.Image.md#desiredsize)
- [guid](UI.UI.Image.md#guid)
- [imageColor](UI.UI.Image.md#imagecolor)
- [imageDrawType](UI.UI.Image.md#imagedrawtype)
- [imageGuid](UI.UI.Image.md#imageguid)
- [imageSize](UI.UI.Image.md#imagesize)
- [isEnabled](UI.UI.Image.md#isenabled)
- [isHovered](UI.UI.Image.md#ishovered)
- [margin](UI.UI.Image.md#margin)
- [name](UI.UI.Image.md#name)
- [paintSpaceGeometry](UI.UI.Image.md#paintspacegeometry)
- [parent](UI.UI.Image.md#parent)
- [renderOpacity](UI.UI.Image.md#renderopacity)
- [renderScale](UI.UI.Image.md#renderscale)
- [renderShear](UI.UI.Image.md#rendershear)
- [renderTransformAngle](UI.UI.Image.md#rendertransformangle)
- [renderTransformPivot](UI.UI.Image.md#rendertransformpivot)
- [size](UI.UI.Image.md#size)
- [slot](UI.UI.Image.md#slot)
- [tickSpaceGeometry](UI.UI.Image.md#tickspacegeometry)
- [visibility](UI.UI.Image.md#visibility)
- [visible](UI.UI.Image.md#visible)

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

### imageColor

• `get` **imageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取图片的颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

图片的颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:728

• `set` **imageColor**(`inColor`): `void`

**`Description`**

设置图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:图片颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

颜色

#### Defined in

UI/index.d.ts:722

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:671

___

### imageGuid

• `get` **imageGuid**(): `string`

**`Description`**

获取图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

图片id

#### Defined in

UI/index.d.ts:683

• `set` **imageGuid**(`inGuid`): `void`

**`Description`**

设置图片id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | usage:新的图片样式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:689

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:size |

#### Returns

`void`

#### Defined in

UI/index.d.ts:659

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:653

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

### asyncExportBlendBrush

▸ **asyncExportBlendBrush**(): `Promise`<`string`\>

**`Description`**

将融合的图片导出为一张

**`Precautions`**

必须调用过setImageByBlendMode后才会生效，高消耗操作注意

**`Effect`**

只在客户端调用生效

#### Returns

`Promise`<`string`\>

导出的图片的本地路径

#### Defined in

UI/index.d.ts:715

___

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

### getImageAssetIconData

▸ **getImageAssetIconData**(): [`AssetIconData`](UI.UI.AssetIconData.md)

**`Description`**

获取显示资源的ICON

**`Effect`**

只在客户端调用生效

#### Returns

[`AssetIconData`](UI.UI.AssetIconData.md)

资源的ICON信息

#### Defined in

UI/index.d.ts:755

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

### setImageByAssetIconData

▸ **setImageByAssetIconData**(`data`): `void`

**`Description`**

设置显示资源的ICON

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`AssetIconData`](UI.UI.AssetIconData.md) | usage:资源的ICON信息 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:749

___

### setImageByBlendMode

▸ **setImageByBlendMode**(`backgroundPic`, `forgroundPic`): `void`

**`Description`**

将两张图片融合叠加显示在图片组件上

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `backgroundPic` | `string` | usage:背景图片绝对路径 |
| `forgroundPic` | `string` | usage:前景图片绝对路径 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:708

___

### setImageByFile

▸ **setImageByFile**(`absPath`): `void`

**`Description`**

设置图片样式为本地图片文件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | usage:图片绝对路径 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:701

___

### setImageByURL

▸ **setImageByURL**(`inURL`): `void`

**`Description`**

设置图片样式，只允许使用包含 "meta-verse.co/Content" 路径的图片链接

**`Effect`**

只在客户端调用生效,下载图片需要时间，失败时暂无回调

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inURL` | `string` | usage:图片链接 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:695

___

### setImageColorByHex

▸ **setImageColorByHex**(`inHexString`): `void`

**`Description`**

设置图片颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | usage:Hex颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:743

___

### setImageColorDecimal

▸ **setImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置图片颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | usage:图片R值，数据范围0~255 |
| `G` | `number` | usage:图片G值，数据范围0~255 |
| `B` | `number` | usage:图片B值，数据范围0~255 |
| `A` | `number` | usage:图片透明度，数据范围0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:737

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`Image`](UI.UI.Image.md)

**`Description`**

创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外parent对象 default:null |
| `inName?` | `string` | usage:创建控件的名称 default:null |

#### Returns

[`Image`](UI.UI.Image.md)

返回创建的对象

#### Defined in

UI/index.d.ts:641
