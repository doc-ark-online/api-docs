[UI](../modules/UI.UI.md) / InputBox

# InputBox <Badge type="tip" text="Class" /> <Score text="InputBox" />

UI的输入框

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`InputBox`**

## Table of contents

| Accessors |
| :-----|
| **[autoWrap](UI.InputBox.md#autowrap)**(): `boolean` <br> 获取是否自动换行|
| **[contentColor](UI.InputBox.md#contentcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 设置字体内容颜色|
| **[errorText](UI.InputBox.md#errortext)**(): `string` <br> 获取设置错误提示|
| **[fontColor](UI.InputBox.md#fontcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取当前的字体的颜色|
| **[fontLetterSpace](UI.InputBox.md#fontletterspace)**(`number`): `void` <br> 设置字体间距|
| **[fontLitterSpace](UI.InputBox.md#fontlitterspace)**(): `number` <br> 获取体间距|
| **[fontSize](UI.InputBox.md#fontsize)**(): `number` <br> 获取字体大小|
| **[glyph](UI.InputBox.md#glyph)**(): [`UIFontGlyph`](../enums/UI.UIFontGlyph.md) <br> 获取字体字形|
| **[hintString](UI.InputBox.md#hintstring)**(): `string` <br> 获取提示文本内容|
| **[inputTextLimit](UI.InputBox.md#inputtextlimit)**(): [`InputTextLimit`](../enums/UI.InputTextLimit.md) <br> 获取输入框的输入格式|
| **[onTextChanged](UI.InputBox.md#ontextchanged)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`) => `void`\> <br> 文本改变事件|
| **[onTextCommitted](UI.InputBox.md#ontextcommitted)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/UI.TextCommit.md)) => `void`\> <br> 文本提交事件|
| **[outlineColor](UI.InputBox.md#outlinecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 设置字体描边颜色|
| **[outlineSize](UI.InputBox.md#outlinesize)**(): `number` <br> 获取字体描边宽度|
| **[readOnlyEnable](UI.InputBox.md#readonlyenable)**(): `boolean` <br> 获取可读性|
| **[shadowColor](UI.InputBox.md#shadowcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取字体阴影颜色|
| **[shadowOffset](UI.InputBox.md#shadowoffset)**(): [`Vector2`](Type.Vector2.md) <br> 获取字体阴影偏移|
| **[strikethroughEnable](UI.InputBox.md#strikethroughenable)**(): `boolean` <br> 获取是否开启字体删除线|
| **[text](UI.InputBox.md#text)**(): `string` <br> 获取文本内容|
| **[textAlign](UI.InputBox.md#textalign)**(): [`TextJustify`](../enums/UI.TextJustify.md) <br> 获取字体对齐方式|
| **[textHeight](UI.InputBox.md#textheight)**(): `number` <br> 获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)|
| **[textLengthLimit](UI.InputBox.md#textlengthlimit)**(): `number` <br> 获取输入框的字数限制,字数限制不适用与邮箱格式和密码格式|
| **[textSingleHeight](UI.InputBox.md#textsingleheight)**(): `number` <br> 获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)|
| **[textVerticalAlign](UI.InputBox.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md) <br> 获取字体垂直对齐方式|
| **[underlineEnable](UI.InputBox.md#underlineenable)**(): `boolean` <br> 获取是否开启字体下划线|


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
| **[slot](UI.Widget.md#slot)**(): [`UISlot`](UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[deFocus](UI.InputBox.md#defocus)**(): `void` <br> 设置输入框失焦状态，取消输入状态|
| **[focus](UI.InputBox.md#focus)**(): `void` <br> 设置输入框聚焦状态，进入可输入状态|
| **[setContentColorByHex](UI.InputBox.md#setcontentcolorbyhex)**(`string`): `void` <br> 设置输入框的内容颜色 指定Hex的颜色文本设定颜色 #05050505|
| **[setContentColorDecimal](UI.InputBox.md#setcontentcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置输入框的内容颜色 指定R、G、B、A设置颜色 0 ~255|
| **[setFontColorByHex](UI.InputBox.md#setfontcolorbyhex)**(`string`): `void` <br> 设置文本颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setFontColorDecimal](UI.InputBox.md#setfontcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置文本颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setShadowColorByHex](UI.InputBox.md#setshadowcolorbyhex)**(`string`): `void` <br> 设置阴影颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setShadowColorDecimal](UI.InputBox.md#setshadowcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置阴影颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setTextJustification](UI.InputBox.md#settextjustification)**([`TextJustify`](../enums/UI.TextJustify.md)): `void` <br> 设置输入框的对齐方式|
| **[newObject](UI.InputBox.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`InputBox`](UI.InputBox.md) <br> 创建 InputBox 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**([`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
:::


## Accessors

### autoWrap <Score text="autoWrap" /> 

• `get` **autoWrap**(): `boolean` <Badge type="tip" text="other" />

获取是否自动换行


#### Returns

`boolean`

是否自动换行

• `set` **autoWrap**(`inAutoWrap`): `void` <Badge type="tip" text="other" />

设置自动换行


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAutoWrap` | `boolean` | 是否自动换行 |



### contentColor <Score text="contentColor" /> 

• `get` **contentColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

设置字体内容颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

字体内容颜色，Type.LinearColor类型，数据范围0~1

• `set` **contentColor**(`inContentColor`): `void` <Badge type="tip" text="other" />

获取字体内容颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |



### errorText <Score text="errorText" /> 

• `get` **errorText**(): `string` <Badge type="tip" text="other" />

获取设置错误提示


#### Returns

`string`

错误提示

• `set` **errorText**(`inText`): `void` <Badge type="tip" text="other" />

设置错误提示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inText` | `string` | 错误提示 |


___

### fontColor <Score text="fontColor" /> 

• `get` **fontColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取当前的字体的颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

字体颜色，Type.LinearColor类型，数据范围0~1

• `set` **fontColor**(`inColor`): `void` <Badge type="tip" text="other" />

设置文本颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### fontLetterSpace <Score text="fontLetterSpace" /> 

• `set` **fontLetterSpace**(`inLetterSpace`): `void` <Badge type="tip" text="other" />

设置字体间距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inLetterSpace` | `number` | 字体间距 |


___

### fontLitterSpace <Score text="fontLitterSpace" /> 

• `get` **fontLitterSpace**(): `number` <Badge type="tip" text="other" />

获取体间距


#### Returns

`number`

字体间距

___

### fontSize <Score text="fontSize" /> 

• `get` **fontSize**(): `number` <Badge type="tip" text="other" />

获取字体大小


#### Returns

`number`

字体大小

• `set` **fontSize**(`inSize`): `void` <Badge type="tip" text="other" />

设置字体大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | `number` | 字体大小 |


___

### glyph <Score text="glyph" /> 

• `get` **glyph**(): [`UIFontGlyph`](../enums/UI.UIFontGlyph.md) <Badge type="tip" text="other" />

获取字体字形


#### Returns

[`UIFontGlyph`](../enums/UI.UIFontGlyph.md)

字体字形

• `set` **glyph**(`inGlyph`): `void` <Badge type="tip" text="other" />

设置字体字形


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UIFontGlyph.md) | 设置的字体字形 |



### hintString <Score text="hintString" /> 

• `get` **hintString**(): `string` <Badge type="tip" text="other" />

获取提示文本内容


#### Returns

`string`

提示文本内容

• `set` **hintString**(`inHintString`): `void` <Badge type="tip" text="other" />

设置提示内容


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHintString` | `string` | 提示内容 |


___

### inputTextLimit <Score text="inputTextLimit" /> 

• `get` **inputTextLimit**(): [`InputTextLimit`](../enums/UI.InputTextLimit.md) <Badge type="tip" text="other" />

获取输入框的输入格式


#### Returns

[`InputTextLimit`](../enums/UI.InputTextLimit.md)

InputTextLimit `{ 无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 }`

• `set` **inputTextLimit**(`inLimit`): `void` <Badge type="tip" text="other" />

显示输入框的输入格式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inLimit` | [`InputTextLimit`](../enums/UI.InputTextLimit.md) | 无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 |



### onTextChanged <Score text="onTextChanged" /> 

• `get` **onTextChanged**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`) => `void`\> <Badge type="tip" text="other" />

文本改变事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`) => `void`\>

文本改变事件

___

### onTextCommitted <Score text="onTextCommitted" /> 

• `get` **onTextCommitted**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/UI.TextCommit.md)) => `void`\> <Badge type="tip" text="other" />

文本提交事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/UI.TextCommit.md)) => `void`\>

文本提交事件

___

### outlineColor <Score text="outlineColor" /> 

• `get` **outlineColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

设置字体描边颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

字体描边颜色，Type.LinearColor类型，数据范围0~1

• `set` **outlineColor**(`inOutlineColor`): `void` <Badge type="tip" text="other" />

获取字体描边颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](Type.LinearColor.md) | 描边颜色，Type.LinearColor类型，数据范围0~1 |


___

### outlineSize <Score text="outlineSize" /> 

• `get` **outlineSize**(): `number` <Badge type="tip" text="other" />

获取字体描边宽度


#### Returns

`number`

字体描边宽度

• `set` **outlineSize**(`inOutlineSize`): `void` <Badge type="tip" text="other" />

设置字体描边宽度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineSize` | `number` | 宽度 |



### readOnlyEnable <Score text="readOnlyEnable" /> 

• `get` **readOnlyEnable**(): `boolean` <Badge type="tip" text="other" />

获取可读性


#### Returns

`boolean`

是否可读

• `set` **readOnlyEnable**(`inValue`): `void` <Badge type="tip" text="other" />

设置可读性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `boolean` | 可读性 |



### shadowColor <Score text="shadowColor" /> 

• `get` **shadowColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取字体阴影颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

字体阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowColor**(`inShadowColor`): `void` <Badge type="tip" text="other" />

设置阴影颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |


___

### shadowOffset <Score text="shadowOffset" /> 

• `get` **shadowOffset**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

获取字体阴影偏移


#### Returns

[`Vector2`](Type.Vector2.md)

字体阴影偏移

• `set` **shadowOffset**(`inOffset`): `void` <Badge type="tip" text="other" />

设置阴影偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](Type.Vector2.md) | 偏移 |



### strikethroughEnable <Score text="strikethroughEnable" /> 

• `get` **strikethroughEnable**(): `boolean` <Badge type="tip" text="other" />

获取是否开启字体删除线


#### Returns

`boolean`

是否开启字体删除线

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void` <Badge type="tip" text="other" />

设置是否开启字体删除线


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableStrikethrough` | `boolean` | 删除线 |


___

### text <Score text="text" /> 

• `get` **text**(): `string` <Badge type="tip" text="other" />

获取文本内容


#### Returns

`string`

文本内容

• `set` **text**(`inText`): `void` <Badge type="tip" text="other" />

设置文本内容


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inText` | `string` | 文本 |


___

### textAlign <Score text="textAlign" /> 

• `get` **textAlign**(): [`TextJustify`](../enums/UI.TextJustify.md) <Badge type="tip" text="other" />

获取字体对齐方式


#### Returns

[`TextJustify`](../enums/UI.TextJustify.md)

字体对齐方式

• `set` **textAlign**(`inTextJustify`): `void` <Badge type="tip" text="other" />

设置字体对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustify` | [`TextJustify`](../enums/UI.TextJustify.md) | 对齐方式 |


___

### textHeight <Score text="textHeight" /> 

• `get` **textHeight**(): `number` <Badge type="tip" text="other" />

获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)

只在客户端调用生效, 控件初始化完成后调用才准确生效，需要等待控件渲染完成

#### Returns

`number`

文本高度

___

### textLengthLimit <Score text="textLengthLimit" /> 

• `get` **textLengthLimit**(): `number` <Badge type="tip" text="other" />

获取输入框的字数限制,字数限制不适用与邮箱格式和密码格式


#### Returns

`number`

获取输入框的字数限制

• `set` **textLengthLimit**(`inTextLength`): `void` <Badge type="tip" text="other" />

设置当前输入框的字数限制


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextLength` | `number` | 字数限制 |


___

### textSingleHeight <Score text="textSingleHeight" /> 

• `get` **textSingleHeight**(): `number` <Badge type="tip" text="other" />

获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)


#### Returns

`number`

文本单行高度

___

### textVerticalAlign <Score text="textVerticalAlign" /> 

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md) <Badge type="tip" text="other" />

获取字体垂直对齐方式


#### Returns

[`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md)

字体垂直对齐方式

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void` <Badge type="tip" text="other" />

设置字体垂直对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md) | 对齐方式 |



### underlineEnable <Score text="underlineEnable" /> 

• `get` **underlineEnable**(): `boolean` <Badge type="tip" text="other" />

获取是否开启字体下划线


#### Returns

`boolean`

true:开启，false:关闭

• `set` **underlineEnable**(`inEnableUnderline`): `void` <Badge type="tip" text="other" />

设置是否开启字体下划线


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableUnderline` | `boolean` | 下户线 |



## Methods

### deFocus <Score text="deFocus" /> 

▸ **deFocus**(): `void` <Badge type="tip" text="other" />

设置输入框失焦状态，取消输入状态




### focus <Score text="focus" /> 

▸ **focus**(): `void` <Badge type="tip" text="other" />

设置输入框聚焦状态，进入可输入状态




### setContentColorByHex <Score text="setContentColorByHex" /> 

▸ **setContentColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置输入框的内容颜色 指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |


___

### setContentColorDecimal <Score text="setContentColorDecimal" /> 

▸ **setContentColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

设置输入框的内容颜色 指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 内容R值，数据范围0~255 |
| `G` | `number` | 内容G值，数据范围0~255 |
| `B` | `number` | 内容B值，数据范围0~255 |
| `A` | `number` | 内容透明度，数据范围0~255 |


___

### setFontColorByHex <Score text="setFontColorByHex" /> 

▸ **setFontColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置文本颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |


___

### setFontColorDecimal <Score text="setFontColorDecimal" /> 

▸ **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

设置文本颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 文本R值，数据范围0~255 |
| `G` | `number` | 文本G值，数据范围0~255 |
| `B` | `number` | 文本B值，数据范围0~255 |
| `A` | `number` | 文本透明度，数据范围0~255 |


___

### setShadowColorByHex <Score text="setShadowColorByHex" /> 

▸ **setShadowColorByHex**(`inHexString`): `void` <Badge type="tip" text="other" />

设置阴影颜色,指定Hex的颜色文本设定颜色 #05050505


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |


___

### setShadowColorDecimal <Score text="setShadowColorDecimal" /> 

▸ **setShadowColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="other" />

设置阴影颜色,指定R、G、B、A设置颜色 0 ~255


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 阴影R值，数据范围0~255 |
| `G` | `number` | 阴影G值，数据范围0~255 |
| `B` | `number` | 阴影B值，数据范围0~255 |
| `A` | `number` | 阴影透明度，数据范围0~255 |


___

### setTextJustification <Score text="setTextJustification" /> 

▸ **setTextJustification**(`inTextJustification`): `void` <Badge type="tip" text="other" />

设置输入框的对齐方式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustification` | [`TextJustify`](../enums/UI.TextJustify.md) | 对齐方式 |


___

### newObject <Score text="newObject" /> 

▸ `Static` **newObject**(`parent?`, `inName?`): [`InputBox`](UI.InputBox.md) <Badge type="tip" text="other" />

创建 InputBox 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`InputBox`](UI.InputBox.md)

返回创建的对象
