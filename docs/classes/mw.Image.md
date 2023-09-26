[UI](../groups/Core.UI.md) / Image

# Image <Badge type="tip" text="Class" /> <Score text="Image" />

<p class="content-big">

UI 图片

</p>

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`Image`**

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new Widget**()  |
| :----- |
:::


### Accessors <Score text="Accessors" /> 
| **[imageColor](mw.Image.md#imagecolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| :-----|
| 设置图片颜色|
| **[imageDrawType](mw.Image.md#imagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md)  |
| 设置图片绘制类型|
| **[imageGuid](mw.Image.md#imageguid)**(): `string`  |
| 设置图片id|
| **[imageSize](mw.Image.md#imagesize)**(): [`Vector2`](mw.Vector2.md)  |
| 设置图片大小|
| **[margin](mw.Image.md#margin)**(): [`Margin`](mw.Margin.md)  |
| 设置图片的边距|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[autoSizeEnable](mw.Widget.md#autosizeenable)**(): `boolean`  |
| :-----|
| 设置是否自动设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\>  |
| 设置控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md)  |
| 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean`  |
| 设置可用性|
| **[guid](mw.Widget.md#guid)**(): `string`  |
| 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean`  |
| 是否是hovered|
| **[name](mw.Widget.md#name)**(): `string`  |
| 设定名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md)  |
| 获取父节点|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\>  |
| 设置控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number`  |
| 设置渲染透明度 0 ~ 1|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number`  |
| 设置渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md)  |
| 设置控件的大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\>  |
| 设置控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md)  |
| 设置可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean`  |
| 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number`  |
| 设置zoder|
:::


### Methods <Score text="Methods" /> 
| **[asyncExportBlendBrush](mw.Image.md#asyncexportblendbrush)**(): `Promise`<`string`\>  |
| :-----|
| 将融合的图片导出为一张|
| **[getImageAssetIconData](mw.Image.md#getimageasseticondata)**(): [`AssetIconData`](mw.AssetIconData.md)  |
| 获取显示资源的ICON|
| **[setImageByAssetIconData](mw.Image.md#setimagebyasseticondata)**(`data`: [`AssetIconData`](mw.AssetIconData.md)): `void`  |
| 设置显示资源的ICON|
| **[setImageByBlendMode](mw.Image.md#setimagebyblendmode)**(`backgroundPic`: `string`, `foregroundPic`: `string`): `void`  |
| 将两张图片融合叠加显示在图片组件上|
| **[setImageByBlendModeWithGUID](mw.Image.md#setimagebyblendmodewithguid)**(`GUID`: `string`, `foregroundPic`: `string`): `void`  |
| 将两张图片融合叠加显示在图片组件上|
| **[setImageByFile](mw.Image.md#setimagebyfile)**(`absPath`: `string`): `void`  |
| 设置图片样式为本地图片文件|
| **[setImageColorByHex](mw.Image.md#setimagecolorbyhex)**(`inHexString`: `string`): `void`  |
| 设置图片颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setImageColorDecimal](mw.Image.md#setimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void`  |
| 设置图片颜色,指定R、G、B、A设置颜色 0 ~255|
| **[newObject](mw.Image.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`Image`](mw.Image.md)  |
| 创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void`  |
| :-----|
| 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean`  |
| 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void`  |
| 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void`  |
| 立刻移除并添加到根节点 可以再使用|
:::


## Accessors
___

### imageColor <Score text="imageColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **imageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **imageColor**(`inColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取图片的颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 图片的颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置图片颜色


#### Parameters

| `inColor` [`LinearColor`](mw.LinearColor.md) | 图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


颜色


</td>
</tr></tbody>
</table>

___

### imageDrawType <Score text="imageDrawType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **imageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **imageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取图片绘制类型


#### Returns

| [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 图片绘制类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置图片绘制类型


#### Parameters

| `inDrawType` [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 绘制类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### imageGuid <Score text="imageGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **imageGuid**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **imageGuid**(`inGUID`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取图片id


#### Returns

| `string` | 图片id |
| :------ | :------ |


</td>
<td style="text-align: left">


设置图片id


#### Parameters

| `inGUID` `string` | 新的图片样式 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### imageSize <Score text="imageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **imageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **imageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取图片大小


#### Returns

| [`Vector2`](mw.Vector2.md) | 图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置图片大小


#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | size |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### margin <Score text="margin" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **margin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **margin**(`inMargin`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取图片边距


#### Returns

| [`Margin`](mw.Margin.md) | 图片边距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置图片的边距


#### Parameters

| `inMargin` [`Margin`](mw.Margin.md) | 图片边距 |
| :------ | :------ |


</td>
</tr></tbody>
</table>



## Methods

### asyncExportBlendBrush <Score text="asyncExportBlendBrush" /> 

• **asyncExportBlendBrush**(): `Promise`<`string`\> <Badge type="tip" text="client" />

将融合的图片导出为一张

#### Returns

| `Promise`<`string`\> | 导出的图片的本地路径 |
| :------ | :------ |

::: warning Precautions

必须调用过setImageByBlendMode后才会生效，高消耗操作注意

:::


___

### getImageAssetIconData <Score text="getImageAssetIconData" /> 

• **getImageAssetIconData**(): [`AssetIconData`](mw.AssetIconData.md) <Badge type="tip" text="client" />

获取显示资源的ICON

#### Returns

| [`AssetIconData`](mw.AssetIconData.md) | 资源的ICON信息 |
| :------ | :------ |


___

### setImageByAssetIconData <Score text="setImageByAssetIconData" /> 

• **setImageByAssetIconData**(`data`): `void` <Badge type="tip" text="client" />

设置显示资源的ICON

#### Parameters

| `data` [`AssetIconData`](mw.AssetIconData.md) | 资源的ICON信息 |
| :------ | :------ |



___

### setImageByBlendMode <Score text="setImageByBlendMode" /> 

• **setImageByBlendMode**(`backgroundPic`, `foregroundPic`): `void` <Badge type="tip" text="client" />

将两张图片融合叠加显示在图片组件上

#### Parameters

| `backgroundPic` `string` | 背景图片绝对路径 |
| :------ | :------ |
| `foregroundPic` `string` | 前景图片绝对路径 |



___

### setImageByBlendModeWithGUID <Score text="setImageByBlendModeWithGUID" /> 

• **setImageByBlendModeWithGUID**(`GUID`, `foregroundPic`): `void` <Badge type="tip" text="client" />

将两张图片融合叠加显示在图片组件上

#### Parameters

| `GUID` `string` | 背景图片GUID |
| :------ | :------ |
| `foregroundPic` `string` | 前景图片绝对路径 |



___

### setImageByFile <Score text="setImageByFile" /> 

• **setImageByFile**(`absPath`): `void` <Badge type="tip" text="client" />

设置图片样式为本地图片文件

#### Parameters

| `absPath` `string` | 图片绝对路径 |
| :------ | :------ |


::: warning Precautions

该接口主要配合setImageByBlendMode和asyncExportBlendBrush来为移动编辑器服务的

:::


___

### setImageColorByHex <Score text="setImageColorByHex" /> 

• **setImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置图片颜色,指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | Hex颜色字符串 |
| :------ | :------ |



___

### setImageColorDecimal <Score text="setImageColorDecimal" /> 

• **setImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置图片颜色,指定R、G、B、A设置颜色 0 ~255

#### Parameters

| `R` `number` | 图片R值，数据范围0~255 |
| :------ | :------ |
| `G` `number` | 图片G值，数据范围0~255 |
| `B` `number` | 图片B值，数据范围0~255 |
| `A` `number` | 图片透明度，数据范围0~255 |



___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`Image`](mw.Image.md) <Badge type="tip" text="client" />

创建 Image 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| :------ | :------ |
| `inName?` `string` | 创建控件的名称 default:null |

#### Returns

| [`Image`](mw.Image.md) | 返回创建的对象 |
| :------ | :------ |

