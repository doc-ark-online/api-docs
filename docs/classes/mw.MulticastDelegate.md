[Type](../groups/Core.Type.md) / MulticastDelegate

# MulticastDelegate<T\> <Badge type="tip" text="Class" /> <Score text="MulticastDelegate<T\>" />

多播委托接口

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implements

- [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<`T`\>

## Table of contents

| Methods |
| :-----|
| **[add](mw.MulticastDelegate.md#add)**(`func`: `T`): `void` <br> 绑定代理函数|
| **[broadcast](mw.MulticastDelegate.md#broadcast)**(`...arg`: `Parameters`<`T`\>): `void` <br> 广播通知代理函数|
| **[clear](mw.MulticastDelegate.md#clear)**(): `void` <br> 情况委托|
| **[remove](mw.MulticastDelegate.md#remove)**(`func`: `T`): `void` <br> 删除绑定代理函数|

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` 

绑定代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的函数 default |


#### Implementation of

[MulticastDelegateInterface](../interfaces/mw.MulticastDelegateInterface.md).[add](../interfaces/mw.MulticastDelegateInterface.md#add)

___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`...arg`): `void` 

广播通知代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  参数 |


#### Implementation of

[MulticastDelegateInterface](../interfaces/mw.MulticastDelegateInterface.md).[broadcast](../interfaces/mw.MulticastDelegateInterface.md#broadcast)

___

### clear <Score text="clear" /> 

• **clear**(): `void` 

情况委托



___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除绑定代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  删除绑定的函数 default |


#### Implementation of

[MulticastDelegateInterface](../interfaces/mw.MulticastDelegateInterface.md).[remove](../interfaces/mw.MulticastDelegateInterface.md#remove)
