[Type](../modules/Type.Type.md) / Action

# Action <Badge type="tip" text="Class" />

**`Description`**

任意参数的代理

## Hierarchy

- **`Action`**

  ↳ [`Action1`](Type.Action1.md)

  ↳ [`Action2`](Type.Action2.md)

  ↳ [`Action3`](Type.Action3.md)

## Table of contents

| Accessors |
| :-----|
| **[count](Type.Action.md#count)**(): `number` <br> 监听方法的数量|

| Methods |
| :-----|
| **[add](Type.Action.md#add)**(`Function`, `any`): `void` <br> 添加一个监听方法(有重复过滤)|
| **[call](Type.Action.md#call)**(`any`): `void` <br> 执行|
| **[clear](Type.Action.md#clear)**(): `void` <br> 清除所有监听|
| **[includes](Type.Action.md#includes)**(`Function`, `any`): `boolean` <br> 判断是否包含某个监听方法|
| **[remove](Type.Action.md#remove)**(`Function`, `any`): `void` <br> 移除一个监听方法|

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
| `fn` | `Function` |  方法 |
| `thisArg?` | `any` |  域 default: undefined |

#### Returns

`void`

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
| `...params` | `any` |  参数序列 |

#### Returns

`void`

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
| `fn` | `Function` |  方法 |
| `thisArg` | `any` |  域 |

#### Returns

`void`
