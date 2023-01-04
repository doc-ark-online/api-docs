[Util](Util.Util.md) / NFTUtil

# NFTUtil <Badge type="tip" text="Namespace" />

## Table of contents

| Functions |
| :-----|
| **[addUserGameCoin](Util.NFTUtil.md#addusergamecoin)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`, `string`, `number`): `void` <br> 添加游戏币接口|
| **[addUserGameCoinWithEnv](Util.NFTUtil.md#addusergamecoinwithenv)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `string`, `number`, `string`, `number`, `string`): `void` <br> 添加游戏币接口|
| **[addUserGameCoinWithGameID](Util.NFTUtil.md#addusergamecoinwithgameid)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `string`, `number`, `string`, `number`): `void` <br> 添加游戏币接口|
| **[decreaseUserGameCoin](Util.NFTUtil.md#decreaseusergamecoin)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`, `string`, `number`): `void` <br> 减少游戏币接口|
| **[decreaseUserGameCoinWithEnv](Util.NFTUtil.md#decreaseusergamecoinwithenv)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `string`, `number`, `string`, `number`, `string`): `void` <br> 减少游戏币接口|
| **[decreaseUserGameCoinWithGameID](Util.NFTUtil.md#decreaseusergamecoinwithgameid)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `string`, `number`, `string`, `number`): `void` <br> 减少游戏币接口|
| **[queryUserGameCoin](Util.NFTUtil.md#queryusergamecoin)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`): `void` <br> 查询账户的游戏币数量|
| **[queryUserGameCoinWithEnv](Util.NFTUtil.md#queryusergamecoinwithenv)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`, `string`): `void` <br> 查询账户的游戏币数量|
| **[queryUserGameCoinWithGameID](Util.NFTUtil.md#queryusergamecoinwithgameid)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`): `void` <br> 查询账户的游戏币数量|
| **[queryUserNFT](Util.NFTUtil.md#queryusernft)**([`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`, `string`): `void` <br> 查询NFT接口|

## Functions

### addUserGameCoin

▸ **addUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |

#### Returns

`void`

___

### addUserGameCoinWithEnv

▸ **addUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

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

#### Returns

`void`

___

### addUserGameCoinWithGameID

▸ **addUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

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

#### Returns

`void`

___

### decreaseUserGameCoin

▸ **decreaseUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token` | `string` | Token字符串 |
| `UserAccount` | `string` | 用户账户 |
| `CoinNum` | `number` | 游戏币数量 |
| `Note` | `string` | 注释 |
| `TimeOut` | `number` | 最大延迟时间 |

#### Returns

`void`

___

### decreaseUserGameCoinWithEnv

▸ **decreaseUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

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

#### Returns

`void`

___

### decreaseUserGameCoinWithGameID

▸ **decreaseUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

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

#### Returns

`void`

___

### queryUserGameCoin

▸ **queryUserGameCoin**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 用户账户 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |

#### Returns

`void`

___

### queryUserGameCoinWithEnv

▸ **queryUserGameCoinWithEnv**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 签名 |
| `GameId` | `string` | 游戏Id |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境 |

#### Returns

`void`

___

### queryUserGameCoinWithGameID

▸ **queryUserGameCoinWithGameID**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account` | `string` | 用户账号 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |

#### Returns

`void`

___

### queryUserNFT

▸ **queryUserNFT**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void`

**`Description`**

查询NFT接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回数据,不是200也会返回 |
| `Account` | `string` | 账户 |
| `GameId` | `string` | 游戏ID |
| `TimeOut` | `number` | 最大延迟时间 |
| `Env` | `string` | 环境 |

#### Returns

`void`
