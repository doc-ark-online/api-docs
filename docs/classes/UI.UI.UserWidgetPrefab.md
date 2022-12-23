[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UserWidgetPrefab

# Class: UserWidgetPrefab

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UserWidgetPrefab

**`Author`**

wujie

**`Description`**

ui预制体

**`Network Status`**

usage:客户端

## Hierarchy

- [`UserWidget`](UI.UI.UserWidget.md)

  ↳ **`UserWidgetPrefab`**

## Table of contents

### Constructors

- [constructor](UI.UI.UserWidgetPrefab.md#constructor)

### Accessors

- [cachedGeometry](UI.UI.UserWidgetPrefab.md#cachedgeometry)
- [desiredSize](UI.UI.UserWidgetPrefab.md#desiredsize)
- [focusable](UI.UI.UserWidgetPrefab.md#focusable)
- [guid](UI.UI.UserWidgetPrefab.md#guid)
- [isEnabled](UI.UI.UserWidgetPrefab.md#isenabled)
- [isHovered](UI.UI.UserWidgetPrefab.md#ishovered)
- [name](UI.UI.UserWidgetPrefab.md#name)
- [paintSpaceGeometry](UI.UI.UserWidgetPrefab.md#paintspacegeometry)
- [parent](UI.UI.UserWidgetPrefab.md#parent)
- [renderOpacity](UI.UI.UserWidgetPrefab.md#renderopacity)
- [renderScale](UI.UI.UserWidgetPrefab.md#renderscale)
- [renderShear](UI.UI.UserWidgetPrefab.md#rendershear)
- [renderTransformAngle](UI.UI.UserWidgetPrefab.md#rendertransformangle)
- [renderTransformPivot](UI.UI.UserWidgetPrefab.md#rendertransformpivot)
- [rootContent](UI.UI.UserWidgetPrefab.md#rootcontent)
- [size](UI.UI.UserWidgetPrefab.md#size)
- [slot](UI.UI.UserWidgetPrefab.md#slot)
- [tickSpaceGeometry](UI.UI.UserWidgetPrefab.md#tickspacegeometry)
- [visibility](UI.UI.UserWidgetPrefab.md#visibility)
- [visible](UI.UI.UserWidgetPrefab.md#visible)

### Methods

- [addToViewport](UI.UI.UserWidgetPrefab.md#addtoviewport)
- [destroyObject](UI.UI.UserWidgetPrefab.md#destroyobject)
- [equal](UI.UI.UserWidgetPrefab.md#equal)
- [findChildByPath](UI.UI.UserWidgetPrefab.md#findchildbypath)
- [invalidateLayoutAndVolatility](UI.UI.UserWidgetPrefab.md#invalidatelayoutandvolatility)
- [removeRootContent](UI.UI.UserWidgetPrefab.md#removerootcontent)
- [newObject](UI.UI.UserWidgetPrefab.md#newobject)

## Constructors

### constructor

• **new UserWidgetPrefab**()

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[constructor](UI.UI.UserWidget.md#constructor)

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

UserWidget.cachedGeometry

#### Defined in

UI/index.d.ts:4893

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

UserWidget.desiredSize

#### Defined in

UI/index.d.ts:4827

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

#### Inherited from

UserWidget.focusable

#### Defined in

UI/index.d.ts:4426

• `set` **focusable**(`isFocus`): `void`

**`Description`**

设置是否响应键盘焦点事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isFocus` | `boolean` | usage:是否相应 |

#### Returns

`void`

#### Inherited from

UserWidget.focusable

#### Defined in

UI/index.d.ts:4420

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

UserWidget.guid

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

UserWidget.isEnabled

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

UserWidget.isEnabled

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

UserWidget.isHovered

#### Defined in

UI/index.d.ts:4816

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

UserWidget.name

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

UserWidget.name

#### Defined in

UI/index.d.ts:4767

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

UserWidget.paintSpaceGeometry

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

UserWidget.parent

#### Defined in

UI/index.d.ts:4755

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

UserWidget.renderOpacity

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

UserWidget.renderOpacity

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

UserWidget.renderScale

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

UserWidget.renderScale

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

UserWidget.renderShear

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

UserWidget.renderShear

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

UserWidget.renderTransformAngle

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

UserWidget.renderTransformAngle

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

UserWidget.renderTransformPivot

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

UserWidget.renderTransformPivot

#### Defined in

UI/index.d.ts:4845

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

#### Inherited from

UserWidget.rootContent

#### Defined in

UI/index.d.ts:4402

• `set` **rootContent**(`content`): `void`

**`Description`**

设置UI的根Canvas

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | [`Canvas`](UI.UI.Canvas.md) | usage:根UI的内容 |

#### Returns

`void`

#### Inherited from

UserWidget.rootContent

#### Defined in

UI/index.d.ts:4396

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

UserWidget.size

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

UserWidget.slot

#### Defined in

UI/index.d.ts:4761

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

UserWidget.tickSpaceGeometry

#### Defined in

UI/index.d.ts:4899

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

UserWidget.visibility

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

UserWidget.visibility

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

UserWidget.visible

#### Defined in

UI/index.d.ts:4791

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
| `zOrder` | `number` | usage:添加到屏幕的层级关系 |

#### Returns

`void`

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[addToViewport](UI.UI.UserWidget.md#addtoviewport)

#### Defined in

UI/index.d.ts:4390

___

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[destroyObject](UI.UI.UserWidget.md#destroyobject)

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

[UserWidget](UI.UI.UserWidget.md).[equal](UI.UI.UserWidget.md#equal)

#### Defined in

UI/index.d.ts:4749

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
| `inPath` | `string` | usage:路径 |

#### Returns

[`Widget`](UI.UI.Widget.md)

返回查找节点结果

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[findChildByPath](UI.UI.UserWidget.md#findchildbypath)

#### Defined in

UI/index.d.ts:4414

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

[UserWidget](UI.UI.UserWidget.md).[invalidateLayoutAndVolatility](UI.UI.UserWidget.md#invalidatelayoutandvolatility)

#### Defined in

UI/index.d.ts:4821

___

### removeRootContent

▸ **removeRootContent**(): `void`

**`Description`**

移除根Canvas

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[removeRootContent](UI.UI.UserWidget.md#removerootcontent)

#### Defined in

UI/index.d.ts:4407

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
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外Outer对象 default:null |

#### Returns

[`UserWidget`](UI.UI.UserWidget.md)

返回创建的控件

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[newObject](UI.UI.UserWidget.md#newobject)

#### Defined in

UI/index.d.ts:4384
