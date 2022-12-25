[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Action

# Class: Action

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Action

**`Author`**

huipeng.jia

**`Description`**

任意参数的代理

**`Network Status`**

usage: 双端

## Hierarchy

- **`Action`**

  ↳ [`Action1`](Type.Type.Action1.md)

  ↳ [`Action2`](Type.Type.Action2.md)

  ↳ [`Action3`](Type.Type.Action3.md)

## Table of contents

### Constructors

- [constructor](Type.Type.Action.md#constructor)

### Accessors

- [count](Type.Type.Action.md#count)

### Methods

- [add](Type.Type.Action.md#add)
- [call](Type.Type.Action.md#call)
- [clear](Type.Type.Action.md#clear)
- [includes](Type.Type.Action.md#includes)
- [remove](Type.Type.Action.md#remove)

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

Type/index.d.ts:838

## Methods

### add

▸ **add**(`fn`, `thisArg?`): `void`

**`Description`**

添加一个监听方法(有重复过滤)

**`Effect`**

调用端生效

#### Parameters

| Name       | Type       | Description                  |
| :--------- | :--------- | :--------------------------- |
| `fn`       | `Function` | usage: 方法                  |
| `thisArg?` | `any`      | usage: 域 default: undefined |

#### Returns

`void`

#### Defined in

Type/index.d.ts:807

---

### call

▸ **call**(`...params`): `void`

**`Description`**

执行

**`Effect`**

调用端生效

#### Parameters

| Name        | Type  | Description     |
| :---------- | :---- | :-------------- |
| `...params` | `any` | usage: 参数序列 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:820

---

### clear

▸ **clear**(): `void`

**`Description`**

清除所有监听

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:833

---

### includes

▸ **includes**(`fn`, `thisArg`): `boolean`

**`Description`**

判断是否包含某个监听方法

**`Effect`**

调用端生效

#### Parameters

| Name      | Type       | Description |
| :-------- | :--------- | :---------- |
| `fn`      | `Function` | usage: 方法 |
| `thisArg` | `any`      | usage: 域   |

#### Returns

`boolean`

结果

#### Defined in

Type/index.d.ts:828

---

### remove

▸ **remove**(`fn`, `thisArg`): `void`

**`Description`**

移除一个监听方法

**`Effect`**

调用端生效

#### Parameters

| Name      | Type       | Description |
| :-------- | :--------- | :---------- |
| `fn`      | `Function` | usage: 方法 |
| `thisArg` | `any`      | usage: 域   |

#### Returns

`void`

#### Defined in

Type/index.d.ts:814
