[Gameplay](../modules/Gameplay.Gameplay.md) / IFourFootStandard

# IFourFootStandard <Badge type="tip" text="Interface" /> <Score text="IFourFootStandard" />

标准四足接口

**`Groups`**

AVATAR

## Implemented by

- [`FourFootStandard`](../classes/Gameplay.FourFootStandard.md)

## Table of contents

| Methods |
| :-----|
| **[changeSomatotype](Gameplay.IFourFootStandard.md#changesomatotype)**(`value`: [`SomatotypeFourFootStandard`](../enums/Gameplay.SomatotypeFourFootStandard.md), `sync`: `boolean`): `void` <br> 切换体型|
| **[getSomatotype](Gameplay.IFourFootStandard.md#getsomatotype)**(): [`SomatotypeFourFootStandard`](../enums/Gameplay.SomatotypeFourFootStandard.md) <br> 获取当前的体型类型|
| **[getWholeBody](Gameplay.IFourFootStandard.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setWholeBody](Gameplay.IFourFootStandard.md#setwholebody)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置全身模型|

## Methods

### changeSomatotype <Score text="changeSomatotype" /> 

• **changeSomatotype**(`value`, `sync`): `void` 

切换体型

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`SomatotypeFourFootStandard`](../enums/Gameplay.SomatotypeFourFootStandard.md) |  体型枚举 SomatotypeFourFootStandard |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### getSomatotype <Score text="getSomatotype" /> 

• **getSomatotype**(): [`SomatotypeFourFootStandard`](../enums/Gameplay.SomatotypeFourFootStandard.md) 

获取当前的体型类型


#### Returns

[`SomatotypeFourFootStandard`](../enums/Gameplay.SomatotypeFourFootStandard.md)

体型类型 SomatotypeFourFootStandard

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

