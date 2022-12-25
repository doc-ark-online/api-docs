[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Delegate

# Class: Delegate<T\>

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Delegate

**`Author`**

xiangkun.sun

**`Description`**

委托

**`Network Status`**

usage:双端

**`Effect`**

调用端生效

## Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `T`  | extends (...`arg`: `unknown`[]) => `unknown` |

## Implements

- [`DelegateInterface`](../interfaces/Type.Type.DelegateInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](Type.Type.Delegate.md#constructor)

### Methods

- [bind](Type.Type.Delegate.md#bind)
- [execute](Type.Type.Delegate.md#execute)
- [isBound](Type.Type.Delegate.md#isbound)
- [unbind](Type.Type.Delegate.md#unbind)

## Constructors

### constructor

• **new Delegate**<`T`\>()

#### Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `T`  | extends (...`arg`: `unknown`[]) => `unknown` |

## Methods

### bind

▸ **bind**(`func`): `void`

**`Description`**

绑定函数

**`Effect`**

调用端生效

#### Parameters

| Name   | Type | Description                |
| :----- | :--- | :------------------------- |
| `func` | `T`  | usage: 绑定的函数 default: |

#### Returns

`void`

#### Implementation of

[DelegateInterface](../interfaces/Type.Type.DelegateInterface.md).[bind](../interfaces/Type.Type.DelegateInterface.md#bind)

#### Defined in

Type/index.d.ts:118

---

### execute

▸ **execute**(`...arg`): `ReturnType`<`T`\>

**`Description`**

执行绑定函数

**`Effect`**

调用端生效

#### Parameters

| Name     | Type               | Description     |
| :------- | :----------------- | :-------------- |
| `...arg` | `Parameters`<`T`\> | usage: 执行参数 |

#### Returns

`ReturnType`<`T`\>

执行参数类型

#### Implementation of

[DelegateInterface](../interfaces/Type.Type.DelegateInterface.md).[execute](../interfaces/Type.Type.DelegateInterface.md#execute)

#### Defined in

Type/index.d.ts:136

---

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

[DelegateInterface](../interfaces/Type.Type.DelegateInterface.md).[isBound](../interfaces/Type.Type.DelegateInterface.md#isbound)

#### Defined in

Type/index.d.ts:129

---

### unbind

▸ **unbind**(): `void`

**`Description`**

解绑函数

**`Effect`**

调用端生效

#### Returns

`void`

#### Implementation of

[DelegateInterface](../interfaces/Type.Type.DelegateInterface.md).[unbind](../interfaces/Type.Type.DelegateInterface.md#unbind)

#### Defined in

Type/index.d.ts:123
