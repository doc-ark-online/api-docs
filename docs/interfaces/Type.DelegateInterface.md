[Type](../modules/Type.Type.md) / DelegateInterface

# DelegateInterface<T\> <Badge type="tip" text="Interface" /> <Score text="DelegateInterface<T\>" />

委托接口

**`Effect`**


## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implemented by

- [`Delegate`](../classes/Type.Delegate.md)

## Table of contents

| Methods |
| :-----|
| **[bind](Type.DelegateInterface.md#bind)**(`T`): `void` <br> 绑定函数|
| **[execute](Type.DelegateInterface.md#execute)**(`Parameters`<`T`\>): `ReturnType`<`T`\> <br> 执行绑定函数|
| **[isBound](Type.DelegateInterface.md#isbound)**(): `boolean` <br> 是否绑定|
| **[unbind](Type.DelegateInterface.md#unbind)**(): `void` <br> 解绑函数|

## Methods

### bind <Score text="bind" /> 

• **bind**(`func`): `void` <Badge type="tip" text="other" />

绑定函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的函数 default: |


___

### execute <Score text="execute" /> 

• **execute**(`...arg`): `ReturnType`<`T`\> <Badge type="tip" text="other" />

执行绑定函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  执行参数 |

#### Returns

`ReturnType`<`T`\>

执行参数类型

___

### isBound <Score text="isBound" /> 

• **isBound**(): `boolean` <Badge type="tip" text="other" />

是否绑定


#### Returns

`boolean`

是否绑定

___

### unbind <Score text="unbind" /> 

• **unbind**(): `void` <Badge type="tip" text="other" />

解绑函数


