mwext

# mwext <Badge type="tip" text="Namespace" /> <Score text="mwext" />

## Table of contents

| Namespaces |
| :-----|
| [Decorator](mwext.Decorator.md) |

| Enumerations |
| :-----|
| [GameObjPoolSourceType](../enums/mwext.GameObjPoolSourceType.md) <br> GameObjPool对象池资源来源类型，不同类型的资源创建方式不一样，需要正确选择|

| Classes |
| :-----|
| [BasePanel](../classes/mwext.BasePanel.md) <br> 面板类的基类，可用于控制一个界面|
| [BaseView](../classes/mwext.BaseView.md) <br> 界面类的基类|
| [DataCenterC](../classes/mwext.DataCenterC.md) <br> 客户端数据中心，里面存放着当前玩家的数据|
| [DataCenterS](../classes/mwext.DataCenterS.md) <br> 服务端数据中心，管理所有玩家的数据|
| [GameObjPool](../classes/mwext.GameObjPool.md) <br> GameObject对象池|
| [LeaderboardItemPanelBase](../classes/mwext.LeaderboardItemPanelBase.md) <br> 排行榜主界面中的子UI，用来显示一条记录|
| [LeaderboardMainPaneBase](../classes/mwext.LeaderboardMainPaneBase.md) <br> 排行榜主界面|
| [LeaderboardModule](../classes/mwext.LeaderboardModule.md) <br> 编辑器内置排行榜|
| [LeaderboardModuleBaseC](../classes/mwext.LeaderboardModuleBaseC.md) <br> 排行榜模块-客户端|
| [LeaderboardModuleBaseS](../classes/mwext.LeaderboardModuleBaseS.md) <br> 排行榜模块-服务端|
| [ModuleC](../classes/mwext.ModuleC.md) <br> 客户端模块的基类|
| [ModuleManager](../classes/mwext.ModuleManager.md) <br> 模块管理|
| [ModuleS](../classes/mwext.ModuleS.md) <br> 服务端模块的基类|
| [ObjPool](../classes/mwext.ObjPool.md) <br> 对象池|
| [Subdata](../classes/mwext.Subdata.md) <br> 数据控制类的基类|

| Type Aliases |
| :-----|
| **[LeaderboardPlayerData](Extension.mwext.md#leaderboardplayerdata)**: `Object` <br> 排行榜玩家数据类型|

## Type Aliases

### LeaderboardPlayerData <Score text="LeaderboardPlayerData" /> 

Ƭ **LeaderboardPlayerData**: `Object`

排行榜玩家数据类型

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `{ `[fieldId: number]`: `number` \| `string`;  }` | 玩家数据，是一个key-value的结构 |
| `playerId` | `number` | 玩家id |
