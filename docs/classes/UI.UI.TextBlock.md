[UI](../modules/UI.UI.md) / TextBlock

# TextBlock <Badge type="tip" text="Class" />

**`Description`**

UI文本

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`TextBlock`**

## Table of contents

| Accessors |
| :-----|
| **[autoSizeEnable](UI.UI.TextBlock.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小|
| **[cachedGeometry](UI.UI.TextBlock.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的GetTickSpaceGeometry|
| **[constraints](UI.UI.TextBlock.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局|
| **[contentColor](UI.UI.TextBlock.md#contentcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 设置字体内容颜色|
| **[desiredSize](UI.UI.TextBlock.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小|
| **[enable](UI.UI.TextBlock.md#enable)**(): `boolean` <br> 是否可用|
| **[fontColor](UI.UI.TextBlock.md#fontcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取字体颜色|
| **[fontLetterSpace](UI.UI.TextBlock.md#fontletterspace)**(`number`): `void` <br> 设置字体间距|
| **[fontLitterSpace](UI.UI.TextBlock.md#fontlitterspace)**(): `number` <br> 获取字体间距|
| **[fontSize](UI.UI.TextBlock.md#fontsize)**(): `number` <br> 获取字体大小|
| **[glyph](UI.UI.TextBlock.md#glyph)**(): [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) <br> 获取字体字形|
| **[guid](UI.UI.TextBlock.md#guid)**(): `string` <br> 获取控件GUID|
| **[isHovered](UI.UI.TextBlock.md#ishovered)**(): `boolean` <br> 是否是hovered|
| **[lineHeightPercentage](UI.UI.TextBlock.md#lineheightpercentage)**(): `number` <br> 获取行高系数|
| **[name](UI.UI.TextBlock.md#name)**(): `string` <br> 获取名字|
| **[outlineColor](UI.UI.TextBlock.md#outlinecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取字体描边颜色|
| **[outlineSize](UI.UI.TextBlock.md#outlinesize)**(): `number` <br> 获取字体描边宽度|
| **[paintSpaceGeometry](UI.UI.TextBlock.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染Widget的几何信息|
| **[parent](UI.UI.TextBlock.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点|
| **[position](UI.UI.TextBlock.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置|
| **[renderOpacity](UI.UI.TextBlock.md#renderopacity)**(): `number` <br> 获取渲染透明度|
| **[renderScale](UI.UI.TextBlock.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放|
| **[renderShear](UI.UI.TextBlock.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变|
| **[renderTransformAngle](UI.UI.TextBlock.md#rendertransformangle)**(): `number` <br> 获取渲染的角度|
| **[renderTransformPivot](UI.UI.TextBlock.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点|
| **[shadowColor](UI.UI.TextBlock.md#shadowcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 设置字体阴影颜色|
| **[shadowOffset](UI.UI.TextBlock.md#shadowoffset)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取字体阴影颜色|
| **[size](UI.UI.TextBlock.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小|
| **[slot](UI.UI.TextBlock.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[strikethroughEnable](UI.UI.TextBlock.md#strikethroughenable)**(): `boolean` <br> 获取是否开启字体删除线|
| **[text](UI.UI.TextBlock.md#text)**(): `string` <br> 获取当前的文本内容|
| **[textAlign](UI.UI.TextBlock.md#textalign)**(): [`TextJustify`](../enums/UI.UI.TextJustify.md) <br> 获取字体对齐方式|
| **[textHeight](UI.UI.TextBlock.md#textheight)**(): `number` <br> 获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)|
| **[textHorizontalLayout](UI.UI.TextBlock.md#texthorizontallayout)**(): [`UITextHorizontalLayout`](../enums/UI.UI.UITextHorizontalLayout.md) <br> 获取当前字体的水平显示方式|
| **[textJustification](UI.UI.TextBlock.md#textjustification)**(): [`TextJustify`](../enums/UI.UI.TextJustify.md) <br> 获取字体的对齐方式|
| **[textSingleHeight](UI.UI.TextBlock.md#textsingleheight)**(): `number` <br> 获取文本单行高度(文本单行的高度，与组件大小无关，受字体属性影响)|
| **[textVerticalAlign](UI.UI.TextBlock.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) <br> 获取字体垂直对齐方式|
| **[textVerticalJustification](UI.UI.TextBlock.md#textverticaljustification)**(): [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) <br> 获取字体的垂直对齐方式|
| **[tickSpaceGeometry](UI.UI.TextBlock.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.UI.TextBlock.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[underlineEnable](UI.UI.TextBlock.md#underlineenable)**(): `boolean` <br> 返回是否开启字体下划线|
| **[visibility](UI.UI.TextBlock.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.UI.TextBlock.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.UI.TextBlock.md#zorder)**(): `number` <br> 获取zorder|

| Methods |
| :-----|
| **[destroyObject](UI.UI.TextBlock.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.UI.TextBlock.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.UI.TextBlock.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[setFontColorByHex](UI.UI.TextBlock.md#setfontcolorbyhex)**(`string`): `void` <br> 设置字体颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setFontColorDecimal](UI.UI.TextBlock.md#setfontcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置字体颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setOutlineColorByHex](UI.UI.TextBlock.md#setoutlinecolorbyhex)**(`string`): `void` <br> 设置当前的描边颜色，指定描边颜色设定颜色 #05050505|
| **[setOutlineColorDecimal](UI.UI.TextBlock.md#setoutlinecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置当前的描边颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setShadowColorByHex](UI.UI.TextBlock.md#setshadowcolorbyhex)**(`string`): `void` <br> 设置字体的阴影颜色,Shadow Offset必须设值才能看到效果,指定Hex的颜色文本设定颜色 #05050505|
| **[setShadowColorDecimal](UI.UI.TextBlock.md#setshadowcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置字体的阴影颜色,Shadow Offset必须设值才能看到效果, 指定R、G、B、A设置颜色 0 ~255|
| **[newObject](UI.UI.TextBlock.md#newobject)**([`Canvas`](UI.UI.Canvas.md), `string`): [`TextBlock`](UI.UI.TextBlock.md) <br> 创建 TextBlock 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoSize` | `boolean` | 是否自动设置大小 |

#### Returns

`void`

___

### cachedGeometry

• `get` **cachedGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取上一次的GetTickSpaceGeometry

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回上一次的 GetTickSpaceGeometry

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | 控件的布局 |

#### Returns

`void`

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

• `set` **contentColor**(`inContentColor`): `void`

**`Description`**

设置字体内容颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inContentColor` | [`LinearColor`](Type.Type.LinearColor.md) |  内容颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

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

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnable` | `boolean` | 可用性boolean |

#### Returns

`void`

返回设置结果

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

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置字体颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 字体的颜色值，Type.LinearColor类型，数据范围0~1 |

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

获取字体间距

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回字体间距

___

### fontSize

• `get` **fontSize**(): `number`

**`Description`**

获取字体大小

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回字体的大小

• `set` **fontSize**(`InSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InSize` | `number` | 字体大小 |

#### Returns

`void`

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

• `set` **glyph**(`inGlyph`): `void`

**`Description`**

设置字体字形

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) |  字形 |

#### Returns

`void`

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

___

### lineHeightPercentage

• `get` **lineHeightPercentage**(): `number`

**`Description`**

获取行高系数

**`Effect`**

只在客户端调用生效

#### Returns

`number`

行高系数

• `set` **lineHeightPercentage**(`inValue`): `void`

**`Description`**

设置行高系数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | `number` | 系数 |

#### Returns

`void`

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

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`void`

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

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

设置字体描边颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) |  描边颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

字体描边颜色

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
| `inOutlineSize` | `number` | 设置的大小 |

#### Returns

`void`

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

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | 控件的位置 |

#### Returns

`void`

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

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOpacity` | `number` | 透明度 |

#### Returns

`void`

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

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | 渲染缩放 |

#### Returns

`void`

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

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | 渲染错切形变 |

#### Returns

`void`

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

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `number` | 渲染角度 |

#### Returns

`void`

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

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | 渲染锚点 |

#### Returns

`void`

___

### shadowColor

• `get` **shadowColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

设置字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowColor**(`inShadowColor`): `void`

**`Description`**

获取字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inShadowColor` | [`LinearColor`](Type.Type.LinearColor.md) | 阴影颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### shadowOffset

• `get` **shadowOffset**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

字体阴影颜色，Type.LinearColor类型，数据范围0~1

• `set` **shadowOffset**(`inOffset`): `void`

**`Description`**

设置字体阴影偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOffset` | [`Vector2`](Type.Type.Vector2.md) | 阴影偏移量 |

#### Returns

`void`

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 输入大小 |

#### Returns

`void`

___

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

___

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
| `inEnableStrikethrough` | `boolean` | 是否开启 |

#### Returns

`void`

___

### text

• `get` **text**(): `string`

**`Description`**

获取当前的文本内容

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回当前的文本内容

• `set` **text**(`inText`): `void`

**`Description`**

设置文本内容

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inText` | `string` | 文本内容 |

#### Returns

`void`

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

• `set` **textAlign**(`inTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustify` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | 对齐方式的枚举 |

#### Returns

`void`

___

### textHeight

• `get` **textHeight**(): `number`

**`Description`**

获取文本的高度(文本内容整体的高度，与组件大小无关，受字体属性影响)

**`Effect`**

只在客户端调用生效，控件初始化完成后调用才准确生效，需要等待控件渲染完成

#### Returns

`number`

文本高度

___

### textHorizontalLayout

• `get` **textHorizontalLayout**(): [`UITextHorizontalLayout`](../enums/UI.UI.UITextHorizontalLayout.md)

**`Description`**

获取当前字体的水平显示方式

**`Effect`**

只在客户端调用生效

#### Returns

[`UITextHorizontalLayout`](../enums/UI.UI.UITextHorizontalLayout.md)

返回字体的水平显示方式

• `set` **textHorizontalLayout**(`inTextHorizontalLayout`): `void`

**`Description`**

设置字体的水平显示方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextHorizontalLayout` | [`UITextHorizontalLayout`](../enums/UI.UI.UITextHorizontalLayout.md) | 水平显示方式 |

#### Returns

`void`

___

### textJustification

• `get` **textJustification**(): [`TextJustify`](../enums/UI.UI.TextJustify.md)

**`Description`**

获取字体的对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextJustify`](../enums/UI.UI.TextJustify.md)

返回字体的对齐方式

• `set` **textJustification**(`inTextJustification`): `void`

**`Description`**

设置字体的对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustification` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | 新的对齐方式 |

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextVerticalJustify` | [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) |  垂直对齐方式 |

#### Returns

`void`

___

### textVerticalJustification

• `get` **textVerticalJustification**(): [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md)

**`Description`**

获取字体的垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Returns

[`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md)

返回字体的垂直对齐方式

• `set` **textVerticalJustification**(`inTextJustification`): `void`

**`Description`**

设置字体的垂直对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTextJustification` | [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) | 垂直对齐方式 |

#### Returns

`void`

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

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | 大小位置 |

#### Returns

`void`

___

### underlineEnable

• `get` **underlineEnable**(): `boolean`

**`Description`**

返回是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

获取是否开启字体下划线

• `set` **underlineEnable**(`inEnableUnderline`): `void`

**`Description`**

设置是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inEnableUnderline` | `boolean` | 设置是否开启下划线 |

#### Returns

`void`

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

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | 可见性 |

#### Returns

`void`

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

___

### zOrder

• `get` **zOrder**(): `number`

**`Description`**

获取zorder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zorder

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InZOrder` | `number` | 值越大在越上层 |

#### Returns

`void`

## Methods

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

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
| `that` | [`Widget`](UI.UI.Widget.md) | 需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

___

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

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
| `inHexString` | `string` | Hex颜色字符串 |

#### Returns

`void`

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
| `R` | `number` | 字体R值，数据范围0~255 |
| `G` | `number` | 字体G值，数据范围0~255 |
| `B` | `number` | 字体B值，数据范围0~255 |
| `A` | `number` | 字体透明度，数据范围0~255 |

#### Returns

`void`

___

### setOutlineColorByHex

▸ **setOutlineColorByHex**(`inHexString`): `void`

**`Description`**

设置当前的描边颜色，指定描边颜色设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 十六进制的字符串 |

#### Returns

`void`

___

### setOutlineColorDecimal

▸ **setOutlineColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置当前的描边颜色,指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R通道的值，数据范围0~255 |
| `G` | `number` | 颜色G通道的值，数据范围0~255 |
| `B` | `number` | 颜色B通道的值，数据范围0~255 |
| `A` | `number` | 透明度，数据范围0~255 |

#### Returns

`void`

___

### setShadowColorByHex

▸ **setShadowColorByHex**(`inHexString`): `void`

**`Description`**

设置字体的阴影颜色,Shadow Offset必须设值才能看到效果,指定Hex的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inHexString` | `string` | 颜色 |

#### Returns

`void`

___

### setShadowColorDecimal

▸ **setShadowColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置字体的阴影颜色,Shadow Offset必须设值才能看到效果, 指定R、G、B、A设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `number` | 颜色R通道的值，数据范围0~255 |
| `G` | `number` | 颜色G通道的值，数据范围0~255 |
| `B` | `number` | 颜色B通道的值，数据范围0~255 |
| `A` | `number` | 透明度，数据范围0~255 |

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`TextBlock`](UI.UI.TextBlock.md)

**`Description`**

创建 TextBlock 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`TextBlock`](UI.UI.TextBlock.md)

返回创建的对象
