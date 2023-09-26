[EXTENSION](../groups/Extension.EXTENSION.md) / LeaderboardModuleBaseS

# LeaderboardModuleBaseS<T\> <Badge type="tip" text="Class" /> <Score text="LeaderboardModuleBaseS<T\>" />

<p class="content-big">

排行榜模块-服务端

</p>

## Type parameters

| `T` | extends [`LeaderboardModuleTypeC`](../modules/Extension.mwext.md#leaderboardmoduletypec) |
| :------ | :------ |

## Hierarchy

- [`ModuleS`](mwext.ModuleS.md)<`T`, `any`\>

  ↳ **`LeaderboardModuleBaseS`**

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new ModuleS**<`T`: `T`, `S`: extends [`Subdata`](mwext.Subdata.md)<`S`\>\>()  |
| :----- |
:::


### Accessors <Score text="Accessors" /> 


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[currentData](mwext.ModuleS.md#currentdata)**(): `S`  |
| :-----|
| 调用服务器方法的玩家的DataOwner|
| **[currentPlayer](mwext.ModuleS.md#currentplayer)**(): [`Player`](mw.Player.md)  |
| 调用服务器方法的玩家|
| **[currentPlayerId](mwext.ModuleS.md#currentplayerid)**(): `number`  |
| 获取调用服务器方法的玩家ID|
:::


### Methods <Score text="Methods" /> 
| **[addPlayer](mwext.LeaderboardModuleBaseS.md#addplayer)**(`player`: `number` \, `data`: `Object`): `boolean`  |
| :-----|
| 向排行榜添加一个玩家|
| **[clear](mwext.LeaderboardModuleBaseS.md#clear)**(): `void`  |
| 清除排行榜|
| **[removePlayer](mwext.LeaderboardModuleBaseS.md#removeplayer)**(`player`: `number` \): `boolean`  |
| 从排行榜移除一个玩家|
| **[setPlayerValue](mwext.LeaderboardModuleBaseS.md#setplayervalue)**(`player`: `number` \, `fieldId`: `number`, `value`: `string` \): `void`  |
| 设置玩家的一个字段值|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[getAllClient](mwext.ModuleS.md#getallclient)**(): `T`  |
| :-----|
| 获取"全部客户端"调用对象|
| **[getClient](mwext.ModuleS.md#getclient)**(`player`: `number` \): `T`  |
| 根据玩家获取"单客户端"调用对象|
| **[getPlayerData](mwext.ModuleS.md#getplayerdata)**(`player`: `string` \): `S`  |
| 获取指定玩家的本模块数据|
| **[onAwake](mwext.ModuleS.md#onawake)**(): `void`  |
| 生命周期方法-创建模块时调用|
| **[onDestroy](mwext.ModuleS.md#ondestroy)**(): `void`  |
| 生命周期方法-销毁模块调用|
| **[onExecute](mwext.ModuleS.md#onexecute)**(`type`: `number`, `...params`: `any`[]): `void`  |
| 外部调用本模块的某个操作|
| **[onPlayerEnterGame](mwext.ModuleS.md#onplayerentergame)**(`player`: [`Player`](mw.Player.md)): `void`  |
| 生命周期方法-玩家进入游戏(客户端已就绪，数据就绪，前后端可正常通信)|
| **[onPlayerJoined](mwext.ModuleS.md#onplayerjoined)**(`player`: [`Player`](mw.Player.md)): `void`  |
| 生命周期方法-玩家进入房间(玩家刚刚连进服务器，数据和前后端通信都还没有就绪)|
| **[onPlayerLeft](mwext.ModuleS.md#onplayerleft)**(`player`: [`Player`](mw.Player.md)): `void`  |
| 生命周期方法-玩家离开房间|
| **[onStart](mwext.ModuleS.md#onstart)**(): `void`  |
| 生命周期方法-启动模块时调用|
| **[onUpdate](mwext.ModuleS.md#onupdate)**(`dt`: `number`): `void`  |
| 生命周期方法-刷新模块调用|
:::


## Accessors

## Methods

### addPlayer <Score text="addPlayer" /> 

• `Protected` **addPlayer**(`player`, `data`): `boolean` <Badge type="tip" text="server" />

向排行榜添加一个玩家

#### Parameters

| `player` `number` \| [`Player`](mw.Player.md) |  玩家对象\|玩家id |
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

| `player` `number` \| [`Player`](mw.Player.md) |  玩家对象\|玩家id |
| :------ | :------ |

#### Returns

| `boolean` | 是否成功 |
| :------ | :------ |


___

### setPlayerValue <Score text="setPlayerValue" /> 

• `Protected` **setPlayerValue**(`player`, `fieldId`, `value`): `void` <Badge type="tip" text="server" />

设置玩家的一个字段值

#### Parameters

| `player` `number` \| [`Player`](mw.Player.md) |  玩家对象\|玩家id |
| :------ | :------ |
| `fieldId` `number` |  字段ID |
| `value` `string` \| `number` |  字段的值 |


