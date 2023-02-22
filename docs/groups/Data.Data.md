Data

# Data <Badge type="tip" text="Groups" /> <Score text="Data" />

## Table of contents
| Classes |
| :-----|
| [DataCenterC](../classes/Extension.DataCenterC.md) <br> 客户端数据中心，里面存放着当前玩家的数据 |
| [DataCenterS](../classes/Extension.DataCenterS.md) <br> 服务端数据中心，管理所有玩家的数据 |
| [Subdata](../classes/Extension.Subdata.md) <br> 数据控制类的基类 |
| [LinearColor](../classes/Type.LinearColor.md) <br> 线性RGBA颜色 |
| [Matrix3x3](../classes/Type.Matrix3x3.md) <br> 三维矩阵 |
| [Matrix4x4](../classes/Type.Matrix4x4.md) <br> 四维矩阵 |
| [Quaternion](../classes/Type.Quaternion.md) <br> 四元数 |
| [Rotation](../classes/Type.Rotation.md) <br> 由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。 |
| [Transform](../classes/Type.Transform.md) <br> Transform 由缩放、旋转和平移组成 |
| [Vector](../classes/Type.Vector.md) <br> 由分量 (x,y,z) 组成的三维空间中的向量 |
| [Vector2](../classes/Type.Vector2.md) <br> 由分量 (x,y) 组成的二维空间中的向量 |
| [Vector4](../classes/Type.Vector4.md) <br> 由分量 (x,y,z,w) 组成的4D齐次向量 |


| Enums |
| :-----|
| [DataStorageResultCode](../enums/DataStorage.DataStorageResultCode.md) <br> 数据储存返回代码 |
| [AssetType](../enums/Type.AssetType.md) <br> 资源类型 |
| [Keys](../enums/Type.Keys.md) <br> 按键Key值 |
| [NetStatus](../enums/Type.NetStatus.md) <br> 同步状态 |
| [PropertyStatus](../enums/Type.PropertyStatus.md) <br> 属性状态 |


| Modules Functions |
| :-----|
| **[asyncGetCustomData](../modules/DataStorage.DataStorage.md#asyncgetcustomdata)**(`key`: `string`): `Promise`<`unknown`\> <br> 异步获取自定义数据|
| **[asyncGetPlayerData](../modules/DataStorage.DataStorage.md#asyncgetplayerdata)**(`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md)): `Promise`<`unknown`\> <br> 异步获取玩家数据|
| **[asyncRemoveCustomData](../modules/DataStorage.DataStorage.md#asyncremovecustomdata)**(`key`: `string`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\> <br> 异步删除自定义数据|
| **[asyncRemovePlayerData](../modules/DataStorage.DataStorage.md#asyncremoveplayerdata)**(`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md)): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\> <br> 异步删除用户数据|
| **[asyncSetCustomData](../modules/DataStorage.DataStorage.md#asyncsetcustomdata)**(`key`: `string`, `value`: `unknown`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[asyncSetPlayerData](../modules/DataStorage.DataStorage.md#asyncsetplayerdata)**(`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md), `data`: `unknown`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[setTemporaryStorage](../modules/DataStorage.DataStorage.md#settemporarystorage)**(`isTemporary`: `boolean`): `void` <br> 设置数据存储环境是否是临时的|
| **[sizeOfData](../modules/DataStorage.DataStorage.md#sizeofdata)**(`data`: `unknown`): `number` <br> 返回data的当前大小。单位为bytes（字节）。|

