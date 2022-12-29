[Type](../modules/Type.Type.md) / DelegateInterface

# DelegateInterface<T\> <Badge type="tip" text="Interface" />

**`Description`**

委托接口

**`Effect`**

调用端生效

## Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `T`  | extends (...`arg`: `unknown`[]) => `unknown` |

## Implemented by

- [`Delegate`](../classes/Type.Type.Delegate.md)

## Table of contents

| Methods                                                                                                         |
| :-------------------------------------------------------------------------------------------------------------- |
| **[bind](Type.Type.DelegateInterface.md#bind)**(`T`): `void` <br> 绑定函数                                      |
| **[execute](Type.Type.DelegateInterface.md#execute)**(`Parameters`<`T`\>): `ReturnType`<`T`\> <br> 执行绑定函数 |
| **[isBound](Type.Type.DelegateInterface.md#isbound)**(): `boolean` <br> 是否绑定                                |
| **[unbind](Type.Type.DelegateInterface.md#unbind)**(): `void` <br> 解绑函数                                     |

## Methods

### bind

▸ **bind**(`func`): `void`

**`Description`**

绑定函数

**`Effect`**

调用端生效

#### Parameters

| Name   | Type | Description         |
| :----- | :--- | :------------------ |
| `func` | `T`  | 绑定的函数 default: |

#### Returns

`void`

---

### execute

▸ **execute**(`...arg`): `ReturnType`<`T`\>

**`Description`**

执行绑定函数

**`Effect`**

调用端生效

#### Parameters

| Name     | Type               | Description |
| :------- | :----------------- | :---------- |
| `...arg` | `Parameters`<`T`\> | 执行参数    |

#### Returns

`ReturnType`<`T`\>

执行参数类型

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

---

### unbind

▸ **unbind**(): `void`

**`Description`**

解绑函数

**`Effect`**

调用端生效

#### Returns

`void`
