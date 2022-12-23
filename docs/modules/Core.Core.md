[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Core](Core.md) / Core

# Namespace: Core

[Core](Core.md).Core

## Table of contents

### Classes

- [Base](../classes/Core.Core.Base.md)
- [GameObject](../classes/Core.Core.GameObject.md)
- [IPlayer](../classes/Core.Core.IPlayer.md)

### Interfaces

- [IPropertyOptions](../interfaces/Core.Core.IPropertyOptions.md)
- [IRangeOptions](../interfaces/Core.Core.IRangeOptions.md)

### Variables

- [Client](Core.Core.md#client)
- [Multicast](Core.Core.md#multicast)
- [Server](Core.Core.md#server)

### Functions

- [Class](Core.Core.md#class)
- [Function](Core.Core.md#function)
- [Property](Core.Core.md#property)
- [Type](Core.Core.md#type)
- [getWindowIsActive](Core.Core.md#getwindowisactive)
- [onWindowActivated](Core.Core.md#onwindowactivated)
- [onWindowDeactivated](Core.Core.md#onwindowdeactivated)

## Variables

### Client

• `Const` **Client**: `FunctionOption`

**`Description`**

客户端

**`Effect`**

调用端生效

#### Defined in

Core/index.d.ts:71

___

### Multicast

• `Const` **Multicast**: `FunctionOption`

**`Description`**

多播

**`Effect`**

调用端生效

#### Defined in

Core/index.d.ts:66

___

### Server

• `Const` **Server**: `FunctionOption`

**`Description`**

服务端

**`Effect`**

调用端生效

#### Defined in

Core/index.d.ts:76

## Functions

### Class

▸ **Class**<`T`\>(`constructor`): `T`

**`Description`**

将类声明为class

**`Effect`**

调用端生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `Script` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | `T` | usage:自定义类 |

#### Returns

`T`

自定义类

#### Defined in

Core/index.d.ts:83

___

### Function

▸ **Function**(`...options`): (`target`: `unknown`, `propertyKey`: `string`) => `void`

**`Description`**

函数支持Rpc调用

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...options` | `FunctionOption`[] | usage:Rpc调用方式 |

#### Returns

`fn`

自定义函数

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

Core/index.d.ts:97

___

### Property

▸ **Property**(`option?`): (`target`: `unknown`, `propertyKey`: `string`) => `void`

**`Description`**

属性支持同步

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | [`IPropertyOptions`](../interfaces/Core.Core.IPropertyOptions.md) | usage:配置 default:配置 |

#### Returns

`fn`

自定义属性

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

Core/index.d.ts:106

___

### Type

▸ **Type**<`T`\>(`type`): `T`

**`Description`**

类型支持属性同步

**`Effect`**

调用端生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ConstructorType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | usage:自定义类 |

#### Returns

`T`

自定义类

#### Defined in

Core/index.d.ts:90

___

### getWindowIsActive

▸ **getWindowIsActive**(): `boolean`

**`Description`**

获取游戏窗口激活状态

**`Effect`**

客户端生效

#### Returns

`boolean`

是否激活

#### Defined in

Core/index.d.ts:728

___

### onWindowActivated

▸ **onWindowActivated**(`callback`): `void`

**`Description`**

游戏窗口被激活事件

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | usage:回调事件 |

#### Returns

`void`

#### Defined in

Core/index.d.ts:716

___

### onWindowDeactivated

▸ **onWindowDeactivated**(`callback`): `void`

**`Description`**

游戏窗口被挂起事件

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | usage:回调事件 |

#### Returns

`void`

#### Defined in

Core/index.d.ts:722
