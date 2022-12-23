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

此类遵循规则：getter/setter 方法仅做简单的 get/set，不能进行其他任何类似RPC、循环、事件派发等较复杂的操作

## Hierarchy

- [`GameObject`](Core.Core.GameObject.md)

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
- [accelerationEnableDistance](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenabledistance)
- [accelerationEnableMode](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenablemode)
- [accelerationEnableTime](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenabletime)
- [collisionLossCoefficient](Gameplay.Gameplay.ProjectileLauncher.md#collisionlosscoefficient)
- [collisionMode](Gameplay.Gameplay.ProjectileLauncher.md#collisionmode)
- [detectionRadius](Gameplay.Gameplay.ProjectileLauncher.md#detectionradius)
- [forwardVector](Gameplay.Gameplay.ProjectileLauncher.md#forwardvector)
- [gravitationalAcceleration](Gameplay.Gameplay.ProjectileLauncher.md#gravitationalacceleration)
- [gravityEnableDistance](Gameplay.Gameplay.ProjectileLauncher.md#gravityenabledistance)
- [gravityEnableMode](Gameplay.Gameplay.ProjectileLauncher.md#gravityenablemode)
- [gravityEnableTime](Gameplay.Gameplay.ProjectileLauncher.md#gravityenabletime)
- [guid](Gameplay.Gameplay.ProjectileLauncher.md#guid)
- [initialSpeed](Gameplay.Gameplay.ProjectileLauncher.md#initialspeed)
- [isAccelerationEnabled](Gameplay.Gameplay.ProjectileLauncher.md#isaccelerationenabled)
- [isAutoDestroy](Gameplay.Gameplay.ProjectileLauncher.md#isautodestroy)
- [isGravityEnabled](Gameplay.Gameplay.ProjectileLauncher.md#isgravityenabled)
- [isVisible](Gameplay.Gameplay.ProjectileLauncher.md#isvisible)
- [launchDirection](Gameplay.Gameplay.ProjectileLauncher.md#launchdirection)
- [lifeSpan](Gameplay.Gameplay.ProjectileLauncher.md#lifespan)
- [lockState](Gameplay.Gameplay.ProjectileLauncher.md#lockstate)
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

[GameObject](Core.Core.GameObject.md).[constructor](Core.Core.GameObject.md#constructor)

## Properties

### onProjectileDestroy

• **onProjectileDestroy**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

投掷物被销毁时触发绑定函数

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

#### Defined in

Gameplay/index.d.ts:13495

___

### onProjectileHit

• **onProjectileHit**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`hitActor`: [`GameObject`](Core.Core.GameObject.md), `normalImpulse`: [`Vector`](Type.Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md)) => `void`\>

**`Description`**

投掷物击中物体时触发绑定函数

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

#### Defined in

Gameplay/index.d.ts:13484

___

### onProjectileSpawned

• **onProjectileSpawned**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`hitActor`: [`GameObject`](Core.Core.GameObject.md)) => `void`\>

**`Description`**

投掷物生成实例时触发绑定函数，此回调触发时实例还没有开始移动，建议将此函数作为临时附着网格体或特效时使用

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

#### Defined in

Gameplay/index.d.ts:13477

## Accessors

### acceleration

• `get` **acceleration**(): `number`

**`Description`**

加速度值，正值加速，负值减速

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13571

• `set` **acceleration**(`value`): `void`

**`Description`**

加速度值，正值加速，负值减速

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13575

___

### accelerationEnableDistance

• `get` **accelerationEnableDistance**(): `number`

**`Description`**

发射后多长距离后启用加速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13595

• `set` **accelerationEnableDistance**(`value`): `void`

**`Description`**

发射后多长距离后启用加速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13599

___

### accelerationEnableMode

• `get` **accelerationEnableMode**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

**`Description`**

加速度按照 时间 / 距离 后生效

#### Returns

[`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

#### Defined in

Gameplay/index.d.ts:13579

• `set` **accelerationEnableMode**(`value`): `void`

**`Description`**

加速度按照 时间 / 距离 后生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13583

___

### accelerationEnableTime

• `get` **accelerationEnableTime**(): `number`

**`Description`**

发射后多长时间后启用加速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13587

• `set` **accelerationEnableTime**(`value`): `void`

**`Description`**

发射后多长时间后启用加速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13591

___

### collisionLossCoefficient

• `get` **collisionLossCoefficient**(): `number`

**`Description`**

投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13659

• `set` **collisionLossCoefficient**(`value`): `void`

**`Description`**

投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13663

___

### collisionMode

• `get` **collisionMode**(): [`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md)

**`Description`**

投掷物碰撞后如何运动：穿透/反弹

#### Returns

[`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md)

#### Defined in

Gameplay/index.d.ts:13643

• `set` **collisionMode**(`value`): `void`

**`Description`**

投掷物碰撞后如何运动：穿透/反弹

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13647

___

### detectionRadius

• `get` **detectionRadius**(): `number`

**`Description`**

投掷物检测碰撞的宽度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13523

• `set` **detectionRadius**(`value`): `void`

**`Description`**

投掷物检测碰撞的宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13527

___

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

Core/index.d.ts:405

___

### gravitationalAcceleration

• `get` **gravitationalAcceleration**(): `number`

**`Description`**

重力值，正值重力向下，负值重力向上

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13611

• `set` **gravitationalAcceleration**(`value`): `void`

**`Description`**

重力值，正值重力向下，负值重力向上

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13615

___

### gravityEnableDistance

• `get` **gravityEnableDistance**(): `number`

**`Description`**

发射后多长距离后启用重力

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13635

• `set` **gravityEnableDistance**(`value`): `void`

**`Description`**

发射后多长距离后启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13639

___

### gravityEnableMode

• `get` **gravityEnableMode**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

**`Description`**

重力按照 时间 / 距离 后生效

#### Returns

[`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

#### Defined in

Gameplay/index.d.ts:13619

• `set` **gravityEnableMode**(`value`): `void`

**`Description`**

重力按照 时间 / 距离 后生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13623

___

### gravityEnableTime

• `get` **gravityEnableTime**(): `number`

**`Description`**

发射后多长时间后启用重力

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13627

• `set` **gravityEnableTime**(`value`): `void`

**`Description`**

发射后多长时间后启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13631

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

Core.GameObject.guid

#### Defined in

Core/index.d.ts:38

___

### initialSpeed

• `get` **initialSpeed**(): `number`

**`Description`**

投掷物发射的初始速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13499

• `set` **initialSpeed**(`value`): `void`

**`Description`**

投掷物发射的初始速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13503

___

### isAccelerationEnabled

• `get` **isAccelerationEnabled**(): `boolean`

**`Description`**

投掷物是否在发射后受加速度影响

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:13563

• `set` **isAccelerationEnabled**(`value`): `void`

**`Description`**

投掷物是否在发射后受加速度影响

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13567

___

### isAutoDestroy

• `get` **isAutoDestroy**(): `boolean`

**`Description`**

投掷物超出有效射程距离或者运动持续时间后自动销毁

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:13547

• `set` **isAutoDestroy**(`value`): `void`

**`Description`**

投掷物超出有效射程距离或者运动持续时间后自动销毁

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13551

___

### isGravityEnabled

• `get` **isGravityEnabled**(): `boolean`

**`Description`**

投掷物是否在发射后受重力影响

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:13603

• `set` **isGravityEnabled**(`value`): `void`

**`Description`**

投掷物是否在发射后受重力影响

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13607

___

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

Core.GameObject.isVisible

#### Defined in

Core/index.d.ts:496

___

### launchDirection

• `get` **launchDirection**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

投掷物发射方向

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Defined in

Gameplay/index.d.ts:13539

• `set` **launchDirection**(`value`): `void`

**`Description`**

投掷物发射方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Rotation`](Type.Type.Rotation.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13543

___

### lifeSpan

• `get` **lifeSpan**(): `number`

**`Description`**

投掷物运动持续时间，超出后投掷物不再运动。

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13555

• `set` **lifeSpan**(`value`): `void`

**`Description`**

投掷物运动持续时间，超出后投掷物不再运动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13559

___

### lockState

• `get` **lockState**(): `boolean`

**`Description`**

获取是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:452

• `set` **lockState**(`v`): `void`

**`Description`**

设置是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:447

___

### maxCollisionTimes

• `get` **maxCollisionTimes**(): `number`

**`Description`**

允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13651

• `set` **maxCollisionTimes**(`value`): `void`

**`Description`**

允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13655

___

### maxSpeed

• `get` **maxSpeed**(): `number`

**`Description`**

投掷物发射后的最大速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13507

• `set` **maxSpeed**(`value`): `void`

**`Description`**

投掷物发射后的最大速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13511

___

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

Core/index.d.ts:167

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:173

___

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

Core/index.d.ts:502

___

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

Core.GameObject.parent

#### Defined in

Core/index.d.ts:458

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`GameObject`](Core.Core.GameObject.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:463

___

### range

• `get` **range**(): `number`

**`Description`**

投掷物有效射程距离，超出后投掷物不再运动。

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:13515

• `set` **range**(`value`): `void`

**`Description`**

投掷物有效射程距离，超出后投掷物不再运动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13519

___

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

Core/index.d.ts:304

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:310

___

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

Core/index.d.ts:330

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:336

___

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

Core/index.d.ts:356

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:362

___

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

Core/index.d.ts:419

___

### startLocation

• `get` **startLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

投掷物起始位置

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:13531

• `set` **startLocation**(`value`): `void`

**`Description`**

投掷物起始位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13535

___

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:442

___

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:185

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | usage:Tag |

#### Returns

`void`

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:179

___

### traceLineStyle

• `get` **traceLineStyle**(): [`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md)

**`Description`**

轨迹风格

#### Returns

[`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md)

#### Defined in

Gameplay/index.d.ts:13468

• `set` **traceLineStyle**(`value`): `void`

**`Description`**

轨迹风格

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13472

___

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:205

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:211

___

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

Core/index.d.ts:392

___

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:437

• `set` **useUpdate**(`v`): `void`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:432

___

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

Core/index.d.ts:230

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:235

___

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

Core/index.d.ts:254

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:260

___

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

Core/index.d.ts:279

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:284

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[addDestroyCallback](Core.Core.GameObject.md#adddestroycallback)

#### Defined in

Core/index.d.ts:616

___

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名字 |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncGetScriptByName](Core.Core.GameObject.md#asyncgetscriptbyname)

#### Defined in

Core/index.d.ts:563

___

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage:物体 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[attachToGameObject](Core.Core.GameObject.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

___

### bindPlayer

▸ **bindPlayer**(`player`): `boolean`

**`Description`**

绑定玩家

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Gameplay.Gameplay.Player.md) | usage: 玩家类 |

#### Returns

`boolean`

true：参数 player 有效，绑定成功

#### Defined in

Gameplay/index.d.ts:13421

___

### clone

▸ **clone**(`inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

克隆的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[clone](Core.Core.GameObject.md#clone)

#### Defined in

Core/index.d.ts:543

___

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[deleteDestroyCallback](Core.Core.GameObject.md#deletedestroycallback)

#### Defined in

Core/index.d.ts:622

___

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[destroy](Core.Core.GameObject.md#destroy)

#### Defined in

Core/index.d.ts:146

___

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[detachFromGameObject](Core.Core.GameObject.md#detachfromgameobject)

#### Defined in

Core/index.d.ts:588

___

### drawPredictedTrajectory

▸ **drawPredictedTrajectory**(`density?`, `duration?`): `void`

**`Description`**

绘制路径预测的轨迹，调一次开启，掉第二次即关闭，如此循环

**`Precautions`**

如果只绘制了一个点，可能投掷物被卡住了

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `density?` | `number` | usage: 密度，值越大路径点越密，性能消耗越大 default: 15 |
| `duration?` | `number` | usage: 预测的时长 default: 2 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13464

___

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nonColliding?` | `boolean` | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | usage:如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBoundingBoxSize](Core.Core.GameObject.md#getboundingboxsize)

#### Defined in

Core/index.d.ts:598

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取Gameobject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | usage:是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为Gameobject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为Gameobject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | usage:是否递归包含子物体 default:undefined |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBounds](Core.Core.GameObject.md#getbounds)

#### Defined in

Core/index.d.ts:194

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByGuid](Core.Core.GameObject.md#getchildbyguid)

#### Defined in

Core/index.d.ts:536

___

### getChildByName

▸ **getChildByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名称 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByName](Core.Core.GameObject.md#getchildbyname)

#### Defined in

Core/index.d.ts:529

___

### getChildren

▸ **getChildren**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取Children 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array<GameObject>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildren](Core.Core.GameObject.md#getchildren)

#### Defined in

Core/index.d.ts:522

___

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildrenBoxCenter](Core.Core.GameObject.md#getchildrenboxcenter)

#### Defined in

Core/index.d.ts:610

___

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

[GameObject](Core.Core.GameObject.md).[getCollision](Core.Core.GameObject.md#getcollision)

#### Defined in

Core/index.d.ts:480

___

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getForwardVector](Core.Core.GameObject.md#getforwardvector)

#### Defined in

Core/index.d.ts:413

___

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeLocation](Core.Core.GameObject.md#getrelativelocation)

#### Defined in

Core/index.d.ts:318

___

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeRotation](Core.Core.GameObject.md#getrelativerotation)

#### Defined in

Core/index.d.ts:344

___

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeScale](Core.Core.GameObject.md#getrelativescale)

#### Defined in

Core/index.d.ts:370

___

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRightVector](Core.Core.GameObject.md#getrightvector)

#### Defined in

Core/index.d.ts:427

___

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:guid |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByGuid](Core.Core.GameObject.md#getscriptbyguid)

#### Defined in

Core/index.d.ts:570

___

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名字 |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByName](Core.Core.GameObject.md#getscriptbyname)

#### Defined in

Core/index.d.ts:556

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array<Script>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScripts](Core.Core.GameObject.md#getscripts)

#### Defined in

Core/index.d.ts:549

___

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的GUID

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getSourceAssetGuid](Core.Core.GameObject.md#getsourceassetguid)

#### Defined in

Core/index.d.ts:628

___

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getTransform](Core.Core.GameObject.md#gettransform)

#### Defined in

Core/index.d.ts:219

___

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getUpVector](Core.Core.GameObject.md#getupvector)

#### Defined in

Core/index.d.ts:399

___

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldLocation](Core.Core.GameObject.md#getworldlocation)

#### Defined in

Core/index.d.ts:243

___

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldRotation](Core.Core.GameObject.md#getworldrotation)

#### Defined in

Core/index.d.ts:268

___

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldScale](Core.Core.GameObject.md#getworldscale)

#### Defined in

Core/index.d.ts:292

___

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true为客户端

#### Inherited from

[GameObject](Core.Core.GameObject.md).[isRunningClient](Core.Core.GameObject.md#isrunningclient)

#### Defined in

Core/index.d.ts:49

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onDestroy](Core.Core.GameObject.md#ondestroy)

#### Defined in

Core/index.d.ts:17

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onStart](Core.Core.GameObject.md#onstart)

#### Defined in

Core/index.d.ts:12

___

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onUpdate](Core.Core.GameObject.md#onupdate)

#### Defined in

Core/index.d.ts:23

___

### predictedTrajectory

▸ **predictedTrajectory**(`density`, `duration`): [`Vector`](Type.Type.Vector.md)[]

**`Description`**

获取路径预测的轨迹

**`Effect`**

调用端生效

**`Precautions`**

如果返回的数组长度为1，可能投掷物被卡住了

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `density` | `number` | usage: 密度，值越大路径点越细，性能消耗越大 |
| `duration` | `number` | usage: 预测的时长 |

#### Returns

[`Vector`](Type.Type.Vector.md)[]

路径轨迹点

#### Defined in

Gameplay/index.d.ts:13456

___

### ready

▸ **ready**(): `Promise`<[`ProjectileLauncher`](Gameplay.Gameplay.ProjectileLauncher.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`ProjectileLauncher`](Gameplay.Gameplay.ProjectileLauncher.md)\>

准备好的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[ready](Core.Core.GameObject.md#ready)

#### Defined in

Core/index.d.ts:122

___

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` | usage: 是否传递给子节点 default: false |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setCollision](Core.Core.GameObject.md#setcollision)

#### Defined in

Core/index.d.ts:471

___

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setLocationAndRotation](Core.Core.GameObject.md#setlocationandrotation)

#### Defined in

Core/index.d.ts:383

___

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeLocation](Core.Core.GameObject.md#setrelativelocation)

#### Defined in

Core/index.d.ts:324

___

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeRotation](Core.Core.GameObject.md#setrelativerotation)

#### Defined in

Core/index.d.ts:350

___

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeScale](Core.Core.GameObject.md#setrelativescale)

#### Defined in

Core/index.d.ts:376

___

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setTransform](Core.Core.GameObject.md#settransform)

#### Defined in

Core/index.d.ts:225

___

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置GameObject是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态 |
| `propagateToChildren?` | `boolean` | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setVisibility](Core.Core.GameObject.md#setvisibility)

#### Defined in

Core/index.d.ts:487

___

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldLocation](Core.Core.GameObject.md#setworldlocation)

#### Defined in

Core/index.d.ts:249

___

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldRotation](Core.Core.GameObject.md#setworldrotation)

#### Defined in

Core/index.d.ts:274

___

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldScale](Core.Core.GameObject.md#setworldscale)

#### Defined in

Core/index.d.ts:298

___

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

投掷物v2实例

#### Defined in

Gameplay/index.d.ts:13433

___

### spawnProjectileInstanceLaunchToTarget

▸ **spawnProjectileInstanceLaunchToTarget**(`location`, `time?`, `speed?`): [`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md)

**`Description`**

发射子弹实例

**`Precautions`**

发射后再更新其他属性无法对本次发射的子弹产生影响；允许重复发送

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage: 发射位置 |
| `time?` | `number` | usage:最大飞行时长 default:5 |
| `speed?` | `number` | usage:初始速度 default:1000 |

#### Returns

[`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md)

投掷物v2实例

#### Defined in

Gameplay/index.d.ts:13443

___

### unbindPlayer

▸ **unbindPlayer**(): `void`

**`Description`**

解绑玩家

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13426

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

通过guid异步查找Gamobject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:物体的guid |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

Guid对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncFind](Core.Core.GameObject.md#asyncfind)

#### Defined in

Core/index.d.ts:161

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | usage:资源的GUID |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

构造的GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncSpawnGameObject](Core.Core.GameObject.md#asyncspawngameobject)

#### Defined in

Core/index.d.ts:138

___

### find

▸ `Static` **find**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过Guid查找Gameobject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:物体的Guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

Guid对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[find](Core.Core.GameObject.md#find)

#### Defined in

Core/index.d.ts:153

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | usage:自定义Tag |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array<GameObject>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[findGameObjectByTag](Core.Core.GameObject.md#findgameobjectbytag)

#### Defined in

Core/index.d.ts:577

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectByName](Core.Core.GameObject.md#getgameobjectbyname)

#### Defined in

Core/index.d.ts:516

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

返回所有查找到的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectsByName](Core.Core.GameObject.md#getgameobjectsbyname)

#### Defined in

Core/index.d.ts:509

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | usage:资源的GUID |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

构造的GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[spawnGameObject](Core.Core.GameObject.md#spawngameobject)

#### Defined in

Core/index.d.ts:130
