[Service](../modules/Service.Service.md) / RouteService

# RouteService <Badge type="tip" text="Class" /> 

**`Instance`**

**`Description`**

游戏管理器

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Properties |
| :-----|
| **[onReceiveTeamData](Service.RouteService.md#onreceiveteamdata)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`teamId`: `string`, `data`: `Record`<`string`, `unknown`\>) => `void`\> <br> 收到队伍数据时会触发的委托|
| **[onTeamMatchFailure](Service.RouteService.md#onteammatchfailure)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`failureInfo`: [`TeamMatchFailureInfo`](../modules/Service.Service.md#teammatchfailureinfo)) => `void`\> <br> 组队请求失败时会触发的委托|

| Accessors |
| :-----|
| **[onViewLayoutSwitched](Service.RouteService.md#onviewlayoutswitched)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Service.Service.md#onviewlayoutswitched)\> <br> 获取角色展示/编辑游戏的显示模式切换的委托|
| **[onViewRefreshed](Service.RouteService.md#onviewrefreshed)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Service.Service.md#onviewrefreshed)\> <br> 注册View刷新的委托|

| Methods |
| :-----|
| **[clearTeamCarryingData](Service.RouteService.md#clearteamcarryingdata)**(`string`): `void` <br> 删除指定Team在组队跳转时带入游戏的数据|
| **[enterDressUpGame](Service.RouteService.md#enterdressupgame)**(): `void` <br> 退出当前游戏进程，回到主线程的角色编辑游戏。|
| **[enterLocalGame](Service.RouteService.md#enterlocalgame)**(`string`, `string`): `void` <br> 跳转本地游戏(可编辑的UGC工程) ，同进程跳转|
| **[enterNewGame](Service.RouteService.md#enternewgame)**(`string`): `void` <br> 跳转到新游戏，同进程跳转|
| **[enterNewGameByTeam](Service.RouteService.md#enternewgamebyteam)**(`string`, `string`[], `Record`<`string`, `unknown`\>[]): `Promise`<`void`\> <br> 组队跳游戏，可以携带数据|
| **[enterSquareGame](Service.RouteService.md#entersquaregame)**(`string`): `void` <br> 将当前MW进程恢复小窗，拉起新进程进入广场游戏。与默认的跳游戏模式不同。|
| **[getTeamCarryingData](Service.RouteService.md#getteamcarryingdata)**(`string`): `Record`<`string`, `unknown`\> <br> 获取指定Team在组队跳转时带入游戏的数据|
| **[isInDressUpGame](Service.RouteService.md#isindressupgame)**(): `boolean` <br> 判断当前游戏是不是角色展示/编辑游戏|
| **[notifyCharacterLoaded](Service.RouteService.md#notifycharacterloaded)**(): `void` <br> 通知233/Playza角色形象加载完毕|
| **[notifyGameLoadingState](Service.RouteService.md#notifygameloadingstate)**(`number`): `void` <br> 通知233/Playza当前TS游戏加载状态(收到这个协议，233停止下载，清除Temp文件)|
| **[requestGameId](Service.RouteService.md#requestgameid)**(`string`): `Promise`<`string`\> <br> 用内容库MGSGameId来换取gameId|
| **[requestMGSGameId](Service.RouteService.md#requestmgsgameid)**(`string`): `Promise`<`string`\> <br> 用gameId来换取内容库MGSGameId|
| **[requestRefreshView](Service.RouteService.md#requestrefreshview)**(): `void` <br> TS请求233刷新View|
| **[requestSwitchViewLayout](Service.RouteService.md#requestswitchviewlayout)**(`number`): `void` <br> 切换角色展示/编辑游戏的显示模式。|
| **[getGameId](Service.RouteService.md#getgameid)**(): `string` <br> 获取游戏Id|
| **[getGameVersion](Service.RouteService.md#getgameversion)**(): `string` <br> 获取游戏版本|
| **[getInstance](Service.RouteService.md#getinstance)**(): [`RouteService`](Service.RouteService.md) <br> 获取游戏管理器全局实例|
| **[getMGSGameId](Service.RouteService.md#getmgsgameid)**(): `string` <br> 获取短游戏ID|

## Properties

### onReceiveTeamData  

• **onReceiveTeamData**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`teamId`: `string`, `data`: `Record`<`string`, `unknown`\>) => `void`\>

**`Description`**

收到队伍数据时会触发的委托

___

### onTeamMatchFailure  

• **onTeamMatchFailure**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`failureInfo`: [`TeamMatchFailureInfo`](../modules/Service.Service.md#teammatchfailureinfo)) => `void`\>

**`Description`**

组队请求失败时会触发的委托

## Accessors

### onViewLayoutSwitched  

• `get` **onViewLayoutSwitched**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Service.Service.md#onviewlayoutswitched)\> <Badge type="tip" text="other" />

**`Description`**

获取角色展示/编辑游戏的显示模式切换的委托


::: warning Precautions

只在233内使用时生效

:::

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Service.Service.md#onviewlayoutswitched)\>

角色展示/编辑游戏的显示模式切换的委托

___

### onViewRefreshed  

• `get` **onViewRefreshed**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Service.Service.md#onviewrefreshed)\> <Badge type="tip" text="other" />

**`Description`**

注册View刷新的委托


::: warning Precautions

只在233内使用时生效

:::

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Service.Service.md#onviewrefreshed)\>

View刷新的委托

## Methods

### clearTeamCarryingData  

▸ **clearTeamCarryingData**(`teamId`): `void` <Badge type="tip" text="other" />

**`Description`**

删除指定Team在组队跳转时带入游戏的数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teamId` | `string` |  目标teamId |


___

### enterDressUpGame  

▸ **enterDressUpGame**(): `void` <Badge type="tip" text="other" />

**`Description`**

退出当前游戏进程，回到主线程的角色编辑游戏。


::: warning Precautions

只在233内使用时生效

:::


___

### enterLocalGame  

▸ **enterLocalGame**(`targetGameId`, `gamePath`): `void` <Badge type="tip" text="other" />

**`Description`**

跳转本地游戏(可编辑的UGC工程) ，同进程跳转


::: warning Precautions

需要用创建本地工程时所对应模板游戏的gameId

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetGameId` | `string` |  目标游戏的MWGameId，一般来说，这里会是模板游戏的gameId |
| `gamePath` | `string` |  本地游戏工程的路径 |


___

### enterNewGame  

▸ **enterNewGame**(`targetGameId`): `void` <Badge type="tip" text="other" />

**`Description`**

跳转到新游戏，同进程跳转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetGameId` | `string` |  要跳转的目标游戏ID，MWGameId |


___

### enterNewGameByTeam  

▸ **enterNewGameByTeam**(`targetGameId`, `teammatePlayerIds`, `carryingData?`): `Promise`<`void`\> <Badge type="tip" text="other" />

**`Description`**

组队跳游戏，可以携带数据


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

▸ **enterSquareGame**(`squareMGSGameId?`): `void` <Badge type="tip" text="other" />

**`Description`**

将当前MW进程恢复小窗，拉起新进程进入广场游戏。与默认的跳游戏模式不同。


::: warning Precautions

只在233内使用时生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `squareMGSGameId?` | `string` |  新的广场游戏GameId，如果为空，则使用各环境默认的广场游戏Id default: null |


___

### getTeamCarryingData  

▸ **getTeamCarryingData**(`teamId`): `Record`<`string`, `unknown`\> <Badge type="tip" text="other" />

**`Description`**

获取指定Team在组队跳转时带入游戏的数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teamId` | `string` |  要查询的teamId |

#### Returns

`Record`<`string`, `unknown`\>

指定队伍的数据

___

### isInDressUpGame  

▸ **isInDressUpGame**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

判断当前游戏是不是角色展示/编辑游戏


::: warning Precautions

在PIE或者服务端调用则固定返回false

:::

#### Returns

`boolean`

true-当前游戏是角色展示/编辑游戏，false-不是

___

### notifyCharacterLoaded  

▸ **notifyCharacterLoaded**(): `void` <Badge type="tip" text="other" />

**`Description`**

通知233/Playza角色形象加载完毕


::: warning Precautions

只在233/Playza内使用时生效

:::


___

### notifyGameLoadingState  

▸ **notifyGameLoadingState**(`newState`): `void` <Badge type="tip" text="other" />

**`Description`**

通知233/Playza当前TS游戏加载状态(收到这个协议，233停止下载，清除Temp文件)


::: warning Precautions

只在233/Playza内使用时生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | `number` |  状态Id。newState = 1 : 游戏加载成功，newState = 2 ：游戏加载失败 |


___

### requestGameId  

▸ **requestGameId**(`targetMGSGameId`): `Promise`<`string`\> <Badge type="tip" text="other" />

**`Description`**

用内容库MGSGameId来换取gameId


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetMGSGameId` | `string` |  目标游戏的内容库MGSGameId |

#### Returns

`Promise`<`string`\>

对应的gameId

___

### requestMGSGameId  

▸ **requestMGSGameId**(`targetGameId`): `Promise`<`string`\> <Badge type="tip" text="other" />

**`Description`**

用gameId来换取内容库MGSGameId


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetGameId` | `string` |  目标游戏的gameId |

#### Returns

`Promise`<`string`\>

对应的MGSGameId

___

### requestRefreshView  

▸ **requestRefreshView**(): `void` <Badge type="tip" text="other" />

**`Description`**

TS请求233刷新View


::: warning Precautions

只在233内使用时生效

:::


___

### requestSwitchViewLayout  

▸ **requestSwitchViewLayout**(`newState`): `void` <Badge type="tip" text="other" />

**`Description`**

切换角色展示/编辑游戏的显示模式。


::: warning Precautions

只在233/Playza内使用时生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | `number` |  新模式。newState = 1 为“角色展示模式”，newState = 2 为“角色编辑模式” |


___

### getGameId  

▸ `Static` **getGameId**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取游戏Id


::: warning Precautions

只在由233拉起生效

:::

#### Returns

`string`

GameId

___

### getGameVersion  

▸ `Static` **getGameVersion**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取游戏版本


::: warning Precautions

只在由233拉起生效

:::

#### Returns

`string`

GameVersion

___

### getInstance  

▸ `Static` **getInstance**(): [`RouteService`](Service.RouteService.md) <Badge type="tip" text="other" />

**`Description`**

获取游戏管理器全局实例


#### Returns

[`RouteService`](Service.RouteService.md)

游戏管理器全局实例

___

### getMGSGameId  

▸ `Static` **getMGSGameId**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取短游戏ID


::: warning Precautions

只在由233拉起生效

:::

#### Returns

`string`

短游戏ID
