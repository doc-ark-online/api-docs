[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / RouteService

# Class: RouteService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).RouteService

**`Author`**

huipeng.jia

**`Instance`**

**`Description`**

游戏管理器

**`Precautions`**

单例类，请使用getInstance获取对象

**`Network Status`**

usage: 客户端

## Table of contents

### Constructors

- [constructor](Service.Service.RouteService.md#constructor)

### Accessors

- [onViewLayoutSwitched](Service.Service.RouteService.md#onviewlayoutswitched)
- [onViewRefreshed](Service.Service.RouteService.md#onviewrefreshed)

### Methods

- [enterDressUpGame](Service.Service.RouteService.md#enterdressupgame)
- [enterLocalGame](Service.Service.RouteService.md#enterlocalgame)
- [enterNewGame](Service.Service.RouteService.md#enternewgame)
- [enterSquareGame](Service.Service.RouteService.md#entersquaregame)
- [isInDressUpGame](Service.Service.RouteService.md#isindressupgame)
- [notifyCharacterLoaded](Service.Service.RouteService.md#notifycharacterloaded)
- [notifyGameLoadingState](Service.Service.RouteService.md#notifygameloadingstate)
- [requestGameId](Service.Service.RouteService.md#requestgameid)
- [requestMGSGameId](Service.Service.RouteService.md#requestmgsgameid)
- [requestRefreshView](Service.Service.RouteService.md#requestrefreshview)
- [requestSwitchViewLayout](Service.Service.RouteService.md#requestswitchviewlayout)
- [backToLobby](Service.Service.RouteService.md#backtolobby)
- [getGameId](Service.Service.RouteService.md#getgameid)
- [getGameVersion](Service.Service.RouteService.md#getgameversion)
- [getInstance](Service.Service.RouteService.md#getinstance)
- [getMGSGameId](Service.Service.RouteService.md#getmgsgameid)

## Constructors

### constructor

• **new RouteService**()

## Accessors

### onViewLayoutSwitched

• `get` **onViewLayoutSwitched**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewLayoutSwitchedDelegate`](../modules/Service.Service.md#onviewlayoutswitcheddelegate)\>

**`Description`**

获取角色展示/编辑游戏的显示模式切换的委托

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233内使用时生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewLayoutSwitchedDelegate`](../modules/Service.Service.md#onviewlayoutswitcheddelegate)\>

角色展示/编辑游戏的显示模式切换的委托

#### Defined in

Service/index.d.ts:545

___

### onViewRefreshed

• `get` **onViewRefreshed**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewRefreshedDelegate`](../modules/Service.Service.md#onviewrefresheddelegate)\>

**`Description`**

注册View刷新的委托

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233内使用时生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnViewRefreshedDelegate`](../modules/Service.Service.md#onviewrefresheddelegate)\>

View刷新的委托

#### Defined in

Service/index.d.ts:511

## Methods

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

#### Defined in

Service/index.d.ts:558

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
| `targetGameId` | `string` | usage: 目标游戏的MWGameId，一般来说，这里会是模板游戏的gameId |
| `gamePath` | `string` | usage: 本地游戏工程的路径 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:572

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
| `targetGameId` | `string` | usage: 要跳转的目标游戏ID，MWGameId |

#### Returns

`void`

#### Defined in

Service/index.d.ts:564

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
| `squareMGSGameId?` | `string` | usage: 新的广场游戏GameId，如果为空，则使用各环境默认的广场游戏Id default: null |

#### Returns

`void`

#### Defined in

Service/index.d.ts:552

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

#### Defined in

Service/index.d.ts:518

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

#### Defined in

Service/index.d.ts:531

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
| `newState` | `number` | usage: 状态Id。newState = 1 : 游戏加载成功，newstate = 2 ：游戏加载失败 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:538

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
| `targetMGSGameId` | `string` | usage: 目标游戏的内容库MGSGameId |

#### Returns

`Promise`<`string`\>

对应的gameId

#### Defined in

Service/index.d.ts:579

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
| `targetGameId` | `string` | usage: 目标游戏的gameId |

#### Returns

`Promise`<`string`\>

对应的MGSGameId

#### Defined in

Service/index.d.ts:586

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

#### Defined in

Service/index.d.ts:504

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
| `newState` | `number` | usage: 新模式。newState = 1 为“角色展示模式”，newstate = 2 为“角色编辑模式” |

#### Returns

`void`

#### Defined in

Service/index.d.ts:525

___

### backToLobby

▸ `Static` **backToLobby**(): `void`

**`Description`**

返回到游戏大厅

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:591

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

#### Defined in

Service/index.d.ts:598

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

#### Defined in

Service/index.d.ts:605

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

#### Defined in

Service/index.d.ts:498

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

#### Defined in

Service/index.d.ts:612
