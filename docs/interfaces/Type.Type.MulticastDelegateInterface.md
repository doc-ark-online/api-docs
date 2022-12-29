[Type](../modules/Type.Type.md) / MulticastDelegateInterface

# MulticastDelegateInterface<T\> <Badge type="tip" text="Interface" />

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

| Methods |
| :-----|
| **[add](Type.Type.MulticastDelegateInterface.md#add)**(`T`): `void` <br> 绑定代理函数|
| **[broadcast](Type.Type.MulticastDelegateInterface.md#broadcast)**(`Parameters`<`T`\>): `void` <br> 广播通知代理函数|
| **[remove](Type.Type.MulticastDelegateInterface.md#remove)**(`T`): `void` <br> 删除代理函数|

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
| `func` | `T` |  绑定的函数 default |

#### Returns

`void`

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
| `...arg` | `Parameters`<`T`\> |  参数 |

#### Returns

`void`

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
| `func` | `T` |  删除绑定的函数 default |

#### Returns

`void`
