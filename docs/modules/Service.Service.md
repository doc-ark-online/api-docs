[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](Service.md) / Service

# Namespace: Service

[Service](Service.md).Service

**`Author`**

huipeng.jia & guang.deng

**`Description`**

Account Service

## Table of contents

### Enumerations

- [AdsState](../enums/Service.Service.AdsState.md)
- [AdsType](../enums/Service.Service.AdsType.md)
- [MessageChannelReceiver](../enums/Service.Service.MessageChannelReceiver.md)

### Classes

- [AccountService](../classes/Service.Service.AccountService.md)
- [AdsService](../classes/Service.Service.AdsService.md)
- [AnalyticsService](../classes/Service.Service.AnalyticsService.md)
- [DebugService](../classes/Service.Service.DebugService.md)
- [EffectService](../classes/Service.Service.EffectService.md)
- [MessageChannelService](../classes/Service.Service.MessageChannelService.md)
- [PurchaseService](../classes/Service.Service.PurchaseService.md)
- [RoomService](../classes/Service.Service.RoomService.md)
- [RouteService](../classes/Service.Service.RouteService.md)
- [SoundService](../classes/Service.Service.SoundService.md)
- [UGCService](../classes/Service.Service.UGCService.md)

### Type Aliases

- [BoolResponse](Service.Service.md#boolresponse)
- [DownloadDataResponse](Service.Service.md#downloaddataresponse)
- [GameInfoToEnterNewGame](Service.Service.md#gameinfotoenternewgame)
- [MGSEvent](Service.Service.md#mgsevent)
- [MGSResponse](Service.Service.md#mgsresponse)
- [OnArkBalanceUpdatedDelegate](Service.Service.md#onarkbalanceupdateddelegate)
- [OnOrderDeliveredDelegate](Service.Service.md#onorderdelivereddelegate)
- [OnViewLayoutSwitchedDelegate](Service.Service.md#onviewlayoutswitcheddelegate)
- [OnViewRefreshedDelegate](Service.Service.md#onviewrefresheddelegate)
- [StringResponse](Service.Service.md#stringresponse)
- [UploadDataResponse](Service.Service.md#uploaddataresponse)
- [VoidResponse](Service.Service.md#voidresponse)
- [downloadCharacterDataStringCallback](Service.Service.md#downloadcharacterdatastringcallback)

## Type Aliases

### BoolResponse

Ƭ **BoolResponse**: (`isSuccessed`: `boolean`) => `void`

#### Type declaration

▸ (`isSuccessed`): `void`

**`Description`**

返回bool的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `isSuccessed` | `boolean` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:24

___

### DownloadDataResponse

Ƭ **DownloadDataResponse**: () => `void`

#### Type declaration

▸ (): `void`

**`Description`**

下载角色形象的回调，无参数

##### Returns

`void`

#### Defined in

Service/index.d.ts:15

___

### GameInfoToEnterNewGame

Ƭ **GameInfoToEnterNewGame**: `Object`

**`Description`**

跳转游戏时需要提供的消息格式。不同的组合会有不同的跳转方式。

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `MGSGameId?` | `string` | 目标游戏的MW侧gameId |
| `currentGameId?` | `string` | 当前游戏的内容库Id |
| `gameId` | `string` | 目标游戏的内容库Id |
| `gameLocalPath?` | `string` | 目标游戏的本地路径，当通过路径打开本地游戏时使用。 |
| `gameParams?` | `string` | 要传递给目标游戏的额外信息 |
| `gamePkg?` | `string` | 游戏内容库包名 |
| `gameType` | `number` | 目标游戏的类型。1=单机，2=联机 |
| `gameVersion` | `string` | 目标游戏的版本号 |
| `inviteOpenId?` | `string` | 邀请者的OpenId，正常跳转游戏请置空。与"roomIdFromCp"配合使用" |
| `roomIdFromCp?` | `string` | 目标游戏的RoomId，正常跳转游戏请置空。填写该字段表示以[跟房]方式加入游戏，与"inviteOpenId"配合使用" |
| `ugcType?` | `string` | 游戏类型，UGC还是PGC。 0=UGC编辑态，1=UGC运行态，2=UGC消费态，3=PGC |

#### Defined in

Service/index.d.ts:461

___

### MGSEvent

Ƭ **MGSEvent**: (`jsonData`: `string`) => `void`

#### Type declaration

▸ (`jsonData`): `void`

**`Description`**

收到MGS事件调用

##### Parameters

| Name | Type |
| :------ | :------ |
| `jsonData` | `string` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:872

___

### MGSResponse

Ƭ **MGSResponse**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void`

#### Type declaration

▸ (`isSuccess`, `jsonData`): `void`

**`Description`**

收到233回复

##### Parameters

| Name | Type |
| :------ | :------ |
| `isSuccess` | `boolean` |
| `jsonData` | `string` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:868

___

### OnArkBalanceUpdatedDelegate

Ƭ **OnArkBalanceUpdatedDelegate**: (`amount`: `number`) => `void`

#### Type declaration

▸ (`amount`): `void`

**`Description`**

客户端接收余额更新的消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | usage: 新的余额 |

##### Returns

`void`

#### Defined in

Service/index.d.ts:392

___

### OnOrderDeliveredDelegate

Ƭ **OnOrderDeliveredDelegate**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`

#### Type declaration

▸ (`playerId`, `orderId`, `commodityId`, `amount`, `confirmOrder`): `void`

**`Description`**

服务端接收发货通知的消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playerId` | `number` | usage: 下单的玩家playerId |
| `orderId` | `string` | usage: 订单Id |
| `commodityId` | `string` | usage: 商品Id |
| `amount` | `number` | usage: 数量 |
| `confirmOrder` | (`bReceived`: `boolean`) => `void` | usage: 是否收到货的回调，会发给订单服务器。如果回调false，服务器会认定未收到货，下次玩家进入游戏，还会收到该通知 |

##### Returns

`void`

#### Defined in

Service/index.d.ts:381

___

### OnViewLayoutSwitchedDelegate

Ƭ **OnViewLayoutSwitchedDelegate**: (`newState`: `number`) => `void`

#### Type declaration

▸ (`newState`): `void`

**`Description`**

233中MW窗口显示模式切换的消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | `number` | usage: 新的窗口模式。1 为“角色展示模式”，2 为“角色编辑模式” |

##### Returns

`void`

#### Defined in

Service/index.d.ts:457

___

### OnViewRefreshedDelegate

Ƭ **OnViewRefreshedDelegate**: () => `void`

#### Type declaration

▸ (): `void`

**`Description`**

233中MW窗口刷新的消息格式

##### Returns

`void`

#### Defined in

Service/index.d.ts:452

___

### StringResponse

Ƭ **StringResponse**: (`dataString`: `string`) => `void`

#### Type declaration

▸ (`dataString`): `void`

**`Description`**

返回string的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `dataString` | `string` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:32

___

### UploadDataResponse

Ƭ **UploadDataResponse**: (`isSuccessed`: `boolean`) => `void`

#### Type declaration

▸ (`isSuccessed`): `void`

**`Description`**

下载角色形象的回调消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSuccessed` | `boolean` | usage: 上传是否成功 |

##### Returns

`void`

#### Defined in

Service/index.d.ts:20

___

### VoidResponse

Ƭ **VoidResponse**: () => `void`

#### Type declaration

▸ (): `void`

**`Description`**

返回无参数的回调

##### Returns

`void`

#### Defined in

Service/index.d.ts:28

___

### downloadCharacterDataStringCallback

Ƭ **downloadCharacterDataStringCallback**: (`dataString`: `string`) => `void`

#### Type declaration

▸ (`dataString`): `void`

**`Description`**

下载平台数据回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `dataString` | `string` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:11
