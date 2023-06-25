[Type](../groups/Core.Type.md) / Delegate

# Delegate<T\> <Badge type="tip" text="Class" /> <Score text="Delegate<T\>" />

委托

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implements

- [`DelegateInterface`](../interfaces/mw.DelegateInterface.md)<`T`\>

## Table of contents

| Methods |
| :-----|
| **[bind](mw.Delegate.md#bind)**(`func`: `T`): `void` <br> 绑定函数|
| **[execute](mw.Delegate.md#execute)**(`...arg`: `Parameters`<`T`\>): `ReturnType`<`T`\> <br> 执行绑定函数|
| **[isBound](mw.Delegate.md#isbound)**(): `boolean` <br> 是否绑定|
| **[unbind](mw.Delegate.md#unbind)**(): `void` <br> 解绑函数|

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Methods

### bind <Score text="bind" /> 

• **bind**(`func`): `void` 

绑定函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的函数 default: |


#### Implementation of

[DelegateInterface](../interfaces/mw.DelegateInterface.md).[bind](../interfaces/mw.DelegateInterface.md#bind)

___

### execute <Score text="execute" /> 

• **execute**(`...arg`): `ReturnType`<`T`\> 

执行绑定函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  执行参数 |

#### Returns

`ReturnType`<`T`\>

执行参数类型

#### Implementation of

[DelegateInterface](../interfaces/mw.DelegateInterface.md).[execute](../interfaces/mw.DelegateInterface.md#execute)

___

### isBound <Score text="isBound" /> 

• **isBound**(): `boolean` 

是否绑定


#### Returns

`boolean`

是否绑定

#### Implementation of

[DelegateInterface](../interfaces/mw.DelegateInterface.md).[isBound](../interfaces/mw.DelegateInterface.md#isbound)

___

### unbind <Score text="unbind" /> 

• **unbind**(): `void` 

解绑函数



#### Implementation of

[DelegateInterface](../interfaces/mw.DelegateInterface.md).[unbind](../interfaces/mw.DelegateInterface.md#unbind)
