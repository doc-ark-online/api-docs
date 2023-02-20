[Type](../modules/Type.Type.md) / Action

# Action <Badge type="tip" text="Class" /> <Score text="Action" />

**`Groups`**

SCRIPITING

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

### count <Score text="count" /> 

• `get` **count**(): `number` <Badge type="tip" text="other" />

监听方法的数量


#### Returns

`number`

## Methods

### add <Score text="add" /> 

• **add**(`fn`, `thisArg?`): `void` <Badge type="tip" text="other" />

添加一个监听方法(有重复过滤)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` |  方法 |
| `thisArg?` | `any` |  域 default: undefined |


___

### call <Score text="call" /> 

• **call**(`...params`): `void` <Badge type="tip" text="other" />

执行


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...params` | `any` |  参数序列 |


___

### clear <Score text="clear" /> 

• **clear**(): `void` <Badge type="tip" text="other" />

清除所有监听



___

### includes <Score text="includes" /> 

• **includes**(`fn`, `thisArg`): `boolean` <Badge type="tip" text="other" />

判断是否包含某个监听方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` |  方法 |
| `thisArg` | `any` |  域 |

#### Returns

`boolean`

结果

___

### remove <Score text="remove" /> 

• **remove**(`fn`, `thisArg`): `void` <Badge type="tip" text="other" />

移除一个监听方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` |  方法 |
| `thisArg` | `any` |  域 |

