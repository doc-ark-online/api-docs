[TYPE](../groups/Core.TYPE.md) / MulticastDelegateInterface

# MulticastDelegateInterface<T\> <Badge type="tip" text="Interface" /> <Score text="MulticastDelegateInterface<T\>" />

多播委托接口

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |

## Implemented by

- [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)

## Table of contents

| Methods |
| :-----|
| **[add](mw.MulticastDelegateInterface.md#add)**(`func`: `T`): `void` <br> 添加代理事件|
| **[broadcast](mw.MulticastDelegateInterface.md#broadcast)**(`...arg`: `Parameters`<`T`\>): `void` <br> 触发代理事件|
| **[clear](mw.MulticastDelegateInterface.md#clear)**(): `void` <br> 清空代理事件（危险操作，请注意您所清空的是哪些代理事件）|
| **[remove](mw.MulticastDelegateInterface.md#remove)**(`func`: `T`): `void` <br> 删除代理事件|

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` 

添加代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的事件函数 default |


___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`...arg`): `void` 

触发代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  参数 |


___

### clear <Score text="clear" /> 

• **clear**(): `void` 

清空代理事件（危险操作，请注意您所清空的是哪些代理事件）



___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  删除绑定的事件函数 default |

