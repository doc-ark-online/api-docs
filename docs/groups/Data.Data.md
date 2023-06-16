Data

# Data <Badge type="tip" text="Groups" /> <Score text="Data" />

## Table of contents
| Classes |
| :-----|
| [DataCenterC](../classes/mw.DataCenterC.md) <br> 客户端数据中心，里面存放着当前玩家的数据 |
| [DataCenterS](../classes/mw.DataCenterS.md) <br> 服务端数据中心，管理所有玩家的数据 |
| [Subdata](../classes/mw.Subdata.md) <br> 数据控制类的基类 |


| Enums |
| :-----|
| [DataStorageResultCode](../enums/mw.DataStorageResultCode.md) <br> 数据储存返回代码 |


| Modules Functions |
| :-----|
| **[asyncGetData](Data.Data.md#asyncgetdata)**(`key`: `string`): `Promise`<`any`\> <br> 异步获取自定义数据|
| **[asyncGetOtherGameData](Data.Data.md#asyncgetothergamedata)**(`gameId`: `string`, `key`: `string`): `Promise`<`any`\> <br> 异步获取其他游戏保存的数据|
| **[asyncRemoveData](Data.Data.md#asyncremovedata)**(`key`: `string`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <br> 异步删除自定义数据|
| **[asyncSetData](Data.Data.md#asyncsetdata)**(`key`: `string`, `value`: `any`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[asyncSetOtherGameData](Data.Data.md#asyncsetothergamedata)**(`gameId`: `string`, `key`: `string`, `value`: `any`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <br> 异步设置其他游戏保存的数据|
| **[getDataSize](Data.Data.md#getdatasize)**(`data`: `any`): `number` <br> 返回data的当前大小。单位为bytes（字节）。|
| **[setTemporaryStorage](Data.Data.md#settemporarystorage)**(`isTemporary`: `boolean`): `void` <br> 设置数据存储环境是否是临时的|


## Modules Functions


___

### asyncGetData <Score text="asyncGetData" /> 

• **asyncGetData**(`key`): `Promise`<`any`\> <Badge type="tip" text="server" />

异步获取自定义数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<`any`\>

之前保存的自定义数据
___

### asyncGetOtherGameData <Score text="asyncGetOtherGameData" /> 

• **asyncGetOtherGameData**(`gameId`, `key`): `Promise`<`any`\> <Badge type="tip" text="server" />

异步获取其他游戏保存的数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | 开发者后台其他游戏的gameId |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<`any`\>

其他游戏保存的数据
___

### asyncRemoveData <Score text="asyncRemoveData" /> 

• **asyncRemoveData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步删除自定义数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\>

数据删除状态
___

### asyncSetData <Score text="asyncSetData" /> 

• **asyncSetData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步设置自定义数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型的键，用来唯一标识存储的数据。 |
| `value` | `any` | 要保存的数据,不支持map类型及数据结构中包含map,且无法还原function |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\>

数据储存状态
___

### asyncSetOtherGameData <Score text="asyncSetOtherGameData" /> 

• **asyncSetOtherGameData**(`gameId`, `key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步设置其他游戏保存的数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | 开发者后台其他游戏的gameId |
| `key` | `string` | 字符串类型键 |
| `value` | `any` | 要保存的数据,不支持map类型及数据结构中包含map,且无法还原function |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\>

设置其他游戏的数据状态码
___

### getDataSize <Score text="getDataSize" /> 

• **getDataSize**(`data`): `number` <Badge type="tip" text="server" />

返回data的当前大小。单位为bytes（字节）。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` |  数据键值对对象。 |

#### Returns

`number`

数据大小
___

### setTemporaryStorage <Score text="setTemporaryStorage" /> 

• **setTemporaryStorage**(`isTemporary`): `void` <Badge type="tip" text="server" />

设置数据存储环境是否是临时的


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isTemporary` | `boolean` | true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |
