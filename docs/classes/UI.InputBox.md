[UI](../modules/UI.UI.md) / InputBox

# InputBox <Badge type="tip" text="Class" />

**`Description`**

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

## Accessors

### autoWrap

• `get` **autoWrap**(): `boolean`

**`Description`**

获取是否自动换行

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动换行

• `set` **autoWrap**(`inAutoWrap`): `void`

**`Description`**

设置自动换行

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAutoWrap` | `boolean` | 是否自动换行 |

#### Returns

`void`


### contentColor

• `get` **contentColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

字体内容颜色，Type.LinearColor类型，数据范围0~1

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

获取字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`


### errorText

• `get` **errorText**(): `string`

**`Description`**

获取设置错误提示

**`Effect`**

只在客户端调用生效

#### Returns

`string`

错误提示

• `set` **errorText**(`inText`): `void`

**`Description`**

设置错误提示

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inText` | `string` | 错误提示 |

#### Returns

`void`

___

### fontColor

• `get` **fontColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取当前的字体的颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

字体颜色，Type.LinearColor类型，数据范围0~1

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置文本颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### fontLetterSpace

• `set` **fontLetterSpace**(`inLetterSpace`): `void`

**`Description`**

设置字体间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inLetterSpace` | `number` | 字体间距 |

#### Returns

`void`

___

### fontLitterSpace

• `get` **fontLitterSpace**(): `number`

**`Description`**

获取体间距

**`Effect`**

只在客户端调用生效

#### Returns

`number`

字体间距

___

### fontSize

• `get` **fontSize**(): `number`

**`Description`**

获取字体大小

**`Effect`**

只在客户端调用生效

#### Returns

`number`

字体大小

• `set` **fontSize**(`inSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | `number` | 字体大小 |

#### Returns

`void`

___

### glyph

• `get` **glyph**(): [`UIFontGlyph`](../enums/UI.UIFontGlyph.md)

**`Description`**

获取字体字形

**`Effect`**

只在客户端调用生效

#### Returns

[`UIFontGlyph`](../enums/UI.UIFontGlyph.md)

字体字形

• `set` **glyph**(`inGlyph`): `void`

**`Description`**

设置字体字形

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UIFontGlyph.md) | 设置的字体字形 |

#### Returns

`void`


### hintString

• `get` **hintString**(): `string`

**`Description`**

获取提示文本内容

**`Effect`**

只在客户端调用生效

#### Returns

`string`

提示文本内容

• `set` **hintString**(`inHintString`): `void`

**`Description`**

设置提示内容

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHintString` | `string` | 提示内容 |

#### Returns

`void`

___

### inputTextLimit

• `get` **inputTextLimit**(): [`InputTextLimit`](../enums/UI.InputTextLimit.md)

**`Description`**

获取输入框的输入格式

**`Effect`**

只在客户端调用生效

#### Returns

[`InputTextLimit`](../enums/UI.InputTextLimit.md)

InputTextLimit { 无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 }

• `set` **inputTextLimit**(`inLimit`): `void`

**`Description`**

显示输入框的输入格式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inLimit` | [`InputTextLimit`](../enums/UI.InputTextLimit.md) | 无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 |

#### Returns

`void`


### onTextChanged

• `get` **onTextChanged**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`) => `void`\>

**`Description`**

文本改变事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`) => `void`\>

文本改变事件

___

### onTextCommitted

• `get` **onTextCommitted**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/UI.TextCommit.md)) => `void`\>

**`Description`**

文本提交事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/UI.TextCommit.md)) => `void`\>

文本提交事件

___

### outlineColor

• `get` **outlineColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

设置字体描边颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

字体描边颜色，Type.LinearColor类型，数据范围0~1

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

获取字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](Type.LinearColor.md) | 描边颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### outlineSize

• `get` **outlineSize**(): `number`

**`Description`**

获取字体描边宽度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

字体描边宽度

• `set` **outlineSize**(`inOutlineSize`): `void`

**`Description`**

设置字体描边宽度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineSize` | `number` | 宽度 |

#### Returns

`void`


### readOnlyEnable

• `get` **readOnlyEnable**(): `boolean`

**`Description`**

获取可读性

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否可读

• `set` **readOnlyEnable**(`inValue`): `void`

**`Description`**

设置可读性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `boolean` | 可读性 |

#### Returns

`void`


### shadowColor

• `get` **shadowColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

字体阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

设置阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](Type.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### shadowOffset

• `get` **shadowOffset**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取字体阴影偏移

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

字体阴影偏移

• `set` **shadowOffset**(`inOffset`): `void`

**`Description`**

设置阴影偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](Type.Vector2.md) | 偏移 |

