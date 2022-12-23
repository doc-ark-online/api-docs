[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [DataStorage](DataStorage.md) / DataStorage

# Namespace: DataStorage

[DataStorage](DataStorage.md).DataStorage

## Table of contents

### Enumerations

- [DataStorageResultCode](../enums/DataStorage.DataStorage.DataStorageResultCode.md)

### Functions

- [asyncGetCustomData](DataStorage.DataStorage.md#asyncgetcustomdata)
- [asyncGetPlayerData](DataStorage.DataStorage.md#asyncgetplayerdata)
- [asyncRemoveCustomData](DataStorage.DataStorage.md#asyncremovecustomdata)
- [asyncRemovePlayerData](DataStorage.DataStorage.md#asyncremoveplayerdata)
- [asyncSetCustomData](DataStorage.DataStorage.md#asyncsetcustomdata)
- [asyncSetPlayerData](DataStorage.DataStorage.md#asyncsetplayerdata)
- [setTemporaryStorage](DataStorage.DataStorage.md#settemporarystorage)
- [sizeOfData](DataStorage.DataStorage.md#sizeofdata)

## Functions

### asyncGetCustomData

▸ **asyncGetCustomData**(`key`): `Promise`<`unknown`\>

**`Description`**

异步获取自定义数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | usage:字符串类型键 |

#### Returns

`Promise`<`unknown`\>

之前保存的自定义数据

#### Defined in

DataStorage/index.d.ts:75

___

### asyncGetPlayerData

▸ **asyncGetPlayerData**(`player`): `Promise`<`unknown`\>

**`Description`**

异步获取玩家数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Gameplay.Player.md) | usage:玩家对象 |

#### Returns

`Promise`<`unknown`\>

保存的玩家数据

#### Defined in

DataStorage/index.d.ts:48

___

### asyncRemoveCustomData

▸ **asyncRemoveCustomData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

**`Description`**

异步删除自定义数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | usage:字符串类型键 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

数据删除状态

#### Defined in

DataStorage/index.d.ts:82

___

### asyncRemovePlayerData

▸ **asyncRemovePlayerData**(`player`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

**`Description`**

异步删除用户数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Gameplay.Player.md) | usage:玩家对象 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

数据储存状态

#### Defined in

DataStorage/index.d.ts:55

___

### asyncSetCustomData

▸ **asyncSetCustomData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

**`Description`**

异步设置自定义数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | usage:字符串类型的键，用来唯一标识存储的数据。 |
| `value` | `unknown` | usage:任意类型的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

数据储存状态

#### Defined in

DataStorage/index.d.ts:65

___

### asyncSetPlayerData

▸ **asyncSetPlayerData**(`player`, `data`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

**`Description`**

异步设置自定义数据

**`Effect`**

只在服务端调用生效

**`Precautions`**

每个玩家在每一个游戏中允许最多存储16Kb的编码数据。超过此限制的任何数据都不能保证被存储。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Gameplay.Player.md) | usage:玩家对象 |
| `data` | `unknown` | usage:要保存的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

设置操作结果

#### Defined in

DataStorage/index.d.ts:38

___

### setTemporaryStorage

▸ **setTemporaryStorage**(`isTemporary`): `void`

**`Description`**

设置数据存储环境是否是临时的

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isTemporary` | `boolean` | usage:true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |

#### Returns

`void`

#### Defined in

DataStorage/index.d.ts:88

___

### sizeOfData

▸ **sizeOfData**(`data`): `number`

**`Description`**

返回data的当前大小。单位为bytes（字节）。

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `unknown` | usage: 数据键值对对象。 |

#### Returns

`number`

数据大小

#### Defined in

DataStorage/index.d.ts:29
