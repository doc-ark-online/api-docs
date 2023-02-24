[Utility](../groups/Utility.Utility.md) / DataCenterS

# DataCenterS <Badge type="tip" text="Class" /> <Score text="DataCenterS" />

**`Groups`**

DATA

服务端数据中心，管理所有玩家的数据

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Properties |
| :-----|
| **[onPlayerJoined](Extension.DataCenterS.md#onplayerjoined)**: [`Action1`](Type.Action1.md)<[`Player`](Gameplay.Player.md)\> <br> 获取玩家的子数据|
| **[onPlayerLeft](Extension.DataCenterS.md#onplayerleft)**: [`Action1`](Type.Action1.md)<[`Player`](Gameplay.Player.md)\> <br> 获取玩家的子数据|

| Methods |
| :-----|
| **[getData](Extension.DataCenterS.md#getdata)**<`T`: extends [`Subdata`](Extension.Subdata.md)<`T`\>\>(`player`: `number` \, `SubdataType`: [`TypeName`](../interfaces/Type.TypeName.md)<`T`\>): `T`: extends [`Subdata`](Extension.Subdata.md)<`T`\> <br> 获取玩家的子数据|
| **[getReadyPlayerIds](Extension.DataCenterS.md#getreadyplayerids)**(): `number`[] <br> 获取在线且数据就绪的所有玩家ID|
| **[getInstance](Extension.DataCenterS.md#getinstance)**(): [`DataCenterS`](Extension.DataCenterS.md) <br> 获取服务端数据中心全局实例|

## Properties

### onPlayerJoined <Score text="onPlayerJoined" /> 

• `Readonly` **onPlayerJoined**: [`Action1`](Type.Action1.md)<[`Player`](Gameplay.Player.md)\>

玩家进入游戏的委托，当委托被调用的时候，可以保证玩家的数据是就绪的

___

### onPlayerLeft <Score text="onPlayerLeft" /> 

• `Readonly` **onPlayerLeft**: [`Action1`](Type.Action1.md)<[`Player`](Gameplay.Player.md)\>

玩家离开游戏的委托，可用作玩家最后的数据处理

## Methods

### getData <Score text="getData" /> 

• **getData**<`T`\>(`player`, `SubdataType`): `T` <Badge type="tip" text="server" />

获取玩家的子数据


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Subdata`](Extension.Subdata.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](Gameplay.Player.md) |  玩家 |
| `SubdataType` | [`TypeName`](../interfaces/Type.TypeName.md)<`T`\> |  数据类 |

#### Returns

`T`

数据对象

___

### getReadyPlayerIds <Score text="getReadyPlayerIds" /> 

• **getReadyPlayerIds**(): `number`[] <Badge type="tip" text="server" />

获取在线且数据就绪的所有玩家ID


#### Returns

`number`[]

玩家id数组

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`DataCenterS`](Extension.DataCenterS.md) <Badge type="tip" text="server" />

获取服务端数据中心全局实例


#### Returns

[`DataCenterS`](Extension.DataCenterS.md)

服务端数据中心全局实例
