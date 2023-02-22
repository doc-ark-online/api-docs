Service

# Service <Badge type="tip" text="Namespace" /> <Score text="Service" />

Account Service

## Table of contents

| Enumerations |
| :-----|
| [AdsState](../enums/Service.AdsState.md) <br> 广告状态|
| [AdsType](../enums/Service.AdsType.md) <br> 广告类型|
| [MessageChannelReceiver](../enums/Service.MessageChannelReceiver.md) <br> 枚举各个通道的使用与接收方|

| Classes |
| :-----|
| [AccountService](../classes/Service.AccountService.md) <br> 用户账号信息管理相关服务|
| [AdsService](../classes/Service.AdsService.md) <br> 广告服务，支持激励/插屏类型|
| [AnalyticsService](../classes/Service.AnalyticsService.md) <br> 分析服务|
| [DebugService](../classes/Service.DebugService.md) <br> debug调试服务|
| [EffectService](../classes/Service.EffectService.md) <br> 特效服务|
| [MessageChannelService](../classes/Service.MessageChannelService.md) <br> 支持各端的通信，233、引擎、Web和游戏项目可以互相直接进行业务上的消息传递，无需修改引擎代码|
| [PurchaseService](../classes/Service.PurchaseService.md) <br> 应用内购服务|
| [RoomService](../classes/Service.RoomService.md) <br> MGS以及玩家信息、数据、头像等相关API|
| [RouteService](../classes/Service.RouteService.md) <br> 游戏管理器|
| [SoundService](../classes/Service.SoundService.md) <br> 音效管理器|
| [UGCService](../classes/Service.UGCService.md) <br> 用户建造服务|

