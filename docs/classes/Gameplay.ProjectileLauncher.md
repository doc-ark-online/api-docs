[Gameplay](../groups/Gameplay.Gameplay.md) / ProjectileLauncher

# ProjectileLauncher <Badge type="tip" text="Class" /> <Score text="ProjectileLauncher" />

投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`ProjectileLauncher`**

## Table of contents

| Properties |
| :-----|
| **[onProjectileDestroy](Gameplay.ProjectileLauncher.md#onprojectiledestroy)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 投掷物被销毁时触发绑定函数|
| **[onProjectileHit](Gameplay.ProjectileLauncher.md#onprojectilehit)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`hitActor`: `GameObject`, `normalImpulse`: [`Vector`](Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.HitResult.md)) => `void`\> <br> 投掷物击中物体时触发绑定函数|
| **[onProjectileSpawned](Gameplay.ProjectileLauncher.md#onprojectilespawned)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`spawnedInstance`: `GameObject`) => `void`\> <br> 投掷物生成实例时触发绑定函数，此回调触发时实例还没有开始移动，建议将此函数作为临时附着网格体或特效时使用|

| Accessors |
| :-----|
| **[acceleration](Gameplay.ProjectileLauncher.md#acceleration)**(): `number` <br> 加速度值，正值加速，负值减速|
| **[accelerationEnable](Gameplay.ProjectileLauncher.md#accelerationenable)**(): `boolean` <br> 投掷物是否在发射后受加速度影响|
| **[accelerationEnableDistance](Gameplay.ProjectileLauncher.md#accelerationenabledistance)**(): `number` <br> 发射后多长距离后启用加速度|
| **[accelerationEnableMode](Gameplay.ProjectileLauncher.md#accelerationenablemode)**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.ProjectileAccelerationEnableMode.md) <br> 加速度按照 时间 / 距离 后生效|
| **[accelerationEnableTime](Gameplay.ProjectileLauncher.md#accelerationenabletime)**(): `number` <br> 发射后多长时间后启用加速度|
| **[collisionLossCoefficient](Gameplay.ProjectileLauncher.md#collisionlosscoefficient)**(): `number` <br> 投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。|
| **[collisionMode](Gameplay.ProjectileLauncher.md#collisionmode)**(): [`ProjectileCollisionMode`](../enums/Gameplay.ProjectileCollisionMode.md) <br> 投掷物碰撞后如何运动：穿透/反弹|
| **[detectionRadius](Gameplay.ProjectileLauncher.md#detectionradius)**(): `number` <br> 投掷物检测碰撞的宽度|
| **[gravitationalAcceleration](Gameplay.ProjectileLauncher.md#gravitationalacceleration)**(): `number` <br> 重力值，正值重力向下，负值重力向上|
| **[gravityEnable](Gameplay.ProjectileLauncher.md#gravityenable)**(): `boolean` <br> 投掷物是否在发射后受重力影响|
| **[gravityEnableDistance](Gameplay.ProjectileLauncher.md#gravityenabledistance)**(): `number` <br> 发射后多长距离后启用重力|
| **[gravityEnableMode](Gameplay.ProjectileLauncher.md#gravityenablemode)**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.ProjectileAccelerationEnableMode.md) <br> 重力按照 时间 / 距离 后生效|
| **[gravityEnableTime](Gameplay.ProjectileLauncher.md#gravityenabletime)**(): `number` <br> 发射后多长时间后启用重力|
| **[initialSpeed](Gameplay.ProjectileLauncher.md#initialspeed)**(): `number` <br> 投掷物发射的初始速度|
| **[isAutoDestroy](Gameplay.ProjectileLauncher.md#isautodestroy)**(): `boolean` <br> 投掷物超出有效射程距离或者运动持续时间后自动销毁|
| **[launchDirection](Gameplay.ProjectileLauncher.md#launchdirection)**(): [`Rotation`](Type.Rotation.md) <br> 投掷物发射方向|
| **[lifeSpan](Gameplay.ProjectileLauncher.md#lifespan)**(): `number` <br> 投掷物运动持续时间，超出后投掷物不再运动。|
| **[maxCollisionTimes](Gameplay.ProjectileLauncher.md#maxcollisiontimes)**(): `number` <br> 允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。|
| **[maxSpeed](Gameplay.ProjectileLauncher.md#maxspeed)**(): `number` <br> 投掷物发射后的最大速度|
| **[range](Gameplay.ProjectileLauncher.md#range)**(): `number` <br> 投掷物有效射程距离，超出后投掷物不再运动。|
| **[startLocation](Gameplay.ProjectileLauncher.md#startlocation)**(): [`Vector`](Type.Vector.md) <br> 投掷物起始位置|
| **[traceLineStyle](Gameplay.ProjectileLauncher.md#tracelinestyle)**(): [`ProjectileLineStyle`](../enums/Gameplay.ProjectileLineStyle.md) <br> 轨迹风格|


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> 获取当前物体是否显示|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[bindPlayer](Gameplay.ProjectileLauncher.md#bindplayer)**(`player`: [`Player`](Gameplay.Player.md)): `boolean` <br> 绑定玩家|
| **[drawPredictedTrajectory](Gameplay.ProjectileLauncher.md#drawpredictedtrajectory)**(`density?`: `number`, `duration?`: `number`): `void` <br> 绘制路径预测的轨迹，调一次开启，掉第二次即关闭，如此循环|
| **[predictedTrajectory](Gameplay.ProjectileLauncher.md#predictedtrajectory)**(`density`: `number`, `duration`: `number`): [`Vector`](Type.Vector.md)[] <br> 获取路径预测的轨迹|
| **[spawnProjectileInstanceLaunch](Gameplay.ProjectileLauncher.md#spawnprojectileinstancelaunch)**(): [`ProjectileInst`](Gameplay.ProjectileInst.md) <br> 发射子弹实例|
| **[spawnProjectileInstanceLaunchToTarget](Gameplay.ProjectileLauncher.md#spawnprojectileinstancelaunchtotarget)**(`location`: [`Vector`](Type.Vector.md), `time?`: `number`, `speed?`: `number`): [`ProjectileInst`](Gameplay.ProjectileInst.md) <br> 发射子弹实例|
| **[unbindPlayer](Gameplay.ProjectileLauncher.md#unbindplayer)**(): `void` <br> 解绑玩家|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`name`: `string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.GameObject.md#attachcomponent)**(`component`: `Component`, `isStatic?`: `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`obj`: `GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.GameObject.md#detachcomponent)**(`component`: `string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](Type.Vector.md), `BoxExtentOuter`: [`Vector`](Type.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**(`outer?`: [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `propagateToChildren?`: `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**(`location`: [`Vector`](Type.Vector.md), `rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**(`location`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**(`scale`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**(`transform`: [`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`GUID`: `string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawn](Gameplay.GameObject.md#asyncspawn)**<`T`: extends `GameObject`<`T`\>\>(`spawnInfo`: [`SpawnInfo`](../interfaces/Type.SpawnInfo.md)): `Promise`<`T`: extends `GameObject`<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `GameObject` <br> 构造一个 GameObject|
:::


## Properties

### onProjectileDestroy <Score text="onProjectileDestroy" /> 

• **onProjectileDestroy**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

投掷物被销毁时触发绑定函数

::: warning Precautions

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

:::

___

### onProjectileHit <Score text="onProjectileHit" /> 

• **onProjectileHit**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`hitActor`: `GameObject`, `normalImpulse`: [`Vector`](Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.HitResult.md)) => `void`\>

投掷物击中物体时触发绑定函数

::: warning Precautions

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

:::

使用示例: 如下示例展示此委托的参数的含义和使用方法
```ts
projectileLauncher.onProjectileHit.add((hitActor: Core.GameObject, normalImpulse: Type.Vector, hitResult: Gameplay.HitResult) => {
    // hitActor: 投掷物击中的物体
    // normalImpulse: 碰撞法线
    // hitResult: 碰撞详细信息
})
```

___

### onProjectileSpawned <Score text="onProjectileSpawned" /> 

• **onProjectileSpawned**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`spawnedInstance`: `GameObject`) => `void`\>

投掷物生成实例时触发绑定函数，此回调触发时实例还没有开始移动，建议将此函数作为临时附着网格体或特效时使用

::: warning Precautions

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数。每个客户端执行的都是单端的，不会自动同步

:::

使用示例: 如下示例展示此委托的参数的含义和使用方法
```ts
projectile.onProjectileSpawned.add((spawnedInstance: Core.GameObject) => {
    // spawnedInstance: 生成的示例，用户可以向这个实例上设置属性和附着对象

    // 向发射的投掷物上附着一个特效或静态物体
    const decorate = Core.GameObject.spawnGameObject("<静态物体 / 特效的 GUID>");
    decorate.attachToGameObject(spawnedInstance);
})
```

## Accessors

### acceleration <Score text="acceleration" /> 

• `get` **acceleration**(): `number`

加速度值，正值加速，负值减速

#### Returns

`number`

• `set` **acceleration**(`value`): `void`

加速度值，正值加速，负值减速

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### accelerationEnable <Score text="accelerationEnable" /> 

• `get` **accelerationEnable**(): `boolean`

投掷物是否在发射后受加速度影响

#### Returns

`boolean`

• `set` **accelerationEnable**(`value`): `void`

投掷物是否在发射后受加速度影响

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### accelerationEnableDistance <Score text="accelerationEnableDistance" /> 

• `get` **accelerationEnableDistance**(): `number`

发射后多长距离后启用加速度

#### Returns

`number`

• `set` **accelerationEnableDistance**(`value`): `void`

发射后多长距离后启用加速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### accelerationEnableMode <Score text="accelerationEnableMode" /> 

• `get` **accelerationEnableMode**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.ProjectileAccelerationEnableMode.md)

加速度按照 时间 / 距离 后生效

#### Returns

[`ProjectileAccelerationEnableMode`](../enums/Gameplay.ProjectileAccelerationEnableMode.md)

• `set` **accelerationEnableMode**(`value`): `void`

加速度按照 时间 / 距离 后生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileAccelerationEnableMode`](../enums/Gameplay.ProjectileAccelerationEnableMode.md) |


___

### accelerationEnableTime <Score text="accelerationEnableTime" /> 

• `get` **accelerationEnableTime**(): `number`

发射后多长时间后启用加速度

#### Returns

`number`

• `set` **accelerationEnableTime**(`value`): `void`

发射后多长时间后启用加速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### collisionLossCoefficient <Score text="collisionLossCoefficient" /> 

• `get` **collisionLossCoefficient**(): `number`

投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。

#### Returns

`number`

• `set` **collisionLossCoefficient**(`value`): `void`

投掷物每次执行穿透后速度衰减的系数，系数为正，每次穿透后速度减少，系数为负，每次穿透后速度增加。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### collisionMode <Score text="collisionMode" /> 

• `get` **collisionMode**(): [`ProjectileCollisionMode`](../enums/Gameplay.ProjectileCollisionMode.md)

投掷物碰撞后如何运动：穿透/反弹

#### Returns

[`ProjectileCollisionMode`](../enums/Gameplay.ProjectileCollisionMode.md)

• `set` **collisionMode**(`value`): `void`

投掷物碰撞后如何运动：穿透/反弹

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileCollisionMode`](../enums/Gameplay.ProjectileCollisionMode.md) |


___

### detectionRadius <Score text="detectionRadius" /> 

• `get` **detectionRadius**(): `number`

投掷物检测碰撞的宽度

#### Returns

`number`

• `set` **detectionRadius**(`value`): `void`

投掷物检测碰撞的宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



### gravitationalAcceleration <Score text="gravitationalAcceleration" /> 

• `get` **gravitationalAcceleration**(): `number`

重力值，正值重力向下，负值重力向上

#### Returns

`number`

• `set` **gravitationalAcceleration**(`value`): `void`

重力值，正值重力向下，负值重力向上

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### gravityEnable <Score text="gravityEnable" /> 

• `get` **gravityEnable**(): `boolean`

投掷物是否在发射后受重力影响

#### Returns

`boolean`

• `set` **gravityEnable**(`value`): `void`

投掷物是否在发射后受重力影响

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### gravityEnableDistance <Score text="gravityEnableDistance" /> 

• `get` **gravityEnableDistance**(): `number`

发射后多长距离后启用重力

#### Returns

`number`

• `set` **gravityEnableDistance**(`value`): `void`

发射后多长距离后启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### gravityEnableMode <Score text="gravityEnableMode" /> 

• `get` **gravityEnableMode**(): [`ProjectileAccelerationEnableMode`](../enums/Gameplay.ProjectileAccelerationEnableMode.md)

重力按照 时间 / 距离 后生效

#### Returns

[`ProjectileAccelerationEnableMode`](../enums/Gameplay.ProjectileAccelerationEnableMode.md)

• `set` **gravityEnableMode**(`value`): `void`

重力按照 时间 / 距离 后生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileAccelerationEnableMode`](../enums/Gameplay.ProjectileAccelerationEnableMode.md) |


___

### gravityEnableTime <Score text="gravityEnableTime" /> 

• `get` **gravityEnableTime**(): `number`

发射后多长时间后启用重力

#### Returns

`number`

• `set` **gravityEnableTime**(`value`): `void`

发射后多长时间后启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



### initialSpeed <Score text="initialSpeed" /> 

• `get` **initialSpeed**(): `number`

投掷物发射的初始速度

#### Returns

`number`

• `set` **initialSpeed**(`value`): `void`

投掷物发射的初始速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### isAutoDestroy <Score text="isAutoDestroy" /> 

• `get` **isAutoDestroy**(): `boolean`

投掷物超出有效射程距离或者运动持续时间后自动销毁

#### Returns

`boolean`

• `set` **isAutoDestroy**(`value`): `void`

投掷物超出有效射程距离或者运动持续时间后自动销毁

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### launchDirection <Score text="launchDirection" /> 

• `get` **launchDirection**(): [`Rotation`](Type.Rotation.md)

投掷物发射方向

#### Returns

[`Rotation`](Type.Rotation.md)

• `set` **launchDirection**(`value`): `void`

投掷物发射方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Rotation`](Type.Rotation.md) |


___

### lifeSpan <Score text="lifeSpan" /> 

• `get` **lifeSpan**(): `number`

投掷物运动持续时间，超出后投掷物不再运动。

#### Returns

`number`

• `set` **lifeSpan**(`value`): `void`

投掷物运动持续时间，超出后投掷物不再运动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



### maxCollisionTimes <Score text="maxCollisionTimes" /> 

• `get` **maxCollisionTimes**(): `number`

允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。

#### Returns

`number`

• `set` **maxCollisionTimes**(`value`): `void`

允许投掷物执行穿透的次数，超出次数后，再次碰撞投掷物不再移动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### maxSpeed <Score text="maxSpeed" /> 

• `get` **maxSpeed**(): `number`

投掷物发射后的最大速度

#### Returns

`number`

• `set` **maxSpeed**(`value`): `void`

投掷物发射后的最大速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



### range <Score text="range" /> 

• `get` **range**(): `number`

投掷物有效射程距离，超出后投掷物不再运动。

#### Returns

`number`

• `set` **range**(`value`): `void`

投掷物有效射程距离，超出后投掷物不再运动。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



### startLocation <Score text="startLocation" /> 

• `get` **startLocation**(): [`Vector`](Type.Vector.md)

投掷物起始位置

#### Returns

[`Vector`](Type.Vector.md)

• `set` **startLocation**(`value`): `void`

投掷物起始位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector`](Type.Vector.md) |



### traceLineStyle <Score text="traceLineStyle" /> 

• `get` **traceLineStyle**(): [`ProjectileLineStyle`](../enums/Gameplay.ProjectileLineStyle.md)

轨迹风格

#### Returns

[`ProjectileLineStyle`](../enums/Gameplay.ProjectileLineStyle.md)

• `set` **traceLineStyle**(`value`): `void`

轨迹风格

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ProjectileLineStyle`](../enums/Gameplay.ProjectileLineStyle.md) |



## Methods

### bindPlayer <Score text="bindPlayer" /> 

• **bindPlayer**(`player`): `boolean` <Badge type="tip" text="other" />

绑定玩家

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Gameplay.Player.md) |  玩家类 |

#### Returns

`boolean`

true：参数 player 有效，绑定成功


### drawPredictedTrajectory <Score text="drawPredictedTrajectory" /> 

• **drawPredictedTrajectory**(`density?`, `duration?`): `void` <Badge type="tip" text="client" />

绘制路径预测的轨迹，调一次开启，掉第二次即关闭，如此循环

::: warning Precautions

如果只绘制了一个点，可能投掷物被卡住了

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `density?` | `number` |  密度，值越大路径点越密，性能消耗越大 default: 15 |
| `duration?` | `number` |  预测的时长 default: 2 |



### predictedTrajectory <Score text="predictedTrajectory" /> 

• **predictedTrajectory**(`density`, `duration`): [`Vector`](Type.Vector.md)[] 

获取路径预测的轨迹


::: warning Precautions

如果返回的数组长度为1，可能投掷物被卡住了

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `density` | `number` |  密度，值越大路径点越细，性能消耗越大 |
| `duration` | `number` |  预测的时长 |

#### Returns

[`Vector`](Type.Vector.md)[]

路径轨迹点


### spawnProjectileInstanceLaunch <Score text="spawnProjectileInstanceLaunch" /> 

• **spawnProjectileInstanceLaunch**(): [`ProjectileInst`](Gameplay.ProjectileInst.md) 

发射子弹实例

::: warning Precautions

发射后再更新其他属性无法对本次发射的子弹产生影响；允许重复发射，注意服务端发射时，返回的值是无效的

:::


#### Returns

[`ProjectileInst`](Gameplay.ProjectileInst.md)

投掷物v2实例

___

### spawnProjectileInstanceLaunchToTarget <Score text="spawnProjectileInstanceLaunchToTarget" /> 

• **spawnProjectileInstanceLaunchToTarget**(`location`, `time?`, `speed?`): [`ProjectileInst`](Gameplay.ProjectileInst.md) 

发射子弹实例

::: warning Precautions

发射后再更新其他属性无法对本次发射的子弹产生影响；允许重复发送

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) |  发射位置 |
| `time?` | `number` | 最大飞行时长 default:5 |
| `speed?` | `number` | 初始速度 default:1000 |

#### Returns

[`ProjectileInst`](Gameplay.ProjectileInst.md)

投掷物v2实例

___

### unbindPlayer <Score text="unbindPlayer" /> 

• **unbindPlayer**(): `void` <Badge type="tip" text="other" />

解绑玩家

调用端自动广播

