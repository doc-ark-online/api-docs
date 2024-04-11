mwext

# mwext <Badge type="tip" text="Namespace" /> <Score text="mwext" />

**`Date`**

: 2023-10-10 09:26:14

**`Last Editors`**

: lei.zhao

**`Last Edit Time`**

: 2023-10-10 10:25:18

**`File Path`**

: \TypeScript\Extension\commonModule\bag\BagConfig.ts

: 修改描述

## Table of contents

### Namespaces <Score text="Namespaces" /> 
| [Decorator](mwext.Decorator.md)  |
| :----- |

### Enumerations <Score text="Enumerations" /> 
| [GameObjPoolSourceType](../enums/mwext.GameObjPoolSourceType.md)  |
| :-----|
| GameObject对象池资源来源类型，不同类型的资源创建方式不一样，需要正确选择|
| [ItemQuality](../enums/mwext.ItemQuality.md)  |
| 道具品质|

### Classes <Score text="Classes" /> 
| [BagItemUI](../classes/mwext.BagItemUI.md)  |
| :-----|
| 背包道具父类,继承这个类来实现自己的道具格子界面，使用BagModule.skin来指定皮肤|
| [BagModule](../classes/mwext.BagModule.md)  |
| 背包实例|
| [BagUI](../classes/mwext.BagUI.md)  |
| 背包界面父类,继承这个类来实现自己的背包界面，使用BagModule.skin来指定皮肤|
| [BasePanel](../classes/mwext.BasePanel.md)  |
| 面板类的基类，可用于控制一个界面|
| [BaseView](../classes/mwext.BaseView.md)  |
| 界面类的基类|
| [DataCenterC](../classes/mwext.DataCenterC.md)  |
| 客户端数据中心，里面存放着当前玩家的数据|
| [DataCenterS](../classes/mwext.DataCenterS.md)  |
| 服务端数据中心，管理所有玩家的数据。|
| [GameObjPool](../classes/mwext.GameObjPool.md)  |
| 用于缓存GameObject的对象池，适用资源库资源、场景对象、预制体的复用缓存|
| [IBagSkin](../classes/mwext.IBagSkin.md)  |
| 背包皮肤|
| [ItemDeleteUI](../classes/mwext.ItemDeleteUI.md)  |
| 背包删除界面父类,继承这个类来实现自己的道具删除界面，使用BagModule.skin来指定皮肤|
| [LeaderboardItemPanelBase](../classes/mwext.LeaderboardItemPanelBase.md)  |
| 排行榜主界面中的子UI，用来显示一条记录|
| [LeaderboardMainPanelBase](../classes/mwext.LeaderboardMainPanelBase.md)  |
| 排行榜主界面|
| [LeaderboardModule](../classes/mwext.LeaderboardModule.md)  |
| 编辑器内置排行榜|
| [LeaderboardModuleBaseC](../classes/mwext.LeaderboardModuleBaseC.md)  |
| 排行榜模块-客户端|
| [LeaderboardModuleBaseS](../classes/mwext.LeaderboardModuleBaseS.md)  |
| 排行榜模块-服务端|
| [ModuleC](../classes/mwext.ModuleC.md)  |
| 客户端模块的基类|
| [ModuleS](../classes/mwext.ModuleS.md)  |
| 服务端模块的基类|
| [ModuleService](../classes/mwext.ModuleService.md)  |
| 服务端客户端及数据模块管理|
| [ObjPool](../classes/mwext.ObjPool.md)  |
| 通用对象池，可用于各种类型对象的复用|
| [Subdata](../classes/mwext.Subdata.md)  |
| 数据控制类的基类|

### Interfaces <Score text="Interfaces" /> 
| [IBagItemSkin](../interfaces/mwext.IBagItemSkin.md)  |
| :-----|
| 格子皮肤|
| [IBagStruct](../interfaces/mwext.IBagStruct.md)  |
| 背包数据结构|
| [IItemDeleteSkin](../interfaces/mwext.IItemDeleteSkin.md)  |
| 道具删除皮肤|
| [ILeaderboardItemView](../interfaces/mwext.ILeaderboardItemView.md)  |
| 排行榜面板一条数据的UI结构接口|
| [ILeaderboardPanelView](../interfaces/mwext.ILeaderboardPanelView.md)  |
| 排行榜面板的UI结构接口|
| [ItemConfig](../interfaces/mwext.ItemConfig.md)  |
| 道具配置|

### Type Aliases <Score text="Type" /> 
| **[LeaderboardModuleTypeC](Extension.mwext.md#leaderboardmoduletypec)**: [`LeaderboardModuleBaseC`](../classes/mwext.LeaderboardModuleBaseC.md)<`any`\>  |
| :-----|
| 排行榜模块-客户端|
| **[LeaderboardModuleTypeS](Extension.mwext.md#leaderboardmoduletypes)**: [`LeaderboardModuleBaseS`](../classes/mwext.LeaderboardModuleBaseS.md)<`any`\>  |
| 排行榜模块-服务端|
| **[LeaderboardPlayerData](Extension.mwext.md#leaderboardplayerdata)**: `Object`  |
| 排行榜玩家数据类型|

## Type Aliases

### LeaderboardModuleTypeC <Score text="LeaderboardModuleTypeC" /> 

Ƭ **LeaderboardModuleTypeC**: [`LeaderboardModuleBaseC`](../classes/mwext.LeaderboardModuleBaseC.md)<`any`\>

排行榜模块-客户端

___

### LeaderboardModuleTypeS <Score text="LeaderboardModuleTypeS" /> 

Ƭ **LeaderboardModuleTypeS**: [`LeaderboardModuleBaseS`](../classes/mwext.LeaderboardModuleBaseS.md)<`any`\>

排行榜模块-服务端

___

### LeaderboardPlayerData <Score text="LeaderboardPlayerData" /> 

Ƭ **LeaderboardPlayerData**: `Object`

排行榜玩家数据类型

#### Type declaration

| `data` `{ `[fieldId: number]`: `number`  `string`;  }` | 玩家数据，是一个key-value的结构 |
| :------ | :------ |
| `playerId` `number` | 玩家id |
