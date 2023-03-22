[Avatar](../groups/Avatar.Avatar.md) / IHumanoidV1

# IHumanoidV1 <Badge type="tip" text="Interface" /> <Score text="IHumanoidV1" />

人形对象V1接口

## Implemented by

- [`HumanoidV1`](../classes/Gameplay.HumanoidV1.md)

## Table of contents

| Methods |
| :-----|
| **[changeSomatotype](Gameplay.IHumanoidV1.md#changesomatotype)**(`value`: [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md), `sync`: `boolean`): `void` <br> 切换v1体型|
| **[getSomatotype](Gameplay.IHumanoidV1.md#getsomatotype)**(): [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md) <br> 获取当前的体型类型|
| **[getWholeBody](Gameplay.IHumanoidV1.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setWholeBody](Gameplay.IHumanoidV1.md#setwholebody)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置全身模型|

## Methods

### changeSomatotype <Score text="changeSomatotype" /> 

• **changeSomatotype**(`value`, `sync`): `void` 

切换v1体型

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md) |  体型类型枚举 SomatotypeV1 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### getSomatotype <Score text="getSomatotype" /> 

• **getSomatotype**(): [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md) 

获取当前的体型类型


#### Returns

[`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md)

体型类型 SomatotypeV1

___

### getWholeBody <Score text="getWholeBody" /> 

• **getWholeBody**(): `string` 

获取全身模型


#### Returns

`string`

模型GUID

___

### setWholeBody <Score text="setWholeBody" /> 

• **setWholeBody**(`GUID`, `sync`): `void` 

设置全身模型

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |

