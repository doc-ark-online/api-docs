[数据处理](../groups/数据处理.数据处理.md) / DataStorage

# DataStorage <Badge type="tip" text="Class" /> <Score text="DataStorage" />

数据存储

## Table of contents

### Methods <Score text="Methods" /> 
| **[asyncGetData](mw.DataStorage.md#asyncgetdata)**(`key`: `string`): `Promise`<[`DataStorageResult`](../interfaces/mw.DataStorageResult.md)\> <Badge type="tip" text="server" />  |
| :-----|
| 异步获取自定义数据|
| **[asyncGetOtherGameData](mw.DataStorage.md#asyncgetothergamedata)**(`gameId`: `string`, `key`: `string`): `Promise`<[`DataStorageResult`](../interfaces/mw.DataStorageResult.md)\> <Badge type="tip" text="server" />  |
| 异步获取其他游戏保存的数据|
| **[asyncRemoveData](mw.DataStorage.md#asyncremovedata)**(`key`: `string`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />  |
| 异步删除自定义数据|
| **[asyncSetData](mw.DataStorage.md#asyncsetdata)**(`key`: `string`, `value`: `any`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />  |
| 异步设置自定义数据|
| **[asyncSetOtherGameData](mw.DataStorage.md#asyncsetothergamedata)**(`gameId`: `string`, `key`: `string`, `value`: `any`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />  |
| 异步设置其他游戏保存的数据|
| **[getDataSize](mw.DataStorage.md#getdatasize)**(`data`: `any`): `number`   |
| 返回data的当前大小。单位为byte（字节）。|
| **[setTemporaryStorage](mw.DataStorage.md#settemporarystorage)**(`isTemporary`: `boolean`): `void` <Badge type="tip" text="server" />  |
| 设置数据存储环境是否是临时的|

## Methods

### asyncGetData <Score text="asyncGetData" /> 

• `Static` **asyncGetData**(`key`): `Promise`<[`DataStorageResult`](../interfaces/mw.DataStorageResult.md)\> <Badge type="tip" text="server" />

异步获取自定义数据

#### Parameters

| `key` `string` | 字符串类型键，用来查找唯一标识存储的数据  <br> range: 字符串长度依据 asyncSetData 设置的而定。 |
| :------ | :------ |

#### Returns

| `Promise`<[`DataStorageResult`](../interfaces/mw.DataStorageResult.md)\> | 之前保存的自定义数据 |
| :------ | :------ |

___

### asyncGetOtherGameData <Score text="asyncGetOtherGameData" /> 

• `Static` **asyncGetOtherGameData**(`gameId`, `key`): `Promise`<[`DataStorageResult`](../interfaces/mw.DataStorageResult.md)\> <Badge type="tip" text="server" />

异步获取其他游戏保存的数据

#### Parameters

| `gameId` `string` | 开发者后台其他游戏的 gameId。 <br> range: 字符串长度依据 gameId 长度而定。 |
| :------ | :------ |
| `key` `string` | 字符串类型键，用来查找唯一标识存储的数据。  <br> range: 字符串长度依据设置长度而定。 |

#### Returns

| `Promise`<[`DataStorageResult`](../interfaces/mw.DataStorageResult.md)\> | 其他游戏保存的数据 |
| :------ | :------ |

___

### asyncRemoveData <Score text="asyncRemoveData" /> 

• `Static` **asyncRemoveData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步删除自定义数据

#### Parameters

| `key` `string` | 字符串类型键，用来查找唯一标识存储的数据  <br> range: 字符串长度依据 asyncSetData 设置的而定。 |
| :------ | :------ |

#### Returns

| `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> | 数据删除状态 |
| :------ | :------ |

___

### asyncSetData <Score text="asyncSetData" /> 

• `Static` **asyncSetData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步设置自定义数据

#### Parameters

| `key` `string` | 字符串类型的键，用来唯一标识存储的数据。 <br> range: 字符串长度不做限制，但请设置合适的标识。 |
| :------ | :------ |
| `value` `any` | 要保存的数据，不支持 map 类型及数据结构中包含 map，且无法还原 function |

#### Returns

| `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> | 数据储存状态 |
| :------ | :------ |

___

### asyncSetOtherGameData <Score text="asyncSetOtherGameData" /> 

• `Static` **asyncSetOtherGameData**(`gameId`, `key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步设置其他游戏保存的数据

#### Parameters

| `gameId` `string` | 开发者后台其他游戏的 gameId  <br> range: 字符串长度依据 gameId 长度而定。 |
| :------ | :------ |
| `key` `string` | 字符串类型键，用来查找唯一标识存储的数据  <br> range: 字符串长度依据设置长度而定。 |
| `value` `any` | 要保存的数据，不支持 map 类型及数据结构中包含 map，且无法还原 function |

#### Returns

| `Promise`<[`DataStorageResultCode`](../enums/mw.DataStorageResultCode.md)\> | 设置其他游戏的数据状态码 |
| :------ | :------ |

___

### getDataSize <Score text="getDataSize" /> 

• `Static` **getDataSize**(`data`): `number` 

返回data的当前大小。单位为byte（字节）。

#### Parameters

| `data` `any` |  数据键值对对象。 |
| :------ | :------ |

#### Returns

| `number` | 数据大小 |
| :------ | :------ |

___

### setTemporaryStorage <Score text="setTemporaryStorage" /> 

• `Static` **setTemporaryStorage**(`isTemporary`): `void` <Badge type="tip" text="server" />

设置数据存储环境是否是临时的

#### Parameters

| `isTemporary` `boolean` | true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false 为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |
| :------ | :------ |

