[Type](../modules/Type.Type.md) / Action3

# Action3<T, S, P\> <Badge type="tip" text="Class" />

**`Description`**

三个参数的代理

## Type parameters

| Name |
| :------ |
| `T` |
| `S` |
| `P` |

## Hierarchy

- [`Action`](Type.Type.Action.md)

  ↳ **`Action3`**

## Table of contents

| Accessors |
| :-----|
| **[count](Type.Type.Action3.md#count)**(): `number` <br> 监听方法的数量|

| Methods |
| :-----|
| **[add](Type.Type.Action3.md#add)**((`a`: `T`, `b`: `S`, `c`: `P`) => `void`, `any`): `void` <br> 添加一个监听方法(有重复过滤)|
| **[call](Type.Type.Action3.md#call)**(`T`, `S`, `P`): `void` <br> 执行|
| **[clear](Type.Type.Action3.md#clear)**(): `void` <br> 清除所有监听|
| **[includes](Type.Type.Action3.md#includes)**(`Function`, `any`): `boolean` <br> 判断是否包含某个监听方法|
| **[remove](Type.Type.Action3.md#remove)**((`a`: `T`, `b`: `S`, `c`: `P`) => `void`, `any`): `void` <br> 移除一个监听方法|

#### Type parameters

| Name |
| :------ |
| `T` |
| `S` |
| `P` |

## Accessors

### count

• `get` **count**(): `number`

**`Description`**

监听方法的数量

**`Effect`**

调用端生效

#### Returns

`number`

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
| `fn` | (`a`: `T`, `b`: `S`, `c`: `P`) => `void` |  方法 |
| `thisArg?` | `any` |  域 default: undefined |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[add](Type.Type.Action.md#add)

___

### call

▸ **call**(`a`, `b`, `c`): `void`

**`Description`**

执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T` |  参数a |
| `b` | `S` |  参数b |
| `c` | `P` |  参数c |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[call](Type.Type.Action.md#call)

___

### clear

▸ **clear**(): `void`

**`Description`**

清除所有监听

**`Effect`**

调用端生效

#### Returns

`void`

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
| `fn` | `Function` |  方法 |
| `thisArg` | `any` |  域 |

#### Returns

`boolean`

结果

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
| `fn` | (`a`: `T`, `b`: `S`, `c`: `P`) => `void` |  方法 |
| `thisArg` | `any` |  域 |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[remove](Type.Type.Action.md#remove)
