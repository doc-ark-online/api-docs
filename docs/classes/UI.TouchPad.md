[UI](../modules/UI.UI.md) / TouchPad

# TouchPad <Badge type="tip" text="Class" />

**`Description`**

摄像机滑动区

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`TouchPad`**

## Table of contents

| Accessors |
| :-----|
| **[controlByMouseEnable](UI.TouchPad.md#controlbymouseenable)**(): `boolean` <br> 获取是否被鼠标控制，只作用于PC端|
| **[inputScale](UI.TouchPad.md#inputscale)**(): [`Vector2`](Type.Vector2.md) <br> 获取移动touchPad的delta的缩放值|

| Methods |
| :-----|
| **[newObject](UI.TouchPad.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`TouchPad`](UI.TouchPad.md) <br> 创建 TouchPad 控件,当parent和inName与已有的对象相同时，旧的对象会被销毁|

## Accessors

### controlByMouseEnable

• `get` **controlByMouseEnable**(): `boolean`

**`Description`**

获取是否被鼠标控制，只作用于PC端

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否被鼠标控制

• `set` **controlByMouseEnable**(`controlByMouse`): `void`

**`Description`**

设置是否被鼠标控制，只作用于PC端

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlByMouse` | `boolean` |  是否被鼠标控制 |

#### Returns

`void`


### inputScale

• `get` **inputScale**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取移动touchPad的delta的缩放值

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

返回移动touchPad的delta的缩放值

• `set` **inputScale**(`inScale`): `void`

**`Description`**

设置移动touchPad的delta的缩放值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScale` | [`Vector2`](Type.Vector2.md) | 缩放值 |

#### Returns

`void`


## Methods

### newObject

▸ `Static` **newObject**(`parent?`, `InName?`): [`TouchPad`](UI.TouchPad.md)

**`Description`**

创建 TouchPad 控件,当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外Outer对象 default:null |
| `InName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`TouchPad`](UI.TouchPad.md)

返回创建的控件
