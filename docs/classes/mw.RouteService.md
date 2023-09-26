[SOCIAL](../groups/Core.SOCIAL.md) / RouteService

# RouteService <Badge type="tip" text="Class" /> <Score text="RouteService" />

<p class="content-big">

游戏管理器

</p>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new RouteService**()  |
| :----- |

### Accessors <Score text="Accessors" /> 
| **[onReceiveTeamData](mw.RouteService.md#onreceiveteamdata)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`teamId`: `string`, `data`: `Record`<`string`, `unknown`\>) => `void`\>  |
| :-----|
| 收到队伍数据时会触发的委托|
| **[onTeamMatchFailure](mw.RouteService.md#onteammatchfailure)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`failureInfo`: [`TeamMatchFailureInfo`](../modules/Core.mw.md#teammatchfailureinfo)) => `void`\>  |
| 组队请求失败时会触发的委托|
| **[onViewLayoutSwitched](mw.RouteService.md#onviewlayoutswitched)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Core.mw.md#onviewlayoutswitched)\>  |
| 获取角色展示/编辑游戏的显示模式切换的委托|
| **[onViewRefreshed](mw.RouteService.md#onviewrefreshed)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Core.mw.md#onviewrefreshed)\>  |
| 注册View刷新的委托|

### Methods <Score text="Methods" /> 
| **[addJumpGameCallback](mw.RouteService.md#addjumpgamecallback)**(`callback`: (`jumpFromGameId`: `string`, `carryingData`: `string`) => `void`): `void`  |
| :-----|
| 注册游戏跳转的回调，当跨进程从其他游戏跳转到当前游戏时触发。可以被动获取来源游戏Id和携带的数据|
| **[clearTeamCarryingData](mw.RouteService.md#clearteamcarryingdata)**(`teamId`: `string`): `void`  |
| 删除指定Team在组队跳转时带入游戏的数据|
| **[enterDressUpGame](mw.RouteService.md#enterdressupgame)**(`carryingData?`: `string`): `void`  |
| 退出当前游戏进程，回到主线程的角色编辑游戏。|
| **[enterLocalGame](mw.RouteService.md#enterlocalgame)**(`targetGameId`: `string`, `gamePath`: `string`, `carryingData?`: `string`): `void`  |
| 跳转本地游戏(可编辑的UGC工程) ，同进程跳转|
| **[enterNewGame](mw.RouteService.md#enternewgame)**(`targetGameId`: `string`, `carryingData?`: `string`): `void`  |
| 跳转到新游戏，同进程跳转|
| **[enterNewGameByTeam](mw.RouteService.md#enternewgamebyteam)**(`targetGameId`: `string`, `teammatePlayerIds`: `string`[], `carryingData?`: `Record`<`string`, `unknown`\>[]): `Promise`<`void`\>  |
| 组队跳游戏，可以携带数据|
| **[enterSquareGame](mw.RouteService.md#entersquaregame)**(`squareMgsGameId?`: `string`, `carryingData?`: `string`): `void`  |
| 将当前游戏进程恢复小窗，拉起新进程进入广场游戏。与默认的跳游戏模式不同。|
| **[getGameCarryingData](mw.RouteService.md#getgamecarryingdata)**(): `Promise`<`string`\>  |
| 获取拉起游戏时传入的数据|
| **[getGameId](mw.RouteService.md#getgameid)**(): `string`  |
| 获取游戏Id|
| **[getGameVersion](mw.RouteService.md#getgameversion)**(): `string`  |
| 获取游戏版本|
| **[getJumpFromMGSGameId](mw.RouteService.md#getjumpfrommgsgameid)**(): `Promise`<`string`\>  |
| 获取游戏来源信息|
| **[getMGSGameId](mw.RouteService.md#getmgsgameid)**(): `string`  |
| 获取短游戏ID|
| **[getTeamCarryingData](mw.RouteService.md#getteamcarryingdata)**(`teamId`: `string`): `Record`<`string`, `unknown`\>  |
| 获取指定Team在组队跳转时带入游戏的数据|
| **[isInDressUpGame](mw.RouteService.md#isindressupgame)**(): `boolean`  |
| 判断当前游戏是不是角色展示/编辑游戏|
| **[notifyCharacterLoaded](mw.RouteService.md#notifycharacterloaded)**(): `void`  |
| 通知233/Playza角色形象加载完毕|
| **[notifyGameLoadingState](mw.RouteService.md#notifygameloadingstate)**(`newState`: `number`): `void`  |
| 通知233/Playza当前TS游戏加载状态(收到这个协议，233停止下载，清除Temp文件)|
| **[requestGameId](mw.RouteService.md#requestgameid)**(`targetMgsGameId`: `string`): `Promise`<`string`\>  |
| 用内容库MGSGameId来换取gameId|
| **[requestMGSGameId](mw.RouteService.md#requestmgsgameid)**(`targetGameId`: `string`): `Promise`<`string`\>  |
| 用gameId来换取内容库MGSGameId|
| **[requestRefreshView](mw.RouteService.md#requestrefreshview)**(): `void`  |
| TS请求233刷新View|
| **[requestSwitchViewLayout](mw.RouteService.md#requestswitchviewlayout)**(`newState`: `number`): `void`  |
| 切换角色展示/编辑游戏的显示模式。|

## Accessors

### onReceiveTeamData <Score text="onReceiveTeamData" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onReceiveTeamData**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`teamId`: `string`, `data`: `Record`<`string`, `unknown`\>) => `void`\>

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


收到队伍数据时会触发的委托

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`teamId`: `string`, `data`: `Record`<`string`, `unknown`\>) => `void`\> |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onTeamMatchFailure <Score text="onTeamMatchFailure" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onTeamMatchFailure**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`failureInfo`: [`TeamMatchFailureInfo`](../modules/Core.mw.md#teammatchfailureinfo)) => `void`\>

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


组队请求失败时会触发的委托

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`failureInfo`: [`TeamMatchFailureInfo`](../modules/Core.mw.md#teammatchfailureinfo)) => `void`\> |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onViewLayoutSwitched <Score text="onViewLayoutSwitched" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onViewLayoutSwitched**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Core.mw.md#onviewlayoutswitched)\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取角色展示/编辑游戏的显示模式切换的委托


::: warning Precautions

只在233内使用时生效

:::

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnViewLayoutSwitched`](../modules/Core.mw.md#onviewlayoutswitched)\> | 角色展示/编辑游戏的显示模式切换的委托 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onViewRefreshed <Score text="onViewRefreshed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onViewRefreshed**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Core.mw.md#onviewrefreshed)\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


注册View刷新的委托


::: warning Precautions

只在233内使用时生效

:::

#### Returns

</td>
</tr></tbody>
</table>

| [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnViewRefreshed`](../modules/Core.mw.md#onviewrefreshed)\> | View刷新的委托 |
| :------ | :------ |

## Methods

### addJumpGameCallback <Score text="addJumpGameCallback" /> 

• `Static` **addJumpGameCallback**(`callback`): `void` <Badge type="tip" text="client" />

注册游戏跳转的回调，当跨进程从其他游戏跳转到当前游戏时触发。可以被动获取来源游戏Id和携带的数据

#### Parameters

| `callback` (`jumpFromGameId`: `string`, `carryingData`: `string`) => `void` |  要注册的回调，在接收到跳转信息时触发 |
| :------ | :------ |



<p style="font-size: 14px;">

使用示例:创建一个名为RouteExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，当从其他游戏跳转到当前游戏时，会在角色名称处显示跳转游戏的gameId和携带的数据

</p>

```ts
@Component
export default class RouteExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let player = await mw.asyncGetCurrentPlayer();
        RouteService.addJumpGameCallback((id: string, data: string) => {
            player.character.characterName = "JumpGame :" + data + "from " + id;
        })
    }
}
```

___

### clearTeamCarryingData <Score text="clearTeamCarryingData" /> 

• `Static` **clearTeamCarryingData**(`teamId`): `void` <Badge type="tip" text="server" />

删除指定Team在组队跳转时带入游戏的数据

#### Parameters

| `teamId` `string` |  目标teamId |
| :------ | :------ |



___

### enterDressUpGame <Score text="enterDressUpGame" /> 

• `Static` **enterDressUpGame**(`carryingData?`): `void` <Badge type="tip" text="client" />

退出当前游戏进程，回到主线程的角色编辑游戏。

#### Parameters

| `carryingData?` `string` |  跳游戏携带的数据 default: undefined |
| :------ | :------ |



::: warning Precautions

只在233内使用时生效

:::

<p style="font-size: 14px;">

使用示例:创建一个名为RouteExample的脚本，挂载到场景中，运行后，10秒后会自动跳转到角色编辑游戏。

</p>

```ts
@Component
export default class RouteExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        await TimeUtil.delaySecond(10);
        RouteService.enterDressUpGame();
    }
}
```

___

### enterLocalGame <Score text="enterLocalGame" /> 

• `Static` **enterLocalGame**(`targetGameId`, `gamePath`, `carryingData?`): `void` <Badge type="tip" text="client" />

跳转本地游戏(可编辑的UGC工程) ，同进程跳转

#### Parameters

| `targetGameId` `string` |  目标游戏的GameId，一般来说，这里会是模板游戏的gameId |
| :------ | :------ |
| `gamePath` `string` |  本地游戏工程的路径 |
| `carryingData?` `string` |  跳游戏携带的数据 default: undefined |



::: warning Precautions

需要用创建本地工程时所对应模板游戏的gameId

:::

___

### enterNewGame <Score text="enterNewGame" /> 

• `Static` **enterNewGame**(`targetGameId`, `carryingData?`): `void` <Badge type="tip" text="client" />

跳转到新游戏，同进程跳转

#### Parameters

| `targetGameId` `string` |  要跳转的目标游戏ID，GameId |
| :------ | :------ |
| `carryingData?` `string` |  跳游戏携带的数据 default: undefined |



<p style="font-size: 14px;">

使用示例: 跳转到新游戏

</p>

```ts
// 更多游戏跳游戏的实例请前往论坛看帖子 https://forum.ark.online/forum.php?mod=viewthread&tid=1145
// 这个gameid可以在这里获取： 创作者中心→我的游戏→游戏名下方一个p_开头的就是gameid，点旁边的复制就可以复制过来
// 这里的 P_21def1ac9e0a4e73500d90bb2b5d53bfd1d9cf40 是游戏《只因哥大战小黑子》的gameid
// 跳游戏的话，默认会跳往 现行的、目前处在上线状态的、过了审的那个版本
// 没有过审的话，将无法跳进去哦
mw.RouteService.enterNewGame("P_21def1ac9e0a4e73500d90bb2b5d53bfd1d9cf40");
```

___

### enterNewGameByTeam <Score text="enterNewGameByTeam" /> 

• `Static` **enterNewGameByTeam**(`targetGameId`, `teammatePlayerIds`, `carryingData?`): `Promise`<`void`\> <Badge type="tip" text="server" />

组队跳游戏，可以携带数据

#### Parameters

| `targetGameId` `string` |  要跳转的游戏的GameId |
| :------ | :------ |
| `teammatePlayerIds` `string`[] |  队友的playerId数组 |
| `carryingData?` `Record`<`string`, `unknown`\>[] |  要带入新游戏的数据 default: undefined |

#### Returns

| `Promise`<`void`\> | 组队跳转请求回调 |
| :------ | :------ |


___

### enterSquareGame <Score text="enterSquareGame" /> 

• `Static` **enterSquareGame**(`squareMgsGameId?`, `carryingData?`): `void` <Badge type="tip" text="client" />

将当前游戏进程恢复小窗，拉起新进程进入广场游戏。与默认的跳游戏模式不同。

#### Parameters

| `squareMgsGameId?` `string` |  新的广场游戏GameId，如果为空，则使用各环境默认的广场游戏Id default: null |
| :------ | :------ |
| `carryingData?` `string` |  跳游戏携带的数据 default: undefined |



::: warning Precautions

只在233内使用时生效

:::

<p style="font-size: 14px;">

使用示例:创建一个名为RouteExample的脚本，挂载到场景中，运行后，10秒后进入广场游戏。

</p>

```ts
@Component
export default class RouteExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        await TimeUtil.delaySecond(10);
        RouteService.enterSquareGame();
    }
}
```

___

### getGameCarryingData <Score text="getGameCarryingData" /> 

• `Static` **getGameCarryingData**(): `Promise`<`string`\> <Badge type="tip" text="client" />

获取拉起游戏时传入的数据

#### Returns

| `Promise`<`string`\> | 拉起游戏时传入的数据 |
| :------ | :------ |


::: warning Precautions

如果是组队跳游戏，请使用getTeamCarryingData在服务端获取数据。

:::

___

### getGameId <Score text="getGameId" /> 

• `Static` **getGameId**(): `string` <Badge type="tip" text="client" />

获取游戏Id

#### Returns

| `string` | GameId |
| :------ | :------ |


::: warning Precautions

只在由233拉起生效

:::

<p style="font-size: 14px;">

使用示例:创建一个名为RouteExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏在移动端测试，会在角色名显示GameId，PC环境为空

</p>

```ts
@Component
export default class RouteExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let player = await mw.asyncGetCurrentPlayer();
        player.character.characterName = "gameId:" + RouteService.getGameId();
    }
}
```

___

### getGameVersion <Score text="getGameVersion" /> 

• `Static` **getGameVersion**(): `string` <Badge type="tip" text="client" />

获取游戏版本

#### Returns

| `string` | GameVersion |
| :------ | :------ |


::: warning Precautions

只在由233拉起生效

:::

<p style="font-size: 14px;">

使用示例:创建一个名为RouteExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏在移动端测试，会在角色名显示游戏版本，PC环境为空

</p>

```ts
@Component
export default class RouteExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let player = await mw.asyncGetCurrentPlayer();
        player.character.characterName = "游戏版本:" + RouteService.getGameVersion();
    }
}
```

___

### getJumpFromMGSGameId <Score text="getJumpFromMGSGameId" /> 

• `Static` **getJumpFromMGSGameId**(): `Promise`<`string`\> <Badge type="tip" text="client" />

获取游戏来源信息

#### Returns

| `Promise`<`string`\> | 当前游戏是从哪个游戏跳转过来的，为空则不是游戏跳转 |
| :------ | :------ |


___

### getMGSGameId <Score text="getMGSGameId" /> 

• `Static` **getMGSGameId**(): `string` <Badge type="tip" text="client" />

获取短游戏ID

#### Returns

| `string` | 短游戏ID |
| :------ | :------ |


::: warning Precautions

只在由233拉起生效

:::

<p style="font-size: 14px;">

使用示例:创建一个名为RouteExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏在移动端测试，会在角色名显示短游戏ID，PC环境为空

</p>

```ts
@Component
export default class RouteExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let player = await mw.asyncGetCurrentPlayer();
        player.character.characterName = "短游戏ID:" + RouteService.getMGSGameId();
    }
}
```

___

### getTeamCarryingData <Score text="getTeamCarryingData" /> 

• `Static` **getTeamCarryingData**(`teamId`): `Record`<`string`, `unknown`\> <Badge type="tip" text="server" />

获取指定Team在组队跳转时带入游戏的数据

#### Parameters

| `teamId` `string` |  要查询的teamId |
| :------ | :------ |

#### Returns

| `Record`<`string`, `unknown`\> | 指定队伍的数据 |
| :------ | :------ |


___

### isInDressUpGame <Score text="isInDressUpGame" /> 

• `Static` **isInDressUpGame**(): `boolean` <Badge type="tip" text="client" />

判断当前游戏是不是角色展示/编辑游戏

#### Returns

| `boolean` | true-当前游戏是角色展示/编辑游戏，false-不是 |
| :------ | :------ |


::: warning Precautions

在PIE或者服务端调用则固定返回false

:::

___

### notifyCharacterLoaded <Score text="notifyCharacterLoaded" /> 

• `Static` **notifyCharacterLoaded**(): `void` <Badge type="tip" text="client" />

通知233/Playza角色形象加载完毕



::: warning Precautions

只在233/Playza内使用时生效

:::

___

### notifyGameLoadingState <Score text="notifyGameLoadingState" /> 

• `Static` **notifyGameLoadingState**(`newState`): `void` <Badge type="tip" text="client" />

通知233/Playza当前TS游戏加载状态(收到这个协议，233停止下载，清除Temp文件)

#### Parameters

| `newState` `number` |  状态Id。newState = 1 : 游戏加载成功，newState = 2 ：游戏加载失败 |
| :------ | :------ |



::: warning Precautions

只在233/Playza内使用时生效

:::

___

### requestGameId <Score text="requestGameId" /> 

• `Static` **requestGameId**(`targetMgsGameId`): `Promise`<`string`\> 

用内容库MGSGameId来换取gameId

#### Parameters

| `targetMgsGameId` `string` |  目标游戏的内容库gameId |
| :------ | :------ |

#### Returns

| `Promise`<`string`\> | 对应的gameId |
| :------ | :------ |


___

### requestMGSGameId <Score text="requestMGSGameId" /> 

• `Static` **requestMGSGameId**(`targetGameId`): `Promise`<`string`\> 

用gameId来换取内容库MGSGameId

#### Parameters

| `targetGameId` `string` |  目标游戏的gameId |
| :------ | :------ |

#### Returns

| `Promise`<`string`\> | 对应的MGSGameId |
| :------ | :------ |


___

### requestRefreshView <Score text="requestRefreshView" /> 

• `Static` **requestRefreshView**(): `void` <Badge type="tip" text="client" />

TS请求233刷新View



::: warning Precautions

只在233内使用时生效

:::

___

### requestSwitchViewLayout <Score text="requestSwitchViewLayout" /> 

• `Static` **requestSwitchViewLayout**(`newState`): `void` <Badge type="tip" text="client" />

切换角色展示/编辑游戏的显示模式。

#### Parameters

| `newState` `number` |  新模式。newState = 1 为“角色展示模式”，newState = 2 为“角色编辑模式” |
| :------ | :------ |



::: warning Precautions

只在233/Playza内使用时生效
