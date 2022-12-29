[Util](Util.Util.md) / NFTUtil

# NFTUtil <Badge type="tip" text="Namespace" />

## Table of contents

| Functions                                                                                                                                                                                                                                                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addUserGameCoin](Util.Util.NFTUtil.md#addusergamecoin)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`, `string`, `number`): `void` <br> 添加游戏币接口                                             |
| **[addUserGameCoinWithEnv](Util.Util.NFTUtil.md#addusergamecoinwithenv)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `string`, `number`, `string`, `number`, `string`): `void` <br> 添加游戏币接口           |
| **[addUserGameCoinWithGameID](Util.Util.NFTUtil.md#addusergamecoinwithgameid)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `string`, `number`, `string`, `number`): `void` <br> 添加游戏币接口               |
| **[decreaseUserGameCoin](Util.Util.NFTUtil.md#decreaseusergamecoin)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`, `string`, `number`): `void` <br> 减少游戏币接口                                   |
| **[decreaseUserGameCoinWithEnv](Util.Util.NFTUtil.md#decreaseusergamecoinwithenv)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `string`, `number`, `string`, `number`, `string`): `void` <br> 减少游戏币接口 |
| **[decreaseUserGameCoinWithGameID](Util.Util.NFTUtil.md#decreaseusergamecoinwithgameid)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `string`, `number`, `string`, `number`): `void` <br> 减少游戏币接口     |
| **[queryUserGameCoin](Util.Util.NFTUtil.md#queryusergamecoin)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`): `void` <br> 查询账户的游戏币数量                                                       |
| **[queryUserGameCoinWithEnv](Util.Util.NFTUtil.md#queryusergamecoinwithenv)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`, `string`): `void` <br> 查询账户的游戏币数量                               |
| **[queryUserGameCoinWithGameID](Util.Util.NFTUtil.md#queryusergamecoinwithgameid)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`): `void` <br> 查询账户的游戏币数量                                   |
| **[queryUserNFT](Util.Util.NFTUtil.md#queryusernft)**([`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `string`, `string`, `number`, `string`): `void` <br> 查询 NFT 接口                                                              |

## Functions

### addUserGameCoin

▸ **addUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description            |
| :------------ | :------------------------------------------------------------------------------------------------- | :--------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token`       | `string`                                                                                           | Token 字符串           |
| `UserAccount` | `string`                                                                                           | 用户账户               |
| `CoinNum`     | `number`                                                                                           | 游戏币数量             |
| `Note`        | `string`                                                                                           | 注释                   |
| `TimeOut`     | `number`                                                                                           | 最大延迟时间           |

#### Returns

`void`

---

### addUserGameCoinWithEnv

▸ **addUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                                                          |
| :------------ | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理                                               |
| `Token`       | `string`                                                                                           | Token 字符串                                                         |
| `GameId`      | `string`                                                                                           | 自定义游戏 ID 不会再自动获取游戏 ID 以传入的为准                     |
| `UserAccount` | `string`                                                                                           | 用户账户                                                             |
| `CoinNum`     | `number`                                                                                           | 数量                                                                 |
| `Note`        | `string`                                                                                           | 注释                                                                 |
| `TimeOut`     | `number`                                                                                           | 最大延迟时间                                                         |
| `Env`         | `string`                                                                                           | 环境,只要不为空那么一定会以写入的环境为主(不为 online 其余皆为 test) |

#### Returns

`void`

---

### addUserGameCoinWithGameID

▸ **addUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                                      |
| :------------ | :------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理                           |
| `Token`       | `string`                                                                                           | Token 字符串                                     |
| `GameId`      | `string`                                                                                           | 自定义游戏 ID,不会再自动获取游戏 ID,以传入的为准 |
| `UserAccount` | `string`                                                                                           | 用户账号                                         |
| `CoinNum`     | `number`                                                                                           | 游戏币数量                                       |
| `Note`        | `string`                                                                                           | 注释                                             |
| `TimeOut`     | `number`                                                                                           | 最大延迟时间                                     |

#### Returns

`void`

---

### decreaseUserGameCoin

▸ **decreaseUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description            |
| :------------ | :------------------------------------------------------------------------------------------------- | :--------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理 |
| `Token`       | `string`                                                                                           | Token 字符串           |
| `UserAccount` | `string`                                                                                           | 用户账户               |
| `CoinNum`     | `number`                                                                                           | 游戏币数量             |
| `Note`        | `string`                                                                                           | 注释                   |
| `TimeOut`     | `number`                                                                                           | 最大延迟时间           |

#### Returns

`void`

---

### decreaseUserGameCoinWithEnv

▸ **decreaseUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                                                          |
| :------------ | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理                                               |
| `Token`       | `string`                                                                                           | Token 字符串                                                         |
| `GameId`      | `string`                                                                                           | 自定义游戏 ID 不会再自动获取游戏 ID 以传入的为准                     |
| `UserAccount` | `string`                                                                                           | 用户账户                                                             |
| `CoinNum`     | `number`                                                                                           | 数量                                                                 |
| `Note`        | `string`                                                                                           | 注释                                                                 |
| `TimeOut`     | `number`                                                                                           | 最大延迟时间                                                         |
| `Env`         | `string`                                                                                           | 环境,只要不为空那么一定会以写入的环境为主(不为 online 其余皆为 test) |

#### Returns

`void`

---

### decreaseUserGameCoinWithGameID

▸ **decreaseUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                                      |
| :------------ | :------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 反馈添加是否成功的代理                           |
| `Token`       | `string`                                                                                           | Token 字符串                                     |
| `GameId`      | `string`                                                                                           | 自定义游戏 ID 不会再自动获取游戏 ID 以传入的为准 |
| `UserAccount` | `string`                                                                                           | 用户账号                                         |
| `CoinNum`     | `number`                                                                                           | 游戏币数量                                       |
| `Note`        | `string`                                                                                           | 注释                                             |
| `TimeOut`     | `number`                                                                                           | 最大延迟时间                                     |

#### Returns

`void`

---

### queryUserGameCoin

▸ **queryUserGameCoin**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                               | Description          |
| :--------- | :------------------------------------------------------------------------------------------------- | :------------------- |
| `Delegate` | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account`  | `string`                                                                                           | 用户账户             |
| `GameId`   | `string`                                                                                           | 游戏 ID              |
| `TimeOut`  | `number`                                                                                           | 最大延迟时间         |

#### Returns

`void`

---

### queryUserGameCoinWithEnv

▸ **queryUserGameCoinWithEnv**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                               | Description          |
| :--------- | :------------------------------------------------------------------------------------------------- | :------------------- |
| `Delegate` | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account`  | `string`                                                                                           | 签名                 |
| `GameId`   | `string`                                                                                           | 游戏 Id              |
| `TimeOut`  | `number`                                                                                           | 最大延迟时间         |
| `Env`      | `string`                                                                                           | 环境                 |

#### Returns

`void`

---

### queryUserGameCoinWithGameID

▸ **queryUserGameCoinWithGameID**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                               | Description          |
| :--------- | :------------------------------------------------------------------------------------------------- | :------------------- |
| `Delegate` | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回游戏币数量的代理 |
| `Account`  | `string`                                                                                           | 用户账号             |
| `GameId`   | `string`                                                                                           | 游戏 ID              |
| `TimeOut`  | `number`                                                                                           | 最大延迟时间         |

#### Returns

`void`

---

### queryUserNFT

▸ **queryUserNFT**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void`

**`Description`**

查询 NFT 接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                               | Description                |
| :--------- | :------------------------------------------------------------------------------------------------- | :------------------------- |
| `Delegate` | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回数据,不是 200 也会返回 |
| `Account`  | `string`                                                                                           | 账户                       |
| `GameId`   | `string`                                                                                           | 游戏 ID                    |
| `TimeOut`  | `number`                                                                                           | 最大延迟时间               |
| `Env`      | `string`                                                                                           | 环境                       |

#### Returns

`void`
