[TYPE](../groups/Core.TYPE.md) / DelegateInterface

# DelegateInterface<T\> <Badge type="tip" text="Interface" /> <Score text="DelegateInterface<T\>" />

委托接口

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |

## Implemented by

- [`Delegate`](../classes/mw.Delegate.md)

## Table of contents

| Methods |
| :-----|
| **[bind](mw.DelegateInterface.md#bind)**(`func`: `T`): `void` <br> 绑定代理事件|
| **[execute](mw.DelegateInterface.md#execute)**(`...arg`: `Parameters`<`T`\>): `ReturnType`<`T`\> <br> 触发代理事件|
| **[isBound](mw.DelegateInterface.md#isbound)**(): `boolean` <br> 是否绑定代理事件|
| **[unbind](mw.DelegateInterface.md#unbind)**(): `void` <br> 解绑事件|

## Methods

### bind <Score text="bind" /> 

• **bind**(`func`): `void` 

绑定代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的事件函数default: |


___

### execute <Score text="execute" /> 

• **execute**(`...arg`): `ReturnType`<`T`\> 

触发代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  执行参数 |

#### Returns

`ReturnType`<`T`\>

执行返回值

___

### isBound <Score text="isBound" /> 

• **isBound**(): `boolean` 

是否绑定代理事件


#### Returns

`boolean`

是否绑定代理事件

___

### unbind <Score text="unbind" /> 

• **unbind**(): `void` 

解绑事件


