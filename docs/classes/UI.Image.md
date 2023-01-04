[UI](../modules/UI.UI.md) / Image

# Image <Badge type="tip" text="Class" />

**`Description`**

UI 图片

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`Image`**

## Table of contents

| Accessors |
| :-----|
| **[imageColor](UI.Image.md#imagecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取图片的颜色|
| **[imageDrawType](UI.Image.md#imagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <br> 获取图片绘制类型|
| **[imageGuid](UI.Image.md#imageguid)**(): `string` <br> 获取图片id|
| **[imageSize](UI.Image.md#imagesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取图片大小|
| **[margin](UI.Image.md#margin)**(): [`Margin`](UI.Margin.md) <br> 获取图片边距|

| Methods |
| :-----|
| **[asyncExportBlendBrush](UI.Image.md#asyncexportblendbrush)**(): `Promise`<`string`\> <br> 将融合的图片导出为一张|
| **[getImageAssetIconData](UI.Image.md#getimageasseticondata)**(): [`AssetIconData`](UI.AssetIconData.md) <br> 获取显示资源的ICON|
| **[setImageByAssetIconData](UI.Image.md#setimagebyasseticondata)**([`AssetIconData`](UI.AssetIconData.md)): `void` <br> 设置显示资源的ICON|
| **[setImageByBlendMode](UI.Image.md#setimagebyblendmode)**(`string`, `string`): `void` <br> 将两张图片融合叠加显示在图片组件上|
| **[setImageByFile](UI.Image.md#setimagebyfile)**(`string`): `void` <br> 设置图片样式为本地图片文件|
| **[setImageByURL](UI.Image.md#setimagebyurl)**(`string`): `void` <br> 设置图片样式，只允许使用包含 "meta-verse.co/Content" 路径的图片链接|
| **[setImageColorByHex](UI.Image.md#setimagecolorbyhex)**(`string`): `void` <br> 设置图片颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setImageColorDecimal](UI.Image.md#setimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置图片颜色,指定R、G、B、A设置颜色 0 ~255|
| **[newObject](UI.Image.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`Image`](UI.Image.md) <br> 创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|

## Accessors

### imageColor

• `get` **imageColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取图片的颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

图片的颜色，Type.LinearColor类型，数据范围0~1

• `set` **imageColor**(`inColor`): `void`

**`Description`**

设置图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 图片颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

颜色

___

### imageDrawType

• `get` **imageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

**`Description`**

获取图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

图片绘制类型

• `set` **imageDrawType**(`inDrawType`): `void`

**`Description`**

设置图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 绘制类型 |

#### Returns

`void`

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

• `set` **imageGuid**(`inGuid`): `void`

**`Description`**

设置图片id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 新的图片样式 |

#### Returns

`void`

___

### imageSize

• `get` **imageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

图片大小

• `set` **imageSize**(`inSize`): `void`

**`Description`**

设置图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | size |

#### Returns

`void`


### margin

• `get` **margin**(): [`Margin`](UI.Margin.md)

**`Description`**

获取图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.Margin.md)

图片边距

• `set` **margin**(`inMargin`): `void`

**`Description`**

设置图片的边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 图片边距 |

#### Returns

`void`


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


### getImageAssetIconData

▸ **getImageAssetIconData**(): [`AssetIconData`](UI.AssetIconData.md)

**`Description`**

获取显示资源的ICON

**`Effect`**

只在客户端调用生效

#### Returns

[`AssetIconData`](UI.AssetIconData.md)

资源的ICON信息


### setImageByAssetIconData

▸ **setImageByAssetIconData**(`data`): `void`

**`Description`**

设置显示资源的ICON

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`AssetIconData`](UI.AssetIconData.md) | 资源的ICON信息 |

#### Returns

`void`

___

### setImageByBlendMode

▸ **setImageByBlendMode**(`backgroundPic`, `foregroundPic`): `void`

**`Description`**

将两张图片融合叠加显示在图片组件上

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `backgroundPic` | `string` | 背景图片绝对路径 |
| `foregroundPic` | `string` | 前景图片绝对路径 |

#### Returns

`void`

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
| `absPath` | `string` | 图片绝对路径 |

#### Returns

`void`

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
| `inURL` | `string` | 图片链接 |

#### Returns

`void`

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
| `inHexString` | `string` | Hex颜色字符串 |

#### Returns

`void`

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
| `R` | `number` | 图片R值，数据范围0~255 |
| `G` | `number` | 图片G值，数据范围0~255 |
| `B` | `number` | 图片B值，数据范围0~255 |
| `A` | `number` | 图片透明度，数据范围0~255 |

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`Image`](UI.Image.md)

**`Description`**

创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Image`](UI.Image.md)

返回创建的对象
