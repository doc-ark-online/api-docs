[Ui](../groups/Core.Ui.md) / Image

# Image <Badge type="tip" text="Class" /> <Score text="Image" />

UI 图片

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`Image`**

## Table of contents

| Accessors |
| :-----|
| **[imageColor](mw.Image.md#imagecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取图片的颜色|
| **[imageDrawType](mw.Image.md#imagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <br> 获取图片绘制类型|
| **[imageGuid](mw.Image.md#imageguid)**(): `string` <br> 获取图片id|
| **[imageSize](mw.Image.md#imagesize)**(): [`Vector2`](mw.Vector2.md) <br> 获取图片大小|
| **[margin](mw.Image.md#margin)**(): [`Margin`](mw.Margin.md) <br> 获取图片边距|


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
| **[asyncExportBlendBrush](mw.Image.md#asyncexportblendbrush)**(): `Promise`<`string`\> <br> 将融合的图片导出为一张|
| **[getImageAssetIconData](mw.Image.md#getimageasseticondata)**(): [`AssetIconData`](mw.AssetIconData.md) <br> 获取显示资源的ICON|
| **[setImageByAssetIconData](mw.Image.md#setimagebyasseticondata)**(`data`: [`AssetIconData`](mw.AssetIconData.md)): `void` <br> 设置显示资源的ICON|
| **[setImageByBlendMode](mw.Image.md#setimagebyblendmode)**(`backgroundPic`: `string`, `foregroundPic`: `string`): `void` <br> 将两张图片融合叠加显示在图片组件上|
| **[setImageByBlendModeWithGUID](mw.Image.md#setimagebyblendmodewithguid)**(`GUID`: `string`, `foregroundPic`: `string`): `void` <br> 将两张图片融合叠加显示在图片组件上|
| **[setImageByFile](mw.Image.md#setimagebyfile)**(`absPath`: `string`): `void` <br> 设置图片样式为本地图片文件|
| **[setImageColorByHex](mw.Image.md#setimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置图片颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setImageColorDecimal](mw.Image.md#setimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置图片颜色,指定R、G、B、A设置颜色 0 ~255|
| **[newObject](mw.Image.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`Image`](mw.Image.md) <br> 创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


### imageColor <Score text="imageColor" /> 

• `get` **imageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取图片的颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

图片的颜色，Type.LinearColor类型，数据范围0~1

• `set` **imageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 图片颜色，Type.LinearColor类型，数据范围0~1 |


颜色

___

### imageDrawType <Score text="imageDrawType" /> 

• `get` **imageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)

图片绘制类型

• `set` **imageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 绘制类型 |


___

### imageGuid <Score text="imageGuid" /> 

• `get` **imageGuid**(): `string` <Badge type="tip" text="client" />

获取图片id


#### Returns

`string`

图片id

• `set` **imageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

设置图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGUID` | `string` | 新的图片样式 |


___

### imageSize <Score text="imageSize" /> 

• `get` **imageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

图片大小

• `set` **imageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | size |


___

### margin <Score text="margin" /> 

• `get` **margin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取图片边距


#### Returns

[`Margin`](mw.Margin.md)

图片边距

• `set` **margin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置图片的边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](mw.Margin.md) | 图片边距 |



## Methods

### asyncExportBlendBrush <Score text="asyncExportBlendBrush" /> 

• **asyncExportBlendBrush**(): `Promise`<`string`\> <Badge type="tip" text="client" />

将融合的图片导出为一张

::: warning Precautions

必须调用过setImageByBlendMode后才会生效，高消耗操作注意

:::


#### Returns

`Promise`<`string`\>

导出的图片的本地路径

___

### getImageAssetIconData <Score text="getImageAssetIconData" /> 

• **getImageAssetIconData**(): [`AssetIconData`](mw.AssetIconData.md) <Badge type="tip" text="client" />

获取显示资源的ICON


#### Returns

[`AssetIconData`](mw.AssetIconData.md)

资源的ICON信息

___

### setImageByAssetIconData <Score text="setImageByAssetIconData" /> 

• **setImageByAssetIconData**(`data`): `void` <Badge type="tip" text="client" />

设置显示资源的ICON


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`AssetIconData`](mw.AssetIconData.md) | 资源的ICON信息 |


___

### setImageByBlendMode <Score text="setImageByBlendMode" /> 

• **setImageByBlendMode**(`backgroundPic`, `foregroundPic`): `void` <Badge type="tip" text="client" />

将两张图片融合叠加显示在图片组件上


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `backgroundPic` | `string` | 背景图片绝对路径 |
| `foregroundPic` | `string` | 前景图片绝对路径 |


___

### setImageByBlendModeWithGUID <Score text="setImageByBlendModeWithGUID" /> 

• **setImageByBlendModeWithGUID**(`GUID`, `foregroundPic`): `void` <Badge type="tip" text="client" />

将两张图片融合叠加显示在图片组件上


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 背景图片GUID |
| `foregroundPic` | `string` | 前景图片绝对路径 |


___

### setImageByFile <Score text="setImageByFile" /> 

• **setImageByFile**(`absPath`): `void` <Badge type="tip" text="client" />

设置图片样式为本地图片文件

::: warning Precautions

该接口主要配合setImageByBlendMode和asyncExportBlendBrush来为移动编辑器服务的

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` | 图片绝对路径 |


___

### setImageColorByHex <Score text="setImageColorByHex" /> 

• **setImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置图片颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |


___

### setImageColorDecimal <Score text="setImageColorDecimal" /> 

• **setImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置图片颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 图片R值，数据范围0~255 |
| `G` | `number` | 图片G值，数据范围0~255 |
| `B` | `number` | 图片B值，数据范围0~255 |
| `A` | `number` | 图片透明度，数据范围0~255 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`Image`](mw.Image.md) <Badge type="tip" text="client" />

创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Image`](mw.Image.md)

返回创建的对象
