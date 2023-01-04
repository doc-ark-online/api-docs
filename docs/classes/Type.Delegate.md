[Type](../modules/Type.Type.md) / Delegate

# Delegate<T\> <Badge type="tip" text="Class" />

**`Description`**

委托

**`Effect`**

调用端生效

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implements

- [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<`T`\>

## Table of contents

| Methods |
| :-----|
| **[bind](Type.Delegate.md#bind)**(`T`): `void` <br> 绑定函数|
| **[execute](Type.Delegate.md#execute)**(`Parameters`<`T`\>): `ReturnType`<`T`\> <br> 执行绑定函数|
| **[isBound](Type.Delegate.md#isbound)**(): `boolean` <br> 是否绑定|
| **[unbind](Type.Delegate.md#unbind)**(): `void` <br> 解绑函数|

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Methods

### bind

▸ **bind**(`func`): `void`

**`Description`**

绑定函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` |  绑定的函数 default: |

#### Returns

`void`

#### Implementation of

[DelegateInterface](../interfaces/Type.DelegateInterface.md).[bind](../interfaces/Type.DelegateInterface.md#bind)

___

### execute

▸ **execute**(`...arg`): `ReturnType`<`T`\>

**`Description`**

执行绑定函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arg` | `Parameters`<`T`\> |  执行参数 |

#### Returns

`ReturnType`<`T`\>

执行参数类型

#### Implementation of

[DelegateInterface](../interfaces/Type.DelegateInterface.md).[execute](../interfaces/Type.DelegateInterface.md#execute)

___

### isBound

▸ **isBound**(): `boolean`

**`Description`**

是否绑定

**`Effect`**

调用端生效

#### Returns

`boolean`

是否绑定

#### Implementation of

[DelegateInterface](../interfaces/Type.DelegateInterface.md).[isBound](../interfaces/Type.DelegateInterface.md#isbound)

___

### unbind

▸ **unbind**(): `void`

**`Description`**

解绑函数

**`Effect`**

调用端生效

#### Returns

`void`

#### Implementation of

[DelegateInterface](../interfaces/Type.DelegateInterface.md).[unbind](../interfaces/Type.DelegateInterface.md#unbind)
