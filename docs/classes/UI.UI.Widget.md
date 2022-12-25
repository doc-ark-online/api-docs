[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / Widget

# Class: Widget

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).Widget

**`Author`**

jie.wu

**`Description`**

可挂载叶子节点的根节点，以及提供各种自动布局功能

**`Network Status`**

usage:客户端

## Hierarchy

- **`Widget`**

  ↳ [`Button`](UI.UI.Button.md)

  ↳ [`ColorPick`](UI.UI.ColorPick.md)

  ↳ [`Image`](UI.UI.Image.md)

  ↳ [`InputBox`](UI.UI.InputBox.md)

  ↳ [`PanelWidget`](UI.UI.PanelWidget.md)

  ↳ [`ProgressBar`](UI.UI.ProgressBar.md)

  ↳ [`StaleButton`](UI.UI.StaleButton.md)

  ↳ [`TextBlock`](UI.UI.TextBlock.md)

  ↳ [`TouchPad`](UI.UI.TouchPad.md)

  ↳ [`UserWidget`](UI.UI.UserWidget.md)

  ↳ [`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

## Table of contents

### Constructors

- [constructor](UI.UI.Widget.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.Widget.md#autosizeenable)
- [cachedGeometry](UI.UI.Widget.md#cachedgeometry)
- [constraints](UI.UI.Widget.md#constraints)
- [desiredSize](UI.UI.Widget.md#desiredsize)
- [enable](UI.UI.Widget.md#enable)
- [guid](UI.UI.Widget.md#guid)
- [isHovered](UI.UI.Widget.md#ishovered)
- [name](UI.UI.Widget.md#name)
- [paintSpaceGeometry](UI.UI.Widget.md#paintspacegeometry)
- [parent](UI.UI.Widget.md#parent)
- [position](UI.UI.Widget.md#position)
- [renderOpacity](UI.UI.Widget.md#renderopacity)
- [renderScale](UI.UI.Widget.md#renderscale)
- [renderShear](UI.UI.Widget.md#rendershear)
- [renderTransformAngle](UI.UI.Widget.md#rendertransformangle)
- [renderTransformPivot](UI.UI.Widget.md#rendertransformpivot)
- [size](UI.UI.Widget.md#size)
- [slot](UI.UI.Widget.md#slot)
- [tickSpaceGeometry](UI.UI.Widget.md#tickspacegeometry)
- [transform](UI.UI.Widget.md#transform)
- [visibility](UI.UI.Widget.md#visibility)
- [visible](UI.UI.Widget.md#visible)
- [zOrder](UI.UI.Widget.md#zorder)

### Methods

- [destroyObject](UI.UI.Widget.md#destroyobject)
- [equal](UI.UI.Widget.md#equal)
- [invalidateLayoutAndVolatility](UI.UI.Widget.md#invalidatelayoutandvolatility)

## Constructors

### constructor

• **new Widget**()

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

#### Defined in

UI/index.d.ts:4814

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

#### Defined in

UI/index.d.ts:4777

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

#### Defined in

UI/index.d.ts:4921

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

#### Defined in

UI/index.d.ts:4825
