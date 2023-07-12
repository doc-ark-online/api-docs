[TYPE](../groups/Core.TYPE.md) / MulticastDelegate

# MulticastDelegate<T\> <Badge type="tip" text="Class" /> <Score text="MulticastDelegate<T\>" />

多播委托接口

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |

## Implements

- [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<`T`\>

## Table of contents

| Methods |
| :-----|
| **[add](mw.MulticastDelegate.md#add)**(`func`: `T`): `void` <br> 添加代理事件|
| **[broadcast](mw.MulticastDelegate.md#broadcast)**(`...arg`: `Parameters`<`T`\>): `void` <br> 触发代理事件|
| **[clear](mw.MulticastDelegate.md#clear)**(): `void` <br> 清空代理事件（危险操作，请注意您所清空的是哪些代理事件）|
| **[remove](mw.MulticastDelegate.md#remove)**(`func`: `T`): `void` <br> 删除代理事件|

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` 

添加代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  事件回调函数 default |


#### Implementation of

[MulticastDelegateInterface](../interfaces/mw.MulticastDelegateInterface.md).[add](../interfaces/mw.MulticastDelegateInterface.md#add)

___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`...arg`): `void` 

触发代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  参数 |


#### Implementation of

[MulticastDelegateInterface](../interfaces/mw.MulticastDelegateInterface.md).[broadcast](../interfaces/mw.MulticastDelegateInterface.md#broadcast)

___

### clear <Score text="clear" /> 

• **clear**(): `void` 

清空代理事件（危险操作，请注意您所清空的是哪些代理事件）



#### Implementation of

[MulticastDelegateInterface](../interfaces/mw.MulticastDelegateInterface.md).[clear](../interfaces/mw.MulticastDelegateInterface.md#clear)

___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  删除绑定的事件 default |


#### Implementation of

[MulticastDelegateInterface](../interfaces/mw.MulticastDelegateInterface.md).[remove](../interfaces/mw.MulticastDelegateInterface.md#remove)
