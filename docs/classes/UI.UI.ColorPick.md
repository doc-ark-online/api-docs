[UI](../modules/UI.UI.md) / ColorPick

# ColorPick <Badge type="tip" text="Class" />

**`Description`**

颜色选择器

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`ColorPick`**

## Table of contents

| Accessors                                                                                                                                                                                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[autoSizeEnable](UI.UI.ColorPick.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小                                                                                                                                      |
| **[cachedGeometry](UI.UI.ColorPick.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的 GetTickSpaceGeometry                                                                                                   |
| **[color](UI.UI.ColorPick.md#color)**([`LinearColor`](Type.Type.LinearColor.md)): `void` <br> 设置 color picker 的颜色                                                                                                              |
| **[constraints](UI.UI.ColorPick.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局                                                                                         |
| **[desiredSize](UI.UI.ColorPick.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小                                                                                                                            |
| **[enable](UI.UI.ColorPick.md#enable)**(): `boolean` <br> 是否可用                                                                                                                                                                  |
| **[guid](UI.UI.ColorPick.md#guid)**(): `string` <br> 获取控件 GUID                                                                                                                                                                  |
| **[imageGuid](UI.UI.ColorPick.md#imageguid)**(`string`): `void` <br> 设置 color picker 的图片                                                                                                                                       |
| **[isHovered](UI.UI.ColorPick.md#ishovered)**(): `boolean` <br> 是否是 hovered                                                                                                                                                      |
| **[name](UI.UI.ColorPick.md#name)**(): `string` <br> 获取名字                                                                                                                                                                       |
| **[onColorChangeFinished](UI.UI.ColorPick.md#oncolorchangefinished)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\> <br> 颜色改变完成时触发的函数代理 |
| **[onColorChanged](UI.UI.ColorPick.md#oncolorchanged)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\> <br> 颜色改变时触发的代理                       |
| **[onTouchFinished](UI.UI.ColorPick.md#ontouchfinished)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\> <br> 点击完成时触发的代理函数                 |
| **[onTouchStart](UI.UI.ColorPick.md#ontouchstart)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\> <br> 点击时触发的代理                               |
| **[paintSpaceGeometry](UI.UI.ColorPick.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染 Widget 的几何信息                                                                                      |
| **[parent](UI.UI.ColorPick.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点                                                                                                                                              |
| **[position](UI.UI.ColorPick.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置                                                                                                                   |
| **[renderOpacity](UI.UI.ColorPick.md#renderopacity)**(): `number` <br> 获取渲染透明度                                                                                                                                               |
| **[renderScale](UI.UI.ColorPick.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放                                                                                                                            |
| **[renderShear](UI.UI.ColorPick.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变                                                                                                                        |
| **[renderTransformAngle](UI.UI.ColorPick.md#rendertransformangle)**(): `number` <br> 获取渲染的角度                                                                                                                                 |
| **[renderTransformPivot](UI.UI.ColorPick.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点                                                                                                          |
| **[size](UI.UI.ColorPick.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小                                                                                                                                              |
| **[slot](UI.UI.ColorPick.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息                                                                                |
| **[tickSpaceGeometry](UI.UI.ColorPick.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动 Widget Tick 的几何信息                                                                                   |
| **[transform](UI.UI.ColorPick.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置                                                                                                       |
| **[visibility](UI.UI.ColorPick.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性                                                                                                           |
| **[visible](UI.UI.ColorPick.md#visible)**(): `boolean` <br> 是否可见                                                                                                                                                                |
| **[zOrder](UI.UI.ColorPick.md#zorder)**(): `number` <br> 获取 zorder                                                                                                                                                                |

| Methods                                                                                                                                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[destroyObject](UI.UI.ColorPick.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用                                                                                                          |
| **[equal](UI.UI.ColorPick.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象                                                                                                   |
| **[invalidateLayoutAndVolatility](UI.UI.ColorPick.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算                                                                         |
| **[newObject](UI.UI.ColorPick.md#newobject)**([`Canvas`](UI.UI.Canvas.md), `string`): [`ColorPick`](UI.UI.ColorPick.md) <br> 创建 ColorPick 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁 |

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

### color

• `set` **color**(`inColor`): `void`

**`Description`**

设置 color picker 的颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                     |
| :-------- | :---------------------------------------- | :---------------------------------------------- |
| `inColor` | [`LinearColor`](Type.Type.LinearColor.md) | 输入的颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

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

### imageGuid

• `set` **imageGuid**(`inGuid`): `void`

**`Description`**

设置 color picker 的图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description   |
| :------- | :------- | :------------ |
| `inGuid` | `string` | 输入的图片 ID |

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

### onColorChangeFinished

• `get` **onColorChangeFinished**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\>

**`Description`**

颜色改变完成时触发的函数代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\>

返回事件的代理

---

### onColorChanged

• `get` **onColorChanged**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\>

**`Description`**

颜色改变时触发的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\>

返回事件的代理

---

### onTouchFinished

• `get` **onTouchFinished**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\>

**`Description`**

点击完成时触发的代理函数

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\>

返回事件的代理

---

### onTouchStart

• `get` **onTouchStart**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\>

**`Description`**

点击时触发的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.Type.LinearColor.md)) => `void`\>

返回事件的代理

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

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ColorPick`](UI.UI.ColorPick.md)

**`Description`**

创建 ColorPick 控件 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                         |
| :-------- | :-------------------------- | :---------------------------------- |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的 parent 对象 default:null |
| `inName?` | `string`                    | 创建控件的名称 default:null         |

#### Returns

[`ColorPick`](UI.UI.ColorPick.md)

返回创建的对象
