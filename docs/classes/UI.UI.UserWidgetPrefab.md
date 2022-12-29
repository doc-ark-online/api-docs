[UI](../modules/UI.UI.md) / UserWidgetPrefab

# UserWidgetPrefab <Badge type="tip" text="Class" />

**`Description`**

ui预制体

## Hierarchy

- [`UserWidget`](UI.UI.UserWidget.md)

  ↳ **`UserWidgetPrefab`**

## Table of contents

| Accessors |
| :-----|
| **[autoSizeEnable](UI.UI.UserWidgetPrefab.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小|
| **[cachedGeometry](UI.UI.UserWidgetPrefab.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的GetTickSpaceGeometry|
| **[constraints](UI.UI.UserWidgetPrefab.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局|
| **[desiredSize](UI.UI.UserWidgetPrefab.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小|
| **[enable](UI.UI.UserWidgetPrefab.md#enable)**(): `boolean` <br> 是否可用|
| **[focusable](UI.UI.UserWidgetPrefab.md#focusable)**(): `boolean` <br> 获取是否响应键盘焦点事件|
| **[guid](UI.UI.UserWidgetPrefab.md#guid)**(): `string` <br> 获取控件GUID|
| **[isHovered](UI.UI.UserWidgetPrefab.md#ishovered)**(): `boolean` <br> 是否是hovered|
| **[name](UI.UI.UserWidgetPrefab.md#name)**(): `string` <br> 获取名字|
| **[paintSpaceGeometry](UI.UI.UserWidgetPrefab.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染Widget的几何信息|
| **[parent](UI.UI.UserWidgetPrefab.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点|
| **[position](UI.UI.UserWidgetPrefab.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置|
| **[renderOpacity](UI.UI.UserWidgetPrefab.md#renderopacity)**(): `number` <br> 获取渲染透明度|
| **[renderScale](UI.UI.UserWidgetPrefab.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放|
| **[renderShear](UI.UI.UserWidgetPrefab.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变|
| **[renderTransformAngle](UI.UI.UserWidgetPrefab.md#rendertransformangle)**(): `number` <br> 获取渲染的角度|
| **[renderTransformPivot](UI.UI.UserWidgetPrefab.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点|
| **[rootContent](UI.UI.UserWidgetPrefab.md#rootcontent)**(): [`Canvas`](UI.UI.Canvas.md) <br> 获取根Canvas|
| **[size](UI.UI.UserWidgetPrefab.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小|
| **[slot](UI.UI.UserWidgetPrefab.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[tickSpaceGeometry](UI.UI.UserWidgetPrefab.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.UI.UserWidgetPrefab.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.UI.UserWidgetPrefab.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.UI.UserWidgetPrefab.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.UI.UserWidgetPrefab.md#zorder)**(): `number` <br> 获取zorder|

| Methods |
| :-----|
| **[addToViewport](UI.UI.UserWidgetPrefab.md#addtoviewport)**(`number`): `void` <br> 添加到屏幕上|
| **[destroyObject](UI.UI.UserWidgetPrefab.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.UI.UserWidgetPrefab.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[findChildByPath](UI.UI.UserWidgetPrefab.md#findchildbypath)**(`string`): [`Widget`](UI.UI.Widget.md) <br> 通过相对路径查找节点|
| **[invalidateLayoutAndVolatility](UI.UI.UserWidgetPrefab.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeRootContent](UI.UI.UserWidgetPrefab.md#removerootcontent)**(): `void` <br> 移除根Canvas,会销毁根Canvas，无法再次使用|
| **[newObject](UI.UI.UserWidgetPrefab.md#newobject)**([`Canvas`](UI.UI.Canvas.md)): [`UserWidget`](UI.UI.UserWidget.md) <br> 创建 UserWidget 控件|

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

### focusable

• `get` **focusable**(): `boolean`

**`Description`**

获取是否响应键盘焦点事件

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回相应键盘的焦点事件

• `set` **focusable**(`isFocus`): `void`

**`Description`**

设置是否响应键盘焦点事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isFocus` | `boolean` | 是否相应 |

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

### rootContent

• `get` **rootContent**(): [`Canvas`](UI.UI.Canvas.md)

**`Description`**

获取根Canvas

**`Effect`**

只在客户端调用生效

#### Returns

[`Canvas`](UI.UI.Canvas.md)

返回根Canvas

• `set` **rootContent**(`content`): `void`

**`Description`**

设置UI的根Canvas

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | [`Canvas`](UI.UI.Canvas.md) | 根UI的内容 |

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

### addToViewport

▸ **addToViewport**(`zOrder`): `void`

**`Description`**

添加到屏幕上

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zOrder` | `number` | 添加到屏幕的层级关系 |

#### Returns

`void`

___

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

### findChildByPath

▸ **findChildByPath**(`inPath`): [`Widget`](UI.UI.Widget.md)

**`Description`**

通过相对路径查找节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPath` | `string` | 路径 |

#### Returns

[`Widget`](UI.UI.Widget.md)

返回查找节点结果

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

### removeRootContent

▸ **removeRootContent**(): `void`

**`Description`**

移除根Canvas,会销毁根Canvas，无法再次使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`parent?`): [`UserWidget`](UI.UI.UserWidget.md)

**`Description`**

创建 UserWidget 控件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的外Outer对象 default:null |

#### Returns

[`UserWidget`](UI.UI.UserWidget.md)

返回创建的控件