#### Returns

`void`


### strikethroughEnable

• `get` **strikethroughEnable**(): `boolean`

**`Description`**

获取是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否开启字体删除线

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void`

**`Description`**

设置是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableStrikethrough` | `boolean` | 删除线 |

#### Returns

`void`

___

### text

• `get` **text**(): `string`

**`Description`**

获取文本内容

**`Effect`**

只在客户端调用生效

#### Returns

`string`

文本内容

• `set` **text**(`inText`): `void`

**`Description`**

设置文本内容

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inText` | `string` | 文本 |

#### Returns

`void`

___

### textAlign

• `get` **textAlign**(): [`TextJustify`](../enums/UI.TextJustify.md)

**`Description`**

获取字体对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextJustify`](../enums/UI.TextJustify.md)

字体对齐方式

• `set` **textAlign**(`inTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustify` | [`TextJustify`](../enums/UI.TextJustify.md) | 对齐方式 |

#### Returns

`void`

___

### textHeight

• `get` **textHeight**(): `number`

**`Description`**

获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)

**`Effect`**

只在客户端调用生效, 控件初始化完成后调用才准确生效，需要等待控件渲染完成

#### Returns

`number`

文本高度

___

### textLengthLimit

• `get` **textLengthLimit**(): `number`

**`Description`**

获取输入框的字数限制,字数限制不适用与邮箱格式和密码格式

**`Effect`**

只在客户端调用生效

#### Returns

`number`

获取输入框的字数限制

• `set` **textLengthLimit**(`inTextLength`): `void`

**`Description`**

设置当前输入框的字数限制

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextLength` | `number` | 字数限制 |

#### Returns

`void`

___

### textSingleHeight

• `get` **textSingleHeight**(): `number`

**`Description`**

获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)

**`Effect`**

只在客户端调用生效

#### Returns

`number`

文本单行高度

___

### textVerticalAlign

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md)

**`Description`**

获取字体垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md)

字体垂直对齐方式

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void`

**`Description`**

设置字体垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.TextVerticalJustify.md) | 对齐方式 |

#### Returns

`void`


### underlineEnable

• `get` **underlineEnable**(): `boolean`

**`Description`**

获取是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

true:开启，false:关闭

• `set` **underlineEnable**(`inEnableUnderline`): `void`

**`Description`**

设置是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableUnderline` | `boolean` | 下户线 |

#### Returns

`void`


## Methods

### deFocus

▸ **deFocus**(): `void`

**`Description`**

设置输入框失焦状态，取消输入状态

**`Effect`**

只在客户端调用生效

#### Returns

`void`


### focus

▸ **focus**(): `void`

**`Description`**

设置输入框聚焦状态，进入可输入状态

**`Effect`**

只在客户端调用生效

#### Returns

`void`


### setContentColorByHex

▸ **setContentColorByHex**(`inHexString`): `void`

**`Description`**

设置输入框的内容颜色 指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |

#### Returns

`void`

___

### setContentColorDecimal

▸ **setContentColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置输入框的内容颜色 指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 内容R值，数据范围0~255 |
| `G` | `number` | 内容G值，数据范围0~255 |
| `B` | `number` | 内容B值，数据范围0~255 |
| `A` | `number` | 内容透明度，数据范围0~255 |

#### Returns

`void`

___

### setFontColorByHex

▸ **setFontColorByHex**(`inHexString`): `void`

**`Description`**

设置文本颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |

#### Returns

`void`

___

### setFontColorDecimal

▸ **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置文本颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 文本R值，数据范围0~255 |
| `G` | `number` | 文本G值，数据范围0~255 |
| `B` | `number` | 文本B值，数据范围0~255 |
| `A` | `number` | 文本透明度，数据范围0~255 |

#### Returns

`void`

___

### setShadowColorByHex

▸ **setShadowColorByHex**(`inHexString`): `void`

**`Description`**

设置阴影颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | Hex颜色字符串 |

#### Returns

`void`

___

### setShadowColorDecimal

▸ **setShadowColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置阴影颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 阴影R值，数据范围0~255 |
| `G` | `number` | 阴影G值，数据范围0~255 |
| `B` | `number` | 阴影B值，数据范围0~255 |
| `A` | `number` | 阴影透明度，数据范围0~255 |

#### Returns

`void`

___

### setTextJustification

▸ **setTextJustification**(`inTextJustification`): `void`

**`Description`**

设置输入框的对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustification` | [`TextJustify`](../enums/UI.TextJustify.md) | 对齐方式 |

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`InputBox`](UI.InputBox.md)

**`Description`**

创建 InputBox 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`InputBox`](UI.InputBox.md)

返回创建的对象
