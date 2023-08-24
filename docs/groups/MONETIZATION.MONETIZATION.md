MONETIZATION

# MONETIZATION <Badge type="tip" text="Groups" /> <Score text="MONETIZATION" />

## Table of contents
| Classes |
| :-----|
| [AdsService](../classes/mw.AdsService.md) <br> 广告服务，支持激励/插屏类型 |
| [PurchaseService](../classes/mw.PurchaseService.md) <br> 应用内购服务 |


| Enums |
| :-----|
| [AdsState](../enums/mw.AdsState.md) <br> 广告状态，调用show方法的时候可能返回的广告状态 |
| [AdsType](../enums/mw.AdsType.md) <br> 广告类型 |
| [consumeKeyStatus](../enums/mw.consumeKeyStatus.md) <br> 大会员扣除钥匙订单返回状态信息 |


| Modules Type Aliases |
| :-----|
| **[OnKeyConsume](MONETIZATION.MONETIZATION.md#onkeyconsume)**: (`player`: [`Player`](../classes/mw.Player.md), `orderId`: `string`, `boxId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void` <br> 大会员钥匙扣除服务端接收发货通知的消息格式|
| **[keyUsageInfo](MONETIZATION.MONETIZATION.md#keyusageinfo)**: `Object` <br> 大会员消费钥匙订单。orderId：订单ID，boxId：宝箱ID，number：购买宝箱数量，shipTime：发货时间，毫秒级时间戳|


## Modules Type Aliases


___

### OnKeyConsume <Score text="OnKeyConsume" /> 

Ƭ **OnKeyConsume**: (`player`: [`Player`](../classes/mw.Player.md), `orderId`: `string`, `boxId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`

#### Type declaration

• (`player`, `orderId`, `boxId`, `amount`, `confirmOrder`): `void`

大会员钥匙扣除服务端接收发货通知的消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/mw.Player.md) |  下单的玩家Player |
| `orderId` | `string` |  订单Id |
| `boxId` | `string` |  宝箱Id |
| `amount` | `number` |  数量 |
| `confirmOrder` | (`bReceived`: `boolean`) => `void` |  是否收到货的回调，会发给订单服务器。如果回调false，服务器会认定未收到货，下次玩家进入游戏，还会收到该通知 |

##### Returns

`void`
___

### keyUsageInfo <Score text="keyUsageInfo" /> 

Ƭ **keyUsageInfo**: `Object`

大会员消费钥匙订单。orderId：订单ID，boxId：宝箱ID，number：购买宝箱数量，shipTime：发货时间，毫秒级时间戳

#### Type declaration

| Name | Type |
| :------ | :------ |
| `boxId` | `string` |
| `consumeTime` | `number` |
| `number` | `number` |
| `orderId` | `string` |