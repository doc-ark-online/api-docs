[MONETIZATION](../groups/Core.MONETIZATION.md) / NFTUtil

# NFTUtil <Badge type="tip" text="Class" /> <Score text="NFTUtil" />

NFT资产交易系统。

## Table of contents

| Methods |
| :-----|
| **[addUserGameCoin](mw.NFTUtil.md#addusergamecoin)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 添加游戏币接口|
| **[addUserGameCoinWithEnv](mw.NFTUtil.md#addusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 添加游戏币接口|
| **[addUserGameCoinWithGameID](mw.NFTUtil.md#addusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 添加游戏币接口|
| **[decreaseUserGameCoin](mw.NFTUtil.md#decreaseusergamecoin)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 减少游戏币接口|
| **[decreaseUserGameCoinWithEnv](mw.NFTUtil.md#decreaseusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 减少游戏币接口|
| **[decreaseUserGameCoinWithGameID](mw.NFTUtil.md#decreaseusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Token`: `string`, `GameId`: `string`, `UserAccount`: `string`, `CoinNum`: `number`, `Note`: `string`, `TimeOut`: `number`): `void` <br> 减少游戏币接口|
| **[queryUserGameCoin](mw.NFTUtil.md#queryusergamecoin)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`): `void` <br> 查询账户的游戏币数量|
| **[queryUserGameCoinWithEnv](mw.NFTUtil.md#queryusergamecoinwithenv)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 查询账户的游戏币数量|
| **[queryUserGameCoinWithGameID](mw.NFTUtil.md#queryusergamecoinwithgameid)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`): `void` <br> 查询账户的游戏币数量|
| **[queryUserNFT](mw.NFTUtil.md#queryusernft)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `Account`: `string`, `GameId`: `string`, `TimeOut`: `number`, `Env`: `string`): `void` <br> 查询NFT接口|

## Methods

### addUserGameCoin <Score text="addUserGameCoin" /> 

• `Static` **addUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void` <Badge type="tip" text="client" />

添加游戏币接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |


___

### addUserGameCoinWithEnv <Score text="addUserGameCoinWithEnv" /> 

• `Static` **addUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void` <Badge type="tip" text="client" />

添加游戏币接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `GameId` | `string` | 自定义游戏ID 不会再自动获取游戏ID 以传入的为准 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境,只要不为空那么一定会以写入的环境为主(不为online 其余皆为test) |


___

### addUserGameCoinWithGameID <Score text="addUserGameCoinWithGameID" /> 

• `Static` **addUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void` <Badge type="tip" text="client" />

添加游戏币接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `GameId` | `string` | 自定义游戏ID,不会再自动获取游戏ID,以传入的为准 |
| `UserAccount` | `string` | 用户账号 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |


___

### decreaseUserGameCoin <Score text="decreaseUserGameCoin" /> 

• `Static` **decreaseUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void` <Badge type="tip" text="client" />

减少游戏币接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |


___

### decreaseUserGameCoinWithEnv <Score text="decreaseUserGameCoinWithEnv" /> 

• `Static` **decreaseUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void` <Badge type="tip" text="client" />

减少游戏币接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `GameId` | `string` | 自定义游戏ID 不会再自动获取游戏ID 以传入的为准 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境,只要不为空那么一定会以写入的环境为主(不为online 其余皆为test) |


___

### decreaseUserGameCoinWithGameID <Score text="decreaseUserGameCoinWithGameID" /> 

• `Static` **decreaseUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void` <Badge type="tip" text="client" />

减少游戏币接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `GameId` | `string` | 自定义游戏ID 不会再自动获取游戏ID 以传入的为准 |
| `UserAccount` | `string` | 用户账号 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |


___

### queryUserGameCoin <Score text="queryUserGameCoin" /> 

• `Static` **queryUserGameCoin**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void` <Badge type="tip" text="client" />

查询账户的游戏币数量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 用户账户 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |


___

### queryUserGameCoinWithEnv <Score text="queryUserGameCoinWithEnv" /> 

• `Static` **queryUserGameCoinWithEnv**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void` <Badge type="tip" text="client" />

查询账户的游戏币数量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 签名 |
| `GameId` | `string` | 游戏Id |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境 |


___

### queryUserGameCoinWithGameID <Score text="queryUserGameCoinWithGameID" /> 

• `Static` **queryUserGameCoinWithGameID**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void` <Badge type="tip" text="client" />

查询账户的游戏币数量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 用户账号 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |


___

### queryUserNFT <Score text="queryUserNFT" /> 

• `Static` **queryUserNFT**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void` <Badge type="tip" text="client" />

查询NFT接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回NFT 账户数据,不是200也会返回相关错误 |
| `Account` | `string` | 账户 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境 |

