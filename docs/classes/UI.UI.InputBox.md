[UI](../modules/UI.UI.md) / InputBox

# InputBox <Badge type="tip" text="Class" />

**`Description`**

UI 的输入框

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`InputBox`**

## Table of contents

| Accessors                                                                                                                                                                                                                        |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[autoSizeEnable](UI.UI.InputBox.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小                                                                                                                                    |
| **[autoWrap](UI.UI.InputBox.md#autowrap)**(): `boolean` <br> 获取是否自动换行                                                                                                                                                    |
| **[cachedGeometry](UI.UI.InputBox.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的 GetTickSpaceGeometry                                                                                                 |
| **[constraints](UI.UI.InputBox.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局                                                                                       |
| **[contentColor](UI.UI.InputBox.md#contentcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 设置字体内容颜色                                                                                                            |
| **[desiredSize](UI.UI.InputBox.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小                                                                                                                          |
| **[enable](UI.UI.InputBox.md#enable)**(): `boolean` <br> 是否可用                                                                                                                                                                |
| **[errorText](UI.UI.InputBox.md#errortext)**(): `string` <br> 获取设置错误提示                                                                                                                                                   |
| **[fontColor](UI.UI.InputBox.md#fontcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取当前的字体的颜色                                                                                                              |
| **[fontLetterSpace](UI.UI.InputBox.md#fontletterspace)**(`number`): `void` <br> 设置字体间距                                                                                                                                     |
| **[fontLitterSpace](UI.UI.InputBox.md#fontlitterspace)**(): `number` <br> 获取体间距                                                                                                                                             |
| **[fontSize](UI.UI.InputBox.md#fontsize)**(): `number` <br> 获取字体大小                                                                                                                                                         |
| **[glyph](UI.UI.InputBox.md#glyph)**(): [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) <br> 获取字体字形                                                                                                                         |
| **[guid](UI.UI.InputBox.md#guid)**(): `string` <br> 获取控件 GUID                                                                                                                                                                |
| **[hintString](UI.UI.InputBox.md#hintstring)**(): `string` <br> 获取提示文本内容                                                                                                                                                 |
| **[inputTextLimit](UI.UI.InputBox.md#inputtextlimit)**(): [`InputTextLimit`](../enums/UI.UI.InputTextLimit.md) <br> 获取输入框的输入格式                                                                                         |
| **[isHovered](UI.UI.InputBox.md#ishovered)**(): `boolean` <br> 是否是 hovered                                                                                                                                                    |
| **[name](UI.UI.InputBox.md#name)**(): `string` <br> 获取名字                                                                                                                                                                     |
| **[onTextChanged](UI.UI.InputBox.md#ontextchanged)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Text`: `string`) => `void`\> <br> 文本改变事件                                                                   |
| **[onTextCommitted](UI.UI.InputBox.md#ontextcommitted)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Text`: `string`, `CommitMethod`: [`TextCommit`](../enums/UI.UI.TextCommit.md)) => `void`\> <br> 文本提交事件 |
| **[outlineColor](UI.UI.InputBox.md#outlinecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 设置字体描边颜色                                                                                                            |
| **[outlineSize](UI.UI.InputBox.md#outlinesize)**(): `number` <br> 获取字体描边宽度                                                                                                                                               |
| **[paintSpaceGeometry](UI.UI.InputBox.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染 Widget 的几何信息                                                                                    |
| **[parent](UI.UI.InputBox.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点                                                                                                                                            |
| **[position](UI.UI.InputBox.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置                                                                                                                 |
| **[readOnlyEnable](UI.UI.InputBox.md#readonlyenable)**(): `boolean` <br> 获取可读性                                                                                                                                              |
| **[renderOpacity](UI.UI.InputBox.md#renderopacity)**(): `number` <br> 获取渲染透明度                                                                                                                                             |
| **[renderScale](UI.UI.InputBox.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放                                                                                                                          |
| **[renderShear](UI.UI.InputBox.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变                                                                                                                      |
| **[renderTransformAngle](UI.UI.InputBox.md#rendertransformangle)**(): `number` <br> 获取渲染的角度                                                                                                                               |
| **[renderTransformPivot](UI.UI.InputBox.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点                                                                                                        |
| **[shadowColor](UI.UI.InputBox.md#shadowcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取字体阴影颜色                                                                                                              |
| **[shadowOffset](UI.UI.InputBox.md#shadowoffset)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取字体阴影偏移                                                                                                                    |
| **[size](UI.UI.InputBox.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小                                                                                                                                            |
| **[slot](UI.UI.InputBox.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息                                                                              |
| **[strikethroughEnable](UI.UI.InputBox.md#strikethroughenable)**(): `boolean` <br> 获取是否开启字体删除线                                                                                                                        |
| **[text](UI.UI.InputBox.md#text)**(): `string` <br> 获取文本内容                                                                                                                                                                 |
| **[textAlign](UI.UI.InputBox.md#textalign)**(): [`TextJustify`](../enums/UI.UI.TextJustify.md) <br> 获取字体对齐方式                                                                                                             |
| **[textHeight](UI.UI.InputBox.md#textheight)**(): `number` <br> 获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)                                                                                               |
| **[textLengthLimit](UI.UI.InputBox.md#textlengthlimit)**(): `number` <br> 获取输入框的字数限制,字数限制不适用与邮箱格式和密码格式                                                                                                |
| **[textSingleHeight](UI.UI.InputBox.md#textsingleheight)**(): `number` <br> 获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)                                                                                     |
| **[textVerticalAlign](UI.UI.InputBox.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) <br> 获取字体垂直对齐方式                                                                         |
| **[tickSpaceGeometry](UI.UI.InputBox.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动 Widget Tick 的几何信息                                                                                 |
| **[transform](UI.UI.InputBox.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置                                                                                                     |
| **[underlineEnable](UI.UI.InputBox.md#underlineenable)**(): `boolean` <br> 获取是否开启字体下划线                                                                                                                                |
| **[visibility](UI.UI.InputBox.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性                                                                                                         |
| **[visible](UI.UI.InputBox.md#visible)**(): `boolean` <br> 是否可见                                                                                                                                                              |
| **[zOrder](UI.UI.InputBox.md#zorder)**(): `number` <br> 获取 zorder                                                                                                                                                              |

| Methods                                                                                                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[deFocus](UI.UI.InputBox.md#defocus)**(): `void` <br> 设置输入框失焦状态，取消输入状态                                                                                                              |
| **[destroyObject](UI.UI.InputBox.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用                                                                                                       |
| **[equal](UI.UI.InputBox.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象                                                                                                |
| **[focus](UI.UI.InputBox.md#focus)**(): `void` <br> 设置输入框聚焦状态，进入可输入状态                                                                                                                |
| **[invalidateLayoutAndVolatility](UI.UI.InputBox.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算                                                                      |
| **[setContentColorByHex](UI.UI.InputBox.md#setcontentcolorbyhex)**(`string`): `void` <br> 设置输入框的内容颜色 指定 Hex 的颜色文本设定颜色 #05050505                                                  |
| **[setContentColorDecimal](UI.UI.InputBox.md#setcontentcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置输入框的内容颜色 指定 R、G、B、A 设置颜色 0 ~255                      |
| **[setFontColorByHex](UI.UI.InputBox.md#setfontcolorbyhex)**(`string`): `void` <br> 设置文本颜色,指定 Hex 的颜色文本设定颜色 #05050505                                                                |
| **[setFontColorDecimal](UI.UI.InputBox.md#setfontcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置文本颜色,指定 R、G、B、A 设置颜色 0 ~255                                    |
| **[setShadowColorByHex](UI.UI.InputBox.md#setshadowcolorbyhex)**(`string`): `void` <br> 设置阴影颜色,指定 Hex 的颜色文本设定颜色 #05050505                                                            |
| **[setShadowColorDecimal](UI.UI.InputBox.md#setshadowcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置阴影颜色,指定 R、G、B、A 设置颜色 0 ~255                                |
| **[setTextJustification](UI.UI.InputBox.md#settextjustification)**([`TextJustify`](../enums/UI.UI.TextJustify.md)): `void` <br> 设置输入框的对齐方式                                                  |
| **[newObject](UI.UI.InputBox.md#newobject)**([`Canvas`](UI.UI.Canvas.md), `string`): [`InputBox`](UI.UI.InputBox.md) <br> 创建 InputBox 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁 |

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

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description      |
| :--------- | :-------- | :--------------- |
| `autoSize` | `boolean` | 是否自动设置大小 |

#### Returns

`void`

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

• `set` **autoWrap**(`inAutoWrap`): `void`

**`Description`**

设置自动换行

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type      | Description  |
| :----------- | :-------- | :----------- |
| `inAutoWrap` | `boolean` | 是否自动换行 |

#### Returns

`void`

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

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  | Description |
| :---------------- | :---------------------------------------------------- | :---------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | 控件的布局  |

#### Returns

`void`

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

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

获取字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                      | Description                               |
| :--------------- | :---------------------------------------- | :---------------------------------------- |
| `inContentColor` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description    |
| :--------- | :-------- | :------------- |
| `isEnable` | `boolean` | 可用性 boolean |

#### Returns

`void`

返回设置结果

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

• `set` **errorText**(`inText`): `void`

**`Description`**

设置错误提示

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inText` | `string` | 错误提示    |

#### Returns

`void`

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

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置文本颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

---

### fontLetterSpace

• `set` **fontLetterSpace**(`inLetterSpace`): `void`

**`Description`**

设置字体间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type     | Description |
| :-------------- | :------- | :---------- |
| `inLetterSpace` | `number` | 字体间距    |

#### Returns

`void`

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

• `set` **fontSize**(`inSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inSize` | `number` | 字体大小    |

#### Returns

`void`

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

• `set` **glyph**(`inGlyph`): `void`

**`Description`**

设置字体字形

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                           | Description    |
| :-------- | :--------------------------------------------- | :------------- |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) | 设置的字体字形 |

#### Returns

`void`

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

• `set` **hintString**(`inHintString`): `void`

**`Description`**

设置提示内容

**`Effect`**

只在客户端调用生效

#### Parameters

| Name           | Type     | Description |
| :------------- | :------- | :---------- |
| `inHintString` | `string` | 提示内容    |

#### Returns

`void`

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

• `set` **inputTextLimit**(`inLimit`): `void`

**`Description`**

显示输入框的输入格式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                                 | Description                                              |
| :-------- | :--------------------------------------------------- | :------------------------------------------------------- |
| `inLimit` | [`InputTextLimit`](../enums/UI.UI.InputTextLimit.md) | 无限制,限制为整数,限制为小数,限制为数字和字母,限制为密码 |

#### Returns

`void`

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

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 名字        |

#### Returns

`void`

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

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

获取字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                      | Description                                   |
| :--------------- | :---------------------------------------- | :-------------------------------------------- |
| `inOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | 描边颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **outlineSize**(`inOutlineSize`): `void`

**`Description`**

设置字体描边宽度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type     | Description |
| :-------------- | :------- | :---------- |
| `inOutlineSize` | `number` | 宽度        |

#### Returns

`void`

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

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description |
| :---------------- | :-------------------------------- | :---------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | 控件的位置  |

#### Returns

`void`

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

• `set` **readOnlyEnable**(`inValue`): `void`

**`Description`**

设置可读性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type      | Description |
| :-------- | :-------- | :---------- |
| `inValue` | `boolean` | 可读性      |

#### Returns

`void`

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

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `InOpacity` | `number` | 透明度      |

#### Returns

`void`

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

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description |
| :------ | :-------------------------------- | :---------- |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | 渲染缩放    |

#### Returns

`void`

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

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description  |
| :------ | :-------------------------------- | :----------- |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | 渲染错切形变 |

#### Returns

`void`

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

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `o`  | `number` | 渲染角度    |

#### Returns

`void`

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

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description |
| :------ | :-------------------------------- | :---------- |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | 渲染锚点    |

#### Returns

`void`

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

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

设置阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                      | Description                               |
| :-------------- | :---------------------------------------- | :---------------------------------------- |
| `inShadowColor` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **shadowOffset**(`inOffset`): `void`

**`Description`**

设置阴影偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `inOffset` | [`Vector2`](Type.Type.Vector2.md) | 偏移        |

#### Returns

`void`

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

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 输入大小    |

#### Returns

`void`

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

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void`

**`Description`**

设置是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                    | Type      | Description |
| :---------------------- | :-------- | :---------- |
| `inEnableStrikethrough` | `boolean` | 删除线      |

#### Returns

`void`

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

• `set` **text**(`inText`): `void`

**`Description`**

设置文本内容

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inText` | `string` | 文本        |

#### Returns

`void`

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

• `set` **textAlign**(`inTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                           | Description |
| :-------------- | :--------------------------------------------- | :---------- |
| `inTextJustify` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | 对齐方式    |

#### Returns

`void`

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

• `set` **textLengthLimit**(`inTextLength`): `void`

**`Description`**

设置当前输入框的字数限制

**`Effect`**

只在客户端调用生效

#### Parameters

| Name           | Type     | Description |
| :------------- | :------- | :---------- |
| `inTextLength` | `number` | 字数限制    |

#### Returns

`void`

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

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void`

**`Description`**

设置字体垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                    | Type                                                           | Description |
| :---------------------- | :------------------------------------------------------------- | :---------- |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) | 对齐方式    |

#### Returns

`void`

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

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description |
| :------------ | :------------------------------------ | :---------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | 大小位置    |

#### Returns

`void`

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

• `set` **underlineEnable**(`inEnableUnderline`): `void`

**`Description`**

设置是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                | Type      | Description |
| :------------------ | :-------- | :---------- |
| `inEnableUnderline` | `boolean` | 下户线      |

#### Returns

`void`

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

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description |
| :----------- | :----------------------------------------------------- | :---------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | 可见性      |

#### Returns

`void`

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

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置 zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description    |
| :--------- | :------- | :------------- |
| `InZOrder` | `number` | 值越大在越上层 |

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

---

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

---

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description            |
| :----- | :-------------------------- | :--------------------- |
| `that` | [`Widget`](UI.UI.Widget.md) | 需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

---

### focus

▸ **focus**(): `void`

**`Description`**

设置输入框聚焦状态，进入可输入状态

**`Effect`**

只在客户端调用生效

#### Returns

`void`

---

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

---

### setContentColorByHex

▸ **setContentColorByHex**(`inHexString`): `void`

**`Description`**

设置输入框的内容颜色 指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description    |
| :------------ | :------- | :------------- |
| `inHexString` | `string` | Hex 颜色字符串 |

#### Returns

`void`

---

### setContentColorDecimal

▸ **setContentColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置输入框的内容颜色 指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                |
| :--- | :------- | :------------------------- |
| `R`  | `number` | 内容 R 值，数据范围 0~255  |
| `G`  | `number` | 内容 G 值，数据范围 0~255  |
| `B`  | `number` | 内容 B 值，数据范围 0~255  |
| `A`  | `number` | 内容透明度，数据范围 0~255 |

#### Returns

`void`

---

### setFontColorByHex

▸ **setFontColorByHex**(`inHexString`): `void`

**`Description`**

设置文本颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description    |
| :------------ | :------- | :------------- |
| `inHexString` | `string` | Hex 颜色字符串 |

#### Returns

`void`

---

### setFontColorDecimal

▸ **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置文本颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                |
| :--- | :------- | :------------------------- |
| `R`  | `number` | 文本 R 值，数据范围 0~255  |
| `G`  | `number` | 文本 G 值，数据范围 0~255  |
| `B`  | `number` | 文本 B 值，数据范围 0~255  |
| `A`  | `number` | 文本透明度，数据范围 0~255 |

#### Returns

`void`

---

### setShadowColorByHex

▸ **setShadowColorByHex**(`inHexString`): `void`

**`Description`**

设置阴影颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description    |
| :------------ | :------- | :------------- |
| `inHexString` | `string` | Hex 颜色字符串 |

#### Returns

`void`

---

### setShadowColorDecimal

▸ **setShadowColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置阴影颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                |
| :--- | :------- | :------------------------- |
| `R`  | `number` | 阴影 R 值，数据范围 0~255  |
| `G`  | `number` | 阴影 G 值，数据范围 0~255  |
| `B`  | `number` | 阴影 B 值，数据范围 0~255  |
| `A`  | `number` | 阴影透明度，数据范围 0~255 |

#### Returns

`void`

---

### setTextJustification

▸ **setTextJustification**(`inTextJustification`): `void`

**`Description`**

设置输入框的对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                  | Type                                           | Description |
| :-------------------- | :--------------------------------------------- | :---------- |
| `inTextJustification` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | 对齐方式    |

#### Returns

`void`

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`InputBox`](UI.UI.InputBox.md)

**`Description`**

创建 InputBox 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                           |
| :-------- | :-------------------------- | :------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的外 parent 对象 default:null |
| `inName?` | `string`                    | 创建控件的名称 default:null           |

#### Returns

[`InputBox`](UI.UI.InputBox.md)

返回创建的对象
