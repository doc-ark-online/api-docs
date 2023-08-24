[TYPE](../groups/Core.TYPE.md) / Delegate

# Delegate<T\> <Badge type="tip" text="Class" /> <Score text="Delegate<T\>" />

委托

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |

## Implements

- `DelegateInterface`<`T`\>

## Table of contents

| Methods |
| :-----|
| **[bind](mw.Delegate.md#bind)**(`func`: `T`): `void` <br> 绑定事件|
| **[execute](mw.Delegate.md#execute)**(`...arg`: `Parameters`<`T`\>): `ReturnType`<`T`\> <br> 执行绑定事件|
| **[isBound](mw.Delegate.md#isbound)**(): `boolean` <br> 是否绑定事件|
| **[unbind](mw.Delegate.md#unbind)**(): `void` <br> 解绑事件|

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |

## Methods

### bind <Score text="bind" /> 

• **bind**(`func`): `void` 

绑定事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的函数 default: |


#### Implementation of

DelegateInterface.bind

___

### execute <Score text="execute" /> 

• **execute**(`...arg`): `ReturnType`<`T`\> 

执行绑定事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  执行参数 |

#### Returns

`ReturnType`<`T`\>

执行参数类型

#### Implementation of

DelegateInterface.execute

___

### isBound <Score text="isBound" /> 

• **isBound**(): `boolean` 

是否绑定事件


#### Returns

`boolean`

是否绑定事件

#### Implementation of

DelegateInterface.isBound

___

### unbind <Score text="unbind" /> 

• **unbind**(): `void` 

解绑事件



#### Implementation of

DelegateInterface.unbind
