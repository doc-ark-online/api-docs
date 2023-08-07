Extension

# Extension <Badge type="tip" text="Namespace" /> <Score text="Extension" />

## Table of contents

| Namespaces |
| :-----|
| [Decorator](Extension.Decorator.md) <br> 类装饰器-自动执行某个方法|

| Enumerations |
| :-----|
| [GameObjPoolSourceType](../enums/Extension.GameObjPoolSourceType.md) <br> GameObjPool对象池资源来源类型，不同类型的资源创建方式不一样，需要正确选择|

| Classes |
| :-----|
| [BasePanel](../classes/Extension.BasePanel.md) <br> 面板类的基类，可用于控制一个界面|
| [BaseView](../classes/Extension.BaseView.md) <br> 界面类的基类|
| [DataCenterC](../classes/Extension.DataCenterC.md) <br> 客户端数据中心，里面存放着当前玩家的数据|
| [DataCenterS](../classes/Extension.DataCenterS.md) <br> 服务端数据中心，管理所有玩家的数据|
| [GameInitializer](../classes/Extension.GameInitializer.md) <br> 游戏初始化|
| [GameObjPool](../classes/Extension.GameObjPool.md) <br> GameObject对象池|
| [LeaderboardItemPanelBase](../classes/Extension.LeaderboardItemPanelBase.md) <br> 排行榜主界面中的子UI，用来显示一条记录|
| [LeaderboardMainPaneBase](../classes/Extension.LeaderboardMainPaneBase.md) <br> 排行榜主界面|
| [LeaderboardModule](../classes/Extension.LeaderboardModule.md) <br> 编辑器内置排行榜|
| [LeaderboardModuleBaseC](../classes/Extension.LeaderboardModuleBaseC.md) <br> 排行榜模块-客户端|
| [LeaderboardModuleBaseS](../classes/Extension.LeaderboardModuleBaseS.md) <br> 排行榜模块-服务端|
| [ModuleC](../classes/Extension.ModuleC.md) <br> 客户端模块的基类|
| [ModuleManager](../classes/Extension.ModuleManager.md) <br> 模块管理|
| [ModuleS](../classes/Extension.ModuleS.md) <br> 服务端模块的基类|
| [NetObject](../classes/Extension.NetObject.md) <br> 网络对象|
| [NetObjectC](../classes/Extension.NetObjectC.md) <br> 客户端的网络对象|
| [NetObjectS](../classes/Extension.NetObjectS.md) <br> 服务端的网络对象|
| [ObjPool](../classes/Extension.ObjPool.md) <br> 对象池|
| [Subdata](../classes/Extension.Subdata.md) <br> 数据控制类的基类|

| Interfaces |
| :-----|
| [IItemView](../interfaces/Extension.IItemView.md) <br> 一条数据的View接口|
| [IPanelView](../interfaces/Extension.IPanelView.md) <br> 主面板View接口|

| Type Aliases |
| :-----|
| **[LeaderboardPlayerData](Extension.Extension.md#leaderboardplayerdata)**: `Object` <br> 排行榜玩家数据类型|

## Type Aliases

### LeaderboardPlayerData <Score text="LeaderboardPlayerData" /> 

Ƭ **LeaderboardPlayerData**: `Object`

排行榜玩家数据类型

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `{ `[fieldId: number]`: `number` \| `string`;  }` | 玩家数据，是一个key-value的结构 |
| `playerId` | `number` | 玩家id |
