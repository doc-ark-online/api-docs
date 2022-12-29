[Gameplay](../modules/Gameplay.Gameplay.md) / Projectile

# Projectile <Badge type="tip" text="Class" />

**`Description`**

投掷物逻辑对象

## Hierarchy

- `GameObject`

  ↳ **`Projectile`**

## Table of contents

| Properties                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[onProjectileBeginOverlap](Gameplay.Gameplay.Projectile.md#onprojectilebeginoverlap)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `otherBodyIndex`: `number`, `fromSweep`: `boolean`, `sweepResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md)) => `void`\> <br> 当投掷物与其他物体开始接触重叠时执行绑定函数 |
| **[onProjectileBounce](Gameplay.Gameplay.Projectile.md#onprojectilebounce)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`impactResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md), `impactVelocity`: [`Vector`](Type.Type.Vector.md), `bounceNum`: `number`) => `void`\> <br> 当投掷物发生弹跳时执行绑定函数                                   |
| **[onProjectileEndOverlap](Gameplay.Gameplay.Projectile.md#onprojectileendoverlap)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `otherBodyIndex`: `number`) => `void`\> <br> 当投掷物与其他物体结束接触重叠时执行绑定函数                                                                                           |
| **[onProjectileHit](Gameplay.Gameplay.Projectile.md#onprojectilehit)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `normalImpulse`: [`Vector`](Type.Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md)) => `void`\> <br> 当投掷物发生碰撞时执行绑定函数                                     |
| **[onProjectileInterrupt](Gameplay.Gameplay.Projectile.md#onprojectileinterrupt)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 当投掷物自动终止时执行绑定函数                                                                                                                                                                    |

| Accessors                                                                                                                              |
| :------------------------------------------------------------------------------------------------------------------------------------- |
| **[collisionLength](Gameplay.Gameplay.Projectile.md#collisionlength)**(): `number` <br> 包围盒高度                                     |
| **[collisionRadius](Gameplay.Gameplay.Projectile.md#collisionradius)**(): `number` <br> 包围盒半径                                     |
| **[flyRange](Gameplay.Gameplay.Projectile.md#flyrange)**(): `number` <br> 飞行距离                                                     |
| **[forwardVector](Gameplay.Gameplay.Projectile.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量      |
| **[gravityScale](Gameplay.Gameplay.Projectile.md#gravityscale)**(): `number` <br> 重力缩放值                                           |
| **[guid](Gameplay.Gameplay.Projectile.md#guid)**(): `string` <br> 获取对象的 guid（唯一标识一个对象的字符串）。                        |
| **[initialSpeed](Gameplay.Gameplay.Projectile.md#initialspeed)**(): `number` <br> 初始速度                                             |
| **[lockStatus](Gameplay.Gameplay.Projectile.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定                                        |
| **[maxBounceCount](Gameplay.Gameplay.Projectile.md#maxbouncecount)**(): `number` <br> 最大弹跳                                         |
| **[name](Gameplay.Gameplay.Projectile.md#name)**(): `string` <br> 返回当前物体名称                                                     |
| **[netStatus](Gameplay.Gameplay.Projectile.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态 |
| **[parent](Gameplay.Gameplay.Projectile.md#parent)**(): `GameObject` <br> 获取当前父物体                                               |
| **[relativeLocation](Gameplay.Gameplay.Projectile.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置          |
| **[relativeRotation](Gameplay.Gameplay.Projectile.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转      |
| **[relativeScale](Gameplay.Gameplay.Projectile.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放                |
| **[rightVector](Gameplay.Gameplay.Projectile.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量          |
| **[simulatePhysics](Gameplay.Gameplay.Projectile.md#simulatephysics)**(): `boolean` <br> 模拟物理                                      |
| **[staticStatus](Gameplay.Gameplay.Projectile.md#staticstatus)**(): `boolean` <br> 获取对象是否静态                                    |
| **[tag](Gameplay.Gameplay.Projectile.md#tag)**(): `string` <br> 获取当前物体的 Tag                                                     |
| **[transform](Gameplay.Gameplay.Projectile.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体 transform        |
| **[upVector](Gameplay.Gameplay.Projectile.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量                |
| **[useUpdate](Gameplay.Gameplay.Projectile.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新                                      |
| **[visible](Gameplay.Gameplay.Projectile.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api 重构 replacement:getVisibility()     |
| **[worldLocation](Gameplay.Gameplay.Projectile.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标          |
| **[worldRotation](Gameplay.Gameplay.Projectile.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转      |
| **[worldScale](Gameplay.Gameplay.Projectile.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放                |

| Methods                                                                                                                                                                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addDestroyCallback](Gameplay.Gameplay.Projectile.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体 Destroy 事件回调                                                                   |
| **[asyncGetScriptByName](Gameplay.Gameplay.Projectile.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系                                                  |
| **[attachToGameObject](Gameplay.Gameplay.Projectile.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上                                                                                           |
| **[bindPlayer](Gameplay.Gameplay.Projectile.md#bindplayer)**([`Player`](Gameplay.Gameplay.Player.md)): `boolean` <br> 绑定玩家，需要使用该接口在 Server 绑定具体的 Player                                                |
| **[clone](Gameplay.Gameplay.Projectile.md#clone)**(`boolean`): `GameObject` <br> 复制对象                                                                                                                                |
| **[deleteDestroyCallback](Gameplay.Gameplay.Projectile.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体 Destroy 事件回调                                                             |
| **[destroy](Gameplay.Gameplay.Projectile.md#destroy)**(): `void` <br> 删除对象                                                                                                                                           |
| **[detachFromGameObject](Gameplay.Gameplay.Projectile.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离                                                                                             |
| **[getBoundingBoxSize](Gameplay.Gameplay.Projectile.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小                             |
| **[getBounds](Gameplay.Gameplay.Projectile.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取 GameObject 边界                                     |
| **[getChildByGuid](Gameplay.Gameplay.Projectile.md#getchildbyguid)**(`string`): `GameObject` <br> 根据 Guid 查找子物体                                                                                                   |
| **[getChildByName](Gameplay.Gameplay.Projectile.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体                                                                                                     |
| **[getChildren](Gameplay.Gameplay.Projectile.md#getchildren)**(): `GameObject`[] <br> 获取 Children，客户端不维系父子关系。推荐使用 Find 替代                                                                            |
| **[getChildrenBoxCenter](Gameplay.Gameplay.Projectile.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0]) |
| **[getCollision](Gameplay.Gameplay.Projectile.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态             |
| **[getForwardVector](Gameplay.Gameplay.Projectile.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量                                                   |
| **[getRelativeLocation](Gameplay.Gameplay.Projectile.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置                                                       |
| **[getRelativeRotation](Gameplay.Gameplay.Projectile.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转                                               |
| **[getRelativeScale](Gameplay.Gameplay.Projectile.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放                                                             |
| **[getRightVector](Gameplay.Gameplay.Projectile.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量                                                       |
| **[getScriptByGuid](Gameplay.Gameplay.Projectile.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代                                                         |
| **[getScriptByName](Gameplay.Gameplay.Projectile.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代                                                         |
| **[getScripts](Gameplay.Gameplay.Projectile.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代                                                                         |
| **[getSourceAssetGuid](Gameplay.Gameplay.Projectile.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的 GUID                                                                                                |
| **[getTransform](Gameplay.Gameplay.Projectile.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体 Transform                                               |
| **[getUpVector](Gameplay.Gameplay.Projectile.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量                                                             |
| **[getVisibility](Gameplay.Gameplay.Projectile.md#getvisibility)**(): `boolean` <br> 获取 GameObject 是否被显示                                                                                                          |
| **[getWorldLocation](Gameplay.Gameplay.Projectile.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标                                                       |
| **[getWorldRotation](Gameplay.Gameplay.Projectile.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转                                               |
| **[getWorldScale](Gameplay.Gameplay.Projectile.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放                                                             |
| **[init](Gameplay.Gameplay.Projectile.md#init)**(`number`, `number`, `number`, `number`, `number`, `boolean`): `void` <br> 子弹初始化,只有在客户端调用时会自动绑定当前角色                                               |
| **[isRunningClient](Gameplay.Gameplay.Projectile.md#isrunningclient)**(): `boolean` <br> 是否为客户端                                                                                                                    |
| **[launch](Gameplay.Gameplay.Projectile.md#launch)**(): `void` <br> 发射投掷物，将目前射程清零                                                                                                                           |
| **[onDestroy](Gameplay.Gameplay.Projectile.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用                                                                                                                          |
| **[onStart](Gameplay.Gameplay.Projectile.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用                                                                                                                        |
| **[onUpdate](Gameplay.Gameplay.Projectile.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行                                                                       |
| **[pause](Gameplay.Gameplay.Projectile.md#pause)**(): `void` <br> 暂停投掷物                                                                                                                                             |
| **[ready](Gameplay.Gameplay.Projectile.md#ready)**(): `Promise`<[`Projectile`](Gameplay.Gameplay.Projectile.md)\> <br> GameObject 准备好后返回                                                                           |
| **[resume](Gameplay.Gameplay.Projectile.md#resume)**(): `void` <br> 唤醒投掷物                                                                                                                                           |
| **[setCollision](Gameplay.Gameplay.Projectile.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态                                                        |
| **[setLocationAndRotation](Gameplay.Gameplay.Projectile.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转                     |
| **[setRelativeLocation](Gameplay.Gameplay.Projectile.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置                                                                                |
| **[setRelativeRotation](Gameplay.Gameplay.Projectile.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转                                                                            |
| **[setRelativeScale](Gameplay.Gameplay.Projectile.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放                                                                                      |
| **[setTransform](Gameplay.Gameplay.Projectile.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体 transform                                                                              |
| **[setVisibility](Gameplay.Gameplay.Projectile.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置 GameObject 是否被显示                                          |
| **[setWorldLocation](Gameplay.Gameplay.Projectile.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标                                                                                |
| **[setWorldRotation](Gameplay.Gameplay.Projectile.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转                                                                            |
| **[setWorldScale](Gameplay.Gameplay.Projectile.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放                                                                                      |
| **[asyncFind](Gameplay.Gameplay.Projectile.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);                                |
| **[asyncSpawnGameObject](Gameplay.Gameplay.Projectile.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建                            |
| **[find](Gameplay.Gameplay.Projectile.md#find)**(`string`): `GameObject` <br> 通过 Guid 查找 GameObject                                                                                                                  |
| **[findGameObjectByTag](Gameplay.Gameplay.Projectile.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义 Tag 获取 GameObject                                                                             |
| **[getGameObjectByName](Gameplay.Gameplay.Projectile.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体                                                                                             |
| **[getGameObjectsByName](Gameplay.Gameplay.Projectile.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体                                                                                         |
| **[spawnGameObject](Gameplay.Gameplay.Projectile.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject                                                                                       |

## Properties

### onProjectileBeginOverlap

• **onProjectileBeginOverlap**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `otherBodyIndex`: `number`, `fromSweep`: `boolean`, `sweepResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md)) => `void`\>

**`Description`**

当投掷物与其他物体开始接触重叠时执行绑定函数

---

### onProjectileBounce

• **onProjectileBounce**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`impactResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md), `impactVelocity`: [`Vector`](Type.Type.Vector.md), `bounceNum`: `number`) => `void`\>

**`Description`**

当投掷物发生弹跳时执行绑定函数

---

### onProjectileEndOverlap

• **onProjectileEndOverlap**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `otherBodyIndex`: `number`) => `void`\>

**`Description`**

当投掷物与其他物体结束接触重叠时执行绑定函数

---

### onProjectileHit

• **onProjectileHit**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `normalImpulse`: [`Vector`](Type.Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md)) => `void`\>

**`Description`**

当投掷物发生碰撞时执行绑定函数

---

### onProjectileInterrupt

• **onProjectileInterrupt**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

当投掷物自动终止时执行绑定函数

## Accessors

### collisionLength

• `get` **collisionLength**(): `number`

**`Description`**

包围盒高度

#### Returns

`number`

• `set` **collisionLength**(`length`): `void`

**`Description`**

包围盒高度

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `length` | `number` |

#### Returns

`void`

---

### collisionRadius

• `get` **collisionRadius**(): `number`

**`Description`**

包围盒半径

#### Returns

`number`

• `set` **collisionRadius**(`radius`): `void`

**`Description`**

包围盒半径

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `radius` | `number` |

#### Returns

`void`

---

### flyRange

• `get` **flyRange**(): `number`

**`Description`**

飞行距离

#### Returns

`number`

• `set` **flyRange**(`range`): `void`

**`Description`**

飞行距离

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `range` | `number` |

#### Returns

`void`

---

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

---

### gravityScale

• `get` **gravityScale**(): `number`

**`Description`**

重力缩放值

#### Returns

`number`

• `set` **gravityScale**(`scale`): `void`

**`Description`**

重力缩放值

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `scale` | `number` |

#### Returns

`void`

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

---

### initialSpeed

• `get` **initialSpeed**(): `number`

**`Description`**

初始速度

#### Returns

`number`

• `set` **initialSpeed**(`value`): `void`

**`Description`**

初始速度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

---

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

---

### maxBounceCount

• `get` **maxBounceCount**(): `number`

**`Description`**

最大弹跳

#### Returns

`number`

• `set` **maxBounceCount**(`bounceCount`): `void`

**`Description`**

最大弹跳

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `bounceCount` | `number` |

#### Returns

`void`

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

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | 需要设置的名称 |

#### Returns

`void`

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

---

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `newParent` | `GameObject` |

#### Returns

`void`

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

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置        |

#### Returns

`void`

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

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转        |

#### Returns

`void`

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

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | 缩放        |

#### Returns

`void`

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

---

### simulatePhysics

• `get` **simulatePhysics**(): `boolean`

**`Description`**

模拟物理

#### Returns

`boolean`

• `set` **simulatePhysics**(`isSimulated`): `void`

**`Description`**

模拟物理

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `isSimulated` | `boolean` |

#### Returns

`void`

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

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

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | Tag         |

#### Returns

`void`

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

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description        |
| :---------- | :------------------------------------ | :----------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | 要设置的 transform |

#### Returns

`void`

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

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

---

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

---

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

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

---

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description      |
| :--------- | :---------------------------------- | :--------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

---

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

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

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件    |

#### Returns

`void`

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
| `name` | `string` | 名字        |

#### Returns

`Promise`<`Script`\>

Script

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type         | Description |
| :---- | :----------- | :---------- |
| `obj` | `GameObject` | 物体        |

#### Returns

`void`

---

### bindPlayer

▸ **bindPlayer**(`player`): `boolean`

**`Description`**

绑定玩家，需要使用该接口在 Server 绑定具体的 Player

**`Precautions`**

单端调用即可，不需要重复调用。

**`Effect`**

客户端调用自动同步至服务端

#### Parameters

| Name     | Type                                    | Description          |
| :------- | :-------------------------------------- | :------------------- |
| `player` | [`Player`](Gameplay.Gameplay.Player.md) | 需要使用投掷物的角色 |

#### Returns

`boolean`

当有对内部玩家进行赋值时，返回 true

---

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description           |
| :-------------- | :-------- | :-------------------- |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件    |

#### Returns

`void`

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

---

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

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

| Name                      | Type                            | Description                                  |
| :------------------------ | :------------------------------ | :------------------------------------------- |
| `nonColliding?`           | `boolean`                       | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | 如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 GameObject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                |
| :------------------------ | :------------------------------ | :----------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | 是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为 GameObject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为 GameObject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | 是否递归包含子物体 default:undefined       |

#### Returns

`void`

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | guid        |

#### Returns

`GameObject`

查找的物体

---

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 名称        |

#### Returns

`GameObject`

查找的物体

---

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取 Children，客户端不维系父子关系。推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

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

| Name     | Type                                | Description                               |
| :------- | :---------------------------------- | :---------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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
| `guid` | `string` | guid        |

#### Returns

`Script`

Script

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
| `name` | `string` | 名字        |

#### Returns

`Script`

Script

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

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

| Name     | Type                                  | Description                                |
| :------- | :------------------------------------ | :----------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

---

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取 GameObject 是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

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

| Name     | Type                                | Description                               |
| :------- | :---------------------------------- | :---------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

---

### init

▸ **init**(`Speed?`, `CollisionLength?`, `CollisionRadius?`, `FlyRange?`, `GravityScale?`, `SimulatePhysics?`): `void`

**`Description`**

子弹初始化,只有在客户端调用时会自动绑定当前角色

**`Effect`**

客户端调用自动广播

#### Parameters

| Name               | Type      | Description                 |
| :----------------- | :-------- | :-------------------------- |
| `Speed?`           | `number`  | 初始速度 default: 1000      |
| `CollisionLength?` | `number`  | 碰撞胶囊长度 default: 0.5   |
| `CollisionRadius?` | `number`  | 碰撞胶囊半径 default: 0.5   |
| `FlyRange?`        | `number`  | 飞行范围 default: 10000     |
| `GravityScale?`    | `number`  | 重力设置 default: 0         |
| `SimulatePhysics?` | `boolean` | 是否模拟物理 default: false |

#### Returns

`void`

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

---

### launch

▸ **launch**(): `void`

**`Description`**

发射投掷物，将目前射程清零

**`Precautions`**

请先 bindPlayer 后再调用
在客户端调用时，如果已经调用过 init 同时更新了当前 player，此函数在一定时间内调用会因 RPC 延时导致失败

**`Effect`**

客户端调用自动广播

#### Returns

`void`

▸ **launch**(`fromLoc`, `toLoc`): `void`

**`Description`**

发射投掷物，将目前射程清零

**`Precautions`**

- 请先 bindPlayer 后再调用
- 在客户端调用时，如果已经调用过 init 同时更新了当前 player，此函数在一定时间内调用会因 RPC 延时导致失败
- 在关闭物理模拟时，会限制最大飞行距离为起点和终点之间的距离；开启物理后，将不限制距离，请注意及时手动停止

**`Effect`**

客户端调用自动广播

#### Parameters

| Name      | Type                            | Description                                                          |
| :-------- | :------------------------------ | :------------------------------------------------------------------- |
| `fromLoc` | [`Vector`](Type.Type.Vector.md) | 发射点                                                               |
| `toLoc`   | [`Vector`](Type.Type.Vector.md) | 目标点（开启物理，有重力时，投掷物呈抛物线运动，不保证能到达目标点） |

#### Returns

`void`

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description            |
| :--- | :------- | :--------------------- |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |

#### Returns

`void`

---

### pause

▸ **pause**(): `void`

**`Description`**

暂停投掷物

**`Effect`**

客户端调用自动广播

#### Returns

`void`

---

### ready

▸ **ready**(): `Promise`<[`Projectile`](Gameplay.Gameplay.Projectile.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`Projectile`](Gameplay.Gameplay.Projectile.md)\>

准备好的对象

---

### resume

▸ **resume**(): `void`

**`Description`**

唤醒投掷物

**`Effect`**

客户端调用自动广播

#### Returns

`void`

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

| Name                   | Type                                                                                                                   | Description                                               |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | 是否传递给子节点 default: false                           |

#### Returns

`void`

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | 世界位置    |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 世界旋转    |

#### Returns

`void`

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
| `location` | [`Vector`](Type.Type.Vector.md) | 位置        |

#### Returns

`void`

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转        |

#### Returns

`void`

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description      |
| :------ | :------------------------------ | :--------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | 要设置的相对缩放 |

#### Returns

`void`

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description |
| :---------- | :------------------------------------ | :---------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | transform   |

#### Returns

`void`

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置 GameObject 是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                  |
| :--------------------- | :------------------------------------------------------- | :--------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态                         |
| `propagateToChildren?` | `boolean`                                                | 是否设置子物体 default:false |

#### Returns

`void`

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description      |
| :--- | :------------------------------ | :--------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | 要设置的世界坐标 |

#### Returns

`void`

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description      |
| :--------- | :---------------------------------- | :--------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description      |
| :--- | :------------------------------ | :--------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | 要设置的世界缩放 |

#### Returns

`void`

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | 物体的 guid |

#### Returns

`Promise`<`GameObject`\>

Guid 对应的物体

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                     |
| :-------------- | :-------- | :------------------------------ |
| `assetId`       | `string`  | 资源的 GUID                     |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的 GameObject

---

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过 Guid 查找 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | 物体的 Guid |

#### Returns

`GameObject`

Guid 对应的物体

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `InTag` | `string` | 自定义 Tag  |

#### Returns

`GameObject`[]

Array`<GameObject>`

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 物体名字    |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 物体名字    |

#### Returns

`GameObject`[]

返回所有查找到的对象

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                     |
| :-------------- | :-------- | :------------------------------ |
| `assetId`       | `string`  | 资源的 GUID                     |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的 GameObject
