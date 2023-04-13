[Gameplay](../groups/Gameplay.Gameplay.md) / Player

# Player <Badge type="tip" text="Class" /> <Score text="Player" />

角色控制

## Hierarchy

- `IPlayer`

  ↳ **`Player`**

## Table of contents

| Properties |
| :-----|
| **[character](Gameplay.Player.md#character)**: [`Character`](Gameplay.Character.md) <br> 玩家控制的角色|

| Accessors |
| :-----|
| **[customTimeDilation](Gameplay.Player.md#customtimedilation)**(): `number` <br> 获取当前角色对象膨胀时间速度|
| **[forwardVector](Gameplay.Player.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.Player.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.Player.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.Player.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Player.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.Player.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.Player.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Player.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Player.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.Player.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.Player.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.Player.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.Player.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Player.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Player.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.Player.md#visible)**(): `boolean` <br> 获取当前物体是否显示|
| **[worldLocation](Gameplay.Player.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Player.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Player.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Player.md#adddestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[addNetworkDisconnectListener](Gameplay.Player.md#addnetworkdisconnectlistener)**(`callback`: () => `void`): `void` <br> 添加网络断开连接时执行的回调函数|
| **[addNetworkReconnectListener](Gameplay.Player.md#addnetworkreconnectlistener)**(`callback`: () => `void`): `void` <br> 添加网络断开连接后恢复网络时执行的回调函数|
| **[asyncGetScriptByName](Gameplay.Player.md#asyncgetscriptbyname)**(`name`: `string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.Player.md#attachcomponent)**(`component`: `Component`, `isStatic?`: `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.Player.md#attachtogameobject)**(`obj`: `GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.Player.md#clone)**(`spawnInfo?`: `boolean` \): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.Player.md#deletedestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Player.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.Player.md#detachcomponent)**(`component`: `string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.Player.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getAccount](Gameplay.Player.md#getaccount)**(): `string` <br> 获取玩家账户|
| **[getBoundingBoxSize](Gameplay.Player.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Player.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](Type.Vector.md), `BoxExtentOuter`: [`Vector`](Type.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Player.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.Player.md#getchildbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Player.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Player.md#getchildrenboxcenter)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Player.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.Player.md#getforwardvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getPlayerID](Gameplay.Player.md#getplayerid)**(): `number` <br> 获取当前游戏内的玩家Id，用于和其它玩家区分。不能用于查询用户信息。|
| **[getRelativeLocation](Gameplay.Player.md#getrelativelocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Player.md#getrelativerotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Player.md#getrelativescale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Player.md#getrightvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Player.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](Gameplay.Player.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](Gameplay.Player.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getSourceAssetGuid](Gameplay.Player.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTeamId](Gameplay.Player.md#getteamid)**(): `string` <br> 获取玩家的TeamId|
| **[getTransform](Gameplay.Player.md#gettransform)**(`outer?`: [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.Player.md#getupvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getUserId](Gameplay.Player.md#getuserid)**(): `string` <br> 获取用户的平台Id，该Id可以作为玩家唯一Id使用。|
| **[getUserSystemId](Gameplay.Player.md#getusersystemid)**(): `string` <br> 获取用户系统的玩家Id|
| **[getVisibility](Gameplay.Player.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.Player.md#getworldlocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Player.md#getworldrotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Player.md#getworldscale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Player.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.Player.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.Player.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.Player.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Player.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ping](Gameplay.Player.md#ping)**(): `number` <br> 当前Player的Ping值(-1时表示获取失败)|
| **[ready](Gameplay.Player.md#ready)**(): `Promise`<[`Player`](Gameplay.Player.md)\> <br> GameObject准备好后返回|
| **[removeNetworkDisconnectListener](Gameplay.Player.md#removenetworkdisconnectlistener)**(`callback`: () => `void`): `void` <br> 移除网络断开连接时执行的回调函数|
| **[removeNetworkReconnectListener](Gameplay.Player.md#removenetworkreconnectlistener)**(`callback`: () => `void`): `void` <br> 移除网络断开连接后恢复网络时执行的回调函数|
| **[setCollision](Gameplay.Player.md#setcollision)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `propagateToChildren?`: `boolean`): `void` <br> 设置碰撞状态|
| **[setCustomTimeDilation](Gameplay.Player.md#setcustomtimedilation)**(`Time`: `number`): `void` <br> 设置当前角色对象膨胀时间速度说明：对象膨胀速度默认为1，当膨胀时间速度设置小于1时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值0.1。|
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
| **[asyncSpawnGameObject](Gameplay.Player.md#asyncspawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Player.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.Player.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Player.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Player.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.Player.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.Player.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
| **[spawnGameObject](Gameplay.Player.md#spawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `GameObject` <br> 构造一个 GameObject|

## Properties

### character <Score text="character" /> 

• **character**: [`Character`](Gameplay.Character.md)

玩家控制的角色

## Accessors

### customTimeDilation <Score text="customTimeDilation" /> 

• `get` **customTimeDilation**(): `number` 

获取当前角色对象膨胀时间速度


#### Returns

`number`

膨胀时间速度

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

### visible <Score text="visible" /> 

• `get` **visible**(): `boolean` 

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:020 reason:api重构 replacement:getVisibility()

:::

获取当前物体是否显示


#### Returns

`boolean`

bool

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


## Methods

### addDestroyCallback <Score text="addDestroyCallback" /> 

• **addDestroyCallback**(`callback`): `void` 

添加物体Destroy事件回调


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |


___

### addNetworkDisconnectListener <Score text="addNetworkDisconnectListener" /> 

• **addNetworkDisconnectListener**(`callback`): `void` <Badge type="tip" text="client" />

添加网络断开连接时执行的回调函数


::: warning Precautions

如果需要删除回调函数，请不要使用Lambda表达式，只对当前player生效

:::

使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.addNetworkDisconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |


___

### addNetworkReconnectListener <Score text="addNetworkReconnectListener" /> 

• **addNetworkReconnectListener**(`callback`): `void` <Badge type="tip" text="client" />

添加网络断开连接后恢复网络时执行的回调函数


::: warning Precautions

如果需要删除回调函数，请不要使用Lambda表达式，只对当前player生效

:::

使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.addNetworkReconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |


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

### getAccount <Score text="getAccount" /> 

• **getAccount**(): `string` <Badge type="tip" text="other" />

获取玩家账户


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:023 reason:功能废弃 replacement:getUserId

:::

#### Returns

`string`

玩家账户

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

### getPlayerID <Score text="getPlayerID" /> 

• **getPlayerID**(): `number` 

获取当前游戏内的玩家Id，用于和其它玩家区分。不能用于查询用户信息。

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:023 reason:功能废弃 replacement:getUserId

:::


#### Returns

`number`

当前游戏内的玩家Id

#### Overrides

Core.IPlayer.getPlayerID

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

### getTeamId <Score text="getTeamId" /> 

• **getTeamId**(): `string` 

获取玩家的TeamId


#### Returns

`string`

玩家的TeamId，如不在队伍中，则为空

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

### getUserId <Score text="getUserId" /> 

• **getUserId**(): `string` 

获取用户的平台Id，该Id可以作为玩家唯一Id使用。


#### Returns

`string`

用户平台Id

___

### getUserSystemId <Score text="getUserSystemId" /> 

• **getUserSystemId**(): `string` 

获取用户系统的玩家Id

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:023 reason:命名不规范 replacement:AccountService.getInstance().getOpenId()

:::


#### Returns

`string`

用户系统的玩家Id，可以用于查询用户信息。

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

### ping <Score text="ping" /> 

• **ping**(): `number` 

当前Player的Ping值(-1时表示获取失败)


#### Returns

`number`

以毫秒为单位

___

### ready <Score text="ready" /> 

• **ready**(): `Promise`<[`Player`](Gameplay.Player.md)\> 

GameObject准备好后返回


#### Returns

`Promise`<[`Player`](Gameplay.Player.md)\>

准备好的对象

___

### removeNetworkDisconnectListener <Score text="removeNetworkDisconnectListener" /> 

• **removeNetworkDisconnectListener**(`callback`): `void` <Badge type="tip" text="client" />

移除网络断开连接时执行的回调函数


使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.removeNetworkDisconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 不需要触发的回调函数 |


___

### removeNetworkReconnectListener <Score text="removeNetworkReconnectListener" /> 

• **removeNetworkReconnectListener**(`callback`): `void` <Badge type="tip" text="client" />

移除网络断开连接后恢复网络时执行的回调函数


使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.removeNetworkReconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 不需要触发的回调函数 |


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

### setCustomTimeDilation <Score text="setCustomTimeDilation" /> 

• **setCustomTimeDilation**(`Time`): `void` <Badge type="tip" text="other" />

设置当前角色对象膨胀时间速度说明：对象膨胀速度默认为1，当膨胀时间速度设置小于1时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值0.1。

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` |  膨胀倍数 |


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

### asyncSpawnGameObject <Score text="asyncSpawnGameObject" /> 

• `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`, `transform?`): `Promise`<`GameObject`\> <Badge type="tip" text="other" />

异步构造一个 GameObject 资源不存在会先去下载资源再去创建


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason:接口废弃 replacement:asyncSpawn()

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |
| `transform?` | [`Transform`](Type.Transform.md) | 是否设置transform default:默认零点 |

#### Returns

`Promise`<`GameObject`\>

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

### spawnGameObject <Score text="spawnGameObject" /> 

• `Static` **spawnGameObject**(`assetId`, `inReplicates?`, `transform?`): `GameObject` <Badge type="tip" text="other" />

构造一个 GameObject


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason:接口废弃 replacement:spawn()

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |
| `transform?` | [`Transform`](Type.Transform.md) | 是否设置transform default:默认零点 |

#### Returns

`GameObject`

构造的GameObject
