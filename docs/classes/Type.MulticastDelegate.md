[Type](../modules/Type.Type.md) / MulticastDelegate

# MulticastDelegate<T\> <Badge type="tip" text="Class" /> <Score text="MulticastDelegate<T\>" />

**`Groups`**

SCRIPITING

多播委托接口

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implements

- [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<`T`\>

## Table of contents

| Methods |
| :-----|
| **[add](Type.MulticastDelegate.md#add)**(`T`): `void` <br> 绑定代理函数|
| **[broadcast](Type.MulticastDelegate.md#broadcast)**(`Parameters`<`T`\>): `void` <br> 广播通知代理函数|
| **[clear](Type.MulticastDelegate.md#clear)**(): `void` <br> 情况委托|
| **[remove](Type.MulticastDelegate.md#remove)**(`T`): `void` <br> 删除绑定代理函数|

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` <Badge type="tip" text="other" />

绑定代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的函数 default |


#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.MulticastDelegateInterface.md).[add](../interfaces/Type.MulticastDelegateInterface.md#add)

___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`...arg`): `void` <Badge type="tip" text="other" />

广播通知代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  参数 |


#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.MulticastDelegateInterface.md).[broadcast](../interfaces/Type.MulticastDelegateInterface.md#broadcast)

___

### clear <Score text="clear" /> 

• **clear**(): `void` <Badge type="tip" text="other" />

情况委托



___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` <Badge type="tip" text="other" />

删除绑定代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  删除绑定的函数 default |


#### Implementation of

[MulticastDelegateInterface](../interfaces/Type.MulticastDelegateInterface.md).[remove](../interfaces/Type.MulticastDelegateInterface.md#remove)
