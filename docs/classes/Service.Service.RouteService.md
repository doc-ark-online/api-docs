[Service](../modules/Service.Service.md) / RouteService

# RouteService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

游戏管理器

**`Precautions`**

单例类，请使用getInstance获取对象

## Table of contents

| Properties |
| :-----|
| **[onReceiveTeamData](Service.Service.RouteService.md#onreceiveteamdata)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`teamId`: `string`, `data`: `Record`<`string`, `unknown`\>) => `void`\> <br> 收到队伍数据时会触发的委托|
| **[onTeamMatchFailure](Service.Service.RouteService.md#onteammatchfailure)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`failureInfo`: [`TeamMatchFailureInfo`](../modules/Service.Service.md#teammatchfailureinfo)) => `void`\> <br> 组队请求失败时会触发的委托|

| Accessors |
| :-----|
| **[onViewLayoutSwitched](Service.Service.RouteService.md#onviewlayoutswitched)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Service.Service.md#onviewlayoutswitched)\> <br> 获取角色展示/编辑游戏的显示模式切换的委托|
| **[onViewRefreshed](Service.Service.RouteService.md#onviewrefreshed)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Service.Service.md#onviewrefreshed)\> <br> 注册View刷新的委托|

| Methods |
| :-----|
| **[clearTeamCarryingData](Service.Service.RouteService.md#clearteamcarryingdata)**(`string`): `void` <br> 删除指定Team在组队跳转时带入游戏的数据|
| **[enterDressUpGame](Service.Service.RouteService.md#enterdressupgame)**(): `void` <br> 退出当前游戏进程，回到主线程的角色编辑游戏。|
| **[enterLocalGame](Service.Service.RouteService.md#enterlocalgame)**(`string`, `string`): `void` <br> 跳转本地游戏(可编辑的UGC工程) ，同进程跳转|
| **[enterNewGame](Service.Service.RouteService.md#enternewgame)**(`string`): `void` <br> 跳转到新游戏，同进程跳转|
| **[enterNewGameByTeam](Service.Service.RouteService.md#enternewgamebyteam)**(`string`, `string`[], `Record`<`string`, `unknown`\>[]): `Promise`<`void`\> <br> 组队跳游戏，可以携带数据|
| **[enterSquareGame](Service.Service.RouteService.md#entersquaregame)**(`string`): `void` <br> 将当前MW进程恢复小窗，拉起新进程进入广场游戏。与默认的跳游戏模式不同。|
| **[getTeamCarryingData](Service.Service.RouteService.md#getteamcarryingdata)**(`string`): `Record`<`string`, `unknown`\> <br> 获取指定Team在组队跳转时带入游戏的数据|
| **[isInDressUpGame](Service.Service.RouteService.md#isindressupgame)**(): `boolean` <br> 判断当前游戏是不是角色展示/编辑游戏|
| **[notifyCharacterLoaded](Service.Service.RouteService.md#notifycharacterloaded)**(): `void` <br> 通知233/Playza角色形象加载完毕|
| **[notifyGameLoadingState](Service.Service.RouteService.md#notifygameloadingstate)**(`number`): `void` <br> 通知233/Playza当前TS游戏加载状态(收到这个协议，233停止下载，清除Temp文件)|
| **[requestGameId](Service.Service.RouteService.md#requestgameid)**(`string`): `Promise`<`string`\> <br> 用内容库MGSGameId来换取gameId|
| **[requestMGSGameId](Service.Service.RouteService.md#requestmgsgameid)**(`string`): `Promise`<`string`\> <br> 用gameId来换取内容库MGSGameId|
| **[requestRefreshView](Service.Service.RouteService.md#requestrefreshview)**(): `void` <br> TS请求233刷新View|
| **[requestSwitchViewLayout](Service.Service.RouteService.md#requestswitchviewlayout)**(`number`): `void` <br> 切换角色展示/编辑游戏的显示模式。|
| **[getGameId](Service.Service.RouteService.md#getgameid)**(): `string` <br> 获取游戏Id|
| **[getGameVersion](Service.Service.RouteService.md#getgameversion)**(): `string` <br> 获取游戏版本|
| **[getInstance](Service.Service.RouteService.md#getinstance)**(): [`RouteService`](Service.Service.RouteService.md) <br> 获取游戏管理器全局实例|
| **[getMGSGameId](Service.Service.RouteService.md#getmgsgameid)**(): `string` <br> 获取短游戏ID|

## Properties

### onReceiveTeamData

• **onReceiveTeamData**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`teamId`: `string`, `data`: `Record`<`string`, `unknown`\>) => `void`\>

**`Description`**

收到队伍数据时会触发的委托

___

### onTeamMatchFailure

• **onTeamMatchFailure**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`failureInfo`: [`TeamMatchFailureInfo`](../modules/Service.Service.md#teammatchfailureinfo)) => `void`\>

**`Description`**

组队请求失败时会触发的委托

## Accessors

### onViewLayoutSwitched

• `get` **onViewLayoutSwitched**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Service.Service.md#onviewlayoutswitched)\>

**`Description`**

获取角色展示/编辑游戏的显示模式切换的委托

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233内使用时生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Service.Service.md#onviewlayoutswitched)\>

角色展示/编辑游戏的显示模式切换的委托

___

### onViewRefreshed

• `get` **onViewRefreshed**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Service.Service.md#onviewrefreshed)\>

**`Description`**

注册View刷新的委托

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233内使用时生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Service.Service.md#onviewrefreshed)\>

View刷新的委托

## Methods

### clearTeamCarryingData

▸ **clearTeamCarryingData**(`teamId`): `void`

**`Description`**

删除指定Team在组队跳转时带入游戏的数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teamId` | `string` |  目标teamId |

#### Returns

`void`

___

### enterDressUpGame

▸ **enterDressUpGame**(): `void`

**`Description`**

退出当前游戏进程，回到主线程的角色编辑游戏。

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233内使用时生效

#### Returns

`void`

___

### enterLocalGame

▸ **enterLocalGame**(`targetGameId`, `gamePath`): `void`

**`Description`**

跳转本地游戏(可编辑的UGC工程) ，同进程跳转

**`Effect`**

只在客户端调用生效

**`Precautions`**

需要用创建本地工程时所对应模板游戏的gameId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetGameId` | `string` |  目标游戏的MWGameId，一般来说，这里会是模板游戏的gameId |
| `gamePath` | `string` |  本地游戏工程的路径 |

#### Returns

`void`

___

### enterNewGame

▸ **enterNewGame**(`targetGameId`): `void`

**`Description`**

跳转到新游戏，同进程跳转

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetGameId` | `string` |  要跳转的目标游戏ID，MWGameId |

#### Returns

`void`

___

### enterNewGameByTeam

▸ **enterNewGameByTeam**(`targetGameId`, `teammatePlayerIds`, `carryingData?`): `Promise`<`void`\>

**`Description`**

组队跳游戏，可以携带数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetGameId` | `string` |  要跳转的游戏的mwGameId |
| `teammatePlayerIds` | `string`[] |  队友的playerId数组 |
| `carryingData?` | `Record`<`string`, `unknown`\>[] |  要带入新游戏的数据 default: undefined |

#### Returns

`Promise`<`void`\>

组队跳转请求回调

___

### enterSquareGame

▸ **enterSquareGame**(`squareMGSGameId?`): `void`

**`Description`**

将当前MW进程恢复小窗，拉起新进程进入广场游戏。与默认的跳游戏模式不同。

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233内使用时生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `squareMGSGameId?` | `string` |  新的广场游戏GameId，如果为空，则使用各环境默认的广场游戏Id default: null |

#### Returns

`void`

___

### getTeamCarryingData

▸ **getTeamCarryingData**(`teamId`): `Record`<`string`, `unknown`\>

**`Description`**

获取指定Team在组队跳转时带入游戏的数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teamId` | `string` |  要查询的teamId |

#### Returns

`Record`<`string`, `unknown`\>

指定队伍的数据

___

### isInDressUpGame

▸ **isInDressUpGame**(): `boolean`

**`Description`**

判断当前游戏是不是角色展示/编辑游戏

**`Effect`**

只在客户端调用生效

**`Precautions`**

在PIE或者服务端调用则固定返回false

#### Returns

`boolean`

true-当前游戏是角色展示/编辑游戏，false-不是

___

### notifyCharacterLoaded

▸ **notifyCharacterLoaded**(): `void`

**`Description`**

通知233/Playza角色形象加载完毕

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233/Playza内使用时生效

#### Returns

`void`

___

### notifyGameLoadingState

▸ **notifyGameLoadingState**(`newState`): `void`

**`Description`**

通知233/Playza当前TS游戏加载状态(收到这个协议，233停止下载，清除Temp文件)

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233/Playza内使用时生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | `number` |  状态Id。newState = 1 : 游戏加载成功，newState = 2 ：游戏加载失败 |

#### Returns

`void`

___

### requestGameId

▸ **requestGameId**(`targetMGSGameId`): `Promise`<`string`\>

**`Description`**

用内容库MGSGameId来换取gameId

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetMGSGameId` | `string` |  目标游戏的内容库MGSGameId |

#### Returns

`Promise`<`string`\>

对应的gameId

___

### requestMGSGameId

▸ **requestMGSGameId**(`targetGameId`): `Promise`<`string`\>

**`Description`**

用gameId来换取内容库MGSGameId

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetGameId` | `string` |  目标游戏的gameId |

#### Returns

`Promise`<`string`\>

对应的MGSGameId

___

### requestRefreshView

▸ **requestRefreshView**(): `void`

**`Description`**

TS请求233刷新View

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233内使用时生效

#### Returns

`void`

___

### requestSwitchViewLayout

▸ **requestSwitchViewLayout**(`newState`): `void`

**`Description`**

切换角色展示/编辑游戏的显示模式。

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233/Playza内使用时生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | `number` |  新模式。newState = 1 为“角色展示模式”，newState = 2 为“角色编辑模式” |

#### Returns

`void`

___

### getGameId

▸ `Static` **getGameId**(): `string`

**`Description`**

获取游戏Id

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在由233拉起生效

#### Returns

`string`

GameId

___

### getGameVersion

▸ `Static` **getGameVersion**(): `string`

**`Description`**

获取游戏版本

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在由233拉起生效

#### Returns

`string`

GameVersion

___

### getInstance

▸ `Static` **getInstance**(): [`RouteService`](Service.Service.RouteService.md)

**`Description`**

获取游戏管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`RouteService`](Service.Service.RouteService.md)

游戏管理器全局实例

___

### getMGSGameId

▸ `Static` **getMGSGameId**(): `string`

**`Description`**

获取短游戏ID

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在由233拉起生效

#### Returns

`string`

短游戏ID
