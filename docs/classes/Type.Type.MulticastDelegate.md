[Type](../modules/Type.Type.md) / MulticastDelegate

# MulticastDelegate<T\> <Badge type="tip" text="Class" />

**`Description`**

多播委托接口

**`Effect`**

调用端生效

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implements

- [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<`T`\>

## Table of contents

| Methods |
| :-----|
| **[add](Type.Type.MulticastDelegate.md#add)**(`T`): `void` <br> 绑定代理函数|
| **[broadcast](Type.Type.MulticastDelegate.md#broadcast)**(`Parameters`<`T`\>): `void` <br> 广播通知代理函数|
| **[clear](Type.Type.MulticastDelegate.md#clear)**(): `void` <br> 情况委托|
| **[remove](Type.Type.MulticastDelegate.md#remove)**(`T`): `void` <br> 删除绑定代理函数|

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
| `func` | `T` |  绑定的函数 default |

#### Returns

`void`

#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.Type.MulticastDelegateInterface.md).[add](../interfaces/Type.Type.MulticastDelegateInterface.md#add)

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

#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.Type.MulticastDelegateInterface.md).[broadcast](../interfaces/Type.Type.MulticastDelegateInterface.md#broadcast)

___

### clear

▸ **clear**(): `void`

**`Description`**

情况委托

**`Effect`**

调用端生效

#### Returns

`void`

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
| `func` | `T` |  删除绑定的函数 default |

#### Returns

`void`

#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.Type.MulticastDelegateInterface.md).[remove](../interfaces/Type.Type.MulticastDelegateInterface.md#remove)
