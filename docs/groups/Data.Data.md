Data

# Data <Badge type="tip" text="Groups" /> <Score text="Data" />

## Table of contents
| Classes |
| :-----|
| [DataCenterC](../classes/Extension.DataCenterC.md) <br> 客户端数据中心，里面存放着当前玩家的数据 |
| [DataCenterS](../classes/Extension.DataCenterS.md) <br> 服务端数据中心，管理所有玩家的数据 |
| [LinearColor](../classes/Type.LinearColor.md) <br> 线性RGBA颜色 |
| [Matrix3x3](../classes/Type.Matrix3x3.md) <br> 三维矩阵 |
| [Matrix4x4](../classes/Type.Matrix4x4.md) <br> 四维矩阵 |
| [Quaternion](../classes/Type.Quaternion.md) <br> 四元数 |
| [Rotation](../classes/Type.Rotation.md) <br> 由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。 |
| [Subdata](../classes/Extension.Subdata.md) <br> 数据控制类的基类 |
| [Transform](../classes/Type.Transform.md) <br> Transform 由缩放、旋转和平移组成 |
| [Vector](../classes/Type.Vector.md) <br> 由分量 (x,y,z) 组成的三维空间中的向量 |
| [Vector2](../classes/Type.Vector2.md) <br> 由分量 (x,y) 组成的二维空间中的向量 |
| [Vector4](../classes/Type.Vector4.md) <br> 由分量 (x,y,z,w) 组成的4D齐次向量 |


| Enums |
| :-----|
| [AssetType](../enums/Type.AssetType.md) <br> 资源类型 |
| [DataStorageResultCode](../enums/DataStorage.DataStorageResultCode.md) <br> 数据储存返回代码 |
| [Keys](../enums/Type.Keys.md) <br> 按键Key值 |
| [NetStatus](../enums/Type.NetStatus.md) <br> 同步状态 |
| [PropertyStatus](../enums/Type.PropertyStatus.md) <br> 属性状态 |


| Modules Functions |
| :-----|
| **[asyncGetCustomData](Data.Data.md#asyncgetcustomdata)**(`key`: `string`): `Promise`<`unknown`\> <br> 异步获取自定义数据|
| **[asyncGetPlayerData](Data.Data.md#asyncgetplayerdata)**(`player`: [`Player`](../classes/Gameplay.Player.md)): `Promise`<`unknown`\> <br> 异步获取玩家数据|
| **[asyncRemoveCustomData](Data.Data.md#asyncremovecustomdata)**(`key`: `string`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步删除自定义数据|
| **[asyncRemovePlayerData](Data.Data.md#asyncremoveplayerdata)**(`player`: [`Player`](../classes/Gameplay.Player.md)): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步删除用户数据|
| **[asyncSetCustomData](Data.Data.md#asyncsetcustomdata)**(`key`: `string`, `value`: `unknown`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[asyncSetPlayerData](Data.Data.md#asyncsetplayerdata)**(`player`: [`Player`](../classes/Gameplay.Player.md), `data`: `unknown`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[setTemporaryStorage](Data.Data.md#settemporarystorage)**(`isTemporary`: `boolean`): `void` <br> 设置数据存储环境是否是临时的|
| **[sizeOfData](Data.Data.md#sizeofdata)**(`data`: `unknown`): `number` <br> 返回data的当前大小。单位为bytes（字节）。|


## Modules Functions


___

### asyncGetCustomData <Score text="asyncGetCustomData" /> 

• **asyncGetCustomData**(`key`): `Promise`<`unknown`\> <Badge type="tip" text="server" />

异步获取自定义数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<`unknown`\>

之前保存的自定义数据

• **asyncGetCustomData**(`key`): `Promise`<`unknown`\>

异步获取自定义数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<`unknown`\>

之前保存的自定义数据

• **asyncGetCustomData**(`key`): `Promise`<`unknown`\>

异步获取自定义数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<`unknown`\>

之前保存的自定义数据

• **asyncGetCustomData**(`key`): `Promise`<`unknown`\>

异步获取自定义数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<`unknown`\>

之前保存的自定义数据
___

### asyncGetPlayerData <Score text="asyncGetPlayerData" /> 

• **asyncGetPlayerData**(`player`): `Promise`<`unknown`\> <Badge type="tip" text="server" />

异步获取玩家数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<`unknown`\>

保存的玩家数据

• **asyncGetPlayerData**(`player`): `Promise`<`unknown`\>

异步获取玩家数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<`unknown`\>

保存的玩家数据

• **asyncGetPlayerData**(`player`): `Promise`<`unknown`\>

异步获取玩家数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<`unknown`\>

保存的玩家数据

• **asyncGetPlayerData**(`player`): `Promise`<`unknown`\>

异步获取玩家数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<`unknown`\>

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

• **asyncRemoveCustomData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步删除自定义数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据删除状态

• **asyncRemoveCustomData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步删除自定义数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据删除状态

• **asyncRemoveCustomData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步删除自定义数据

**`Effect`**


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

• **asyncRemovePlayerData**(`player`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步删除用户数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据储存状态

• **asyncRemovePlayerData**(`player`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步删除用户数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据储存状态

• **asyncRemovePlayerData**(`player`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步删除用户数据

**`Effect`**


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
| `value` | `unknown` | 任意类型的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据储存状态

• **asyncSetCustomData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步设置自定义数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型的键，用来唯一标识存储的数据。 |
| `value` | `unknown` | 任意类型的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据储存状态

• **asyncSetCustomData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步设置自定义数据

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型的键，用来唯一标识存储的数据。 |
| `value` | `unknown` | 任意类型的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

数据储存状态

• **asyncSetCustomData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步设置自定义数据

**`Effect`**


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

• **asyncSetPlayerData**(`player`, `data`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\> <Badge type="tip" text="server" />

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

• **asyncSetPlayerData**(`player`, `data`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步设置自定义数据

**`Effect`**


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

• **asyncSetPlayerData**(`player`, `data`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步设置自定义数据

**`Effect`**


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

• **asyncSetPlayerData**(`player`, `data`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorageResultCode.md)\>

异步设置自定义数据

**`Effect`**


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

• **setTemporaryStorage**(`isTemporary`): `void` <Badge type="tip" text="server" />

设置数据存储环境是否是临时的


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isTemporary` | `boolean` | true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |


• **setTemporaryStorage**(`isTemporary`): `void`

设置数据存储环境是否是临时的

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isTemporary` | `boolean` | true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |


• **setTemporaryStorage**(`isTemporary`): `void`

设置数据存储环境是否是临时的

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isTemporary` | `boolean` | true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |


• **setTemporaryStorage**(`isTemporary`): `void`

设置数据存储环境是否是临时的

**`Effect`**


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
| `data` | `unknown` |  数据键值对对象。 |

#### Returns

`number`

数据大小

• **sizeOfData**(`data`): `number`

返回data的当前大小。单位为bytes（字节）。

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `unknown` |  数据键值对对象。 |

#### Returns

`number`

数据大小

• **sizeOfData**(`data`): `number`

返回data的当前大小。单位为bytes（字节）。

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `unknown` |  数据键值对对象。 |

#### Returns

`number`

数据大小

• **sizeOfData**(`data`): `number`

返回data的当前大小。单位为bytes（字节）。

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `unknown` |  数据键值对对象。 |

#### Returns

`number`
