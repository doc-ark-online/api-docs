Monetization

# Monetization <Badge type="tip" text="Groups" /> <Score text="Monetization" />

## Table of contents
| Classes |
| :-----|
| [AdsService](../classes/Service.AdsService.md) <br> 广告服务，支持激励/插屏类型 |
| [PurchaseService](../classes/Service.PurchaseService.md) <br> 应用内购服务 |


| Enums |
| :-----|
| [AdsState](../enums/Service.AdsState.md) <br> 广告状态 |
| [AdsType](../enums/Service.AdsType.md) <br> 广告类型 |


| Modules Type Aliases |
| :-----|
| **[OnArkBalanceUpdated](../modules/Service.Service.md#onarkbalanceupdated)**: (`amount`: `number`) => `void` <br> 客户端接收余额更新的消息格式|
| **[OnOrderDelivered](../modules/Service.Service.md#onorderdelivered)**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void` <br> 服务端接收发货通知的消息格式|


| Modules Functions |
| :-----|
| **[addUserGameCoin](../modules/Util.Util.NFTUtil.md#addusergamecoin)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 添加游戏币接口|
| **[addUserGameCoinWithEnv](../modules/Util.Util.NFTUtil.md#addusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 添加游戏币接口|
| **[addUserGameCoinWithGameID](../modules/Util.Util.NFTUtil.md#addusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 添加游戏币接口|
| **[decreaseUserGameCoin](../modules/Util.Util.NFTUtil.md#decreaseusergamecoin)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 减少游戏币接口|
| **[decreaseUserGameCoinWithEnv](../modules/Util.Util.NFTUtil.md#decreaseusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 减少游戏币接口|
| **[decreaseUserGameCoinWithGameID](../modules/Util.Util.NFTUtil.md#decreaseusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 减少游戏币接口|
| **[queryUserGameCoin](../modules/Util.Util.NFTUtil.md#queryusergamecoin)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`): `void` <br> 查询账户的游戏币数量|
| **[queryUserGameCoinWithEnv](../modules/Util.Util.NFTUtil.md#queryusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 查询账户的游戏币数量|
| **[queryUserGameCoinWithGameID](../modules/Util.Util.NFTUtil.md#queryusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`): `void` <br> 查询账户的游戏币数量|
| **[queryUserNFT](../modules/Util.Util.NFTUtil.md#queryusernft)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 查询NFT接口|

