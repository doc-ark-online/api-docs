[Gameplay](../modules/Gameplay.Gameplay.md) / ProjectileLauncher

# ProjectileLauncher <Badge type="tip" text="Class" />

**`Description`**

投掷物 v2

**`Precautions`**

此类遵循规则：getter/setter 方法仅做简单的 get/set，不能进行其他任何类似RPC、循环、事件派发等较复杂的操作

## Hierarchy

- `GameObject`

  ↳ **`ProjectileLauncher`**

## Table of contents

| Properties |
| :-----|
| **[onProjectileDestroy](Gameplay.Gameplay.ProjectileLauncher.md#onprojectiledestroy)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 投掷物被销毁时触发绑定函数|
| **[onProjectileHit](Gameplay.Gameplay.ProjectileLauncher.md#onprojectilehit)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`hitActor`: `GameObject`, `normalImpulse`: [`Vector`](Type.Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md)) => `void`\> <br> 投掷物击中物体时触发绑定函数|
| **[onProjectileSpawned](Gameplay.Gameplay.ProjectileLauncher.md#onprojectilespawned)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`spawnedInstance`: `GameObject`) => `void`\> <br> 投掷物生成实例时触发绑定函数，此回调触发时实例还没有开始移动，建议将此函数作为临时附着网格体或特效时使用|

| Accessors |
| :-----|
| **[acceleration](Gameplay.Gameplay.ProjectileLauncher.md#acceleration)**(): `number` <br> 加速度值，正值加速，负值减速|
| **[accelerationEnable](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenable)**(): `boolean` <br> 投掷物是否在发射后受加速度影响|
| **[accelerationEnableDistance](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenabledistance)**(): `number` <br> 发射后多长距离后启用加速度|
| **[accelerationEnableMode](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenablemode)**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md) <br> 加速度按照 时间 / 距离 后生效|
| **[accelerationEnableTime](Gameplay.Gameplay.ProjectileLauncher.md#accelerationenabletime)**(): `number` <br> 发射后多长时间后启用加速度|
| **[collisionLossCoefficient](Gameplay.Gameplay.ProjectileLauncher.md#collisionlosscoefficient)**(): `number` <br> 投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。|
| **[collisionMode](Gameplay.Gameplay.ProjectileLauncher.md#collisionmode)**(): [`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md) <br> 投掷物碰撞后如何运动：穿透/反弹|
| **[detectionRadius](Gameplay.Gameplay.ProjectileLauncher.md#detectionradius)**(): `number` <br> 投掷物检测碰撞的宽度|
| **[forwardVector](Gameplay.Gameplay.ProjectileLauncher.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[gravitationalAcceleration](Gameplay.Gameplay.ProjectileLauncher.md#gravitationalacceleration)**(): `number` <br> 重力值，正值重力向下，负值重力向上|
| **[gravityEnable](Gameplay.Gameplay.ProjectileLauncher.md#gravityenable)**(): `boolean` <br> 投掷物是否在发射后受重力影响|
| **[gravityEnableDistance](Gameplay.Gameplay.ProjectileLauncher.md#gravityenabledistance)**(): `number` <br> 发射后多长距离后启用重力|
| **[gravityEnableMode](Gameplay.Gameplay.ProjectileLauncher.md#gravityenablemode)**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md) <br> 重力按照 时间 / 距离 后生效|
| **[gravityEnableTime](Gameplay.Gameplay.ProjectileLauncher.md#gravityenabletime)**(): `number` <br> 发射后多长时间后启用重力|
| **[guid](Gameplay.Gameplay.ProjectileLauncher.md#guid)**(): `string` <br> 获取对象的guid（唯一标识一个对象的字符串）。|
| **[initialSpeed](Gameplay.Gameplay.ProjectileLauncher.md#initialspeed)**(): `number` <br> 投掷物发射的初始速度|
| **[isAutoDestroy](Gameplay.Gameplay.ProjectileLauncher.md#isautodestroy)**(): `boolean` <br> 投掷物超出有效射程距离或者运动持续时间后自动销毁|
| **[launchDirection](Gameplay.Gameplay.ProjectileLauncher.md#launchdirection)**(): [`Rotation`](Type.Type.Rotation.md) <br> 投掷物发射方向|
| **[lifeSpan](Gameplay.Gameplay.ProjectileLauncher.md#lifespan)**(): `number` <br> 投掷物运动持续时间，超出后投掷物不再运动。|
| **[lockStatus](Gameplay.Gameplay.ProjectileLauncher.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[maxCollisionTimes](Gameplay.Gameplay.ProjectileLauncher.md#maxcollisiontimes)**(): `number` <br> 允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。|
| **[maxSpeed](Gameplay.Gameplay.ProjectileLauncher.md#maxspeed)**(): `number` <br> 投掷物发射后的最大速度|
| **[name](Gameplay.Gameplay.ProjectileLauncher.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Gameplay.ProjectileLauncher.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.Gameplay.ProjectileLauncher.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[range](Gameplay.Gameplay.ProjectileLauncher.md#range)**(): `number` <br> 投掷物有效射程距离，超出后投掷物不再运动。|
| **[relativeLocation](Gameplay.Gameplay.ProjectileLauncher.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Gameplay.ProjectileLauncher.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Gameplay.ProjectileLauncher.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.Gameplay.ProjectileLauncher.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[startLocation](Gameplay.Gameplay.ProjectileLauncher.md#startlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 投掷物起始位置|
| **[staticStatus](Gameplay.Gameplay.ProjectileLauncher.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.Gameplay.ProjectileLauncher.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[traceLineStyle](Gameplay.Gameplay.ProjectileLauncher.md#tracelinestyle)**(): [`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md) <br> 轨迹风格|
| **[transform](Gameplay.Gameplay.ProjectileLauncher.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Gameplay.ProjectileLauncher.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Gameplay.ProjectileLauncher.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.Gameplay.ProjectileLauncher.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.Gameplay.ProjectileLauncher.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Gameplay.ProjectileLauncher.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Gameplay.ProjectileLauncher.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Gameplay.ProjectileLauncher.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.Gameplay.ProjectileLauncher.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.Gameplay.ProjectileLauncher.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[bindPlayer](Gameplay.Gameplay.ProjectileLauncher.md#bindplayer)**([`Player`](Gameplay.Gameplay.Player.md)): `boolean` <br> 绑定玩家|
| **[clone](Gameplay.Gameplay.ProjectileLauncher.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.Gameplay.ProjectileLauncher.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Gameplay.ProjectileLauncher.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.Gameplay.ProjectileLauncher.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[drawPredictedTrajectory](Gameplay.Gameplay.ProjectileLauncher.md#drawpredictedtrajectory)**(`number`, `number`): `void` <br> 绘制路径预测的轨迹，调一次开启，掉第二次即关闭，如此循环|
| **[getBoundingBoxSize](Gameplay.Gameplay.ProjectileLauncher.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Gameplay.ProjectileLauncher.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Gameplay.ProjectileLauncher.md#getchildbyguid)**(`string`): `GameObject` <br> 根据Guid查找子物体|
| **[getChildByName](Gameplay.Gameplay.ProjectileLauncher.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Gameplay.ProjectileLauncher.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Gameplay.ProjectileLauncher.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Gameplay.ProjectileLauncher.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.Gameplay.ProjectileLauncher.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.Gameplay.ProjectileLauncher.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Gameplay.ProjectileLauncher.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Gameplay.ProjectileLauncher.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Gameplay.ProjectileLauncher.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Gameplay.ProjectileLauncher.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.Gameplay.ProjectileLauncher.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.Gameplay.ProjectileLauncher.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.Gameplay.ProjectileLauncher.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.Gameplay.ProjectileLauncher.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.Gameplay.ProjectileLauncher.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.Gameplay.ProjectileLauncher.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.Gameplay.ProjectileLauncher.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Gameplay.ProjectileLauncher.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Gameplay.ProjectileLauncher.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Gameplay.ProjectileLauncher.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.Gameplay.ProjectileLauncher.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.Gameplay.ProjectileLauncher.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Gameplay.ProjectileLauncher.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[predictedTrajectory](Gameplay.Gameplay.ProjectileLauncher.md#predictedtrajectory)**(`number`, `number`): [`Vector`](Type.Type.Vector.md)[] <br> 获取路径预测的轨迹|
| **[ready](Gameplay.Gameplay.ProjectileLauncher.md#ready)**(): `Promise`<[`ProjectileLauncher`](Gameplay.Gameplay.ProjectileLauncher.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.Gameplay.ProjectileLauncher.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.Gameplay.ProjectileLauncher.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.Gameplay.ProjectileLauncher.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Gameplay.ProjectileLauncher.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Gameplay.ProjectileLauncher.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.Gameplay.ProjectileLauncher.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.Gameplay.ProjectileLauncher.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.Gameplay.ProjectileLauncher.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Gameplay.ProjectileLauncher.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Gameplay.ProjectileLauncher.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[spawnProjectileInstanceLaunch](Gameplay.Gameplay.ProjectileLauncher.md#spawnprojectileinstancelaunch)**(): [`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md) <br> 发射子弹实例|
| **[spawnProjectileInstanceLaunchToTarget](Gameplay.Gameplay.ProjectileLauncher.md#spawnprojectileinstancelaunchtotarget)**([`Vector`](Type.Type.Vector.md), `number`, `number`): [`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md) <br> 发射子弹实例|
| **[unbindPlayer](Gameplay.Gameplay.ProjectileLauncher.md#unbindplayer)**(): `void` <br> 解绑玩家|
| **[asyncFind](Gameplay.Gameplay.ProjectileLauncher.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.Gameplay.ProjectileLauncher.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Gameplay.ProjectileLauncher.md#find)**(`string`): `GameObject` <br> 通过Guid查找GameObject|
| **[findGameObjectByTag](Gameplay.Gameplay.ProjectileLauncher.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Gameplay.ProjectileLauncher.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Gameplay.ProjectileLauncher.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.Gameplay.ProjectileLauncher.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|

## Properties

### onProjectileDestroy

• **onProjectileDestroy**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

投掷物被销毁时触发绑定函数

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

___

### onProjectileHit

• **onProjectileHit**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`hitActor`: `GameObject`, `normalImpulse`: [`Vector`](Type.Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.Gameplay.HitResult.md)) => `void`\>

**`Description`**

投掷物击中物体时触发绑定函数

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

___

### onProjectileSpawned

• **onProjectileSpawned**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`spawnedInstance`: `GameObject`) => `void`\>

**`Description`**

投掷物生成实例时触发绑定函数，此回调触发时实例还没有开始移动，建议将此函数作为临时附着网格体或特效时使用

**`Precautions`**

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

## Accessors

### acceleration

• `get` **acceleration**(): `number`

**`Description`**

加速度值，正值加速，负值减速

#### Returns

`number`

• `set` **acceleration**(`value`): `void`

**`Description`**

加速度值，正值加速，负值减速

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### accelerationEnable

• `get` **accelerationEnable**(): `boolean`

**`Description`**

投掷物是否在发射后受加速度影响

#### Returns

`boolean`

• `set` **accelerationEnable**(`value`): `void`

**`Description`**

投掷物是否在发射后受加速度影响

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### accelerationEnableDistance

• `get` **accelerationEnableDistance**(): `number`

**`Description`**

发射后多长距离后启用加速度

#### Returns

`number`

• `set` **accelerationEnableDistance**(`value`): `void`

**`Description`**

发射后多长距离后启用加速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### accelerationEnableMode

• `get` **accelerationEnableMode**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

**`Description`**

加速度按照 时间 / 距离 后生效

#### Returns

[`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

• `set` **accelerationEnableMode**(`value`): `void`

**`Description`**

加速度按照 时间 / 距离 后生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md) |

#### Returns

`void`

___

### accelerationEnableTime

• `get` **accelerationEnableTime**(): `number`

**`Description`**

发射后多长时间后启用加速度

#### Returns

`number`

• `set` **accelerationEnableTime**(`value`): `void`

**`Description`**

发射后多长时间后启用加速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### collisionLossCoefficient

• `get` **collisionLossCoefficient**(): `number`

**`Description`**

投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。

#### Returns

`number`

• `set` **collisionLossCoefficient**(`value`): `void`

**`Description`**

投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### collisionMode

• `get` **collisionMode**(): [`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md)

**`Description`**

投掷物碰撞后如何运动：穿透/反弹

#### Returns

[`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md)

• `set` **collisionMode**(`value`): `void`

**`Description`**

投掷物碰撞后如何运动：穿透/反弹

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileCollisionMode`](../enums/Gameplay.Gameplay.ProjectileCollisionMode.md) |

#### Returns

`void`

___

### detectionRadius

• `get` **detectionRadius**(): `number`

**`Description`**

投掷物检测碰撞的宽度

#### Returns

`number`

• `set` **detectionRadius**(`value`): `void`

**`Description`**

投掷物检测碰撞的宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

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

___

### gravitationalAcceleration

• `get` **gravitationalAcceleration**(): `number`

**`Description`**

重力值，正值重力向下，负值重力向上

#### Returns

`number`

• `set` **gravitationalAcceleration**(`value`): `void`

**`Description`**

重力值，正值重力向下，负值重力向上

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### gravityEnable

• `get` **gravityEnable**(): `boolean`

**`Description`**

投掷物是否在发射后受重力影响

#### Returns

`boolean`

• `set` **gravityEnable**(`value`): `void`

**`Description`**

投掷物是否在发射后受重力影响

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### gravityEnableDistance

• `get` **gravityEnableDistance**(): `number`

**`Description`**

发射后多长距离后启用重力

#### Returns

`number`

• `set` **gravityEnableDistance**(`value`): `void`

**`Description`**

发射后多长距离后启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### gravityEnableMode

• `get` **gravityEnableMode**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

**`Description`**

重力按照 时间 / 距离 后生效

#### Returns

[`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md)

• `set` **gravityEnableMode**(`value`): `void`

**`Description`**

重力按照 时间 / 距离 后生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileAccelerationEnableMode`](../enums/Gameplay.Gameplay.ProjectileAccelerationEnableMode.md) |

#### Returns

`void`

___

### gravityEnableTime

• `get` **gravityEnableTime**(): `number`

**`Description`**

发射后多长时间后启用重力

#### Returns

`number`

• `set` **gravityEnableTime**(`value`): `void`

**`Description`**

发射后多长时间后启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

___

### initialSpeed

• `get` **initialSpeed**(): `number`

**`Description`**

投掷物发射的初始速度

#### Returns

`number`

• `set` **initialSpeed**(`value`): `void`

**`Description`**

投掷物发射的初始速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### isAutoDestroy

• `get` **isAutoDestroy**(): `boolean`

**`Description`**

投掷物超出有效射程距离或者运动持续时间后自动销毁

#### Returns

`boolean`

• `set` **isAutoDestroy**(`value`): `void`

**`Description`**

投掷物超出有效射程距离或者运动持续时间后自动销毁

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### launchDirection

• `get` **launchDirection**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

投掷物发射方向

#### Returns

[`Rotation`](Type.Type.Rotation.md)

• `set` **launchDirection**(`value`): `void`

**`Description`**

投掷物发射方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Rotation`](Type.Type.Rotation.md) |

#### Returns

`void`

___

### lifeSpan

• `get` **lifeSpan**(): `number`

**`Description`**

投掷物运动持续时间，超出后投掷物不再运动。

#### Returns

`number`

• `set` **lifeSpan**(`value`): `void`

**`Description`**

投掷物运动持续时间，超出后投掷物不再运动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

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

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### maxCollisionTimes

• `get` **maxCollisionTimes**(): `number`

**`Description`**

允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。

#### Returns

`number`

• `set` **maxCollisionTimes**(`value`): `void`

**`Description`**

允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### maxSpeed

• `get` **maxSpeed**(): `number`

**`Description`**

投掷物发射后的最大速度

#### Returns

`number`

• `set` **maxSpeed**(`value`): `void`

**`Description`**

投掷物发射后的最大速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

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

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 需要设置的名称 |

#### Returns

`void`

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

___

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

| Name | Type |
| :------ | :------ |
| `newParent` | `GameObject` |

#### Returns

`void`

___

### range

• `get` **range**(): `number`

**`Description`**

投掷物有效射程距离，超出后投掷物不再运动。

#### Returns

`number`

• `set` **range**(`value`): `void`

**`Description`**

投掷物有效射程距离，超出后投掷物不再运动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

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

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

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

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

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

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 缩放 |

#### Returns

`void`

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

___

### startLocation

• `get` **startLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

投掷物起始位置

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **startLocation**(`value`): `void`

**`Description`**

投掷物起始位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

___

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

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

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | Tag |

#### Returns

`void`

___

### traceLineStyle

• `get` **traceLineStyle**(): [`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md)

**`Description`**

轨迹风格

#### Returns

[`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md)

• `set` **traceLineStyle**(`value`): `void`

**`Description`**

轨迹风格

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileLineStyle`](../enums/Gameplay.Gameplay.ProjectileLineStyle.md) |

#### Returns

`void`

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

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | 要设置的transform |

#### Returns

`void`

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

___

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

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

___

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

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

___

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

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

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
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

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
| `name` | `string` | 名字 |

#### Returns

`Promise`<`Script`\>

Script

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
| `obj` | `GameObject` | 物体 |

#### Returns

`void`

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
| `player` | [`Player`](Gameplay.Gameplay.Player.md) |  玩家类 |

#### Returns

`boolean`

true：参数 player 有效，绑定成功

___

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

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
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

___

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

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
| `density?` | `number` |  密度，值越大路径点越密，性能消耗越大 default: 15 |
| `duration?` | `number` |  预测的时长 default: 2 |

#### Returns

`void`

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
| `nonColliding?` | `boolean` | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | 如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取GameObject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | 是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | 是否递归包含子物体 default:undefined |

#### Returns

`void`

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`GameObject`

查找的物体

___

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |

#### Returns

`GameObject`

查找的物体

___

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取Children，客户端不维系父子关系。推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

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
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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
| `guid` | `string` | guid |

#### Returns

`Script`

Script

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
| `name` | `string` | 名字 |

#### Returns

`Script`

Script

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

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
| `outer?` | [`Transform`](Type.Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取GameObject是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

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
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

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

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

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
| `dt` | `number` | 与上一帧的延迟 单位:秒 |

#### Returns

`void`

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
| `density` | `number` |  密度，值越大路径点越细，性能消耗越大 |
| `duration` | `number` |  预测的时长 |

#### Returns

[`Vector`](Type.Type.Vector.md)[]

路径轨迹点

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
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) |  碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` |  是否传递给子节点 default: false |

#### Returns

`void`

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
| `location` | [`Vector`](Type.Type.Vector.md) | 世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 世界旋转 |

#### Returns

`void`

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
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

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
| `scale` | [`Vector`](Type.Type.Vector.md) | 要设置的相对缩放 |

#### Returns

`void`

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
| `transform` | [`Transform`](Type.Type.Transform.md) | transform |

#### Returns

`void`

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
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:false |

#### Returns

`void`

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
| `v` | [`Vector`](Type.Type.Vector.md) |  要设置的世界坐标 |

#### Returns

`void`

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

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
| `v` | [`Vector`](Type.Type.Vector.md) | 要设置的世界缩放 |

#### Returns

`void`

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
| `location` | [`Vector`](Type.Type.Vector.md) |  发射位置 |
| `time?` | `number` | 最大飞行时长 default:5 |
| `speed?` | `number` | 初始速度 default:1000 |

#### Returns

[`ProjectileInst`](Gameplay.Gameplay.ProjectileInst.md)

投掷物v2实例

___

### unbindPlayer

▸ **unbindPlayer**(): `void`

**`Description`**

解绑玩家

**`Effect`**

客户端调用自动广播

#### Returns

`void`

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的guid |

#### Returns

`Promise`<`GameObject`\>

Guid对应的物体

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

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

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过Guid查找GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的Guid |

#### Returns

`GameObject`

Guid对应的物体

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | 自定义Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的GameObject
