[界面](../groups/Extension.界面.md) / LeaderboardModuleBaseS

# LeaderboardModuleBaseS<T\> <Badge type="tip" text="Class" /> <Score text="LeaderboardModuleBaseS<T\>" />

排行榜模块-服务端

## Type parameters

| `T` | extends [`LeaderboardModuleTypeC`](../modules/Extension.mwext.md#leaderboardmoduletypec) |
| :------ | :------ |

## Hierarchy

- [`ModuleS`](mwext.ModuleS.md)<`T`, `any`\>

  ↳ **`LeaderboardModuleBaseS`**

## Table of contents

### Accessors <Score text="Accessors" /> 


::: details click
### Accessors <Score text="Accessors" /> 
| **[currentData](mwext.ModuleS.md#currentdata)**(): `S`  |
| :-----|
| 调用服务器方法的玩家的DataOwner|
| **[currentPlayer](mwext.ModuleS.md#currentplayer)**(): [`Player`](mw.Player.md) <Badge type="tip" text="server" />  |
| 调用服务器方法的玩家|
| **[currentPlayerId](mwext.ModuleS.md#currentplayerid)**(): `number` <Badge type="tip" text="server" />  |
| 获取调用服务器方法的玩家ID|
:::


### Methods <Score text="Methods" /> 
| **[addPlayer](mwext.LeaderboardModuleBaseS.md#addplayer)**(`player`: `number`  [`Player`](mw.Player.md), `data`: `Object`): `boolean` <Badge type="tip" text="server" />  |
| :-----|
| 向排行榜添加一个玩家|
| **[clear](mwext.LeaderboardModuleBaseS.md#clear)**(): `void` <Badge type="tip" text="server" />  |
| 清除排行榜|
| **[removePlayer](mwext.LeaderboardModuleBaseS.md#removeplayer)**(`player`: `number`  [`Player`](mw.Player.md)): `boolean` <Badge type="tip" text="server" />  |
| 从排行榜移除一个玩家|
| **[setPlayerValue](mwext.LeaderboardModuleBaseS.md#setplayervalue)**(`player`: `number`  [`Player`](mw.Player.md), `fieldId`: `number`, `value`: `string`  `number`): `void` <Badge type="tip" text="server" />  |
| 设置玩家的一个字段值|


::: details click
### Methods <Score text="Methods" /> 
| **[getAllClient](mwext.ModuleS.md#getallclient)**(): `T` <Badge type="tip" text="server" />  |
| :-----|
| 获取"全部客户端"调用对象|
| **[getClient](mwext.ModuleS.md#getclient)**(`player`: `number`  [`Player`](mw.Player.md)): `T` <Badge type="tip" text="server" />  |
| 根据玩家获取"单客户端"调用对象|
| **[getPlayerData](mwext.ModuleS.md#getplayerdata)**(`player`: `string`  `number`  [`Player`](mw.Player.md)): `S` <Badge type="tip" text="server" />  |
| 获取指定玩家的本模块数据|
| **[onAwake](mwext.ModuleS.md#onawake)**(): `void` <Badge type="tip" text="server" />  |
| 生命周期方法-创建模块时调用|
| **[onDestroy](mwext.ModuleS.md#ondestroy)**(): `void` <Badge type="tip" text="server" />  |
| 生命周期方法-销毁模块调用|
| **[onExecute](mwext.ModuleS.md#onexecute)**(`type`: `number`, `...params`: `any`[]): `void` <Badge type="tip" text="server" />  |
| 外部调用本模块的某个操作|
| **[onPlayerEnterGame](mwext.ModuleS.md#onplayerentergame)**(`player`: [`Player`](mw.Player.md)): `void` <Badge type="tip" text="server" />  |
| 生命周期方法-玩家进入游戏(客户端已就绪，数据就绪，前后端可正常通信)|
| **[onPlayerJoined](mwext.ModuleS.md#onplayerjoined)**(`player`: [`Player`](mw.Player.md)): `void` <Badge type="tip" text="server" />  |
| 生命周期方法-玩家进入房间(玩家刚刚连进服务器，数据和前后端通信都还没有就绪)|
| **[onPlayerLeft](mwext.ModuleS.md#onplayerleft)**(`player`: [`Player`](mw.Player.md)): `void` <Badge type="tip" text="server" />  |
| 生命周期方法-玩家离开房间|
| **[onStart](mwext.ModuleS.md#onstart)**(): `void` <Badge type="tip" text="server" />  |
| 生命周期方法-启动模块时调用|
| **[onUpdate](mwext.ModuleS.md#onupdate)**(`dt`: `number`): `void` <Badge type="tip" text="server" />  |
| 生命周期方法-刷新模块调用|
:::


## Accessors

## Methods

### addPlayer <Score text="addPlayer" /> 

• `Protected` **addPlayer**(`player`, `data`): `boolean` <Badge type="tip" text="server" />

向排行榜添加一个玩家

#### Parameters

| `player` `number`  [`Player`](mw.Player.md) |  玩家对象玩家id |
| :------ | :------ |
| `data` `Object` |  玩家数据 |

#### Returns

| `boolean` | 是否成功 |
| :------ | :------ |

___

### clear <Score text="clear" /> 

• `Protected` **clear**(): `void` <Badge type="tip" text="server" />

清除排行榜


___

### removePlayer <Score text="removePlayer" /> 

• `Protected` **removePlayer**(`player`): `boolean` <Badge type="tip" text="server" />

从排行榜移除一个玩家

#### Parameters

| `player` `number`  [`Player`](mw.Player.md) |  玩家对象玩家id |
| :------ | :------ |

#### Returns

| `boolean` | 是否成功 |
| :------ | :------ |

___

### setPlayerValue <Score text="setPlayerValue" /> 

• `Protected` **setPlayerValue**(`player`, `fieldId`, `value`): `void` <Badge type="tip" text="server" />

设置玩家的一个字段值

#### Parameters

| `player` `number`  [`Player`](mw.Player.md) |  玩家对象玩家id  <br> range: 根据 ID 长度而定 |
| :------ | :------ |
| `fieldId` `number` |  字段ID  <br> range: 根据 ID 长度而定<br> type:整数 |
| `value` `string`  `number` |  字段的值  <br> range: 不做限制，一个玩家一个数据<br> type:整数 |

