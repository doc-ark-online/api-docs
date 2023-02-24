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
| **[OnArkBalanceUpdated](Monetization.Monetization.md#onarkbalanceupdated)**: (`amount`: `number`) => `void` <br> 客户端接收余额更新的消息格式|
| **[OnOrderDelivered](Monetization.Monetization.md#onorderdelivered)**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void` <br> 服务端接收发货通知的消息格式|


| Modules Functions |
| :-----|
| **[addUserGameCoin](Monetization.Monetization.md#addusergamecoin)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 添加游戏币接口|
| **[addUserGameCoinWithEnv](Monetization.Monetization.md#addusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 添加游戏币接口|
| **[addUserGameCoinWithGameID](Monetization.Monetization.md#addusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 添加游戏币接口|
| **[decreaseUserGameCoin](Monetization.Monetization.md#decreaseusergamecoin)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 减少游戏币接口|
| **[decreaseUserGameCoinWithEnv](Monetization.Monetization.md#decreaseusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 减少游戏币接口|
| **[decreaseUserGameCoinWithGameID](Monetization.Monetization.md#decreaseusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 减少游戏币接口|
| **[queryUserGameCoin](Monetization.Monetization.md#queryusergamecoin)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`): `void` <br> 查询账户的游戏币数量|
| **[queryUserGameCoinWithEnv](Monetization.Monetization.md#queryusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 查询账户的游戏币数量|
| **[queryUserGameCoinWithGameID](Monetization.Monetization.md#queryusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`): `void` <br> 查询账户的游戏币数量|
| **[queryUserNFT](Monetization.Monetization.md#queryusernft)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 查询NFT接口|


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
## Functions

### addUserGameCoin <Score text="addUserGameCoin" /> 

• **addUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void` <Badge type="tip" text="client" />

添加游戏币接口

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |

___

### addUserGameCoinWithEnv <Score text="addUserGameCoinWithEnv" /> 

• **addUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void` <Badge type="tip" text="client" />

添加游戏币接口

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `GameId` | `string` | 自定义游戏ID 不会再自动获取游戏ID 以传入的为准 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境,只要不为空那么一定会以写入的环境为主(不为online 其余皆为test) |

___

### addUserGameCoinWithGameID <Score text="addUserGameCoinWithGameID" /> 

• **addUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void` <Badge type="tip" text="client" />

添加游戏币接口

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `GameId` | `string` | 自定义游戏ID,不会再自动获取游戏ID,以传入的为准 |
| `UserAccount` | `string` | 用户账号 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |

___

### decreaseUserGameCoin <Score text="decreaseUserGameCoin" /> 

• **decreaseUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void` <Badge type="tip" text="client" />

减少游戏币接口

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |

___

### decreaseUserGameCoinWithEnv <Score text="decreaseUserGameCoinWithEnv" /> 

• **decreaseUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void` <Badge type="tip" text="client" />

减少游戏币接口

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `GameId` | `string` | 自定义游戏ID 不会再自动获取游戏ID 以传入的为准 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境,只要不为空那么一定会以写入的环境为主(不为online 其余皆为test) |

___

### decreaseUserGameCoinWithGameID <Score text="decreaseUserGameCoinWithGameID" /> 

• **decreaseUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void` <Badge type="tip" text="client" />

减少游戏币接口

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `GameId` | `string` | 自定义游戏ID 不会再自动获取游戏ID 以传入的为准 |
| `UserAccount` | `string` | 用户账号 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |

___

### queryUserGameCoin <Score text="queryUserGameCoin" /> 

• **queryUserGameCoin**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void` <Badge type="tip" text="client" />

查询账户的游戏币数量

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 用户账户 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |

___

### queryUserGameCoinWithEnv <Score text="queryUserGameCoinWithEnv" /> 

• **queryUserGameCoinWithEnv**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void` <Badge type="tip" text="client" />

查询账户的游戏币数量

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 签名 |
| `GameId` | `string` | 游戏Id |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境 |

___

### queryUserGameCoinWithGameID <Score text="queryUserGameCoinWithGameID" /> 

• **queryUserGameCoinWithGameID**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void` <Badge type="tip" text="client" />

查询账户的游戏币数量

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 用户账号 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |

___

### queryUserNFT <Score text="queryUserNFT" /> 

• **queryUserNFT**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void` <Badge type="tip" text="client" />

查询NFT接口

**`Groups`**

MONETIZATION


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回NFT 账户数据,不是200也会返回相关错误 |
| `Account` | `string` | 账户 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境 |