[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV1Part

# IHumanoidV1Part <Badge type="tip" text="Interface" /> <Score text="IHumanoidV1Part" />

人形对象V1部位

## Implemented by

- [`HumanoidV1`](../classes/Gameplay.HumanoidV1.md)

## Table of contents

| Methods |
| :-----|
| **[getWholeBody](Gameplay.IHumanoidV1Part.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setWholeBody](Gameplay.IHumanoidV1Part.md#setwholebody)**(`string`, `boolean`): `void` <br> 设置全身模型|

## Methods

### getWholeBody <Score text="getWholeBody" /> 

▸ **getWholeBody**(): `string` <Badge type="tip" text="other" />

获取全身模型

双端

#### Returns

`string`

模型GUID

___

### setWholeBody <Score text="setWholeBody" /> 

▸ **setWholeBody**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置全身模型

::: warning Precautions

如果模型GUID没有预加载，则v2本地设置时异步的

:::

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |

