[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / [FunctionType](../modules/Type.Type.FunctionType.md) / Action

# Class: Action

[Type](../modules/Type.Type.md).[FunctionType](../modules/Type.Type.FunctionType.md).Action

**`Author`**

huipeng.jia

**`Description`**

任意参数的代理

**`Network Status`**

usage: 双端

## Hierarchy

- **`Action`**

  ↳ [`Action1`](Type.Type.FunctionType.Action1.md)

  ↳ [`Action2`](Type.Type.FunctionType.Action2.md)

  ↳ [`Action3`](Type.Type.FunctionType.Action3.md)

## Table of contents

### Constructors

- [constructor](Type.Type.FunctionType.Action.md#constructor)

### Accessors

- [count](Type.Type.FunctionType.Action.md#count)

### Methods

- [add](Type.Type.FunctionType.Action.md#add)
- [call](Type.Type.FunctionType.Action.md#call)
- [clear](Type.Type.FunctionType.Action.md#clear)
- [includes](Type.Type.FunctionType.Action.md#includes)
- [remove](Type.Type.FunctionType.Action.md#remove)

## Constructors

### constructor

• **new Action**()

## Accessors

### count

• `get` **count**(): `number`

**`Description`**

监听方法的数量

**`Effect`**

调用端生效

#### Returns

`number`

#### Defined in

Type/index.d.ts:870

## Methods

### add

▸ **add**(`fn`, `thisArg?`): `void`

**`Description`**

添加一个监听方法(有重复过滤)

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | usage: 方法 |
| `thisArg?` | `any` | usage: 域 default: undefined |

#### Returns

`void`

#### Defined in

Type/index.d.ts:839

___

### call

▸ **call**(`...params`): `void`

**`Description`**

执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...params` | `any` | usage: 参数序列 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:852

___

### clear

▸ **clear**(): `void`

**`Description`**

清除所有监听

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:865

___

### includes

▸ **includes**(`fn`, `thisArg`): `boolean`

**`Description`**

判断是否包含某个监听方法

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | usage: 方法 |
| `thisArg` | `any` | usage: 域 |

#### Returns

`boolean`

结果

#### Defined in

Type/index.d.ts:860

___

### remove

▸ **remove**(`fn`, `thisArg`): `void`

**`Description`**

移除一个监听方法

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | usage: 方法 |
| `thisArg` | `any` | usage: 域 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:846
