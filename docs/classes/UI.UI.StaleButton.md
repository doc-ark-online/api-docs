[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / StaleButton

# Class: StaleButton

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).StaleButton

**`Author`**

jie.wu

**`Description`**

按钮

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`StaleButton`**

## Table of contents

### Constructors

- [constructor](UI.UI.StaleButton.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.StaleButton.md#autosizeenable)
- [cachedGeometry](UI.UI.StaleButton.md#cachedgeometry)
- [clickMethod](UI.UI.StaleButton.md#clickmethod)
- [constraints](UI.UI.StaleButton.md#constraints)
- [contentColor](UI.UI.StaleButton.md#contentcolor)
- [desiredSize](UI.UI.StaleButton.md#desiredsize)
- [disableImageColor](UI.UI.StaleButton.md#disableimagecolor)
- [disableImageDrawType](UI.UI.StaleButton.md#disableimagedrawtype)
- [disableImageGuid](UI.UI.StaleButton.md#disableimageguid)
- [disableImageMargin](UI.UI.StaleButton.md#disableimagemargin)
- [disableImageSize](UI.UI.StaleButton.md#disableimagesize)
- [enable](UI.UI.StaleButton.md#enable)
- [focusable](UI.UI.StaleButton.md#focusable)
- [fontColor](UI.UI.StaleButton.md#fontcolor)
- [fontLetterSpace](UI.UI.StaleButton.md#fontletterspace)
- [fontSize](UI.UI.StaleButton.md#fontsize)
- [glyph](UI.UI.StaleButton.md#glyph)
- [guid](UI.UI.StaleButton.md#guid)
- [isHovered](UI.UI.StaleButton.md#ishovered)
- [name](UI.UI.StaleButton.md#name)
- [normalImageColor](UI.UI.StaleButton.md#normalimagecolor)
- [normalImageDrawType](UI.UI.StaleButton.md#normalimagedrawtype)
- [normalImageGuid](UI.UI.StaleButton.md#normalimageguid)
- [normalImageMargin](UI.UI.StaleButton.md#normalimagemargin)
- [normalImageSize](UI.UI.StaleButton.md#normalimagesize)
- [onClicked](UI.UI.StaleButton.md#onclicked)
- [onHovered](UI.UI.StaleButton.md#onhovered)
- [onPressed](UI.UI.StaleButton.md#onpressed)
- [onReleased](UI.UI.StaleButton.md#onreleased)
- [onUnhovered](UI.UI.StaleButton.md#onunhovered)
- [outlineColor](UI.UI.StaleButton.md#outlinecolor)
- [outlineSize](UI.UI.StaleButton.md#outlinesize)
- [paintSpaceGeometry](UI.UI.StaleButton.md#paintspacegeometry)
- [parent](UI.UI.StaleButton.md#parent)
- [position](UI.UI.StaleButton.md#position)
- [pressMethod](UI.UI.StaleButton.md#pressmethod)
- [pressedImagColor](UI.UI.StaleButton.md#pressedimagcolor)
- [pressedImageDrawType](UI.UI.StaleButton.md#pressedimagedrawtype)
- [pressedImageGuid](UI.UI.StaleButton.md#pressedimageguid)
- [pressedImageMargin](UI.UI.StaleButton.md#pressedimagemargin)
- [pressedImageSize](UI.UI.StaleButton.md#pressedimagesize)
- [renderOpacity](UI.UI.StaleButton.md#renderopacity)
- [renderScale](UI.UI.StaleButton.md#renderscale)
- [renderShear](UI.UI.StaleButton.md#rendershear)
- [renderTransformAngle](UI.UI.StaleButton.md#rendertransformangle)
- [renderTransformPivot](UI.UI.StaleButton.md#rendertransformpivot)
- [shadowColor](UI.UI.StaleButton.md#shadowcolor)
- [shadowOffset](UI.UI.StaleButton.md#shadowoffset)
- [size](UI.UI.StaleButton.md#size)
- [slot](UI.UI.StaleButton.md#slot)
- [strikethroughEnable](UI.UI.StaleButton.md#strikethroughenable)
- [text](UI.UI.StaleButton.md#text)
- [textAlign](UI.UI.StaleButton.md#textalign)
- [textVerticalAlign](UI.UI.StaleButton.md#textverticalalign)
- [tickSpaceGeometry](UI.UI.StaleButton.md#tickspacegeometry)
- [touchMethod](UI.UI.StaleButton.md#touchmethod)
- [transform](UI.UI.StaleButton.md#transform)
- [transitionEnable](UI.UI.StaleButton.md#transitionenable)
- [underlineEnable](UI.UI.StaleButton.md#underlineenable)
- [visibility](UI.UI.StaleButton.md#visibility)
- [visible](UI.UI.StaleButton.md#visible)
- [zOrder](UI.UI.StaleButton.md#zorder)

### Methods

- [destroyObject](UI.UI.StaleButton.md#destroyobject)
- [equal](UI.UI.StaleButton.md#equal)
- [invalidateLayoutAndVolatility](UI.UI.StaleButton.md#invalidatelayoutandvolatility)
- [isPressed](UI.UI.StaleButton.md#ispressed)
- [setDisableImageColorByHex](UI.UI.StaleButton.md#setdisableimagecolorbyhex)
- [setDisableImageColorDecimal](UI.UI.StaleButton.md#setdisableimagecolordecimal)
- [setFontColorByHex](UI.UI.StaleButton.md#setfontcolorbyhex)
- [setFontColorDecimal](UI.UI.StaleButton.md#setfontcolordecimal)
- [setNormalImageColorByHex](UI.UI.StaleButton.md#setnormalimagecolorbyhex)
- [setNormalImageColorDecimal](UI.UI.StaleButton.md#setnormalimagecolordecimal)
- [setPressedImageColorByHex](UI.UI.StaleButton.md#setpressedimagecolorbyhex)
- [setPressedImageColorDecimal](UI.UI.StaleButton.md#setpressedimagecolordecimal)
- [newObject](UI.UI.StaleButton.md#newobject)

## Constructors

### constructor

• **new StaleButton**()

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

### clickMethod

• `set` **clickMethod**(`inClickMethod`): `void`

**`Description`**

设置点击模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                                       | Description    |
| :-------------- | :--------------------------------------------------------- | :------------- |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.UI.ButtonClickMethod.md) | usage:点击模式 |

#### Returns

`void`

点击模式选择

#### Defined in

UI/index.d.ts:2127

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

UI/index.d.ts:1820

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                      | Description                                     |
| :--------------- | :---------------------------------------- | :---------------------------------------------- |
| `inContentColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1814

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

### disableImageColor

• `get` **disableImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

禁用图片颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:2024

• `set` **disableImageColor**(`inColor`): `void`

**`Description`**

设置禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                           |
| :-------- | :---------------------------------------- | :---------------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:输入的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2018

---

### disableImageDrawType

• `get` **disableImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取禁用图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

禁用图片绘制类型

#### Defined in

UI/index.d.ts:2036

• `set` **disableImageDrawType**(`inDrawType`): `void`

**`Description`**

设置禁用图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:void  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2030

---

### disableImageGuid

• `get` **disableImageGuid**(): `string`

**`Description`**

获取禁用图片 ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

禁用图片 ID

#### Defined in

UI/index.d.ts:2078

• `set` **disableImageGuid**(`inGuid`): `void`

**`Description`**

设置不可用图片 ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description   |
| :------- | :------- | :------------ |
| `inGuid` | `string` | usage:图片 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2084

---

### disableImageMargin

• `get` **disableImageMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取禁用图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

禁用图片边距

#### Defined in

UI/index.d.ts:2042

• `set` **disableImageMargin**(`inMargin`): `void`

**`Description`**

设置禁用图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description |
| :--------- | :-------------------------- | :---------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:边距  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2048

---

### disableImageSize

• `get` **disableImageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取禁用图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

禁用图片大小

#### Defined in

UI/index.d.ts:2012

• `set` **disableImageSize**(`inSize`): `void`

**`Description`**

设置禁用图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:大小  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2006

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

### focusable

• `get` **focusable**(): `boolean`

**`Description`**

获取是否获取输入焦点

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否获取输入焦点

#### Defined in

UI/index.d.ts:1735

• `set` **focusable**(`inFocus`): `void`

**`Description`**

设置是否获取输入焦点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type      | Description            |
| :-------- | :-------- | :--------------------- |
| `inFocus` | `boolean` | usage:是否获取输入焦点 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1729

---

### fontColor

• `get` **fontColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取字体颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:2151

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置字体颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                         |
| :-------- | :---------------------------------------- | :-------------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:字体颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2145

---

### fontLetterSpace

• `get` **fontLetterSpace**(): `number`

**`Description`**

获取字体间距

**`Effect`**

只在客户端调用生效

#### Returns

`number`

字体间距

#### Defined in

UI/index.d.ts:1772

• `set` **fontLetterSpace**(`fontLetterSpace`): `void`

**`Description`**

设置字体间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type     | Description |
| :---------------- | :------- | :---------- |
| `fontLetterSpace` | `number` | usage:间距  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1766

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

UI/index.d.ts:1760

• `set` **fontSize**(`FontSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description |
| :--------- | :------- | :---------- |
| `FontSize` | `number` | usage:大小  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1754

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

UI/index.d.ts:1784

• `set` **glyph**(`inGlyph`): `void`

**`Description`**

设置字体字形

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                           | Description          |
| :-------- | :--------------------------------------------- | :------------------- |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) | usage:字体字形的类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1778

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

### normalImageColor

• `get` **normalImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取普通图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

普通图片颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:1916

• `set` **normalImageColor**(`inColor`): `void`

**`Description`**

设置普通图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                              |
| :-------- | :---------------------------------------- | :------------------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 普通图片颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1910

---

### normalImageDrawType

• `get` **normalImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取普通图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

普通图片绘制类型

#### Defined in

UI/index.d.ts:1928

• `set` **normalImageDrawType**(`inDrawType`): `void`

**`Description`**

设置普通图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1922

---

### normalImageGuid

• `get` **normalImageGuid**(): `string`

**`Description`**

获取普通图片 ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

普通图片 ID

#### Defined in

UI/index.d.ts:2054

• `set` **normalImageGuid**(`inGuid`): `void`

**`Description`**

设置正常图片 ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description   |
| :------- | :------- | :------------ |
| `inGuid` | `string` | usage:图片 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2060

---

### normalImageMargin

• `get` **normalImageMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取普通图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

边距

#### Defined in

UI/index.d.ts:1934

• `set` **normalImageMargin**(`inMargin`): `void`

**`Description`**

设置普通图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description        |
| :--------- | :-------------------------- | :----------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:普通图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1940

---

### normalImageSize

• `get` **normalImageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

普通图片大小

#### Defined in

UI/index.d.ts:1904

• `set` **normalImageSize**(`inSize`): `void`

**`Description`**

设置图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description                                               |
| :------- | :-------------------------------- | :-------------------------------------------------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:设置的图片大小，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1898

---

### onClicked

• `get` **onClicked**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

点击事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

#### Defined in

UI/index.d.ts:2090

---

### onHovered

• `get` **onHovered**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

悬浮事件

**`Effect`**

只在客户端调用生效 e

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

#### Defined in

UI/index.d.ts:2108

---

### onPressed

• `get` **onPressed**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

按下事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

#### Defined in

UI/index.d.ts:2096

---

### onReleased

• `get` **onReleased**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

释放事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

#### Defined in

UI/index.d.ts:2102

---

### onUnhovered

• `get` **onUnhovered**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

未悬浮事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

#### Defined in

UI/index.d.ts:2114

---

### outlineColor

• `get` **outlineColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取字体描边颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体描边颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:1880

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

设置字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                      | Description                                         |
| :--------------- | :---------------------------------------- | :-------------------------------------------------- |
| `inOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:描边颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1874

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

UI/index.d.ts:1892

• `set` **outlineSize**(`inOutlineSize`): `void`

**`Description`**

设置字体描边宽度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type     | Description      |
| :-------------- | :------- | :--------------- |
| `inOutlineSize` | `number` | usage:设置的大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1886

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

### pressMethod

• `set` **pressMethod**(`inPressMethod`): `void`

**`Description`**

设置按压模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                                       | Description    |
| :-------------- | :--------------------------------------------------------- | :------------- |
| `inPressMethod` | [`ButtonPressMethod`](../enums/UI.UI.ButtonPressMethod.md) | usage:按压模式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2139

---

### pressedImagColor

• `get` **pressedImagColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取按压图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

按压图片颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:1976

• `set` **pressedImagColor**(`inColor`): `void`

**`Description`**

设置按压图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                           |
| :-------- | :---------------------------------------- | :---------------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:按压的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1970

---

### pressedImageDrawType

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取按压图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

按压图片绘制类型

#### Defined in

UI/index.d.ts:1988

• `set` **pressedImageDrawType**(`inDrawTYpe`): `void`

**`Description`**

设置按压图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1982

---

### pressedImageGuid

• `get` **pressedImageGuid**(): `string`

**`Description`**

获取按下图片 ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

按下图片 ID

#### Defined in

UI/index.d.ts:2066

• `set` **pressedImageGuid**(`inGuid`): `void`

**`Description`**

设置按下图片 ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description   |
| :------- | :------- | :------------ |
| `inGuid` | `string` | usage:图片 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2072

---

### pressedImageMargin

• `get` **pressedImageMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取按压图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

按压图片边距

#### Defined in

UI/index.d.ts:1994

• `set` **pressedImageMargin**(`inMargin`): `void`

**`Description`**

设置按压图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description |
| :--------- | :-------------------------- | :---------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:边距  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2000

---

### pressedImageSize

• `get` **pressedImageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取按压图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

按压图片大小

#### Defined in

UI/index.d.ts:1964

• `set` **pressedImageSize**(`inSize`): `void`

**`Description`**

设置按压图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:size  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1958

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

UI/index.d.ts:1832

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

设置字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                      | Description                                           |
| :-------------- | :---------------------------------------- | :---------------------------------------------------- |
| `inShadowColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:输入的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1826

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

UI/index.d.ts:1844

• `set` **shadowOffset**(`inOffset`): `void`

**`Description`**

设置字体阴影偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                              | Description      |
| :--------- | :-------------------------------- | :--------------- |
| `inOffset` | [`Vector2`](Type.Type.Vector2.md) | usage:阴影偏移量 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1838

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

UI/index.d.ts:1796

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void`

**`Description`**

设置是否开启字体删除线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                    | Type      | Description    |
| :---------------------- | :-------- | :------------- |
| `inEnableStrikethrough` | `boolean` | usage:是否开启 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1790

---

### text

• `get` **text**(): `string`

**`Description`**

获取按钮文字

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回文字

#### Defined in

UI/index.d.ts:1741

• `set` **text**(`InString`): `void`

**`Description`**

设置按钮文字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description |
| :--------- | :------- | :---------- |
| `InString` | `string` | usage:文字  |

#### Returns

`void`

新文本

#### Defined in

UI/index.d.ts:1748

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

UI/index.d.ts:1856

• `set` **textAlign**(`InTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                           | Description          |
| :-------------- | :--------------------------------------------- | :------------------- |
| `InTextJustify` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | usage:对齐方式的枚举 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1850

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

UI/index.d.ts:1868

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

UI/index.d.ts:1862

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

### touchMethod

• `set` **touchMethod**(`inTouchMethod`): `void`

**`Description`**

设置触摸模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                                       | Description          |
| :-------------- | :--------------------------------------------------------- | :------------------- |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/UI.UI.ButtonTouchMethod.md) | usage:Touch 模式选择 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2133

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

### transitionEnable

• `get` **transitionEnable**(): `boolean`

**`Description`**

获取按钮是否启用过度模式,按下是否有效果

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

按钮是否启用过度模式

#### Defined in

UI/index.d.ts:1946

• `set` **transitionEnable**(`inBoolean`): `void`

**`Description`**

是否套用不同的按下方案

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type      | Description                  |
| :---------- | :-------- | :--------------------------- |
| `inBoolean` | `boolean` | usage:是否套用不同的按下方案 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1952

---

### underlineEnable

• `get` **underlineEnable**(): `boolean`

**`Description`**

返回是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

获取是否开启字体下划线

#### Defined in

UI/index.d.ts:1808

• `set` **underlineEnable**(`inEnableUnderline`): `void`

**`Description`**

设置是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                | Type      | Description              |
| :------------------ | :-------- | :----------------------- |
| `inEnableUnderline` | `boolean` | usage:设置是否开启下划线 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1802

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

### isPressed

▸ **isPressed**(): `boolean`

**`Description`**

是否按下

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回按钮是否按下

#### Defined in

UI/index.d.ts:2120

---

### setDisableImageColorByHex

▸ **setDisableImageColorByHex**(`inHexString`): `void`

**`Description`**

设置不可用颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description      |
| :------------ | :------- | :--------------- |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2226

---

### setDisableImageColorDecimal

▸ **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置不可用颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `R`  | `number` | usage:颜色 R 值，数据范围 0~255  |
| `G`  | `number` | usage:颜色 G 值，数据范围 0~255  |
| `B`  | `number` | usage:颜色 B 值，数据范围 0~255  |
| `A`  | `number` | usage:颜色透明度，数据范围 0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2215

---

### setFontColorByHex

▸ **setFontColorByHex**(`inHexString`): `void`

**`Description`**

设置字体颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description          |
| :------------ | :------- | :------------------- |
| `inHexString` | `string` | usage:Hex 颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2166

---

### setFontColorDecimal

▸ **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置字体颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `R`  | `number` | usage:字体 R 值，数据范围 0~255  |
| `G`  | `number` | usage:字体 G 值，数据范围 0~255  |
| `B`  | `number` | usage:字体 B 值，数据范围 0~255  |
| `A`  | `number` | usage:字体透明度，数据范围 0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2160

---

### setNormalImageColorByHex

▸ **setNormalImageColorByHex**(`inHexString`): `void`

**`Description`**

设置正常颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description      |
| :------------ | :------- | :--------------- |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2186

---

### setNormalImageColorDecimal

▸ **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置正常颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `R`  | `number` | usage:颜色 R 值，数据范围 0~255  |
| `G`  | `number` | usage:颜色 G 值，数据范围 0~255  |
| `B`  | `number` | usage:颜色 B 值，数据范围 0~255  |
| `A`  | `number` | usage:颜色透明度，数据范围 0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2175

---

### setPressedImageColorByHex

▸ **setPressedImageColorByHex**(`inHexString`): `void`

**`Description`**

设置按下颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description      |
| :------------ | :------- | :--------------- |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2206

---

### setPressedImageColorDecimal

▸ **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置按下颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                      |
| :--- | :------- | :------------------------------- |
| `R`  | `number` | usage:颜色 R 值，数据范围 0~255  |
| `G`  | `number` | usage:颜色 G 值，数据范围 0~255  |
| `B`  | `number` | usage:颜色 B 值，数据范围 0~255  |
| `A`  | `number` | usage:颜色透明度，数据范围 0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2195

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`StaleButton`](UI.UI.StaleButton.md)

**`Description`**

创建 StaleButton 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                 |
| :-------- | :-------------------------- | :------------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外 Parent 对象 default:null |
| `inName?` | `string`                    | usage:创建控件的名称 default:null           |

#### Returns

[`StaleButton`](UI.UI.StaleButton.md)

返回创建的对象

#### Defined in

UI/index.d.ts:1723
