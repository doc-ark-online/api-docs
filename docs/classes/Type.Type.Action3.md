[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Action3

# Class: Action3<T, S, P\>

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Action3

**`Author`**

huipeng.jia

**`Description`**

三个参数的代理

**`Network Status`**

usage: 双端

## Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |
| `P`  |

## Hierarchy

- [`Action`](Type.Type.Action.md)

  ↳ **`Action3`**

## Table of contents

### Constructors

- [constructor](Type.Type.Action3.md#constructor)

### Accessors

- [count](Type.Type.Action3.md#count)

### Methods

- [add](Type.Type.Action3.md#add)
- [call](Type.Type.Action3.md#call)
- [clear](Type.Type.Action3.md#clear)
- [includes](Type.Type.Action3.md#includes)
- [remove](Type.Type.Action3.md#remove)

## Constructors

### constructor

• **new Action3**<`T`, `S`, `P`\>()

#### Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |
| `P`  |

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

| Name       | Type                                     | Description                  |
| :--------- | :--------------------------------------- | :--------------------------- |
| `fn`       | (`a`: `T`, `b`: `S`, `c`: `P`) => `void` | usage: 方法                  |
| `thisArg?` | `any`                                    | usage: 域 default: undefined |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[add](Type.Type.Action.md#add)

#### Defined in

Type/index.d.ts:907

---

### call

▸ **call**(`a`, `b`, `c`): `void`

**`Description`**

执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description   |
| :--- | :--- | :------------ |
| `a`  | `T`  | usage: 参数 a |
| `b`  | `S`  | usage: 参数 b |
| `c`  | `P`  | usage: 参数 c |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[call](Type.Type.Action.md#call)

#### Defined in

Type/index.d.ts:922

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

| Name      | Type                                     | Description |
| :-------- | :--------------------------------------- | :---------- |
| `fn`      | (`a`: `T`, `b`: `S`, `c`: `P`) => `void` | usage: 方法 |
| `thisArg` | `any`                                    | usage: 域   |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[remove](Type.Type.Action.md#remove)

#### Defined in

Type/index.d.ts:914
