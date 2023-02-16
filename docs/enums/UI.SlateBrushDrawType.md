[UI](../modules/UI.UI.md) / SlateBrushDrawType

# SlateBrushDrawType <Badge type="tip" text="Enumeration" /> <Score text="SlateBrushDrawType" />

图片画刷绘制模式

## Table of contents

| Enumeration Members |
| :-----|
| **[Border](UI.SlateBrushDrawType.md#border)** = ``2`` <br> 在边平铺且中间为空的位置绘制3x3边框|
| **[Box](UI.SlateBrushDrawType.md#box)** = ``1`` <br> 绘制一个3x3长方体，其中边和中间根据边距拉伸|
| **[Image](UI.SlateBrushDrawType.md#image)** = ``3`` <br> 画一个图像|
| **[NoDrawType](UI.SlateBrushDrawType.md#nodrawtype)** = ``0`` <br> 不绘制|

## Enumeration Members

### Border <Score text="Border" /> 

• **Border** = ``2``

在边平铺且中间为空的位置绘制3x3边框

___

### Box <Score text="Box" /> 

• **Box** = ``1``

绘制一个3x3长方体，其中边和中间根据边距拉伸
<br>使用 [margin](https://api-docs.ark.online/classes/UI.Image.html#margin) 进行边距调整
<br>示例gif
<br><div align=center><img src="https://s3.bmp.ovh/imgs/2023/02/16/2e97f248ea6ea8ff.gif"></div>


___

### Image <Score text="Image" /> 

• **Image** = ``3``

画一个图像

___

### NoDrawType <Score text="NoDrawType" /> 

• **NoDrawType** = ``0``

不绘制
