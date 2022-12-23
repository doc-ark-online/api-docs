[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / InputBox

# Class: InputBox

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).InputBox

**`Author`**

wujie

**`Description`**

UI的输入框

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`InputBox`**

## Table of contents

### Constructors

- [constructor](UI.UI.InputBox.md#constructor)

### Accessors

- [autoWrap](UI.UI.InputBox.md#autowrap)
- [cachedGeometry](UI.UI.InputBox.md#cachedgeometry)
- [contentColor](UI.UI.InputBox.md#contentcolor)
- [desiredSize](UI.UI.InputBox.md#desiredsize)
- [enableReadOnly](UI.UI.InputBox.md#enablereadonly)
- [enableStrikethrough](UI.UI.InputBox.md#enablestrikethrough)
- [enableUnderline](UI.UI.InputBox.md#enableunderline)
- [errorText](UI.UI.InputBox.md#errortext)
- [fontColor](UI.UI.InputBox.md#fontcolor)
- [fontLetterSpace](UI.UI.InputBox.md#fontletterspace)
- [fontLitterSpace](UI.UI.InputBox.md#fontlitterspace)
- [fontSize](UI.UI.InputBox.md#fontsize)
- [glyph](UI.UI.InputBox.md#glyph)
- [guid](UI.UI.InputBox.md#guid)
- [hintString](UI.UI.InputBox.md#hintstring)
- [inputTextLimit](UI.UI.InputBox.md#inputtextlimit)
- [isEnabled](UI.UI.InputBox.md#isenabled)
- [isHovered](UI.UI.InputBox.md#ishovered)
- [isReadOnlyEnabled](UI.UI.InputBox.md#isreadonlyenabled)
- [isStrikethroughEnabled](UI.UI.InputBox.md#isstrikethroughenabled)
- [isUnderlineEnabled](UI.UI.InputBox.md#isunderlineenabled)
- [name](UI.UI.InputBox.md#name)
- [onTextChanged](UI.UI.InputBox.md#ontextchanged)
- [onTextCommitted](UI.UI.InputBox.md#ontextcommitted)
- [outlineColor](UI.UI.InputBox.md#outlinecolor)
- [outlineSize](UI.UI.InputBox.md#outlinesize)
- [paintSpaceGeometry](UI.UI.InputBox.md#paintspacegeometry)
- [parent](UI.UI.InputBox.md#parent)
- [renderOpacity](UI.UI.InputBox.md#renderopacity)
- [renderScale](UI.UI.InputBox.md#renderscale)
- [renderShear](UI.UI.InputBox.md#rendershear)
- [renderTransformAngle](UI.UI.InputBox.md#rendertransformangle)
- [renderTransformPivot](UI.UI.InputBox.md#rendertransformpivot)
- [shadowColor](UI.UI.InputBox.md#shadowcolor)
- [shadowOffset](UI.UI.InputBox.md#shadowoffset)
- [size](UI.UI.InputBox.md#size)
- [slot](UI.UI.InputBox.md#slot)
- [text](UI.UI.InputBox.md#text)
- [textAlign](UI.UI.InputBox.md#textalign)
- [textHeight](UI.UI.InputBox.md#textheight)
- [textLengthLimit](UI.UI.InputBox.md#textlengthlimit)
- [textSingleHeight](UI.UI.InputBox.md#textsingleheight)
- [textVerticalAlign](UI.UI.InputBox.md#textverticalalign)
- [tickSpaceGeometry](UI.UI.InputBox.md#tickspacegeometry)
- [visibility](UI.UI.InputBox.md#visibility)
- [visible](UI.UI.InputBox.md#visible)

### Methods

- [deFocus](UI.UI.InputBox.md#defocus)
- [destroyObject](UI.UI.InputBox.md#destroyobject)
- [equal](UI.UI.InputBox.md#equal)
- [focus](UI.UI.InputBox.md#focus)
- [invalidateLayoutAndVolatility](UI.UI.InputBox.md#invalidatelayoutandvolatility)
- [setContentColorByHex](UI.UI.InputBox.md#setcontentcolorbyhex)
- [setContentColorDecimal](UI.UI.InputBox.md#setcontentcolordecimal)
- [setFontColorByHex](UI.UI.InputBox.md#setfontcolorbyhex)
- [setFontColorDecimal](UI.UI.InputBox.md#setfontcolordecimal)
- [setShadowColorByHex](UI.UI.InputBox.md#setshadowcolorbyhex)
- [setShadowColorDecimal](UI.UI.InputBox.md#setshadowcolordecimal)
- [setTextJustification](UI.UI.InputBox.md#settextjustification)
- [newObject](UI.UI.InputBox.md#newobject)

## Constructors

### constructor

• **new InputBox**()

#### Inherited from

[Widget](UI.UI.Widget.md).[constructor](UI.UI.Widget.md#constructor)

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

#### Defined in

UI/index.d.ts:1029

• `set` **autoWrap**(`inAutoWrap`): `void`

**`Description`**

设置自动换行

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAutoWrap` | `boolean` | usage:是否自动换行 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1023

___

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

### contentColor

• `get` **contentColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体内容颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:820

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

获取字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:814

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

### enableReadOnly

• `set` **enableReadOnly**(`inValue`): `void`

**`Description`**

设置可读性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `boolean` | usage:可读性 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:898

___

### enableStrikethrough

• `set` **enableStrikethrough**(`inEnableStrikethrough`): `void`

**`Description`**

设置是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableStrikethrough` | `boolean` | usage:删除线 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:790

___

### enableUnderline

• `set` **enableUnderline**(`inEnableUnderline`): `void`

**`Description`**

设置是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableUnderline` | `boolean` | usage:下户线 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:802

___

### errorText

• `get` **errorText**(): `string`

**`Description`**

获取设置错误提示

**`Effect`**

只在客户端调用生效

#### Returns

`string`

错误提示

#### Defined in

UI/index.d.ts:1077

• `set` **errorText**(`inText`): `void`

**`Description`**

设置错误提示

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inText` | `string` | usage:错误提示 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1071

___

### fontColor

• `get` **fontColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取当前的字体的颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:978

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置文本颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:984

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
| `inLetterSpace` | `number` | usage:字体间距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1059

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

#### Defined in

UI/index.d.ts:1065

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

#### Defined in

UI/index.d.ts:1053

• `set` **fontSize**(`inSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | `number` | usage:字体大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1047

___

### glyph

• `get` **glyph**(): [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md)

**`Description`**

获取字体字形

**`Effect`**

只在客户端调用生效

#### Returns

[`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md)

字体字形

#### Defined in

UI/index.d.ts:784

• `set` **glyph**(`inGlyph`): `void`

**`Description`**

设置字体字形

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) | usage:设置的字体字形 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:778

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

### hintString

• `get` **hintString**(): `string`

**`Description`**

获取提示文本内容

**`Effect`**

只在客户端调用生效

#### Returns

`string`

提示文本内容

#### Defined in

UI/index.d.ts:936

• `set` **hintString**(`inHintString`): `void`

**`Description`**

设置提示内容

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHintString` | `string` | usage:提示内容 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:942

___

### inputTextLimit

• `get` **inputTextLimit**(): [`InputTextLimit`](../enums/UI.UI.InputTextLimit.md)

**`Description`**

获取输入框的输入格式

**`Effect`**

只在客户端调用生效

#### Returns

[`InputTextLimit`](../enums/UI.UI.InputTextLimit.md)

InputTextLimit { 无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 }

#### Defined in

UI/index.d.ts:1005

• `set` **inputTextLimit**(`inLimit`): `void`

**`Description`**

显示输入框的输入格式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inLimit` | [`InputTextLimit`](../enums/UI.UI.InputTextLimit.md) | usage:无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1011

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

### isReadOnlyEnabled

• `get` **isReadOnlyEnabled**(): `boolean`

**`Description`**

获取可读性

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否可读

#### Defined in

UI/index.d.ts:904

___

### isStrikethroughEnabled

• `get` **isStrikethroughEnabled**(): `boolean`

**`Description`**

获取是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否开启字体删除线

#### Defined in

UI/index.d.ts:796

___

### isUnderlineEnabled

• `get` **isUnderlineEnabled**(): `boolean`

**`Description`**

获取是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

true:开启，false:关闭

#### Defined in

UI/index.d.ts:808

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

### onTextChanged

• `get` **onTextChanged**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Text`: `string`) => `void`\>

**`Description`**

文本改变事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Text`: `string`) => `void`\>

文本改变事件

#### Defined in

UI/index.d.ts:910

___

### onTextCommitted

• `get` **onTextCommitted**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/UI.UI.TextCommit.md)) => `void`\>

**`Description`**

文本提交事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/UI.UI.TextCommit.md)) => `void`\>

文本提交事件

#### Defined in

UI/index.d.ts:916

___

### outlineColor

• `get` **outlineColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

设置字体描边颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体描边颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:880

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

获取字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:描边颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:874

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

#### Defined in

UI/index.d.ts:892

• `set` **outlineSize**(`inOutlineSize`): `void`

**`Description`**

设置字体描边宽度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineSize` | `number` | usage:宽度 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:886

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

### shadowColor

• `get` **shadowColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体阴影颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:832

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

设置阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:826

___

### shadowOffset

• `get` **shadowOffset**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取字体阴影偏移

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

字体阴影偏移

#### Defined in

UI/index.d.ts:844

• `set` **shadowOffset**(`inOffset`): `void`

**`Description`**

设置阴影偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](Type.Type.Vector2.md) | usage:偏移 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:838

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

### text

• `get` **text**(): `string`

**`Description`**

获取文本内容

**`Effect`**

只在客户端调用生效

#### Returns

`string`

文本内容

#### Defined in

UI/index.d.ts:930

• `set` **text**(`inText`): `void`

**`Description`**

设置文本内容

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inText` | `string` | usage:文本 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:924

___

### textAlign

• `get` **textAlign**(): [`TextJustify`](../enums/UI.UI.TextJustify.md)

**`Description`**

获取字体对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextJustify`](../enums/UI.UI.TextJustify.md)

字体对齐方式

#### Defined in

UI/index.d.ts:856

• `set` **textAlign**(`inTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustify` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | usage:对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:850

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

#### Defined in

UI/index.d.ts:1093

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

#### Defined in

UI/index.d.ts:1035

• `set` **textLengthLimit**(`inTextLength`): `void`

**`Description`**

设置当前输入框的字数限制

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextLength` | `number` | usage:字数限制 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1041

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

#### Defined in

UI/index.d.ts:1099

___

### textVerticalAlign

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md)

**`Description`**

获取字体垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md)

字体垂直对齐方式

#### Defined in

UI/index.d.ts:868

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void`

**`Description`**

设置字体垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) | usage:对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:862

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

### deFocus

▸ **deFocus**(): `void`

**`Description`**

设置输入框失焦状态，取消输入状态

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:1087

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

### focus

▸ **focus**(): `void`

**`Description`**

设置输入框聚焦状态，进入可输入状态

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:1082

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

### setContentColorByHex

▸ **setContentColorByHex**(`inHexString`): `void`

**`Description`**

设置输入框的内容颜色 指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | usage:Hex颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:957

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
| `R` | `number` | usage:内容R值，数据范围0~255 |
| `G` | `number` | usage:内容G值，数据范围0~255 |
| `B` | `number` | usage:内容B值，数据范围0~255 |
| `A` | `number` | usage:内容透明度，数据范围0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:951

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
| `inHexString` | `string` | usage:Hex颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:999

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
| `R` | `number` | usage:文本R值，数据范围0~255 |
| `G` | `number` | usage:文本G值，数据范围0~255 |
| `B` | `number` | usage:文本B值，数据范围0~255 |
| `A` | `number` | usage:文本透明度，数据范围0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:993

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
| `inHexString` | `string` | usage:Hex颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:972

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
| `R` | `number` | usage:阴影R值，数据范围0~255 |
| `G` | `number` | usage:阴影G值，数据范围0~255 |
| `B` | `number` | usage:阴影B值，数据范围0~255 |
| `A` | `number` | usage:阴影透明度，数据范围0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:966

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
| `inTextJustification` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | usage:对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1017

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`InputBox`](UI.UI.InputBox.md)

**`Description`**

创建 InputBox 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外parent对象 default:null |
| `inName?` | `string` | usage:创建控件的名称 default:null |

#### Returns

[`InputBox`](UI.UI.InputBox.md)

返回创建的对象

#### Defined in

UI/index.d.ts:772
