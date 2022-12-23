[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / MulticastDelegate

# Class: MulticastDelegate<T\>

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).MulticastDelegate

**`Author`**

孙向坤

**`Description`**

多播委托接口

**`Network Status`**

usage:双端

**`Effect`**

调用端生效

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implements

- [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](Type.Type.MulticastDelegate.md#constructor)

### Methods

- [add](Type.Type.MulticastDelegate.md#add)
- [broadcast](Type.Type.MulticastDelegate.md#broadcast)
- [clear](Type.Type.MulticastDelegate.md#clear)
- [remove](Type.Type.MulticastDelegate.md#remove)

## Constructors

### constructor

• **new MulticastDelegate**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Methods

### add

▸ **add**(`func`): `void`

**`Description`**

绑定代理函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | usage: 绑定的函数 default |

#### Returns

`void`

#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.Type.MulticastDelegateInterface.md).[add](../interfaces/Type.Type.MulticastDelegateInterface.md#add)

#### Defined in

Type/index.d.ts:127

___

### broadcast

▸ **broadcast**(`...arg`): `void`

**`Description`**

广播通知代理函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> | usage: 参数 |

#### Returns

`void`

#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.Type.MulticastDelegateInterface.md).[broadcast](../interfaces/Type.Type.MulticastDelegateInterface.md#broadcast)

#### Defined in

Type/index.d.ts:144

___

### clear

▸ **clear**(): `void`

**`Description`**

情况委托

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:138

___

### remove

▸ **remove**(`func`): `void`

**`Description`**

删除绑定代理函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | usage: 删除绑定的函数 default |

#### Returns

`void`

#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.Type.MulticastDelegateInterface.md).[remove](../interfaces/Type.Type.MulticastDelegateInterface.md#remove)

#### Defined in

Type/index.d.ts:133
