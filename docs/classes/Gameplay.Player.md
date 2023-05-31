[Gameplay](../groups/Gameplay.Gameplay.md) / Player

# Player <Badge type="tip" text="Class" /> <Score text="Player" />

角色控制

## Hierarchy

- `IPlayer`

  ↳ **`Player`**

## Table of contents

| Properties |
| :-----|
| **[onPawnChanged](Gameplay.Player.md#onpawnchanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`pawn`: [`Pawn`](Gameplay.Pawn.md)) => `void`\> <br> 控制对象变化委托|
| **[onPlayerDisconnected](Gameplay.Player.md#onplayerdisconnected)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`player`: [`Player`](Gameplay.Player.md)) => `void`\> <br> 玩家断线委托|
| **[onPlayerJoined](Gameplay.Player.md#onplayerjoined)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`player`: [`Player`](Gameplay.Player.md)) => `void`\> <br> 玩家加入委托|
| **[onPlayerLeft](Gameplay.Player.md#onplayerleft)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`player`: [`Player`](Gameplay.Player.md)) => `void`\> <br> 玩家离开委托|
| **[onPlayerReconnected](Gameplay.Player.md#onplayerreconnected)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`player`: [`Player`](Gameplay.Player.md)) => `void`\> <br> 玩家重连委托|

| Accessors |
| :-----|
| **[character](Gameplay.Player.md#character)**(): [`Character`](Gameplay.Character.md) <br> 控制角色|
| **[forwardVector](Gameplay.Player.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.Player.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[instanceId](Gameplay.Player.md#instanceid)**(): `number` <br> 用户实例ID|
| **[lockStatus](Gameplay.Player.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.Player.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Player.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.Player.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[ping](Gameplay.Player.md#ping)**(): `number` <br> 网络延迟|
| **[relativeLocation](Gameplay.Player.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Player.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Player.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.Player.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.Player.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.Player.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[teamId](Gameplay.Player.md#teamid)**(): `string` <br> 队伍ID|
| **[transform](Gameplay.Player.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Player.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Player.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[userId](Gameplay.Player.md#userid)**(): `string` <br> 平台用户ID|
| **[worldLocation](Gameplay.Player.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Player.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Player.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[localPlayer](Gameplay.Player.md#localplayer)**(): [`Player`](Gameplay.Player.md) <br> 本地玩家|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Player.md#adddestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.Player.md#asyncgetscriptbyname)**(`name`: `string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.Player.md#attachcomponent)**(`component`: `Component`, `isStatic?`: `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.Player.md#attachtogameobject)**(`obj`: `GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.Player.md#clone)**(`spawnInfo?`: `boolean` \): `GameObject` <br> 复制对象|
| **[control](Gameplay.Player.md#control)**(`pawn`: [`Pawn`](Gameplay.Pawn.md)): `boolean` <br> 控制一个Pawn对象|
| **[deleteDestroyCallback](Gameplay.Player.md#deletedestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Player.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.Player.md#detachcomponent)**(`component`: `string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.Player.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.Player.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Player.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](Type.Vector.md), `BoxExtentOuter`: [`Vector`](Type.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Player.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.Player.md#getchildbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Player.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Player.md#getchildrenboxcenter)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Player.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.Player.md#getforwardvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.Player.md#getrelativelocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Player.md#getrelativerotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Player.md#getrelativescale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Player.md#getrightvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Player.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](Gameplay.Player.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](Gameplay.Player.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getSourceAssetGuid](Gameplay.Player.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.Player.md#gettransform)**(`outer?`: [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.Player.md#getupvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.Player.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.Player.md#getworldlocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Player.md#getworldrotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Player.md#getworldscale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Player.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.Player.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.Player.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.Player.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Player.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.Player.md#ready)**(): `Promise`<[`Player`](Gameplay.Player.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.Player.md#setcollision)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `propagateToChildren?`: `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.Player.md#setlocationandrotation)**(`location`: [`Vector`](Type.Vector.md), `rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.Player.md#setrelativelocation)**(`location`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Player.md#setrelativerotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Player.md#setrelativescale)**(`scale`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.Player.md#settransform)**(`transform`: [`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.Player.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.Player.md#setworldlocation)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Player.md#setworldrotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Player.md#setworldscale)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.Player.md#asyncfind)**(`GUID`: `string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawn](Gameplay.Player.md#asyncspawn)**<`T`: extends `GameObject`<`T`\>\>(`spawnInfo`: [`SpawnInfo`](../interfaces/Type.SpawnInfo.md)): `Promise`<`T`: extends `GameObject`<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Player.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.Player.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getAllPlayers](Gameplay.Player.md#getallplayers)**(): [`Player`](Gameplay.Player.md)[] <br> 获取当前所有玩家|
| **[getControllerRotation](Gameplay.Player.md#getcontrollerrotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取控制器的旋转|
| **[getGameObjectByName](Gameplay.Player.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Player.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[getPlayer](Gameplay.Player.md#getplayer)**(`uniqueId`: `string` \): [`Player`](Gameplay.Player.md) <br> 获取玩家|
| **[setControllerRotation](Gameplay.Player.md#setcontrollerrotation)**(`newRotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 覆写控制器的旋转|
| **[spawn](Gameplay.Player.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.Player.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
| **[spawnDefaultCharacter](Gameplay.Player.md#spawndefaultcharacter)**(): [`Character`](Gameplay.Character.md) <br> 创建默认角色|

## Properties

### onPawnChanged <Score text="onPawnChanged" /> 

• `Readonly` **onPawnChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`pawn`: [`Pawn`](Gameplay.Pawn.md)) => `void`\> 

控制对象变化委托


::: warning Precautions

当玩家控制的角色发生变化时执行绑定函数

:::

使用示例: 创建默认角色并控制，触发控制对象变化委托并打印新对象的名字
```ts
@Core.Class
export default class PlayerDelegateExample01 extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            Events.addClientListener("SpawnCharacterAndControl", (player) => {
                let newPawn = Player.spawnDefaultCharacter();
                player.controlPawn(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数：打印新控制的pawn的名字。
            myself.onPawnChanged.add((pawn) => {
                console.log("New Pawn Name: " + pawn.pawnName);
            });
            // 添加一个按键方法：按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                Events.dispatchToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```

___

### onPlayerDisconnected <Score text="onPlayerDisconnected" /> 

▪ `Static` `Readonly` **onPlayerDisconnected**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`player`: [`Player`](Gameplay.Player.md)) => `void`\> 

玩家断线委托


::: warning Precautions

当玩家掉线时执行绑定函数。该委托双端触发机制不同。在客户端只被本地玩家掉线事件触发，触发时机为掉线的瞬间。在服务端被任意玩家掉线事件触发，触发时机为5秒内未收到客户端玩家消息即为掉线。

:::

使用示例:给玩家加入，玩家退出，玩家断线和玩家重连委托中绑定函数打印玩家ID和行为。
```ts
@Core.Class
export default class PlayerDelegateExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 给【玩家加入】委托添加一个函数：打印玩家加入游戏消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " joined the Game");
            });
            // 给【玩家离开】委托添加一个函数：打印玩家离开游戏消息
            Player.onPlayerLeft.add((player) => {
                console.log("Player " + player.userId + " Left the Game");
            });
            // 给【玩家断线】委托添加一个函数：打印玩家加入游戏消息
            Player.onPlayerDisconnected.add(() => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数：打印玩家离开游戏消息
            Player.onPlayerReconnected.add(() => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给【玩家断线】委托添加一个函数：打印玩家断线消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " 断线");
            });
            // 给【玩家重连】委托添加一个函数：打印玩家重连消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " 重连");
            });
        }
    }
}
```

___

### onPlayerJoined <Score text="onPlayerJoined" /> 

▪ `Static` `Readonly` **onPlayerJoined**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`player`: [`Player`](Gameplay.Player.md)) => `void`\> 

玩家加入委托


::: warning Precautions

当玩家加入游戏时执行绑定函数

:::

使用示例:给玩家加入，玩家退出，玩家断线和玩家重连委托中绑定函数打印玩家ID和行为。
```ts
@Core.Class
export default class PlayerDelegateExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 给【玩家加入】委托添加一个函数：打印玩家加入游戏消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " joined the Game");
            });
            // 给【玩家离开】委托添加一个函数：打印玩家离开游戏消息
            Player.onPlayerLeft.add((player) => {
                console.log("Player " + player.userId + " Left the Game");
            });
            // 给【玩家断线】委托添加一个函数：打印玩家加入游戏消息
            Player.onPlayerDisconnected.add(() => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数：打印玩家离开游戏消息
            Player.onPlayerReconnected.add(() => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给【玩家断线】委托添加一个函数：打印玩家断线消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " 断线");
            });
            // 给【玩家重连】委托添加一个函数：打印玩家重连消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " 重连");
            });
        }
    }
}
```

___

### onPlayerLeft <Score text="onPlayerLeft" /> 

▪ `Static` `Readonly` **onPlayerLeft**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`player`: [`Player`](Gameplay.Player.md)) => `void`\> 

玩家离开委托


::: warning Precautions

当玩家离开游戏时执行绑定函数

:::

使用示例:给玩家加入，玩家退出，玩家断线和玩家重连委托中绑定函数打印玩家ID和行为。
```ts
@Core.Class
export default class PlayerDelegateExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 给【玩家加入】委托添加一个函数：打印玩家加入游戏消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " joined the Game");
            });
            // 给【玩家离开】委托添加一个函数：打印玩家离开游戏消息
            Player.onPlayerLeft.add((player) => {
                console.log("Player " + player.userId + " Left the Game");
            });
            // 给【玩家断线】委托添加一个函数：打印玩家加入游戏消息
            Player.onPlayerDisconnected.add(() => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数：打印玩家离开游戏消息
            Player.onPlayerReconnected.add(() => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给【玩家断线】委托添加一个函数：打印玩家断线消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " 断线");
            });
            // 给【玩家重连】委托添加一个函数：打印玩家重连消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " 重连");
            });
        }
    }
}
```

___

### onPlayerReconnected <Score text="onPlayerReconnected" /> 

▪ `Static` `Readonly` **onPlayerReconnected**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`player`: [`Player`](Gameplay.Player.md)) => `void`\> 

玩家重连委托


::: warning Precautions

当玩家重连时执行绑定函数

:::

使用示例:给玩家加入，玩家退出，玩家断线和玩家重连委托中绑定函数打印玩家ID和行为。
```ts
@Core.Class
export default class PlayerDelegateExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 给【玩家加入】委托添加一个函数：打印玩家加入游戏消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " joined the Game");
            });
            // 给【玩家离开】委托添加一个函数：打印玩家离开游戏消息
            Player.onPlayerLeft.add((player) => {
                console.log("Player " + player.userId + " Left the Game");
            });
            // 给【玩家断线】委托添加一个函数：打印玩家加入游戏消息
            Player.onPlayerDisconnected.add(() => {
                console.log("Player " + player.userId + " is disconnected");
            });
            // 给【玩家重连】委托添加一个函数：打印玩家离开游戏消息
            Player.onPlayerReconnected.add(() => {
                console.log("Player " + player.userId + " is reconnected");
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给【玩家断线】委托添加一个函数：打印玩家断线消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " 断线");
            });
            // 给【玩家重连】委托添加一个函数：打印玩家重连消息
            Player.onPlayerJoined.add((player) => {
                console.log("Player " + player.userId + " 重连");
            });
        }
    }
}
```

## Accessors

### character <Score text="character" /> 

• `get` **character**(): [`Character`](Gameplay.Character.md) 

控制角色


::: warning Precautions

玩家控制的角色，属于Pawn对象的一种。在玩家切换控制角色时, 客户端上无法立即获取到最新值。其余情况下，只要获取到玩家就可以同时获取到加载完成的控制角色。

:::

使用示例: 获取当前客户端玩家并打印玩家角色的guid和名字
```ts
@Core.Class
export default class PlayerPropertyExample01 extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 打印本地玩家控制的character对象的guid和名字
            console.log("My character: " + myself.character.guid + " " + myself.character.pawnName);
        }
    }
}
```

#### Returns

[`Character`](Gameplay.Character.md)

___

### forwardVector <Score text="forwardVector" /> 

• `get` **forwardVector**(): [`Vector`](Type.Vector.md) 

获取当前物体的向前向量


#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### guid <Score text="guid" /> 

• `get` **guid**(): `string` 

获取对象的GUID（唯一标识一个对象的字符串）。


#### Returns

`string`

___

### instanceId <Score text="instanceId" /> 

• `get` **instanceId**(): `number` 

用户实例ID


::: warning Precautions

玩家的用户实例ID。该值是多端同步的，在同一个游戏实例内可以作为玩家唯一ID使用。

:::

使用示例: 获取当前客户端玩家并打印玩家的基础属性
```ts
@Core.Class
export default class PlayerPropertyExample03 extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 打印本地玩家的平台用户ID
            console.log("My userId: " + myself.userId);
            // 打印本地玩家游戏内的实例ID
            console.log("My instanceId: " + myself.instanceId);
            // 打印本地玩家的队伍ID
            console.log("My instanceId: " + myself.instanceId);
            // 打印本地玩家的网络延迟
            console.log("My ping: " + myself.ping);
        }
    }
}
```

#### Returns

`number`

___

### lockStatus <Score text="lockStatus" /> 

• `get` **lockStatus**(): `boolean` 

获取对象是否锁定


#### Returns

`boolean`

• `set` **lockStatus**(`v`): `void` 

设置对象是否锁定


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |


___

### name <Score text="name" /> 

• `get` **name**(): `string` 

返回当前物体名称


#### Returns

`string`

名称

• `set` **name**(`name`): `void` 

设置物体名称


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 需要设置的名称 |


___

### netStatus <Score text="netStatus" /> 

• `get` **netStatus**(): [`NetStatus`](../enums/Type.NetStatus.md) 

获取当前物体同步状态


#### Returns

[`NetStatus`](../enums/Type.NetStatus.md)

Type.NetStatus

___

### parent <Score text="parent" /> 

• `get` **parent**(): `GameObject` 

获取当前父物体


#### Returns

`GameObject`

父物体

• `set` **parent**(`newParent`): `void` 

设置父物体


#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | `GameObject` |


___

### ping <Score text="ping" /> 

• `get` **ping**(): `number` 

网络延迟


::: warning Precautions

玩家客户端的网络延迟。以毫秒为单位；-1时表示获取失败。

:::

使用示例: 获取当前客户端玩家并打印玩家的基础属性
```ts
@Core.Class
export default class PlayerPropertyExample05 extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 打印本地玩家的平台用户ID
            console.log("My userId: " + myself.userId);
            // 打印本地玩家游戏内的实例ID
            console.log("My instanceId: " + myself.instanceId);
            // 打印本地玩家的队伍ID
            console.log("My instanceId: " + myself.instanceId);
            // 打印本地玩家的网络延迟
            console.log("My ping: " + myself.ping);
        }
    }
}
```

#### Returns

`number`

___

### relativeLocation <Score text="relativeLocation" /> 

• `get` **relativeLocation**(): [`Vector`](Type.Vector.md) 

获取相对位置


#### Returns

[`Vector`](Type.Vector.md)

位置坐标

• `set` **relativeLocation**(`location`): `void` 

设置相对位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 位置 |


___

### relativeRotation <Score text="relativeRotation" /> 

• `get` **relativeRotation**(): [`Rotation`](Type.Rotation.md) 

获取相对旋转


#### Returns

[`Rotation`](Type.Rotation.md)

旋转角度

• `set` **relativeRotation**(`rotation`): `void` 

设置相对旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 旋转 |


___

### relativeScale <Score text="relativeScale" /> 

• `get` **relativeScale**(): [`Vector`](Type.Vector.md) 

获取相对缩放


#### Returns

[`Vector`](Type.Vector.md)

相对缩放

• `set` **relativeScale**(`scale`): `void` 

设置相对缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Vector.md) | 缩放 |


___

### rightVector <Score text="rightVector" /> 

• `get` **rightVector**(): [`Vector`](Type.Vector.md) 

获取当前物体的向右向量


#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### staticStatus <Score text="staticStatus" /> 

• `get` **staticStatus**(): `boolean` 

获取对象是否静态


#### Returns

`boolean`

___

### tag <Score text="tag" /> 

• `get` **tag**(): `string` 

获取当前物体的Tag


#### Returns

`string`

Tag

• `set` **tag**(`tag`): `void` 

设置当前物体的Tag


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | Tag |


___

### teamId <Score text="teamId" /> 

• `get` **teamId**(): `string` 

队伍ID


::: warning Precautions

玩家的队伍ID（通过游戏跳转自动形成）。如玩家不在任何队伍中则该值为空。

:::

使用示例: 获取当前客户端玩家并打印玩家的基础属性
```ts
@Core.Class
export default class PlayerPropertyExample04 extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 打印本地玩家的平台用户ID
            console.log("My userId: " + myself.userId);
            // 打印本地玩家游戏内的实例ID
            console.log("My instanceId: " + myself.instanceId);
            // 打印本地玩家的队伍ID
            console.log("My instanceId: " + myself.instanceId);
            // 打印本地玩家的网络延迟
            console.log("My ping: " + myself.ping);
        }
    }
}
```

#### Returns

`string`

___

### transform <Score text="transform" /> 

• `get` **transform**(): [`Transform`](Type.Transform.md) 

返回当前物体transform


#### Returns

[`Transform`](Type.Transform.md)

transform

• `set` **transform**(`transform`): `void` 

设置当前物体transform


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Transform.md) | 要设置的transform |


___

### upVector <Score text="upVector" /> 

• `get` **upVector**(): [`Vector`](Type.Vector.md) 

获取当前物体的向上向量


#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### useUpdate <Score text="useUpdate" /> 

• `get` **useUpdate**(): `boolean` 

获取对象是否使用更新


#### Returns

`boolean`

• `set` **useUpdate**(`v`): `void` 

设置对象是否使用更新


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |


___

### userId <Score text="userId" /> 

• `get` **userId**(): `string` 

平台用户ID


::: warning Precautions

玩家的平台用户ID。该值是多端同步的，可以作为玩家唯一ID使用。玩家对象准备好后需等待一段时间该值才能准备好。

:::

使用示例: 获取当前客户端玩家并打印玩家的基础属性
```ts
@Core.Class
export default class PlayerPropertyExample02 extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 打印本地玩家的平台用户ID
            console.log("My userId: " + myself.userId);
            // 打印本地玩家游戏内的实例ID
            console.log("My instanceId: " + myself.instanceId);
            // 打印本地玩家的队伍ID
            console.log("My instanceId: " + myself.instanceId);
            // 打印本地玩家的网络延迟
            console.log("My ping: " + myself.ping);
        }
    }
}
```

#### Returns

`string`

___

### worldLocation <Score text="worldLocation" /> 

• `get` **worldLocation**(): [`Vector`](Type.Vector.md) 

获取物体的世界坐标


#### Returns

[`Vector`](Type.Vector.md)

• `set` **worldLocation**(`v`): `void` 

设置物体的世界坐标


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) |


___

### worldRotation <Score text="worldRotation" /> 

• `get` **worldRotation**(): [`Rotation`](Type.Rotation.md) 

获取物体的世界旋转


#### Returns

[`Rotation`](Type.Rotation.md)

• `set` **worldRotation**(`rotation`): `void` 

设置物体的世界旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 要设置的世界旋转 |


___

### worldScale <Score text="worldScale" /> 

• `get` **worldScale**(): [`Vector`](Type.Vector.md) 

获取物体的世界缩放


#### Returns

[`Vector`](Type.Vector.md)

• `set` **worldScale**(`v`): `void` 

设置物体的是世界缩放


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) |


___

### localPlayer <Score text="localPlayer" /> 

• `Static` `get` **localPlayer**(): [`Player`](Gameplay.Player.md) <Badge type="tip" text="client" />

本地玩家


::: warning Precautions

当前客户端对应的玩家。仅客户端调用返回本地玩家，服务端调用无效并在控制台打印警告。

:::

使用示例:获取当前客户端的玩家并打印GUID和名字
```ts
@Core.Class
export default class PlayerLocalExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 打印本地玩家控制的character对象的guid和名字
            console.log("My character: " + myself.character.guid + " " + myself.character.pawnName);
        }
    }
}
```

#### Returns

[`Player`](Gameplay.Player.md)

## Methods

### addDestroyCallback <Score text="addDestroyCallback" /> 

• **addDestroyCallback**(`callback`): `void` 

添加物体Destroy事件回调


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |


___

### asyncGetScriptByName <Score text="asyncGetScriptByName" /> 

• **asyncGetScriptByName**(`name`): `Promise`<`Script`\> 

异步获得当前物体下的指定脚本 客户端不维系父子关系


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Promise`<`Script`\>

Script

___

### attachComponent <Score text="attachComponent" /> 

• **attachComponent**(`component`, `isStatic?`): `boolean` 

附加组件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `Component` | 组件 |
| `isStatic?` | `boolean` | 是否是静态 default:ture |

#### Returns

`boolean`

附加是否成功

___

### attachToGameObject <Score text="attachToGameObject" /> 

• **attachToGameObject**(`obj`): `void` 

将物体附着到指定物体上


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 物体 |


___

### clone <Score text="clone" /> 

• **clone**(`spawnInfo?`): `GameObject` 

复制对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spawnInfo?` | `boolean` \| [`SpawnInfo`](../interfaces/Type.SpawnInfo.md) | 是否复制 \| 构建物体的信息 default:true |

#### Returns

`GameObject`

克隆的对象

___

### control <Score text="control" /> 

• **control**(`pawn`): `boolean` <Badge type="tip" text="server" />

控制一个Pawn对象


::: warning Precautions

在服务端上立即更新控制对象。客户端由于网络延迟会有时间差。只能控制当前没有被玩家控制的角色。对其他玩家控制的角色使用该接口不会生效。返回本次控制的结果。

:::

使用示例: 操纵pawn示例
```ts
@Core.Class
export default class NewScript extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            Events.addClientListener("SpawnCharacterAndControl", (player) => {
                let newPawn = Player.spawnDefaultCharacter();
                player.controlPawn(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数：打印新控制的pawn的名字。
            myself.onPawnChanged.add((pawn) => {
                console.log("New Pawn Name: " + pawn.pawnName);
            });
            // 添加一个按键方法：按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                Events.dispatchToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pawn` | [`Pawn`](Gameplay.Pawn.md) | 目标控制对象 |

#### Returns

`boolean`

操纵结果

___

### deleteDestroyCallback <Score text="deleteDestroyCallback" /> 

• **deleteDestroyCallback**(`callback`): `void` 

移除物体Destroy事件回调


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |


___

### destroy <Score text="destroy" /> 

• **destroy**(): `void` 

删除对象



___

### detachComponent <Score text="detachComponent" /> 

• **detachComponent**(`component`): `void` 

移除组件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` \| `Component` | 组件 |


___

### detachFromGameObject <Score text="detachFromGameObject" /> 

• **detachFromGameObject**(): `void` 

将此物体与当前附着的物体分离



___

### getBoundingBoxSize <Score text="getBoundingBoxSize" /> 

• **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Vector.md) 

获取物体包围盒大小


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nonColliding?` | `boolean` | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | 如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

Type.Vector

___

### getBounds <Score text="getBounds" /> 

• **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void` 

获取GameObject边界


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | 是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Vector.md) | 传出参数，设置为GameObject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Vector.md) | 传出参数，设置为GameObject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | 是否递归包含子物体 default:undefined |


___

### getChildByGuid <Score text="getChildByGuid" /> 

• **getChildByGuid**(`GUID`): `undefined` \| `GameObject` 

根据GUID查找子物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | GUID |

#### Returns

`undefined` \| `GameObject`

查找的物体

___

### getChildByName <Score text="getChildByName" /> 

• **getChildByName**(`name`): `undefined` \| `GameObject` 

根据名称查找子物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |

#### Returns

`undefined` \| `GameObject`

查找的物体

___

### getChildren <Score text="getChildren" /> 

• **getChildren**(): `undefined` \| `GameObject`[] 

获取Children，客户端不维系父子关系。推荐使用Find替代


#### Returns

`undefined` \| `GameObject`[]

Array`<GameObject>`

___

### getChildrenBoxCenter <Score text="getChildrenBoxCenter" /> 

• **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Vector.md) 

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

Type.Vector

___

### getCollision <Score text="getCollision" /> 

• **getCollision**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) 

返回碰撞状态


#### Returns

[`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md)

碰撞状态

___

### getForwardVector <Score text="getForwardVector" /> 

• **getForwardVector**(`outer?`): [`Vector`](Type.Vector.md) 

获取当前物体的向前向量


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### getRelativeLocation <Score text="getRelativeLocation" /> 

• **getRelativeLocation**(`outer?`): [`Vector`](Type.Vector.md) 

获取相对位置


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

位置坐标

___

### getRelativeRotation <Score text="getRelativeRotation" /> 

• **getRelativeRotation**(`outer?`): [`Rotation`](Type.Rotation.md) 

获取相对旋转


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Rotation.md)

旋转角度

___

### getRelativeScale <Score text="getRelativeScale" /> 

• **getRelativeScale**(`outer?`): [`Vector`](Type.Vector.md) 

获取相对缩放

::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

相对缩放

___

### getRightVector <Score text="getRightVector" /> 

• **getRightVector**(`outer?`): [`Vector`](Type.Vector.md) 

获取当前物体的向右向量

::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### getScriptByGuid <Score text="getScriptByGuid" /> 

• **getScriptByGuid**(`GUID`): `undefined` \| `Script` 

获得当前物体下的指定脚本


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | GUID |

#### Returns

`undefined` \| `Script`

Script

___

### getScriptByName <Score text="getScriptByName" /> 

• **getScriptByName**(`name`): `undefined` \| `Script` 

获得当前物体下的指定脚本


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`undefined` \| `Script`

Script

___

### getScripts <Score text="getScripts" /> 

• **getScripts**(): `undefined` \| `Script`[] 

获得当前物体下的所有脚本


#### Returns

`undefined` \| `Script`[]

Array`<Script>`

___

### getSourceAssetGuid <Score text="getSourceAssetGuid" /> 

• **getSourceAssetGuid**(): `string` 

获取当前物体使用资源的GUID


#### Returns

`string`

资源的GUID

___

### getTransform <Score text="getTransform" /> 

• **getTransform**(`outer?`): [`Transform`](Type.Transform.md) 

返回当前物体Transform


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Transform`](Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Transform.md)

Transform

___

### getUpVector <Score text="getUpVector" /> 

• **getUpVector**(`outer?`): [`Vector`](Type.Vector.md) 

获取当前物体的向上向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### getVisibility <Score text="getVisibility" /> 

• **getVisibility**(): `boolean` 

获取GameObject是否被显示


#### Returns

`boolean`

bool

___

### getWorldLocation <Score text="getWorldLocation" /> 

• **getWorldLocation**(`outer?`): [`Vector`](Type.Vector.md) 

获取物体的世界坐标

::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

世界位置坐标

___

### getWorldRotation <Score text="getWorldRotation" /> 

• **getWorldRotation**(`outer?`): [`Rotation`](Type.Rotation.md) 

获取物体的世界旋转

::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Rotation.md)

世界旋转

___

### getWorldScale <Score text="getWorldScale" /> 

• **getWorldScale**(`outer?`): [`Vector`](Type.Vector.md) 

获取物体的世界缩放


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

世界缩放

___

### isRunningClient <Score text="isRunningClient" /> 

• **isRunningClient**(): `boolean` 

是否为客户端


#### Returns

`boolean`

true为客户端

___

### onDestroy <Score text="onDestroy" /> 

• `Protected` **onDestroy**(): `void` 

周期函数 被销毁时调用



___

### onReplicated <Score text="onReplicated" /> 

• `Protected` **onReplicated**(`path`, `value`, `oldVal`): `void` 

属性被同步事件 ClientOnly


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | 属性路径 |
| `value` | `unknown` | 属性值 |
| `oldVal` | `unknown` | 同步前的值 |


___

### onStart <Score text="onStart" /> 

• `Protected` **onStart**(): `void` 

周期函数 脚本开始执行时调用



___

### onUpdate <Score text="onUpdate" /> 

• `Protected` **onUpdate**(`dt`): `void` 

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |


___

### ready <Score text="ready" /> 

• **ready**(): `Promise`<[`Player`](Gameplay.Player.md)\> 

GameObject准备好后返回


#### Returns

`Promise`<[`Player`](Gameplay.Player.md)\>

准备好的对象

___

### setCollision <Score text="setCollision" /> 

• **setCollision**(`status`, `propagateToChildren?`): `void` 

设置碰撞状态


::: warning Precautions

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) |  碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` |  是否传递给子节点 default: false |


___

### setLocationAndRotation <Score text="setLocationAndRotation" /> 

• **setLocationAndRotation**(`location`, `rotation`): `void` 

同时设置物体的世界位置与旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 世界位置 |
| `rotation` | [`Rotation`](Type.Rotation.md) | 世界旋转 |


___

### setRelativeLocation <Score text="setRelativeLocation" /> 

• **setRelativeLocation**(`location`): `void` 

设置相对位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 位置 |


___

### setRelativeRotation <Score text="setRelativeRotation" /> 

• **setRelativeRotation**(`rotation`): `void` 

设置相对旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 旋转 |


___

### setRelativeScale <Score text="setRelativeScale" /> 

• **setRelativeScale**(`scale`): `void` 

设置相对缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Vector.md) | 要设置的相对缩放 |


___

### setTransform <Score text="setTransform" /> 

• **setTransform**(`transform`): `void` 

设置当前物体transform


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Transform.md) | transform |


___

### setVisibility <Score text="setVisibility" /> 

• **setVisibility**(`status`, `propagateToChildren?`): `void` 

设置GameObject是否被显示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:false |


___

### setWorldLocation <Score text="setWorldLocation" /> 

• **setWorldLocation**(`v`): `void` 

设置物体的世界坐标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) |  要设置的世界坐标 |


___

### setWorldRotation <Score text="setWorldRotation" /> 

• **setWorldRotation**(`rotation`): `void` 

设置物体的世界旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 要设置的世界旋转 |


___

### setWorldScale <Score text="setWorldScale" /> 

• **setWorldScale**(`v`): `void` 

设置物体的世界缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) | 要设置的世界缩放 |


___

### asyncFind <Score text="asyncFind" /> 

• `Static` **asyncFind**(`GUID`): `Promise`<`GameObject`\> 

通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 物体的GUID |

#### Returns

`Promise`<`GameObject`\>

GUID对应的物体

___

### asyncSpawn <Score text="asyncSpawn" /> 

• `Static` **asyncSpawn**<`T`\>(`spawnInfo`): `Promise`<`T`\> 

异步构造一个 GameObject 资源不存在会先去下载资源再去创建


使用示例:调用方法
```ts
let obj = await Gameplay.GameObject.asyncSpawn<Gameplay.Mesh>({
 guid: "7669",
 replicates: true,
 transform: new Transform()
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GameObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spawnInfo` | [`SpawnInfo`](../interfaces/Type.SpawnInfo.md) |  构建物体的信息 |

#### Returns

`Promise`<`T`\>

构造的GameObject

___

### find <Score text="find" /> 

• `Static` **find**(`GUID`): `GameObject` 

通过GUID查找GameObject


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 物体的GUID |

#### Returns

`GameObject`

GUID对应的物体

___

### findGameObjectByTag <Score text="findGameObjectByTag" /> 

• `Static` **findGameObjectByTag**(`InTag`): `GameObject`[] 

通过自定义Tag获取GameObject


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | 自定义Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getAllPlayers <Score text="getAllPlayers" /> 

• `Static` **getAllPlayers**(): [`Player`](Gameplay.Player.md)[] 

获取当前所有玩家


使用示例:客户端发送事件通知服务端打印全体玩家的ID并标注自己
```ts
@Core.Class
export default class PlayerGetAllExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【打印游戏内全部玩家信息】事件监听器
            Events.addClientListener("PrintPlayersInfo", (player) => {
                // 遍历Players数组，打印他们的userId，遇到发起事件客户端时提示This is me
                Player.getAllPlayers().forEach((value, index) => {
                    if(player == value) {
                        console.log(index + " Player " + player.userId + "This is me");
                    } else {
                        console.log(index + " Player " + player.userId);
                    }
                });
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 添加一个按键方法：按下键盘“1”，向服务端发送事件【打印游戏内全部玩家信息】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                Events.dispatchToServer("PrintPlayersInfo");
            });
        }
    }
}
```

#### Returns

[`Player`](Gameplay.Player.md)[]

全体玩家对象数组

___

### getControllerRotation <Score text="getControllerRotation" /> 

• `Static` **getControllerRotation**(`outer?`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="client" />

获取控制器的旋转


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

使用示例:向服务端发送事件创建默认角色并控制它
```ts
@Core.Class
export default class PlayerSpawnCharacter extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            Events.addClientListener("SpawnCharacterAndControl", (player) => {
                let newPawn = Player.spawnDefaultCharacter();
                player.controlPawn(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数：打印新控制的pawn的名字。
            myself.onPawnChanged.add((pawn) => {
                console.log("New Pawn Name: " + pawn.pawnName);
            });
            // 添加一个按键方法：按下键盘“3”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                Events.dispatchToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Rotation.md) | 接收旋转的变量 default:undefined |

#### Returns

[`Rotation`](Type.Rotation.md)

当前控制器输入的旋转

___

### getGameObjectByName <Score text="getGameObjectByName" /> 

• `Static` **getGameObjectByName**(`name`): `undefined` \| `GameObject` 

通过名字查找物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`undefined` \| `GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

___

### getGameObjectsByName <Score text="getGameObjectsByName" /> 

• `Static` **getGameObjectsByName**(`name`): `GameObject`[] 

通过名字查找物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

___

### getPlayer <Score text="getPlayer" /> 

• `Static` **getPlayer**(`uniqueId`): [`Player`](Gameplay.Player.md) 

获取玩家


::: warning Precautions

根据ID获取玩家。ID可以是instanceId或userId。

:::

使用示例:通过getPlayer接口获取玩家并打印玩家信息
```ts
@Core.Class
export default class PlayerGetExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 添加一个按键方法：按下键盘“1”，使用getPlayer函数通过userId或instanceId获取玩家对象并打印名字
            InputUtil.onKeyDown(Type.Keys.One, () => {
                // 获取当前客户端的玩家(自己)并打印userId和instanceId
                let myself = Player.localPlayer;
                console.log("My userId: " + myself.userId);
                console.log("My instanceId: " + myself.instanceId);
                // 通过userId获取玩家(自己)并打印userId和instanceId
                let myself_2 = Player.getPlayer(myself.userId);
                console.log("My userId: " + myself_2.userId);
                console.log("My instanceId: " + myself_2.instanceId);
                // 通过instanceId获取玩家(自己)并打印userId和instanceId
                let myself_3 = Player.getPlayer(myself.instanceId);
                console.log("My userId: " + myself_3.userId);
                console.log("My instanceId: " + myself_3.instanceId);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueId` | `string` \| `number` | 用户ID或者玩家实例ID |

#### Returns

[`Player`](Gameplay.Player.md)

玩家对象

___

### setControllerRotation <Score text="setControllerRotation" /> 

• `Static` **setControllerRotation**(`newRotation`): `void` <Badge type="tip" text="client" />

覆写控制器的旋转


使用示例:向服务端发送事件创建默认角色并控制它
```ts
@Core.Class
export default class PlayerSpawnCharacter extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            Events.addClientListener("SpawnCharacterAndControl", (player) => {
                let newPawn = Player.spawnDefaultCharacter();
                player.controlPawn(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数：打印新控制的pawn的名字。
            myself.onPawnChanged.add((pawn) => {
                console.log("New Pawn Name: " + pawn.pawnName);
            });
            // 添加一个按键方法：按下键盘“2”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                Events.dispatchToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRotation` | [`Rotation`](Type.Rotation.md) | 新旋转值 |


___

### spawn <Score text="spawn" /> 

• `Static` **spawn**<`T`\>(`spawnInfo`): `T` 

构造一个 GameObject


使用示例:调用方法
```ts
let obj = Gameplay.GameObject.spawn<Gameplay.Mesh>({
 guid: "7669",
 replicates: true,
 transform: new Transform()
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GameObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spawnInfo` | [`SpawnInfo`](../interfaces/Type.SpawnInfo.md) |  构建物体的信息 |

#### Returns

`T`

构造的GameObject

___

### spawnDefaultCharacter <Score text="spawnDefaultCharacter" /> 

• `Static` **spawnDefaultCharacter**(): [`Character`](Gameplay.Character.md) 

创建默认角色


::: warning Precautions

默认角色属性由编辑器玩家对象的属性面板决定。

:::

使用示例:向服务端发送事件创建默认角色并控制它
```ts
@Core.Class
export default class PlayerSpawnCharacter extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 在服务端添加一个【创建角色并控制】事件监听器
            Events.addClientListener("SpawnCharacterAndControl", (player) => {
                let newPawn = Player.spawnDefaultCharacter();
                player.controlPawn(newPawn);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 给本地玩家的【玩家控制对象变化】委托添加一个函数：打印新控制的pawn的名字。
            myself.onPawnChanged.add((pawn) => {
                console.log("New Pawn Name: " + pawn.pawnName);
            });
            // 添加一个按键方法：按下键盘“1”，向服务端发送事件【创建角色并控制】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                Events.dispatchToServer("SpawnCharacterAndControl");
            });
        }
    }
}
```

#### Returns

[`Character`](Gameplay.Character.md)

角色对象

