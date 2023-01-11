[Gameplay](../modules/Gameplay.Gameplay.md) / Player

# Player <Badge type="tip" text="Class" /> 

**`Description`**

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
| **[visible](Gameplay.Player.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.Player.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Player.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Player.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Player.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[addNetworkDisconnectListener](Gameplay.Player.md#addnetworkdisconnectlistener)**(() => `void`): `void` <br> 添加网络断开连接时执行的回调函数|
| **[addNetworkReconnectListener](Gameplay.Player.md#addnetworkreconnectlistener)**(() => `void`): `void` <br> 添加网络断开连接后恢复网络时执行的回调函数|
| **[asyncGetScriptByName](Gameplay.Player.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.Player.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.Player.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.Player.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Player.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.Player.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getAccount](Gameplay.Player.md#getaccount)**(): `string` <br> 获取玩家账户|
| **[getBoundingBoxSize](Gameplay.Player.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Player.md#getbounds)**(`boolean`, [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Player.md#getchildbyguid)**(`string`): `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.Player.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Player.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Player.md#getchildrenboxcenter)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Player.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.Player.md#getforwardvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getPlayerID](Gameplay.Player.md#getplayerid)**(): `number` <br> 获取当前游戏内的玩家Id，用于和其它玩家区分。不能用于查询用户信息。|
| **[getRelativeLocation](Gameplay.Player.md#getrelativelocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Player.md#getrelativerotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Player.md#getrelativescale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Player.md#getrightvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Player.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.Player.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.Player.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.Player.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTeamId](Gameplay.Player.md#getteamid)**(): `string` <br> 获取玩家的TeamId|
| **[getTransform](Gameplay.Player.md#gettransform)**([`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.Player.md#getupvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getUserSystemId](Gameplay.Player.md#getusersystemid)**(): `string` <br> 获取用户系统的玩家Id|
| **[getVisibility](Gameplay.Player.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.Player.md#getworldlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Player.md#getworldrotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Player.md#getworldscale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Player.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.Player.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.Player.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Player.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ping](Gameplay.Player.md#ping)**(): `number` <br> 当前Player的Ping值(-1时表示获取失败)|
| **[ready](Gameplay.Player.md#ready)**(): `Promise`<[`Player`](Gameplay.Player.md)\> <br> GameObject准备好后返回|
| **[removeNetworkDisconnectListener](Gameplay.Player.md#removenetworkdisconnectlistener)**(() => `void`): `void` <br> 移除网络断开连接时执行的回调函数|
| **[removeNetworkReconnectListener](Gameplay.Player.md#removenetworkreconnectlistener)**(() => `void`): `void` <br> 移除网络断开连接后恢复网络时执行的回调函数|
| **[setCollision](Gameplay.Player.md#setcollision)**([`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setCustomTimeDilation](Gameplay.Player.md#setcustomtimedilation)**(`number`): `void` <br> 设置当前角色对象膨胀时间速度说明：对象膨胀速度默认为1，当膨胀时间速度设置小于1时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值0.1。|
| **[setLocationAndRotation](Gameplay.Player.md#setlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.Player.md#setrelativelocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Player.md#setrelativerotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Player.md#setrelativescale)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.Player.md#settransform)**([`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.Player.md#setvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.Player.md#setworldlocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Player.md#setworldrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Player.md#setworldscale)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.Player.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.Player.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Player.md#find)**(`string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.Player.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Player.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Player.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.Player.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|

## Properties

### character  

• **character**: [`Character`](Gameplay.Character.md)

**`Description`**

玩家控制的角色

## Accessors

### customTimeDilation  

• `get` **customTimeDilation**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取当前角色对象膨胀时间速度


#### Returns

`number`

膨胀时间速度

___

### forwardVector  

• `get` **forwardVector**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取当前物体的向前向量


#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### guid  

• `get` **guid**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取对象的GUID（唯一标识一个对象的字符串）。


#### Returns

`string`

___

### lockStatus  

• `get` **lockStatus**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取对象是否锁定


#### Returns

`boolean`

• `set` **lockStatus**(`v`): `void` <Badge type="tip" text="other" />

**`Description`**

设置对象是否锁定


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |


___

### name  

• `get` **name**(): `string` <Badge type="tip" text="other" />

**`Description`**

返回当前物体名称


#### Returns

`string`

名称

• `set` **name**(`name`): `void` <Badge type="tip" text="other" />

**`Description`**

设置物体名称


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 需要设置的名称 |


___

### netStatus  

• `get` **netStatus**(): [`NetStatus`](../enums/Type.NetStatus.md) <Badge type="tip" text="other" />

**`Description`**

获取当前物体同步状态


#### Returns

[`NetStatus`](../enums/Type.NetStatus.md)

Type.NetStatus

___

### parent  

• `get` **parent**(): `GameObject` <Badge type="tip" text="other" />

**`Description`**

获取当前父物体


#### Returns

`GameObject`

父物体

• `set` **parent**(`newParent`): `void` <Badge type="tip" text="other" />

**`Description`**

设置父物体


#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | `GameObject` |


___

### relativeLocation  

• `get` **relativeLocation**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取相对位置


#### Returns

[`Vector`](Type.Vector.md)

位置坐标

• `set` **relativeLocation**(`location`): `void` <Badge type="tip" text="other" />

**`Description`**

设置相对位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 位置 |


___

### relativeRotation  

• `get` **relativeRotation**(): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

**`Description`**

获取相对旋转


#### Returns

[`Rotation`](Type.Rotation.md)

旋转角度

• `set` **relativeRotation**(`rotation`): `void` <Badge type="tip" text="other" />

**`Description`**

设置相对旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 旋转 |


___

### relativeScale  

• `get` **relativeScale**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取相对缩放


#### Returns

[`Vector`](Type.Vector.md)

相对缩放

• `set` **relativeScale**(`scale`): `void` <Badge type="tip" text="other" />

**`Description`**

设置相对缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Vector.md) | 缩放 |


___

### rightVector  

• `get` **rightVector**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取当前物体的向右向量


#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### staticStatus  

• `get` **staticStatus**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取对象是否静态


#### Returns

`boolean`

___

### tag  

• `get` **tag**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取当前物体的Tag


#### Returns

`string`

Tag

• `set` **tag**(`tag`): `void` <Badge type="tip" text="other" />

**`Description`**

设置当前物体的Tag


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | Tag |


___

### transform  

• `get` **transform**(): [`Transform`](Type.Transform.md)

**`Description`**

返回当前物体transform <Badge type="tip" text="other" />


#### Returns

[`Transform`](Type.Transform.md)

transform

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform <Badge type="tip" text="other" />


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Transform.md) | 要设置的transform |


___

### upVector  

• `get` **upVector**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取当前物体的向上向量


#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### useUpdate  

• `get` **useUpdate**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取对象是否使用更新


#### Returns

`boolean`

• `set` **useUpdate**(`v`): `void` <Badge type="tip" text="other" />

**`Description`**

设置对象是否使用更新


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |


___

### visible  

• `get` **visible**(): `boolean` <Badge type="tip" text="other" />

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示


#### Returns

`boolean`

bool

___

### worldLocation  

• `get` **worldLocation**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取物体的世界坐标


#### Returns

[`Vector`](Type.Vector.md)

• `set` **worldLocation**(`v`): `void` <Badge type="tip" text="other" />

**`Description`**

设置物体的世界坐标


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) |


___

### worldRotation  

• `get` **worldRotation**(): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

**`Description`**

获取物体的世界旋转


#### Returns

[`Rotation`](Type.Rotation.md)

• `set` **worldRotation**(`rotation`): `void` <Badge type="tip" text="other" />

**`Description`**

设置物体的世界旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 要设置的世界旋转 |


___

### worldScale  

• `get` **worldScale**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取物体的世界缩放


#### Returns

[`Vector`](Type.Vector.md)

• `set` **worldScale**(`v`): `void` <Badge type="tip" text="other" />

**`Description`**

设置物体的是世界缩放


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) |


## Methods

### addDestroyCallback  

▸ **addDestroyCallback**(`callback`): `void` <Badge type="tip" text="other" />

**`Description`**

添加物体Destroy事件回调


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |


___

### addNetworkDisconnectListener  

▸ **addNetworkDisconnectListener**(`callback`): `void`

**`Description`**

添加网络断开连接时执行的回调函数


::: warning Precautions

如果需要删除回调函数，请不要使用Lambda表达式，只对当前player生效

:::

**`Example`**

使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.addNetworkDisconnectListener(this.testFunction); <Badge type="tip" text="other" />
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |


___

### addNetworkReconnectListener  

▸ **addNetworkReconnectListener**(`callback`): `void`

**`Description`**

添加网络断开连接后恢复网络时执行的回调函数


::: warning Precautions

如果需要删除回调函数，请不要使用Lambda表达式，只对当前player生效

:::

**`Example`**

使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.addNetworkReconnectListener(this.testFunction); <Badge type="tip" text="other" />
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |


___

### asyncGetScriptByName  

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\> <Badge type="tip" text="other" />

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Promise`<`Script`\>

Script

___

### attachToGameObject  

▸ **attachToGameObject**(`obj`): `void` <Badge type="tip" text="other" />

**`Description`**

将物体附着到指定物体上


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 物体 |


___

### clone  

▸ **clone**(`inReplicates?`): `GameObject` <Badge type="tip" text="other" />

**`Description`**

复制对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

___

### deleteDestroyCallback  

▸ **deleteDestroyCallback**(`callback`): `void` <Badge type="tip" text="other" />

**`Description`**

移除物体Destroy事件回调


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |


___

### destroy  

▸ **destroy**(): `void` <Badge type="tip" text="other" />

**`Description`**

删除对象



___

### detachFromGameObject  

▸ **detachFromGameObject**(): `void` <Badge type="tip" text="other" />

**`Description`**

将此物体与当前附着的物体分离



___

### getAccount  

▸ **getAccount**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取玩家账户


#### Returns

`string`

玩家账户

___

### getBoundingBoxSize  

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

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

### getBounds  

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void` <Badge type="tip" text="other" />

**`Description`**

获取GameObject边界


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | 是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Vector.md) | 传出参数，设置为GameObject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Vector.md) | 传出参数，设置为GameObject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | 是否递归包含子物体 default:undefined |


___

### getChildByGuid  

▸ **getChildByGuid**(`GUID`): `GameObject` <Badge type="tip" text="other" />

**`Description`**

根据GUID查找子物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | GUID |

#### Returns

`GameObject`

查找的物体

___

### getChildByName  

▸ **getChildByName**(`name`): `GameObject` <Badge type="tip" text="other" />

**`Description`**

根据名称查找子物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |

#### Returns

`GameObject`

查找的物体

___

### getChildren  

▸ **getChildren**(): `GameObject`[] <Badge type="tip" text="other" />

**`Description`**

获取Children，客户端不维系父子关系。推荐使用Find替代


#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getChildrenBoxCenter  

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

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

### getCollision  

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <Badge type="tip" text="other" />

**`Description`**

返回碰撞状态


#### Returns

[`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md)

碰撞状态

___

### getForwardVector  

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

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

### getPlayerID  

▸ **getPlayerID**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取当前游戏内的玩家Id，用于和其它玩家区分。不能用于查询用户信息。


#### Returns

`number`

当前游戏内的玩家Id

#### Overrides

Core.IPlayer.getPlayerID

___

### getRelativeLocation  

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

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

### getRelativeRotation  

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

**`Description`**

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

### getRelativeScale  

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

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

### getRightVector  

▸ **getRightVector**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

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

### getScriptByGuid  

▸ **getScriptByGuid**(`GUID`): `Script` <Badge type="tip" text="other" />

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | GUID |

#### Returns

`Script`

Script

___

### getScriptByName  

▸ **getScriptByName**(`name`): `Script` <Badge type="tip" text="other" />

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Script`

Script

___

### getScripts  

▸ **getScripts**(): `Script`[] <Badge type="tip" text="other" />

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代


#### Returns

`Script`[]

Array`<Script>`

___

### getSourceAssetGuid  

▸ **getSourceAssetGuid**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取当前物体使用资源的GUID


#### Returns

`string`

资源的GUID

___

### getTeamId  

▸ **getTeamId**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取玩家的TeamId


#### Returns

`string`

玩家的TeamId，如不在队伍中，则为空

___

### getTransform  

▸ **getTransform**(`outer?`): [`Transform`](Type.Transform.md) <Badge type="tip" text="other" />

**`Description`**

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

### getUpVector  

▸ **getUpVector**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取当前物体的向上向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

Vector

___

### getUserSystemId  

▸ **getUserSystemId**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取用户系统的玩家Id


#### Returns

`string`

用户系统的玩家Id，可以用于查询用户信息。

___

### getVisibility  

▸ **getVisibility**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取GameObject是否被显示


#### Returns

`boolean`

bool

___

### getWorldLocation  

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

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

### getWorldRotation  

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

**`Description`**

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

### getWorldScale  

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

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

### isRunningClient  

▸ **isRunningClient**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

是否为客户端


#### Returns

`boolean`

true为客户端

___

### onDestroy  

▸ `Protected` **onDestroy**(): `void` <Badge type="tip" text="other" />

**`Description`**

周期函数 被销毁时调用



___

### onStart  

▸ `Protected` **onStart**(): `void` <Badge type="tip" text="other" />

**`Description`**

周期函数 脚本开始执行时调用



___

### onUpdate  

▸ `Protected` **onUpdate**(`dt`): `void` <Badge type="tip" text="other" />

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |


___

### ping  

▸ **ping**(): `number` <Badge type="tip" text="other" />

**`Description`**

当前Player的Ping值(-1时表示获取失败)


#### Returns

`number`

以毫秒为单位

___

### ready  

▸ **ready**(): `Promise`<[`Player`](Gameplay.Player.md)\> <Badge type="tip" text="other" />

**`Description`**

GameObject准备好后返回


#### Returns

`Promise`<[`Player`](Gameplay.Player.md)\>

准备好的对象

___

### removeNetworkDisconnectListener  

▸ **removeNetworkDisconnectListener**(`callback`): `void`

**`Description`**

移除网络断开连接时执行的回调函数


**`Example`**

使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.removeNetworkDisconnectListener(this.testFunction); <Badge type="tip" text="other" />
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 不需要触发的回调函数 |


___

### removeNetworkReconnectListener  

▸ **removeNetworkReconnectListener**(`callback`): `void`

**`Description`**

移除网络断开连接后恢复网络时执行的回调函数


**`Example`**

使用示例:调用方法
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.removeNetworkReconnectListener(this.testFunction); <Badge type="tip" text="other" />
});
public testFunction() {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 不需要触发的回调函数 |


___

### setCollision  

▸ **setCollision**(`status`, `propagateToChildren?`): `void` <Badge type="tip" text="other" />

**`Description`**

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

### setCustomTimeDilation  

▸ **setCustomTimeDilation**(`Time`): `void` <Badge type="tip" text="other" />

**`Description`**

设置当前角色对象膨胀时间速度说明：对象膨胀速度默认为1，当膨胀时间速度设置小于1时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值0.1。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` |  膨胀倍数 |


___

### setLocationAndRotation  

▸ **setLocationAndRotation**(`location`, `rotation`): `void` <Badge type="tip" text="other" />

**`Description`**

同时设置物体的世界位置与旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 世界位置 |
| `rotation` | [`Rotation`](Type.Rotation.md) | 世界旋转 |


___

### setRelativeLocation  

▸ **setRelativeLocation**(`location`): `void` <Badge type="tip" text="other" />

**`Description`**

设置相对位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 位置 |


___

### setRelativeRotation  

▸ **setRelativeRotation**(`rotation`): `void` <Badge type="tip" text="other" />

**`Description`**

设置相对旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 旋转 |


___

### setRelativeScale  

▸ **setRelativeScale**(`scale`): `void` <Badge type="tip" text="other" />

**`Description`**

设置相对缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Vector.md) | 要设置的相对缩放 |


___

### setTransform  

▸ **setTransform**(`transform`): `void` <Badge type="tip" text="other" />

**`Description`**

设置当前物体transform


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Transform.md) | transform |


___

### setVisibility  

▸ **setVisibility**(`status`, `propagateToChildren?`): `void` <Badge type="tip" text="other" />

**`Description`**

设置GameObject是否被显示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:false |


___

### setWorldLocation  

▸ **setWorldLocation**(`v`): `void` <Badge type="tip" text="other" />

**`Description`**

设置物体的世界坐标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) |  要设置的世界坐标 |


___

### setWorldRotation  

▸ **setWorldRotation**(`rotation`): `void` <Badge type="tip" text="other" />

**`Description`**

设置物体的世界旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 要设置的世界旋转 |


___

### setWorldScale  

▸ **setWorldScale**(`v`): `void` <Badge type="tip" text="other" />

**`Description`**

设置物体的世界缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) | 要设置的世界缩放 |


___

### asyncFind  

▸ `Static` **asyncFind**(`GUID`): `Promise`<`GameObject`\> <Badge type="tip" text="other" />

**`Description`**

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

### asyncSpawnGameObject  

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\> <Badge type="tip" text="other" />

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的GameObject

___

### find  

▸ `Static` **find**(`GUID`): `GameObject` <Badge type="tip" text="other" />

**`Description`**

通过GUID查找GameObject


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 物体的GUID |

#### Returns

`GameObject`

GUID对应的物体

___

### findGameObjectByTag  

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[] <Badge type="tip" text="other" />

**`Description`**

通过自定义Tag获取GameObject


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | 自定义Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getGameObjectByName  

▸ `Static` **getGameObjectByName**(`name`): `GameObject` <Badge type="tip" text="other" />

**`Description`**

通过名字查找物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

___

### getGameObjectsByName  

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[] <Badge type="tip" text="other" />

**`Description`**

通过名字查找物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

___

### spawnGameObject  

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject` <Badge type="tip" text="other" />

**`Description`**

构造一个 GameObject


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的GameObject
