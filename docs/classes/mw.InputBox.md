[UI](../groups/Core.UI.md) / InputBox

# InputBox <Badge type="tip" text="Class" /> <Score text="InputBox" />

<p class="content-big">

UI的输入框

</p>

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`InputBox`**

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new Widget**()  |
| :----- |
:::


### Accessors <Score text="Accessors" /> 
| **[autoWrap](mw.InputBox.md#autowrap)**(): `boolean`  |
| :-----|
| 设置自动换行|
| **[contentColor](mw.InputBox.md#contentcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 获取字体内容颜色|
| **[errorText](mw.InputBox.md#errortext)**(): `string`  |
| 设置错误提示|
| **[fontColor](mw.InputBox.md#fontcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置文本颜色|
| **[fontLetterSpace](mw.InputBox.md#fontletterspace)**(): `number`  |
| 设置字体间距|
| **[fontSize](mw.InputBox.md#fontsize)**(): `number`  |
| 设置字体大小|
| **[glyph](mw.InputBox.md#glyph)**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md)  |
| 设置字体字形|
| **[hintString](mw.InputBox.md#hintstring)**(): `string`  |
| 设置提示内容|
| **[inputTextLimit](mw.InputBox.md#inputtextlimit)**(): [`InputTextLimit`](../enums/mw.InputTextLimit.md)  |
| 显示输入框的输入格式|
| **[isRichText](mw.InputBox.md#isrichtext)**(): `boolean`  |
| 设置是否为富文本|
| **[onTextChanged](mw.InputBox.md#ontextchanged)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Text`: `string`) => `void`\>  |
| 文本改变事件|
| **[onTextCommitted](mw.InputBox.md#ontextcommitted)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/mw.TextCommit.md)) => `void`\>  |
| 文本提交事件|
| **[outlineColor](mw.InputBox.md#outlinecolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 获取字体描边颜色|
| **[outlineSize](mw.InputBox.md#outlinesize)**(): `number`  |
| 设置字体描边宽度|
| **[readOnlyEnable](mw.InputBox.md#readonlyenable)**(): `boolean`  |
| 设置可读性|
| **[shadowColor](mw.InputBox.md#shadowcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置阴影颜色|
| **[shadowOffset](mw.InputBox.md#shadowoffset)**(): [`Vector2`](mw.Vector2.md)  |
| 设置阴影偏移|
| **[strikethroughEnable](mw.InputBox.md#strikethroughenable)**(): `boolean`  |
| 设置是否开启字体删除线|
| **[text](mw.InputBox.md#text)**(): `string`  |
| 设置文本内容|
| **[textAlign](mw.InputBox.md#textalign)**(): [`TextJustify`](../enums/mw.TextJustify.md)  |
| 设置字体对齐方式|
| **[textHeight](mw.InputBox.md#textheight)**(): `number`  |
| 获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)|
| **[textLengthLimit](mw.InputBox.md#textlengthlimit)**(): `number`  |
| 设置当前输入框的字数限制|
| **[textSingleHeight](mw.InputBox.md#textsingleheight)**(): `number`  |
| 获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)|
| **[textVerticalAlign](mw.InputBox.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md)  |
| 设置字体垂直对齐方式|
| **[underlineEnable](mw.InputBox.md#underlineenable)**(): `boolean`  |
| 设置是否开启字体下划线|


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
| **[deFocus](mw.InputBox.md#defocus)**(): `void`  |
| :-----|
| 设置输入框失焦状态，取消输入状态|
| **[focus](mw.InputBox.md#focus)**(): `void`  |
| 设置输入框聚焦状态，进入可输入状态|
| **[setContentColorByHex](mw.InputBox.md#setcontentcolorbyhex)**(`inHexString`: `string`): `void`  |
| 设置输入框的内容颜色 指定Hex的颜色文本设定颜色 #05050505|
| **[setContentColorDecimal](mw.InputBox.md#setcontentcolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void`  |
| 设置输入框的内容颜色 指定R、G、B、A设置颜色 0 ~255|
| **[setFontColorByHex](mw.InputBox.md#setfontcolorbyhex)**(`inHexString`: `string`): `void`  |
| 设置文本颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setFontColorDecimal](mw.InputBox.md#setfontcolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void`  |
| 设置文本颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setShadowColorByHex](mw.InputBox.md#setshadowcolorbyhex)**(`inHexString`: `string`): `void`  |
| 设置阴影颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setShadowColorDecimal](mw.InputBox.md#setshadowcolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void`  |
| 设置阴影颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setTextJustification](mw.InputBox.md#settextjustification)**(`inTextJustification`: [`TextJustify`](../enums/mw.TextJustify.md)): `void`  |
| 设置输入框的对齐方式|
| **[newObject](mw.InputBox.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`InputBox`](mw.InputBox.md)  |
| 创建 InputBox 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


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

### autoWrap <Score text="autoWrap" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoWrap**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoWrap**(`inAutoWrap`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否自动换行


#### Returns

| `boolean` | 是否自动换行 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置自动换行


#### Parameters

| `inAutoWrap` `boolean` | 是否自动换行 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### contentColor <Score text="contentColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **contentColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **contentColor**(`inContentColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置字体内容颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 字体内容颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


获取字体内容颜色


#### Parameters

| `inContentColor` [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### errorText <Score text="errorText" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **errorText**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **errorText**(`inText`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取设置错误提示


#### Returns

| `string` | 错误提示 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置错误提示


#### Parameters

| `inText` `string` | 错误提示 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### fontColor <Score text="fontColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **fontColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **fontColor**(`inColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前的字体的颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 字体颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置文本颜色


#### Parameters

| `inColor` [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### fontLetterSpace <Score text="fontLetterSpace" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **fontLetterSpace**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **fontLetterSpace**(`inLetterSpace`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取体间距


#### Returns

| `number` | 字体间距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体间距


#### Parameters

| `inLetterSpace` `number` | 字体间距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### fontSize <Score text="fontSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **fontSize**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **fontSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体大小


#### Returns

| `number` | 字体大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体大小


#### Parameters

| `inSize` `number` | 字体大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### glyph <Score text="glyph" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **glyph**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **glyph**(`inGlyph`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体字形


#### Returns

| [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) | 字体字形 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体字形


#### Parameters

| `inGlyph` [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) | 设置的字体字形 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### hintString <Score text="hintString" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **hintString**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **hintString**(`inHintString`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取提示文本内容


#### Returns

| `string` | 提示文本内容 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置提示内容


#### Parameters

| `inHintString` `string` | 提示内容 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### inputTextLimit <Score text="inputTextLimit" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **inputTextLimit**(): [`InputTextLimit`](../enums/mw.InputTextLimit.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **inputTextLimit**(`inLimit`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取输入框的输入格式


#### Returns

| [`InputTextLimit`](../enums/mw.InputTextLimit.md) | InputTextLimit `{ 无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 }` |
| :------ | :------ |


</td>
<td style="text-align: left">


显示输入框的输入格式


#### Parameters

| `inLimit` [`InputTextLimit`](../enums/mw.InputTextLimit.md) | 无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isRichText <Score text="isRichText" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isRichText**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **isRichText**(`isRichText`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否为富文本


#### Returns

| `boolean` | 是否为富文本 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否为富文本


#### Parameters

| `isRichText` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### onTextChanged <Score text="onTextChanged" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onTextChanged**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Text`: `string`) => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


文本改变事件


#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Text`: `string`) => `void`\> | 文本改变事件 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onTextCommitted <Score text="onTextCommitted" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onTextCommitted**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/mw.TextCommit.md)) => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


文本提交事件


#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/mw.TextCommit.md)) => `void`\> | 文本提交事件 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### outlineColor <Score text="outlineColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **outlineColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **outlineColor**(`inOutlineColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置字体描边颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 字体描边颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


获取字体描边颜色


#### Parameters

| `inOutlineColor` [`LinearColor`](mw.LinearColor.md) | 描边颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### outlineSize <Score text="outlineSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **outlineSize**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **outlineSize**(`inOutlineSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体描边宽度


#### Returns

| `number` | 字体描边宽度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体描边宽度


#### Parameters

| `inOutlineSize` `number` | 宽度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### readOnlyEnable <Score text="readOnlyEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **readOnlyEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **readOnlyEnable**(`inValue`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取可读性


#### Returns

| `boolean` | 是否可读 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置可读性


#### Parameters

| `inValue` `boolean` | 可读性 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### shadowColor <Score text="shadowColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **shadowColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **shadowColor**(`inShadowColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体阴影颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 字体阴影颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置阴影颜色


#### Parameters

| `inShadowColor` [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### shadowOffset <Score text="shadowOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **shadowOffset**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **shadowOffset**(`inOffset`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体阴影偏移


#### Returns

| [`Vector2`](mw.Vector2.md) | 字体阴影偏移 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置阴影偏移


#### Parameters

| `inOffset` [`Vector2`](mw.Vector2.md) | 偏移 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### strikethroughEnable <Score text="strikethroughEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **strikethroughEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启字体删除线


#### Returns

| `boolean` | 是否开启字体删除线 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启字体删除线


#### Parameters

| `inEnableStrikethrough` `boolean` | 删除线 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### text <Score text="text" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **text**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **text**(`inText`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取文本内容


#### Returns

| `string` | 文本内容 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置文本内容


#### Parameters

| `inText` `string` | 文本 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### textAlign <Score text="textAlign" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **textAlign**(): [`TextJustify`](../enums/mw.TextJustify.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **textAlign**(`inTextJustify`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体对齐方式


#### Returns

| [`TextJustify`](../enums/mw.TextJustify.md) | 字体对齐方式 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体对齐方式


#### Parameters

| `inTextJustify` [`TextJustify`](../enums/mw.TextJustify.md) | 对齐方式 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### textHeight <Score text="textHeight" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **textHeight**(): `number` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)

只在客户端调用生效, 控件初始化完成后调用才准确生效，需要等待控件渲染完成

#### Returns

| `number` | 文本高度 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### textLengthLimit <Score text="textLengthLimit" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **textLengthLimit**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **textLengthLimit**(`inTextLength`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取输入框的字数限制,字数限制不适用与邮箱格式和密码格式


#### Returns

| `number` | 获取输入框的字数限制 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前输入框的字数限制


#### Parameters

| `inTextLength` `number` | 字数限制 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### textSingleHeight <Score text="textSingleHeight" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **textSingleHeight**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)


#### Returns

| `number` | 文本单行高度 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### textVerticalAlign <Score text="textVerticalAlign" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体垂直对齐方式


#### Returns

| [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) | 字体垂直对齐方式 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体垂直对齐方式


#### Parameters

| `inTextVerticalJustify` [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) | 对齐方式 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### underlineEnable <Score text="underlineEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **underlineEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **underlineEnable**(`inEnableUnderline`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启字体下划线


#### Returns

| `boolean` | true:开启，false:关闭 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启字体下划线


#### Parameters

| `inEnableUnderline` `boolean` | 下户线 |
| :------ | :------ |


</td>
</tr></tbody>
</table>



## Methods

### deFocus <Score text="deFocus" /> 

• **deFocus**(): `void` <Badge type="tip" text="client" />

设置输入框失焦状态，取消输入状态



___

### focus <Score text="focus" /> 

• **focus**(): `void` <Badge type="tip" text="client" />

设置输入框聚焦状态，进入可输入状态



___

### setContentColorByHex <Score text="setContentColorByHex" /> 

• **setContentColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置输入框的内容颜色 指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | Hex颜色字符串 |
| :------ | :------ |



___

### setContentColorDecimal <Score text="setContentColorDecimal" /> 

• **setContentColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置输入框的内容颜色 指定R、G、B、A设置颜色 0 ~255

#### Parameters

| `R` `number` | 内容R值，数据范围0~255 |
| :------ | :------ |
| `G` `number` | 内容G值，数据范围0~255 |
| `B` `number` | 内容B值，数据范围0~255 |
| `A` `number` | 内容透明度，数据范围0~255 |



___

### setFontColorByHex <Score text="setFontColorByHex" /> 

• **setFontColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置文本颜色,指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | Hex颜色字符串 |
| :------ | :------ |



___

### setFontColorDecimal <Score text="setFontColorDecimal" /> 

• **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置文本颜色,指定R、G、B、A设置颜色 0 ~255

#### Parameters

| `R` `number` | 文本R值，数据范围0~255 |
| :------ | :------ |
| `G` `number` | 文本G值，数据范围0~255 |
| `B` `number` | 文本B值，数据范围0~255 |
| `A` `number` | 文本透明度，数据范围0~255 |



___

### setShadowColorByHex <Score text="setShadowColorByHex" /> 

• **setShadowColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置阴影颜色,指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | Hex颜色字符串 |
| :------ | :------ |



___

### setShadowColorDecimal <Score text="setShadowColorDecimal" /> 

• **setShadowColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置阴影颜色,指定R、G、B、A设置颜色 0 ~255

#### Parameters

| `R` `number` | 阴影R值，数据范围0~255 |
| :------ | :------ |
| `G` `number` | 阴影G值，数据范围0~255 |
| `B` `number` | 阴影B值，数据范围0~255 |
| `A` `number` | 阴影透明度，数据范围0~255 |



___

### setTextJustification <Score text="setTextJustification" /> 

• **setTextJustification**(`inTextJustification`): `void` <Badge type="tip" text="client" />

设置输入框的对齐方式

#### Parameters

| `inTextJustification` [`TextJustify`](../enums/mw.TextJustify.md) | 对齐方式 |
| :------ | :------ |



___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`InputBox`](mw.InputBox.md) <Badge type="tip" text="client" />

创建 InputBox 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| :------ | :------ |
| `inName?` `string` | 创建控件的名称 default:null |

#### Returns

| [`InputBox`](mw.InputBox.md) | 返回创建的对象 |
| :------ | :------ |

