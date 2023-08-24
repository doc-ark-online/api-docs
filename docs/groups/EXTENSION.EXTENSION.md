EXTENSION

# EXTENSION <Badge type="tip" text="Groups" /> <Score text="EXTENSION" />

## Table of contents
| Classes |
| :-----|
| [BasePanel](../classes/mwext.BasePanel.md) <br> 面板类的基类，可用于控制一个界面 |
| [BaseView](../classes/mwext.BaseView.md) <br> 界面类的基类 |
| [DataCenterC](../classes/mwext.DataCenterC.md) <br> 客户端数据中心，里面存放着当前玩家的数据 |
| [DataCenterS](../classes/mwext.DataCenterS.md) <br> 服务端数据中心，管理所有玩家的数据 |
| [GameObjPool](../classes/mwext.GameObjPool.md) <br> 用于缓存GameObject的对象池，适用资源库资源、场景对象、预制体的复用缓存 |
| [LeaderboardItemPanelBase](../classes/mwext.LeaderboardItemPanelBase.md) <br> 排行榜主界面中的子UI，用来显示一条记录 |
| [LeaderboardMainPanelBase](../classes/mwext.LeaderboardMainPanelBase.md) <br> 排行榜主界面 |
| [LeaderboardModule](../classes/mwext.LeaderboardModule.md) <br> 编辑器内置排行榜 |
| [LeaderboardModuleBaseC](../classes/mwext.LeaderboardModuleBaseC.md) <br> 排行榜模块-客户端 |
| [LeaderboardModuleBaseS](../classes/mwext.LeaderboardModuleBaseS.md) <br> 排行榜模块-服务端 |
| [ModuleC](../classes/mwext.ModuleC.md) <br> 客户端模块的基类 |
| [ModuleS](../classes/mwext.ModuleS.md) <br> 服务端模块的基类 |
| [ModuleService](../classes/mwext.ModuleService.md) <br> 模块管理 |
| [ObjPool](../classes/mwext.ObjPool.md) <br> 通用对象池，可用于各种类型对象的复用 |
| [Subdata](../classes/mwext.Subdata.md) <br> 数据控制类的基类 |


| Enums |
| :-----|
| [GameObjPoolSourceType](../enums/mwext.GameObjPoolSourceType.md) <br> GameObject对象池资源来源类型，不同类型的资源创建方式不一样，需要正确选择 |


| Interfaces |
| :-----|
| [ILeaderboardItemView](../interfaces/mwext.ILeaderboardItemView.md) <br> 排行榜面板一条数据的UI结构接口 |
| [ILeaderboardPanelView](../interfaces/mwext.ILeaderboardPanelView.md) <br> 排行榜面板的UI结构接口 |


| Modules Functions |
| :-----|
| **[autoExecute](EXTENSION.EXTENSION.md#autoexecute)**(`fnName`): (`target?`: `unknown`) => `void` <br> 类装饰器-自动执行某个方法|
| **[noReply](EXTENSION.EXTENSION.md#noreply)**(): (`target`: [`ModuleS`](../classes/mwext.ModuleS.md)<`any`, `any`\>, `fnName`: `string`, `descriptor`: `PropertyDescriptor`) => `void` <br> 方法注解-被注解的net方法不需要回复客户端|
| **[persistence](EXTENSION.EXTENSION.md#persistence)**(`name?`): (`target`: [`Subdata`](../classes/mwext.Subdata.md), `propertyKey`: `string`) => `void` <br> 属性注解-持久化存储属性|


| Modules Type Aliases |
| :-----|
| **[LeaderboardModuleTypeC](EXTENSION.EXTENSION.md#leaderboardmoduletypec)**: [`LeaderboardModuleBaseC`](../classes/mwext.LeaderboardModuleBaseC.md)<`any`\> <br> 排行榜模块-客户端type|
| **[LeaderboardModuleTypeS](EXTENSION.EXTENSION.md#leaderboardmoduletypes)**: [`LeaderboardModuleBaseS`](../classes/mwext.LeaderboardModuleBaseS.md)<`any`\> <br> 排行榜模块-服务端type|
| **[LeaderboardPlayerData](EXTENSION.EXTENSION.md#leaderboardplayerdata)**: `Object` <br> 排行榜玩家数据类型|


## Modules Functions


___

### autoExecute <Score text="autoExecute" /> 

• **autoExecute**(`fnName`): (`target?`: `unknown`) => `void` 

类装饰器-自动执行某个方法

::: warning Precautions

调用发生在所有游戏脚本的生命周期之前

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fnName` | `string` |  要自动执行的方法名 |

#### Returns

`fn`

装饰器方法体

• (`target?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `unknown` |

##### Returns

`void`
___

### noReply <Score text="noReply" /> 

• **noReply**(): (`target`: [`ModuleS`](../classes/mwext.ModuleS.md)<`any`, `any`\>, `fnName`: `string`, `descriptor`: `PropertyDescriptor`) => `void` <Badge type="tip" text="server" />

方法注解-被注解的net方法不需要回复客户端


#### Returns

`fn`

注解方法

• (`target`, `fnName`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ModuleS`](../classes/mwext.ModuleS.md)<`any`, `any`\> |
| `fnName` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`
___

### persistence <Score text="persistence" /> 

• **persistence**(`name?`): (`target`: [`Subdata`](../classes/mwext.Subdata.md), `propertyKey`: `string`) => `void` 

属性注解-持久化存储属性

::: warning Precautions

用于设置数据类(继承Subdata的类)哪些属性是要永久存储的

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` |  持久化后的属性名，不写会用变量名存储 default: undefined |

#### Returns

`fn`

注解方法

• (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Subdata`](../classes/mwext.Subdata.md) |
| `propertyKey` | `string` |

##### Returns

## Modules Type Aliases


___

### LeaderboardModuleTypeC <Score text="LeaderboardModuleTypeC" /> 

Ƭ **LeaderboardModuleTypeC**: [`LeaderboardModuleBaseC`](../classes/mwext.LeaderboardModuleBaseC.md)<`any`\>

排行榜模块-客户端type

___

### LeaderboardModuleTypeS <Score text="LeaderboardModuleTypeS" /> 

Ƭ **LeaderboardModuleTypeS**: [`LeaderboardModuleBaseS`](../classes/mwext.LeaderboardModuleBaseS.md)<`any`\>

排行榜模块-服务端type

___

### LeaderboardPlayerData <Score text="LeaderboardPlayerData" /> 

Ƭ **LeaderboardPlayerData**: `Object`

排行榜玩家数据类型

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `{ `[fieldId: number]`: `number` \| `string`;  }` | 玩家数据，是一个key-value的结构 |