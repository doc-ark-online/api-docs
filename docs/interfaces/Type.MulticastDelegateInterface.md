[DATATYPE](../groups/DATATYPE.DATATYPE.md) / MulticastDelegateInterface

# MulticastDelegateInterface<T\> <Badge type="tip" text="Interface" /> <Score text="MulticastDelegateInterface<T\>" />

多播委托接口

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implemented by

- [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)

## Table of contents

| Methods |
| :-----|
| **[add](Type.MulticastDelegateInterface.md#add)**(`func`: `T`): `void` <br> 绑定代理函数|
| **[broadcast](Type.MulticastDelegateInterface.md#broadcast)**(`...arg`: `Parameters`<`T`\>): `void` <br> 广播通知代理函数|
| **[remove](Type.MulticastDelegateInterface.md#remove)**(`func`: `T`): `void` <br> 删除代理函数|

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` 

绑定代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的函数 default |


___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`...arg`): `void` 

广播通知代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  参数 |


___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除代理函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  删除绑定的函数 default |

