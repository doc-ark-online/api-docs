[Extension](../modules/Extension.Extension.md) / Analytics

# Analytics <Badge type="tip" text="Class" /> <Score text="Analytics" />

埋点工具

## Table of contents

| Properties |
| :-----|
| **[data](Extension.Analytics.md#data)**: `any` <br> 数据体|
| **[desc](Extension.Analytics.md#desc)**: `string` <br> 数据说明|

| Methods |
| :-----|
| **[send](Extension.Analytics.md#send)**([`Player`](Gameplay.Player.md)): `void` <br> 上传埋点|
| **[get](Extension.Analytics.md#get)**<extends [`Analytics`](Extension.Analytics.md)<`T`\> |\>([`Class`](../interfaces/Type.Class.md)<`T`\>): extends [`Analytics`](Extension.Analytics.md)<`T`\> | <br> 根据类型获取埋点对象|
| **[setCommonData](Extension.Analytics.md#setcommondata)**(`Map`<`string`, `string` \): `void` <br> 设置公共数据，每个埋点都会附加此数据，由key,value形式组织的字典|

## Properties

### data <Score text="data" /> 

• `Abstract` **data**: `any`

数据体

___

### desc <Score text="desc" /> 

• `Abstract` **desc**: `string`

数据说明

## Methods

### send <Score text="send" /> 

• **send**(`player?`): `void` <Badge type="tip" text="other" />

上传埋点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player?` | [`Player`](Gameplay.Player.md) |  在服务端调用时，指定埋点的玩家，如果不写则全房间玩家都上传，此参数客户端无效 default: null |


___

### get <Score text="get" /> 

• `Static` **get**<`T`\>(`MsgClass`): `T` <Badge type="tip" text="other" />

根据类型获取埋点对象


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Analytics`](Extension.Analytics.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MsgClass` | [`Class`](../interfaces/Type.Class.md)<`T`\> |  埋点数据类 |

#### Returns

`T`

埋点对象

___

### setCommonData <Score text="setCommonData" /> 

• `Static` **setCommonData**(`comData`): `void` <Badge type="tip" text="other" />

设置公共数据，每个埋点都会附加此数据，由key,value形式组织的字典


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comData` | `Map`<`string`, `string` \| `number`\> |  公共数据对象 |