| Type Aliases |
| :-----|
| **[BoolResponse](Service.Service.md#boolresponse)**: (`success`: `boolean`) => `void` <br> 返回bool的回调|
| **[DownloadDataResponse](Service.Service.md#downloaddataresponse)**: () => `void` <br> 下载角色形象的回调，无参数|
| **[MGSEvent](Service.Service.md#mgsevent)**: (`jsonData`: `string`) => `void` <br> 收到MGS事件调用|
| **[MGSResponse](Service.Service.md#mgsresponse)**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void` <br> 收到233回复|
| **[OnArkBalanceUpdated](Service.Service.md#onarkbalanceupdated)**: (`amount`: `number`) => `void` <br> 客户端接收余额更新的消息格式|
| **[OnOrderDelivered](Service.Service.md#onorderdelivered)**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void` <br> 服务端接收发货通知的消息格式|
| **[OnViewLayoutSwitched](Service.Service.md#onviewlayoutswitched)**: (`newState`: `number`) => `void` <br> 233中窗口显示模式切换的消息格式|
| **[OnViewRefreshed](Service.Service.md#onviewrefreshed)**: () => `void` <br> 233中窗口刷新的消息格式|
| **[StringResponse](Service.Service.md#stringresponse)**: (`dataString`: `string`) => `void` <br> 返回string的回调|
| **[TeamMatchFailureInfo](Service.Service.md#teammatchfailureinfo)**: `Object` <br> 下载角色形象的回调消息格式|
| **[UploadDataResponse](Service.Service.md#uploaddataresponse)**: (`success`: `boolean`) => `void` <br> 下载角色形象的回调消息格式|
| **[VoidResponse](Service.Service.md#voidresponse)**: () => `void` <br> 返回无参数的回调|
| **[downloadCharacterDataStringCallback](Service.Service.md#downloadcharacterdatastringcallback)**: (`dataString`: `string`) => `void` <br> 下载平台数据回调|

## Type Aliases

### BoolResponse <Score text="BoolResponse" /> 

Ƭ **BoolResponse**: (`success`: `boolean`) => `void`

#### Type declaration

• (`success`): `void`

返回bool的回调

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `success` | `boolean` |

##### Returns

`void`

___

### DownloadDataResponse <Score text="DownloadDataResponse" /> 

Ƭ **DownloadDataResponse**: () => `void`

#### Type declaration

• (): `void`

下载角色形象的回调，无参数

**`Groups`**

SOCIAL

##### Returns

`void`

___

### MGSEvent <Score text="MGSEvent" /> 

Ƭ **MGSEvent**: (`jsonData`: `string`) => `void`

#### Type declaration

• (`jsonData`): `void`

收到MGS事件调用

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `jsonData` | `string` |

##### Returns

`void`

___

### MGSResponse <Score text="MGSResponse" /> 

Ƭ **MGSResponse**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void`

#### Type declaration

• (`isSuccess`, `jsonData`): `void`

收到233回复

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `isSuccess` | `boolean` |
| `jsonData` | `string` |

##### Returns

`void`

___

### OnArkBalanceUpdated <Score text="OnArkBalanceUpdated" /> 

Ƭ **OnArkBalanceUpdated**: (`amount`: `number`) => `void`

#### Type declaration

• (`amount`): `void`

客户端接收余额更新的消息格式

**`Groups`**

MONETIZATION

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` |  新的余额 |

##### Returns

`void`

___

### OnOrderDelivered <Score text="OnOrderDelivered" /> 

Ƭ **OnOrderDelivered**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`

#### Type declaration

• (`playerId`, `orderId`, `commodityId`, `amount`, `confirmOrder`): `void`

服务端接收发货通知的消息格式

**`Groups`**

MONETIZATION

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playerId` | `number` |  下单的玩家playerId |
| `orderId` | `string` |  订单Id |
| `commodityId` | `string` |  商品Id |
| `amount` | `number` |  数量 |
| `confirmOrder` | (`bReceived`: `boolean`) => `void` |  是否收到货的回调，会发给订单服务器。如果回调false，服务器会认定未收到货，下次玩家进入游戏，还会收到该通知 |

##### Returns

`void`

___

### OnViewLayoutSwitched <Score text="OnViewLayoutSwitched" /> 

Ƭ **OnViewLayoutSwitched**: (`newState`: `number`) => `void`

#### Type declaration

• (`newState`): `void`

233中窗口显示模式切换的消息格式

**`Groups`**

SOCIAL

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | `number` |  新的窗口模式。1 为“角色展示模式”，2 为“角色编辑模式” |

##### Returns

`void`

___

### OnViewRefreshed <Score text="OnViewRefreshed" /> 

Ƭ **OnViewRefreshed**: () => `void`

#### Type declaration

• (): `void`

233中窗口刷新的消息格式

**`Groups`**

SOCIAL

##### Returns

`void`

___

### StringResponse <Score text="StringResponse" /> 

Ƭ **StringResponse**: (`dataString`: `string`) => `void`

#### Type declaration

• (`dataString`): `void`

返回string的回调

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `dataString` | `string` |

##### Returns

`void`

___

### TeamMatchFailureInfo <Score text="TeamMatchFailureInfo" /> 

Ƭ **TeamMatchFailureInfo**: `Object`

组队跳游戏请求失败回调

**`Groups`**

SOCIAL

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedReason` | `string` | 失败原因 |
| `playerIds` | `number`[] | 组队玩家的playerId数组 |

___

### UploadDataResponse <Score text="UploadDataResponse" /> 

Ƭ **UploadDataResponse**: (`success`: `boolean`) => `void`

#### Type declaration

• (`success`): `void`

下载角色形象的回调消息格式

**`Groups`**

SOCIAL

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `success` | `boolean` |  上传是否成功 |

##### Returns

`void`

___

### VoidResponse <Score text="VoidResponse" /> 

Ƭ **VoidResponse**: () => `void`

#### Type declaration

• (): `void`

返回无参数的回调

**`Groups`**

SOCIAL

##### Returns

`void`

___

### downloadCharacterDataStringCallback <Score text="downloadCharacterDataStringCallback" /> 

Ƭ **downloadCharacterDataStringCallback**: (`dataString`: `string`) => `void`

#### Type declaration

• (`dataString`): `void`

下载平台数据回调

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `dataString` | `string` |

##### Returns

`void`
