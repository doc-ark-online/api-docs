[工具](../groups/工具.工具.md) / ModelUtil

# ModelUtil <Badge type="tip" text="Class" /> <Score text="ModelUtil" />

模型工具类

::: warning Precautions

不支持ds游戏

:::

## Table of contents

### Methods <Score text="Methods" /> 
| **[negate](mw.ModelUtil.md#negate)**(`object`: [`Model`](mw.Model.md)): `void`   |
| :-----|
| 设置模型镂空状态|
| **[separate](mw.ModelUtil.md#separate)**(`object`: [`Model`](mw.Model.md)): `Promise`<[`Model`](mw.Model.md)[]\>   |
| 分离模型|
| **[union](mw.ModelUtil.md#union)**(`object1`: [`Model`](mw.Model.md), `object2`: [`Model`](mw.Model.md)): `Promise`<[`Model`](mw.Model.md)\>   |
| 合并模型|

## Methods

### negate <Score text="negate" /> 

• `Static` **negate**(`object`): `void` 

设置模型镂空状态

#### Parameters

| `object` [`Model`](mw.Model.md) |  Model |
| :------ | :------ |


___

### separate <Score text="separate" /> 

• `Static` **separate**(`object`): `Promise`<[`Model`](mw.Model.md)[]\> 

分离模型

#### Parameters

| `object` [`Model`](mw.Model.md) | Model |
| :------ | :------ |

#### Returns

| `Promise`<[`Model`](mw.Model.md)[]\> | Model |
| :------ | :------ |

___

### union <Score text="union" /> 

• `Static` **union**(`object1`, `object2`): `Promise`<[`Model`](mw.Model.md)\> 

合并模型

#### Parameters

| `object1` [`Model`](mw.Model.md) | Model |
| :------ | :------ |
| `object2` [`Model`](mw.Model.md) | Model |

#### Returns

| `Promise`<[`Model`](mw.Model.md)\> | Model |
| :------ | :------ |
