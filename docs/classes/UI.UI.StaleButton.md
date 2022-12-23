[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / StaleButton

# Class: StaleButton

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).StaleButton

**`Author`**

wujie

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

- [cachedGeometry](UI.UI.StaleButton.md#cachedgeometry)
- [clickMethod](UI.UI.StaleButton.md#clickmethod)
- [contentColor](UI.UI.StaleButton.md#contentcolor)
- [desiredSize](UI.UI.StaleButton.md#desiredsize)
- [disableImageColor](UI.UI.StaleButton.md#disableimagecolor)
- [disableImageDrawType](UI.UI.StaleButton.md#disableimagedrawtype)
- [disableImageGuid](UI.UI.StaleButton.md#disableimageguid)
- [disableImageMargin](UI.UI.StaleButton.md#disableimagemargin)
- [disableImageSize](UI.UI.StaleButton.md#disableimagesize)
- [enableStrikethrough](UI.UI.StaleButton.md#enablestrikethrough)
- [enableTransition](UI.UI.StaleButton.md#enabletransition)
- [enableUnderline](UI.UI.StaleButton.md#enableunderline)
- [focusable](UI.UI.StaleButton.md#focusable)
- [fontColor](UI.UI.StaleButton.md#fontcolor)
- [fontLetterSpace](UI.UI.StaleButton.md#fontletterspace)
- [fontSize](UI.UI.StaleButton.md#fontsize)
- [glyph](UI.UI.StaleButton.md#glyph)
- [guid](UI.UI.StaleButton.md#guid)
- [isEnabled](UI.UI.StaleButton.md#isenabled)
- [isHovered](UI.UI.StaleButton.md#ishovered)
- [isStrikethroughEnabled](UI.UI.StaleButton.md#isstrikethroughenabled)
- [isTransitionEnabled](UI.UI.StaleButton.md#istransitionenabled)
- [isUnderlineEnabled](UI.UI.StaleButton.md#isunderlineenabled)
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
- [text](UI.UI.StaleButton.md#text)
- [textAlign](UI.UI.StaleButton.md#textalign)
- [textVerticalAlign](UI.UI.StaleButton.md#textverticalalign)
- [tickSpaceGeometry](UI.UI.StaleButton.md#tickspacegeometry)
- [touchMethod](UI.UI.StaleButton.md#touchmethod)
- [visibility](UI.UI.StaleButton.md#visibility)
- [visible](UI.UI.StaleButton.md#visible)

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

### clickMethod

• `set` **clickMethod**(`inClickMethod`): `void`

**`Description`**

设置点击模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.UI.ButtonClickMethod.md) | usage:点击模式 |

#### Returns

`void`

点击模式选择

#### Defined in

UI/index.d.ts:2127

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

UI/index.d.ts:1820

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1814

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

### disableImageColor

• `get` **disableImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

禁用图片颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:2024

• `set` **disableImageColor**(`inColor`): `void`

**`Description`**

设置禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:输入的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2018

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:void |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2030

___

### disableImageGuid

• `get` **disableImageGuid**(): `string`

**`Description`**

获取禁用图片ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

禁用图片ID

#### Defined in

UI/index.d.ts:2078

• `set` **disableImageGuid**(`inGuid`): `void`

**`Description`**

设置不可用图片ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | usage:图片id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2084

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2048

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2006

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
| `inEnableStrikethrough` | `boolean` | usage:是否开启 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1790

___

### enableTransition

• `set` **enableTransition**(`inBoolean`): `void`

**`Description`**

是否套用不同的按下方案

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inBoolean` | `boolean` | usage:是否套用不同的按下方案 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1952

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
| `inEnableUnderline` | `boolean` | usage:设置是否开启下划线 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1802

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFocus` | `boolean` | usage:是否获取输入焦点 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1729

___

### fontColor

• `get` **fontColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取字体颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:2151

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置字体颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:字体颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2145

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `fontLetterSpace` | `number` | usage:间距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1766

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

UI/index.d.ts:1760

• `set` **fontSize**(`FontSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FontSize` | `number` | usage:大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1754

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

UI/index.d.ts:1784

• `set` **glyph**(`inGlyph`): `void`

**`Description`**

设置字体字形

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) | usage:字体字形的类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1778

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

UI/index.d.ts:1796

___

### isTransitionEnabled

• `get` **isTransitionEnabled**(): `boolean`

**`Description`**

获取按钮是否启用过度模式,按下是否有效果

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

按钮是否启用过度模式

#### Defined in

UI/index.d.ts:1946

___

### isUnderlineEnabled

• `get` **isUnderlineEnabled**(): `boolean`

**`Description`**

返回是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

获取是否开启字体下划线

#### Defined in

UI/index.d.ts:1808

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

### normalImageColor

• `get` **normalImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取普通图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

普通图片颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:1916

• `set` **normalImageColor**(`inColor`): `void`

**`Description`**

设置普通图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 普通图片颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1910

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1922

___

### normalImageGuid

• `get` **normalImageGuid**(): `string`

**`Description`**

获取普通图片ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

普通图片ID

#### Defined in

UI/index.d.ts:2054

• `set` **normalImageGuid**(`inGuid`): `void`

**`Description`**

设置正常图片ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | usage:图片id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2060

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:普通图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1940

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:设置的图片大小，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1898

___

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

___

### onHovered

• `get` **onHovered**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

悬浮事件

**`Effect`**

只在客户端调用生效e

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

#### Defined in

UI/index.d.ts:2108

___

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

___

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

___

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

___

### outlineColor

• `get` **outlineColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取字体描边颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

字体描边颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:1880

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

设置字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:描边颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1874

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

UI/index.d.ts:1892

• `set` **outlineSize**(`inOutlineSize`): `void`

**`Description`**

设置字体描边宽度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineSize` | `number` | usage:设置的大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1886

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

### pressMethod

• `set` **pressMethod**(`inPressMethod`): `void`

**`Description`**

设置按压模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPressMethod` | [`ButtonPressMethod`](../enums/UI.UI.ButtonPressMethod.md) | usage:按压模式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2139

___

### pressedImagColor

• `get` **pressedImagColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取按压图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

按压图片颜色，Type.LinearColor类型，数据范围0~1

#### Defined in

UI/index.d.ts:1976

• `set` **pressedImagColor**(`inColor`): `void`

**`Description`**

设置按压图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:按压的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1970

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1982

___

### pressedImageGuid

• `get` **pressedImageGuid**(): `string`

**`Description`**

获取按下图片ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

按下图片ID

#### Defined in

UI/index.d.ts:2066

• `set` **pressedImageGuid**(`inGuid`): `void`

**`Description`**

设置按下图片ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | usage:图片id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2072

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2000

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:size |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1958

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

UI/index.d.ts:1832

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

设置字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:输入的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1826

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

UI/index.d.ts:1844

• `set` **shadowOffset**(`inOffset`): `void`

**`Description`**

设置字体阴影偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](Type.Type.Vector2.md) | usage:阴影偏移量 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1838

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `InString` | `string` | usage:文字 |

#### Returns

`void`

新文本

#### Defined in

UI/index.d.ts:1748

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

UI/index.d.ts:1856

• `set` **textAlign**(`InTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTextJustify` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | usage:对齐方式的枚举 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1850

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

UI/index.d.ts:1868

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

UI/index.d.ts:1862

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

### touchMethod

• `set` **touchMethod**(`inTouchMethod`): `void`

**`Description`**

设置触摸模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/UI.UI.ButtonTouchMethod.md) | usage:Touch模式选择 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2133

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

___

### setDisableImageColorByHex

▸ **setDisableImageColorByHex**(`inHexString`): `void`

**`Description`**

设置不可用颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2226

___

### setDisableImageColorDecimal

▸ **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置不可用颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | usage:颜色R值，数据范围0~255 |
| `G` | `number` | usage:颜色G值，数据范围0~255 |
| `B` | `number` | usage:颜色B值，数据范围0~255 |
| `A` | `number` | usage:颜色透明度，数据范围0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2215

___

### setFontColorByHex

▸ **setFontColorByHex**(`inHexString`): `void`

**`Description`**

设置字体颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | usage:Hex颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2166

___

### setFontColorDecimal

▸ **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置字体颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | usage:字体R值，数据范围0~255 |
| `G` | `number` | usage:字体G值，数据范围0~255 |
| `B` | `number` | usage:字体B值，数据范围0~255 |
| `A` | `number` | usage:字体透明度，数据范围0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2160

___

### setNormalImageColorByHex

▸ **setNormalImageColorByHex**(`inHexString`): `void`

**`Description`**

设置正常颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2186

___

### setNormalImageColorDecimal

▸ **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置正常颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | usage:颜色R值，数据范围0~255 |
| `G` | `number` | usage:颜色G值，数据范围0~255 |
| `B` | `number` | usage:颜色B值，数据范围0~255 |
| `A` | `number` | usage:颜色透明度，数据范围0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2175

___

### setPressedImageColorByHex

▸ **setPressedImageColorByHex**(`inHexString`): `void`

**`Description`**

设置按下颜色,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2206

___

### setPressedImageColorDecimal

▸ **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置按下颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | usage:颜色R值，数据范围0~255 |
| `G` | `number` | usage:颜色G值，数据范围0~255 |
| `B` | `number` | usage:颜色B值，数据范围0~255 |
| `A` | `number` | usage:颜色透明度，数据范围0~255 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2195

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`StaleButton`](UI.UI.StaleButton.md)

**`Description`**

创建 StaleButton 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外Parent对象 default:null |
| `inName?` | `string` | usage:创建控件的名称 default:null |

#### Returns

[`StaleButton`](UI.UI.StaleButton.md)

返回创建的对象

#### Defined in

UI/index.d.ts:1723
