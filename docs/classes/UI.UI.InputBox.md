[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / InputBox

# Class: InputBox

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).InputBox

**`Author`**

jie.wu

**`Description`**

UI 的输入框

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`InputBox`**

## Table of contents

### Constructors

- [constructor](UI.UI.InputBox.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.InputBox.md#autosizeenable)
- [autoWrap](UI.UI.InputBox.md#autowrap)
- [cachedGeometry](UI.UI.InputBox.md#cachedgeometry)
- [constraints](UI.UI.InputBox.md#constraints)
- [contentColor](UI.UI.InputBox.md#contentcolor)
- [desiredSize](UI.UI.InputBox.md#desiredsize)
- [enable](UI.UI.InputBox.md#enable)
- [errorText](UI.UI.InputBox.md#errortext)
- [fontColor](UI.UI.InputBox.md#fontcolor)
- [fontLetterSpace](UI.UI.InputBox.md#fontletterspace)
- [fontLitterSpace](UI.UI.InputBox.md#fontlitterspace)
- [fontSize](UI.UI.InputBox.md#fontsize)
- [glyph](UI.UI.InputBox.md#glyph)
- [guid](UI.UI.InputBox.md#guid)
- [hintString](UI.UI.InputBox.md#hintstring)
- [inputTextLimit](UI.UI.InputBox.md#inputtextlimit)
- [isHovered](UI.UI.InputBox.md#ishovered)
- [name](UI.UI.InputBox.md#name)
- [onTextChanged](UI.UI.InputBox.md#ontextchanged)
- [onTextCommitted](UI.UI.InputBox.md#ontextcommitted)
- [outlineColor](UI.UI.InputBox.md#outlinecolor)
- [outlineSize](UI.UI.InputBox.md#outlinesize)
- [paintSpaceGeometry](UI.UI.InputBox.md#paintspacegeometry)
- [parent](UI.UI.InputBox.md#parent)
- [position](UI.UI.InputBox.md#position)
- [readOnlyEnable](UI.UI.InputBox.md#readonlyenable)
- [renderOpacity](UI.UI.InputBox.md#renderopacity)
- [renderScale](UI.UI.InputBox.md#renderscale)
- [renderShear](UI.UI.InputBox.md#rendershear)
- [renderTransformAngle](UI.UI.InputBox.md#rendertransformangle)
- [renderTransformPivot](UI.UI.InputBox.md#rendertransformpivot)
- [shadowColor](UI.UI.InputBox.md#shadowcolor)
- [shadowOffset](UI.UI.InputBox.md#shadowoffset)
- [size](UI.UI.InputBox.md#size)
- [slot](UI.UI.InputBox.md#slot)
- [strikethroughEnable](UI.UI.InputBox.md#strikethroughenable)
- [text](UI.UI.InputBox.md#text)
- [textAlign](UI.UI.InputBox.md#textalign)
- [textHeight](UI.UI.InputBox.md#textheight)
- [textLengthLimit](UI.UI.InputBox.md#textlengthlimit)
- [textSingleHeight](UI.UI.InputBox.md#textsingleheight)
- [textVerticalAlign](UI.UI.InputBox.md#textverticalalign)
- [tickSpaceGeometry](UI.UI.InputBox.md#tickspacegeometry)
- [transform](UI.UI.InputBox.md#transform)
- [underlineEnable](UI.UI.InputBox.md#underlineenable)
- [visibility](UI.UI.InputBox.md#visibility)
- [visible](UI.UI.InputBox.md#visible)
- [zOrder](UI.UI.InputBox.md#zorder)

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

### autoSizeEnable

• `get` **autoSizeEnable**(): `boolean`

**`Description`**

获取是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动设置大小

#### Inherited from

Widget.autoSizeEnable

#### Defined in

UI/index.d.ts:4987

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description            |
| :--------- | :-------- | :--------------------- |
| `autoSize` | `boolean` | usage:是否自动设置大小 |

#### Returns

`void`

#### Inherited from

Widget.autoSizeEnable

#### Defined in

UI/index.d.ts:4981

---

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

| Name         | Type      | Description        |
| :----------- | :-------- | :----------------- |
| `inAutoWrap` | `boolean` | usage:是否自动换行 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1023

---

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

UI/index.d.ts:4897

---

### constraints

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

**`Description`**

获取控件的布局

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

控件的布局

#### Inherited from

Widget.constraints

#### Defined in

UI/index.d.ts:4939

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  | Description      |
| :---------------- | :---------------------------------------------------- | :--------------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | usage:控件的布局 |

#### Returns

`void`

#### Inherited from

Widget.constraints

#### Defined in

UI/index.d.ts:4933

---

### contentColor

• `get` **contentColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体内容颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:820

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

获取字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                      | Description                                     |
| :--------------- | :---------------------------------------- | :---------------------------------------------- |
| `inContentColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:814

---

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

UI/index.d.ts:4831

---

### enable

• `get` **enable**(): `boolean`

**`Description`**

是否可用

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.enable

#### Defined in

UI/index.d.ts:4807

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description          |
| :--------- | :-------- | :------------------- |
| `isEnable` | `boolean` | usage:可用性 boolean |

#### Returns

`void`

返回设置结果

#### Inherited from

Widget.enable

#### Defined in

UI/index.d.ts:4814

---

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

| Name     | Type     | Description    |
| :------- | :------- | :------------- |
| `inText` | `string` | usage:错误提示 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1071

---

### fontColor

• `get` **fontColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取当前的字体的颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:978

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置文本颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                     |
| :-------- | :---------------------------------------- | :---------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:984

---

### fontLetterSpace

• `set` **fontLetterSpace**(`inLetterSpace`): `void`

**`Description`**

设置字体间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type     | Description    |
| :-------------- | :------- | :------------- |
| `inLetterSpace` | `number` | usage:字体间距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1059

---

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

---

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

| Name     | Type     | Description    |
| :------- | :------- | :------------- |
| `inSize` | `number` | usage:字体大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1047

---

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

| Name      | Type                                           | Description          |
| :-------- | :--------------------------------------------- | :------------------- |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) | usage:设置的字体字形 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:778

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取控件 GUID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

控件 GUID

#### Inherited from

Widget.guid

#### Defined in

UI/index.d.ts:4915

---

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

| Name           | Type     | Description    |
| :------------- | :------- | :------------- |
| `inHintString` | `string` | usage:提示内容 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:942

---

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

| Name      | Type                                                 | Description                                                    |
| :-------- | :--------------------------------------------------- | :------------------------------------------------------------- |
| `inLimit` | [`InputTextLimit`](../enums/UI.UI.InputTextLimit.md) | usage:无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1011

---

### isHovered

• `get` **isHovered**(): `boolean`

**`Description`**

是否是 hovered

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.isHovered

#### Defined in

UI/index.d.ts:4820

---

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

UI/index.d.ts:4783

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`void`

#### Inherited from

Widget.name

#### Defined in

UI/index.d.ts:4777

---

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

---

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

---

### outlineColor

• `get` **outlineColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

设置字体描边颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体描边颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:880

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

获取字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                      | Description                                         |
| :--------------- | :---------------------------------------- | :-------------------------------------------------- |
| `inOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:描边颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:874

---

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

| Name            | Type     | Description |
| :-------------- | :------- | :---------- |
| `inOutlineSize` | `number` | usage:宽度  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:886

---

### paintSpaceGeometry

• `get` **paintSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于渲染 Widget 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于渲染 Widget 的几何信息

#### Inherited from

Widget.paintSpaceGeometry

#### Defined in

UI/index.d.ts:4909

---

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

UI/index.d.ts:4764

---

### position

• `get` **position**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

**`Description`**

获取控件的位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

控件的位置

#### Inherited from

Widget.position

#### Defined in

UI/index.d.ts:4951

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description      |
| :---------------- | :-------------------------------- | :--------------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | usage:控件的位置 |

#### Returns

`void`

#### Inherited from

Widget.position

#### Defined in

UI/index.d.ts:4945

---

### readOnlyEnable

• `get` **readOnlyEnable**(): `boolean`

**`Description`**

获取可读性

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否可读

#### Defined in

UI/index.d.ts:904

• `set` **readOnlyEnable**(`inValue`): `void`

**`Description`**

设置可读性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type      | Description  |
| :-------- | :-------- | :----------- |
| `inValue` | `boolean` | usage:可读性 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:898

---

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

UI/index.d.ts:4891

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description  |
| :---------- | :------- | :----------- |
| `InOpacity` | `number` | usage:透明度 |

#### Returns

`void`

#### Inherited from

Widget.renderOpacity

#### Defined in

UI/index.d.ts:4885

---

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

UI/index.d.ts:4879

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染缩放 |

#### Returns

`void`

#### Inherited from

Widget.renderScale

#### Defined in

UI/index.d.ts:4873

---

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

UI/index.d.ts:4867

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description        |
| :------ | :-------------------------------- | :----------------- |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染错切形变 |

#### Returns

`void`

#### Inherited from

Widget.renderShear

#### Defined in

UI/index.d.ts:4861

---

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

UI/index.d.ts:4843

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `o`  | `number` | usage:渲染角度 |

#### Returns

`void`

#### Inherited from

Widget.renderTransformAngle

#### Defined in

UI/index.d.ts:4837

---

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

UI/index.d.ts:4855

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染锚点 |

#### Returns

`void`

#### Inherited from

Widget.renderTransformPivot

#### Defined in

UI/index.d.ts:4849

---

### shadowColor

• `get` **shadowColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体阴影颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:832

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

设置阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                      | Description                                     |
| :-------------- | :---------------------------------------- | :---------------------------------------------- |
| `inShadowColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:826

---

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

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `inOffset` | [`Vector2`](Type.Type.Vector2.md) | usage:偏移  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:838

---

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

#### Inherited from

Widget.size

#### Defined in

UI/index.d.ts:4963

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description    |
| :------- | :-------------------------------- | :------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:输入大小 |

#### Returns

`void`

#### Inherited from

Widget.size

#### Defined in

UI/index.d.ts:4957

---

### slot

• `get` **slot**(): [`UISlot`](UI.UI.UISlot.md)

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取插槽

**`Effect`**

只在客户端调用生效

#### Returns

[`UISlot`](UI.UI.UISlot.md)

返回插槽

#### Inherited from

Widget.slot

#### Defined in

UI/index.d.ts:4771

---

### strikethroughEnable

• `get` **strikethroughEnable**(): `boolean`

**`Description`**

获取是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否开启字体删除线

#### Defined in

UI/index.d.ts:796

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void`

**`Description`**

设置是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                    | Type      | Description  |
| :---------------------- | :-------- | :----------- |
| `inEnableStrikethrough` | `boolean` | usage:删除线 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:790

---

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

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inText` | `string` | usage:文本  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:924

---

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

| Name            | Type                                           | Description    |
| :-------------- | :--------------------------------------------- | :------------- |
| `inTextJustify` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | usage:对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:850

---

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

---

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

| Name           | Type     | Description    |
| :------------- | :------- | :------------- |
| `inTextLength` | `number` | usage:字数限制 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1041

---

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

---

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

| Name                    | Type                                                           | Description    |
| :---------------------- | :------------------------------------------------------------- | :------------- |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) | usage:对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:862

---

### tickSpaceGeometry

• `get` **tickSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于驱动 Widget Tick 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于驱动 Widget Tick 的几何信息

#### Inherited from

Widget.tickSpaceGeometry

#### Defined in

UI/index.d.ts:4903

---

### transform

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

**`Description`**

得到控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

控件的大小和位置

#### Inherited from

Widget.transform

#### Defined in

UI/index.d.ts:4927

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description    |
| :------------ | :------------------------------------ | :------------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | usage:大小位置 |

#### Returns

`void`

#### Inherited from

Widget.transform

#### Defined in

UI/index.d.ts:4921

---

### underlineEnable

• `get` **underlineEnable**(): `boolean`

**`Description`**

获取是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

true:开启，false:关闭

#### Defined in

UI/index.d.ts:808

• `set` **underlineEnable**(`inEnableUnderline`): `void`

**`Description`**

设置是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                | Type      | Description  |
| :------------------ | :-------- | :----------- |
| `inEnableUnderline` | `boolean` | usage:下户线 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:802

---

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

UI/index.d.ts:4795

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description  |
| :----------- | :----------------------------------------------------- | :----------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:可见性 |

#### Returns

`void`

#### Inherited from

Widget.visibility

#### Defined in

UI/index.d.ts:4789

---

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

UI/index.d.ts:4801

---

### zOrder

• `get` **zOrder**(): `number`

**`Description`**

获取 zorder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zorder

#### Inherited from

Widget.zOrder

#### Defined in

UI/index.d.ts:4975

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置 zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `InZOrder` | `number` | usage:值越大在越上层 |

#### Returns

`void`

#### Inherited from

Widget.zOrder

#### Defined in

UI/index.d.ts:4969

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

---

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

UI/index.d.ts:4751

---

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description                  |
| :----- | :-------------------------- | :--------------------------- |
| `that` | [`Widget`](UI.UI.Widget.md) | usage:需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

#### Inherited from

[Widget](UI.UI.Widget.md).[equal](UI.UI.Widget.md#equal)

#### Defined in

UI/index.d.ts:4758

---

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

---

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

UI/index.d.ts:4825

---

### setContentColorByHex

▸ **setContentColorByHex**(`inHexString`): `void`

**`Description`**

设置输入框的内容颜色 指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description          |
| :------------ | :------- | :------------------- |
| `inHexString` | `string` | usage:Hex 颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:957

---

### setContentColorDecimal

▸ **setContentColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置输入框的内容颜色 指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `R`  | `number` | usage:内容 R 值，数据范围 0~255  |
| `G`  | `number` | usage:内容 G 值，数据范围 0~255  |
| `B`  | `number` | usage:内容 B 值，数据范围 0~255  |
| `A`  | `number` | usage:内容透明度，数据范围 0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:951

---

### setFontColorByHex

▸ **setFontColorByHex**(`inHexString`): `void`

**`Description`**

设置文本颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description          |
| :------------ | :------- | :------------------- |
| `inHexString` | `string` | usage:Hex 颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:999

---

### setFontColorDecimal

▸ **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置文本颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `R`  | `number` | usage:文本 R 值，数据范围 0~255  |
| `G`  | `number` | usage:文本 G 值，数据范围 0~255  |
| `B`  | `number` | usage:文本 B 值，数据范围 0~255  |
| `A`  | `number` | usage:文本透明度，数据范围 0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:993

---

### setShadowColorByHex

▸ **setShadowColorByHex**(`inHexString`): `void`

**`Description`**

设置阴影颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description          |
| :------------ | :------- | :------------------- |
| `inHexString` | `string` | usage:Hex 颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:972

---

### setShadowColorDecimal

▸ **setShadowColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置阴影颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `R`  | `number` | usage:阴影 R 值，数据范围 0~255  |
| `G`  | `number` | usage:阴影 G 值，数据范围 0~255  |
| `B`  | `number` | usage:阴影 B 值，数据范围 0~255  |
| `A`  | `number` | usage:阴影透明度，数据范围 0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:966

---

### setTextJustification

▸ **setTextJustification**(`inTextJustification`): `void`

**`Description`**

设置输入框的对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                  | Type                                           | Description    |
| :-------------------- | :--------------------------------------------- | :------------- |
| `inTextJustification` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | usage:对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1017

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`InputBox`](UI.UI.InputBox.md)

**`Description`**

创建 InputBox 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                 |
| :-------- | :-------------------------- | :------------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外 parent 对象 default:null |
| `inName?` | `string`                    | usage:创建控件的名称 default:null           |

#### Returns

[`InputBox`](UI.UI.InputBox.md)

返回创建的对象

#### Defined in

UI/index.d.ts:772
