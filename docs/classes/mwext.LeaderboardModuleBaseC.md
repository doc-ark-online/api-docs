[EXTENSION](../groups/Extension.EXTENSION.md) / LeaderboardModuleBaseC

# LeaderboardModuleBaseC<T\> <Badge type="tip" text="Class" /> <Score text="LeaderboardModuleBaseC<T\>" />

<p class="content-big"> 排行榜模块-客户端 </p>

## Type parameters

| `T` | extends [`LeaderboardModuleTypeS`](../modules/Extension.mwext.md#leaderboardmoduletypes) |
| :------ | :------ |

## Hierarchy

- [`ModuleC`](mwext.ModuleC.md)<`T`, `any`\>

  ↳ **`LeaderboardModuleBaseC`**

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new ModuleC**<`T`: `T`, `S`: extends [`Subdata`](mwext.Subdata.md)<`S`\>\>()  |
| :----- |
:::


### Accessors <Score text="Accessors" /> 
| **[panel](mwext.LeaderboardModuleBaseC.md#panel)**(): [`LeaderboardMainPanelBase`](mwext.LeaderboardMainPanelBase.md)<`any`\>  |
| :-----|
| 排行榜的UI面板|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[data](mwext.ModuleC.md#data)**(): `S`  |
| :-----|
| 本地玩家的模块数据|
| **[localPlayer](mwext.ModuleC.md#localplayer)**(): [`Player`](mw.Player.md)  |
| 获取当前玩家|
| **[localPlayerId](mwext.ModuleC.md#localplayerid)**(): `number`  |
| 获取当前玩家ID|
| **[server](mwext.ModuleC.md#server)**(): `T`  |
| 和自己绑定的服务端模块，可通过此对象直接调用net_开头的服务端方法|
:::


### Methods <Score text="Methods" /> 
| **[creatPanel](mwext.LeaderboardModuleBaseC.md#creatpanel)**(): [`LeaderboardMainPanelBase`](mwext.LeaderboardMainPanelBase.md)<`any`\>  |
| :-----|
| 创建排行榜UI面板|
| **[hidePanel](mwext.LeaderboardModuleBaseC.md#hidepanel)**(): `void`  |
| 隐藏UI面板|
| **[showPanel](mwext.LeaderboardModuleBaseC.md#showpanel)**(): `void`  |
| 显示UI面板|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[onAwake](mwext.ModuleC.md#onawake)**(): `void`  |
| :-----|
| 生命周期方法-创建模块时调用|
| **[onDestroy](mwext.ModuleC.md#ondestroy)**(): `void`  |
| 生命周期方法-销毁模块调用|
| **[onEnterScene](mwext.ModuleC.md#onenterscene)**(`sceneType`: `number`): `void`  |
| 生命周期方法-进入场景调用|
| **[onExecute](mwext.ModuleC.md#onexecute)**(`type`: `number`, `...params`: `any`[]): `void`  |
| 外部调用本模块的某个操作|
| **[onStart](mwext.ModuleC.md#onstart)**(): `void`  |
| 生命周期方法-启动模块时调用|
| **[onUpdate](mwext.ModuleC.md#onupdate)**(`dt`: `number`): `void`  |
| 生命周期方法-刷新模块调用|
:::


## Accessors
___

### panel <Score text="panel" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **panel**(): [`LeaderboardMainPanelBase`](mwext.LeaderboardMainPanelBase.md)<`any`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


排行榜的UI面板


#### Returns


</td>
</tr></tbody>
</table>



## Methods

### creatPanel <Score text="creatPanel" /> 

• `Protected` `Abstract` **creatPanel**(): [`LeaderboardMainPanelBase`](mwext.LeaderboardMainPanelBase.md)<`any`\> <Badge type="tip" text="client" />

创建排行榜UI面板

#### Returns

| [`LeaderboardMainPanelBase`](mwext.LeaderboardMainPanelBase.md)<`any`\> | 排行榜UI面板 |
| :------ | :------ |


___

### hidePanel <Score text="hidePanel" /> 

• `Protected` **hidePanel**(): `void` <Badge type="tip" text="client" />

隐藏UI面板



___

### showPanel <Score text="showPanel" /> 

• **showPanel**(): `void` <Badge type="tip" text="client" />

显示UI面板


