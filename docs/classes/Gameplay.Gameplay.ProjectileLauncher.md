[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / ProjectileLauncher

# Class: ProjectileLauncher

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).ProjectileLauncher

**`Description`**

投掷物 v2

**`Author`**

jun.zhang

**`Network Status`**

usage: 双端

**`Precautions`**

此类遵循规则：getter/setter 方法仅做简单的 get/set，不能进行其他任何类似 RPC、循环、事件派发等较复杂的操作

## Hierarchy

- `GameObject`

  ↳ **`ProjectileLauncher`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.ProjectileLauncher.md#constructor)

### Properties

- [onProjectileDestroy](Gameplay.Gameplay.ProjectileLauncher.md#onprojectiledestroy)
- [onProjectileHit](Gameplay.Gameplay.ProjectileLauncher.md#onprojectilehit)
- [onProjectileSpawned](Gameplay.Gameplay.ProjectileLauncher.md#onprojectilespawned)

### Accessors

- [acceleration](Gameplay.Gameplay.ProjectileLauncher.md#acceleration)
- [accelerationEnable](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenable)
- [accelerationEnableDistance](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenabledistance)
- [accelerationEnableMode](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenablemode)
- [accelerationEnableTime](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenabletime)
- [collisionLossCoefficient](Gameplay.Gameplay.ProjectileLauncher.md#collisionlosscoefficient)
- [collisionMode](Gameplay.Gameplay.ProjectileLauncher.md#collisionmode)
- [detectionRadius](Gameplay.Gameplay.ProjectileLauncher.md#detectionradius)
- [forwardVector](Gameplay.Gameplay.ProjectileLauncher.md#forwardvector)
- [gravitationalAcceleration](Gameplay.Gameplay.ProjectileLauncher.md#gravitationalacceleration)
- [gravityEnable](Gameplay.Gameplay.ProjectileLauncher.md#gravityenable)
- [gravityEnableDistance](Gameplay.Gameplay.ProjectileLauncher.md#gravityenabledistance)
- [gravityEnableMode](Gameplay.Gameplay.ProjectileLauncher.md#gravityenablemode)
- [gravityEnableTime](Gameplay.Gameplay.ProjectileLauncher.md#gravityenabletime)
- [guid](Gameplay.Gameplay.ProjectileLauncher.md#guid)
- [initialSpeed](Gameplay.Gameplay.ProjectileLauncher.md#initialspeed)
- [isAutoDestroy](Gameplay.Gameplay.ProjectileLauncher.md#isautodestroy)
- [launchDirection](Gameplay.Gameplay.ProjectileLauncher.md#launchdirection)
- [lifeSpan](Gameplay.Gameplay.ProjectileLauncher.md#lifespan)
- [lockStatus](Gameplay.Gameplay.ProjectileLauncher.md#lockstatus)
- [maxCollisionTimes](Gameplay.Gameplay.ProjectileLauncher.md#maxcollisiontimes)
- [maxSpeed](Gameplay.Gameplay.ProjectileLauncher.md#maxspeed)
- [name](Gameplay.Gameplay.ProjectileLauncher.md#name)
- [netStatus](Gameplay.Gameplay.ProjectileLauncher.md#netstatus)
- [parent](Gameplay.Gameplay.ProjectileLauncher.md#parent)
- [range](Gameplay.Gameplay.ProjectileLauncher.md#range)
- [relativeLocation](Gameplay.Gameplay.ProjectileLauncher.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.ProjectileLauncher.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.ProjectileLauncher.md#relativescale)
- [rightVector](Gameplay.Gameplay.ProjectileLauncher.md#rightvector)
- [startLocation](Gameplay.Gameplay.ProjectileLauncher.md#startlocation)
- [staticStatus](Gameplay.Gameplay.ProjectileLauncher.md#staticstatus)
- [tag](Gameplay.Gameplay.ProjectileLauncher.md#tag)
- [traceLineStyle](Gameplay.Gameplay.ProjectileLauncher.md#tracelinestyle)
- [transform](Gameplay.Gameplay.ProjectileLauncher.md#transform)
- [upVector](Gameplay.Gameplay.ProjectileLauncher.md#upvector)
- [useUpdate](Gameplay.Gameplay.ProjectileLauncher.md#useupdate)
- [visible](Gameplay.Gameplay.ProjectileLauncher.md#visible)
- [worldLocation](Gameplay.Gameplay.ProjectileLauncher.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.ProjectileLauncher.md#worldrotation)
- [worldScale](Gameplay.Gameplay.ProjectileLauncher.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.ProjectileLauncher.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.ProjectileLauncher.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.ProjectileLauncher.md#attachtogameobject)
- [bindPlayer](Gameplay.Gameplay.ProjectileLauncher.md#bindplayer)
- [clone](Gameplay.Gameplay.ProjectileLauncher.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.ProjectileLauncher.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.ProjectileLauncher.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.ProjectileLauncher.md#detachfromgameobject)
- [drawPredictedTrajectory](Gameplay.Gameplay.ProjectileLauncher.md#drawpredictedtrajectory)
- [getBoundingBoxSize](Gameplay.Gameplay.ProjectileLauncher.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.ProjectileLauncher.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.ProjectileLauncher.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.ProjectileLauncher.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.ProjectileLauncher.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.ProjectileLauncher.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.ProjectileLauncher.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.ProjectileLauncher.md#getforwardvector)
- [getRelativeLocation](Gameplay.Gameplay.ProjectileLauncher.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.ProjectileLauncher.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.ProjectileLauncher.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.ProjectileLauncher.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.ProjectileLauncher.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.ProjectileLauncher.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.ProjectileLauncher.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.ProjectileLauncher.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.ProjectileLauncher.md#gettransform)
- [getUpVector](Gameplay.Gameplay.ProjectileLauncher.md#getupvector)
- [getVisibility](Gameplay.Gameplay.ProjectileLauncher.md#getvisibility)
- [getWorldLocation](Gameplay.Gameplay.ProjectileLauncher.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.ProjectileLauncher.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.ProjectileLauncher.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.ProjectileLauncher.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.ProjectileLauncher.md#ondestroy)
- [onStart](Gameplay.Gameplay.ProjectileLauncher.md#onstart)
- [onUpdate](Gameplay.Gameplay.ProjectileLauncher.md#onupdate)
- [predictedTrajectory](Gameplay.Gameplay.ProjectileLauncher.md#predictedtrajectory)
- [ready](Gameplay.Gameplay.ProjectileLauncher.md#ready)
- [setCollision](Gameplay.Gameplay.ProjectileLauncher.md#setcollision)
- [setLocationAndRotation](Gameplay.Gameplay.ProjectileLauncher.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.ProjectileLauncher.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.ProjectileLauncher.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.ProjectileLauncher.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.ProjectileLauncher.md#settransform)
- [setVisibility](Gameplay.Gameplay.ProjectileLauncher.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.ProjectileLauncher.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.ProjectileLauncher.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.ProjectileLauncher.md#setworldscale)
- [spawnProjectileInstanceLaunch](Gameplay.Gameplay.ProjectileLauncher.md#spawnprojectileinstancelaunch)
- [spawnProjectileInstanceLaunchToTarget](Gameplay.Gameplay.ProjectileLauncher.md#spawnprojectileinstancelaunchtotarget)
- [unbindPlayer](Gameplay.Gameplay.ProjectileLauncher.md#unbindplayer)
- [asyncFind](Gameplay.Gameplay.ProjectileLauncher.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.ProjectileLauncher.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.ProjectileLauncher.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.ProjectileLauncher.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.ProjectileLauncher.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.ProjectileLauncher.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.ProjectileLauncher.md#spawngameobject)

## Constructors

### constructor

• **new ProjectileLauncher**()

#### Inherited from

Core.GameObject.constructor

## Properties

### onProjectileDestroy

• **onProjectileDestroy**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

投掷物被销毁时触发绑定函数

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

#### Defined in

Gameplay/index.d.ts:13173

---

### onProjectileHit

• **onProjectileHit**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`hitActor`: `GameObject`, `normalImpulse`: [`Vector`](Type.Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md)) => `void`\>

**`Description`**

投掷物击中物体时触发绑定函数

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

#### Defined in

Gameplay/index.d.ts:13162

---

### onProjectileSpawned

• **onProjectileSpawned**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`spawnedInstance`: `GameObject`) => `void`\>

**`Description`**

投掷物生成实例时触发绑定函数，此回调触发时实例还没有开始移动，建议将此函数作为临时附着网格体或特效时使用

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

#### Defined in

Gameplay/index.d.ts:13155

## Accessors

### acceleration

• `get` **acceleration**(): `number`

**`Description`**

加速度值，正值加速，负值减速

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13249

• `set` **acceleration**(`value`): `void`

**`Description`**

加速度值，正值加速，负值减速

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13253

---

### accelerationEnable

• `get` **accelerationEnable**(): `boolean`

**`Description`**

投掷物是否在发射后受加速度影响

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:13241

• `set` **accelerationEnable**(`value`): `void`

**`Description`**

投掷物是否在发射后受加速度影响

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13245

---

### accelerationEnableDistance

• `get` **accelerationEnableDistance**(): `number`

**`Description`**

发射后多长距离后启用加速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13273

• `set` **accelerationEnableDistance**(`value`): `void`

**`Description`**

发射后多长距离后启用加速度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13277

---

### accelerationEnableMode

• `get` **accelerationEnableMode**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

**`Description`**

加速度按照 时间 / 距离 后生效

#### Returns

[`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

#### Defined in

Gameplay/index.d.ts:13257

• `set` **accelerationEnableMode**(`value`): `void`

**`Description`**

加速度按照 时间 / 距离 后生效

#### Parameters

| Name    | Type                                                                                                 |
| :------ | :--------------------------------------------------------------------------------------------------- |
| `value` | [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13261

---

### accelerationEnableTime

• `get` **accelerationEnableTime**(): `number`

**`Description`**

发射后多长时间后启用加速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13265

• `set` **accelerationEnableTime**(`value`): `void`

**`Description`**

发射后多长时间后启用加速度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13269

---

### collisionLossCoefficient

• `get` **collisionLossCoefficient**(): `number`

**`Description`**

投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13337

• `set` **collisionLossCoefficient**(`value`): `void`

**`Description`**

投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13341

---

### collisionMode

• `get` **collisionMode**(): [`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md)

**`Description`**

投掷物碰撞后如何运动：穿透/反弹

#### Returns

[`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md)

#### Defined in

Gameplay/index.d.ts:13321

• `set` **collisionMode**(`value`): `void`

**`Description`**

投掷物碰撞后如何运动：穿透/反弹

#### Parameters

| Name    | Type                                                                               |
| :------ | :--------------------------------------------------------------------------------- |
| `value` | [`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13325

---

### detectionRadius

• `get` **detectionRadius**(): `number`

**`Description`**

投掷物检测碰撞的宽度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13201

• `set` **detectionRadius**(`value`): `void`

**`Description`**

投掷物检测碰撞的宽度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13205

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

#### Inherited from

Core.GameObject.forwardVector

#### Defined in

Core/index.d.ts:409

---

### gravitationalAcceleration

• `get` **gravitationalAcceleration**(): `number`

**`Description`**

重力值，正值重力向下，负值重力向上

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13289

• `set` **gravitationalAcceleration**(`value`): `void`

**`Description`**

重力值，正值重力向下，负值重力向上

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13293

---

### gravityEnable

• `get` **gravityEnable**(): `boolean`

**`Description`**

投掷物是否在发射后受重力影响

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:13281

• `set` **gravityEnable**(`value`): `void`

**`Description`**

投掷物是否在发射后受重力影响

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13285

---

### gravityEnableDistance

• `get` **gravityEnableDistance**(): `number`

**`Description`**

发射后多长距离后启用重力

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13313

• `set` **gravityEnableDistance**(`value`): `void`

**`Description`**

发射后多长距离后启用重力

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13317

---

### gravityEnableMode

• `get` **gravityEnableMode**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

**`Description`**

重力按照 时间 / 距离 后生效

#### Returns

[`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

#### Defined in

Gameplay/index.d.ts:13297

• `set` **gravityEnableMode**(`value`): `void`

**`Description`**

重力按照 时间 / 距离 后生效

#### Parameters

| Name    | Type                                                                                                 |
| :------ | :--------------------------------------------------------------------------------------------------- |
| `value` | [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13301

---

### gravityEnableTime

• `get` **gravityEnableTime**(): `number`

**`Description`**

发射后多长时间后启用重力

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13305

• `set` **gravityEnableTime**(`value`): `void`

**`Description`**

发射后多长时间后启用重力

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13309

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

Core.GameObject.guid

#### Defined in

Core/index.d.ts:39

---

### initialSpeed

• `get` **initialSpeed**(): `number`

**`Description`**

投掷物发射的初始速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13177

• `set` **initialSpeed**(`value`): `void`

**`Description`**

投掷物发射的初始速度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13181

---

### isAutoDestroy

• `get` **isAutoDestroy**(): `boolean`

**`Description`**

投掷物超出有效射程距离或者运动持续时间后自动销毁

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:13225

• `set` **isAutoDestroy**(`value`): `void`

**`Description`**

投掷物超出有效射程距离或者运动持续时间后自动销毁

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13229

---

### launchDirection

• `get` **launchDirection**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

投掷物发射方向

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Defined in

Gameplay/index.d.ts:13217

• `set` **launchDirection**(`value`): `void`

**`Description`**

投掷物发射方向

#### Parameters

| Name    | Type                                |
| :------ | :---------------------------------- |
| `value` | [`Rotation`](Type.Type.Rotation.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13221

---

### lifeSpan

• `get` **lifeSpan**(): `number`

**`Description`**

投掷物运动持续时间，超出后投掷物不再运动。

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13233

• `set` **lifeSpan**(`value`): `void`

**`Description`**

投掷物运动持续时间，超出后投掷物不再运动。

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13237

---

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:456

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

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:451

---

### maxCollisionTimes

• `get` **maxCollisionTimes**(): `number`

**`Description`**

允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13329

• `set` **maxCollisionTimes**(`value`): `void`

**`Description`**

允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13333

---

### maxSpeed

• `get` **maxSpeed**(): `number`

**`Description`**

投掷物发射后的最大速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13185

• `set` **maxSpeed**(`value`): `void`

**`Description`**

投掷物发射后的最大速度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13189

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

Core.GameObject.name

#### Defined in

Core/index.d.ts:171

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

Core.GameObject.name

#### Defined in

Core/index.d.ts:177

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

Core.GameObject.netStatus

#### Defined in

Core/index.d.ts:513

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

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:462

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

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:467

---

### range

• `get` **range**(): `number`

**`Description`**

投掷物有效射程距离，超出后投掷物不再运动。

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13193

• `set` **range**(`value`): `void`

**`Description`**

投掷物有效射程距离，超出后投掷物不再运动。

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13197

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

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:308

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

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:314

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

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:334

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

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:340

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

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:360

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

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:366

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

Core.GameObject.rightVector

#### Defined in

Core/index.d.ts:423

---

### startLocation

• `get` **startLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

投掷物起始位置

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:13209

• `set` **startLocation**(`value`): `void`

**`Description`**

投掷物起始位置

#### Parameters

| Name    | Type                            |
| :------ | :------------------------------ |
| `value` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13213

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:446

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

Core.GameObject.tag

#### Defined in

Core/index.d.ts:189

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

Core.GameObject.tag

#### Defined in

Core/index.d.ts:183

---

### traceLineStyle

• `get` **traceLineStyle**(): [`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md)

**`Description`**

轨迹风格

#### Returns

[`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md)

#### Defined in

Gameplay/index.d.ts:13146

• `set` **traceLineStyle**(`value`): `void`

**`Description`**

轨迹风格

#### Parameters

| Name    | Type                                                                       |
| :------ | :------------------------------------------------------------------------- |
| `value` | [`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13150

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

Core.GameObject.transform

#### Defined in

Core/index.d.ts:209

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

Core.GameObject.transform

#### Defined in

Core/index.d.ts:215

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

Core.GameObject.upVector

#### Defined in

Core/index.d.ts:396

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:441

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

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:436

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

#### Inherited from

Core.GameObject.visible

#### Defined in

Core/index.d.ts:507

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

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:234

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

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:239

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

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:258

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

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:264

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

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:283

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

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:288

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

Core.GameObject.addDestroyCallback

#### Defined in

Core/index.d.ts:627

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

Core.GameObject.asyncGetScriptByName

#### Defined in

Core/index.d.ts:574

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
| `obj` | `GameObject` | usage:物体  |

#### Returns

`void`

#### Inherited from

Core.GameObject.attachToGameObject

#### Defined in

Core/index.d.ts:594

---

### bindPlayer

▸ **bindPlayer**(`player`): `boolean`

**`Description`**

绑定玩家

**`Effect`**

客户端调用自动广播

#### Parameters

| Name     | Type                                    | Description   |
| :------- | :-------------------------------------- | :------------ |
| `player` | [`Player`](Gameplay.Gameplay.Player.md) | usage: 玩家类 |

#### Returns

`boolean`

true：参数 player 有效，绑定成功

#### Defined in

Gameplay/index.d.ts:13099

---

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

#### Inherited from

Core.GameObject.clone

#### Defined in

Core/index.d.ts:554

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

Core.GameObject.deleteDestroyCallback

#### Defined in

Core/index.d.ts:633

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

Core.GameObject.destroy

#### Defined in

Core/index.d.ts:150

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

Core.GameObject.detachFromGameObject

#### Defined in

Core/index.d.ts:599

---

### drawPredictedTrajectory

▸ **drawPredictedTrajectory**(`density?`, `duration?`): `void`

**`Description`**

绘制路径预测的轨迹，调一次开启，掉第二次即关闭，如此循环

**`Precautions`**

如果只绘制了一个点，可能投掷物被卡住了

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description                                             |
| :---------- | :------- | :------------------------------------------------------ |
| `density?`  | `number` | usage: 密度，值越大路径点越密，性能消耗越大 default: 15 |
| `duration?` | `number` | usage: 预测的时长 default: 2                            |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13142

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

Core.GameObject.getBoundingBoxSize

#### Defined in

Core/index.d.ts:609

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 GameObject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

Core.GameObject.getBounds

#### Defined in

Core/index.d.ts:198

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
| `guid` | `string` | usage:guid  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByGuid

#### Defined in

Core/index.d.ts:547

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
| `name` | `string` | usage:名称  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByName

#### Defined in

Core/index.d.ts:540

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

#### Inherited from

Core.GameObject.getChildren

#### Defined in

Core/index.d.ts:533

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

Core.GameObject.getChildrenBoxCenter

#### Defined in

Core/index.d.ts:621

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

Core.GameObject.getCollision

#### Defined in

Core/index.d.ts:484

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

Core.GameObject.getForwardVector

#### Defined in

Core/index.d.ts:417

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

Core.GameObject.getRelativeLocation

#### Defined in

Core/index.d.ts:322

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

Core.GameObject.getRelativeRotation

#### Defined in

Core/index.d.ts:348

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

Core.GameObject.getRelativeScale

#### Defined in

Core/index.d.ts:374

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

Core.GameObject.getRightVector

#### Defined in

Core/index.d.ts:431

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

Core.GameObject.getScriptByGuid

#### Defined in

Core/index.d.ts:581

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

Core.GameObject.getScriptByName

#### Defined in

Core/index.d.ts:567

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

#### Inherited from

Core.GameObject.getScripts

#### Defined in

Core/index.d.ts:560

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

Core.GameObject.getSourceAssetGuid

#### Defined in

Core/index.d.ts:639

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

Core.GameObject.getTransform

#### Defined in

Core/index.d.ts:223

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

Core.GameObject.getUpVector

#### Defined in

Core/index.d.ts:403

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

#### Inherited from

Core.GameObject.getVisibility

#### Defined in

Core/index.d.ts:490

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

Core.GameObject.getWorldLocation

#### Defined in

Core/index.d.ts:247

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

Core.GameObject.getWorldRotation

#### Defined in

Core/index.d.ts:272

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

Core.GameObject.getWorldScale

#### Defined in

Core/index.d.ts:296

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

Core.GameObject.isRunningClient

#### Defined in

Core/index.d.ts:50

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

Core.GameObject.onDestroy

#### Defined in

Core/index.d.ts:18

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

Core.GameObject.onStart

#### Defined in

Core/index.d.ts:13

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

Core.GameObject.onUpdate

#### Defined in

Core/index.d.ts:24

---

### predictedTrajectory

▸ **predictedTrajectory**(`density`, `duration`): [`Vector`](Type.Type.Vector.md)[]

**`Description`**

获取路径预测的轨迹

**`Effect`**

调用端生效

**`Precautions`**

如果返回的数组长度为 1，可能投掷物被卡住了

#### Parameters

| Name       | Type     | Description                                 |
| :--------- | :------- | :------------------------------------------ |
| `density`  | `number` | usage: 密度，值越大路径点越细，性能消耗越大 |
| `duration` | `number` | usage: 预测的时长                           |

#### Returns

[`Vector`](Type.Type.Vector.md)[]

路径轨迹点

#### Defined in

Gameplay/index.d.ts:13134

---

### ready

▸ **ready**(): `Promise`<[`ProjectileLauncher`](Gameplay.Gameplay.ProjectileLauncher.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`ProjectileLauncher`](Gameplay.Gameplay.ProjectileLauncher.md)\>

准备好的对象

#### Inherited from

Core.GameObject.ready

#### Defined in

Core/index.d.ts:126

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

Core.GameObject.setCollision

#### Defined in

Core/index.d.ts:475

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

Core.GameObject.setLocationAndRotation

#### Defined in

Core/index.d.ts:387

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

Core.GameObject.setRelativeLocation

#### Defined in

Core/index.d.ts:328

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

Core.GameObject.setRelativeRotation

#### Defined in

Core/index.d.ts:354

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

Core.GameObject.setRelativeScale

#### Defined in

Core/index.d.ts:380

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

Core.GameObject.setTransform

#### Defined in

Core/index.d.ts:229

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

Core.GameObject.setVisibility

#### Defined in

Core/index.d.ts:497

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

Core.GameObject.setWorldLocation

#### Defined in

Core/index.d.ts:253

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

Core.GameObject.setWorldRotation

#### Defined in

Core/index.d.ts:278

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

Core.GameObject.setWorldScale

#### Defined in

Core/index.d.ts:302

---

### spawnProjectileInstanceLaunch

▸ **spawnProjectileInstanceLaunch**(): [`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md)

**`Description`**

发射子弹实例

**`Precautions`**

发射后再更新其他属性无法对本次发射的子弹产生影响；允许重复发射，注意服务端发射时，返回的值是无效的

**`Effect`**

调用端生效

#### Returns

[`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md)

投掷物 v2 实例

#### Defined in

Gameplay/index.d.ts:13111

---

### spawnProjectileInstanceLaunchToTarget

▸ **spawnProjectileInstanceLaunchToTarget**(`location`, `time?`, `speed?`): [`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md)

**`Description`**

发射子弹实例

**`Precautions`**

发射后再更新其他属性无法对本次发射的子弹产生影响；允许重复发送

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description                  |
| :--------- | :------------------------------ | :--------------------------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage: 发射位置              |
| `time?`    | `number`                        | usage:最大飞行时长 default:5 |
| `speed?`   | `number`                        | usage:初始速度 default:1000  |

#### Returns

[`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md)

投掷物 v2 实例

#### Defined in

Gameplay/index.d.ts:13121

---

### unbindPlayer

▸ **unbindPlayer**(): `void`

**`Description`**

解绑玩家

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13104

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`<`GameObject`\>

Guid 对应的物体

#### Inherited from

Core.GameObject.asyncFind

#### Defined in

Core/index.d.ts:165

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

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

`Promise`<`GameObject`\>

构造的 GameObject

#### Inherited from

Core.GameObject.asyncSpawnGameObject

#### Defined in

Core/index.d.ts:142

---

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过 Guid 查找 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

`GameObject`

Guid 对应的物体

#### Inherited from

Core.GameObject.find

#### Defined in

Core/index.d.ts:157

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.findGameObjectByTag

#### Defined in

Core/index.d.ts:588

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

Core.GameObject.getGameObjectByName

#### Defined in

Core/index.d.ts:527

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

#### Inherited from

Core.GameObject.getGameObjectsByName

#### Defined in

Core/index.d.ts:520

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

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

`GameObject`

构造的 GameObject

#### Inherited from

Core.GameObject.spawnGameObject

#### Defined in

Core/index.d.ts:134
