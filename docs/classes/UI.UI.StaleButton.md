[UI](../modules/UI.UI.md) / StaleButton

# StaleButton <Badge type="tip" text="Class" />

**`Description`**

按钮

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`StaleButton`**

## Table of contents

| Accessors                                                                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[autoSizeEnable](UI.UI.StaleButton.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小                                                                |
| **[cachedGeometry](UI.UI.StaleButton.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的 GetTickSpaceGeometry                             |
| **[clickMethod](UI.UI.StaleButton.md#clickmethod)**([`ButtonClickMethod`](../enums/UI.UI.ButtonClickMethod.md)): `void` <br> 设置点击模式                       |
| **[constraints](UI.UI.StaleButton.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局                   |
| **[contentColor](UI.UI.StaleButton.md#contentcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 设置字体内容颜色                                        |
| **[desiredSize](UI.UI.StaleButton.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小                                                      |
| **[disableImageColor](UI.UI.StaleButton.md#disableimagecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取禁用图片颜色                              |
| **[disableImageDrawType](UI.UI.StaleButton.md#disableimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) <br> 获取禁用图片绘制类型 |
| **[disableImageGuid](UI.UI.StaleButton.md#disableimageguid)**(): `string` <br> 获取禁用图片 ID                                                                  |
| **[disableImageMargin](UI.UI.StaleButton.md#disableimagemargin)**(): [`Margin`](UI.UI.Margin.md) <br> 获取禁用图片边距                                          |
| **[disableImageSize](UI.UI.StaleButton.md#disableimagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取禁用图片大小                                        |
| **[enable](UI.UI.StaleButton.md#enable)**(): `boolean` <br> 是否可用                                                                                            |
| **[focusable](UI.UI.StaleButton.md#focusable)**(): `boolean` <br> 获取是否获取输入焦点                                                                          |
| **[fontColor](UI.UI.StaleButton.md#fontcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取字体颜色                                                  |
| **[fontLetterSpace](UI.UI.StaleButton.md#fontletterspace)**(): `number` <br> 获取字体间距                                                                       |
| **[fontSize](UI.UI.StaleButton.md#fontsize)**(): `number` <br> 获取字体大小                                                                                     |
| **[glyph](UI.UI.StaleButton.md#glyph)**(): [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) <br> 获取字体字形                                                     |
| **[guid](UI.UI.StaleButton.md#guid)**(): `string` <br> 获取控件 GUID                                                                                            |
| **[isHovered](UI.UI.StaleButton.md#ishovered)**(): `boolean` <br> 是否是 hovered                                                                                |
| **[name](UI.UI.StaleButton.md#name)**(): `string` <br> 获取名字                                                                                                 |
| **[normalImageColor](UI.UI.StaleButton.md#normalimagecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取普通图片颜色                                |
| **[normalImageDrawType](UI.UI.StaleButton.md#normalimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) <br> 获取普通图片绘制类型   |
| **[normalImageGuid](UI.UI.StaleButton.md#normalimageguid)**(): `string` <br> 获取普通图片 ID                                                                    |
| **[normalImageMargin](UI.UI.StaleButton.md#normalimagemargin)**(): [`Margin`](UI.UI.Margin.md) <br> 获取普通图片边距                                            |
| **[normalImageSize](UI.UI.StaleButton.md#normalimagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取图片大小                                              |
| **[onClicked](UI.UI.StaleButton.md#onclicked)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 点击事件                           |
| **[onHovered](UI.UI.StaleButton.md#onhovered)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 悬浮事件                           |
| **[onPressed](UI.UI.StaleButton.md#onpressed)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 按下事件                           |
| **[onReleased](UI.UI.StaleButton.md#onreleased)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 释放事件                         |
| **[onUnhovered](UI.UI.StaleButton.md#onunhovered)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 未悬浮事件                     |
| **[outlineColor](UI.UI.StaleButton.md#outlinecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取字体描边颜色                                        |
| **[outlineSize](UI.UI.StaleButton.md#outlinesize)**(): `number` <br> 获取字体描边宽度                                                                           |
| **[paintSpaceGeometry](UI.UI.StaleButton.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染 Widget 的几何信息                |
| **[parent](UI.UI.StaleButton.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点                                                                        |
| **[position](UI.UI.StaleButton.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置                                             |
| **[pressMethod](UI.UI.StaleButton.md#pressmethod)**([`ButtonPressMethod`](../enums/UI.UI.ButtonPressMethod.md)): `void` <br> 设置按压模式                       |
| **[pressedImagColor](UI.UI.StaleButton.md#pressedimagcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取按压图片颜色                                |
| **[pressedImageDrawType](UI.UI.StaleButton.md#pressedimagedrawtype)**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) <br> 获取按压图片绘制类型 |
| **[pressedImageGuid](UI.UI.StaleButton.md#pressedimageguid)**(): `string` <br> 获取按下图片 ID                                                                  |
| **[pressedImageMargin](UI.UI.StaleButton.md#pressedimagemargin)**(): [`Margin`](UI.UI.Margin.md) <br> 获取按压图片边距                                          |
| **[pressedImageSize](UI.UI.StaleButton.md#pressedimagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取按压图片大小                                        |
| **[renderOpacity](UI.UI.StaleButton.md#renderopacity)**(): `number` <br> 获取渲染透明度                                                                         |
| **[renderScale](UI.UI.StaleButton.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放                                                      |
| **[renderShear](UI.UI.StaleButton.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变                                                  |
| **[renderTransformAngle](UI.UI.StaleButton.md#rendertransformangle)**(): `number` <br> 获取渲染的角度                                                           |
| **[renderTransformPivot](UI.UI.StaleButton.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点                                    |
| **[shadowColor](UI.UI.StaleButton.md#shadowcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取字体阴影颜色                                          |
| **[shadowOffset](UI.UI.StaleButton.md#shadowoffset)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取字体阴影偏移                                                |
| **[size](UI.UI.StaleButton.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小                                                                        |
| **[slot](UI.UI.StaleButton.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息          |
| **[strikethroughEnable](UI.UI.StaleButton.md#strikethroughenable)**(): `boolean` <br> 获取是否开启字体删除线                                                    |
| **[text](UI.UI.StaleButton.md#text)**(): `string` <br> 获取按钮文字                                                                                             |
| **[textAlign](UI.UI.StaleButton.md#textalign)**(): [`TextJustify`](../enums/UI.UI.TextJustify.md) <br> 获取字体对齐方式                                         |
| **[textVerticalAlign](UI.UI.StaleButton.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/UI.UI.TextVerticalJustify.md) <br> 获取字体垂直对齐方式     |
| **[tickSpaceGeometry](UI.UI.StaleButton.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动 Widget Tick 的几何信息             |
| **[touchMethod](UI.UI.StaleButton.md#touchmethod)**([`ButtonTouchMethod`](../enums/UI.UI.ButtonTouchMethod.md)): `void` <br> 设置触摸模式                       |
| **[transform](UI.UI.StaleButton.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置                                 |
| **[transitionEnable](UI.UI.StaleButton.md#transitionenable)**(): `boolean` <br> 获取按钮是否启用过度模式,按下是否有效果                                         |
| **[underlineEnable](UI.UI.StaleButton.md#underlineenable)**(): `boolean` <br> 返回是否开启字体下划线                                                            |
| **[visibility](UI.UI.StaleButton.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性                                     |
| **[visible](UI.UI.StaleButton.md#visible)**(): `boolean` <br> 是否可见                                                                                          |
| **[zOrder](UI.UI.StaleButton.md#zorder)**(): `number` <br> 获取 zorder                                                                                          |

| Methods                                                                                                                                                                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[destroyObject](UI.UI.StaleButton.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用                                                                                                                |
| **[equal](UI.UI.StaleButton.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象                                                                                                         |
| **[invalidateLayoutAndVolatility](UI.UI.StaleButton.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算                                                                               |
| **[isPressed](UI.UI.StaleButton.md#ispressed)**(): `boolean` <br> 是否按下                                                                                                                                        |
| **[setDisableImageColorByHex](UI.UI.StaleButton.md#setdisableimagecolorbyhex)**(`string`): `void` <br> 设置不可用颜色,指定 Hex 的颜色文本设定颜色 #05050505                                                       |
| **[setDisableImageColorDecimal](UI.UI.StaleButton.md#setdisableimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置不可用颜色,指定 R、G、B、A 设置颜色 0 ~255                           |
| **[setFontColorByHex](UI.UI.StaleButton.md#setfontcolorbyhex)**(`string`): `void` <br> 设置字体颜色,指定 Hex 的颜色文本设定颜色 #05050505                                                                         |
| **[setFontColorDecimal](UI.UI.StaleButton.md#setfontcolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置字体颜色,指定 R、G、B、A 设置颜色 0 ~255                                             |
| **[setNormalImageColorByHex](UI.UI.StaleButton.md#setnormalimagecolorbyhex)**(`string`): `void` <br> 设置正常颜色,指定 Hex 的颜色文本设定颜色 #05050505                                                           |
| **[setNormalImageColorDecimal](UI.UI.StaleButton.md#setnormalimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置正常颜色,指定 R、G、B、A 设置颜色 0 ~255                               |
| **[setPressedImageColorByHex](UI.UI.StaleButton.md#setpressedimagecolorbyhex)**(`string`): `void` <br> 设置按下颜色,指定 Hex 的颜色文本设定颜色 #05050505                                                         |
| **[setPressedImageColorDecimal](UI.UI.StaleButton.md#setpressedimagecolordecimal)**(`number`, `number`, `number`, `number`): `void` <br> 设置按下颜色,指定 R、G、B、A 设置颜色 0 ~255                             |
| **[newObject](UI.UI.StaleButton.md#newobject)**([`Canvas`](UI.UI.Canvas.md), `string`): [`StaleButton`](UI.UI.StaleButton.md) <br> 创建 StaleButton 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁 |

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

### clickMethod

• `set` **clickMethod**(`inClickMethod`): `void`

**`Description`**

设置点击模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                                       | Description |
| :-------------- | :--------------------------------------------------------- | :---------- |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.UI.ButtonClickMethod.md) | 点击模式    |

#### Returns

`void`

点击模式选择

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

设置字体内容颜色

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

### disableImageColor

• `get` **disableImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

禁用图片颜色，Type.LinearColor 类型，数据范围 0~1

• `set` **disableImageColor**(`inColor`): `void`

**`Description`**

设置禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                     |
| :-------- | :---------------------------------------- | :---------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 输入的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **disableImageDrawType**(`inDrawType`): `void`

**`Description`**

设置禁用图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | void        |

#### Returns

`void`

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

• `set` **disableImageGuid**(`inGuid`): `void`

**`Description`**

设置不可用图片 ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inGuid` | `string` | 图片 id     |

#### Returns

`void`

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

• `set` **disableImageMargin**(`inMargin`): `void`

**`Description`**

设置禁用图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description |
| :--------- | :-------------------------- | :---------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | 边距        |

#### Returns

`void`

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

• `set` **disableImageSize**(`inSize`): `void`

**`Description`**

设置禁用图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 大小        |

#### Returns

`void`

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

### focusable

• `get` **focusable**(): `boolean`

**`Description`**

获取是否获取输入焦点

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否获取输入焦点

• `set` **focusable**(`inFocus`): `void`

**`Description`**

设置是否获取输入焦点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type      | Description      |
| :-------- | :-------- | :--------------- |
| `inFocus` | `boolean` | 是否获取输入焦点 |

#### Returns

`void`

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

• `set` **fontColor**(`inColor`): `void`

**`Description`**

设置字体颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                   |
| :-------- | :---------------------------------------- | :-------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 字体颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **fontLetterSpace**(`fontLetterSpace`): `void`

**`Description`**

设置字体间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type     | Description |
| :---------------- | :------- | :---------- |
| `fontLetterSpace` | `number` | 间距        |

#### Returns

`void`

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

• `set` **fontSize**(`FontSize`): `void`

**`Description`**

设置字体大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description |
| :--------- | :------- | :---------- |
| `FontSize` | `number` | 大小        |

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
| `inGlyph` | [`UIFontGlyph`](../enums/UI.UI.UIFontGlyph.md) | 字体字形的类型 |

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

### normalImageColor

• `get` **normalImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取普通图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

普通图片颜色，Type.LinearColor 类型，数据范围 0~1

• `set` **normalImageColor**(`inColor`): `void`

**`Description`**

设置普通图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                       |
| :-------- | :---------------------------------------- | :------------------------------------------------ |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 普通图片颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **normalImageDrawType**(`inDrawType`): `void`

**`Description`**

设置普通图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | 绘制类型    |

#### Returns

`void`

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

• `set` **normalImageGuid**(`inGuid`): `void`

**`Description`**

设置正常图片 ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inGuid` | `string` | 图片 id     |

#### Returns

`void`

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

• `set` **normalImageMargin**(`inMargin`): `void`

**`Description`**

设置普通图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description  |
| :--------- | :-------------------------- | :----------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | 普通图片边距 |

#### Returns

`void`

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

• `set` **normalImageSize**(`inSize`): `void`

**`Description`**

设置图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description                                         |
| :------- | :-------------------------------- | :-------------------------------------------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 设置的图片大小，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **outlineColor**(`inOutlineColor`): `void`

**`Description`**

设置字体描边颜色

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
| `inOutlineSize` | `number` | 设置的大小  |

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

### pressMethod

• `set` **pressMethod**(`inPressMethod`): `void`

**`Description`**

设置按压模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                                       | Description |
| :-------------- | :--------------------------------------------------------- | :---------- |
| `inPressMethod` | [`ButtonPressMethod`](../enums/UI.UI.ButtonPressMethod.md) | 按压模式    |

#### Returns

`void`

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

• `set` **pressedImagColor**(`inColor`): `void`

**`Description`**

设置按压图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                     |
| :-------- | :---------------------------------------- | :---------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 按压的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

• `set` **pressedImageDrawType**(`inDrawTYpe`): `void`

**`Description`**

设置按压图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | 绘制类型    |

#### Returns

`void`

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

• `set` **pressedImageGuid**(`inGuid`): `void`

**`Description`**

设置按下图片 ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inGuid` | `string` | 图片 id     |

#### Returns

`void`

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

• `set` **pressedImageMargin**(`inMargin`): `void`

**`Description`**

设置按压图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description |
| :--------- | :-------------------------- | :---------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | 边距        |

#### Returns

`void`

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

• `set` **pressedImageSize**(`inSize`): `void`

**`Description`**

设置按压图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | size        |

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

设置字体阴影颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                      | Description                                     |
| :-------------- | :---------------------------------------- | :---------------------------------------------- |
| `inShadowColor` | [`LinearColor`](Type.Type.LinearColor.md) | 输入的颜色，Type.LinearColor 类型，数据范围 0~1 |

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

设置字体阴影偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `inOffset` | [`Vector2`](Type.Type.Vector2.md) | 阴影偏移量  |

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
| `inEnableStrikethrough` | `boolean` | 是否开启    |

#### Returns

`void`

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

• `set` **text**(`InString`): `void`

**`Description`**

设置按钮文字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description |
| :--------- | :------- | :---------- |
| `InString` | `string` | 文字        |

#### Returns

`void`

新文本

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

• `set` **textAlign**(`InTextJustify`): `void`

**`Description`**

设置字体对齐方式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                           | Description    |
| :-------------- | :--------------------------------------------- | :------------- |
| `InTextJustify` | [`TextJustify`](../enums/UI.UI.TextJustify.md) | 对齐方式的枚举 |

#### Returns

`void`

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

### touchMethod

• `set` **touchMethod**(`inTouchMethod`): `void`

**`Description`**

设置触摸模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                                       | Description    |
| :-------------- | :--------------------------------------------------------- | :------------- |
| `inTouchMethod` | [`ButtonTouchMethod`](../enums/UI.UI.ButtonTouchMethod.md) | Touch 模式选择 |

#### Returns

`void`

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

### transitionEnable

• `get` **transitionEnable**(): `boolean`

**`Description`**

获取按钮是否启用过度模式,按下是否有效果

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

按钮是否启用过度模式

• `set` **transitionEnable**(`inBoolean`): `void`

**`Description`**

是否套用不同的按下方案

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type      | Description            |
| :---------- | :-------- | :--------------------- |
| `inBoolean` | `boolean` | 是否套用不同的按下方案 |

#### Returns

`void`

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

• `set` **underlineEnable**(`inEnableUnderline`): `void`

**`Description`**

设置是否开启字体下划线

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                | Type      | Description        |
| :------------------ | :-------- | :----------------- |
| `inEnableUnderline` | `boolean` | 设置是否开启下划线 |

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

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

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

---

### setDisableImageColorByHex

▸ **setDisableImageColorByHex**(`inHexString`): `void`

**`Description`**

设置不可用颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description |
| :------------ | :------- | :---------- |
| `inHexString` | `string` | 颜色字符串  |

#### Returns

`void`

---

### setDisableImageColorDecimal

▸ **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置不可用颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                |
| :--- | :------- | :------------------------- |
| `R`  | `number` | 颜色 R 值，数据范围 0~255  |
| `G`  | `number` | 颜色 G 值，数据范围 0~255  |
| `B`  | `number` | 颜色 B 值，数据范围 0~255  |
| `A`  | `number` | 颜色透明度，数据范围 0~255 |

#### Returns

`void`

---

### setFontColorByHex

▸ **setFontColorByHex**(`inHexString`): `void`

**`Description`**

设置字体颜色,指定 Hex 的颜色文本设定颜色 #05050505

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

设置字体颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                |
| :--- | :------- | :------------------------- |
| `R`  | `number` | 字体 R 值，数据范围 0~255  |
| `G`  | `number` | 字体 G 值，数据范围 0~255  |
| `B`  | `number` | 字体 B 值，数据范围 0~255  |
| `A`  | `number` | 字体透明度，数据范围 0~255 |

#### Returns

`void`

---

### setNormalImageColorByHex

▸ **setNormalImageColorByHex**(`inHexString`): `void`

**`Description`**

设置正常颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description |
| :------------ | :------- | :---------- |
| `inHexString` | `string` | 颜色字符串  |

#### Returns

`void`

---

### setNormalImageColorDecimal

▸ **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置正常颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                |
| :--- | :------- | :------------------------- |
| `R`  | `number` | 颜色 R 值，数据范围 0~255  |
| `G`  | `number` | 颜色 G 值，数据范围 0~255  |
| `B`  | `number` | 颜色 B 值，数据范围 0~255  |
| `A`  | `number` | 颜色透明度，数据范围 0~255 |

#### Returns

`void`

---

### setPressedImageColorByHex

▸ **setPressedImageColorByHex**(`inHexString`): `void`

**`Description`**

设置按下颜色,指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description |
| :------------ | :------- | :---------- |
| `inHexString` | `string` | 颜色字符串  |

#### Returns

`void`

---

### setPressedImageColorDecimal

▸ **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置按下颜色,指定 R、G、B、A 设置颜色 0 ~255

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description                |
| :--- | :------- | :------------------------- |
| `R`  | `number` | 颜色 R 值，数据范围 0~255  |
| `G`  | `number` | 颜色 G 值，数据范围 0~255  |
| `B`  | `number` | 颜色 B 值，数据范围 0~255  |
| `A`  | `number` | 颜色透明度，数据范围 0~255 |

#### Returns

`void`

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`StaleButton`](UI.UI.StaleButton.md)

**`Description`**

创建 StaleButton 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                           |
| :-------- | :-------------------------- | :------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的外 Parent 对象 default:null |
| `inName?` | `string`                    | 创建控件的名称 default:null           |

#### Returns

[`StaleButton`](UI.UI.StaleButton.md)

返回创建的对象
