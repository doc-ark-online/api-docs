[UI](../groups/Core.UI.md) / TextBlock

# TextBlock <Badge type="tip" text="Class" /> <Score text="TextBlock" />

UI文本

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`TextBlock`**

## Table of contents

| Accessors |
| :-----|
| **[autoAdjust](mw.TextBlock.md#autoadjust)**(): `boolean` <br> 获取字体是否自适应调整大小:boolean(为True时，文本内容字体大小将自动改变，尽可能大的充满整个文本框，而文本框大小不会变化)|
| **[contentColor](mw.TextBlock.md#contentcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取字体内容颜色|
| **[fontColor](mw.TextBlock.md#fontcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取字体颜色|
| **[fontLetterSpace](mw.TextBlock.md#fontletterspace)**(): `number` <br> 获取字体间距|
| **[fontSize](mw.TextBlock.md#fontsize)**(): `number` <br> 获取字体大小|
| **[glyph](mw.TextBlock.md#glyph)**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) <br> 获取字体字形|
| **[isRichText](mw.TextBlock.md#isrichtext)**(): `boolean` <br> 获取是否为富文本|
| **[lineHeightPercentage](mw.TextBlock.md#lineheightpercentage)**(): `number` <br> 获取行高系数|
| **[outlineColor](mw.TextBlock.md#outlinecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取字体描边颜色|
| **[outlineSize](mw.TextBlock.md#outlinesize)**(): `number` <br> 获取字体描边宽度|
| **[shadowColor](mw.TextBlock.md#shadowcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 设置字体阴影颜色|
| **[shadowOffset](mw.TextBlock.md#shadowoffset)**(): [`Vector2`](mw.Vector2.md) <br> 获取字体阴影颜色|
| **[strikethroughEnable](mw.TextBlock.md#strikethroughenable)**(): `boolean` <br> 获取是否开启字体删除线|
| **[text](mw.TextBlock.md#text)**(): `string` <br> 获取当前的文本内容|
| **[textAlign](mw.TextBlock.md#textalign)**(): [`TextJustify`](../enums/mw.TextJustify.md) <br> 获取字体对齐方式|
| **[textHeight](mw.TextBlock.md#textheight)**(): `number` <br> 获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)|
| **[textHorizontalLayout](mw.TextBlock.md#texthorizontallayout)**(): [`UITextHorizontalLayout`](../enums/mw.UITextHorizontalLayout.md) <br> 获取当前字体的水平显示方式|
| **[textJustification](mw.TextBlock.md#textjustification)**(): [`TextJustify`](../enums/mw.TextJustify.md) <br> 获取字体的对齐方式|
| **[textSingleHeight](mw.TextBlock.md#textsingleheight)**(): `number` <br> 获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)|
| **[textVerticalAlign](mw.TextBlock.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <br> 获取字体垂直对齐方式|
| **[textVerticalJustification](mw.TextBlock.md#textverticaljustification)**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <br> 获取字体的垂直对齐方式|
| **[underlineEnable](mw.TextBlock.md#underlineenable)**(): `boolean` <br> 返回是否开启字体下划线|


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
| **[setFontColorByHex](mw.TextBlock.md#setfontcolorbyhex)**(`inHexString`: `string`): `void` <br> 设置字体颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setFontColorDecimal](mw.TextBlock.md#setfontcolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置字体颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setOutlineColorByHex](mw.TextBlock.md#setoutlinecolorbyhex)**(`inHexString`: `string`): `void` <br> 设置当前的描边颜色，指定描边颜色设定颜色 #05050505|
| **[setOutlineColorDecimal](mw.TextBlock.md#setoutlinecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置当前的描边颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setShadowColorByHex](mw.TextBlock.md#setshadowcolorbyhex)**(`inHexString`: `string`): `void` <br> 设置字体的阴影颜色,Shadow Offset必须设值才能看到效果,指定Hex的颜色文本设定颜色 #05050505|
| **[setShadowColorDecimal](mw.TextBlock.md#setshadowcolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <br> 设置字体的阴影颜色,Shadow Offset必须设值才能看到效果, 指定R、G、B、A设置颜色 0 ~255|
| **[newObject](mw.TextBlock.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`TextBlock`](mw.TextBlock.md) <br> 创建 TextBlock 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


### autoAdjust <Score text="autoAdjust" /> 

• `get` **autoAdjust**(): `boolean` <Badge type="tip" text="client" />

获取字体是否自适应调整大小:boolean(为True时，文本内容字体大小将自动改变，尽可能大的充满整个文本框，而文本框大小不会变化)


#### Returns

`boolean`

字体是否自适应调整大小

• `set` **autoAdjust**(`isAdjust`): `void` <Badge type="tip" text="client" />

设置字体是否自适应调整大小:boolean(为True时，文本内容字体大小将自动改变，尽可能大的充满整个文本框，而文本框大小不会变化)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isAdjust` | `boolean` | 字体是否自适应调整大小 |


___

### contentColor <Score text="contentColor" /> 

• `get` **contentColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取字体内容颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

字体内容颜色，Type.LinearColor类型，数据范围0~1

• `set` **contentColor**(`inContentColor`): `void` <Badge type="tip" text="client" />

设置字体内容颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](mw.LinearColor.md) |  内容颜色，Type.LinearColor类型，数据范围0~1 |


___

### fontColor <Score text="fontColor" /> 

• `get` **fontColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取字体颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

字体颜色，Type.LinearColor类型，数据范围0~1

• `set` **fontColor**(`inColor`): `void` <Badge type="tip" text="client" />

设置字体颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 字体的颜色值，Type.LinearColor类型，数据范围0~1 |


___

### fontLetterSpace <Score text="fontLetterSpace" /> 

• `get` **fontLetterSpace**(): `number` <Badge type="tip" text="client" />

获取字体间距


#### Returns

`number`

返回字体间距

• `set` **fontLetterSpace**(`inLetterSpace`): `void` <Badge type="tip" text="client" />

设置字体间距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inLetterSpace` | `number` | 字体间距 |


___

### fontSize <Score text="fontSize" /> 

• `get` **fontSize**(): `number` <Badge type="tip" text="client" />

获取字体大小


#### Returns

`number`

返回字体的大小

• `set` **fontSize**(`InSize`): `void` <Badge type="tip" text="client" />

设置字体大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InSize` | `number` | 字体大小 |


___

### glyph <Score text="glyph" /> 

• `get` **glyph**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) <Badge type="tip" text="client" />

获取字体字形


#### Returns

[`UIFontGlyph`](../enums/mw.UIFontGlyph.md)

字体字形

• `set` **glyph**(`inGlyph`): `void` <Badge type="tip" text="client" />

设置字体字形


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) |  字形 |


___

### isRichText <Score text="isRichText" /> 

• `get` **isRichText**(): `boolean` <Badge type="tip" text="client" />

获取是否为富文本


#### Returns

`boolean`

是否为富文本

• `set` **isRichText**(`isRichText`): `void` <Badge type="tip" text="client" />

设置富文本


#### Parameters

| Name | Type |
| :------ | :------ |
| `isRichText` | `boolean` |


___

### lineHeightPercentage <Score text="lineHeightPercentage" /> 

• `get` **lineHeightPercentage**(): `number` <Badge type="tip" text="client" />

获取行高系数


#### Returns

`number`

行高系数

• `set` **lineHeightPercentage**(`inValue`): `void` <Badge type="tip" text="client" />

设置行高系数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 系数 |


___

### outlineColor <Score text="outlineColor" /> 

• `get` **outlineColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取字体描边颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

字体描边颜色，Type.LinearColor类型，数据范围0~1

• `set` **outlineColor**(`inOutlineColor`): `void` <Badge type="tip" text="client" />

设置字体描边颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](mw.LinearColor.md) |  描边颜色，Type.LinearColor类型，数据范围0~1 |


字体描边颜色

___

### outlineSize <Score text="outlineSize" /> 

• `get` **outlineSize**(): `number` <Badge type="tip" text="client" />

获取字体描边宽度


#### Returns

`number`

字体描边宽度

• `set` **outlineSize**(`inOutlineSize`): `void` <Badge type="tip" text="client" />

设置字体描边宽度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineSize` | `number` | 设置的大小 |


___

### shadowColor <Score text="shadowColor" /> 

• `get` **shadowColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

设置字体阴影颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowColor**(`inShadowColor`): `void` <Badge type="tip" text="client" />

获取字体阴影颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](mw.LinearColor.md) | 阴影颜色，Type.LinearColor类型，数据范围0~1 |


___

### shadowOffset <Score text="shadowOffset" /> 

• `get` **shadowOffset**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

获取字体阴影颜色


#### Returns

[`Vector2`](mw.Vector2.md)

字体阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowOffset**(`inOffset`): `void` <Badge type="tip" text="client" />

设置字体阴影偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](mw.Vector2.md) | 阴影偏移量 |


___

### strikethroughEnable <Score text="strikethroughEnable" /> 

• `get` **strikethroughEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启字体删除线


#### Returns

`boolean`

是否开启字体删除线

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void` <Badge type="tip" text="client" />

设置是否开启字体删除线


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableStrikethrough` | `boolean` | 是否开启 |


___

### text <Score text="text" /> 

• `get` **text**(): `string` <Badge type="tip" text="client" />

获取当前的文本内容


#### Returns

`string`

返回当前的文本内容

• `set` **text**(`inText`): `void` <Badge type="tip" text="client" />

设置文本内容


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inText` | `string` | 文本内容 |


___

### textAlign <Score text="textAlign" /> 

• `get` **textAlign**(): [`TextJustify`](../enums/mw.TextJustify.md) <Badge type="tip" text="client" />

获取字体对齐方式


#### Returns

[`TextJustify`](../enums/mw.TextJustify.md)

字体对齐方式

• `set` **textAlign**(`inTextJustify`): `void` <Badge type="tip" text="client" />

设置字体对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustify` | [`TextJustify`](../enums/mw.TextJustify.md) | 对齐方式的枚举 |


___

### textHeight <Score text="textHeight" /> 

• `get` **textHeight**(): `number` <Badge type="tip" text="other" />

获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)

只在客户端调用生效，控件初始化完成后调用才准确生效，需要等待控件渲染完成

#### Returns

`number`

文本高度

___

### textHorizontalLayout <Score text="textHorizontalLayout" /> 

• `get` **textHorizontalLayout**(): [`UITextHorizontalLayout`](../enums/mw.UITextHorizontalLayout.md) <Badge type="tip" text="client" />

获取当前字体的水平显示方式


#### Returns

[`UITextHorizontalLayout`](../enums/mw.UITextHorizontalLayout.md)

返回字体的水平显示方式

• `set` **textHorizontalLayout**(`inTextHorizontalLayout`): `void` <Badge type="tip" text="client" />

设置字体的水平显示方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextHorizontalLayout` | [`UITextHorizontalLayout`](../enums/mw.UITextHorizontalLayout.md) | 水平显示方式 |


___

### textJustification <Score text="textJustification" /> 

• `get` **textJustification**(): [`TextJustify`](../enums/mw.TextJustify.md) <Badge type="tip" text="client" />

获取字体的对齐方式


#### Returns

[`TextJustify`](../enums/mw.TextJustify.md)

返回字体的对齐方式

• `set` **textJustification**(`inTextJustification`): `void` <Badge type="tip" text="client" />

设置字体的对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustification` | [`TextJustify`](../enums/mw.TextJustify.md) | 新的对齐方式 |


___

### textSingleHeight <Score text="textSingleHeight" /> 

• `get` **textSingleHeight**(): `number` <Badge type="tip" text="client" />

获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)


#### Returns

`number`

文本单行高度

___

### textVerticalAlign <Score text="textVerticalAlign" /> 

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <Badge type="tip" text="client" />

获取字体垂直对齐方式


#### Returns

[`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md)

字体垂直对齐方式

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void` <Badge type="tip" text="client" />

设置字体垂直对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) |  垂直对齐方式 |


___

### textVerticalJustification <Score text="textVerticalJustification" /> 

• `get` **textVerticalJustification**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <Badge type="tip" text="client" />

获取字体的垂直对齐方式


#### Returns

[`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md)

返回字体的垂直对齐方式

• `set` **textVerticalJustification**(`inTextJustification`): `void` <Badge type="tip" text="client" />

设置字体的垂直对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustification` | [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) | 垂直对齐方式 |


___

### underlineEnable <Score text="underlineEnable" /> 

• `get` **underlineEnable**(): `boolean` <Badge type="tip" text="client" />

返回是否开启字体下划线


#### Returns

`boolean`

获取是否开启字体下划线

• `set` **underlineEnable**(`inEnableUnderline`): `void` <Badge type="tip" text="client" />

设置是否开启字体下划线


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableUnderline` | `boolean` | 设置是否开启下划线 |



## Methods
___

### setFontColorByHex <Score text="setFontColorByHex" /> 

• **setFontColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置字体颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |


___

### setFontColorDecimal <Score text="setFontColorDecimal" /> 

• **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置字体颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 字体R值，数据范围0~255 |
| `G` | `number` | 字体G值，数据范围0~255 |
| `B` | `number` | 字体B值，数据范围0~255 |
| `A` | `number` | 字体透明度，数据范围0~255 |


___

### setOutlineColorByHex <Score text="setOutlineColorByHex" /> 

• **setOutlineColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置当前的描边颜色，指定描边颜色设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 十六进制的字符串 |


___

### setOutlineColorDecimal <Score text="setOutlineColorDecimal" /> 

• **setOutlineColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置当前的描边颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R通道的值，数据范围0~255 |
| `G` | `number` | 颜色G通道的值，数据范围0~255 |
| `B` | `number` | 颜色B通道的值，数据范围0~255 |
| `A` | `number` | 透明度，数据范围0~255 |


___

### setShadowColorByHex <Score text="setShadowColorByHex" /> 

• **setShadowColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置字体的阴影颜色,Shadow Offset必须设值才能看到效果,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色 |


___

### setShadowColorDecimal <Score text="setShadowColorDecimal" /> 

• **setShadowColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置字体的阴影颜色,Shadow Offset必须设值才能看到效果, 指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R通道的值，数据范围0~255 |
| `G` | `number` | 颜色G通道的值，数据范围0~255 |
| `B` | `number` | 颜色B通道的值，数据范围0~255 |
| `A` | `number` | 透明度，数据范围0~255 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`TextBlock`](mw.TextBlock.md) <Badge type="tip" text="client" />

创建 TextBlock 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`TextBlock`](mw.TextBlock.md)

返回创建的对象
