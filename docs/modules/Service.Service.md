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
- [MGSEvent](Service.Service.md#mgsevent)
- [MGSResponse](Service.Service.md#mgsresponse)
- [OnArkBalanceUpdated](Service.Service.md#onarkbalanceupdated)
- [OnOrderDelivered](Service.Service.md#onorderdelivered)
- [OnViewLayoutSwitched](Service.Service.md#onviewlayoutswitched)
- [OnViewRefreshed](Service.Service.md#onviewrefreshed)
- [StringResponse](Service.Service.md#stringresponse)
- [TeamMatchFailureInfo](Service.Service.md#teammatchfailureinfo)
- [UploadDataResponse](Service.Service.md#uploaddataresponse)
- [VoidResponse](Service.Service.md#voidresponse)
- [downloadCharacterDataStringCallback](Service.Service.md#downloadcharacterdatastringcallback)

## Type Aliases

### BoolResponse

Ƭ **BoolResponse**: (`success`: `boolean`) => `void`

#### Type declaration

▸ (`success`): `void`

**`Description`**

返回 bool 的回调

##### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `success` | `boolean` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:24

---

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

---

### MGSEvent

Ƭ **MGSEvent**: (`jsonData`: `string`) => `void`

#### Type declaration

▸ (`jsonData`): `void`

**`Description`**

收到 MGS 事件调用

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `jsonData` | `string` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:886

---

### MGSResponse

Ƭ **MGSResponse**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void`

#### Type declaration

▸ (`isSuccess`, `jsonData`): `void`

**`Description`**

收到 233 回复

##### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `isSuccess` | `boolean` |
| `jsonData`  | `string`  |

##### Returns

`void`

#### Defined in

Service/index.d.ts:882

---

### OnArkBalanceUpdated

Ƭ **OnArkBalanceUpdated**: (`amount`: `number`) => `void`

#### Type declaration

▸ (`amount`): `void`

**`Description`**

客户端接收余额更新的消息格式

##### Parameters

| Name     | Type     | Description     |
| :------- | :------- | :-------------- |
| `amount` | `number` | usage: 新的余额 |

##### Returns

`void`

#### Defined in

Service/index.d.ts:387

---

### OnOrderDelivered

Ƭ **OnOrderDelivered**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`

#### Type declaration

▸ (`playerId`, `orderId`, `commodityId`, `amount`, `confirmOrder`): `void`

**`Description`**

服务端接收发货通知的消息格式

##### Parameters

| Name           | Type                               | Description                                                                                                       |
| :------------- | :--------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `playerId`     | `number`                           | usage: 下单的玩家 playerId                                                                                        |
| `orderId`      | `string`                           | usage: 订单 Id                                                                                                    |
| `commodityId`  | `string`                           | usage: 商品 Id                                                                                                    |
| `amount`       | `number`                           | usage: 数量                                                                                                       |
| `confirmOrder` | (`bReceived`: `boolean`) => `void` | usage: 是否收到货的回调，会发给订单服务器。如果回调 false，服务器会认定未收到货，下次玩家进入游戏，还会收到该通知 |

##### Returns

`void`

#### Defined in

Service/index.d.ts:376

---

### OnViewLayoutSwitched

Ƭ **OnViewLayoutSwitched**: (`newState`: `number`) => `void`

#### Type declaration

▸ (`newState`): `void`

**`Description`**

233 中 MW 窗口显示模式切换的消息格式

##### Parameters

| Name       | Type     | Description                                                 |
| :--------- | :------- | :---------------------------------------------------------- |
| `newState` | `number` | usage: 新的窗口模式。1 为“角色展示模式”，2 为“角色编辑模式” |

##### Returns

`void`

#### Defined in

Service/index.d.ts:452

---

### OnViewRefreshed

Ƭ **OnViewRefreshed**: () => `void`

#### Type declaration

▸ (): `void`

**`Description`**

233 中 MW 窗口刷新的消息格式

##### Returns

`void`

#### Defined in

Service/index.d.ts:447

---

### StringResponse

Ƭ **StringResponse**: (`dataString`: `string`) => `void`

#### Type declaration

▸ (`dataString`): `void`

**`Description`**

返回 string 的回调

##### Parameters

| Name         | Type     |
| :----------- | :------- |
| `dataString` | `string` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:32

---

### TeamMatchFailureInfo

Ƭ **TeamMatchFailureInfo**: `Object`

**`Description`**

组队跳游戏请求失败回调

#### Type declaration

| Name           | Type       | Description              |
| :------------- | :--------- | :----------------------- |
| `failedReason` | `string`   | 失败原因                 |
| `playerIds`    | `number`[] | 组队玩家的 playerId 数组 |

#### Defined in

Service/index.d.ts:456

---

### UploadDataResponse

Ƭ **UploadDataResponse**: (`success`: `boolean`) => `void`

#### Type declaration

▸ (`success`): `void`

**`Description`**

下载角色形象的回调消息格式

##### Parameters

| Name      | Type      | Description         |
| :-------- | :-------- | :------------------ |
| `success` | `boolean` | usage: 上传是否成功 |

##### Returns

`void`

#### Defined in

Service/index.d.ts:20

---

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

---

### downloadCharacterDataStringCallback

Ƭ **downloadCharacterDataStringCallback**: (`dataString`: `string`) => `void`

#### Type declaration

▸ (`dataString`): `void`

**`Description`**

下载平台数据回调

##### Parameters

| Name         | Type     |
| :----------- | :------- |
| `dataString` | `string` |

##### Returns

`void`

#### Defined in

Service/index.d.ts:11
