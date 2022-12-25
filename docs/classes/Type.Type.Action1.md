[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Action1

# Class: Action1<T\>

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Action1

**`Author`**

huipeng.jia

**`Description`**

一个参数的代理

**`Network Status`**

usage: 双端

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- [`Action`](Type.Type.Action.md)

  ↳ **`Action1`**

## Table of contents

### Constructors

- [constructor](Type.Type.Action1.md#constructor)

### Accessors

- [count](Type.Type.Action1.md#count)

### Methods

- [add](Type.Type.Action1.md#add)
- [call](Type.Type.Action1.md#call)
- [clear](Type.Type.Action1.md#clear)
- [includes](Type.Type.Action1.md#includes)
- [remove](Type.Type.Action1.md#remove)

## Constructors

### constructor

• **new Action1**<`T`\>()

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Inherited from

[Action](Type.Type.Action.md).[constructor](Type.Type.Action.md#constructor)

## Accessors

### count

• `get` **count**(): `number`

**`Description`**

监听方法的数量

**`Effect`**

调用端生效

#### Returns

`number`

#### Inherited from

Action.count

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

| Name       | Type                 | Description                  |
| :--------- | :------------------- | :--------------------------- |
| `fn`       | (`a`: `T`) => `void` | usage: 方法                  |
| `thisArg?` | `any`                | usage: 域 default: undefined |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[add](Type.Type.Action.md#add)

#### Defined in

Type/index.d.ts:852

---

### call

▸ **call**(`arg`): `void`

**`Description`**

执行

**`Effect`**

调用端生效

#### Parameters

| Name  | Type | Description   |
| :---- | :--- | :------------ |
| `arg` | `T`  | usage: 参数 a |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[call](Type.Type.Action.md#call)

#### Defined in

Type/index.d.ts:865

---

### clear

▸ **clear**(): `void`

**`Description`**

清除所有监听

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[Action](Type.Type.Action.md).[clear](Type.Type.Action.md#clear)

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

#### Inherited from

[Action](Type.Type.Action.md).[includes](Type.Type.Action.md#includes)

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

| Name      | Type                 | Description |
| :-------- | :------------------- | :---------- |
| `fn`      | (`a`: `T`) => `void` | usage: 方法 |
| `thisArg` | `any`                | usage: 域   |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[remove](Type.Type.Action.md#remove)

#### Defined in

Type/index.d.ts:859
