Data

# Data <Badge type="tip" text="Groups" /> <Score text="Data" />

## Table of contents
| Classes |
| :-----|
| [DataCenterC](../classes/Extension.DataCenterC.md) <br> 客户端数据中心，里面存放着当前玩家的数据 |
| [DataCenterS](../classes/Extension.DataCenterS.md) <br> 服务端数据中心，管理所有玩家的数据 |
| [Subdata](../classes/Extension.Subdata.md) <br> 数据控制类的基类 |


| Enums |
| :-----|
| [DataStorageResultCode](../enums/DataStorage.DataStorageResultCode.md) <br> 数据储存返回代码 |


| Modules Functions |
| :-----|
| **[asyncGetCustomData](Data.Data.md#asyncgetcustomdata)**(`key`: `string`): `Promise`<`any`\> <br> 异步获取自定义数据|
| **[asyncGetOtherGameData](Data.Data.md#asyncgetothergamedata)**(`gameId`: `string`, `key`: `string`): `Promise`<`any`\> <br> 异步获取其他游戏保存的数据|
| **[asyncGetPlayerData](Data.Data.md#asyncgetplayerdata)**(`player`: [`Player`](../classes/Gameplay.Player.md)): `Promise`<`any`\> <br> 异步获取玩家数据|
| **[asyncRemoveCustomData](Data.Data.md#asyncremovecustomdata)**(`key`: `string`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步删除自定义数据|
| **[asyncRemovePlayerData](Data.Data.md#asyncremoveplayerdata)**(`player`: [`Player`](../classes/Gameplay.Player.md)): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步删除用户数据|
| **[asyncSetCustomData](Data.Data.md#asyncsetcustomdata)**(`key`: `string`, `value`: `any`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[asyncSetOtherGameData](Data.Data.md#asyncsetothergamedata)**(`gameId`: `string`, `key`: `string`, `value`: `any`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步设置其他游戏保存的数据|
| **[asyncSetPlayerData](Data.Data.md#asyncsetplayerdata)**(`player`: [`Player`](../classes/Gameplay.Player.md), `data`: `any`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[setTemporaryStorage](Data.Data.md#settemporarystorage)**(`isTemporary`: `boolean`): `void` <br> 设置数据存储环境是否是临时的|
| **[sizeOfData](Data.Data.md#sizeofdata)**(`data`: `any`): `number` <br> 返回data的当前大小。单位为bytes（字节）。|


## Modules Functions


___

### asyncGetCustomData <Score text="asyncGetCustomData" /> 

• **asyncGetCustomData**(`key`): `Promise`<`any`\> <Badge type="tip" text="server" />

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

### asyncGetPlayerData <Score text="asyncGetPlayerData" /> 

• **asyncGetPlayerData**(`player`): `Promise`<`any`\> <Badge type="tip" text="server" />

异步获取玩家数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<`any`\>

保存的玩家数据
___

### asyncRemoveCustomData <Score text="asyncRemoveCustomData" /> 

• **asyncRemoveCustomData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步删除自定义数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据删除状态
___

### asyncRemovePlayerData <Score text="asyncRemovePlayerData" /> 

• **asyncRemovePlayerData**(`player`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步删除用户数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据储存状态
___

### asyncSetCustomData <Score text="asyncSetCustomData" /> 

• **asyncSetCustomData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步设置自定义数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型的键，用来唯一标识存储的数据。 |
| `value` | `any` | 要保存的数据,不支持map类型及数据结构中包含map,且无法还原function |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据储存状态
___

### asyncSetOtherGameData <Score text="asyncSetOtherGameData" /> 

• **asyncSetOtherGameData**(`gameId`, `key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步设置其他游戏保存的数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | 开发者后台其他游戏的gameId |
| `key` | `string` | 字符串类型键 |
| `value` | `any` | 要保存的数据,不支持map类型及数据结构中包含map,且无法还原function |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

设置其他游戏的数据状态码
___

### asyncSetPlayerData <Score text="asyncSetPlayerData" /> 

• **asyncSetPlayerData**(`player`, `data`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

异步设置自定义数据


::: warning Precautions

每个玩家在每一个游戏中允许最多存储16Kb的编码数据。超过此限制的任何数据都不能保证被存储。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |
| `data` | `any` | 要保存的数据,不支持map类型及数据结构中包含map,且无法还原function |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

设置操作结果
___

### setTemporaryStorage <Score text="setTemporaryStorage" /> 

• **setTemporaryStorage**(`isTemporary`): `void` <Badge type="tip" text="server" />

设置数据存储环境是否是临时的


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isTemporary` | `boolean` | true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |

___

### sizeOfData <Score text="sizeOfData" /> 

• **sizeOfData**(`data`): `number` <Badge type="tip" text="server" />

返回data的当前大小。单位为bytes（字节）。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` |  数据键值对对象。 |

#### Returns

`number`
