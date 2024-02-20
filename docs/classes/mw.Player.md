[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / Player

# Player <Badge type="tip" text="Class" /> <Score text="Player" />

角色管理器

Player 包含当前连接到MW服务器的Player对象。它负责管理角色的各种唯一标识符（ID）并提供创建、获取并管理玩家的功能。

角色管理器类会维护一个字典，用于存储所有角色的唯一标识符。用于区分不同的角色。

角色管理器会提供方法来添加、删除和检索角色的ID。当创建一个新角色时，该角色的ID会被分配并添加到管理器的列表中。当角色不再存在时，该ID会被从列表中删除。通过这些方法，可以方便地管理角色的ID集合。

角色管理器还提供获取玩家的功能。通过玩家的ID，可以轻松地从管理器中获取对应的角色对象。这样，其他部分的代码可以使用玩家的ID来获取与之相关联的角色实例，进行进一步的处理和操作。

值得注意的是可通过Player.localPlayer.character获取本地玩家角色，开启本地角色玩家的配置。

## Table of contents

### Properties <Score text="Properties" /> 
| **[onPawnChange](mw.Player.md#onpawnchange)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`pawn`: [`Pawn`](mw.Pawn.md)) => `void`\>  |
| :-----|
| 控制对象变化委托|
| **[onPlayerDisconnect](mw.Player.md#onplayerdisconnect)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`player`: [`Player`](mw.Player.md)) => `void`\>  |
| 玩家断线委托|
| **[onPlayerJoin](mw.Player.md#onplayerjoin)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`player`: [`Player`](mw.Player.md)) => `void`\>  |
| 玩家加入委托|
| **[onPlayerLeave](mw.Player.md#onplayerleave)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`player`: [`Player`](mw.Player.md)) => `void`\>  |
| 玩家离开委托|
| **[onPlayerReconnect](mw.Player.md#onplayerreconnect)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`player`: [`Player`](mw.Player.md)) => `void`\>  |
| 玩家重连委托|

### Accessors <Score text="Accessors" /> 
| **[character](mw.Player.md#character)**(): [`Character`](mw.Character.md)  |
| :-----|
| 控制角色|
| **[ping](mw.Player.md#ping)**(): `number`  |
| 网络延迟是指从玩家在游戏中执行某个操作到该操作在其他玩家的游戏中显示出来所需的时间。通常以毫秒（ms）为单位表示。较低的延迟意味着玩家的操作能够快速传输到服务器和其他玩家，并且游戏的响应更加即时。|
| **[playerId](mw.Player.md#playerid)**(): `number`  |
| 玩家ID|
| **[teamId](mw.Player.md#teamid)**(): `string`  |
| 队伍ID|
| **[userId](mw.Player.md#userid)**(): `string`  |
| 玩家的用户平台ID。该值是多端同步的，可以作为玩家唯一ID使用。玩家对象准备好后需等待一段时间该值才能准备好。|
| **[localPlayer](mw.Player.md#localplayer)**(): [`Player`](mw.Player.md)  |
| 因为在客户端上运行。 对于 Script 对象运行其代码的服务器，此属性为null。|

### Methods <Score text="Methods" /> 
| **[control](mw.Player.md#control)**(`pawn`: [`Pawn`](mw.Pawn.md)): `boolean`  |
| :-----|
| 控制一个Pawn对象|
| **[getPlayerState](mw.Player.md#getplayerstate)**<`T`: extends [`PlayerState`](mw.PlayerState.md)<`T`\>\>(`type`: (...`args`: `unknown`[]) => `T`: extends [`PlayerState`](mw.PlayerState.md)<`T`\>): `T`: extends [`PlayerState`](mw.PlayerState.md)<`T`\>  |
| 总的来说，用于跟踪和存储与每个玩家相关的数据和状态。它帮助游戏管理玩家的个人信息，如得分、生命值等，并在多人游戏中确保玩家状态的同步。通过PlayerState，游戏可以更好地处理多人游戏中的个人和团队数据，以提供更丰富的游戏体验。|
| **[asyncGetLocalPlayer](mw.Player.md#asyncgetlocalplayer)**(): `Promise`<[`Player`](mw.Player.md)\>  |
| 当正常获取本地玩家时，使用Player.localPlayer即可。|
| **[asyncGetPlayer](mw.Player.md#asyncgetplayer)**(`playerId`: `number`): `Promise`<[`Player`](mw.Player.md)\>  |
| 异步获取玩家|
| **[getAllPlayers](mw.Player.md#getallplayers)**(): [`Player`](mw.Player.md)[]  |
| 获取当前所有玩家。此方法返回当前连接的所有玩家的数组，当与 for 循环结合使用时，它对于迭代游戏中的所有玩家非常有用。|
| **[getControllerRotation](mw.Player.md#getcontrollerrotation)**(`outer?`: [`Rotation`](mw.Rotation.md)): [`Rotation`](mw.Rotation.md)  |
| 获取控制器的旋转|
| **[getPlayer](mw.Player.md#getplayer)**(`uniqueId`: `string`  `number`): [`Player`](mw.Player.md)  |
| 获取玩家，根据userId找到对应的玩家|
| **[setControllerRotation](mw.Player.md#setcontrollerrotation)**(`newRotation`: [`Rotation`](mw.Rotation.md)): `void`  |
| 覆写控制器的旋转|
| **[spawnDefaultCharacter](mw.Player.md#spawndefaultcharacter)**(): [`Character`](mw.Character.md)  |
| 创建默认角色|

## Properties

### onPawnChange <Score text="onPawnChange" /> 

• `Readonly` **onPawnChange**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`pawn`: [`Pawn`](mw.Pawn.md)) => `void`\> 

控制对象变化委托


::: warning Precautions

当玩家控制的角色发生变化时执行绑定函数

:::

<span style="font-size: 14px;">
使用示例: 将使用到的资源:“7750”拖入优先加载栏。创建一个名为"Example_Player_OnPawnChange"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在在服务端添加一个【创建角色并控制】事件监听器,当监听到事件时在场景中创建默认角色并控制. 按下键盘“1”，向服务端发送事件【创建角色并控制】.给本地玩家的【玩家控制对象变化】委托添加一个函数:在生成并控制的新角色位置播放一个特效.当触发控制对象变化委托时执行绑定函数.代码如下:
</span>

```ts
@Component
export default class Example_Player_OnPawnChange extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            mw.Event.addClientListener("SpawnCharacterAndControl", (player) => {
                let newPawn = Player.spawnDefaultCharacter();
                newPawn.worldTransform.position = new Vector(200, 0, 500);
                player.control(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数:在生成并控制的新角色位置播放一个特效
            myPlayer.onPawnChange.add((pawn) => {
                EffectService.playAtPosition("7750", new Vector(200, 0, 500));
            });
            // 添加一个按键方法:按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Keys.One, () => {
                mw.Event.dispatchEventToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```

___

### onPlayerDisconnect <Score text="onPlayerDisconnect" /> 

▪ `Static` `Readonly` **onPlayerDisconnect**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`player`: [`Player`](mw.Player.md)) => `void`\> 

玩家断线委托


::: warning Precautions

当玩家掉线时执行绑定函数。该委托双端触发机制不同。在客户端只被本地玩家掉线事件触发，触发时机为掉线的瞬间。在服务端被任意玩家掉线事件触发，触发时机为5秒内未收到客户端玩家消息即为掉线。
当客户端切后台、看广告等OnPause操作时，该回调在服务器上也会被触发。

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_OnPlayerDisconnect"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将给【玩家断线】委托添加一个函数:打印玩家断线游戏消息.在控制台中看到断线玩家的用户ID和断线通知.代码如下:
</span>

```ts
@Component
export default class Example_Player_OnPlayerDisconnect extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 给【玩家加入】委托添加一个函数，打印玩家加入游戏消息
            Player.onPlayerJoin.add((player) => {
                console.log("Player " + player.userId + " joined the Game");
            });
            // 给【玩家离开】委托添加一个函数，打印玩家离开游戏消息
            Player.onPlayerLeave.add((player) => {
                console.log("Player " + player.userId + " Left the Game");
            });
            // 给【玩家断线】委托添加一个函数，打印玩家断线消息
            Player.onPlayerDisconnect.add((player) => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数，打印玩家重连消息
            Player.onPlayerReconnect.add((player) => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给【玩家断线】委托添加一个函数，打印玩家断线消息
            Player.onPlayerDisconnect.add((player) => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数，打印玩家重连消息
            Player.onPlayerReconnect.add((player) => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
    }
}
```

___

### onPlayerJoin <Score text="onPlayerJoin" /> 

▪ `Static` `Readonly` **onPlayerJoin**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`player`: [`Player`](mw.Player.md)) => `void`\> 

玩家加入委托


::: warning Precautions

当玩家加入游戏时执行绑定函数

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_OnPlayerJoin"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将给【玩家加入】委托添加一个函数:打印玩家加入游戏消息.在控制台中看到加入玩家的用户ID和加入通知.代码如下:
</span>

```ts
@Component
export default class Example_Player_OnPlayerJoin extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 给【玩家加入】委托添加一个函数，打印玩家加入游戏消息
            Player.onPlayerJoin.add((player) => {
                console.log("Player " + player.userId + " joined the Game");
            });
            // 给【玩家离开】委托添加一个函数，打印玩家离开游戏消息
            Player.onPlayerLeave.add((player) => {
                console.log("Player " + player.userId + " Left the Game");
            });
            // 给【玩家断线】委托添加一个函数，打印玩家断线消息
            Player.onPlayerDisconnect.add((player) => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数，打印玩家重连消息
            Player.onPlayerReconnect.add((player) => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给【玩家断线】委托添加一个函数，打印玩家断线消息
            Player.onPlayerDisconnect.add((player) => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数，打印玩家重连消息
            Player.onPlayerReconnect.add((player) => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
    }
}
```

___

### onPlayerLeave <Score text="onPlayerLeave" /> 

▪ `Static` `Readonly` **onPlayerLeave**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`player`: [`Player`](mw.Player.md)) => `void`\> 

玩家离开委托


::: warning Precautions

当玩家离开游戏时执行绑定函数

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_OnPlayerLeave"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将给【玩家离开】委托添加一个函数:打印玩家离开游戏消息.在控制台中看到离开玩家的用户ID和离开通知.代码如下:
</span>

```ts
@Component
export default class Example_Player_OnPlayerLeave extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 给【玩家加入】委托添加一个函数，打印玩家加入游戏消息
            Player.onPlayerJoin.add((player) => {
                console.log("Player " + player.userId + " joined the Game");
            });
            // 给【玩家离开】委托添加一个函数，打印玩家离开游戏消息
            Player.onPlayerLeave.add((player) => {
                console.log("Player " + player.userId + " Left the Game");
            });
            // 给【玩家断线】委托添加一个函数，打印玩家断线消息
            Player.onPlayerDisconnect.add((player) => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数，打印玩家重连消息
            Player.onPlayerReconnect.add((player) => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给【玩家断线】委托添加一个函数，打印玩家断线消息
            Player.onPlayerDisconnect.add((player) => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数，打印玩家重连消息
            Player.onPlayerReconnect.add((player) => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
    }
}
```

___

### onPlayerReconnect <Score text="onPlayerReconnect" /> 

▪ `Static` `Readonly` **onPlayerReconnect**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`player`: [`Player`](mw.Player.md)) => `void`\> 

玩家重连委托


::: warning Precautions

当玩家重连时执行绑定函数，断线回调会先触发，之后连续收到客户端消息则触发重连回调。

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_OnPlayerReconnect"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将给【玩家重连】委托添加一个函数:打印玩家重连游戏消息.在控制台中看到重连玩家的用户ID和重连通知.代码如下:
</span>

```ts
@Component
export default class Example_Player_OnPlayerReconnect extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 给【玩家加入】委托添加一个函数，打印玩家加入游戏消息
            Player.onPlayerJoin.add((player) => {
                console.log("Player " + player.userId + " joined the Game");
            });
            // 给【玩家离开】委托添加一个函数，打印玩家离开游戏消息
            Player.onPlayerLeave.add((player) => {
                console.log("Player " + player.userId + " Left the Game");
            });
            // 给【玩家断线】委托添加一个函数，打印玩家断线消息
            Player.onPlayerDisconnect.add((player) => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数，打印玩家重连消息
            Player.onPlayerReconnect.add((player) => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给【玩家断线】委托添加一个函数，打印玩家断线消息
            Player.onPlayerDisconnect.add((player) => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数，打印玩家重连消息
            Player.onPlayerReconnect.add((player) => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
    }
}
```

## Accessors

### character <Score text="character" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **character**(): [`Character`](mw.Character.md) 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


控制角色


::: warning Precautions

玩家控制的角色，属于Pawn对象的一种。在玩家切换控制角色时, 客户端上无法立即获取到最新值。其余情况下，只要获取到玩家就可以同时获取到加载完成的控制角色。

:::


#### Returns

| [`Character`](mw.Character.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例: 创建一个名为"Example_Player_Character"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将获取当前客户端玩家,在控制台中看到打印的玩家角色的guid和名字.代码如下:
</span>

```ts
@Component
export default class Example_Player_Character extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 打印本地玩家控制的character对象的guid和名字
            console.log("My character: " + myPlayer.character.guid + " " + myPlayer.character.displayName);
        }
    }
}
```
___

### ping <Score text="ping" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **ping**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


用于记录和显示玩家的网络延迟。

网络延迟是指从玩家在游戏中执行某个操作到该操作在其他玩家的游戏中显示出来所需的时间。通常以毫秒（ms）为单位表示。较低的延迟意味着玩家的操作能够快速传输到服务器和其他玩家，并且游戏的响应更加即时。


::: warning Precautions

玩家客户端的网络延迟。以毫秒为单位；-1时表示获取失败。

:::


#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例: 创建一个名为"Example_Player_Ping"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将获取当前客户端玩家,并在控制台中看到打印的玩家当前Ping值.代码如下:
</span>

```ts
@Component
export default class Example_Player_Ping extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 打印本地玩家的平台用户ID
            console.log("My userId: " + myPlayer.userId);
            // 打印本地玩家游戏内的玩家ID
            console.log("My playerId: " + myPlayer.playerId);
            // 打印本地玩家的队伍ID，如果当前没有队伍则打印null
            if(myPlayer.teamId) {
                console.log("My teamId: " + myPlayer.teamId);
            } else {
                console.log("My teamId: " + "null");
            }
            // 打印本地玩家的网络延迟
            console.log("My ping: " + myPlayer.ping);
        }
    }
}
```
___

### playerId <Score text="playerId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **playerId**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


玩家ID


::: warning Precautions

玩家的玩家ID。该值是多端同步的，在同一个游戏实例内可以作为玩家唯一ID使用。

:::


#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例: 创建一个名为"Example_Player_PlayerId"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将获取当前客户端玩家,并在控制台中看到打印的玩家的玩家ID.代码如下:
</span>

```ts
@Component
export default class Example_Player_PlayerId extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 打印本地玩家的平台用户ID
            console.log("My userId: " + myPlayer.userId);
            // 打印本地玩家游戏内的玩家ID
            console.log("My playerId: " + myPlayer.playerId);
            // 打印本地玩家的队伍ID，如果当前没有队伍则打印null
            if(myPlayer.teamId) {
                console.log("My teamId: " + myPlayer.teamId);
            } else {
                console.log("My teamId: " + "null");
            }
            // 打印本地玩家的网络延迟
            console.log("My ping: " + myPlayer.ping);
        }
    }
}
```
___

### teamId <Score text="teamId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **teamId**(): `string` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


队伍ID


::: warning Precautions

玩家的队伍ID（通过游戏跳转自动形成）。如玩家不在任何队伍中则该值为空。

:::


#### Returns

| `string` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例: 创建一个名为"Example_Player_TeamId"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将获取当前客户端玩家,并在控制台中看到打印的玩家的队伍ID.代码如下:
</span>

```ts
@Component
export default class Example_Player_TeamId extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 打印本地玩家的平台用户ID
            console.log("My userId: " + myPlayer.userId);
            // 打印本地玩家游戏内的玩家ID
            console.log("My playerId: " + myPlayer.playerId);
            // 打印本地玩家的队伍ID，如果当前没有队伍则打印null
            if(myPlayer.teamId) {
                console.log("My teamId: " + myPlayer.teamId);
            } else {
                console.log("My teamId: " + "null");
            }
            // 打印本地玩家的网络延迟
            console.log("My ping: " + myPlayer.ping);
        }
    }
}
```
___

### userId <Score text="userId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **userId**(): `string` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


用户平台ID

玩家的用户平台ID。该值是多端同步的，可以作为玩家唯一ID使用。玩家对象准备好后需等待一段时间该值才能准备好。



#### Returns

| `string` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例: 创建一个名为"Example_Player_UserId"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将获取当前客户端玩家,并在控制台中看到打印的玩家的用户平台ID.代码如下:
</span>

```ts
@Component
export default class Example_Player_UserId extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 打印本地玩家的平台用户ID
            console.log("My userId: " + myPlayer.userId);
            // 打印本地玩家游戏内的玩家ID
            console.log("My playerId: " + myPlayer.playerId);
            // 打印本地玩家的队伍ID，如果当前没有队伍则打印null
            if(myPlayer.teamId) {
                console.log("My teamId: " + myPlayer.teamId);
            } else {
                console.log("My teamId: " + "null");
            }
            // 打印本地玩家的网络延迟
            console.log("My ping: " + myPlayer.ping);
        }
    }
}
```
___

### localPlayer <Score text="localPlayer" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **localPlayer**(): [`Player`](mw.Player.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


LocalPlayer 是一个只读属性，指的是其客户端正在运行的玩家。

因为在客户端上运行。 对于 Script 对象运行其代码的服务器，此属性为null。


::: warning Precautions

当前客户端对应的玩家。仅客户端调用返回本地玩家，服务端调用无效并在控制台打印警告。

:::


#### Returns

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_LocalPlayer"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中获取当前客户端的玩家,按下键盘“1”，你将在场景中看到角色隐身2秒的效果.代码如下:
</span>

```ts
@Component
export default class Example_Player_LocalPlayer extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 打印本地玩家控制的character对象的guid和名字
            console.log("My character: " + myPlayer.character.guid + " " + myPlayer.character.displayName);
            // 添加一个按键方法：按下键盘“1”，角色隐身2秒
            InputUtil.onKeyDown(Keys.One, ()  =>  {
                myPlayer.character.setVisibility(PropertyStatus.Off);
                TimeUtil.delaySecond(2).then(() => {
                    myPlayer.character.setVisibility(PropertyStatus.On);
                });
           });
        }
    }
}
```
| [`Player`](mw.Player.md) |  |
| :------ | :------ |

## Methods

### control <Score text="control" /> 

• **control**(`pawn`): `boolean` <Badge type="tip" text="server" />

控制一个Pawn对象

#### Parameters

| `pawn` [`Pawn`](mw.Pawn.md) | 目标控制对象 |
| :------ | :------ |

#### Returns

| `boolean` | 操纵结果 |
| :------ | :------ |


::: warning Precautions

在服务端上立即更新控制对象。客户端由于网络延迟会有时间差。只能控制当前没有被玩家控制的角色。对其他玩家控制的角色使用该接口不会生效。返回本次控制的结果。

:::

<span style="font-size: 14px;">
使用示例: 将使用到的资源:“7750”拖入优先加载栏。创建一个名为"Example_Player_Control"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在在服务端添加一个【创建角色并控制】事件监听器,当监听到事件时在场景中创建默认角色并控制. 按下键盘“1”，向服务端发送事件【创建角色并控制】.给本地玩家的【玩家控制对象变化】委托添加一个函数:在生成并控制的新角色位置播放一个特效.当触发控制对象变化委托时执行绑定函数.代码如下:
</span>

```ts
@Component
export default class Example_Player_Control extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            mw.Event.addClientListener("SpawnCharacterAndControl", (player) => {
                let newPawn = Player.spawnDefaultCharacter();
                newPawn.worldTransform.position = new Vector(200, 0, 500);
                player.control(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数:在生成并控制的新角色位置播放一个特效
            myPlayer.onPawnChange.add((pawn) => {
                EffectService.playAtPosition("7750", new Vector(200, 0, 500));
            });
            // 添加一个按键方法:按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Keys.One, () => {
                mw.Event.dispatchEventToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```

___

### getPlayerState <Score text="getPlayerState" /> 

• **getPlayerState**<`T`\>(`type`): `T`

获取PlayerState实例

#### Parameters

| `type` (...`args`: `unknown`[]) => `T` | PlayerState派生类 |
| :------ | :------ |

#### Returns

| `T` | PlayerState实例 |
| :------ | :------ |

PlayerState对象的作用是帮助游戏追踪和管理玩家的个人数据。它存储了与每个玩家相关的信息，这样游戏就可以根据需要随时访问和更新这些信息。

举个例子来说，假设你正在玩一款多人射击游戏。每个玩家都有一个PlayerState对象，其中包含了玩家的得分、击杀数和死亡数等数据。当玩家击败敌人时，游戏会将得分加到对应玩家的PlayerState中。这样，游戏就可以根据每个玩家的PlayerState来显示排行榜或者判断胜负。

此外，PlayerState对象还负责在多人游戏中同步玩家的状态。例如，当一个玩家在游戏中移动或进行某个动作时，PlayerState会将这些信息传输到其他玩家的客户端，以确保所有玩家看到的玩家状态是一致的。

总的来说，用于跟踪和存储与每个玩家相关的数据和状态。它帮助游戏管理玩家的个人信息，如得分、生命值等，并在多人游戏中确保玩家状态的同步。通过PlayerState，游戏可以更好地处理多人游戏中的个人和团队数据，以提供更丰富的游戏体验。

<span style="font-size: 14px;">
使用示例: 创建一个名为"PlayerStateExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存。把启动参数的玩家数量改为2，运行游戏按下R键将看到其中一个客户端收到test同步。按下P键将打印客户端的test值.
</span>

```ts
  // 服务端每个玩家进入游戏时会自动创建一个实例
  @Core.Class
  export class GamePlayerState extends mw.PlayerState {

      @Core.Property(`{replicated: true, onChanged: "onRepTest"}`)
      test = "";

      onRepTest(path: string[], value: string, oldVal: string) {
          console.log(`onRepTest path: $`{path}` value: $`{value}` oldVal: $`{oldVal}``);
      }
  }

  @Core.Class
  export default class PlayerStateExample extends mw.Script {

      protected onStart(): void {

          // 按下R建在服务端随机一个玩家修改GamePlayerState的test属性
          InputUtil.onKeyDown(Keys.R, () => this.random());

          // 按下P建打印主控端玩家GamePlayState的test属性
          InputUtil.onKeyDown(Keys.P, () => {
              const playerState = mw.getCurrentPlayer().getPlayerState(GamePlayerState);
              console.log(`test: $`{playerState.test}``);
          });

      }

      @Core.Function(Core.Server)
      random() {
          const players = mw.getAllPlayers();
          // 随机一个玩家
          const luckPlayer = players[Math.floor(Math.random() * players.length)];
          // 获取到GamePlayerState实例
          const playerState = luckPlayer.getPlayerState(GamePlayerState);
          playerState.test = `random: $`{ Math.floor(Math.random() * 100)}``;
      }
  }
```

#### Type parameters

| `T` | extends [`PlayerState`](mw.PlayerState.md)<`T`\> |
| :------ | :------ |

___

### asyncGetLocalPlayer <Score text="asyncGetLocalPlayer" /> 

• `Static` **asyncGetLocalPlayer**(): `Promise`<[`Player`](mw.Player.md)\> <Badge type="tip" text="client" />

异步获取本地玩家。通常在UI脚本中使用，当获取还未创建出的本地玩家角色时，会使用此异步加载接口，最长等待10秒，等待本地角色加载出来再获取。

#### Returns

| `Promise`<[`Player`](mw.Player.md)\> | 返回本地玩家 |
| :------ | :------ |

当正常获取本地玩家时，使用Player.localPlayer即可。


::: warning Precautions

仅在UI脚本中需要使用此异步方法获取localPlayer。仅客户端调用返回本地玩家，服务端调用无效并在控制台打印警告。

:::

___

### asyncGetPlayer <Score text="asyncGetPlayer" /> 

• `Static` **asyncGetPlayer**(`playerId`): `Promise`<[`Player`](mw.Player.md)\> 

异步获取玩家

#### Parameters

| `playerId` | `number` |
| :------ | :------ |

#### Returns

| `Promise`<[`Player`](mw.Player.md)\> | 玩家对象 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_GetPlayer"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,代码如下:
</span>

```ts
@Component
export default class NewScript extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        Player.asyncGetPlayer(Player.localPlayer.playerId).then((player)=>{
            console.log(player.playerId);    
        });
    }
}
```

___

### getAllPlayers <Score text="getAllPlayers" /> 

• `Static` **getAllPlayers**(): [`Player`](mw.Player.md)[] 

获取当前所有玩家。此方法返回当前连接的所有玩家的数组，当与 for 循环结合使用时，它对于迭代游戏中的所有玩家非常有用。

#### Returns

| [`Player`](mw.Player.md)[] | 服务器中所有玩家的数组 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:将使用到的资源:“27087”拖入优先加载栏。创建一个名为"Example_Player_GetAllPlayers"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在服务端添加一个【打印游戏内全部玩家信息】事件监听器,监听事件后在场景中看到一个皇冠在玩家角色的头顶生成的效果并在控制台打印玩家们的userId,遇到发起事件的客户端玩家时提示This is me.代码如下:
</span>

```ts
@Component
export default class Example_Player_GetAllPlayers extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【打印游戏内全部玩家信息】事件监听器
            mw.Event.addClientListener("PrintPlayersInfo", (player) => {
                // 遍历Players数组，打印他们的userId，遇到发起事件的客户端玩家时提示This is me，并生成一个皇冠在玩家角色的头顶
                Player.getAllPlayers().forEach((value) => {
                    if(value.playerId == player.playerId) {
                        console.log(" Player " + player.userId + " This is me");
                        let crown = GameObject.spawn(`{guid: "27087"}`) as Model;
                        crown.setCollision(CollisionStatus.Off);
                        value.character.attachToSlot(crown, HumanoidSlotType.Rings);
                    } else {
                        console.log(" Player " + player.userId);
                    }
                });
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 添加一个按键方法：按下键盘“1”，向服务端发送事件【打印游戏内全部玩家信息】
            InputUtil.onKeyDown(Keys.One, () => {
                mw.Event.dispatchEventToServer("PrintPlayersInfo");
            });
        }
    }
}
```

___

### getControllerRotation <Score text="getControllerRotation" /> 

• `Static` **getControllerRotation**(`outer?`): [`Rotation`](mw.Rotation.md) <Badge type="tip" text="client" />

获取控制器的旋转

#### Parameters

| `outer?` [`Rotation`](mw.Rotation.md) | 接收旋转的变量 default:undefined |
| :------ | :------ |

#### Returns

| [`Rotation`](mw.Rotation.md) | 当前控制器输入的旋转 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_GetControllerRotation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将获取当前控制器输入的旋转并叠加步长进行覆盖,按下键盘“1”，开始 / 停止覆写控制器的旋转.在场景中看到摄像机环绕角色旋转的效果.代码如下:
</span>

```ts
@Component
export default class Example_Player_GetControllerRotation extends Script {
    // 声明变量
    flag: boolean;
    rot: Rotation;
    stride: Rotation;
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.flag = false;
            this.rot = Rotation.zero;
            this.stride = new Rotation(0, 0, 1);
            // 开启循环周期函数
            this.useUpdate = true;
            // 添加一个按键方法：按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Keys.One, () => {
                this.flag = !this.flag;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        if(SystemUtil.isClient() && this.flag) {
            // 获取当前控制器输入的旋转并叠加步长进行覆盖
            Player.getControllerRotation(this.rot);
            Player.setControllerRotation(this.rot.add(this.stride));
        }
    }
}
```

___

### getPlayer <Score text="getPlayer" /> 

• `Static` **getPlayer**(`uniqueId`): [`Player`](mw.Player.md) 

获取玩家，根据userId找到对应的玩家

#### Parameters

| `uniqueId` `string`  `number` | 用户ID或者玩家玩家ID |
| :------ | :------ |

#### Returns

| [`Player`](mw.Player.md) | 玩家对象 |
| :------ | :------ |


::: warning Precautions

根据ID获取玩家。ID可以是playerId或userId。

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_GetPlayer"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将通过getPlayer接口获取玩家,按下键盘“1”，使用getPlayer函数通过userId或playerId获取玩家对象并打印名字在控制台中看到getPlayer的效果.代码如下:
</span>

```ts
@Component
export default class Example_Player_GetPlayer extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 添加一个按键方法：按下键盘“1”，使用getPlayer函数通过userId或playerId获取玩家对象并打印名字
            InputUtil.onKeyDown(Keys.One, () => {
                // 获取当前客户端的玩家(自己)并打印userId和playerId
                let myself = Player.localPlayer;
                console.log("My userId: " + myself.userId);
                console.log("My playerId: " + myself.playerId);
                // 通过userId获取玩家(自己)并打印userId和playerId
                let myself_2 = Player.getPlayer(myself.userId);
                console.log("myself_2 userId: " + myself_2.userId);
                console.log("myself_2 playerId: " + myself_2.playerId);
                // 通过playerId获取玩家(自己)并打印userId和playerId
                let myself_3 = Player.getPlayer(myself.playerId);
                console.log("myself_3 userId: " + myself_3.userId);
                console.log("myself_3 playerId: " + myself_3.playerId);
            });
        }
    }
}
```

___

### setControllerRotation <Score text="setControllerRotation" /> 

• `Static` **setControllerRotation**(`newRotation`): `void` <Badge type="tip" text="client" />

覆写控制器的旋转

#### Parameters

| `newRotation` [`Rotation`](mw.Rotation.md) | 新旋转值 |
| :------ | :------ |



<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Player_SetControllerRotation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将获取当前控制器输入的旋转并叠加步长进行覆盖,按下键盘“1”，开始 / 停止覆写控制器的旋转.在场景中看到摄像机环绕角色旋转的效果.代码如下:
</span>

```ts
@Component
export default class Example_Player_SetControllerRotation extends Script {
    // 声明变量
    flag: boolean;
    rot: Rotation;
    stride: Rotation;
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.flag = false;
            this.rot = Rotation.zero;
            this.stride = new Rotation(0, 0, 1);
            // 开启循环周期函数
            this.useUpdate = true;
            // 添加一个按键方法：按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Keys.One, () => {
                this.flag = !this.flag;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        if(SystemUtil.isClient() && this.flag) {
            // 获取当前控制器输入的旋转并叠加步长进行覆盖
            Player.getControllerRotation(this.rot);
            Player.setControllerRotation(this.rot.add(this.stride));
        }
    }
}
```

___

### spawnDefaultCharacter <Score text="spawnDefaultCharacter" /> 

• `Static` **spawnDefaultCharacter**(): [`Character`](mw.Character.md) 

创建默认角色

#### Returns

| [`Character`](mw.Character.md) | 角色对象 |
| :------ | :------ |


::: warning Precautions

默认角色属性由编辑器玩家对象的属性面板决定。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:“7750”拖入优先加载栏。创建一个名为"Example_Player_SpawnDefaultCharacter"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在在服务端添加一个【创建角色并控制】事件监听器,当监听到事件时在场景中创建默认角色并控制. 按下键盘“1”，向服务端发送事件【创建角色并控制】.给本地玩家的【玩家控制对象变化】委托添加一个函数：在生成并控制的新角色位置播放一个特效.当触发控制对象变化委托时执行绑定函数.代码如下:
</span>

```ts
@Component
export default class Example_Player_SpawnDefaultCharacter extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            mw.Event.addClientListener("SpawnCharacterAndControl", (player) => {
                let newPawn = Player.spawnDefaultCharacter();
                newPawn.worldTransform.position = new Vector(200, 0, 500);
                player.control(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数：在生成并控制的新角色位置播放一个特效
            myPlayer.onPawnChange.add((pawn) => {
                EffectService.playAtPosition("7750", new Vector(200, 0, 500));
            });
            // 添加一个按键方法：按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Keys.One, () => {
                mw.Event.dispatchEventToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```
