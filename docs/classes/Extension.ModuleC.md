[UTILITY](../groups/UTILITY.UTILITY.md) / ModuleC

# ModuleC<T, S\> <Badge type="tip" text="Class" /> <Score text="ModuleC<T, S\>" />

客户端模块的基类

::: warning Precautions

所有的客户端模块都必须继承这个类，才能被ModuleManager管理

:::

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Subdata`](Extension.Subdata.md) |

## Hierarchy

- [`NetObjectC`](Extension.NetObjectC.md)<`T`\>

  ↳ **`ModuleC`**

  ↳↳ [`LeaderboardModuleBaseC`](Extension.LeaderboardModuleBaseC.md)

## Table of contents

| Accessors |
| :-----|
| **[data](Extension.ModuleC.md#data)**(): `S` <br> currentPlayer的模块数据|


::: details 点击查看继承
| Accessors |
| :-----|
| **[currentPlayer](Extension.NetObjectC.md#currentplayer)**(): [`Player`](Gameplay.Player.md) <br> 获取当前玩家|
| **[currentPlayerId](Extension.NetObjectC.md#currentplayerid)**(): `number` <br> 获取当前玩家ID|
| **[server](Extension.NetObjectC.md#server)**(): `T` <br> 和自己绑定的服务端模块，可通过此对象直接调用net_开头的服务端方法|
:::


| Methods |
| :-----|
| **[onAwake](Extension.ModuleC.md#onawake)**(): `void` <br> 生命周期方法-创建模块时调用|
| **[onDestroy](Extension.ModuleC.md#ondestroy)**(): `void` <br> 生命周期方法-销毁模块调用|
| **[onEnterScene](Extension.ModuleC.md#onenterscene)**(`sceneType`: `number`): `void` <br> 生命周期方法-进入场景调用|
| **[onExecute](Extension.ModuleC.md#onexecute)**(`type`: `number`, `...params`: `any`[]): `void` <br> 外部调用本模块的某个操作|
| **[onStart](Extension.ModuleC.md#onstart)**(): `void` <br> 生命周期方法-启动模块时调用|
| **[onUpdate](Extension.ModuleC.md#onupdate)**(`dt`: `number`): `void` <br> 生命周期方法-刷新模块调用|

### data <Score text="data" /> 

• `Protected` `get` **data**(): `S`

currentPlayer的模块数据

#### Returns

`S`


## Methods

### onAwake <Score text="onAwake" /> 

• `Protected` **onAwake**(): `void` <Badge type="tip" text="client" />

生命周期方法-创建模块时调用



___

### onDestroy <Score text="onDestroy" /> 

• `Protected` **onDestroy**(): `void` <Badge type="tip" text="client" />

生命周期方法-销毁模块调用



___

### onEnterScene <Score text="onEnterScene" /> 

• `Protected` **onEnterScene**(`sceneType`): `void` <Badge type="tip" text="client" />

生命周期方法-进入场景调用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneType` | `number` |  场景类型(预留) |


___

### onExecute <Score text="onExecute" /> 

• `Protected` **onExecute**(`type`, `...params`): `void` <Badge type="tip" text="client" />

外部调用本模块的某个操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `number` |  操作类型 |
| `...params` | `any`[] |  操作参数 |


___

### onStart <Score text="onStart" /> 

• `Protected` **onStart**(): `void` <Badge type="tip" text="client" />

生命周期方法-启动模块时调用



___

### onUpdate <Score text="onUpdate" /> 

• `Protected` **onUpdate**(`dt`): `void` <Badge type="tip" text="client" />

生命周期方法-刷新模块调用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` |  两帧之间的时间差(单位：秒) |

