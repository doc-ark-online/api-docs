[Type](../modules/Type.Type.md) / Action2

# Action2<T, S\> <Badge type="tip" text="Class" />

**`Description`**

两个参数的代理

## Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |

## Hierarchy

- [`Action`](Type.Type.Action.md)

  ↳ **`Action2`**

## Table of contents

| Accessors                                                               |
| :---------------------------------------------------------------------- |
| **[count](Type.Type.Action2.md#count)**(): `number` <br> 监听方法的数量 |

| Methods                                                                                                              |
| :------------------------------------------------------------------------------------------------------------------- |
| **[add](Type.Type.Action2.md#add)**((`a`: `T`, `b`: `S`) => `void`, `any`): `void` <br> 添加一个监听方法(有重复过滤) |
| **[call](Type.Type.Action2.md#call)**(`T`, `S`): `void` <br> 执行                                                    |
| **[clear](Type.Type.Action2.md#clear)**(): `void` <br> 清除所有监听                                                  |
| **[includes](Type.Type.Action2.md#includes)**(`Function`, `any`): `boolean` <br> 判断是否包含某个监听方法            |
| **[remove](Type.Type.Action2.md#remove)**((`a`: `T`, `b`: `S`) => `void`, `any`): `void` <br> 移除一个监听方法       |

#### Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |

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

| Name       | Type                           | Description           |
| :--------- | :----------------------------- | :-------------------- |
| `fn`       | (`a`: `T`, `b`: `S`) => `void` | 方法                  |
| `thisArg?` | `any`                          | 域 default: undefined |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[add](Type.Type.Action.md#add)

---

### call

▸ **call**(`a`, `b`): `void`

**`Description`**

执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `a`  | `T`  | 参数 a      |
| `b`  | `S`  | 参数 b      |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[call](Type.Type.Action.md#call)

---

### clear

▸ **clear**(): `void`

**`Description`**

清除所有监听

**`Effect`**

调用端生效

#### Returns

`void`

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
| `fn`      | `Function` | 方法        |
| `thisArg` | `any`      | 域          |

#### Returns

`boolean`

结果

---

### remove

▸ **remove**(`fn`, `thisArg`): `void`

**`Description`**

移除一个监听方法

**`Effect`**

调用端生效

#### Parameters

| Name      | Type                           | Description |
| :-------- | :----------------------------- | :---------- |
| `fn`      | (`a`: `T`, `b`: `S`) => `void` | 方法        |
| `thisArg` | `any`                          | 域          |

#### Returns

`void`

#### Overrides

[Action](Type.Type.Action.md).[remove](Type.Type.Action.md#remove)
