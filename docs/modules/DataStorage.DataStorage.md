# DataStorage <Badge type="tip" text="Namespace" />

在调用DataStorage相关接口时，每一个Key的对应值在后端数据服务器的读取和修改都有频率、间隔限制，主要表现在：  【总频率限制】接口调用时至一分钟前的时间区间内，某个Key的对应值在后端数据服务器上被获取Get、改写Set、删除Remove的总次数不能超过 (60+游戏设定的最大人数×10)次，不管它是在哪个ds服务器被操作的；如果时间区间内超限，请求会失败，然后Set、Remove会返回 FREQUENCY_OVERRUN(操作失败：请求频率超限) 而Get会catch到error timeout。  【改写间隔限制】对于某个Key的对应值，在后端数据服务器上进行了1次改写Set 或 删除Remove操作后，该Key的对应值将会被锁定6s，在这6s内将无法再被Set、remove，尝试将会返回 FREQUENCY_OVERRUN(操作失败：请求频率超限)，直到6s过去解锁后才可修改

::: warning Precautions

1.这些限制是后端数据服务器层面针对单个Key来的，每个Key之间的限制互相独立，和DS服务器无关。  
2.Player相关的接口其实也算是一个Key，只不过是和玩家信息强相关的Key，也会受到上述限制；建议用 asyncSetCustomData(属性名+玩家id+其他描述, 要存的值) 代替asyncSetPlayerData(玩家, 要存的值) 来分存玩家相关的需要经常存取数据，以免堵塞。  
3.对于玩家相关的信息，建议在ts层建立数据缓存，进行一定的数据托管；即通过ts脚本逻辑让DS服务器临时缓存玩家数据，只在初始化的时候进行get，在离线或其他必要时set，以减轻对后端数据服务器的压力，保证稳定性

:::

## Table of contents

| Enumerations |
| :-----|
| [DataStorageResultCode](../enums/DataStorage.DataStorageResultCode.md) <br> 数据储存返回代码|

| Functions |
| :-----|
| **[asyncGetCustomData](DataStorage.DataStorage.md#asyncgetcustomdata)**(`string`): `Promise`<`unknown`\> <br> 异步获取自定义数据|
| **[asyncGetPlayerData](DataStorage.DataStorage.md#asyncgetplayerdata)**([`Player`](../classes/Gameplay.Player.md)): `Promise`<`unknown`\> <br> 异步获取玩家数据|
| **[asyncRemoveCustomData](DataStorage.DataStorage.md#asyncremovecustomdata)**(`string`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步删除自定义数据|
| **[asyncRemovePlayerData](DataStorage.DataStorage.md#asyncremoveplayerdata)**([`Player`](../classes/Gameplay.Player.md)): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步删除用户数据|
| **[asyncSetCustomData](DataStorage.DataStorage.md#asyncsetcustomdata)**(`string`, `unknown`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[asyncSetPlayerData](DataStorage.DataStorage.md#asyncsetplayerdata)**([`Player`](../classes/Gameplay.Player.md), `unknown`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[setTemporaryStorage](DataStorage.DataStorage.md#settemporarystorage)**(`boolean`): `void` <br> 设置数据存储环境是否是临时的|
| **[sizeOfData](DataStorage.DataStorage.md#sizeofdata)**(`unknown`): `number` <br> 返回data的当前大小。单位为bytes（字节）。|

## Functions

### asyncGetCustomData <Score text="asyncGetCustomData" /> 

▸ **asyncGetCustomData**(`key`): `Promise`<`unknown`\> <Badge type="tip" text="other" />

异步获取自定义数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<`unknown`\>

之前保存的自定义数据

___

### asyncGetPlayerData <Score text="asyncGetPlayerData" /> 

▸ **asyncGetPlayerData**(`player`): `Promise`<`unknown`\> <Badge type="tip" text="other" />

异步获取玩家数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<`unknown`\>

保存的玩家数据

___

### asyncRemoveCustomData <Score text="asyncRemoveCustomData" /> 

▸ **asyncRemoveCustomData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="other" />

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

▸ **asyncRemovePlayerData**(`player`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="other" />

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

▸ **asyncSetCustomData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="other" />

异步设置自定义数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型的键，用来唯一标识存储的数据。 |
| `value` | `unknown` | 任意类型的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据储存状态

___

### asyncSetPlayerData <Score text="asyncSetPlayerData" /> 

▸ **asyncSetPlayerData**(`player`, `data`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="other" />

异步设置自定义数据


::: warning Precautions

每个玩家在每一个游戏中允许最多存储16Kb的编码数据。超过此限制的任何数据都不能保证被存储。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |
| `data` | `unknown` | 要保存的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

设置操作结果

___

### setTemporaryStorage <Score text="setTemporaryStorage" /> 

▸ **setTemporaryStorage**(`isTemporary`): `void` <Badge type="tip" text="other" />

设置数据存储环境是否是临时的


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isTemporary` | `boolean` | true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |


___

### sizeOfData <Score text="sizeOfData" /> 

▸ **sizeOfData**(`data`): `number` <Badge type="tip" text="other" />

返回data的当前大小。单位为bytes（字节）。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `unknown` |  数据键值对对象。 |

#### Returns

`number`

数据大小
