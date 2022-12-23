[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / MulticastDelegateInterface

# Interface: MulticastDelegateInterface<T\>

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).MulticastDelegateInterface

**`Author`**

孙向坤

**`Description`**

多播委托接口

**`Effect`**

调用端生效

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implemented by

- [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)

## Table of contents

### Methods

- [add](Type.Type.MulticastDelegateInterface.md#add)
- [broadcast](Type.Type.MulticastDelegateInterface.md#broadcast)
- [remove](Type.Type.MulticastDelegateInterface.md#remove)

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

#### Defined in

Type/index.d.ts:65

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

#### Defined in

Type/index.d.ts:77

___

### remove

▸ **remove**(`func`): `void`

**`Description`**

删除代理函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | usage: 删除绑定的函数 default |

#### Returns

`void`

#### Defined in

Type/index.d.ts:71
