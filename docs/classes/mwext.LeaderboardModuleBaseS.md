[EXTENSION](../groups/Extension.EXTENSION.md) / LeaderboardModuleBaseS

# LeaderboardModuleBaseS<T\> <Badge type="tip" text="Class" /> <Score text="LeaderboardModuleBaseS<T\>" />

排行榜模块-服务端

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LeaderboardModuleBaseC`](mwext.LeaderboardModuleBaseC.md)<`any`\> |

## Hierarchy

- [`ModuleS`](mwext.ModuleS.md)<`T`, ``null``\>

  ↳ **`LeaderboardModuleBaseS`**

## Table of contents

| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[currentData](mwext.ModuleS.md#currentdata)**(): `S` <br> 调用服务器方法的玩家的DataOwner|
:::


| Methods |
| :-----|
| **[addPlayer](mwext.LeaderboardModuleBaseS.md#addplayer)**(`player`: `number` \, `data`: `Object`): `boolean` <br> 向排行榜添加一个玩家|
| **[clear](mwext.LeaderboardModuleBaseS.md#clear)**(): `void` <br> 清除排行榜|
| **[removePlayer](mwext.LeaderboardModuleBaseS.md#removeplayer)**(`player`: `number` \): `boolean` <br> 从排行榜移除一个玩家|
| **[setPlayerValue](mwext.LeaderboardModuleBaseS.md#setplayervalue)**(`player`: `number` \, `fieldId`: `number`, `value`: `string` \): `void` <br> 设置玩家的一个字段值|


::: details 点击查看继承
| Methods |
| :-----|
| **[getPlayerData](mwext.ModuleS.md#getplayerdata)**(`player`: `string` \): `S` <br> 获取指定玩家的本模块数据|
| **[onAwake](mwext.ModuleS.md#onawake)**(): `void` <br> 生命周期方法-创建模块时调用|
| **[onDestroy](mwext.ModuleS.md#ondestroy)**(): `void` <br> 生命周期方法-销毁模块调用|
| **[onExecute](mwext.ModuleS.md#onexecute)**(`type`: `number`, `...params`: `any`[]): `void` <br> 外部调用本模块的某个操作|
| **[onPlayerEnterGame](mwext.ModuleS.md#onplayerentergame)**(`player`: [`Player`](mw.Player.md)): `void` <br> 生命周期方法-玩家进入游戏(客户端已就绪，数据就绪，前后端可正常通信)|
| **[onPlayerJoined](mwext.ModuleS.md#onplayerjoined)**(`player`: [`Player`](mw.Player.md)): `void` <br> 生命周期方法-玩家进入房间(玩家刚刚连进服务器，数据和前后端通信都还没有就绪)|
| **[onPlayerLeft](mwext.ModuleS.md#onplayerleft)**(`player`: [`Player`](mw.Player.md)): `void` <br> 生命周期方法-玩家离开房间|
| **[onStart](mwext.ModuleS.md#onstart)**(): `void` <br> 生命周期方法-启动模块时调用|
| **[onUpdate](mwext.ModuleS.md#onupdate)**(`dt`: `number`): `void` <br> 生命周期方法-刷新模块调用|
:::


## Methods

### addPlayer <Score text="addPlayer" /> 

• `Protected` **addPlayer**(`player`, `data`): `boolean` <Badge type="tip" text="server" />

向排行榜添加一个玩家


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](mw.Player.md) |  玩家对象\|玩家id |
| `data` | `Object` |  玩家数据 |

#### Returns

`boolean`

是否成功

___

### clear <Score text="clear" /> 

• `Protected` **clear**(): `void` <Badge type="tip" text="server" />

清除排行榜



___

### removePlayer <Score text="removePlayer" /> 

• `Protected` **removePlayer**(`player`): `boolean` <Badge type="tip" text="server" />

从排行榜移除一个玩家


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](mw.Player.md) |  玩家对象\|玩家id |

#### Returns

`boolean`

是否成功

___

### setPlayerValue <Score text="setPlayerValue" /> 

• `Protected` **setPlayerValue**(`player`, `fieldId`, `value`): `void` <Badge type="tip" text="server" />

设置玩家的一个字段值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](mw.Player.md) |  玩家对象\|玩家id |
| `fieldId` | `number` |  字段ID |
| `value` | `string` \| `number` |  字段的值 |

