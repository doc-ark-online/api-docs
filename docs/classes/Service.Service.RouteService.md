[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / RouteService

# Class: RouteService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).RouteService

**`Author`**

huipeng.jia

**`Instance`**

**`Description`**

游戏管理器

**`Precautions`**

单例类，请使用 getInstance 获取对象

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Service.Service.RouteService.md#constructor)

### Properties

- [onReceiveTeamData](Service.Service.RouteService.md#onreceiveteamdata)
- [onTeamMatchFailure](Service.Service.RouteService.md#onteammatchfailure)

### Accessors

- [onViewLayoutSwitched](Service.Service.RouteService.md#onviewlayoutswitched)
- [onViewRefreshed](Service.Service.RouteService.md#onviewrefreshed)

### Methods

- [clearTeamCarryingData](Service.Service.RouteService.md#clearteamcarryingdata)
- [enterDressUpGame](Service.Service.RouteService.md#enterdressupgame)
- [enterLocalGame](Service.Service.RouteService.md#enterlocalgame)
- [enterNewGame](Service.Service.RouteService.md#enternewgame)
- [enterNewGameByTeam](Service.Service.RouteService.md#enternewgamebyteam)
- [enterSquareGame](Service.Service.RouteService.md#entersquaregame)
- [getTeamCarryingData](Service.Service.RouteService.md#getteamcarryingdata)
- [isInDressUpGame](Service.Service.RouteService.md#isindressupgame)
- [notifyCharacterLoaded](Service.Service.RouteService.md#notifycharacterloaded)
- [notifyGameLoadingState](Service.Service.RouteService.md#notifygameloadingstate)
- [requestGameId](Service.Service.RouteService.md#requestgameid)
- [requestMGSGameId](Service.Service.RouteService.md#requestmgsgameid)
- [requestRefreshView](Service.Service.RouteService.md#requestrefreshview)
- [requestSwitchViewLayout](Service.Service.RouteService.md#requestswitchviewlayout)
- [getGameId](Service.Service.RouteService.md#getgameid)
- [getGameVersion](Service.Service.RouteService.md#getgameversion)
- [getInstance](Service.Service.RouteService.md#getinstance)
- [getMGSGameId](Service.Service.RouteService.md#getmgsgameid)

## Constructors

### constructor

• **new RouteService**()

## Properties

### onReceiveTeamData

• **onReceiveTeamData**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`teamId`: `string`, `data`: `Record`<`string`, `unknown`\>) => `void`\>

**`Description`**

收到队伍数据时会触发的委托

**`Network Status`**

usage: 服务端

#### Defined in

Service/index.d.ts:481

---

### onTeamMatchFailure

• **onTeamMatchFailure**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`failureInfo`: [`TeamMatchFailureInfo`](../modules/Service.Service.md#teammatchfailureinfo)) => `void`\>

**`Description`**

组队请求失败时会触发的委托

**`Network Status`**

usage: 服务端

#### Defined in

Service/index.d.ts:474

## Accessors

### onViewLayoutSwitched

• `get` **onViewLayoutSwitched**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Service.Service.md#onviewlayoutswitched)\>

**`Description`**

获取角色展示/编辑游戏的显示模式切换的委托

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233 内使用时生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Service.Service.md#onviewlayoutswitched)\>

角色展示/编辑游戏的显示模式切换的委托

#### Defined in

Service/index.d.ts:562

---

### onViewRefreshed

• `get` **onViewRefreshed**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Service.Service.md#onviewrefreshed)\>

**`Description`**

注册 View 刷新的委托

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233 内使用时生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Service.Service.md#onviewrefreshed)\>

View 刷新的委托

#### Defined in

Service/index.d.ts:528

## Methods

### clearTeamCarryingData

▸ **clearTeamCarryingData**(`teamId`): `void`

**`Description`**

删除指定 Team 在组队跳转时带入游戏的数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name     | Type     | Description        |
| :------- | :------- | :----------------- |
| `teamId` | `string` | usage: 目标 teamId |

#### Returns

`void`

#### Defined in

Service/index.d.ts:515

---

### enterDressUpGame

▸ **enterDressUpGame**(): `void`

**`Description`**

退出当前游戏进程，回到主线程的角色编辑游戏。

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233 内使用时生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:575

---

### enterLocalGame

▸ **enterLocalGame**(`targetGameId`, `gamePath`): `void`

**`Description`**

跳转本地游戏(可编辑的 UGC 工程) ，同进程跳转

**`Effect`**

只在客户端调用生效

**`Precautions`**

需要用创建本地工程时所对应模板游戏的 gameId

#### Parameters

| Name           | Type     | Description                                                     |
| :------------- | :------- | :-------------------------------------------------------------- |
| `targetGameId` | `string` | usage: 目标游戏的 MWGameId，一般来说，这里会是模板游戏的 gameId |
| `gamePath`     | `string` | usage: 本地游戏工程的路径                                       |

#### Returns

`void`

#### Defined in

Service/index.d.ts:589

---

### enterNewGame

▸ **enterNewGame**(`targetGameId`): `void`

**`Description`**

跳转到新游戏，同进程跳转

**`Effect`**

只在客户端调用生效

#### Parameters

| Name           | Type     | Description                          |
| :------------- | :------- | :----------------------------------- |
| `targetGameId` | `string` | usage: 要跳转的目标游戏 ID，MWGameId |

#### Returns

`void`

#### Defined in

Service/index.d.ts:581

---

### enterNewGameByTeam

▸ **enterNewGameByTeam**(`targetGameId`, `teammatePlayerIds`, `carryingData?`): `Promise`<`void`\>

**`Description`**

组队跳游戏，可以携带数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name                | Type                             | Description                                  |
| :------------------ | :------------------------------- | :------------------------------------------- |
| `targetGameId`      | `string`                         | usage: 要跳转的游戏的 mwGameId               |
| `teammatePlayerIds` | `string`[]                       | usage: 队友的 playerId 数组                  |
| `carryingData?`     | `Record`<`string`, `unknown`\>[] | usage: 要带入新游戏的数据 default: undefined |

#### Returns

`Promise`<`void`\>

组队跳转请求回调

#### Defined in

Service/index.d.ts:498

---

### enterSquareGame

▸ **enterSquareGame**(`squareMGSGameId?`): `void`

**`Description`**

将当前 MW 进程恢复小窗，拉起新进程进入广场游戏。与默认的跳游戏模式不同。

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233 内使用时生效

#### Parameters

| Name               | Type     | Description                                                                       |
| :----------------- | :------- | :-------------------------------------------------------------------------------- |
| `squareMGSGameId?` | `string` | usage: 新的广场游戏 GameId，如果为空，则使用各环境默认的广场游戏 Id default: null |

#### Returns

`void`

#### Defined in

Service/index.d.ts:569

---

### getTeamCarryingData

▸ **getTeamCarryingData**(`teamId`): `Record`<`string`, `unknown`\>

**`Description`**

获取指定 Team 在组队跳转时带入游戏的数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name     | Type     | Description            |
| :------- | :------- | :--------------------- |
| `teamId` | `string` | usage: 要查询的 teamId |

#### Returns

`Record`<`string`, `unknown`\>

指定队伍的数据

#### Defined in

Service/index.d.ts:509

---

### isInDressUpGame

▸ **isInDressUpGame**(): `boolean`

**`Description`**

判断当前游戏是不是角色展示/编辑游戏

**`Effect`**

只在客户端调用生效

**`Precautions`**

在 PIE 或者服务端调用则固定返回 false

#### Returns

`boolean`

true-当前游戏是角色展示/编辑游戏，false-不是

#### Defined in

Service/index.d.ts:535

---

### notifyCharacterLoaded

▸ **notifyCharacterLoaded**(): `void`

**`Description`**

通知 233/Playza 角色形象加载完毕

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233/Playza 内使用时生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:548

---

### notifyGameLoadingState

▸ **notifyGameLoadingState**(`newState`): `void`

**`Description`**

通知 233/Playza 当前 TS 游戏加载状态(收到这个协议，233 停止下载，清除 Temp 文件)

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233/Playza 内使用时生效

#### Parameters

| Name       | Type     | Description                                                              |
| :--------- | :------- | :----------------------------------------------------------------------- |
| `newState` | `number` | usage: 状态 Id。newState = 1 : 游戏加载成功，newState = 2 ：游戏加载失败 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:555

---

### requestGameId

▸ **requestGameId**(`targetMGSGameId`): `Promise`<`string`\>

**`Description`**

用内容库 MGSGameId 来换取 gameId

**`Effect`**

调用端生效

#### Parameters

| Name              | Type     | Description                       |
| :---------------- | :------- | :-------------------------------- |
| `targetMGSGameId` | `string` | usage: 目标游戏的内容库 MGSGameId |

#### Returns

`Promise`<`string`\>

对应的 gameId

#### Defined in

Service/index.d.ts:596

---

### requestMGSGameId

▸ **requestMGSGameId**(`targetGameId`): `Promise`<`string`\>

**`Description`**

用 gameId 来换取内容库 MGSGameId

**`Effect`**

调用端生效

#### Parameters

| Name           | Type     | Description              |
| :------------- | :------- | :----------------------- |
| `targetGameId` | `string` | usage: 目标游戏的 gameId |

#### Returns

`Promise`<`string`\>

对应的 MGSGameId

#### Defined in

Service/index.d.ts:603

---

### requestRefreshView

▸ **requestRefreshView**(): `void`

**`Description`**

TS 请求 233 刷新 View

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233 内使用时生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:521

---

### requestSwitchViewLayout

▸ **requestSwitchViewLayout**(`newState`): `void`

**`Description`**

切换角色展示/编辑游戏的显示模式。

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233/Playza 内使用时生效

#### Parameters

| Name       | Type     | Description                                                                 |
| :--------- | :------- | :-------------------------------------------------------------------------- |
| `newState` | `number` | usage: 新模式。newState = 1 为“角色展示模式”，newState = 2 为“角色编辑模式” |

#### Returns

`void`

#### Defined in

Service/index.d.ts:542

---

### getGameId

▸ `Static` **getGameId**(): `string`

**`Description`**

获取游戏 Id

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在由 233 拉起生效

#### Returns

`string`

GameId

#### Defined in

Service/index.d.ts:610

---

### getGameVersion

▸ `Static` **getGameVersion**(): `string`

**`Description`**

获取游戏版本

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在由 233 拉起生效

#### Returns

`string`

GameVersion

#### Defined in

Service/index.d.ts:617

---

### getInstance

▸ `Static` **getInstance**(): [`RouteService`](Service.Service.RouteService.md)

**`Description`**

获取游戏管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`RouteService`](Service.Service.RouteService.md)

游戏管理器全局实例

#### Defined in

Service/index.d.ts:489

---

### getMGSGameId

▸ `Static` **getMGSGameId**(): `string`

**`Description`**

获取短游戏 ID

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在由 233 拉起生效

#### Returns

`string`

短游戏 ID

#### Defined in

Service/index.d.ts:624
