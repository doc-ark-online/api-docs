[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / DelegateInterface

# Interface: DelegateInterface<T\>

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).DelegateInterface

**`Author`**

孙向坤

**`Description`**

委托接口

**`Effect`**

调用端生效

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`arg`: `unknown`[]) => `unknown` |

## Implemented by

- [`Delegate`](../classes/Type.Type.Delegate.md)

## Table of contents

### Methods

- [bind](Type.Type.DelegateInterface.md#bind)
- [execute](Type.Type.DelegateInterface.md#execute)
- [isBound](Type.Type.DelegateInterface.md#isbound)
- [unbind](Type.Type.DelegateInterface.md#unbind)

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
| `func` | `T` | usage: 绑定的函数 default: |

#### Returns

`void`

#### Defined in

Type/index.d.ts:32

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
| `...arg` | `Parameters`<`T`\> | usage: 执行参数 |

#### Returns

`ReturnType`<`T`\>

执行参数类型

#### Defined in

Type/index.d.ts:50

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

#### Defined in

Type/index.d.ts:43

___

### unbind

▸ **unbind**(): `void`

**`Description`**

解绑函数

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:37
