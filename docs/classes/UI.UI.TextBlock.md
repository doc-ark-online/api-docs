[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / TextBlock

# Class: TextBlock

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).TextBlock

**`Author`**

jie.wu

**`Description`**

UI 文本

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`TextBlock`**

## Table of contents

### Constructors

- [constructor](UI.UI.TextBlock.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.TextBlock.md#autosizeenable)
- [cachedGeometry](UI.UI.TextBlock.md#cachedgeometry)
- [constraints](UI.UI.TextBlock.md#constraints)
- [contentColor](UI.UI.TextBlock.md#contentcolor)
- [desiredSize](UI.UI.TextBlock.md#desiredsize)
- [enable](UI.UI.TextBlock.md#enable)
- [fontColor](UI.UI.TextBlock.md#fontcolor)
- [fontLetterSpace](UI.UI.TextBlock.md#fontletterspace)
- [fontLitterSpace](UI.UI.TextBlock.md#fontlitterspace)
- [fontSize](UI.UI.TextBlock.md#fontsize)
- [glyph](UI.UI.TextBlock.md#glyph)
- [guid](UI.UI.TextBlock.md#guid)
- [isHovered](UI.UI.TextBlock.md#ishovered)
- [lineHeightPercentage](UI.UI.TextBlock.md#lineheightpercentage)
- [name](UI.UI.TextBlock.md#name)
- [outlineColor](UI.UI.TextBlock.md#outlinecolor)
- [outlineSize](UI.UI.TextBlock.md#outlinesize)
- [paintSpaceGeometry](UI.UI.TextBlock.md#paintspacegeometry)
- [parent](UI.UI.TextBlock.md#parent)
- [position](UI.UI.TextBlock.md#position)
- [renderOpacity](UI.UI.TextBlock.md#renderopacity)
- [renderScale](UI.UI.TextBlock.md#renderscale)
- [renderShear](UI.UI.TextBlock.md#rendershear)
- [renderTransformAngle](UI.UI.TextBlock.md#rendertransformangle)
- [renderTransformPivot](UI.UI.TextBlock.md#rendertransformpivot)
- [shadowColor](UI.UI.TextBlock.md#shadowcolor)
- [shadowOffset](UI.UI.TextBlock.md#shadowoffset)
- [size](UI.UI.TextBlock.md#size)
- [slot](UI.UI.TextBlock.md#slot)
- [strikethroughEnable](UI.UI.TextBlock.md#strikethroughenable)
- [text](UI.UI.TextBlock.md#text)
- [textAlign](UI.UI.TextBlock.md#textalign)
- [textHeight](UI.UI.TextBlock.md#textheight)
- [textHorizontalLayout](UI.UI.TextBlock.md#texthorizontallayout)
- [textJustification](UI.UI.TextBlock.md#textjustification)
- [textSingleHeight](UI.UI.TextBlock.md#textsingleheight)
- [textVerticalAlign](UI.UI.TextBlock.md#textverticalalign)
- [textVerticalJustification](UI.UI.TextBlock.md#textverticaljustification)
- [tickSpaceGeometry](UI.UI.TextBlock.md#tickspacegeometry)
- [transform](UI.UI.TextBlock.md#transform)
- [underlineEnable](UI.UI.TextBlock.md#underlineenable)
- [visibility](UI.UI.TextBlock.md#visibility)
- [visible](UI.UI.TextBlock.md#visible)
- [zOrder](UI.UI.TextBlock.md#zorder)

### Methods

- [destroyObject](UI.UI.TextBlock.md#destroyobject)
- [equal](UI.UI.TextBlock.md#equal)
- [invalidateLayoutAndVolatility](UI.UI.TextBlock.md#invalidatelayoutandvolatility)
- [setFontColorByHex](UI.UI.TextBlock.md#setfontcolorbyhex)
- [setFontColorDecimal](UI.UI.TextBlock.md#setfontcolordecimal)
- [setOutlineColorByHex](UI.UI.TextBlock.md#setoutlinecolorbyhex)
- [setOutlineColorDecimal](UI.UI.TextBlock.md#setoutlinecolordecimal)
- [setShadowColorByHex](UI.UI.TextBlock.md#setshadowcolorbyhex)
- [setShadowColorDecimal](UI.UI.TextBlock.md#setshadowcolordecimal)
- [newObject](UI.UI.TextBlock.md#newobject)

## Constructors

### constructor

• **new TextBlock**()

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

UI/index.d.ts:2348

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                      | Description                                          |
| :--------------- | :---------------------------------------- | :--------------------------------------------------- |
| `inContentColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 内容颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2342

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

UI/index.d.ts:2445

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置字体颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                             |
| :-------- | :---------------------------------------- | :------------------------------------------------------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:字体的颜色值，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2439

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

UI/index.d.ts:2529

---

### fontLitterSpace

• `get` **fontLitterSpace**(): `number`

**`Description`**

获取字体间距

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回字体间距

#### Defined in

UI/index.d.ts:2535

---

### fontSize

• `get` **fontSize**(): `number`

**`Description`**

获取字体大小

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回字体的大小

#### Defined in

UI/index.d.ts:2523

• `set` **fontSize**(`InSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description    |
| :------- | :------- | :------------- |
| `InSize` | `number` | usage:字体大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2517

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

UI/index.d.ts:2312

• `set` **glyph**(`inGlyph`): `void`

**`Description`**

设置字体字形

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                           | Description |
| :-------- | :--------------------------------------------- | :---------- |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) | usage: 字形 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2306

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

### lineHeightPercentage

• `get` **lineHeightPercentage**(): `number`

**`Description`**

获取行高系数

**`Effect`**

只在客户端调用生效

#### Returns

`number`

行高系数

#### Defined in

UI/index.d.ts:2433

• `set` **lineHeightPercentage**(`inValue`): `void`

**`Description`**

设置行高系数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `inValue` | `number` | usage:系数  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2427

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

UI/index.d.ts:2409

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

设置字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                      | Description                                          |
| :--------------- | :---------------------------------------- | :--------------------------------------------------- |
| `inOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 描边颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

字体描边颜色

#### Defined in

UI/index.d.ts:2403

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

UI/index.d.ts:2421

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

UI/index.d.ts:2415

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

设置字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

阴影颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:2360

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

获取字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                      | Description                                         |
| :-------------- | :---------------------------------------- | :-------------------------------------------------- |
| `inShadowColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:阴影颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2354

---

### shadowOffset

• `get` **shadowOffset**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

字体阴影颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:2372

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

UI/index.d.ts:2366

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

UI/index.d.ts:2324

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

UI/index.d.ts:2318

---

### text

• `get` **text**(): `string`

**`Description`**

获取当前的文本内容

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回当前的文本内容

#### Defined in

UI/index.d.ts:2547

• `set` **text**(`inText`): `void`

**`Description`**

设置文本内容

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description    |
| :------- | :------- | :------------- |
| `inText` | `string` | usage:文本内容 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2541

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

UI/index.d.ts:2384

• `set` **textAlign**(`inTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                           | Description          |
| :-------------- | :--------------------------------------------- | :------------------- |
| `inTextJustify` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | usage:对齐方式的枚举 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2378

---

### textHeight

• `get` **textHeight**(): `number`

**`Description`**

获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)

**`Effect`**

只在客户端调用生效，控件初始化完成后调用才准确生效，需要等待控件渲染完成

#### Returns

`number`

文本高度

#### Defined in

UI/index.d.ts:2568

---

### textHorizontalLayout

• `get` **textHorizontalLayout**(): [`UITextHorizontalLayout`](../enums/UI.UI.UITextHorizontalLayout.md)

**`Description`**

获取当前字体的水平显示方式

**`Effect`**

只在客户端调用生效

#### Returns

[`UITextHorizontalLayout`](../enums/UI.UI.UITextHorizontalLayout.md)

返回字体的水平显示方式

#### Defined in

UI/index.d.ts:2505

• `set` **textHorizontalLayout**(`inTextHorizontalLayout`): `void`

**`Description`**

设置字体的水平显示方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                     | Type                                                                 | Description        |
| :----------------------- | :------------------------------------------------------------------- | :----------------- |
| `inTextHorizontalLayout` | [`UITextHorizontalLayout`](../enums/UI.UI.UITextHorizontalLayout.md) | usage:水平显示方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2511

---

### textJustification

• `get` **textJustification**(): [`TextJustify`](../enums/UI.UI.TextJustify.md)

**`Description`**

获取字体的对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextJustify`](../enums/UI.UI.TextJustify.md)

返回字体的对齐方式

#### Defined in

UI/index.d.ts:2481

• `set` **textJustification**(`inTextJustification`): `void`

**`Description`**

设置字体的对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                  | Type                                           | Description        |
| :-------------------- | :--------------------------------------------- | :----------------- |
| `inTextJustification` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | usage:新的对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2487

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

UI/index.d.ts:2574

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

UI/index.d.ts:2396

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void`

**`Description`**

设置字体垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                    | Type                                                           | Description         |
| :---------------------- | :------------------------------------------------------------- | :------------------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) | usage: 垂直对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2390

---

### textVerticalJustification

• `get` **textVerticalJustification**(): [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md)

**`Description`**

获取字体的垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md)

返回字体的垂直对齐方式

#### Defined in

UI/index.d.ts:2493

• `set` **textVerticalJustification**(`inTextJustification`): `void`

**`Description`**

设置字体的垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                  | Type                                                           | Description        |
| :-------------------- | :------------------------------------------------------------- | :----------------- |
| `inTextJustification` | [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) | usage:垂直对齐方式 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2499

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

返回是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

获取是否开启字体下划线

#### Defined in

UI/index.d.ts:2336

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

UI/index.d.ts:2330

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

UI/index.d.ts:2460

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

UI/index.d.ts:2454

---

### setOutlineColorByHex

▸ **setOutlineColorByHex**(`inHexString`): `void`

**`Description`**

设置当前的描边颜色，指定描边颜色设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description            |
| :------------ | :------- | :--------------------- |
| `inHexString` | `string` | usage:十六进制的字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2562

---

### setOutlineColorDecimal

▸ **setOutlineColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置当前的描边颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                           |
| :--- | :------- | :------------------------------------ |
| `R`  | `number` | usage:颜色 R 通道的值，数据范围 0~255 |
| `G`  | `number` | usage:颜色 G 通道的值，数据范围 0~255 |
| `B`  | `number` | usage:颜色 B 通道的值，数据范围 0~255 |
| `A`  | `number` | usage:透明度，数据范围 0~255          |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2556

---

### setShadowColorByHex

▸ **setShadowColorByHex**(`inHexString`): `void`

**`Description`**

设置字体的阴影颜色,Shadow Offset 必须设值才能看到效果,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description |
| :------------ | :------- | :---------- |
| `inHexString` | `string` | usage:颜色  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2475

---

### setShadowColorDecimal

▸ **setShadowColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置字体的阴影颜色,Shadow Offset 必须设值才能看到效果, 指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                           |
| :--- | :------- | :------------------------------------ |
| `R`  | `number` | usage:颜色 R 通道的值，数据范围 0~255 |
| `G`  | `number` | usage:颜色 G 通道的值，数据范围 0~255 |
| `B`  | `number` | usage:颜色 B 通道的值，数据范围 0~255 |
| `A`  | `number` | usage:透明度，数据范围 0~255          |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2469

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`TextBlock`](UI.UI.TextBlock.md)

**`Description`**

创建 TextBlock 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                 |
| :-------- | :-------------------------- | :------------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外 parent 对象 default:null |
| `inName?` | `string`                    | usage:创建控件的名称 default:null           |

#### Returns

[`TextBlock`](UI.UI.TextBlock.md)

返回创建的对象

#### Defined in

UI/index.d.ts:2300
