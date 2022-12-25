[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / Button

# Class: Button

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).Button

**`Author`**

jianke.feng

**`Description`**

按钮,无默认 text

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`Button`**

## Table of contents

### Constructors

- [constructor](UI.UI.Button.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.Button.md#autosizeenable)
- [cachedGeometry](UI.UI.Button.md#cachedgeometry)
- [clickMethod](UI.UI.Button.md#clickmethod)
- [constraints](UI.UI.Button.md#constraints)
- [desiredSize](UI.UI.Button.md#desiredsize)
- [disableImageColor](UI.UI.Button.md#disableimagecolor)
- [disableImageDrawType](UI.UI.Button.md#disableimagedrawtype)
- [disableImageGuid](UI.UI.Button.md#disableimageguid)
- [disableImageMargin](UI.UI.Button.md#disableimagemargin)
- [disableImageSize](UI.UI.Button.md#disableimagesize)
- [enable](UI.UI.Button.md#enable)
- [focusable](UI.UI.Button.md#focusable)
- [guid](UI.UI.Button.md#guid)
- [isHovered](UI.UI.Button.md#ishovered)
- [name](UI.UI.Button.md#name)
- [normalImageColor](UI.UI.Button.md#normalimagecolor)
- [normalImageDrawType](UI.UI.Button.md#normalimagedrawtype)
- [normalImageGuid](UI.UI.Button.md#normalimageguid)
- [normalImageMargin](UI.UI.Button.md#normalimagemargin)
- [normalImageSize](UI.UI.Button.md#normalimagesize)
- [onClicked](UI.UI.Button.md#onclicked)
- [onHovered](UI.UI.Button.md#onhovered)
- [onPressed](UI.UI.Button.md#onpressed)
- [onReleased](UI.UI.Button.md#onreleased)
- [onUnhovered](UI.UI.Button.md#onunhovered)
- [paintSpaceGeometry](UI.UI.Button.md#paintspacegeometry)
- [parent](UI.UI.Button.md#parent)
- [position](UI.UI.Button.md#position)
- [pressedImageColor](UI.UI.Button.md#pressedimagecolor)
- [pressedImageDrawType](UI.UI.Button.md#pressedimagedrawtype)
- [pressedImageGuid](UI.UI.Button.md#pressedimageguid)
- [pressedImageMargin](UI.UI.Button.md#pressedimagemargin)
- [pressedImageSize](UI.UI.Button.md#pressedimagesize)
- [pressedMethod](UI.UI.Button.md#pressedmethod)
- [renderOpacity](UI.UI.Button.md#renderopacity)
- [renderScale](UI.UI.Button.md#renderscale)
- [renderShear](UI.UI.Button.md#rendershear)
- [renderTransformAngle](UI.UI.Button.md#rendertransformangle)
- [renderTransformPivot](UI.UI.Button.md#rendertransformpivot)
- [size](UI.UI.Button.md#size)
- [slot](UI.UI.Button.md#slot)
- [tickSpaceGeometry](UI.UI.Button.md#tickspacegeometry)
- [touchMethod](UI.UI.Button.md#touchmethod)
- [transform](UI.UI.Button.md#transform)
- [transitionEnable](UI.UI.Button.md#transitionenable)
- [visibility](UI.UI.Button.md#visibility)
- [visible](UI.UI.Button.md#visible)
- [zOrder](UI.UI.Button.md#zorder)

### Methods

- [destroyObject](UI.UI.Button.md#destroyobject)
- [equal](UI.UI.Button.md#equal)
- [invalidateLayoutAndVolatility](UI.UI.Button.md#invalidatelayoutandvolatility)
- [isPressed](UI.UI.Button.md#ispressed)
- [setButtonDisableByFile](UI.UI.Button.md#setbuttondisablebyfile)
- [setButtonNormalByFile](UI.UI.Button.md#setbuttonnormalbyfile)
- [setButtonPressedByFile](UI.UI.Button.md#setbuttonpressedbyfile)
- [setDisableImageColorByHex](UI.UI.Button.md#setdisableimagecolorbyhex)
- [setDisableImageColorDecimal](UI.UI.Button.md#setdisableimagecolordecimal)
- [setNormalImageColorByHex](UI.UI.Button.md#setnormalimagecolorbyhex)
- [setNormalImageColorDecimal](UI.UI.Button.md#setnormalimagecolordecimal)
- [setPressedImageColorByHex](UI.UI.Button.md#setpressedimagecolorbyhex)
- [setPressedImageColorDecimal](UI.UI.Button.md#setpressedimagecolordecimal)
- [newObject](UI.UI.Button.md#newobject)

## Constructors

### constructor

• **new Button**()

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

| Name            | Type                                                       | Description        |
| :-------------- | :--------------------------------------------------------- | :----------------- |
| `inClickMethod` | [`ButtonClickMethod`](../enums/UI.UI.ButtonClickMethod.md) | usage:点击模式选择 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:263

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

UI/index.d.ts:161

• `set` **disableImageColor**(`inColor`): `void`

**`Description`**

设置禁用图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                     |
| :-------- | :---------------------------------------- | :---------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:155

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

UI/index.d.ts:173

• `set` **disableImageDrawType**(`inDrawTYpe`): `void`

**`Description`**

设置禁用图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawTYpe` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:类型  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:167

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

UI/index.d.ts:215

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

UI/index.d.ts:221

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

UI/index.d.ts:179

• `set` **disableImageMargin**(`inMargin`): `void`

**`Description`**

设置禁用图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description        |
| :--------- | :-------------------------- | :----------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:禁用图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:185

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

UI/index.d.ts:149

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

UI/index.d.ts:143

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

UI/index.d.ts:29

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

UI/index.d.ts:23

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

UI/index.d.ts:53

• `set` **normalImageColor**(`inNormalColor`): `void`

**`Description`**

设置普通图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                      | Description                                     |
| :-------------- | :---------------------------------------- | :---------------------------------------------- |
| `inNormalColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:47

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

UI/index.d.ts:65

• `set` **normalImageDrawType**(`inDrawType`): `void`

**`Description`**

设置普通图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:类型  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:59

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

UI/index.d.ts:191

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

UI/index.d.ts:197

---

### normalImageMargin

• `get` **normalImageMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取普通图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

普通图片边距

#### Defined in

UI/index.d.ts:71

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

UI/index.d.ts:77

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

UI/index.d.ts:41

• `set` **normalImageSize**(`inSize`): `void`

**`Description`**

设置图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:大小  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:35

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

UI/index.d.ts:227

---

### onHovered

• `get` **onHovered**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

悬浮事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

返回事件的代理

#### Defined in

UI/index.d.ts:245

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

UI/index.d.ts:233

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

UI/index.d.ts:239

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

UI/index.d.ts:251

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

### pressedImageColor

• `get` **pressedImageColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取按压图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

按压图片颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:113

• `set` **pressedImageColor**(`inColor`): `void`

**`Description`**

设置按压图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                     |
| :-------- | :---------------------------------------- | :---------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:107

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

UI/index.d.ts:125

• `set` **pressedImageDrawType**(`inDrawType`): `void`

**`Description`**

设置按压图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `inDrawType` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:类型  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:119

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

UI/index.d.ts:203

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

UI/index.d.ts:209

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

UI/index.d.ts:131

• `set` **pressedImageMargin**(`inMargin`): `void`

**`Description`**

设置按压图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description        |
| :--------- | :-------------------------- | :----------------- |
| `inMargin` | [`Margin`](UI.UI.Margin.md) | usage:按压图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:137

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

UI/index.d.ts:101

• `set` **pressedImageSize**(`inSize`): `void`

**`Description`**

设置按压图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:大小  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:95

---

### pressedMethod

• `set` **pressedMethod**(`inPressedMethod`): `void`

**`Description`**

设置按压模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                       | Description          |
| :---------------- | :--------------------------------------------------------- | :------------------- |
| `inPressedMethod` | [`ButtonPressMethod`](../enums/UI.UI.ButtonPressMethod.md) | usage:Press 模式选择 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:275

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

UI/index.d.ts:269

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

按钮是否启用过度模式,按下是否有效果

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

按钮是否启用过度模式

#### Defined in

UI/index.d.ts:83

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

UI/index.d.ts:89

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

UI/index.d.ts:257

---

### setButtonDisableByFile

▸ **setButtonDisableByFile**(`absPath`): `void`

**`Description`**

设置不可用图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description        |
| :-------- | :------- | :----------------- |
| `absPath` | `string` | usage:图片文件路径 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:353

---

### setButtonNormalByFile

▸ **setButtonNormalByFile**(`absPath`): `void`

**`Description`**

设置正常图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description        |
| :-------- | :------- | :----------------- |
| `absPath` | `string` | usage:图片文件路径 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:347

---

### setButtonPressedByFile

▸ **setButtonPressedByFile**(`absPath`): `void`

**`Description`**

设置按下图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description        |
| :-------- | :------- | :----------------- |
| `absPath` | `string` | usage:图片文件路径 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:341

---

### setDisableImageColorByHex

▸ **setDisableImageColorByHex**(`inHexString`): `void`

**`Description`**

设置不可用颜色指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description      |
| :------------ | :------- | :--------------- |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:335

---

### setDisableImageColorDecimal

▸ **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置不可用颜色指定 R、G、B、A 设置颜色 0 ~255

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

UI/index.d.ts:324

---

### setNormalImageColorByHex

▸ **setNormalImageColorByHex**(`inHexString`): `void`

**`Description`**

设置正常颜色指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description      |
| :------------ | :------- | :--------------- |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:295

---

### setNormalImageColorDecimal

▸ **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置正常颜色 指定 R、G、B、A 设置颜色 0 ~255

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

UI/index.d.ts:284

---

### setPressedImageColorByHex

▸ **setPressedImageColorByHex**(`inHexString`): `void`

**`Description`**

设置按下颜色指定 Hex 的颜色文本设定颜色 #05050505

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type     | Description      |
| :------------ | :------- | :--------------- |
| `inHexString` | `string` | usage:颜色字符串 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:315

---

### setPressedImageColorDecimal

▸ **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void`

**`Description`**

设置按下颜色指定 R、G、B、A 设置颜色 0 ~255

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

UI/index.d.ts:304

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`Button`](UI.UI.Button.md)

**`Description`**

创建 Button 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                  |
| :-------- | :-------------------------- | :------------------------------------------- |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外 parent 对象 default: null |
| `inName?` | `string`                    | usage:创建控件的名称 default:null            |

#### Returns

[`Button`](UI.UI.Button.md)

返回创建的对象

#### Defined in

UI/index.d.ts:17
