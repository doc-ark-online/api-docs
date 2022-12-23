[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Core](../modules/Core.md) / [Core](../modules/Core.Core.md) / Base

# Class: Base

[Core](../modules/Core.md).[Core](../modules/Core.Core.md).Base

**`Author`**

吴思

**`Description`**

Gameobject的基类

**`Network Status`**

usage:双端

## Hierarchy

- **`Base`**

  ↳ [`GameObject`](Core.Core.GameObject.md)

## Table of contents

### Constructors

- [constructor](Core.Core.Base.md#constructor)

### Accessors

- [guid](Core.Core.Base.md#guid)
- [name](Core.Core.Base.md#name)
- [useUpdate](Core.Core.Base.md#useupdate)

### Methods

- [isRunningClient](Core.Core.Base.md#isrunningclient)
- [onDestroy](Core.Core.Base.md#ondestroy)
- [onStart](Core.Core.Base.md#onstart)
- [onUpdate](Core.Core.Base.md#onupdate)

## Constructors

### constructor

• **new Base**()

## Accessors

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Defined in

Core/index.d.ts:38

___

### name

• `get` **name**(): `string`

**`Description`**

获取对象的名字。

**`Effect`**

调用端生效

#### Returns

`string`

#### Defined in

Core/index.d.ts:43

___

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Defined in

Core/index.d.ts:33

• `set` **useUpdate**(`v`): `void`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Defined in

Core/index.d.ts:28

## Methods

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true为客户端

#### Defined in

Core/index.d.ts:49

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Core/index.d.ts:17

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Core/index.d.ts:12

___

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Defined in

Core/index.d.ts:23
