EXTENSION

# EXTENSION <Badge type="tip" text="Groups" /> <Score text="EXTENSION" />

## Table of contents
| Classes |
| :-----|
| [DataCenterC](../classes/mwext.DataCenterC.md) <br> 客户端数据中心，里面存放着当前玩家的数据 |
| [DataCenterS](../classes/mwext.DataCenterS.md) <br> 服务端数据中心，管理所有玩家的数据 |
| [GameObjPool](../classes/mwext.GameObjPool.md) <br> GameObject对象池 |
| [LeaderboardItemPanelBase](../classes/mwext.LeaderboardItemPanelBase.md) <br> 排行榜主界面中的子UI，用来显示一条记录 |
| [LeaderboardMainPaneBase](../classes/mwext.LeaderboardMainPaneBase.md) <br> 排行榜主界面 |
| [LeaderboardModule](../classes/mwext.LeaderboardModule.md) <br> 编辑器内置排行榜 |
| [LeaderboardModuleBaseC](../classes/mwext.LeaderboardModuleBaseC.md) <br> 排行榜模块-客户端 |
| [LeaderboardModuleBaseS](../classes/mwext.LeaderboardModuleBaseS.md) <br> 排行榜模块-服务端 |
| [ModuleC](../classes/mwext.ModuleC.md) <br> 客户端模块的基类 |
| [ModuleS](../classes/mwext.ModuleS.md) <br> 服务端模块的基类 |
| [ModuleService](../classes/mwext.ModuleService.md) <br> 模块管理 |
| [ObjPool](../classes/mwext.ObjPool.md) <br> 对象池 |
| [Subdata](../classes/mwext.Subdata.md) <br> 数据控制类的基类 |


| Modules Functions |
| :-----|
| **[autoExecute](EXTENSION.EXTENSION.md#autoexecute)**(`fnName`): (`target?`: `unknown`) => `void` <br> 类装饰器-自动执行某个方法|
| **[noReply](EXTENSION.EXTENSION.md#noreply)**(): (`target`: [`ModuleS`](../classes/mwext.ModuleS.md)<`any`, `any`\>, `fnName`: `string`, `descriptor`: `PropertyDescriptor`) => `void` <br> 方法注解-被注解的net方法不需要回复客户端|
| **[persistence](EXTENSION.EXTENSION.md#persistence)**(`name?`): (`target`: [`Subdata`](../classes/mwext.Subdata.md), `propertyKey`: `string`) => `void` <br> 属性注解-持久化存储属性|


| Modules Type Aliases |
| :-----|
| **[LeaderboardModuleTypeC](EXTENSION.EXTENSION.md#leaderboardmoduletypec)**: [`LeaderboardModuleBaseC`](../classes/mwext.LeaderboardModuleBaseC.md)<`any`\> <br> 排行榜模块-客户端type|
| **[LeaderboardModuleTypeS](EXTENSION.EXTENSION.md#leaderboardmoduletypes)**: [`LeaderboardModuleBaseS`](../classes/mwext.LeaderboardModuleBaseS.md)<`any`\> <br> 排行榜模块-服务端type|


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
