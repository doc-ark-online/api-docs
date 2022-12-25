[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / NFTUtil

# Namespace: NFTUtil

[Util](Util.md).[Util](Util.Util.md).NFTUtil

## Table of contents

### Functions

- [addUserGameCoin](Util.Util.NFTUtil.md#addusergamecoin)
- [addUserGameCoinWithEnv](Util.Util.NFTUtil.md#addusergamecoinwithenv)
- [addUserGameCoinWithGameID](Util.Util.NFTUtil.md#addusergamecoinwithgameid)
- [decreaseUserGameCoin](Util.Util.NFTUtil.md#decreaseusergamecoin)
- [decreaseUserGameCoinWithEnv](Util.Util.NFTUtil.md#decreaseusergamecoinwithenv)
- [decreaseUserGameCoinWithGameID](Util.Util.NFTUtil.md#decreaseusergamecoinwithgameid)
- [queryUserGameCoin](Util.Util.NFTUtil.md#queryusergamecoin)
- [queryUserGameCoinWithEnv](Util.Util.NFTUtil.md#queryusergamecoinwithenv)
- [queryUserGameCoinWithGameID](Util.Util.NFTUtil.md#queryusergamecoinwithgameid)
- [queryUserNFT](Util.Util.NFTUtil.md#queryusernft)

## Functions

### addUserGameCoin

▸ **addUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                  |
| :------------ | :------------------------------------------------------------------------------------------------- | :--------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:反馈添加是否成功的代理 |
| `Token`       | `string`                                                                                           | usage:Token 字符串           |
| `UserAccount` | `string`                                                                                           | usage:用户账户               |
| `CoinNum`     | `number`                                                                                           | usage:游戏币数量             |
| `Note`        | `string`                                                                                           | usage:注释                   |
| `TimeOut`     | `number`                                                                                           | usage:最大延迟时间           |

#### Returns

`void`

#### Defined in

Util/index.d.ts:387

---

### addUserGameCoinWithEnv

▸ **addUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                                                                |
| :------------ | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:反馈添加是否成功的代理                                               |
| `Token`       | `string`                                                                                           | usage:Token 字符串                                                         |
| `GameId`      | `string`                                                                                           | usage:自定义游戏 ID 不会再自动获取游戏 ID 以传入的为准                     |
| `UserAccount` | `string`                                                                                           | usage:用户账户                                                             |
| `CoinNum`     | `number`                                                                                           | usage:数量                                                                 |
| `Note`        | `string`                                                                                           | usage:注释                                                                 |
| `TimeOut`     | `number`                                                                                           | usage:最大延迟时间                                                         |
| `Env`         | `string`                                                                                           | usage:环境,只要不为空那么一定会以写入的环境为主(不为 online 其余皆为 test) |

#### Returns

`void`

#### Defined in

Util/index.d.ts:493

---

### addUserGameCoinWithGameID

▸ **addUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

添加游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                                            |
| :------------ | :------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:反馈添加是否成功的代理                           |
| `Token`       | `string`                                                                                           | usage:Token 字符串                                     |
| `GameId`      | `string`                                                                                           | usage:自定义游戏 ID,不会再自动获取游戏 ID,以传入的为准 |
| `UserAccount` | `string`                                                                                           | usage:用户账号                                         |
| `CoinNum`     | `number`                                                                                           | usage:游戏币数量                                       |
| `Note`        | `string`                                                                                           | usage:注释                                             |
| `TimeOut`     | `number`                                                                                           | usage:最大延迟时间                                     |

#### Returns

`void`

#### Defined in

Util/index.d.ts:438

---

### decreaseUserGameCoin

▸ **decreaseUserGameCoin**(`Delegate`, `Token`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                  |
| :------------ | :------------------------------------------------------------------------------------------------- | :--------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:反馈添加是否成功的代理 |
| `Token`       | `string`                                                                                           | usage:Token 字符串           |
| `UserAccount` | `string`                                                                                           | usage:用户账户               |
| `CoinNum`     | `number`                                                                                           | usage:游戏币数量             |
| `Note`        | `string`                                                                                           | usage:注释                   |
| `TimeOut`     | `number`                                                                                           | usage:最大延迟时间           |

#### Returns

`void`

#### Defined in

Util/index.d.ts:405

---

### decreaseUserGameCoinWithEnv

▸ **decreaseUserGameCoinWithEnv**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`, `Env`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                                                                |
| :------------ | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:反馈添加是否成功的代理                                               |
| `Token`       | `string`                                                                                           | usage:Token 字符串                                                         |
| `GameId`      | `string`                                                                                           | usage:自定义游戏 ID 不会再自动获取游戏 ID 以传入的为准                     |
| `UserAccount` | `string`                                                                                           | usage:用户账户                                                             |
| `CoinNum`     | `number`                                                                                           | usage:数量                                                                 |
| `Note`        | `string`                                                                                           | usage:注释                                                                 |
| `TimeOut`     | `number`                                                                                           | usage:最大延迟时间                                                         |
| `Env`         | `string`                                                                                           | usage:环境,只要不为空那么一定会以写入的环境为主(不为 online 其余皆为 test) |

#### Returns

`void`

#### Defined in

Util/index.d.ts:515

---

### decreaseUserGameCoinWithGameID

▸ **decreaseUserGameCoinWithGameID**(`Delegate`, `Token`, `GameId`, `UserAccount`, `CoinNum`, `Note`, `TimeOut`): `void`

**`Description`**

减少游戏币接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                                                                               | Description                                            |
| :------------ | :------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| `Delegate`    | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:反馈添加是否成功的代理                           |
| `Token`       | `string`                                                                                           | usage:Token 字符串                                     |
| `GameId`      | `string`                                                                                           | usage:自定义游戏 ID 不会再自动获取游戏 ID 以传入的为准 |
| `UserAccount` | `string`                                                                                           | usage:用户账号                                         |
| `CoinNum`     | `number`                                                                                           | usage:游戏币数量                                       |
| `Note`        | `string`                                                                                           | usage:注释                                             |
| `TimeOut`     | `number`                                                                                           | usage:最大延迟时间                                     |

#### Returns

`void`

#### Defined in

Util/index.d.ts:458

---

### queryUserGameCoin

▸ **queryUserGameCoin**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                               | Description                |
| :--------- | :------------------------------------------------------------------------------------------------- | :------------------------- |
| `Delegate` | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:返回游戏币数量的代理 |
| `Account`  | `string`                                                                                           | usage:用户账户             |
| `GameId`   | `string`                                                                                           | usage:游戏 ID              |
| `TimeOut`  | `number`                                                                                           | usage:最大延迟时间         |

#### Returns

`void`

#### Defined in

Util/index.d.ts:421

---

### queryUserGameCoinWithEnv

▸ **queryUserGameCoinWithEnv**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                               | Description                |
| :--------- | :------------------------------------------------------------------------------------------------- | :------------------------- |
| `Delegate` | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:返回游戏币数量的代理 |
| `Account`  | `string`                                                                                           | usage:签名                 |
| `GameId`   | `string`                                                                                           | usage:游戏 Id              |
| `TimeOut`  | `number`                                                                                           | usage:最大延迟时间         |
| `Env`      | `string`                                                                                           | usage:环境                 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:534

---

### queryUserGameCoinWithGameID

▸ **queryUserGameCoinWithGameID**(`Delegate`, `Account`, `GameId`, `TimeOut`): `void`

**`Description`**

查询账户的游戏币数量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                               | Description                |
| :--------- | :------------------------------------------------------------------------------------------------- | :------------------------- |
| `Delegate` | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:返回游戏币数量的代理 |
| `Account`  | `string`                                                                                           | usage:用户账号             |
| `GameId`   | `string`                                                                                           | usage:游戏 ID              |
| `TimeOut`  | `number`                                                                                           | usage:最大延迟时间         |

#### Returns

`void`

#### Defined in

Util/index.d.ts:475

---

### queryUserNFT

▸ **queryUserNFT**(`Delegate`, `Account`, `GameId`, `TimeOut`, `Env`): `void`

**`Description`**

查询 NFT 接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                               | Description                      |
| :--------- | :------------------------------------------------------------------------------------------------- | :------------------------------- |
| `Delegate` | [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | usage:返回数据,不是 200 也会返回 |
| `Account`  | `string`                                                                                           | usage:账户                       |
| `GameId`   | `string`                                                                                           | usage:游戏 ID                    |
| `TimeOut`  | `number`                                                                                           | usage:最大延迟时间               |
| `Env`      | `string`                                                                                           | usage:环境                       |

#### Returns

`void`

#### Defined in

Util/index.d.ts:550
