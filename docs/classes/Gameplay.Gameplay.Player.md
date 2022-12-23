[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Player

# Class: Player

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Player

**`Author`**

孙向坤

**`Description`**

角色控制

**`Network Status`**

usage:双端

## Hierarchy

- [`IPlayer`](Core.Core.IPlayer.md)

  ↳ **`Player`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.Player.md#constructor)

### Properties

- [character](Gameplay.Gameplay.Player.md#character)

### Accessors

- [forwardVector](Gameplay.Gameplay.Player.md#forwardvector)
- [guid](Gameplay.Gameplay.Player.md#guid)
- [isVisible](Gameplay.Gameplay.Player.md#isvisible)
- [lockState](Gameplay.Gameplay.Player.md#lockstate)
- [name](Gameplay.Gameplay.Player.md#name)
- [netStatus](Gameplay.Gameplay.Player.md#netstatus)
- [parent](Gameplay.Gameplay.Player.md#parent)
- [relativeLocation](Gameplay.Gameplay.Player.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.Player.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.Player.md#relativescale)
- [rightVector](Gameplay.Gameplay.Player.md#rightvector)
- [staticStatus](Gameplay.Gameplay.Player.md#staticstatus)
- [tag](Gameplay.Gameplay.Player.md#tag)
- [transform](Gameplay.Gameplay.Player.md#transform)
- [upVector](Gameplay.Gameplay.Player.md#upvector)
- [useUpdate](Gameplay.Gameplay.Player.md#useupdate)
- [worldLocation](Gameplay.Gameplay.Player.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.Player.md#worldrotation)
- [worldScale](Gameplay.Gameplay.Player.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.Player.md#adddestroycallback)
- [addNetworkDisconnectListener](Gameplay.Gameplay.Player.md#addnetworkdisconnectlistener)
- [addNetworkReconnectListener](Gameplay.Gameplay.Player.md#addnetworkreconnectlistener)
- [asyncGetScriptByName](Gameplay.Gameplay.Player.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.Player.md#attachtogameobject)
- [clone](Gameplay.Gameplay.Player.md#clone)
- [convertScreenLocationToWorldSpace](Gameplay.Gameplay.Player.md#convertscreenlocationtoworldspace)
- [deleteDestroyCallback](Gameplay.Gameplay.Player.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.Player.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.Player.md#detachfromgameobject)
- [getAccount](Gameplay.Gameplay.Player.md#getaccount)
- [getBoundingBoxSize](Gameplay.Gameplay.Player.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.Player.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.Player.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.Player.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.Player.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.Player.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.Player.md#getcollision)
- [getCustomTimeDilation](Gameplay.Gameplay.Player.md#getcustomtimedilation)
- [getForwardVector](Gameplay.Gameplay.Player.md#getforwardvector)
- [getPlayerID](Gameplay.Gameplay.Player.md#getplayerid)
- [getRelativeLocation](Gameplay.Gameplay.Player.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.Player.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.Player.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.Player.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.Player.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.Player.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.Player.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.Player.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.Player.md#gettransform)
- [getUpVector](Gameplay.Gameplay.Player.md#getupvector)
- [getUserSystemId](Gameplay.Gameplay.Player.md#getusersystemid)
- [getWorldLocation](Gameplay.Gameplay.Player.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.Player.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.Player.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.Player.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.Player.md#ondestroy)
- [onStart](Gameplay.Gameplay.Player.md#onstart)
- [onUpdate](Gameplay.Gameplay.Player.md#onupdate)
- [ping](Gameplay.Gameplay.Player.md#ping)
- [projectWorldLocationToWidgetPosition](Gameplay.Gameplay.Player.md#projectworldlocationtowidgetposition)
- [ready](Gameplay.Gameplay.Player.md#ready)
- [removeNetworkDisconnectListener](Gameplay.Gameplay.Player.md#removenetworkdisconnectlistener)
- [removeNetworkReconnectListener](Gameplay.Gameplay.Player.md#removenetworkreconnectlistener)
- [setCollision](Gameplay.Gameplay.Player.md#setcollision)
- [setCustomTimeDilation](Gameplay.Gameplay.Player.md#setcustomtimedilation)
- [setLocationAndRotation](Gameplay.Gameplay.Player.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.Player.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.Player.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.Player.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.Player.md#settransform)
- [setVisibility](Gameplay.Gameplay.Player.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.Player.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.Player.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.Player.md#setworldscale)
- [asyncFind](Gameplay.Gameplay.Player.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.Player.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.Player.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.Player.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.Player.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.Player.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.Player.md#spawngameobject)

## Constructors

### constructor

• **new Player**()

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[constructor](Core.Core.IPlayer.md#constructor)

## Properties

### character

• **character**: [`Character`](Gameplay.Gameplay.Character.md)

**`Description`**

玩家控制的角色

#### Defined in

Gameplay/index.d.ts:1850

## Accessors

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.IPlayer.forwardVector

#### Defined in

Core/index.d.ts:405

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

Core.IPlayer.guid

#### Defined in

Core/index.d.ts:38

---

### isVisible

• `get` **isVisible**(): `boolean`

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.IPlayer.isVisible

#### Defined in

Core/index.d.ts:496

---

### lockState

• `get` **lockState**(): `boolean`

**`Description`**

获取是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.IPlayer.lockState

#### Defined in

Core/index.d.ts:452

• `set` **lockState**(`v`): `void`

**`Description`**

设置是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.IPlayer.lockState

#### Defined in

Core/index.d.ts:447

---

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

#### Inherited from

Core.IPlayer.name

#### Defined in

Core/index.d.ts:167

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description          |
| :----- | :------- | :------------------- |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

Core.IPlayer.name

#### Defined in

Core/index.d.ts:173

---

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

#### Inherited from

Core.IPlayer.netStatus

#### Defined in

Core/index.d.ts:502

---

### parent

• `get` **parent**(): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)

父物体

#### Inherited from

Core.IPlayer.parent

#### Defined in

Core/index.d.ts:458

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                    |
| :---------- | :-------------------------------------- |
| `newParent` | [`GameObject`](Core.Core.GameObject.md) |

#### Returns

`void`

#### Inherited from

Core.IPlayer.parent

#### Defined in

Core/index.d.ts:463

---

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

Core.IPlayer.relativeLocation

#### Defined in

Core/index.d.ts:304

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

Core.IPlayer.relativeLocation

#### Defined in

Core/index.d.ts:310

---

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

Core.IPlayer.relativeRotation

#### Defined in

Core/index.d.ts:330

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

Core.IPlayer.relativeRotation

#### Defined in

Core/index.d.ts:336

---

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

Core.IPlayer.relativeScale

#### Defined in

Core/index.d.ts:356

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放  |

#### Returns

`void`

#### Inherited from

Core.IPlayer.relativeScale

#### Defined in

Core/index.d.ts:362

---

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.IPlayer.rightVector

#### Defined in

Core/index.d.ts:419

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.IPlayer.staticStatus

#### Defined in

Core/index.d.ts:442

---

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的 Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

#### Inherited from

Core.IPlayer.tag

#### Defined in

Core/index.d.ts:185

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | usage:Tag   |

#### Returns

`void`

#### Inherited from

Core.IPlayer.tag

#### Defined in

Core/index.d.ts:179

---

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Inherited from

Core.IPlayer.transform

#### Defined in

Core/index.d.ts:205

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description              |
| :---------- | :------------------------------------ | :----------------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的 transform |

#### Returns

`void`

#### Inherited from

Core.IPlayer.transform

#### Defined in

Core/index.d.ts:211

---

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.IPlayer.upVector

#### Defined in

Core/index.d.ts:392

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.IPlayer.useUpdate

#### Defined in

Core/index.d.ts:437

• `set` **useUpdate**(`v`): `void`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.IPlayer.useUpdate

#### Defined in

Core/index.d.ts:432

---

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.IPlayer.worldLocation

#### Defined in

Core/index.d.ts:230

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.IPlayer.worldLocation

#### Defined in

Core/index.d.ts:235

---

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Inherited from

Core.IPlayer.worldRotation

#### Defined in

Core/index.d.ts:254

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.IPlayer.worldRotation

#### Defined in

Core/index.d.ts:260

---

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.IPlayer.worldScale

#### Defined in

Core/index.d.ts:279

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.IPlayer.worldScale

#### Defined in

Core/index.d.ts:284

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[addDestroyCallback](Core.Core.IPlayer.md#adddestroycallback)

#### Defined in

Core/index.d.ts:616

---

### addNetworkDisconnectListener

▸ **addNetworkDisconnectListener**(`callback`): `void`

**`Description`**

添加网络断开连接时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

如果需要删除回调函数，请不要使用 Lambda 表达式，只对当前 player 生效

**`Example`**

使用示例:调用方法

```
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.addNetworkDisconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name       | Type         | Description              |
| :--------- | :----------- | :----------------------- |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1866

---

### addNetworkReconnectListener

▸ **addNetworkReconnectListener**(`callback`): `void`

**`Description`**

添加网络断开连接后恢复网络时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

如果需要删除回调函数，请不要使用 Lambda 表达式，只对当前 player 生效

**`Example`**

使用示例:调用方法

```
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.addNetworkReconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name       | Type         | Description              |
| :--------- | :----------- | :----------------------- |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1897

---

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[asyncGetScriptByName](Core.Core.IPlayer.md#asyncgetscriptbyname)

#### Defined in

Core/index.d.ts:563

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                                    | Description |
| :---- | :-------------------------------------- | :---------- |
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage:物体  |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[attachToGameObject](Core.Core.IPlayer.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

---

### clone

▸ **clone**(`inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

克隆的对象

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[clone](Core.Core.IPlayer.md#clone)

#### Defined in

Core/index.d.ts:543

---

### convertScreenLocationToWorldSpace

▸ **convertScreenLocationToWorldSpace**(`ScreenX`, `ScreenY`): [`ConvertScreenResult`](Gameplay.Gameplay.ConvertScreenResult.md)

**`Description`**

将二维屏幕位置转换为世界空间三维位置和方向

**`Effect`**

调用端生效

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `ScreenX` | `number` | usage: 屏幕 X 轴坐标值 default: |
| `ScreenY` | `number` | usage: 屏幕 Y 轴坐标值          |

#### Returns

[`ConvertScreenResult`](Gameplay.Gameplay.ConvertScreenResult.md)

屏幕坐标转换结果

#### Defined in

Gameplay/index.d.ts:1938

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[deleteDestroyCallback](Core.Core.IPlayer.md#deletedestroycallback)

#### Defined in

Core/index.d.ts:622

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[destroy](Core.Core.IPlayer.md#destroy)

#### Defined in

Core/index.d.ts:146

---

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[detachFromGameObject](Core.Core.IPlayer.md#detachfromgameobject)

#### Defined in

Core/index.d.ts:588

---

### getAccount

▸ **getAccount**(): `string`

**`Description`**

获取玩家账户

**`Effect`**

只在客户端调用生效

#### Returns

`string`

玩家账户

#### Defined in

Gameplay/index.d.ts:1970

---

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name                      | Type                            | Description                                        |
| :------------------------ | :------------------------------ | :------------------------------------------------- |
| `nonColliding?`           | `boolean`                       | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | usage:如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getBoundingBoxSize](Core.Core.IPlayer.md#getboundingboxsize)

#### Defined in

Core/index.d.ts:598

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 Gameobject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 Gameobject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 Gameobject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getBounds](Core.Core.IPlayer.md#getbounds)

#### Defined in

Core/index.d.ts:194

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getChildByGuid](Core.Core.IPlayer.md#getchildbyguid)

#### Defined in

Core/index.d.ts:536

---

### getChildByName

▸ **getChildByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名称  |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getChildByName](Core.Core.IPlayer.md#getchildbyname)

#### Defined in

Core/index.d.ts:529

---

### getChildren

▸ **getChildren**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取 Children 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array\<GameObject\>

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getChildren](Core.Core.IPlayer.md#getchildren)

#### Defined in

Core/index.d.ts:522

---

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getChildrenBoxCenter](Core.Core.IPlayer.md#getchildrenboxcenter)

#### Defined in

Core/index.d.ts:610

---

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getCollision](Core.Core.IPlayer.md#getcollision)

#### Defined in

Core/index.d.ts:480

---

### getCustomTimeDilation

▸ **getCustomTimeDilation**(): `number`

**`Description`**

获取对象膨胀时间速度

**`Effect`**

调用端生效

#### Returns

`number`

膨胀时间速度

#### Defined in

Gameplay/index.d.ts:1964

---

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getForwardVector](Core.Core.IPlayer.md#getforwardvector)

#### Defined in

Core/index.d.ts:413

---

### getPlayerID

▸ **getPlayerID**(): `number`

**`Description`**

获取当前游戏内的玩家 Id，用于和其它玩家区分。不能用于查询用户信息。

**`Effect`**

调用端生效

#### Returns

`number`

当前游戏内的玩家 Id

#### Overrides

[IPlayer](Core.Core.IPlayer.md).[getPlayerID](Core.Core.IPlayer.md#getplayerid)

#### Defined in

Gameplay/index.d.ts:1918

---

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getRelativeLocation](Core.Core.IPlayer.md#getrelativelocation)

#### Defined in

Core/index.d.ts:318

---

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getRelativeRotation](Core.Core.IPlayer.md#getrelativerotation)

#### Defined in

Core/index.d.ts:344

---

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getRelativeScale](Core.Core.IPlayer.md#getrelativescale)

#### Defined in

Core/index.d.ts:370

---

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getRightVector](Core.Core.IPlayer.md#getrightvector)

#### Defined in

Core/index.d.ts:427

---

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`Script`

Script

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getScriptByGuid](Core.Core.IPlayer.md#getscriptbyguid)

#### Defined in

Core/index.d.ts:570

---

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Script`

Script

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getScriptByName](Core.Core.IPlayer.md#getscriptbyname)

#### Defined in

Core/index.d.ts:556

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array\<Script\>

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getScripts](Core.Core.IPlayer.md#getscripts)

#### Defined in

Core/index.d.ts:549

---

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的 GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的 GUID

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getSourceAssetGuid](Core.Core.IPlayer.md#getsourceassetguid)

#### Defined in

Core/index.d.ts:628

---

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                  | Description                                      |
| :------- | :------------------------------------ | :----------------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getTransform](Core.Core.IPlayer.md#gettransform)

#### Defined in

Core/index.d.ts:219

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getUpVector](Core.Core.IPlayer.md#getupvector)

#### Defined in

Core/index.d.ts:399

---

### getUserSystemId

▸ **getUserSystemId**(): `string`

**`Description`**

获取用户系统的玩家 Id

**`Effect`**

调用端生效

#### Returns

`string`

用户系统的玩家 Id，可以用于查询用户信息。

#### Defined in

Gameplay/index.d.ts:1924

---

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getWorldLocation](Core.Core.IPlayer.md#getworldlocation)

#### Defined in

Core/index.d.ts:243

---

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getWorldRotation](Core.Core.IPlayer.md#getworldrotation)

#### Defined in

Core/index.d.ts:268

---

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getWorldScale](Core.Core.IPlayer.md#getworldscale)

#### Defined in

Core/index.d.ts:292

---

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true 为客户端

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[isRunningClient](Core.Core.IPlayer.md#isrunningclient)

#### Defined in

Core/index.d.ts:49

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[onDestroy](Core.Core.IPlayer.md#ondestroy)

#### Defined in

Core/index.d.ts:17

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[onStart](Core.Core.IPlayer.md#onstart)

#### Defined in

Core/index.d.ts:12

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description                  |
| :--- | :------- | :--------------------------- |
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[onUpdate](Core.Core.IPlayer.md#onupdate)

#### Defined in

Core/index.d.ts:23

---

### ping

▸ **ping**(): `number`

**`Description`**

当前 Player 的 Ping 值(-1 时表示获取失败)

**`Effect`**

调用端生效

#### Returns

`number`

以毫秒为单位

#### Defined in

Gameplay/index.d.ts:1930

---

### projectWorldLocationToWidgetPosition

▸ **projectWorldLocationToWidgetPosition**(`worldLocation`, `playerViewportRelative`): [`ConvertScreenResult`](Gameplay.Gameplay.ConvertScreenResult.md)

**`Description`**

获取角色在世界中的位置，投射到屏幕上

**`Effect`**

调用端生效

#### Parameters

| Name                     | Type                            | Description                                                                                     |
| :----------------------- | :------------------------------ | :---------------------------------------------------------------------------------------------- |
| `worldLocation`          | [`Vector`](Type.Type.Vector.md) | usage: 世界坐标                                                                                 |
| `playerViewportRelative` | `boolean`                       | usage: 这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用） |

#### Returns

[`ConvertScreenResult`](Gameplay.Gameplay.ConvertScreenResult.md)

屏幕坐标转换结果，无 WorldDirection，为默认值 Type.Vector.ZERO

#### Defined in

Gameplay/index.d.ts:1949

---

### ready

▸ **ready**(): `Promise`<[`Player`](Gameplay.Gameplay.Player.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`Player`](Gameplay.Gameplay.Player.md)\>

准备好的对象

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[ready](Core.Core.IPlayer.md#ready)

#### Defined in

Core/index.d.ts:122

---

### removeNetworkDisconnectListener

▸ **removeNetworkDisconnectListener**(`callback`): `void`

**`Description`**

移除网络断开连接时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Example`**

使用示例:调用方法

```
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.removeNetworkDisconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name       | Type         | Description                |
| :--------- | :----------- | :------------------------- |
| `callback` | () => `void` | usage:不需要触发的回调函数 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1881

---

### removeNetworkReconnectListener

▸ **removeNetworkReconnectListener**(`callback`): `void`

**`Description`**

移除网络断开连接后恢复网络时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Example`**

使用示例:调用方法

```
Gameplay.asyncGetCurrentPlayer().then((player) => {
    player.removeNetworkReconnectListener(this.testFunction);
});
public testFunction() {
}
```

#### Parameters

| Name       | Type         | Description                |
| :--------- | :----------- | :------------------------- |
| `callback` | () => `void` | usage:不需要触发的回调函数 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1912

---

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name                   | Type                                                                                                                   | Description                                                      |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | usage: 是否传递给子节点 default: false                           |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setCollision](Core.Core.IPlayer.md#setcollision)

#### Defined in

Core/index.d.ts:471

---

### setCustomTimeDilation

▸ **setCustomTimeDilation**(`Time`): `void`

**`Description`**

设置对象膨胀时间速度说明：对象膨胀速度默认为 1，当膨胀时间速度设置小于 1 时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值 0.1。

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description     |
| :----- | :------- | :-------------- |
| `Time` | `number` | usage: 膨胀倍数 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1958

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description    |
| :--------- | :---------------------------------- | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setLocationAndRotation](Core.Core.IPlayer.md#setlocationandrotation)

#### Defined in

Core/index.d.ts:383

---

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setRelativeLocation](Core.Core.IPlayer.md#setrelativelocation)

#### Defined in

Core/index.d.ts:324

---

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setRelativeRotation](Core.Core.IPlayer.md#setrelativerotation)

#### Defined in

Core/index.d.ts:350

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description            |
| :------ | :------------------------------ | :--------------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setRelativeScale](Core.Core.IPlayer.md#setrelativescale)

#### Defined in

Core/index.d.ts:376

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description     |
| :---------- | :------------------------------------ | :-------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setTransform](Core.Core.IPlayer.md#settransform)

#### Defined in

Core/index.d.ts:225

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置 GameObject 是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                         |
| :--------------------- | :------------------------------------------------------- | :---------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态                          |
| `propagateToChildren?` | `boolean`                                                | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setVisibility](Core.Core.IPlayer.md#setvisibility)

#### Defined in

Core/index.d.ts:487

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description             |
| :--- | :------------------------------ | :---------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setWorldLocation](Core.Core.IPlayer.md#setworldlocation)

#### Defined in

Core/index.d.ts:249

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setWorldRotation](Core.Core.IPlayer.md#setworldrotation)

#### Defined in

Core/index.d.ts:274

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description            |
| :--- | :------------------------------ | :--------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[setWorldScale](Core.Core.IPlayer.md#setworldscale)

#### Defined in

Core/index.d.ts:298

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

通过 guid 异步查找 Gamobject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

Guid 对应的物体

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[asyncFind](Core.Core.IPlayer.md#asyncfind)

#### Defined in

Core/index.d.ts:161

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

构造的 GameObject

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[asyncSpawnGameObject](Core.Core.IPlayer.md#asyncspawngameobject)

#### Defined in

Core/index.d.ts:138

---

### find

▸ `Static` **find**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过 Guid 查找 Gameobject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

Guid 对应的物体

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[find](Core.Core.IPlayer.md#find)

#### Defined in

Core/index.d.ts:153

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array\<GameObject\>

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[findGameObjectByTag](Core.Core.IPlayer.md#findgameobjectbytag)

#### Defined in

Core/index.d.ts:577

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getGameObjectByName](Core.Core.IPlayer.md#getgameobjectbyname)

#### Defined in

Core/index.d.ts:516

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

返回所有查找到的对象

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[getGameObjectsByName](Core.Core.IPlayer.md#getgameobjectsbyname)

#### Defined in

Core/index.d.ts:509

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

构造的 GameObject

#### Inherited from

[IPlayer](Core.Core.IPlayer.md).[spawnGameObject](Core.Core.IPlayer.md#spawngameobject)

#### Defined in

Core/index.d.ts:130
