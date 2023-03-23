[Gui](../groups/Gui.Gui.md) / Image

# Image <Badge type="tip" text="Class" /> <Score text="Image" />

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
| **[slot](UI.Widget.md#slot)**(): [`UISlot`](UI.UISlot.md) <br> 获取插槽|
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[asyncExportBlendBrush](UI.Image.md#asyncexportblendbrush)**(): `Promise`<`string`\> <br> 将融合的图片导出为一张|
| **[getImageAssetIconData](UI.Image.md#getimageasseticondata)**(): [`AssetIconData`](UI.AssetIconData.md) <br> 获取显示资源的ICON|
| **[setImageByAssetIconData](UI.Image.md#setimagebyasseticondata)**(`data`: [`AssetIconData`](UI.AssetIconData.md)): `void` <br> 设置显示资源的ICON|
| **[setImageByBlendMode](UI.Image.md#setimagebyblendmode)**(`backgroundPic`: `string`, `foregroundPic`: `string`): `void` <br> 将两张图片融合叠加显示在图片组件上|
| **[setImageByBlendModeWithGUID](UI.Image.md#setimagebyblendmodewithguid)**(`GUID`: `string`, `foregroundPic`: `string`): `void` <br> 将两张图片融合叠加显示在图片组件上|
| **[setImageByFile](UI.Image.md#setimagebyfile)**(`absPath`: `string`): `void` <br> 设置图片样式为本地图片文件|
| **[setImageByURL](UI.Image.md#setimagebyurl)**(`inURL`: `string`): `void` <br> 设置图片样式，只允许使用包含 "meta-verse.co/Content" 路径的图片链接|
| **[setImageColorByHex](UI.Image.md#setimagecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置图片颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setImageColorDecimal](UI.Image.md#setimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置图片颜色,指定R、G、B、A设置颜色 0 ~255|
| **[newObject](UI.Image.md#newobject)**(`parent?`: [`Canvas`](UI.Canvas.md), `inName?`: `string`): [`Image`](UI.Image.md) <br> 创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**(`that`: [`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](UI.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


## Accessors

### imageColor <Score text="imageColor" /> 

• `get` **imageColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取图片的颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

图片的颜色，Type.LinearColor类型，数据范围0~1

• `set` **imageColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置图片颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 图片颜色，Type.LinearColor类型，数据范围0~1 |


颜色

___

### imageDrawType <Score text="imageDrawType" /> 

• `get` **imageDrawType**(): [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) <Badge type="tip" text="client" />

获取图片绘制类型


#### Returns

[`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md)

图片绘制类型

• `set` **imageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

设置图片绘制类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.SlateBrushDrawType.md) | 绘制类型 |


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

• `get` **imageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

图片大小

• `set` **imageSize**(`inSize`): `void` <Badge type="tip" text="client" />

设置图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | size |



### margin <Score text="margin" /> 

• `get` **margin**(): [`Margin`](UI.Margin.md) <Badge type="tip" text="client" />

获取图片边距


#### Returns

[`Margin`](UI.Margin.md)

图片边距

• `set` **margin**(`inMargin`): `void` <Badge type="tip" text="client" />

设置图片的边距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.Margin.md) | 图片边距 |



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


### getImageAssetIconData <Score text="getImageAssetIconData" /> 

• **getImageAssetIconData**(): [`AssetIconData`](UI.AssetIconData.md) <Badge type="tip" text="client" />

获取显示资源的ICON


#### Returns

[`AssetIconData`](UI.AssetIconData.md)

资源的ICON信息


### setImageByAssetIconData <Score text="setImageByAssetIconData" /> 

• **setImageByAssetIconData**(`data`): `void` <Badge type="tip" text="client" />

设置显示资源的ICON


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`AssetIconData`](UI.AssetIconData.md) | 资源的ICON信息 |


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

### setImageByURL <Score text="setImageByURL" /> 

• **setImageByURL**(`inURL`): `void` <Badge type="tip" text="other" />

设置图片样式，只允许使用包含 "meta-verse.co/Content" 路径的图片链接

只在客户端调用生效,下载图片需要时间，失败时暂无回调

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inURL` | `string` | 图片链接 |


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

• `Static` **newObject**(`parent?`, `inName?`): [`Image`](UI.Image.md) <Badge type="tip" text="client" />

创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Image`](UI.Image.md)

返回创建的对象
