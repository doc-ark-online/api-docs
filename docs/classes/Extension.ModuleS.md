[Utility](../groups/Utility.Utility.md) / ModuleS

# ModuleS<T, S\> <Badge type="tip" text="Class" /> <Score text="ModuleS<T, S\>" />

服务端模块的基类

::: warning Precautions

所有的服务端模块都必须继承这个类，才能被ModuleManager管理

:::

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Subdata`](Extension.Subdata.md) |

## Hierarchy

- [`NetObjectS`](Extension.NetObjectS.md)<`T`\>

  ↳ **`ModuleS`**

## Table of contents

| Accessors |
| :-----|
| **[currentData](Extension.ModuleS.md#currentdata)**(): `S` <br> 调用服务器方法的玩家的DataOwner|


::: details 点击查看继承
| Accessors |
| :-----|
| **[currentPlayer](Extension.NetObjectS.md#currentplayer)**(): [`Player`](Gameplay.Player.md) <br> 调用服务器方法的玩家|
| **[currentPlayerId](Extension.NetObjectS.md#currentplayerid)**(): `number` <br> 获取调用服务器方法的玩家ID|
:::


| Methods |
| :-----|
| **[getPlayerData](Extension.ModuleS.md#getplayerdata)**(`player`: `number` \): `S` <br> 获取指定玩家的本模块DataOwner|
| **[onAwake](Extension.ModuleS.md#onawake)**(): `void` <br> 生命周期方法-创建模块时调用|
| **[onDestroy](Extension.ModuleS.md#ondestroy)**(): `void` <br> 生命周期方法-销毁模块调用|
| **[onExecute](Extension.ModuleS.md#onexecute)**(`type`: `number`, `...params`: `any`[]): `void` <br> 外部调用本模块的某个操作|
| **[onPlayerEnterGame](Extension.ModuleS.md#onplayerentergame)**(`player`: [`Player`](Gameplay.Player.md)): `void` <br> 生命周期方法-玩家进入游戏(客户端已就绪，数据就绪，前后端可正常通信)|
| **[onPlayerJoined](Extension.ModuleS.md#onplayerjoined)**(`player`: [`Player`](Gameplay.Player.md)): `void` <br> 生命周期方法-玩家进入房间(玩家刚刚连进服务器，数据和前后端通信都还没有就绪)|
| **[onPlayerLeft](Extension.ModuleS.md#onplayerleft)**(`player`: [`Player`](Gameplay.Player.md)): `void` <br> 生命周期方法-玩家离开房间|
| **[onStart](Extension.ModuleS.md#onstart)**(): `void` <br> 生命周期方法-启动模块时调用|
| **[onUpdate](Extension.ModuleS.md#onupdate)**(`dt`: `number`): `void` <br> 生命周期方法-刷新模块调用|


::: details 点击查看继承
| Methods |
| :-----|
| **[getAllClient](Extension.NetObjectS.md#getallclient)**(): `T` <br> 获取"全部客户端"调用对象|
| **[getClient](Extension.NetObjectS.md#getclient)**(`player`: `number` \): `T` <br> 根据玩家获取"单客户端"调用对象|
:::


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Subdata`](Extension.Subdata.md)<`S`\> |

## Accessors

### currentData <Score text="currentData" /> 

• `Protected` `get` **currentData**(): `S`

调用服务器方法的玩家的DataOwner

::: warning Precautions

只能在服务端的rpc方法(net_开头的方法)里使用，方法执行完以后会被清除，不要在其他地方用，不要异步使用

:::

#### Returns

`S`


## Methods

### getPlayerData <Score text="getPlayerData" /> 

• `Protected` **getPlayerData**(`player`): `S` <Badge type="tip" text="server" />

获取指定玩家的本模块DataOwner


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](Gameplay.Player.md) |  目标玩家\|目标玩家id |

#### Returns

`S`

数据

___

### onAwake <Score text="onAwake" /> 

• `Protected` **onAwake**(): `void` <Badge type="tip" text="server" />

生命周期方法-创建模块时调用



___

### onDestroy <Score text="onDestroy" /> 

• `Protected` **onDestroy**(): `void` <Badge type="tip" text="server" />

生命周期方法-销毁模块调用



___

### onExecute <Score text="onExecute" /> 

• `Protected` **onExecute**(`type`, `...params`): `void` <Badge type="tip" text="server" />

外部调用本模块的某个操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `number` |  操作类型 |
| `...params` | `any`[] |  操作参数 |


___

### onPlayerEnterGame <Score text="onPlayerEnterGame" /> 

• `Protected` **onPlayerEnterGame**(`player`): `void` <Badge type="tip" text="server" />

生命周期方法-玩家进入游戏(客户端已就绪，数据就绪，前后端可正常通信)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Gameplay.Player.md) |  玩家 |


___

### onPlayerJoined <Score text="onPlayerJoined" /> 

• `Protected` **onPlayerJoined**(`player`): `void` <Badge type="tip" text="server" />

生命周期方法-玩家进入房间(玩家刚刚连进服务器，数据和前后端通信都还没有就绪)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Gameplay.Player.md) |  玩家 |


___

### onPlayerLeft <Score text="onPlayerLeft" /> 

• `Protected` **onPlayerLeft**(`player`): `void` <Badge type="tip" text="server" />

生命周期方法-玩家离开房间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Gameplay.Player.md) |  玩家 |


___

### onStart <Score text="onStart" /> 

• `Protected` **onStart**(): `void` <Badge type="tip" text="server" />

生命周期方法-启动模块时调用



___

### onUpdate <Score text="onUpdate" /> 

• `Protected` **onUpdate**(`dt`): `void` <Badge type="tip" text="server" />

生命周期方法-刷新模块调用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` |  两帧之间的时间差(单位：秒) |

